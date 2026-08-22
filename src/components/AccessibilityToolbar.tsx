import React, { useState } from 'react';
import { useAccessibility } from '../context/AccessibilityContext';
import { Eye, Type, Contrast, Zap, Accessibility, Tv, RefreshCw, X, Check } from 'lucide-react';

export const AccessibilityToolbar: React.FC = () => {
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

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Trigger Button */}
      <button
        id="a11y-toolbar-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Accessibility & Display Settings"
        className="flex items-center gap-2 px-4 py-3 bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white rounded-full shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-sky-300 hover:scale-105"
      >
        <Accessibility className="w-6 h-6 animate-pulse" />
        <span className="font-semibold text-sm hidden sm:inline">Accessibility & Display</span>
      </button>

      {/* Floating Modal Panel */}
      {isOpen && (
        <div 
          id="a11y-toolbar-panel"
          className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-5 text-slate-900 dark:text-slate-100 backdrop-blur-lg transition-all"
        >
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <Accessibility className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              <h3 className="font-bold text-base">Accessibility & Screen Options</h3>
            </div>
            <button
              id="a11y-close-btn"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              aria-label="Close options"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
            {/* Font Size Scaling */}
            <div>
              <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
                Text Scaling
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'normal', label: '100% Standard' },
                  { id: 'large', label: '115% Large' },
                  { id: 'xlarge', label: '130% Extra Large' },
                ].map((item) => (
                  <button
                    key={item.id}
                    id={`font-scale-${item.id}`}
                    onClick={() => setFontScale(item.id as any)}
                    className={`px-2 py-1.5 text-xs font-medium rounded-lg border transition ${
                      settings.fontSizeScale === item.id
                        ? 'bg-sky-600 text-white border-sky-600 dark:bg-sky-500'
                        : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Feature Toggles */}
            <div className="space-y-2">
              <button
                id="toggle-dark-mode-btn"
                onClick={toggleDarkMode}
                className="w-full flex items-center justify-between p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition"
              >
                <div className="flex items-center gap-2.5">
                  <Eye className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <span className="text-xs font-medium">Dark Mode Appearance</span>
                </div>
                <div className={`w-9 h-5 rounded-full transition-colors relative ${settings.darkMode ? 'bg-sky-600' : 'bg-slate-300'}`}>
                  <div className={`w-3.5 h-3.5 rounded-full bg-white absolute top-0.75 transition-transform ${settings.darkMode ? 'left-4.5' : 'left-0.75'}`} />
                </div>
              </button>

              <button
                id="toggle-high-contrast-btn"
                onClick={toggleHighContrast}
                className="w-full flex items-center justify-between p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition"
              >
                <div className="flex items-center gap-2.5">
                  <Contrast className="w-4 h-4 text-amber-500" />
                  <span className="text-xs font-medium">High Contrast Mode</span>
                </div>
                {settings.highContrast && <Check className="w-4 h-4 text-sky-600" />}
              </button>

              <button
                id="toggle-dyslexic-font-btn"
                onClick={toggleDyslexicFont}
                className="w-full flex items-center justify-between p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition"
              >
                <div className="flex items-center gap-2.5">
                  <Type className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-medium">Dyslexia Friendly Font</span>
                </div>
                {settings.dyslexicFont && <Check className="w-4 h-4 text-emerald-600" />}
              </button>

              <button
                id="toggle-reduced-motion-btn"
                onClick={toggleReducedMotion}
                className="w-full flex items-center justify-between p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition"
              >
                <div className="flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-purple-500" />
                  <span className="text-xs font-medium">Reduce Animations & Motion</span>
                </div>
                {settings.reducedMotion && <Check className="w-4 h-4 text-purple-600" />}
              </button>

              <button
                id="toggle-screen-reader-btn"
                onClick={toggleScreenReaderHighlight}
                className="w-full flex items-center justify-between p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition"
              >
                <div className="flex items-center gap-2.5">
                  <Accessibility className="w-4 h-4 text-orange-500" />
                  <span className="text-xs font-medium">Screen Reader Outline Focus</span>
                </div>
                {settings.screenReaderHighlight && <Check className="w-4 h-4 text-orange-600" />}
              </button>

              <button
                id="toggle-tv-mode-btn"
                onClick={toggleTVPresentationMode}
                className="w-full flex items-center justify-between p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition"
              >
                <div className="flex items-center gap-2.5">
                  <Tv className="w-4 h-4 text-indigo-500" />
                  <span className="text-xs font-medium">100" Ultra TV Display Mode</span>
                </div>
                {settings.tvPresentationMode && <Check className="w-4 h-4 text-indigo-600" />}
              </button>
            </div>

            {/* Reset Defaults */}
            <div className="pt-2">
              <button
                id="reset-a11y-btn"
                onClick={resetAccessibility}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset Accessibility Defaults
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
