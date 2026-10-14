import type { Figure, Lesson } from '../../lib/types';
import { r, h2, h3, p, ul, note, fig, lesson as make } from './algKit';

/**
 * Unit 6: Functions, D. Exponential function: the four types and how to sketch. Book pp. 139–140; photo 52.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-functions-exponential', id, title, minutes, blocks);

/** y = b·a^(x−p) + q with asymptote y = q. */
export const expo = (
  b: number, a: number, pp: number, q: number,
  xRange: [number, number], yRange: [number, number],
  pts: [number, number, string][], caption: string,
): Figure => ({
  xRange, yRange, axes: true, grid: true,
  curves: [{ fn: (x: number) => b * Math.pow(a, x - pp) + q }],
  lines: [{ m: 0, c: q, dashed: true, color: 'amber' }],
  points: pts.map(([x, y, label], i) => ({ id: `P${i}`, x, y, label })),
  caption,
} as Figure);

const table = (rows: string) =>
  p(r`$\begin{array}{c|ccccc}x&-2&-1&0&1&2\\\hline y&${rows}\end{array}$`);

export const EXPONENTIAL_TYPES = lesson('alg-u6-d-exponential', 'D. Exponential Function: The Four Types', 40, [
  h2('The basic exponential function'),
  p(r`The basic exponential function has the standard form $y=a^x$ or $y=-a^x$, where $a>0$. To draw the graph of an exponential function it is very useful to use point-to-point plotting (the table method). Let us look at four different types.`),

  h3('Example 1: $y=3^x$ ($a>1$ and $y>0$), Type 1'),
  ul([
    r`**Domain:** $x\in\mathbb{R}$. **Range:** $y>0$.`,
    r`**Horizontal asymptote:** $y=0$. **Vertical asymptote:** does not exist.`,
    r`**x-intercept:** none. **y-intercept:** $(0;1)$.`,
    r`This type is an increasing function (it goes up when looked at from left to right), above the x-axis.`,
    r`We notice that when $x$ is increasing, the increase in the $y$ value is very rapid. Also the result cannot be zero or a negative number.`,
    r`The bigger the $a$ value, the steeper the graph is. The smaller the $a$ value, the wider the graph is.`,
  ]),
  table(r`\frac19&\frac13&1&3&9`),
  fig(expo(1, 3, 0, 0, [-4, 4], [-2, 10], [[0, 1, '(0; 1)'], [1, 3, '(1; 3)'], [2, 9, '(2; 9)']], 'Type 1: y = 3ˣ')),
  note(r`The book prints the domain as “$x\in R$ but $x\ne0$”; an exponential function is defined for every real $x$, including $0$ (that is where $y=1$). The domain is $x\in\mathbb{R}$.`),

  h3('Example 2: $y=\\left(\\dfrac13\\right)^x$ ($0<a<1$ and $y>0$), Type 2'),
  p(r`$y=\left(\dfrac13\right)^x$ can be expressed as $y=3^{-x}$ as well.`),
  ul([
    r`**Domain:** $x\in\mathbb{R}$. **Range:** $y>0$.`,
    r`**Horizontal asymptote:** $y=0$. **Vertical asymptote:** does not exist.`,
    r`**x-intercept:** none. **y-intercept:** $(0;1)$.`,
    r`This type is a decreasing function (it goes down when looked at from left to right), above the x-axis.`,
  ]),
  table(r`9&3&1&\frac13&\frac19`),
  fig(expo(1, 1 / 3, 0, 0, [-4, 4], [-2, 10], [[0, 1, '(0; 1)'], [-1, 3, '(-1; 3)'], [-2, 9, '(-2; 9)']], 'Type 2: y = (1/3)ˣ')),

  h3('Example 3: $y=-3^x$ ($a>1$ and $y<0$), Type 3'),
  ul([
    r`**Domain:** $x\in\mathbb{R}$. **Range:** $y<0$.`,
    r`**Horizontal asymptote:** $y=0$ (the x-axis). **Vertical asymptote:** does not exist.`,
    r`**x-intercept:** none. **y-intercept:** $(0;-1)$.`,
    r`We notice that when $x$ is increasing, the decrease in the $y$ value is very rapid. The result cannot be zero or a positive number.`,
  ]),
  table(r`-\frac19&-\frac13&-1&-3&-9`),
  note(r`The book’s table lists $x=-2$ twice; the second row is $x=-1$ with $y=-0{,}33$.`),
  fig(expo(-1, 3, 0, 0, [-4, 4], [-10, 2], [[0, -1, '(0; -1)'], [1, -3, '(1; -3)'], [2, -9, '(2; -9)']], 'Type 3: y = −3ˣ')),

  h3('Example 4: $y=-\\left(\\dfrac13\\right)^x$ ($0<a<1$ and $y<0$), Type 4'),
  ul([
    r`**Domain:** $x\in\mathbb{R}$. **Range:** $y<0$.`,
    r`**Horizontal asymptote:** $y=0$ (the x-axis). **Vertical asymptote:** does not exist.`,
    r`**x-intercept:** none. **y-intercept:** $(0;-1)$.`,
    r`The increase in the $y$ value is very rapid (as $x$ decreases).`,
  ]),
  table(r`-9&-3&-1&-\frac13&-\frac19`),
  note(r`The book prints the y-intercept of Example 4 as $(0;1)$, but its table and graph show $(0;-1)$, which is correct: $y=-\left(\frac13\right)^0=-1$.`),
  fig(expo(-1, 1 / 3, 0, 0, [-4, 4], [-10, 2], [[0, -1, '(0; -1)'], [-1, -3, '(-1; -3)'], [-2, -9, '(-2; -9)']], 'Type 4: y = −(1/3)ˣ')),

  h2('Sketching $y=b\\cdot a^{x-p}+q$'),
  ul([
    r`**Asymptotes:** only $y=q$.`,
    r`**y-intercept:** make $x=0$.`,
    r`**x-intercept:** make $y=0$.`,
    r`**The shape:** if $a>1$ the function is increasing when $b>0$ and decreasing when $b<0$. If $0<a<1$ it is increasing when $b<0$ and decreasing when $b>0$.`,
  ]),
  h3('Steps to draw in general'),
  ul([
    r`1. Draw the horizontal asymptote.`,
    r`2. Find and plot the y-intercept.`,
    r`3. Find and plot the x-intercept (if possible).`,
    r`4. Find and plot any other point on the graph to decide the type (shape).`,
  ]),
]);

export const ALG_EXPONENTIAL_1_LESSONS: Lesson[] = [EXPONENTIAL_TYPES];
