import type { Lesson } from '../../lib/types';
import { r, h2, note, fig, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';
import { hyper } from './algebraFunctions7';
import { expo } from './algebraExponential1';

/**
 * Revision and Exemplars: Revision 9 (equations) and Revision 10 (functions). Book pp. 227-229; photo 90.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-algebra-revision', id, title, minutes, blocks);

export const REVISION_9 = lesson('alg-rev-9', 'Revision 9: Equations', 40, [
  ALG_ANSWERS_NOTE,
  h2('Question 1 [16]'),
  qs([
    { n: '1.1.1', marks: 2, q: r`Solve for $x$ (two decimal places where necessary): $(x+4)(y-3)=0$ if $y=3$`, a: r`$y-3=0$, so the left-hand side is $0$ whatever $x$ is. Every real number $x$ is a solution.` },
    { n: '1.1.2', marks: 2, q: r`$2x(x-2)=0$`, a: r`$x=0$ or $x=2$.` },
    { n: '1.1.3', marks: 3, q: r`$2x^2-x-5=0$`, a: r`$x=\dfrac{1\pm\sqrt{1+40}}4=\dfrac{1\pm\sqrt{41}}4$, so $x\approx1{,}85$ or $x\approx-1{,}35$.` },
    { n: '1.2.1', marks: 2, context: r`If $a=\sqrt{\dfrac1x-5}$, determine the value(s) of $x$ for which:`, q: r`$a=0$`, a: r`$\dfrac1x-5=0\Rightarrow\dfrac1x=5\Rightarrow x=\dfrac15$.` },
    { n: '1.2.2', marks: 3, q: r`$a$ is undefined`, a: r`A fraction is undefined when its denominator is $0$: $x=0$.` },
    { n: '1.2.3', marks: 4, q: r`The values $x=3$ and $y=-1$ satisfy $x^2-3xy+by^2=-5$. Determine $b$.`, a: r`$9-3(3)(-1)+b(-1)^2=-5\Rightarrow9+9+b=-5\Rightarrow b=-23$.` },
  ]),
  h2('Question 2 [17]'),
  qs([
    { n: '2.1', context: r`Given $f(x)=(x^2-3)(3x-1)(x+2)$. Determine the zeros (roots) of $f$ if:`, q: r`2.1.1 $x$ is an integer. (1)`, a: r`The zeros are $x=\pm\sqrt3$, $x=\tfrac13$, $x=-2$. The only integer is $x=-2$.`, marks: 1 },
    { n: '2.1.2', marks: 1, q: r`$x$ is a rational number.`, a: r`$x=\dfrac13$ and $x=-2$.` },
    { n: '2.1.3', marks: 2, q: r`$x$ is a real number.`, a: r`$x=\sqrt3$, $x=-\sqrt3$, $x=\dfrac13$, $x=-2$.` },
    { n: '2.2.1', marks: 5, q: r`Solve for $x$ (two decimals if needed): $\dfrac3{x-2}+\dfrac3{x+2}=2$`, a: r`$x\ne\pm2$. Multiply by $(x-2)(x+2)$: $3(x+2)+3(x-2)=2(x^2-4)\Rightarrow6x=2x^2-8\Rightarrow x^2-3x-4=0\Rightarrow(x-4)(x+1)=0$. $x=4$ or $x=-1$.` },
    { n: '2.2.2', marks: 4, q: r`$2x=\dfrac{15-x}x$`, a: r`$x\ne0$. $2x^2=15-x\Rightarrow2x^2+x-15=0\Rightarrow(2x-5)(x+3)=0$. $x=\dfrac52$ or $x=-3$.` },
    { n: '2.3', marks: 4, q: r`Solve for $x$ correct to two decimal places by completing the square: $-3x^2+7x-1=0$`, a: r`Divide by $-3$: $x^2-\dfrac73x+\dfrac13=0\Rightarrow x^2-\dfrac73x=-\dfrac13$. Add $\left(\dfrac76\right)^2$: $\left(x-\dfrac76\right)^2=-\dfrac13+\dfrac{49}{36}=\dfrac{37}{36}$. $x=\dfrac76\pm\dfrac{\sqrt{37}}6$, so $x\approx2{,}18$ or $x\approx0{,}15$.` },
  ]),
]);

export const REVISION_10 = lesson('alg-rev-10', 'Revision 10: Functions [20]', 40, [
  ALG_ANSWERS_NOTE,
  h2('Question 1 [10]: $f(x)=\dfrac{-6}{x-2}-2$'),
  qs([
    { n: '1.1', marks: 1, q: r`Give the domain of $f$.`, a: r`$x\in\mathbb{R},\;x\ne2$.` },
    { n: '1.2', marks: 2, q: r`For what value of $x$ is $f(x)=0$?`, a: r`$\dfrac{-6}{x-2}=2\Rightarrow x-2=-3\Rightarrow x=-1$.` },
    { n: '1.3', marks: 2, q: r`Determine the y-intercept of $f$.`, a: r`$f(0)=\dfrac{-6}{-2}-2=1$, so $(0;1)$.` },
    { n: '1.4', marks: 2, q: r`Write down the equations of the asymptotes of $f$.`, a: r`Vertical: $x=2$. Horizontal: $y=-2$.` },
    { n: '1.5', marks: 3, q: r`Draw a neat graph of $f$, indicating the asymptotes and intercepts with the axes.`, a: r`Asymptotes $x=2$ and $y=-2$; $a=-6<0$, so the branches lie in the 2nd and 4th quadrants of the asymptotes. Intercepts $(-1;0)$ and $(0;1)$. See the graph below.` },
  ]),
  fig(hyper(-6, 2, -2, [-8, 10], [-12, 10], [[-1, 0, '(-1; 0)'], [0, 1, '(0; 1)']], 'f(x) = −6/(x − 2) − 2')),
  h2('Question 2 [10]: the graph of $y=2^x-4$ (sketch with $A$ the y-intercept and $B$ the x-intercept)'),
  qs([
    { n: '2.1', marks: 1, q: r`Write down the equation of the asymptote of this function.`, a: r`$y=-4$.` },
    { n: '2.2', marks: 3, q: r`Give the co-ordinates of points $A$ and $B$.`, a: r`$A$ (y-intercept): $y=2^0-4=-3$, so $A(0;-3)$. $B$ (x-intercept): $2^x-4=0\Rightarrow2^x=4\Rightarrow x=2$, so $B(2;0)$.` },
    { n: '2.3.1', marks: 2, q: r`Give the equation of a reflection in the x-axis (in the form $y=\ldots$).`, a: r`Change $y$ to $-y$: $y=-(2^x-4)=-2^x+4$.` },
    { n: '2.3.2', marks: 2, q: r`a reflection in the y-axis`, a: r`Change $x$ to $-x$: $y=2^{-x}-4$.` },
    { n: '2.3.3', marks: 2, q: r`a shifted function 3 units to the right`, a: r`Replace $x$ by $x-3$: $y=2^{x-3}-4$.` },
  ]),
  fig(expo(1, 2, 0, -4, [-4, 4], [-8, 10], [[0, -3, 'A(0; -3)'], [2, 0, 'B(2; 0)']], 'y = 2ˣ − 4')),
  note(r`Total for Revision 10: 20.`),
]);

export const ALG_REVISION_5_LESSONS: Lesson[] = [REVISION_9, REVISION_10];
