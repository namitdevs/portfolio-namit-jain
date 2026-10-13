'use client';

import type { ComponentType, CSSProperties } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Code, Cpu, Users } from 'lucide-react';

type IconType = ComponentType<{ className?: string; style?: CSSProperties }>;
type Level = 'Proficient' | 'Comfortable' | 'Learning';

function Shield({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

type Skill = { name: string; level: Level; usedIn: string };
type Category = { label: string; icon: IconType; color: string; skills: Skill[] };

const categories: Category[] = [
  {
    label: 'Programming Languages',
    icon: Code,
    color: '#0071E3',
    skills: [
      { name: 'C', level: 'Proficient', usedIn: 'Coursework & problem solving' },
      { name: 'C++', level: 'Proficient', usedIn: 'Coursework & problem solving' },
    ],
  },
  {
    label: 'Core Computer Science',
    icon: Cpu,
    color: '#5856D6',
    skills: [
      { name: 'Data Structures & Algorithms', level: 'Proficient', usedIn: 'Coursework & practice' },
      { name: 'Problem Solving', level: 'Proficient', usedIn: 'Coursework & hackathons' },
      { name: 'Analytical Thinking', level: 'Comfortable', usedIn: 'Smart India Hackathon feasibility analysis' },
    ],
  },
  {
    label: 'Security',
    icon: Shield,
    color: '#EF4444',
    skills: [
      { name: 'Cybersecurity', level: 'Learning', usedIn: 'OWASP Student Chapter, TIET' },
    ],
  },
  {
    label: 'People & Leadership',
    icon: Users,
    color: '#34C759',
    skills: [
      { name: 'Leadership', level: 'Comfortable', usedIn: 'School Club Leader & OWASP core team' },
      { name: 'Public Speaking', level: 'Comfortable', usedIn: 'Hackathon briefings & student council' },
      { name: 'Outreach & Communication', level: 'Proficient', usedIn: 'HackOWASP 8.0 outreach lead' },
      { name: 'Mentoring', level: 'Comfortable', usedIn: 'OWASP x Google Prompt Wars' },
    ],
  },
];

const levelStyles: Record<Level, string> = {
  Proficient: 'bg-[#0071E3]/10 text-[#0071E3] dark:bg-[#0071E3]/20 dark:text-[#4DA3FF]',
  Comfortable: 'bg-[#5856D6]/10 text-[#5856D6] dark:bg-[#5856D6]/25 dark:text-[#A5A4FF]',
  Learning: 'bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400',
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
            Skills &amp; Technologies
          </h2>
          <p className="mt-4 text-[#6E6E73] dark:text-white/50 max-w-xl mx-auto">
            A blend of technical proficiency and soft skills refined through academics, hackathons, and community work.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.label}
                variants={item}
                whileHover={{ y: -4 }}
                className="bg-[#F5F5F7] dark:bg-[#1C1C1E] rounded-2xl p-6 transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${cat.color}18` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: cat.color }} />
                  </div>
                  <h3 className="text-xs font-semibold tracking-widest uppercase text-[#6E6E73] dark:text-white/50">
                    {cat.label}
                  </h3>
                </div>

                <ul>
                  {cat.skills.map((skill, i) => (
                    <li
                      key={skill.name}
                      className={`py-3 ${i > 0 ? 'border-t border-black/5 dark:border-white/10' : ''}`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm font-semibold text-[#1D1D1F] dark:text-white">{skill.name}</span>
                        <span
                          className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full flex-shrink-0 ${levelStyles[skill.level]}`}
                        >
                          {skill.level === 'Learning' && (
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          )}
                          {skill.level}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-[#6E6E73] dark:text-white/45">{skill.usedIn}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
