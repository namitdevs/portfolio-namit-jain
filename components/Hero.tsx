'use client';

import { useEffect, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, ChevronDown } from 'lucide-react';
import TechText from './TechText';
import HoloCard from './HoloCard';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7 },
  }),
};

function useIsDark() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const el = document.documentElement;
    const update = () => setDark(el.classList.contains('dark'));
    update();
    const observer = new MutationObserver(update);
    observer.observe(el, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);
  return dark;
}

export default function Hero() {
  const isDark = useIsDark();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-[#121212] px-6 pt-28 pb-24">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-blob animation-delay-0 absolute -top-40 -left-40 w-96 h-96 bg-blue-100/60 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70" />
        <div className="animate-blob animation-delay-2000 absolute top-1/3 -right-40 w-80 h-80 bg-sky-100/60 dark:bg-sky-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70" />
        <div className="animate-blob animation-delay-4000 absolute -bottom-40 left-1/3 w-72 h-72 bg-blue-50/80 dark:bg-blue-800/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
        {/* Text content */}
        <div className="text-left order-2 md:order-1">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F5F7] dark:bg-white/10 text-xs font-medium text-[#6E6E73] dark:text-white/60 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Open to opportunities
          </motion.div>

          {/* Interactive name */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-4"
          >
            <h1 className="sr-only">Namit Jain</h1>
            <div className="relative w-full h-[110px] md:h-[150px]">
              <TechText
                text="Namit Jain"
                fontWeight={700}
                fontSize={150}
                reveal="letter"
                dashLength={4}
                dashGap={2}
                specks={15}
                color={isDark ? '#ffffff' : '#1D1D1F'}
                accentColor="#0071E3"
                letterSpacing={-0.05}
                reach={200}
                softness={0.7}
                strokeWidth={1.5}
                speed={1}
                lineStyle="dashed"
                selection
                labels
                draggable
                sweep
              />
            </div>
          </motion.div>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-base md:text-lg font-medium text-[#1D1D1F] dark:text-white/80 mb-2"
          >
            B.Tech CSE @ Thapar Institute of Engineering &amp; Technology
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-sm md:text-base text-[#6E6E73] dark:text-white/50 mb-10"
          >
            Aspiring Software Engineer &amp; Cybersecurity Enthusiast
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-3"
          >
            <a
              href="/Namit_Jain_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button text-sm"
            >
              <FileText className="w-4 h-4" />
              View Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="apple-button-outline text-sm"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
            <a
              href="https://github.com/namitdevs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full font-medium text-sm px-6 py-3 border border-[#D2D2D7] dark:border-white/20 text-[#1D1D1F] dark:text-white hover:border-[#1D1D1F] dark:hover:border-white transition-all duration-200 active:scale-95"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/namit-jain-989156259/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full font-medium text-sm px-6 py-3 border border-[#D2D2D7] dark:border-white/20 text-[#0077B5] dark:text-[#0077B5] hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-all duration-200 active:scale-95"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Photo as holo card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-fit max-w-full">
            <HoloCard
              image="/images/WhatsApp_Image_2026-07-20_at_17.15.24.jpeg"
              alt="Namit Jain"
              preset="rainbow"
              foilColor="#e2e6ec"
              intensity={0.7}
              scale={1}
              edgeSparkle={0.8}
              frame={4}
              glare={0.5}
              tiltMax={14}
              hoverScale={1.04}
              radius={24}
              width={320}
              idle
              shadow
            />
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 z-10 glass dark:glass-dark rounded-2xl px-4 py-3 shadow-lg pointer-events-none"
            >
              <p className="text-xs font-semibold text-[#1D1D1F] dark:text-white">CGPA</p>
              <p className="text-2xl font-bold text-[#0071E3]">9.94</p>
              <p className="text-xs text-[#6E6E73] dark:text-white/50">Sem II: 10.00</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#6E6E73] dark:text-white/40 hover:text-[#0071E3] transition-colors"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}
