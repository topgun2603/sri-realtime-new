import React from 'react';

interface MarqueeProps {
  items: string[];
  onDark?: boolean;
  className?: string;
}

/**
 * Edge-faded infinite ticker. The item list is rendered twice so the
 * -50% translate in `marquee-track` loops without a visible seam.
 */
export const Marquee: React.FC<MarqueeProps> = ({ items, onDark = false, className = '' }) => (
  <div className={`marquee-mask relative overflow-hidden ${className}`}>
    <div className="marquee-track flex w-max items-center gap-3">
      {[...items, ...items].map((item, i) => (
        <span
          key={i}
          aria-hidden={i >= items.length}
          className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium whitespace-nowrap ${
            onDark
              ? 'border-white/12 bg-white/5 text-navy-100'
              : 'border-line bg-surface text-muted'
          }`}
        >
          <span
            className={`h-1 w-1 rounded-full ${onDark ? 'bg-brand-400' : 'bg-brand-500'}`}
            aria-hidden="true"
          />
          {item}
        </span>
      ))}
    </div>
  </div>
);
