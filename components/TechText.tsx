'use client';

import type { CSSProperties } from 'react';

type TechTextProps = {
  text: string;
  fontWeight?: number;
  fontSize?: number;
  reveal?: 'letter' | 'none';
  dashLength?: number;
  dashGap?: number;
  specks?: number;
  className?: string;
};

function seeded(seed: number): number {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

function round(n: number): number {
  return Math.round(n * 100) / 100;
}

export default function TechText({
  text,
  fontWeight = 700,
  fontSize = 150,
  reveal = 'letter',
  dashLength = 4,
  dashGap = 2,
  specks = 15,
  className = '',
}: TechTextProps) {
  const pad = 8;
  const width = Math.round(text.length * fontSize * 0.6 + pad * 2);
  const height = Math.round(fontSize * 1.1);
  const dashTravel = (dashLength + dashGap) * 4;

  const dots = Array.from({ length: specks }, (_, i) => ({
    cx: round(seeded(i + 1) * width),
    cy: round(seeded(i + 101) * height),
    r: round(1 + seeded(i + 201) * 1.5),
    delay: round(seeded(i + 301) * 3),
  }));

  const rootStyle: CSSProperties = { aspectRatio: `${width} / ${height}` };

  return (
    <div className={`relative w-full ${className}`} style={rootStyle}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMinYMid meet"
        className="absolute inset-0 h-full w-full overflow-visible text-[#1D1D1F] dark:text-white"
        role="img"
        aria-label={text}
      >
        <style>{`
          @keyframes tt-reveal { from { opacity: 0; } to { opacity: 1; } }
          @keyframes tt-march { to { stroke-dashoffset: -${dashTravel}; } }
          @keyframes tt-twinkle { 0%, 100% { opacity: 0.1; } 50% { opacity: 0.9; } }
