import type { Figure, Lesson } from '../../lib/types';
import { r, h2, h3, p, ul, note, solution, fig, lesson as make } from './algKit';

/**
 * Unit 6: Functions, A. Parabola in turning-point form y = a(x − p)² + q, Questions 6–8.
 * Book pp. 115–116; photos 42 of the Math-Algebra folder.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-functions-parabola', id, title, minutes, blocks);

type Pt = [number, number, string];

const tpParabola = (
  a: number, pp: number, q: number,
  xRange: [number, number], yRange: [number, number],
  pts: Pt[], caption: string,
): Figure => ({
  xRange, yRange, axes: true, grid: true,
  curves: [{ fn: (x: number) => a * (x - pp) * (x - pp) + q }],
  points: pts.map(([x, y, label], i) => ({ id: `P${i}`, x, y, label })),
  caption,
} as Figure);

export const PARABOLA_TP_FORM = lesson('alg-u6-a-tp-form', 'A. Parabola: Turning-Point Form', 40, [
  h2('Turning-point form'),
  h3('To sketch a parabola in the form $y=a(x-p)^2+q$'),
  ul([
    r`Finding the turning point is very easy! $p$ is the x-coordinate of the TP and $q$ is the y-coordinate of the TP: $TP(p;q)$.`,
    r`Find the **x-intercepts (roots)** by letting $y=0$. Leave the perfect square $(x-p)^2$ alone by sending the other terms to the other side and dividing both sides by $a$. Then take the square root of both sides to find the x-values.`,
    r`Find the **y-intercept** by letting $x=0$.`,
    r`Decide the direction of the parabola by checking the coefficient of $x^2$, which is $a$. If $a>0$ the arms are upwards (happy face) and the parabola has a minimum value at the turning point. If $a<0$ the arms are downwards (sad face) and the parabola has a maximum value.`,
    r`Make a sketch graph of the function by showing the intercepts as well as the turning point.`,
  ]),
  { type: 'math', label: 'Turning-point form', text: r`y=a(x-p)^2+q\;\Rightarrow\;TP(p;\,q)` },
  note(r`Be careful with the sign of $p$: in $y=-\frac12(x+2)^2+1$ the bracket is $(x-(-2))$, so $p=-2$.`),

  h2('Question 6'),
  p(r`Make a sketch graph of the function $y=2(x-3)^2-2$.`),
  p(r`You can open the bracket, write the function in standard form and go on normally. But it is easy to work with the turning point method.`),
  solution([
    ['Turning point:', r`TP(p;\,q)=(3;\,-2)`],
    ['x-intercepts: let $y=0$ and leave $(x-3)^2$ alone:', r`2(x-3)^2-2=0\;\Rightarrow\;2(x-3)^2=2\;\Rightarrow\;(x-3)^2=1`],
    ['Take the square root of both sides:', r`x-3=\pm\sqrt1\;\Rightarrow\;x=3\pm1\;\Rightarrow\;x=4\;\text{or}\;x=2`],
    r`\therefore\;(4;\,0)\text{ and }(2;\,0)`,
    ['y-intercept: let $x=0$', r`y=2(0-3)^2-2=16\;\therefore\;(0;\,16)`],
    ['Because $a=2>0$, the arms are upwards (happy face).', ''],
  ]),
  fig(tpParabola(2, 3, -2, [-2, 7], [-5, 20], [[2, 0, '(2; 0)'], [4, 0, '(4; 0)'], [0, 16, '(0; 16)'], [3, -2, 'TP(3; -2)']], 'y = 2(x − 3)² − 2')),

  h2('Question 7'),
  p(r`Sketch the graph of the function $y=-\dfrac12(x+2)^2+1$.`),
  solution([
    ['Turning point:', r`TP(p;\,q)=(-2;\,1)`],
    ['x-intercepts: let $y=0$ and leave $(x+2)^2$ alone:', r`0=-\dfrac12(x+2)^2+1\;\Rightarrow\;\dfrac12(x+2)^2=1`],
    ['Multiply both sides by $2$:', r`(x+2)^2=2`],
    ['Take the square root of both sides:', r`x+2=\pm\sqrt2\;\Rightarrow\;x=-2\pm\sqrt2`],
    r`x\approx-0{,}59\;\text{or}\;x\approx-3{,}41`,
    r`\therefore\;(-0{,}59;\,0)\text{ and }(-3{,}41;\,0)`,
    ['y-intercept: let $x=0$', r`y=-\dfrac12(0+2)^2+1=-1\;\therefore\;(0;\,-1)`],
    ['Because $a=-\\frac12<0$, the arms are downwards (sad face).', ''],
  ]),
  fig(tpParabola(-0.5, -2, 1, [-6, 2], [-5, 3], [[-3.41, 0, '(-3,41; 0)'], [-0.59, 0, '(-0,59; 0)'], [0, -1, '(0; -1)'], [-2, 1, 'TP(-2; 1)']], 'y = −½(x + 2)² + 1')),

  h2('Question 8'),
  p(r`Sketch the graph of the function $y=-(x-3)^2$.`),
  solution([
    ['The function is in TP form but the $q$ value is missing: $y=-(x-3)^2+0$.', ''],
    r`TP(p;\,q)=(3;\,0)`,
    ['x-intercepts: let $y=0$', r`-(x-3)^2=0\;\Rightarrow\;(x-3)(x-3)=0`],
    ['Both x-values are $3$ (a double root), which is also the TP.', r`\therefore\;(3;\,0)\text{ and }(3;\,0)`],
    ['y-intercept: let $x=0$', r`y=-(0-3)^2=-9\;\therefore\;(0;\,-9)`],
    ['Because $a=-1<0$, the arms are downwards.', ''],
  ]),
  fig(tpParabola(-1, 3, 0, [-3, 8], [-12, 3], [[3, 0, 'TP(3; 0)'], [0, -9, '(0; -9)']], 'y = −(x − 3)²')),
  note(r`This is an example of a parabola which has only ONE x-intercept. Whether the parabola is happy face or sad face, this only happens when the turning point (TP) is on the x-axis. The book’s working prints “$-3$” in one line; the double root is $x=+3$.`),
]);

export const ALG_FUNCTIONS_2_LESSONS: Lesson[] = [PARABOLA_TP_FORM];
