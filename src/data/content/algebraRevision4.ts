import type { Lesson } from '../../lib/types';
import { r, h2, note, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Revision and Exemplars: Revision 7 and Revision 8. Book pp. 225-226; photo 89.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-algebra-revision', id, title, minutes, blocks);

export const REVISION_7 = lesson('alg-rev-7', 'Revision 7', 40, [
  ALG_ANSWERS_NOTE,
  h2('Question 1 [11]'),
  qs([
    { n: '1.1', marks: 4, q: r`Simplify $\left(\dfrac{9x^2}{y^4}\right)^{\frac12}$`, a: r`$\dfrac{3x}{y^2}$ (taking $x\ge0$; in general $\dfrac{3|x|}{y^2}$).` },
    { n: '1.2', marks: 3, q: r`It is given that $5\times M^3\times N^3=5000$ where $M$ and $N$ are whole numbers. Determine $M\times N$.`, a: r`$M^3N^3=1000\Rightarrow(MN)^3=1000\Rightarrow MN=10$.` },
    { n: '1.3', marks: 4, q: r`Simplify $\dfrac{x^{-1}+y^{-1}}{x^{-1}y-y^{-1}x}$`, a: r`Numerator: $\dfrac1x+\dfrac1y=\dfrac{x+y}{xy}$. Denominator: $\dfrac yx-\dfrac xy=\dfrac{y^2-x^2}{xy}$. The quotient is $\dfrac{x+y}{(y-x)(y+x)}=\dfrac1{y-x}$ (with $x\ne-y$, $x,y\ne0$).` },
  ]),
  h2('Question 2 [10]'),
  qs([
    { n: '2.1', marks: 4, q: r`Simplify $\sqrt[5]{32x^{10}}-\sqrt[3]{27x^6}+\sqrt{9x^4}$`, a: r`$2x^2-3x^2+3x^2=2x^2$.` },
    { n: '2.2.1', marks: 3, context: r`Given $T=\sqrt{\dfrac4{-1-8x}}-\dfrac1{4x}$.`, q: r`Show that $T$ is a rational number if $x=-0{,}25$.`, a: r`$-1-8(-0{,}25)=1$, so $\sqrt{\dfrac41}=2$. $\dfrac1{4(-0{,}25)}=-1$. $T=2-(-1)=3$, a rational number.` },
    { n: '2.2.2', marks: 3, q: r`Determine the values of $x$ for which $T$ is a real number.`, a: r`We need $-1-8x>0$ (positive, since it is a denominator), so $x<-\dfrac18$. Also $x\ne0$, already satisfied. So $x<-\dfrac18$.` },
  ]),
  h2('Question 3 [6]'),
  qs([
    { n: '3.1', marks: 3, q: r`Solve for $x$ if $5^x=5\sqrt5$.`, a: r`$5\sqrt5=5^1\cdot5^{\frac12}=5^{\frac32}$, so $x=\dfrac32$.` },
    { n: '3.2', marks: 3, q: r`Solve for $x$ if $2^{3x-6}=\sqrt8$.`, a: r`$\sqrt8=2^{\frac32}$, so $3x-6=\dfrac32\Rightarrow3x=\dfrac{15}2\Rightarrow x=\dfrac52$.` },
  ]),
]);

export const REVISION_8 = lesson('alg-rev-8', 'Revision 8', 40, [
  ALG_ANSWERS_NOTE,
  h2('Question 1 [12]: calculate the products'),
  qs([
    { n: '1.1', marks: 3, q: r`$(x-1)(x^2+x+1)$`, a: r`Difference of cubes: $x^3-1$.` },
    { n: '1.2', marks: 3, q: r`$-\dfrac12(x-h)^2$`, a: r`$-\dfrac12(x^2-2xh+h^2)=-\dfrac12x^2+xh-\dfrac12h^2$.` },
    { n: '1.3', marks: 3, q: r`$(x^5+5x^{-1})(x^5-5x^{-1})$`, a: r`Difference of squares: $x^{10}-25x^{-2}=x^{10}-\dfrac{25}{x^2}$.` },
    { n: '1.4', marks: 3, q: r`$\left(x+\dfrac1x\right)^2$`, a: r`$x^2+2+\dfrac1{x^2}$.` },
  ]),
  h2('Question 2 [7]: factorise fully'),
  qs([
    { n: '2.1', marks: 3, q: r`$8x^2+6x+1$`, a: r`$(4x+1)(2x+1)$.` },
    { n: '2.2', marks: 4, q: r`$5xy-3y+10x-6$`, a: r`Group: $y(5x-3)+2(5x-3)=(5x-3)(y+2)$.` },
  ]),
  h2('Question 3 [4]'),
  qs([
    { n: '3', marks: 4, q: r`Calculate the value of $f(x)=\dfrac{x^2-25}{x-5}$ if $x=12\,345\,654\,321$.`, a: r`$f(x)=\dfrac{(x-5)(x+5)}{x-5}=x+5=12\,345\,654\,326$.` },
  ]),
  h2('Question 4 [3]'),
  qs([
    { n: '4', marks: 3, q: r`Calculate the value of $2022^2-2012^2$.`, a: r`Difference of squares: $(2022-2012)(2022+2012)=10\times4034=40\,340$.` },
  ]),
  note(r`These are my own worked answers; the book’s answer key was not photographed.`),
]);

export const ALG_REVISION_4_LESSONS: Lesson[] = [REVISION_7, REVISION_8];
