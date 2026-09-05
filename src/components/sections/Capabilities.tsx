import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Info, Target } from 'lucide-react';
import { CAPABILITY_SHOWCASES } from '../../data/companyData';
import { Section, SectionHeading } from '../ui/Section';
import { Reveal } from '../ui/Reveal';

interface CapabilitiesProps {
  variant?: 'teaser' | 'full';
  tone?: 'default' | 'muted';
}

export const Capabilities: React.FC<CapabilitiesProps> = ({
  variant = 'full',
  tone = 'default',
}) => {
  const items =
    variant === 'teaser'
      ? CAPABILITY_SHOWCASES.filter((c) => c.featured)
      : CAPABILITY_SHOWCASES;

  return (
    <Section tone={tone} id="capabilities" bloom="right">
      <SectionHeading
        eyebrow="Capabilities"
        title="Solution blueprints we can build for you"
        description="Four problems we are set up to solve, and how we would approach each one. Use them as a starting point for a conversation about yours."
      />

      {/* Honest framing, stated up front rather than buried. */}
      <Reveal delay={0.06} className="mx-auto mt-8 max-w-2xl">
        <p className="flex items-start gap-3 rounded-xl border border-line bg-surface-2 px-5 py-4 text-[0.8rem] leading-relaxed text-muted">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          <span>
            Marked entries are products we build and operate ourselves. The rest are
            representative architectures and the targets they are designed to hit — neither
            claims a result on behalf of a named client. Happy to talk through specific work
            under NDA.
          </span>
        </p>
      </Reveal>

      <div className="mt-14 space-y-6">
        {items.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.07}>
            <article className="rule-card surface-card overflow-hidden">
              <div className="grid lg:grid-cols-[1.35fr_1fr]">
                {/* Narrative */}
                <div className="border-b border-line p-7 sm:p-9 lg:border-b-0 lg:border-r">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="rounded-full bg-accent-soft px-3 py-1.5 text-[0.68rem] font-semibold text-accent">
                      {item.domain}
                    </span>
                    <span className="rounded-full bg-surface-3 px-3 py-1.5 text-[0.68rem] font-medium text-muted">
                      {item.scale}
                    </span>
                    {item.status && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/40 bg-brand-500/10 px-3 py-1.5 text-[0.68rem] font-semibold text-accent">
                        <span
                          className="signal-dot h-1.5 w-1.5 rounded-full bg-brand-500"
                          aria-hidden="true"
                        />
                        {item.status}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold leading-snug text-ink">
                    {item.title}
                  </h3>

                  <p className="mt-3.5 text-sm leading-relaxed text-muted">{item.summary}</p>

                  <dl className="mt-7 space-y-5 border-t border-line pt-6">
                    <div>
                      <dt className="eyebrow mb-2 text-subtle">The problem</dt>
                      <dd className="text-[0.85rem] leading-relaxed text-muted">
                        {item.problem}
                      </dd>
                    </div>
                    <div>
                      <dt className="eyebrow mb-2 text-subtle">How we&rsquo;d approach it</dt>
                      <dd className="text-[0.85rem] leading-relaxed text-muted">
                        {item.approach}
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* Targets & stack */}
                <div className="flex flex-col justify-between bg-surface-2 p-7 sm:p-9">
                  <div>
                    <h4 className="eyebrow mb-5 flex items-center gap-2 text-subtle">
                      <Target className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                      Design targets
                    </h4>

                    <dl className="space-y-4">
                      {item.targets.map((target) => (
                        <div key={target.label} className="border-b border-line pb-4 last:border-0">
                          <dd className="font-display text-xl font-semibold text-ink">
                            {target.value}
                          </dd>
                          <dt className="mt-0.5 text-xs text-subtle">{target.label}</dt>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="mt-8">
                    <h4 className="eyebrow mb-3 text-subtle">Typical stack</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {item.techUsed.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.65rem] text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {variant === 'teaser' && (
        <Reveal delay={0.12} className="mt-12 flex justify-center">
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:border-accent hover:text-accent"
          >
            See every blueprint
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      )}
    </Section>
  );
};
