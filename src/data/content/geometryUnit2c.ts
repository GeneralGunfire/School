import type { Figure, Lesson } from '../../lib/types';
import { r, h2, h3, p, ul, note, eq, fig, qs, solution, lesson as make, ANSWERS_NOTE, quadrants } from './geomKit';

/**
 * Paper 2 — Unit 2: Trigonometry, sections F–G (book pp. 60–72; photos …853 – …859).
 * Pages 58–59, 63 (partly), 65 and 70–71 are not in the photo set; they are examples and tasks.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('geom-trigonometry', id, title, minutes, blocks);

/** Wraps a question in $…$, adding the leading backslash to bare function names like sin96^\circ. */
const texq = (q: string) => `$${q.startsWith('\\') ? q : '\\' + q}$`;

const reductionCast: Figure = {
  ...quadrants(['A +', 'S +', 'T +', 'C +'], 'CAST diagram with the angles that land in each quadrant.'),
  texts: [
    { x: 3.4, y: 2.8, text: 'A +', color: 'green' },
    { x: -3.4, y: 2.8, text: 'S +', color: 'main' },
    { x: -3.4, y: -3.2, text: 'T +', color: 'alt' },
    { x: 3.4, y: -3.2, text: 'C +', color: 'amber' },
    { x: 0.3, y: 4.4, text: '90° − θ', anchor: 'start', color: 'muted' },
    { x: -0.3, y: 4.4, text: '90° + θ', anchor: 'end', color: 'muted' },
    { x: -0.4, y: 1.1, text: '180° − θ', anchor: 'end', color: 'muted' },
    { x: -0.4, y: -1.4, text: '180° + θ', anchor: 'end', color: 'muted' },
    { x: -0.3, y: -4.4, text: '270° − θ', anchor: 'end', color: 'muted' },
    { x: 0.3, y: -4.4, text: '270° + θ', anchor: 'start', color: 'muted' },
    { x: 0.4, y: -1.4, text: '360° − θ', anchor: 'start', color: 'muted' },
    { x: 0.4, y: 1.1, text: '360° + θ', anchor: 'start', color: 'muted' },
  ],
};

/* ── F. Reference angle reduction ────────────────────────────────────────── */

export const F_REDUCTION = lesson('geom-u2-f-reduction', 'F. Reference Angle Reduction', 24, [
  h2('Reference angles and the CAST diagram'),
  p(r`To simplify the “large angles” we use the notion of reference angle and the CAST diagram.`),
  p(r`For any given angle, its reference angle is an acute version of that angle related by $180^\circ$ or $360^\circ$.`),
  p(r`The values of the trig functions of that angle are the same as the trig values of its reference angle. For it, give or take a minus sign. (Refer to the CAST diagram.)`),
  fig(reductionCast),
  note(r`In the book’s version of this diagram the two angles written on the left of the vertical axis read “$360^\circ+$”; from the examples they are the $180^\circ$ relations, which is how they are shown here.`),

  h3('1. 180° or 360° relation'),
  p(r`E.g. $\sin300^\circ$ is the same as $\sin(360^\circ-60^\circ)$, so the reference angle is $60^\circ$ and finally:`),
  eq(r`\sin300^\circ=-\sin60^\circ`),
  p(r`minus because of the 4th quadrant.`),
  p(r`To determine the sign of expressions with variables we take $\theta$ as an acute angle, i.e. $0^\circ<\theta<90^\circ$, so:`),
  ul([
    r`$180^\circ-\theta$ is in the 2nd quadrant.`,
    r`$180^\circ+\theta$ is in the 3rd quadrant. (The book prints this line as “$180^\circ-\theta$”.)`,
    r`$360^\circ-\theta$ is in the 4th quadrant.`,
  ]),
  p(r`Note that $360^\circ$ can be added or subtracted.`),
  solution([
    ['2nd quadrant, sin +', r`\sin(180^\circ-\theta)=\sin\theta`],
    ['2nd quadrant, tan −', r`\tan(180^\circ-\theta)=-\tan\theta`],
    ['3rd quadrant, cos −', r`\cos(180^\circ+\theta)=-\cos\theta`],
    ['3rd quadrant, tan +', r`\tan(180^\circ+\theta)=\tan\theta`],
    ['4th quadrant, sin −', r`\sin(360^\circ-\theta)=-\sin\theta`],
    ['4th quadrant, cos +', r`\cos(360^\circ-\theta)=\cos\theta`],
    ['1st quadrant, tan +', r`\tan(360^\circ+\theta)=\tan\theta`],
    r`\tan150^\circ=\tan(180^\circ-30^\circ)=-\tan30^\circ`,
    r`\sin200^\circ=\sin(180^\circ+20^\circ)=-\sin20^\circ`,
    r`\cos310^\circ=\cos(360^\circ-50^\circ)=\cos50^\circ`,
  ], 'Examples'),
  note(r`The book prints $\sin(360^\circ-\theta)=\sin\theta$ and $\cos(180^\circ+\theta)=\cos\theta$, but its own quadrant notes (“4th quadrant sin −”, “3rd quadrant cos −”) give the signs used here. It also labels the $\cos(360^\circ-\theta)$ line “3rd quadrant”; that angle is in the 4th.`),

  h3('2. 90° or 270° relation'),
  p(r`Sometimes angles are related with $90^\circ$ or $270^\circ$. In that case apply the following rule:`),
  note(r`If the reference angle is related to the original by $90^\circ$ or $270^\circ$ we swop the trig function to its co-function ($\sin\leftrightarrow\cos$ and $\tan\leftrightarrow\cot$).`),
  p(r`For example: $\sin(90^\circ-x)=\cos x$.`),
  ul([
    r`$90^\circ-\theta$ is in the 1st quadrant.`,
    r`$90^\circ+\theta$ is in the 2nd quadrant.`,
    r`$270^\circ-\theta$ is in the 3rd quadrant.`,
    r`$270^\circ+\theta$ is in the 4th quadrant.`,
  ]),
  solution([
    ['1st quadrant, sin +', r`\sin(90^\circ-\theta)=\cos\theta`],
    ['2nd quadrant, cos −', r`\cos(90^\circ+\theta)=-\sin\theta`],
    ['3rd quadrant, sin −', r`\sin(270^\circ-\theta)=-\cos\theta`],
    ['4th quadrant, cos +', r`\cos(270^\circ+\theta)=\sin\theta`],
    r`\sin20^\circ=\sin(90^\circ-70^\circ)=\cos70^\circ`,
    r`\sin141^\circ=\sin(90^\circ+51^\circ)=\cos51^\circ`,
  ], 'Examples'),

  h3('Shortcuts from the reduction rules'),
  p(r`Because $-\theta$ is in the 4th quadrant, we have:`),
  eq(r`\sin(-x)=-\sin x\qquad\cos(-x)=\cos x\qquad\tan(-x)=-\tan x`),
  p(r`(“cos” removes the minus sign while “sin” and “tan” take the minus outside.)`),
  eq(r`\sin(a-b)=-\sin(b-a)\qquad\cos(a-b)=\cos(b-a)\qquad\tan(a-b)=-\tan(b-a)`),
  p(r`For complementary angles we have:`),
  eq(r`\sin\alpha=\cos\beta\;\text{ if }\alpha+\beta=90^\circ`),
  eq(r`\cos40^\circ=\sin50^\circ\qquad\sin x=\cos(90^\circ-x)\qquad\cos3x=\sin(90^\circ-3x)`),

  h2('Worked examples'),
  h3('Question 1'),
  p(r`Simplify: 1.1 $\cos(x-90^\circ)$; 1.2 $\tan(x+900^\circ)$; 1.3 $\sin(-180^\circ-x)$.`),
  solution([
    ['1.1 — 1st way. Swop $x$ and $90^\\circ$:', r`\cos(x-90^\circ)=\cos(-(90^\circ-x))=\cos(90^\circ-x)`],
    ['Cos in the 1st quadrant is positive', r`=\sin x`],
    ['2nd way. Add $360^\\circ$:', r`\cos(x-90^\circ)=\cos(x+270^\circ)`],
    ['Cos in the 4th quadrant is positive', r`=\sin x`],
    ['1.2 — Minus $360^\\circ$ two times:', r`\tan(x+900^\circ)=\tan(x+180^\circ)`],
    ['Tan in the 3rd quadrant is positive', r`=\tan x`],
    ['1.3 — Take the minus outside:', r`\sin(-180^\circ-x)=-\sin(180^\circ+x)`],
    ['Sin in the 3rd quadrant is negative', r`=-(-\sin x)=\sin x`],
  ]),
  h3('Question 2'),
  p(r`Determine the value of the following expression without the use of a calculator: $\dfrac{\cos(90^\circ+x)}{\cos(360^\circ-x)\cdot\tan(180^\circ-x)}$`),
  solution([
    ['Step 1; in terms of $x$:', r`=\dfrac{-\sin x}{\cos x\cdot(-\tan x)}`],
    ['Step 2; write sine & cosine:', r`=\dfrac{-\sin x}{\cos x\cdot\left(-\dfrac{\sin x}{\cos x}\right)}=\dfrac{-\sin x}{-\sin x}=1`],
  ]),
  h3('Question 3'),
  p(r`Simplify the following to the simplest trigonometric or a numerical value: $1+\sin(180^\circ+x)\cdot\sin(x-90^\circ)\cdot\tan(-x)$`),
  solution([
    ['Step 1; write all the functions in terms of $x$:', r`=1+\left[(-\sin x)\cdot(-\sin(90^\circ-x))\cdot(-\tan x)\right]`],
    r`=1+\left[(-\sin x)\cdot(-\cos x)\cdot(-\tan x)\right]`,
    r`=1-\sin x\cdot\cos x\cdot\tan x`,
    ['Step 2; write in terms of sine & cosine:', r`=1-\left[\sin x\cdot\cos x\cdot\dfrac{\sin x}{\cos x}\right]`],
    r`=1-\sin^2x`,
    r`=\cos^2x`,
  ]),
  h3('Question 4'),
  p(r`Simplify: $\dfrac{\sin(180^\circ+x)\cdot\cos(x-180^\circ)\cdot\tan(x+180^\circ)}{\cos^2(x+90^\circ)}$`),
  solution([
    ['Step 1; write all the functions in terms of $x$:', r`=\dfrac{(-\sin x)\cdot\cos(x+180^\circ)\cdot\tan x}{(-\sin x)^2}`],
    r`=\dfrac{(-\sin x)\cdot(-\cos x)\cdot\tan x}{\sin^2x}`,
    r`=\dfrac{\sin x\cdot\cos x\cdot\tan x}{\sin^2x}`,
    ['Step 2; write everything in terms of sine & cosine:', r`=\dfrac{\sin x\cdot\cos x\cdot\dfrac{\sin x}{\cos x}}{\sin^2x}`],
    r`=\dfrac{\sin x\cdot\sin x}{\sin^2x}=1`,
  ]),
  note(r`In simplifications: decide whether the trig function will remain the same or not (apply the $180^\circ$, $360^\circ$, $90^\circ$, $270^\circ$ conditions). Check whether the sign will change or not (apply the CAST table relations and remember perfect squares are always positive). Remember the identities correctly and apply them wherever necessary.`),

  h2('Task 10'),
  ANSWERS_NOTE,
  qs([
    ...(
      [
        ['1.1', 'sin(180^\\circ-x)', '\\sin x'], ['1.2', 'cos(90^\\circ+x)', '-\\sin x'], ['1.3', 'cos(180^\\circ-x)', '-\\cos x'],
        ['1.4', 'sin(90^\\circ+x)', '\\cos x'], ['1.5', 'sin(180^\\circ+x)', '-\\sin x'], ['1.6', 'cos(360^\\circ-x)', '\\cos x'],
        ['1.7', 'tan(180^\\circ+x)', '\\tan x'], ['1.8', 'sin(360^\\circ-x)', '-\\sin x'], ['1.9', 'tan(360^\\circ-x)', '-\\tan x'],
        ['1.10', 'sin(90^\\circ-x)', '\\cos x'], ['1.11', 'cos(x-90^\\circ)', '\\sin x'], ['1.12', 'sin(x-180^\\circ)', '-\\sin x'],
      ] as const
    ).map(([n, q, a]) => ({ n, context: r`Write each of the following as a function of $x$ only:`, q: texq(q), a: `$${a}$` })),
    ...(
      [
        ['2.1', 'sin96^\\circ', '\\sin(90^\\circ+6^\\circ)=\\cos6^\\circ'],
        ['2.2', 'cos160^\\circ', '\\cos(180^\\circ-20^\\circ)=-\\cos20^\\circ'],
        ['2.3', 'sin350^\\circ', '\\sin(360^\\circ-10^\\circ)=-\\sin10^\\circ'],
        ['2.4', 'tan281^\\circ', '\\tan(360^\\circ-79^\\circ)=-\\tan79^\\circ'],
        ['2.5', 'tan552^\\circ', '\\tan(552^\\circ-360^\\circ)=\\tan192^\\circ=\\tan(180^\\circ+12^\\circ)=\\tan12^\\circ'],
        ['2.6', 'cos465^\\circ', '\\cos105^\\circ=\\cos(180^\\circ-75^\\circ)=-\\cos75^\\circ'],
        ['2.7', 'cos850^\\circ', '\\cos(850^\\circ-720^\\circ)=\\cos130^\\circ=\\cos(180^\\circ-50^\\circ)=-\\cos50^\\circ'],
        ['2.8', 'tan(-255^\\circ)', '-\\tan255^\\circ=-\\tan(180^\\circ+75^\\circ)=-\\tan75^\\circ'],
      ] as const
    ).map(([n, q, a]) => ({ n, context: r`Write each one as a function of an acute angle:`, q: texq(q), a: `$${a}$` })),
    ...(
      [
        ['3.1', 'sin70^\\circ', '\\sin(90^\\circ-20^\\circ)=\\cos20^\\circ'],
        ['3.2', 'cos200^\\circ', '\\cos(180^\\circ+20^\\circ)=-\\cos20^\\circ'],
        ['3.3', 'sin(-70^\\circ)', '-\\sin70^\\circ=-\\cos20^\\circ'],
        ['3.4', 'tan160^\\circ', '\\tan(180^\\circ-20^\\circ)=-\\tan20^\\circ'],
        ['3.5', 'sin290^\\circ', '\\sin(270^\\circ+20^\\circ)=-\\cos20^\\circ'],
        ['3.6', 'cos340^\\circ', '\\cos(360^\\circ-20^\\circ)=\\cos20^\\circ'],
        ['3.7', 'cos380^\\circ', '\\cos(360^\\circ+20^\\circ)=\\cos20^\\circ'],
        ['3.8', 'sin(-110^\\circ)', '-\\sin110^\\circ=-\\sin(90^\\circ+20^\\circ)=-\\cos20^\\circ'],
      ] as const
    ).map(([n, q, a]) => ({ n, context: r`Write each of the following as a function of $20^\circ$ only:`, q: texq(q), a: `$${a}$` })),
    ...(
      [
        ['4.1', 'sin168^\\circ', '\\sin(180^\\circ-12^\\circ)=\\sin12^\\circ'],
        ['4.2', 'sin348^\\circ', '\\sin(360^\\circ-12^\\circ)=-\\sin12^\\circ'],
        ['4.3', 'cos78^\\circ', '\\cos(90^\\circ-12^\\circ)=\\sin12^\\circ'],
        ['4.4', '\\dfrac{1}{\\sin192^\\circ}', '\\dfrac{1}{\\sin(180^\\circ+12^\\circ)}=-\\dfrac{1}{\\sin12^\\circ}'],
        ['4.5', 'cos282^\\circ', '\\cos(270^\\circ+12^\\circ)=\\sin12^\\circ'],
        ['4.6', 'sin372^\\circ', '\\sin(360^\\circ+12^\\circ)=\\sin12^\\circ'],
        ['4.7', 'sin(-348^\\circ)', '-\\sin348^\\circ=-(-\\sin12^\\circ)=\\sin12^\\circ'],
      ] as const
    ).map(([n, q, a]) => ({ n, context: r`Write the following in terms of $\sin12^\circ$:`, q: texq(q), a: `$${a}$` })),
  ]),

  h2('Task 11'),
  ANSWERS_NOTE,
  qs([
    { n: '1.1', context: r`Simplify:`, q: r`$\sin^2(-\theta)$`, a: r`$(-\sin\theta)^2=\sin^2\theta$` },
    { n: '1.2', context: r`Simplify:`, q: r`$\cos^2(\theta-180^\circ)$`, a: r`$\cos(\theta-180^\circ)=\cos(180^\circ-\theta)=-\cos\theta$, so $\cos^2(\theta-180^\circ)=\cos^2\theta$` },
    { n: '2', q: r`Simplify: $\dfrac{\sin(360^\circ-x)\cdot\cos(-x)}{\sin(90^\circ+x)}$`, a: r`$\dfrac{(-\sin x)\cdot\cos x}{\cos x}=-\sin x$` },
    { n: '3', q: r`Simplify to the simplest trigonometric value: $\dfrac{\cos(180^\circ-x)\cdot\cos^2(180^\circ+x)}{\sin(180^\circ+x)}$`, a: r`$\dfrac{(-\cos x)\cdot(-\cos x)^2}{-\sin x}=\dfrac{-\cos^3x}{-\sin x}=\dfrac{\cos^3x}{\sin x}$` },
    { n: '4', q: r`Simplify as far as possible: $\dfrac{\sin(180^\circ-x)\cdot\cos(360^\circ-x)\cdot\tan(360^\circ+x)}{\sin(x-180^\circ)}$`, a: r`$\sin(x-180^\circ)=-\sin x$. $\dfrac{\sin x\cdot\cos x\cdot\tan x}{-\sin x}=-\cos x\cdot\tan x=-\sin x$` },
    { n: '5', q: r`Simplify the following: $\dfrac{\sin(180^\circ-x)\cdot\sin(360^\circ-x)\cdot\sin(90^\circ-x)}{\cos(180^\circ-x)}$`, a: r`$\dfrac{\sin x\cdot(-\sin x)\cdot\cos x}{-\cos x}=\sin^2x$` },
    { n: '6', q: r`Simplify the following: $\dfrac{2\sin(90^\circ-x)+\cos(180^\circ-x)}{2\sin(90^\circ-x)-\cos(180^\circ+x)}$`, a: r`$\dfrac{2\cos x-\cos x}{2\cos x+\cos x}=\dfrac{\cos x}{3\cos x}=\dfrac13$` },
    { n: '7', q: r`Simplify the following: $\dfrac{1+\cos(90^\circ-x)}{1+\sin(180^\circ-x)\cdot\sin(360^\circ-x)}$`, a: r`$\dfrac{1+\sin x}{1-\sin^2x}=\dfrac{1+\sin x}{(1-\sin x)(1+\sin x)}=\dfrac{1}{1-\sin x}$` },
  ]),

  h2('Task 12'),
  ANSWERS_NOTE,
  qs([
    { n: '1', q: r`Simplify as far as possible: $\dfrac{\sin(90^\circ+x)\cdot\sin(-x)}{\cos(180^\circ-x)}-\dfrac{\sin(180^\circ+x)\cdot\tan(-x)}{\tan(180^\circ+x)}$`, a: r`First term: $\dfrac{\cos x\cdot(-\sin x)}{-\cos x}=\sin x$. Second term: $\dfrac{(-\sin x)\cdot(-\tan x)}{\tan x}=\sin x$. Difference: $\sin x-\sin x=0$.` },
    { n: '2', q: r`Simplify the following to the simplest trigonometric value: $\dfrac{\tan(180^\circ+x)\cdot\sin(x-180^\circ)\cdot\sin(360^\circ-x)}{\cos(x+90^\circ)\cdot\sin(x+180^\circ)}$`, a: r`Numerator: $\tan x\cdot(-\sin x)\cdot(-\sin x)=\tan x\sin^2x$. Denominator: $(-\sin x)(-\sin x)=\sin^2x$. Result: $\tan x$.` },
    { n: '3', q: r`Simplify: $\dfrac{\cos^2(90^\circ-\alpha)\cdot\tan(\alpha-360^\circ)\cdot\cos(180^\circ-\alpha)}{\sin(180^\circ-\alpha)}$`, a: r`$\dfrac{\sin^2\alpha\cdot\tan\alpha\cdot(-\cos\alpha)}{\sin\alpha}=-\sin\alpha\cdot\tan\alpha\cdot\cos\alpha=-\sin^2\alpha$` },
    { n: '4', q: r`Simplify: $3\tan(-\alpha)\div\dfrac{\sin(720^\circ-\alpha)}{\cos(\alpha-180^\circ)}$`, a: r`$\dfrac{\sin(720^\circ-\alpha)}{\cos(\alpha-180^\circ)}=\dfrac{-\sin\alpha}{-\cos\alpha}=\tan\alpha$. So $3(-\tan\alpha)\div\tan\alpha=-3$.` },
    { n: '5', q: r`Simplify the following: $\tan(360^\circ+x)\cdot\cos^2(720^\circ+x)\cdot\left[\tan(-x)+\dfrac{\sin(180^\circ-x)}{\cos(180^\circ+x)}\right]$`, a: r`The bracket is $-\tan x+\dfrac{\sin x}{-\cos x}=-2\tan x$. So $\tan x\cdot\cos^2x\cdot(-2\tan x)=-2\sin^2x$.` },
    { n: '6', q: r`Simplify: $\dfrac{\tan(180^\circ+y)\cdot\cos(360^\circ-y)-\cos(90^\circ+y)}{\cos(90^\circ-y)\cdot\sin(90^\circ+y)}$`, a: r`Numerator: $\tan y\cos y+\sin y=2\sin y$. Denominator: $\sin y\cos y$. Result: $\dfrac{2}{\cos y}$.` },
  ]),
]);

/* ── G. Special angles ───────────────────────────────────────────────────── */

const specialTriangle = (
  pts: Record<'A' | 'B' | 'C', [number, number]>,
  sides: { AB?: string; BC?: string; CA?: string },
  marks: { at: 'A' | 'B' | 'C'; from: 'A' | 'B' | 'C'; to: 'A' | 'B' | 'C'; label: string }[],
  rightAt: 'A' | 'B' | 'C',
  caption: string,
): Figure => ({
  xRange: [-0.4, Math.max(pts.A[0], pts.B[0], pts.C[0]) + 0.4],
  yRange: [-0.4, Math.max(pts.A[1], pts.B[1], pts.C[1]) + 0.4],
  axes: false,
  points: (['A', 'B', 'C'] as const).map((k) => ({ id: k, label: '', x: pts[k][0], y: pts[k][1], hide: true })),
  polygons: [{ ids: ['A', 'B', 'C'] }],
  segments: [
    { from: 'A', to: 'B', label: sides.AB },
    { from: 'B', to: 'C', label: sides.BC },
    { from: 'C', to: 'A', label: sides.CA },
  ],
  angles: [
    { at: rightAt, from: rightAt === 'A' ? 'B' : rightAt === 'B' ? 'C' : 'A', to: rightAt === 'A' ? 'C' : rightAt === 'B' ? 'A' : 'B', right: true },
    ...marks.map((m) => ({ ...m, radius: 28 })),
  ],
  caption,
});

export const G_SPECIAL_ANGLES = lesson('geom-u2-g-special-angles', 'G. Special Angles', 24, [
  h2('The special triangles'),
  p(r`Look at the following triangles:`),
  fig(
    specialTriangle(
      { A: [0, 0], B: [Math.sqrt(3), 0], C: [Math.sqrt(3), 1] },
      { AB: '√3', BC: '1', CA: '2' },
      [{ at: 'A', from: 'B', to: 'C', label: '30°' }, { at: 'C', from: 'A', to: 'B', label: '60°' }],
      'B',
      'Sides 1, √3 and 2.',
    ),
  ),
  fig(
    specialTriangle(
      { A: [0, 0], B: [1, 0], C: [1, 1] },
      { AB: '1', BC: '1', CA: '√2' },
      [{ at: 'A', from: 'B', to: 'C', label: '45°' }, { at: 'C', from: 'A', to: 'B', label: '45°' }],
      'B',
      'Sides 1, 1 and √2.',
    ),
  ),
  p(r`These special triangles help us to remember the trigonometric functions of $30^\circ$, $45^\circ$ and $60^\circ$, which are the special angles. So we say that:`),
  eq(r`\sin30^\circ=\dfrac12,\qquad\tan60^\circ=\sqrt3,\qquad\cos45^\circ=\dfrac{1}{\sqrt2}\;\ldots\text{ etc.}`),
  eq(r`\begin{array}{c|ccc} & 30^\circ & 45^\circ & 60^\circ\\\hline \sin & \dfrac12 & \dfrac{\sqrt2}{2} & \dfrac{\sqrt3}{2}\\[6pt] \cos & \dfrac{\sqrt3}{2} & \dfrac{\sqrt2}{2} & \dfrac12\\[6pt] \tan & \dfrac{\sqrt3}{3} & 1 & \sqrt3\end{array}`),
  note(r`Trigonometric values of all $120^\circ$, $135^\circ$, $150^\circ$ and $210^\circ$, $225^\circ$, $240^\circ$ and $300^\circ$, $315^\circ$, $330^\circ$ can be determined without use of a calculator. Because they can be simplified to the functions of $30^\circ$, $45^\circ$ and $60^\circ$.`),

  h3('What about values of 0°, 90°, 180°, 270° or 360°?'),
  fig({
    xRange: [-2.2, 2.4], yRange: [-2, 2], axes: false,
    points: [
      { id: 'N', label: '(0; 1)', x: 0, y: 1, side: 'ne', color: 'alt' },
      { id: 'E', label: '(1; 0)', x: 1, y: 0, side: 'ne', color: 'alt' },
      { id: 'W', label: '(−1; 0)', x: -1, y: 0, side: 'sw', color: 'alt' },
      { id: 'S', label: '(0; −1)', x: 0, y: -1, side: 'se', color: 'alt' },
      { id: 'a', label: '', x: 0, y: 1.8, hide: true },
      { id: 'b', label: '', x: 0, y: -1.8, hide: true },
      { id: 'c', label: '', x: -2, y: 0, hide: true },
      { id: 'd', label: '', x: 2.2, y: 0, hide: true },
    ],
    segments: [
      { from: 'c', to: 'd', color: 'muted', arrow: true },
      { from: 'b', to: 'a', color: 'muted', arrow: true },
    ],
    texts: [
      { x: 0.1, y: 1.65, text: '90°', anchor: 'start', color: 'muted' },
      { x: -2.1, y: 0.2, text: '180°', anchor: 'start', color: 'muted' },
      { x: 0.1, y: -1.7, text: '270°', anchor: 'start', color: 'muted' },
      { x: 2.3, y: 0.2, text: '0° / 360°', anchor: 'end', color: 'muted' },
    ],
    caption: 'On the unit circle the point at each quadrant angle has r = 1.',
  }),
  p(r`Using $\sin\theta=\dfrac{y}{r}$, $\cos\theta=\dfrac{x}{r}$, $\tan\theta=\dfrac{y}{x}$ we get:`),
  eq(r`\begin{array}{c|ccccc} & 0^\circ & 90^\circ & 180^\circ & 270^\circ & 360^\circ\\\hline \sin & 0 & 1 & 0 & -1 & 0\\ \cos & 1 & 0 & -1 & 0 & 1\\ \tan & 0 & \text{und} & 0 & \text{und} & 0\end{array}`),
  note(r`You can always add or subtract to any trigonometric … (the rest of this box is cut off at the bottom of the photo).`),

  h2('Examples'),
  solution([
    ['1. $\\sin225^\\circ$', r`=\sin(180^\circ+45^\circ)\qquad(-\text{ in 3rd quadrant})`],
    r`=-\sin45^\circ=-\dfrac{1}{\sqrt2}`,
  ], 'Example 1'),
  solution([
    ['2. $\\cos330^\\circ$', r`=\cos(360^\circ-30^\circ)\qquad(+\text{ in 4th quadrant})`],
    r`=\cos30^\circ=+\dfrac{\sqrt3}{2}`,
  ], 'Example 2'),
  solution([
    ['3. $\\tan(-600^\\circ)$ — add $360^\\circ$ two times', r`=\tan120^\circ`],
    ['(− in 2nd quadrant)', r`=\tan(180^\circ-60^\circ)=-\tan60^\circ=-\sqrt3`],
  ], 'Example 3'),
  solution([
    ['4. $\\tan300^\\circ\\cdot\\cos120^\\circ$', r`=\tan(360^\circ-60^\circ)\cdot\cos(180^\circ-60^\circ)`],
    r`=-\tan60^\circ\cdot(-\cos60^\circ)`,
    r`=-\sqrt3\cdot\left(-\dfrac12\right)=\dfrac{\sqrt3}{2}`,
  ], 'Example 4'),
  solution([
    ['5. $\\tan150^\\circ\\cdot\\sin390^\\circ+\\cos330^\\circ$', r`=\tan(180^\circ-30^\circ)\cdot\sin30^\circ+\cos(360^\circ-30^\circ)`],
    r`=-\tan30^\circ\cdot\sin30^\circ+\cos30^\circ`,
    r`=-\dfrac{1}{\sqrt3}\cdot\dfrac12+\dfrac{\sqrt3}{2}`,
    r`=-\dfrac{\sqrt3}{6}+\dfrac{3\sqrt3}{6}=\dfrac{\sqrt3}{3}`,
  ], 'Example 5'),
  note(r`The book’s last line for Example 5 reads $\dfrac{\sqrt3}{2}$, which does not follow from the line above it: $-\dfrac{1}{2\sqrt3}+\dfrac{\sqrt3}{2}=\dfrac{\sqrt3}{3}$ (checked: $-0{,}2887+0{,}8660=0{,}5774$).`),

  h2('Worked examples'),
  h3('Question 1'),
  p(r`$(1-\cos(-30^\circ))\cdot(1-\sin210^\circ)$`),
  solution([
    r`=(1-\cos(-30^\circ))\cdot(1-\sin210^\circ)`,
    r`=(1-\cos30^\circ)\cdot(1-\sin(180^\circ+30^\circ))`,
    r`=(1-\cos30^\circ)\cdot(1+\sin30^\circ)`,
    r`=\left(1-\dfrac{\sqrt3}{2}\right)\cdot\left(1+\dfrac12\right)`,
    r`=\dfrac{6-3\sqrt3}{4}`,
  ]),
  h3('Question 2'),
  p(r`Simplify the following to a numerical value. Show all workings: $\dfrac{\cos330^\circ\tan150^\circ\sin12^\circ}{\tan315^\circ\cos(-258^\circ)}$`),
  solution([
    r`=\dfrac{\cos(360^\circ-30^\circ)\cdot\tan(180^\circ-30^\circ)\cdot\sin12^\circ}{\tan(360^\circ-45^\circ)\cdot\cos102^\circ}`,
    r`=\dfrac{\cos30^\circ\cdot(-\tan30^\circ)\cdot\sin12^\circ}{-\tan45^\circ\cdot\cos(90^\circ+12^\circ)}`,
    r`=\dfrac{-\cos30^\circ\cdot\tan30^\circ\cdot\sin12^\circ}{-\tan45^\circ\cdot(-\sin12^\circ)}`,
    r`=-\dfrac{\dfrac{\sqrt3}{2}\cdot\dfrac{1}{\sqrt3}}{1}`,
    r`=-\dfrac12`,
  ]),
  h3('Question 3'),
  p(r`Simplify the following: $\dfrac{\sin(x-270^\circ)\cdot\cos(450^\circ-x)}{\sin210^\circ\cdot\tan(360^\circ-x)}$`),
  solution([
    r`=\dfrac{\sin(x+90^\circ)\cdot\cos(90^\circ-x)}{(-\sin30^\circ)\cdot(-\tan x)}`,
    r`=\dfrac{\cos x\cdot\sin x}{\left(-\dfrac12\right)\cdot(-\tan x)}`,
    r`=\dfrac{\cos x\cdot\sin x}{\dfrac12\cdot\dfrac{\sin x}{\cos x}}`,
    r`=\cos x\cdot\sin x\cdot\dfrac{2\cos x}{1\cdot\sin x}`,
    r`=2\cos^2x`,
  ]),
  h3('Question 4'),
  p(r`$\tan240^\circ\cdot\sin(180^\circ+y)+\tan(-60^\circ)\cdot\cos(90^\circ+y)$`),
  solution([
    r`=\tan(180^\circ+60^\circ)\cdot(-\sin y)-\tan60^\circ\cdot(-\sin y)`,
    r`=\sqrt3\cdot(-\sin y)-\sqrt3\cdot(-\sin y)`,
    r`=-\sqrt3\sin y+\sqrt3\sin y`,
    r`=0`,
  ]),

  h2('Task 15 — Mixed questions'),
  ANSWERS_NOTE,
  fig({
    xRange: [-1, 22], yRange: [-1, 14], axes: false,
    points: [
      { id: 'A', label: 'A', x: 0, y: 12, side: 'nw', color: 'main' },
      { id: 'B', label: 'B', x: 20.78, y: 12, side: 'ne', color: 'main' },
      { id: 'C', label: 'C', x: 20.78, y: 0, side: 'se', color: 'main' },
      { id: 'H', label: 'H', x: 15.59, y: 3, side: 'sw', color: 'green' },
    ],
    polygons: [{ ids: ['A', 'B', 'C'] }],
    segments: [{ from: 'B', to: 'H', color: 'alt', dashed: true }, { from: 'B', to: 'C', label: '12' }],
    angles: [{ at: 'B', from: 'C', to: 'A', right: true }, { at: 'H', from: 'C', to: 'B', right: true }, { at: 'A', from: 'C', to: 'B', label: '30°', radius: 40 }],
    caption: 'Figure for question 3 — drawn to scale (BC = 12, ∠A = 30°, BH ⊥ AC).',
  }),
  qs([
    { n: '1', q: r`Determine the value of $\dfrac{\sin123^\circ\cdot\sin(-\alpha)\cdot\tan135^\circ}{\cos(90^\circ+\alpha)\cdot\cos213^\circ}$`, a: r`$\sin(-\alpha)=-\sin\alpha$, $\tan135^\circ=-1$, $\cos(90^\circ+\alpha)=-\sin\alpha$, $\sin123^\circ=\sin(90^\circ+33^\circ)=\cos33^\circ$, $\cos213^\circ=-\cos33^\circ$. So $\dfrac{\cos33^\circ\cdot(-\sin\alpha)\cdot(-1)}{(-\sin\alpha)\cdot(-\cos33^\circ)}=\dfrac{\cos33^\circ\sin\alpha}{\sin\alpha\cos33^\circ}=1$` },
    { n: '2.1', context: r`If $\sin\theta=0{,}3$ and $0^\circ<\theta<90^\circ$ then determine:`, q: r`$\sin(90^\circ+\theta)$`, a: r`$\sin(90^\circ+\theta)=\cos\theta=\sqrt{1-0{,}3^2}=\sqrt{0{,}91}\approx0{,}954$ (positive, since $\theta$ is acute).` },
    { n: '2.2', context: r`If $\sin\theta=0{,}3$ and $0^\circ<\theta<90^\circ$ then determine:`, q: r`$\dfrac{\sin450^\circ\cdot\cos(90^\circ-\theta)}{\tan45^\circ\cdot\sin(-180^\circ-\theta)}$`, a: r`$\sin450^\circ=\sin90^\circ=1$, $\cos(90^\circ-\theta)=\sin\theta$, $\tan45^\circ=1$, $\sin(-180^\circ-\theta)=-\sin(180^\circ+\theta)=\sin\theta$. So $\dfrac{1\cdot\sin\theta}{1\cdot\sin\theta}=1$` },
    { n: '3.1', context: r`In the given triangle calculate (figure above):`, q: r`Value of $\hat C$`, a: r`$\triangle ABC$ has $\hat B=90^\circ$ and $\hat A=30^\circ$, so $\hat C=180^\circ-90^\circ-30^\circ=60^\circ$.` },
    { n: '3.2', context: r`In the given triangle calculate (figure above):`, q: r`Length of $HC$`, a: r`In $\triangle BHC$ (right angle at $H$): $\cos60^\circ=\dfrac{HC}{12}\Rightarrow HC=12\cdot\dfrac12=6$.` },
    { n: '3.3', context: r`In the given triangle calculate (figure above):`, q: r`Length of $AC$`, a: r`In $\triangle ABC$: $\sin30^\circ=\dfrac{BC}{AC}\Rightarrow AC=\dfrac{12}{\frac12}=24$.` },
    { n: '3.4', context: r`In the given triangle calculate (figure above):`, q: r`Show that $AH=18$`, a: r`$AH=AC-HC=24-6=18$.` },
    { n: '4', q: r`Simplify the following to the simplest trigonometric value: $\dfrac{\cos(360^\circ+x)\cdot\tan(180^\circ-x)\cdot\cos210^\circ}{\tan420^\circ\cdot\sin(x-90^\circ)}$`, a: r`$\cos(360^\circ+x)=\cos x$, $\tan(180^\circ-x)=-\tan x$, $\cos210^\circ=-\dfrac{\sqrt3}{2}$, $\tan420^\circ=\tan60^\circ=\sqrt3$, $\sin(x-90^\circ)=-\cos x$. Numerator: $\cos x\cdot(-\tan x)\cdot\left(-\dfrac{\sqrt3}{2}\right)=\dfrac{\sqrt3}{2}\sin x$. Denominator: $-\sqrt3\cos x$. Result: $-\dfrac12\tan x$.` },
    { n: '5.1', context: r`If $\tan\alpha=\sqrt n$ where $\alpha$ is NOT an acute angle, express each of the following in terms of $n$ (by using a sketch):`, q: r`$\sin\alpha$`, a: r`$\tan\alpha>0$ and $\alpha$ not acute, so $\alpha$ is in the 3rd quadrant: $x=-1$, $y=-\sqrt n$, $r=\sqrt{n+1}$. $\sin\alpha=\dfrac{y}{r}=-\dfrac{\sqrt n}{\sqrt{n+1}}$` },
    { n: '5.2', context: r`If $\tan\alpha=\sqrt n$ where $\alpha$ is NOT an acute angle, express each of the following in terms of $n$ (by using a sketch):`, q: r`$\cos(90^\circ+\alpha)$`, a: r`$\cos(90^\circ+\alpha)=-\sin\alpha=\dfrac{\sqrt n}{\sqrt{n+1}}$` },
    { n: '5.3', context: r`If $\tan\alpha=\sqrt n$ where $\alpha$ is NOT an acute angle, express each of the following in terms of $n$ (by using a sketch):`, q: r`$\dfrac{\sin270^\circ\cdot\tan(180^\circ-\alpha)}{\sin1050^\circ}$`, a: r`$\sin270^\circ=-1$, $\tan(180^\circ-\alpha)=-\sqrt n$, $\sin1050^\circ=\sin330^\circ=-\dfrac12$. So $\dfrac{(-1)(-\sqrt n)}{-\frac12}=-2\sqrt n$` },
    { n: '6.1', context: r`Prove the following identities:`, q: r`$\dfrac{\sin\alpha-\sin\alpha\cdot\cos\alpha}{\cos\alpha-(1-\sin^2\alpha)}=\tan\alpha$`, a: r`LHS $=\dfrac{\sin\alpha(1-\cos\alpha)}{\cos\alpha-\cos^2\alpha}=\dfrac{\sin\alpha(1-\cos\alpha)}{\cos\alpha(1-\cos\alpha)}=\dfrac{\sin\alpha}{\cos\alpha}=\tan\alpha=$ RHS` },
    { n: '6.2', context: r`Prove the following identities:`, q: r`$\dfrac{\cos^2(180^\circ-\alpha)\cdot\tan(180^\circ+\alpha)}{\cos120^\circ\cdot\sin(180^\circ-\alpha)}=-2\cos\alpha$`, a: r`LHS $=\dfrac{\cos^2\alpha\cdot\tan\alpha}{\left(-\frac12\right)\sin\alpha}=\dfrac{\cos^2\alpha\cdot\frac{\sin\alpha}{\cos\alpha}}{-\frac12\sin\alpha}=\dfrac{\cos\alpha}{-\frac12}=-2\cos\alpha=$ RHS` },
  ]),
]);

export const GEOM_UNIT_2C_LESSONS: Lesson[] = [F_REDUCTION, G_SPECIAL_ANGLES];
