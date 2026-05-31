import { motion } from 'framer-motion';
import { HiArrowTopRightOnSquare, HiMiniArrowDownTray } from 'react-icons/hi2';
import GlassPanel from '../ui/GlassPanel';
import SectionHeading from '../ui/SectionHeading';

function Timeline({ items }) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-[11px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-teal-400 to-blue-500" />
      <div className="space-y-8">
        {items.map((item) => (
          <div key={`${item.year}-${item.title}`} className="relative">
            <div className="absolute -left-6 top-2 h-5 w-5 rounded-full border-4 border-[var(--page-bg)] bg-gradient-to-r from-teal-400 to-blue-500" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-600 dark:text-cyan-300">
              {item.year}
            </p>
            <h4 className="mt-2 font-display text-xl font-semibold text-slate-900 dark:text-white">
              {item.title}
            </h4>
            <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
              {item.organization}
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Resume({ data }) {
  return (
    <section className="section-gap">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Resume"
          title="A concise view of education, project experience, and the strengths I bring into development teams."
          description="This section gives recruiters and collaborators a fast overview, while the downloadable CV offers a ready-to-share profile."
          align="center"
        />

        <div className="mt-14 grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <GlassPanel className="h-full p-6 sm:p-7">
              <div className="overflow-hidden rounded-[28px] border border-white/15 bg-white/60 dark:bg-slate-900/55">
                <img
                  src={data.resume.previewImage}
                  alt="Resume preview"
                  className="w-full object-cover"
                />
              </div>

              <div className="mt-6">
                <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                  Resume Preview
                </h3>
                <p className="mt-3 text-base leading-7 text-[var(--text-soft)]">
                  Download a compact resume version with education, stack focus, and project-based experience.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={data.resume.cvFile}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-1 hover:shadow-glow"
                >
                  <HiMiniArrowDownTray className="text-lg" />
                  Download CV
                </a>
                <a
                  href={data.resume.cvFile}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300/60 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-1 hover:bg-white dark:border-white/10 dark:bg-slate-900/55 dark:text-slate-100 dark:hover:bg-slate-900"
                >
                  Preview Resume
                  <HiArrowTopRightOnSquare className="text-lg" />
                </a>
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="grid gap-6"
          >
            <GlassPanel className="p-6 sm:p-8">
              <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                Education Timeline
              </h3>
              <div className="mt-8">
                <Timeline items={data.resume.educationTimeline} />
              </div>
            </GlassPanel>

            <GlassPanel className="p-6 sm:p-8">
              <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                Experience Timeline
              </h3>
              <div className="mt-8">
                <Timeline items={data.resume.experienceTimeline} />
              </div>
            </GlassPanel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
