import type { Lesson } from '../../lib/types';
import { r, h2, note, fig, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';
import { hyper } from './algebraFunctions7';

/**
 * Unit 6: Functions, C. Hyperbola: Task 7 questions 3–6 (finding equations from graphs) and Task 8.
 * Book pp. 133–134; photo 51.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-functions-hyperbola', id, title, minutes, blocks);

export const HYPERBOLA_TASK_7B = lesson('alg-u6-task-7b', 'C. Hyperbola: Task 7 (continued, equations from graphs)', 30, [
  ALG_ANSWERS_NOTE,
  note(r`Method: read the asymptotes $x=p$ and $y=q$ from the graph, write $y=\dfrac a{x-p}+q$, then substitute a known point to find $a$.`),
  h2('Questions 3–6'),
  qs([
    { n: '3', context: r`The graph of $f$ has the dotted asymptotes $x=-1$ and $y=2$ and passes through $A(-3;3)$ on the left branch.`, q: r`Write down the equations of the asymptotes and hence find the equation of $f$.`, a: r`Asymptotes: $x=-1$ and $y=2$. $f(x)=\dfrac a{x+1}+2$. Substitute $(-3;3)$: $3=\dfrac a{-2}+2\Rightarrow\dfrac a{-2}=1\Rightarrow a=-2$. $f(x)=\dfrac{-2}{x+1}+2$. ($a<0$ fits: the branches lie in the 2nd and 4th quadrants of the asymptotes.)` },
    { n: '4', context: r`The graph has the asymptotes $x=-1$ and $y=3$ and passes through the origin $A(0;0)$.`, q: r`Find the equation of the graph drawn.`, a: r`$y=\dfrac a{x+1}+3$. Substitute $(0;0)$: $0=\dfrac a1+3\Rightarrow a=-3$. $y=\dfrac{-3}{x+1}+3$.` },
    { n: '5', context: r`The graph of $f$ has the asymptotes $x=4$ and $y=1$ (they cross at $(4;1)$) and passes through $(5;-1)$.`, q: r`Find the equation of $f$.`, a: r`$f(x)=\dfrac a{x-4}+1$. Substitute $(5;-1)$: $-1=\dfrac a1+1\Rightarrow a=-2$. $f(x)=\dfrac{-2}{x-4}+1$.` },
    { n: '6', context: r`The graph of $g$ has the asymptotes $x=0$ (the y-axis) and $y=-4$ and passes through $\left(\tfrac32;0\right)$.`, q: r`Find the equation of $g$.`, a: r`$g(x)=\dfrac ax-4$. Substitute $\left(\tfrac32;0\right)$: $0=\dfrac a{3/2}-4\Rightarrow\dfrac{2a}3=4\Rightarrow a=6$. $g(x)=\dfrac6x-4$.` },
  ]),
  fig(hyper(-2, -1, 2, [-8, 6], [-6, 8], [[-3, 3, 'A(-3; 3)']], '3: f(x) = −2/(x + 1) + 2')),
  fig(hyper(-3, -1, 3, [-6, 6], [-6, 8], [[0, 0, 'A(0; 0)']], '4: y = −3/(x + 1) + 3')),
  fig(hyper(-2, 4, 1, [-3, 9], [-6, 6], [[5, -1, '(5; -1)'], [4, 1, '']], '5: f(x) = −2/(x − 4) + 1')),
  fig(hyper(6, 0, -4, [-6, 6], [-12, 8], [[1.5, 0, '(3/2; 0)']], '6: g(x) = 6/x − 4')),
]);

export const HYPERBOLA_TASK_8 = lesson('alg-u6-task-8', 'C. Hyperbola: Task 8', 30, [
  ALG_ANSWERS_NOTE,
  h2('Question 1: Given $f(x)=\\dfrac{-2}{4-x}+2$'),
  qs([
    { n: '1.1', q: r`Give the domain of $f$.`, a: r`The denominator $4-x\ne0$, so $x\ne4$: $x\in\mathbb{R},\;x\ne4$.` },
    { n: '1.2', q: r`Determine the y-intercept of $f$.`, a: r`$f(0)=\dfrac{-2}{4}+2=\dfrac32$, so $\left(0;\dfrac32\right)$.` },
    { n: '1.3', q: r`For what value of $x$ is $f(x)=0$?`, a: r`$\dfrac{-2}{4-x}+2=0\Rightarrow\dfrac{-2}{4-x}=-2\Rightarrow4-x=1\Rightarrow x=3$.` },
    { n: '1.4', q: r`Write down the equations of the asymptotes of $f$.`, a: r`Vertical: $x=4$. Horizontal: $y=2$. (Tip: $\dfrac{-2}{4-x}=\dfrac{2}{x-4}$, so $f(x)=\dfrac2{x-4}+2$.)` },
    { n: '1.5', q: r`Draw a neat graph of $f$, indicating the asymptotes and intercepts with the axes.`, a: r`Asymptotes $x=4$ and $y=2$ (dotted). Since $f(x)=\dfrac2{x-4}+2$ has $a=2>0$ it lies in the 1st and 3rd quadrants of the asymptotes. Intercepts $(3;0)$ and $\left(0;\tfrac32\right)$. See below.` },
  ]),
  fig(hyper(2, 4, 2, [-4, 10], [-6, 8], [[3, 0, '(3; 0)'], [0, 1.5, '(0; 3/2)']], 'f(x) = −2/(4 − x) + 2 = 2/(x − 4) + 2')),

  h2('Question 2: Given $f(x)=1+\\dfrac2x$'),
  qs([
    { n: '2.1', q: r`Write down the equations of the asymptotes of $f$.`, a: r`Vertical: $x=0$. Horizontal: $y=1$.` },
    { n: '2.2', q: r`Determine the coordinates of the intercepts of $f$ with the x- and y-axes.`, a: r`x-intercept: $1+\dfrac2x=0\Rightarrow\dfrac2x=-1\Rightarrow x=-2$, so $(-2;0)$. y-intercept: none, because $x=0$ is an asymptote.` },
    { n: '2.3', q: r`Draw a neat graph of $f$, indicating the asymptotes and intercepts with the axes.`, a: r`$f(x)=\dfrac2x+1$, $a=2>0$: 1st and 3rd quadrants of the asymptotes $x=0$, $y=1$, passing through $(-2;0)$. See below.` },
    { n: '2.4', q: r`Determine the equation of the axis of symmetry, the one not intersecting with $f$.`, a: r`For $a>0$ the axis with $m=1$ cuts the curve, so the one that does not is the decreasing one with $m=-1$. It passes through the centre $(0;1)$: $y=-x+1$.` },
  ]),
  fig(hyper(2, 0, 1, [-8, 8], [-6, 7], [[-2, 0, '(-2; 0)']], 'f(x) = 1 + 2/x')),
]);

export const ALG_HYPERBOLA_5_LESSONS: Lesson[] = [HYPERBOLA_TASK_7B, HYPERBOLA_TASK_8];
