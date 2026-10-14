import type { Figure, Lesson } from '../../lib/types';
import { r, h2, h3, p, ul, note, fig, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 6: Functions, B. Task 6 (parabola) and C. Hyperbola introduction. Book pp. 125–126; photo 47.
 */

const lessonP = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-functions-parabola', id, title, minutes, blocks);
const lessonH = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-functions-hyperbola', id, title, minutes, blocks);

const par = (
  fn: (x: number) => number,
  xRange: [number, number], yRange: [number, number],
  pts: [number, number, string][], caption: string,
): Figure => ({
  xRange, yRange, axes: true, grid: true,
  curves: [{ fn }],
  points: pts.map(([x, y, label], i) => ({ id: `P${i}`, x, y, label })),
  caption,
} as Figure);

/** y = a/(x-p) + q drawn as two branches with its asymptotes. */
export const hyper = (
  a: number, pp: number, q: number,
  xRange: [number, number], yRange: [number, number],
  pts: [number, number, string][], caption: string,
): Figure => {
  const fn = (x: number) => a / (x - pp) + q;
  const eps = 0.05;
  return {
    xRange, yRange, axes: true, grid: true,
    curves: [
      { fn, domain: [xRange[0], pp - eps] },
      { fn, domain: [pp + eps, xRange[1]] },
    ],
    lines: [{ x: pp, dashed: true, color: 'amber' }, { m: 0, c: q, dashed: true, color: 'amber' }],
    points: pts.map(([x, y, label], i) => ({ id: `P${i}`, x, y, label })),
    caption,
  } as Figure;
};

export const PARABOLA_TASK_6 = lessonP('alg-u6-task-6', 'B. Parabola: Task 6', 30, [
  ALG_ANSWERS_NOTE,
  h2('Question 1: The graph of $y=x^2$ is given. Hence sketch the following functions'),
  qs([
    { n: '1.1', q: r`$y=x^2-3$`, a: r`Shift $y=x^2$ 3 units down: $TP(0;-3)$, x-intercepts $\pm\sqrt3$.` },
    { n: '1.2', q: r`$y=(x+2)^2$`, a: r`Shift 2 units to the left: $TP(-2;0)$, y-intercept $(0;4)$.` },
    { n: '1.3', q: r`$y=x^2+2$`, a: r`Shift 2 units up: $TP(0;2)$, no x-intercepts.` },
    { n: '1.4', q: r`$y=(x-1)^2-1$`, a: r`Shift 1 unit right and 1 down: $TP(1;-1)$, x-intercepts $(0;0)$ and $(2;0)$.` },
    { n: '1.5', q: r`$y=-x^2-2$`, a: r`Reflect in the x-axis and shift 2 units down: $TP(0;-2)$, arms downwards, no x-intercepts.` },
    { n: '1.6', q: r`$y=-(x+1)^2$`, a: r`Reflect in the x-axis and shift 1 unit left: $TP(-1;0)$, y-intercept $(0;-1)$.` },
    { n: '1.7', q: r`$y=-(x+2)^2+1$`, a: r`Reflect, shift 2 left and 1 up: $TP(-2;1)$, x-intercepts $(-3;0)$ and $(-1;0)$, y-intercept $(0;-3)$.` },
  ]),
  fig(par((x) => x * x - 3, [-4, 4], [-5, 8], [[0, -3, 'TP(0; -3)']], '1.1  y = x² − 3')),
  fig(par((x) => (x + 2) * (x + 2), [-6, 3], [-2, 9], [[-2, 0, 'TP(-2; 0)'], [0, 4, '(0; 4)']], '1.2  y = (x + 2)²')),
  fig(par((x) => x * x + 2, [-4, 4], [-2, 10], [[0, 2, 'TP(0; 2)']], '1.3  y = x² + 2')),
  fig(par((x) => (x - 1) * (x - 1) - 1, [-3, 5], [-3, 8], [[1, -1, 'TP(1; -1)'], [0, 0, '(0; 0)'], [2, 0, '(2; 0)']], '1.4  y = (x − 1)² − 1')),
  fig(par((x) => -x * x - 2, [-4, 4], [-9, 2], [[0, -2, 'TP(0; -2)']], '1.5  y = −x² − 2')),
  fig(par((x) => -(x + 1) * (x + 1), [-5, 3], [-9, 2], [[-1, 0, 'TP(-1; 0)'], [0, -1, '(0; -1)']], '1.6  y = −(x + 1)²')),
  fig(par((x) => -(x + 2) * (x + 2) + 1, [-6, 2], [-6, 3], [[-2, 1, 'TP(-2; 1)'], [-3, 0, '(-3; 0)'], [-1, 0, '(-1; 0)'], [0, -3, '(0; -3)']], '1.7  y = −(x + 2)² + 1')),

  h2('Question 2'),
  qs([
    { n: '2', context: r`The sketch (not drawn to scale) shows the parabola $y=-x^2+2x+k$ that intercepts the x-axis at $A$ and $C$. A straight line through $A$ cuts the parabola at $B(3;5)$.`, q: r`2.1 Show by calculations that $k=8$.`, a: r`$B(3;5)$ lies on the parabola: $5=-(3)^2+2(3)+k=-9+6+k\Rightarrow k=8$ ✔.` },
    { n: '2.2', q: r`Determine the coordinates of $A$.`, a: r`$-x^2+2x+8=0\Rightarrow x^2-2x-8=0\Rightarrow(x-4)(x+2)=0$. $x=-2$ or $x=4$. $A$ is the left-hand intercept: $A(-2;\,0)$ (and $C(4;0)$).` },
    { n: '2.3', q: r`Determine the gradient of $AB$.`, a: r`$m_{AB}=\dfrac{5-0}{3-(-2)}=1$.` },
    { n: '2.4', context: r`A straight line $ED$ with $E$ and $D(2;p)$ on the parabola is parallel to $AB$.`, q: r`2.4.1 Determine the value of $p$.`, a: r`$p=-(2)^2+2(2)+8=8$, so $D(2;8)$.` },
    { n: '2.4.2', q: r`The equation of $ED$.`, a: r`Parallel to $AB$, so $m=1$. $y-8=1(x-2)\Rightarrow y=x+6$.` },
    { n: '2.4.3', q: r`The coordinates of $E$ (intersection point of the two graphs; solve simultaneously).`, a: r`$x+6=-x^2+2x+8\Rightarrow x^2-x-2=0\Rightarrow(x-2)(x+1)=0$. $x=2$ is point $D$, so $x=-1$ and $y=-1+6=5$: $E(-1;\,5)$.` },
  ]),
  fig(par((x) => -x * x + 2 * x + 8, [-4, 6], [-3, 11], [[-2, 0, 'A(-2; 0)'], [4, 0, 'C(4; 0)'], [3, 5, 'B(3; 5)'], [2, 8, 'D(2; 8)'], [-1, 5, 'E(-1; 5)']], 'y = −x² + 2x + 8')),
]);

export const HYPERBOLA_INTRO = lessonH('alg-u6-c-hyperbola', 'C. Hyperbola: Introduction', 35, [
  h2('The hyperbola'),
  p(r`A **hyperbola** is a function with the standard form $y=\dfrac{a}{x-p}+q$, where $a$ is a constant.`),
  h3('The parent function $y=\dfrac ax$'),
  p(r`The hyperbola $y=\dfrac ax$ does not have any x-intercept nor y-intercept. The value of $x$ cannot be zero, neither can $y$. The graph does not touch either of the axes. This is considered the hyperbola parent function and graph.`),
  ul([
    r`Domain of $y=\dfrac ax$: $x\in\mathbb{R}$ but $x\ne0$.`,
    r`Range of $y=\dfrac ax$: $y\in\mathbb{R}$ but $y\ne0$.`,
    r`$x=0$ (the y-axis) is the **vertical asymptote**.`,
    r`$y=0$ (the x-axis) is the **horizontal asymptote**.`,
    r`If $a>0$, the function is in the first and third quadrants.`,
    r`If $a<0$, the function is in the second and fourth quadrants.`,
  ]),
  fig(hyper(2, 0, 0, [-6, 6], [-6, 6], [[1, 2, '(1; 2)'], [-1, -2, '(-1; -2)']], 'a > 0: y = 2/x (1st and 3rd quadrants)')),
  fig(hyper(-2, 0, 0, [-6, 6], [-6, 6], [[1, -2, '(1; -2)'], [-1, 2, '(-1; 2)']], 'a < 0: y = −2/x (2nd and 4th quadrants)')),

  h2('Function of the form $y=\\dfrac{a}{x-p}+q$'),
  ul([
    r`The vertical asymptote: $x=p$ (the x-value which makes the denominator zero).`,
    r`The horizontal asymptote: $y=q$.`,
  ]),
  h3('To sketch a hyperbola $y=\\dfrac{a}{x-p}+q$'),
  ul([
    r`**Asymptotes:** $x=p$ and $y=q$.`,
    r`**y-intercept:** make $x=0$.`,
    r`**The shape:** if $a>0$ in the 1st and 3rd quadrant*; if $a<0$ in the 2nd and 4th quadrant*.`,
    r`**Domain:** $x\in\mathbb{R}$, $x\ne p$ (all $x$ values except $p$).`,
    r`**Range:** $y\in\mathbb{R}$, $y\ne q$ (all $y$ values except $q$).`,
  ]),
  note(r`*Here, the quadrants of the asymptotes are implied: the “quadrants” are the four regions formed by the two asymptotes, which cross at $(p;q)$.`),
  fig(hyper(2, 1, 1, [-5, 7], [-6, 8], [[0, -1, '(0; -1)'], [3, 2, '(3; 2)']], 'y = 2/(x − 1) + 1: asymptotes x = 1 and y = 1')),
]);

export const ALG_FUNCTIONS_7_LESSONS: Lesson[] = [PARABOLA_TASK_6];
export const ALG_HYPERBOLA_1_LESSONS: Lesson[] = [HYPERBOLA_INTRO];
