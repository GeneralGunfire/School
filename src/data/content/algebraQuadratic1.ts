import type { Lesson } from '../../lib/types';
import { r, h2, h3, p, ul, note, solution, lesson as make } from './algKit';

/**
 * Unit 5: Quadratic Equations, A (solving by factorisation) and B (square roots of both sides).
 * Book pp. 91–95; photos 30–32 of the Math-Algebra folder.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-quadratic-equations', id, title, minutes, blocks);

export const QUAD_FACTORISATION = lesson('alg-u5-a-factorisation', 'A. Solving Quadratic Equations by Factorisation', 35, [
  h2('The method'),
  ul([
    r`Write the equation in the form $ax^2+bx+c=0$ (standard form).`,
    r`Use one of the methods to factorise the equation.`,
    r`Write the answers: set each factor equal to zero.`,
  ]),
  note(r`This works because if two numbers multiply to give $0$, at least one of them must be $0$ (the zero-product rule).`),
  h3('Question 1'),
  p(r`Solve for $x$: $(3x-4)(x+5)=0$`),
  solution([
    ['The equation is already factorised. Either $3x-4$ is zero or $x+5$ is zero.', r`3x-4=0\quad\text{or}\quad x+5=0`],
    r`3x=4\quad\text{or}\quad x=-5`,
    r`\therefore\;x=\dfrac43\;\text{or}\;x=-5`,
  ]),
  h3('Question 2'),
  p(r`Solve for $x$: $x^2-4x=5$`),
  solution([
    ['Write the equation in standard form:', r`x^2-4x-5=0`],
    ['Factorise the trinomial (two numbers with product $-5$ and sum $-4$ are $-5$ and $+1$):', r`(x-5)(x+1)=0`],
    r`x-5=0\;\text{or}\;x+1=0\;\Rightarrow\;x=5\;\text{or}\;x=-1`,
  ]),
  h3('Question 3'),
  p(r`Solve for $x$: $5x+6x^2=4$`),
  solution([
    ['Write the equation in the form $ax^2+bx+c=0$:', r`6x^2+5x-4=0`],
    ['Factorise the trinomial:', r`(2x-1)(3x+4)=0`],
    r`2x-1=0\;\text{or}\;3x+4=0\;\Rightarrow\;x=\dfrac12\;\text{or}\;x=-\dfrac43`,
  ]),
  h3('Question 4'),
  p(r`Solve for $x$: $x(x-7)=-12$`),
  solution([
    ['Open the bracket:', r`x^2-7x=-12`],
    ['Write the equation in the form $ax^2+bx+c=0$:', r`x^2-7x+12=0`],
    r`(x-3)(x-4)=0`,
    r`\therefore\;x=3\;\text{or}\;x=4`,
  ]),
  h3('Question 5'),
  p(r`Solve for $x$: $-\dfrac12x^2+\dfrac13x=0$`),
  solution([
    ['Multiply each term by $-1$ to make the coefficient of the leading term positive. Then multiply each term by $6$ (the LCM of $2$ and $3$) to get rid of the denominators:', r`-6\left(-\dfrac12x^2\right)+(-6)\dfrac13x=(-6)\cdot0`],
    ['We get', r`3x^2-2x=0`],
    ['The constant term is zero ($c=0$): factorise the binomial by using the common factor $x$.', r`x(3x-2)=0`],
    r`x=0\;\text{or}\;3x-2=0\;\therefore\;x=0\;\text{or}\;x=\dfrac23`,
  ]),
  h3('Question 6'),
  p(r`Solve for $x$: $3x^2=12$`),
  solution([
    r`x^2=4`,
    ['Standard form:', r`x^2-4=0`],
    ['Factorise by difference of two squares, $a^2-b^2=(a+b)(a-b)$:', r`(x+2)(x-2)=0`],
    r`\therefore\;x=-2\;\text{or}\;x=2`,
  ]),
  note(r`In the book’s final line for Question 6 the first answer is printed as $x=-3$; from $x+2=0$ it is $x=-2$.`),
  h3('Question 7'),
  p(r`Solve for $x$: $-x^2+\dfrac94=0$`),
  solution([
    ['Multiply by $-1$ and then by $4$ (the LCM) to remove the denominator:', r`4x^2-9=0`],
    ['Use the difference of two squares:', r`(2x+3)(2x-3)=0`],
    r`\therefore\;x=-\dfrac32\;\text{or}\;x=\dfrac32`,
    ['Or multiply each term by $-1$ only:', r`x^2-\dfrac94=0\;\Rightarrow\;\left(x+\dfrac32\right)\left(x-\dfrac32\right)=0`],
  ]),
  h3('Question 8'),
  p(r`Solve for $x$: $(3x-2)^2=16$`),
  solution([
    ['Open the perfect square first, using $(a-b)^2=a^2-2ab+b^2$:', r`(3x-2)^2=9x^2-12x+4=16`],
    ['Write the equation in the form $ax^2+bx+c=0$:', r`9x^2-12x-12=0`],
    ['Divide each term by $3$:', r`3x^2-4x-4=0`],
    ['Factorise the trinomial (criss-cross: $3x$ with $+2$ and $x$ with $-2$; $-6x+2x=-4x$ ✔):', r`(3x+2)(x-2)=0`],
    r`\therefore\;x=-\dfrac23\;\text{or}\;x=2`,
  ]),
  note(r`The book prints the factors as “$(3x+2)(2-2)$” and “$9x^2-12-12$”; they should read $(3x+2)(x-2)$ and $9x^2-12x-12$, as above. A shorter way is in the next lesson: take the square root of both sides, $3x-2=\pm4$.`),
  h3('Question 9'),
  p(r`Solve for $x$: $x^2+9=0$`),
  solution([
    r`x^2=-9`,
    ['The square of a real number cannot be negative, so there is no real solution.', ''],
  ]),
]);

export const QUAD_SQUARE_ROOT = lesson('alg-u5-b-square-root', 'B. Solving by Taking the Square Root of Both Sides', 25, [
  h2('The method'),
  ul([
    r`Make sure the unknown you will find is inside a perfect square, e.g. $(4x-2)^2-9=0$.`,
    r`Leave the term with the perfect square alone by sending the other terms to the other side, e.g. $(4x-2)^2=9$.`,
    r`Use the rule: take the square root of both sides.`,
  ]),
  { type: 'math', label: 'Square-root rule', text: r`\text{If }a^2=k\text{ then }a=\pm\sqrt k` },
  h3('Question 1'),
  p(r`Solve for $x$: $x^2-16=0$`),
  solution([
    ['$x^2$ is a perfect square. Leave it alone:', r`x^2=16`],
    r`x=\pm\sqrt{16}\;\therefore\;x=4\;\text{or}\;x=-4`,
  ]),
  h3('Question 2'),
  p(r`Solve for $x$: $4x^2-12=0$`),
  solution([
    ['Divide each term by $4$:', r`x^2-3=0\;\Rightarrow\;x^2=3`],
    r`x=\pm\sqrt3\;\therefore\;x=\sqrt3\approx1{,}73\;\text{or}\;x=-\sqrt3\approx-1{,}73`,
  ]),
  h3('Question 3'),
  p(r`Solve for $x$: $6x^2+12=0$`),
  solution([
    r`6x^2=-12`,
    ['Divide both sides by $6$:', r`x^2=-2`],
    ['There is no real solution, because a perfect square of any real number cannot be negative.', ''],
  ]),
  h3('Question 4'),
  p(r`Solve for $x$: $-\dfrac12(x-2)^2+8=0$`),
  solution([
    ['Leave the term with the perfect square alone:', r`-\dfrac12(x-2)^2=-8`],
    ['Then leave the perfect square $(x-2)^2$ alone: multiply both sides by $-2$:', r`(x-2)^2=16`],
    ['Take the square root of both sides:', r`x-2=\pm\sqrt{16}`],
    r`x-2=4\;\text{or}\;x-2=-4\;\therefore\;x=6\;\text{or}\;x=-2`,
  ]),
  h3('Question 5'),
  p(r`Solve for $x$: $-\dfrac23x^2+6=0$`),
  solution([
    ['Multiply each term by $-3$:', r`2x^2-18=0`],
    ['Leave the term with the perfect square alone:', r`2x^2=18`],
    ['Divide both sides by $2$:', r`x^2=9`],
    r`x=\pm\sqrt9\;\therefore\;x=3\;\text{or}\;x=-3`,
  ]),
  h3('Question 8 revisited'),
  p(r`The equation $(3x-2)^2=16$ from the previous lesson can be solved much faster this way.`),
  solution([
    r`3x-2=\pm4`,
    r`3x-2=4\;\Rightarrow\;x=2\qquad\text{or}\qquad3x-2=-4\;\Rightarrow\;x=-\dfrac23`,
  ]),
]);

export const ALG_QUADRATIC_1_LESSONS: Lesson[] = [QUAD_FACTORISATION, QUAD_SQUARE_ROOT];
