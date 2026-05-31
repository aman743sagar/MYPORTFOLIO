import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';

function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/50 text-slate-800 transition duration-300 hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:bg-slate-800"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <HiOutlineSun className="text-xl" /> : <HiOutlineMoon className="text-xl" />}
    </button>
  );
}

export default ThemeToggle;
