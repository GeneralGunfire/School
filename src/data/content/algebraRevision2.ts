import type { Lesson } from '../../lib/types';
import { r, h2, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Revision and Exemplars: Revision 3 and Revision 4. Book pp. 220-222; photo 86.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-algebra-revision', id, title, minutes, blocks);

export const REVISION_3 = lesson('alg-rev-3', 'Revision 3', 40, [
  ALG_ANSWERS_NOTE,
  h2('Question 1 [12]: simplify without a calculator / solve'),
  qs([
    { n: '1.1', marks: 4, q: r`$\dfrac{\sqrt{28}-3\sqrt{63}}{\sqrt{700}}$`, a: r`$\sqrt{28}=2\sqrt7$, $3\sqrt{63}=9\sqrt7$, $\sqrt{700}=10\sqrt7$. $\dfrac{2\sqrt7-9\sqrt7}{10\sqrt7}=\dfrac{-7}{10}$.` },
    { n: '1.2', marks: 4, q: r`$\dfrac{4^{1+n}\cdot8^{n-1}}{32^{n-1}}$`, a: r`$\dfrac{2^{2+2n}\cdot2^{3n-3}}{2^{5n-5}}=2^{2+2n+3n-3-5n+5}=2^4=16$.` },
    { n: '1.3', marks: 4, q: r`Solve for $x$: $2^x+3\cdot2^{x+1}=112$`, a: r`$2^x+6\cdot2^x=112\Rightarrow7\cdot2^x=112\Rightarrow2^x=16\Rightarrow x=4$.` },
  ]),
  h2('Question 2 [10]'),
  qs([
    { n: '2.1.1', marks: 3, q: r`Simplify: $\dfrac{32^x\cdot125^{2x-1}\cdot10^{-5x}}{25^{x-0{,}5}}$`, a: r`$\dfrac{2^{5x}\cdot5^{6x-3}\cdot2^{-5x}\cdot5^{-5x}}{5^{2x-1}}=5^{6x-3-5x-2x+1}=5^{-x-2}$.` },
    { n: '2.1.2', marks: 4, q: r`$\sqrt[4]{81^2}$`, a: r`$81^{\frac24}=81^{\frac12}=9$.` },
    { n: '2.2', marks: 3, q: r`Solve for $x$: $4(x+1)^{\frac13}=20$`, a: r`$(x+1)^{\frac13}=5\Rightarrow x+1=125\Rightarrow x=124$.` },
  ]),
  h2('Question 3 [13]'),
  qs([
    { n: '3.1', marks: 4, q: r`If $\dfrac{x-3}4+\dfrac{x-1}2-\dfrac{x-2}3=-\dfrac16$, what is $x$?`, a: r`Multiply by $12$: $3(x-3)+6(x-1)-4(x-2)=-2\Rightarrow5x-7=-2\Rightarrow x=1$.` },
    { n: '3.2', marks: 5, q: r`If $3x+4y=13$ and $4x+3y=1$, what is the value of $2x+5y$?`, a: r`Add: $7x+7y=14\Rightarrow x+y=2$. Subtract: $-x+y=12$. So $y=7$, $x=-5$. $2x+5y=-10+35=25$.` },
    { n: '3.3', marks: 4, q: r`Solve for $x$ and illustrate on a number line: $\dfrac{x+2}5>\dfrac{x-2}7$`, a: r`$7(x+2)>5(x-2)\Rightarrow7x+14>5x-10\Rightarrow2x>-24\Rightarrow x>-12$. Open circle at $-12$, shade to the right.` },
  ]),
]);

export const REVISION_4 = lesson('alg-rev-4', 'Revision 4', 40, [
  ALG_ANSWERS_NOTE,
  h2('Question 1 [9]'),
  qs([
    { n: '1.1', marks: 4, q: r`Show that $\dfrac{3^{3x-2}\cdot3^{1-2x}}{3^{x-1}\cdot9^{-x}}$ is equal to $9^x$.`, a: r`Numerator: $3^{3x-2+1-2x}=3^{x-1}$. Denominator: $3^{x-1}\cdot3^{-2x}=3^{-x-1}$. Quotient: $3^{x-1-(-x-1)}=3^{2x}=9^x$ ✔.` },
    { n: '1.2', marks: 2, q: r`Hence or otherwise find the value of the same expression.`, a: r`It equals $9^x$ (as shown above).` },
    { n: '1.3', marks: 3, q: r`Which value is larger, $\sqrt2$ or $\sqrt[5]6$? Show working details.`, a: r`Raise both to the power $10$: $(\sqrt2)^{10}=2^5=32$ and $(\sqrt[5]6)^{10}=6^2=36$. $36>32$, so $\sqrt[5]6$ is larger.` },
  ]),
  h2('Question 2 [13]'),
  qs([
    { n: '2.1.1', marks: 4, q: r`$\dfrac{\sqrt{75}-2\sqrt3-3\sqrt{27}}{\sqrt{12}}$`, a: r`$\dfrac{5\sqrt3-2\sqrt3-9\sqrt3}{2\sqrt3}=\dfrac{-6\sqrt3}{2\sqrt3}=-3$.` },
    { n: '2.1.2', marks: 3, q: r`$\left(3\dfrac38\right)^{-\frac23}$`, a: r`$\left(\dfrac{27}8\right)^{-\frac23}=\left(\dfrac8{27}\right)^{\frac23}=\left(\dfrac23\right)^2=\dfrac49$.` },
    { n: '2.1.3', marks: 3, q: r`$\dfrac{3^{2x}-9}{3^x+3}$`, a: r`$\dfrac{(3^x-3)(3^x+3)}{3^x+3}=3^x-3$.` },
    { n: '2.2', marks: 3, q: r`Rationalise the denominator of $\dfrac{\sqrt2-1}{4\sqrt2}$.`, a: r`$\dfrac{(\sqrt2-1)\sqrt2}{4\sqrt2\cdot\sqrt2}=\dfrac{2-\sqrt2}8$.` },
  ]),
  h2('Question 3 [13]'),
  qs([
    { n: '3.1', marks: 4, q: r`Solve for $x$: $6x-3(x+1)=2x-(3x-5)$`, a: r`$3x-3=-x+5\Rightarrow4x=8\Rightarrow x=2$.` },
    { n: '3.2', marks: 5, q: r`If $x+2y=4$ and $4x+5y=1$, find $x$ and $y$.`, a: r`$x=4-2y$: $16-8y+5y=1\Rightarrow y=5$, $x=-6$.` },
    { n: '3.3', marks: 4, q: r`Solve for $x$ and illustrate on a number line: $2>-2x+1\ge\dfrac13$`, a: r`$1>-2x\ge-\dfrac23\Rightarrow-\dfrac12<x\le\dfrac13$. Open circle at $-\tfrac12$, closed circle at $\tfrac13$, shade between.` },
  ]),
]);

export const ALG_REVISION_2_LESSONS: Lesson[] = [REVISION_3, REVISION_4];
