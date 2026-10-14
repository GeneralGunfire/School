import type { Figure, Lesson } from '../../lib/types';
import { r, h2, h3, p, ul, note, solution, fig, lesson as make } from './algKit';

/**
 * Unit 6: Functions, A. Parabola (standard form), Questions 1–5.
 * Book pp. 112–114; photos 40–41 of the Math-Algebra folder.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-functions-parabola', id, title, minutes, blocks);

type Pt = [number, number, string];

/** A parabola y = ax² + bx + c with labelled intercepts and turning point. */
const parabola = (
  a: number, b: number, c: number,
  xRange: [number, number], yRange: [number, number],
  pts: Pt[], caption: string,
): Figure => ({
  xRange, yRange, axes: true, grid: true,
  curves: [{ fn: (x: number) => a * x * x + b * x + c }],
  points: pts.map(([x, y, label], i) => ({ id: `P${i}`, x, y, label })),
  caption,
} as Figure);

export const PARABOLA_STANDARD = lesson('alg-u6-a-parabola', 'A. Parabola: Standard Form', 40, [
  h2('Standard form'),
  p(r`A parabola is the graph of a quadratic function in standard form $y=ax^2+bx+c$.`),
  h3('To sketch any parabola $y=ax^2+bx+c$'),
  ul([
    r`Find the **x-intercepts (roots)** by letting $y=0$. You will solve a quadratic equation. Indicate the x-intercepts as $(?\,;0)$.`,
    r`Find the **y-intercept** by letting $x=0$. Indicate it as $(0\,;?)$.`,
    r`Find the **turning point** using the formula $x=\dfrac{-b}{2a}$.`,
    r`Then find the **y-coordinate of the turning point** by substituting the x-value into the function: $TP(x;y)$.`,
    r`Decide the **direction** of the parabola by checking the coefficient of $x^2$, which is $a$.`,
    r`If $a>0$ the arms point upwards (happy face) and the parabola has a **minimum** value at the turning point.`,
    r`If $a<0$ the arms point downwards (sad face) and the parabola has a **maximum** value.`,
    r`Make a sketch of the function, showing the intercepts and the turning point.`,
  ]),
  { type: 'math', label: 'Turning point', text: r`x_{TP}=\dfrac{-b}{2a},\qquad y_{TP}=a\,x_{TP}^2+b\,x_{TP}+c` },

  h2('Question 1'),
  p(r`Make a sketch graph of the function $y=x^2-6x-7$.`),
  solution([
    ['x-intercepts: let $y=0$', r`x^2-6x-7=0\;\Rightarrow\;(x-7)(x+1)=0\;\Rightarrow\;x=7\;\text{or}\;x=-1`],
    r`\therefore\;(7;\,0)\text{ and }(-1;\,0)`,
    ['y-intercept: let $x=0$', r`y=-7\;\therefore\;(0;\,-7)`],
    ['Turning point:', r`x_{TP}=\dfrac{-(-6)}{2(1)}=3`],
    ['Substitute $x=3$ into the function:', r`y_{TP}=3^2-6(3)-7=-16\;\therefore\;TP(3;\,-16)`],
    ['Because $a=1>0$, the arms are upwards (happy face).', ''],
  ]),
  fig(parabola(1, -6, -7, [-4, 10], [-19, 8], [[-1, 0, '(-1; 0)'], [7, 0, '(7; 0)'], [0, -7, '(0; -7)'], [3, -16, 'TP(3; -16)']], 'y = x² − 6x − 7')),

  h2('Question 2'),
  p(r`Make a sketch graph of the function $f(x)=2x^2-8x+6$.`),
  solution([
    ['x-intercepts: let $y=0$. Divide each term by $2$:', r`x^2-4x+3=0\;\Rightarrow\;(x-1)(x-3)=0\;\Rightarrow\;x=1\;\text{or}\;x=3`],
    r`\therefore\;(1;\,0)\text{ and }(3;\,0)`,
    ['y-intercept: $f(0)=6$', r`\therefore\;(0;\,6)`],
    ['Turning point:', r`x_{TP}=\dfrac{-(-8)}{2(2)}=2`],
    ['Substitute $x=2$:', r`y_{TP}=2(2)^2-8(2)+6=-2\;\therefore\;TP(2;\,-2)`],
    ['Because $a=2>0$, the arms are upwards (happy face).', ''],
  ]),
  fig(parabola(2, -8, 6, [-2, 6], [-4, 10], [[1, 0, '(1; 0)'], [3, 0, '(3; 0)'], [0, 6, '(0; 6)'], [2, -2, 'TP(2; -2)']], 'f(x) = 2x² − 8x + 6')),
  note(r`The photo shows “$+7$” in the working for $y_{TP}$; it should be $+6$ (the constant term), which gives $-2$ as in the book’s graph.`),

  h2('Question 3'),
  p(r`Make a sketch graph of the function $y=-\dfrac12x^2-3x-4$.`),
  solution([
    ['x-intercepts: let $y=0$. Multiply both sides by $-2$:', r`x^2+6x+8=0\;\Rightarrow\;(x+2)(x+4)=0\;\Rightarrow\;x=-2\;\text{or}\;x=-4`],
    r`\therefore\;(-2;\,0)\text{ and }(-4;\,0)`,
    ['y-intercept: let $x=0$', r`y=-4\;\therefore\;(0;\,-4)`],
    ['Turning point (for each step use the original function):', r`x_{TP}=\dfrac{-(-3)}{2\left(-\frac12\right)}=-3`],
    ['Substitute $x=-3$ into the original function:', r`y_{TP}=-\dfrac12(-3)^2-3(-3)-4=0{,}5\;\therefore\;TP(-3;\,0{,}5)`],
    ['Because $a=-\\frac12<0$, the arms are downwards (sad face).', ''],
  ]),
  fig(parabola(-0.5, -3, -4, [-8, 2], [-7, 3], [[-4, 0, '(-4; 0)'], [-2, 0, '(-2; 0)'], [0, -4, '(0; -4)'], [-3, 0.5, 'TP(-3; 0,5)']], 'y = −½x² − 3x − 4')),

  h2('Question 4'),
  p(r`Sketch the graph of the function $g(x)=-x^2+4$.`),
  solution([
    ['x-intercepts: let $y=0$. Multiply both sides by $-1$:', r`x^2-4=0\;\Rightarrow\;(x-2)(x+2)=0\;\Rightarrow\;x=2\;\text{or}\;x=-2`],
    r`\therefore\;(2;\,0)\text{ and }(-2;\,0)`,
    ['y-intercept: let $x=0$', r`y=4\;\therefore\;(0;\,4)`],
    ['Turning point:', r`x_{TP}=\dfrac{-0}{2(-1)}=0,\qquad y_{TP}=4`],
    r`\therefore\;TP(0;\,4)\text{, the same as the y-intercept (when }b=0\text{)}`,
    ['Because $a=-1<0$, the arms are downwards.', ''],
  ]),
  fig(parabola(-1, 0, 4, [-4, 4], [-4, 6], [[-2, 0, '(-2; 0)'], [2, 0, '(2; 0)'], [0, 4, 'TP(0; 4)']], 'g(x) = −x² + 4')),

  h2('Question 5'),
  p(r`Make a sketch graph of $y=-x^2+x-1$.`),
  solution([
    ['x-intercepts: let $y=0$. Use the quadratic formula:', r`-x^2+x-1=0\;\Rightarrow\;x=\dfrac{-1\pm\sqrt{1^2-4(-1)(-1)}}{-2}=\dfrac{-1\pm\sqrt{-3}}{-2}`],
    ['$\\sqrt{-3}$ is not real, so there is no solution: **no x-intercepts**, the graph does not cut the x-axis.', ''],
    ['y-intercept: let $x=0$', r`y=-1\;\therefore\;(0;\,-1)`],
    ['Turning point:', r`x_{TP}=\dfrac{-1}{2(-1)}=\dfrac12`],
    ['Substitute $x=\\frac12$:', r`y_{TP}=-\left(\dfrac12\right)^2+\dfrac12-1=-\dfrac34\;\therefore\;TP\left(\dfrac12;\,-\dfrac34\right)`],
    ['Because $a=-1<0$, the arms are downwards (the whole graph lies below the x-axis).', ''],
  ]),
  fig(parabola(-1, 1, -1, [-3, 4], [-6, 2], [[0, -1, '(0; -1)'], [0.5, -0.75, 'TP(½; -¾)']], 'y = −x² + x − 1')),
  note(r`The book prints $y_{TP}=\frac{-1}{3}$ in the working but $-\frac34$ in the graph; the correct value is $-\frac34$.`),

  h2('Notes from the book'),
  ul([
    r`**Note 1:** Every parabola has definitely and exactly **one y-intercept**. Substitute $x$ with zero to get this value.`,
    r`**Note 2:** Every parabola has definitely **one turning point**. Its coordinates can be determined in different ways.`,
    r`**Note 3:** The number of x-intercepts of a parabola can change. There can be **2, 1 or no x-intercepts**. Substitute $y$ with zero and solve the quadratic equation. No solution means no x-intercept.`,
  ]),
]);

export const ALG_FUNCTIONS_1_LESSONS: Lesson[] = [PARABOLA_STANDARD];
