'use client';

import { motion, type Variants } from 'framer-motion';
import { Users, Code } from 'lucide-react';

function Shield({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

const experiences = [
  {
    role: 'Executive Member — Marketing & Outreach',
    org: 'OWASP Student Chapter, TIET',
    period: '2024 — Present',
    icon: Shield,
    color: '#0071E3',
    points: [
      'Contributed to marketing and outreach initiatives as part of the chapter\'s executive team.',
      'Led outreach initiatives by connecting with student organizations and General Secretaries from colleges across India.',
      'Collected contact information, coordinated institutional communication and email campaigns to increase chapter visibility.',
    ],
    skills: ['Marketing', 'Outreach', 'Communication', 'Cybersecurity'],
  },
  {
    role: 'Event Organizer — Outreach Lead',
    org: 'Hackovers 8.0 — TIET\'s Flagship 36-Hour Hackathon',
    period: '2024',
    icon: Code,
    color: '#5856D6',
    points: [
      'Supported event planning and execution for TIET\'s flagship 36-hour hackathon.',
      'Led outreach initiatives by connecting with student organizations and colleges across India.',
      'Coordinated institutional communications and email campaigns to drive participation.',
      'Assisted in participant engagement and on-ground event management.',
    ],
    skills: ['Event Management', 'Outreach', 'Leadership', 'Networking'],
  },
  {
    role: 'School Club Leader',
    org: 'Narayana e-Techno School — Student Council',
    period: '2021 — 2023',
    icon: Users,
    color: '#34C759',
    points: [
      'Served as School Club Leader and represented the student body as part of the student council.',
      'Coordinated student activities and organized inter-school initiatives.',
      'Developed strong public speaking and team leadership capabilities.',
    ],
    skills: ['Leadership', 'Public Speaking', 'Communication', 'Teamwork'],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-white dark:bg-[#121212]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0071E3] mb-3">Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] dark:text-white tracking-tight">
            Experience
          </h2>
          <p className="mt-4 text-[#6E6E73] dark:text-white/50 max-w-xl mx-auto">
            A timeline of leadership, community building, and technical involvement.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#0071E3]/40 via-[#0071E3]/20 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => {
              const Icon = exp.icon;
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={exp.org}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-40px' }}
                  className={`relative flex flex-col md:flex-row ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-start md:items-center`}
                >
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-[#0071E3] bg-white dark:bg-[#121212] hidden md:block" style={{ top: '50%', transform: 'translate(-50%, -50%)' }} />

                  <div className={`hidden md:block md:w-1/2 ${isLeft ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <span className="text-xs font-semibold text-[#6E6E73] dark:text-white/40 tracking-wide">{exp.period}</span>
                  </div>

                  <div className="md:w-1/2 pl-0 md:pl-12 md:pr-0 w-full">
                    <div className="bg-[#F5F5F7] dark:bg-[#1C1C1E] rounded-2xl p-6 card-hover">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${exp.color}15` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: exp.color }} />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-[#1D1D1F] dark:text-white">{exp.role}</h3>
                          <p className="text-sm text-[#6E6E73] dark:text-white/50">{exp.org}</p>
                          <span className="md:hidden text-xs text-[#0071E3] font-medium">{exp.period}</span>
                        </div>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {exp.points.map((pt, i) => (
                          <li key={i} className="text-sm text-[#6E6E73] dark:text-white/55 leading-relaxed flex gap-2">
                            <span className="text-[#0071E3] mt-1 flex-shrink-0">•</span>
                            {pt}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map((s) => (
                          <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-white dark:bg-[#2C2C2E] text-[#6E6E73] dark:text-white/50">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
