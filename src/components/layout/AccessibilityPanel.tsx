import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  X, Moon, Contrast, Type, Zap, ScanEye, MonitorPlay, RotateCcw, Check,
} from 'lucide-react';
import { useAccessibility } from '../../context/AccessibilityContext';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const AccessibilityPanel: React.FC<Props> = ({ open, onClose }) => {
  const {
    settings,
    toggleDarkMode,
    setFontScale,
    toggleHighContrast,
    toggleReducedMotion,
    toggleDyslexicFont,
    toggleScreenReaderHighlight,
    toggleTVPresentationMode,
    resetAccessibility,
  } = useAccessibility();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const toggles = [
    {
      id: 'dark',
      label: 'Dark theme',
      hint: 'Lower-light navy palette',
      icon: Moon,
      on: settings.darkMode,
      action: toggleDarkMode,
    },
    {
      id: 'contrast',
      label: 'High contrast',
      hint: 'Maximum text and border contrast',
      icon: Contrast,
      on: settings.highContrast,
      action: toggleHighContrast,
    },
    {
      id: 'motion',
      label: 'Reduce motion',
      hint: 'Stop animations and transitions',
      icon: Zap,
      on: settings.reducedMotion,
      action: toggleReducedMotion,
    },
    {
      id: 'dyslexic',
      label: 'Dyslexia-friendly text',
      hint: 'Wider spacing and rounder letterforms',
      icon: Type,
      on: settings.dyslexicFont,
      action: toggleDyslexicFont,
    },
    {
      id: 'focus',
      label: 'Strong focus outlines',
      hint: 'Thick, high-visibility keyboard focus ring',
      icon: ScanEye,
      on: settings.screenReaderHighlight,
      action: toggleScreenReaderHighlight,
    },
    {
      id: 'tv',
      label: 'Presentation mode',
      hint: 'Oversized type for large-format displays',
      icon: MonitorPlay,
      on: settings.tvPresentationMode,
      action: toggleTVPresentationMode,
    },
  ];

  const scales: { id: 'normal' | 'large' | 'xlarge'; label: string }[] = [
    { id: 'normal', label: 'Default' },
    { id: 'large', label: 'Large' },
    { id: 'xlarge', label: 'Larger' },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
        >
          <div className="absolute inset-0 bg-navy-950/65 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-bg shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            role="dialog"
            aria-modal="true"
            aria-label="Accessibility options"
          >
            <div className="flex shrink-0 items-center justify-between border-b border-line px-6 py-5">
              <div>
                <h2 className="font-display text-lg font-semibold text-ink">Accessibility</h2>
                <p className="mt-0.5 text-xs text-subtle">Saved to this browser</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close accessibility options"
                className="grid h-10 w-10 place-items-center rounded-full border border-line-strong text-ink transition-colors hover:bg-surface-3"
              >
                <X className="h-[18px] w-[18px]" />
              </button>
            </div>

            <div className="flex-1 space-y-7 overflow-y-auto px-6 py-6">
              <div>
                <h3 className="eyebrow mb-3 text-subtle">Text size</h3>
                <div className="grid grid-cols-3 gap-2">
                  {scales.map((scale) => {
                    const active = settings.fontSizeScale === scale.id;
                    return (
                      <button
                        key={scale.id}
                        type="button"
                        onClick={() => setFontScale(scale.id)}
                        aria-pressed={active}
                        className={`rounded-xl border px-3 py-3 text-sm font-medium transition-all ${
                          active
                            ? 'border-accent bg-accent-soft text-accent'
                            : 'border-line bg-surface-2 text-muted hover:border-line-strong hover:text-ink'
                        }`}
                      >
                        {scale.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="eyebrow mb-3 text-subtle">Display &amp; motion</h3>
                <div className="space-y-2">
                  {toggles.map(({ id, label, hint, icon: Icon, on, action }) => (
                    <button
                      key={id}
                      type="button"
                      onClick={action}
                      role="switch"
                      aria-checked={on}
                      className={`flex w-full items-center gap-3.5 rounded-xl border px-4 py-3.5 text-left transition-all ${
                        on
                          ? 'border-accent/45 bg-accent-soft'
                          : 'border-line bg-surface-2 hover:border-line-strong'
                      }`}
                    >
                      <span
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg transition-colors ${
                          on ? 'bg-accent text-white' : 'bg-surface-3 text-muted'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-medium text-ink">{label}</span>
                        <span className="block text-xs text-subtle">{hint}</span>
                      </span>
                      <span
                        className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border transition-colors ${
                          on ? 'border-accent bg-accent text-white' : 'border-line-strong'
                        }`}
                        aria-hidden="true"
                      >
                        {on && <Check className="h-3 w-3" />}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="shrink-0 border-t border-line p-5">
              <button
                type="button"
                onClick={resetAccessibility}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-line-strong px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-surface-3"
              >
                <RotateCcw className="h-4 w-4" />
                Reset to defaults
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
