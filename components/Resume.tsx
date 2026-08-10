'use client';

import { motion } from 'framer-motion';
import { FileText, Download, Eye } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="section-padding bg-white dark:bg-[#121212]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-[#1D1D1F] dark:bg-[#0A0A0A] p-12 md:p-20 text-center"
        >
          {/* Background glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0071E3]/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#0071E3]/20 flex items-center justify-center"
            >
              <FileText className="w-8 h-8 text-[#0071E3]" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xs font-semibold tracking-widest uppercase text-[#0071E3] mb-4"
            >
              Resume
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4"
            >
              View My Resume
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white/50 max-w-md mx-auto mb-10 leading-relaxed"
            >
              Get a complete overview of my education, skills, projects, and achievements. Available for download as a PDF.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/Namit_Jain_Resume.pdf"
                download="Namit_Jain_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm bg-[#0071E3] text-white hover:bg-[#0077ED] active:scale-95 transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href="/Namit_Jain_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm border border-white/20 text-white hover:bg-white/10 active:scale-95 transition-all duration-200"
              >
                <Eye className="w-4 h-4" />
                Preview
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
