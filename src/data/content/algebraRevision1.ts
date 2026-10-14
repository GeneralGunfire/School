import type { Lesson } from '../../lib/types';
import { r, h2, note, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Revision and Exemplars: A. Equations and exponents (Revision 1 and Revision 2, Q1-3).
 * Book pp. 218-219; photo 85. Question 3.3 of Revision 2 is crossed out in the book.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-algebra-revision', id, title, minutes, blocks);

export const REVISION_1 = lesson('alg-rev-1', 'Revision 1: Equations and Exponents', 40, [
  ALG_ANSWERS_NOTE,
  note(r`Two printed expressions are hard to read in the photo: in 2.1 the middle cube root, and in 3.2 the base $\frac{91}{16}$ (almost certainly $\frac{81}{16}$). The readings used are stated in the answers.`),
  h2('Question 1: simplify as far as possible'),
  qs([
    { n: '1.1', marks: 3, q: r`$\dfrac{y^{\frac13}\,y^{\frac14}}{y^{\frac12}}$`, a: r`Add and subtract the exponents: $\tfrac13+\tfrac14-\tfrac12=\tfrac4{12}+\tfrac3{12}-\tfrac6{12}=\tfrac1{12}$. Answer: $y^{\frac1{12}}$.` },
    { n: '1.2', marks: 3, q: r`$\sqrt{50x^{16}}-\sqrt{18x^{16}}$`, a: r`$5\sqrt2\,x^8-3\sqrt2\,x^8=2\sqrt2\,x^8$.` },
  ]),
  h2('Question 2'),
  qs([
    { n: '2.1', marks: 3, q: r`Simplify: $\sqrt[3]{64x^6}+\sqrt[3]{16x^8}-\sqrt{49x^4}$`, a: r`$4x^2+2x^2\sqrt[3]{2x^2}-7x^2=2x^2\sqrt[3]{2x^2}-3x^2$. (Reading used: the middle term is $\sqrt[3]{16x^8}=2x^2\sqrt[3]{2x^2}$.)` },
    { n: '2.2', context: r`Given $K=\sqrt{\dfrac{-2}{3-4x}}-\dfrac1{2x}$.`, q: r`2.2.1 Show that $K$ is a rational number if $x=1{,}25$. (3)`, a: r`$3-4(1{,}25)=-2$, so $\sqrt{\dfrac{-2}{-2}}=\sqrt1=1$ and $\dfrac1{2(1{,}25)}=\dfrac1{2{,}5}=0{,}4$. $K=1-0{,}4=0{,}6=\dfrac35$, a rational number.` },
    { n: '2.2.2', marks: 3, q: r`Determine the values of $x$ for which $K$ is a real number.`, a: r`We need $\dfrac{-2}{3-4x}\ge0$, so $3-4x<0$ (it cannot be $0$), giving $x>\dfrac34$. Also $x\ne0$, which is already satisfied. So $x>\dfrac34$.` },
    { n: '2.3', marks: 5, q: r`Jared had to find the product of $2^{2009}$ and $5^{2005}$ and then calculate the sum of the digits of the answer. Jared arrived at 7. Is she correct? Show ALL calculations.`, a: r`$2^{2009}\cdot5^{2005}=2^4\cdot2^{2005}\cdot5^{2005}=16\cdot10^{2005}$. This is $16$ followed by $2005$ zeros, so the digit sum is $1+6=7$. **Yes**, she is correct.` },
  ]),
  h2('Question 3: simplify without a calculator'),
  qs([
    { n: '3.1', marks: 4, q: r`$\dfrac{9^{x+1}\cdot27^{x-1}}{81^{x-1}}$`, a: r`$\dfrac{3^{2x+2}\cdot3^{3x-3}}{3^{4x-4}}=3^{2x+2+3x-3-4x+4}=3^{x+3}$.` },
    { n: '3.2', marks: 2, q: r`$\left(\dfrac{81}{16}\right)^{-\frac34}$ (printed as $\frac{91}{16}$)`, a: r`$\left(\dfrac{16}{81}\right)^{\frac34}=\left(\dfrac23\right)^3=\dfrac8{27}$.` },
  ]),
  h2('Question 4'),
  qs([
    { n: '4.1', marks: 4, q: r`If $\dfrac{7x}3=2x+\dfrac12$, what is $x$?`, a: r`Multiply by $6$: $14x=12x+3\Rightarrow2x=3\Rightarrow x=\dfrac32$.` },
    { n: '4.2', marks: 5, q: r`If $x-2y=8$ and $4x-y=11$, what is $y$?`, a: r`$x=8+2y$. $4(8+2y)-y=11\Rightarrow32+7y=11\Rightarrow y=-3$ (and $x=2$).` },
    { n: '4.3', marks: 4, q: r`Solve for $x$ and illustrate on a number line: $-3\le\dfrac{-x-1}2<5$`, a: r`Multiply by $2$: $-6\le-x-1<10$. Add $1$: $-5\le-x<11$. Multiply by $-1$ and reverse the signs: $5\ge x>-11$, i.e. $-11<x\le5$. Number line: open circle at $-11$, closed circle at $5$, shaded between.` },
  ]),
]);

export const REVISION_2 = lesson('alg-rev-2', 'Revision 2: Exponents, Equations and Inequalities', 40, [
  ALG_ANSWERS_NOTE,
  h2('Question 1'),
  qs([
    { n: '1.1.1', marks: 3, q: r`Simplify without a calculator: $\sqrt{\sqrt{58}-3}\cdot\sqrt{\sqrt{58}+3}$`, a: r`$\sqrt{(\sqrt{58}-3)(\sqrt{58}+3)}=\sqrt{(\sqrt{58})^2-3^2}=\sqrt{58-9}=\sqrt{49}=7$.` },
    { n: '1.1.2', marks: 3, q: r`$\left(\dfrac{(2x)^{-3}}{8x^{-3}}\right)^{-\frac43}$`, a: r`$(2x)^{-3}=\dfrac1{8x^3}$ and $8x^{-3}=\dfrac8{x^3}$, so the fraction is $\dfrac1{8x^3}\cdot\dfrac{x^3}8=\dfrac1{64}$. Then $\left(\dfrac1{64}\right)^{-\frac43}=64^{\frac43}=4^4=256$.` },
    { n: '1.1.3', marks: 4, q: r`$\dfrac{4^x\cdot15^{x-2}}{12^{x-1}\cdot5^x}$`, a: r`Numerator: $2^{2x}\cdot3^{x-2}\cdot5^{x-2}$. Denominator: $2^{2x-2}\cdot3^{x-1}\cdot5^x$. Subtract exponents: $2^{2}\cdot3^{-1}\cdot5^{-2}=\dfrac4{3\cdot25}=\dfrac4{75}$.` },
    { n: '1.2', marks: 5, q: r`Solve for $x$: $3^x\cdot\left(\dfrac1{27}\right)^{x+2}=1$`, a: r`$3^x\cdot3^{-3(x+2)}=3^0\Rightarrow x-3x-6=0\Rightarrow-2x=6\Rightarrow x=-3$.` },
  ]),
  h2('Question 2'),
  qs([
    { n: '2', context: r`$A=\sqrt{\dfrac5{3-x}}$. Determine the values of $x$ for which:`, q: r`2.1 $A$ is undefined. (3)`, a: r`The denominator is zero: $3-x=0$, so $x=3$.`, marks: 3 },
    { n: '2.2', marks: 2, q: r`$A$ is non-real. (2)`, a: r`The number under the root is negative: $\dfrac5{3-x}<0\Rightarrow3-x<0\Rightarrow x>3$.` },
  ]),
  h2('Question 3'),
  qs([
    { n: '3.1', marks: 4, q: r`If $-\dfrac17=\dfrac14T-3$, what is $T$?`, a: r`$\dfrac14T=3-\dfrac17=\dfrac{20}7\Rightarrow T=\dfrac{80}7$.` },
    { n: '3.2', marks: 5, q: r`If $3x+2y=-2$ and $-3-3y=-x$, what is $x-y$?`, a: r`From the second, $x=3+3y$. Then $3(3+3y)+2y=-2\Rightarrow9+11y=-2\Rightarrow y=-1$ and $x=0$. $x-y=0-(-1)=1$.` },
  ]),
  note(r`Question 3.3 (an inequality with “and $x<0$”) is crossed out in the book, so it is left out.`),
]);

export const ALG_REVISION_1_LESSONS: Lesson[] = [REVISION_1, REVISION_2];
