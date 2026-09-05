import type { Request, Response } from 'express';
import nodemailer, { type Transporter } from 'nodemailer';

/** Where consultation requests land. Resolved per request, for the same reason. */
const contactTo = () => process.env.CONTACT_TO || 'org@srirealtime.com';

/**
 * Read lazily, not at module load: ES imports execute before server.ts gets a
 * chance to load .env, so a const here would latch "not configured" forever.
 */
/** An unfilled placeholder counts as unset, not as a credential. */
const filled = (value: string | undefined): boolean =>
  Boolean(value?.trim()) && !/^(your[_-]|my[_-]|changeme|placeholder|xxx)/i.test(value!.trim());

export const isMailConfigured = (): boolean =>
  filled(process.env.SMTP_HOST) && filled(process.env.SMTP_USER) && filled(process.env.SMTP_PASS);

let transporter: Transporter | null = null;

function getTransporter(): Transporter | null {
  if (!isMailConfigured()) return null;

  if (!transporter) {
    const port = Number(process.env.SMTP_PORT ?? 465);
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      // Implicit TLS on 465; STARTTLS is negotiated on 587.
      secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : port === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
  }

  return transporter;
}

/* ------------------------------------------------------------------ *
 * Validation
 * ------------------------------------------------------------------ */

const LIMITS = {
  name: 120,
  email: 200,
  phone: 40,
  company: 160,
  serviceInterest: 120,
  message: 5000,
} as const;

type Field = keyof typeof LIMITS;

export interface ContactPayload extends Record<Field, string> {}

/** Deliberately permissive — just enough to reject obvious rubbish. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Strips CR/LF so nothing submitted can inject extra mail headers. */
const oneLine = (value: string) => value.replace(/[\r\n]+/g, ' ').trim();

function validate(body: unknown): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  if (typeof body !== 'object' || body === null) {
    return { ok: false, error: 'Expected a JSON object.' };
  }

  const raw = body as Record<string, unknown>;
  const data = {} as ContactPayload;

  for (const field of Object.keys(LIMITS) as Field[]) {
    const value = raw[field];

    if (value !== undefined && typeof value !== 'string') {
      return { ok: false, error: `"${field}" must be a string.` };
    }

    const trimmed = (value ?? '').toString().trim();

    if (trimmed.length > LIMITS[field]) {
      return { ok: false, error: `"${field}" is longer than ${LIMITS[field]} characters.` };
    }

    data[field] = field === 'message' ? trimmed : oneLine(trimmed);
  }

  if (!data.name) return { ok: false, error: 'Please tell us your name.' };
  if (!EMAIL_RE.test(data.email)) return { ok: false, error: 'Please give a valid email address.' };
  if (!data.message) return { ok: false, error: 'Please tell us about the project.' };

  return { ok: true, data };
}

/* ------------------------------------------------------------------ *
 * Rate limiting — a public endpoint that sends mail needs a ceiling.
 * In-memory is fine for a single-process server; move to a shared store
 * if this is ever run behind more than one instance.
 * ------------------------------------------------------------------ */

const WINDOW_MS = 15 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }

  recent.push(now);
  hits.set(ip, recent);

  // Opportunistic cleanup so the map cannot grow without bound.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }

  return false;
}

/* ------------------------------------------------------------------ *
 * Message rendering
 * ------------------------------------------------------------------ */

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

function renderText(data: ContactPayload): string {
  return [
    `Name:     ${data.name}`,
    `Email:    ${data.email}`,
    data.phone && `Phone:    ${data.phone}`,
    data.company && `Company:  ${data.company}`,
    `Interest: ${data.serviceInterest || 'Not specified'}`,
    '',
    data.message,
    '',
    '—',
    'Sent from the contact form on srirealtime.com',
  ]
    .filter(Boolean)
    .join('\n');
}

function renderHtml(data: ContactPayload): string {
  const row = (label: string, value: string) =>
    value
      ? `<tr>
           <td style="padding:6px 16px 6px 0;color:#6B7C99;font-size:13px;white-space:nowrap">${label}</td>
           <td style="padding:6px 0;color:#0A1428;font-size:14px;font-weight:600">${escapeHtml(value)}</td>
         </tr>`
      : '';

  return `<!doctype html>
<html><body style="margin:0;background:#F1F5FB;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <div style="max-width:640px;margin:0 auto;padding:32px 20px">
    <div style="background:#0B1F4B;border-radius:16px 16px 0 0;padding:24px 28px">
      <div style="color:#B4CBFA;font-size:11px;letter-spacing:.18em;text-transform:uppercase">New consultation request</div>
      <div style="color:#fff;font-size:20px;font-weight:700;margin-top:6px">${escapeHtml(data.name)}</div>
    </div>
    <div style="background:#fff;border-radius:0 0 16px 16px;padding:28px">
      <table style="border-collapse:collapse;width:100%">
        ${row('Email', data.email)}
        ${row('Phone', data.phone)}
        ${row('Company', data.company)}
        ${row('Interest', data.serviceInterest)}
      </table>
      <div style="margin-top:24px;padding-top:20px;border-top:1px solid #E9EFF8">
        <div style="color:#6B7C99;font-size:11px;letter-spacing:.18em;text-transform:uppercase;margin-bottom:10px">Message</div>
        <div style="color:#0A1428;font-size:14px;line-height:1.7;white-space:pre-wrap">${escapeHtml(data.message)}</div>
      </div>
      <div style="margin-top:28px;padding-top:18px;border-top:1px solid #E9EFF8;color:#6B7C99;font-size:12px">
        Reply directly to this email to reach ${escapeHtml(data.name)}.
      </div>
    </div>
  </div>
</body></html>`;
}

/* ------------------------------------------------------------------ *
 * Handler
 * ------------------------------------------------------------------ */

export async function handleContact(req: Request, res: Response): Promise<void> {
  const mailer = getTransporter();

  if (!mailer) {
    // Say so plainly rather than reporting a success that never happened —
    // the client then falls back to Firestore or the visitor's mail app.
    res.status(503).json({
      ok: false,
      reason: 'unconfigured',
      error: 'Email delivery is not configured on this server.',
    });
    return;
  }

  const ip = (req.ip || req.socket.remoteAddress || 'unknown').toString();
  if (rateLimited(ip)) {
    res.status(429).json({
      ok: false,
      reason: 'rate_limited',
      error: 'Too many requests. Please try again shortly.',
    });
    return;
  }

  const parsed = validate(req.body);
  if (!parsed.ok) {
    res.status(400).json({ ok: false, reason: 'invalid', error: parsed.error });
    return;
  }

  const data = parsed.data;

  try {
    await mailer.sendMail({
      from: process.env.CONTACT_FROM || `"SRI REAL TIME Website" <${process.env.SMTP_USER}>`,
      to: contactTo(),
      // Reply goes to the person who filled the form, not to the SMTP account.
      replyTo: `"${data.name}" <${data.email}>`,
      // Plain hyphens keep the subject ASCII, so it stays readable in clients
      // and logs instead of arriving MIME-encoded.
      subject: `New enquiry - ${data.serviceInterest || 'General'} - ${data.name}`,
      text: renderText(data),
      html: renderHtml(data),
    });

    res.json({ ok: true });
  } catch (error) {
    console.error('[contact] send failed:', error);
    res.status(502).json({
      ok: false,
      reason: 'send_failed',
      error: 'Could not send the message right now.',
    });
  }
}
