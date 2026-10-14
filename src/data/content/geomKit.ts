import type { Figure, Lesson, LessonBlock, QAItem } from '../../lib/types';

/**
 * Authoring helpers for Paper 2 units 2–6 (Unit 1 keeps its own copy).
 *
 * Strings are `String.raw` so TeX backslashes survive. `$…$` is inline maths,
 * `$$…$$` is display maths (see components/math/Tex.tsx).
 */

export const r = String.raw;
export type B = Omit<LessonBlock, 'id'>;

export const h2 = (text: string): B => ({ type: 'heading', level: 2, text });
export const h3 = (text: string): B => ({ type: 'heading', level: 3, text });
export const p = (text: string): B => ({ type: 'paragraph', text });
export const ul = (items: string[]): B => ({ type: 'list', text: items });
export const note = (text: string): B => ({ type: 'callout', text });
export const formula = (label: string, tex: string): B => ({ type: 'math', label, text: tex });
export const eq = (tex: string): B => ({ type: 'math', text: tex });
export const fig = (figure: Figure): B => ({ type: 'figure', figure });
export const qs = (qa: QAItem[]): B => ({ type: 'questions', qa });

/** A solution: a bare string is one line of working; a pair is [note, working]. */
export const solution = (rows: Array<string | [string, string]>, title = 'Solution'): B => ({
  type: 'steps',
  label: title,
  steps: rows.map((row) => (typeof row === 'string' ? { tex: row } : { note: row[0], tex: row[1] })),
});

/** "Question n" heading, its text, an optional diagram and the printed solution. */
export const worked = (n: string, question: string, rows: Array<string | [string, string]>, figure?: Figure): B[] => [
  h3(`Question ${n}`),
  p(question),
  ...(figure ? [fig(figure)] : []),
  solution(rows),
];

export const ANSWERS_NOTE = note(
  r`The answers below are worked out by Scholar from the book's questions. The book's own answer key (Answers to Exercise, p.190) was not in the photos, so check your working against it.`,
);

export function lesson(chapterId: string, id: string, title: string, minutes: number, blocks: Array<B | B[]>): Lesson {
  return {
    id,
    chapterId,
    subjectId: 'math-geometry',
    title,
    minutes,
    blocks: blocks.flat().map((b, i) => ({ ...b, id: `${id}-${i}` })),
  };
}

/**
 * Right triangle with the right angle at the origin: legs along the axes.
 * `w` is the horizontal leg, `h` the vertical one. Handy for SOH-CAH-TOA diagrams.
 */
export function rightTriangle(opts: {
  w: number;
  h: number;
  /** Labels for the vertices: right angle, end of horizontal leg, end of vertical leg. */
  names?: [string, string, string];
  /** Side labels: horizontal leg, vertical leg, hypotenuse. */
  sides?: [string?, string?, string?];
  /** Mark the angle at the end of the horizontal leg (`'B'`) or vertical leg (`'A'`) with a label. */
  angle?: { at: 'B' | 'A'; label: string };
  caption?: string;
}): Figure {
  const [c, b, a] = opts.names ?? ['C', 'B', 'A'];
  const [sw, sh, sx] = opts.sides ?? [];
  const pad = Math.max(opts.w, opts.h) * 0.18;
  return {
    xRange: [-pad, opts.w + pad],
    yRange: [-pad, opts.h + pad],
    axes: false,
    points: [
      { id: 'C', label: c, x: 0, y: 0, side: 'sw', color: 'main' },
      { id: 'B', label: b, x: opts.w, y: 0, side: 'se', color: 'main' },
      { id: 'A', label: a, x: 0, y: opts.h, side: 'nw', color: 'main' },
    ],
    polygons: [{ ids: ['C', 'B', 'A'] }],
    segments: [
      { from: 'C', to: 'B', label: sw, color: 'main' },
      { from: 'C', to: 'A', label: sh, color: 'main' },
      { from: 'B', to: 'A', label: sx, color: 'main' },
    ],
    angles: [
      { at: 'C', from: 'B', to: 'A', right: true },
      ...(opts.angle
        ? [
            opts.angle.at === 'B'
              ? { at: 'B', from: 'A', to: 'C', label: opts.angle.label }
              : { at: 'A', from: 'C', to: 'B', label: opts.angle.label },
          ]
        : []),
    ],
    caption: opts.caption,
  };
}

/** Axes drawn as arrows with the four quadrants labelled — used for the sign table and the CAST diagram. */
export const quadrants = (labels: [string, string, string, string], caption: string): Figure => ({
  xRange: [-7, 7],
  yRange: [-6, 6],
  axes: false,
  points: [
    { id: 'N', label: '', x: 0, y: 5.4, hide: true },
    { id: 'S', label: '', x: 0, y: -5.4, hide: true },
    { id: 'E', label: '', x: 6.4, y: 0, hide: true },
    { id: 'W', label: '', x: -6.4, y: 0, hide: true },
  ],
  segments: [
    { from: 'W', to: 'E', color: 'muted', arrow: true },
    { from: 'S', to: 'N', color: 'muted', arrow: true },
  ],
  texts: [
    { x: 3.4, y: 2.8, text: labels[0], color: 'green' },
    { x: -3.4, y: 2.8, text: labels[1], color: 'main' },
    { x: -3.4, y: -3.2, text: labels[2], color: 'alt' },
    { x: 3.4, y: -3.2, text: labels[3], color: 'amber' },
    { x: 0.2, y: 5.7, text: '90°', anchor: 'start', color: 'muted' },
    { x: -6.6, y: 0.5, text: '180°', anchor: 'start', color: 'muted' },
    { x: 0.2, y: -5.7, text: '270°', anchor: 'start', color: 'muted' },
    { x: 6.9, y: 0.5, text: '0° / 360°', anchor: 'end', color: 'muted' },
  ],
  caption,
});

