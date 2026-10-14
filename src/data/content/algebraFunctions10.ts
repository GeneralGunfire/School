import type { Lesson } from '../../lib/types';
import { r, h2, p, ul, note, solution, fig, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';
import { hyper } from './algebraFunctions7';

/**
 * Unit 6: Functions, C. Hyperbola: Question 5 and Task 7. Book pp. 131–132; photo 50.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-functions-hyperbola', id, title, minutes, blocks);

export const HYPERBOLA_Q5 = lesson('alg-u6-c-hyperbola-q5', 'C. Hyperbola: Worked Question 5', 20, [
  h2('Question 5'),
  p(r`A hyperbola $f(x)$ is described with the following properties:`),
  ul([
    r`The equation of the vertical asymptote is $x=-2$.`,
    r`The range of $f$ is $(-\infty;1)\cup(1;\infty)$.`,
    r`The x-intercept of $f$ is $(-3;0)$.`,
  ]),
  ul([
    r`5.1 Write down the domain of $f$.`,
    r`5.2 Determine the horizontal asymptote of $f$.`,
    r`5.3 Find the equation of $f$.`,
    r`5.4 Calculate the y-intercept of $f$.`,
    r`5.5 Draw a neat graph of $f$.`,
  ]),
  solution([
    ['5.1 Domain:', r`(-\infty;\,-2)\cup(-2;\,\infty)\quad\text{or}\quad x\in\mathbb{R},\;x\ne-2`],
    ['5.2 The range excludes $1$, so the horizontal asymptote is', r`y=1`],
    ['5.3 The equation of the hyperbola is', r`y=\dfrac a{x+2}+1`],
    ['To find $a$, use the point $(-3;0)$:', r`0=\dfrac a{-3+2}+1\;\Rightarrow\;-1=\dfrac a{-1}\;\Rightarrow\;a=1`],
    r`\therefore\;f(x)=\dfrac1{x+2}+1`,
    ['5.4 y-intercept:', r`f(0)=\dfrac1{0+2}+1=\dfrac32\;\therefore\;\left(0;\,\dfrac32\right)`],
    ['5.5 The graph is in the first and third quadrants of the asymptotes ($a=1>0$).', ''],
  ]),
  fig(hyper(1, -2, 1, [-7, 5], [-5, 6], [[-3, 0, '(-3; 0)'], [0, 1.5, '(0; 3/2)']], 'f(x) = 1/(x + 2) + 1')),
]);

export const HYPERBOLA_TASK_7 = lesson('alg-u6-task-7', 'C. Hyperbola: Task 7', 30, [
  ALG_ANSWERS_NOTE,
  h2('Question 1: Given $g(x)=\\dfrac4{x-2}-1$'),
  qs([
    { n: '1.1', q: r`Determine the equations of the asymptotes of $g$.`, a: r`Vertical: $x=2$. Horizontal: $y=-1$.` },
    { n: '1.2', q: r`Determine the coordinates of the intercepts of $g$ with the x- and y-axes.`, a: r`x-intercept: $0=\dfrac4{x-2}-1\Rightarrow\dfrac4{x-2}=1\Rightarrow x=6$, so $(6;0)$. y-intercept: $g(0)=\dfrac4{-2}-1=-3$, so $(0;-3)$.` },
    { n: '1.3', q: r`Sketch the graph of $g$ showing clearly the asymptotes and ALL intercepts with the axes.`, a: r`Asymptotes $x=2$ and $y=-1$ (dotted). $a=4>0$: first and third quadrants of the asymptotes. Intercepts $(6;0)$ and $(0;-3)$. See the graph below.` },
    { n: '1.4', q: r`Determine the equation of the axis of symmetry, the one intersecting with $g$.`, a: r`The one that cuts the curve has $m=1$. Substitute the centre $(2;-1)$ into $y=x+c$: $-1=2+c\Rightarrow c=-3$, so $y=x-3$. (Check: $x-3=\dfrac4{x-2}-1\Rightarrow(x-2)^2=4$ has solutions, so it does intersect.)` },
  ]),
  fig(hyper(4, 2, -1, [-4, 10], [-8, 6], [[6, 0, '(6; 0)'], [0, -3, '(0; -3)']], 'g(x) = 4/(x − 2) − 1')),

  h2('Question 2: Given $f(x)=\\dfrac{-3}{x+6}$'),
  qs([
    { n: '2.1', q: r`Write down the equations of the asymptotes of $f$.`, a: r`Vertical: $x=-6$. Horizontal: $y=0$ (there is no $+q$ term).` },
    { n: '2.2', q: r`Determine the coordinates of the intercepts of $f$ with the x- and y-axes.`, a: r`x-intercept: $\dfrac{-3}{x+6}=0$ has no solution, so there is no x-intercept (the x-axis is an asymptote). y-intercept: $f(0)=\dfrac{-3}{6}=-\dfrac12$, so $\left(0;-\dfrac12\right)$.` },
    { n: '2.3', q: r`Draw a neat graph of $f$, indicating the asymptotes and intercepts with the axes.`, a: r`$a=-3<0$: second and fourth quadrants of the asymptotes $x=-6$ and $y=0$, passing through $(0;-\tfrac12)$. See the graph below.` },
    { n: '2.4', q: r`Write down the equations of the axes of symmetry of the function $f$.`, a: r`Both pass through the centre $(-6;0)$. $y=x+c$: $0=-6+c\Rightarrow c=6$, so $y=x+6$. $y=-x+c$: $0=6+c\Rightarrow c=-6$, so $y=-x-6$.` },
  ]),
  fig(hyper(-3, -6, 0, [-12, 6], [-6, 6], [[0, -0.5, '(0; -1/2)']], 'f(x) = −3/(x + 6)')),
  note(r`For $a<0$ the curve lies in the second and fourth quadrants of the asymptotes, so it meets the axis of symmetry $y=-x-6$ (gradient $-1$) but not $y=x+6$.`),
]);

export const ALG_HYPERBOLA_4_LESSONS: Lesson[] = [HYPERBOLA_Q5, HYPERBOLA_TASK_7];
