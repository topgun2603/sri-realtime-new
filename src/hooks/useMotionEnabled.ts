import { useReducedMotion } from 'motion/react';
import { useAccessibility } from '../context/AccessibilityContext';

/**
 * True when it is appropriate to run decorative animation.
 *
 * Honours both the visitor's OS-level reduced-motion preference and the
 * in-site accessibility toggle, so JS-driven motion stops alongside the
 * CSS animations the `.reduced-motion` class already suppresses.
 */
export function useMotionEnabled(): boolean {
  const systemReduced = useReducedMotion();
  const { settings } = useAccessibility();
  return !systemReduced && !settings.reducedMotion;
}
