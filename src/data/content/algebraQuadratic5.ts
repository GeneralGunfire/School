import type { Lesson } from '../../lib/types';
import { r, h2, note, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 5: Quadratic Equations, Trial Tests 1–4. Book pp. 108–109; photo 39 of the Math-Algebra folder.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-quadratic-equations', id, title, minutes, blocks);

export const QUAD_TRIALS = lesson('alg-u5-trial-tests', 'Trial Tests 1–4 (Quadratic Equations)', 60, [
  ALG_ANSWERS_NOTE,
  note(r`Give answers to two decimal places where necessary. Check every fraction equation against its restrictions.`),

  h2('Trial Test 1 [40]'),
  qs([
    { n: '1.1.1', marks: 6, q: r`Solve for $x$: $\dfrac1x+\dfrac5{x-1}=6$`, a: r`Restrictions $x\ne0,1$. Multiply by $x(x-1)$: $(x-1)+5x=6x(x-1)\Rightarrow6x^2-12x+1=0$. $x=\dfrac{12\pm\sqrt{120}}{12}$, so $x\approx1{,}91$ or $x\approx0{,}09$.` },
    { n: '1.1.2', marks: 5, q: r`Solve for $x$: $x^2-3x=28$`, a: r`$x^2-3x-28=0\Rightarrow(x-7)(x+4)=0$. $x=7$ or $x=-4$.` },
    { n: '1.2', marks: 7, q: r`Solve for $x$ and $y$ simultaneously: $2x-y=3$ and $x^2+5xy+y^2=15$`, a: r`$y=2x-3$. $x^2+5x(2x-3)+(2x-3)^2=15\Rightarrow15x^2-27x-6=0\Rightarrow5x^2-9x-2=0\Rightarrow(5x+1)(x-2)=0$. $x=2,\;y=1$ or $x=-\dfrac15,\;y=-\dfrac{17}5$.` },
    { n: '2.1.1', marks: 4, q: r`Solve for $x$: $(x-4)(x-3)=12$`, a: r`$x^2-7x+12=12\Rightarrow x^2-7x=0\Rightarrow x(x-7)=0$. $x=0$ or $x=7$.` },
    { n: '2.1.2', marks: 5, q: r`Solve for $x$: $3x^2+2x+6=10$`, a: r`$3x^2+2x-4=0$. $x=\dfrac{-2\pm\sqrt{52}}{6}$, so $x\approx0{,}87$ or $x\approx-1{,}54$.` },
    { n: '2.1.3', marks: 6, q: r`Solve for $x$: $(3x-2)^2=3x$`, a: r`$9x^2-12x+4=3x\Rightarrow9x^2-15x+4=0$. $\Delta=225-144=81$, $x=\dfrac{15\pm9}{18}$. $x=\dfrac43$ or $x=\dfrac13$.` },
    { n: '2.2', marks: 7, q: r`Solve for $x$ and $y$ simultaneously: $4y+3x=50$ and $x^2+y^2=100$`, a: r`$y=\dfrac{50-3x}4$. $x^2+\dfrac{(50-3x)^2}{16}=100\Rightarrow25x^2-300x+900=0\Rightarrow(x-6)^2=0$. Only $x=6$, $y=8$ (the line just touches the circle).` },
  ]),

  h2('Trial Test 2'),
  qs([
    { n: '1.1.1', q: r`Solve for $x$: $x^2-2x=24$`, a: r`$x^2-2x-24=0\Rightarrow(x-6)(x+4)=0$. $x=6$ or $x=-4$.` },
    { n: '1.1.2', q: r`Solve for $x$: $x+2=\dfrac6x$`, a: r`$x\ne0$. $x^2+2x-6=0\Rightarrow x=\dfrac{-2\pm\sqrt{28}}2=-1\pm\sqrt7$, so $x\approx1{,}65$ or $x\approx-3{,}65$.` },
    { n: '1.1.3', q: r`Solve for $x$: $(x-1)(x-2)=6$`, a: r`$x^2-3x+2=6\Rightarrow x^2-3x-4=0\Rightarrow(x-4)(x+1)=0$. $x=4$ or $x=-1$.` },
    { n: '1.2', q: r`Solve for $x$ and $y$ simultaneously: $x+3y=5$ and $xy+y^2=3$`, a: r`$x=5-3y$. $(5-3y)y+y^2=3\Rightarrow2y^2-5y+3=0\Rightarrow(2y-3)(y-1)=0$. $y=\dfrac32,\;x=\dfrac12$ or $y=1,\;x=2$.` },
    { n: '2.1.1', q: r`Solve for $x$: $(4+x)(3-x)=-8$`, a: r`$12-x-x^2=-8\Rightarrow x^2+x-20=0\Rightarrow(x+5)(x-4)=0$. $x=-5$ or $x=4$.` },
    { n: '2.1.2', q: r`Solve for $x$: $\dfrac1{x+1}+\dfrac{2x}{x-1}=1$`, a: r`Restrictions $x\ne\pm1$. $x^2+3x=0$. $x=0$ or $x=-3$.` },
    { n: '2.1.3', q: r`Solve for $x$: $(3x-2)^2=4$`, a: r`$3x-2=\pm2$. $x=\dfrac43$ or $x=0$.` },
    { n: '2.2', q: r`Solve for $x$ and $y$ simultaneously: $y+7=2x$ and $x^2-xy+3y^2=15$`, a: r`$y=2x-7$. $x^2-x(2x-7)+3(2x-7)^2=15\Rightarrow11x^2-77x+132=0\Rightarrow x^2-7x+12=0$. $x=3,\;y=-1$ or $x=4,\;y=1$.` },
  ]),

  h2('Trial Test 3 [32]'),
  qs([
    { n: '1.1.1', marks: 3, q: r`Solve for $x$: $x^2+3x-10=0$`, a: r`$(x+5)(x-2)=0$. $x=-5$ or $x=2$.` },
    { n: '1.1.2', marks: 6, q: r`Solve for $x$: $x-1=\dfrac3{x-1}+2$`, a: r`Restriction $x\ne1$. $(x-3)(x-1)=3\Rightarrow x^2-4x=0$. $x=0$ or $x=4$.` },
    { n: '1.1.3', marks: 4, q: r`Solve for $x$: $x^2+7x=5$`, a: r`$x^2+7x-5=0$. $x=\dfrac{-7\pm\sqrt{69}}2$, so $x\approx0{,}65$ or $x\approx-7{,}65$.` },
    { n: '1.2.1', marks: 2, context: r`The sum of the first number and half of the second is $57$. The difference between half the first and the second is $6$. Let the numbers be $x$ and $y$ where $x,y$ are natural numbers.`, q: r`Write down two equations in terms of $x$ and $y$.`, a: r`$x+\dfrac y2=57$ and $\dfrac x2-y=6$.` },
    { n: '1.2.2', marks: 3, q: r`Hence, or otherwise, calculate the values of the two numbers.`, a: r`From the second equation $x=2y+12$. Then $2y+12+\dfrac y2=57\Rightarrow\dfrac52y=45\Rightarrow y=18$ and $x=48$. Check: $48+9=57$ ✔ and $24-18=6$ ✔. (Reading it the other way round, $y-\dfrac x2=6$, gives $x=43{,}2$, which is not a natural number.)` },
    { n: '2.1.1', marks: 3, q: r`Solve for $x$: $x(x-9)+14=0$`, a: r`$x^2-9x+14=0\Rightarrow(x-2)(x-7)=0$. $x=2$ or $x=7$.` },
    { n: '2.1.2', marks: 6, q: r`Solve for $x$: $\dfrac6{x+1}-\dfrac{3x}{1-x^2}=\dfrac{2x}{x-1}$`, a: r`Restrictions $x\ne\pm1$. Since $1-x^2=-(x^2-1)$, the equation becomes $\dfrac6{x+1}+\dfrac{3x}{(x+1)(x-1)}=\dfrac{2x}{x-1}$. Multiply by $(x+1)(x-1)$: $6(x-1)+3x=2x(x+1)\Rightarrow2x^2-7x+6=0\Rightarrow(2x-3)(x-2)=0$. $x=\dfrac32$ or $x=2$.` },
    { n: '2.2.1', marks: 2, context: r`If $B=\dfrac{\sqrt{x+5}}{x-3}$, determine the values of $x$ for which:`, q: r`$B$ is undefined`, a: r`A fraction is undefined when its denominator is zero: $x-3=0$, so $x=3$.` },
    { n: '2.2.2', marks: 3, q: r`$B$ is non-real`, a: r`The square root of a negative number is non-real: $x+5<0$, so $x<-5$.` },
  ]),

  h2('Trial Test 4 [30]'),
  qs([
    { n: '1.1.1', marks: 2, q: r`Solve for $x$: $2x^2=4x$`, a: r`$2x^2-4x=0\Rightarrow2x(x-2)=0$. $x=0$ or $x=2$. (Do not divide by $x$: you would lose the answer $x=0$.)` },
    { n: '1.1.2', marks: 4, q: r`Solve for $x$: $x+3=\dfrac5x$`, a: r`$x\ne0$. $x^2+3x-5=0$. $x=\dfrac{-3\pm\sqrt{29}}2$, so $x\approx1{,}19$ or $x\approx-4{,}19$.` },
    { n: '1.1.3', marks: 5, q: r`Solve for $x$: $x^2-x=3$`, a: r`$x^2-x-3=0$. $x=\dfrac{1\pm\sqrt{13}}2$, so $x\approx2{,}30$ or $x\approx-1{,}30$.` },
    { n: '1.2', marks: 7, q: r`Solve for $x$ and $y$ simultaneously: $x+y=3$ and $2x^2+2y^2=5xy$`, a: r`$y=3-x$. $2x^2+2(3-x)^2=5x(3-x)\Rightarrow9x^2-27x+18=0\Rightarrow x^2-3x+2=0\Rightarrow(x-1)(x-2)=0$. $x=1,\;y=2$ or $x=2,\;y=1$.` },
    { n: '2.1.1', marks: 4, q: r`Solve for $x$: $(x+3)(x-1)=-x+1$`, a: r`$(x+3)(x-1)+(x-1)=0\Rightarrow(x-1)(x+4)=0$. $x=1$ or $x=-4$. (Expanding gives the same: $x^2+3x-4=0$.)` },
    { n: '2.1.2', marks: 4, q: r`Solve for $x$: $x^2+3x=1$`, a: r`$x^2+3x-1=0$. $x=\dfrac{-3\pm\sqrt{13}}2$, so $x\approx0{,}30$ or $x\approx-3{,}30$.` },
    { n: '2.2', marks: 4, q: r`If $f(x)=x^2+2x$, show by completing the square that $f(x)=(x+1)^2-1$.`, a: r`$f(x)=x^2+2x+1^2-1^2=(x+1)^2-1$. (Add and subtract the square of half the coefficient of $x$.)` },
  ]),
]);

export const ALG_QUADRATIC_5_LESSONS: Lesson[] = [QUAD_TRIALS];
