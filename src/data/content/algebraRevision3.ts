import type { Lesson } from '../../lib/types';
import { r, h2, note, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Revision and Exemplars: Revision 5 and Revision 6. Book pp. 223-224; photo 88.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-algebra-revision', id, title, minutes, blocks);

export const REVISION_5 = lesson('alg-rev-5', 'Revision 5', 40, [
  ALG_ANSWERS_NOTE,
  h2('Question 1 [14]'),
  qs([
    { n: '1.1.1', marks: 4, q: r`Simplify without a calculator: $\dfrac{28}{\sqrt{63}-\sqrt{28}}$`, a: r`$\sqrt{63}=3\sqrt7$ and $\sqrt{28}=2\sqrt7$, so the denominator is $\sqrt7$. $\dfrac{28}{\sqrt7}=\dfrac{28\sqrt7}7=4\sqrt7$.` },
    { n: '1.1.2', marks: 5, q: r`$\dfrac{32^x\cdot27^{2x-1}\cdot6^{-5x}}{9^{\frac x2-4}}$`, a: r`$\dfrac{2^{5x}\cdot3^{6x-3}\cdot2^{-5x}\cdot3^{-5x}}{3^{x-8}}=3^{6x-3-5x-x+8}=3^5=243$.` },
    { n: '1.2', marks: 5, q: r`Determine the values of $x$ for which $\sqrt{\dfrac{3-4x}x}$ is unreal (non-real).`, a: r`We need $\dfrac{3-4x}x<0$. The signs change at $x=0$ and $x=\dfrac34$. Testing: $x=-1$ gives $\dfrac7{-1}<0$ ✔; $x=\tfrac12$ gives a positive value ✘; $x=1$ gives $\dfrac{-1}1<0$ ✔. So $x<0$ or $x>\dfrac34$.` },
  ]),
  h2('Question 2 [13]'),
  qs([
    { n: '2.1.1', marks: 4, q: r`Simplify without a calculator: $(0{,}125)^{\frac23}\cdot(0{,}25)^{-\frac32}$`, a: r`$\left(\tfrac18\right)^{\frac23}=\tfrac14$ and $\left(\tfrac14\right)^{-\frac32}=4^{\frac32}=8$. Product $=\tfrac14\cdot8=2$.` },
    { n: '2.1.2', marks: 4, q: r`$\left(1-\dfrac{19}{27}\right)^{\frac43}-\left(3\dfrac14\right)^0$`, a: r`$\left(\tfrac8{27}\right)^{\frac43}=\left(\tfrac23\right)^4=\tfrac{16}{81}$, and anything to the power $0$ is $1$. $\tfrac{16}{81}-1=-\tfrac{65}{81}$.` },
    { n: '2.2', marks: 5, q: r`Solve for $x$ and illustrate on a number line: $-1<3-4x<11$`, a: r`Subtract $3$: $-4<-4x<8$. Divide by $-4$ and reverse the signs: $1>x>-2$, i.e. $-2<x<1$. Number line: open circles at $-2$ and $1$, shaded between.` },
  ]),
]);

export const REVISION_6 = lesson('alg-rev-6', 'Revision 6', 40, [
  ALG_ANSWERS_NOTE,
  h2('Question 1 [14]: calculate the products'),
  qs([
    { n: '1.1', marks: 4, q: r`$(3x^2-5y)^2$`, a: r`$9x^4-30x^2y+25y^2$.` },
    { n: '1.2', marks: 4, q: r`$(2-b)(3+a)$`, a: r`$6+2a-3b-ab$.` },
    { n: '1.3', marks: 4, q: r`$(p-2)(p^2+2p+4)$`, a: r`Difference of cubes: $p^3-8$.` },
    { n: '1.4', marks: 2, q: r`$2\sqrt3(\sqrt2-\sqrt3)$`, a: r`$2\sqrt6-2\cdot3=2\sqrt6-6$.` },
  ]),
  h2('Question 2 [8]: factorise fully'),
  qs([
    { n: '2.1', marks: 4, q: r`$x^4-16$`, a: r`$(x^2-4)(x^2+4)=(x-2)(x+2)(x^2+4)$.` },
    { n: '2.2', marks: 4, q: r`$2m^2-5m+3$`, a: r`$(2m-3)(m-1)$.` },
  ]),
  h2('Question 3 [4]'),
  qs([
    { n: '3', marks: 4, q: r`The perpendicular sides of a right-angled triangle are $(\sqrt2+1)$ and $(\sqrt2-1)$ units. Calculate the length of the hypotenuse in surd form.`, a: r`$h^2=(\sqrt2+1)^2+(\sqrt2-1)^2=(3+2\sqrt2)+(3-2\sqrt2)=6$. $h=\sqrt6$ units.` },
  ]),
  h2('Question 4 [4]'),
  qs([
    { n: '4', marks: 4, q: r`Simplify as far as possible: $\dfrac{a^2-5a}{2a+10}\div\dfrac{4a}{3a+15}$`, a: r`$\dfrac{a(a-5)}{2(a+5)}\times\dfrac{3(a+5)}{4a}=\dfrac{3(a-5)}8$, with $a\ne0,\,-5$.` },
  ]),
  note(r`These are my own worked answers; the book’s answer key was not photographed.`),
]);

export const ALG_REVISION_3_LESSONS: Lesson[] = [REVISION_5, REVISION_6];
