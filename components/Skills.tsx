'use client';

import { motion, type Variants } from 'framer-motion';

const categories = [
  {
    label: 'Programming Languages',
    skills: [
      { name: 'C', level: 85 },
      { name: 'C++', level: 82 },
      { name: 'SQL / MySQL', level: 72 },
    ],
  },
  {
    label: 'Technical Skills',
    skills: [
      { name: 'Problem Solving & DSA', level: 88 },
      { name: 'Cybersecurity (Learning)', level: 45 },
      { name: 'Analytical Thinking', level: 85 },
    ],
  },
];

const tags = [
  'C', 'C++', 'SQL / MySQL', 'Problem Solving', 'Data Structures', 'Cybersecurity (Learning)',
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-white dark:bg-[#121212]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0071E3] mb-3">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] dark:text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-[#6E6E73] dark:text-white/50 max-w-xl mx-auto">
            A blend of technical proficiency and soft skills refined through academics, hackathons, and community work.
          </p>
        </motion.div>

        {/* Floating tags */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {tags.map((tag) => (
            <motion.span
              key={tag}
              variants={item}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 rounded-full text-sm font-medium bg-[#F5F5F7] dark:bg-white/8 text-[#1D1D1F] dark:text-white border border-transparent hover:border-[#0071E3] hover:text-[#0071E3] dark:hover:border-[#0071E3] dark:hover:text-[#0071E3] transition-all duration-200 cursor-default shadow-sm"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Skill bars */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.label}
              variants={item}
              className="bg-[#F5F5F7] dark:bg-[#1C1C1E] rounded-2xl p-6"
            >
              <h3 className="text-xs font-semibold tracking-widest uppercase text-[#6E6E73] dark:text-white/40 mb-5">
                {cat.label}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium text-[#1D1D1F] dark:text-white">{skill.name}</span>
                      <span className="text-xs text-[#6E6E73] dark:text-white/40">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-[#E5E5EA] dark:bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="h-full bg-[#0071E3] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
