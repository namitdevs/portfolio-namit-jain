'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Code } from 'lucide-react';
import OrbitImages from './OrbitImages';

function Shield({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

const experiences = [
  {
    role: 'Core Member (Executive Team) - Marketing & Outreach',
    short: 'OWASP Core',
    org: 'OWASP Student Chapter, TIET',
    period: 'Oct 2026 - Present',
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
    role: 'Member',
    short: 'OWASP Member',
    org: 'OWASP Student Chapter, TIET',
    period: 'Nov 2025 - Oct 2026',
    icon: Shield,
    color: '#0071E3',
    points: [
      'Contributed to chapter activities and events, including HackOWASP 8.0.',
    ],
    skills: ['Teamwork', 'Communication', 'Cybersecurity'],
  },
  {
    role: 'Mentor & Briefing Lead',
    short: 'Prompt Wars',
    org: 'OWASP x Google Prompt Wars Hackathon',
    period: 'Aug 2026',
    icon: Shield,
    color: '#0071E3',
    points: [
      'Conducted the complete participant briefings for the hackathon.',
      'Mentored students on GitHub, guiding them through uploading and managing their projects on repositories.',
      'Assisted teams with deploying their projects on Vercel and Render.',
      'Represented the Outreach & PR department in the afternoon session, presenting its role and key responsibilities.',
      'Highlighted the department\'s achievements, including driving participant turnout beyond expectations and exceeding the venue capacity originally booked.',
    ],
    skills: ['Mentoring', 'GitHub', 'Deployment', 'Public Speaking'],
  },
  {
    role: 'Event Organizer — Outreach Lead',
    short: 'HackOWASP 8.0',
    org: 'HackOWASP 8.0 — TIET\'s Flagship 36-Hour Hackathon',
    period: 'Apr 2026',
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
    short: 'Student Council',
    org: 'Narayana e-Techno School — Student Council',
    period: '2020 — 2023',
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

type Exp = (typeof experiences)[number];

function DetailCard({ exp }: { exp: Exp }) {
  const Icon = exp.icon;
  const isCurrent = exp.period.includes('Present');
  return (
    <div className="bg-[#F5F5F7] dark:bg-[#1C1C1E] rounded-2xl p-6 md:p-8 text-left">
      <div className="flex items-start gap-4 mb-4">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${exp.color}20` }}
        >
          <Icon className="w-5 h-5" style={{ color: exp.color }} />
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base md:text-lg font-bold text-[#1D1D1F] dark:text-white">{exp.role}</h3>
            {isCurrent && (
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Present
              </span>
            )}
          </div>
          <p className="text-sm text-[#6E6E73] dark:text-white/60">{exp.org}</p>
          <span className="text-xs text-[#0071E3] font-medium">{exp.period}</span>
        </div>
      </div>
      <ul className="space-y-2 mb-5">
        {exp.points.map((pt, i) => (
          <li key={i} className="text-sm text-[#6E6E73] dark:text-white/65 leading-relaxed flex gap-2">
            <span className="text-[#0071E3] mt-1 flex-shrink-0">•</span>
            {pt}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5">
        {exp.skills.map((s) => (
          <span
            key={s}
            className="text-xs px-2.5 py-1 rounded-full bg-white dark:bg-[#2C2C2E] text-[#6E6E73] dark:text-white/60"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const orbitItems = experiences.map((exp, i) => {
    const Icon = exp.icon;
    const isActive = i === active;
    return (
      <div key={exp.short} className="relative w-full">
        <button
          type="button"
          onClick={() => setActive(i)}
          aria-label={`${exp.role} — ${exp.org}`}
          aria-pressed={isActive}
          className={`flex w-full aspect-square items-center justify-center rounded-full border-[4px] bg-[#F5F5F7] dark:bg-[#1C1C1E] transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0071E3] ${
            isActive ? 'scale-110' : 'opacity-80 hover:opacity-100 hover:scale-105'
          }`}
          style={{
            borderColor: exp.color,
            boxShadow: isActive ? `0 0 0 10px ${exp.color}22, 0 0 40px ${exp.color}88` : 'none',
          }}
        >
          <Icon className="w-[46px] h-[46px]" style={{ color: exp.color }} />
        </button>
        <span
          className={`pointer-events-none absolute left-1/2 top-full mt-4 -translate-x-1/2 whitespace-nowrap text-[24px] font-semibold transition-colors duration-300 ${
            isActive ? 'text-[#1D1D1F] dark:text-white' : 'text-[#6E6E73] dark:text-white/60'
          }`}
        >
          {exp.short}
        </span>
      </div>
    );
  });

  return (
    <section id="experience" className="section-padding bg-white dark:bg-[#121212]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0071E3] mb-3">Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] dark:text-white tracking-tight">
            Experience
          </h2>
          <p className="mt-4 text-[#6E6E73] dark:text-white/50 max-w-xl mx-auto">
            A timeline of leadership, community building, and technical involvement.
          </p>
        </motion.div>

        {/* Desktop / tablet: orbit + detail card */}
        <div className="hidden md:block">
          <div
            className="max-w-5xl mx-auto"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <OrbitImages
              items={orbitItems}
              shape="ellipse"
              baseWidth={1400}
              radiusX={620}
              radiusY={170}
              rotation={-6}
              duration={45}
              itemSize={110}
              responsive
              aspectRatio="2.4 / 1"
              direction="normal"
              fill
              showPath
              pathColor="rgba(0,113,227,0.35)"
              pathWidth={2}
              paused={paused}
              centerContent={
                <div className="text-center">
                  <p className="text-xs font-semibold tracking-widest uppercase text-[#0071E3] mb-1">Journey</p>
                  <p className="text-2xl lg:text-3xl font-bold text-[#1D1D1F] dark:text-white">
                    {experiences.length} roles
                  </p>
                  <p className="text-xs text-[#6E6E73] dark:text-white/50 mt-1">Hover to pause · click a role</p>
                </div>
              }
            />
          </div>

          <div className="max-w-2xl mx-auto mt-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <DetailCard exp={experiences[active]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden space-y-5">
          {experiences.map((exp) => (
            <motion.div
              key={exp.short}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
            >
              <DetailCard exp={exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
