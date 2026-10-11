'use client';

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

function seeded(seed: number) {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

export default function TechText({
  text,
  fontWeight = 600,
  fontSize = 120,
  reveal = 'letter',
  dashLength = 4,
  dashGap = 2,
  specks = 15,
  className = '',
}: TechTextProps) {
  const pad = 6;
  const width = text.length * fontSize * 0.58 + pad * 2;
  const height = fontSize * 1.1;

  const dots = Array.from({ length: specks }, (_, i) => ({
    cx: seeded(i + 1) * width,
    cy: seeded(i + 101) * height,
    r: 1 + seeded(i + 201) * 1.5,
    delay: seeded(i + 301) * 3,
  }));

  return (
    <div className={`absolute inset-0 ${className}`}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMinYMid meet"
        className="w-full h-full text-[#1D1D1F] dark:text-white"
        role="img"
        aria-label={text}
      >
        <style>{`
          @keyframes tt-reveal { from { opacity: 0; } to { opacity: 1; } }
          @keyframes tt-march { to { stroke-dashoffset: -${(dashLength + dashGap) * 4}; } }
          @keyframes tt-twinkle { 0%,100% { opacity: .1; } 50% { opacity: .9; } }
          .tt-text { animation: tt-march 1.5s linear infinite; }
        `}</style>

        <text
          className="tt-text"
          x={pad}
          y={fontSize * 0.88}
          textAnchor="start"
          fontSize={fontSize}
          fontWeight={fontWeight}
          fill="currentColor"
          fillOpacity={0.06}
          stroke="currentColor"
          strokeWidth={1.5}
