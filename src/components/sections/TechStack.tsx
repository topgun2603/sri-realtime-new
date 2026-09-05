import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TECH_EXPERTISE } from '../../data/companyData';
import { TechCategory } from '../../types';
import { Section, SectionHeading } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { TechLogo } from '../ui/TechLogo';

const FILTERS: { id: TechCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'Everything' },
  { id: 'frontend', label: 'Frontend & Mobile' },
  { id: 'backend', label: 'Backend' },
  { id: 'databases', label: 'Data' },
  { id: 'ai', label: 'AI & ML' },
  { id: 'cloud', label: 'Cloud & DevOps' },
  { id: 'enterprise', label: 'Enterprise' },
];

interface TechStackProps {
  tone?: 'default' | 'muted' | 'dark';
}

export const TechStack: React.FC<TechStackProps> = ({ tone = 'dark' }) => {
  const [filter, setFilter] = useState<TechCategory | 'all'>('all');
  const onDark = tone === 'dark';

  const items =
    filter === 'all' ? TECH_EXPERTISE : TECH_EXPERTISE.filter((t) => t.category === filter);

  return (
    <Section tone={tone} id="technology" bloom="center">
      <SectionHeading
        onDark={onDark}
        eyebrow="Technology"
        title={
          <>
            A stack chosen for longevity,
            <br className="hidden sm:block" /> not novelty
          </>
        }
        description="We pick tools your team can hire for and your system can live on. Here is what we build with, and what each part is genuinely good at."
      />

      {/* Filters */}
      <Reveal delay={0.08} className="relative mt-12">
        <div className="flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => {
            const isActive = f.id === filter;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                aria-pressed={isActive}
                className={`relative rounded-full px-4 py-2.5 text-[0.8rem] font-medium transition-colors duration-300 ${
                  isActive
                    ? 'text-white'
                    : onDark
                      ? 'text-navy-300 hover:text-white'
                      : 'text-muted hover:text-ink'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="tech-filter"
                    className="absolute inset-0 -z-10 rounded-full bg-brand-600 shadow-[0_8px_28px_-8px_rgb(224_36_36_/_0.7)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                {!isActive && (
                  <span
                    className={`absolute inset-0 -z-10 rounded-full border ${
                      onDark ? 'border-white/12' : 'border-line'
                    }`}
                  />
                )}
                {f.label}
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Logo grid */}
      <div className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((tech, i) => (
          <Reveal key={tech.name} delay={Math.min(i * 0.03, 0.3)} className="h-full">
            <article
              className={`group flex h-full flex-col rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 ${
                onDark ? 'glass' : 'rule-card surface-card'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className={`grid h-14 w-14 shrink-0 place-items-center rounded-xl ${
                    onDark ? 'bg-white/[0.06] ring-1 ring-white/10' : 'bg-surface-3'
                  }`}
                >
                  <TechLogo
                    name={tech.name}
                    colored
                    className="h-7 w-7 grayscale opacity-70 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </span>

                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 font-mono text-[0.6rem] tracking-wide ${
                    onDark ? 'bg-white/[0.07] text-navy-300' : 'bg-surface-3 text-subtle'
                  }`}
                >
                  {tech.badge}
                </span>
              </div>

              <h3
                className={`mt-5 font-display text-lg font-semibold ${
                  onDark ? 'text-white' : 'text-ink'
                }`}
              >
                {tech.name}
              </h3>

              <p
                className={`mt-2 text-[0.82rem] leading-relaxed ${
                  onDark ? 'text-navy-200' : 'text-muted'
                }`}
              >
                {tech.description}
              </p>

              <p
                className={`mt-auto flex items-start gap-2 border-t pt-4 text-[0.74rem] ${
                  onDark ? 'border-white/10 text-navy-300' : 'border-line text-subtle'
                }`}
              >
                <span
                  className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-500"
                  aria-hidden="true"
                />
                <span>{tech.popularFor}</span>
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
