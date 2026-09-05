import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useMotionEnabled } from '../../hooks/useMotionEnabled';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface RevealProps {
  children: React.ReactNode;
  /** Seconds to wait before this element animates in. */
  delay?: number;
  direction?: Direction;
  /** Travel distance in px before settling. */
  distance?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'article' | 'span';
}

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Fades content in as it scrolls into view. Falls back to rendering the
 * children outright when the visitor has asked for reduced motion.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  distance = 24,
  className = '',
  as = 'div',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px 0px -80px 0px' });
  const animate = useMotionEnabled();

  const MotionTag = motion[as] as typeof motion.div;

  if (!animate) {
    const Tag = as as React.ElementType;
    return <Tag className={className}>{children}</Tag>;
  }

  const o = offsets[direction];

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: o.x * distance, y: o.y * distance }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : undefined}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
};

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  /** Seconds between each child animating in. */
  step?: number;
  startDelay?: number;
  /** Applied to each generated wrapper — use `h-full` inside stretch grids. */
  childClassName?: string;
}

/** Reveals each direct child in sequence. */
export const RevealStagger: React.FC<StaggerProps> = ({
  children,
  className = '',
  step = 0.07,
  startDelay = 0,
  childClassName = 'h-full',
}) => (
  <div className={className}>
    {React.Children.map(children, (child, i) =>
      child == null ? child : (
        <Reveal delay={startDelay + i * step} className={childClassName}>
          {child}
        </Reveal>
      ),
    )}
  </div>
);
