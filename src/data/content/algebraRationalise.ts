import type { Lesson } from '../../lib/types';
import { r, h2, h3, p, note, eq, qs, solution, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 2: Exponents & Surds, section E (rationalising denominators) plus Tasks 11 and 12.
 * Book pp. 44–48; photos 10–11 of the Math-Algebra folder (photo 9 right page holds Task 11's start).
 * Task 11 question 1.4 is printed with a damaged symbol; it is read as the product of two fourth roots.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-exponents-surds', id, title, minutes, blocks);

export const RATIONALISE = lesson('alg-u2-e-rationalise', 'E. Rationalising Denominators', 35, [
  h2('Rationalising denominators'),
  p(r`It is useful to work with fractions which have rational denominators instead of surd denominators. We will now see how this can be achieved.`),
  p(r`Any expression of the form $\sqrt a$ (where $a$ is rational) can be changed into a rational number by multiplying by itself: $(\sqrt a)^2=a$.`),
  p(r`Any expression of the form $\sqrt a+\sqrt b$ can be changed into a rational number by multiplying by $\sqrt a-\sqrt b$ (the conjugate of $\sqrt a+\sqrt b$). Similarly $\sqrt a-\sqrt b$ can be rationalised by multiplying by $\sqrt a+\sqrt b$ (the conjugate of $\sqrt a-\sqrt b$).`),
  eq(r`(\sqrt a+\sqrt b)(\sqrt a-\sqrt b)=(\sqrt a)^2-(\sqrt b)^2=a-b`),

  h2('Worked questions'),
  h3('Question 1'),
  p(r`Rationalise the denominator: $\dfrac{\sqrt5+2}{\sqrt5}$`),
  solution([
    ['Extend the fraction by multiplying both numerator and denominator by $\\sqrt5$.', r`\dfrac{\sqrt5+2}{\sqrt5}=\dfrac{\sqrt5(\sqrt5+2)}{\sqrt5\cdot\sqrt5}`],
    r`=\dfrac{5+2\sqrt5}{5}`,
  ]),
  note(r`The book prints the denominator of the middle step as “$\sqrt5\cdot2\sqrt5$”; it should be $\sqrt5\cdot\sqrt5=5$, which is what gives the book’s answer.`),
  h3('Question 2'),
  p(r`Rationalise the denominator: $\dfrac{1+2\sqrt2}{-3\sqrt2}$`),
  solution([
    ['Extend the fraction by multiplying both numerator and denominator by $\\sqrt2$.', r`\dfrac{1+2\sqrt2}{-3\sqrt2}=\dfrac{\sqrt2(1+2\sqrt2)}{-3\sqrt2\cdot\sqrt2}`],
    r`=\dfrac{\sqrt2+4}{-6}=-\dfrac{\sqrt2+4}{6}`,
  ]),
  h3('Question 3'),
  p(r`Rationalise the denominator: $\dfrac{\sqrt3}{2-\sqrt2}$`),
  solution([
    ['Extend the fraction by multiplying both numerator and denominator by $2+\\sqrt2$.', r`\dfrac{(2+\sqrt2)\sqrt3}{(2-\sqrt2)(2+\sqrt2)}=\dfrac{2\sqrt3+\sqrt6}{4-2}`],
    r`=\dfrac{2\sqrt3+\sqrt6}{2}`,
  ]),
  h3('Question 4'),
  p(r`Rationalise the denominator: $\dfrac{y-4}{\sqrt y-2}$`),
  solution([
    ['Multiply numerator and denominator by $\\sqrt y+2$ and then simplify the fraction.', r`\dfrac{(y-4)(\sqrt y+2)}{(\sqrt y-2)(\sqrt y+2)}=\dfrac{(y-4)(\sqrt y+2)}{y-4}`],
    r`=\sqrt y+2`,
  ]),

  h2('Task 11'),
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1.1', context: r`Simplify the following expressions.`, q: r`$\dfrac4{\sqrt8\div\sqrt2}$`, a: r`$\dfrac4{\sqrt4}=\dfrac42=2$` },
    { n: '1.2', context: r`Same.`, q: r`$\sqrt{128x^6}+\sqrt{98x^6}$`, a: r`$8\sqrt2\,x^3+7\sqrt2\,x^3=15\sqrt2\,x^3$` },
    { n: '1.3', context: r`Same.`, q: r`$\sqrt{50}+\sqrt{32}$`, a: r`$5\sqrt2+4\sqrt2=9\sqrt2$` },
    { n: '1.4', context: r`Same.`, q: r`$\sqrt[4]{\sqrt{19}+\sqrt3}\cdot\sqrt[4]{\sqrt{19}-\sqrt3}$`, a: r`$\sqrt[4]{19-3}=\sqrt[4]{16}=2$` },
    { n: '1.5', context: r`Same.`, q: r`$(2+\sqrt2)^2$`, a: r`$4+4\sqrt2+2=6+4\sqrt2$` },
    { n: '1.6', context: r`Same.`, q: r`$\dfrac{\sqrt{147}+\sqrt{12}}{\sqrt{27}}$`, a: r`$\dfrac{7\sqrt3+2\sqrt3}{3\sqrt3}=\dfrac93=3$` },
    { n: '2.1', context: r`Given $M=\sqrt{\dfrac2{2x+5}}+\dfrac1{2x}$.`, q: r`Show that $M$ is a rational number if $x=1{,}5$.`, a: r`$M=\sqrt{\dfrac2{8}}+\dfrac13=\dfrac12+\dfrac13=\dfrac56$, which is rational.` },
    { n: '2.2', context: r`Same.`, q: r`Determine values of $x$ for which $M$ is undefined.`, a: r`When a denominator is $0$: $2x+5=0$ or $2x=0$, so $x=-\dfrac52$ or $x=0$.` },
    { n: '2.3', context: r`Same.`, q: r`Determine values of $x$ for which $M$ is a real number.`, a: r`The number under the root must be positive and no denominator can be zero: $2x+5>0$ and $x\ne0$, so $x>-\dfrac52$, $x\ne0$.` },
  ]),

  h2('Task 12'),
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1.1', context: r`Rationalise the denominators without a calculator.`, q: r`$\dfrac{\sqrt3-1}{\sqrt3}$`, a: r`$\dfrac{3-\sqrt3}{3}$` },
    { n: '1.2', context: r`Same.`, q: r`$\dfrac{2-3\sqrt5}{-\sqrt5}$`, a: r`$\dfrac{(2-3\sqrt5)\sqrt5}{-5}=\dfrac{2\sqrt5-15}{-5}=\dfrac{15-2\sqrt5}{5}$` },
    { n: '1.3', context: r`Same.`, q: r`$\dfrac{\sqrt3}{1-\sqrt3}$`, a: r`$\dfrac{\sqrt3(1+\sqrt3)}{1-3}=-\dfrac{\sqrt3+3}{2}$` },
    { n: '1.4', context: r`Same.`, q: r`$\dfrac{\sqrt2}{5\sqrt3+3\sqrt2}$`, a: r`Multiply by $5\sqrt3-3\sqrt2$: denominator $75-18=57$, numerator $5\sqrt6-6$. So $\dfrac{5\sqrt6-6}{57}$.` },
    { n: '1.5', context: r`Same.`, q: r`$\dfrac{\sqrt x-2}{\sqrt x}$`, a: r`$\dfrac{x-2\sqrt x}{x}$` },
    { n: '1.6', context: r`Same.`, q: r`$\dfrac{k-1}{\sqrt k+5}$`, a: r`$\dfrac{(k-1)(\sqrt k-5)}{k-25}$` },
    { n: '1.7', context: r`Same.`, q: r`$\dfrac{\sqrt n-2}{\sqrt n+1}$`, a: r`$\dfrac{(\sqrt n-2)(\sqrt n-1)}{n-1}=\dfrac{n-3\sqrt n+2}{n-1}$` },
    { n: '1.8', context: r`Same.`, q: r`$\dfrac{x-9}{3-\sqrt x}$`, a: r`$\dfrac{(x-9)(3+\sqrt x)}{9-x}=-(3+\sqrt x)$` },
    { n: '2', q: r`Prove that $\sqrt{\dfrac83}+5\sqrt{\dfrac23}-\sqrt{\dfrac16}=\dfrac{13}2\sqrt{\dfrac23}$.`, a: r`$\sqrt{\frac83}=2\sqrt{\frac23}$, $\sqrt{\frac16}=\sqrt{\frac14\cdot\frac23}=\frac12\sqrt{\frac23}$. LHS $=\left(2+5-\tfrac12\right)\sqrt{\frac23}=\dfrac{13}2\sqrt{\dfrac23}=$ RHS.` },
    { n: '3', q: r`Write $\dfrac{(\sqrt3+2)^2+2}{\sqrt3}$ in the form $a+b\sqrt c$ where $a$, $b$, $c$ are integers, without a calculator.`, a: r`$(\sqrt3+2)^2+2=3+4\sqrt3+4+2=9+4\sqrt3$. $\dfrac{9+4\sqrt3}{\sqrt3}=\dfrac{9\sqrt3+12}{3}=4+3\sqrt3$.` },
    { n: '4', q: r`Show that $\dfrac{\sqrt x}x+\dfrac y{\sqrt x}$ can be written as $\dfrac{\sqrt x(y+1)}x$.`, a: r`$\dfrac{\sqrt x}x=\dfrac1{\sqrt x}$, so the sum is $\dfrac{1+y}{\sqrt x}=\dfrac{(1+y)\sqrt x}{x}=\dfrac{\sqrt x(y+1)}x$.` },
  ]),
]);

export const ALG_RATIONALISE_LESSONS: Lesson[] = [RATIONALISE];
