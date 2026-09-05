import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck, Loader2, AlertTriangle,
} from 'lucide-react';
import { useSeo } from '../lib/seo';
import { PageHero } from '../components/layout/PageHero';
import { Section } from '../components/ui/Section';
import { Reveal } from '../components/ui/Reveal';
import { COMPANY_INFO } from '../data/companyData';
import { submitInquiry, buildMailto, InquiryPayload } from '../lib/inquiries';

const SERVICE_OPTIONS = [
  'Enterprise ERP / business system',
  'Management information system (MIS)',
  'Inventory & supply chain',
  'E-commerce & CRM',
  'AI assistant & automation',
  'Mobile app (iOS / Android)',
  'Website & custom web app',
  'Cloud, API & DevOps',
  'Something else',
];

type Status = 'idle' | 'sending' | 'sent' | 'fallback' | 'rejected';

export default function Contact() {
  useSeo({
    title: 'Contact',
    description:
      'Start a conversation with SRI REAL TIME. Tell us what you are trying to build and we will come back with an architecture, a delivery plan and an honest estimate.',
    path: '/contact',
  });

  // The estimator hands its specification over through route state.
  const location = useLocation();
  const prefilledNotes = (location.state as { notes?: string } | null)?.notes ?? '';

  const [form, setForm] = useState<InquiryPayload>({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: SERVICE_OPTIONS[0],
    message: prefilledNotes,
  });

  const [status, setStatus] = useState<Status>('idle');
  const [errorDetail, setErrorDetail] = useState('');

  const set =
    (key: keyof InquiryPayload) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorDetail('');

    const result = await submitInquiry(form);

    if (result.ok) {
      setStatus('sent');
      return;
    }

    // The server read it and refused — a mail client won't fix bad input or a
    // rate limit, so show what it said and let them correct it.
    if (result.reason === 'invalid' || result.reason === 'rate_limited') {
      setStatus('rejected');
      setErrorDetail(result.error ?? 'That could not be sent. Please check the form and retry.');
      return;
    }

    // Nothing could take it — offer the visitor's own mail client rather than
    // pretending the message was delivered.
    setStatus('fallback');
    setErrorDetail(result.reason === 'unconfigured' ? '' : (result.error ?? ''));
  };

  const inputClass =
    'w-full rounded-xl border border-line bg-surface-2 px-4 py-3.5 text-sm text-ink ' +
    'placeholder:text-subtle transition-colors focus:border-accent focus:outline-none';

  return (
    <>
      <PageHero
        visual="contact"
        eyebrow="Contact"
        title={<>Tell us what you&rsquo;re trying to fix</>}
        description="Send us the problem, not a specification. We will come back with an architecture, a delivery plan and an honest view of what it takes to build."
      />

      <Section bloom="left">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:items-start">
          {/* Details */}
          <div className="space-y-6">
            <Reveal>
              <div className="surface-card p-8">
                <h2 className="font-display text-lg font-semibold text-ink">Reach us directly</h2>

                <div className="mt-7 space-y-6">
                  <ContactRow icon={Mail} label="Email">
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="font-medium text-ink underline-offset-4 transition-colors hover:text-accent hover:underline"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </ContactRow>

                  {COMPANY_INFO.offices.map((office) => (
                    <ContactRow key={office.city} icon={MapPin} label="Office">
                      <span className="font-medium text-ink">
                        {office.city}, {office.region}
                      </span>
                      <span className="mt-0.5 block text-xs text-subtle">{office.role}</span>
                    </ContactRow>
                  ))}

                  <ContactRow icon={Clock} label="Response time">
                    <span className="font-medium text-ink">{COMPANY_INFO.responseWindow}</span>
                  </ContactRow>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="surface-card flex items-start gap-4 p-7">
                <ShieldCheck className="mt-0.5 h-8 w-8 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-semibold text-ink">Covered by NDA</h3>
                  <p className="mt-1.5 text-[0.82rem] leading-relaxed text-muted">
                    Anything you share during scoping stays confidential. We will sign your NDA
                    before the first workshop if you prefer.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.06}>
            <div className="surface-card p-8 sm:p-10">
              {status === 'sent' ? (
                <div className="py-10 text-center">
                  <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent-soft text-accent">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <h2 className="mt-6 font-display text-2xl font-semibold text-ink">
                    Request received
                  </h2>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
                    Thanks — we have your details. Someone from the team will reply to{' '}
                    <span className="font-medium text-ink">{form.email}</span>{' '}
                    {COMPANY_INFO.responseWindow.toLowerCase()}.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-8 rounded-full border border-line-strong px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-surface-3"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h2 className="font-display text-2xl font-semibold text-ink">
                      Request a consultation
                    </h2>
                    <p className="mt-1.5 text-sm text-muted">
                      A free scoping conversation — no commitment either way.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Your name" required>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={set('name')}
                        placeholder="Full name"
                        autoComplete="name"
                        className={inputClass}
                      />
                    </Field>

                    <Field label="Work email" required>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={set('email')}
                        placeholder="you@company.com"
                        autoComplete="email"
                        className={inputClass}
                      />
                    </Field>

                    <Field label="Phone">
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={set('phone')}
                        placeholder="Optional"
                        autoComplete="tel"
                        className={inputClass}
                      />
                    </Field>

                    <Field label="Company">
                      <input
                        type="text"
                        value={form.company}
                        onChange={set('company')}
                        placeholder="Optional"
                        autoComplete="organization"
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  <Field label="What do you need">
                    <select
                      value={form.serviceInterest}
                      onChange={set('serviceInterest')}
                      className={inputClass}
                    >
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Tell us about the project" required>
                    <textarea
                      rows={6}
                      required
                      value={form.message}
                      onChange={set('message')}
                      placeholder="What is not working today, what you have tried, and any timeline you are working to…"
                      className={inputClass}
                    />
                  </Field>

                  {status === 'rejected' && (
                    <div
                      role="alert"
                      className="flex items-start gap-3 rounded-xl border border-line bg-accent-soft p-5 text-sm"
                    >
                      <AlertTriangle
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <p className="text-muted">{errorDetail}</p>
                    </div>
                  )}

                  {status === 'fallback' && (
                    <div
                      role="alert"
                      className="flex items-start gap-3 rounded-xl border border-line bg-accent-soft p-5 text-sm"
                    >
                      <AlertTriangle
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="font-medium text-ink">
                          We couldn&rsquo;t submit that from the browser.
                        </p>
                        <p className="mt-1 text-muted">
                          Nothing is lost — open it in your email client instead and it will be
                          sent with everything you typed.
                        </p>
                        <a
                          href={buildMailto(COMPANY_INFO.email, form)}
                          className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-brand-500"
                        >
                          <Mail className="h-3.5 w-3.5" />
                          Email it to {COMPANY_INFO.email}
                        </a>
                        {errorDetail && (
                          <p className="mt-3 font-mono text-[0.68rem] text-subtle">
                            {errorDetail}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all duration-300 hover:bg-brand-500 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send request
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

const Field: React.FC<{ label: string; required?: boolean; children: React.ReactNode }> = ({
  label,
  required,
  children,
}) => (
  <label className="block">
    <span className="eyebrow mb-2.5 block text-subtle">
      {label}
      {required && <span className="ml-1 text-accent">*</span>}
    </span>
    {children}
  </label>
);

const ContactRow: React.FC<{
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}> = ({ icon: Icon, label, children }) => (
  <div className="flex items-start gap-4">
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
      <Icon className="h-[18px] w-[18px]" />
    </span>
    <div className="min-w-0">
      <span className="eyebrow block text-subtle">{label}</span>
      <div className="mt-1 text-sm">{children}</div>
    </div>
  </div>
);
