import type { Figure, Lesson } from '../../lib/types';
import { r, h2, note, fig, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Exemplar 2 (continued): Questions 4-8. Book pp. 236-237; photo 94.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-algebra-revision', id, title, minutes, blocks);

const q6Fig: Figure = {
  xRange: [-5, 3], yRange: [-6, 10], axes: true, grid: true,
  curves: [
    { fn: (x: number) => 2 * Math.pow(0.5, x) },
    { fn: (x: number) => -1.5 * x * x - 6 * x + 2, color: 'alt' },
  ],
  points: [{ id: 'A', x: -2, y: 8, label: 'A(-2; 8)' }, { id: 'B', x: 0, y: 2, label: 'B(0; 2)' }],
  caption: 'f(x) = 2·(½)ˣ and g(x) = −1,5x² − 6x + 2',
} as Figure;

const q8Fig: Figure = {
  xRange: [-5, 4], yRange: [-6, 6], axes: true, grid: true,
  curves: [
    { fn: (x: number) => -x * x - 2 * x + 3 },
    { fn: (x: number) => -Math.pow(2, x) + 1, color: 'alt' },
  ],
  lines: [{ m: 0, c: 1, dashed: true, color: 'amber' }],
  points: [
    { id: 'A', x: -3, y: 0, label: '(-3; 0)' }, { id: 'B', x: 1, y: 0, label: '(1; 0)' },
    { id: 'C', x: 0, y: 3, label: '(0; 3)' }, { id: 'T', x: -1, y: 4, label: 'TP(-1; 4)' },
    { id: 'O', x: 0, y: 0, label: '(0; 0)' },
  ],
  caption: 'f(x) = −x² − 2x + 3 and g(x) = −2ˣ + 1 (asymptote y = 1)',
} as Figure;

export const EXEMPLAR_2B = lesson('alg-rev-exemplar-2b', 'Exemplar 2 (continued): Questions 4–8', 70, [
  ALG_ANSWERS_NOTE,
  h2('Question 4: Patterns [23]'),
  qs([
    { n: '4.1.1', marks: 2, context: r`Consider the sequence $5;\,13;\,21;\,\ldots$`, q: r`Write down the next two terms.`, a: r`Constant difference $8$: $29$ and $37$.` },
    { n: '4.1.2', marks: 4, q: r`Determine the expression for the $n$th term, $T_n$.`, a: r`$T_n=a+(n-1)d=5+8(n-1)=8n-3$.` },
    { n: '4.1.3', marks: 2, q: r`Which term is $93$?`, a: r`$8n-3=93\Rightarrow n=12$: the 12th term.` },
    { n: '4.2.1', marks: 2, context: r`Temba’s savings pattern: R28; R38; R48; R58; $\ldots$`, q: r`Determine the next two amounts that he saves.`, a: r`R68 and R78.` },
    { n: '4.2.2', marks: 7, q: r`Determine the expression for the $n$th term, $T_n$.`, a: r`$T_n=28+10(n-1)=10n+18$.` },
    { n: '4.2.3', marks: 2, q: r`Calculate the amount he would save in the tenth week, $T_{10}$.`, a: r`$T_{10}=10(10)+18=R118$.` },
    { n: '4.2.4', marks: 4, q: r`Calculate the week that he would save R314.`, a: r`$10n+18=314\Rightarrow n=29{,}6$, which is not a whole number: with the pattern as printed no week has exactly R314 (week 29 gives R308 and week 30 gives R318). The first week with at least R314 is week 30. (The book may intend a different starting amount.)` },
  ]),
  h2('Question 5: Products [6]'),
  qs([
    { n: '5.1', marks: 2, q: r`$(3+2x)(5x-1)$`, a: r`$15x-3+10x^2-2x=10x^2+13x-3$.` },
    { n: '5.2', marks: 2, q: r`$\dfrac{-2}3(x-2)^2$`, a: r`$-\dfrac23(x^2-4x+4)=-\dfrac23x^2+\dfrac83x-\dfrac83$.` },
    { n: '5.3', marks: 2, q: r`$(x^3-2\sqrt3\,y)(x^3+2\sqrt3\,y)$`, a: r`$x^6-(2\sqrt3\,y)^2=x^6-12y^2$.` },
  ]),
  h2('Question 6: Functions [9]'),
  note(r`$f(x)=2\cdot k^x$ and $g(x)=ax^2+bx+c$ intersect at $A(-2;8)$ (the turning point of $g$) and at $B$ on the y-axis.`),
  qs([
    { n: '6.1', marks: 2, q: r`Determine the value of $k$.`, a: r`$A$ is on $f$: $8=2k^{-2}\Rightarrow k^{-2}=4\Rightarrow k^2=\dfrac14\Rightarrow k=\dfrac12$ (a base is positive).` },
    { n: '6.2', marks: 1, q: r`The co-ordinates of $B$.`, a: r`$B$ is on the y-axis: $f(0)=2\cdot\left(\tfrac12\right)^0=2$, so $B(0;2)$.` },
    { n: '6.3', marks: 4, q: r`If $c=2$ and $a=-1{,}5$, find the equation of $g$.`, a: r`The turning point has $x=-\dfrac b{2a}=-2\Rightarrow b=4a=-6$. $g(x)=-1{,}5x^2-6x+2$. Check: $g(-2)=-6+12+2=8$ ✔.` },
    { n: '6.4', marks: 2, q: r`For which values of $x$ is $g(x)>f(x)$?`, a: r`$g$ is above $f$ between the intersection points $A$ ($x=-2$) and $B$ ($x=0$): $-2<x<0$.` },
  ]),
  fig(q6Fig),
  h2('Question 7 [6]'),
  qs([
    { n: '7', marks: 6, q: r`The denominator of a fraction is 2 less than the numerator. If 5 is added to the numerator and 3 to the denominator, the new fraction equals the original fraction. Find the original fraction.`, a: r`Let the numerator be $n$: the fraction is $\dfrac n{n-2}$. $\dfrac{n+5}{n-2+3}=\dfrac{n+5}{n+1}=\dfrac n{n-2}\Rightarrow(n+5)(n-2)=n(n+1)\Rightarrow n^2+3n-10=n^2+n\Rightarrow n=5$. The fraction is $\dfrac53$ (check: $\dfrac{10}6=\dfrac53$ ✔).` },
  ]),
  h2('Question 8 [10]: $f(x)=-x^2-2x+3$ and $g(x)=-2^x+1$'),
  qs([
    { n: '8.1', marks: 7, q: r`Draw both functions on the same set of axes, showing all x and y intercepts, the turning point and the asymptote.`, a: r`$f$: x-intercepts $x^2+2x-3=0\Rightarrow(x+3)(x-1)=0$: $(-3;0)$, $(1;0)$; y-intercept $(0;3)$; turning point $x=-1$, $y=4$: $(-1;4)$; arms down. $g$: asymptote $y=1$; y-intercept $g(0)=0$: $(0;0)$, which is also the x-intercept ($-2^x+1=0\Rightarrow x=0$); decreasing (below the asymptote). See the graph below.` },
    { n: '8.2', marks: 1, q: r`Write down the axis of symmetry of $f$.`, a: r`$x=-1$.` },
    { n: '8.3', marks: 1, q: r`What is the range of $f$?`, a: r`$y\le4$.` },
    { n: '8.4', marks: 1, q: r`What is the range of $g$?`, a: r`$y<1$.` },
  ]),
  fig(q8Fig),
  note(r`Total marks for Exemplar 2: 118.`),
]);

export const ALG_REVISION_9_LESSONS: Lesson[] = [EXEMPLAR_2B];
