import type { Figure, Lesson } from '../../lib/types';
import { r, h2, h3, p, ul, note, solution, fig, lesson as make } from './algKit';

/**
 * Unit 6: Functions, B. Elements of a parabola and functions; transformations; average gradient.
 * Book pp. 119–120; photo 44 of the Math-Algebra folder.
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

export const PARABOLA_ELEMENTS = lesson('alg-u6-b-elements', 'B. Elements of a Parabola and Functions', 35, [
  h2('Axis of symmetry'),
  p(r`The axis of symmetry of a parabola is a vertical line that divides the parabola into two congruent halves.`),
  { type: 'math', label: 'Axis of symmetry', text: r`x=p\quad(\text{the x-coordinate of the turning point})` },

  h2('Maximum and minimum'),
  p(r`Depending on its shape, a parabola has a maximum or a minimum. The maximum or minimum value of $f(x)$ is always equal to the **y-coordinate of the turning point**.`),
  ul([
    r`Every parabola has a max or min point, which is its turning point (TP).`,
    r`If the coefficient of $x^2$ is positive (happy face, $a>0$) then the parabola has a **minimum** value.`,
    r`Otherwise (sad face, $a<0$) it has a **maximum** value.`,
  ]),
  fig(par((x) => (x - 2) * (x - 2) - 1, [-2, 6], [-3, 6], [[2, -1, 'min']], 'a > 0: minimum value at the turning point')),
  fig(par((x) => -(x - 2) * (x - 2) + 4, [-2, 6], [-3, 6], [[2, 4, 'max']], 'a < 0: maximum value at the turning point')),

  h2('Domain'),
  p(r`The **domain** is the set of possible x-values of a function. In a parabola the domain is all real numbers, indicated as $x\in\mathbb{R}$.`),

  h2('Range'),
  p(r`The **range** is the set of possible y-values of a function. In a parabola the range is related to the turning point $TP(p;q)$:`),
  ul([
    r`If the turning point is a maximum (sad face), the range is $y\le q$.`,
    r`If the turning point is a minimum (happy face), the range is $y\ge q$.`,
  ]),
  note(r`Example: $y=x^2-6x-7$ has $TP(3;-16)$ and $a>0$, so the range is $y\ge-16$. For $y=-x^2+4$, $TP(0;4)$ and $a<0$, so the range is $y\le4$.`),

  h2('Point on the graph'),
  p(r`Substitute the $x$ and $y$ values of the point into the equation. This method is used to find the missing coordinates or the unknown constants.`),
  h3('Example'),
  p(r`Given $y=ax^2+c$ (a parabola with the points $(0;-12)$ and $(-2;0)$ on the graph), find the values of $c$ and $a$.`),
  solution([
    ['Take the point $(0;-12)$:', r`-12=a\cdot0^2+c\;\Rightarrow\;c=-12`],
    ['(Or you can directly say $c=-12$ because it is the y-intercept.) Now take the point $(-2;0)$:', r`0=a(-2)^2-12`],
    r`12=4a\;\Rightarrow\;a=3`,
  ]),
  fig(par((x) => 3 * x * x - 12, [-5, 5], [-14, 14], [[-2, 0, '(-2; 0)'], [2, 0, '(2; 0)'], [0, -12, '(0; -12)']], 'y = 3x² − 12')),
]);

export const FUNCTION_TRANSFORMS = lesson('alg-u6-b-transformations', 'B. Transformations: Shifting and Reflecting', 30, [
  h2('Transformation of functions: shifting and reflecting'),
  p(r`The following rules apply to any type of function, i.e. straight line, parabola, hyperbola, exponential, trigonometric... Let $f(x)$ be the original function.`),
  {
    type: 'definitions', items: [
      { term: r`$f(x-a)$`, meaning: r`shifting $f(x)$ $a$ units to the right.` },
      { term: r`$f(x+a)$`, meaning: r`shifting $f(x)$ $a$ units to the left.` },
      { term: r`$f(x)-a$`, meaning: r`shifting $f(x)$ $a$ units downwards.` },
      { term: r`$f(x)+a$`, meaning: r`shifting $f(x)$ $a$ units upwards.` },
      { term: r`$f(x-a)+b$`, meaning: r`shifting $f(x)$ $a$ units to the right and $b$ units upwards.` },
      { term: r`$f(-x)$`, meaning: r`reflecting $f(x)$ in the y-axis (symmetrical to the y-axis). Change all $x$ values to $-x$.` },
      { term: r`$-f(x)$`, meaning: r`reflecting $f(x)$ in the x-axis (symmetrical to the x-axis). Change the signs of each term.` },
    ],
  } as never,
  note(r`Check with the parabola $y=x^2$: $f(x-3)+2=(x-3)^2+2$ is the same parabola with its turning point moved from $(0;0)$ to $(3;2)$. $-f(x)=-x^2$ is the reflection in the x-axis.`),

  h2('The average gradient'),
  p(r`The average gradient between any two points on a curve is the gradient of the line which passes through these two points.`),
  { type: 'math', label: 'Average gradient', text: r`m=\dfrac{y_2-y_1}{x_2-x_1}=\dfrac{f(x_2)-f(x_1)}{x_2-x_1}` },
  note(r`Example: for $f(x)=x^2$ between $x=1$ and $x=3$: $m=\dfrac{9-1}{3-1}=4$.`),
]);

export const ALG_FUNCTIONS_4_LESSONS: Lesson[] = [PARABOLA_ELEMENTS, FUNCTION_TRANSFORMS];
