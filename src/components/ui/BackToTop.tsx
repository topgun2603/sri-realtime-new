import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { useMotionEnabled } from '../../hooks/useMotionEnabled';

/**
 * Floating return-to-top control. Appears once the visitor is a screen or so
 * down the page, and scrolls instantly rather than smoothly when reduced
 * motion is requested.
 *
 * Sits bottom-left on purpose: the chat widget occupies the bottom-right
 * corner, and the two would otherwise sit on top of each other.
 */
export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const animate = useMotionEnabled();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toTop = () =>
    window.scrollTo({ top: 0, behavior: animate ? 'smooth' : 'auto' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={toTop}
          aria-label="Back to top"
          title="Back to top"
          initial={animate ? { opacity: 0, scale: 0.7, y: 12 } : false}
          animate={animate ? { opacity: 1, scale: 1, y: 0 } : {}}
          exit={animate ? { opacity: 0, scale: 0.7, y: 12 } : {}}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="group fixed bottom-6 left-5 z-40 grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-navy-900/80 text-white shadow-[0_10px_36px_-8px_rgb(0_0_0_/_0.7)] backdrop-blur-md transition-colors duration-300 hover:border-brand-500 hover:bg-brand-600 sm:bottom-8 sm:left-8"
        >
          <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
