import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Package, Dot } from 'lucide-react';
import { DELIVERY_PROCESS } from '../../data/companyData';
import { Section, SectionHeading } from '../ui/Section';
import { Reveal } from '../ui/Reveal';

/**
 * Condensed rail of the delivery stages, for the home page. The full
 * stage-by-stage breakdown lives on /process.
 */
export const ProcessCompact: React.FC = () => (
  <Section tone="muted" id="process" bloom="left">
    <SectionHeading
      eyebrow="How we deliver"
      title="Seven stages, no surprises"
      description="Every engagement runs the same way. You always know which stage you are in, how long it runs and what comes out of it."
    />

    <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {DELIVERY_PROCESS.map((step, i) => (
        <Reveal key={step.stepNumber} delay={i * 0.05} className="h-full">
          <article className="rule-card surface-card flex h-full flex-col p-6">
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-mono text-2xl font-semibold text-accent">
                {step.stepNumber}
              </span>
              <span className="text-[0.68rem] font-medium text-subtle">{step.duration}</span>
            </div>
            <h3 className="mt-4 text-base font-semibold leading-snug text-ink">{step.title}</h3>
            <p className="mt-2 text-[0.8rem] leading-relaxed text-muted">{step.description}</p>
          </article>
        </Reveal>
      ))}

      <Reveal delay={0.35} className="h-full">
        <Link
          to="/process"
          className="group flex h-full flex-col justify-between rounded-[1.25rem] border border-dashed border-line-strong p-6 transition-colors duration-300 hover:border-accent hover:bg-accent-soft"
        >
          <span className="eyebrow text-subtle">Full breakdown</span>
          <span className="mt-4 flex items-center gap-2 font-display text-base font-semibold text-ink transition-colors group-hover:text-accent">
            Deliverables for every stage
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Link>
      </Reveal>
    </div>
  </Section>
);

interface ProcessProps {
  tone?: 'default' | 'muted';
}

export const Process: React.FC<ProcessProps> = ({ tone = 'muted' }) => (
  <Section tone={tone} id="process" bloom="left">
    <SectionHeading
      eyebrow="How we deliver"
      title="Seven stages, no surprises"
      description="Every engagement runs the same way — from the first workshop to the support desk after launch. You always know which stage you are in and what comes out of it."
    />

    <div className="relative mt-16">
      {/* Timeline rail */}
      <div
        className="absolute left-[22px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-navy-300 to-transparent dark:via-navy-600 sm:left-[26px]"
        aria-hidden="true"
      />

      <ol className="space-y-5">
        {DELIVERY_PROCESS.map((step, i) => (
          <li key={step.stepNumber}>
            <Reveal delay={i * 0.05}>
              <div className="flex gap-5 sm:gap-7">
                {/* Node */}
                <div className="relative z-10 shrink-0 pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface font-mono text-xs font-semibold text-accent shadow-[var(--shadow-card)] sm:h-[54px] sm:w-[54px] sm:text-sm">
                    {step.stepNumber}
                  </span>
                </div>

                {/* Card */}
                <article className="rule-card surface-card min-w-0 flex-1 p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-ink sm:text-xl">{step.title}</h3>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-surface-3 px-3 py-1.5 text-[0.7rem] font-medium text-muted">
                      <Clock className="h-3 w-3" aria-hidden="true" />
                      {step.duration}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>

                  <div className="mt-6 grid gap-5 border-t border-line pt-5 sm:grid-cols-2">
                    <div>
                      <h4 className="eyebrow mb-2.5 text-subtle">Key activities</h4>
                      <ul className="space-y-1.5">
                        {step.keyActivities.map((activity) => (
                          <li
                            key={activity}
                            className="flex items-start gap-1 text-[0.82rem] text-muted"
                          >
                            <Dot className="-ml-1.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="eyebrow mb-2.5 text-subtle">What you receive</h4>
                      <p className="flex items-start gap-2 text-[0.82rem] leading-relaxed text-muted">
                        <Package className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                        <span>{step.deliverables}</span>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  </Section>
);
