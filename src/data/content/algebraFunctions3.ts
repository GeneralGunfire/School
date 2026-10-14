import type { Figure, Lesson } from '../../lib/types';
import { r, h2, h3, p, note, solution, fig, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 6: Functions, A. Parabola Questions 9–10 (root form), the TP summary and Task 1.
 * Book pp. 117–118; photo 43 of the Math-Algebra folder.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-functions-parabola', id, title, minutes, blocks);

type Pt = [number, number, string];

const par = (
  fn: (x: number) => number,
  xRange: [number, number], yRange: [number, number],
  pts: Pt[], caption: string,
): Figure => ({
  xRange, yRange, axes: true, grid: true,
  curves: [{ fn }],
  points: pts.map(([x, y, label], i) => ({ id: `P${i}`, x, y, label })),
  caption,
} as Figure);

export const PARABOLA_ROOT_FORM = lesson('alg-u6-a-root-form', 'A. Parabola: Root Form and Turning Point', 35, [
  h2('Question 9'),
  p(r`Sketch the graph of the function $y=\dfrac12x^2-2x$.`),
  solution([
    ['x-intercepts: let $y=0$. Multiply by $2$ and take out the common factor:', r`\dfrac12x^2-2x=0\;\Rightarrow\;x^2-4x=0\;\Rightarrow\;x(x-4)=0\;\Rightarrow\;x=0\;\text{or}\;x=4`],
    ['y-intercept: $c=0$, so the graph passes through the origin.', r`\therefore\;(0;\,0)`],
    ['Turning point:', r`x_{TP}=\dfrac{-(-2)}{2(0{,}5)}=2`],
    r`y_{TP}=\dfrac12(2)^2-2(2)=2-4=-2\;\therefore\;TP(2;\,-2)`,
    ['Because $a=\\frac12>0$, the arms are upwards.', ''],
  ]),
  fig(par((x) => 0.5 * x * x - 2 * x, [-3, 7], [-4, 8], [[0, 0, '(0; 0)'], [4, 0, '(4; 0)'], [2, -2, 'TP(2; -2)']], 'y = ½x² − 2x')),

  h2('Root (x-intercept) form'),
  p(r`Another useful form is the root (x-intercept) form. A function in the form $y=a(x-x_1)(x-x_2)$ is called the **root form**, where $x_1$ and $x_2$ are the roots (x-intercepts). When a function is in this form it is very easy to find its x-intercepts.`),
  { type: 'math', label: 'Root form', text: r`y=a(x-x_1)(x-x_2)\;\Rightarrow\;(x_1;0)\text{ and }(x_2;0)\qquad x_{TP}=\dfrac{x_1+x_2}{2}` },

  h2('Question 10'),
  p(r`Draw the graph of the function $y=-\dfrac12(x-3)(x+4)$.`),
  solution([
    ['x-intercepts: let $y=0$', r`0=-\dfrac12(x-3)(x+4)\;\therefore\;(3;\,0)\text{ and }(-4;\,0)`],
    ['y-intercept: let $x=0$', r`y=-\dfrac12(0-3)(0+4)=6\;\therefore\;(0;\,6)`],
    ['Turning point: $x_{TP}$ is exactly between the roots, so we can find it by adding the x-intercepts and dividing by $2$:', r`x_{TP}=\dfrac{-4+3}{2}=-0{,}5`],
    ['Substitute $x_{TP}$ into the function:', r`y_{TP}=-\dfrac12\left(-\dfrac12-3\right)\left(-\dfrac12+4\right)=-\dfrac12(-3{,}5)(3{,}5)=6{,}125\approx6{,}1`],
    r`\therefore\;TP(-0{,}5;\,6{,}1)`,
    ['Because $a=-\\frac12<0$, the arms are downwards.', ''],
  ]),
  fig(par((x) => -0.5 * (x - 3) * (x + 4), [-7, 6], [-6, 9], [[-4, 0, '(-4; 0)'], [3, 0, '(3; 0)'], [0, 6, '(0; 6)'], [-0.5, 6.125, 'TP(-0,5; 6,1)']], 'y = −½(x − 3)(x + 4)')),

  h2('Note: three ways to find the turning point'),
  note(r`Depending on the given form of the parabola, the TP can be determined in 3 ways. $x_{TP}$ is $\dfrac{-b}{2a}$ (in standard form), or in the middle of the x-intercepts (in root form), or just $p$ (in TP form). $y_{TP}$ can be found by substituting $x_{TP}$ into the function.`),
]);

export const PARABOLA_TASK_1 = lesson('alg-u6-task-1', 'A. Parabola: Task 1', 30, [
  h2('Task 1: Sketch the functions, showing the turning point and the intercepts'),
  ALG_ANSWERS_NOTE,

  h3('1. $y=x^2+8x-9$'),
  solution([
    ['x-intercepts:', r`x^2+8x-9=0\;\Rightarrow\;(x+9)(x-1)=0\;\Rightarrow\;(-9;\,0)\text{ and }(1;\,0)`],
    ['y-intercept:', r`(0;\,-9)`],
    ['Turning point:', r`x_{TP}=\dfrac{-8}{2}=-4,\;\;y_{TP}=16-32-9=-25\;\Rightarrow\;TP(-4;\,-25)`],
    ['$a=1>0$: arms upwards.', ''],
  ]),
  fig(par((x) => x * x + 8 * x - 9, [-12, 5], [-28, 10], [[-9, 0, '(-9; 0)'], [1, 0, '(1; 0)'], [0, -9, '(0; -9)'], [-4, -25, 'TP(-4; -25)']], 'y = x² + 8x − 9')),

  h3('2. $y=-\\dfrac12x^2+4x-6$'),
  solution([
    ['x-intercepts: multiply by $-2$:', r`x^2-8x+12=0\;\Rightarrow\;(x-2)(x-6)=0\;\Rightarrow\;(2;\,0)\text{ and }(6;\,0)`],
    ['y-intercept:', r`(0;\,-6)`],
    ['Turning point:', r`x_{TP}=\dfrac{-4}{2(-\frac12)}=4,\;\;y_{TP}=-8+16-6=2\;\Rightarrow\;TP(4;\,2)`],
    ['$a=-\\frac12<0$: arms downwards.', ''],
  ]),
  fig(par((x) => -0.5 * x * x + 4 * x - 6, [-3, 11], [-12, 5], [[2, 0, '(2; 0)'], [6, 0, '(6; 0)'], [0, -6, '(0; -6)'], [4, 2, 'TP(4; 2)']], 'y = −½x² + 4x − 6')),

  h3('3. $g(x)=x^2-9$'),
  solution([
    ['x-intercepts:', r`x^2-9=0\;\Rightarrow\;(x+3)(x-3)=0\;\Rightarrow\;(-3;\,0)\text{ and }(3;\,0)`],
    ['y-intercept:', r`(0;\,-9)`],
    ['Turning point ($b=0$, so it is on the y-axis):', r`TP(0;\,-9)`],
    ['$a=1>0$: arms upwards.', ''],
  ]),
  fig(par((x) => x * x - 9, [-6, 6], [-11, 8], [[-3, 0, '(-3; 0)'], [3, 0, '(3; 0)'], [0, -9, 'TP(0; -9)']], 'g(x) = x² − 9')),

  h3('4. $y=2x^2-8x-10$'),
  solution([
    ['x-intercepts: divide by $2$:', r`x^2-4x-5=0\;\Rightarrow\;(x-5)(x+1)=0\;\Rightarrow\;(5;\,0)\text{ and }(-1;\,0)`],
    ['y-intercept:', r`(0;\,-10)`],
    ['Turning point:', r`x_{TP}=\dfrac{8}{4}=2,\;\;y_{TP}=8-16-10=-18\;\Rightarrow\;TP(2;\,-18)`],
    ['$a=2>0$: arms upwards.', ''],
  ]),
  fig(par((x) => 2 * x * x - 8 * x - 10, [-4, 8], [-21, 12], [[-1, 0, '(-1; 0)'], [5, 0, '(5; 0)'], [0, -10, '(0; -10)'], [2, -18, 'TP(2; -18)']], 'y = 2x² − 8x − 10')),
]);

export const ALG_FUNCTIONS_3_LESSONS: Lesson[] = [PARABOLA_ROOT_FORM, PARABOLA_TASK_1];
