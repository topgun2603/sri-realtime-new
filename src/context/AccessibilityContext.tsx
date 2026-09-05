import React, { createContext, useContext, useState, useEffect } from 'react';
import { AccessibilitySettings, DeviceMode } from '../types';

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  deviceMode: DeviceMode;
  toggleDarkMode: () => void;
  setFontScale: (scale: 'normal' | 'large' | 'xlarge') => void;
  toggleHighContrast: () => void;
  toggleReducedMotion: () => void;
  toggleDyslexicFont: () => void;
  toggleScreenReaderHighlight: () => void;
  toggleTVPresentationMode: () => void;
  setDeviceMode: (mode: DeviceMode) => void;
  resetAccessibility: () => void;
}

const STORAGE_KEY = 'sri_a11y_settings';

const defaultSettings: AccessibilitySettings = {
  darkMode: true,
  fontSizeScale: 'normal',
  highContrast: false,
  reducedMotion: false,
  dyslexicFont: false,
  screenReaderHighlight: false,
  tvPresentationMode: false,
};

function loadSettings(): AccessibilitySettings {
  if (typeof window === 'undefined') return defaultSettings;

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      // Merge over defaults so settings added later don't come back undefined.
      return { ...defaultSettings, ...JSON.parse(saved) };
    }
  } catch {
    /* storage unavailable or corrupt — fall through to system preference */
  }

  // The design is authored dark-first; a visitor who explicitly prefers light
  // still gets it, but dark is what we open with.
  const prefersLight =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-color-scheme: light)').matches;

  return { ...defaultSettings, darkMode: !prefersLight };
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(loadSettings);
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('responsive');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      /* private browsing or blocked storage — preferences just won't persist */
    }

    const root = document.documentElement;
    const flags: [boolean, string][] = [
      [settings.darkMode, 'dark'],
      [settings.highContrast, 'high-contrast'],
      [settings.dyslexicFont, 'font-dyslexic'],
      [settings.reducedMotion, 'reduced-motion'],
      [settings.screenReaderHighlight, 'a11y-focus-visible'],
      [settings.tvPresentationMode, 'tv-display-mode'],
    ];

    for (const [on, cls] of flags) root.classList.toggle(cls, on);

    // Font scale drives the root size so every rem-based value follows it.
    const scale =
      settings.fontSizeScale === 'large' ? '112.5%'
      : settings.fontSizeScale === 'xlarge' ? '125%'
      : '100%';
    root.style.fontSize = scale;

    // Keep the browser UI (address bar, etc.) in step with the theme.
    const themeMeta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (themeMeta) themeMeta.content = settings.darkMode ? '#04070F' : '#FFFFFF';
  }, [settings]);

  const toggle = (key: keyof AccessibilitySettings) => () =>
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));

  const toggleTVPresentationMode = () => {
    setSettings((prev) => {
      const next = !prev.tvPresentationMode;
      setDeviceMode(next ? 'tv100' : 'responsive');
      return { ...prev, tvPresentationMode: next };
    });
  };

  const resetAccessibility = () => {
    setSettings(defaultSettings);
    setDeviceMode('responsive');
  };

  return (
    <AccessibilityContext.Provider
      value={{
        settings,
        deviceMode,
        toggleDarkMode: toggle('darkMode'),
        setFontScale: (fontSizeScale) => setSettings((prev) => ({ ...prev, fontSizeScale })),
        toggleHighContrast: toggle('highContrast'),
        toggleReducedMotion: toggle('reducedMotion'),
        toggleDyslexicFont: toggle('dyslexicFont'),
        toggleScreenReaderHighlight: toggle('screenReaderHighlight'),
        toggleTVPresentationMode,
        setDeviceMode,
        resetAccessibility,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return context;
};
