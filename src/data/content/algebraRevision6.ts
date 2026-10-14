import type { Figure, Lesson } from '../../lib/types';
import { r, h2, note, fig, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';
import { expo } from './algebraExponential1';

/**
 * Revision and Exemplars: Revision 11 and Revision 12 (exponential functions). Book pp. 228-230; photo 91.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-algebra-revision', id, title, minutes, blocks);

const three: Figure = {
  xRange: [-4, 4], yRange: [-5, 9], axes: true, grid: true,
  curves: [
    { fn: (x: number) => Math.pow(3, x) - 1 },
    { fn: (x: number) => -Math.pow(3, x) + 1, color: 'alt' },
    { fn: (x: number) => Math.pow(3, 1 - x), color: 'green' },
  ],
  lines: [{ m: 0, c: -1, dashed: true, color: 'amber' }, { m: 0, c: 1, dashed: true, color: 'amber' }],
  points: [{ id: 'O', x: 0, y: 0, label: '(0; 0)' }, { id: 'H', x: 0, y: 3, label: '(0; 3)' }],
  caption: 'f(x) = 3ˣ − 1, g(x) = −3ˣ + 1, h(x) = 3¹⁻ˣ',
} as Figure;

const halves: Figure = {
  xRange: [-4, 4], yRange: [-4, 9], axes: true, grid: true,
  curves: [
    { fn: (x: number) => Math.pow(0.5, x) },
    { fn: (x: number) => Math.pow(0.5, x) + 1, color: 'alt' },
    { fn: (x: number) => -Math.pow(0.5, x), color: 'green' },
  ],
  lines: [{ m: 0, c: 1, dashed: true, color: 'amber' }],
  points: [{ id: 'A', x: 0, y: 1, label: '(0; 1)' }, { id: 'B', x: 0, y: 2, label: '(0; 2)' }, { id: 'C', x: 0, y: -1, label: '(0; -1)' }],
  caption: 'f(x) = (½)ˣ, g(x) = (½)ˣ + 1, h(x) = −(½)ˣ',
} as Figure;

const fiveSq: Figure = {
  xRange: [-3, 3], yRange: [-2, 12], axes: true, grid: true,
  curves: [{ fn: (x: number) => Math.pow(5, x) }, { fn: (x: number) => x * x, color: 'alt' }],
  points: [{ id: 'A', x: 0, y: 1, label: '(0; 1)' }, { id: 'O', x: 0, y: 0, label: '(0; 0)' }],
  caption: 'g(x) = 5ˣ and f(x) = x²',
} as Figure;

export const REVISION_11 = lesson('alg-rev-11', 'Revision 11: Exponential Functions [19]', 40, [
  ALG_ANSWERS_NOTE,
  h2('Question 1 [10]: $f(x)=3^x-1$, $g(x)=-3^x+1$, $h(x)=3^{1-x}$'),
  qs([
    { n: '1.1', marks: 6, q: r`Draw all the graphs (show the asymptotes and the intercepts if possible).`, a: r`$f$: asymptote $y=-1$; y-intercept $f(0)=0$, so $(0;0)$, which is also the x-intercept; increasing. $g$: asymptote $y=1$; $g(0)=0$, so $(0;0)$ again; decreasing. $h(x)=3^{1-x}=\left(\tfrac13\right)^{x-1}$: asymptote $y=0$; y-intercept $h(0)=3$, so $(0;3)$; no x-intercept; decreasing. See the graph below.` },
    { n: '1.2', marks: 1, q: r`Write the relation between $f(x)$ and $g(x)$.`, a: r`$g(x)=-3^x+1=-(3^x-1)=-f(x)$: $g$ is the reflection of $f$ in the x-axis.` },
    { n: '1.3', marks: 3, q: r`$t(x)$ is the reflection of $f(x)$ in $x=0$; $b(x)$ is the reflection of $h(x)$ in $y=0$. Write the equations of $t(x)$ and $b(x)$.`, a: r`Reflection in $x=0$ (the y-axis): $t(x)=f(-x)=3^{-x}-1$. Reflection in $y=0$ (the x-axis): $b(x)=-h(x)=-3^{1-x}$.` },
  ]),
  fig(three),
  h2('Question 2 [9]'),
  qs([
    { n: '2.1', marks: 3, q: r`Draw a neat sketch graph of $f(x)=\left(\tfrac12\right)^x$. Clearly indicate all intercepts with the axes.`, a: r`Decreasing curve, asymptote $y=0$, y-intercept $(0;1)$, no x-intercept; through $(-1;2)$ and $(1;\tfrac12)$.` },
    { n: '2.2', marks: 2, q: r`Draw $g(x)=\left(\tfrac12\right)^x+1$ and $h(x)=-\left(\tfrac12\right)^x$ on the same system of axes.`, a: r`$g$: asymptote $y=1$, y-intercept $(0;2)$. $h$: asymptote $y=0$, y-intercept $(0;-1)$, below the x-axis.` },
    { n: '2.3', marks: 2, q: r`Describe the transformation from $f$ to $g$.`, a: r`$g(x)=f(x)+1$: a shift of $1$ unit upwards.` },
    { n: '2.4', marks: 2, q: r`Describe the transformation from $f$ to $h$.`, a: r`$h(x)=-f(x)$: a reflection in the x-axis.` },
  ]),
  fig(halves),
  note(r`Total: 19.`),
]);

export const REVISION_12 = lesson('alg-rev-12', 'Revision 12: Exponential Functions [20]', 35, [
  ALG_ANSWERS_NOTE,
  h2('Question 1 [9]: $h(x)=5^x$'),
  qs([
    { n: '1.1', marks: 2, q: r`Draw a rough sketch of $h(x)$.`, a: r`Increasing curve with asymptote $y=0$ and y-intercept $(0;1)$, through $(1;5)$.` },
    { n: '1.2', marks: 2, q: r`What is the equation of the reflection of $h(x)$ in the y-axis?`, a: r`$y=5^{-x}$.` },
    { n: '1.3', marks: 2, q: r`What is the equation of the reflection of $h(x)$ in the x-axis?`, a: r`$y=-5^x$.` },
    { n: '1.4', marks: 3, q: r`Describe the transformations of $h(x)$ which will result in the graph of $p(x)=5^{-x+1}+3$.`, a: r`$p(x)=5^{-(x-1)}+3$: reflect in the y-axis, shift $1$ unit to the right and $3$ units up.` },
  ]),
  h2('Question 2 [11]: $g(x)=5^x$ and $f(x)=x^2$'),
  qs([
    { n: '2.1', marks: 6, q: r`Draw both functions on the same set of axes.`, a: r`$g$: asymptote $y=0$, through $(0;1)$ and $(1;5)$. $f$: parabola with turning point $(0;0)$, through $(\pm1;1)$ and $(\pm2;4)$.` },
    { n: '2.2', marks: 1, q: r`Write down the axis of symmetry of $f$.`, a: r`$x=0$.` },
    { n: '2.3', marks: 1, q: r`What is the range of $f$?`, a: r`$y\ge0$.` },
    { n: '2.4', marks: 1, q: r`What is the range of $g$?`, a: r`$y>0$.` },
    { n: '2.5', marks: 2, q: r`Use the graphs to determine the value of $f(0)-g(0)$.`, a: r`$f(0)=0$ and $g(0)=1$, so $0-1=-1$.` },
  ]),
  fig(fiveSq),
  fig(expo(1, 5, 0, 0, [-3, 3], [-2, 30], [[0, 1, '(0; 1)']], 'h(x) = 5ˣ')),
  note(r`Total: 20.`),
]);

export const ALG_REVISION_6_LESSONS: Lesson[] = [REVISION_11, REVISION_12];
