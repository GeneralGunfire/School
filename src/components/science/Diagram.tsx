import * as React from 'react';
import type { DiagramSpec, VennSpec } from '@/lib/types';

/**
 * Hand-built Physical Sciences diagrams. Every figure is a fixed viewBox that
 * scales to the column width, with generous margins so no label can be clipped
 * at any size. Colours follow the app's figure palette; ink is `currentColor`
 * so the diagrams read in both light and dark themes.
 */

const INK = 'currentColor';
const MUTED = 'var(--color-muted, #6b6b6b)';
const BLUE = '#2563eb';
const RED = '#dc2626';
const GREEN = '#15803d';
const AMBER = '#b45309';
const VIOLET = '#7c3aed';

const halo = { paintOrder: 'stroke', stroke: 'var(--paper, #fff)', strokeWidth: 4, strokeLinejoin: 'round' } as const;

const Uid = React.createContext('d');

interface TProps {
  x: number;
  y: number;
  /** One string per line. */
  lines: string | string[];
  size?: number;
  anchor?: 'start' | 'middle' | 'end';
  fill?: string;
  bold?: boolean;
  italic?: boolean;
  bg?: boolean;
}

/** Text that can be several lines, optionally haloed so it stays legible over lines. */
function T({ x, y, lines, size = 13, anchor = 'middle', fill = INK, bold, italic, bg }: TProps) {
  const ls = Array.isArray(lines) ? lines : [lines];
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      textAnchor={anchor}
      fill={fill}
      fontWeight={bold ? 700 : 400}
      fontStyle={italic ? 'italic' : 'normal'}
      style={bg ? halo : undefined}
    >
      {ls.map((l, i) => (
        <tspan key={i} x={x} dy={i === 0 ? 0 : size * 1.28}>{l}</tspan>
      ))}
    </text>
  );
}

function Arrow({ x1, y1, x2, y2, color = INK, both, width = 1.8, dashed }: {
  x1: number; y1: number; x2: number; y2: number; color?: string; both?: boolean; width?: number; dashed?: boolean;
}) {
  const uid = React.useContext(Uid);
  const id = (c: string) => `${uid}-ah-${c.replace(/[^a-z0-9]/gi, '')}`;
  return (
    <line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={color} strokeWidth={width}
      strokeDasharray={dashed ? '5 4' : undefined}
      markerEnd={`url(#${id(color)})`}
      markerStart={both ? `url(#${id(color)}s)` : undefined}
    />
  );
}

/** One reusable arrowhead per colour, defined once per diagram. */
function Defs({ colors }: { colors: string[] }) {
  const uid = React.useContext(Uid);
  const id = (c: string) => `${uid}-ah-${c.replace(/[^a-z0-9]/gi, '')}`;
  return (
    <defs>
      {colors.map((c) => (
        <React.Fragment key={c}>
          <marker id={id(c)} viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill={c} />
          </marker>
          <marker id={`${id(c)}s`} viewBox="0 0 10 10" refX="1" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill={c} />
          </marker>
        </React.Fragment>
      ))}
    </defs>
  );
}

const ALL_COLORS = [INK, BLUE, RED, GREEN, AMBER, VIOLET, MUTED];

function pathOf(fn: (x: number) => number, x0: number, x1: number, step = 2) {
  let d = '';
  for (let x = x0; x <= x1 + 0.001; x += step) d += `${d ? 'L' : 'M'} ${x.toFixed(1)} ${fn(x).toFixed(1)} `;
  return d;
}

interface Built {
  w: number;
  h: number;
  body: React.ReactNode;
  alt: string;
}

/* ── Waves ───────────────────────────────────────────────────────────────── */

function waveAnatomy(): Built {
  const w = 680;
  const h = 292;
  const rest = 150;
  const A = 70;
  const lam = 260;
  const x0 = 120;
  const fn = (x: number) => rest - A * Math.sin((2 * Math.PI * (x - x0)) / lam);
  const crest1 = x0 + lam / 4;
  const crest2 = crest1 + lam;
  const trough = crest1 + lam / 2;
  return {
    w, h,
    alt: 'A transverse wave with the rest position, crest, trough, amplitude and wavelength labelled.',
    body: (
      <>
        <line x1={60} y1={rest} x2={660} y2={rest} stroke={MUTED} strokeWidth={1.2} strokeDasharray="6 5" />
        <T x={656} y={rest - 10} lines="rest position" anchor="end" size={12} fill={MUTED} italic />
        <path d={pathOf(fn, x0, x0 + 2 * lam)} fill="none" stroke={BLUE} strokeWidth={3} strokeLinecap="round" />
        {/* amplitude */}
        <line x1={84} y1={rest - A} x2={crest1} y2={rest - A} stroke={RED} strokeWidth={1.2} strokeDasharray="4 4" />
        <Arrow x1={84} y1={rest} x2={84} y2={rest - A} color={RED} both />
        <T x={76} y={rest - A / 2 - 4} lines={['amplitude', '(A)']} anchor="end" size={13} fill={RED} bold />
        {/* crest / trough */}
        <circle cx={crest1} cy={rest - A} r={4.5} fill={BLUE} />
        <circle cx={trough} cy={rest + A} r={4.5} fill={BLUE} />
        <T x={crest1 + 12} y={rest - A - 8} lines="crest" anchor="start" bold />
        <T x={trough} y={rest + A + 24} lines="trough" bold />
        {/* wavelength */}
        <line x1={crest1} y1={rest - A - 4} x2={crest1} y2={40} stroke={GREEN} strokeWidth={1} strokeDasharray="3 4" />
        <line x1={crest2} y1={rest - A - 4} x2={crest2} y2={40} stroke={GREEN} strokeWidth={1} strokeDasharray="3 4" />
        <Arrow x1={crest1} y1={44} x2={crest2} y2={44} color={GREEN} both />
        <T x={(crest1 + crest2) / 2} y={32} lines="wavelength (λ)" fill={GREEN} bold />
        {/* travel */}
        <Arrow x1={120} y1={268} x2={250} y2={268} color={INK} />
        <T x={262} y={273} lines="direction the wave travels" anchor="start" size={12} fill={MUTED} />
      </>
    ),
  };
}

function longitudinalWave(): Built {
  const w = 680;
  const h = 252;
  const rows = [84, 104, 124, 144, 164];
  const k = (2 * Math.PI) / 224;
  const c = 160;
  const cols: number[] = [];
  for (let i = 0; i <= 40; i++) {
    const x0 = 50 + i * 14;
    cols.push(x0 - 8 * Math.sin(k * (x0 - c)));
  }
  return {
    w, h,
    alt: 'A longitudinal wave drawn as particles, with compressions, rarefactions and one wavelength marked.',
    body: (
      <>
        {cols.map((x, i) => rows.map((y) => <circle key={`${i}-${y}`} cx={x} cy={y} r={3.2} fill={BLUE} />))}
        {[c, c + 224].map((x) => (
          <React.Fragment key={x}>
            <T x={x} y={196} lines="compression" fill={RED} bold size={12.5} />
            <T x={x} y={212} lines="(particles close)" fill={MUTED} size={11} />
          </React.Fragment>
        ))}
        <T x={c + 112} y={196} lines="rarefaction" fill={GREEN} bold size={12.5} />
        <T x={c + 112} y={212} lines="(particles spread)" fill={MUTED} size={11} />
        <line x1={c} y1={74} x2={c} y2={44} stroke={AMBER} strokeWidth={1} strokeDasharray="3 4" />
        <line x1={c + 224} y1={74} x2={c + 224} y2={44} stroke={AMBER} strokeWidth={1} strokeDasharray="3 4" />
        <Arrow x1={c} y1={48} x2={c + 224} y2={48} color={AMBER} both />
        <T x={c + 112} y={36} lines="wavelength (λ): compression to compression" fill={AMBER} bold />
        <Arrow x1={50} y1={238} x2={190} y2={238} />
        <T x={200} y={242} lines="direction the wave travels (particles vibrate parallel to this)" anchor="start" size={11.5} fill={MUTED} />
      </>
    ),
  };
}

const pulse = (cx: number, base: number, amp: number, wd = 17) => (x: number) =>
  base - amp * Math.exp(-(((x - cx) / wd) ** 2));

function superposition(): Built {
  const w = 660;
  const h = 368;
  const unit = 10;
  const rowTop = [32, 134, 236];
  const rowName = ['Before they meet', 'While they overlap', 'After they pass'];

  const panel = (ox: number, title: string, a2: number, result: number, note: string[], tone: string) => {
    const base = (r: number) => rowTop[r] + 60;
    const line = (r: number) => <line x1={ox + 10} y1={base(r)} x2={ox + 300} y2={base(r)} stroke={MUTED} strokeWidth={1.1} />;
    const P = (r: number, cx: number, amp: number, color: string, dashed?: boolean) => (
      <path d={pathOf(pulse(ox + cx, base(r), amp * unit), ox + cx - 56, ox + cx + 56, 1.5)} fill="none" stroke={color} strokeWidth={dashed ? 1.6 : 2.6} strokeDasharray={dashed ? '4 3' : undefined} />
    );
    return (
      <g>
        <T x={ox + 155} y={16} lines={title} bold size={14} fill={tone} />
        {[0, 1, 2].map((r) => (
          <React.Fragment key={r}>
            <T x={ox + 10} y={rowTop[r] + 6} lines={rowName[r]} anchor="start" size={11.5} fill={MUTED} italic />
            {line(r)}
          </React.Fragment>
        ))}
        {/* before */}
        {P(0, 70, 3, BLUE)}
        {P(0, 240, a2, RED)}
        <Arrow x1={ox + 52} y1={base(0) + 33} x2={ox + 90} y2={base(0) + 33} color={BLUE} />
        <Arrow x1={ox + 258} y1={base(0) + 33} x2={ox + 222} y2={base(0) + 33} color={RED} />
        {/* overlap */}
        {P(1, 155, 3, BLUE, true)}
        {P(1, 155, a2, RED, true)}
        {P(1, 155, result, tone)}
        <T x={ox + 155} y={base(1) + 34} lines={note[0]} size={11.5} fill={tone} bold />
        {/* after */}
        {P(2, 240, 3, BLUE)}
        {P(2, 70, a2, RED)}
        <Arrow x1={ox + 222} y1={base(2) + 33} x2={ox + 258} y2={base(2) + 33} color={BLUE} />
        <Arrow x1={ox + 90} y1={base(2) + 33} x2={ox + 52} y2={base(2) + 33} color={RED} />
        <T x={ox + 155} y={h - 6} lines={note[1]} size={12} fill={MUTED} />
      </g>
    );
  };

  return {
    w, h,
    alt: 'Two pairs of pulses meeting: on the same side they add (constructive); on opposite sides they partly cancel (destructive).',
    body: (
      <>
        {panel(10, 'Constructive interference', 2, 5, ['resultant: 3 + 2 = 5 units', 'pulses on the SAME side — they add'], GREEN)}
        {panel(345, 'Destructive interference', -2, 1, ['resultant: 3 + (−2) = 1 unit', 'pulses on OPPOSITE sides — they partly cancel'], AMBER)}
      </>
    ),
  };
}

function pitchLoudness(): Built {
  const w = 660;
  const h = 300;
  const rows = [
    { top: 0, name: 'Original note', amp: 18, cycles: 3, color: BLUE },
    { top: 100, name: 'B — LOUDER: bigger amplitude, same frequency', amp: 34, cycles: 3, color: RED },
    { top: 200, name: 'C — HIGHER PITCH: same amplitude, higher frequency', amp: 18, cycles: 6, color: GREEN },
  ];
  return {
    w, h,
    alt: 'Three oscilloscope-style traces: the original, a louder note with larger amplitude, and a higher-pitched note with more waves.',
    body: (
      <>
        {rows.map((r) => {
          const base = r.top + 62;
          const fn = (x: number) => base - r.amp * Math.sin((2 * Math.PI * r.cycles * (x - 30)) / 600);
          return (
            <g key={r.name}>
              <T x={30} y={r.top + 16} lines={r.name} anchor="start" size={12.5} bold fill={r.color} />
              <line x1={30} y1={base} x2={630} y2={base} stroke={MUTED} strokeWidth={1} strokeDasharray="5 4" />
              <path d={pathOf(fn, 30, 630)} fill="none" stroke={r.color} strokeWidth={2.6} />
            </g>
          );
        })}
      </>
    ),
  };
}

function soundRanges(): Built {
  const w = 660;
  const h = 176;
  return {
    w, h,
    alt: 'The frequency scale of sound: infrasound below 20 hertz, audible sound from 20 to 20 000 hertz, ultrasound above 20 000 hertz.',
    body: (
      <>
        <Arrow x1={30} y1={24} x2={630} y2={24} color={MUTED} />
        <T x={630} y={14} lines="frequency increases" anchor="end" size={11.5} fill={MUTED} />
        <rect x={30} y={40} width={170} height={58} rx={4} fill={MUTED} fillOpacity={0.18} stroke={MUTED} />
        <rect x={200} y={40} width={270} height={58} rx={4} fill={GREEN} fillOpacity={0.2} stroke={GREEN} />
        <rect x={470} y={40} width={160} height={58} rx={4} fill={VIOLET} fillOpacity={0.2} stroke={VIOLET} />
        <T x={115} y={64} lines="Infrasound" bold />
        <T x={115} y={84} lines="below 20 Hz" size={12} />
        <T x={335} y={64} lines="Audible sound" bold fill={GREEN} />
        <T x={335} y={84} lines="20 Hz – 20 000 Hz" size={12} />
        <T x={550} y={64} lines="Ultrasound" bold fill={VIOLET} />
        <T x={550} y={84} lines="above 20 000 Hz" size={12} />
        <line x1={200} y1={98} x2={200} y2={112} stroke={INK} />
        <line x1={470} y1={98} x2={470} y2={112} stroke={INK} />
        <T x={200} y={126} lines="20 Hz" size={12} bold />
        <T x={470} y={126} lines="20 000 Hz" size={12} bold />
        <T x={115} y={152} lines={['elephants,', 'earthquakes']} size={11.5} fill={MUTED} />
        <T x={335} y={152} lines="human hearing range" size={11.5} fill={MUTED} />
        <T x={550} y={152} lines={['bats, sonar,', 'medical scans']} size={11.5} fill={MUTED} />
      </>
    ),
  };
}

/* ── Electromagnetic spectrum ────────────────────────────────────────────── */

function emSpectrum(): Built {
  const w = 680;
  const h = 258;
  const bands: { name: string[]; use: string[]; color: string }[] = [
    { name: ['Radio', 'waves'], use: ['TV, radio', 'broadcasts'], color: '#dc2626' },
    { name: ['Micro-', 'waves'], use: ['Wi-Fi,', 'cellphones'], color: '#ea580c' },
    { name: ['Infrared'], use: ['remote', 'controls, heat'], color: '#d97706' },
    { name: ['Visible', 'light'], use: ['human', 'vision'], color: '#15803d' },
    { name: ['Ultra-', 'violet'], use: ['sterilising,', 'sun tan'], color: '#2563eb' },
    { name: ['X-rays'], use: ['bone', 'imaging'], color: '#7c3aed' },
    { name: ['Gamma', 'rays'], use: ['cancer', 'treatment'], color: '#a21caf' },
  ];
  const bw = 88;
  const gap = 5;
  const x0 = (w - (bands.length * bw + (bands.length - 1) * gap)) / 2;
  return {
    w, h,
    alt: 'The electromagnetic spectrum from radio waves to gamma rays; frequency and energy increase left to right while wavelength decreases.',
    body: (
      <>
        <Arrow x1={x0} y1={26} x2={w - x0} y2={26} color={INK} />
        <T x={w - x0} y={16} lines="frequency and energy increase" anchor="end" size={12} bold />
        <Arrow x1={w - x0} y1={52} x2={x0} y2={52} color={MUTED} />
        <T x={x0} y={72} lines="wavelength increases" anchor="start" size={12} bold fill={MUTED} />
        {bands.map((b, i) => {
          const x = x0 + i * (bw + gap);
          return (
            <g key={i}>
              <rect x={x} y={86} width={bw} height={66} rx={6} fill={b.color} fillOpacity={0.9} />
              <T x={x + bw / 2} y={b.name.length === 1 ? 124 : 114} lines={b.name} fill="#fff" bold size={13.5} />
              <T x={x + bw / 2} y={178} lines={b.use} size={11.5} fill={MUTED} />
            </g>
          );
        })}
        <T x={w / 2} y={240} lines="All travel at c = 3,0 × 10⁸ m·s⁻¹ in a vacuum" size={12.5} bold />
      </>
    ),
  };
}

/* ── Electrostatics ──────────────────────────────────────────────────────── */

function atoms(): Built {
  const w = 680;
  const h = 262;
  const defs = [
    { x: 120, title: 'Neutral', e: 3, rel: 'nₚ = nₑ', q: 'Q = 0', color: GREEN },
    { x: 340, title: 'Positively charged', e: 2, rel: 'nₚ > nₑ  (lost an electron)', q: 'Q = +1,6 × 10⁻¹⁹ C', color: RED },
    { x: 560, title: 'Negatively charged', e: 4, rel: 'nₚ < nₑ  (gained an electron)', q: 'Q = −1,6 × 10⁻¹⁹ C', color: BLUE },
  ];
  const cy = 112;
  const R = 50;
  return {
    w, h,
    alt: 'Three atoms, each with three protons: neutral with three electrons, positive with two, negative with four.',
    body: (
      <>
        {defs.map((d) => (
          <g key={d.x}>
            <T x={d.x} y={22} lines={d.title} bold fill={d.color} size={14} />
            <circle cx={d.x} cy={cy} r={R} fill="none" stroke={MUTED} strokeDasharray="4 4" />
            <circle cx={d.x} cy={cy} r={19} fill={RED} fillOpacity={0.18} stroke={RED} strokeWidth={1.6} />
            <T x={d.x} y={cy + 5} lines="3 +" fill={RED} bold size={14} />
            {Array.from({ length: d.e }).map((_, i) => {
              const a = (-Math.PI / 2) + (i * 2 * Math.PI) / d.e;
              const ex = d.x + R * Math.cos(a);
              const ey = cy + R * Math.sin(a);
              return (
                <g key={i}>
                  <circle cx={ex} cy={ey} r={9} fill={BLUE} fillOpacity={0.18} stroke={BLUE} strokeWidth={1.6} />
                  <line x1={ex - 4} y1={ey} x2={ex + 4} y2={ey} stroke={BLUE} strokeWidth={2} />
                </g>
              );
            })}
            <T x={d.x} y={196} lines={`3 protons, ${d.e} electrons`} size={12.5} />
            <T x={d.x} y={216} lines={d.rel} size={12.5} bold />
            <T x={d.x} y={238} lines={d.q} size={12.5} fill={d.color} bold />
          </g>
        ))}
      </>
    ),
  };
}

function chargeSharing(d: Record<string, string | number>): Built {
  const qa = String(d.qa ?? '−8 µC');
  const qb = String(d.qb ?? '+2 µC');
  const qf = String(d.qf ?? '−3 µC');
  const flow = String(d.flow ?? 'electrons move from A to B');
  const w = 680;
  const h = 308;
  const r = 27;
  const rowY = [64, 154, 244];
  const sphere = (cx: number, cy: number, name: string, q: string, color: string, showQ = true) => (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={color} fillOpacity={0.14} stroke={color} strokeWidth={2} />
      <T x={cx} y={cy + 6} lines={name} bold size={17} fill={color} />
      {showQ && <T x={cx} y={cy + r + 18} lines={q} bold size={13} />}
    </g>
  );
  return {
    w, h,
    alt: `Two identical conducting spheres: before contact A is ${qa} and B is ${qb}; after touching and separating each has ${qf}.`,
    body: (
      <>
        <T x={24} y={rowY[0] + 5} lines="1. Before contact" anchor="start" size={12.5} fill={MUTED} bold />
        {sphere(300, rowY[0], 'A', qa, BLUE)}
        {sphere(450, rowY[0], 'B', qb, RED)}

        <T x={24} y={rowY[1] + 5} lines="2. In contact" anchor="start" size={12.5} fill={MUTED} bold />
        {sphere(348, rowY[1], 'A', '', BLUE, false)}
        {sphere(348 + 2 * r, rowY[1], 'B', '', RED, false)}
        <T x={348 + 2 * r + r + 16} y={rowY[1] - 2} lines={flow} anchor="start" size={12} fill={AMBER} bold />
        <T x={348 + 2 * r + r + 16} y={rowY[1] + 16} lines="until the charge is shared equally" anchor="start" size={11.5} fill={MUTED} />

        <T x={24} y={rowY[2] + 5} lines="3. After separating" anchor="start" size={12.5} fill={MUTED} bold />
        {sphere(300, rowY[2], 'A', qf, GREEN)}
        {sphere(450, rowY[2], 'B', qf, GREEN)}
        <T x={560} y={rowY[2] + 4} lines={['Q = (Q₁ + Q₂) ÷ 2', 'same on both']} anchor="start" size={12} fill={GREEN} bold />
      </>
    ),
  };
}

/* ── Circuits ────────────────────────────────────────────────────────────── */

function circuits(): Built {
  const w = 680;
  const h = 292;

  const Resistor = ({ x, y, vertical, label }: { x: number; y: number; vertical?: boolean; label: string }) => (
    <g>
      {vertical ? (
        <>
          <rect x={x - 8} y={y - 20} width={16} height={40} fill="var(--paper, #fff)" stroke={INK} strokeWidth={1.8} />
          <T x={x + 14} y={y + 5} lines={label} anchor="start" size={13} bold fill={AMBER} />
        </>
      ) : (
        <>
          <rect x={x - 20} y={y - 8} width={40} height={16} fill="var(--paper, #fff)" stroke={INK} strokeWidth={1.8} />
          <T x={x} y={y - 15} lines={label} size={13} bold fill={AMBER} />
        </>
      )}
    </g>
  );
  /** Cell on a vertical wire: long plate (+) above, short plate (−) below. */
  const Cell = ({ x, y }: { x: number; y: number }) => (
    <g>
      <rect x={x - 16} y={y - 18} width={32} height={36} fill="var(--paper, #fff)" stroke="none" />
      <line x1={x - 16} y1={y - 5} x2={x + 16} y2={y - 5} stroke={INK} strokeWidth={2.4} />
      <line x1={x - 8} y1={y + 6} x2={x + 8} y2={y + 6} stroke={INK} strokeWidth={4} />
      <T x={x - 24} y={y - 7} lines="+" anchor="end" size={13} bold fill={RED} />
      <T x={x - 24} y={y + 14} lines="−" anchor="end" size={14} bold fill={BLUE} />
    </g>
  );
  const Dot = ({ x, y }: { x: number; y: number }) => <circle cx={x} cy={y} r={3.6} fill={INK} />;

  const ox = 20;
  const px = 360;
  const top = 58;
  const bot = 178;

  return {
    w, h,
    alt: 'A series circuit with two resistors and a parallel circuit with two resistors, with the rules for current, potential difference and resistance beside each.',
    body: (
      <>
        {/* series */}
        <T x={ox + 150} y={22} lines="Series" bold size={15} />
        <polyline points={`${ox + 40},${top} ${ox + 270},${top} ${ox + 270},${bot} ${ox + 40},${bot} ${ox + 40},${top}`} fill="none" stroke={INK} strokeWidth={1.8} />
        <Resistor x={ox + 120} y={top} label="R₁" />
        <Resistor x={ox + 210} y={top} label="R₂" />
        <Cell x={ox + 40} y={(top + bot) / 2} />
        <Arrow x1={ox + 64} y1={top} x2={ox + 92} y2={top} color={RED} />
        <T x={ox + 78} y={top - 10} lines="I" size={13} bold fill={RED} />
        <T x={ox + 155} y={208} lines={['I is the SAME everywhere', 'V = V₁ + V₂', 'Rₜ = R₁ + R₂']} size={12.5} />

        {/* parallel */}
        <T x={px + 150} y={22} lines="Parallel" bold size={15} />
        <polyline points={`${px + 40},${top} ${px + 270},${top} ${px + 270},${bot} ${px + 40},${bot} ${px + 40},${top}`} fill="none" stroke={INK} strokeWidth={1.8} />
        <line x1={px + 150} y1={top} x2={px + 150} y2={bot} stroke={INK} strokeWidth={1.8} />
        <rect x={px + 142} y={(top + bot) / 2 - 20} width={16} height={40} fill="var(--paper, #fff)" stroke={INK} strokeWidth={1.8} />
        <T x={px + 166} y={(top + bot) / 2 + 5} lines="R₁" anchor="start" size={13} bold fill={AMBER} />
        <rect x={px + 262} y={(top + bot) / 2 - 20} width={16} height={40} fill="var(--paper, #fff)" stroke={INK} strokeWidth={1.8} />
        <T x={px + 246} y={(top + bot) / 2 + 5} lines="R₂" anchor="end" size={13} bold fill={AMBER} />
        <Cell x={px + 40} y={(top + bot) / 2} />
        <Dot x={px + 150} y={top} />
        <Dot x={px + 150} y={bot} />
        <Arrow x1={px + 64} y1={top} x2={px + 92} y2={top} color={RED} />
        <T x={px + 78} y={top - 10} lines="I" size={13} bold fill={RED} />
        <T x={px + 155} y={208} lines={['V is the SAME across each branch', 'I = I₁ + I₂', '1/Rₜ = 1/R₁ + 1/R₂']} size={12.5} />
      </>
    ),
  };
}

/* ── Motion ──────────────────────────────────────────────────────────────── */

function motionGraphs(): Built {
  const w = 680;
  const h = 372;
  const cells: { row: number; col: number; y: string; kind: 'line' | 'curve' | 'flat' | 'axis'; note: string }[] = [
    { row: 0, col: 0, y: 'x', kind: 'line', note: 'gradient = velocity' },
    { row: 0, col: 1, y: 'v', kind: 'flat', note: 'area = displacement' },
    { row: 0, col: 2, y: 'a', kind: 'axis', note: 'a = 0' },
    { row: 1, col: 0, y: 'x', kind: 'curve', note: 'gradient increases' },
    { row: 1, col: 1, y: 'v', kind: 'line', note: 'gradient = acceleration' },
    { row: 1, col: 2, y: 'a', kind: 'flat', note: 'area = change in velocity' },
  ];
  const rowTop = [34, 212];
  const colX = [28, 248, 468];
  const AX = 150;
  const AY = 84;
  return {
    w, h,
    alt: 'Position–time, velocity–time and acceleration–time graphs for constant velocity (top row) and constant acceleration (bottom row).',
    body: (
      <>
        <T x={24} y={20} lines="Constant velocity (a = 0)" anchor="start" bold size={13.5} fill={BLUE} />
        <T x={24} y={198} lines="Constant acceleration (from rest)" anchor="start" bold size={13.5} fill={GREEN} />
        {cells.map((c, i) => {
          const ox = colX[c.col] + 12;
          const oy = rowTop[c.row] + AY + 14;
          const color = c.row === 0 ? BLUE : GREEN;
          const stroke = { fill: 'none', stroke: color, strokeWidth: 3, strokeLinecap: 'round' as const };
          let shape: React.ReactNode = null;
          if (c.kind === 'line') shape = <line x1={ox} y1={oy} x2={ox + AX - 24} y2={oy - AY + 18} {...stroke} />;
          if (c.kind === 'curve') shape = <path d={`M ${ox} ${oy} Q ${ox + 70} ${oy} ${ox + AX - 24} ${oy - AY + 18}`} {...stroke} />;
          if (c.kind === 'flat') shape = (
            <>
              <rect x={ox} y={oy - 40} width={AX - 40} height={40} fill={color} fillOpacity={0.14} />
              <line x1={ox} y1={oy - 40} x2={ox + AX - 40} y2={oy - 40} {...stroke} />
            </>
          );
          if (c.kind === 'axis') shape = <line x1={ox} y1={oy} x2={ox + AX - 24} y2={oy} {...stroke} />;
          // the v–t line from rest also shades the area under it
          if (c.row === 1 && c.col === 1) shape = (
            <>
              <polygon points={`${ox},${oy} ${ox + AX - 24},${oy} ${ox + AX - 24},${oy - AY + 18}`} fill={color} fillOpacity={0.14} />
              <line x1={ox} y1={oy} x2={ox + AX - 24} y2={oy - AY + 18} {...stroke} />
            </>
          );
          return (
            <g key={i}>
              <Arrow x1={ox} y1={oy} x2={ox} y2={oy - AY + 2} color={INK} width={1.5} />
              <Arrow x1={ox} y1={oy} x2={ox + AX - 4} y2={oy} color={INK} width={1.5} />
              <T x={ox - 6} y={oy - AY + 8} lines={c.y} anchor="end" size={13} bold italic />
              <T x={ox + AX - 4} y={oy + 16} lines="t" anchor="end" size={13} bold italic />
              {shape}
              <T x={ox + (AX - 4) / 2} y={oy + 34} lines={c.note} size={11.5} fill={MUTED} />
            </g>
          );
        })}
      </>
    ),
  };
}

function distanceDisplacement(): Built {
  const w = 680;
  const h = 276;
  const S = { x: 90, y: 220 };
  const P = { x: 290, y: 220 };
  const E = { x: 290, y: 70 };
  return {
    w, h,
    alt: 'A path of 40 m east then 30 m north: the distance is 70 m but the displacement is the 50 m straight line from start to finish.',
    body: (
      <>
        <polyline points={`${S.x},${S.y} ${P.x},${P.y} ${E.x},${E.y}`} fill="none" stroke={BLUE} strokeWidth={3} strokeLinejoin="round" />
        <Arrow x1={S.x} y1={S.y} x2={E.x} y2={E.y} color={RED} width={2.4} dashed />
        <polyline points={`${P.x - 14},${P.y} ${P.x - 14},${P.y - 14} ${P.x},${P.y - 14}`} fill="none" stroke={INK} strokeWidth={1.3} />
        <circle cx={S.x} cy={S.y} r={5} fill={INK} />
        <circle cx={E.x} cy={E.y} r={5} fill={INK} />
        <T x={S.x - 10} y={S.y + 22} lines="start" anchor="end" bold />
        <T x={E.x + 12} y={E.y - 6} lines="finish" anchor="start" bold />
        <T x={(S.x + P.x) / 2} y={S.y + 26} lines="40 m east" fill={BLUE} bold />
        <T x={P.x + 14} y={(P.y + E.y) / 2 + 4} lines="30 m north" anchor="start" fill={BLUE} bold />
        <T x={(S.x + E.x) / 2 - 16} y={(S.y + E.y) / 2 - 8} lines={['displacement', '= 50 m']} anchor="end" fill={RED} bold />
        <T x={400} y={100} lines="Distance (scalar)" anchor="start" bold size={13.5} fill={BLUE} />
        <T x={400} y={120} lines="total path length = 40 + 30 = 70 m" anchor="start" size={12.5} />
        <T x={400} y={164} lines="Displacement (vector)" anchor="start" bold size={13.5} fill={RED} />
        <T x={400} y={184} lines={['straight line start → finish', '= 50 m, 36,9° north of east', '(Pythagoras: √(40² + 30²))']} anchor="start" size={12.5} />
        <Arrow x1={620} y1={66} x2={620} y2={28} color={INK} />
        <T x={620} y={82} lines="N" size={13} bold />
      </>
    ),
  };
}

function vectorAddition(): Built {
  const w = 680;
  const h = 250;
  const u = 22;
  return {
    w, h,
    alt: 'Adding vectors on one line (5 N right and 3 N left give 2 N right) and head-to-tail on a right angle (4 and 3 give 5).',
    body: (
      <>
        <T x={150} y={22} lines="Vectors on the same line" bold size={13.5} />
        <T x={500} y={22} lines="Head-to-tail (different directions)" bold size={13.5} />
        <Arrow x1={40} y1={70} x2={40 + 5 * u} y2={70} color={BLUE} width={3} />
        <T x={40 + 5 * u + 14} y={74} lines="A = 5 N right" anchor="start" size={12} fill={BLUE} bold />
        <Arrow x1={40 + 5 * u} y1={112} x2={40 + 5 * u - 3 * u} y2={112} color={RED} width={3} />
        <T x={40 + 5 * u + 14} y={116} lines="B = 3 N left" anchor="start" size={12} fill={RED} bold />
        <line x1={20} y1={140} x2={300} y2={140} stroke={MUTED} strokeDasharray="4 4" />
        <Arrow x1={40} y1={172} x2={40 + 2 * u} y2={172} color={GREEN} width={3.4} />
        <T x={40 + 5 * u + 14} y={176} lines="R = A + B = 2 N right" anchor="start" size={12} fill={GREEN} bold />
        <T x={150} y={222} lines="Opposite directions subtract" size={12} fill={MUTED} italic />

        <Arrow x1={380} y1={190} x2={500} y2={190} color={BLUE} width={3} />
        <Arrow x1={500} y1={190} x2={500} y2={100} color={RED} width={3} />
        <Arrow x1={380} y1={190} x2={500} y2={100} color={GREEN} width={3.4} />
        <polyline points="486,190 486,176 500,176" fill="none" stroke={INK} strokeWidth={1.2} />
        <T x={440} y={212} lines="A = 4 N east" fill={BLUE} bold size={12} />
        <T x={514} y={150} lines="B = 3 N north" anchor="start" fill={RED} bold size={12} />
        <T x={432} y={140} lines="R = 5 N" anchor="end" fill={GREEN} bold size={12.5} />
        <T x={500} y={236} lines="Place tail of B at head of A; R joins the start to the end" size={12} fill={MUTED} italic />
      </>
    ),
  };
}

/* ── Energy ──────────────────────────────────────────────────────────────── */

function pendulum(): Built {
  const w = 680;
  const h = 366;
  const px = 340;
  const py = 34;
  const L = 170;
  const th = (40 * Math.PI) / 180;
  const A = { x: px - L * Math.sin(th), y: py + L * Math.cos(th) };
  const B = { x: px, y: py + L };
  const C = { x: px + L * Math.sin(th), y: py + L * Math.cos(th) };
  const barBase = 322;
  const full = 62;
  const states = [
    { p: A, ep: 1, ek: 0, name: 'A', note: ['Eₚ maximum', 'Eₖ = 0'] },
    { p: B, ep: 0, ek: 1, name: 'B', note: ['Eₚ = 0', 'Eₖ maximum'] },
    { p: C, ep: 1, ek: 0, name: 'C', note: ['Eₚ maximum', 'Eₖ = 0'] },
  ];
  return {
    w, h,
    alt: 'A swinging pendulum: at the top of the swing potential energy is greatest and kinetic energy is zero; at the bottom kinetic energy is greatest; mechanical energy stays constant.',
    body: (
      <>
        <line x1={px - 60} y1={py} x2={px + 60} y2={py} stroke={INK} strokeWidth={4} />
        <path d={`M ${A.x} ${A.y} A ${L} ${L} 0 0 0 ${C.x} ${C.y}`} fill="none" stroke={MUTED} strokeDasharray="5 5" />
        <line x1={px} y1={py} x2={B.x} y2={B.y} stroke={INK} strokeWidth={1.5} strokeDasharray="2 4" />
        {states.map((s) => (
          <g key={s.name}>
            <line x1={px} y1={py} x2={s.p.x} y2={s.p.y} stroke={INK} strokeWidth={1.8} />
            <circle cx={s.p.x} cy={s.p.y} r={14} fill={AMBER} fillOpacity={0.25} stroke={AMBER} strokeWidth={2} />
            <T x={s.p.x} y={s.p.y + 5} lines={s.name} bold size={13} />
          </g>
        ))}
        <line x1={110} y1={B.y} x2={570} y2={B.y} stroke={MUTED} strokeWidth={1.2} strokeDasharray="6 5" />
        <T x={570} y={B.y + 18} lines="reference level (h = 0)" anchor="end" size={12} fill={MUTED} italic />
        <Arrow x1={A.x - 36} y1={A.y} x2={A.x - 36} y2={B.y} color={RED} both />
        <T x={A.x - 46} y={(A.y + B.y) / 2 + 4} lines="h" anchor="end" size={14} bold italic fill={RED} />
        {states.map((s) => (
          <g key={s.name}>
            <rect x={s.p.x - 31} y={barBase - s.ep * full} width={26} height={Math.max(s.ep * full, 0)} fill={AMBER} />
            <rect x={s.p.x + 5} y={barBase - s.ek * full} width={26} height={Math.max(s.ek * full, 0)} fill={BLUE} />
            <line x1={s.p.x - 40} y1={barBase} x2={s.p.x + 40} y2={barBase} stroke={INK} />
            <T x={s.p.x} y={barBase + 18} lines={s.note} size={11.5} />
          </g>
        ))}
        <rect x={470} y={252} width={14} height={14} fill={AMBER} />
        <T x={492} y={264} lines="Eₚ = mgh" anchor="start" size={12} />
        <rect x={470} y={274} width={14} height={14} fill={BLUE} />
        <T x={492} y={286} lines="Eₖ = ½mv²" anchor="start" size={12} />
        <T x={500} y={312} lines="Eₘ = Eₚ + Eₖ" anchor="start" size={12} bold fill={GREEN} />
        <T x={500} y={328} lines="same at A, B and C" anchor="start" size={11.5} fill={GREEN} />
      </>
    ),
  };
}

/* ── Venn diagrams (Maths: sets and probability) ────────────────────────── */

function venn(spec: VennSpec): Built {
  const { sets, regions, outsideLabel, universe } = spec;
  const w = 640;
  const h = sets.length === 3 ? 440 : 360;
  const val = (key: string) => regions[key] ?? '';

  if (sets.length === 2) {
    const r = 130;
    const cxA = w / 2 - 70;
    const cxB = w / 2 + 70;
    const cy = h / 2 + 10;
    return {
      w, h,
      alt: `A two-set Venn diagram for ${sets[0]} and ${sets[1]}.`,
      body: (
        <>
          <rect x={30} y={30} width={w - 60} height={h - 60} fill="none" stroke={INK} strokeWidth={1.6} rx={10} />
          {universe && <T x={46} y={54} lines={universe} anchor="start" bold size={14} />}
          <circle cx={cxA} cy={cy} r={r} fill={BLUE} fillOpacity={0.12} stroke={BLUE} strokeWidth={2} />
          <circle cx={cxB} cy={cy} r={r} fill={RED} fillOpacity={0.12} stroke={RED} strokeWidth={2} />
          <T x={cxA - r + 10} y={cy - r + 26} lines={sets[0]} anchor="start" bold size={15} fill={BLUE} />
          <T x={cxB + r - 10} y={cy - r + 26} lines={sets[1]} anchor="end" bold size={15} fill={RED} />
          <T x={cxA - 55} y={cy} lines={String(val('A'))} bold size={20} />
          <T x={(cxA + cxB) / 2} y={cy} lines={String(val('AB'))} bold size={20} />
          <T x={cxB + 55} y={cy} lines={String(val('B'))} bold size={20} />
          <T x={w / 2} y={h - 44} lines={[String(val('outside')), outsideLabel ?? 'neither'].filter(Boolean)} size={13} fill={MUTED} />
        </>
      ),
    };
  }

  // Three sets: classic three-circle symmetric layout.
  const r = 118;
  const cx = w / 2;
  const cyTop = 170;
  const cyBL = 170 + r * 0.95;
  const dx = r * 0.78;
  const A = { x: cx, y: cyTop, color: BLUE };
  const B = { x: cx - dx, y: cyBL, color: RED };
  const C = { x: cx + dx, y: cyBL, color: GREEN };
  return {
    w, h,
    alt: `A three-set Venn diagram for ${sets[0]}, ${sets[1]} and ${sets[2]}.`,
    body: (
      <>
        <rect x={30} y={30} width={w - 60} height={h - 70} fill="none" stroke={INK} strokeWidth={1.6} rx={10} />
        {universe && <T x={46} y={54} lines={universe} anchor="start" bold size={14} />}
        <circle cx={A.x} cy={A.y} r={r} fill={A.color} fillOpacity={0.12} stroke={A.color} strokeWidth={2} />
        <circle cx={B.x} cy={B.y} r={r} fill={B.color} fillOpacity={0.12} stroke={B.color} strokeWidth={2} />
        <circle cx={C.x} cy={C.y} r={r} fill={C.color} fillOpacity={0.12} stroke={C.color} strokeWidth={2} />
        <T x={A.x} y={A.y - r - 12} lines={sets[0]} anchor="middle" bold size={15} fill={A.color} />
        <T x={B.x - r + 6} y={B.y + r + 4} lines={sets[1]} anchor="start" bold size={15} fill={B.color} />
        <T x={C.x + r - 6} y={C.y + r + 4} lines={sets[2]} anchor="end" bold size={15} fill={C.color} />
        {/* region values, hand-placed for the symmetric 3-circle layout */}
        <T x={A.x} y={A.y - 46} lines={String(val('A'))} bold size={17} />
        <T x={B.x - 46} y={B.y + 30} lines={String(val('B'))} bold size={17} />
        <T x={C.x + 46} y={C.y + 30} lines={String(val('C'))} bold size={17} />
        <T x={(A.x + B.x) / 2 - 8} y={(A.y + B.y) / 2 - 6} lines={String(val('AB'))} bold size={16} />
        <T x={(A.x + C.x) / 2 + 8} y={(A.y + C.y) / 2 - 6} lines={String(val('AC'))} bold size={16} />
        <T x={cx} y={B.y + 18} lines={String(val('BC'))} bold size={16} />
        <T x={cx} y={(A.y + B.y + C.y) / 3 + 2} lines={String(val('ABC'))} bold size={16} />
        <T x={w / 2} y={h - 36} lines={[String(val('outside')), outsideLabel ?? 'none of these'].filter(Boolean)} size={13} fill={MUTED} />
      </>
    ),
  };
}

/* ── Renderer ────────────────────────────────────────────────────────────── */

function build(spec: DiagramSpec): Built {
  const d = spec.data ?? {};
  switch (spec.kind) {
    case 'wave-anatomy': return waveAnatomy();
    case 'longitudinal-wave': return longitudinalWave();
    case 'superposition': return superposition();
    case 'pitch-loudness': return pitchLoudness();
    case 'sound-ranges': return soundRanges();
    case 'em-spectrum': return emSpectrum();
    case 'atoms': return atoms();
    case 'charge-sharing': return chargeSharing(d);
    case 'circuits': return circuits();
    case 'motion-graphs': return motionGraphs();
    case 'distance-displacement': return distanceDisplacement();
    case 'vector-addition': return vectorAddition();
    case 'pendulum': return pendulum();
    case 'venn': return venn(spec.venn ?? { sets: ['A', 'B'], regions: {} });
  }
}

export function DiagramBlock({ diagram }: { diagram: DiagramSpec }) {
  const uid = React.useId().replace(/:/g, '');
  const built = build(diagram);
  return (
    <figure className="my-5">
      <Uid.Provider value={uid}>
        <svg
          viewBox={`0 0 ${built.w} ${built.h}`}
          role="img"
          aria-label={built.alt}
          className="mx-auto block h-auto w-full text-ink"
          style={{ maxWidth: built.w * 1.12, fontFamily: 'inherit' }}
        >
          <Defs colors={ALL_COLORS} />
          {built.body}
        </svg>
      </Uid.Provider>
      {diagram.caption && (
        <figcaption className="mx-auto mt-2 max-w-[640px] text-center text-[12.5px] leading-snug text-muted">{diagram.caption}</figcaption>
      )}
    </figure>
  );
}
