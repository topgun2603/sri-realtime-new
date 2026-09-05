import React from 'react';

const BLUE_TO_RED = 'ring-gradient-stop';

/**
 * Generated product artwork: orbit arcs behind a monogram, echoing the brand
 * mark. Drawn rather than photographed so it stays consistent and weightless,
 * and used as the stand-in wherever real product imagery is not yet supplied.
 */
export const ProductMark: React.FC<{ monogram: string; flip?: boolean }> = ({
  monogram,
  flip,
}) => (
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
        <linearGradient id={`${BLUE_TO_RED}-${monogram}`} x1="0" y1="0" x2="1" y2="1">
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
          fill="none" stroke={`url(#${BLUE_TO_RED}-${monogram})`} strokeWidth="1.2"
        />
        <ellipse
          cx="200" cy="112" rx="112" ry="52"
          fill="none" stroke={`url(#${BLUE_TO_RED}-${monogram})`} strokeWidth="1"
          strokeDasharray="3 8"
        />
      </g>

      <g className="orbit-rev" style={{ transformOrigin: '200px 112px' }}>
        <ellipse
          cx="200" cy="112" rx="74" ry="34"
          fill="none" stroke={`url(#${BLUE_TO_RED}-${monogram})`} strokeWidth="1"
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
