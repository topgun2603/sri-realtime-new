import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AccessibilityProvider } from './context/AccessibilityContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AccessibilityPanel } from './components/layout/AccessibilityPanel';
import { ChatWidget } from './components/layout/ChatWidget';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { BackToTop } from './components/ui/BackToTop';
import { initAnalytics } from './lib/firebase';

// The landing page ships in the main bundle so the first paint needs no
// extra round trip. Every other route is split out and fetched on demand.
import Home from './pages/Home';

const Services = lazy(() => import('./pages/Services'));
const AIHub = lazy(() => import('./pages/AIHub'));
const Technology = lazy(() => import('./pages/Technology'));
const Process = lazy(() => import('./pages/Process'));
const Work = lazy(() => import('./pages/Work'));
const Estimator = lazy(() => import('./pages/Estimator'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

/** Returns to the top of the document whenever the route changes. */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

/** Holds the viewport steady while a route chunk loads. */
const RouteFallback: React.FC = () => (
  <div className="grid min-h-[60vh] place-items-center" role="status" aria-live="polite">
    <span className="sr-only">Loading</span>
    <span
      className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-accent"
      aria-hidden="true"
    />
  </div>
);

const Shell: React.FC = () => {
  const [a11yOpen, setA11yOpen] = useState(false);
  const { pathname } = useLocation();

  // Analytics is deferred until the page is idle so it never competes with
  // the first render.
  useEffect(() => {
    const start = () => void initAnalytics();

    // requestIdleCallback is still missing in Safari, so fall back to a timer.
    const scheduler = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    if (typeof scheduler.requestIdleCallback === 'function') {
      const handle = scheduler.requestIdleCallback(start, { timeout: 4000 });
      return () => scheduler.cancelIdleCallback?.(handle);
    }

    const handle = window.setTimeout(start, 2500);
    return () => window.clearTimeout(handle);
  }, []);

  // The home hero renders its own dark field beneath the transparent header.
  const offsetHeader = pathname !== '/';

  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <Navbar onOpenA11y={() => setA11yOpen(true)} />

      <main id="main" className={offsetHeader ? 'pt-[72px]' : undefined}>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/ai" element={<AIHub />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/process" element={<Process />} />
            <Route path="/work" element={<Work />} />
            <Route path="/estimator" element={<Estimator />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <BackToTop />
      <AccessibilityPanel open={a11yOpen} onClose={() => setA11yOpen(false)} />
      <ChatWidget />
    </>
  );
};

export default function App() {
  return (
    <AccessibilityProvider>
      <Shell />
    </AccessibilityProvider>
  );
}
