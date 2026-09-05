import React, { useEffect, useRef, useState } from 'react';

interface SmartVideoProps {
  /** Path under /public, e.g. /videos/foo-demo.mp4 */
  src: string;
  /** Still frame shown before playback starts. */
  poster?: string;
  /** Optional WebVTT captions track. */
  captions?: string;
  /** Accessible description of what the demo shows. */
  label: string;
  /** Rendered when no video file has been supplied yet. */
  fallback: React.ReactNode;
  className?: string;
}

/**
 * Plays a demo video when the file exists and falls back cleanly when it does
 * not, so demo slots can be wired up before the recordings are made.
 *
 * The probe matters: Firebase Hosting rewrites unknown paths to index.html, so
 * a missing .mp4 answers 200 with HTML rather than 404. Only actually asking a
 * video element to read its metadata tells us whether real media is there.
 */
export const SmartVideo: React.FC<SmartVideoProps> = ({
  src,
  poster,
  captions,
  label,
  fallback,
  className = '',
}) => {
  const [available, setAvailable] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let cancelled = false;
    setAvailable(false);

    const probe = document.createElement('video');
    probe.preload = 'metadata';
    probe.muted = true;

    const ok = () => {
      if (!cancelled) setAvailable(true);
    };
    const fail = () => {
      /* no recording yet — the fallback stays */
    };

    probe.addEventListener('loadedmetadata', ok, { once: true });
    probe.addEventListener('error', fail, { once: true });
    probe.src = src;

    return () => {
      cancelled = true;
      probe.removeAttribute('src');
      probe.load();
    };
  }, [src]);

  if (!available) return <>{fallback}</>;

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      controls
      playsInline
      preload="metadata"
      aria-label={label}
    >
      <source src={src} type="video/mp4" />
      {captions && <track kind="captions" src={captions} srcLang="en" label="English" default />}
      Your browser cannot play this video.
    </video>
  );
};
