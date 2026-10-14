import type { Lesson } from '../../lib/types';
import { GEOM_REVISION_C_LESSONS } from './geometryRevisionC';
import { GEOM_REVISION_D_LESSONS } from './geometryRevisionD';
import { GEOM_REVISION_E_LESSONS } from './geometryRevisionE';
import { r, h2, note, qs, lesson as make, ANSWERS_NOTE } from './geomKit';

/**
 * Unit 6: Revision and Exemplars, Revisions 1–6 (book pp. 170–175; photos …902 – …904).
 * Revision 3 question 2 (the three-line diagram) is not included: its labels do not agree with its
 * questions, so there is not enough clear data to answer it.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('geom-revision', id, title, minutes, blocks);

export const REVISION_A = lesson('geom-rev-a-analytical', 'A. Analytical Geometry (Revisions 1–3)', 40, [
  h2('Revision 1'),
  ANSWERS_NOTE,
  note(r`In Revision 1 question 2 the printed text gives $A(2;\,7)$ but the diagram (and Revision 3, the same question) shows $A(2;\,3)$. The diagram value $A(2;\,3)$ is used.`),
  qs([
    { n: '1.1', marks: 5, context: r`$E(-2;\,4)$, $K(2;\,-2)$ and $N(p;\,7)$ are three points in a Cartesian plane. $D$ is the $y$-intercept of $KE$ and $\theta$ the inclination of $KE$. Determine:`, q: r`the equation of straight line $KE$.`, a: r`$m=\dfrac{-2-4}{2+2}=-\dfrac32$. $y+2=-\dfrac32(x-2)\Rightarrow y=-\dfrac32x+1$.` },
    { n: '1.2', marks: 4, context: r`Same figure.`, q: r`the length of $ED$, if $D$ is the $y$-intercept of $KE$.`, a: r`$D(0;\,1)$. $ED=\sqrt{(0+2)^2+(1-4)^2}=\sqrt{13}$.` },
    { n: '1.3', marks: 3, context: r`Same figure.`, q: r`the size of $\theta$, the angle of inclination of $KE$.`, a: r`$\tan\theta=-\dfrac32\Rightarrow\theta=-56{,}3^\circ+180^\circ=123{,}7^\circ$.` },
    { n: '1.4', marks: 5, context: r`Same figure.`, q: r`the value of $p$ if $KE\perp KN$.`, a: r`$m_{KN}=\dfrac23$. $\dfrac{7-(-2)}{p-2}=\dfrac23\Rightarrow p-2=13{,}5\Rightarrow p=15{,}5$.` },
    { n: '2.1', marks: 6, context: r`$A(2;\,3)$, $B(p;\,0)$ and $C(5;\,-3)$ are the vertices of $\triangle ABC$. $AC$ cuts the $x$-axis at $D$.`, q: r`Calculate the coordinates of $D$.`, a: r`$m_{AC}=\dfrac{-3-3}{5-2}=-2$. $y-3=-2(x-2)\Rightarrow y=-2x+7$. At $y=0$: $x=3{,}5$. $D(3{,}5;\,0)$.` },
    { n: '2.2', marks: 5, context: r`Same triangle.`, q: r`Calculate the value of $p$ if $BC=AC$ and $p<0$.`, a: r`$AC^2=3^2+6^2=45$. $BC^2=(5-p)^2+9=45\Rightarrow(5-p)^2=36\Rightarrow p=-1$ ($p=11$ rejected).` },
    { n: '2.3', marks: 3, context: r`Same triangle.`, q: r`Determine the angle of inclination of straight line $AC$, rounded off to ONE decimal digit.`, a: r`$\tan\alpha=-2\Rightarrow\alpha=-63{,}4^\circ+180^\circ=116{,}6^\circ$.` },
    { n: '2.4', marks: 3, context: r`Same triangle.`, q: r`If $p=-1$, calculate the size of angle $A$, rounded off to ONE decimal digit.`, a: r`$B(-1;\,0)$. $AB=\sqrt{18}$, $AC=\sqrt{45}$, $BC=\sqrt{45}$. Cosine rule: $\cos A=\dfrac{18+45-45}{2\sqrt{18}\sqrt{45}}=0{,}316\Rightarrow\hat A=71{,}6^\circ$.` },
  ]),

  h2('Revision 2'),
  ANSWERS_NOTE,
  qs([
    { n: '1.1', marks: 3, context: r`$A(-2;\,1)$, $B(p;\,-4)$, $C(5;\,0)$ and $D(3;\,2)$ are the vertices of trapezium $ABCD$ with $AB\parallel DC$.`, q: r`Show that $p=3$.`, a: r`$m_{DC}=\dfrac{0-2}{5-3}=-1$. $AB\parallel DC$: $\dfrac{-4-1}{p+2}=-1\Rightarrow p+2=5\Rightarrow p=3$.` },
    { n: '1.2', marks: 3, context: r`Same trapezium.`, q: r`Calculate $AB:CD$ in simplest form.`, a: r`$AB=\sqrt{5^2+5^2}=5\sqrt2$, $CD=\sqrt{2^2+2^2}=2\sqrt2$. $AB:CD=5:2$.` },
    { n: '1.3', marks: 4, context: r`Same trapezium.`, q: r`If $N(x;\,y)$ is on $AB$ and $NBCD$ is a parallelogram, determine the coordinates of $N$.`, a: r`Diagonals bisect: midpoint of $BD$ is $(3;\,-1)$, so $N=(2\cdot3-5;\,2\cdot(-1)-0)=(1;\,-2)$. (Check: $N$ lies on $AB$: $y=-x-1$ at $x=1$ gives $-2$.)` },
    { n: '1.4', marks: 3, context: r`Same trapezium.`, q: r`Determine the equation of the line passing through $B$ and $D$.`, a: r`$B(3;\,-4)$, $D(3;\,2)$ have the same $x$: the line is vertical, $x=3$.` },
    { n: '1.5', marks: 2, context: r`Same trapezium.`, q: r`What is the angle of inclination of line $BD$?`, a: r`A vertical line: $90^\circ$.` },
    { n: '1.6', marks: 3, context: r`Same trapezium.`, q: r`Calculate the area of parallelogram $NBCD$.`, a: r`$\vec{NB}=(2;\,-2)$, $\vec{BC}=(2;\,4)$: area $=|2\cdot4-(-2)\cdot2|=12$ square units.` },
    { n: '1.7', marks: 3, context: r`Same trapezium.`, q: r`$R(-1;\,q)$, $A$ and $C$ are collinear. Calculate the value of $q$.`, a: r`$m_{AC}=\dfrac{0-1}{5+2}=-\dfrac17$. $\dfrac{q-1}{-1+2}=-\dfrac17\Rightarrow q=\dfrac67$.` },
    { n: '2.1', marks: 2, context: r`$A(-2;\,-3)$, $B(4;\,-5)$ and $C(2;\,1)$ are the vertices of a triangle. $CG$ is a line such that $AG=GB$ and $AE\perp BC$.`, q: r`Calculate the coordinates of $G$, the midpoint of $AB$.`, a: r`$G\left(\dfrac{-2+4}{2};\,\dfrac{-3-5}{2}\right)=(1;\,-4)$.` },
    { n: '2.2', marks: 3, context: r`Same triangle.`, q: r`Calculate the length of $CG$. Leave the answer in surd form.`, a: r`$CG=\sqrt{(2-1)^2+(1+4)^2}=\sqrt{26}$.` },
    { n: '2.3', marks: 2, context: r`Same triangle.`, q: r`Determine the gradient of $BC$.`, a: r`$m_{BC}=\dfrac{1+5}{2-4}=-3$.` },
    { n: '2.4', marks: 4, context: r`Same triangle.`, q: r`Calculate the value of $\theta$, the angle of inclination of $BC$, rounded off to one decimal digit.`, a: r`$\tan\theta=-3\Rightarrow\theta=-71{,}6^\circ+180^\circ=108{,}4^\circ$.` },
    { n: '2.5', marks: 3, context: r`Same triangle.`, q: r`Determine the equation of the straight line $FA$ through $A$, which is parallel to $BC$.`, a: r`$m=-3$: $y+3=-3(x+2)\Rightarrow y=-3x-9$.` },
    { n: '2.6', marks: 3, context: r`Same triangle.`, q: r`Determine the equation of $AE$.`, a: r`$AE\perp BC$, so $m_{AE}=\dfrac13$: $y+3=\dfrac13(x+2)\Rightarrow y=\dfrac13x-\dfrac73$.` },
  ]),

  h2('Revision 3'),
  ANSWERS_NOTE,
  qs([
    { n: '1.1', marks: 4, context: r`$A(2;\,3)$, $B(p;\,0)$ and $C(5;\,-3)$ are the vertices of $\triangle ABC$. $AC$ cuts the $x$-axis at $D$.`, q: r`Calculate the coordinates of $D$.`, a: r`$AC$: $y=-2x+7$, so $D(3{,}5;\,0)$.` },
    { n: '1.2', marks: 4, context: r`Same triangle.`, q: r`Find the value of $p$ if $BC=AC$ and $p<0$.`, a: r`$(5-p)^2+9=45\Rightarrow p=-1$.` },
    { n: '1.3', marks: 3, context: r`Same triangle.`, q: r`If $p=-1$, calculate the size of $\hat A$, rounded off to ONE decimal digit.`, a: r`$\hat A=71{,}6^\circ$ (cosine rule, as in Revision 1, 2.4).` },
    { n: '1.4', marks: 4, context: r`Same triangle.`, q: r`Determine the area of triangle $ABD$.`, a: r`With $B(-1;\,0)$ and $D(3{,}5;\,0)$: $BD=4{,}5$ and the height is $3$. $\text{Area}=\tfrac12\cdot4{,}5\cdot3=6{,}75$ square units.` },
  ]),
]);

export const REVISION_B = lesson('geom-rev-b-trigonometry', 'B. Trigonometry (Revisions 4–6)', 40, [
  h2('Revision 4'),
  ANSWERS_NOTE,
  qs([
    { n: '1', marks: 4, q: r`If $\cos\theta=-\dfrac5{13}$ and $0^\circ\le\theta\le180^\circ$, determine using a suitable diagram and without the use of a calculator, the value of $\tan\theta$.`, a: r`$\cos\theta<0$: second quadrant, $x=-5$, $r=13$, so $y=\sqrt{13^2-5^2}=12$. $\tan\theta=\dfrac yx=-\dfrac{12}{5}$.` },
    { n: '2.1', marks: 1, context: r`$P(k;\,10)$ with $P\hat OX=30^\circ$.`, q: r`Write down the value of $\sin30^\circ$.`, a: r`$\dfrac12$` },
    { n: '2.2', marks: 1, context: r`Same figure.`, q: r`Hence, determine the length of $OP$.`, a: r`$\sin30^\circ=\dfrac{10}{OP}\Rightarrow OP=20$.` },
    { n: '2.3', marks: 3, context: r`Same figure.`, q: r`Calculate the value of $k$ (give the answer in simplified surd form).`, a: r`$k^2+10^2=20^2\Rightarrow k^2=300\Rightarrow k=10\sqrt3$.` },
    { n: '3.1', marks: 4, q: r`Simplify to a single trigonometric ratio of $x$: $\dfrac{\sin(180^\circ+x)}{\cos(90^\circ-x)\cdot\tan(180^\circ-x)}$`, a: r`$\dfrac{-\sin x}{\sin x\cdot(-\tan x)}=\dfrac{1}{\tan x}$.` },
    { n: '3.2', marks: 6, q: r`Determine, without using a calculator, the value of $2\cos210^\circ\cdot\sin60^\circ\cdot\tan315^\circ$.`, a: r`$2\left(-\dfrac{\sqrt3}2\right)\left(\dfrac{\sqrt3}2\right)(-1)=\dfrac32$.` },
    { n: '3.3', marks: 4, q: r`Using fundamental identities and not a diagram, prove that $\dfrac{1}{\tan\alpha\cdot\cos^2\alpha}=\dfrac1{\tan\alpha}+\tan\alpha$.`, a: r`RHS $=\dfrac{1+\tan^2\alpha}{\tan\alpha}=\dfrac{\frac{1}{\cos^2\alpha}}{\tan\alpha}=\dfrac{1}{\tan\alpha\cdot\cos^2\alpha}=$ LHS (using $1+\tan^2\alpha=\sec^2\alpha$, from $\sin^2+\cos^2=1$ divided by $\cos^2$).` },
    { n: '4', marks: 4, context: r`A parking lot is a parallelogram $PQRS$: $PS=15$ m, $SR=25$ m, $\hat S=85^\circ$.`, q: r`Calculate the area of the parking lot, rounded off to one decimal digit.`, a: r`$\text{Area}=PS\cdot SR\cdot\sin S=15\cdot25\cdot\sin85^\circ=373{,}6\text{ m}^2$.` },
  ]),

  h2('Revision 5'),
  ANSWERS_NOTE,
  qs([
    { n: '1.1', marks: 2, context: r`A person at $M$, $15$ m from the foot $L$ of a house, looks up at the top $K$ at an angle of elevation of $35^\circ$. He walks the opposite way at an inclination of $5^\circ$ for $10$ m to $N$. Let $\hat{NKM}=\theta$.`, q: r`Show by calculation that $KM=18{,}3$ m.`, a: r`$\cos35^\circ=\dfrac{15}{KM}\Rightarrow KM=18{,}3$ m.` },
    { n: '1.2', marks: 5, context: r`Same figure.`, q: r`Calculate the length of $KN$, rounded off to one decimal digit, using the cosine rule.`, a: r`$\hat{KMN}=180^\circ-35^\circ-5^\circ=140^\circ$. $KN^2=18{,}3^2+10^2-2(18{,}3)(10)\cos140^\circ=715{,}9\Rightarrow KN=26{,}8$ m.` },
    { n: '1.3', marks: 4, context: r`Same figure.`, q: r`Calculate the size of $\theta$, rounded off to one decimal digit.`, a: r`Sine rule: $\dfrac{\sin\theta}{10}=\dfrac{\sin140^\circ}{26{,}8}\Rightarrow\sin\theta=0{,}240\Rightarrow\theta=13{,}9^\circ$.` },
    { n: '2.1.1', marks: 1, context: r`Complete the basic identities.`, q: r`$\tan x=\dfrac{\dots\dots}{\dots\dots}$`, a: r`$\tan x=\dfrac{\sin x}{\cos x}$` },
    { n: '2.1.2', marks: 1, context: r`Complete the basic identities.`, q: r`$\sin^2\theta+\dots\dots=1$`, a: r`$\sin^2\theta+\cos^2\theta=1$` },
    { n: '2.2', marks: 1, q: r`Use basic identities to simplify to one trigonometric ratio of $A$: $\dfrac{1}{\tan^2A}\cdot\left(\dfrac1{\cos A}-\cos A\right)$`, a: r`$\dfrac{\cos^2A}{\sin^2A}\cdot\dfrac{1-\cos^2A}{\cos A}=\dfrac{\cos^2A}{\sin^2A}\cdot\dfrac{\sin^2A}{\cos A}=\cos A$.` },
    { n: '2.3', marks: 6, q: r`Simplify as far as possible without using a calculator: $\dfrac{\cos(90^\circ+x)\cdot\sin210^\circ\cdot\sin50^\circ}{\tan(180^\circ+x)\cdot\cos140^\circ\cdot\cos180^\circ}$`, a: r`Numerator: $(-\sin x)\left(-\tfrac12\right)\sin50^\circ=\tfrac12\sin x\sin50^\circ$. Denominator: $\tan x\cdot(-\cos40^\circ)\cdot(-1)=\tan x\sin50^\circ$ (as $\cos40^\circ=\sin50^\circ$). Result: $\dfrac{\frac12\sin x}{\tan x}=\tfrac12\cos x$.` },
    { n: '3', marks: 5, q: r`If $7\sin x-5=0$ and $\cos x<0$, calculate by using a sketch the value of $\tan x\cdot\sin x$.`, a: r`$\sin x=\dfrac57$, $\cos x<0$: second quadrant, $y=5$, $r=7$, $x=-\sqrt{24}=-2\sqrt6$. $\tan x=-\dfrac{5}{2\sqrt6}$. $\tan x\cdot\sin x=-\dfrac{25}{14\sqrt6}=-\dfrac{25\sqrt6}{84}\approx-0{,}73$.` },
  ]),

  h2('Revision 6'),
  ANSWERS_NOTE,
  note(r`Question 1.4 is printed as “$\dfrac{(1+\cos x)(1-\cos x)}{\sin x}=\cos(90^\circ+x)\cdot\cos(180^\circ+x)$”. Worked out, the left side is $\sin x$ and the right side is $\sin x\cos x$, so as printed it is not an identity: some part of it is probably misprinted or hard to read in the photo, so no proof is given.`),
  qs([
    { n: '1.1', marks: 6, q: r`Determine the numerical value of $\dfrac{\cos315^\circ}{\tan150^\circ\cdot\sin60^\circ}$.`, a: r`$\dfrac{\frac{\sqrt2}{2}}{\left(-\frac{\sqrt3}{3}\right)\left(\frac{\sqrt3}{2}\right)}=\dfrac{\frac{\sqrt2}2}{-\frac12}=-\sqrt2$.` },
    { n: '1.2', marks: 5, q: r`If $\tan x=-\dfrac23$ and $\sin x>0$, calculate by using a sketch the value of $\cos x\cdot\sin x$.`, a: r`Second quadrant: $x=-2$, $y=3$, $r=\sqrt{13}$. $\cos x\cdot\sin x=\dfrac{-2}{\sqrt{13}}\cdot\dfrac{3}{\sqrt{13}}=-\dfrac{6}{13}$.` },
    { n: '1.3', marks: 6, q: r`Simplify to a single trigonometric ratio of $A$: $\dfrac{\tan(180^\circ+A)\cdot\cos(180^\circ-A)\cdot\sin(360^\circ-A)}{\cos(90^\circ-A)}$`, a: r`$\dfrac{\tan A\cdot(-\cos A)\cdot(-\sin A)}{\sin A}=\tan A\cos A=\sin A$.` },
    { n: '2.1', marks: 4, context: r`Farmer Thlabane’s five paths connect homes at $A$, $B$, $C$ and $D$: $\hat A=104^\circ$, $B\hat DC=54^\circ$, $BD=52$ m, $DC=65$ m, $AD\perp CD$.`, q: r`The length of $AB$ (round off to the nearest metre).`, a: r`$\hat{ADB}=90^\circ-54^\circ=36^\circ$. Sine rule in $\triangle ABD$: $\dfrac{AB}{\sin36^\circ}=\dfrac{52}{\sin104^\circ}\Rightarrow AB=31{,}5\approx32$ m.` },
    { n: '2.2', marks: 3, context: r`Same figure.`, q: r`The area of triangle $BCD$ (round off to the nearest square metre).`, a: r`$\text{Area}=\tfrac12\cdot52\cdot65\cdot\sin54^\circ=1\,367\text{ m}^2$.` },
    { n: '2.3', marks: 6, context: r`Same figure.`, q: r`The total length of the tarred paths, round off to the nearest metre, if $AD=38$ m.`, a: r`$BC^2=52^2+65^2-2(52)(65)\cos54^\circ=2\,955{,}5\Rightarrow BC=54{,}4$ m. Paths: $AB+BC+CD+DA+BD=31{,}5+54{,}4+65+38+52=240{,}9\approx241$ m.` },
  ]),
]);

export const GEOM_REVISION_LESSONS: Lesson[] = [REVISION_A, REVISION_B, ...GEOM_REVISION_C_LESSONS, ...GEOM_REVISION_D_LESSONS, ...GEOM_REVISION_E_LESSONS];
