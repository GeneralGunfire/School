import type { Lesson } from '../../lib/types';
import { r, h2, note, fig, qs, lesson as make } from './algKit';
import { expo } from './algebraExponential1';

/**
 * Unit 6: Functions, D. Exponential function: worked Questions 1–3. Book pp. 141–142; photo 53.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-functions-exponential', id, title, minutes, blocks);

export const EXPONENTIAL_EXAMPLES = lesson('alg-u6-d-exponential-examples', 'D. Exponential Function: Worked Questions', 40, [
  h2('Question 1: Draw the following functions'),
  note(r`$f(x)=5^x,\;g(x)=2\cdot5^x,\;h(x)=5^{x+1},\;m(x)=5^x+1,\;k(x)=5^x-5$. The question prints $g(x)=2{,}5^x$, but the solution works with $g(x)=2\cdot5^x$ (y-intercept $2$), so that is what is shown here. The solution’s heading for $k$ reads “$5^x-1$”, but its working uses $5^x-5$.`),
  qs([
    { n: '1.1', q: r`$f(x)=5^x$`, a: r`An exponential function with y-intercept $(0;1)$ and horizontal asymptote $y=0$. Increasing ($a=5>1$).` },
    { n: '1.2', q: r`$g(x)=2\cdot5^x$`, a: r`Same asymptote as $f$ ($y=0$). y-intercept: $g(0)=2\cdot5^0=2\cdot1=2$, so $(0;2)$.` },
    { n: '1.3', q: r`$h(x)=5^{x+1}$`, a: r`Same asymptote as $f$ ($y=0$). y-intercept: $h(0)=5^{0+1}=5$, so $(0;5)$. (It is $f$ shifted 1 unit to the left.)` },
    { n: '1.4', q: r`$m(x)=5^x+1$`, a: r`Different asymptote from $f$: $y=1$. Draw the asymptote. y-intercept: $m(0)=5^0+1=1+1=2$, so $(0;2)$. No x-intercept.` },
    { n: '1.5', q: r`$k(x)=5^x-5$`, a: r`Asymptote: $y=-5$. y-intercept: $k(0)=5^0-5=-4$, so $(0;-4)$. There is also an x-intercept: $0=5^x-5\Rightarrow5^x=5\Rightarrow x=1$, so $(1;0)$.` },
  ]),
  fig(expo(1, 5, 0, 0, [-3, 3], [-3, 30], [[0, 1, '(0; 1)']], '1.1  f(x) = 5ˣ')),
  fig(expo(2, 5, 0, 0, [-3, 3], [-3, 30], [[0, 2, '(0; 2)']], '1.2  g(x) = 2·5ˣ')),
  fig(expo(1, 5, -1, 0, [-3, 3], [-3, 30], [[0, 5, '(0; 5)']], '1.3  h(x) = 5ˣ⁺¹')),
  fig(expo(1, 5, 0, 1, [-3, 3], [-3, 30], [[0, 2, '(0; 2)']], '1.4  m(x) = 5ˣ + 1')),
  fig(expo(1, 5, 0, -5, [-3, 3], [-8, 24], [[0, -4, '(0; -4)'], [1, 0, '(1; 0)']], '1.5  k(x) = 5ˣ − 5')),

  h2('Question 2: Given $f(x)=\\left(\\tfrac12\\right)^x+1$ and $h(x)=3^{1-x}$'),
  qs([
    { n: '2.1', q: r`Draw all the graphs (show the intercepts if possible).`, a: r`$f$ is a type-2 function ($a=0{,}5<1$). Horizontal asymptote $y=1$. y-intercept: $f(0)=0{,}5^0+1=2$, so $(0;2)$ (the book labels this line “x-intercept”; there is no x-intercept because $f(x)>1$). $h(x)=3^{1-x}$ seems a type-1 function, but because of the negative sign in front of $x$ it is a type-2 (decreasing) function. Horizontal asymptote $y=0$. y-intercept: $h(0)=3^{1-0}=3$, so $(0;3)$.` },
    { n: '2.2', q: r`If $n(x)$ is the reflection of $f(x)$ in the y-axis and $b(x)$ is the reflection of $h(x)$ in the x-axis, write down the equations of $n(x)$ and $b(x)$.`, a: r`Reflection in the y-axis: change $x$ to $-x$: $n(x)=0{,}5^{-x}+1$ (which equals $2^x+1$). Reflection in the x-axis: change $y$ to $-y$: $b(x)=-h(x)=-3^{1-x}$. (The book words the second as “in the y-axis” but its working, “change $y$ with $-y$”, is the x-axis reflection.)` },
  ]),
  fig(expo(1, 0.5, 0, 1, [-3, 4], [-2, 10], [[0, 2, '(0; 2)']], '2.1  f(x) = (½)ˣ + 1')),
  fig(expo(1, 1 / 3, -1, 0, [-3, 4], [-2, 28], [[0, 3, '(0; 3)']], '2.1  h(x) = 3¹⁻ˣ')),

  h2('Question 3'),
  qs([
    { n: '3', context: r`The graph of $f(x)=1+a\cdot2^x$ ($a$ is a constant) passes through the origin.`, q: r`3.1 Show that $a=-1$.`, a: r`$f$ goes through $(0;0)$, which satisfies the equation: $0=1+a\cdot2^0\Rightarrow a=-1$.` },
    { n: '3.2', q: r`Determine the value of $f(-15)$ correct to FIVE decimal places.`, a: r`$f(-15)=1-2^{-15}=0{,}99997$.` },
    { n: '3.3', q: r`Determine the value of $x$ if $P(x;0{,}5)$ lies on the graph of $f$.`, a: r`$0{,}5=1-2^x\Rightarrow2^x=0{,}5=\dfrac12=2^{-1}\Rightarrow x=-1$.` },
    { n: '3.4', q: r`If the graph of $f$ is shifted 2 units to the right to form the function $h$, write down the equation of $h$.`, a: r`Shifting 2 units to the right: $h(x)=f(x-2)=1-2^{x-2}$.` },
  ]),
  fig(expo(-1, 2, 0, 1, [-6, 4], [-12, 3], [[0, 0, 'O(0; 0)'], [-1, 0.5, 'P(-1; 0,5)']], 'f(x) = 1 − 2ˣ')),
]);

export const ALG_EXPONENTIAL_2_LESSONS: Lesson[] = [EXPONENTIAL_EXAMPLES];
