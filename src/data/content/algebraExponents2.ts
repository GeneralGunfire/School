import type { Lesson } from '../../lib/types';
import { r, h2, h3, p, note, formula, qs, solution, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 2: Exponents & Surds, section C (exponential expressions and equations).
 * Book pp. 34–38; photos 5–7 of the Math-Algebra folder.
 * Task 5 questions 1.4 and 1.5 are printed with missing symbols and are not included.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-exponents-surds', id, title, minutes, blocks);

export const EXP_EXPRESSIONS = lesson('alg-u2-c-expressions-equations', 'C. Exponential Expressions and Equations', 35, [
  h2('1. Addition and subtraction of exponents'),
  p(r`So far we have dealt with multiplication and division of exponential expressions. Now we study the conditions with addition and subtraction of exponential expressions.`),
  formula('Addition and subtraction', r`ma^x+na^x=(m+n)a^x\qquad ma^x-na^x=(m-n)a^x`),
  p(r`To do addition and subtraction all the terms must have the same exponential expression. So we can take it (the same base and the same power) as a common factor and then the remaining must be written inside the brackets. It is basically factorization.`),
  solution([
    r`3x^5+4x^5=7x^5`,
    ['($x^y$ is common)', r`3x^y-ax^y=(3-a)x^y`],
    r`9\cdot5^x-2\cdot5^x=7\cdot5^x`,
  ], 'Examples'),

  h2('Worked examples'),
  h3('Question 1'),
  p(r`Simplify: $\dfrac{3^{3+x}-2\cdot3^x}{2^3\cdot3^{x+1}+3^x}$`),
  note(r`The question is printed as $\dfrac{3^{3+x}}{2^3\cdot3^{x+1}+3^x}$; the working below it uses the numerator $3^{3+x}-2\cdot3^x$, which is what is solved here.`),
  solution([
    ['There are two terms in the numerator and also in the denominator. We need to use the common factor to make one term in each place.', ''],
    ['Remark:', r`3^{x+1}=3^x\cdot3^1\quad\text{and}\quad3^{3+x}=3^3\cdot3^x`],
    r`\dfrac{3^{3+x}-2\cdot3^x}{2^3\cdot3^{x+1}+3^x}=\dfrac{3^3\cdot3^x-2\cdot3^x}{2^3\cdot3^x\cdot3^1+1\cdot3^x}`,
    r`=\dfrac{(27-2)\,3^x}{(24+1)\,3^x}=\dfrac{25}{25}=1`,
  ]),
  h3('Question 2'),
  p(r`Simplify: $\dfrac{3^x-3^{x-2}}{6\cdot3^x-4\cdot3^{x-2}}$`),
  solution([
    r`\dfrac{3^x-3^{x-2}}{6\cdot3^x-4\cdot3^{x-2}}=\dfrac{3^x-3^x\cdot3^{-2}}{6\cdot3^x-4\cdot3^x\cdot3^{-2}}`,
    r`=\dfrac{3^x(1-3^{-2})}{3^x(6-4\cdot3^{-2})}`,
    r`=\dfrac{1-\frac19}{6-\frac49}=\dfrac{\frac89}{\frac{50}9}=\dfrac{8}{50}=\dfrac4{25}`,
  ]),
  h3('Question 3'),
  p(r`Simplify: $\dfrac{2^{2x}\cdot3-2^{2+2x}}{4^{x+2}-5\cdot4^x}$`),
  solution([
    ['Simplify the expressions in the bracket first.', r`\dfrac{2^{2x}\cdot3-2^{2+2x}}{4^{x+2}-5\cdot4^x}=\dfrac{2^{2x}\cdot3-2^{2x+2}}{2^{2x+4}-5\cdot2^{2x}}`],
    r`=\dfrac{2^{2x}\cdot3-2^{2x}\cdot2^2}{2^{2x}\cdot2^4-5\cdot2^{2x}}=\dfrac{2^{2x}(3-2^2)}{2^{2x}(2^4-5)}`,
    r`=\dfrac{3-4}{16-5}=-\dfrac1{11}`,
  ]),
  h3('Question 4'),
  p(r`Simplify: $\dfrac{6\cdot2^{2x+3}-2^{2x+4}}{2\cdot2^{2x+2}}$`),
  solution([
    ['Simplify the expressions in the bracket first.', r`\dfrac{6\cdot2^{2x}\cdot2^3-2^{2x}\cdot2^4}{2\cdot2^{2x}\cdot2^2}`],
    r`=\dfrac{2^{2x}(6\cdot8-16)}{2\cdot4\cdot2^{2x}}=\dfrac{6\cdot8-16}{2\cdot4}=\dfrac{32}{8}=4`,
  ]),

  h2('2. Exponential equations'),
  p(r`Organize both sides: try to write both sides in exponent form with the same bases.`),
  formula('Same base', r`\text{If }x^a=x^b\text{ then }a=b\quad(\text{as long as }x\text{ is not equal to }0\text{ or }1)`),
  h3('Question 5'),
  p(r`Solve for $x$: $4^x=\dfrac1{64}$`),
  solution([
    ['$\\frac1{64}$ can be written as a power of $2$:', r`(2^2)^x=\dfrac1{2^6}`],
    r`2^{2x}=2^{-6}`,
    r`2x=-6\;\Rightarrow\;x=-3`,
  ]),
  note(r`The book’s last two steps read “$2x=6$, $x=3$”; since $2^{-6}$ has a negative exponent, $2x=-6$ and $x=-3$ (check: $4^{-3}=\frac1{64}$).`),
  h3('Question 6'),
  p(r`Solve for $x$: $\left(\dfrac12\right)^{x-9}=4^{x+3}$`),
  solution([
    r`(2^{-1})^{x-9}=(2^2)^{x+3}`,
    r`2^{-x+9}=2^{2x+6}`,
    r`-x+9=2x+6\;\Rightarrow\;3x=3\;\Rightarrow\;x=1`,
  ]),
  note(r`Question 8 in the book repeats Question 6 word for word.`),
  h3('Question 7'),
  p(r`Solve for $x$: $8^x\cdot4^{x-2}=1$`),
  solution([
    ['Remember:', r`2^0=1`],
    r`(2^3)^x\cdot(2^2)^{x-2}=2^0`,
    r`2^{3x}\cdot2^{2x-4}=2^0\;\Rightarrow\;2^{5x-4}=2^0`,
    r`5x-4=0\;\Rightarrow\;x=\dfrac45`,
  ]),
  h3('Question 9'),
  p(r`Solve for $x$: $2x^{-\frac23}=8$`),
  solution([
    ['Divide both sides by $2$.', r`x^{-\frac23}=4`],
    ['To leave $x$ alone, we need to take the $-\\dfrac32$ power of both sides (the reciprocal of the power of $x$).', r`\left(x^{-\frac23}\right)^{-\frac32}=4^{-\frac32}`],
    r`x=(2^2)^{-\frac32}=2^{-3}=\dfrac18`,
  ]),

  h2('Task 5'),
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1.1', context: r`Simplify the following expressions.`, q: r`$5^{x+2}-5^{x+1}$`, a: r`$5^{x+1}(5-1)=4\cdot5^{x+1}$` },
    { n: '1.2', context: r`Same.`, q: r`$\dfrac{2^{3+x}+2\cdot2^x}{2^x}$`, a: r`$\dfrac{2^x(8+2)}{2^x}=10$` },
    { n: '1.3', context: r`Same.`, q: r`$\dfrac{2\cdot7^{2x}+7^{2x+1}}{7^{2x}}$`, a: r`$\dfrac{7^{2x}(2+7)}{7^{2x}}=9$` },
    { n: '2.1', context: r`Solve for $x$.`, q: r`$3^x=27$`, a: r`$3^x=3^3\Rightarrow x=3$` },
    { n: '2.2', context: r`Same.`, q: r`$4^x=8$`, a: r`$2^{2x}=2^3\Rightarrow2x=3\Rightarrow x=\dfrac32$` },
    { n: '2.3', context: r`Same.`, q: r`$5^{x+1}\cdot125^x=1$`, a: r`$5^{x+1}\cdot5^{3x}=5^0\Rightarrow4x+1=0\Rightarrow x=-\dfrac14$` },
    { n: '2.4', context: r`Same.`, q: r`$2^x+2^{x+1}=6$`, a: r`$2^x(1+2)=6\Rightarrow2^x=2\Rightarrow x=1$` },
    { n: '2.5', context: r`Same.`, q: r`$27^{x-1}=81$`, a: r`$3^{3x-3}=3^4\Rightarrow3x=7\Rightarrow x=\dfrac73$` },
    { n: '2.6', context: r`Same.`, q: r`$5\cdot2^{-x+1}=40$`, a: r`$2^{-x+1}=8=2^3\Rightarrow-x+1=3\Rightarrow x=-2$` },
    { n: '2.7', context: r`Same.`, q: r`$3^x-3^{x+2}=-24$`, a: r`$3^x(1-9)=-24\Rightarrow3^x=3\Rightarrow x=1$` },
  ]),
]);

export const ALG_EXP_2_LESSONS: Lesson[] = [EXP_EXPRESSIONS];
