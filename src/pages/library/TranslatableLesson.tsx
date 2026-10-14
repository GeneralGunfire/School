import { AnimatePresence, motion } from 'motion/react';
import {
  Columns2, Languages, MousePointer2, ChevronDown, ChevronUp,
  Lightbulb, Zap, HelpCircle, CheckCircle2, Bot, Check, Copy,
} from 'lucide-react';
import * as React from 'react';
import type { Lesson, LessonBlock, DefinitionRow, AcronymItem, PoemLine, QAItem, SolutionStep } from '@/lib/types';
import { RichText, Tex } from '@/components/math/Tex';
import { FigureBlock } from '@/components/math/Figure';
import { cn } from '@/lib/utils';
import { SegmentedControl } from '@/components/ui/primitives';
import { EASE_OUT_EXPO } from '@/lib/motion';

export type TranslationMode = 'off' | 'split' | 'hover';

/* ── AI Prompt generator ─────────────────────────────────────────────────── */

function buildSectionPrompt(lessonTitle: string, sectionTitle: string, blocks: LessonBlock[]): string {
  const lines: string[] = [
    `I am studying ${lessonTitle}.`,
    `I am currently on the section: "${sectionTitle}".`,
    ``,
    `Here is the content from my textbook for this section:`,
    ``,
  ];

  for (const b of blocks) {
    if (b.type === 'heading') {
      lines.push(`## ${b.text as string}`);
    } else if (b.type === 'paragraph') {
      lines.push(b.text as string);
    } else if (b.type === 'callout') {
      lines.push(`WORKED EXAMPLE:\n${b.text as string}`);
    } else if (b.type === 'list' && Array.isArray(b.text)) {
      for (const item of b.text as string[]) lines.push(`• ${item}`);
    } else if (b.type === 'math' && typeof b.text === 'string') {
      lines.push(`${b.label ? b.label + ': ' : ''}${b.text}`);
    } else if (b.type === 'steps' && b.steps) {
      for (const st of b.steps) lines.push(`${st.note ? st.note + ' ' : ''}${st.tex}`);
    } else if (b.type === 'definitions' && b.rows) {
      for (const row of b.rows) lines.push(`${row.term}: ${row.meaning}`);
    } else if (b.type === 'questions' && b.qa) {
      lines.push(`PRACTICE QUESTIONS:`);
      for (const qa of b.qa) {
        lines.push(`Q: ${qa.q}${qa.marks ? ` (${qa.marks} marks)` : ''}`);
      }
    }
  }

  lines.push(``);
  lines.push(`Please help me understand this section thoroughly. Explain the key concepts in detail, ` +
    `walk me through any worked examples step by step, and then give me additional practice questions ` +
    `with full solutions. Format your explanation to match the style and level of the South African ` +
    `Grade 10 CAPS mathematics curriculum.`);

  return lines.join('\n');
}

export function buildTopicPrompt(lesson: Lesson): string {
  const sectionTitles: string[] = [];
  for (const b of lesson.blocks) {
    if (b.type === 'heading' && b.level === 2) sectionTitles.push(b.text as string);
  }

  const lines: string[] = [
    `I am studying the topic: "${lesson.title}".`,
    ``,
    `This topic covers the following sections:`,
  ];
  for (const t of sectionTitles) lines.push(`• ${t}`);
  lines.push(``);
  lines.push(`Please give me a comprehensive, exam-ready guide for this entire topic as per the South African Grade 10 CAPS curriculum. For each section:`);
  lines.push(`1. Explain all key concepts and definitions`);
  lines.push(`2. Provide step-by-step worked examples (including examples that require interpreting graphs where relevant)`);
  lines.push(`3. Give a set of practice exam questions at different difficulty levels with full solutions`);
  lines.push(`4. Highlight common mistakes and exam tips`);
  lines.push(``);
  lines.push(`Format your response with clear headings for each section.`);

  return lines.join('\n');
}

function AiPromptButton({ prompt, label }: { prompt: string; label: string }) {
  const [copied, setCopied] = React.useState(false);

  const copy = () => {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={copy}
      className={cn(
        'flex items-center gap-2 rounded-xl border px-3.5 py-2 text-[12.5px] font-semibold transition-all duration-150',
        copied
          ? 'border-positive bg-positive/10 text-positive'
          : 'border-[#5865f2]/40 bg-[#5865f2]/8 text-[#5865f2] hover:bg-[#5865f2]/14 hover:border-[#5865f2]/60',
      )}
    >
      {copied ? <Check className="size-3.5" /> : <Bot className="size-3.5" />}
      {copied ? 'Copied!' : label}
      {!copied && <Copy className="size-3 opacity-60" />}
    </button>
  );
}

/* ── Definitions block ───────────────────────────────────────────────────── */

function DefinitionsBlock({ rows }: { rows: DefinitionRow[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-hairline-strong">
      <div className="grid grid-cols-[minmax(160px,28%)_1fr] border-b border-hairline bg-paper-raise">
        <div className="px-4 py-2.5">
          <span className="text-[10.5px] font-bold tracking-[0.12em] text-muted-2 uppercase">Term / Concept</span>
        </div>
        <div className="border-l border-hairline px-4 py-2.5">
          <span className="text-[10.5px] font-bold tracking-[0.12em] text-muted-2 uppercase">Definition / Meaning</span>
        </div>
      </div>
      {rows.map((row, i) => (
        <div
          key={i}
          className={cn(
            'grid grid-cols-[minmax(160px,28%)_1fr]',
            i < rows.length - 1 && 'border-b border-hairline',
          )}
        >
          <div className="px-4 py-3">
            <span className="text-[13.5px] font-semibold text-ink">{row.term}</span>
          </div>
          <div className="border-l border-hairline px-4 py-3">
            <span className="text-[13.5px] leading-[1.65] text-ink-2">{row.meaning}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Acronym / mnemonic block ────────────────────────────────────────────── */

function AcronymBlock({ word, forWhat, items }: { word?: string; forWhat?: string; items?: AcronymItem[] }) {
  if (!items?.length) return null;
  return (
    <div
      className="rounded-xl border border-hairline-strong p-5"
      style={{ background: 'var(--surface-raise)' }}
    >
      <div className="mb-4 flex items-start gap-4">
        <div
          className="grid size-12 shrink-0 place-items-center rounded-xl text-[22px] font-black tracking-tighter text-accent"
          style={{ background: 'var(--color-accent-wash, color-mix(in srgb, var(--color-accent) 12%, transparent))' }}
        >
          {word ?? '?'}
        </div>
        <div className="min-w-0 flex-1 pt-1">
          <p className="text-[11px] font-bold tracking-[0.11em] text-muted-2 uppercase">Mnemonic</p>
          {forWhat && <p className="mt-0.5 text-[13px] text-muted">{forWhat}</p>}
        </div>
        <Zap className="mt-1 size-4 shrink-0 text-accent opacity-60" aria-hidden />
      </div>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <span
              className="grid size-8 shrink-0 place-items-center rounded-lg text-[15px] font-black text-accent"
              style={{ background: 'var(--color-accent-wash, color-mix(in srgb, var(--color-accent) 10%, transparent))' }}
            >
              {item.letter}
            </span>
            <div className="min-w-0 flex-1 pt-1">
              <span className="text-[14px] font-semibold text-ink">{item.stands}</span>
              {item.note && <p className="mt-0.5 text-[12px] leading-snug text-muted">{item.note}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Poem block (verse) ──────────────────────────────────────────────────── */

function PoemBlock({ lines }: { lines?: PoemLine[] }) {
  if (!lines?.length) return null;
  return (
    <div
      className="rounded-xl border border-hairline px-6 py-5"
      style={{ background: 'var(--surface-raise)', fontFamily: 'Georgia, serif' }}
    >
      {lines.map((line, i) => (
        <div key={i} className="flex items-baseline gap-3">
          <span className="w-6 shrink-0 text-right text-[10px] tabular-nums text-muted-2 select-none">{line.n}</span>
          <span className="text-[15px] leading-[1.9] text-ink">{line.text}</span>
        </div>
      ))}
    </div>
  );
}

/* ── Line-by-line analysis block ─────────────────────────────────────────── */

function LineAnalysisBlock({ lines }: { lines?: PoemLine[] }) {
  const [openId, setOpenId] = React.useState<number | null>(null);
  if (!lines?.length) return null;

  return (
    <div className="space-y-1.5">
      {lines.map((line) => {
        const open = openId === line.n;
        const hasNote = !!line.note;
        const hasDevices = !!line.devices?.length;

        return (
          <div
            key={line.n}
            className={cn(
              'overflow-hidden rounded-lg border transition-colors duration-100',
              open ? 'border-hairline-strong' : 'border-hairline',
            )}
            style={{ background: open ? 'var(--surface-raise)' : undefined }}
          >
            <button
              className={cn(
                'flex w-full items-start gap-3 px-4 py-3 text-left',
                (hasNote || hasDevices) && 'cursor-pointer hover:bg-paper-raise',
              )}
              onClick={() => (hasNote || hasDevices) && setOpenId(open ? null : line.n)}
              disabled={!hasNote && !hasDevices}
            >
              <span className="mt-[3px] w-5 shrink-0 text-right text-[10.5px] tabular-nums text-muted-2 select-none">{line.n}</span>
              <span className="min-w-0 flex-1 font-['Georgia',_serif] text-[14px] leading-[1.75] text-ink">
                {line.text}
              </span>
              {(hasNote || hasDevices) && (
                open
                  ? <ChevronUp className="mt-1 size-3.5 shrink-0 text-muted-2" aria-hidden />
                  : <ChevronDown className="mt-1 size-3.5 shrink-0 text-muted-2" aria-hidden />
              )}
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.18, ease: EASE_OUT_EXPO }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-hairline px-4 py-3 pl-12 space-y-2.5">
                    {line.note && (
                      <div className="flex gap-2.5">
                        <Lightbulb className="mt-0.5 size-3.5 shrink-0 text-accent" aria-hidden />
                        <p className="text-[13.5px] leading-[1.7] text-ink-2">{line.note}</p>
                      </div>
                    )}
                    {line.devices && line.devices.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {line.devices.map((d, i) => (
                          <span
                            key={i}
                            className="rounded-md px-2 py-0.5 text-[11px] font-semibold text-accent"
                            style={{ background: 'var(--color-accent-wash, color-mix(in srgb, var(--color-accent) 10%, transparent))' }}
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/* ── Questions / model answers block ────────────────────────────────────── */

function QuestionsBlock({ qa }: { qa?: QAItem[] }) {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);
  if (!qa?.length) return null;

  return (
    <div className="space-y-2">
      {qa.map((item, i) => {
        const open = openIdx === i;
        const showContext = !!item.context && item.context !== qa[i - 1]?.context;
        return (
          <React.Fragment key={i}>
            {showContext && (
              <p className="px-1 pt-3 text-[13.5px] leading-[1.65] text-ink-2 first:pt-0">
                <RichText text={item.context!} />
              </p>
            )}
          <div
            className={cn(
              'overflow-hidden rounded-xl border transition-colors duration-100',
              open ? 'border-hairline-strong' : 'border-hairline',
            )}
          >
            <button
              className="flex w-full items-start gap-3 px-4 py-3.5 text-left hover:bg-paper-raise"
              onClick={() => setOpenIdx(open ? null : i)}
            >
              <span
                className="mt-0.5 flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full px-1.5 text-[10px] font-bold text-white"
                style={{ background: open ? 'var(--color-accent, #6366f1)' : 'var(--ink-3, #999)' }}
              >
                {item.n ?? i + 1}
              </span>
              <span className="min-w-0 flex-1 text-[14px] font-semibold leading-snug text-ink">
                <RichText text={item.q} />
                {item.marks !== undefined && (
                  <span className="ml-2 text-[12px] font-normal text-muted-2">({item.marks} marks)</span>
                )}
              </span>
              {open
                ? <ChevronUp className="mt-1 size-3.5 shrink-0 text-muted-2" aria-hidden />
                : <ChevronDown className="mt-1 size-3.5 shrink-0 text-muted-2" aria-hidden />}
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.18, ease: EASE_OUT_EXPO }}
                  className="overflow-hidden"
                >
                  <div
                    className="border-t border-hairline px-4 py-4"
                    style={{ background: 'var(--surface-raise)' }}
                  >
                    <div className="mb-2 flex items-center gap-1.5">
                      <CheckCircle2 className="size-3.5 shrink-0 text-positive" aria-hidden />
                      <span className="text-[10.5px] font-bold tracking-[0.1em] text-positive uppercase">Model Answer</span>
                    </div>
                    {Array.isArray(item.a) ? (
                      <ol className="space-y-1.5">
                        {(item.a as string[]).map((point, pi) => (
                          <li key={pi} className="flex gap-2.5 text-[13.5px] leading-[1.7] text-ink-2">
                            <span className="mt-[2px] shrink-0 text-[11px] font-bold text-positive tabular-nums">{pi + 1}.</span>
                            <span><RichText text={point} /></span>
                          </li>
                        ))}
                      </ol>
                    ) : (
                      <p className="text-[13.5px] leading-[1.75] text-ink-2"><RichText text={item.a as string} /></p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

/* ── Graph block (inline SVG) ────────────────────────────────────────────── */

const CURVE_COLORS = ['#6366f1', '#f59e0b', '#10b981', '#f43f5e', '#8b5cf6'];

function buildCurveSegments(
  evalFn: (x: number) => number | null,
  xMin: number, xMax: number, steps: number,
  toSvgX: (x: number) => number,
  toSvgY: (y: number) => number,
  plotH: number,
): string[] {
  const segments: string[] = [];
  let seg = '';
  let prevSy: number | null = null;
  for (let i = 0; i <= steps; i++) {
    const x = xMin + (i / steps) * (xMax - xMin);
    const y = evalFn(x);
    if (y === null || !isFinite(y)) {
      if (seg) { segments.push(seg); seg = ''; }
      prevSy = null;
      continue;
    }
    const sx = toSvgX(x);
    const sy = toSvgY(y);
    if (prevSy !== null && Math.abs(sy - prevSy) > plotH * 0.75) {
      if (seg) { segments.push(seg); seg = ''; }
      prevSy = null;
    }
    if (!seg) {
      seg = `M ${sx.toFixed(1)} ${sy.toFixed(1)}`;
    } else {
      seg += ` L ${sx.toFixed(1)} ${sy.toFixed(1)}`;
    }
    prevSy = sy;
  }
  if (seg) segments.push(seg);
  return segments;
}

function makeEvalFn(type: string, p: Record<string, number>): (x: number) => number | null {
  const { a = 1, b = 0, c = 0, q = 0 } = p;
  const period = p.period ?? 360;
  const phase = p.phase ?? 0;
  const vshift = p.q ?? 0;

  switch (type) {
    case 'sine':    return (x) => a * Math.sin(((x - phase) / period) * 2 * Math.PI) + vshift;
    case 'cosine':  return (x) => a * Math.cos(((x - phase) / period) * 2 * Math.PI) + vshift;
    case 'tan': {
      const periodRad = period;
      return (x) => {
        const raw = ((x - phase) / periodRad) * Math.PI;
        const val = Math.tan(raw);
        if (!isFinite(val) || Math.abs(val) > 20) return null;
        return a * val + vshift;
      };
    }
    case 'parabola':    return (x) => a * x * x + b * x + c;
    case 'hyperbola':   return (x) => { const px = p.p ?? 0; if (Math.abs(x - px) < 0.05) return null; return a / (x - px) + q; };
    case 'exponential': return (x) => a * Math.pow(b > 0 ? b : 2, x) + q;
    case 'linear':      return (x) => a * x + b;
    default:            return () => null;
  }
}

function GraphBlock({ block }: { block: LessonBlock }) {
  const { graphType = 'sine', equation, params = {}, label, curves } = block;

  const isMulti = graphType === 'multi';

  const isTrigType = (t: string) => t === 'sine' || t === 'cosine' || t === 'tan';
  const isTrig = isMulti
    ? (curves ?? []).some(c => isTrigType(c.graphType))
    : isTrigType(graphType);

  const W = 540, H = 290;
  const padL = 52;
  const padR = 28, padT = 24, padB = isTrig ? 50 : 44;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;

  const xMin = isTrig ? -360 : (graphType === 'exponential' ? -5 : -8);
  const xMax = isTrig ? 360  : (graphType === 'exponential' ? 5  : 8);
  const steps = isTrig ? 1440 : 600;

  type CurveDef = { type: string; evalFn: (x: number) => number | null; color: string; eq: string; p: Record<string, number> };
  const allCurves: CurveDef[] = isMulti && curves
    ? curves.map((c, i) => ({
        type: c.graphType,
        evalFn: makeEvalFn(c.graphType, c.params ?? {}),
        color: c.color ?? CURVE_COLORS[i % CURVE_COLORS.length],
        eq: c.equation,
        p: c.params ?? {},
      }))
    : [{
        type: graphType,
        evalFn: makeEvalFn(graphType, params),
        color: CURVE_COLORS[0],
        eq: equation ?? '',
        p: params,
      }];

  const allY: number[] = [];
  for (const curve of allCurves) {
    for (let i = 0; i <= steps; i++) {
      const x = xMin + (i / steps) * (xMax - xMin);
      const y = curve.evalFn(x);
      if (y !== null && isFinite(y) && Math.abs(y) < 50) allY.push(y);
    }
  }
  const rawYMin = allY.length ? Math.min(...allY) : -2;
  const rawYMax = allY.length ? Math.max(...allY) : 2;
  const yMargin = Math.max((rawYMax - rawYMin) * 0.12, 0.4);
  const yMin = rawYMin - yMargin;
  const yMax = rawYMax + yMargin;

  function toSvgX(x: number) { return padL + ((x - xMin) / (xMax - xMin)) * plotW; }
  function toSvgY(y: number) { return padT + ((yMax - y) / (yMax - yMin)) * plotH; }

  const originX = Math.max(padL, Math.min(padL + plotW, toSvgX(0)));
  const originY = Math.max(padT, Math.min(padT + plotH, toSvgY(0)));

  const trigTicks = isTrig
    ? [-360, -270, -180, -90, 90, 180, 270, 360].filter(v => v >= xMin && v <= xMax)
    : [];
  const trigTickLabels: Record<number, string> = {
    [-360]: '−360°', [-270]: '−270°', [-180]: '−180°', [-90]: '−90°',
    90: '90°', 180: '180°', 270: '270°', 360: '360°',
  };

  function niceStep(range: number, targetTicks = 5): number {
    const raw = range / targetTicks;
    const mag = Math.pow(10, Math.floor(Math.log10(raw)));
    const norm = raw / mag;
    const step = norm < 1.5 ? 1 : norm < 3 ? 2 : norm < 7 ? 5 : 10;
    return step * mag;
  }
  const yRange = yMax - yMin;
  const yStep = niceStep(yRange);
  const yTickFirst = Math.ceil(yMin / yStep) * yStep;
  const yTicks: number[] = [];
  for (let v = yTickFirst; v < yMax - 0.001; v += yStep) {
    if (Math.abs(v) > 0.001) yTicks.push(parseFloat(v.toPrecision(10)));
  }

  const tanAsymptotes: number[] = [];
  if (graphType === 'tan') {
    for (let a = -360; a <= 360; a += 180) {
      const ax = a + 90;
      if (ax > xMin && ax < xMax) tanAsymptotes.push(ax);
    }
  }
  if (isMulti && curves) {
    for (const c of curves) {
      if (c.graphType === 'tan') {
        for (let a = -360; a <= 360; a += 180) {
          const ax = a + (c.params?.phase ?? 0) + 90;
          if (ax > xMin && ax < xMax) tanAsymptotes.push(ax);
        }
      }
    }
  }

  return (
    <div className="my-2 overflow-hidden rounded-xl border border-hairline" style={{ background: 'var(--surface-raise)' }}>
      {(equation || label || (isMulti && curves)) && (
        <div className="flex flex-wrap items-center gap-3 border-b border-hairline px-4 py-2.5">
          {isMulti && curves
            ? curves.map((c, i) => (
                <span key={i} className="flex items-center gap-1.5 font-mono text-[12.5px] font-semibold text-ink">
                  <span className="inline-block h-2 w-5 rounded-sm" style={{ background: c.color ?? CURVE_COLORS[i % CURVE_COLORS.length] }} />
                  {c.equation}
                </span>
              ))
            : <>
                {equation && <span className="font-mono text-[13px] font-semibold text-ink">{equation}</span>}
                {label && <span className="text-[12px] text-muted">{label}</span>}
              </>
          }
        </div>
      )}

      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }} aria-label={equation ?? 'Graph'}>
        <defs>
          <clipPath id={`plot-clip-${equation ?? 'g'}`}>
            <rect x={padL} y={padT} width={plotW} height={plotH} />
          </clipPath>
        </defs>

        {isTrig
          ? trigTicks.map(v => (
              <line key={`gx${v}`} x1={toSvgX(v)} y1={padT} x2={toSvgX(v)} y2={padT + plotH}
                stroke="var(--edge)" strokeWidth="0.6" />
            ))
          : [-6,-4,-2,-1,1,2,4,6].filter(v => v > xMin && v < xMax).map(v => (
              <line key={`gx${v}`} x1={toSvgX(v)} y1={padT} x2={toSvgX(v)} y2={padT + plotH}
                stroke="var(--edge)" strokeWidth="0.5" />
            ))
        }
        {yTicks.map(v => (
          <line key={`gy${v}`} x1={padL} y1={toSvgY(v)} x2={padL + plotW} y2={toSvgY(v)}
            stroke="var(--edge)" strokeWidth="0.5" />
        ))}

        {tanAsymptotes.map(v => (
          <line key={`asy${v}`} x1={toSvgX(v)} y1={padT} x2={toSvgX(v)} y2={padT + plotH}
            stroke="#f43f5e" strokeWidth="1" strokeDasharray="4,4" opacity="0.6" />
        ))}

        <line x1={padL} y1={originY} x2={padL + plotW + 6} y2={originY} stroke="var(--ink-2)" strokeWidth="1.4" />
        <polygon points={`${padL+plotW+12},${originY} ${padL+plotW+6},${originY-4} ${padL+plotW+6},${originY+4}`} fill="var(--ink-2)" />
        <text x={padL+plotW+16} y={originY+4} fontSize="12" fill="var(--ink-2)" fontStyle="italic">x</text>

        <line x1={originX} y1={padT + plotH} x2={originX} y2={padT - 6} stroke="var(--ink-2)" strokeWidth="1.4" />
        <polygon points={`${originX},${padT-12} ${originX-4},${padT-6} ${originX+4},${padT-6}`} fill="var(--ink-2)" />
        <text x={originX+5} y={padT-14} fontSize="12" fill="var(--ink-2)" fontStyle="italic">y</text>

        {isTrig
          ? trigTicks.map(v => {
              const sx = toSvgX(v);
              const labelY = Math.min(originY + 16, padT + plotH + 14);
              return (
                <g key={`tx${v}`}>
                  <line x1={sx} y1={originY - 4} x2={sx} y2={originY + 4} stroke="var(--ink-2)" strokeWidth="1" />
                  <text x={sx} y={labelY} fontSize="9" fill="var(--ink-3, var(--muted))" textAnchor="middle">{trigTickLabels[v]}</text>
                </g>
              );
            })
          : [-6,-4,-2,-1,1,2,4,6].filter(v => v > xMin && v < xMax).map(v => (
              <g key={`tx${v}`}>
                <line x1={toSvgX(v)} y1={originY - 3} x2={toSvgX(v)} y2={originY + 3} stroke="var(--ink-2)" strokeWidth="1" />
                <text x={toSvgX(v)} y={Math.min(originY + 14, padT + plotH + 14)} fontSize="10" fill="var(--ink-3, var(--muted))" textAnchor="middle">{v}</text>
              </g>
            ))
        }

        {yTicks.map(v => {
          const sy = toSvgY(v);
          const tickX = Math.max(padL, Math.min(padL + plotW, originX));
          return (
            <g key={`ty${v}`}>
              <line x1={tickX - 4} y1={sy} x2={tickX + 4} y2={sy} stroke="var(--ink-2)" strokeWidth="1" />
              <text x={padL - 6} y={sy + 4} fontSize="10" fill="var(--ink-3, var(--muted))" textAnchor="end">{v}</text>
            </g>
          );
        })}

        <g clipPath={`url(#plot-clip-${equation ?? 'g'})`}>
          {allCurves.map((curve, ci) => {
            const segs = buildCurveSegments(curve.evalFn, xMin, xMax, steps, toSvgX, toSvgY, plotH);
            return segs.map((d, si) => (
              <path key={`c${ci}s${si}`} d={d} fill="none" stroke={curve.color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            ));
          })}
        </g>
      </svg>
    </div>
  );
}

/* ── Maths blocks ────────────────────────────────────────────────────────── */

/** A display equation. With a label it becomes a boxed formula card. */
function MathBlock({ tex, label }: { tex: string; label?: string }) {
  if (!label) {
    return (
      <div className="py-1 text-ink">
        <Tex tex={tex} display />
      </div>
    );
  }
  return (
    <div
      className="rounded-xl border px-5 pt-3 pb-1.5"
      style={{ borderColor: 'var(--color-accent-ring)', background: 'var(--color-accent-wash)' }}
    >
      <p className="text-[10.5px] font-bold tracking-[0.1em] text-accent uppercase">{label}</p>
      <div className="py-1 text-ink" style={{ fontSize: '1.08em' }}>
        <Tex tex={tex} display />
      </div>
    </div>
  );
}

/** A worked solution: each row pairs a short note with one line of working. */
function StepsBlock({ title, steps }: { title?: string; steps: SolutionStep[] }) {
  // One shared two-column grid when any row carries a note, so the working lines up.
  const twoCol = steps.some((st) => st.note && st.tex);
  return (
    <div className="overflow-hidden rounded-xl border border-hairline-strong">
      <div className="border-b border-hairline bg-paper-raise px-4 py-2">
        <span className="text-[10.5px] font-bold tracking-[0.1em] text-muted uppercase">{title ?? 'Solution'}</span>
      </div>
      <div className="divide-y divide-hairline">
        {steps.map((st, i) => (
          <div
            key={i}
            className={cn('px-4 py-2.5', twoCol && st.tex && 'grid gap-x-5 gap-y-1 sm:grid-cols-[minmax(0,12rem)_minmax(0,1fr)]')}
          >
            {st.note && (
              <p className="self-center text-[13px] leading-snug text-muted">
                <RichText text={st.note} />
              </p>
            )}
            {st.tex && (
              <div className={cn('min-w-0 self-center text-ink', twoCol && !st.note && 'sm:col-start-2')}>
                <Tex tex={st.tex} display left />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── BlockBody (all types) ───────────────────────────────────────────────── */

function BlockBody({ block, variant }: { block: LessonBlock; variant: 'source' | 'en' }) {
  const text = variant === 'en' ? block.en : block.text;
  const muted = variant === 'en';

  switch (block.type) {
    case 'heading':
      if (text === undefined) return null;
      return block.level === 3 ? (
        <h3 className={cn('text-[15.5px] font-semibold tracking-[-0.01em]', muted ? 'text-muted' : 'text-ink')}>
          <RichText text={text as string} />
        </h3>
      ) : (
        <h2 className={cn('text-[20px] font-semibold tracking-[-0.02em]', muted ? 'text-muted' : 'text-ink')}>
          <RichText text={text as string} />
        </h2>
      );

    case 'list':
      if (text === undefined) return null;
      return (
        <ul className={cn('space-y-2', muted ? 'text-muted' : 'text-ink-2')}>
          {(text as string[]).map((item, i) => (
            <li key={i} className="flex gap-3 text-[14.5px] leading-[1.7]">
              <span
                className={cn('mt-[10px] h-px w-2.5 shrink-0', muted ? 'bg-muted-2' : 'bg-hairline-strong')}
                aria-hidden
              />
              <span><RichText text={item} /></span>
            </li>
          ))}
        </ul>
      );

    case 'quote':
      if (text === undefined) return null;
      return (
        <blockquote
          className={cn(
            'border-l-2 py-1 pl-5 text-[15px] leading-[1.7] italic',
            muted ? 'border-hairline text-muted' : 'border-ink/25 text-ink-2',
          )}
        >
          {text as string}
        </blockquote>
      );

    case 'callout':
      if (text === undefined) return null;
      return (
        <div
          className={cn(
            'rounded-lg border px-4 py-3 text-[13.5px] leading-[1.6]',
            muted
              ? 'border-hairline bg-paper-raise text-muted'
              : 'border-hairline-strong bg-paper-raise text-ink-2',
          )}
          style={!muted ? { boxShadow: 'inset 0 1px 0 var(--surface-inset-top)' } : undefined}
        >
          <pre className="whitespace-pre-wrap font-[inherit]"><RichText text={text as string} /></pre>
        </div>
      );

    case 'definitions':
      if (!block.rows?.length) return null;
      return <DefinitionsBlock rows={block.rows} />;

    case 'acronym':
      return <AcronymBlock word={block.word} forWhat={block.forWhat} items={block.items} />;

    case 'poem':
      return <PoemBlock lines={block.lines} />;

    case 'lines':
      return <LineAnalysisBlock lines={block.lines} />;

    case 'questions':
      return <QuestionsBlock qa={block.qa} />;

    case 'audio':
      return (
        <div className="my-4 rounded-xl border p-4" style={{ borderColor: 'var(--edge)', background: 'var(--surface-raise)' }}>
          {block.caption && (
            <p className="mb-2 text-[13px] font-semibold text-ink">{block.caption}</p>
          )}
          {block.text && (
            <p className="mb-3 text-[12.5px] text-muted">{block.text as string}</p>
          )}
          <audio controls preload="metadata" className="w-full" style={{ height: 40 }}>
            <source src={`/${block.src}`} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      );

    case 'graph':
      if (variant === 'en') return null;
      return <GraphBlock block={block} />;

    case 'math':
      if (variant === 'en' || typeof block.text !== 'string') return null;
      return <MathBlock tex={block.text} label={block.label} />;

    case 'steps':
      if (variant === 'en' || !block.steps?.length) return null;
      return <StepsBlock title={block.label} steps={block.steps} />;

    case 'figure':
      if (variant === 'en' || !block.figure) return null;
      return <FigureBlock figure={block.figure} />;

    default:
      if (text === undefined) return null;
      return (
        <p className={cn('text-[15px] leading-[1.78]', muted ? 'text-muted' : 'text-ink-2')}>
          <RichText text={text as string} />
        </p>
      );
  }
}

/* ── Section grouping ────────────────────────────────────────────────────── */

interface Section {
  title: string;
  blocks: LessonBlock[];
}

function groupIntoSections(blocks: LessonBlock[]): Section[] {
  const sections: Section[] = [];
  let current: Section | null = null;

  for (const block of blocks) {
    if (block.type === 'heading' && block.level === 2) {
      if (current) sections.push(current);
      current = { title: block.text as string, blocks: [block] };
    } else {
      if (!current) {
        current = { title: '', blocks: [] };
      }
      current.blocks.push(block);
    }
  }
  if (current) sections.push(current);
  return sections;
}

/* ── Section card with AI prompt button ─────────────────────────────────── */

function SectionCard({
  section,
  lessonTitle,
  index,
  isMath,
  variant,
}: {
  section: Section;
  lessonTitle: string;
  index: number;
  isMath: boolean;
  variant: 'source' | 'en';
}) {
  const noteBlocks = section.blocks.filter(b => b.type !== 'questions');
  const questionBlocks = section.blocks.filter(b => b.type === 'questions');
  const hasQuestions = questionBlocks.length > 0;
  const sectionPrompt = React.useMemo(
    () => isMath ? buildSectionPrompt(lessonTitle, section.title, section.blocks) : '',
    [lessonTitle, section, isMath],
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: EASE_OUT_EXPO, delay: Math.min(index * 0.04, 0.3) }}
      className="overflow-hidden rounded-2xl border border-hairline shadow-[0_1px_4px_rgba(0,0,0,0.06)]"
      style={{ background: 'var(--paper)' }}
    >
      {/* Notes area */}
      <div className="space-y-5 p-6">
        {noteBlocks.map((block) => (
          <div key={block.id} id={`block-${block.id}`} className="scroll-mt-4">
            <BlockBody block={block} variant={variant} />
          </div>
        ))}
      </div>

      {/* Questions area — visually separated */}
      {hasQuestions && (
        <div className="border-t border-hairline" style={{ background: 'var(--surface-raise)' }}>
          <div className="px-6 pt-4 pb-1">
            <div className="flex items-center gap-2">
              <HelpCircle className="size-3.5 text-accent" aria-hidden />
              <span className="text-[11px] font-bold tracking-[0.1em] text-accent uppercase">Practice Questions</span>
            </div>
          </div>
          <div className="space-y-0 px-6 pb-5 pt-3">
            {questionBlocks.map((block) => (
              <div key={block.id}>
                <BlockBody block={block} variant={variant} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* AI Help footer */}
      {isMath && section.title && (
        <div className="flex items-center justify-between border-t border-hairline/60 bg-[#5865f2]/5 px-6 py-3">
          <span className="text-[11.5px] text-muted">Need more help with this section?</span>
          <AiPromptButton prompt={sectionPrompt} label="Copy AI prompt" />
        </div>
      )}
    </motion.div>
  );
}

/* ── Hover mode ──────────────────────────────────────────────────────────── */

function HoverReader({ blocks }: { blocks: LessonBlock[] }) {
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const timer = React.useRef<number | undefined>(undefined);

  const open = React.useCallback((id: string) => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setActiveId(id), 90);
  }, []);

  const close = React.useCallback(() => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setActiveId(null), 110);
  }, []);

  React.useEffect(() => () => window.clearTimeout(timer.current), []);

  return (
    <div className="prose-measure space-y-6">
      {blocks.map((block) => {
        const hasEn = block.en !== undefined;
        const active = activeId === block.id;

        if (!hasEn) {
          return (
            <div key={block.id} id={`block-${block.id}`} className="scroll-mt-6">
              <BlockBody block={block} variant="source" />
            </div>
          );
        }

        return (
          <div
            key={block.id}
            id={`block-${block.id}`}
            className="relative scroll-mt-6"
            onPointerEnter={() => open(block.id)}
            onPointerLeave={close}
            onFocus={() => setActiveId(block.id)}
            onBlur={close}
            tabIndex={0}
          >
            <div className="relative -ml-5 pl-5">
              <span
                className={cn(
                  'absolute top-0 left-0 w-[2px] rounded-full bg-ink transition-[height,opacity] duration-150 ease-out',
                  active ? 'h-full opacity-100' : 'h-0 opacity-0',
                )}
                aria-hidden
              />
              <BlockBody block={block} variant="source" />
            </div>

            <AnimatePresence>
              {active && (
                <motion.div
                  layoutId="translation-card"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{
                    layout: { type: 'spring', stiffness: 700, damping: 46, mass: 0.5 },
                    opacity: { duration: 0.12 },
                    y: { duration: 0.12 },
                  }}
                  className="pointer-events-none absolute top-0 left-full z-30 ml-8 w-[320px]"
                >
                  <div className="card px-4 py-3">
                    <p className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.1em] text-muted-2 uppercase">
                      <Languages className="size-3" aria-hidden /> English
                    </p>
                    <BlockBody block={block} variant="en" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/* ── Mode switcher ───────────────────────────────────────────────────────── */

export function TranslationToggle({
  mode,
  onChange,
}: {
  mode: TranslationMode;
  onChange: (m: TranslationMode) => void;
}) {
  return (
    <SegmentedControl
      layoutId="translation-mode"
      value={mode}
      onChange={onChange}
      options={[
        { id: 'off', label: 'Afrikaans', icon: Languages },
        { id: 'split', label: 'Side by side', icon: Columns2 },
        { id: 'hover', label: 'On hover', icon: MousePointer2 },
      ]}
    />
  );
}

/* ── Reader ──────────────────────────────────────────────────────────────── */

export function TranslatableLesson({
  lesson,
  mode,
  visibleBlocks,
  isMath,
}: {
  lesson: Lesson;
  mode: TranslationMode;
  visibleBlocks?: LessonBlock[];
  isMath?: boolean;
}) {
  const blocks = visibleBlocks ?? lesson.blocks;
  const useSections = isMath && mode !== 'hover' && mode !== 'split';

  if (mode === 'hover') return <HoverReader blocks={blocks} />;

  if (mode === 'split') {
    return (
      <div>
        <div className="mb-6 grid grid-cols-2 gap-10 border-b border-hairline pb-2.5">
          <p className="text-[10px] font-semibold tracking-[0.11em] text-muted-2 uppercase">Afrikaans</p>
          <p className="text-[10px] font-semibold tracking-[0.11em] text-muted-2 uppercase">English</p>
        </div>
        <div className="space-y-6">
          {blocks.map((block, i) => (
            <motion.div
              key={block.id}
              id={`block-${block.id}`}
              className="grid scroll-mt-6 grid-cols-2 items-start gap-10"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18, ease: EASE_OUT_EXPO, delay: Math.min(i * 0.015, 0.2) }}
            >
              <BlockBody block={block} variant="source" />
              <BlockBody block={block} variant="en" />
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (useSections) {
    const sections = groupIntoSections(blocks);
    return (
      <div className="space-y-5">
        {sections.map((section, i) => (
          <SectionCard
            key={`sec-${i}`}
            section={section}
            lessonTitle={lesson.title}
            index={i}
            isMath={!!isMath}
            variant="source"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="prose-measure space-y-6">
      {blocks.map((block, i) => (
        <motion.div
          key={block.id}
          id={`block-${block.id}`}
          className="scroll-mt-6"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18, ease: EASE_OUT_EXPO, delay: Math.min(i * 0.015, 0.2) }}
        >
          <BlockBody block={block} variant="source" />
        </motion.div>
      ))}
    </div>
  );
}
