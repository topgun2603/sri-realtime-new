import React from 'react';
import { OrbitSystem } from './OrbitSystem';
import { SmartImage } from './SmartImage';

interface HeroVisualProps {
  /** Drop a PNG at this path in /public to replace the generated artwork. */
  src?: string;
  alt?: string;
  className?: string;
}

/**
 * The hero artwork. Renders the supplied image once it loads and otherwise
 * keeps the generated orbit device, so the hero is never broken while art is
 * still being produced.
 */
export const HeroVisual: React.FC<HeroVisualProps> = ({
  src = '/images/hero-visual.png',
  alt = '',
  className = '',
}) => (
  <div className={`relative ${className}`}>
    <div
      className="spotlight spotlight-red absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2"
      aria-hidden="true"
    />

    <SmartImage
      src={src}
      alt={alt}
      className="relative h-auto w-full object-contain"
      fallback={<OrbitSystem className="relative h-auto w-full" />}
    />
  </div>
);
