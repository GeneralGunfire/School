import type { Lesson } from '../../lib/types';
import { r, h2, h3, p, ul, note, solution, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 5: Quadratic Equations. Task 3 (square roots), C (completing the square) and Task 4.
 * Book pp. 96–99; photos 33–34 of the Math-Algebra folder.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-quadratic-equations', id, title, minutes, blocks);

export const QUAD_TASK_3 = lesson('alg-u5-task-3', 'B. Square-Root Method: Task 3', 15, [
  h2('Task 3: Solve for x'),
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1', q: r`$3x^2=75$`, a: r`$x^2=25\Rightarrow x=\pm5$` },
    { n: '2', q: r`$4x^2-9=0$, if $x$ is real.`, a: r`$x^2=\dfrac94\Rightarrow x=\pm\dfrac32$. *Now if $x$ is an integer: neither $\frac32$ nor $-\frac32$ is an integer, so there is no solution.` },
    { n: '3', q: r`$(x-3)^2-16=0$`, a: r`$(x-3)^2=16\Rightarrow x-3=\pm4\Rightarrow x=7$ or $x=-1$` },
    { n: '4', q: r`$-\dfrac13x^2+2=0$`, a: r`$x^2=6\Rightarrow x=\pm\sqrt6\approx\pm2{,}45$` },
    { n: '5', q: r`$4x^2-\dfrac13=0$`, a: r`$x^2=\dfrac1{12}\Rightarrow x=\pm\dfrac1{2\sqrt3}=\pm\dfrac{\sqrt3}{6}\approx\pm0{,}29$` },
    { n: '6', q: r`$-(x-1)^2+1=0$`, a: r`$(x-1)^2=1\Rightarrow x-1=\pm1\Rightarrow x=2$ or $x=0$` },
    { n: '7', q: r`$4(x+2)^2-9=0$`, a: r`$(x+2)^2=\dfrac94\Rightarrow x+2=\pm\dfrac32\Rightarrow x=-\dfrac12$ or $x=-\dfrac72$` },
    { n: '8', q: r`$4-\dfrac12x^2=0$`, a: r`$x^2=8\Rightarrow x=\pm2\sqrt2\approx\pm2{,}83$` },
    { n: '9', q: r`$4-(x-3)^2=0$`, a: r`$(x-3)^2=4\Rightarrow x-3=\pm2\Rightarrow x=5$ or $x=1$` },
    { n: '10', q: r`$-\dfrac25(x+4)^2+10=0$`, a: r`$(x+4)^2=25\Rightarrow x+4=\pm5\Rightarrow x=1$ or $x=-9$` },
  ]),
]);

export const QUAD_COMPLETING = lesson('alg-u5-c-completing-square', 'C. Solving by Completing the Square', 40, [
  h2('The method'),
  p(r`Use this method on an equation like $2x^2-8x-10=0$.`),
  ul([
    r`Write the equation in the form $ax^2+bx=\ldots$ (take the constant term to the right side): $2x^2-8x=10$.`,
    r`Divide each term by the coefficient of $x^2$: $x^2-4x=5$.`,
    r`Halve the coefficient of $x$ and square it, $\left(\dfrac b{2a}\right)^2$, and add the result to both sides. Here $\left(-\dfrac42\right)^2=(-2)^2$ should be added: $x^2-4x+(-2)^2=5+(-2)^2$.`,
    r`Write the left-hand side as a perfect square. Then follow the method of taking the square root of both sides (a calculator can be used).`,
  ]),
  solution([
    r`(x-2)^2=9`,
    r`x-2=\pm\sqrt9`,
    r`x-2=3\;\text{or}\;x-2=-3`,
    r`x=5\;\text{or}\;x=-1`,
  ], 'Finishing the example'),
  h3('Question 1'),
  p(r`Solve for $x$ by completing the square: $x^2-2x-1=0$`),
  solution([
    ['Take the constant term to the other side:', r`x^2-2x=1`],
    ['Halve the coefficient of $x$ and square it. Add the result to both sides: $\\left(-\\frac22\\right)^2=(-1)^2$.', r`x^2-2x+(-1)^2=1+(-1)^2`],
    ['Write the left-hand side as a perfect square:', r`(x-1)^2=2`],
    r`x-1=\pm\sqrt2`,
    r`\therefore\;x=\sqrt2+1\;\text{or}\;x=-\sqrt2+1`,
  ]),
  h3('Question 2'),
  p(r`Solve for $x$ by completing the square: $5x-3x^2+4=0$`),
  solution([
    ['Take the constant term to the other side and rearrange the terms:', r`-3x^2+5x=-4`],
    ['Divide each term by the coefficient of $x^2$, i.e. by $-3$:', r`x^2-\dfrac53x=\dfrac43`],
    ['Halve the coefficient of $x$ (half of $-\\frac53$ is $-\\frac56$) and square it. Add $\\left(-\\frac56\\right)^2$ to both sides:', r`x^2-\dfrac53x+\left(-\dfrac56\right)^2=\dfrac43+\left(-\dfrac56\right)^2`],
    ['Write the left-hand side as a perfect square:', r`\left(x-\dfrac56\right)^2=\dfrac{73}{36}`],
    r`x-\dfrac56=\pm\sqrt{\dfrac{73}{36}}`,
    r`\therefore\;x=\dfrac56+1{,}42=2{,}25\;\text{or}\;x=\dfrac56-1{,}42=-0{,}59`,
  ]),
  h3('Question 3: completed-square form of a function'),
  p(r`If $f(x)=x^2-2x$, show by completing the square that $f(x)=(x-1)^2-1$.`),
  solution([
    ['Let us rearrange $f(x)$ by using completing the square:', r`f(x)=x^2-2x`],
    ['Halve the coefficient of $x$ and square it. Add the result to both sides: $(-1)^2$ should be added to both sides.', r`f(x)+(-1)^2=x^2-2x+(-1)^2`],
    r`f(x)+1=(x-1)^2`,
    r`\therefore\;f(x)=(x-1)^2-1`,
  ]),
]);

export const QUAD_TASK_4 = lesson('alg-u5-task-4', 'C. Completing the Square: Task 4', 30, [
  h2('Task 4: Solve for x by completing the square'),
  ALG_ANSWERS_NOTE,
  note(r`The pencil workings printed beside questions 7, 8 and 9 in the photo are incomplete or contain slips (for example $-(x-2)^2+6$ is the correct form for 9.1, not $(x-2)^2+6$). The answers below are worked out and checked.`),
  qs([
    { n: '1', q: r`$x^2+10x-2=0$`, a: r`$x^2+10x=2\Rightarrow x^2+10x+25=27\Rightarrow(x+5)^2=27\Rightarrow x=-5\pm3\sqrt3\approx0{,}20$ or $-10{,}20$` },
    { n: '2', q: r`$x^2+4x+3=0$`, a: r`$x^2+4x=-3\Rightarrow(x+2)^2=1\Rightarrow x=-1$ or $x=-3$` },
    { n: '3', q: r`$2x^2+12x+4=0$`, a: r`Divide by $2$: $x^2+6x=-2\Rightarrow(x+3)^2=7\Rightarrow x=-3\pm\sqrt7\approx-0{,}35$ or $-5{,}65$` },
    { n: '4', q: r`$x^2+5x+9=0$`, a: r`$x^2+5x=-9\Rightarrow\left(x+\dfrac52\right)^2=-9+\dfrac{25}4=-\dfrac{11}4$. A perfect square cannot be negative: no real solution.` },
    { n: '5', q: r`$3x^2+6x-2=0$`, a: r`$x^2+2x=\dfrac23\Rightarrow(x+1)^2=\dfrac53\Rightarrow x=-1\pm\sqrt{\dfrac53}\approx0{,}29$ or $-2{,}29$` },
    { n: '6', q: r`$2x^2-11x=0$`, a: r`$x^2-\dfrac{11}2x=0\Rightarrow\left(x-\dfrac{11}4\right)^2=\dfrac{121}{16}\Rightarrow x-\dfrac{11}4=\pm\dfrac{11}4\Rightarrow x=0$ or $x=\dfrac{11}2$` },
    { n: '7', q: r`$5+4x-x^2=0$`, a: r`$x^2-4x=5\Rightarrow(x-2)^2=9\Rightarrow x=5$ or $x=-1$` },
    { n: '8', q: r`If $g(x)=x^2-4x$, show by completing the square that $g(x)=(x-2)^2-4$.`, a: r`$g(x)+(-2)^2=x^2-4x+(-2)^2=(x-2)^2$, so $g(x)=(x-2)^2-4$.` },
    { n: '9.1', context: r`Given: $-x^2+4x+2$.`, q: r`Write the above expression in the form $a(x+p)^2+q$.`, a: r`$-(x^2-4x-2)=-\left[(x-2)^2-4-2\right]=-\left[(x-2)^2-6\right]=-(x-2)^2+6$` },
    { n: '9.2', context: r`Same expression.`, q: r`Hence, determine the value of $x$ which will maximise $-x^2+4x+2$.`, a: r`$-(x-2)^2\le0$, with equality when $x=2$. So the expression is largest, equal to $6$, when $x=2$.` },
  ]),
]);

export const ALG_QUADRATIC_2_LESSONS: Lesson[] = [QUAD_TASK_3, QUAD_COMPLETING, QUAD_TASK_4];
