import type { Lesson } from '../../lib/types';
import { r, h2, p, ul, note, solution, fig, lesson as make } from './algKit';
import { hyper } from './algebraFunctions7';

/**
 * Unit 6: Functions, C. Hyperbola: Questions 1–2 and axes of symmetry. Book pp. 127–128; photo 48.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-functions-hyperbola', id, title, minutes, blocks);

export const HYPERBOLA_EXAMPLES = lesson('alg-u6-c-hyperbola-examples', 'C. Hyperbola: Worked Questions and Axes of Symmetry', 40, [
  h2('Question 1'),
  p(r`Given: $h(x)=\dfrac1{x+4}-2$`),
  ul([
    r`1.1 Determine the equations of the asymptotes of $h$.`,
    r`1.2 Determine the coordinates of the intercepts of $h$ with the x- and y-axes.`,
    r`1.3 Sketch the graph of $h$ showing clearly the asymptotes and ALL intercepts with the axes.`,
  ]),
  solution([
    ['1.1 Horizontal asymptote:', r`y=-2`],
    ['Vertical asymptote:', r`x=-4`],
    ['1.2 x-intercept: let $h(x)=0$', r`0=\dfrac1{x+4}-2\;\Rightarrow\;2=\dfrac1{x+4}\;\Rightarrow\;2x+8=1\;\Rightarrow\;x=-3{,}5`],
    ['y-intercept: let $x=0$', r`y=\dfrac1{0+4}-2=-1{,}75`],
    ['1.3 Draw the asymptotes first (use dotted lines). Use the first and third quadrants of the asymptotes ($a=1>0$). The intercepts are $(-3{,}5;\\,0)$ and $(0;\\,-1{,}75)$.', ''],
  ]),
  fig(hyper(1, -4, -2, [-9, 5], [-7, 5], [[-3.5, 0, '(-3,5; 0)'], [0, -1.75, '(0; -1,75)']], 'h(x) = 1/(x + 4) − 2: asymptotes x = −4 and y = −2')),

  h2('Axes of symmetry'),
  note(r`A hyperbola has TWO axes of symmetry. These two straight lines intersect at $(p;q)$. Their gradients are $1$ and $-1$. Each $c$ value can be determined by substituting $(p;q)$: $y=x+c$ ($m=1$, increasing) and $y=-x+c$ ($m=-1$, decreasing).`),
  ul([
    r`**Note 1:** We need to find the “$c$” values for both cases.`,
    r`**Note 2:** Questions may ask only one of the axes of symmetry or both. Provide the correct answer required.`,
  ]),
  solution([
    ['Example with $h(x)=\\dfrac1{x+4}-2$, which has centre $(-4;-2)$:', ''],
    ['$y=x+c$: substitute $(-4;-2)$', r`-2=-4+c\;\Rightarrow\;c=2\;\Rightarrow\;y=x+2`],
    ['$y=-x+c$: substitute $(-4;-2)$', r`-2=4+c\;\Rightarrow\;c=-6\;\Rightarrow\;y=-x-6`],
  ]),

  h2('Question 2'),
  p(r`Given: $f(x)=\dfrac1{x+2}+1$`),
  ul([
    r`2.1 Give the domain of $f$.`,
    r`2.2 For what value of $x$ is $f(x)=0$?`,
    r`2.3 Determine the y-intercept of $f$.`,
    r`2.4 Write down the equations of the asymptotes of $f$.`,
    r`2.5 Draw a neat graph of $f$, indicating the asymptotes and intercepts with the axes.`,
  ]),
  solution([
    ['2.1 Domain:', r`x\in\mathbb{R},\;x\ne-2\qquad(\text{Range: }y\in\mathbb{R},\;y\ne1)`],
    ['2.2 x-intercept: $f(x)=y=0$', r`0=\dfrac1{x+2}+1\;\Rightarrow\;-1=\dfrac1{x+2}\;\Rightarrow\;-x-2=1\;\Rightarrow\;x=-3`],
    ['2.3 y-intercept: $(0;\\,?)$', r`y=\dfrac1{0+2}+1=1{,}5`],
    ['2.4 Horizontal asymptote:', r`y=1`],
    ['Vertical asymptote:', r`x=-2`],
    ['2.5 Draw the asymptotes first (dotted lines). Use the first and third quadrants ($a=1>0$). Intercepts: $(-3;\\,0)$ and $(0;\\,1{,}5)$.', ''],
  ]),
  fig(hyper(1, -2, 1, [-7, 5], [-5, 6], [[-3, 0, '(-3; 0)'], [0, 1.5, '(0; 1,5)']], 'f(x) = 1/(x + 2) + 1: asymptotes x = −2 and y = 1')),
]);

export const ALG_HYPERBOLA_2_LESSONS: Lesson[] = [HYPERBOLA_EXAMPLES];
