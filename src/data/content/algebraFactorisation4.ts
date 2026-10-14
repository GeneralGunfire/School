import type { Lesson } from '../../lib/types';
import { r, h2, h3, p, ul, note, solution, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 4: Factorisation, C (trinomials). Remaining examples of type 1, type 2 (criss-cross and
 * magic-X) and Task 4. Book pp. 79–84; photos 25–27 of the Math-Algebra folder.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-algebra-factorisation', id, title, minutes, blocks);

export const TRINOMIALS_2 = lesson('alg-u4-c-trinomials-2', 'C. Factorising Trinomials (Types 1 and 2)', 40, [
  h2('Type 1 (continued)'),
  h3('Question 3'),
  p(r`Factorise: $x^2-3x-40$`),
  solution([r`x^2-3x-40=(x+5)(x-8)`, ['(factors of $-40$ with sum $-3$: $5$ and $-8$)', '']]),
  h3('Question 4'),
  p(r`Factorise: $x^2-x-2$`),
  solution([r`x^2-1x-2=(x+1)(x-2)`]),
  h3('Question 5'),
  p(r`Factorise: $6x-27+x^2$`),
  solution([
    ['Write the trinomial in the standard form:', r`x^2+6x-27=(x+9)(x-3)`],
  ]),
  h3('Question 6'),
  p(r`Factorise: $6x^2+24x-30$`),
  solution([
    ['Write the trinomial in the standard form (take out the common factor $6$ first):', r`6(x^2+4x-5)=6(x+5)(x-1)`],
  ]),
  h3('Question 7'),
  p(r`Factorise: $-x^2+x+12$`),
  solution([
    ['Take $-1$ as common factor to make the number in front of $x^2$ positive.', r`-(x^2-x-12)=-(x+3)(x-4)`],
  ]),

  h2('Type 2: $ax^2+bx+c$'),
  p(r`If the leading coefficient of a polynomial is $1$ (the number in front of $x^2$) it is very easy to factorise that trinomial. When the leading coefficient is not $1$ we use one of two methods.`),
  ul([
    r`Criss-cross method: find two factors of $ax^2$ and two factors of $c$. When “cross-multiplied”, the results MUST add up to $bx$.`,
    r`Magic X method (diamond): multiply $a$ and $c$. Find its factors which add up to $b$. Divide each of these factors by $a$.`,
  ]),
  h3('Question 8'),
  p(r`Factorise: $3x^2+10x+3$`),
  solution([
    r`3x^2+10x+3=(3x+1)(x+3)`,
    ['Criss-cross: $3x$ with $1$ and $x$ with $3$ gives', r`3x\cdot3+x\cdot1=9x+x=10x`],
    ['Magic X: $3$ times $3$ is $9$. Factors of $9$ which add up to $10$ are $1$ and $9$. Divide each one by $3$ and get $\\frac13$ and $\\frac93$. The brackets can be written', r`\left(x+\tfrac13\right)(x+3)\;\text{and fixed to}\;(3x+1)(x+3)`],
  ]),
  h3('Question 9'),
  p(r`Factorise: $2x^2+13x+21$`),
  solution([
    r`2x^2+13x+21=(2x+7)(x+3)`,
    ['Criss-cross: $2x$ with $7$ and $x$ with $3$ gives', r`2x\cdot3+x\cdot7=6x+7x=13x`],
    ['Magic X: $2$ times $21$ is $42$. Factors of $42$ that add up to $13$ are $6$ and $7$. Divide each by $2$ and get $\\frac62$ and $\\frac72$. The brackets can be written', r`(x+3)\left(x+\tfrac72\right)\;\text{and fixed to}\;(x+3)(2x+7)`],
  ]),
  h3('Question 10'),
  p(r`Factorise: $4x^2-7x-2$`),
  solution([
    r`4x^2-7x-2=(4x+1)(x-2)`,
    ['Criss-cross:', r`4x\cdot(-2)+x\cdot1=-8x+x=-7x`],
    ['Magic X: $4$ times $-2$ is $-8$. Factors of $-8$ that add up to $-7$ are $1$ and $-8$. Divide each one by $4$ and get $\\frac14$ and $-\\frac84$. The brackets can be written', r`\left(x+\tfrac14\right)(x-2)\;\text{and fixed to}\;(4x+1)(x-2)`],
  ]),
  h3('Question 11'),
  p(r`Factorise: $10x-7-3x^2$`),
  solution([
    ['Write the trinomial in the standard form and take out the $-1$ common factor.', r`-3x^2+10x-7=-(3x^2-10x+7)`],
    r`=-(3x-7)(x-1)`,
    ['Check with the criss-cross: $3x$ with $-7$ and $x$ with $-1$:', r`3x\cdot(-1)+x\cdot(-7)=-3x-7x=-10x`],
  ]),
  note(r`The book prints the middle line as “$-(3x^2+10x+7)=-(3x-7)(x-1)$”; the sign of the middle term is $-10x$, as in the line above it.`),
  h3('Question 12'),
  p(r`Factorise: $4x^3-5x^2+x$`),
  solution([
    ['Take out $x$ as common factor.', r`x(4x^2-5x+1)`],
    r`=x(4x-1)(x-1)`,
    ['Criss-cross: $4x$ with $-1$ and $x$ with $-1$:', r`4x\cdot(-1)+x\cdot(-1)=-4x-x=-5x`],
  ]),
  h3('Question 13'),
  p(r`Factorise: $2(x-y)^2-5(x-y)+3$`),
  solution([
    ['This is still a trinomial, but instead of $x$ we have $(x-y)$.', r`2(x-y)^2-5(x-y)+3`],
    ['Criss-cross: $2(x-y)$ with $-3$ and $(x-y)$ with $-1$:', r`=\left(2(x-y)-3\right)\left((x-y)-1\right)`],
    r`=(2x-2y-3)(x-y-1)`,
  ]),
  h3('Question 14'),
  p(r`Factorise: $x^4+12x^2+32$`),
  solution([
    ['Treat $x^2$ as the variable (factors of $32$ that add up to $12$ are $4$ and $8$).', r`x^4+12x^2+32=(x^2+8)(x^2+4)`],
  ]),
  h3('Question 15'),
  p(r`Factorise: $x^{2y}-5x^y-24$`),
  solution([
    ['Treat $x^y$ as the variable (factors of $-24$ that add up to $-5$ are $-8$ and $3$).', r`x^{2y}-5x^y-24=(x^y-8)(x^y+3)`],
  ]),

  h2('Task 4'),
  ALG_ANSWERS_NOTE,
  note(r`The handwritten workings in the photo for questions 10, 11 and 13 contain mistakes (for example $(3y+8)(y+8)$ for $3y^2+20y-32$). The answers below are checked by expanding.`),
  qs([
    { n: '1', context: r`Factorise the following expressions.`, q: r`$x^2+7x+12$`, a: r`$(x+3)(x+4)$` },
    { n: '2', context: r`Same.`, q: r`$x^2+x-20$`, a: r`$(x+5)(x-4)$` },
    { n: '3', context: r`Same.`, q: r`$x^2+15x+14$`, a: r`$(x+1)(x+14)$` },
    { n: '4', context: r`Same.`, q: r`$x^2-8x+12$`, a: r`$(x-2)(x-6)$` },
    { n: '5', context: r`Same.`, q: r`$x^2-14x+48$`, a: r`$(x-6)(x-8)$` },
    { n: '6', context: r`Same.`, q: r`$-x^2+7x-10$`, a: r`$-(x^2-7x+10)=-(x-2)(x-5)$` },
    { n: '7', context: r`Same.`, q: r`$11x-12+x^2$`, a: r`$x^2+11x-12=(x+12)(x-1)$` },
    { n: '8', context: r`Same.`, q: r`$2x^2-18x+40$`, a: r`$2(x^2-9x+20)=2(x-4)(x-5)$` },
    { n: '9', context: r`Same.`, q: r`$22x^2+13x+1$`, a: r`$(11x+1)(2x+1)$ ($22\cdot1=22$; factors $2$ and $11$ add to $13$)` },
    { n: '10', context: r`Same.`, q: r`$5x^2+28x+15$`, a: r`$(5x+3)(x+5)$` },
    { n: '11', context: r`Same.`, q: r`$3y^2+20y-32$`, a: r`$(3y-4)(y+8)$ ($3\cdot(-32)=-96$; factors $-4$ and $24$ add to $20$)` },
    { n: '12', context: r`Same.`, q: r`$4x^2-4x+1$`, a: r`$(2x-1)^2$` },
    { n: '13', context: r`Same.`, q: r`$2a^2-a-1$`, a: r`$(2a+1)(a-1)$` },
    { n: '14', context: r`Same.`, q: r`$6x^2+5x-6$`, a: r`$(3x-2)(2x+3)$` },
    { n: '15', context: r`Same.`, q: r`$45-3b-18b^2$`, a: r`$-3(6b^2+b-15)=-3(3b+5)(2b-3)$` },
  ]),
]);

export const ALG_FACTORISATION_4_LESSONS: Lesson[] = [TRINOMIALS_2];
