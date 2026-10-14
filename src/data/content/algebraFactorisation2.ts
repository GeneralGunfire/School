import type { Lesson } from '../../lib/types';
import { r, h2, h3, p, ul, note, formula, solution, lesson as make } from './algKit';

/**
 * Unit 4: Factorisation, B (factorisation by common factors, grouping, difference of two squares).
 * Book pp. 71–73; photos 21–22 of the Math-Algebra folder. Question 3 of the common-factor set is
 * partly cut off at the page edge; its result is the book’s printed $-a(a+1)$.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-algebra-factorisation', id, title, minutes, blocks);

export const FACTORISING_METHODS = lesson('alg-u4-b-factorising', 'B. Factorisation: Common Factors, Grouping, Difference of Squares', 40, [
  h2('Factorisation'),
  p(r`Factorisation is a method of writing an expression with more than one term as factors. There will be only one term in the factorised form of that expression.`),
  h2('1. By common factors'),
  ul([
    r`The highest common factor of each term (HCF) is found first.`,
    r`Then we take out the common factor from each term.`,
    r`The other factors of each term are written in a common bracket.`,
  ]),
  h3('Question 1'),
  p(r`Factorise: $6x-4$`),
  solution([
    ['There are two terms, $6x$ and $-4$: $2$ is the common factor of each term. We can write $6x-4$ as $2\\cdot3x-2\\cdot2$. Take $2$ out of each term and open a bracket:', r`6x-4=2(3x-2)`],
  ]),
  h3('Question 2'),
  p(r`Factorise: $7a^2b^2-28ab^2c-35abc$`),
  solution([
    ['Rewrite each term as a product of factors:', r`7\cdot a\cdot a\cdot b\cdot b-4\cdot7\cdot a\cdot b\cdot b\cdot c-5\cdot7\cdot a\cdot b\cdot c`],
    ['The HCF of the three terms is $7ab$. Write $7ab$ outside the bracket and the other factors left from each term inside.', r`7ab(ab-4bc-5c)`],
  ]),
  h3('Question 3'),
  p(r`Factorise: $-a^2-a$`),
  solution([
    ['Rewrite as $-a\\cdot a-a$. The HCF of the terms is $-a$. Note: if any term is taken as common factor fully, inside the bracket you have to put $1$ for that term. If a $-$ sign is taken as a common factor you have to put $+$ in place of that term in the bracket after the common factor is taken out.', r`-a^2-a=-a(a+1)`],
  ]),
  h3('Question 4'),
  p(r`Factorise: $4(x-y)-8(x-y)^2$`),
  solution([
    ['Sometimes the common factor can be a binomial (two terms) like $(x-y)$ in this example. Combine the like terms:', r`4(x-y)-2\cdot4\cdot(x-y)(x-y)`],
    ['The HCF of the terms is $4(x-y)$. Write $4(x-y)$ outside (don’t open the bracket) and write the other factors left from each term inside the bracket. If there is a factor with a bracket inside, open it.', r`4(x-y)\left(1-2(x-y)\right)`],
    r`\therefore\;4(x-y)(1-2x+2y)`,
  ]),
  formula('Note that', r`x-y=-(y-x)\qquad x+y=y+x\qquad-x-y=-(x+y)\qquad(x-y)^2=(y-x)^2`),
  h3('Question 5'),
  p(r`Factorise: $2pq(a-b)-4p(b-a)$`),
  solution([
    ['In the second term, $-4p(b-a)$ should be written using $(b-a)=-(a-b)$. The second term becomes $+4p(a-b)$, i.e. $+2\\cdot2\\cdot p\\cdot(a-b)$. Rearrange the expression:', r`2\cdot p\cdot q\cdot(a-b)+2\cdot2\cdot p\cdot(a-b)`],
    ['The HCF of the terms is $2p(a-b)$.', r`\therefore\;2p(a-b)(q+2)`],
  ]),

  h2('2. By grouping'),
  ul([
    r`Group the terms by using common factors.`,
    r`After grouping the terms $2$ by $2$ or $3$ by $3\ldots$, make sure that each group has the same common factor. Otherwise regroup till you get the same common factors.`,
  ]),
  h3('Question 6'),
  p(r`Factorise: $ac+bc+ad+bd$`),
  solution([
    ['There are four terms. Even though some terms have a common factor, each term doesn’t have the same factor; the common-factor method cannot be used. Group them with suitable common factors $2$ by $2$ (first with the third and second with the fourth).', r`(ac+ad)+(bc+bd)`],
    r`a(c+d)+b(c+d)`,
    r`\therefore\;(c+d)(a+b)`,
  ]),
  h3('Question 7'),
  p(r`Factorise: (a) $ab+3b+4a+12$; (b) $x^6+x^4-4x^2-4$; (c) $x-y+xy-1$`),
  solution([
    ['(a) Group:', r`(ab+3b)+(4a+3\cdot4)=b(a+3)+4(a+3)`],
    r`\therefore\;(a+3)(b+4)`,
  ], 'Solution (a)'),
  solution([
    ['(b) $x^6=x^4\\cdot x^2$ and $-4x^2-4=-(4x^2+4)$:', r`(x^4\cdot x^2+x^4\cdot1)-(4x^2+4\cdot1)`],
    r`x^4(x^2+1)-4(x^2+1)`,
    r`\therefore\;(x^2+1)(x^4-4)`,
  ], 'Solution (b)'),
  solution([
    ['(c) Group:', r`(x-1)+(xy-y)`],
    r`1\cdot(x-1)+y(x-1)`,
    r`\therefore\;(x-1)(1+y)`,
  ], 'Solution (c)'),
  note(r`Further steps: $x^4-4=(x^2+2)(x^2-2)$, so (b) factorises completely as $(x^2+1)(x^2+2)(x^2-2)$ — an extra step the book does not show.`),

  h2('3. By differences of two squares'),
  ul([r`Take the square roots of both terms.`, r`Multiply the sum of the terms obtained by the difference of the terms.`]),
  formula('Difference of squares', r`a^2-b^2=(a+b)(a-b)`),
  h3('Question 8'),
  p(r`Factorise the following: $4x^2-9$; $9m^2-25n^2$; $x^4-1$; $25(3x-1)^2-4(2x+3)^2$; $-x^{10}+1$; $2x^2-50$; $\dfrac14x^{16}-\dfrac19y^6$`),
  solution([
    r`4x^2-9=(2x+3)(2x-3)`,
    r`9m^2-25n^2=(3m+5n)(3m-5n)`,
    ['It is factorised but not fully; $x^2-1$ can be factorised as $(x+1)(x-1)$.', r`x^4-1=(x^2+1)(x^2-1)=(x^2+1)(x+1)(x-1)`],
    ['Roots are $5(3x-1)$ and $2(2x+3)$. Open each bracket separately:', r`25(3x-1)^2-4(2x+3)^2=(15x-5+4x+6)(15x-5-4x-6)=(19x+1)(11x-11)`],
    r`-x^{10}+1=1-x^{10}=(1+x^5)(1-x^5)`,
    r`2x^2-50=2(x^2-25)=2(x+5)(x-5)`,
    r`\dfrac14x^{16}-\dfrac19y^6=\left(\dfrac12x^8+\dfrac13y^3\right)\left(\dfrac12x^8-\dfrac13y^3\right)`,
  ]),
  note(r`$(19x+1)(11x-11)$ can be written as $11(19x+1)(x-1)$.`),
]);

export const ALG_FACTORISATION_2_LESSONS: Lesson[] = [FACTORISING_METHODS];
