import type { Lesson } from '../../lib/types';
import { r, h2, h3, p, ul, note, solution, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 4: Factorisation, E (addition and subtraction of rational expressions) and its task.
 * Book pp. 88–90; photos 29–30 of the Math-Algebra folder. Question 3 of the examples is
 * corrected: the book cancels a factor that is not common.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-algebra-factorisation', id, title, minutes, blocks);

export const RATIONAL_ADD = lesson('alg-u4-e-rational-add', 'E. Adding and Subtracting Rational Expressions', 35, [
  h2('Procedure'),
  ul([
    r`Factorise the denominators if possible.`,
    r`Find the LCM of the denominators.`,
    r`After making the denominators the same by using the LCM, combine the terms under the same denominator and carry on simplifying.`,
  ]),
  h3('Question 1'),
  p(r`Simplify: $\dfrac{x-1}{x+2}+\dfrac{x+1}{2x+4}$`),
  solution([
    ['Step 1: Factorise the denominators and find the LCM.', r`\dfrac{x-1}{x+2}+\dfrac{x+1}{2(x+2)}\qquad\text{LCM}=2(x+2)`],
    ['Step 2: Multiply the first term by $2$:', r`\dfrac{2(x-1)+x+1}{2(x+2)}=\dfrac{2x-2+x+1}{2(x+2)}`],
    r`=\dfrac{3x-1}{2(x+2)}`,
  ]),
  h3('Question 2'),
  p(r`Simplify: $\dfrac2{x-2}+\dfrac3{2-x}+\dfrac1{x+3}$`),
  solution([
    ['Remember $2-x=-(x-2)$.', r`\dfrac2{x-2}+\dfrac3{2-x}+\dfrac1{x+3}=\dfrac{-1}{x-2}+\dfrac1{x+3}`],
    ['LCM:', r`(x-2)(x+3)`],
    r`=\dfrac{-(x+3)+(x-2)}{(x-2)(x+3)}=\dfrac{-x-3+x-2}{(x-2)(x+3)}=\dfrac{-5}{(x-2)(x+3)}`,
  ]),
  h3('Question 3'),
  p(r`Simplify: $\dfrac{x}{x^2+3x+2}+\dfrac{x}{x^2-4}$`),
  solution([
    ['Factorise the denominators:', r`\dfrac{x}{(x+2)(x+1)}+\dfrac{x}{(x+2)(x-2)}`],
    ['LCM:', r`(x+1)(x+2)(x-2)`],
    r`=\dfrac{x(x-2)+x(x+1)}{(x+1)(x+2)(x-2)}=\dfrac{x^2-2x+x^2+x}{(x+1)(x+2)(x-2)}=\dfrac{2x^2-x}{(x+1)(x+2)(x-2)}`,
    r`=\dfrac{x(2x-1)}{(x+1)(x+2)(x-2)}`,
  ]),
  note(r`The book cancels “$(x-2)$” from $x(2x-1)$ and prints $\dfrac{x}{(x+1)(x+2)}$. $2x-1$ is not $x-2$, so no factor cancels: the answer is $\dfrac{x(2x-1)}{(x+1)(x+2)(x-2)}$ (check with $x=3$: both sides give $\dfrac{15}{60}=\dfrac14$).`),
  h3('Question 4'),
  p(r`Simplify: $\dfrac2{x+2}+\dfrac4{x-3}-\dfrac5{x+4}$`),
  solution([
    ['LCM:', r`(x+2)(x-3)(x+4)`],
    r`=\dfrac{2(x-3)(x+4)+4(x+2)(x+4)-5(x-3)(x+2)}{(x+2)(x-3)(x+4)}`,
    r`=\dfrac{2(x^2+x-12)+4(x^2+6x+8)-5(x^2-x-6)}{(x+2)(x-3)(x+4)}`,
    r`=\dfrac{2x^2+2x-24+4x^2+24x+32-5x^2+5x+30}{(x+2)(x-3)(x+4)}`,
    r`=\dfrac{x^2+31x+38}{(x+2)(x-3)(x+4)}`,
  ]),

  h2('Task'),
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1', context: r`Simplify the following expressions.`, q: r`$dfrac1{3x^2}+dfrac2{6x}-dfrac3x$`, a: r`$dfrac2{6x}=dfrac1{3x}$. LCM $=3x^2$: $dfrac{1+x-9x}{3x^2}=dfrac{1-8x}{3x^2}$` },
    { n: '2', context: r`Same.`, q: r`$\dfrac x{x-3}+\dfrac3{x+5}$`, a: r`$\dfrac{x(x+5)+3(x-3)}{(x-3)(x+5)}=\dfrac{x^2+8x-9}{(x-3)(x+5)}=\dfrac{(x+9)(x-1)}{(x-3)(x+5)}$` },
    { n: '3', context: r`Same.`, q: r`$1+\dfrac1{x+1}+\dfrac2x$`, a: r`LCM $=x(x+1)$: $\dfrac{x(x+1)+x+2(x+1)}{x(x+1)}=\dfrac{x^2+4x+2}{x(x+1)}$` },
    { n: '4', context: r`Same.`, q: r`$\dfrac1{x^2+x}-\dfrac1{x^2-x}+\dfrac1{x^2-1}$`, a: r`Denominators $x(x+1)$, $x(x-1)$, $(x-1)(x+1)$; LCM $=x(x+1)(x-1)$: $\dfrac{(x-1)-(x+1)+x}{x(x+1)(x-1)}=\dfrac{x-2}{x(x+1)(x-1)}$` },
    { n: '5', context: r`Same.`, q: r`$dfrac x{x^2-9}+dfrac x{3-x}+dfrac3x$`, a: r`Write $dfrac x{3-x}=-dfrac x{x-3}$; LCM $=x(x+3)(x-3)$: $dfrac{xcdot x-xcdot x(x+3)+3(x^2-9)}{x(x+3)(x-3)}=dfrac{x^2-x^3-3x^2+3x^2-27}{x(x+3)(x-3)}=dfrac{-x^3+x^2-27}{x(x+3)(x-3)}$` },
    { n: '6', context: r`Same.`, q: r`$dfrac{x+3}{x-5}+dfrac{-x-1}{x^2-7x+10}-dfrac1{x-2}$`, a: r`$x^2-7x+10=(x-5)(x-2)$; LCM $=(x-5)(x-2)$: $dfrac{(x+3)(x-2)-x-1-(x-5)}{(x-5)(x-2)}=dfrac{x^2+x-6-x-1-x+5}{(x-5)(x-2)}=dfrac{x^2-x-2}{(x-5)(x-2)}=dfrac{(x-2)(x+1)}{(x-5)(x-2)}=dfrac{x+1}{x-5}$` },
  ]),
]);

export const ALG_FACTORISATION_6_LESSONS: Lesson[] = [RATIONAL_ADD];
