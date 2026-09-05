import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Mail, MapPin, Clock } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../../data/companyData';
import { Reveal } from '../ui/Reveal';

const SERVICE_LINKS = [
  { label: 'Enterprise Systems', to: '/services' },
  { label: 'AI & Automation', to: '/ai' },
  { label: 'Mobile & Web Products', to: '/services' },
  { label: 'Cloud & API Engineering', to: '/services' },
];

const COMPANY_LINKS = [
  { label: 'Technology', to: '/technology' },
  { label: 'Delivery Process', to: '/process' },
  { label: 'Capabilities', to: '/work' },
  { label: 'Scope Estimator', to: '/estimator' },
];

export const Footer: React.FC = () => (
  <footer className="relative overflow-hidden bg-navy-950 text-white">
    <div className="pointer-events-none absolute inset-0 grid-field" aria-hidden="true" />
    <div
      className="aurora pointer-events-none absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]"
      aria-hidden="true"
    />

    <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
      {/* Closing call to action */}
      <Reveal className="border-b border-white/10 py-20 sm:py-24">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-2.5">
              <span className="signal-dot h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
              <span className="eyebrow text-navy-300">Let&rsquo;s build it properly</span>
            </div>
            <h2 className="text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Ready to put your
              <br />
              operations{' '}
              <span className="relative inline-block">
                <span className="text-gradient-navy">in real time?</span>
                <span className="absolute -bottom-1.5 left-0 h-[3px] w-full rounded-full bg-brand-500/70" />
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-200">
              Tell us what you are trying to fix. We will come back with an architecture, a
              delivery plan and an honest view of what it takes.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-all duration-300 hover:bg-brand-500 active:scale-[0.98]"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/estimator"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/45 hover:bg-white/10"
            >
              Estimate your scope
            </Link>
          </div>
        </div>
      </Reveal>

      {/* Link columns */}
      <div className="grid grid-cols-2 gap-10 py-16 sm:gap-12 lg:grid-cols-5">
        <div className="col-span-2 lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-white">
              <img src="/logo.png" alt="" width={38} height={28} className="h-7 w-auto" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-base font-bold tracking-[0.14em] text-white">
                SRI REAL TIME
              </span>
              <span className="mt-1 font-mono text-[0.58rem] tracking-[0.2em] text-navy-300 uppercase">
                Emerging future unlimited
              </span>
            </span>
          </div>

          <p className="mt-6 max-w-sm text-sm leading-relaxed text-navy-200">
            {COMPANY_INFO.tagline} We design, build and run enterprise-grade systems for
            startups, SMEs and enterprises.
          </p>

          <div className="mt-8 space-y-3.5 text-sm">
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="group flex items-center gap-3 text-navy-100 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 shrink-0 text-brand-400" />
              <span className="underline-offset-4 group-hover:underline">{COMPANY_INFO.email}</span>
            </a>
            {COMPANY_INFO.offices.map((office) => (
              <div key={office.city} className="flex items-start gap-3 text-navy-200">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>
                  {office.city}, {office.region}
                  <span className="block text-xs text-navy-300">{office.role}</span>
                </span>
              </div>
            ))}
            <div className="flex items-center gap-3 text-navy-200">
              <Clock className="h-4 w-4 shrink-0 text-brand-400" />
              <span>Replies {COMPANY_INFO.responseWindow.toLowerCase()}</span>
            </div>
          </div>
        </div>

        <FooterColumn title="Services" links={SERVICE_LINKS} />
        <FooterColumn title="Company" links={COMPANY_LINKS} />

        <div>
          <h3 className="eyebrow mb-5 text-navy-300">Our Products</h3>
          <ul className="space-y-3">
            {PRODUCTS.map((product) => (
              <li key={product.id}>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-1.5 text-sm text-navy-100 transition-colors hover:text-white"
                >
                  <span>
                    {product.name}
                    <span className="block text-xs text-navy-300">{product.sector}</span>
                  </span>
                  <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-navy-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Legal bar */}
      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-navy-300 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} SRI REAL TIME. All rights reserved.</p>
        <p className="font-mono tracking-wider">
          Built with React, TypeScript &amp; Tailwind
        </p>
      </div>
    </div>
  </footer>
);

const FooterColumn: React.FC<{ title: string; links: { label: string; to: string }[] }> = ({
  title,
  links,
}) => (
  <div>
    <h3 className="eyebrow mb-5 text-navy-300">{title}</h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            to={link.to}
            className="text-sm text-navy-100 transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
