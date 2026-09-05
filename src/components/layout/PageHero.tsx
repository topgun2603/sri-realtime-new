import React from 'react';
import { motion } from 'motion/react';
import { useMotionEnabled } from '../../hooks/useMotionEnabled';
import { SmartImage } from '../ui/SmartImage';
import { PageHeroVisual, HeroVisualVariant } from '../ui/PageHeroVisual';

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  /**
   * Which generated artwork to show alongside the copy. Drop a PNG at
   * /public/images/hero-<variant>.png to replace it — see IMAGE-BRIEF.md.
   */
  visual: HeroVisualVariant;
  children?: React.ReactNode;
}

/** Dark banner that opens every inner page. */
export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  description,
  visual,
  children,
}) => {
  const animate = useMotionEnabled();

  const rise = (delay: number) =>
    animate
      ? {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] as const },
        }
      : {};

  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <div className="pointer-events-none absolute inset-0 grid-field" aria-hidden="true" />
      <div className="grain pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="spotlight spotlight-deep aurora -top-52 left-1/4 h-[34rem] w-[40rem] -translate-x-1/2"
        aria-hidden="true"
      />
      <div
        className="spotlight spotlight-red aurora -bottom-56 right-0 h-[28rem] w-[32rem]"
        style={{ animationDelay: '-11s' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Copy */}
          <div>
            <motion.div {...rise(0)} className="flex items-center gap-2.5">
              <span
                className="signal-dot h-1.5 w-1.5 rounded-full bg-brand-500"
                aria-hidden="true"
              />
              <span className="eyebrow text-navy-300">{eyebrow}</span>
            </motion.div>

            <motion.h1 {...rise(0.08)} className="display-xl mt-7 max-w-2xl font-semibold">
              {title}
            </motion.h1>

            <motion.p
              {...rise(0.16)}
              className="mt-8 max-w-xl text-base leading-relaxed text-navy-200 sm:text-lg"
            >
              {description}
            </motion.p>

            {children && <motion.div {...rise(0.24)}>{children}</motion.div>}
          </div>

          {/* Artwork — held back on small screens so the headline stays first. */}
          <motion.div
            initial={animate ? { opacity: 0, scale: 0.92 } : undefined}
            animate={animate ? { opacity: 1, scale: 1 } : undefined}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block"
          >
            <SmartImage
              src={`/images/hero-${visual}.png`}
              alt=""
              className="mx-auto h-auto w-full max-w-[34rem] object-contain"
              fallback={<PageHeroVisual variant={visual} />}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
