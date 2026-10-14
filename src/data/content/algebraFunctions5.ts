import type { Figure, Lesson } from '../../lib/types';
import { r, h2, h3, p, note, solution, fig, lesson as make } from './algKit';

/**
 * Unit 6: Functions, B. Elements of a parabola: worked Questions 1 and 2 (transformations).
 * Book pp. 121–122; photo 45 of the Math-Algebra folder.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-functions-parabola', id, title, minutes, blocks);

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

export const PARABOLA_ELEMENTS_Q = lesson('alg-u6-b-questions', 'B. Elements of a Parabola: Worked Questions', 40, [
  h2('Question 1'),
  p(r`Given: $f(x)=x^2-2x-1$.`),
  h3('1.1 Find the axis of symmetry of $f(x)$.'),
  solution([
    r`x=\dfrac{-b}{2a}=\dfrac{-(-2)}{2(1)}=1`,
    r`\text{Axis of symmetry: }x=1`,
  ]),
  h3('1.2 Write down the equation of $g(x)$ obtained by shifting $f(x)$ by 1 unit to the right.'),
  solution([
    ['Shifting right by $1$ unit: $f(x-1)$', r`g(x)=(x-1)^2-2(x-1)-1=x^2-2x+1-2x+2-1=x^2-4x+2`],
  ]),
  note(r`The book’s heading says “1 units down” but the working $f(x-1)$ is a shift one unit to the right, as the question states.`),
  h3('1.3 Write down the equation of $h(x)$ obtained by shifting $f(x)$ by 2 units down.'),
  solution([
    ['Shifting down by $2$ units: $f(x)-2$', r`h(x)=x^2-2x-1-2=x^2-2x-3`],
  ]),
  h3('1.4 Write down the equation of $k(x)$ obtained by reflecting $f(x)$ in the y-axis.'),
  solution([
    ['Reflecting in the y-axis: $f(-x)$', r`k(x)=(-x)^2-2(-x)-1=x^2+2x-1`],
  ]),
  h3('1.5 Find the domain and range of $f(x)$.'),
  solution([
    r`\text{Domain: }x\in\mathbb{R}\qquad\text{Range: }y\ge-2`,
    ['For the range find the y-coordinate of the TP:', r`f(1)=1^2-2(1)-1=-2`],
    ['The TP is the minimum: the arms of the parabola are upwards ($a>0$).', ''],
  ]),
  h3('1.6 Find the minimum value of $f(x)$.'),
  solution([
    ['The minimum value is at the TP:', r`y=-2`],
  ]),
  h3('1.7 If $f(x)$ is shifted 2 units to the left, find the coordinates of the new turning point.'),
  solution([
    ['Only the x-coordinate of $f(x)$ will change. It will decrease by $2$ units. The original TP is $(1;-2)$.', r`\text{New }TP:(-1;\,-2)`],
  ]),

  h2('Question 2'),
  p(r`The graph of $y=x^2$ is given. Hence sketch the following:`),
  fig(par((x) => x * x, [-4, 4], [-2, 10], [[0, 0, 'TP(0; 0)']], 'y = x²')),

  h3('2.1 $y=x^2+3$'),
  p(r`The original function is shifted 3 units upwards: $TP(0;3)$.`),
  fig(par((x) => x * x + 3, [-4, 4], [-2, 12], [[0, 3, 'TP(0; 3)']], 'y = x² + 3')),
  h3('2.2 $y=(x-2)^2$'),
  p(r`The original function is shifted 2 units to the right: $TP(2;0)$, y-intercept $4$.`),
  fig(par((x) => (x - 2) * (x - 2), [-3, 6], [-2, 10], [[2, 0, 'TP(2; 0)'], [0, 4, '(0; 4)']], 'y = (x − 2)²')),
  h3('2.3 $y=x^2-1$'),
  p(r`The original function is shifted 1 unit downwards: $TP(0;-1)$.`),
  fig(par((x) => x * x - 1, [-4, 4], [-3, 9], [[0, -1, 'TP(0; -1)'], [-1, 0, '(-1; 0)'], [1, 0, '(1; 0)']], 'y = x² − 1')),
  h3('2.4 $y=(x-3)^2+2$'),
  p(r`The original function is shifted 2 units upwards and 3 units to the right: $TP(3;2)$, y-intercept $(0;11)$.`),
  fig(par((x) => (x - 3) * (x - 3) + 2, [-2, 8], [-2, 14], [[3, 2, 'TP(3; 2)'], [0, 11, '(0; 11)']], 'y = (x − 3)² + 2')),
  h3('2.5 $y=-x^2+2$'),
  p(r`The function $y=-x^2$ is shifted 2 units upwards: $TP(0;2)$.`),
  fig(par((x) => -x * x + 2, [-4, 4], [-8, 4], [[0, 2, 'TP(0; 2)']], 'y = −x² + 2')),
  h3('2.6 $y=-(x+3)^2$'),
  p(r`The function $y=-x^2$ is shifted 3 units to the left: $TP(-3;0)$, y-intercept $(0;-9)$.`),
  fig(par((x) => -(x + 3) * (x + 3), [-8, 3], [-11, 3], [[-3, 0, 'TP(-3; 0)'], [0, -9, '(0; -9)']], 'y = −(x + 3)²')),
  h3('2.7 $y=-(x-1)^2+4$'),
  p(r`The function $y=-x^2$ is shifted 1 unit to the right and 4 units upwards: $TP(1;4)$, y-intercept $(0;3)$.`),
  fig(par((x) => -(x - 1) * (x - 1) + 4, [-4, 5], [-6, 6], [[1, 4, 'TP(1; 4)'], [0, 3, '(0; 3)']], 'y = −(x − 1)² + 4')),
]);

export const ALG_FUNCTIONS_5_LESSONS: Lesson[] = [PARABOLA_ELEMENTS_Q];
