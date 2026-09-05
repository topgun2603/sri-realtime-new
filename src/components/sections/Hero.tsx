import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight, PlayCircle, Workflow, BrainCircuit, ShieldCheck, Plug,
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { MARQUEE_TECH } from '../../lib/techLogos';
import { HeroVisual } from '../ui/HeroVisual';
import { TechLogo } from '../ui/TechLogo';
import { Counter } from '../ui/Counter';
import { useMotionEnabled } from '../../hooks/useMotionEnabled';

const PILLARS = [
  {
    icon: Workflow,
    title: 'Automate Operations',
    body: 'Replace manual handoffs and spreadsheets with workflows that run themselves.',
    to: '/services',
  },
  {
    icon: BrainCircuit,
    title: 'Decide With Data',
    body: 'AI models that turn your operational history into decisions you can act on.',
    to: '/ai',
  },
  {
    icon: ShieldCheck,
    title: 'Built to Hold',
    body: 'Enterprise security, role-based access and infrastructure that stays up.',
    to: '/technology',
  },
  {
    icon: Plug,
    title: 'Connects to Everything',
    body: 'ERP, CRM, SAP, payment rails and the tools your team already lives in.',
    to: '/technology',
  },
];

export const Hero: React.FC = () => {
  const animate = useMotionEnabled();

  const rise = (delay: number) =>
    animate
      ? {
          initial: { opacity: 0, y: 26 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
        }
      : {};

  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pt-[72px] text-white">
      {/* Ambient field */}
      <div className="pointer-events-none absolute inset-0 grid-field" aria-hidden="true" />
      <div className="grain pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="spotlight spotlight-deep aurora -left-40 -top-40 h-[42rem] w-[42rem]"
        aria-hidden="true"
      />
      <div
        className="spotlight spotlight-red aurora -right-32 top-10 h-[34rem] w-[34rem]"
        style={{ animationDelay: '-9s' }}
        aria-hidden="true"
      />
      <div
        className="spotlight spotlight-blue aurora bottom-0 left-1/3 h-[30rem] w-[30rem]"
        style={{ animationDelay: '-16s' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:px-10 lg:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-6">
          {/* Copy */}
          <div className="max-w-2xl">
            <motion.div
              {...rise(0)}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 backdrop-blur-sm"
            >
              <span className="signal-dot h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
              <span className="eyebrow text-navy-100">
                Enterprise systems &middot; AI automation
              </span>
            </motion.div>

            <motion.h1 {...rise(0.09)} className="display-xl mt-7 font-semibold">
              Build the future
              <br />
              of your{' '}
              <span className="relative inline-block whitespace-nowrap">
                <span className="text-gradient-brand">operations.</span>
                <span
                  className="rule-draw absolute -bottom-2 left-0 h-[5px] w-full rounded-full bg-gradient-to-r from-brand-500 to-transparent"
                  aria-hidden="true"
                />
              </span>
            </motion.h1>

            <motion.p
              {...rise(0.17)}
              className="mt-9 max-w-xl text-base leading-relaxed text-navy-200 sm:text-lg"
            >
              SRI REAL TIME designs, builds and runs the systems businesses depend on — ERP,
              CRM, supply chain, inventory and MIS — with AI woven through them and mobile and
              web products on top.
            </motion.p>

            <motion.div {...rise(0.25)} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_40px_-8px_rgb(224_36_36_/_0.65)] transition-all duration-300 hover:bg-brand-500 hover:shadow-[0_14px_50px_-8px_rgb(224_36_36_/_0.85)] active:scale-[0.98]"
              >
                Get started
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/estimator"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/45 hover:bg-white/10"
              >
                <PlayCircle className="h-[18px] w-[18px] text-brand-400" />
                Estimate your scope
              </Link>
            </motion.div>

            {/* Inline stat row */}
            <motion.div
              {...rise(0.33)}
              className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5"
            >
              {COMPANY_INFO.stats.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-semibold text-white sm:text-3xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1 text-xs text-navy-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Artwork */}
          <motion.div
            initial={animate ? { opacity: 0, scale: 0.9 } : undefined}
            animate={animate ? { opacity: 1, scale: 1 } : undefined}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[36rem] lg:max-w-none"
          >
            <HeroVisual alt="" />
          </motion.div>
        </div>

        {/* Pillar cards */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div key={pillar.title} {...rise(0.42 + i * 0.07)}>
                <Link
                  to={pillar.to}
                  className="group flex h-full flex-col rounded-2xl glass p-6 hover:-translate-y-1"
                >
                  <span className="glow-tile grid h-11 w-11 place-items-center rounded-xl text-brand-300">
                    <Icon className="h-5 w-5" />
                  </span>

                  <h3 className="mt-6 text-base font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-2 text-[0.82rem] leading-relaxed text-navy-200">
                    {pillar.body}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-300">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Technology strip */}
      <div className="edge-top relative border-t border-white/10 py-10">
        <p className="eyebrow mb-7 text-center text-navy-400">Built on a stack teams can trust</p>

        <div className="marquee-mask relative overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-12 px-6">
            {[...MARQUEE_TECH, ...MARQUEE_TECH].map((name, i) => (
              <span
                key={`${name}-${i}`}
                aria-hidden={i >= MARQUEE_TECH.length}
                className="logo-chip group flex shrink-0 items-center gap-2.5 text-navy-300 transition-colors duration-300 hover:text-white"
              >
                <TechLogo
                  name={name}
                  colored
                  className="h-6 w-6 grayscale opacity-55 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                />
                <span className="text-sm font-medium whitespace-nowrap">{name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
