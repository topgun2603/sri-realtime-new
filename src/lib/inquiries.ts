import { getDb, isFirebaseConfigured } from './firebase';

export interface InquiryPayload {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceInterest: string;
  message: string;
}

/** How the enquiry actually reached us. */
export type DeliveryChannel = 'email' | 'stored';

export interface InquiryResult {
  ok: boolean;
  /** Present when `ok` — how it was delivered. */
  channel?: DeliveryChannel;
  /** Present when `ok` is false. */
  reason?: 'unconfigured' | 'failed' | 'invalid' | 'rate_limited';
  error?: string;
}

interface ApiResponse {
  ok?: boolean;
  reason?: InquiryResult['reason'];
  error?: string;
}

/**
 * Posts to the mail endpoint on the Express server.
 *
 * Firebase Hosting rewrites unknown paths to index.html, so on a static
 * deployment this request comes back 200 with an HTML body rather than 404.
 * The content-type check is what tells us the API is genuinely absent, so we
 * can fall through instead of reporting a delivery that never happened.
 */
async function sendViaApi(payload: InquiryPayload): Promise<InquiryResult> {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const contentType = res.headers.get('content-type') ?? '';
    if (!contentType.includes('application/json')) {
      return { ok: false, reason: 'unconfigured', error: 'No mail endpoint on this deployment.' };
    }

    const body = (await res.json()) as ApiResponse;

    if (res.ok && body.ok) return { ok: true, channel: 'email' };

    return {
      ok: false,
      reason: body.reason ?? 'failed',
      error: body.error,
    };
  } catch (error) {
    return {
      ok: false,
      reason: 'unconfigured',
      error: error instanceof Error ? error.message : 'Network error',
    };
  }
}

/**
 * Writes the enquiry to the `inquiries` collection, which the Firestore rules
 * already allow anonymous clients to create. This is the durable record — it
 * runs even when the email went out, so nothing is lost if mail bounces.
 */
async function storeInFirestore(payload: InquiryPayload): Promise<InquiryResult> {
  if (!isFirebaseConfigured) return { ok: false, reason: 'unconfigured' };

  try {
    const db = await getDb();
    if (!db) return { ok: false, reason: 'unconfigured' };

    const { addDoc, collection, serverTimestamp } = await import('firebase/firestore');

    await addDoc(collection(db, 'inquiries'), {
      ...payload,
      submittedAt: serverTimestamp(),
      source: 'website',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
    });

    return { ok: true, channel: 'stored' };
  } catch (error) {
    return {
      ok: false,
      reason: 'failed',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Delivers a consultation request, preferring email and degrading in order:
 *
 *   1. POST /api/contact  — emails org@srirealtime.com (Express server)
 *   2. Firestore          — durable record; pair with the Firestore "Trigger
 *                           Email" extension to get mail on static hosting
 *   3. caller falls back to a mailto: handoff
 */
export async function submitInquiry(payload: InquiryPayload): Promise<InquiryResult> {
  const emailed = await sendViaApi(payload);

  if (emailed.ok) {
    // Keep the record too, but never let it hold up the confirmation.
    void storeInFirestore(payload);
    return emailed;
  }

  // The server looked at it and said no — retrying elsewhere won't help.
  if (emailed.reason === 'invalid' || emailed.reason === 'rate_limited') return emailed;

  const stored = await storeInFirestore(payload);
  if (stored.ok) return stored;

  return {
    ok: false,
    reason: stored.reason ?? 'failed',
    error: stored.error ?? emailed.error,
  };
}

/** Last resort: hands the same content to the visitor's mail client. */
export function buildMailto(to: string, payload: InquiryPayload): string {
  const subject = `Consultation request — ${payload.serviceInterest}`;
  const body = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.phone && `Phone: ${payload.phone}`,
    payload.company && `Company: ${payload.company}`,
    `Interest: ${payload.serviceInterest}`,
    '',
    payload.message,
  ]
    .filter(Boolean)
    .join('\n');

  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
