import * as React from 'react';
import type { Figure, FigureAngle, FigureColor, FigureCurve, FigureDir, FigurePoint, FigureSide } from '@/lib/types';

/**
 * Geometry diagrams drawn as SVG from coordinates, so every figure is exact:
 * a point sits where its numbers say it does, and a gradient triangle really
 * has the gradient it is labelled with. One renderer serves both Cartesian
 * plots (axes + grid) and plain shape diagrams (axes off).
 */

const COLOR: Record<FigureColor, string> = {
  main: '#2563eb',
  alt: '#dc2626',
  green: '#15803d',
  amber: '#b45309',
  muted: 'var(--color-muted, #6b6b6b)',
};

const SIDE: Record<FigureSide, { dx: number; dy: number; anchor: 'start' | 'middle' | 'end' }> = {
  n: { dx: 0, dy: -9, anchor: 'middle' },
  s: { dx: 0, dy: 17, anchor: 'middle' },
  e: { dx: 9, dy: 4, anchor: 'start' },
  w: { dx: -9, dy: 4, anchor: 'end' },
  ne: { dx: 8, dy: -8, anchor: 'start' },
  nw: { dx: -8, dy: -8, anchor: 'end' },
  se: { dx: 8, dy: 15, anchor: 'start' },
  sw: { dx: -8, dy: 15, anchor: 'end' },
};

const col = (c?: FigureColor) => COLOR[c ?? 'main'];
const MINUS = '−';
const fmt = (v: number) => (v < 0 ? MINUS : '') + Math.abs(v);

function tickStep(range: number) {
  if (range <= 12) return 1;
  if (range <= 26) return 2;
  if (range <= 60) return 5;
  return 10;
}

const RAD = Math.PI / 180;

/** y = a·f(b·(x − shift)) + q, with angles in degrees; or any supplied function. */
function curveFn(c: FigureCurve): (x: number) => number {
  if (c.fn) return c.fn;
  const a = c.a ?? 1;
  const b = c.b ?? 1;
  const sh = c.shift ?? 0;
  const q = c.q ?? 0;
  switch (c.kind) {
    case 'cos': return (x) => a * Math.cos(b * (x - sh) * RAD) + q;
    case 'tan': return (x) => a * Math.tan(b * (x - sh) * RAD) + q;
    default: return (x) => a * Math.sin(b * (x - sh) * RAD) + q;
  }
}

const halo = { paintOrder: 'stroke', stroke: 'var(--paper)', strokeWidth: 3.5, strokeLinejoin: 'round' } as const;

export function FigureBlock({ figure }: { figure: Figure }) {
  const uid = React.useId().replace(/:/g, '');
  const [x0, x1] = figure.xRange;
  const [y0, y1] = figure.yRange;
  const axes = figure.axes ?? true;
  const grid = figure.grid ?? axes;

  const padL = axes ? 34 : 22;
  const padR = axes ? 28 : 22;
  const padT = axes ? 26 : 22;
  const padB = axes ? 28 : 22;
  const maxW = figure.width ?? 520;
  const maxH = 400;

  // Pixels per unit. Uniform unless `stretch` (y-pixels per x-pixel) is given, as trig graphs need.
  const stretch = figure.stretch ?? 1;
  let scx = (maxW - padL - padR) / (x1 - x0);
  if (scx * stretch * (y1 - y0) > maxH - padT - padB) scx = (maxH - padT - padB) / (stretch * (y1 - y0));
  const scy = scx * stretch;
  const plotW = scx * (x1 - x0);
  const plotH = scy * (y1 - y0);
  const W = plotW + padL + padR;
  const H = plotH + padT + padB;

  const X = (x: number) => padL + (x - x0) * scx;
  const Y = (y: number) => padT + (y1 - y) * scy;

  const pts = new Map<string, FigurePoint>((figure.points ?? []).map((p) => [p.id, p]));
  const P = (id: string) => {
    const p = pts.get(id);
    if (!p) throw new Error(`Figure: unknown point "${id}"`);
    return p;
  };

  const step = tickStep(Math.max(x1 - x0, y1 - y0));
  const stepX = figure.xStep ?? step;
  const stepY = figure.yStep ?? step;
  const xs: number[] = [];
  for (let v = Math.ceil(x0 / stepX - 1e-9) * stepX; v <= x1 + 1e-9; v += stepX) xs.push(Math.round(v * 1e6) / 1e6);
  const ys: number[] = [];
  for (let v = Math.ceil(y0 / stepY - 1e-9) * stepY; v <= y1 + 1e-9; v += stepY) ys.push(Math.round(v * 1e6) / 1e6);
  const fmtX = (v: number) => fmt(v) + (figure.xSuffix ?? '');

  /** Sampled path segments for a curve, broken wherever it leaves the plot or jumps (tan asymptotes). */
  function curvePaths(c: FigureCurve): string[] {
    const f = curveFn(c);
    const [d0, d1] = c.domain ?? [x0, x1];
    const n = Math.max(400, Math.round((d1 - d0) * 2));
    const out: string[] = [];
    let seg = '';
    let prev: number | null = null;
    const span = y1 - y0;
    for (let i = 0; i <= n; i++) {
      const x = d0 + ((d1 - d0) * i) / n;
      const y = f(x);
      const ok = Number.isFinite(y) && y > y0 - span * 2 && y < y1 + span * 2;
      if (!ok || (prev !== null && Math.abs(y - prev) > span * 1.2)) {
        if (seg) out.push(seg);
        seg = '';
        prev = ok ? y : null;
        if (!ok) continue;
      }
      seg += `${seg ? 'L' : 'M'} ${X(x).toFixed(1)} ${Y(y).toFixed(1)} `;
      prev = y;
    }
    if (seg) out.push(seg);
    return out;
  }

  const axisY = y0 <= 0 && y1 >= 0 ? Y(0) : Y(y0);
  const axisX = x0 <= 0 && x1 >= 0 ? X(0) : X(x0);

  /** Direction (math coords, unnormalised) from vertex `at` towards a reference. */
  const dirOf = (ref: FigureDir, at: FigurePoint): [number, number] => {
    if (typeof ref === 'number') {
      const r = (ref * Math.PI) / 180;
      return [Math.cos(r), Math.sin(r)];
    }
    if (ref === '+x') return [1, 0];
    if (ref === '-x') return [-1, 0];
    if (ref === '+y') return [0, 1];
    if (ref === '-y') return [0, -1];
    const p = P(ref);
    return [p.x - at.x, p.y - at.y];
  };

  function renderAngle(a: FigureAngle, i: number) {
    const at = P(a.at);
    const cx = X(at.x);
    const cy = Y(at.y);
    const [ux, uy] = dirOf(a.from, at);
    const [vx, vy] = dirOf(a.to, at);
    const color = col(a.color ?? 'alt');
    if (a.right) {
      const s = 11;
      const lu = Math.hypot(ux, uy) || 1;
      const lv = Math.hypot(vx, vy) || 1;
      const au = [(ux / lu) * s, (-uy / lu) * s];
      const av = [(vx / lv) * s, (-vy / lv) * s];
      const d = `M ${cx + au[0]} ${cy + au[1]} L ${cx + au[0] + av[0]} ${cy + au[1] + av[1]} L ${cx + av[0]} ${cy + av[1]}`;
      return <path key={`ang${i}`} d={d} fill="none" stroke={color} strokeWidth={1.4} />;
    }
    const r = a.radius ?? 24;
    const a1 = Math.atan2(uy, ux);
    let delta = Math.atan2(vy, vx) - a1;
    while (delta <= 0) delta += Math.PI * 2;
    const a2 = a1 + delta;
    const sx = cx + r * Math.cos(a1);
    const sy = cy - r * Math.sin(a1);
    const ex = cx + r * Math.cos(a2);
    const ey = cy - r * Math.sin(a2);
    const mid = a1 + delta / 2;
    return (
      <g key={`ang${i}`}>
        <path
          d={`M ${sx} ${sy} A ${r} ${r} 0 ${delta > Math.PI ? 1 : 0} 0 ${ex} ${ey}`}
          fill="none"
          stroke={color}
          strokeWidth={1.8}
        />
        {a.label && (
          <text
            x={cx + (r + 13) * Math.cos(mid)}
            y={cy - (r + 13) * Math.sin(mid) + 4}
            textAnchor="middle"
            fontSize={14}
            fontWeight={600}
            fill={color}
            style={halo}
          >
            {a.label}
          </text>
        )}
      </g>
    );
  }

  /** Visible span of a line `y = mx + c` or `x = k`, in pixels, clipped to the plot. */
  function lineEnds(m: number | undefined, c: number | undefined, vx: number | undefined) {
    if (vx !== undefined) return { a: [X(vx), Y(y0)], b: [X(vx), Y(y1)] };
    const mm = m ?? 0;
    const cc = c ?? 0;
    return { a: [X(x0), Y(mm * x0 + cc)], b: [X(x1), Y(mm * x1 + cc)] };
  }

  /** A spot on the line well inside the plot, for its label. */
  function lineLabelAt(m: number | undefined, c: number | undefined, vx: number | undefined) {
    if (vx !== undefined) return { x: X(vx) + 6, y: Y(y1) + 14, anchor: 'start' as const };
    const mm = m ?? 0;
    const cc = c ?? 0;
    const dx = x1 - x0;
    const dy = y1 - y0;
    for (let t = 0.97; t > 0.2; t -= 0.03) {
      const x = x0 + dx * t;
      const y = mm * x + cc;
      if (y > y0 + dy * 0.08 && y < y1 - dy * 0.08) return { x: X(x), y: Y(y) - 9, anchor: 'end' as const };
    }
    return { x: X(x1) - 4, y: Y(mm * x1 + cc) - 9, anchor: 'end' as const };
  }

  return (
    <figure className="my-1 overflow-hidden rounded-xl border border-hairline" style={{ background: 'var(--surface-raise)' }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        style={{ display: 'block', maxWidth: W, margin: '0 auto' }}
        role="img"
        aria-label={figure.caption ?? 'Geometry diagram'}
      >
        <defs>
          <clipPath id={`clip-${uid}`}>
            <rect x={padL} y={padT} width={plotW} height={plotH} />
          </clipPath>
        </defs>

        {grid && (
          <g stroke="var(--edge)" strokeWidth={0.8}>
            {xs.map((v) => (
              <line key={`gx${v}`} x1={X(v)} y1={padT} x2={X(v)} y2={padT + plotH} />
            ))}
            {ys.map((v) => (
              <line key={`gy${v}`} x1={padL} y1={Y(v)} x2={padL + plotW} y2={Y(v)} />
            ))}
          </g>
        )}

        {axes && (
          <g stroke="var(--ink-2)" fill="var(--ink-2)" strokeWidth={1.4}>
            <line x1={padL} y1={axisY} x2={padL + plotW + 8} y2={axisY} />
            <polygon points={`${padL + plotW + 15},${axisY} ${padL + plotW + 8},${axisY - 4.5} ${padL + plotW + 8},${axisY + 4.5}`} stroke="none" />
            <line x1={axisX} y1={padT + plotH} x2={axisX} y2={padT - 8} />
            <polygon points={`${axisX},${padT - 15} ${axisX - 4.5},${padT - 8} ${axisX + 4.5},${padT - 8}`} stroke="none" />
            <text x={padL + plotW + 16} y={axisY + 18} fontSize={13} fontStyle="italic" stroke="none">x</text>
            <text x={axisX + 8} y={padT - 12} fontSize={13} fontStyle="italic" stroke="none">y</text>
            {xs.filter((v) => v !== 0).map((v) => (
              <g key={`tx${v}`} stroke="none">
                <line x1={X(v)} y1={axisY - 3.5} x2={X(v)} y2={axisY + 3.5} stroke="var(--ink-2)" strokeWidth={1} />
                <text x={X(v)} y={Math.min(axisY + 17, padT + plotH + 17)} fontSize={11} textAnchor="middle" fill="var(--color-muted, #6b6b6b)" style={halo}>
                  {fmtX(v)}
                </text>
              </g>
            ))}
            {ys.filter((v) => v !== 0).map((v) => (
              <g key={`ty${v}`} stroke="none">
                <line x1={axisX - 3.5} y1={Y(v)} x2={axisX + 3.5} y2={Y(v)} stroke="var(--ink-2)" strokeWidth={1} />
                <text x={Math.max(axisX - 8, padL - 6)} y={Y(v) + 4} fontSize={11} textAnchor="end" fill="var(--color-muted, #6b6b6b)" style={halo}>
                  {fmt(v)}
                </text>
              </g>
            ))}
            {x0 <= 0 && x1 >= 0 && y0 <= 0 && y1 >= 0 && (
              <text x={axisX - 8} y={axisY + 16} fontSize={11} textAnchor="end" fill="var(--color-muted, #6b6b6b)" stroke="none">O</text>
            )}
          </g>
        )}

        <g clipPath={`url(#clip-${uid})`}>
          {(figure.polygons ?? []).map((poly, i) => (
            <polygon
              key={`poly${i}`}
              points={poly.ids.map((id) => `${X(P(id).x)},${Y(P(id).y)}`).join(' ')}
              fill={poly.fill === false ? 'none' : col(poly.color)}
              fillOpacity={0.1}
              stroke={col(poly.color)}
              strokeWidth={2.2}
              strokeLinejoin="round"
            />
          ))}
          {(figure.circles ?? []).map((c, i) => (
            <circle
              key={`circ${i}`}
              cx={X(c.cx)}
              cy={Y(c.cy)}
              r={c.r * scx}
              fill={c.fill === false ? 'none' : col(c.color)}
              fillOpacity={0.08}
              stroke={col(c.color)}
              strokeWidth={2.2}
              strokeDasharray={c.dashed ? '6 5' : undefined}
            />
          ))}
          {(figure.ellipses ?? []).map((e, i) => {
            const rx = e.rx * scx;
            const ry = e.ry * scy;
            const x1p = X(e.cx) - rx;
            const x2p = X(e.cx) + rx;
            const y0p = Y(e.cy);
            const d = e.half
              ? `M ${x1p} ${y0p} A ${rx} ${ry} 0 0 ${e.half === 'lower' ? 0 : 1} ${x2p} ${y0p}`
              : undefined;
            return d ? (
              <path key={`ell${i}`} d={d} fill="none" stroke={col(e.color)} strokeWidth={2} strokeDasharray={e.dashed ? '5 4' : undefined} />
            ) : (
              <ellipse
                key={`ell${i}`}
                cx={X(e.cx)}
                cy={y0p}
                rx={rx}
                ry={ry}
                fill={e.fill === false ? 'none' : col(e.color)}
                fillOpacity={0.1}
                stroke={col(e.color)}
                strokeWidth={2}
                strokeDasharray={e.dashed ? '5 4' : undefined}
              />
            );
          })}
          {(figure.asymptotes ?? []).map((ax) => (
            <line key={`asy${ax}`} x1={X(ax)} y1={padT} x2={X(ax)} y2={padT + plotH} stroke={COLOR.alt} strokeWidth={1.3} strokeDasharray="5 5" opacity={0.7} />
          ))}
          {(figure.curves ?? []).map((c, i) =>
            curvePaths(c).map((d, k) => (
              <path
                key={`cv${i}-${k}`}
                d={d}
                fill="none"
                stroke={col(c.color ?? (['main', 'alt', 'green', 'amber'] as const)[i % 4])}
                strokeWidth={2.4}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={c.dashed ? '6 5' : undefined}
              />
            )),
          )}
          {(figure.lines ?? []).map((ln, i) => {
            const { a, b } = lineEnds(ln.m, ln.c, ln.x);
            return (
              <line
                key={`ln${i}`}
                x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]}
                stroke={col(ln.color ?? (['main', 'alt', 'green', 'amber'] as const)[i % 4])}
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeDasharray={ln.dashed ? '6 5' : undefined}
              />
            );
          })}
        </g>

        {(figure.segments ?? []).map((s, i) => {
          const A = P(s.from);
          const B = P(s.to);
          const ax = X(A.x), ay = Y(A.y), bx = X(B.x), by = Y(B.y);
          const len = Math.hypot(bx - ax, by - ay) || 1;
          const ux = (bx - ax) / len, uy = (by - ay) / len;
          const nx = -uy, ny = ux;
          const mx = (ax + bx) / 2, my = (ay + by) / 2;
          const color = col(s.color);
          const n = s.ticks ?? 0;
          return (
            <g key={`seg${i}`}>
              <line
                x1={ax} y1={ay}
                x2={s.arrow ? bx - ux * 7 : bx} y2={s.arrow ? by - uy * 7 : by}
                stroke={color} strokeWidth={2.2} strokeLinecap="round"
                strokeDasharray={s.dashed ? '6 5' : undefined}
              />
              {s.arrow && (
                <polygon
                  points={`${bx},${by} ${bx - ux * 10 + nx * 4.5},${by - uy * 10 + ny * 4.5} ${bx - ux * 10 - nx * 4.5},${by - uy * 10 - ny * 4.5}`}
                  fill={color}
                />
              )}
              {Array.from({ length: n }, (_, k) => {
                const off = (k - (n - 1) / 2) * 5;
                const cx = mx + ux * off, cy = my + uy * off;
                return <line key={k} x1={cx - nx * 5} y1={cy - ny * 5} x2={cx + nx * 5} y2={cy + ny * 5} stroke={color} strokeWidth={1.8} />;
              })}
              {s.label && (
                <text
                  x={mx + nx * (14 + s.label.length * 2.6 * Math.abs(nx))} y={my + ny * (14 + s.label.length * 2.6 * Math.abs(nx)) + 4}
                  textAnchor="middle" fontSize={13} fontStyle="italic" fontWeight={600} fill={color} style={halo}
                >
                  {s.label}
                </text>
              )}
            </g>
          );
        })}

        {(figure.angles ?? []).map(renderAngle)}

        {(figure.lines ?? []).map((ln, i) => {
          if (!ln.label) return null;
          const at = lineLabelAt(ln.m, ln.c, ln.x);
          return (
            <text
              key={`lnl${i}`} x={at.x} y={at.y} textAnchor={at.anchor}
              fontSize={13} fontWeight={600} fill={col(ln.color ?? (['main', 'alt', 'green', 'amber'] as const)[i % 4])} style={halo}
            >
              {ln.label}
            </text>
          );
        })}

        {(figure.points ?? []).map((p) => {
          const s = SIDE[p.side ?? 'ne'];
          const label = p.label ?? p.id;
          return (
            <g key={p.id}>
              {!p.hide && <circle cx={X(p.x)} cy={Y(p.y)} r={3.8} fill={col(p.color ?? 'alt')} stroke="var(--paper)" strokeWidth={1.2} />}
              {label && (
                <text
                  x={X(p.x) + s.dx} y={Y(p.y) + s.dy} textAnchor={s.anchor}
                  fontSize={13} fontWeight={600} fill="var(--ink)" style={halo}
                >
                  {label}
                </text>
              )}
            </g>
          );
        })}

        {(figure.texts ?? []).map((t, i) => (
          <text
            key={`t${i}`} x={X(t.x)} y={Y(t.y)} textAnchor={t.anchor ?? 'middle'}
            fontSize={13} fontWeight={600} fontStyle="italic" fill={col(t.color ?? 'muted')} style={halo}
          >
            {t.text}
          </text>
        ))}
      </svg>
      {figure.caption && (
        <figcaption className="border-t border-hairline px-4 py-2 text-[12px] text-muted">{figure.caption}</figcaption>
      )}
    </figure>
  );
}
