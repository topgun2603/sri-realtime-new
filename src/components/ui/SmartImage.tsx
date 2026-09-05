import React, { useEffect, useState } from 'react';

interface SmartImageProps {
  /** Path under /public. If the file isn't there, `fallback` stays on screen. */
  src: string;
  alt: string;
  className?: string;
  /** Drawn artwork shown until a real image is confirmed to load. */
  fallback: React.ReactNode;
}

/**
 * Shows generated artwork, then swaps in a real image only once it has
 * actually decoded.
 *
 * Probing up front rather than rendering the <img> and reacting to onError
 * matters here: Firebase Hosting rewrites unknown paths to index.html, so a
 * missing PNG returns 200 with HTML rather than a 404. Rendering it directly
 * would flash a broken-image box before the fallback took over.
 */
export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  className = '',
  fallback,
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoaded(false);

    const probe = new Image();
    probe.onload = () => {
      if (!cancelled) setLoaded(true);
    };
    probe.onerror = () => {
      /* no art supplied yet — the generated fallback stays */
    };
    probe.src = src;

    return () => {
      cancelled = true;
    };
  }, [src]);

  if (!loaded) return <>{fallback}</>;

  return <img src={src} alt={alt} decoding="async" className={className} />;
};
