import type { Figure, Lesson } from '../../lib/types';
import { r, h2, note, fig, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Revision and Exemplars: Revision 13 (functions) and Revision 14 / Exemplar 1 (Q1-4).
 * Book pp. 231-233; photo 92.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-algebra-revision', id, title, minutes, blocks);

const q1Fig: Figure = {
  xRange: [-5, 5], yRange: [-9, 9], axes: true, grid: true,
  curves: [
    { fn: (x: number) => Math.pow(2, 1 - x) },
    { fn: (x: number) => -4 / x, domain: [-5, -0.45], color: 'alt' },
    { fn: (x: number) => -4 / x, domain: [0.45, 5], color: 'alt' },
  ],
  points: [{ id: 'A', x: -1, y: 4, label: 'A(-1; 4)' }, { id: 'B', x: 0, y: 2, label: 'B(0; 2)' }, { id: 'E', x: 2, y: 0.5, label: 'E' }, { id: 'F', x: 2, y: -2, label: 'F' }],
  caption: 'f(x) = 2⁻ˣ⁺¹ and g(x) = −4/x',
} as Figure;

export const REVISION_13 = lesson('alg-rev-13', 'Revision 13: Functions [27]', 40, [
  ALG_ANSWERS_NOTE,
  h2('Question 1 [16]: $f(x)=2^{-x+p}$ and $g(x)=\dfrac qx$'),
  note(r`The sketch shows $A(-1;4)$ and $B(0;2)$ on $f$ (the curve crossing the y-axis), and $A$ also on $g$. $E$ and $F$ are on $f$ and $g$ directly above and below $D$ on the x-axis.`),
  qs([
    { n: '1.1', marks: 4, q: r`Calculate the values of $p$ and $q$.`, a: r`$B(0;2)$ is on $f$: $2=2^{p}\Rightarrow p=1$. Check with $A$: $f(-1)=2^{1+1}=4$ ✔. $A(-1;4)$ is on $g$: $4=\dfrac q{-1}\Rightarrow q=-4$.` },
    { n: '1.2', marks: 1, q: r`Write down the domain of $g(x)$.`, a: r`$x\in\mathbb{R},\;x\ne0$.` },
    { n: '1.3', marks: 1, q: r`Write down the range of $f$.`, a: r`$y>0$.` },
    { n: '1.4', marks: 1, q: r`Write down the equation of the asymptote of $f$.`, a: r`$y=0$.` },
    { n: '1.5', marks: 2, q: r`Write down the equations of the axes of symmetry of $g$.`, a: r`The asymptotes cross at the origin, so $y=x$ and $y=-x$.` },
    { n: '1.6', marks: 4, q: r`$EDF$ is a line perpendicular to the x-axis. Calculate the distance $EF$ if $OD=2$ units.`, a: r`$E$ is on $f$ at $x=2$: $f(2)=2^{-2+1}=\dfrac12$. $F$ is on $g$ at $x=2$: $g(2)=\dfrac{-4}2=-2$. $EF=\dfrac12-(-2)=\dfrac52$ units.` },
    { n: '1.7', marks: 3, q: r`For which values of $x$ is $f>g$?`, a: r`For $x>0$, $g<0<f$, so $f>g$. For $x<0$ the graphs meet at $A$ ($x=-1$): at $x=-2$, $f=8>g=2$; at $x=-0{,}5$, $f\approx2{,}83<g=8$. So $f>g$ for $x<-1$ or $x>0$.` },
  ]),
  fig(q1Fig),
  h2('Question 2 [11]: $f(x)=a^{x+p}$ through $(0;2)$ and $P(3;9)$'),
  qs([
    { n: '2.1', marks: 6, q: r`Calculate the values of $a$ and $p$ if the point $P(3;9)$ lies on the graph.`, a: r`The y-intercept gives $a^p=2$. $P$: $a^{3+p}=9\Rightarrow a^3\cdot a^p=9\Rightarrow2a^3=9\Rightarrow a^3=\dfrac92$, so $a=\sqrt[3]{4{,}5}\approx1{,}65$. Then $p=\log_a2=\dfrac{\ln2}{\ln a}\approx1{,}38$. (Check: $1{,}65^{4{,}38}\approx9$ ✔.)` },
    { n: '2.2', marks: 1, q: r`Write down the equation of the asymptote of $f$.`, a: r`$y=0$.` },
    { n: '2.3', marks: 1, q: r`Write down the range of $f$.`, a: r`$y>0$.` },
    { n: '2.4', marks: 1, q: r`For which $x$ values is $f<0$?`, a: r`None: $f(x)>0$ for every real $x$.` },
    { n: '2.5', marks: 2, q: r`Write down the equation of $h(x)$ if it is the reflection of $f$ in the y-axis.`, a: r`Replace $x$ by $-x$: $h(x)=a^{-x+p}$.` },
  ]),
  note(r`The sketch has no scale for $p$; the values of $a$ and $p$ in 2.1 are not whole numbers (exact: $a=\sqrt[3]{9/2}$).`),
]);

export const REVISION_14 = lesson('alg-rev-14', 'Revision 14 / Exemplar 1 (2 hours): Questions 1–4', 55, [
  ALG_ANSWERS_NOTE,
  h2('Question 1: Equations and inequalities [10]'),
  qs([
    { n: '1.1', marks: 1, q: r`If $3x-2(x-2)=4x-(5x-1)$, $x=$?`, a: r`$x+4=-x+1\Rightarrow2x=-3\Rightarrow x=-\dfrac32$.` },
    { n: '1.2', marks: 5, q: r`Solve for $x$ and $y$: $2x+3y=-2$ and $x-3y=8$.`, a: r`Add: $3x=6\Rightarrow x=2$. Then $2-3y=8\Rightarrow y=-2$.` },
    { n: '1.3', marks: 4, q: r`Solve for $x$ and illustrate on a number line: $-2\le\dfrac{-2x+4}3<6$`, a: r`$-6\le-2x+4<18\Rightarrow-10\le-2x<14\Rightarrow5\ge x>-7$, i.e. $-7<x\le5$.` },
  ]),
  h2('Question 2: Exponents [14]'),
  qs([
    { n: '2.1', marks: 3, q: r`Simplify $\dfrac{a^{\frac1{12}}a^{\frac16}}{a^{\frac14}}$`, a: r`$a^{\frac1{12}+\frac2{12}-\frac3{12}}=a^0=1$.` },
    { n: '2.2', marks: 3, q: r`$\dfrac{25^{x-1}\cdot125^{x+1}}{625^{x-2}}$`, a: r`$\dfrac{5^{2x-2}\cdot5^{3x+3}}{5^{4x-8}}=5^{2x-2+3x+3-4x+8}=5^{x+9}$.` },
    { n: '2.3', marks: 4, q: r`$\left(\dfrac1{4^{-1}-9^{-1}}\right)^{\frac12}$`, a: r`$4^{-1}-9^{-1}=\dfrac14-\dfrac19=\dfrac5{36}$. $\left(\dfrac{36}5\right)^{\frac12}=\dfrac6{\sqrt5}=\dfrac{6\sqrt5}5$.` },
    { n: '2.4', marks: 4, q: r`$\dfrac{7\cdot3^n-3^n}{3^{n+1}}$`, a: r`$\dfrac{6\cdot3^n}{3\cdot3^n}=2$.` },
  ]),
  h2('Question 3: Surds [16]'),
  qs([
    { n: '3.1', marks: 3, q: r`Simplify $\sqrt{27x^8}-\sqrt{75x^8}$`, a: r`$3\sqrt3x^4-5\sqrt3x^4=-2\sqrt3x^4$.` },
    { n: '3.2', marks: 4, q: r`$\sqrt5(\sqrt{45}-3\sqrt{20}+2\sqrt5)$`, a: r`$\sqrt5(3\sqrt5-6\sqrt5+2\sqrt5)=\sqrt5(-\sqrt5)=-5$.` },
    { n: '3.3', marks: 3, q: r`$\dfrac3{\sqrt2}+\sqrt{50}$`, a: r`$\dfrac{3\sqrt2}2+5\sqrt2=\dfrac{13\sqrt2}2$.` },
    { n: '3.4.1', marks: 3, context: r`Given $Y=\sqrt{\dfrac{-8}{3-2x}}+\dfrac2x$.`, q: r`Show that $Y$ is rational if $x=2{,}5$.`, a: r`$3-2(2{,}5)=-2$, so $\sqrt{\dfrac{-8}{-2}}=\sqrt4=2$, and $\dfrac2{2{,}5}=0{,}8$. $Y=2{,}8=\dfrac{14}5$, rational.` },
    { n: '3.4.2', marks: 3, q: r`Determine the values of $x$ for which $Y$ is a real number.`, a: r`Need $\dfrac{-8}{3-2x}\ge0$, so $3-2x<0\Rightarrow x>\dfrac32$; also $x\ne0$ (already true). $x>\dfrac32$.` },
  ]),
  h2('Question 4: Factorisation, products [8]'),
  qs([
    { n: '4.1', marks: 2, q: r`$(1-6x)(2x-4)$`, a: r`$2x-4-12x^2+24x=-12x^2+26x-4$.` },
    { n: '4.2', marks: 3, q: r`$(5x-6y)^2$`, a: r`$25x^2-60xy+36y^2$.` },
    { n: '4.3', marks: 3, q: r`$\left(x^2+\dfrac3x\right)^2$`, a: r`$x^4+6x+\dfrac9{x^2}$.` },
  ]),
]);

export const ALG_REVISION_7_LESSONS: Lesson[] = [REVISION_13, REVISION_14];
