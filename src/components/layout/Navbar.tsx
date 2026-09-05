import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X, Sun, Moon, Accessibility, ArrowRight, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS } from '../../lib/navigation';
import { useAccessibility } from '../../context/AccessibilityContext';

interface NavbarProps {
  onOpenA11y: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenA11y }) => {
  const { settings, toggleDarkMode } = useAccessibility();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the drawer whenever the route changes.
  useEffect(() => setMenuOpen(false), [pathname]);

  // Prevent the page scrolling behind the open drawer.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  /* The home hero is a dark navy field, so until the visitor scrolls the
     header sits on top of it transparently in white. */
  const overDark = pathname === '/' && !scrolled;

  const shell = scrolled
    ? 'bg-bg/85 backdrop-blur-xl border-line shadow-[0_1px_0_0_var(--border)]'
    : overDark
      ? 'bg-transparent border-transparent'
      : 'bg-bg/70 backdrop-blur-md border-transparent';

  const linkBase =
    'relative px-3.5 py-2 text-[0.8rem] font-medium rounded-full transition-colors duration-200';

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand-600 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${shell}`}
      >
        <nav
          className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-10"
          aria-label="Primary"
        >
          {/* Brand */}
          <Link to="/" className="group flex shrink-0 items-center gap-3" aria-label="SRI REAL TIME — home">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-white shadow-sm ring-1 ring-black/5">
              <img
                src="/logo.png"
                alt=""
                width={36}
                height={26}
                className="h-[26px] w-auto transition-transform duration-500 group-hover:scale-110"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span
                className={`font-display text-[0.95rem] font-bold tracking-[0.14em] transition-colors ${
                  overDark ? 'text-white' : 'text-ink'
                }`}
              >
                SRI REAL TIME
              </span>
              <span
                className={`mt-1 font-mono text-[0.58rem] tracking-[0.2em] uppercase transition-colors ${
                  overDark ? 'text-navy-300' : 'text-subtle'
                }`}
              >
                Emerging future unlimited
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-0.5 xl:flex">
            {NAV_ITEMS.filter((i) => i.path !== '/contact').map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `${linkBase} ${
                    isActive
                      ? overDark
                        ? 'text-white'
                        : 'text-ink'
                      : overDark
                        ? 'text-navy-200 hover:text-white'
                        : 'text-muted hover:text-ink'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className={`absolute inset-0 -z-10 rounded-full ${
                          overDark ? 'bg-white/12' : 'bg-surface-3'
                        }`}
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-1.5">
            <IconButton
              onClick={onOpenA11y}
              overDark={overDark}
              label="Accessibility options"
            >
              <Accessibility className="h-[18px] w-[18px]" />
            </IconButton>

            <IconButton
              onClick={toggleDarkMode}
              overDark={overDark}
              label={settings.darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {settings.darkMode ? (
                <Sun className="h-[18px] w-[18px]" />
              ) : (
                <Moon className="h-[18px] w-[18px]" />
              )}
            </IconButton>

            <Link
              to="/contact"
              className="ml-1.5 hidden items-center gap-1.5 rounded-full bg-brand-600 px-5 py-2.5 text-[0.8rem] font-semibold text-white shadow-lg shadow-brand-600/25 transition-all duration-300 hover:bg-brand-500 hover:shadow-brand-500/35 active:scale-[0.98] sm:inline-flex"
            >
              Start a project
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className={`ml-0.5 grid h-10 w-10 place-items-center rounded-full border transition-colors xl:hidden ${
                overDark
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-line-strong text-ink hover:bg-surface-3'
              }`}
            >
              <Menu className="h-[18px] w-[18px]" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[70] xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />

            <motion.div
              className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-bg shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-line px-6">
                <span className="eyebrow text-subtle">Menu</span>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center rounded-full border border-line-strong text-ink transition-colors hover:bg-surface-3"
                >
                  <X className="h-[18px] w-[18px]" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-5">
                {NAV_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.035, duration: 0.35 }}
                  >
                    <NavLink
                      to={item.path}
                      end={item.path === '/'}
                      className={({ isActive }) =>
                        `group flex items-center justify-between rounded-xl px-4 py-3.5 transition-colors ${
                          isActive ? 'bg-surface-3' : 'hover:bg-surface-2'
                        }`
                      }
                    >
                      <span className="flex flex-col gap-0.5">
                        <span className="font-display text-lg font-semibold text-ink">
                          {item.label}
                        </span>
                        <span className="text-xs text-subtle">{item.hint}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-subtle transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <div className="shrink-0 border-t border-line p-5">
                <Link
                  to="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-colors hover:bg-brand-500"
                >
                  Start a project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const IconButton: React.FC<{
  onClick: () => void;
  overDark: boolean;
  label: string;
  children: React.ReactNode;
}> = ({ onClick, overDark, label, children }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={label}
    title={label}
    className={`grid h-10 w-10 place-items-center rounded-full border transition-colors ${
      overDark
        ? 'border-white/15 text-navy-100 hover:bg-white/10 hover:text-white'
        : 'border-line text-muted hover:bg-surface-3 hover:text-ink'
    }`}
  >
    {children}
  </button>
);
