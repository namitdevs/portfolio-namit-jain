'use client';

import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle } from 'lucide-react';

const info = [
  {
    icon: Mail,
    label: 'Email',
    value: 'Namitjain.connect@gmail.com',
    href: 'mailto:Namitjain.connect@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/namitdevs',
    href: 'https://github.com/namitdevs',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'namit-jain-989156259',
    href: 'https://www.linkedin.com/in/namit-jain-989156259/',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Gurgaon, Haryana, India',
    href: null,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6 } }),
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate a brief send delay
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-padding bg-[#F5F5F7] dark:bg-[#1C1C1E]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0071E3] mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] dark:text-white tracking-tight">
            Let's Connect
          </h2>
          <p className="mt-4 text-[#6E6E73] dark:text-white/50 max-w-xl mx-auto">
            Whether it's an opportunity, a collaboration, or just a hello — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-[#2C2C2E] rounded-3xl p-8 shadow-sm space-y-5"
          >
            <div>
              <label className="block text-xs font-semibold text-[#6E6E73] dark:text-white/50 mb-2 tracking-wide uppercase">
                Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] dark:bg-[#3A3A3C] border border-transparent focus:border-[#0071E3] outline-none text-sm text-[#1D1D1F] dark:text-white placeholder:text-[#AEAEB2] dark:placeholder:text-white/30 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#6E6E73] dark:text-white/50 mb-2 tracking-wide uppercase">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] dark:bg-[#3A3A3C] border border-transparent focus:border-[#0071E3] outline-none text-sm text-[#1D1D1F] dark:text-white placeholder:text-[#AEAEB2] dark:placeholder:text-white/30 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#6E6E73] dark:text-white/50 mb-2 tracking-wide uppercase">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] dark:bg-[#3A3A3C] border border-transparent focus:border-[#0071E3] outline-none text-sm text-[#1D1D1F] dark:text-white placeholder:text-[#AEAEB2] dark:placeholder:text-white/30 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending || sent}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-sm bg-[#0071E3] text-white hover:bg-[#0077ED] disabled:opacity-60 active:scale-[0.98] transition-all duration-200"
            >
              {sent ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Message Sent!
                </>
              ) : sending ? (
                <span className="animate-pulse">Sending...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </motion.form>

          {/* Info cards */}
          <div className="space-y-4">
            {info.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <motion.div
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                  className="bg-white dark:bg-[#2C2C2E] rounded-2xl p-5 flex items-center gap-4 shadow-sm cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#0071E3]/10 dark:bg-[#0071E3]/15 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#0071E3]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#6E6E73] dark:text-white/40 uppercase tracking-wide mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-[#1D1D1F] dark:text-white">{item.value}</p>
                  </div>
                </motion.div>
              );

              return item.href ? (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0071E3] to-[#0050A0] rounded-2xl p-6 text-white"
            >
              <h3 className="font-bold text-lg mb-2">Open to Opportunities</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Currently looking for internships, research collaborations, and hackathon teams. If you have an exciting opportunity, let&apos;s talk!
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
