import type { Figure, Lesson } from '../../lib/types';
import { r, h2, note, fig, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Revision 16 / Exemplar 3: Questions 1-9. Book pp. 238-241; photos 95-96.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-algebra-revision', id, title, minutes, blocks);

const q5Fig: Figure = {
  xRange: [-6, 5], yRange: [-5, 12], axes: true, grid: true,
  curves: [
    { fn: (x: number) => -3 / (x + 1) + 5, domain: [-6, -1.12] },
    { fn: (x: number) => -3 / (x + 1) + 5, domain: [-0.88, 5] },
    { fn: (x: number) => -3 * x + 2, color: 'alt' },
  ],
  lines: [{ x: -1, dashed: true, color: 'amber' }, { m: 0, c: 5, dashed: true, color: 'amber' }],
  points: [
    { id: 'A', x: -2, y: 8, label: 'A(-2; 8)' }, { id: 'B', x: 0, y: 2, label: 'B(0; 2)' },
    { id: 'C', x: -0.4, y: 0, label: 'C' }, { id: 'D', x: 2 / 3, y: 0, label: 'D' },
  ],
  caption: 'f(x) = −3/(x + 1) + 5 and g(x) = −3x + 2',
} as Figure;

const q6Fig: Figure = {
  xRange: [-4, 6], yRange: [-12, 8], axes: true, grid: true,
  curves: [
    { fn: (x: number) => x * x - 2 * x - 8 },
    { fn: (x: number) => -2 * (x - 2) * (x - 2), color: 'alt' },
  ],
  points: [
    { id: 'T', x: 1, y: -9, label: 'TP(1; -9)' }, { id: 'A', x: -2, y: 0, label: '(-2; 0)' },
    { id: 'B', x: 4, y: 0, label: '(4; 0)' }, { id: 'C', x: 0, y: -8, label: '(0; -8)' },
    { id: 'H', x: 2, y: 0, label: 'TP(2; 0)' }, { id: 'I', x: 10 / 3, y: -32 / 9, label: '(10/3; -32/9)' },
  ],
  caption: 'f(x) = x² − 2x − 8 and h(x) = −2(x − 2)²',
} as Figure;

export const EXEMPLAR_3A = lesson('alg-rev-exemplar-3a', 'Revision 16 / Exemplar 3: Questions 1–5', 80, [
  ALG_ANSWERS_NOTE,
  note(r`Part of the left-hand page is blurred in the photo. Where the printed wording is unclear, the reading used is stated. In Question 5 the gradient of the straight line is read from the sketch.`),
  h2('Question 1: Solve for the unknown [18]'),
  qs([
    { n: '1.1', marks: 2, q: r`$(3x-2)(x+3)=0$`, a: r`$x=\dfrac23$ or $x=-3$.` },
    { n: '1.2', marks: 4, q: r`$-7<\dfrac{-3x+1}2\le5$`, a: r`$-14<-3x+1\le10\Rightarrow-15<-3x\le9\Rightarrow5>x\ge-3$, i.e. $-3\le x<5$.` },
    { n: '1.3', marks: 5, q: r`$\dfrac9{2x-1}-\dfrac4x=1$`, a: r`$x\ne0,\tfrac12$. Multiply by $x(2x-1)$: $9x-4(2x-1)=x(2x-1)\Rightarrow x+4=2x^2-x\Rightarrow x^2-x-2=0\Rightarrow(x-2)(x+1)=0$. $x=2$ or $x=-1$.` },
    { n: '1.4', marks: 7, q: r`Determine $x$ and $y$: $2x-y=3$ and $x^2+5xy+y^2=15$`, a: r`$y=2x-3$. $x^2+5x(2x-3)+(2x-3)^2=15\Rightarrow15x^2-27x-6=0\Rightarrow5x^2-9x-2=0\Rightarrow(5x+1)(x-2)=0$. $x=2,\;y=1$ or $x=-\dfrac15,\;y=-\dfrac{17}5$.` },
  ]),
  h2('Question 2: Simplify without a calculator [17]'),
  qs([
    { n: '2.1', marks: 7, q: r`$\dfrac{x^2-9}{x^2-5x}\cdot\dfrac{5x-x^2}{2y+2}\div\dfrac{x^2-6x+9}{3-x+3y-xy}$`, a: r`Factorise: $\dfrac{(x-3)(x+3)}{x(x-5)}\cdot\dfrac{-x(x-5)}{2(y+1)}\div\dfrac{(x-3)^2}{(3-x)(1+y)}$. The first two fractions give $\dfrac{-(x-3)(x+3)}{2(y+1)}$. Dividing is multiplying by $\dfrac{(3-x)(1+y)}{(x-3)^2}=\dfrac{-(1+y)}{x-3}$. Product: $\dfrac{(x-3)(x+3)(1+y)}{2(y+1)(x-3)}=\dfrac{x+3}2$, with $x\ne0,3,5$ and $y\ne-1$.` },
    { n: '2.2', marks: 5, q: r`$\dfrac{6^{2x}\cdot50^{x-1}}{15^{2x-1}\cdot8^{x+1}}$`, a: r`Numerator: $2^{2x}3^{2x}\cdot2^{x-1}5^{2x-2}=2^{3x-1}3^{2x}5^{2x-2}$. Denominator: $3^{2x-1}5^{2x-1}\cdot2^{3x+3}$. Quotient: $2^{-4}\cdot3^{1}\cdot5^{-1}=\dfrac3{80}$.` },
    { n: '2.3', marks: 5, q: r`$\left(\dfrac{x^{-2}-y^{-2}}{2^{-1}}+\dfrac2{y^2}\right)^{-1}$`, a: r`$\dfrac{x^{-2}-y^{-2}}{2^{-1}}=\dfrac2{x^2}-\dfrac2{y^2}$. Adding $\dfrac2{y^2}$ gives $\dfrac2{x^2}$. The inverse: $\dfrac{x^2}2$.` },
  ]),
  h2('Question 3: Patterns [20]'),
  qs([
    { n: '3.1.1', marks: 3, context: r`Sequence $2;\,-4;\,-4;\,2;\,14;\,\ldots$ (first differences $-6;0;6;12$, second differences $6$).`, q: r`Write down the next term.`, a: r`Next first difference $18$: $14+18=32$.` },
    { n: '3.1.2', marks: 3, q: r`Find the general term.`, a: r`$2a=6$, $a=3$. $T_n=3n^2+bn+c$: $3+b+c=2$ and $12+2b+c=-4$, so $b=-15$, $c=14$. $T_n=3n^2-15n+14$.` },
    { n: '3.1.3', marks: 3, q: r`Calculate the 30th term.`, a: r`$T_{30}=3(900)-450+14=2\,264$.` },
    { n: '3.2.1', marks: 2, context: r`Figure 1 is one square (perimeter 4, area 1). Figure 2 is a plus-shape of 5 squares; Figure 3 a plus-shape of 9 squares.`, q: r`Write down the area and the perimeter of Figure 4.`, a: r`Area $=13$ squares, perimeter $=28$ units.` },
    { n: '3.2.2', marks: 2, q: r`Determine the general rule of $P_n$, the perimeter of the $n$th figure.`, a: r`$4;\,12;\,20;\,28$: $P_n=8n-4$.` },
    { n: '3.2.3', marks: 2, q: r`Determine the general rule of $A_n$ (the printed question repeats “perimeter”; the area is meant).`, a: r`Areas $1;5;9;13$: $A_n=4n-3$.` },
    { n: '3.2.4', marks: 2, q: r`Which is the first figure having a perimeter of more than 400 units?`, a: r`$8n-4>400\Rightarrow n>50{,}5$: Figure $51$ (perimeter $404$).` },
    { n: '3.2.5', marks: 3, q: r`Find the perimeter of the figure that has an area of 161 square units.`, a: r`$4n-3=161\Rightarrow n=41$. $P_{41}=8(41)-4=324$ units.` },
  ]),
  h2('Question 4 [16]'),
  qs([
    { n: '4.1', marks: 5, q: r`If $x<0$, write in simplest form without a calculator: $\dfrac{\sqrt[4]{10000}-\sqrt[3]{-8}}{\sqrt{25x^2-9x^2}}$`, a: r`$\sqrt[4]{10000}=10$, $\sqrt[3]{-8}=-2$, so the numerator is $12$. $\sqrt{16x^2}=4|x|=-4x$ (as $x<0$). Answer: $\dfrac{12}{-4x}=-\dfrac3x$.` },
    { n: '4.2', marks: 5, q: r`Solve for $x$: $4^{3x-1}=\sqrt{32}$`, a: r`$2^{6x-2}=2^{\frac52}\Rightarrow6x-2=\dfrac52\Rightarrow x=\dfrac34$.` },
    { n: '4.3.1', marks: 3, context: r`$K=\sqrt{\dfrac9{2x-6}+\dfrac1{x-4}}$.`, q: r`Check whether $K$ is an integer or a rational number if $x=3{,}5$.`, a: r`$2x-6=1$ so $\dfrac91=9$; $x-4=-0{,}5$ so $\dfrac1{-0{,}5}=-2$. $K=\sqrt{9-2}=\sqrt7$, which is irrational: neither an integer nor a rational number.` },
    { n: '4.3.2', marks: 3, q: r`Determine the values of $x$ for which $K$ is a real number.`, a: r`Need $\dfrac9{2x-6}+\dfrac1{x-4}=\dfrac{11x-42}{2(x-3)(x-4)}\ge0$. Critical values: $3$, $\dfrac{42}{11}$, $4$. Testing the intervals: positive for $3<x\le\dfrac{42}{11}$ and for $x>4$. So $3<x\le\dfrac{42}{11}$ or $x>4$.` },
  ]),
  h2('Question 5: Functions [24]'),
  note(r`$f(x)=\dfrac a{x-p}+q$ has asymptotes $x=-1$ and $y=5$ and passes through $B(0;2)$; $C$ is its x-intercept; $g(x)=mx+c$ passes through $A$ (on $f$), $B$ and $D$ (its x-intercept).`),
  qs([
    { n: '5.1', marks: 1, q: r`Write down the range of $f(x)$.`, a: r`$y\in\mathbb{R},\;y\ne5$.` },
    { n: '5.2', marks: 4, q: r`Determine the values of $a$, $p$ and $q$, then write the equation of $f$.`, a: r`Asymptotes: $p=-1$, $q=5$. $f(0)=2$: $\dfrac a{1}+5=2\Rightarrow a=-3$. $f(x)=\dfrac{-3}{x+1}+5$.` },
    { n: '5.3', marks: 3, q: r`Write the equation of the axis of symmetry of $f$ which has no intersection with $f$.`, a: r`Both axes pass through $(-1;5)$. For $a<0$ the curve meets the axis with $m=-1$ ($y=-x+4$) but not the one with $m=1$: $5=-1+c\Rightarrow y=x+6$. (Check: $x+6=\dfrac{-3}{x+1}+5\Rightarrow(x+1)^2=-3$, no solution ✔.)` },
    { n: '5.4', marks: 3, q: r`Determine $m$ and $c$ then write the equation of $g(x)$.`, a: r`$g$ passes through $B(0;2)$, so $c=2$. From the sketch $m=-3$: $g(x)=-3x+2$. (Check: $g$ meets $f$ again at $A(-2;8)$ ✔.)` },
    { n: '5.5', marks: 3, q: r`Calculate the length of $CD$.`, a: r`$C$: $\dfrac{-3}{x+1}+5=0\Rightarrow x=-\dfrac25$. $D$: $-3x+2=0\Rightarrow x=\dfrac23$. $CD=\dfrac23+\dfrac25=\dfrac{16}{15}$ units.` },
    { n: '5.6', marks: 2, q: r`Find the average gradient of $f(x)$ between $C$ and $B$.`, a: r`$C\left(-\tfrac25;0\right)$ and $B(0;2)$: $\dfrac{2-0}{0+\frac25}=5$.` },
    { n: '5.7', marks: 4, q: r`Determine the coordinates of $A$, the intersection of $f$ and $g$.`, a: r`$\dfrac{-3}{x+1}+5=-3x+2\Rightarrow-3+3(x+1)=-3x(x+1)\Rightarrow3x^2+6x=0\Rightarrow x=0$ ($B$) or $x=-2$. $g(-2)=8$: $A(-2;\,8)$.` },
    { n: '5.8', marks: 2, q: r`Write the function $k(x)$ if $f$ is translated 2 units down and 3 units right.`, a: r`$k(x)=f(x-3)-2=\dfrac{-3}{x-2}+3$.` },
    { n: '5.9', marks: 2, q: r`Describe the transformation of $g$ to $h$ if $h(x)=3x+2$.`, a: r`$h(x)=g(-x)=3x+2$: a reflection of $g$ in the y-axis.` },
  ]),
  fig(q5Fig),
]);

export const EXEMPLAR_3B = lesson('alg-rev-exemplar-3b', 'Exemplar 3 (continued): Questions 6–9', 70, [
  ALG_ANSWERS_NOTE,
  h2('Question 6: $f(x)=x^2-2x-8$ and $h(x)=-2(x-2)^2$ [21]'),
  qs([
    { n: '6.1', marks: 2, q: r`Write down the coordinates of the turning point of $f$.`, a: r`$x=\dfrac{2}2=1$, $y=1-2-8=-9$. $TP(1;-9)$.` },
    { n: '6.2', marks: 3, q: r`Sketch $f$, showing the turning point and the intercepts with the axes.`, a: r`x-intercepts: $(x-4)(x+2)=0$: $(4;0)$ and $(-2;0)$. y-intercept $(0;-8)$. $TP(1;-9)$, arms upwards. See the graph below.` },
    { n: '6.3', marks: 1, q: r`Determine the range of $f$.`, a: r`$y\ge-9$.` },
    { n: '6.4', marks: 3, q: r`Write the equation of the axis of symmetry of $f$.`, a: r`$x=1$ (a parabola has one axis of symmetry).` },
    { n: '6.5', marks: 3, q: r`Find the x-coordinates of the intersections of $f$ and $h$, where $f(x)=h(x)$.`, a: r`$x^2-2x-8=-2x^2+8x-8\Rightarrow3x^2-10x=0\Rightarrow x(3x-10)=0$. $x=0$ or $x=\dfrac{10}3$.` },
    { n: '6.6', marks: 3, q: r`Sketch $h$ on the same axes, with the turning point, the intercepts and the intersections with $f$.`, a: r`$TP(2;0)$ (also the x-intercept), arms downwards, y-intercept $(0;-8)$. It meets $f$ at $(0;-8)$ and $\left(\tfrac{10}3;-\tfrac{32}9\right)$.` },
    { n: '6.7', marks: 1, q: r`Write the maximum value of the function $h$.`, a: r`$0$.` },
    { n: '6.8', marks: 1, q: r`Determine the x values for which both $f$ and $h$ increase as $x$ increases.`, a: r`$f$ increases for $x>1$ and $h$ increases for $x<2$. Both: $1<x<2$.` },
    { n: '6.9', marks: 4, q: r`Write a function $k(x)$ for the distance between $f(x)$ and $h(x)$ between their intersections, then calculate the maximum distance.`, a: r`Between $x=0$ and $x=\tfrac{10}3$, $h$ is above $f$: $k(x)=h(x)-f(x)=-3x^2+10x$. Maximum at $x=\dfrac{10}6=\dfrac53$: $k=-3\cdot\dfrac{25}9+\dfrac{50}3=\dfrac{25}3\approx8{,}33$ units.` },
  ]),
  fig(q6Fig),
  h2('Question 7: Finance [20 + 20]'),
  qs([
    { n: '7.1', marks: 4, context: r`Grayson invests R5 000 for 3 years. (i) Tahir: 15% p.a. compound. (ii) Siviwe: 16% p.a. simple. (iii) Malusi: 14,5% p.a. compounded monthly.`, q: r`Which friend recommends the best investment?`, a: r`(i) $5\,000(1{,}15)^3=R7\,604{,}38$. (ii) $5\,000(1+0{,}16\times3)=R7\,400$. (iii) $5\,000\left(1+\tfrac{0{,}145}{12}\right)^{36}=R7\,704{,}70$. **Malusi** gives the most.` },
    { n: '7.2.1', marks: 4, context: r`In 2010 Luvuyo buys a Mercedes-E200 for R600 000. It depreciates at 8% p.a. (reducing balance) and the inflation rate is 5% p.a.`, q: r`Calculate the amount needed to renew the Mercedes in 2015.`, a: r`$n=5$, inflation: $600\,000(1{,}05)^5=R765\,768{,}94$.` },
    { n: '7.2.2', marks: 3, q: r`Determine the interest rate p.a. compounded quarterly if Luvuyo invests R100 000 so that he can renew his car in 2015.`, a: r`Reading used: the amount needed is the R765 768,94 from 7.2.1. $765\,768{,}94=100\,000\left(1+\tfrac i4\right)^{20}\Rightarrow1+\tfrac i4=7{,}6577^{0{,}05}=1{,}10715\Rightarrow i\approx42{,}9\%$ p.a. (the printed question is not fully clear about whether the old car’s value is deducted).` },
    { n: '7.2.3', marks: 3, q: r`If Akshay wants to buy the Mercedes from Luvuyo for R250 000, how long must he wait and in which year is he going to buy it?`, a: r`$250\,000=600\,000(0{,}92)^n\Rightarrow(0{,}92)^n=0{,}4167\Rightarrow n=\dfrac{\ln0{,}4167}{\ln0{,}92}=10{,}5$ years, so about $10{,}5$ years after 2010: during 2020 (the second half), i.e. he buys it in 2021 if he waits whole years.` },
    { n: '7.3.1', marks: 3, context: r`Ryan, Yasar and Nikhil have R100 000 to invest from 2020. Vahdet offers 10,5% p.a. compounded daily for the first 7 years, then 13% p.a. compounded semi-annually for the rest of the period.`, q: r`How much does Vahdet promise to give them in 2020?`, a: r`The total period is not readable in the photo. Method: after 7 years $A_1=100\,000\left(1+\tfrac{0{,}105}{365}\right)^{365\times7}=R208\,526{,}16$; then $A=A_1\left(1+\tfrac{0{,}13}2\right)^{2\times t}$ for the remaining $t$ years.` },
    { n: '7.3.2', marks: 3, q: r`Calculate the effective interest rate p.a. for the first year of their investment.`, a: r`$\left(1+\dfrac{0{,}105}{365}\right)^{365}-1=0{,}1107\approx11{,}07\%$.` },
  ]),
  h2('Question 8: Counting [9]'),
  qs([
    { n: '8.1', marks: 5, q: r`Hot drinks: tea, coffee, cappuccino; cold drinks: iced tea, ayran. Each drink has two sizes (regular or large). Draw a tree diagram and find the number of choices.`, a: r`$5$ drinks, each in $2$ sizes: $5\times2=10$ choices. (Tree: Hot → tea/coffee/cappuccino, Cold → iced tea/ayran, each branching Regular/Large.)` },
    { n: '8.2.1', marks: 2, q: r`How many different three-digit numbers can be formed using the digits $\{0;4;5;6;7;8;9\}$ with no restriction?`, a: r`A three-digit number cannot start with $0$: $6\times7\times7=294$.` },
    { n: '8.2.2', marks: 2, q: r`…without repetition?`, a: r`$6\times6\times5=180$.` },
  ]),
  h2('Question 9: Probability [11]'),
  qs([
    { n: '9.1.1', marks: 1, context: r`Registered births in 2002 (thousands): E Cape 228, Limpopo 215, Free State 66, KZN 395, N Cape 21, N West 105, Gauteng 204, Mpumalanga 114, W Cape 102, Other 8. Total $=1\,458$.`, q: r`Probability that a person comes from Mpumalanga.`, a: r`$\dfrac{114}{1\,458}=\dfrac{19}{243}\approx0{,}078$.` },
    { n: '9.1.2', marks: 2, q: r`Mpumalanga or Northern Cape?`, a: r`$\dfrac{114+21}{1\,458}=\dfrac{135}{1\,458}=\dfrac5{54}\approx0{,}093$.` },
    { n: '9.1.3', marks: 2, q: r`Gauteng and the Free State?`, a: r`A person comes from only one province, so $0$.` },
    { n: '9.2.1', marks: 3, context: r`130 Grade 10 learners: 68 take Mathematics, 50 take Physical Science and 32 take both.`, q: r`Draw a Venn diagram to illustrate the data.`, a: r`Both $32$; Maths only $68-32=36$; Science only $50-32=18$; neither $130-(36+32+18)=44$.` },
    { n: '9.2.2a', marks: 1, q: r`Probability a random learner takes Physical Science.`, a: r`$\dfrac{50}{130}=\dfrac5{13}$.` },
    { n: '9.2.2b', marks: 1, q: r`Takes Mathematics but not Physical Science.`, a: r`$\dfrac{36}{130}=\dfrac{18}{65}$.` },
    { n: '9.2.2c', marks: 1, q: r`Takes Mathematics or Physical Science.`, a: r`$\dfrac{36+32+18}{130}=\dfrac{86}{130}=\dfrac{43}{65}$.` },
  ]),
  note(r`Total for Exemplar 3: 156. These are my own worked answers; the book’s answer key was not photographed.`),
]);

export const ALG_REVISION_10_LESSONS: Lesson[] = [EXEMPLAR_3A, EXEMPLAR_3B];
