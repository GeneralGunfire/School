import type { Lesson } from '../../lib/types';
import { r, h2, h3, p, note, formula, qs, solution, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 2: Exponents & Surds, section D (surds). Book pp. 39–42; photos 8–9 of the Math-Algebra folder.
 * Tasks 6 and 7 (pp. 38 and 40–41) are not in the photo set. Task 8 question 2.3 is printed with a
 * missing symbol between the two numerator roots; it is read as a product.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-exponents-surds', id, title, minutes, blocks);

export const SURDS = lesson('alg-u2-d-surds', 'D. Surds', 40, [
  h2('Naming and classifying surds'),
  p(r`We name surds according to their degree: $x$ is the degree of the root in $\sqrt[x]{y}$. If $x$ is $2$ we say “square root of…”, if $x$ is $3$ “cube root of…”, if $x$ is $4$ “fourth root of…”, and so on.`),
  note(r`If the degree is an even number, to be real the value inside the surd cannot be negative: $\sqrt{-2}$ is not real, but $\sqrt[3]{-2}$ is real.`),
  p(r`If the surd can totally be cancelled, the number is classified as a rational number; otherwise it is an irrational number: $\sqrt4=2$ is rational; $\sqrt8=2\sqrt2$ is irrational. All recurring decimals are also rational numbers: $1{,}333\ldots$ is recurring and equals $\frac43$, so it is rational. $\pi$ is NOT a recurring decimal: it is irrational.`),
  solution([
    ['Rational numbers', r`\text{Integers, fractions, decimals}`],
    ['Irrational numbers', r`\text{“Root numbers”, non-recurring decimals, }\pi`],
    ['Real numbers', r`\text{Rationals}+\text{Irrationals}`],
    ['Non-real numbers', r`\text{“Even root” of negative numbers}`],
  ], 'The number families'),

  h2('Laws of surds'),
  h3('Multiplication'),
  p(r`If the surds are the same type (having the same degree): multiply the coefficients independently, multiply the numbers inside the surds, and keep the same type of surd.`),
  formula('Multiplication', r`a\sqrt[x]{m}\times b\sqrt[x]{n}=ab\sqrt[x]{mn}`),
  solution([
    r`2\sqrt3\times4\sqrt7=8\sqrt{21}`,
    r`-4\sqrt2\times\sqrt7\times3\sqrt5=-12\sqrt{70}`,
    r`2\sqrt[3]4\times5\sqrt[3]3=10\sqrt[3]{12}`,
    ['(different degrees: the surds cannot be combined)', r`3\sqrt2\times4\sqrt[3]3=12\sqrt2\times\sqrt[3]3`],
    r`\sqrt a\times\sqrt a=\sqrt{a\cdot a}=\sqrt{a^2}=a`,
    r`2\sqrt7\times3\sqrt7=6\times7=42`,
  ], 'Examples'),
  h3('Division'),
  p(r`If the surds are the same type: divide the coefficients independently, divide the numbers inside the surds, and keep the same type of surd.`),
  formula('Division', r`\dfrac{a\sqrt[x]{m}}{b\sqrt[x]{n}}=\dfrac ab\sqrt[x]{\dfrac mn}`),
  solution([
    r`\dfrac{8\sqrt{15}}{2\sqrt3}=\dfrac82\sqrt{\dfrac{15}3}=4\sqrt5`,
    r`\dfrac{\sqrt[3]{10}}{\sqrt[3]2}=\sqrt[3]{\dfrac{10}2}=\sqrt[3]5`,
  ], 'Examples'),
  h3('Addition and subtraction'),
  p(r`The degrees of the surds and the numbers inside the surds must be the same for addition and subtraction. It is like factorization, i.e. using a common factor.`),
  formula('Addition and subtraction', r`a\sqrt[x]{m}+b\sqrt[x]{m}=(a+b)\sqrt[x]{m}`),
  solution([
    r`2\sqrt3+4\sqrt3=(2+4)\sqrt3=6\sqrt3`,
    r`6\sqrt2-4\sqrt2+\sqrt2=(6-4+1)\sqrt2=3\sqrt2`,
    r`2\sqrt[3]4-5\sqrt[3]4=(2-5)\sqrt[3]4=-3\sqrt[3]4`,
    ['Write each surd in its simplest form first: $\\sqrt8=\\sqrt{4\\cdot2}=2\\sqrt2$ and $\\sqrt{18}=\\sqrt{9\\cdot2}=3\\sqrt2$.', r`2\sqrt8+4\sqrt{18}=2\sqrt{4\cdot2}+4\sqrt{9\cdot2}=4\sqrt2+12\sqrt2=16\sqrt2`],
  ], 'Examples'),

  h2('Surds in exponential form'),
  formula('Exponential form', r`\sqrt[n]{a^m}=a^{\frac mn}`),
  p(r`$m$ is the power of the number inside, $n$ is the degree of the surd. There must be one term inside the surd. The rule does not apply if there is more than one term in the surd with addition and subtraction.`),
  solution([
    ['(the power of $2$ is one)', r`\sqrt2=2^{\frac12}`],
    r`\sqrt[3]{5^2}=5^{\frac23}`,
    r`\sqrt{64a^2y^6}=8ay^3`,
    r`\sqrt{a^{100}b^6}=a^{\frac{100}2}b^{\frac62}=a^{50}b^3`,
    r`\sqrt{a^2+b^2}\ne a+b`,
    ['(if $b\\ge a$)', r`\sqrt{(a-b)^2}\ne a-b`],
    ['(if $a+b\\ge0$)', r`\sqrt{(a+b)^2}=a+b`],
    ['(if $a\\ge b$)', r`\sqrt{(a-b)^2}=a-b`],
  ], 'Examples and warnings'),

  h2('Worked questions'),
  h3('Question 1'),
  p(r`Simplify: $\sqrt5\left(\sqrt{45}+2\sqrt{80}\right)$`),
  solution([
    ['Simplify inside the bracket first.', r`\sqrt5\left(\sqrt{9\cdot5}+2\sqrt{16\cdot5}\right)=\sqrt5\left(3\sqrt5+8\sqrt5\right)`],
    r`=\sqrt5\cdot11\sqrt5=55`,
  ]),
  h3('Question 2'),
  p(r`Simplify: $\dfrac{\sqrt{98}-\sqrt8}{\sqrt{50}}$`),
  solution([
    ['Simplify the numerator to one term first.', r`\dfrac{\sqrt{49\cdot2}-\sqrt{4\cdot2}}{\sqrt{25\cdot2}}=\dfrac{7\sqrt2-2\sqrt2}{5\sqrt2}`],
    r`=\dfrac{5\sqrt2}{5\sqrt2}=1`,
  ]),
  h3('Question 3'),
  p(r`Given $M=\sqrt{\dfrac1{3x-5}+\dfrac2{x-5}}$: (a) show that $M$ is a rational number if $x=3$; (b) determine the values of $x$ for which $M$ is a real number.`),
  solution([
    ['a) Substitute $x$ with $3$:', r`\sqrt{\dfrac1{3\cdot3-5}+\dfrac2{3-5}}=\sqrt{\dfrac14+\dfrac2{-2}}=\sqrt{\dfrac14-1}`],
    r`=\sqrt{-\dfrac34}`,
  ], 'Solution a)'),
  note(r`The book’s answer for (a) is printed as “$-\dfrac12$”, but $\dfrac14+\dfrac2{-2}=-\dfrac34$, and the square root of a negative number is not real. So as printed, $M$ is not a rational (or real) number at $x=3$; the question probably intends $\sqrt{\dfrac1{3x-5}}$ and $\dfrac2{x-5}$ as separate terms, in which case $M=\dfrac12-1=-\dfrac12$ (rational), the book’s answer.`),
  solution([
    ['b) Terms inside the square roots must be positive and denominators cannot be zero.', r`3x-5>0\quad\text{and}\quad x-5\ne0`],
    r`x>\dfrac53\quad\text{and}\quad x\ne5`,
  ], 'Solution b)'),
  h3('Question 4'),
  p(r`Simplify: $\sqrt{9x^2+16x^2}$`),
  solution([
    ['You can’t take the square root separately, because the rules of exponents and surds don’t work with addition and subtraction. But you can add like terms:', r`\sqrt{9x^2+16x^2}=\sqrt{25x^2}=5x`],
  ]),

  h2('Task 8'),
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1.1', context: r`Simplify the following expressions.`, q: r`$\sqrt{25a^4b^2}$`, a: r`$5a^2b$` },
    { n: '1.2', context: r`Same.`, q: r`$\sqrt{(a+b)^2}$`, a: r`$a+b$ (if $a+b\ge0$)` },
    { n: '1.3', context: r`Same.`, q: r`$\sqrt{16x^{16}}$`, a: r`$4x^8$` },
    { n: '1.4', context: r`Same.`, q: r`$\sqrt{9x^4+16x^4}$`, a: r`$\sqrt{25x^4}=5x^2$` },
    { n: '1.5', context: r`Same.`, q: r`$\sqrt{\dfrac{m^2(a+b)^4}{121}}$`, a: r`$\dfrac{m(a+b)^2}{11}$ (for $m\ge0$)` },
    { n: '1.6', context: r`Same.`, q: r`$\sqrt{\dfrac{32a^3b^4}{8a}}$`, a: r`$\sqrt{4a^2b^4}=2ab^2$` },
    { n: '1.7', context: r`Same.`, q: r`$\sqrt{\dfrac{20a^5}{5a}}\cdot\sqrt{\dfrac{9a^3b^2}{a^5}}$`, a: r`$\sqrt{4a^4}\cdot\sqrt{\dfrac{9b^2}{a^2}}=2a^2\cdot\dfrac{3b}{a}=6ab$` },
    { n: '1.8', context: r`Same.`, q: r`$\sqrt{\dfrac{50a^6b}{98b^9}}$`, a: r`$\sqrt{\dfrac{25a^6}{49b^8}}=\dfrac{5a^3}{7b^4}$` },
    { n: '2.1', context: r`Simplify the following expressions.`, q: r`$\sqrt{28}+\sqrt{63}$`, a: r`$2\sqrt7+3\sqrt7=5\sqrt7$` },
    { n: '2.2', context: r`Same.`, q: r`$5\sqrt7+3\sqrt{28}$`, a: r`$5\sqrt7+6\sqrt7=11\sqrt7$` },
    { n: '2.3', context: r`Same.`, q: r`$\dfrac{\sqrt{125}\cdot\sqrt{20}}{\sqrt{45}}$`, a: r`$\dfrac{5\sqrt5\cdot2\sqrt5}{3\sqrt5}=\dfrac{50}{3\sqrt5}=\dfrac{10\sqrt5}{3}$` },
    { n: '2.4', context: r`Same.`, q: r`$3\sqrt3\sqrt3$`, a: r`$3\cdot3=9$` },
    { n: '2.5', context: r`Same.`, q: r`$\sqrt{2\tfrac14a^6}$`, a: r`$\sqrt{\dfrac94a^6}=\dfrac32a^3$` },
    { n: '2.6', context: r`Same.`, q: r`$a\sqrt{a^4}\,a^2$`, a: r`$a\cdot a^2\cdot a^2=a^5$` },
    { n: '2.7', context: r`Same.`, q: r`$(3\sqrt2)^2$`, a: r`$9\cdot2=18$` },
  ]),
]);

export const ALG_SURDS_LESSONS: Lesson[] = [SURDS];
