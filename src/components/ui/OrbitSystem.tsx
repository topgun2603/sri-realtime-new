import React from 'react';

const NODES = [
  { label: 'ERP', angle: 0 },
  { label: 'CRM', angle: 60 },
  { label: 'SCM', angle: 120 },
  { label: 'MIS', angle: 180 },
  { label: 'AI', angle: 240 },
  { label: 'IoT', angle: 300 },
];

const CX = 300;
const CY = 300;
const RX = 228;
const RY = 178;

const pointAt = (angleDeg: number) => {
  const a = (angleDeg * Math.PI) / 180;
  return { x: CX + RX * Math.cos(a), y: CY + RY * Math.sin(a) };
};

/**
 * The hero's brand device: enterprise systems orbiting a live core, echoing
 * the swirl in the SRI REAL TIME mark. Pure SVG, so it costs no image weight
 * and stays crisp at any size.
 */
export const OrbitSystem: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 600 600"
    className={className}
    role="img"
    aria-label="Enterprise systems — ERP, CRM, SCM, MIS, AI and IoT — orbiting a real-time core"
  >
    <defs>
      <radialGradient id="orbit-core-glow">
        <stop offset="0%" stopColor="#E02424" stopOpacity="0.55" />
        <stop offset="60%" stopColor="#C42121" stopOpacity="0.14" />
        <stop offset="100%" stopColor="#C42121" stopOpacity="0" />
      </radialGradient>

      <linearGradient id="orbit-ring" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#4C7DF0" stopOpacity="0.7" />
        <stop offset="50%" stopColor="#7BA2F5" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#E02424" stopOpacity="0.55" />
      </linearGradient>

      <linearGradient id="orbit-spoke" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#E02424" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#4C7DF0" stopOpacity="0.15" />
      </linearGradient>
    </defs>

    {/* Ambient glow behind the core */}
    <circle cx={CX} cy={CY} r="250" fill="url(#orbit-core-glow)" />

    {/* Counter-rotating orbit rings */}
    <g className="orbit-slow" style={{ transformOrigin: '300px 300px' }}>
      <ellipse
        cx={CX}
        cy={CY}
        rx={RX}
        ry={RY}
        fill="none"
        stroke="url(#orbit-ring)"
        strokeWidth="1.5"
        transform={`rotate(-18 ${CX} ${CY})`}
      />
      <ellipse
        cx={CX}
        cy={CY}
        rx={RX - 58}
        ry={RY - 45}
        fill="none"
        stroke="url(#orbit-ring)"
        strokeWidth="1"
        strokeDasharray="3 9"
        transform={`rotate(24 ${CX} ${CY})`}
      />
    </g>

    <g className="orbit-rev" style={{ transformOrigin: '300px 300px' }}>
      <ellipse
        cx={CX}
        cy={CY}
        rx={RX - 112}
        ry={RY - 88}
        fill="none"
        stroke="url(#orbit-ring)"
        strokeWidth="1"
        strokeDasharray="2 7"
        transform={`rotate(-42 ${CX} ${CY})`}
      />
    </g>

    {/* Spokes from the core out to each system */}
    {NODES.map(({ label, angle }) => {
      const { x, y } = pointAt(angle);
      return (
        <line
          key={`spoke-${label}`}
          x1={CX}
          y1={CY}
          x2={x}
          y2={y}
          stroke="url(#orbit-spoke)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
      );
    })}

    {/* System nodes */}
    {NODES.map(({ label, angle }, i) => {
      const { x, y } = pointAt(angle);
      return (
        <g key={label}>
          <rect
            x={x - 40}
            y={y - 17}
            width="80"
            height="34"
            rx="17"
            fill="#0A1730"
            stroke="#4C7DF0"
            strokeOpacity="0.4"
            strokeWidth="1"
          />
          <circle cx={x - 25} cy={y} r="3.5" fill="#E02424">
            <animate
              attributeName="opacity"
              values="1;0.25;1"
              dur="2.6s"
              begin={`${i * 0.42}s`}
              repeatCount="indefinite"
            />
          </circle>
          <text
            x={x + 7}
            y={y + 4.5}
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="13"
            fontWeight="600"
            fill="#DCE6FD"
            letterSpacing="0.08em"
          >
            {label}
          </text>
        </g>
      );
    })}

    {/* Live core — the brand mark on a white badge so it reads on any ground */}
    <circle cx={CX} cy={CY} r="66" fill="#FFFFFF" />
    <circle cx={CX} cy={CY} r="66" fill="none" stroke="#E02424" strokeOpacity="0.35" strokeWidth="2" />
    <image href="/logo.png" x={CX - 46} y={CY - 33} width="92" height="66" preserveAspectRatio="xMidYMid meet" />
  </svg>
);
