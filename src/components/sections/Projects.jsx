import { motion } from 'framer-motion';
import { FaArrowRightLong, FaGithub } from 'react-icons/fa6';
import GlassPanel from '../ui/GlassPanel';
import SectionHeading from '../ui/SectionHeading';

function Projects({ data }) {
  return (
    <section className="section-gap">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Selected builds that combine modern frontend presentation with practical full stack engineering."
          description="Each project focuses on usability, clean architecture, and the kind of technical depth needed for production-style applications."
        />

        <div className="mt-14 grid gap-8 xl:grid-cols-2">
          {data.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <GlassPanel className="group h-full overflow-hidden p-5 transition duration-300 hover:-translate-y-2 hover:shadow-glow sm:p-6">
                <div className="overflow-hidden rounded-[28px] border border-white/15 bg-white/60 dark:bg-slate-900/55">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-6">
                  <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[var(--text-soft)]">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-teal-700 dark:text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="mt-6 space-y-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-6 text-[var(--text-soft)]">
                      <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300/60 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-1 hover:border-teal-300 hover:bg-white dark:border-white/10 dark:bg-slate-900/55 dark:text-slate-100 dark:hover:bg-slate-900"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-1 hover:shadow-glow"
                  >
                    Live Demo
                    <FaArrowRightLong />
                  </a>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
