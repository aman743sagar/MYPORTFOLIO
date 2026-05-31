import { motion } from 'framer-motion';

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeInOut' } }}
    >
      <motion.div
        className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/5"
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
      >
        <div className="absolute inset-3 rounded-full border border-teal-400/40" />
        <div className="font-display text-2xl font-bold tracking-[0.25em] text-white">
          AS
        </div>
      </motion.div>

      <div className="mt-8 flex gap-2">
        {[0, 1, 2].map((index) => (
          <motion.span
            key={index}
            className="h-3 w-3 rounded-full bg-gradient-to-r from-teal-400 to-blue-500"
            animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 0.85,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.12,
            }}
          />
        ))}
      </div>

      <p className="mt-6 text-sm uppercase tracking-[0.35em] text-slate-400">
        Loading portfolio
      </p>
    </motion.div>
  );
}

export default LoadingScreen;
