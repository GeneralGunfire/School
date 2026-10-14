import type { Figure, Lesson } from '../../lib/types';
import { r, note, fig, qs, lesson as make } from './algKit';

/**
 * Unit 6: Functions, E. Mixed functions: worked Questions 6 and 7. Book pp. 158–159; photo 59.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-functions-mixed', id, title, minutes, blocks);

const q6Fig: Figure = {
  xRange: [-4, 4], yRange: [-6, 8], axes: true, grid: true,
  curves: [
    { fn: (x: number) => Math.pow(2, x) },
    { fn: (x: number) => 2 / x, domain: [-4, -0.3] },
    { fn: (x: number) => 2 / x, domain: [0.3, 4] },
    { fn: (x: number) => 2 * x, color: 'amber' },
  ],
  points: [
    { id: 'A', x: 1, y: 2, label: 'A(1; 2)' },
    { id: 'Y', x: 0, y: 1, label: '(0; 1)' },
    { id: 'O', x: 0, y: 0, label: 'O' },
  ],
  caption: 'f(x) = 2ˣ, g(x) = 2/x and h(x) = 2x (straight line)',
} as Figure;

const q7Fig: Figure = {
  xRange: [-3, 4], yRange: [-2, 12], axes: true, grid: true,
  curves: [
    { fn: (x: number) => Math.pow(4, x) },
    { fn: (x: number) => 4 / x, domain: [0.3, 4] },
  ],
  points: [{ id: 'P', x: 1, y: 4, label: 'P(1; 4)' }, { id: 'Y', x: 0, y: 1, label: '(0; 1)' }],
  caption: 'f(x) = 4ˣ and g(x) = 4/x',
} as Figure;

export const MIXED_EXAMPLES_4 = lesson('alg-u6-e-mixed-examples-4', 'E. Mixed Functions: Worked Questions 6 and 7', 30, [
  qs([
    { n: '6', context: r`Given: $f(x)=2^x$, $g(x)=\dfrac2x$ and $h(x)=2x$.`, q: r`Sketch the above graphs on the same set of axes, showing all intercepts with the axes and other significant points.`, a: r`$f(x)=2^x$ is an increasing exponential function with y-intercept $(0;1)$ and horizontal asymptote $y=0$. $g(x)=\dfrac2x$ is the basic hyperbola with $a=2>0$ (1st and 3rd quadrants, asymptotes the axes). $h(x)=2x$ is a straight line through the origin with positive gradient. The intersection point: $2^x=2x=\dfrac2x$ at $A(1;\,2)$ (check: $2^1=2$, $2(1)=2$, $\dfrac21=2$).` },
  ]),
  fig(q6Fig),
  qs([
    { n: '7', context: r`The diagram shows the graphs of $f(x)=4^x$ and $g(x)=\dfrac ax$. The point $P(1;4)$ is the intersection of $f$ and $g$.`, q: r`7.1 Determine the equation of $h(x)$, the resultant function when $f(x)$ is reflected about the y-axis ($x=0$).`, a: r`Reflection about the y-axis: $f(-x)$. $h(x)=f(-x)=4^{-x}$.` },
    { n: '7.2', q: r`Determine the value of $a$ in $g(x)$.`, a: r`$P(1;4)$ is on $g(x)$: $4=\dfrac a1$, so $a=4$.` },
    { n: '7.3', q: r`Determine the equation of $m(x)$, the resultant function when $g(x)$ is shifted horizontally 2 units to the right and vertically 1 unit down.`, a: r`$2$ units right: $x\to x-2$. $1$ unit down: subtract $1$. $g(x)=\dfrac4x$, so $m(x)=\dfrac4{x-2}-1$.` },
    { n: '7.4', q: r`For which values of $x$ is $g(x)\ge f(x)$?`, a: r`$g$ is above $f$ from $x=0$ to point $P$: $0<x<1$ (and they are equal at $x=1$, so with “$\ge$” the answer is $0<x\le1$; $x=0$ is excluded because $g$ is undefined there).` },
    { n: '7.5', q: r`Calculate the coordinates of the intercepts of $m(x)$ with the axes.`, a: r`x-intercept: $0=\dfrac4{x-2}-1\Rightarrow1=\dfrac4{x-2}\Rightarrow x-2=4\Rightarrow x=6$, so $(6;0)$. y-intercept: $m(0)=\dfrac4{0-2}-1=-3$, so $(0;-3)$.` },
  ]),
  fig(q7Fig),
  note(r`In the book’s working for 7.5 the first line reads “$0=\frac4{x-4}$”; it should be $0=\frac4{x-2}-1$, which leads to $x=6$ as printed.`),
]);

export const ALG_MIXED_5_LESSONS: Lesson[] = [MIXED_EXAMPLES_4];
