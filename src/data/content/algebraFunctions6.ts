import type { Figure, Lesson } from '../../lib/types';
import { r, h2, note, fig, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 6: Functions, B. Elements of a parabola: Task 4 and Task 5. Book pp. 123–124; photo 46.
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

export const PARABOLA_TASK_4 = lesson('alg-u6-task-4', 'B. Elements of a Parabola: Task 4', 30, [
  ALG_ANSWERS_NOTE,
  h2('Task 4, Question 1: Given $f(x)=-2x^2+8x-3$'),
  qs([
    { n: '1.1', q: r`Find the axis of symmetry of $f(x)$.`, a: r`$x=\dfrac{-8}{2(-2)}=2$. Axis of symmetry: $x=2$.` },
    { n: '1.2', q: r`Find the average gradient of $f(x)$ between $x=-1$ and $x=3$.`, a: r`$f(-1)=-2-8-3=-13$ and $f(3)=-18+24-3=3$. $m=\dfrac{3-(-13)}{3-(-1)}=\dfrac{16}{4}=4$.` },
    { n: '1.3', q: r`$g(x)$ is obtained by shifting $f(x)$ by 3 units to the left. Write down the equation of $g(x)$.`, a: r`$g(x)=f(x+3)=-2(x+3)^2+8(x+3)-3=-2x^2-12x-18+8x+24-3=-2x^2-4x+3$.` },
    { n: '1.4', q: r`$h(x)$ is obtained by shifting $f(x)$ by 4 units upwards. Write down the equation of $h(x)$.`, a: r`$h(x)=f(x)+4=-2x^2+8x+1$.` },
    { n: '1.5', q: r`$k(x)$ is obtained by reflecting $f(x)$ in the x-axis. Write down the equation of $k(x)$.`, a: r`$k(x)=-f(x)=2x^2-8x+3$.` },
    { n: '1.6', q: r`Find the domain and range of $f(x)$.`, a: r`Domain: $x\in\mathbb{R}$. $f(2)=-8+16-3=5$ and $a<0$ (maximum), so the range is $y\le5$.` },
    { n: '1.7', q: r`Find the maximum value of $f(x)$.`, a: r`The maximum is the y-coordinate of the TP: $5$.` },
    { n: '1.8', q: r`If $f(x)$ is shifted by 3 units down and 2 units to the left, find the coordinates of the new turning point.`, a: r`The original TP is $(2;5)$. Left $2$: $x=0$. Down $3$: $y=2$. New TP: $(0;\,2)$.` },
  ]),
  h2('Task 4, Question 2: Given $f(x)=(x-1)^2-3$'),
  qs([
    { n: '2.1', q: r`Find the axis of symmetry of $f(x)$.`, a: r`$x=1$ (the x-coordinate of the TP $(1;-3)$).` },
    { n: '2.2', q: r`Find the average gradient of $f(x)$ between $x=-2$ and $x=0$.`, a: r`$f(-2)=9-3=6$ and $f(0)=1-3=-2$. $m=\dfrac{-2-6}{0-(-2)}=-4$.` },
    { n: '2.3', q: r`$g(x)$ is obtained by shifting $f(x)$ by 4 units to the right (the end of the line is cut off in the photo). Write down the equation of $g(x)$.`, a: r`$g(x)=f(x-4)=(x-5)^2-3$.` },
    { n: '2.4', q: r`$h(x)$ is obtained by shifting $f(x)$ by 2 units downwards. Write down the equation of $h(x)$.`, a: r`$h(x)=f(x)-2=(x-1)^2-5$.` },
    { n: '2.5', q: r`$k(x)$ is obtained by reflecting $f(x)$ in the x-axis. Write down the equation of $k(x)$.`, a: r`$k(x)=-f(x)=-(x-1)^2+3$.` },
    { n: '2.6', q: r`Find the domain and range of $f(x)$.`, a: r`Domain: $x\in\mathbb{R}$. $a>0$ with TP $(1;-3)$, so the range is $y\ge-3$.` },
    { n: '2.7', q: r`Find the minimum value of $f(x)$.`, a: r`$-3$.` },
    { n: '2.8', q: r`If $f(x)$ is shifted by 1 unit to the right and 3 units upwards, find the coordinates of the new turning point.`, a: r`$(1;-3)\to(1+1;\,-3+3)=(2;\,0)$.` },
  ]),
]);

export const PARABOLA_TASK_5 = lesson('alg-u6-task-5', 'B. Elements of a Parabola: Task 5', 30, [
  ALG_ANSWERS_NOTE,
  h2('Question 1'),
  qs([
    { n: '1', context: r`The graph shows $g(x)=-4x^2-8x+5$. $C$ is the turning point and $D$ is the y-intercept. $A$ and $B$ are the x-intercepts and $E$ lies on the parabola with $ED\parallel AB$.`, q: r`Determine the length of $AB$.`, a: r`Let $g(x)=0$: $4x^2+8x-5=0\Rightarrow(2x-1)(2x+5)=0$, so $x=\dfrac12$ or $x=-\dfrac52$. $AB=\dfrac12-\left(-\dfrac52\right)=3$ units.` },
    { n: '1.2', q: r`Determine the coordinates of $C$, $D$ and $E$ ($ED\parallel AB$).`, a: r`$C$: $x=\dfrac{8}{2(-4)}=-1$, $y=-4+8+5=9$, so $C(-1;\,9)$. $D$ is the y-intercept: $D(0;\,5)$. $E$ has the same y-value as $D$: $-4x^2-8x+5=5\Rightarrow-4x(x+2)=0$, so $x=0$ (point $D$) or $x=-2$: $E(-2;\,5)$.` },
  ]),
  fig(par((x) => -4 * x * x - 8 * x + 5, [-4, 2], [-8, 11], [[-1, 9, 'C(-1; 9)'], [0, 5, 'D(0; 5)'], [-2, 5, 'E(-2; 5)'], [-2.5, 0, 'A'], [0.5, 0, 'B']], 'g(x) = −4x² − 8x + 5')),
  h2('Question 2'),
  qs([
    { n: '2', context: r`Given $f(x)=ax^2+c$ and its graph, which cuts the y-axis at $18$ and the x-axis at $(-3;0)$.`, q: r`Find the values of $a$ and $c$.`, a: r`The y-intercept gives $c=18$. Substitute $(-3;0)$: $0=a(-3)^2+18\Rightarrow9a=-18\Rightarrow a=-2$. So $f(x)=-2x^2+18$.` },
  ]),
  h2('Question 3: the graph of $y=(x+2)^2+5$'),
  note(r`In the figure $A$ is the turning point, $B$ and $C$ are on the y-axis ($B$ level with $A$, $C$ the y-intercept), $D$ and $G$ are points on the parabola on the same horizontal lines as $B$... and $C$... ; the working below uses only what the questions ask.`),
  qs([
    { n: '3.1', q: r`Calculate the length of $AB$ if $A$ is the turning point.`, a: r`$A(-2;5)$ and $B$ is on the y-axis at the same height: $B(0;5)$. $AB=2$ units.` },
    { n: '3.2', q: r`Calculate the coordinates of $C$.`, a: r`$C$ is the y-intercept: $y=(0+2)^2+5=9$, so $C(0;\,9)$.` },
    { n: '3.3', q: r`$G$ is the point $(x;30)$. Calculate the value of $x$.`, a: r`$(x+2)^2+5=30\Rightarrow(x+2)^2=25\Rightarrow x+2=\pm5$, so $x=3$ or $x=-7$. $G$ lies to the right of the y-axis, so $x=3$ (the point on the left branch, $H$, has $x=-7$).` },
    { n: '3.4', q: r`Determine the average gradient between points $A$ and $C$.`, a: r`$A(-2;5)$, $C(0;9)$: $m=\dfrac{9-5}{0-(-2)}=2$.` },
    { n: '3.5', q: r`What is the minimum value of the expression $(x+2)^2+5$?`, a: r`$(x+2)^2\ge0$, so the minimum is $5$ (when $x=-2$).` },
  ]),
  fig(par((x) => (x + 2) * (x + 2) + 5, [-9, 6], [-2, 33], [[-2, 5, 'A(-2; 5)'], [0, 5, 'B(0; 5)'], [0, 9, 'C(0; 9)'], [3, 30, 'G(3; 30)'], [-7, 30, 'H(-7; 30)']], 'y = (x + 2)² + 5')),
]);

export const ALG_FUNCTIONS_6_LESSONS: Lesson[] = [PARABOLA_TASK_4, PARABOLA_TASK_5];
