import type { Lesson } from '../../lib/types';
import { r, h2, note, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Revision and Exemplars: Exemplar 1 (Q5-7) and Exemplar 2 (Q1-3). Book pp. 234-235; photo 93.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-algebra-revision', id, title, minutes, blocks);

export const EXEMPLAR_1B = lesson('alg-rev-exemplar-1b', 'Exemplar 1 (continued): Questions 5–7', 55, [
  ALG_ANSWERS_NOTE,
  h2('Question 5: Factorise fully [19]'),
  qs([
    { n: '5.1', marks: 2, q: r`$-5x+20y$`, a: r`$-5(x-4y)$.` },
    { n: '5.2', marks: 2, q: r`$12a(3x-3y)-6b(3y-3x)$`, a: r`$36a(x-y)+18b(x-y)=18(x-y)(2a+b)$.` },
    { n: '5.3', marks: 3, q: r`$11x^4-11y^4$`, a: r`$11(x^2+y^2)(x+y)(x-y)$.` },
    { n: '5.4', marks: 3, q: r`$5x-xy+5k-ky$`, a: r`$x(5-y)+k(5-y)=(5-y)(x+k)$.` },
    { n: '5.5', marks: 3, q: r`$x^2-4x-21$`, a: r`$(x-7)(x+3)$.` },
    { n: '5.6', marks: 3, q: r`$x^2-14xy+13y^2$`, a: r`$(x-13y)(x-y)$.` },
    { n: '5.7', marks: 3, q: r`$6x^2-(13x+5)$`, a: r`$6x^2-13x-5=(2x-5)(3x+1)$.` },
  ]),
  h2('Question 6: Simplify fully [11]'),
  qs([
    { n: '6.1', marks: 6, q: r`$\dfrac{2x+3}{10x-10}\cdot\dfrac{3-2x}{4x^2-9}$`, a: r`$\dfrac{2x+3}{10(x-1)}\cdot\dfrac{-(2x-3)}{(2x-3)(2x+3)}=\dfrac{-1}{10(x-1)}$, with $x\ne1,\pm\tfrac32$.` },
    { n: '6.2', marks: 5, q: r`$2-\dfrac1{x+2}+\dfrac2x$`, a: r`Common denominator $x(x+2)$: $\dfrac{2x(x+2)-x+2(x+2)}{x(x+2)}=\dfrac{2x^2+4x-x+2x+4}{x(x+2)}=\dfrac{2x^2+5x+4}{x(x+2)}$.` },
  ]),
  h2('Question 7: Quadratic equations [18] (two decimals where necessary)'),
  qs([
    { n: '7.1', marks: 2, q: r`$2x(x-2)=0$`, a: r`$x=0$ or $x=2$.` },
    { n: '7.2', marks: 4, q: r`$\sqrt x=x-6$`, a: r`Square both sides: $x=x^2-12x+36\Rightarrow x^2-13x+36=0\Rightarrow(x-4)(x-9)=0$. Check: $x=4$: $2\ne-2$ ✘. $x=9$: $3=3$ ✔. So $x=9$.` },
    { n: '7.3', marks: 4, q: r`$2x^2-x-5=0$`, a: r`$x=\dfrac{1\pm\sqrt{41}}4$, so $x\approx1{,}85$ or $x\approx-1{,}35$.` },
    { n: '7.4', marks: 4, q: r`$-\dfrac43(x-3)^2+12=0$`, a: r`$(x-3)^2=9\Rightarrow x-3=\pm3\Rightarrow x=6$ or $x=0$.` },
    { n: '7.5', marks: 4, q: r`Solve by completing the square: $-3x^2+7x-1=0$`, a: r`$x^2-\dfrac73x=-\dfrac13\Rightarrow\left(x-\dfrac76\right)^2=\dfrac{37}{36}\Rightarrow x=\dfrac{7\pm\sqrt{37}}6$, so $x\approx2{,}18$ or $x\approx0{,}15$.` },
  ]),
  note(r`Total marks for Exemplar 1: 96.`),
]);

export const EXEMPLAR_2A = lesson('alg-rev-exemplar-2a', 'Revision 15 / Exemplar 2 (2 hours): Questions 1–3', 70, [
  ALG_ANSWERS_NOTE,
  h2('Question 1 [32]'),
  qs([
    { n: '1.1.1', marks: 2, q: r`Solve: $(3-y)(2y-1)=0$`, a: r`$y=3$ or $y=\dfrac12$.` },
    { n: '1.1.2', marks: 4, q: r`$x(x-2)-24=0$`, a: r`$x^2-2x-24=0\Rightarrow(x-6)(x+4)=0$. $x=6$ or $x=-4$.` },
    { n: '1.1.3', marks: 5, q: r`$3x^2-4x=2$`, a: r`$3x^2-4x-2=0$. $x=\dfrac{4\pm\sqrt{16+24}}6=\dfrac{2\pm\sqrt{10}}3$, so $x\approx1{,}72$ or $x\approx-0{,}39$.` },
    { n: '1.1.4', marks: 3, q: r`$\dfrac{12}{x+5}-1=0$`, a: r`$x\ne-5$. $12=x+5\Rightarrow x=7$.` },
    { n: '1.2', marks: 8, q: r`Solve for $x$ and $y$ simultaneously: $2x-y=1$ and $2x^2+y^2-3=0$`, a: r`$y=2x-1$. $2x^2+(2x-1)^2-3=0\Rightarrow6x^2-4x-2=0\Rightarrow3x^2-2x-1=0\Rightarrow(3x+1)(x-1)=0$. $x=1,\;y=1$ or $x=-\dfrac13,\;y=-\dfrac53$.` },
    { n: '1.3', marks: 3, q: r`Find the nature of the roots of $f(x)=-2x^2+5x-7$.`, a: r`$\Delta=b^2-4ac=25-4(-2)(-7)=25-56=-31<0$: the roots are non-real (no real roots).` },
    { n: '1.4', marks: 3, q: r`Determine the values of $m$ for which $\dfrac{\sqrt{1-2m}}m$ is real (the end of the question is cut off; this reading is used).`, a: r`$1-2m\ge0\Rightarrow m\le\dfrac12$, and $m\ne0$. So $m\le\dfrac12$, $m\ne0$.` },
    { n: '1.5', marks: 4, q: r`Calculate $f(x)=\dfrac{x^2-9}{x-3}$ if $x=31\,264\,599\,999$.`, a: r`$f(x)=\dfrac{(x-3)(x+3)}{x-3}=x+3=31\,264\,600\,002$.` },
  ]),
  h2('Question 2 [26]'),
  qs([
    { n: '2.1.1', marks: 3, q: r`Simplify without a calculator: $(0{,}125)^{-\frac23}$`, a: r`$\left(\tfrac18\right)^{-\frac23}=8^{\frac23}=4$.` },
    { n: '2.1.2', marks: 4, q: r`$\left(5+\dfrac1{16}\right)^{\frac34}-\left(2\dfrac14\right)^0$`, a: r`$\left(\tfrac{81}{16}\right)^{\frac34}=\left(\tfrac32\right)^3=\tfrac{27}8$, so $\tfrac{27}8-1=\tfrac{19}8$.` },
    { n: '2.1.3', marks: 6, q: r`$\dfrac{4^x\cdot9^{x+1}\cdot2^{x-1}}{6^{2x}\cdot4^{\frac x2+1}\cdot3}$`, a: r`Numerator: $2^{2x}\cdot3^{2x+2}\cdot2^{x-1}=2^{3x-1}3^{2x+2}$. Denominator: $2^{2x}3^{2x}\cdot2^{x+2}\cdot3=2^{3x+2}3^{2x+1}$. Quotient: $2^{-3}\cdot3^{1}=\dfrac38$.` },
    { n: '2.1.4', marks: 4, q: r`$\dfrac{3^{2+x}-3^x}{3^{x+1}+3^x}$`, a: r`$\dfrac{3^x(9-1)}{3^x(3+1)}=\dfrac84=2$.` },
    { n: '2.2', marks: 4, q: r`Solve: $\left(\dfrac19\right)^{x+3}=27^{x-4}$`, a: r`$3^{-2(x+3)}=3^{3(x-4)}\Rightarrow-2x-6=3x-12\Rightarrow5x=6\Rightarrow x=\dfrac65$.` },
    { n: '2.3', marks: 5, q: r`Simplify, showing all working, in the form $a\sqrt b$: $\dfrac{24}{\sqrt{96}-\sqrt{24}}$`, a: r`$\sqrt{96}=4\sqrt6$ and $\sqrt{24}=2\sqrt6$, so the denominator is $2\sqrt6$. $\dfrac{24}{2\sqrt6}=\dfrac{12}{\sqrt6}=\dfrac{12\sqrt6}6=2\sqrt6$ ($a=2$, $b=6$).` },
  ]),
  h2('Question 3 [6]'),
  qs([
    { n: '3', marks: 6, q: r`Simplify fully: $\dfrac{3x^2-x-2}{-5x+5}\div\dfrac{9x^2-4}{10}$`, a: r`$\dfrac{(3x+2)(x-1)}{-5(x-1)}\times\dfrac{10}{(3x-2)(3x+2)}=\dfrac{-2}{3x-2}$, with $x\ne1,\pm\tfrac23$.` },
  ]),
]);

export const ALG_REVISION_8_LESSONS: Lesson[] = [EXEMPLAR_1B, EXEMPLAR_2A];
