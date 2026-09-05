import React, { useState } from 'react';
import {
  Sparkles, Loader2, BrainCircuit, ArrowRight, Bot, Terminal, Cpu, Layers,
  Database, TrendingUp, AlertTriangle,
} from 'lucide-react';
import { useSeo } from '../lib/seo';
import { PageHero } from '../components/layout/PageHero';
import { Section, SectionHeading } from '../components/ui/Section';
import { Reveal } from '../components/ui/Reveal';
import { SERVICES_DATA } from '../data/companyData';
import { AIRecommendation } from '../types';

const AI_CAPABILITIES = [
  {
    title: 'Assistants & Conversational AI',
    desc: 'Context-aware assistants for customer support, internal knowledge and lead qualification, grounded in your own content.',
    icon: Bot,
    badge: 'RAG & GenAI',
  },
  {
    title: 'Predictive Analytics & BI',
    desc: 'Models that forecast demand, churn and revenue, and flag anomalies before they become incidents.',
    icon: TrendingUp,
    badge: 'Time-series ML',
  },
  {
    title: 'Document Intelligence',
    desc: 'Extraction from invoices, receipts, contracts and IDs into structured, verifiable data.',
    icon: Terminal,
    badge: 'OCR & NLP',
  },
  {
    title: 'Custom Model Integration',
    desc: 'PyTorch and TensorFlow models deployed behind your existing Node.js or Python services.',
    icon: Cpu,
    badge: 'MLOps',
  },
  {
    title: 'Process Automation',
    desc: 'Automation that connects legacy software, email triggers and cloud databases without manual handoffs.',
    icon: Layers,
    badge: 'RPA',
  },
  {
    title: 'AI Inside ERP, CRM & SCM',
    desc: 'Scoring, automatic reordering and pipeline alerts embedded in the systems your teams already use.',
    icon: Database,
    badge: 'Enterprise',
  },
];

const WORKFLOW_STEPS = [
  'Machine / IoT data',
  'Real-time monitoring',
  'AI anomaly detection',
  'Error identification',
  'Root-cause analysis',
  'Resolution recommendation',
  'Automated maintenance workflow',
  'Technician action',
  'Verification',
  'Learning & prediction',
];

export default function AIHub() {
  useSeo({
    title: 'AI & Automation',
    description:
      'AI assistants, predictive analytics, intelligent document processing and machine workflow automation, integrated directly into enterprise ERP, CRM and SCM systems.',
    path: '/ai',
  });

  const [form, setForm] = useState({
    projectType: 'Enterprise ERP with AI assistant and document processing',
    businessGoal: 'Automate multi-location inventory and invoice processing',
    keyFeatures: 'Real-time stock alerts, AI invoice extraction, executive MIS analytics',
    techPreferences: 'React, Node.js, PostgreSQL, AWS, Gemini',
    budgetRange: 'Enterprise tier',
  });

  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<AIRecommendation | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const mfgService = SERVICES_DATA.find((s) => s.id === 'mfg-ai-workflow');

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/ai-consultant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error(`The architect service responded with ${res.status}.`);

      setRecommendation(await res.json());
    } catch (err) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Could not reach the AI architect service. Please try again.',
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full rounded-xl border border-line bg-surface-2 px-4 py-3.5 text-sm text-ink ' +
    'placeholder:text-subtle transition-colors focus:border-accent focus:outline-none';

  return (
    <>
      <PageHero
        visual="ai"
        eyebrow="AI & automation"
        title={<>Intelligence, wired into the systems you already run</>}
        description="We do not bolt a chatbot onto the side. AI goes inside the ERP, the CRM and the supply chain, where it can act on real data and real workflows."
      />

      {/* Featured module — manufacturing workflow automation */}
      {mfgService && (
        <Section tone="muted" bloom="left">
          <Reveal>
            <article className="surface-card overflow-hidden">
              <div className="border-b border-line p-8 sm:p-10">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="rounded-full bg-navy-900 px-3.5 py-1.5 text-[0.68rem] font-semibold text-white dark:bg-navy-700">
                    Flagship AI module
                  </span>
                  <span className="rounded-full bg-accent-soft px-3.5 py-1.5 text-[0.68rem] font-semibold text-accent">
                    Manufacturing
                  </span>
                </div>

                <h2 className="mt-6 max-w-3xl text-2xl font-semibold leading-snug text-ink sm:text-3xl">
                  {mfgService.title}
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                  {mfgService.fullDescription}
                </p>
              </div>

              {/* Workflow chain */}
              <div className="bg-surface-2 p-8 sm:p-10">
                <h3 className="eyebrow mb-6 text-subtle">The loop</h3>

                <ol className="flex flex-wrap items-center gap-2.5">
                  {WORKFLOW_STEPS.map((step, i) => (
                    <li key={step} className="flex items-center gap-2.5">
                      <span className="flex items-center gap-2.5 rounded-xl border border-line bg-surface px-3.5 py-2.5">
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent font-mono text-[0.6rem] font-bold text-white">
                          {i + 1}
                        </span>
                        <span className="text-[0.78rem] font-medium text-ink">{step}</span>
                      </span>
                      {i < WORKFLOW_STEPS.length - 1 && (
                        <ArrowRight
                          className="h-3.5 w-3.5 shrink-0 text-subtle"
                          aria-hidden="true"
                        />
                      )}
                    </li>
                  ))}
                </ol>

                <p className="mt-7 flex items-center gap-2 text-xs text-subtle">
                  <span className="signal-dot h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
                  Engineered for {mfgService.engineeredFor?.toLowerCase()}
                </p>
              </div>
            </article>
          </Reveal>
        </Section>
      )}

      {/* Capability grid */}
      <Section bloom="right">
        <SectionHeading
          eyebrow="Where AI earns its place"
          title="Six ways we apply it"
          description="Each of these is only worth building where it removes real manual work or catches something a person would miss. We will tell you when it doesn't."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AI_CAPABILITIES.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.06} className="h-full">
                <article className="rule-card surface-card flex h-full flex-col p-7">
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-50 text-navy-600 ring-1 ring-navy-100 dark:bg-navy-800/50 dark:text-navy-200 dark:ring-navy-700/60">
                      <Icon className="h-[22px] w-[22px]" />
                    </span>
                    <span className="rounded-full bg-surface-3 px-2.5 py-1 font-mono text-[0.62rem] text-subtle">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold leading-snug text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Interactive architect */}
      <Section tone="muted" id="architect" bloom="center">
        <SectionHeading
          eyebrow="Try it now"
          title="Get an architecture recommendation in seconds"
          description="Describe what you are trying to build. Our solution architect returns a stack, a milestone plan and a view on where automation pays off."
        />

        <Reveal delay={0.08} className="mt-14">
          <div className="surface-card overflow-hidden">
            <form onSubmit={handleGenerate} className="grid gap-5 p-8 sm:grid-cols-2 sm:p-10">
              <Field label="Project type or system scope">
                <input
                  type="text"
                  value={form.projectType}
                  onChange={update('projectType')}
                  className={inputClass}
                  placeholder="ERP, mobile app, AI assistant…"
                  required
                />
              </Field>

              <Field label="Primary business goal">
                <input
                  type="text"
                  value={form.businessGoal}
                  onChange={update('businessGoal')}
                  className={inputClass}
                  placeholder="Reduce operational delays"
                  required
                />
              </Field>

              <div className="sm:col-span-2">
                <Field label="Key features and integrations">
                  <input
                    type="text"
                    value={form.keyFeatures}
                    onChange={update('keyFeatures')}
                    className={inputClass}
                    placeholder="Barcode scanning, PDF extraction, WhatsApp assistant…"
                    required
                  />
                </Field>
              </div>

              <Field label="Preferred stack (optional)">
                <input
                  type="text"
                  value={form.techPreferences}
                  onChange={update('techPreferences')}
                  className={inputClass}
                  placeholder="React, Node.js, PostgreSQL…"
                />
              </Field>

              <Field label="Budget range (optional)">
                <input
                  type="text"
                  value={form.budgetRange}
                  onChange={update('budgetRange')}
                  className={inputClass}
                  placeholder="Enterprise tier"
                />
              </Field>

              <div className="flex flex-col items-start justify-between gap-4 border-t border-line pt-6 sm:col-span-2 sm:flex-row sm:items-center">
                <p className="font-mono text-[0.7rem] text-subtle">
                  Generated by our architecture rules, assisted by Gemini
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all duration-300 hover:bg-brand-500 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Designing architecture…
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      Generate recommendation
                    </>
                  )}
                </button>
              </div>
            </form>

            {errorMsg && (
              <div
                role="alert"
                className="flex items-start gap-3 border-t border-line bg-accent-soft px-8 py-5 text-sm text-accent sm:px-10"
              >
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{errorMsg}</span>
              </div>
            )}

            {recommendation && (
              <div className="border-t border-line bg-surface-2 p-8 sm:p-10">
                <div className="flex flex-wrap items-start justify-between gap-6">
                  <div className="max-w-xl">
                    <span className="eyebrow text-subtle">Recommended architecture</span>
                    <h3 className="mt-2.5 text-2xl font-semibold leading-snug text-ink">
                      {recommendation.recommendedArchitecture}
                    </h3>
                  </div>
                  <div className="shrink-0">
                    <span className="eyebrow text-subtle">Estimated timeline</span>
                    <div className="mt-1 font-display text-2xl font-semibold text-accent">
                      {recommendation.estimatedTimelineWeeks}
                    </div>
                  </div>
                </div>

                <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
                  {recommendation.summary}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <StackGroup
                    title="Frontend & mobile"
                    items={recommendation.recommendedTechStack.frontend}
                  />
                  <StackGroup
                    title="Backend & data"
                    items={[
                      ...recommendation.recommendedTechStack.backend,
                      ...recommendation.recommendedTechStack.database,
                    ]}
                  />
                  <StackGroup
                    title="AI & cloud"
                    items={[
                      ...recommendation.recommendedTechStack.aiAutomation,
                      ...recommendation.recommendedTechStack.cloud,
                    ]}
                  />
                </div>

                {recommendation.milestones?.length > 0 && (
                  <div className="mt-8">
                    <h4 className="eyebrow mb-4 text-subtle">Milestone plan</h4>
                    <ol className="space-y-2.5">
                      {recommendation.milestones.map((m, i) => (
                        <li
                          key={i}
                          className="flex flex-col gap-2 rounded-xl border border-line bg-surface p-4 sm:flex-row sm:items-center sm:justify-between"
                        >
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-ink">{m.phase}</p>
                            <p className="mt-0.5 text-xs text-subtle">{m.deliverables}</p>
                          </div>
                          <span className="shrink-0 rounded-full bg-surface-3 px-3 py-1.5 font-mono text-[0.68rem] text-muted">
                            {m.duration}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                <div className="mt-8 flex items-start gap-3.5 rounded-xl border-l-2 border-accent bg-surface p-5">
                  <BrainCircuit className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <span className="block text-sm font-semibold text-ink">
                      Where automation pays off
                    </span>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {recommendation.aiInsight}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </Section>
    </>
  );
}

const Field: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <label className="block">
    <span className="eyebrow mb-2.5 block text-subtle">{label}</span>
    {children}
  </label>
);

const StackGroup: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <div className="rounded-xl border border-line bg-surface p-5">
    <h4 className="eyebrow mb-3 text-subtle">{title}</h4>
    <div className="flex flex-wrap gap-1.5">
      {items.map((item, i) => (
        <span
          key={`${item}-${i}`}
          className="rounded-full bg-surface-3 px-2.5 py-1 font-mono text-[0.65rem] text-muted"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);
