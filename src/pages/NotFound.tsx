import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useSeo } from '../lib/seo';
import { NAV_ITEMS } from '../lib/navigation';

export default function NotFound() {
  useSeo({
    title: 'Page not found',
    description: 'The page you were looking for does not exist.',
    path: '/404',
  });

  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-navy-950 text-white">
      <div className="pointer-events-none absolute inset-0 grid-field" aria-hidden="true" />
      <div
        className="aurora pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-700/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
        <span className="eyebrow text-navy-300">Error 404</span>

        <h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
          That page isn&rsquo;t here.
        </h1>

        <p className="mt-5 max-w-lg text-base leading-relaxed text-navy-200">
          The link may be out of date. Here is everything else on the site.
        </p>

        <div className="mt-10 flex flex-wrap gap-2.5">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-navy-100 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          to="/"
          className="group mt-12 inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-all duration-300 hover:bg-brand-500"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to home
        </Link>
      </div>
    </section>
  );
}
