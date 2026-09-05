import React from 'react';
import { Reveal } from './Reveal';

type Tone = 'default' | 'muted' | 'dark';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  /** Dark navy ground with a hairline grid, used to punctuate the page. */
  tone?: Tone;
  /** Vertical rhythm. */
  spacing?: 'normal' | 'tight' | 'loose';
  /**
   * Shifts where the colour blooms sit, so consecutive sections don't look
   * like the same backdrop repeated.
   */
  bloom?: 'left' | 'right' | 'center';
}

const tones: Record<Tone, string> = {
  default: 'bg-bg text-ink',
  muted: 'bg-bg-muted text-ink',
  dark: 'bg-navy-950 text-white',
};

const spacings: Record<NonNullable<SectionProps['spacing']>, string> = {
  tight: 'py-14 sm:py-16',
  normal: 'py-20 sm:py-24 lg:py-28',
  loose: 'py-24 sm:py-32 lg:py-40',
};

const blooms: Record<NonNullable<SectionProps['bloom']>, { a: string; b: string }> = {
  left: {
    a: '-left-40 -top-32 h-[34rem] w-[34rem]',
    b: 'right-0 bottom-[-14rem] h-[26rem] w-[26rem]',
  },
  right: {
    a: '-right-40 -top-32 h-[34rem] w-[34rem]',
    b: 'left-0 bottom-[-14rem] h-[26rem] w-[26rem]',
  },
  center: {
    a: 'left-1/2 -top-40 h-[32rem] w-[46rem] -translate-x-1/2',
    b: 'left-1/4 bottom-[-16rem] h-[24rem] w-[30rem]',
  },
};

/**
 * The atmosphere behind a section: a hairline grid plus two soft colour
 * blooms. Both layers swap with the theme — navy lines and gentle washes on
 * light, white lines and saturated glow plus grain on dark — so light mode
 * reads as a designed surface rather than blank page.
 */
const SectionBackdrop: React.FC<{ tone: Tone; bloom: NonNullable<SectionProps['bloom']> }> = ({
  tone,
  bloom,
}) => {
  const pos = blooms[bloom];

  // Always-dark sections don't need the light-theme variants.
  if (tone === 'dark') {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 grid-field" />
        <div className="grain absolute inset-0" />
        <div className={`spotlight spotlight-deep ${pos.a}`} />
        <div className={`spotlight spotlight-red ${pos.b}`} />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 grid-field-light dark:hidden" />
      <div className="absolute inset-0 hidden grid-field dark:block" />
      <div className="grain absolute inset-0 hidden dark:block" />
      <div className={`spotlight spotlight-blue ${pos.a}`} />
      <div className={`spotlight spotlight-red ${pos.b}`} />
    </div>
  );
};

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = '',
  tone = 'default',
  spacing = 'normal',
  bloom = 'right',
}) => (
  <section
    id={id}
    className={`relative isolate ${tones[tone]} ${spacings[spacing]} ${
      tone === 'dark' ? 'edge-top' : ''
    } ${className}`}
  >
    <SectionBackdrop tone={tone} bloom={bloom} />
    {/* z-10 gives the content its own stacking context, so the `-z-10` pill
        backgrounds used by the filter tabs sit above the backdrop, not under it. */}
    <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">{children}</div>
  </section>
);

interface HeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Centres the block and constrains measure. */
  align?: 'left' | 'center';
  onDark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<HeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  onDark = false,
  className = '',
}) => {
  const centered = align === 'center';

  return (
    <Reveal
      className={`relative ${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}
    >
      {eyebrow && (
        <div className={`mb-5 flex items-center gap-2.5 ${centered ? 'justify-center' : ''}`}>
          <span className="signal-dot h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
          <span className={`eyebrow ${onDark ? 'text-navy-300' : 'text-muted'}`}>{eyebrow}</span>
        </div>
      )}

      <h2 className={`display-lg font-semibold ${onDark ? 'text-white' : 'text-ink'}`}>{title}</h2>

      {description && (
        <p
          className={`mt-6 text-base leading-relaxed sm:text-lg ${
            onDark ? 'text-navy-200' : 'text-muted'
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
};
