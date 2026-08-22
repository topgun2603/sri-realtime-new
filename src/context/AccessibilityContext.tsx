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

const defaultSettings: AccessibilitySettings = {
  darkMode: false,
  fontSizeScale: 'normal',
  highContrast: false,
  reducedMotion: false,
  dyslexicFont: false,
  screenReaderHighlight: false,
  tvPresentationMode: false,
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    const saved = localStorage.getItem('sri_a11y_settings');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return defaultSettings;
      }
    }
    // Check system preference for dark mode
    const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return { ...defaultSettings, darkMode: systemDark };
  });

  const [deviceMode, setDeviceMode] = useState<DeviceMode>('responsive');

  useEffect(() => {
    localStorage.setItem('sri_a11y_settings', JSON.stringify(settings));
    
    // Dark mode class on HTML root
    const root = document.documentElement;
    if (settings.darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Dyslexic font
    if (settings.dyslexicFont) {
      root.classList.add('font-dyslexic');
    } else {
      root.classList.remove('font-dyslexic');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Screen reader focus outline
    if (settings.screenReaderHighlight) {
      root.classList.add('a11y-focus-visible');
    } else {
      root.classList.remove('a11y-focus-visible');
    }

  }, [settings]);

  const toggleDarkMode = () => {
    setSettings((prev) => ({ ...prev, darkMode: !prev.darkMode }));
  };

  const setFontScale = (scale: 'normal' | 'large' | 'xlarge') => {
    setSettings((prev) => ({ ...prev, fontSizeScale: scale }));
  };

  const toggleHighContrast = () => {
    setSettings((prev) => ({ ...prev, highContrast: !prev.highContrast }));
  };

  const toggleReducedMotion = () => {
    setSettings((prev) => ({ ...prev, reducedMotion: !prev.reducedMotion }));
  };

  const toggleDyslexicFont = () => {
    setSettings((prev) => ({ ...prev, dyslexicFont: !prev.dyslexicFont }));
  };

  const toggleScreenReaderHighlight = () => {
    setSettings((prev) => ({ ...prev, screenReaderHighlight: !prev.screenReaderHighlight }));
  };

  const toggleTVPresentationMode = () => {
    setSettings((prev) => {
      const nextTv = !prev.tvPresentationMode;
      if (nextTv) setDeviceMode('tv100');
      else setDeviceMode('responsive');
      return { ...prev, tvPresentationMode: nextTv };
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
        toggleDarkMode,
        setFontScale,
        toggleHighContrast,
        toggleReducedMotion,
        toggleDyslexicFont,
        toggleScreenReaderHighlight,
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
