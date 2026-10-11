'use client';

type TechTextProps = {
  text: string;
  fontWeight?: number;
  fontSize?: number;
  reveal?: 'letter' | 'none';
  dashLength?: number;
  dashGap?: number;
  specks?: number;
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
}: TechTextProps) {
  const pad = 8;
  const width = Math.round(text.length * fontSize * 0.6 + pad * 2);
  const height = Math.round(fontSize * 1.1);
  const dashTravel = (dashLength + dashGap) * 4;
  const ratio = round((height / width) * 100);

  const dots = Array.from({ length: specks }, (_, i) => ({
    cx: round(seeded(i + 1) * width),
    cy: round(seeded(i + 101) * height),
    r: round(1 + seeded(i + 201) * 1.5),
    delay: round(seeded(i + 301) * 3),
  }));

  return (
    <div style={{ position: 'relative', width: '100%', paddingBottom: `${ratio}%` }}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMinYMid meet"
        className="text-[#1D1D1F] dark:text-white"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'visible',
        }}
        role="img"
        aria-label={text}
      >
        <style>{`
          @keyframes tt-reveal { from { opacity: 0; } to { opacity: 1; } }
          @keyframes tt-march { to { stroke-dashoffset: -${dashTravel}; } }
          @keyframes tt-twinkle { 0%, 100% { opacity: 0.1; } 50% { opacity: 0.9; } }
          .tt-text { animation: tt-march 1.5s linear infinite; }
        `}</style>

        <text
          className="tt-text"
          x={pad}
          y={Math.round(fontSize * 0.88)}
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
                      animation: 'tt-reveal 0.5s ease forwards',
                      animationDelay: `${round(i * 0.12)}s`,
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
