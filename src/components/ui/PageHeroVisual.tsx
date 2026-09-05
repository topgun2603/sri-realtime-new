import React from 'react';
import { TechLogo } from './TechLogo';

export type HeroVisualVariant =
  | 'services'
  | 'ai'
  | 'technology'
  | 'process'
  | 'work'
  | 'estimator'
  | 'contact';

const BLUE = '#4C7DF0';
const RED = '#E02424';
const INK = '#DCE6FD';

/** Shared SVG frame: soft core glow plus the faint bounding ring. */
const Frame: React.FC<{ id: string; children: React.ReactNode; label: string }> = ({
  id,
  children,
  label,
}) => (
  <svg viewBox="0 0 520 420" className="h-auto w-full" role="img" aria-label={label}>
    <defs>
      <radialGradient id={`${id}-glow`}>
        <stop offset="0%" stopColor={RED} stopOpacity="0.30" />
        <stop offset="55%" stopColor={BLUE} stopOpacity="0.10" />
        <stop offset="100%" stopColor={BLUE} stopOpacity="0" />
      </radialGradient>
      <linearGradient id={`${id}-edge`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={BLUE} stopOpacity="0.55" />
        <stop offset="100%" stopColor={RED} stopOpacity="0.45" />
      </linearGradient>
    </defs>

    <circle cx="260" cy="210" r="200" fill={`url(#${id}-glow)`} />
    <circle
      cx="260"
      cy="210"
      r="168"
      fill="none"
      stroke={`url(#${id}-edge)`}
      strokeWidth="1"
      strokeDasharray="3 9"
      className="orbit-slow"
      style={{ transformOrigin: '260px 210px' }}
    />

    {children}
  </svg>
);

/** Three stacked module panels — the enterprise systems metaphor. */
const ServicesArt = () => (
  <Frame id="v-services" label="Layered enterprise system modules">
    {[0, 1, 2].map((i) => {
      const x = 118 + i * 34;
      const y = 292 - i * 62;
      return (
        <g key={i} opacity={0.45 + i * 0.27}>
          <rect
            x={x} y={y} width="250" height="92" rx="14"
            fill="#0A1730" stroke={BLUE} strokeOpacity="0.45" strokeWidth="1"
          />
          <rect x={x + 16} y={y + 18} width="46" height="8" rx="4" fill={RED} opacity="0.85" />
          <rect x={x + 16} y={y + 40} width="150" height="6" rx="3" fill={INK} opacity="0.4" />
          <rect x={x + 16} y={y + 56} width="104" height="6" rx="3" fill={INK} opacity="0.25" />
          <circle cx={x + 222} cy={y + 26} r="5" fill={BLUE} opacity="0.8" />
        </g>
      );
    })}
  </Frame>
);

/** A layered neural net with signal pulses. */
const AiArt = () => {
  const layers = [
    { x: 130, ys: [140, 210, 280] },
    { x: 260, ys: [110, 175, 245, 310] },
    { x: 390, ys: [165, 255] },
  ];

  return (
    <Frame id="v-ai" label="Neural network layers passing signals">
      {layers.slice(0, -1).map((layer, li) =>
        layer.ys.map((y1, a) =>
          layers[li + 1].ys.map((y2, b) => (
            <line
              key={`${li}-${a}-${b}`}
              x1={layer.x} y1={y1} x2={layers[li + 1].x} y2={y2}
              stroke={BLUE} strokeOpacity="0.22" strokeWidth="1"
            />
          )),
        ),
      )}

      {layers.map((layer, li) =>
        layer.ys.map((y, i) => (
          <circle
            key={`${li}-${i}`}
            cx={layer.x} cy={y} r={li === 1 ? 9 : 7}
            fill={li === 2 ? RED : '#0A1730'}
            stroke={li === 2 ? RED : BLUE}
            strokeWidth="1.5"
          >
            <animate
              attributeName="opacity"
              values="1;0.45;1"
              dur="3s"
              begin={`${(li * 3 + i) * 0.22}s`}
              repeatCount="indefinite"
            />
          </circle>
        )),
      )}
    </Frame>
  );
};

/** Seven stages travelling along a path. */
const ProcessArt = () => {
  const path = 'M70 330 C 150 330, 150 210, 230 210 S 330 210, 330 120 S 420 90, 460 90';
  const nodes = [
    [70, 330], [148, 300], [212, 232], [280, 205], [330, 152], [386, 100], [460, 90],
  ];

  return (
    <Frame id="v-process" label="Seven delivery stages along a path">
      <path d={path} fill="none" stroke={BLUE} strokeOpacity="0.35" strokeWidth="2" />
      <path
        d={path} fill="none" stroke={RED} strokeWidth="2.5"
        strokeDasharray="10 340" strokeLinecap="round"
      >
        <animate attributeName="stroke-dashoffset" values="350;0" dur="4.5s" repeatCount="indefinite" />
      </path>

      {nodes.map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="16" fill="#0A1730" stroke={BLUE} strokeOpacity="0.6" strokeWidth="1.5" />
          <text
            x={cx} y={cy + 4} textAnchor="middle"
            fontFamily="JetBrains Mono, monospace" fontSize="11" fontWeight="600" fill={INK}
          >
            {`0${i + 1}`}
          </text>
        </g>
      ))}
    </Frame>
  );
};

/** Isometric blocks — solution blueprints assembling. */
const WorkArt = () => {
  const block = (cx: number, cy: number, h: number, key: string, accent: boolean) => {
    const w = 54;
    const d = 27;
    return (
      <g key={key}>
        <polygon
          points={`${cx},${cy - d} ${cx + w},${cy} ${cx},${cy + d} ${cx - w},${cy}`}
          fill={accent ? RED : '#12306E'}
          fillOpacity={accent ? 0.85 : 0.9}
        />
        <polygon
          points={`${cx - w},${cy} ${cx},${cy + d} ${cx},${cy + d + h} ${cx - w},${cy + h}`}
          fill="#081428"
        />
        <polygon
          points={`${cx + w},${cy} ${cx},${cy + d} ${cx},${cy + d + h} ${cx + w},${cy + h}`}
          fill="#0A1B38"
        />
      </g>
    );
  };

  return (
    <Frame id="v-work" label="Modular solution blueprints stacked in isometric view">
      {block(190, 300, 34, 'a', false)}
      {block(320, 300, 34, 'b', false)}
      {block(255, 262, 34, 'c', false)}
      {block(255, 196, 34, 'd', true)}
      {block(255, 130, 34, 'e', false)}
    </Frame>
  );
};

/** Scope bars rising against a timeline. */
const EstimatorArt = () => {
  const bars = [
    { x: 120, h: 62 }, { x: 178, h: 104 }, { x: 236, h: 150 },
    { x: 294, h: 118 }, { x: 352, h: 196 },
  ];

  return (
    <Frame id="v-estimator" label="Scope and timeline estimate chart">
      <line x1="96" y1="330" x2="424" y2="330" stroke={BLUE} strokeOpacity="0.4" strokeWidth="1.5" />
      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1="96" y1={330 - (i + 1) * 52} x2="424" y2={330 - (i + 1) * 52}
          stroke={INK} strokeOpacity="0.10" strokeWidth="1" strokeDasharray="4 8"
        />
      ))}

      {bars.map((bar, i) => (
        <g key={bar.x}>
          <rect
            x={bar.x} y={330 - bar.h} width="42" height={bar.h} rx="8"
            fill={i === bars.length - 1 ? RED : '#12306E'}
            fillOpacity={i === bars.length - 1 ? 0.95 : 0.85}
          />
          <rect x={bar.x} y={330 - bar.h} width="42" height="5" rx="2.5" fill={INK} opacity="0.5" />
        </g>
      ))}
    </Frame>
  );
};

/** Signal rings radiating from a message core. */
const ContactArt = () => (
  <Frame id="v-contact" label="A message signal radiating outward">
    {[60, 96, 132].map((r, i) => (
      <circle
        key={r}
        cx="260" cy="210" r={r}
        fill="none" stroke={BLUE} strokeWidth="1.5" strokeOpacity={0.4 - i * 0.1}
      >
        <animate
          attributeName="r" values={`${r};${r + 16};${r}`}
          dur="4s" begin={`${i * 0.5}s`} repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity" values={`${0.4 - i * 0.1};0.05;${0.4 - i * 0.1}`}
          dur="4s" begin={`${i * 0.5}s`} repeatCount="indefinite"
        />
      </circle>
    ))}

    <rect x="204" y="176" width="112" height="72" rx="12" fill="#0A1730" stroke={RED} strokeWidth="1.5" />
    <path d="M216 190 L260 220 L304 190" fill="none" stroke={RED} strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="260" cy="210" r="150" fill="none" stroke={RED} strokeOpacity="0.25" strokeWidth="1" />
  </Frame>
);

/** Real technology logos orbiting — HTML over SVG so the marks stay upright. */
const TechnologyArt = () => {
  /* The chips are positioned from the ring's own geometry rather than
     hand-tuned percentages, so they can never drift off it. The viewBox is
     520x420 and the wrapper holds that aspect ratio, so a user-space point
     maps straight onto a percentage offset. */
  const VB_W = 520;
  const VB_H = 420;
  const CX = 260;
  const CY = 210;
  const ORBIT_R = 162;

  /* A circle, not an ellipse: the ring rotates, and only a circle keeps the
     chips sitting exactly on it through the whole rotation. */
  const seats = ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes', 'TensorFlow'];

  const seatStyle = (index: number): React.CSSProperties => {
    // Start at twelve o'clock and space the seats evenly around the ring.
    const angle = (-90 + (360 / seats.length) * index) * (Math.PI / 180);
    return {
      left: `${((CX + ORBIT_R * Math.cos(angle)) / VB_W) * 100}%`,
      top: `${((CY + ORBIT_R * Math.sin(angle)) / VB_H) * 100}%`,
    };
  };

  return (
    <div className="relative mx-auto aspect-[520/420] w-full">
      <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <radialGradient id="v-tech-glow">
            <stop offset="0%" stopColor={RED} stopOpacity="0.28" />
            <stop offset="60%" stopColor={BLUE} stopOpacity="0.09" />
            <stop offset="100%" stopColor={BLUE} stopOpacity="0" />
          </radialGradient>
          <linearGradient id="v-tech-edge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={BLUE} stopOpacity="0.5" />
            <stop offset="100%" stopColor={RED} stopOpacity="0.4" />
          </linearGradient>
        </defs>

        <circle cx={CX} cy={CY} r="200" fill="url(#v-tech-glow)" />

        {/* The seated ring */}
        <circle
          cx={CX} cy={CY} r={ORBIT_R}
          fill="none" stroke="url(#v-tech-edge)" strokeWidth="1"
          className="orbit-slow" style={{ transformOrigin: `${CX}px ${CY}px` }}
        />

        {/* Inner ring is decorative only, so it can stay elliptical */}
        <ellipse
          cx={CX} cy={CY} rx="102" ry="96"
          fill="none" stroke="url(#v-tech-edge)" strokeWidth="1" strokeDasharray="3 9"
          className="orbit-rev" style={{ transformOrigin: `${CX}px ${CY}px` }}
        />
      </svg>

      {seats.map((name, i) => (
        <span
          key={name}
          style={seatStyle(i)}
          className="absolute grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-white/12 bg-navy-900/80 backdrop-blur-sm"
          title={name}
        >
          <TechLogo name={name} colored className="h-7 w-7" />
        </span>
      ))}

      <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-[0_0_40px_-6px_rgb(224_36_36_/_0.8)]">
        <img src="/logo.png" alt="" width={48} height={35} className="h-[35px] w-auto" />
      </span>
    </div>
  );
};

const VARIANTS: Record<HeroVisualVariant, React.FC> = {
  services: ServicesArt,
  ai: AiArt,
  technology: TechnologyArt,
  process: ProcessArt,
  work: WorkArt,
  estimator: EstimatorArt,
  contact: ContactArt,
};

/** Generated artwork for an inner page hero, used until a PNG is supplied. */
export const PageHeroVisual: React.FC<{ variant: HeroVisualVariant }> = ({ variant }) => {
  const Art = VARIANTS[variant];
  return <Art />;
};
