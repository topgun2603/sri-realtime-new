import { useEffect } from 'react';

const WIDGET_URL = import.meta.env.VITE_CHAT_WIDGET_URL as string | undefined;
const WIDGET_KEY = import.meta.env.VITE_CHAT_WIDGET_KEY as string | undefined;
/** The widget also honours data-position; left unset it uses its own default. */
const WIDGET_POSITION = import.meta.env.VITE_CHAT_WIDGET_POSITION as string | undefined;

const SCRIPT_ID = 'sri-chat-widget';

/**
 * Loads the chat widget.
 *
 * Deliberately env-driven with no default: the widget lives on a separate
 * service, and a hardcoded localhost URL would ship to production and have
 * every visitor's browser try to load it from their own machine. If
 * VITE_CHAT_WIDGET_URL is unset the widget simply does not load.
 *
 * Injected after the page goes idle rather than in index.html, so a
 * third-party script can never block first paint. The widget reads its
 * configuration from document.currentScript, which is set for dynamically
 * inserted classic scripts, so injecting it this way is safe.
 */
export const ChatWidget = () => {
  useEffect(() => {
    if (!WIDGET_URL) return;
    if (document.getElementById(SCRIPT_ID)) return;

    // An http:// widget on an https:// page is blocked as mixed content, and
    // the failure is silent. Say so in the console instead.
    if (window.location.protocol === 'https:' && WIDGET_URL.startsWith('http:')) {
      console.warn(
        `[chat] Refusing to load "${WIDGET_URL}" over http from an https page — ` +
          'browsers block this as mixed content. Serve the widget over https.',
      );
      return;
    }

    let cancelled = false;

    const load = () => {
      if (cancelled || document.getElementById(SCRIPT_ID)) return;

      const script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = WIDGET_URL;
      script.async = true;
      if (WIDGET_KEY) script.dataset.key = WIDGET_KEY;
      if (WIDGET_POSITION) script.dataset.position = WIDGET_POSITION;
      script.onerror = () =>
        console.warn(`[chat] Widget failed to load from ${WIDGET_URL}`);

      document.body.appendChild(script);
    };

    const scheduler = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    if (typeof scheduler.requestIdleCallback === 'function') {
      const handle = scheduler.requestIdleCallback(load, { timeout: 3000 });
      return () => {
        cancelled = true;
        scheduler.cancelIdleCallback?.(handle);
      };
    }

    const handle = window.setTimeout(load, 1500);
    return () => {
      cancelled = true;
      window.clearTimeout(handle);
    };
  }, []);

  return null;
};
