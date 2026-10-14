import type { Lesson } from '../../lib/types';
import { r, h2, note, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 6: Functions, E. Mixed functions: Task 11 and Task 12. Book pp. 160–161; photo 60.
 * The figures' labels were read from the photo; where a point is not defined in the text, the reading used is stated.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-functions-mixed', id, title, minutes, blocks);

export const MIXED_TASK_11_12 = lesson('alg-u6-task-11-12', 'E. Mixed Functions: Tasks 11 and 12', 45, [
  ALG_ANSWERS_NOTE,
  note(r`The points in each sketch are read from the picture (for example “$C$ is the y-intercept of $f$”). Where the text does not say it, the reading used is stated in the answer.`),

  h2('Task 11, Question 1'),
  qs([
    { n: '1', context: r`The sketch shows the graphs of $f(x)=x^2-2x-3$ and $g(x)=mx+c$. $A$ and $B$ are the x-intercepts of $f$, $C$ is its y-intercept (also on $g$), $D$ is its turning point and $g$ passes through $B$.`, q: r`1.1 Determine the lengths of $OA$, $OB$ and $OC$.`, a: r`x-intercepts: $x^2-2x-3=0\Rightarrow(x-3)(x+1)=0$, so $A(-1;0)$ and $B(3;0)$. y-intercept: $f(0)=-3$, so $C(0;-3)$. $OA=1$, $OB=3$, $OC=3$ units.` },
    { n: '1.2', q: r`Determine the coordinates of $D$, the turning point of the parabola.`, a: r`$x_D=\dfrac{-(-2)}{2(1)}=1$, $y_D=1-2-3=-4$. $D(1;\,-4)$.` },
    { n: '1.3', q: r`Determine the values of $m$ and $c$.`, a: r`$g$ passes through $C(0;-3)$ and $B(3;0)$: $m=\dfrac{0-(-3)}{3-0}=1$ and $c=-3$. $g(x)=x-3$.` },
    { n: '1.4', q: r`For which values of $x$ is $f(x)<g(x)$?`, a: r`The parabola is below the line between the intersection points $C$ ($x=0$) and $B$ ($x=3$): $0<x<3$.` },
  ]),

  h2('Task 11, Question 2'),
  qs([
    { n: '2', context: r`Given $f(x)=\dfrac ax$ and $g(x)=\dfrac b{x-2}+2$. $A(-2;2)$ is on $f$. $E(-1;k)$ is the point where the two graphs meet on the left of the y-axis; they meet again at $C$ on the right.`, q: r`2.1 If $A(-2;2)$ is a point on $f$, determine the value of $a$.`, a: r`$2=\dfrac a{-2}\Rightarrow a=-4$. $f(x)=\dfrac{-4}x$.` },
    { n: '2.2', q: r`If $E(-1;k)$ then determine the value of $k$.`, a: r`$E$ is on $f$: $k=\dfrac{-4}{-1}=4$.` },
    { n: '2.3', q: r`Write down the equations of the asymptotes of $g$.`, a: r`Vertical: $x=2$. Horizontal: $y=2$.` },
    { n: '2.4', q: r`Determine the equation of $g$.`, a: r`$E(-1;4)$ is also on $g$: $4=\dfrac b{-1-2}+2\Rightarrow\dfrac b{-3}=2\Rightarrow b=-6$. $g(x)=\dfrac{-6}{x-2}+2$. (Check at $C$: $f=g\Rightarrow-4(x-2)=-6x+2x(x-2)\Rightarrow x^2-3x-4=0$, so $x=-1$ or $x=4$, giving $C(4;-1)$ on the right.)` },
  ]),

  h2('Task 12, Question 1'),
  qs([
    { n: '1', context: r`The sketch shows the graphs of $f(x)=-x^2-2x+3$ and $g(x)=mx+c$. $A$ and $B$ are the x-intercepts, $C$ and $D$ are the y-intercepts (of $f$ and $g$ respectively) and $T$ is the turning point of the graph of $f$. $S$ is the point on the x-axis directly below $T$. $g$ passes through $B$ and is parallel to $AC$.`, q: r`1.1 Determine the lengths of $OC$ and $AB$.`, a: r`y-intercept of $f$: $C(0;3)$, so $OC=3$. x-intercepts: $x^2+2x-3=0\Rightarrow(x+3)(x-1)=0$, so $A(-3;0)$, $B(1;0)$ and $AB=1-(-3)=4$ units.` },
    { n: '1.2', q: r`Determine the equation of the axis of symmetry of the graph of $f$.`, a: r`$x=\dfrac{-(-2)}{2(-1)}=-1$. The axis of symmetry is $x=-1$.` },
    { n: '1.3', q: r`Show that the length of $ST=4$ units.`, a: r`$T(-1;\,f(-1))=(-1;\,-1+2+3)=(-1;4)$ and $S(-1;0)$. $ST=4-0=4$ units ✔.` },
    { n: '1.4.1', q: r`The graph of $g$ is parallel to $AC$. Calculate the gradient of $AC$.`, a: r`$A(-3;0)$, $C(0;3)$: $m_{AC}=\dfrac{3-0}{0-(-3)}=1$.` },
    { n: '1.4.2', q: r`Calculate the values of $m$ and $c$.`, a: r`Parallel lines have equal gradients: $m=1$. $g$ passes through $B(1;0)$: $0=1+c\Rightarrow c=-1$. $g(x)=x-1$ (so $D(0;-1)$).` },
  ]),

  h2('Task 12, Question 2'),
  qs([
    { n: '2', context: r`Sketched are the graphs of $f(x)=y=2x+1$ and $g(x)=y=\dfrac3x$. $A$ and $B$ are the points where the graphs meet. $C$ is the x-intercept of $f$; $D$ is on $g$ directly below $C$.`, q: r`2.1 The coordinates of $A$ and $B$.`, a: r`Equate: $2x+1=\dfrac3x\Rightarrow2x^2+x-3=0\Rightarrow(2x+3)(x-1)=0$. $x=1$: $y=3$, so $B(1;3)$. $x=-\dfrac32$: $y=-2$, so $A\left(-\dfrac32;\,-2\right)$.` },
    { n: '2.2', q: r`The coordinates of $C$ and then the distance $CD$.`, a: r`$C$: $2x+1=0\Rightarrow x=-\dfrac12$, so $C\left(-\dfrac12;0\right)$. $D$ is on $g$ at $x=-\dfrac12$: $y=\dfrac3{-1/2}=-6$. $CD=0-(-6)=6$ units (a vertical distance).` },
  ]),
  note(r`Question 2.3 (the coordinates of $E$ and $F$ if $EF=4$) is crossed out in the book with the note “not given in September tests”, so it is left out.`),
]);

export const ALG_MIXED_6_LESSONS: Lesson[] = [MIXED_TASK_11_12];
