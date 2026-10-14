import type { Lesson } from '../../lib/types';
import { r, h2, note, fig, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';
import { expo } from './algebraExponential1';

/**
 * Unit 6: Functions, D. Exponential function: Task 10. Book p. 145; photo 55 (left page).
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-functions-exponential', id, title, minutes, blocks);

export const EXPONENTIAL_TASK_10 = lesson('alg-u6-task-10', 'D. Exponential Function: Task 10', 30, [
  ALG_ANSWERS_NOTE,
  h2('Question 1: Given $f(x)=5^x+3$, $g(x)=-5^x$, $h(x)=3^{-x}-3$'),
  qs([
    { n: '1.1', q: r`Draw all three graphs on the same set of axes, showing the intercepts and asymptotes if possible.`, a: r`$f$: asymptote $y=3$, y-intercept $(0;4)$, no x-intercept, increasing. $g$: asymptote $y=0$, y-intercept $(0;-1)$, no x-intercept, decreasing (below the x-axis). $h(x)=\left(\tfrac13\right)^x-3$: asymptote $y=-3$, y-intercept $(0;-2)$, decreasing; x-intercept: $3^{-x}=3\Rightarrow x=-1$, so $(-1;0)$. See the graphs below.` },
    { n: '1.2', q: r`$n(x)$ is the reflection of $f(x)$ in the y-axis; $b(x)$ is the reflection of $h(x)$ in the x-axis. Write down the equations of $n(x)$ and $b(x)$.`, a: r`y-axis: change $x$ to $-x$: $n(x)=5^{-x}+3$. x-axis: change $y$ to $-y$: $b(x)=-h(x)=-3^{-x}+3$.` },
  ]),
  fig(expo(1, 5, 0, 3, [-3, 3], [-4, 30], [[0, 4, '(0; 4)']], 'f(x) = 5ˣ + 3')),
  fig(expo(-1, 5, 0, 0, [-3, 3], [-30, 4], [[0, -1, '(0; -1)']], 'g(x) = −5ˣ')),
  fig(expo(1, 1 / 3, 0, -3, [-3, 3], [-6, 24], [[0, -2, '(0; -2)'], [-1, 0, '(-1; 0)']], 'h(x) = 3⁻ˣ − 3')),

  h2('Question 2'),
  qs([
    { n: '2', context: r`The graph of $h(x)=1+t\cdot3^x$ ($t$ is a constant) passes through the origin.`, q: r`2.1 Show that $t=-1$.`, a: r`$(0;0)$ satisfies the equation: $0=1+t\cdot3^0=1+t\Rightarrow t=-1$.` },
    { n: '2.2', q: r`Determine the value of $x$ if $A(x;\ldots)$ lies on the graph of $h$.`, a: r`The point is cut off in the photo, so this part cannot be answered. Method: substitute the given y-value into $h(x)=1-3^x$ and write both sides as powers of $3$.` },
    { n: '2.3', q: r`Write down the equation of $k$ if the graph of $h$ is shifted 5 units to the right to give the function $k$.`, a: r`$k(x)=h(x-5)=1-3^{x-5}$.` },
  ]),
  fig(expo(-1, 3, 0, 1, [-5, 3], [-18, 3], [[0, 0, 'O(0; 0)']], 'h(x) = 1 − 3ˣ')),

  h2('Question 3: $m(x)=3^{x+k}+n$'),
  qs([
    { n: '3.1', q: r`Write down the value of $n$.`, a: r`$n$ is the horizontal asymptote shown on the graph: $n=-3$.` },
    { n: '3.2', q: r`Calculate the value of $k$ (the graph passes through $(-1;0)$).`, a: r`$0=3^{-1+k}-3\Rightarrow3^{k-1}=3^1\Rightarrow k-1=1\Rightarrow k=2$.` },
  ]),
  note(r`With $m(x)=3^{x+k}+n$ as printed, $m$ is an increasing curve. The sketch in the book appears to fall towards the asymptote; if the formula were $3^{-x+k}+n$ the same point would give $0=3^{1+k}-3$ and $k=0$. The answer above follows the printed formula.`),
]);

export const ALG_EXPONENTIAL_4_LESSONS: Lesson[] = [EXPONENTIAL_TASK_10];
