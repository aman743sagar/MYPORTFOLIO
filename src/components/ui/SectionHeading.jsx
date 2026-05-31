import { motion } from 'framer-motion';

function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment =
    align === 'center'
      ? 'mx-auto max-w-3xl text-center'
      : 'max-w-3xl text-left';

  return (
    <motion.div
      className={alignment}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-teal-500 dark:border-white/10 dark:bg-white/5 dark:text-cyan-300">
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-slate-50">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[var(--text-soft)] sm:text-lg">
        {description}
      </p>
    </motion.div>
  );
}

export default SectionHeading;
