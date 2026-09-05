import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { useMotionEnabled } from '../../hooks/useMotionEnabled';

/** Thin reading-progress bar pinned to the very top of the viewport. */
export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 34, restDelta: 0.001 });
  const animate = useMotionEnabled();

  if (!animate) return null;

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-brand-600 via-brand-500 to-navy-400"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
};
