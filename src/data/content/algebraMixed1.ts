import type { Figure, Lesson } from '../../lib/types';
import { r, h2, p, ul, fig, lesson as make } from './algKit';

/**
 * Unit 6: Functions, E. Mixed functions: distances, intersection points, inequalities. Book p. 146; photo 55 (right page).
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-functions-mixed', id, title, minutes, blocks);

const ineq = (caption: string): Figure => ({
  xRange: [-5, 6], yRange: [-9, 8], axes: true, grid: true,
  curves: [{ fn: (x: number) => (x + 2) * (x - 3) }],
  points: [{ id: 'A', x: -2, y: 0, label: '(-2; 0)' }, { id: 'B', x: 3, y: 0, label: '(3; 0)' }],
  caption,
} as Figure);

export const MIXED_CONCEPTS = lesson('alg-u6-e-mixed', 'E. Mixed Functions: Key Concepts', 25, [
  h2('Working with more than one function'),
  p(r`When we are working with more than one function, you mainly use the following concepts:`),
  h2('Vertical distance'),
  p(r`All the points on a vertical line have the same x-coordinates. When you are finding the distance between any two points on a vertical line, you should use the difference between the two y-coordinates of the points, the top point minus the bottom point.`),
  { type: 'math', label: 'Vertical distance', text: r`y_{top}-y_{bottom}` },
  h2('Horizontal distance'),
  p(r`All the points on a horizontal line have the same y-coordinates. When you are finding the distance between any two points on a horizontal line, you should use the difference between the two x-coordinates of the points, the right point minus the left point.`),
  { type: 'math', label: 'Horizontal distance', text: r`x_{right}-x_{left}` },
  h2('Intersection points of two graphs'),
  p(r`To find the intersection points of two graphs, you equate the equations of the graphs.`),
  { type: 'math', label: 'Intersection', text: r`y_1=y_2\quad\text{or}\quad f(x)=g(x)` },
  p(r`Firstly you find the x-coordinates of the points by solving the new equation generated, then substitute the x values into one of the graphs to find the y values of the points.`),
  h2('Inequalities'),
  p(r`To find the values of $x$ for which $f(x)>0$ or $f(x)<0$, look for the part(s) of the graph where the function is **above** or **below** the x-axis.`),
  p(r`Example: a parabola cutting the x-axis at $x=-2$ and $x=3$.`),
  ul([
    r`$f(x)\ge0$ (on or above the x-axis): $x\le-2$ or $x\ge3$.`,
    r`$f(x)\le0$ (on or below the x-axis): $-2\le x\le3$.`,
  ]),
  fig(ineq('f(x) ≥ 0 where the curve is on/above the x-axis: x ≤ −2 or x ≥ 3')),
  fig(ineq('f(x) ≤ 0 where the curve is on/below the x-axis: −2 ≤ x ≤ 3')),
]);

export const ALG_MIXED_1_LESSONS: Lesson[] = [MIXED_CONCEPTS];
