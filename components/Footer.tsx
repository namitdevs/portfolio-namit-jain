'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const socials = [
  { icon: Github, href: 'https://github.com/namitdevs', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/namit-jain-989156259/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:Namitjain.connect@gmail.com', label: 'Email' },
];

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1D1D1F] dark:bg-[#0A0A0A] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10">
          {/* Brand */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-white tracking-tight"
          >
            Namit <span className="text-[#0071E3]">Jain</span>
          </motion.button>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-sm text-white/50 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-white/8 hover:bg-[#0071E3] flex items-center justify-center transition-colors duration-200"
              >
                <Icon className="w-4 h-4 text-white/70 hover:text-white" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Namit Jain. All rights reserved.
          </p>
          <p className="text-xs text-white/30 flex items-center gap-1.5">
            Built with <Heart className="w-3 h-3 text-red-400" /> and Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
