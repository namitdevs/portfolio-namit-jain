'use client';

import { motion, type Variants } from 'framer-motion';
import { MapPin, GraduationCap, Shield, Code2 } from 'lucide-react';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const highlights = [
  {
    icon: GraduationCap,
    title: 'Education',
    desc: 'B.Tech CSE at Thapar Institute of Engineering & Technology — CGPA 9.945',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    desc: 'Active OWASP TIET member, exploring offensive & defensive security',
  },
  {
    icon: Code2,
    title: 'Engineering',
    desc: 'Proficient in C, C++, SQL with a passion for clean, efficient code',
  },
  {
    icon: MapPin,
    title: 'Location',
    desc: 'Gurgaon, Haryana, India',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-[#F5F5F7] dark:bg-[#1C1C1E]">
      <div className="container-max">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left — text */}
          <div>
            <motion.p variants={item} className="text-xs font-semibold tracking-widest uppercase text-[#0071E3] mb-3">
              About Me
            </motion.p>
            <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold text-[#1D1D1F] dark:text-white tracking-tight mb-6">
              Building at the intersection of code &amp; security.
            </motion.h2>
            <motion.p variants={item} className="text-base text-[#6E6E73] dark:text-white/60 leading-relaxed mb-4">
              I&apos;m Namit Jain, a B.Tech CSE student at Thapar Institute of Engineering &amp; Technology with a CGPA of 9.945 and a perfect 10.00 SGPA in Semester II. I&apos;m driven by curiosity — about how systems work, how they can be built better, and how they can be secured.
            </motion.p>
            <motion.p variants={item} className="text-base text-[#6E6E73] dark:text-white/60 leading-relaxed mb-4">
              Beyond academics, I serve as Executive Member (Marketing &amp; Outreach) at the OWASP Student Chapter, helped organize Hackovers 8.0 — TIET&apos;s flagship 36-hour hackathon — and won 1st Place Pan-India at the Orphicy Mini MBA for developing &quot;BotSpot,&quot; an online education brand pitched to investors Shark Tank-style.
            </motion.p>
            <motion.p variants={item} className="text-base text-[#6E6E73] dark:text-white/60 leading-relaxed">
              A Gold Medalist basketball team captain, multiple-time SRF Olympiad medallist, and former school club leader — I believe great engineering is equal parts technical precision and human understanding.
            </motion.p>
          </div>

          {/* Right — cards */}
          <motion.div variants={container} className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={item}
                className="bg-white dark:bg-[#2C2C2E] rounded-2xl p-5 shadow-sm card-hover"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0071E3]/10 dark:bg-[#0071E3]/20 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-[#0071E3]" />
                </div>
                <h3 className="text-sm font-semibold text-[#1D1D1F] dark:text-white mb-1">{title}</h3>
                <p className="text-xs text-[#6E6E73] dark:text-white/50 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
