import type { Lesson } from '../../lib/types';
import { r, h2, p, ul, solution, fig, lesson as make } from './algKit';
import { hyper } from './algebraFunctions7';

/**
 * Unit 6: Functions, C. Hyperbola: Questions 3–4. Book pp. 129–130; photo 49.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-functions-hyperbola', id, title, minutes, blocks);

export const HYPERBOLA_EXAMPLES_2 = lesson('alg-u6-c-hyperbola-examples-2', 'C. Hyperbola: Worked Questions 3 and 4', 35, [
  h2('Question 3'),
  p(r`Given: $f(x)=-2-\dfrac4x$`),
  ul([
    r`3.1 Write down the equations of the asymptotes of $f(x)$.`,
    r`3.2 Determine the coordinates of the intercepts of $f$ with the x- and y-axes.`,
    r`3.3 Draw a neat graph of $f$, indicating the asymptotes and intercepts with the axes.`,
    r`3.4 Determine the equations of the axes of symmetry of $f$.`,
  ]),
  solution([
    ['3.1 Horizontal asymptote:', r`y=-2`],
    ['Vertical asymptote:', r`x=0`],
    ['3.2 x-intercept: $f(x)=y=0$', r`0=-2-\dfrac4x\;\Rightarrow\;\dfrac4x=-2\;\Rightarrow\;x=-2\;\therefore\;(-2;\,0)`],
    ['y-intercept: $f(0)=-2-\\dfrac40$. Since the denominator cannot be zero, there is **no y-intercept** ($x=0$ is an asymptote).', ''],
    ['3.3 Draw the asymptotes first (dotted lines). Use the second and fourth quadrants ($a=-4<0$).', ''],
  ]),
  fig(hyper(-4, 0, -2, [-8, 8], [-9, 5], [[-2, 0, '(-2; 0)']], 'f(x) = −4/x − 2: asymptotes x = 0 and y = −2')),
  solution([
    ['3.4 The lines have gradients $1$ and $-1$ and pass through the intersection of the asymptotes $(0;-2)$, which will be their y-intercept:', r`y=x-2\quad\text{and}\quad y=-x-2`],
  ]),

  h2('Question 4'),
  p(r`Use the graph drawn (asymptotes $x=-4$ and $y=-3$, with the x-intercept $A(-3;0)$) to solve the following questions.`),
  ul([
    r`4.1 Write down the equations of the asymptotes.`,
    r`4.2 Hence, determine the equation of the hyperbola.`,
    r`4.3 Find the equation of the axis of symmetry, the one intersecting with the function.`,
    r`4.4 Find the equation of the axis of symmetry, the one decreasing (has a negative gradient).`,
  ]),
  solution([
    ['4.1 From the graph, the equations of the asymptotes:', r`x=-4\quad\text{and}\quad y=-3`],
    ['4.2 The equation of the hyperbola is', r`y=\dfrac{a}{x+4}-3`],
    ['To find $a$, use the point $(-3;0)$:', r`0=\dfrac a{-3+4}-3\;\Rightarrow\;3=\dfrac a1\;\Rightarrow\;a=3`],
    r`\therefore\;y=\dfrac3{x+4}-3`,
    ['4.3 The intersecting axis of symmetry has a positive gradient (increasing), $m=1$. Substitute $(-4;-3)$ into $y=x+c$:', r`-3=-4+c\;\Rightarrow\;c=1\;\Rightarrow\;y=x+1`],
    ['4.4 The decreasing axis of symmetry has $m=-1$. Substitute $(-4;-3)$ into $y=-x+c$:', r`-3=4+c\;\Rightarrow\;c=-7\;\Rightarrow\;y=-x-7`],
  ]),
  fig(hyper(3, -4, -3, [-9, 4], [-9, 5], [[-3, 0, 'A(-3; 0)'], [0, -2.25, '(0; -2,25)']], 'y = 3/(x + 4) − 3: asymptotes x = −4 and y = −3')),
]);

export const ALG_HYPERBOLA_3_LESSONS: Lesson[] = [HYPERBOLA_EXAMPLES_2];
