import type { Lesson } from '../../lib/types';
import { r, h2, note, fig, qs, lesson as make, ANSWERS_NOTE } from './geomKit';

/**
 * Unit 6: Revisions 7–11 (book pp. 176–183; photos …905 – …908), including the March and June exemplars.
 * Pages 181 and 183–185 are not all in the photos; the page after the June exemplar is the last one read here.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('geom-revision', id, title, minutes, blocks);

const W = (520 - 62) / 360;
const trigFig = (curves: NonNullable<Parameters<typeof fig>[0]['curves']>, caption: string) =>
  fig({
    xRange: [-180, 180], yRange: [-3, 1.5], xStep: 90, yStep: 1, xSuffix: '°', grid: true,
    stretch: 60 / W, curves, caption,
  });

export const REVISION_C = lesson('geom-rev-c-mixed', 'C. Revisions 7–9 (Trigonometry)', 45, [
  h2('Revision 7'),
  ANSWERS_NOTE,
  qs([
    { n: '1.1', marks: 3, context: r`Triangular land $ABC$: $\hat B=63^\circ$, $AB=500$ m, $BC=300$ m, $CD\perp AB$. (Answers to two decimal places.)`, q: r`Determine the distance $AC$.`, a: r`Cosine rule: $AC^2=500^2+300^2-2(500)(300)\cos63^\circ=203\,801$, so $AC=451{,}45$ m.` },
    { n: '1.2', marks: 3, context: r`Same figure.`, q: r`Determine the size of angle $ACB$.`, a: r`Sine rule: $\dfrac{\sin A\hat CB}{500}=\dfrac{\sin63^\circ}{451{,}45}\Rightarrow A\hat CB=80{,}69^\circ$.` },
    { n: '1.3', marks: 3, context: r`Same figure.`, q: r`Determine the area of triangle $ABC$.`, a: r`$\text{Area}=\tfrac12\cdot500\cdot300\cdot\sin63^\circ=66\,825{,}49\text{ m}^2$.` },
    { n: '1.4', marks: 2, context: r`Same figure.`, q: r`Hence, determine the distance $DC$.`, a: r`$\tfrac12\cdot AB\cdot DC=66\,825{,}49\Rightarrow DC=267{,}30$ m.` },
    { n: '2.1', marks: 5, q: r`Prove: $\left(\dfrac1{\tan x}+\tan x\right)\cos x=\dfrac1{\sin x}$.`, a: r`LHS $=\dfrac{\cos^2x+\sin^2x}{\sin x\cos x}\cdot\cos x=\dfrac1{\sin x}=$ RHS.` },
    { n: '2.2', marks: 5, q: r`Simplify $\dfrac{\sin(180^\circ-x)\cdot\cos(180^\circ+x)\cdot\tan300^\circ}{\cos(360^\circ-x)\cdot\cos(90^\circ-x)}$.`, a: r`$\tan300^\circ=-\sqrt3$: $\dfrac{\sin x(-\cos x)(-\sqrt3)}{\cos x\sin x}=\sqrt3$.` },
    { n: '3.1', marks: 3, context: r`Reflex angle $\theta=P\hat OX$; $P(-12;\,y)$ in the third quadrant, $OP=13$.`, q: r`$y$`, a: r`$y=-\sqrt{13^2-12^2}=-5$.` },
    { n: '3.2', marks: 1, context: r`Same figure.`, q: r`$\sin\theta$`, a: r`$-\dfrac5{13}$` },
    { n: '3.3', marks: 3, context: r`Same figure.`, q: r`$\dfrac1{\sin\theta}-\dfrac1{\tan\theta}$`, a: r`$\tan\theta=\dfrac5{12}$: $-\dfrac{13}5-\dfrac{12}5=-5$.` },
  ]),

  h2('Revision 8'),
  ANSWERS_NOTE,
  note(r`The printed rule for $f$ is “$m\cdot\sin x$”, but the sketch (zeros at $0^\circ$, $90^\circ$, $180^\circ$) has the shape of $\sin2x$, and $A(30^\circ;k)$ lies on both curves only for $f=\sin2x$, $g=\cos x$. Questions 1.1–1.5.1 are answered for those; 1.5.2 is left out because it cannot be matched to the diagram.`),
  qs([
    { n: '1.1', marks: 4, q: r`Determine the values of $m$, $p$ and $k$.`, a: r`$m=2$ (period $180^\circ$), $p=1$, $k=\cos30^\circ=\dfrac{\sqrt3}2$.` },
    { n: '1.2', marks: 1, q: r`Write down the period of $g$.`, a: r`$360^\circ$` },
    { n: '1.3', marks: 1, q: r`Write down the coordinates of $C$.`, a: r`$C(90^\circ;\,0)$` },
    { n: '1.4', marks: 2, q: r`Determine the coordinates of $B$.`, a: r`$B\left(150^\circ;\,-\dfrac{\sqrt3}2\right)$ (since $\sin300^\circ=\cos150^\circ=-\dfrac{\sqrt3}2$).` },
    { n: '1.5.1', marks: 2, q: r`For which $x\in[0^\circ;180^\circ]$ is $g(x)<0$?`, a: r`$90^\circ<x\le180^\circ$` },
    { n: '2.1', marks: 3, context: r`Cyclic quadrilateral $PQRS$: $QR=800$ m, $RS=700$ m, $\hat R=42^\circ$, $\hat Q_1=35^\circ$. (One decimal digit.)`, q: r`The area of triangle $QRS$.`, a: r`$\tfrac12\cdot800\cdot700\cdot\sin42^\circ=187\,356{,}6\text{ m}^2$.` },
    { n: '2.2', marks: 3, context: r`Same figure.`, q: r`The length of $QS$.`, a: r`$QS^2=800^2+700^2-2(800)(700)\cos42^\circ\Rightarrow QS=545{,}6$ m.` },
    { n: '2.3', marks: 3, context: r`Same figure.`, q: r`The length of $PS$, if $\hat P=138^\circ$.`, a: r`$\dfrac{PS}{\sin35^\circ}=\dfrac{545{,}6}{\sin138^\circ}\Rightarrow PS=467{,}7$ m.` },
  ]),

  h2('Revision 9'),
  ANSWERS_NOTE,
  qs([
    { n: '1.1', marks: 6, context: r`$f(x)=\cos x$ and $g(x)=\tan x$ for $x\in[0^\circ;180^\circ]$.`, q: r`Sketch both curves, showing intercepts, turning points and asymptotes.`, a: r`$f$: $(0;1)$, $(90^\circ;0)$, $(180^\circ;-1)$. $g$: $(0;0)$, asymptote $x=90^\circ$, $(135^\circ;-1)$, $(180^\circ;0)$.` },
    { n: '1.2a', marks: 1, q: r`For which $x$ is $\tan x$ undefined?`, a: r`$x=90^\circ$` },
    { n: '1.2b', marks: 1, q: r`The period of $f$?`, a: r`$360^\circ$` },
    { n: '1.2c', marks: 2, q: r`Value(s) of $x$ for which $f(x)-g(x)=1$.`, a: r`$x=0^\circ$ ($1-0=1$) and $x\approx122{,}9^\circ$.` },
    { n: '1.2d', marks: 2, q: r`Solve $f(x)\ge g(x)$ for $x\in[45^\circ;180^\circ]$.`, a: r`The curves meet at $x\approx141{,}8^\circ$; $f$ is above $g$ for $90^\circ<x\le141{,}8^\circ$.` },
    { n: '1.3', marks: 2, q: r`Which curve passes through $(0;0)$, $(90;-2)$ and $(180;0)$: $y=-2\cos x$, $y=-\cos2x$, $y=-2\sin x$ or $y=-\sin2x$?`, a: r`$y=-2\sin x$.` },
    { n: '2.1', marks: 5, q: r`Prove: $\left(\dfrac1{\tan x}+\tan x\right)\cos x=\dfrac1{\sin x}$.`, a: r`As in Revision 7, 2.1.` },
    { n: '2.2', marks: 5, q: r`If $13\sin x-12=0$ and $\cos x<0$, calculate by using a sketch the value of $\tan x\cdot\sin x$.`, a: r`$y=12$, $r=13$, $x=-5$: $\tan x\sin x=-\dfrac{12}5\cdot\dfrac{12}{13}=-\dfrac{144}{65}$.` },
    { n: '2.3', marks: 7, q: r`Simplify $\dfrac{\sin(180^\circ-x)\cos(180^\circ+x)\tan300^\circ}{\cos(360^\circ-x)\cos(90^\circ-x)}$.`, a: r`$\sqrt3$ (Revision 7, 2.2).` },
    { n: '2.4', marks: 8, q: r`Simplify to a single ratio: $\dfrac{\tan(180^\circ+x)\cdot\tan(360^\circ-x)}{\sin(180^\circ-x)\cos(90^\circ+x)+\cos(540^\circ+x)\cos(-x)}$`, a: r`Numerator $-\tan^2x$; denominator $-\sin^2x-\cos^2x=-1$. Result $\tan^2x$.` },
  ]),
]);

export const REVISION_D = lesson('geom-rev-d-exemplars', 'D. March and June Exemplars', 50, [
  h2('Revision 10: March exemplar'),
  ANSWERS_NOTE,
  qs([
    { n: '1.1', marks: 3, context: r`$\hat B=25^\circ$, $\hat C_2=55^\circ$, $BA=10$ cm, $AC=7$ cm, $AD\perp BC$ (meeting $BC$ at $E$).`, q: r`Calculate the magnitude of angle $B\hat AC$.`, a: r`$\sin\hat C_1=\dfrac{10\sin25^\circ}{7}\Rightarrow\hat C_1=37{,}1^\circ$. $B\hat AC=180^\circ-25^\circ-37{,}1^\circ=117{,}9^\circ$.` },
    { n: '1.2', marks: 4, context: r`Same figure.`, q: r`Calculate the length of $AE$.`, a: r`$AE=10\sin25^\circ=4{,}2$ cm.` },
    { n: '1.3', marks: 5, context: r`Same figure.`, q: r`Calculate the length of $ED$.`, a: r`$EC=7\cos37{,}1^\circ=5{,}58$; $ED=EC\tan55^\circ=7{,}97$ cm.` },
    { n: '1.4', marks: 3, context: r`Same figure.`, q: r`Calculate the area of triangle $ADC$.`, a: r`$AD=4{,}23+7{,}97=12{,}2$; $\text{Area}=\tfrac12\cdot12{,}2\cdot5{,}58=34{,}0\text{ cm}^2$.` },
    { n: '2.1', marks: 5, context: r`$OS=6$ and $\sin\theta=\dfrac{\sqrt5}3$, $S$ in the second quadrant.`, q: r`The coordinates of $S$.`, a: r`$y=2\sqrt5$, $x=-\sqrt{36-20}=-4$: $S(-4;\,2\sqrt5)$.` },
    { n: '2.2', marks: 2, context: r`Same figure.`, q: r`$\cos\theta$`, a: r`$-\dfrac23$` },
    { n: '2.3', marks: 3, context: r`Same figure.`, q: r`$\theta$`, a: r`$\theta=180^\circ-48{,}2^\circ=131{,}8^\circ$.` },
    { n: '3.1', marks: 3, context: r`$A(-2;-3)$, $B(4;-5)$, $C(2;1)$; $AG=GB$ and $AE\perp BC$.`, q: r`Coordinates of $G$, the midpoint of $AB$.`, a: r`$G(1;\,-4)$.` },
    { n: '3.2', marks: 3, context: r`Same triangle.`, q: r`The length of $CG$ in surd form.`, a: r`$CG=\sqrt{1+25}=\sqrt{26}$.` },
    { n: '3.3', marks: 3, context: r`Same triangle.`, q: r`The gradient of $BC$.`, a: r`$m=\dfrac{1+5}{2-4}=-3$.` },
    { n: '3.4', marks: 4, context: r`Same triangle.`, q: r`$\theta$, the angle of inclination of $BC$ (one decimal digit).`, a: r`$\theta=180^\circ-71{,}6^\circ=108{,}4^\circ$.` },
    { n: '3.5', marks: 3, context: r`Same triangle.`, q: r`The equation of $FA$ through $A$ parallel to $BC$.`, a: r`$y+3=-3(x+2)\Rightarrow y=-3x-9$.` },
    { n: '3.6', marks: 4, context: r`Same triangle.`, q: r`The equation of $AE$.`, a: r`$m=\dfrac13$: $y=\dfrac13x-\dfrac73$.` },
    { n: '3.7', marks: 4, context: r`Same triangle.`, q: r`The coordinates of $P$, the $x$-intercept, and $R$, the $y$-intercept of $AE$.`, a: r`$y=0\Rightarrow x=7$: $P(7;0)$. $x=0\Rightarrow y=-\dfrac73$: $R\left(0;-\dfrac73\right)$.` },
    { n: '4.1', marks: 3, context: r`$A(5;-1)$, $B(7;-5)$, $C(-1;3)$. $M$ is the midpoint of $AB$ and $N$ of $BC$.`, q: r`Show that $A$, $B$, $C$ are not collinear.`, a: r`$m_{AB}=\dfrac{-5+1}{7-5}=-2$ and $m_{BC}=\dfrac{3+5}{-1-7}=-1$. The gradients differ, so they are not collinear.` },
    { n: '4.2', marks: 4, context: r`Same points.`, q: r`Is $ABC$ a right triangle?`, a: r`$m_{AC}=\dfrac{3+1}{-1-5}=-\dfrac23$. $m_{AB}\cdot m_{BC}=2$, $m_{AB}\cdot m_{AC}=\dfrac43$, $m_{BC}\cdot m_{AC}=\dfrac23$: none equals $-1$, so it is not right-angled.` },
    { n: '4.3', marks: 5, context: r`Same points.`, q: r`Find the coordinates of $D$ if $ABCD$ is a parallelogram.`, a: r`Midpoint of $AC=$ midpoint of $BD$: $D=A+C-B=(5-1-7;\,-1+3+5)=(-3;\,7)$.` },
    { n: '4.4', marks: 4, context: r`Same points.`, q: r`Check whether $ABCD$ is a rhombus.`, a: r`$AB=\sqrt{20}$ but $BC=\sqrt{128}$. Adjacent sides are unequal, so it is not a rhombus.` },
    { n: '4.5', marks: 4, context: r`Same points.`, q: r`Determine the coordinates of $M$ and $N$.`, a: r`$M(6;\,-3)$, $N(3;\,-1)$.` },
    { n: '4.6', marks: 3, context: r`Same points.`, q: r`Show that $MN\parallel AC$.`, a: r`$m_{MN}=\dfrac{-1+3}{3-6}=-\dfrac23=m_{AC}$.` },
    { n: '4.7', marks: 3, context: r`Same points.`, q: r`Show that $AC=2MN$.`, a: r`$MN=\sqrt{9+4}=\sqrt{13}$, $AC=\sqrt{36+16}=\sqrt{52}=2\sqrt{13}=2MN$.` },
  ]),

  h2('Revision 11: June exemplar'),
  ANSWERS_NOTE,
  note(r`Question 4 as printed says “$M(2;3)$ is the midpoint of $CD$” but then gives $A$ and $B(p;t)$; it is worked as the midpoint of $AB$. Question 7.3’s figure gives $\angle NAC=65^\circ$, $\hat B=65^\circ$, $AC=78$ and $BC=84{,}75$; the data are not fully consistent, so $BN=BC-NC$ is used.`),
  qs([
    { n: '1.1', marks: 3, context: r`$A(-2;9)$, $B(6;-6)$, $C(-8;-3)$.`, q: r`The length of $AB$.`, a: r`$\sqrt{8^2+15^2}=17$.` },
    { n: '1.2', marks: 2, context: r`Same points.`, q: r`The midpoint $M$ of $AB$.`, a: r`$M(2;\,1{,}5)$.` },
    { n: '1.3', marks: 2, context: r`Same points.`, q: r`The gradient of $AC$.`, a: r`$m=\dfrac{-3-9}{-8+2}=2$.` },
    { n: '2.1', marks: 4, context: r`$P(2;3)$, $Q(5;q)$, $R(4;2)$, $S(1;1)$ are the vertices of parallelogram $PQRS$.`, q: r`The value of $q$.`, a: r`Midpoint of $PR=(3;\,2{,}5)$ = midpoint of $QS=\left(3;\,\dfrac{q+1}2\right)$, so $q=4$.` },
    { n: '2.2', marks: 3, context: r`Same figure.`, q: r`The equation of the line through $RS$.`, a: r`$m=\dfrac{2-1}{4-1}=\dfrac13$; $y=\dfrac13x+\dfrac23$.` },
    { n: '3', marks: 3, q: r`$A(-2;4)$, $B(-3;y)$, $C(-4;1)$, $D(-2;5)$: determine $y$ if $AB\parallel CD$.`, a: r`$m_{CD}=\dfrac{5-1}{-2+4}=2$; $\dfrac{y-4}{-3+2}=2\Rightarrow y=2$.` },
    { n: '4', marks: 3, q: r`$M(2;3)$ is the midpoint of $AB$ with $A(-3;1)$, $B(p;t)$. Determine $p$ and $t$.`, a: r`$\dfrac{-3+p}2=2\Rightarrow p=7$; $\dfrac{1+t}2=3\Rightarrow t=5$.` },
    { n: '5.1', marks: 4, context: r`Quadrilateral $SPQR$ with $S(-1;3)$, $P(2;2)$, $Q(2;-3)$, $R(-2;0)$.`, q: r`Prove that $SR=SP$.`, a: r`$SR=\sqrt{1+9}=\sqrt{10}$, $SP=\sqrt{9+1}=\sqrt{10}$.` },
    { n: '5.2', marks: 2, context: r`Same figure.`, q: r`What property do the diagonals of a kite have?`, a: r`They are perpendicular to each other.` },
    { n: '5.3', marks: 3, context: r`Same figure.`, q: r`Calculate the gradients of $SQ$ and $PR$.`, a: r`$m_{SQ}=\dfrac{-3-3}{2+1}=-2$; $m_{PR}=\dfrac{0-2}{-2-2}=\dfrac12$.` },
    { n: '5.4', marks: 2, context: r`Same figure.`, q: r`Is $SPQR$ a kite? Explain.`, a: r`Yes: $SR=SP=\sqrt{10}$ and $QR=QP=5$ (two pairs of adjacent equal sides), and $m_{SQ}\cdot m_{PR}=-1$.` },
    { n: '5.5', marks: 2, context: r`Same figure.`, q: r`Find the equation of the line through $PQ$.`, a: r`$P$ and $Q$ both have $x=2$: $x=2$.` },
    { n: '5.6', marks: 4, context: r`Same figure.`, q: r`Determine the angle at $Q$.`, a: r`$QP$ is vertical; $QR$ has direction $(-4;3)$: $\cos\hat Q=\dfrac35\Rightarrow\hat Q=53{,}1^\circ$.` },
    { n: '6.1', marks: 4, context: r`$12\tan\theta=5$ and $\theta>180^\circ$ (third quadrant).`, q: r`$\sin\theta$`, a: r`$\tan\theta=\dfrac5{12}$: $x=-12$, $y=-5$, $r=13$: $\sin\theta=-\dfrac5{13}$.` },
    { n: '6.2', marks: 2, context: r`Same data.`, q: r`$\cos^2\theta$`, a: r`$\left(-\dfrac{12}{13}\right)^2=\dfrac{144}{169}$.` },
    { n: '6.3', marks: 3, context: r`Same data.`, q: r`$\theta$`, a: r`$\theta=180^\circ+\tan^{-1}\dfrac5{12}=202{,}6^\circ$.` },
    { n: '7.1', marks: 4, context: r`Right triangle $ABC$ with $\hat A=90^\circ$, $\hat B=15^\circ$, $AC=12$ cm.`, q: r`Calculate all the unknown sides.`, a: r`$AB=\dfrac{12}{\tan15^\circ}=44{,}8$ cm; $BC=\dfrac{12}{\sin15^\circ}=46{,}4$ cm.` },
    { n: '7.2', marks: 3, q: r`An aeroplane flies $5000$ m above the ground with an angle of elevation of $13^\circ$ from the runway. Calculate the horizontal distance it must cover before reaching the runway.`, a: r`$\tan13^\circ=\dfrac{5000}{d}\Rightarrow d=21\,657$ m.` },
    { n: '7.3', marks: 4, q: r`Calculate $BN$ (triangle with $\hat{NAC}=65^\circ$, $\hat B=65^\circ$, $AC=78$ m, $BC=84{,}75$ m, $AN\perp BC$).`, a: r`$NC=78\sin65^\circ=70{,}69$ m, so $BN=84{,}75-70{,}69=14{,}06$ m.` },
    { n: '8.1', marks: 1, context: r`$4\cos B=-3$, $0^\circ<B<180^\circ$.`, q: r`Write down $\cos B$.`, a: r`$-\dfrac34$` },
    { n: '8.2.1', marks: 4, context: r`$x=-3$, $r=4$, $y=\sqrt7$.`, q: r`$\dfrac1{\sqrt7}\sin B$`, a: r`$\sin B=\dfrac{\sqrt7}4$, so $\dfrac1{\sqrt7}\cdot\dfrac{\sqrt7}4=\dfrac14$.` },
    { n: '8.2.2', marks: 3, context: r`Same sketch.`, q: r`$\tan^2B+1$`, a: r`$\tan B=-\dfrac{\sqrt7}3$: $\dfrac79+1=\dfrac{16}9$.` },
    { n: '8.2.3', marks: 2, context: r`Same sketch.`, q: r`The size of angle $B$.`, a: r`$B=\cos^{-1}\left(-\dfrac34\right)=138{,}6^\circ$.` },
    { n: '9.1', marks: 6, q: r`Simplify $\dfrac{\tan(360^\circ-x)\cdot\sin(-x)}{\sin(x+270^\circ)\cdot\tan(180^\circ-x)}$ (the book prints “$360^\circ x$”; $360^\circ-x$ is used).`, a: r`$\dfrac{(-\tan x)(-\sin x)}{(-\cos x)(-\tan x)}=\dfrac{\sin x}{\cos x}=\tan x$.` },
    { n: '9.2', marks: 5, q: r`Prove: $\left(\dfrac{\cos\theta}{\sin\theta}+\tan\theta\right)\cdot\dfrac1{\sec\theta}=\dfrac1{\sin\theta}$.`, a: r`LHS $=\dfrac{\cos^2\theta+\sin^2\theta}{\sin\theta\cos\theta}\cdot\cos\theta=\dfrac1{\sin\theta}$.` },
    { n: '10.1', marks: 6, context: r`$f(x)=-2\cos x$ and $g(x)=-1+\sin x$ for $x\in[-180^\circ;180^\circ]$.`, q: r`Sketch both graphs on the same axes, showing all intercepts.`, a: r`$f$: $y$-intercept $-2$; $x$-intercepts $(\pm90^\circ;0)$. $g$: $y$-intercept $-1$; $x$-intercept $(90^\circ;0)$ (see the graph below).` },
    { n: '10.2', marks: 5, context: r`Same functions.`, q: r`Write the period and amplitude of $f$ and $g$, and the range of $g$.`, a: r`$f$: period $360^\circ$, amplitude $2$. $g$: period $360^\circ$, amplitude $1$. Range of $g$: $y\in[-2;\,0]$.` },
    { n: '11.1', marks: 4, context: r`A soccer player $S$ is $12$ m from the back line $CS$; $\hat{HGS}=119^\circ$; the goal is $7{,}4$ m wide ($GH=7{,}4$).`, q: r`How far is the player from the left post $FG$ ($SG$)?`, a: r`$\hat{SGC}=61^\circ$: $SG=\dfrac{12}{\sin61^\circ}=13{,}7$ m.` },
    { n: '11.2', marks: 3, context: r`Same figure.`, q: r`How far is the player from the right post $EH$ ($SH$)?`, a: r`$CG=\dfrac{12}{\tan61^\circ}=6{,}65$; $CH=14{,}05$; $SH=\sqrt{12^2+14{,}05^2}=18{,}5$ m.` },
    { n: '11.3', marks: 5, context: r`Same figure.`, q: r`The size of $\hat{GSH}$, the angle within which he can score.`, a: r`$\tan\hat H=\dfrac{12}{14{,}05}\Rightarrow\hat H=40{,}5^\circ$. $\hat{GSH}=180^\circ-119^\circ-40{,}5^\circ=20{,}5^\circ$.` },
  ]),
  trigFig([{ kind: 'cos', a: -2 }, { kind: 'sin', q: -1, color: 'green' }], 'Question 10.1: f(x) = −2 cos x (blue) and g(x) = −1 + sin x (green) on [−180°; 180°].'),
]);

export const GEOM_REVISION_C_LESSONS: Lesson[] = [REVISION_C, REVISION_D];
