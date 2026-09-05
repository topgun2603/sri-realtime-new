import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCTS } from '../../data/companyData';
import { Section, SectionHeading } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { SmartImage } from '../ui/SmartImage';

/**
 * Generated card visual: orbit arcs behind a monogram, echoing the brand mark.
 * Drawn rather than photographed so the section stays consistent and weightless.
 */
const ProductMark: React.FC<{ monogram: string; flip?: boolean }> = ({ monogram, flip }) => (
  <div className="relative aspect-[16/9] overflow-hidden bg-navy-900">
    <div
      className="absolute inset-0 opacity-90"
      style={{
        background: flip
          ? 'radial-gradient(120% 120% at 80% 15%, #12306E 0%, #081428 55%, #050B1C 100%)'
          : 'radial-gradient(120% 120% at 20% 15%, #12306E 0%, #081428 55%, #050B1C 100%)',
      }}
      aria-hidden="true"
    />

    <svg
      viewBox="0 0 400 225"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`ring-${monogram}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4C7DF0" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#E02424" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      <g
        className="orbit-slow"
        style={{ transformOrigin: '200px 112px' }}
        transform={flip ? 'rotate(12 200 112)' : 'rotate(-12 200 112)'}
      >
        <ellipse
          cx="200" cy="112" rx="150" ry="72"
          fill="none" stroke={`url(#ring-${monogram})`} strokeWidth="1.2"
        />
        <ellipse
          cx="200" cy="112" rx="112" ry="52"
          fill="none" stroke={`url(#ring-${monogram})`} strokeWidth="1"
          strokeDasharray="3 8"
        />
      </g>

      <g className="orbit-rev" style={{ transformOrigin: '200px 112px' }}>
        <ellipse
          cx="200" cy="112" rx="74" ry="34"
          fill="none" stroke={`url(#ring-${monogram})`} strokeWidth="1"
          strokeDasharray="2 6"
        />
      </g>
    </svg>

    <div className="absolute inset-0 grid place-items-center">
      <span className="font-display text-6xl font-bold tracking-[0.08em] text-white/90 sm:text-7xl">
        {monogram}
      </span>
    </div>

    <div
      className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950 to-transparent"
      aria-hidden="true"
    />
  </div>
);

/**
 * Our own products. Worth its own section: these are live systems we built and
 * operate ourselves, which is stronger evidence than any capability claim.
 */
export const Products: React.FC = () => (
  <Section tone="dark" id="products" bloom="center">
    <SectionHeading
      onDark
      eyebrow="Built in-house"
      title="We run our own products on the same architecture"
      description="Not a portfolio of mockups. These are live platforms we designed, built and operate ourselves — the same foundations we bring to client work."
    />

    <div className="mt-16 grid gap-6 lg:grid-cols-2">
      {PRODUCTS.map((product, i) => (
        <Reveal key={product.id} delay={i * 0.1} className="h-full">
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ring-gradient group relative flex h-full flex-col overflow-hidden rounded-3xl glass transition-all duration-500 hover:-translate-y-1.5"
          >
            <div className="relative">
              {/* Drop a screenshot at /public/images/product-<id>.png to replace
                  the generated mark. */}
              <SmartImage
                src={`/images/product-${product.id}.png`}
                alt={`${product.name} interface`}
                className="aspect-[16/9] w-full object-cover"
                fallback={<ProductMark monogram={product.monogram} flip={i % 2 === 1} />}
              />
              <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-navy-950/70 px-3.5 py-1.5 text-[0.68rem] font-medium text-navy-100 backdrop-blur-sm">
                {product.sector}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-white">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-brand-300">{product.tagline}</p>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20 text-white transition-all duration-300 group-hover:border-brand-500 group-hover:bg-brand-600">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-navy-200">{product.description}</p>

              <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-navy-300">
                <span className="signal-dot h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
                Live in production
              </span>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  </Section>
);
