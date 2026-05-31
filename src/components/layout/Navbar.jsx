import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import { Link } from 'react-scroll';
import ThemeToggle from '../ui/ThemeToggle';

function Navbar({ links, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 28);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClassName = scrolled
    ? 'glass-panel border-white/10 shadow-[0_22px_60px_rgba(15,23,42,0.12)]'
    : 'border border-transparent bg-transparent';

  const sharedLinkProps = {
    spy: true,
    smooth: true,
    offset: -90,
    duration: 650,
    activeClass: 'nav-active',
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="section-shell py-4">
        <div className={`rounded-full px-4 py-3 transition-all duration-300 ${navClassName}`}>
          <div className="flex items-center justify-between gap-4">
            <Link
              to="home"
              {...sharedLinkProps}
              className="group flex cursor-pointer items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-500 font-display text-lg font-bold text-slate-950 shadow-lg shadow-teal-500/20">
                AS
              </div>
              <div className="hidden sm:block">
                <p className="font-display text-base font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                  Aman Sagar
                </p>
                <p className="text-sm text-[var(--text-soft)]">Full Stack Developer</p>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  {...sharedLinkProps}
                  className="relative cursor-pointer px-4 py-2 text-sm font-medium text-slate-600 transition hover:text-slate-950 before:absolute before:bottom-1 before:left-4 before:h-0.5 before:w-[calc(100%-2rem)] before:origin-left before:scale-x-0 before:rounded-full before:bg-gradient-to-r before:from-teal-400 before:to-blue-500 before:transition-transform dark:text-slate-300 dark:hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

              <button
                type="button"
                onClick={() => setMobileOpen((open) => !open)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/50 text-slate-900 transition hover:bg-white lg:hidden dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100"
                aria-label="Toggle navigation menu"
              >
                {mobileOpen ? <HiXMark className="text-2xl" /> : <HiBars3 className="text-2xl" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {mobileOpen ? (
              <motion.nav
                className="mt-4 flex flex-col gap-2 rounded-3xl border border-white/15 bg-white/80 p-4 dark:border-white/10 dark:bg-slate-950/90 lg:hidden"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22 }}
              >
                {links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    {...sharedLinkProps}
                    onClick={() => setMobileOpen(false)}
                    className="cursor-pointer rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                ))}
              </motion.nav>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
