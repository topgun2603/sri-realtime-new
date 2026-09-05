import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, CalendarClock, Play } from 'lucide-react';
import { PRODUCTS } from '../../data/companyData';
import { Section, SectionHeading } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { SmartVideo } from '../ui/SmartVideo';
import { SmartImage } from '../ui/SmartImage';
import { ProductMark } from '../ui/ProductMark';

/**
 * Walkthrough recordings of the products we run ourselves.
 *
 * Until a recording exists the player is replaced by the product's poster and
 * an invitation to book a live walkthrough — a working call to action rather
 * than a dead play button.
 */
export const ProductDemos: React.FC = () => {
  const [activeId, setActiveId] = useState(PRODUCTS[0].id);
  const active = PRODUCTS.find((p) => p.id === activeId) ?? PRODUCTS[0];
  const activeIndex = PRODUCTS.findIndex((p) => p.id === active.id);

  return (
    <Section tone="dark" id="demos" bloom="left">
      <SectionHeading
        onDark
        eyebrow="See it working"
        title="Watch the products, not a slideshow"
        description="Short walkthroughs of the platforms we built and run ourselves — the actual interfaces, doing the actual job."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
        {/* Product selector */}
        <Reveal>
          <div
            role="tablist"
            aria-label="Product demos"
            className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
          >
            {PRODUCTS.map((product) => {
              const selected = product.id === active.id;
              return (
                <button
                  key={product.id}
                  role="tab"
                  aria-selected={selected}
                  aria-controls="demo-player"
                  onClick={() => setActiveId(product.id)}
                  className={`relative min-w-[15rem] shrink-0 rounded-2xl p-5 text-left transition-colors duration-300 lg:min-w-0 ${
                    selected ? 'text-white' : 'text-navy-200 hover:text-white'
                  }`}
                >
                  {selected ? (
                    <motion.span
                      layoutId="demo-tab"
                      className="absolute inset-0 -z-10 rounded-2xl border border-white/20 bg-white/[0.07]"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  ) : (
                    <span className="absolute inset-0 -z-10 rounded-2xl border border-white/10" />
                  )}

                  <span className="flex items-center justify-between gap-3">
                    <span className="font-display text-lg font-semibold">{product.name}</span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${
                        selected ? 'bg-brand-600 text-white' : 'border border-white/20 text-navy-300'
                      }`}
                      aria-hidden="true"
                    >
                      <Play className="h-3.5 w-3.5" />
                    </span>
                  </span>

                  <span className="mt-1 block text-xs text-brand-300">{product.tagline}</span>
                  <span className="mt-3 block text-[0.78rem] leading-relaxed text-navy-300">
                    {product.demo.covers}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Player */}
        <Reveal delay={0.08}>
          <div
            id="demo-player"
            role="tabpanel"
            className="ring-gradient overflow-hidden rounded-3xl glass"
          >
            <SmartVideo
              key={active.id}
              src={active.demo.video}
              poster={active.demo.poster}
              captions={active.demo.captions}
              label={`${active.name} product walkthrough`}
              className="aspect-video w-full bg-navy-950"
              fallback={
                <div className="relative">
                  <SmartImage
                    src={active.demo.poster}
                    alt=""
                    className="aspect-video w-full object-cover"
                    fallback={<ProductMark monogram={active.monogram} flip={activeIndex % 2 === 1} />}
                  />

                  {/* No recording yet — offer the next best thing. */}
                  <div className="absolute inset-0 grid place-items-center bg-navy-950/55 backdrop-blur-[2px]">
                    <div className="px-6 text-center">
                      <p className="font-display text-lg font-semibold text-white sm:text-xl">
                        Walkthrough coming soon
                      </p>
                      <p className="mx-auto mt-2 max-w-sm text-[0.82rem] leading-relaxed text-navy-200">
                        We&rsquo;ll happily show you {active.name} live instead, on a call at a
                        time that suits you.
                      </p>
                      <Link
                        to="/contact"
                        className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-colors hover:bg-brand-500"
                      >
                        <CalendarClock className="h-4 w-4" />
                        Book a live walkthrough
                      </Link>
                    </div>
                  </div>
                </div>
              }
            />

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 p-6">
              <div>
                <h3 className="font-display text-lg font-semibold text-white">{active.name}</h3>
                <p className="mt-0.5 text-sm text-navy-200">{active.description}</p>
              </div>

              <a
                href={active.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-brand-500 hover:bg-brand-600"
              >
                Visit {active.name}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};
