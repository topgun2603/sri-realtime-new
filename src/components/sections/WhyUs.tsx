import React from 'react';
import { WHY_CHOOSE_US, COMPANY_INFO } from '../../data/companyData';
import { getIcon } from '../../lib/icons';
import { Section, SectionHeading } from '../ui/Section';
import { Reveal } from '../ui/Reveal';

export const WhyUs: React.FC = () => (
  <Section id="why-us" bloom="left">
    <SectionHeading
      eyebrow="Why teams choose us"
      title="Clean design and robust engineering, held to the same standard"
      description={COMPANY_INFO.aboutDetailed}
    />

    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {WHY_CHOOSE_US.map((item, i) => {
        const Icon = getIcon(item.icon);
        return (
          <Reveal key={item.title} delay={i * 0.06} className="h-full">
            <article className="rule-card surface-card group flex h-full flex-col p-7">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent-soft text-accent ring-1 ring-brand-100 transition-all duration-500 group-hover:-translate-y-0.5 dark:bg-gradient-to-br dark:from-white/14 dark:to-white/[0.03] dark:text-brand-300 dark:ring-white/12 dark:shadow-[0_8px_26px_-10px_rgb(224_36_36_/_0.55)] dark:group-hover:shadow-[0_14px_34px_-8px_rgb(224_36_36_/_0.8)]">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.description}</p>
            </article>
          </Reveal>
        );
      })}
    </div>

    {/* Vision & mission */}
    <div className="mt-8 grid gap-6 lg:grid-cols-2">
      {[
        { num: '01', label: 'Our vision', body: COMPANY_INFO.vision },
        { num: '02', label: 'Our mission', body: COMPANY_INFO.mission },
      ].map((block, i) => (
        <Reveal key={block.num} delay={0.1 + i * 0.08} className="h-full">
          <article className="surface-card flex h-full flex-col justify-between overflow-hidden bg-navy-950 p-9 text-white">
            <div className="mb-8 flex items-center gap-2.5">
              <span className="font-mono text-xs text-brand-400">{block.num}</span>
              <span className="eyebrow text-navy-300">{block.label}</span>
            </div>
            <p className="font-display text-xl leading-snug text-white sm:text-2xl">
              {block.body}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  </Section>
);
