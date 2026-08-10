'use client';

import { motion, type Variants } from 'framer-motion';
import { Trophy, Star, Target, GraduationCap, Users, Zap, Award, BookOpen } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'CGPA 9.945',
    subtitle: 'Sem II: Perfect 10.00 SGPA',
    desc: 'Achieved CGPA 9.945 in B.Tech CSE at TIET — Semester I SGPA 9.89, Semester II SGPA 10.00 (Perfect Score).',
    color: '#FFD700',
    bg: 'from-yellow-50 to-amber-50 dark:from-yellow-900/15 dark:to-amber-900/10',
  },
  {
    icon: Award,
    title: '1st Rank — Pan-India',
    subtitle: 'Orphicy Mini MBA | BotSpot Brand',
    desc: 'Won First Position nationally at Orphicy Learning\'s Mini MBA. Developed "BotSpot," an online education brand, and pitched to an investor panel in a Shark Tank-style simulation.',
    color: '#FFD700',
    bg: 'from-yellow-50 to-amber-50 dark:from-yellow-900/15 dark:to-amber-900/10',
  },
  {
    icon: Target,
    title: 'JEE Main Qualified',
    subtitle: 'Rank 52,902 | Open Category',
    desc: 'Qualified JEE Main among 15 lakh+ students in the open category, demonstrating strong aptitude in Physics, Chemistry and Mathematics.',
    color: '#0071E3',
    bg: 'from-blue-50 to-sky-50 dark:from-blue-900/15 dark:to-sky-900/10',
  },
  {
    icon: BookOpen,
    title: '94.8% — Class X',
    subtitle: 'Narayana e-Techno School',
    desc: 'Scored 94.8% in CBSE Class 10 board examinations at Narayana e-Techno School, establishing a strong academic foundation.',
    color: '#34C759',
    bg: 'from-green-50 to-emerald-50 dark:from-green-900/15 dark:to-emerald-900/10',
  },
  {
    icon: GraduationCap,
    title: '93.6% — Class XII',
    subtitle: 'Science Stream | CBSE',
    desc: 'Scored 93.6% in CBSE Class 12 with distinction in the Science stream, qualifying JEE Main.',
    color: '#34C759',
    bg: 'from-green-50 to-teal-50 dark:from-green-900/15 dark:to-teal-900/10',
  },
  {
    icon: Star,
    title: 'Gold Medalist — Basketball',
    subtitle: 'Intra-School Championship | Team Captain',
    desc: 'Won Gold Medal as Team Captain at the Intra-School Basketball Championship, leading the team to victory through discipline and strategy.',
    color: '#FFD700',
    bg: 'from-yellow-50 to-orange-50 dark:from-yellow-900/15 dark:to-orange-900/10',
  },
  {
    icon: Zap,
    title: 'SRF Olympiad Medals',
    subtitle: 'Multiple-Time Medal Recipient',
    desc: 'Received medals multiple times at the SRF Olympiad, demonstrating consistent academic excellence at the competitive level.',
    color: '#FF6B35',
    bg: 'from-orange-50 to-red-50 dark:from-orange-900/15 dark:to-red-900/10',
  },
  {
    icon: Users,
    title: 'School Club Leader',
    subtitle: 'Student Council Representative',
    desc: 'Served as School Club Leader, coordinated student activities, and represented the student body as part of the school\'s student council.',
    color: '#5856D6',
    bg: 'from-purple-50 to-indigo-50 dark:from-purple-900/15 dark:to-indigo-900/10',
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-[#F5F5F7] dark:bg-[#1C1C1E]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0071E3] mb-3">Recognition</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] dark:text-white tracking-tight">
            Achievements
          </h2>
          <p className="mt-4 text-[#6E6E73] dark:text-white/50 max-w-xl mx-auto">
            Academic excellence, competitive wins, and leadership milestones that define my journey.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {achievements.map((a) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.title}
                variants={card}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`bg-gradient-to-br ${a.bg} rounded-2xl p-5 border border-white dark:border-white/5 shadow-sm hover:shadow-lg transition-all duration-300`}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${a.color}20` }}
                >
                  <Icon className="w-5 h-5" style={{ color: a.color }} />
                </div>
                <h3 className="text-base font-bold text-[#1D1D1F] dark:text-white mb-0.5 leading-tight">
                  {a.title}
                </h3>
                <p className="text-xs font-semibold text-[#0071E3] mb-2">{a.subtitle}</p>
                <p className="text-xs text-[#6E6E73] dark:text-white/50 leading-relaxed">{a.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
