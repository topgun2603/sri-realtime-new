import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check, Info } from 'lucide-react';
import { useSeo } from '../lib/seo';
import { PageHero } from '../components/layout/PageHero';
import { Section } from '../components/ui/Section';
import { Reveal } from '../components/ui/Reveal';

/*
 * Deliberately no pricing anywhere in this file. Commercials belong in the
 * discovery conversation, not on a public page — and anything shipped here
 * would sit in the JS bundle for anyone to read, whether or not it is drawn
 * on screen. Effort is expressed only in weeks.
 */
const APP_TYPES = [
  { id: 'mobile', label: 'Mobile app (iOS / Android)', baseWeeks: 6 },
  { id: 'web', label: 'Custom enterprise web app', baseWeeks: 5 },
  { id: 'erp', label: 'Full enterprise ERP', baseWeeks: 10 },
  { id: 'crm', label: 'CRM & sales pipeline', baseWeeks: 7 },
  { id: 'inventory', label: 'Inventory & supply chain', baseWeeks: 8 },
  { id: 'ai_module', label: 'AI & process automation', baseWeeks: 4 },
];

const FEATURES = [
  { id: 'mis_dashboard', label: 'MIS analytics dashboard', weeks: 1.5 },
  { id: 'ai_chatbot', label: 'AI assistant (RAG)', weeks: 2 },
  { id: 'ocr_extraction', label: 'Document OCR extraction', weeks: 2 },
  { id: 'warehouse_sync', label: 'Multi-warehouse barcode sync', weeks: 1.5 },
  { id: 'role_permissions', label: 'Role-based access control', weeks: 1 },
  { id: 'payment_gateway', label: 'Multi-currency checkout', weeks: 1 },
  { id: 'offline_sync', label: 'Offline-first data engine', weeks: 1.5 },
  { id: 'cloud_devops', label: 'CI/CD & zero-downtime deploys', weeks: 1 },
];

const SUPPORT_TIERS = [
  { id: 'standard', label: 'Standard launch', desc: 'Deployment plus 30 days of support', weeks: 0 },
  { id: 'priority', label: 'Priority SLA', desc: 'Monitored infrastructure and a 24/7 line', weeks: 0.5 },
  { id: 'managed', label: 'Fully managed', desc: 'Dedicated engineer and monthly iterations', weeks: 1 },
];

export default function Estimator() {
  useSeo({
    title: 'Scope Estimator',
    description:
      'Estimate the delivery timeline for your enterprise system, AI module or mobile and web product, then take the specification straight into a consultation.',
    path: '/estimator',
  });

  const navigate = useNavigate();
  const [appType, setAppType] = useState('erp');
  const [selected, setSelected] = useState<string[]>([
    'mis_dashboard',
    'ai_chatbot',
    'role_permissions',
  ]);
  const [support, setSupport] = useState('priority');

  const estimate = useMemo(() => {
    const app = APP_TYPES.find((a) => a.id === appType) ?? APP_TYPES[2];
    const tier = SUPPORT_TIERS.find((t) => t.id === support) ?? SUPPORT_TIERS[1];

    const chosen = FEATURES.filter((f) => selected.includes(f.id));
    const addedWeeks = chosen.reduce((sum, f) => sum + f.weeks, 0);
    const weeks = Math.round((app.baseWeeks + addedWeeks + tier.weeks) * 10) / 10;

    return { app, tier, chosen, weeks };
  }, [appType, selected, support]);

  const toggleFeature = (id: string) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));

  const handleBook = () => {
    const featureList = estimate.chosen.map((f) => f.label).join(', ') || 'no add-on modules';
    const notes = [
      'Scope from the estimator',
      `• Solution: ${estimate.app.label}`,
      `• Modules: ${featureList}`,
      `• Support: ${estimate.tier.label}`,
      `• Indicative timeline: ~${estimate.weeks} weeks`,
    ].join('\n');

    navigate('/contact', { state: { notes } });
  };

  return (
    <>
      <PageHero
        visual="estimator"
        eyebrow="Scope estimator"
        title={<>Size your project before you talk to anyone</>}
        description="Choose a solution, add the modules you need, and see a realistic delivery timeline. Then send the specification straight to us and we’ll take it from there."
      />

      <Section bloom="right">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          {/* Controls */}
          <div className="space-y-6">
            <Reveal>
              <fieldset className="surface-card p-7">
                <legend className="eyebrow mb-5 text-subtle">01 — Solution category</legend>
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {APP_TYPES.map((type) => {
                    const active = appType === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setAppType(type.id)}
                        aria-pressed={active}
                        className={`rounded-xl border p-4 text-left transition-all duration-300 ${
                          active
                            ? 'border-accent bg-accent-soft'
                            : 'border-line bg-surface-2 hover:border-line-strong'
                        }`}
                      >
                        <span
                          className={`block text-sm font-semibold ${
                            active ? 'text-accent' : 'text-ink'
                          }`}
                        >
                          {type.label}
                        </span>
                        <span className="mt-1 block font-mono text-[0.68rem] text-subtle">
                          from ~{type.baseWeeks} weeks
                        </span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            </Reveal>

            <Reveal delay={0.06}>
              <fieldset className="surface-card p-7">
                <legend className="eyebrow mb-5 text-subtle">02 — Modules & extensions</legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {FEATURES.map((feature) => {
                    const active = selected.includes(feature.id);
                    return (
                      <button
                        key={feature.id}
                        type="button"
                        onClick={() => toggleFeature(feature.id)}
                        role="checkbox"
                        aria-checked={active}
                        className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-left transition-all duration-300 ${
                          active
                            ? 'border-accent bg-accent-soft'
                            : 'border-line bg-surface-2 hover:border-line-strong'
                        }`}
                      >
                        <span className="flex min-w-0 items-center gap-3">
                          <span
                            className={`grid h-[18px] w-[18px] shrink-0 place-items-center rounded-[6px] border transition-colors ${
                              active ? 'border-accent bg-accent text-white' : 'border-line-strong'
                            }`}
                            aria-hidden="true"
                          >
                            {active && <Check className="h-3 w-3" />}
                          </span>
                          <span
                            className={`truncate text-[0.82rem] font-medium ${
                              active ? 'text-accent' : 'text-ink'
                            }`}
                          >
                            {feature.label}
                          </span>
                        </span>
                        <span className="shrink-0 font-mono text-[0.66rem] text-subtle">
                          +{feature.weeks}w
                        </span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            </Reveal>

            <Reveal delay={0.12}>
              <fieldset className="surface-card p-7">
                <legend className="eyebrow mb-5 text-subtle">03 — Support package</legend>
                <div className="grid gap-3 sm:grid-cols-3">
                  {SUPPORT_TIERS.map((tier) => {
                    const active = support === tier.id;
                    return (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setSupport(tier.id)}
                        aria-pressed={active}
                        className={`rounded-xl border p-4 text-left transition-all duration-300 ${
                          active
                            ? 'border-accent bg-accent-soft'
                            : 'border-line bg-surface-2 hover:border-line-strong'
                        }`}
                      >
                        <span
                          className={`block text-sm font-semibold ${
                            active ? 'text-accent' : 'text-ink'
                          }`}
                        >
                          {tier.label}
                        </span>
                        <span className="mt-1 block text-[0.72rem] leading-snug text-subtle">
                          {tier.desc}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            </Reveal>
          </div>

          {/* Summary */}
          <Reveal delay={0.1}>
            <div className="surface-card sticky top-24 overflow-hidden">
              <div className="border-b border-line bg-navy-950 p-7 text-white">
                <span className="eyebrow text-navy-300">Indicative estimate</span>

                <div className="mt-5">
                  <div className="font-display text-5xl font-semibold tracking-tight">
                    ~{estimate.weeks}
                    <span className="ml-2 text-base font-medium text-navy-300">weeks</span>
                  </div>
                </div>

                <p className="mt-5 border-t border-white/10 pt-5 text-xs leading-relaxed text-navy-300">
                  Discovery, design, build, QA and launch — end to end.
                </p>
              </div>

              <dl className="space-y-3 p-7 text-sm">
                <Row label="Solution" value={estimate.app.label} />
                <Row label="Modules" value={`${estimate.chosen.length} selected`} />
                <Row label="Support" value={estimate.tier.label} />
              </dl>

              <div className="border-t border-line p-7 pt-6">
                <button
                  type="button"
                  onClick={handleBook}
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all duration-300 hover:bg-brand-500 active:scale-[0.98]"
                >
                  Send this scope to us
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <p className="mt-5 flex items-start gap-2.5 text-[0.72rem] leading-relaxed text-subtle">
                  <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    A planning estimate, not a quote. We price each engagement against its
                    agreed scope, and talk commercials with you directly after the discovery
                    workshop.
                  </span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

const Row: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex items-start justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0">
    <dt className="shrink-0 text-subtle">{label}</dt>
    <dd className="text-right font-medium text-ink">{value}</dd>
  </div>
);
