'use client';

import type { CSSProperties } from 'react';
import ScrollExpand from './ScrollExpand';

const stats = [
  { value: '9.94', label: 'CGPA' },
  { value: '1st', label: 'Pan-India, Mini MBA' },
  { value: '36h', label: 'HackOWASP 8.0 outreach' },
];

export default function Story() {
  return (
    <section id="story" className="relative bg-[#121212]">
      <ScrollExpand
        src="/images/WhatsApp_Image_2026-07-20_at_17.15.24.jpeg"
        alt="Namit Jain"
        title="Beyond the code"
        scrollHint="Scroll to expand"
        useWindowScroll
        startWidth={46}
        startHeight={54}
        startRadius={28}
        endRadius={0}
        mediaZoom={1.3}
        scrollDistance={1.2}
        holdDistance={0.35}
        smoothing={0.1}
        overlayScrim={0.6}
        style={{ '--se-object-position': 'center 22%' } as CSSProperties}
      >
        <p className="text-xs font-semibold tracking-widest uppercase text-[#4DA3FF] mb-4">
          The story so far
        </p>
        <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white mb-4">
          Learning, building, leading.
        </h2>
        <p className="max-w-xl text-sm md:text-lg text-white/75 leading-relaxed mb-8">
          B.Tech CSE student at Thapar, working across software, cybersecurity and community building.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 px-5 py-3"
            >
              <p className="text-2xl font-bold text-white">{s.value}</p>
              <p className="text-xs text-white/60">{s.label}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-6 py-3 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white text-sm font-semibold transition-colors active:scale-95"
        >
          Get in touch
        </button>
      </ScrollExpand>
    </section>
  );
}
