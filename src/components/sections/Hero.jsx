import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { HiArrowDownTray, HiArrowLongRight } from 'react-icons/hi2';
import { MdOutlineMail } from 'react-icons/md';
import { Link } from 'react-scroll';
import GlassPanel from '../ui/GlassPanel';
import { useTypingEffect } from '../../hooks/useTypingEffect';

const socialIconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  Email: MdOutlineMail,
};

function Hero({ data }) {
  const typedText = useTypingEffect(data.hero.rotatingTitles);

  return (
    <section className="section-gap">
      <div className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <span className="inline-flex rounded-full border border-teal-400/20 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-teal-700 dark:bg-slate-900/50 dark:text-cyan-300">
              {data.hero.badge}
            </span>

            <p className="mt-8 text-base font-medium uppercase tracking-[0.35em] text-[var(--text-soft)]">
              Hello, I&apos;m
            </p>

            <h1 className="mt-3 font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white">
              {data.owner.name}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-lg text-slate-700 dark:text-slate-200">
              <span className="rounded-full border border-white/20 bg-white/60 px-4 py-2 font-semibold dark:bg-slate-900/55">
                {data.owner.role}
              </span>
              <span className="rounded-full border border-white/20 bg-white/60 px-4 py-2 font-semibold dark:bg-slate-900/55">
                {data.owner.specialization}
              </span>
            </div>

            <div className="mt-6 min-h-[3.5rem] font-display text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-white">
              <span className="gradient-text">{typedText}</span>
              <span className="ml-1 inline-block h-8 w-[3px] animate-pulse rounded-full bg-teal-400 align-middle" />
            </div>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
              {data.hero.intro}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--text-soft)]">
              {data.hero.tagline}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={data.resume.cvFile}
                download
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-1 hover:shadow-glow"
              >
                <HiArrowDownTray className="text-lg" />
                Download CV
              </a>
              <Link
                to="contact"
                smooth
                offset={-90}
                duration={650}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-slate-300/60 bg-white/60 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-1 hover:border-teal-300 hover:bg-white dark:border-white/10 dark:bg-slate-900/55 dark:text-slate-100 dark:hover:bg-slate-900"
              >
                Contact Me
                <HiArrowLongRight className="text-lg" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {data.socialLinks.map((social) => {
                const Icon = socialIconMap[social.label];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/60 text-slate-800 transition hover:-translate-y-1 hover:border-teal-300/40 hover:bg-white dark:border-white/10 dark:bg-slate-900/55 dark:text-slate-100 dark:hover:bg-slate-800"
                    aria-label={social.label}
                  >
                    <Icon className="text-lg" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-teal-400/30 via-cyan-300/20 to-blue-500/25 blur-3xl" />
            <GlassPanel className="grid-pattern relative overflow-hidden rounded-[36px] p-6 shadow-glow sm:p-8">
              <div className="absolute inset-x-8 top-0 h-32 rounded-b-full bg-gradient-to-b from-white/25 to-transparent blur-2xl dark:from-white/10" />
              <div className="grid gap-6">
                <div className="rounded-[30px] border border-white/20 bg-white/50 p-4 dark:bg-slate-900/60">
                  <img
                    src={data.owner.profileImage}
                    alt={`Portrait of ${data.owner.name}`}
                    className="mx-auto h-[340px] w-full max-w-md rounded-[24px] object-cover object-center shadow-2xl sm:h-[420px]"
                    loading="eager"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {data.hero.stats.map((stat) => (
                    <motion.div
                      key={stat.label}
                      whileHover={{ y: -6 }}
                      className="rounded-[24px] border border-white/15 bg-white/55 p-4 text-center dark:bg-slate-900/60"
                    >
                      <p className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm text-[var(--text-soft)]">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
