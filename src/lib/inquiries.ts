import { getDb, isFirebaseConfigured } from './firebase';

export interface InquiryPayload {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceInterest: string;
  message: string;
}

export interface InquiryResult {
  ok: boolean;
  /** Present only when `ok` is false. */
  reason?: 'unconfigured' | 'failed';
  error?: string;
}

/**
 * Writes a consultation request to the `inquiries` collection, which the
 * Firestore rules already allow anonymous clients to create.
 */
export async function submitInquiry(payload: InquiryPayload): Promise<InquiryResult> {
  if (!isFirebaseConfigured) {
    return { ok: false, reason: 'unconfigured' };
  }

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

    return { ok: true };
  } catch (error) {
    return {
      ok: false,
      reason: 'failed',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/** Fallback path: hands the same content to the visitor's mail client. */
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
