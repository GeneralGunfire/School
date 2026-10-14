import type { Lesson } from '../../lib/types';
import { r, h2, note, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 2: Exponents & Surds, section F (Trial Tests 1–6). Book pp. 49–53; photos 12–13 of the
 * Math-Algebra folder (the book’s own numbering). Questions whose symbols are too damaged to read
 * (Trial Test 3 question 3.1.1, Test 5 questions 2.1 and 2.3) are not answered.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-exponents-surds', id, title, minutes, blocks);

const C = r`Simplify, without using a calculator.`;

export const TRIALS_1 = lesson('alg-u2-f-trial-tests', 'F. Trial Tests (Exponents & Surds)', 60, [
  h2('Trial Test 1'),
  ALG_ANSWERS_NOTE,
  note(r`Question 3.1.1 reads “rational and unequal” and its wording is unclear, so only its companion 3.1.2 is answered.`),
  qs([
    { n: '1.1', marks: 3, context: r`Simplify each of the following.`, q: r`$\dfrac{x^{\frac12}x^{\frac13}}{x^{\frac14}}$`, a: r`$x^{\frac12+\frac13-\frac14}=x^{\frac7{12}}$` },
    { n: '1.2', marks: 3, context: r`Same.`, q: r`$\sqrt{162x^8}-\sqrt{8x^8}$`, a: r`$9\sqrt2\,x^4-2\sqrt2\,x^4=7\sqrt2\,x^4$` },
    { n: '2.1', marks: 4, q: r`Simplify: $\sqrt[3]{27x^9}+\sqrt[4]{625x^{12}}-\sqrt{9x^6}$`, a: r`$3x^3+5x^3-3x^3=5x^3$` },
    { n: '2.2.1', marks: 3, context: r`Given $M=\sqrt{\dfrac3{4x-7}}-\dfrac1{6x}$.`, q: r`Show that $M$ is a rational number if $x=2{,}5$.`, a: r`$M=\sqrt{\dfrac3{10-7}}-\dfrac1{15}=1-\dfrac1{15}=\dfrac{14}{15}$, rational.` },
    { n: '2.2.2', marks: 3, context: r`Same.`, q: r`Determine the values of $x$ for which $M$ is a real number.`, a: r`$4x-7>0$ and $x\ne0$: $x>\dfrac74$.` },
    { n: '3.1.2', marks: 3, context: r`Given $P=\dfrac{-3+\sqrt{x-2}}2$.`, q: r`Write down the values of $x$ for which $P$ is non-real.`, a: r`$x-2<0$, so $x<2$.` },
    { n: '3.2.1', marks: 4, context: r`Simplify, without using a calculator.`, q: r`$\dfrac{4^{x+1}\cdot2^{x-1}}{8^{x-1}}$`, a: r`$2^{2x+2+x-1-3x+3}=2^4=16$` },
    { n: '3.2.2', marks: 3, context: r`Same.`, q: r`$\sqrt{12x^2}-4\sqrt{3x^2}$`, a: r`$2\sqrt3|x|-4\sqrt3|x|=-2\sqrt3|x|$` },
  ]),

  h2('Trial Test 2'),
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1.1.1', marks: 2, context: r`If $M=\sqrt{\dfrac1{4-x}}$, determine the values of $x$ for which:`, q: r`$M$ is undefined.`, a: r`$4-x=0$: $x=4$.` },
    { n: '1.1.2', marks: 3, context: r`Same.`, q: r`$M$ is non-real.`, a: r`$4-x<0$: $x>4$.` },
    { n: '1.2.1', marks: 2, context: C, q: r`$\dfrac{\sqrt{108}-2\sqrt{75}-2\sqrt{27}}{\sqrt3}$`, a: r`$\dfrac{6\sqrt3-10\sqrt3-6\sqrt3}{\sqrt3}=-10$` },
    { n: '1.2.2', marks: 3, context: C, q: r`$\left(2\tfrac14\right)^{-\frac32}$`, a: r`$\left(\dfrac94\right)^{-\frac32}=\left(\dfrac32\right)^{-3}=\dfrac8{27}$` },
    { n: '1.2.3', marks: 3, context: C, q: r`$\dfrac{2^{2x}-4}{2^x+2}$`, a: r`$\dfrac{(2^x-2)(2^x+2)}{2^x+2}=2^x-2$` },
    { n: '2.1.1', marks: 4, q: r`Show that $\dfrac{2^{3x-2}\cdot2^{1-2x}}{2^{x-1}\cdot4^{-x}}$ is equal to $4^x$.`, a: r`$\dfrac{2^{x-1}}{2^{x-1}\cdot2^{-2x}}=2^{2x}=4^x$.` },
    { n: '2.1.2', marks: 3, q: r`Hence or otherwise find the value of $\dfrac{2^{3(3)-2}\cdot2^{1-2(3)}}{2^{3-1}\cdot4^{-3}}$.`, a: r`This is the expression with $x=3$: $4^3=64$.` },
    { n: '2.2.1', marks: 2, context: r`Solve without a calculator.`, q: r`$\left(\dfrac{27}{125}\right)^{-\frac23}$`, a: r`$\left(\dfrac53\right)^2=\dfrac{25}9$` },
    { n: '2.2.2', marks: 3, context: r`Same.`, q: r`Which value is larger: $\sqrt6$ or $\sqrt[3]{16}$? Show working.`, a: r`Raise both to the power $6$: $(\sqrt6)^6=6^3=216$ and $(\sqrt[3]{16})^6=16^2=256$. Since $256>216$, $\sqrt[3]{16}$ is larger.` },
  ]),
  qs([
    { n: '2.1.1', marks: 5, context: r`Trial Test 2 (second question 2): Simplify without a calculator.`, q: r`$\dfrac{16^x\cdot81^{2x-1}\cdot6^{-4x}}{9^{x-0{,}5}}$`, a: r`$\dfrac{2^{4x}\cdot3^{8x-4}\cdot2^{-4x}3^{-4x}}{3^{2x-1}}=3^{8x-4-4x-2x+1}=3^{2x-3}$` },
    { n: '2.1.2', marks: 2, context: r`Same.`, q: r`$\sqrt[3]{27^2}$`, a: r`$27^{\frac23}=9$` },
    { n: '2.2', marks: 4, context: r`Same.`, q: r`Solve for $x$: $3(x-1)^{\frac12}=12$`, a: r`$\sqrt{x-1}=4\Rightarrow x-1=16\Rightarrow x=17$` },
  ]),

  h2('Trial Test 3'),
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1.1.1', marks: 4, context: C, q: r`$\dfrac{\sqrt{45}+2\sqrt{20}}{\sqrt{80}}$`, a: r`$\dfrac{3\sqrt5+4\sqrt5}{4\sqrt5}=\dfrac74$` },
    { n: '1.1.2', marks: 5, context: C, q: r`$\dfrac{9^{1+n}\cdot81^{n-1}}{27^{2n-1}}$`, a: r`$3^{2+2n+4n-4-6n+3}=3^1=3$` },
    { n: '1.2', marks: 4, context: r`Solve for $x$.`, q: r`$6\cdot3^{x-2}=54$`, a: r`$3^{x-2}=9\Rightarrow x-2=2\Rightarrow x=4$` },
    { n: '3.1', marks: 3, context: r`Simplify.`, q: r`$\left(\dfrac{8a^4}a\right)^{\frac23}$`, a: r`$(8a^3)^{\frac23}=4a^2$` },
    { n: '3.2', marks: 4, context: r`Same.`, q: r`$\sqrt[3]{\sqrt{12}+2}\cdot\sqrt[3]{\sqrt{12}-2}$`, a: r`$\sqrt[3]{12-4}=\sqrt[3]8=2$` },
  ]),

  h2('Trial Test 4'),
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1.1.1', marks: 3, context: r`If $M=\sqrt{\dfrac3{2x+1}}$, determine the values of $x$ for which:`, q: r`$M$ is undefined.`, a: r`$2x+1=0$: $x=-\dfrac12$.` },
    { n: '1.1.2', marks: 2, context: r`Same.`, q: r`$M$ is non-real.`, a: r`$2x+1<0$: $x<-\dfrac12$.` },
    { n: '1.2.1', marks: 5, context: C, q: r`$\dfrac{25^{x+2}\cdot5^{x-1}\cdot125^{2x+1}}{25^{2x+5}\cdot5^x}$`, a: r`$5^{2x+4+x-1+6x+3-4x-10-x}=5^{4x-4}$` },
    { n: '1.2.2', marks: 3, context: C, q: r`$\left(3\tfrac38\right)^{-\frac23}$`, a: r`$\left(\dfrac{27}8\right)^{-\frac23}=\left(\dfrac32\right)^{-2}=\dfrac49$` },
    { n: '1.2.3', marks: 4, context: C, q: r`$\sqrt[5]{32x^{10}}+\sqrt[3]{64x^6}-\sqrt{25x^4}$`, a: r`$2x^2+4x^2-5x^2=x^2$` },
    { n: '2.1', marks: 5, context: C, q: r`$\left(16^{\frac14}+32^{-\frac25}\right)^{\frac12}$`, a: r`$\left(2+\dfrac14\right)^{\frac12}=\sqrt{\dfrac94}=\dfrac32$` },
    { n: '2.2', marks: 5, context: r`Solve for $x$.`, q: r`$2\cdot4^{x-1}=8^{-x}$`, a: r`$2^{1+2x-2}=2^{-3x}\Rightarrow2x-1=-3x\Rightarrow x=\dfrac15$` },
  ]),

  h2('Trial Test 5 (advanced level)'),
  ALG_ANSWERS_NOTE,
  note(r`Question 1.1.1 is printed with $\sqrt{12}$ in one bracket and $\sqrt{13}$ in the other; it is answered as $\sqrt{\sqrt{13}-2}\cdot\sqrt{\sqrt{13}+2}$ (the only reading that simplifies). Questions 2.1 and 2.3 are too unclear to read and are left out.`),
  qs([
    { n: '1.1.1', marks: 3, context: C, q: r`$\sqrt{\sqrt{13}-2}\cdot\sqrt{\sqrt{13}+2}$`, a: r`$\sqrt{13-4}=3$` },
    { n: '1.1.2', marks: 4, context: C, q: r`$\dfrac{9^{n-1}\cdot27^{3-2n}}{81^{2-n}}$`, a: r`$3^{2n-2+9-6n-8+4n}=3^{-1}=\dfrac13$` },
    { n: '1.1.3', marks: 3, context: C, q: r`$\dfrac{3\sqrt{45}-\sqrt5}{\sqrt{20}}$`, a: r`$\dfrac{9\sqrt5-\sqrt5}{2\sqrt5}=4$` },
    { n: '1.2', marks: 4, context: r`Solve for $x$.`, q: r`$2^x\cdot\left(\dfrac18\right)^{x+2}=1$`, a: r`$2^{x-3x-6}=2^0\Rightarrow-2x-6=0\Rightarrow x=-3$` },
    { n: '2.2', marks: 5, context: r`Simplify.`, q: r`$\dfrac{9^x\cdot10^{x-2}}{6^{x-1}\cdot15^x}$`, a: r`$\dfrac{3^{2x}\cdot2^{x-2}5^{x-2}}{2^{x-1}3^{x-1}\cdot3^x5^x}=3^{1}\cdot2^{-1}\cdot5^{-2}=\dfrac3{50}$` },
    { n: '2.4', marks: 3, context: r`Same.`, q: r`$\dfrac{5\cdot2^n-2^n}{2^{n+1}}$`, a: r`$\dfrac{4\cdot2^n}{2\cdot2^n}=2$` },
  ]),

  h2('Trial Test 6 (advanced level)'),
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1.1.1', marks: 4, context: C, q: r`$\dfrac{2\sqrt8-\sqrt{50}}{(1-\sqrt2)(1+\sqrt2)}$`, a: r`$\dfrac{4\sqrt2-5\sqrt2}{1-2}=\dfrac{-\sqrt2}{-1}=\sqrt2$` },
    { n: '1.1.2', marks: 4, context: C, q: r`$\sqrt{\dfrac{15^x\cdot3^x}{9^{x+1}\cdot5^{x-2}}}$`, a: r`$\sqrt{\dfrac{3^{2x}5^x}{3^{2x+2}5^{x-2}}}=\sqrt{\dfrac{25}9}=\dfrac53$` },
    { n: '1.1.3', marks: 4, context: C, q: r`$\dfrac1{(a+b)^{-1}}-\left(a^{\frac12}-b^{\frac12}\right)^2$`, a: r`$(a+b)-(a-2\sqrt{ab}+b)=2\sqrt{ab}$` },
    { n: '1.1.4', marks: 4, context: C, q: r`$\dfrac{3^{2+x}-4\cdot3^x}{2\cdot3^{x-1}+3^x}$`, a: r`$\dfrac{3^x(9-4)}{3^x\left(\frac23+1\right)}=\dfrac5{\frac53}=3$` },
    { n: '1.2', marks: 4, context: r`Solve for $x$.`, q: r`$2\cdot3^x+3^x\cdot2^{-1}=7\tfrac12$`, a: r`$3^x\left(2+\tfrac12\right)=\dfrac{15}2\Rightarrow3^x=3\Rightarrow x=1$` },
    { n: '2.1', marks: 4, context: r`Simplify each of the following.`, q: r`$\dfrac{(\sqrt3-2\sqrt3)(\sqrt3+2\sqrt3)}9$`, a: r`$\dfrac{(-\sqrt3)(3\sqrt3)}9=-1$` },
    { n: '2.2', marks: 4, context: r`Prove that:`, q: r`$\sqrt2\cdot\sqrt[3]3=\sqrt[6]{72}$`, a: r`$\sqrt2\cdot\sqrt[3]3=2^{\frac12}3^{\frac13}=2^{\frac36}3^{\frac26}=(2^3\cdot3^2)^{\frac16}=\sqrt[6]{72}$.` },
    { n: '2.3', marks: 4, context: r`Simplify.`, q: r`$\dfrac{2\cdot5^{x+2}-6\cdot5^{x+1}}{5^{x+3}}$`, a: r`$\dfrac{5^x(50-30)}{5^x\cdot125}=\dfrac{20}{125}=\dfrac4{25}$` },
  ]),
]);

export const ALG_TRIALS_1_LESSONS: Lesson[] = [TRIALS_1];
