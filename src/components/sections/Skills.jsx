import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaLaptopCode, FaScrewdriverWrench, FaServer } from 'react-icons/fa6';
import GlassPanel from '../ui/GlassPanel';
import SectionHeading from '../ui/SectionHeading';

const iconMap = {
  layout: FaLaptopCode,
  server: FaServer,
  database: FaDatabase,
  code: FaCode,
  tool: FaScrewdriverWrench,
};

function Skills({ data }) {
  return (
    <section className="section-gap">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="A versatile stack built for responsive interfaces, backend services, and dependable data layers."
          description="These skills reflect the tools I use most often in personal builds, academic projects, and full stack problem-solving workflows."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {data.skills.map((skillGroup, index) => {
            const Icon = iconMap[skillGroup.icon];

            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <GlassPanel className="h-full p-6 transition duration-300 hover:-translate-y-2 hover:shadow-glow">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-blue-500 text-xl text-slate-950">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
                        {skillGroup.category}
                      </h3>
                      <p className="text-sm text-[var(--text-soft)]">
                        Core tools and working confidence
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 space-y-5">
                    {skillGroup.items.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                            {skill.name}
                          </span>
                          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-soft)]">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-800/80">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassPanel>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
