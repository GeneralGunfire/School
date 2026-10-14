import type { Lesson } from '../../lib/types';
import { r, h2, note, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 6: Functions, Trial Tests 2, 3 and 4. Book pp. 166–167; photo 63.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-functions-trials', id, title, minutes, blocks);

export const TRIAL_FUNCTIONS_2 = lesson('alg-u6-trial-2', 'Functions Trial Test 2', 30, [
  ALG_ANSWERS_NOTE,
  h2('Question 1 [12]'),
  qs([
    { n: '1.1', marks: 6, context: r`The graph of $f(x)=\dfrac a{x-p}+q$ is shown. Its asymptotes cross at $(-1;-3)$ and the graph passes through the origin.`, q: r`Find the values of $p$, $q$ and $a$. (6)`, a: r`The vertical asymptote is $x=-1$, so $p=-1$. The horizontal asymptote is $y=-3$, so $q=-3$. $f(x)=\dfrac a{x+1}-3$. The graph passes through $(0;0)$: $0=\dfrac a1-3\Rightarrow a=3$. $f(x)=\dfrac3{x+1}-3$.` },
    { n: '1.2', marks: 3, q: r`The straight line $g(x)=mx+c$ intersects $f$ at $(0;0)$ and $(-4;t)$. Calculate the values of $t$, $m$ and $c$. (3)`, a: r`$t=f(-4)=\dfrac3{-3}-3=-4$. The line passes through $(0;0)$ and $(-4;-4)$: $m=\dfrac{-4-0}{-4-0}=1$ and $c=0$. $g(x)=x$.` },
    { n: '1.3', marks: 3, q: r`Draw $g$ on the same system of axes. (3)`, a: r`$g(x)=x$ is the straight line through the origin with gradient $1$, passing through $(-4;-4)$ and $(0;0)$.` },
  ]),
  h2('Question 2'),
  qs([
    { n: '2', context: r`A sketch of $f:x\to-(x+2)^2+9$ and $g:x\to mx+k$ is given. $A$ and $B$ are the x-intercepts of $f$, $C$ is its y-intercept (also on $g$), $D$ is the turning point, $E$ is on $f$ with $EC\parallel AB$, and $F$ is on $AC$ directly below $D$.`, q: r`2.1 Find the co-ordinates of $A$, $B$, $C$, $D$ (turning point) and $E$, if $EC\parallel AB$.`, a: r`$D(-2;9)$ from the turning-point form. x-intercepts: $(x+2)^2=9\Rightarrow x=1$ or $x=-5$, so $A(-5;0)$ and $B(1;0)$. $C$: $f(0)=-4+9=5$, so $C(0;5)$. $EC\parallel AB$ means $E$ has the same y-value as $C$: $-(x+2)^2+9=5\Rightarrow(x+2)^2=4\Rightarrow x=0$ ($C$) or $x=-4$, so $E(-4;5)$.` },
    { n: '2.2', q: r`Find the values of $m$ and $k$.`, a: r`$g$ passes through $A(-5;0)$ and $C(0;5)$: $m=\dfrac{5-0}{0-(-5)}=1$, $k=5$. $g(x)=x+5$.` },
    { n: '2.3', q: r`Find the distance $DF$, where $F$ lies on $AC$ and $DF$ is parallel to the y-axis.`, a: r`$DF$ is vertical at $x=-2$. $F$ is on $g$: $g(-2)=3$. $DF=9-3=6$ units.` },
  ]),
]);

export const TRIAL_FUNCTIONS_3 = lesson('alg-u6-trial-3', 'Functions Trial Test 3 [25]', 30, [
  ALG_ANSWERS_NOTE,
  h2('Question 1 [11]: $f(x)=\dfrac{-3}{x-5}+2$'),
  qs([
    { n: '1.1', marks: 2, q: r`Find the equation of asymptotes. (2)`, a: r`Vertical: $x=5$. Horizontal: $y=2$.` },
    { n: '1.2', marks: 4, q: r`Determine the x- and y-intercepts of the function. (4)`, a: r`y-intercept: $f(0)=\dfrac{-3}{-5}+2=\dfrac{13}5$, so $\left(0;\dfrac{13}5\right)$. x-intercept: $\dfrac{-3}{x-5}+2=0\Rightarrow\dfrac{-3}{x-5}=-2\Rightarrow x-5=\dfrac32\Rightarrow x=\dfrac{13}2$, so $\left(\dfrac{13}2;0\right)$.` },
    { n: '1.3', marks: 2, q: r`For which values of $x$ is $f(x)<0$? (2)`, a: r`$a=-3<0$, so the branches lie in the 2nd and 4th quadrants of the asymptotes. The left branch is above $y=2$ (positive). The right branch starts at $-\infty$ near $x=5$ and crosses the x-axis at $x=\dfrac{13}2$. So $f(x)<0$ for $5<x<\dfrac{13}2$.` },
    { n: '1.4', marks: 3, q: r`Write down the equation of $f(x)$ reflected in the y-axis. (3)`, a: r`Replace $x$ by $-x$: $f(-x)=\dfrac{-3}{-x-5}+2=\dfrac3{x+5}+2$.` },
  ]),
  h2('Question 2 [14]: $y=x^2+x-20$'),
  qs([
    { n: '2.1', marks: 5, context: r`$A$ and $C$ are the x-intercepts, $B$ the y-intercept; $F$ and $G$ lie on a vertical line left of the y-axis ($F$ on the x-axis, $G$ on the parabola); $D$ is on the parabola above $E$ on the x-axis.`, q: r`The length of $OA$, $OB$ and $OC$. (5)`, a: r`x-intercepts: $x^2+x-20=0\Rightarrow(x+5)(x-4)=0$, so $A(-5;0)$ and $C(4;0)$. y-intercept: $B(0;-20)$. $OA=5$, $OB=20$, $OC=4$.` },
    { n: '2.2', marks: 3, q: r`The value of $k$, if $D$ is $(k;10)$. (3)`, a: r`$k^2+k-20=10\Rightarrow k^2+k-30=0\Rightarrow(k+6)(k-5)=0$. $D$ is on the right of $C$, so $k=5$ ($k=-6$ would be on the left branch).` },
    { n: '2.3', marks: 3, q: r`The length of $FG$ when $OF=4$. (3)`, a: r`$F(-4;0)$ and $G(-4;\,f(-4))$ with $f(-4)=16-4-20=-8$. $FG=8$ units.` },
    { n: '2.4', marks: 3, q: r`The maximum length of $FG$, if $G$ is a variable point on the parabola between $A$ and $C$ with $FG$ perpendicular to the x-axis. (3)`, a: r`$FG=0-(x^2+x-20)=-x^2-x+20$, largest at the turning point $x=-\dfrac12$: $FG_{max}=-\dfrac14+\dfrac12+20=20\tfrac14=\dfrac{81}4$ units.` },
  ]),
  note(r`Total: 25.`),
]);

export const TRIAL_FUNCTIONS_4 = lesson('alg-u6-trial-4', 'Functions Trial Test 4 [11]', 20, [
  ALG_ANSWERS_NOTE,
  h2('Question 1'),
  qs([
    { n: '1.1', marks: 8, q: r`Sketch the graph of $f(x)=-2^x+4$. Indicate the co-ordinates of the intercepts and the asymptote(s) on the graph. Show ALL the calculations. (8)`, a: r`Horizontal asymptote: $y=4$ (no vertical asymptote). y-intercept: $f(0)=-1+4=3$, so $(0;3)$. x-intercept: $-2^x+4=0\Rightarrow2^x=4\Rightarrow x=2$, so $(2;0)$. The curve is decreasing (reflection of $2^x$ in the x-axis, shifted up 4), approaching $y=4$ from below on the left.` },
    { n: '1.2', marks: 3, q: r`For which values of $x$ is $f(x)\ge0$? (3)`, a: r`The graph is on or above the x-axis up to the x-intercept: $x\le2$.` },
  ]),
]);

export const ALG_TRIALS_U6B_LESSONS: Lesson[] = [TRIAL_FUNCTIONS_2, TRIAL_FUNCTIONS_3, TRIAL_FUNCTIONS_4];
