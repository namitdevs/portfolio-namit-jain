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

// Deterministic pseudo-random so server and client render the same specks
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
  const width = Math.max(text.length * fontSize * 0.62, fontSize);
  const height = fontSize * 1.4;

  const dots = Array.from({ length: specks }, (_, i) => ({
    cx: seeded(i + 1) * width,
    cy: seeded(i + 101) * height,
    r: 1 + seeded(i + 201) * 2,
    delay: seeded(i + 301) * 3,
  }));

  return (
    <div className={`absolute inset-0 ${className}`}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
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
          x={width / 2}
          y={fontSize}
          textAnchor="middle"
          fontSize={fontSize}
          fontWeight={fontWeight}
          fill="currentColor"
          fillOpacity={0.06}
          stroke="currentColor"
          strokeWidth={1.5}
          strokeDasharray={`${dashLength} ${dashGap}`}
          style={{ whiteSpace: 'pre' }}
        >
          {text.split('').map((char, i) => (
            <tspan
              key={i}
              style={
                reveal === 'letter'
                  ? {
                      opacity: 0,
                      animation: `tt-reveal 0.5s ease forwards`,
                      animationDelay: `${i * 0.12}s`,
                    }
                  : undefined
              }
            >
              {char}
            </tspan>
          ))}
        </text>

        {dots.map((d, i) => (
          <circle
            key={i}
            cx={d.cx}
            cy={d.cy}
            r={d.r}
            fill="#0071E3"
            style={{
              opacity: 0.1,
              animation: 'tt-twinkle 3s ease-in-out infinite',
              animationDelay: `${d.delay}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
