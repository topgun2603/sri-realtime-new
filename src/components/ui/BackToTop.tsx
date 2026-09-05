import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { useMotionEnabled } from '../../hooks/useMotionEnabled';

/**
 * Floating return-to-top control. Appears once the visitor is a screen or so
 * down the page, and scrolls instantly rather than smoothly when reduced
 * motion is requested.
 *
 * Stacks directly above the chat bubble in the bottom-right corner. The chat
 * iframe is 80x80 anchored to bottom:0/right:0, so its centre is 40px from the
 * right edge; right-4 (16px) plus half this 48px button lands on the same
 * 40px, keeping the two vertically aligned.
 *
 * Deliberately left at z-40, far below the widget's z-index, so an open chat
 * panel covers this button rather than the button punching through it.
 */
export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const animate = useMotionEnabled();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
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
          /* navy-700, not navy-900: against the near-black dark ground a
             900-weight circle composites to roughly the page colour and
             disappears. This reads on both themes. */
          className="group fixed bottom-[92px] right-4 z-40 grid h-12 w-12 place-items-center rounded-full border border-white/25 bg-navy-700 text-white shadow-[0_8px_30px_-6px_rgb(224_36_36_/_0.5),0_4px_12px_-2px_rgb(0_0_0_/_0.6)] transition-all duration-300 hover:border-brand-400 hover:bg-brand-600 hover:shadow-[0_10px_38px_-6px_rgb(224_36_36_/_0.8)]"
        >
          <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
