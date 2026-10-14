import type { Lesson } from '../../lib/types';
import { r, h2, h3, p, ul, note, solution, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 5: Quadratic Equations, E (fractions, continued), Task 6 and F (simultaneous equations).
 * Book pp. 104–107; photos 37–38 of the Math-Algebra folder. Task 6 question 4 is cut off at the
 * page edge and is not included.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-quadratic-equations', id, title, minutes, blocks);

export const QUAD_FRACTIONS_2 = lesson('alg-u5-e-fractions-2', 'E. Fractions (continued) and Task 6', 35, [
  h2('Question 3'),
  p(r`Solve for $x$: $\dfrac{x+1}{x-1}=\dfrac{-2}{x+2}+\dfrac{x+2}{1-x}$`),
  solution([
    ['Restriction:', r`x\ne-2,\;x\ne1`],
    ['Move to the LHS: $1-x=-(x-1)$', r`\dfrac{x+1}{x-1}=\dfrac{-2}{x+2}-\dfrac{x+2}{x-1}`],
    ['Move the fractions with the same denominator to the LHS:', r`\dfrac{x+1}{x-1}+\dfrac{x+2}{x-1}=\dfrac{-2}{x+2}\;\Rightarrow\;\dfrac{2x+3}{x-1}=\dfrac{-2}{x+2}`],
    ['Cross multiply:', r`(2x+3)(x+2)=-2(x-1)\;\Rightarrow\;2x^2+7x+6=-2x+2`],
    ['The standard form and factorisation:', r`2x^2+9x+4=0\;\Rightarrow\;(2x+1)(x+4)=0`],
    r`\therefore\;x=-\dfrac12\;\text{or}\;x=-4`,
  ]),
  h2('Task 6: Solve for x (two decimal places when needed)'),
  ALG_ANSWERS_NOTE,
  note(r`Question 4 is cut off at the bottom of the page and is not included. The pencil workings in the photo for question 6 agree with the answers below.`),
  qs([
    { n: '1', q: r`$x+2=\dfrac8x$`, a: r`Restriction $x\ne0$. $x^2+2x=8\Rightarrow x^2+2x-8=0\Rightarrow(x+4)(x-2)=0$. $x=-4$ or $x=2$.` },
    { n: '2', q: r`$\dfrac1x-\dfrac1{x+2}=\dfrac2{15}$`, a: r`Restrictions $x\ne0,-2$. LCM $x(x+2)$: $\dfrac{(x+2)-x}{x(x+2)}=\dfrac2{x(x+2)}=\dfrac2{15}\Rightarrow x^2+2x=15\Rightarrow(x+5)(x-3)=0$. $x=-5$ or $x=3$.` },
    { n: '3', q: r`$\dfrac4{x+1}=x+1$`, a: r`Restriction $x\ne-1$. $(x+1)^2=4\Rightarrow x+1=\pm2$. $x=1$ or $x=-3$.` },
    { n: '5', q: r`$x+\dfrac1{x-3}=\dfrac{x-2}{x-3}$`, a: r`Restriction $x\ne3$. Multiply by $(x-3)$: $x(x-3)+1=x-2\Rightarrow x^2-4x+3=0\Rightarrow(x-1)(x-3)=0$. $x=3$ is not allowed (restriction), so $x=1$.` },
    { n: '6', q: r`$\dfrac{x-2}{x+1}=\dfrac{2x+1}{x-7}$`, a: r`Restrictions $x\ne-1,7$. Cross multiply: $(x-2)(x-7)=(2x+1)(x+1)\Rightarrow x^2-9x+14=2x^2+3x+1\Rightarrow x^2+12x-13=0\Rightarrow(x+13)(x-1)=0$. $x=-13$ or $x=1$.` },
    { n: '7', q: r`$\dfrac1{x+1}+\dfrac{2x}{x-1}=1$`, a: r`This is Question 2 of the examples: $x=0$ or $x=-3$ (restrictions $x\ne\pm1$).` },
  ]),
]);

export const QUAD_SIMULTANEOUS = lesson('alg-u5-f-simultaneous', 'F. Simultaneous Equations (Linear and Quadratic)', 35, [
  h2('The method'),
  p(r`In this section you learn how to solve sets of simultaneous equations where one of them is linear and the other is quadratic.`),
  ul([
    r`Starting from the linear equation, make the suitable unknown the subject of the other unknown.`,
    r`Substitute it into the quadratic equation to make a one-variable equation.`,
    r`Solve this quadratic equation. If possible, determine both solutions for both unknowns.`,
  ]),
  h3('Question 1'),
  p(r`Solve for $x$ and $y$: $y-2x+4=0$ and $x^2+y=4$`),
  solution([
    ['Make $y$ the subject in the linear equation:', r`y=2x-4`],
    ['Substitute $y=2x-4$ into $x^2+y=4$:', r`x^2+2x-4=4\;\Rightarrow\;x^2+2x-8=0`],
    ['Solve for $x$:', r`(x-2)(x+4)=0\;\therefore\;x=2\;\text{or}\;x=-4`],
    ['Use the linear equation to find the $y$-value for each $x$:', r`x=2:\;y=2(2)-4=0\qquad x=-4:\;y=2(-4)-4=-12`],
    r`\text{Solutions: }(2;\,0)\text{ and }(-4;\,-12)`,
  ]),
  h3('Question 2'),
  p(r`Solve for $x$ and $y$: $-2x-y+2=0$ and $8x+y^2-8=0$`),
  solution([
    ['Make $y$ the subject in the linear equation:', r`y=2-2x`],
    ['Substitute into $8x+y^2-8=0$:', r`8x+(2-2x)^2-8=0`],
    r`8x+4-8x+4x^2-8=0\;\Rightarrow\;4x^2-4=0`,
    ['Divide both sides by $4$:', r`x^2-1=0\;\Rightarrow\;(x+1)(x-1)=0\;\therefore\;x=-1\;\text{or}\;x=1`],
    ['Use the linear equation $y=2-2x$:', r`x=-1:\;y=4\qquad x=1:\;y=0`],
    r`\text{Solutions: }(-1;\,4)\text{ and }(1;\,0)`,
  ]),
  h3('Question 3'),
  p(r`Solve for $x$ and $y$: $x+2y=3$ and $x^2-2xy-2=0$`),
  solution([
    ['Make $x$ the subject in the linear equation:', r`x=3-2y`],
    ['Substitute it into $x^2-2xy-2=0$:', r`(3-2y)^2-2(3-2y)y-2=0`],
    ['Expand: $(3-2y)(3-2y)-2y(3-2y)-2=0$', r`9-12y+4y^2-6y+4y^2-2=0`],
    ['Collect like terms and factorise:', r`8y^2-18y+7=0\;\Rightarrow\;(4y-7)(2y-1)=0`],
    r`\therefore\;y=\dfrac74\;\text{or}\;y=\dfrac12`,
    ['Use $x=3-2y$ for each $y$:', r`y=\dfrac74:\;x=-\dfrac12\qquad y=\dfrac12:\;x=2`],
    r`\text{Solutions: }\left(-\tfrac12;\,\tfrac74\right)\text{ and }\left(2;\,\tfrac12\right)`,
  ]),
  note(r`Check $(2;\,\tfrac12)$: $2+1=3$ ✔ and $4-2-2=0$ ✔.`),
  h3('Question 4'),
  p(r`The sum and product of two numbers are equal to $-10$ and $-600$ respectively. Determine these two numbers, showing all calculations.`),
  solution([
    ['Make $x$ the subject in the linear equation (sum is $-10$):', r`x+y=-10\;\Rightarrow\;x=-10-y`],
    ['Product is $-600$:', r`xy=-600`],
    ['Substitute $x=-10-y$ into the second equation:', r`(-10-y)y=-600\;\Rightarrow\;-10y-y^2=-600`],
    ['Write in standard form, factorise and solve:', r`y^2+10y-600=0\;\Rightarrow\;(y+30)(y-20)=0`],
    r`y=-30\;\text{or}\;y=20`,
    ['Use the first equation to find each $x$:', r`y=-30:\;x=20\qquad y=20:\;x=-30`],
    ['The two numbers are', r`20\;\text{and}\;-30`],
  ]),
]);

export const ALG_QUADRATIC_4_LESSONS: Lesson[] = [QUAD_FRACTIONS_2, QUAD_SIMULTANEOUS];
