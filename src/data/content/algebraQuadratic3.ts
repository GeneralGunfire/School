import type { Lesson } from '../../lib/types';
import { r, h2, h3, p, ul, note, solution, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 5: Quadratic Equations, D (quadratic formula), Task 5 and the start of E (equations with fractions).
 * Book pp. 100–103; photos 35–36 of the Math-Algebra folder.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-quadratic-equations', id, title, minutes, blocks);

export const QUAD_FORMULA = lesson('alg-u5-d-formula', 'D. Solving by the Quadratic Formula', 35, [
  h2('The formula'),
  ul([
    r`Write the equation in the form $ax^2+bx+c=0$ (standard form).`,
    r`Use the quadratic formula after identifying the values of $a$, $b$ and $c$.`,
  ]),
  { type: 'math', label: 'Quadratic formula', text: r`x=\dfrac{-b\pm\sqrt{b^2-4ac}}{2a}` },
  p(r`The expression inside the square root is called the discriminant: $\Delta=b^2-4ac$. If $\Delta$ is negative, there are no real roots for that equation. When you have difficulty factorising a trinomial, the quadratic formula can be applied. In this method we usually write the final answers in decimal places, as a calculator is needed in most cases.`),
  h3('Question 1'),
  p(r`Solve for $x$: $2x^2+3x-7=0$`),
  solution([
    ['When we try to factorise the trinomial, the criss-cross and magic-X methods do not work. Use the formula with', r`a=2,\quad b=3,\quad c=-7`],
    r`x=\dfrac{-3\pm\sqrt{3^2-4(2)(-7)}}{2(2)}=\dfrac{-3\pm\sqrt{65}}{4}`,
    r`\therefore\;x=\dfrac{-3+\sqrt{65}}{4}\;\text{or}\;x=\dfrac{-3-\sqrt{65}}{4}`,
    ['To two decimal places:', r`x=1{,}27\;\text{or}\;x=-2{,}77`],
  ]),
  h3('Question 2'),
  p(r`Solve for $x$: $-\dfrac12x-\dfrac52x^2-4=0$`),
  solution([
    ['Multiply each term by $-2$:', r`5x^2+x+8=0`],
    ['Identify the values:', r`a=5,\quad b=1,\quad c=8`],
    r`x=\dfrac{-1\pm\sqrt{1-4(5)(8)}}{2(5)}=\dfrac{-1\pm\sqrt{-159}}{10}`,
    ['$\\sqrt{-159}$ is undefined for real numbers, so there are no real solutions.', ''],
  ]),
  note(r`The book multiplies by $-2$ and writes $x^2+5x+8=0$ with $a=1$, $b=5$, $c=8$. Multiplying $-\frac12x-\frac52x^2-4$ by $-2$ gives $x+5x^2+8$, that is $5x^2+x+8=0$, so $a=5$, $b=1$. The conclusion (no real solution) is the same: $\Delta=1-160=-159<0$.`),
  h3('Question 3'),
  p(r`Use the quadratic formula to solve $7x^2-2x-5=0$`),
  solution([
    r`a=7,\quad b=-2,\quad c=-5`,
    r`x=\dfrac{-(-2)\pm\sqrt{(-2)^2-4\cdot7\cdot(-5)}}{2\cdot7}=\dfrac{2\pm\sqrt{144}}{14}`,
    r`x=\dfrac{2+12}{14}\;\text{or}\;x=\dfrac{2-12}{14}`,
    r`\therefore\;x=1\;\text{or}\;x=-\dfrac57`,
  ]),
  note(r`When $\Delta$ is a perfect square, as here ($144=12^2$), the equation could also have been factorised: $(x-1)(7x+5)=0$.`),
]);

export const QUAD_TASK_5 = lesson('alg-u5-task-5', 'D. Quadratic Formula: Task 5', 25, [
  h2('Task 5: Solve for x by using the quadratic formula (two decimal places if needed)'),
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1', q: r`$3x^2+x-4=0$`, a: r`$a=3,b=1,c=-4$: $\Delta=1+48=49$. $x=\dfrac{-1\pm7}{6}$, so $x=1$ or $x=-\dfrac43$.` },
    { n: '2', q: r`$2x^2+3x+2=0$`, a: r`$\Delta=9-16=-7<0$: no real solution.` },
    { n: '3', q: r`$x^2+2x+1=0$`, a: r`$\Delta=4-4=0$: one (repeated) root, $x=\dfrac{-2}{2}=-1$.` },
    { n: '4', q: r`$4x^2+x-5=0$`, a: r`$\Delta=1+80=81$. $x=\dfrac{-1\pm9}8$, so $x=1$ or $x=-\dfrac54$.` },
    { n: '5', q: r`$-5x^2+3=14x$`, a: r`Standard form: $-5x^2-14x+3=0$, or $5x^2+14x-3=0$: $\Delta=196+60=256$. $x=\dfrac{-14\pm16}{10}$, so $x=\dfrac15$ or $x=-3$.` },
    { n: '6', q: r`$x(x-4)+2=0$`, a: r`$x^2-4x+2=0$: $\Delta=16-8=8$. $x=\dfrac{4\pm2\sqrt2}2=2\pm\sqrt2$, so $x\approx3{,}41$ or $x\approx0{,}59$.` },
    { n: '7', q: r`$6x^2+19x+10=0$`, a: r`$\Delta=361-240=121$. $x=\dfrac{-19\pm11}{12}$, so $x=-\dfrac23$ or $x=-\dfrac52$.` },
    { n: '8', q: r`$-\dfrac12x^2+2x=2$`, a: r`Multiply by $-2$: $x^2-4x+4=0$: $\Delta=16-16=0$. $x=2$ (one repeated root).` },
    { n: '9', q: r`$\dfrac13x^2-\dfrac23x-5=0$`, a: r`Multiply by $3$: $x^2-2x-15=0$: $\Delta=4+60=64$. $x=\dfrac{2\pm8}2$, so $x=5$ or $x=-3$.` },
    { n: '10', q: r`$-24x=9(x+1)(x-1)$`, a: r`$-24x=9x^2-9\Rightarrow9x^2+24x-9=0\Rightarrow3x^2+8x-3=0$: $\Delta=64+36=100$. $x=\dfrac{-8\pm10}{6}$, so $x=\dfrac13$ or $x=-3$.` },
  ]),
]);

export const QUAD_FRACTIONS = lesson('alg-u5-e-fractions', 'E. Quadratic Equations with Fractions', 25, [
  h2('The method'),
  ul([
    r`Factorise the denominators, find the LCM, multiply each term by the LCM and cancel.`,
    r`Do not forget to indicate the restrictions: the values which make the denominators zero (undefined).`,
    r`After cancelling the denominators, use any one of the methods to solve the equation.`,
  ]),
  h3('Question 1'),
  p(r`Solve for $x$: $x-1=\dfrac3{x-1}+2$`),
  solution([
    ['Restriction:', r`x\ne1`],
    ['Move to the left-hand side:', r`x-3=\dfrac3{x-1}`],
    ['Cross multiply:', r`(x-3)(x-1)=3\;\Rightarrow\;x^2-4x+3=3`],
    ['The standard form, then the common factor:', r`x^2-4x=0\;\Rightarrow\;x(x-4)=0`],
    r`\therefore\;x=0\;\text{or}\;x=4`,
  ]),
  h3('Question 2'),
  p(r`Solve for $x$: $\dfrac1{x+1}+\dfrac{2x}{x-1}=1$`),
  solution([
    ['Restriction:', r`x\ne1\;\text{and}\;x\ne-1`],
    ['Add fractions on the left: the LCM is', r`(x+1)(x-1)`],
    r`\dfrac{(x-1)+2x(x+1)}{(x-1)(x+1)}=1\;\Rightarrow\;\dfrac{x-1+2x^2+2x}{x^2-1}=1`,
    ['Cross multiply:', r`2x^2+3x-1=x^2-1`],
    ['The standard form:', r`x^2+3x=0\;\Rightarrow\;x(x+3)=0`],
    r`\therefore\;x=0\;\text{or}\;x=-3`,
  ]),
  note(r`Both answers are allowed because neither equals a restricted value ($1$ or $-1$). Always check your solutions against the restrictions.`),
]);

export const ALG_QUADRATIC_3_LESSONS: Lesson[] = [QUAD_FORMULA, QUAD_TASK_5, QUAD_FRACTIONS];
