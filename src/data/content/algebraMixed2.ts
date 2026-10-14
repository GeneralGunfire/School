import type { Figure, Lesson } from '../../lib/types';
import { r, h2, p, note, solution, fig, qs, lesson as make } from './algKit';

/**
 * Unit 6: Functions, E. Mixed functions: inequality f(x) > g(x), worked Question 1 (hyperbola and line).
 * Book pp. 147–148; photo 56.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-functions-mixed', id, title, minutes, blocks);

const exFig: Figure = {
  xRange: [-6, 9], yRange: [-20, 40], axes: true, grid: true,
  curves: [{ fn: (x: number) => -x * x + 8 * x + 20 }],
  lines: [{ m: 4, c: 8, color: 'amber' }],
  points: [{ id: 'A', x: -2, y: 0, label: 'A(-2; 0)' }, { id: 'B', x: 6, y: 32, label: 'B(6; 32)' }],
  caption: 'f(x) = −x² + 8x + 20 (curve) and g(x) = 4x + 8 (line)',
} as Figure;

const q1Fig: Figure = {
  xRange: [-1, 9], yRange: [-12, 12], axes: true, grid: true,
  curves: [{ fn: (x: number) => -6 / x, domain: [0.4, 9] }],
  lines: [{ m: 3, c: -9, color: 'amber' }],
  points: [
    { id: 'P', x: 1, y: -6, label: '(1; -6)' },
    { id: 'A', x: 2, y: -3, label: 'A(2; -3)' },
    { id: 'T', x: 3, y: 0, label: '(3; 0)' },
    { id: 'C', x: 6, y: 9, label: 'C(6; 9)' },
    { id: 'B', x: 6, y: -1, label: 'B(6; -1)' },
  ],
  caption: 'y = −6/x for x > 0 and the line y = 3x − 9',
} as Figure;

export const MIXED_EXAMPLES = lesson('alg-u6-e-mixed-examples', 'E. Mixed Functions: Worked Examples', 40, [
  h2('Inequalities with two functions'),
  p(r`To find the values of $x$ for which $f(x)>g(x)$ or $f(x)<g(x)$, look for the part(s) of the graph where function $f$ is **above** $g$ or function $f$ is **below** $g$.`),
  h2('Example: $f(x)=-x^2+8x+20$ and $g(x)=4x+8$'),
  solution([
    ['Intersection points: let $f(x)=g(x)$', r`-x^2+8x+20=4x+8\;\Rightarrow\;x^2-4x-12=0\;\Rightarrow\;(x-6)(x+2)=0`],
    ['The graphs cross at $x=-2$ and $x=6$. The parabola is above the line between them, so', r`f(x)\ge g(x)\;\Leftrightarrow\;-2\le x\le6`],
  ]),
  note(r`The book’s picture marks the intersection points at $x=-1$ and $x=4$, but for the printed equations they are at $x=-2$ and $x=6$ (check: $f(6)=g(6)=32$). The method is the same: the answer is the interval between the two intersection x-values.`),
  fig(exFig),

  h2('Question 1'),
  p(r`The figure shows the graphs of $y=\dfrac kx$ on $(0;\infty)$ and $y=mx+c$. The point $(1;-6)$ is on both graphs, the line cuts the x-axis at $(3;0)$, the hyperbola and the line meet again at $A$, $D$ lies on the x-axis with $OD=6$ units and $BDC$ is perpendicular to the x-axis. Accordingly find:`),
  qs([
    { n: '1.1', q: r`The values of $k$, $m$ and $c$.`, a: r`$(1;-6)$ is on $y=\dfrac kx$: $-6=\dfrac k1$, so $k=-6$. For the line use $(1;-6)$ and $(3;0)$: $m=\dfrac{0-(-6)}{3-1}=3$, so $y=3x+c$. Through $(3;0)$: $0=9+c$, so $c=-9$.` },
    { n: '1.2', q: r`The coordinates of $A$.`, a: r`$A$ is an intersection point, so equate: $3x-9=\dfrac{-6}x\Rightarrow3x^2-9x=-6\Rightarrow x^2-3x+2=0\Rightarrow(x-1)(x-2)=0$. $x=1$ is the given point $(1;-6)$, so $A$ has $x=2$: $y=\dfrac{-6}2=-3$. $A(2;\,-3)$.` },
    { n: '1.3', q: r`The distance $BC$ if $OD=6$ units and $BDC$ is perpendicular to the x-axis.`, a: r`$D(6;0)$. $BC$ is a vertical distance, $y_{top}-y_{bottom}$. $C$ is on the line: $y=3(6)-9=9$. $B$ is on the hyperbola: $y=\dfrac{-6}6=-1$. $BC=9-(-1)=10$ units.` },
    { n: '1.4', q: r`The equation of the new function that is formed when $y=\dfrac kx$ is shifted 1 unit to the left and 2 units upwards.`, a: r`$k=-6$. Left $1$: $x\to x+1$. Up $2$: add $2$. New equation: $y=\dfrac{-6}{x+1}+2$.` },
    { n: '1.5', q: r`The equation of the new function that is formed when $y=\dfrac kx$ is shifted vertically so that it passes through the point $(2;2)$.`, a: r`A vertical shift gives $y=\dfrac{-6}x+b$. Substitute $(2;2)$: $2=\dfrac{-6}2+b=-3+b$, so $b=5$. New equation: $y=\dfrac{-6}x+5$.` },
  ]),
  fig(q1Fig),
]);

export const ALG_MIXED_2_LESSONS: Lesson[] = [MIXED_EXAMPLES];
