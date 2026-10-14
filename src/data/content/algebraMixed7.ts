import type { Figure, Lesson } from '../../lib/types';
import { r, h2, note, fig, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';
import { hyper } from './algebraFunctions7';

/**
 * Unit 6: Functions, E. Mixed functions: Task 13 and Task 14. Book pp. 162–163; photo 61.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-functions-mixed', id, title, minutes, blocks);

const t13Fig: Figure = {
  xRange: [-12, 4], yRange: [-6, 12], axes: true, grid: true,
  curves: [
    { fn: (x: number) => 4 / (x + 2) + 3, domain: [-12, -2.15] },
    { fn: (x: number) => 4 / (x + 2) + 3, domain: [-1.85, 4] },
    { fn: (x: number) => x / 2 + 5, color: 'amber' },
  ],
  points: [
    { id: 'A', x: 0, y: 5, label: 'A(0; 5)' },
    { id: 'B', x: -10, y: 0, label: 'B(-10; 0)' },
    { id: 'C', x: -6, y: 2, label: 'C(-6; 2)' },
    { id: 'D', x: -10 / 3, y: 0, label: 'D(-10/3; 0)' },
  ],
  caption: 'f(x) = 4/(x + 2) + 3 and g(x) = ½x + 5',
} as Figure;

const t14Fig: Figure = {
  xRange: [-6, 6], yRange: [-5, 9], axes: true, grid: true,
  curves: [{ fn: (x: number) => -x + 3, color: 'amber' }],
  points: [{ id: 'P', x: 1, y: 2, label: '(1; 2)' }, { id: 'Q', x: -3, y: 6, label: '(-3; 6)' }, { id: 'R', x: -1, y: 0, label: '(-1; 0)' }, { id: 'S', x: 0, y: 1.5, label: '(0; 3/2)' }, { id: 'T', x: 3, y: 0, label: '(3; 0)' }, { id: 'U', x: 0, y: 3, label: '(0; 3)' }],
  caption: 'f(x) = −3/(x + 2) + 3 and g(x) = −x + 3',
} as Figure;

export const MIXED_TASK_13_14 = lesson('alg-u6-task-13-14', 'E. Mixed Functions: Tasks 13 and 14', 45, [
  ALG_ANSWERS_NOTE,
  note(r`Points are read from the sketches. Where a label or part of a question is cut off or unreadable in the photo, it is left out and said so.`),

  h2('Task 13, Question 1: $f(x)=\dfrac4{x+2}+3$ and $g(x)=\dfrac12x+5$'),
  qs([
    { n: '1.1', context: r`$A$ is where the two graphs meet on the y-axis and $B$ is the x-intercept of $g$.`, q: r`Determine the coordinates of $A$ and $B$.`, a: r`Equate: $\dfrac4{x+2}+3=\dfrac x2+5\Rightarrow\dfrac4{x+2}=\dfrac{x+4}2\Rightarrow8=(x+2)(x+4)\Rightarrow x^2+6x=0$, so $x=0$ or $x=-6$. At $x=0$: $g(0)=5$, so $A(0;\,5)$. $B$: $\dfrac12x+5=0\Rightarrow x=-10$, so $B(-10;\,0)$.` },
    { n: '1.2', context: r`$C$ is the second intersection point and $D$ is the x-intercept of $f$.`, q: r`Find the coordinates of $C$ and $D$.`, a: r`From 1.1 the other intersection has $x=-6$: $g(-6)=2$, so $C(-6;\,2)$. $D$: $\dfrac4{x+2}+3=0\Rightarrow\dfrac4{x+2}=-3\Rightarrow x+2=-\dfrac43\Rightarrow x=-\dfrac{10}3$, so $D\left(-\dfrac{10}3;\,0\right)$.` },
    { n: '1.4', q: r`If $x<0$, for which values of $x$ is $f(x)\le g(x)$?`, a: r`$g(x)-f(x)=\dfrac x2+2-\dfrac4{x+2}=\dfrac{x(x+6)}{2(x+2)}\ge0$. For $x<0$ this needs $\dfrac{x+6}{x+2}\le0$, so $-6\le x<-2$ ($x=-2$ is the asymptote). Check $x=-4$: $f=1\le g=3$ ✔.` },
  ]),
  fig(t13Fig),
  note(r`Question 1.3 (“Is $g$ an increasing or decreasing function? Motivate”) is crossed out in the book (“not given in September test”).`),

  h2('Task 13, Question 2: $f(x)=x^2-3x-4$ and a hyperbola $g$'),
  qs([
    { n: '2', context: r`Sketched are the graphs of $f(x)=x^2-3x-4$ and a hyperbola $g$ (its equation is cut off in the photo). $A$ and $B$ are the x-intercepts of $f$, $C$ is its y-intercept and $D$ is the turning point of the parabola.`, q: r`2.1 Find $A$, $B$, $C$ and $D$.`, a: r`x-intercepts: $x^2-3x-4=0\Rightarrow(x-4)(x+1)=0$, so $A(-1;0)$ and $B(4;0)$. y-intercept: $C(0;-4)$. Turning point: $x=\dfrac32$, $y=\dfrac94-\dfrac92-4=-\dfrac{25}4$, so $D\left(\dfrac32;\,-\dfrac{25}4\right)$.` },
    { n: '2.3.1', q: r`Write down the equation of the axis of symmetry of the parabola.`, a: r`$x=\dfrac32$.` },
    { n: '2.3.2', q: r`Write down the equation of the reflection of $y=\dfrac{-3}x$ in the y-axis.`, a: r`Change $x$ to $-x$: $y=\dfrac{-3}{-x}=\dfrac3x$.` },
  ]),
  note(r`The wording of 2.1 (the y-coordinates of $E$ and $F$ when their x-coordinates are $1$ and $3$), 2.2 and 2.4 is cut off by the page edge in the photo, so those parts are not included. For the parabola: $f(1)=-6$ and $f(3)=-4$.`),

  h2('Task 14, Question 1: $f(x)=\dfrac{-3}{x+2}+3$ and $g(x)=-x+3$'),
  qs([
    { n: '1.1', q: r`Draw neat sketch graphs of the functions, showing all intercepts with the axes and any asymptotes.`, a: r`$f$: asymptotes $x=-2$ and $y=3$; $a=-3<0$ (2nd and 4th quadrants of the asymptotes); y-intercept $f(0)=-\tfrac32+3=\tfrac32$, so $\left(0;\tfrac32\right)$; x-intercept: $\dfrac{-3}{x+2}=-3\Rightarrow x=-1$, so $(-1;0)$. $g$: straight line with gradient $-1$; y-intercept $(0;3)$ and x-intercept $(3;0)$. See the graph below.` },
    { n: '1.2', q: r`Write down the domain of $f(x)$.`, a: r`$x\in\mathbb{R},\;x\ne-2$.` },
    { n: '1.3', q: r`Determine algebraically the $x$ values for which $f(x)$ and $g(x)$ intersect.`, a: r`$\dfrac{-3}{x+2}+3=-x+3\Rightarrow\dfrac{-3}{x+2}=-x\Rightarrow3=x(x+2)\Rightarrow x^2+2x-3=0\Rightarrow(x+3)(x-1)=0$. $x=-3$ or $x=1$ (points $(-3;6)$ and $(1;2)$).` },
  ]),
  fig(hyper(-3, -2, 3, [-8, 6], [-5, 9], [], 'f(x) = −3/(x + 2) + 3')),
  fig(t14Fig),

  h2('Task 14, Question 2: $i(x)=-\dfrac4{x-2}-1$ and $j(x)=mx+k$'),
  qs([
    { n: '2.1', context: r`In the sketch $A$ is the y-intercept of $i$, $B$ is its x-intercept, and $j$ is the straight line cutting $i$ and passing through $C$ and $D$.`, q: r`Calculate the asymptotes of the hyperbola.`, a: r`Vertical: $x=2$. Horizontal: $y=-1$.` },
    { n: '2.2', q: r`Calculate the coordinates of $A$ and $B$.`, a: r`$A$ (y-intercept): $i(0)=\dfrac{-4}{-2}-1=1$, so $A(0;\,1)$. $B$ (x-intercept): $0=\dfrac{-4}{x-2}-1\Rightarrow\dfrac{-4}{x-2}=1\Rightarrow x-2=-4\Rightarrow x=-2$, so $B(-2;\,0)$.` },
    { n: '2.3', q: r`For which values of $x$ is $i(x)>0$?`, a: r`The hyperbola is above the x-axis from $B$ up to the vertical asymptote: $-2<x<2$. (Algebra: $\dfrac{-4}{x-2}>1$; for $x<2$ multiply by the negative $x-2$ and reverse the sign: $-4<x-2$, so $x>-2$.)` },
  ]),
]);

export const ALG_MIXED_7_LESSONS: Lesson[] = [MIXED_TASK_13_14];
