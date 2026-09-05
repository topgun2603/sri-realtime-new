import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { SERVICES_DATA } from '../../data/companyData';
import { ServiceCategory, ServiceItem } from '../../types';
import { getIcon } from '../../lib/icons';
import { Section, SectionHeading } from '../ui/Section';
import { Reveal } from '../ui/Reveal';

const CATEGORIES: {
  id: ServiceCategory;
  num: string;
  label: string;
  blurb: string;
}[] = [
  {
    id: 'enterprise',
    num: '01',
    label: 'Enterprise Systems',
    blurb: 'The operational backbone — ERP, CRM, SCM, inventory, MIS and commerce.',
  },
  {
    id: 'ai',
    num: '02',
    label: 'AI & Automation',
    blurb: 'Assistants, prediction and document intelligence wired into real workflows.',
  },
  {
    id: 'digital',
    num: '03',
    label: 'Digital Products',
    blurb: 'Mobile apps, web platforms, APIs and the cloud infrastructure beneath them.',
  },
];

export const ServiceCard: React.FC<{ service: ServiceItem; index?: number }> = ({
  service,
  index = 0,
}) => {
  const Icon = getIcon(service.iconName);

  return (
    <Reveal delay={index * 0.06} className="h-full">
      <article
        id={service.id}
        className="rule-card surface-card group flex h-full scroll-mt-28 flex-col p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <span className="grid h-13 w-13 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-600 ring-1 ring-navy-100 transition-all duration-500 group-hover:-translate-y-0.5 dark:bg-gradient-to-br dark:from-white/14 dark:to-white/[0.03] dark:text-brand-300 dark:ring-white/12 dark:shadow-[0_8px_26px_-10px_rgb(224_36_36_/_0.55)] dark:group-hover:shadow-[0_14px_34px_-8px_rgb(224_36_36_/_0.8)]">
            <Icon className="h-[22px] w-[22px]" />
          </span>
          <span className="eyebrow pt-1 text-subtle">{service.id}</span>
        </div>

        <h3 className="mt-6 text-xl font-semibold leading-snug text-ink">{service.title}</h3>

        <p className="mt-3 text-sm leading-relaxed text-muted">{service.shortDescription}</p>

        <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
          {service.keyFeatures.slice(0, 4).map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-[0.82rem] text-muted">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {service.engineeredFor && (
          <div className="mt-auto pt-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-surface-3 px-3.5 py-2 text-[0.7rem] font-medium text-muted">
              <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
              Engineered for {service.engineeredFor.toLowerCase()}
            </span>
          </div>
        )}
      </article>
    </Reveal>
  );
};

interface ServicesProps {
  /** Home shows a condensed set; the services page shows everything with tabs. */
  variant?: 'teaser' | 'full';
  initialCategory?: ServiceCategory;
}

export const Services: React.FC<ServicesProps> = ({
  variant = 'full',
  initialCategory = 'enterprise',
}) => {
  const [active, setActive] = useState<ServiceCategory>(initialCategory);

  if (variant === 'teaser') {
    // Two representative services from each discipline.
    const featured = CATEGORIES.flatMap((cat) =>
      SERVICES_DATA.filter((s) => s.category === cat.id).slice(0, 2),
    );

    return (
      <Section tone="muted" id="services" bloom="right">
        <SectionHeading
          eyebrow="What we build"
          title="Three disciplines, one delivery team"
          description="Enterprise platforms, applied AI and digital products — architected together so they behave like one system rather than three integrations."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:border-accent hover:text-accent"
          >
            See all {SERVICES_DATA.length} services
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </Section>
    );
  }

  const activeCategory = CATEGORIES.find((c) => c.id === active)!;
  const services = SERVICES_DATA.filter((s) => s.category === active);

  return (
    <Section id="services" bloom="right">
      <SectionHeading
        eyebrow="Services"
        title="Everything we design, build and run"
        description="Pick a discipline. Each one is delivered by the same team, on the same architecture, with the same process behind it."
      />

      {/* Category switcher */}
      <Reveal delay={0.08} className="mt-14">
        <div className="flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = cat.id === active;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActive(cat.id)}
                aria-pressed={isActive}
                className={`relative overflow-hidden rounded-full px-6 py-3.5 text-sm font-medium transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-muted hover:text-ink'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="service-tab"
                    className="absolute inset-0 -z-10 rounded-full bg-navy-900 dark:bg-navy-700"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                {!isActive && (
                  <span className="absolute inset-0 -z-10 rounded-full border border-line" />
                )}
                <span className="font-mono text-[0.68rem] opacity-60">{cat.num}</span>
                <span className="ml-2">{cat.label}</span>
              </button>
            );
          })}
        </div>

        <p className="mx-auto mt-6 max-w-xl text-center text-sm text-muted">
          {activeCategory.blurb}
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>
    </Section>
  );
};
