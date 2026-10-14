import type { Lesson } from '../../lib/types';
import { r, h2, h3, p, ul, solution, lesson as make } from './algKit';

/**
 * Unit 4: Factorisation, D (multiplication and division of rational expressions).
 * Book pp. 85–87; photos 27–28 of the Math-Algebra folder. The Task that follows is on the next page.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-algebra-factorisation', id, title, minutes, blocks);

const step1 = 'Step 1: Factorise both the numerator and the denominator with a suitable method.';

export const RATIONAL_EXPRESSIONS = lesson('alg-u4-d-rational', 'D. Multiplying and Dividing Rational Expressions', 30, [
  h2('Rational expressions'),
  p(r`A rational expression can be written in its simplest form when the numerator and the denominator of that fraction have no common factor other than $1$. In order to write a rational expression in its simplest form we use the following procedure:`),
  ul([
    r`Factorise both the numerator and the denominator completely.`,
    r`Cancel out any common factors.`,
    r`If there is division, convert the division to multiplication and swap the numerator and denominator. Factorise and cancel out the same factors.`,
  ]),
  h3('Question 1'),
  p(r`Simplify: $\dfrac{a^2x-ax^2}{a-x}$`),
  solution([
    [step1, r`\dfrac{a^2x-ax^2}{a-x}=\dfrac{ax(a-x)}{a-x}`],
    ['Step 2: Cancel out the same factors.', r`=ax`],
  ]),
  h3('Question 2'),
  p(r`Simplify: $\dfrac{a^2-2ab}{2b^2-ab}$`),
  solution([
    [step1, r`\dfrac{a(a-2b)}{b(2b-a)}=\dfrac{-a(2b-a)}{b(2b-a)}`],
    ['Step 2: Cancel out the same factors.', r`=\dfrac{-a}{b}`],
  ]),
  h3('Question 3'),
  p(r`Simplify: $\dfrac{x^2-2xy+y^2}{x^2-xy}$`),
  solution([
    [step1, r`\dfrac{(x-y)(x-y)}{x(x-y)}`],
    ['Step 2: Cancel out the same factors.', r`=\dfrac{x-y}{x}`],
  ]),
  h3('Question 4'),
  p(r`Simplify: $\dfrac{x^2-3x-4}{x^2+x}\cdot\dfrac{x^2}{x-4}$`),
  solution([
    [step1, r`\dfrac{(x-4)(x+1)}{x(x+1)}\cdot\dfrac{x\cdot x}{x-4}`],
    ['Step 2: Cancel out the same factors.', r`=x`],
  ]),
  h3('Question 5'),
  p(r`Simplify: $\dfrac{3ax^2-6a^2x}{2ax^3-8a^3x}$`),
  solution([
    [step1, r`\dfrac{3ax(x-2a)}{2ax(x^2-4a^2)}=\dfrac{3ax(x-2a)}{2ax(x+2a)(x-2a)}`],
    ['Step 2: Cancel out the same factors.', r`=\dfrac{3}{2(x+2a)}`],
  ]),
  h3('Question 6'),
  p(r`Simplify: $\dfrac{(x-1)^2-4}{x-3}$`),
  solution([
    [step1, r`\dfrac{(x-1+2)(x-1-2)}{x-3}=\dfrac{(x+1)(x-3)}{x-3}`],
    ['Step 2: Cancel out the same factors.', r`=x+1`],
  ]),
  p(r`The book writes the factors in the middle line as $(x-1)(x-3)$; the difference of squares $(x-1)^2-2^2$ gives $(x+1)(x-3)$, so the simplified result is $x+1$ (the book’s printed “$x-1$” is a slip).`),
  h3('Question 7'),
  p(r`Simplify: $\dfrac{x^2-3x+2}{x^2+2x-3}\cdot\dfrac{2x^2+6x}{3x-6}$`),
  solution([
    [step1, r`\dfrac{(x-1)(x-2)}{(x+3)(x-1)}\cdot\dfrac{2x(x+3)}{3(x-2)}`],
    ['Step 2: Cancel out the same factors.', r`=\dfrac{2x}{3}`],
  ]),
  h3('Question 8'),
  p(r`Simplify: $\dfrac{x^4+x}{x^2-x+1}\div\dfrac{x^2-1}{4x-4}$`),
  solution([
    [step1 + ' (invert the second fraction).', r`\dfrac{x^4+x}{x^2-x+1}\times\dfrac{4x-4}{x^2-1}=\dfrac{x(x^3+1)}{x^2-x+1}\times\dfrac{4(x-1)}{(x-1)(x+1)}`],
    ['Use $x^3+1=(x+1)(x^2-x+1)$:', r`=\dfrac{x(x+1)(x^2-x+1)}{x^2-x+1}\times\dfrac{4(x-1)}{(x-1)(x+1)}`],
    ['Step 2: Cancel out the same factors. The answer is simple, nice and cute.', r`=4x`],
  ]),
  h3('Question 9'),
  p(r`Simplify: $\dfrac{2x^2-x-1}{x^2-9}\div\dfrac{4x^2-1}{2x^2+x-1}\cdot\dfrac{x^2+5x+6}{x^2-x-2}$`),
  solution([
    ['Step 1: Change the division to multiplication by inverting numerator with the denominator. Factorise both the numerator and the denominator with a suitable method.', r`\dfrac{(x-1)(2x+1)}{(x+3)(x-3)}\cdot\dfrac{(x+1)(2x-1)}{(2x+1)(2x-1)}\cdot\dfrac{(x+3)(x+2)}{(x-2)(x+1)}`],
    ['Step 2: Cancel out the same factors.', r`=\dfrac{(x-1)(x+2)}{(x-3)(x-2)}`],
  ]),
  h3('Question 10'),
  p(r`Simplify: $\dfrac{x^2+x}{x-3}\div\dfrac{x^3+x^2}{x-3}$`),
  solution([
    [step1 + ' (invert the second fraction).', r`\dfrac{x(x+1)}{x-3}\cdot\dfrac{x-3}{x^2(x+1)}`],
    ['Step 2: Cancel out the same factors.', r`=\dfrac1x`],
  ]),
]);

export const ALG_FACTORISATION_5_LESSONS: Lesson[] = [RATIONAL_EXPRESSIONS];
