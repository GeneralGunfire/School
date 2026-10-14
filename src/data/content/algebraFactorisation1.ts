import type { Lesson } from '../../lib/types';
import { r, h2, h3, p, formula, qs, solution, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 4: Factorisation, A (products of factors). Book pp. 68–70; photos 19–20 of the Math-Algebra
 * folder. The Task 1 header says not to solve for x: these are products to expand.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-algebra-factorisation', id, title, minutes, blocks);

export const PRODUCTS = lesson('alg-u4-a-products', 'A. Products of Factors', 30, [
  h2('Multiplying binomials'),
  p(r`The identity $a(b+c)=ab+ac$ is used to express the product of two binomials. Let us multiply $(3x-5y)(2x+y)$ using the FOIL method (First, Outer, Inner, Last):`),
  solution([
    r`(3x-5y)(2x+y)=6x^2+3xy-10xy-5y^2`,
    ['Combine the like terms:', r`=6x^2-7xy-5y^2`],
  ]),
  h3('Question 1'),
  p(r`Find the product: $(2x^2-3)(5x^2+1)$`),
  solution([
    r`(2x^2-3)(5x^2+1)=10x^4+2x^2-15x^2-3`,
    ['Combine the like terms:', r`10x^4-13x^2-3`],
  ]),
  h3('Question 2'),
  p(r`Find the product: $(3x+4y)^2$`),
  solution([
    r`(3x+4y)(3x+4y)=9x^2+12xy+12xy+16y^2`,
    ['Combine the like terms:', r`9x^2+24xy+16y^2`],
  ]),
  p(r`The book prints the last term as $12y^2$; $4y\cdot4y=16y^2$, as above.`),
  h3('Question 3'),
  p(r`Find the product: $(3x-1)(2x-4y+2)$`),
  solution([
    r`(3x-1)(2x-4y+2)=6x^2-12xy+6x-2x+4y-2`,
    ['Combine the like terms:', r`6x^2-12xy+4x+4y-2`],
  ]),
  h3('Question 4'),
  p(r`Find the product: $\left(\dfrac13a-\dfrac12b\right)\left(\dfrac12a-\dfrac13b\right)$`),
  solution([
    ['Remember $\\frac13a=\\frac13\\cdot\\frac a1=\\frac a3$.', r`\left(\dfrac a3-\dfrac b2\right)\left(\dfrac a2-\dfrac b3\right)`],
    r`=\dfrac{a^2}6-\dfrac{ab}9-\dfrac{ab}4+\dfrac{b^2}6`,
    r`=\dfrac{a^2}6-\dfrac{13ab}{36}+\dfrac{b^2}6`,
  ]),
  h3('Question 5'),
  p(r`Find the product: $(3x-1)(2x+1)(3-x)$`),
  solution([
    ['Multiply any two factors then the product by the third one.', r`(3x-1)\left[(2x+1)(3-x)\right]`],
    r`=(3x-1)(6x-2x^2+3-x)`,
    r`=(3x-1)(-2x^2+5x+3)`,
    r`=-6x^3+15x^2+9x+2x^2-5x-3`,
    r`=-6x^3+17x^2+4x-3`,
  ]),

  h2('Useful identities'),
  formula('Square of a sum', r`(a+b)^2=a^2+2ab+b^2`),
  formula('Square of a difference', r`(a-b)^2=a^2-2ab+b^2`),
  formula('Difference of squares', r`(a+b)(a-b)=a^2-b^2`),
  solution([
    r`(5x+3)^2=25x^2+30x+9`,
    r`(1-y)^2=1-2y+y^2`,
    r`(-x-4)^2=x^2+8x+16`,
    r`\left(\dfrac13a-\dfrac12b\right)\left(\dfrac13a+\dfrac12b\right)=\dfrac19a^2-\dfrac14b^2`,
    ['(middle term $2\\cdot x\\cdot\\frac1x=2$)', r`\left(x+\dfrac1x\right)^2=x^2+2+\dfrac1{x^2}`],
    r`(3x+2)(3x-2)=9x^2-4`,
  ], 'For example'),

  h2('Task 1'),
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1', context: r`Find the following products.`, q: r`$-2x(x+5y)$`, a: r`$-2x^2-10xy$` },
    { n: '2', context: r`Same.`, q: r`$(3-5x)(2x-1)$`, a: r`$6x-3-10x^2+5x=-10x^2+11x-3$` },
    { n: '3', context: r`Same.`, q: r`$(-a-5b)(2a+b)$`, a: r`$-2a^2-ab-10ab-5b^2=-2a^2-11ab-5b^2$` },
    { n: '4', context: r`Same.`, q: r`$(4x-2)(x-6y+1)$`, a: r`$4x^2-24xy+4x-2x+12y-2=4x^2-24xy+2x+12y-2$` },
    { n: '5', context: r`Same.`, q: r`$(4x^4-1)(-x^4+3)$`, a: r`$-4x^8+12x^4+x^4-3=-4x^8+13x^4-3$` },
    { n: '6', context: r`Same.`, q: r`$\left(\dfrac15a-\dfrac14b\right)\left(\dfrac14a+\dfrac15b\right)$`, a: r`$\dfrac{a^2}{20}+\dfrac{ab}{25}-\dfrac{ab}{16}-\dfrac{b^2}{20}=\dfrac{a^2}{20}-\dfrac{9ab}{400}-\dfrac{b^2}{20}$` },
    { n: '7', context: r`Same.`, q: r`$(5x-2y)^2$`, a: r`$25x^2-20xy+4y^2$` },
    { n: '8', context: r`Same.`, q: r`$(x-2)(2x-1)(1-x)$`, a: r`$(2x^2-5x+2)(1-x)=-2x^3+7x^2-7x+2$` },
    { n: '9', context: r`Same.`, q: r`$(mn-5)(mn+5)$`, a: r`$m^2n^2-25$` },
    { n: '10', context: r`Same.`, q: r`$(3x^2+5y)(3x^2-5y)$`, a: r`$9x^4-25y^2$` },
    { n: '11', context: r`Same.`, q: r`$\left(x+\dfrac y2\right)^2$`, a: r`$x^2+xy+\dfrac{y^2}4$` },
    { n: '12', context: r`Same.`, q: r`$\left(x^2-\dfrac1x\right)^2$`, a: r`$x^4-2x+\dfrac1{x^2}$` },
    { n: '13', context: r`Same.`, q: r`$\dfrac{-1}2(x-2)^2$`, a: r`$-\dfrac12(x^2-4x+4)=-\dfrac12x^2+2x-2$` },
    { n: '14', context: r`Same.`, q: r`$(x^a+y^b)(x^a-y^b)$`, a: r`$x^{2a}-y^{2b}$` },
    { n: '15', context: r`Same.`, q: r`$(x+2)(x-2)(x^2+4)$`, a: r`$(x^2-4)(x^2+4)=x^4-16$` },
  ]),
]);

export const ALG_FACTORISATION_1_LESSONS: Lesson[] = [PRODUCTS];
