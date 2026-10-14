import type { Figure, Lesson } from '../../lib/types';
import { r, h2, h3, p, ul, note, formula, eq, fig, qs, solution, worked, lesson as make, rightTriangle, ANSWERS_NOTE } from './geomKit';

/**
 * Paper 2 — Unit 2: Trigonometry, sections A–B (book pp. 32–42; photos …842 – …847).
 * Pages 40–41 are not in the photo set, so that stretch is missing.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('geom-trigonometry', id, title, minutes, blocks);

const COMPUTED = note(
  r`The book leaves these for you to complete. The working below is Scholar's, so check it against your own.`,
);

/* ── A. Pythagoras theorem ───────────────────────────────────────────────── */

export const A_PYTHAGORAS = lesson('geom-u2-a-pythagoras', 'A. Pythagoras Theorem', 8, [
  h2('Pythagoras theorem'),
  p(r`The Pythagorean Theorem relates the length of the hypotenuse to the lengths of the legs of a right triangle in the right triangle:`),
  formula('Pythagoras', r`c^2=a^2+b^2\qquad\text{or}\qquad r^2=x^2+y^2`),
  fig(rightTriangle({ w: 4, h: 3, names: ['', '', ''], sides: ['b', 'a', 'c'], caption: 'c is the hypotenuse, opposite the right angle; a and b are the legs.' })),
  h3('Determine the value of x'),
  p(r`This time one leg is $8$, another is unknown and the hypotenuse is $10$.`),
  fig(rightTriangle({ w: 8, h: 6, names: ['', '', ''], sides: ['8', 'x', '10'] })),
  solution([
    ['Using the Pythagoras formula $c^2=a^2+b^2$', r`10^2=x^2+8^2`],
    r`10^2-8^2=x^2`,
    r`36=x^2`,
    r`x=\sqrt{36}=6`,
  ]),
  h3('Find x'),
  p(r`A right triangle has legs $3\text{ cm}$ and $4\text{ cm}$. The hypotenuse is $x$.`),
  fig(rightTriangle({ w: 4, h: 3, names: ['', '', ''], sides: ['4 cm', '3 cm', 'x'] })),
  solution(
    [
      r`x^2=3^2+4^2=9+16=25`,
      r`x=\sqrt{25}=5\text{ cm}`,
    ],
    'Worked by Scholar',
  ),

  h2('Examples'),
  h3('1  Use Pythagoras’ theorem to find the unknowns'),
  fig({
    xRange: [-1, 9], yRange: [-1, 7], axes: false,
    points: [{ id: 'C', label: '', x: 0, y: 0, hide: true }, { id: 'B', label: '', x: 8, y: 0, hide: true }, { id: 'A', label: '', x: 0, y: 6, hide: true }],
    polygons: [{ ids: ['C', 'B', 'A'] }],
    segments: [{ from: 'C', to: 'B', label: '8' }, { from: 'C', to: 'A', label: '6' }, { from: 'B', to: 'A', label: 'x' }],
    angles: [{ at: 'C', from: 'B', to: 'A', right: true }],
    caption: '1.1',
  }),
  fig(rightTriangle({ w: 3, h: 2, names: ['', '', ''], sides: ['3', '2', 'r'], caption: '1.2' })),
  fig({
    xRange: [-1, 14], yRange: [-1, 6], axes: false,
    points: [{ id: 'A', label: '', x: 0, y: 0, hide: true }, { id: 'B', label: '', x: 13, y: 0, hide: true }, { id: 'C', label: '', x: 25 / 13 * 1.0, y: 60 / 13, hide: true }],
    polygons: [{ ids: ['A', 'B', 'C'] }],
    segments: [{ from: 'A', to: 'B', label: '13' }, { from: 'A', to: 'C', label: '5' }, { from: 'C', to: 'B', label: 'x' }],
    angles: [{ at: 'C', from: 'A', to: 'B', right: true }],
    caption: '1.3 — the right angle is at the top, so 13 is the hypotenuse.',
  }),
  fig({
    xRange: [-1, 5], yRange: [-1, 3], axes: false,
    points: [
      { id: 'A', label: '', x: 0, y: 0, hide: true },
      { id: 'B', label: '', x: 4, y: 0, hide: true },
      { id: 'C', label: '', x: 3.25, y: 1.561, hide: true },
    ],
    polygons: [{ ids: ['A', 'B', 'C'] }],
    segments: [{ from: 'A', to: 'C', label: '√13' }, { from: 'C', to: 'B', label: '√3' }, { from: 'A', to: 'B', label: '' }],
    caption: '1.4 — the right angle is between √13 and √3, so the unlabelled bottom side is the hypotenuse.',
  }),
  COMPUTED,
  qs([
    { n: '1.1', q: r`Legs $6$ and $8$; find the hypotenuse $x$.`, a: r`$x^2=6^2+8^2=100\;\Rightarrow\;x=10$` },
    { n: '1.2', q: r`Legs $2$ and $3$; find the hypotenuse $r$.`, a: r`$r^2=2^2+3^2=13\;\Rightarrow\;r=\sqrt{13}$` },
    { n: '1.3', q: r`Hypotenuse $13$, one leg $5$; find the other leg $x$.`, a: r`$x^2=13^2-5^2=144\;\Rightarrow\;x=12$` },
    { n: '1.4', q: r`Legs $\sqrt{13}$ and $\sqrt{3}$; find the hypotenuse.`, a: r`$h^2=(\sqrt{13})^2+(\sqrt{3})^2=13+3=16\;\Rightarrow\;h=4$` },
    { n: '2.1', context: r`Use Pythagoras’ theorem and decide which triangles are right-angled.`, q: r`Sides $7$, $24$ and $25$.`, a: r`$7^2+24^2=49+576=625=25^2$. The longest side squared equals the sum of the squares of the other two, so the triangle is right-angled.` },
    { n: '2.2', context: r`Use Pythagoras’ theorem and decide which triangles are right-angled.`, q: r`Sides $\sqrt7$, $\sqrt7$ and $\sqrt{96}$.`, a: r`$(\sqrt7)^2+(\sqrt7)^2=14\ne96=(\sqrt{96})^2$. It is not right-angled.` },
  ]),
]);

/* ── B. Trigonometry of a right triangle ─────────────────────────────────── */

const tri = (
  pts: { A: [number, number]; B: [number, number]; C: [number, number] },
  sides: { AB?: string; BC?: string; CA?: string },
  right: 'A' | 'B' | 'C',
  theta: { at: 'A' | 'B' | 'C'; from: 'A' | 'B' | 'C'; to: 'A' | 'B' | 'C' },
  caption: string,
): Figure => ({
  xRange: [Math.min(pts.A[0], pts.B[0], pts.C[0]) - 0.5, Math.max(pts.A[0], pts.B[0], pts.C[0]) + 0.5],
  yRange: [Math.min(pts.A[1], pts.B[1], pts.C[1]) - 0.5, Math.max(pts.A[1], pts.B[1], pts.C[1]) + 0.5],
  axes: false,
  points: (['A', 'B', 'C'] as const).map((k) => ({ id: k, label: '', x: pts[k][0], y: pts[k][1], hide: true })),
  polygons: [{ ids: ['A', 'B', 'C'] }],
  segments: [
    { from: 'A', to: 'B', label: sides.AB },
    { from: 'B', to: 'C', label: sides.BC },
    { from: 'C', to: 'A', label: sides.CA },
  ],
  angles: [
    { at: right, from: right === 'A' ? 'B' : right === 'B' ? 'C' : 'A', to: right === 'A' ? 'C' : right === 'B' ? 'A' : 'B', right: true },
    { at: theta.at, from: theta.from, to: theta.to, label: 'θ', radius: 22 },
  ],
  caption,
});

export const B_RIGHT_TRIANGLE = lesson('geom-u2-b-right-triangle', 'B. Trigonometry of a Right Triangle', 20, [
  h2('The three basic ratios'),
  p(r`The bases of trigonometry are the trigonometric functions. There are three basic trigonometric functions:`),
  ul([r`1. sine`, r`2. cosine`, r`3. tangent`]),
  p(r`These functions are defined from a right-angled triangle.`),
  fig({
    xRange: [-1, 11], yRange: [-1.5, 6.5], axes: false,
    points: [
      { id: 'C', label: '', x: 0, y: 0, hide: true },
      { id: 'B', label: '', x: 10, y: 0, hide: true },
      { id: 'A', label: '', x: 10, y: 5, hide: true },
    ],
    polygons: [{ ids: ['C', 'B', 'A'] }],
    segments: [
      { from: 'C', to: 'A', label: 'Hypotenuse', color: 'main' },
      { from: 'B', to: 'A', label: 'Opposite', color: 'green' },
      { from: 'C', to: 'B', label: 'Adjacent', color: 'alt' },
    ],
    angles: [
      { at: 'C', from: '+x', to: 'A', label: 'θ', radius: 36 },
      { at: 'B', from: 'C', to: 'A', right: true },
    ],
  }),
  p(r`The side opposite to $\theta$ is referred to as opposite (O), the side next to $\theta$ is labelled as adjacent (A) and the side opposite the $90^\circ$ is labelled as hypotenuse (H).`),
  p(r`We define:`),
  eq(r`\sin x=\dfrac{\text{opp}}{\text{hyp}}\qquad\cos x=\dfrac{\text{adj}}{\text{hyp}}\qquad\tan x=\dfrac{\text{opp}}{\text{adj}}`),
  note(r`SOH — Oh Hell    |    CAH — Another Hour    |    TOA — Of Algebra!`),
  p(r`Now look at the triangle below:`),
  fig(rightTriangle({ w: 3.6, h: 5, sides: ['a', 'b', 'c'], caption: 'c: hypotenuse (opposite to 90°).  a, b: perpendicular sides (legs).' })),
  p(r`Let’s find the trigonometric ratios for angles $A$ and $B$:`),
  eq(r`\sin A=\cos B=\dfrac{a}{c}`),
  eq(r`\cos A=\sin B=\dfrac{b}{c}`),
  eq(r`\tan A=\dfrac{1}{\tan B}=\dfrac{a}{b}`),

  h3('Example'),
  p(r`In each of the following triangles, state $\sin\theta$, $\cos\theta$ and $\tan\theta$ in terms of $a$, $b$ and $c$.`),
  fig(tri({ A: [0, 0], B: [3.4, 0], C: [0.9, 1.6] }, { AB: 'b', BC: 'c', CA: 'a' }, 'C', { at: 'A', from: 'B', to: 'C' }, 'Triangle 1 — the right angle is at the top, so b (the bottom side) is the hypotenuse.')),
  fig(tri({ A: [0, 2.4], B: [2.1, 0], C: [5.3, 2.5] }, { AB: 'a', BC: 'b', CA: 'c' }, 'B', { at: 'C', from: 'A', to: 'B' }, 'Triangle 2 — the right angle is at the bottom, so c is the hypotenuse.')),
  fig(tri({ A: [0, 0], B: [4.4, 0.8], C: [1.2, 2.6] }, { AB: 'b', BC: 'c', CA: 'a' }, 'C', { at: 'A', from: 'B', to: 'C' }, 'Triangle 3 — the right angle is at the top, so b is the hypotenuse.')),
  COMPUTED,
  qs([
    { n: '1', q: r`Triangle 1`, a: r`Opposite $\theta$ is $c$, adjacent is $a$, hypotenuse is $b$: $\sin\theta=\dfrac{c}{b}$, $\cos\theta=\dfrac{a}{b}$, $\tan\theta=\dfrac{c}{a}$.` },
    { n: '2', q: r`Triangle 2`, a: r`Opposite $\theta$ is $a$, adjacent is $b$, hypotenuse is $c$: $\sin\theta=\dfrac{a}{c}$, $\cos\theta=\dfrac{b}{c}$, $\tan\theta=\dfrac{a}{b}$.` },
    { n: '3', q: r`Triangle 3`, a: r`Opposite $\theta$ is $c$, adjacent is $a$, hypotenuse is $b$: $\sin\theta=\dfrac{c}{b}$, $\cos\theta=\dfrac{a}{b}$, $\tan\theta=\dfrac{c}{a}$.` },
  ]),

  h2('Working with a calculator — 1'),
  p(r`To find the values of the following trigonometric functions, just type them into your calculator:`),
  ul([r`$\cos35^\circ=$`, r`$\sin219^\circ=$`, r`$\tan135^\circ=$`, r`$\cos(-200^\circ)=$`]),
  p(r`In order to find an unknown angle, we use “Shift + sin, cos or tan”.`),
  solution([
    r`\sin\theta=\dfrac12;\qquad\text{then }\theta=\sin^{-1}\left(\dfrac12\right)=30^\circ`,
    r`\tan x=\dfrac{\sqrt5}{2};\qquad\text{then }x=\tan^{-1}\left(\dfrac{\sqrt5}{2}\right)=48{,}19^\circ`,
  ], 'Examples'),
  p(r`Try the following examples: $\sin x=0{,}3$; $\cos x=-0{,}4$; $\tan x=\dfrac13$; $\sin\theta=-0{,}3$; $\cos\theta=1{,}5$; $\tan x=8$.`),
  COMPUTED,
  qs([
    { q: r`$\cos35^\circ$`, a: r`$0{,}8192$` },
    { q: r`$\sin219^\circ$`, a: r`$-0{,}6293$` },
    { q: r`$\tan135^\circ$`, a: r`$-1$` },
    { q: r`$\cos(-200^\circ)$`, a: r`$-0{,}9397$` },
    { q: r`$\sin x=0{,}3$`, a: r`$x=\sin^{-1}(0{,}3)=17{,}46^\circ$` },
    { q: r`$\cos x=-0{,}4$`, a: r`$x=\cos^{-1}(-0{,}4)=113{,}58^\circ$` },
    { q: r`$\tan x=\dfrac13$`, a: r`$x=\tan^{-1}\left(\tfrac13\right)=18{,}43^\circ$` },
    { q: r`$\sin\theta=-0{,}3$`, a: r`$\theta=\sin^{-1}(-0{,}3)=-17{,}46^\circ$ (the calculator gives the angle in the range $-90^\circ$ to $90^\circ$).` },
    { q: r`$\cos\theta=1{,}5$`, a: r`No solution: $\cos\theta$ is never larger than $1$, so the calculator shows a maths error.` },
    { q: r`$\tan x=8$`, a: r`$x=\tan^{-1}(8)=82{,}87^\circ$` },
  ]),

  h2('Reciprocal functions'),
  p(r`There are three more trigonometric functions:`),
  ul([r`1. secant`, r`2. co-secant`, r`3. co-tangent`]),
  p(r`An easy way to keep in mind: simply, these functions are the reciprocals of the basic three. We define:`),
  eq(r`\sec x=\dfrac{1}{\cos x}=\dfrac{H}{A}`),
  eq(r`\operatorname{cosec}x=\dfrac{1}{\sin x}=\dfrac{H}{O}`),
  eq(r`\cot x=\dfrac{1}{\tan x}=\dfrac{\cos x}{\sin x}=\dfrac{A}{O}`),
  p(r`Now look at the triangle below (right angle at $C$, as before) and let’s find these trigonometric ratios for angles $A$ and $B$:`),
  eq(r`\sec A=\dfrac{1}{\cos A}=\dfrac{1}{\frac{b}{c}}=\dfrac{c}{b}=\dfrac{H}{A}`),
  eq(r`\operatorname{cosec}A=\dfrac{1}{\sin A}=\dfrac{1}{\frac{a}{c}}=\dfrac{c}{a}=\dfrac{H}{O}`),
  eq(r`\cot B=\dfrac{1}{\tan B}=\dfrac{1}{\frac{b}{a}}=\dfrac{a}{b}=\dfrac{A}{O}`),

  h3('Example'),
  p(r`In the following triangles, $\hat A_1=\hat D=90^\circ$. Write the values of $\sin B$, $\cos B$, $\tan B$, $\operatorname{cosec}B$, $\sec B$, $\cot B$, $\sin C_1$, $\cos C_2$, $\tan A_2$, $\operatorname{cosec}C_2$, $\sec A_2$, $\cot C_1$.`),
  fig({
    xRange: [-13, 4], yRange: [-6, 1], axes: false,
    points: [
      { id: 'A', label: 'A', x: 0, y: 0, side: 'ne', color: 'main' },
      { id: 'B', label: 'B', x: -12, y: 0, side: 'nw', color: 'main' },
      { id: 'C', label: 'C', x: 0, y: -5, side: 'se', color: 'main' },
      { id: 'D', label: 'D', x: 2.4, y: -3.2, side: 'e', color: 'main' },
    ],
    polygons: [{ ids: ['A', 'B', 'C', 'D'] }],
    segments: [
      { from: 'A', to: 'B', label: '12' },
      { from: 'B', to: 'C', label: '13' },
      { from: 'A', to: 'C', label: '5', color: 'alt', dashed: true },
      { from: 'A', to: 'D', label: '4' },
      { from: 'D', to: 'C', label: '3' },
    ],
    angles: [
      { at: 'A', from: 'B', to: 'C', right: true },
      { at: 'D', from: 'C', to: 'A', right: true },
      { at: 'A', from: 'C', to: 'D', label: 'A₂', radius: 20 },
      { at: 'C', from: 'A', to: 'B', label: 'C₁', radius: 26 },
      { at: 'C', from: 'D', to: 'A', label: 'C₂', radius: 22 },
    ],
  }),
  COMPUTED,
  qs([
    { q: r`$\sin B$, $\cos B$, $\tan B$ (triangle $ABC$: $AB=12$, $AC=5$, $BC=13$)`, a: r`$\sin B=\dfrac{AC}{BC}=\dfrac{5}{13}$, $\cos B=\dfrac{AB}{BC}=\dfrac{12}{13}$, $\tan B=\dfrac{AC}{AB}=\dfrac{5}{12}$` },
    { q: r`$\operatorname{cosec}B$, $\sec B$, $\cot B$`, a: r`$\operatorname{cosec}B=\dfrac{13}{5}$, $\sec B=\dfrac{13}{12}$, $\cot B=\dfrac{12}{5}$` },
    { q: r`$\sin C_1$, $\cot C_1$ (at $C$ in $\triangle ABC$)`, a: r`$\sin C_1=\dfrac{AB}{BC}=\dfrac{12}{13}$, $\cot C_1=\dfrac{AC}{AB}=\dfrac{5}{12}$` },
    { q: r`$\cos C_2$, $\operatorname{cosec}C_2$ (at $C$ in $\triangle ADC$: $AD=4$, $DC=3$, $AC=5$)`, a: r`$\cos C_2=\dfrac{DC}{AC}=\dfrac{3}{5}$, $\operatorname{cosec}C_2=\dfrac{AC}{AD}=\dfrac{5}{4}$` },
    { q: r`$\tan A_2$, $\sec A_2$ (at $A$ in $\triangle ADC$)`, a: r`$\tan A_2=\dfrac{DC}{AD}=\dfrac{3}{4}$, $\sec A_2=\dfrac{AC}{AD}=\dfrac{5}{4}$` },
  ]),

  h2('Working with a calculator — 2'),
  p(r`To find the values of the following trigonometric functions, like sec, cosec and cot, you should type their reciprocals into your calculator:`),
  eq(r`\sec35^\circ=\dfrac{1}{\cos35^\circ}\qquad\sec219^\circ=\dfrac{1}{\cos219^\circ}\qquad\cot130^\circ=\dfrac{1}{\tan130^\circ}`),
  p(r`Determine the values of the following trigonometric functions, using a calculator, if $A=123^\circ$, $B=371^\circ$ and $C=49^\circ$:`),
  ul([
    r`$\sin(A+B-C)$`,
    r`$\sec\left(\dfrac{A+3B}{2}-C\right)$`,
    r`$\tan\left(\dfrac{2A-B}{5}\right)$`,
    r`$\dfrac23\sin\left(A-\dfrac{C}{3}\right)$`,
    r`$\sec(B-100^\circ)$`,
    r`$\operatorname{cosec}\left(\dfrac{2a+25^\circ}{3}\right)$ (taking $a$ as $A$)`,
    r`$\cot\left(\dfrac{B-C}{3}+A\right)$`,
  ]),
  note(r`Remember: in order to find an unknown angle, we use “Shift + sin, cos or tan”. So we have to get these functions first.`),
  solution([
    r`\operatorname{cosec}\theta=2\;\to\;\sin\theta=\dfrac12;\;\text{then }\theta=\sin^{-1}\left(\dfrac12\right)=30^\circ`,
    r`\cot x=\dfrac{2}{\sqrt5}\;\to\;\tan x=\dfrac{\sqrt5}{2};\;\text{then }x=\tan^{-1}\left(\dfrac{\sqrt5}{2}\right)=48{,}19^\circ`,
    r`3\sec\theta=10\;\to\;\sec\theta=\dfrac{10}{3}\;\to\;\cos\theta=\dfrac{3}{10};\;\text{then }\theta=\cos^{-1}\left(\dfrac{3}{10}\right)=72{,}54^\circ`,
  ], 'Remember'),
  COMPUTED,
  qs([
    { q: r`$\sec35^\circ$`, a: r`$\dfrac{1}{\cos35^\circ}=1{,}2208$` },
    { q: r`$\sec219^\circ$`, a: r`$\dfrac{1}{\cos219^\circ}=-1{,}2868$` },
    { q: r`$\cot130^\circ$`, a: r`$\dfrac{1}{\tan130^\circ}=-0{,}8391$` },
    { q: r`$\sin(A+B-C)$`, a: r`$A+B-C=445^\circ$, so $\sin445^\circ=\sin85^\circ=0{,}9962$` },
    { q: r`$\sec\left(\dfrac{A+3B}{2}-C\right)$`, a: r`$\dfrac{123+1113}{2}-49=569^\circ$, so $\sec569^\circ=\dfrac{1}{\cos569^\circ}=-1{,}1434$` },
    { q: r`$\tan\left(\dfrac{2A-B}{5}\right)$`, a: r`$\dfrac{246-371}{5}=-25^\circ$, so $\tan(-25^\circ)=-0{,}4663$` },
    { q: r`$\dfrac23\sin\left(A-\dfrac{C}{3}\right)$`, a: r`$A-\dfrac{C}{3}=106{,}67^\circ$, so $\dfrac23\sin(106{,}67^\circ)=0{,}6387$` },
    { q: r`$\sec(B-100^\circ)$`, a: r`$\sec271^\circ=\dfrac{1}{\cos271^\circ}=57{,}2987$` },
    { q: r`$\operatorname{cosec}\left(\dfrac{2A+25^\circ}{3}\right)$`, a: r`$\dfrac{246+25}{3}=90{,}33^\circ$, so $\operatorname{cosec}(90{,}33^\circ)=1{,}0000$` },
    { q: r`$\cot\left(\dfrac{B-C}{3}+A\right)$`, a: r`$\dfrac{322}{3}+123=230{,}33^\circ$, so $\cot(230{,}33^\circ)=0{,}8292$` },
  ]),

  h2('Worked examples'),
  ...worked(
    '1',
    r`$\hat C=90^\circ$, $AB=9$ and $\hat A=55^\circ$. Determine the values of: 1.1 $BC$; 1.2 $AC$; 1.3 $\tan\hat B$.`,
    [
      ['1.1 We need to find the side Opposite to angle $A$, that’s why we must use “sin”', r`\sin A=\dfrac{\text{Opp}}{\text{Hyp}}`],
      ['(cross multiply)', r`\sin55^\circ=\dfrac{BC}{9}`],
      r`BC=9\cdot\sin55^\circ`,
      r`=7{,}37`,
      ['1.2 Since $AB$ is the hypotenuse, $a^2+b^2=c^2$', r`7{,}37^2+b^2=9^2`],
      r`b^2=9^2-7{,}37^2`,
      r`b=\sqrt{9^2-7{,}37^2}=5{,}16`,
      ['OR we can use trig:', r`\cos A=\dfrac{\text{Adj}}{\text{Hyp}}`],
      r`\cos55^\circ=\dfrac{AC}{9}`,
      r`AC=9\cdot\cos55^\circ=5{,}16`,
      ['1.3 Angle $B$: $90^\\circ-55^\\circ=35^\\circ$', r`\tan\hat B=\tan35^\circ=0{,}7`],
    ],
    {
      xRange: [-1, 8.5], yRange: [-1, 6.5], axes: false,
      points: [
        { id: 'A', label: 'A', x: 0, y: 5.16, side: 'nw', color: 'main' },
        { id: 'B', label: 'B', x: 7.37, y: 0, side: 'se', color: 'main' },
        { id: 'C', label: 'C', x: 0, y: 0, side: 'sw', color: 'main' },
      ],
      polygons: [{ ids: ['A', 'B', 'C'] }],
      segments: [{ from: 'A', to: 'B', label: '9' }],
      angles: [{ at: 'C', from: 'B', to: 'A', right: true }, { at: 'A', from: 'C', to: 'B', label: '55°', radius: 40 }],
    },
  ),
  ...worked(
    '2',
    r`In the diagram below, $\hat B=35^\circ$, $BD=7\text{ cm}$ and $AC=15\text{ cm}$. $CD\perp AB$. 2.1 Calculate the length of $CD$. 2.2 Calculate the value of angle at $A$. 2.3 Calculate the area of the triangle $ABC$.`,
    [
      ['2.1 Consider the triangles separately. In $\\triangle BDC$ we know Adj and need to find Opp. It means we must use “tan”.', r`\tan35^\circ=\dfrac{\text{Opp}}{\text{Adj}}`],
      r`CD=7\cdot\tan35^\circ=4{,}9`,
      ['2.2 In $\\triangle ADC$ we know Opp and Hyp for angle $A$. To find the value of angle we will use “sin”.', r`\sin\hat A=\dfrac{4{,}9}{15}`],
      r`\hat A=\sin^{-1}\dfrac{4{,}9}{15}=19{,}07^\circ`,
      ['2.3 Area of $\\triangle ABC$', r`\text{Area}=\dfrac12\cdot b\cdot h`],
      ['Base, $AB=AD+DB$. To find $AD$ we may use either Pythagoras or trig:', r`\cos A=\dfrac{AD}{15}`],
      r`AD=15\cdot\cos(19{,}07^\circ)=14{,}18`,
      ['So', r`AD=14{,}18\text{ cm and }AB=21{,}18\text{ cm}`],
      ['Therefore, area of $\\triangle ABC$', r`\text{Area}_{ABC}=\dfrac12\cdot21{,}18\cdot4{,}9=51{,}89\text{ cm}^2`],
    ],
    {
      xRange: [-1, 22], yRange: [-1.5, 6.5], axes: false,
      points: [
        { id: 'A', label: 'A', x: 0, y: 0, side: 'sw', color: 'main' },
        { id: 'B', label: 'B', x: 21.18, y: 0, side: 'se', color: 'main' },
        { id: 'C', label: 'C', x: 14.18, y: 4.9, side: 'n', color: 'main' },
        { id: 'D', label: 'D', x: 14.18, y: 0, side: 's', color: 'green' },
      ],
      polygons: [{ ids: ['A', 'B', 'C'] }],
      segments: [{ from: 'C', to: 'D', color: 'alt', dashed: true }, { from: 'A', to: 'C', label: '15' }, { from: 'D', to: 'B', label: '7' }],
      angles: [{ at: 'D', from: 'A', to: 'C', right: true }, { at: 'B', from: 'C', to: 'A', label: '35°', radius: 40 }],
    },
  ),
  ...worked(
    '3',
    r`In the diagram below, $AC=8$ centimetres, $\hat A=23^\circ$ and $\hat B=49^\circ$. $CD\perp AB$. 3.1 Calculate the value of $CD$, correct to TWO decimal places. 3.2 Calculate the length of $AB$, correct to TWO decimal places.`,
    [
      ['3.1 Consider the triangles separately,', r`\sin\hat A=\dfrac{CD}{AC}`],
      r`\sin23^\circ=\dfrac{CD}{8}`,
      r`CD=8\cdot\sin23^\circ=3{,}13`,
      ['3.2 Note that $AB=AD+DB$. From triangle $ADC$', r`\cos\hat A=\dfrac{AD}{AC}`],
      r`\cos23^\circ=\dfrac{AD}{8}`,
      r`AD=8\cdot\cos23^\circ=7{,}36`,
      ['And from $\\triangle BDC$', r`\tan\hat B=\dfrac{CD}{BD}`],
      r`\tan49^\circ=\dfrac{3{,}13}{BD}`,
      r`BD=\dfrac{3{,}13}{\tan49^\circ}=2{,}72`,
      ['Then', r`AB=7{,}36+2{,}72`],
      r`\therefore\;AB=10{,}08\text{ cm}`,
    ],
    {
      xRange: [-1, 11], yRange: [-1.5, 4.5], axes: false,
      points: [
        { id: 'A', label: 'A', x: 0, y: 0, side: 'sw', color: 'main' },
        { id: 'B', label: 'B', x: 10.08, y: 0, side: 'se', color: 'main' },
        { id: 'C', label: 'C', x: 7.36, y: 3.13, side: 'n', color: 'main' },
        { id: 'D', label: 'D', x: 7.36, y: 0, side: 's', color: 'green' },
      ],
      polygons: [{ ids: ['A', 'B', 'C'] }],
      segments: [{ from: 'C', to: 'D', color: 'alt', dashed: true }, { from: 'A', to: 'C', label: '8' }],
      angles: [{ at: 'D', from: 'A', to: 'C', right: true }, { at: 'A', from: '+x', to: 'C', label: '23°', radius: 44 }, { at: 'B', from: 'C', to: 'A', label: '49°', radius: 36 }],
    },
  ),
  ...worked(
    '4',
    r`In the figure $\triangle PQR$ is a right triangle and $QT\perp PR$. 4.1 Write down two ratios of $\cos\alpha$. 4.2 Hence, if $PR=9$ and $PQ=6$, determine $PT$. 4.3 Find the value of $\tan\alpha$.`,
    [
      ['4.1 In $\\triangle PTQ$,', r`\cos\alpha=\dfrac{PT}{PQ}`],
      ['And in $\\triangle PQR$,', r`\cos\alpha=\dfrac{PQ}{PR}`],
      ['4.2 From 4.1 we get', r`\cos\alpha=\dfrac{PT}{PQ}=\dfrac{PQ}{PR}`],
      ['(cross multiply)', r`\dfrac{PT}{6}=\dfrac{6}{9}`],
      r`9\cdot PT=36`,
      r`\therefore\;PT=4`,
      ['4.3 In $\\triangle PTQ$, $PT^2+QT^2=PQ^2$ (Pythagoras)', r`4^2+QT^2=6^2`],
      r`\therefore\;QT=\sqrt{20}=2\sqrt5`,
      ['In $\\triangle PTQ$,', r`\tan\alpha=\dfrac{QT}{PT}`],
      r`\therefore\;\tan\alpha=\dfrac{2\sqrt5}{4}=\dfrac{\sqrt5}{2}`,
    ],
    {
      xRange: [-1, 8], yRange: [-1, 7.5], axes: false,
      points: [
        { id: 'P', label: 'P', x: 0, y: 6, side: 'nw', color: 'main' },
        { id: 'Q', label: 'Q', x: 0, y: 0, side: 'sw', color: 'main' },
        { id: 'R', label: 'R', x: 6.708, y: 0, side: 'se', color: 'main' },
        { id: 'T', label: 'T', x: 2.981, y: 3.333, side: 'e', color: 'green' },
      ],
      polygons: [{ ids: ['P', 'Q', 'R'] }],
      segments: [{ from: 'Q', to: 'T', color: 'alt', dashed: true }],
      angles: [{ at: 'Q', from: 'R', to: 'P', right: true }, { at: 'T', from: 'R', to: 'Q', right: true }, { at: 'P', from: 'Q', to: 'R', label: 'α', radius: 34 }],
    },
  ),

  h2('Task 2'),
  note(r`Only question 5 (page 42) of this task is included.`),
  fig({
    xRange: [-2, 28], yRange: [-2, 8], axes: false,
    points: [
      { id: 'A', label: 'A', x: 7, y: 5.87, side: 'n', color: 'main' },
      { id: 'B', label: 'B', x: 0, y: 0, side: 'sw', color: 'main' },
      { id: 'C', label: 'C', x: 7, y: 0, side: 's', color: 'green' },
      { id: 'D', label: 'D', x: 14, y: 0, side: 's', color: 'main' },
      { id: 'E', label: 'E', x: 26.12, y: 0, side: 'se', color: 'main' },
    ],
    segments: [
      { from: 'B', to: 'A', ticks: 1 },
      { from: 'A', to: 'D', ticks: 1 },
      { from: 'B', to: 'E' },
      { from: 'A', to: 'E', label: '20' },
      { from: 'A', to: 'C', color: 'alt', dashed: true },
      { from: 'B', to: 'C', label: '7' },
    ],
    angles: [{ at: 'C', from: 'A', to: 'D', right: true }, { at: 'B', from: '+x', to: 'A', label: '40°', radius: 38 }],
    caption: 'Figure for question 5 — drawn to scale: AB = AD, AE = 20 m, BC = 7 m and ∠ACB = 90°.',
  }),
  ANSWERS_NOTE,
  qs([
    { n: '5.1', context: r`The diagram shows the positions of 5 soccer players training for the 2022 World Cup: Andile ($A$), Brendan ($B$), Eric ($E$), Carlos ($C$) and Deshan ($D$). $AB=AD$, $AE=20\text{ m}$, $BC=7\text{ m}$ and $A\hat CB=90^\circ$.`, q: r`If $\hat B=40^\circ$ given, determine the distance between Andile and Carlos, i.e. $AC$.`, a: r`$\tan40^\circ=\dfrac{AC}{7}\;\Rightarrow\;AC=7\tan40^\circ=5{,}87\text{ m}$` },
    { n: '5.2', context: r`The diagram shows the positions of 5 soccer players training for the 2022 World Cup. $AB=AD$, $AE=20\text{ m}$, $BC=7\text{ m}$ and $A\hat CB=90^\circ$.`, q: r`Find the value of angle $A\hat EB$.`, a: r`In $\triangle ACE$: $\sin\hat E=\dfrac{AC}{AE}=\dfrac{5{,}87}{20}\;\Rightarrow\;\hat E=\sin^{-1}(0{,}2937)=17{,}08^\circ$` },
    { n: '5.3', context: r`The diagram shows the positions of 5 soccer players training for the 2022 World Cup. $AB=AD$, $AE=20\text{ m}$, $BC=7\text{ m}$ and $A\hat CB=90^\circ$.`, q: r`Show that $BC=CD$.`, a: r`$AB=AD$, so $\triangle ABD$ is isosceles. $AC\perp BD$ (since $A\hat CB=90^\circ$), and the perpendicular from the apex of an isosceles triangle bisects the base. So $BC=CD$. (Or: $AB^2-AC^2=BC^2$ and $AD^2-AC^2=CD^2$ with $AB=AD$.)` },
    { n: '5.4', context: r`The diagram shows the positions of 5 soccer players training for the 2022 World Cup. $AB=AD$, $AE=20\text{ m}$, $BC=7\text{ m}$ and $A\hat CB=90^\circ$.`, q: r`Calculate the distance between Deshan and Eric, i.e. $DE$. (Hint: $DE=CE-CD$)`, a: r`$CD=BC=7$. $CE=\sqrt{AE^2-AC^2}=\sqrt{400-34{,}5}=19{,}12$. $DE=CE-CD=19{,}12-7=12{,}12\text{ m}$` },
  ]),
]);

export const GEOM_UNIT_2A_LESSONS: Lesson[] = [A_PYTHAGORAS, B_RIGHT_TRIANGLE];
