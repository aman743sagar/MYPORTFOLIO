import { motion } from 'framer-motion';
import { HiAcademicCap, HiMiniBriefcase, HiMiniMapPin, HiSparkles } from 'react-icons/hi2';
import GlassPanel from '../ui/GlassPanel';
import SectionHeading from '../ui/SectionHeading';

const featureIcons = [HiAcademicCap, HiMiniBriefcase, HiSparkles, HiMiniMapPin];

function About({ data }) {
  return (
    <section className="section-gap">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About Me"
          title="A professional summary grounded in strong fundamentals and practical full stack work."
          description="I focus on building products that feel modern on the surface and dependable underneath, with reusable components, clean backend logic, and attention to real users."
        />

        <div className="mt-14 grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          <GlassPanel className="p-6 sm:p-8">
            <div className="grid gap-8">
              <div>
                <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                  Professional Summary
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--text-soft)]">
                  {data.about.summary}
                </p>
              </div>

              <div>
                <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                  Career Objective
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--text-soft)]">
                  {data.about.objective}
                </p>
              </div>

              <div>
                <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                  Education & Experience Focus
                </h3>
                <ul className="mt-4 space-y-3">
                  {data.about.experienceHighlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 rounded-2xl border border-white/15 bg-white/55 px-4 py-4 text-sm leading-6 text-[var(--text-soft)] dark:bg-slate-900/50"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GlassPanel>

          <div className="grid gap-6">
            <div className="grid gap-5 sm:grid-cols-2">
              {data.about.cards.map((card, index) => {
                const Icon = featureIcons[index % featureIcons.length];
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                  >
                    <GlassPanel className="h-full p-6 transition duration-300 hover:-translate-y-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-blue-500 text-slate-950">
                        <Icon className="text-xl" />
                      </div>
                      <p className="mt-5 text-sm uppercase tracking-[0.3em] text-[var(--text-soft)]">
                        {card.title}
                      </p>
                      <h4 className="mt-3 font-display text-xl font-semibold text-slate-900 dark:text-white">
                        {card.value}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-[var(--text-soft)]">
                        {card.detail}
                      </p>
                    </GlassPanel>
                  </motion.div>
                );
              })}
            </div>

            <GlassPanel className="p-6 sm:p-8">
              <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                Personal Information
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {data.about.personalInfo.map((info) => (
                  <div
                    key={info.label}
                    className="rounded-2xl border border-white/15 bg-white/55 p-4 dark:bg-slate-900/50"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-soft)]">
                      {info.label}
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-800 dark:text-slate-100">
                      {info.value}
                    </p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
