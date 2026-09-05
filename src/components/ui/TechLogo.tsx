import React from 'react';
import { TECH_LOGOS } from '../../lib/techLogos';

interface TechLogoProps {
  name: string;
  className?: string;
  /** Renders in the real brand colour instead of inheriting the text colour. */
  colored?: boolean;
}

/**
 * Renders a technology's logo. Real brand marks come from Simple Icons;
 * withdrawn brands fall back to a lettermark and non-product capabilities to
 * a glyph, so every entry in the stack has something recognisable.
 */
export const TechLogo: React.FC<TechLogoProps> = ({
  name,
  className = 'h-7 w-7',
  colored = false,
}) => {
  const logo = TECH_LOGOS[name];

  if (!logo) {
    return (
      <span
        className={`${className} grid place-items-center rounded-md bg-white/10 font-mono text-[0.6rem] font-bold`}
        aria-hidden="true"
      >
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  if (logo.kind === 'brand') {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill={colored ? (logo.darkHex ?? logo.hex) : 'currentColor'}
        role="img"
        aria-label={`${name} logo`}
      >
        <path d={logo.path} />
      </svg>
    );
  }

  if (logo.kind === 'mark') {
    // Sized independently of `className` — a word like "Azure" would be clipped
    // by the square box a glyph logo sits in.
    return (
      <span
        className="grid place-items-center font-display text-[0.72rem] font-bold leading-none tracking-tight whitespace-nowrap"
        style={{ color: colored ? logo.hex : undefined }}
        role="img"
        aria-label={`${name} logo`}
      >
        {logo.label}
      </span>
    );
  }

  const Icon = logo.icon;
  return (
    <Icon
      className={className}
      style={{ color: colored ? logo.hex : undefined }}
      aria-label={`${name} icon`}
    />
  );
};
