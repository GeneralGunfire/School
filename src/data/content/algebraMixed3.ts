import type { Figure, Lesson } from '../../lib/types';
import { r, h2, note, fig, qs, lesson as make } from './algKit';

/**
 * Unit 6: Functions, E. Mixed functions: worked Questions 2–4. Book pp. 149–150; photo 57.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-functions-mixed', id, title, minutes, blocks);

const q2Fig: Figure = {
  xRange: [-6, 6], yRange: [-4, 12], axes: true, grid: true,
  curves: [{ fn: (x: number) => x * (x + 3) }],
  lines: [{ m: -0.5, c: 2, color: 'amber' }],
  points: [
    { id: 'A', x: -3, y: 0, label: '(-3; 0)' },
    { id: 'O', x: 0, y: 0, label: '(0; 0)' },
    { id: 'P', x: -1.5, y: -2.25, label: 'P(-3/2; -9/4)' },
  ],
  caption: 'f(x) = x(x + 3) and g(x) = −½x + 2',
} as Figure;

const q3Fig: Figure = {
  xRange: [-4, 4], yRange: [-10, 6], axes: true, grid: true,
  curves: [
    { fn: (x: number) => -2 * x * x, domain: [-2.2, 2.2] },
    { fn: (x: number) => -2 / x, domain: [-4, -0.35] },
    { fn: (x: number) => -2 / x, domain: [0.35, 4] },
  ],
  points: [{ id: 'M', x: 1, y: -2, label: 'M(1; -2)' }],
  caption: 'f(x) = −2x² and g(x) = −2/x',
} as Figure;

const q4Fig: Figure = {
  xRange: [-4, 5], yRange: [-6, 10], axes: true, grid: true,
  curves: [{ fn: (x: number) => -2 * (x - 1) * (x - 1) + 8 }],
  lines: [{ m: 1 / 3, c: -1, color: 'amber' }],
  points: [
    { id: 'P', x: 1, y: 8, label: 'P(1; 8)' },
    { id: 'A', x: -1, y: 0, label: 'A(-1; 0)' },
    { id: 'B', x: 3, y: 0, label: 'B(3; 0)' },
    { id: 'D', x: -7 / 6, y: -25 / 18, label: 'D(-7/6; -25/18)' },
    { id: 'G', x: 0, y: -1, label: '(0; -1)' },
  ],
  caption: 'f(x) = −2(x − 1)² + 8 and g(x) = ⅓x − 1',
} as Figure;

export const MIXED_EXAMPLES_2 = lesson('alg-u6-e-mixed-examples-2', 'E. Mixed Functions: Worked Questions 2–4', 45, [
  h2('Question 2'),
  note(r`In the printed solution the turning point is written with $y=\frac{27}{4}$ and the vertical distance $LM$ with a sign slip. Both are corrected below: $f(-\frac32)=\frac94-\frac92=-\frac94$, which matches the graph (the turning point lies below the x-axis).`),
  qs([
    { n: '2', context: r`The graphs of $f(x)=x(x+3)$ and $g(x)=-\dfrac12x+2$ are represented in the figure. $P$ is the turning point of $f$; $L$ is on the line and $M$ on the parabola with $LM$ perpendicular to the x-axis.`, q: r`2.1 Determine the values of $x$ for which $f(x)=0$.`, a: r`$x(x+3)=0$, so $x=0$ or $x=-3$.` },
    { n: '2.2', q: r`Calculate the coordinates of $P$, the turning point of $f$.`, a: r`First open the bracket: $f(x)=x^2+3x$. $x_P=\dfrac{-3}{2(1)}=-\dfrac32$. $y_P=\left(-\dfrac32\right)^2+3\left(-\dfrac32\right)=\dfrac94-\dfrac92=-\dfrac94$. $P\left(-\dfrac32;\,-\dfrac94\right)$.` },
    { n: '2.3', q: r`Determine the average gradient of the curve $f$ between $x=-5$ and $x=-3$.`, a: r`$f(-5)=(-5)(-2)=10$ and $f(-3)=0$. $m=\dfrac{f(-3)-f(-5)}{-3-(-5)}=\dfrac{0-10}{2}=-5$.` },
    { n: '2.4', q: r`Determine the values of $x$ for which $f(x)>0$.`, a: r`Where the parabola is above the x-axis: $x<-3$ or $x>0$.` },
    { n: '2.5', q: r`Give the coordinates of the turning point of $f(x-2)$.`, a: r`$f(x-2)$ shifts $f$ 2 units to the right: $P'\left(-\dfrac32+2;\,-\dfrac94\right)=\left(\dfrac12;\,-\dfrac94\right)$.` },
    { n: '2.6', q: r`Show that the expression for $LM$ can be written as $LM=-\dfrac12x+2-x^2-3x$.`, a: r`$LM$ is a vertical distance with $L$ on the line (top) and $M$ on the parabola (bottom): $LM=y_{top}-y_{bottom}=g(x)-f(x)=-\dfrac12x+2-(x^2+3x)=-\dfrac12x+2-x^2-3x$ ✔. Simplified: $LM=-x^2-\dfrac72x+2$.` },
  ]),
  fig(q2Fig),

  h2('Question 3'),
  qs([
    { n: '3', context: r`The diagram shows the graphs of $f(x)=ax^2$ and $g(x)=\dfrac{-2}{x}$. The point $M(1;-2)$ is the point of intersection of $f$ and $g$.`, q: r`Determine the value of $a$.`, a: r`The graph of $f(x)=ax^2$ is the parabola with the point $(1;-2)$ on it: $-2=a(1)^2$, so $a=-2$.` },
  ]),
  fig(q3Fig),

  h2('Question 4'),
  qs([
    { n: '4', context: r`Sketch of the parabola $f(x)=-2(x-1)^2+8$ and the straight line $g$. $P$ is the turning point of $f$; $g$ cuts the y-axis at $(0;-1)$. $f$ and $g$ intersect at $B$ and $D$; $A$ and $B$ are the x-intercepts of $f$.`, q: r`4.1 Find the coordinates of $P$.`, a: r`The function is in turning-point form: $P(1;\,8)$.` },
    { n: '4.2', q: r`Find the length of $OB$.`, a: r`$B$ is an x-intercept: $-2(x-1)^2+8=0\Rightarrow(x-1)^2=4\Rightarrow x-1=\pm2$, so $x=3$ or $x=-1$. $B$ is on the right, $B(3;0)$, so $OB=3$ units. (Then $A(-1;0)$.)` },
    { n: '4.3', q: r`Show that the equation of $g$ is $g(x)=\dfrac13x-1$.`, a: r`$g$ passes through $(0;-1)$ and $B(3;0)$: $m=\dfrac{0-(-1)}{3-0}=\dfrac13$ and the y-intercept is $-1$, so $g(x)=\dfrac13x-1$ ✔.` },
    { n: '4.4', q: r`Calculate the coordinates of $D$.`, a: r`Equate: $-2(x-1)^2+8=\dfrac13x-1\Rightarrow-2x^2+4x+6=\dfrac13x-1\Rightarrow6x^2-11x-21=0$. $\Delta=121+504=625$, $x=\dfrac{11\pm25}{12}$, so $x=3$ (point $B$) or $x=-\dfrac76$. $y=\dfrac13\left(-\dfrac76\right)-1=-\dfrac{25}{18}$. $D\left(-\dfrac76;\,-\dfrac{25}{18}\right)$.` },
    { n: '4.5', q: r`If $h(x)=f(-x)$, explain how the graph of $h$ can be obtained from the graph of $f$.`, a: r`$f(-x)$ is the reflection of the graph of $f$ in the y-axis.` },
    { n: '4.6', q: r`Write down the equation of $h$.`, a: r`$h(x)=f(-x)=-2(-x-1)^2+8=-2(x+1)^2+8$.` },
    { n: '4.7', q: r`For which values of $x$ is $f(x)>0$?`, a: r`Between the x-intercepts: $-1<x<3$.` },
    { n: '4.8', q: r`For which values of $x$ is $f(x)>g(x)$?`, a: r`Where the parabola is above the line, between the intersection points $D$ and $B$: $-\dfrac76<x<3$.` },
  ]),
  fig(q4Fig),
]);

export const ALG_MIXED_3_LESSONS: Lesson[] = [MIXED_EXAMPLES_2];
