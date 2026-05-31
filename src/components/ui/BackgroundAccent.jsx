import { motion } from 'framer-motion';

function BackgroundAccent() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-24 top-28 h-64 w-64 rounded-full bg-teal-400/18 blur-3xl dark:bg-teal-400/12"
        animate={{ x: [0, 35, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-4rem] top-16 h-72 w-72 rounded-full bg-blue-400/18 blur-3xl dark:bg-blue-500/14"
        animate={{ x: [0, -28, 0], y: [0, 28, 0] }}
        transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-200/25 blur-3xl dark:bg-cyan-400/10"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
    </div>
  );
}

export default BackgroundAccent;
