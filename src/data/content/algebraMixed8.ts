import type { Lesson } from '../../lib/types';
import { r, h2, note, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 6: Functions, E. Mixed functions: Task 15 (bottom of the page cut off) and Trial Test 1 (Functions).
 * Book pp. 164–165; photo 62.
 */

const lessonM = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-functions-mixed', id, title, minutes, blocks);
const lessonT = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-functions-trials', id, title, minutes, blocks);

export const MIXED_TASK_15 = lessonM('alg-u6-task-15', 'E. Mixed Functions: Task 15', 30, [
  ALG_ANSWERS_NOTE,
  h2('Question 1'),
  qs([
    { n: '1', context: r`Given the graphs illustrated of a parabola $f(x)=-(x-5)(x+1)$ with turning point $A$ and y-intercept $B$, and $g(x)=k^x+5$, also passing through the point $A$. $C$ is the y-intercept of $g$; $D$ and $E$ are the x-intercepts of $f$.`, q: r`1.1 Show that $A$ is $(2;9)$ and $B$ is $(0;5)$.`, a: r`x-intercepts: $x=5$ and $x=-1$. The turning point is midway: $x_A=\dfrac{5+(-1)}2=2$. $f(2)=-(2-5)(2+1)=-(-3)(3)=9$, so $A(2;9)$. y-intercept: $f(0)=-(0-5)(0+1)=5$, so $B(0;5)$ ✔.` },
    { n: '1.2', q: r`Find the value of $k$.`, a: r`$A(2;9)$ is on $g$: $9=k^2+5\Rightarrow k^2=4\Rightarrow k=2$ (an exponential base must be positive).` },
    { n: '1.3', q: r`Find the coordinates of $C$, $D$ and $E$.`, a: r`$C$: $g(0)=2^0+5=6$, so $C(0;6)$. $D$ and $E$ are the x-intercepts of $f$: $D(-1;0)$ and $E(5;0)$.` },
  ]),
  h2('Question 2: $f(x)=2\cdot3^x-4$ and $g(x)=\dfrac4{x+3}$'),
  qs([
    { n: '2.1', q: r`Find the asymptote of $f(x)$.`, a: r`$y=-4$.` },
    { n: '2.2', q: r`Determine the y-intercept of $f$.`, a: r`$f(0)=2\cdot3^0-4=-2$, so $(0;-2)$.` },
    { n: '2.3', q: r`Find one other point on the graph of $f$.`, a: r`$f(1)=2\cdot3-4=2$, so $(1;2)$ is on the graph. (Another: $f(-1)=\tfrac23-4=-\tfrac{10}3$.)` },
    { n: '2.4', q: r`Sketch the graph of $f$.`, a: r`Increasing curve ($a=3>1$, $b=2>0$) with horizontal asymptote $y=-4$, through $(0;-2)$ and $(1;2)$. The x-intercept is where $3^x=2$, between $x=0$ and $x=1$.` },
    { n: '2.5', q: r`What is the range of $f$?`, a: r`$y>-4$, i.e. $y\in(-4;\infty)$.` },
    { n: '2.6', q: r`Find the asymptotes of $g$.`, a: r`Vertical: $x=-3$. Horizontal: $y=0$.` },
    { n: '2.7', q: r`Determine the y-intercept of $g$.`, a: r`$g(0)=\dfrac43$, so $\left(0;\dfrac43\right)$.` },
    { n: '2.8', q: r`Sketch the graph of $g$.`, a: r`$a=4>0$: 1st and 3rd quadrants of the asymptotes $x=-3$ and $y=0$; passes through $\left(0;\tfrac43\right)$ and, for example, $(1;1)$. No x-intercept.` },
  ]),
  note(r`The questions that follow 2.8 (about the range of $f$ and $g$ and their graphs) are cut off at the bottom of the page and are not included.`),
]);

export const TRIAL_FUNCTIONS_1 = lessonT('alg-u6-trial-1', 'Functions Trial Test 1 [25]', 30, [
  ALG_ANSWERS_NOTE,
  h2('Question 1 [10]'),
  qs([
    { n: '1', context: r`Given: $f(x)=-2(x-3)^2+8$.`, q: r`1.1 Write down the co-ordinates of the turning point of $f$. (2)`, a: r`The function is in turning-point form: $TP(3;\,8)$.`, marks: 2 },
    { n: '1.2', q: r`Draw a sketch graph of $f$. Clearly indicate the co-ordinates of the turning point as well as the intercepts with the axes. (6)`, a: r`Turning point $(3;8)$; $a=-2<0$, arms downwards. x-intercepts: $-2(x-3)^2+8=0\Rightarrow(x-3)^2=4\Rightarrow x=1$ or $x=5$: $(1;0)$ and $(5;0)$. y-intercept: $f(0)=-2(9)+8=-10$: $(0;-10)$.`, marks: 6 },
    { n: '1.3', q: r`Without any further calculations, sketch the graph of $y=f(x-2)$ on the same set of axes. Indicate only the co-ordinates of the turning point. (2)`, a: r`Shift $f$ 2 units to the right: the same shape with turning point $(5;8)$.`, marks: 2 },
  ]),
  h2('Question 2 [15]'),
  qs([
    { n: '2', context: r`The sketch shows the graphs of $f(x)=-x^2+8x+20$ and $g(x)=4x+8$. $A$ and $B$ are on the x-axis; $C$ is the y-intercept of $f$; $M$ is its turning point; $EF$ is a vertical line through $G$.`, q: r`2.1 Determine the length of $OA$ and $OB$. (4)`, a: r`$A$ is the x-intercept of $g$ (it is also on $f$): $4x+8=0\Rightarrow x=-2$, $A(-2;0)$, $OA=2$. $B$ is the other x-intercept of $f$: $-x^2+8x+20=0\Rightarrow x^2-8x-20=0\Rightarrow(x-10)(x+2)=0$, so $B(10;0)$ and $OB=10$.`, marks: 4 },
    { n: '2.2', q: r`Find the co-ordinates of the point $C$ and $M$ (turning point). (6)`, a: r`$C$: $f(0)=20$, so $C(0;\,20)$. $M$: $x=\dfrac{-8}{2(-1)}=4$, $y=-16+32+20=36$, so $M(4;\,36)$.`, marks: 6 },
    { n: '2.3', q: r`Calculate the length of $EF$, if $G$ is $(5;0)$. (5)`, a: r`$E$ is on $f$ at $x=5$: $f(5)=-25+40+20=35$. $F$ is on $g$ at $x=5$: $g(5)=28$. $EF=35-28=7$ units.`, marks: 5 },
  ]),
  note(r`Total: 25.`),
]);

export const ALG_MIXED_8_LESSONS: Lesson[] = [MIXED_TASK_15];
export const ALG_TRIALS_U6_LESSONS: Lesson[] = [TRIAL_FUNCTIONS_1];
