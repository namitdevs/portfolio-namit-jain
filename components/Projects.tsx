'use client';

import { motion, type Variants } from 'framer-motion';
import { Github, Play, Trophy, Zap, Heart, Cpu } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'BotSpot — Orphicy Mini MBA',
    subtitle: 'Online Education Brand | Business Simulation',
    description:
      'Developed "BotSpot," an online education brand, and presented it before an investor panel in a Shark Tank-style business simulation. Strengthened understanding of entrepreneurship, business strategy, financial analysis, branding, market research, and team leadership.',
    tags: ['Entrepreneurship', 'Business Strategy', 'Branding', 'Market Research', 'Financial Analysis', 'Leadership'],
    icon: Trophy,
    accent: '#F59E0B',
    bg: 'from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10',
    youtubeUrl: 'https://youtu.be/aXdvZKLf3V4?si=HQaLMABkN9VxRUWH',
    badge: '1st Place — Pan-India',
    badgeColor: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400',
  },
  {
    id: 2,
    title: 'Ultrasonic Levitator',
    subtitle: 'Arduino & Ultrasonic Transducers | Applied Physics',
    description:
      'Suspended lightweight objects in mid-air using 40 kHz ultrasonic transducers for an Applied Physics coursework project. Assisted in circuit design, breadboard assembly, hardware integration, and delivered a working prototype demonstration. Gained hands-on exposure to standing waves, acoustic radiation pressure, and embedded electronics.',
    tags: ['Arduino', 'Embedded Systems', 'Circuit Design', 'Technical Research', 'Documentation'],
    icon: Cpu,
    accent: '#34C759',
    bg: 'from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10',
    badge: 'Applied Physics Project',
    badgeColor: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
  },
  {
    id: 3,
    title: 'Smart India Hackathon 2025',
    subtitle: 'IoT-Based Renewable Energy Microgrid',
    description:
      'Conducted feasibility and viability analysis for an IoT-based renewable energy microgrid solution, mentored by senior team members. Evaluated technical, operational, legal, and market feasibility, identified implementation challenges, and prepared research-backed documentation for the SIH project presentation.',
    tags: ['IoT', 'Renewable Energy', 'Technical Research', 'Feasibility Analysis', 'Documentation'],
    icon: Zap,
    accent: '#0071E3',
    bg: 'from-blue-50 to-sky-50 dark:from-blue-900/10 dark:to-sky-900/10',
    badge: 'Research Contributor',
    badgeColor: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
  },
  {
    id: 4,
    title: 'Hack2U — Healthcare Solution',
    subtitle: 'Healthcare Innovation Hackathon',
    description:
      'Participated in the development of a healthcare-focused solution at Hack2U, gaining experience in collaborative innovation, rapid problem-solving, and product ideation under hackathon timelines.',
    tags: ['Healthcare', 'Innovation', 'Collaborative Design', 'Product Ideation', 'Hack2U'],
    icon: Heart,
    accent: '#EF4444',
    bg: 'from-red-50 to-rose-50 dark:from-red-900/10 dark:to-rose-900/10',
    badge: 'Hackathon Project',
    badgeColor: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400',
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-[#F5F5F7] dark:bg-[#1C1C1E]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0071E3] mb-3">Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-4 text-[#6E6E73] dark:text-white/50 max-w-xl mx-auto">
            From national-level business competitions to embedded systems — projects that reflect curiosity, initiative, and real-world impact.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                variants={card}
                whileHover={{ y: -6 }}
                className="group bg-white dark:bg-[#2C2C2E] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Card header */}
                <div className={`bg-gradient-to-br ${project.bg} p-8 flex items-center justify-center relative overflow-hidden`}>
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{ backgroundImage: `radial-gradient(circle at 70% 30%, ${project.accent} 0%, transparent 60%)` }}
                  />
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: `${project.accent}15`, border: `1px solid ${project.accent}25` }}
                  >
                    <Icon className="w-10 h-10" style={{ color: project.accent }} />
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-[#1D1D1F] dark:text-white mb-0.5">{project.title}</h3>
                    <p className="text-xs text-[#6E6E73] dark:text-white/40">{project.subtitle}</p>
                  </div>

                  <span className={`self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 ${project.badgeColor}`}>
                    {project.badge}
                  </span>

                  <p className="text-sm text-[#6E6E73] dark:text-white/55 leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-[#F5F5F7] dark:bg-white/8 text-[#6E6E73] dark:text-white/50 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-auto">
                    {project.youtubeUrl ? (
                      <a
                        href={project.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold bg-[#0071E3] text-white hover:bg-[#0077ED] transition-colors"
                      >
                        <Play className="w-3.5 h-3.5" />
                        Watch Demo
                      </a>
                    ) : (
                      <div className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold bg-[#F5F5F7] dark:bg-white/5 text-[#6E6E73] dark:text-white/30">
                        Details on Resume
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/namitdevs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#0071E3] hover:underline"
          >
            <Github className="w-4 h-4" />
            View all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
