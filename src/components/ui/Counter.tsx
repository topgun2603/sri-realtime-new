import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';
import { useMotionEnabled } from '../../hooks/useMotionEnabled';

interface CounterProps {
  /** Numeric strings ("50") count up; anything else ("24/7") renders as-is. */
  value: string;
  suffix?: string;
  durationMs?: number;
  className?: string;
}

export const Counter: React.FC<CounterProps> = ({
  value,
  suffix = '',
  durationMs = 1400,
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const animate = useMotionEnabled();

  const target = Number(value);
  const isNumeric = value.trim() !== '' && Number.isFinite(target);

  const [display, setDisplay] = useState(() => (isNumeric && animate ? 0 : target));

  useEffect(() => {
    if (!isNumeric || !animate || !inView) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      // Ease-out cubic, so the number decelerates into its final value.
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, isNumeric, animate, target, durationMs]);

  return (
    <span ref={ref} className={className}>
      {isNumeric ? (animate ? display : target) : value}
      {suffix}
    </span>
  );
};
