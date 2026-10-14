import type { Lesson } from '../../lib/types';
import { r, h2, h3, p, note, fig, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';
import { expo } from './algebraExponential1';

/**
 * Unit 6: Functions, D. Exponential function: Questions 4–5 and Task 9. Book pp. 143–144; photo 54.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-functions-exponential', id, title, minutes, blocks);

export const EXPONENTIAL_EXAMPLES_2 = lesson('alg-u6-d-exponential-examples-2', 'D. Exponential Function: Worked Questions 4 and 5', 30, [
  h2('Question 4'),
  p(r`The graph shown is of $f(x)=a\cdot b^x$ ($a>0$), a decreasing curve through $P(2;144)$.`),
  qs([
    { n: '4.1', q: r`If $b=\dfrac34$, find $a$.`, a: r`$P$ is on the graph, so it satisfies the equation: $144=a\left(\dfrac34\right)^2=\dfrac9{16}a\Rightarrow a=256$.` },
    { n: '4.2', q: r`Hence write down the equation of $f$.`, a: r`$f(x)=256\left(\dfrac34\right)^x$.` },
    { n: '4.3', q: r`Determine, correct to TWO decimal places, the value of $f(13)$.`, a: r`$f(13)=256\left(\dfrac34\right)^{13}=6{,}08$.` },
    { n: '4.4', q: r`Describe the transformation of the curve of $f$ to $h$ if $h(x)=f(-x)$.`, a: r`$f(-x)$ is a reflection of $f(x)$ in the y-axis (symmetrical to the y-axis).` },
  ]),
  fig(expo(256, 0.75, 0, 0, [-2, 14], [-40, 300], [[2, 144, 'P(2; 144)'], [0, 256, '(0; 256)']], 'f(x) = 256·(3/4)ˣ')),

  h2('Question 5'),
  p(r`$t(x)=2^{x-p}+q$. The graph of $t$ intersects the x-axis at $(-1;0)$ and has a dotted horizontal asymptote at $y=-2$.`),
  qs([
    { n: '5.1', q: r`Write down the value of $q$.`, a: r`$q$ is the horizontal asymptote: $q=-2$.` },
    { n: '5.2', q: r`Calculate the value of $p$.`, a: r`The point $(-1;0)$ satisfies $y=2^{x-p}-2$: $0=2^{-1-p}-2\Rightarrow2^1=2^{-1-p}\Rightarrow1=-1-p\Rightarrow p=-2$.` },
    { n: '5.3', q: r`Find the equation of $h(x)=t(x)+3$.`, a: r`$t(x)=2^{x+2}-2$, so $h(x)=2^{x+2}-2+3=2^{x+2}+1$.` },
  ]),
  fig(expo(1, 2, -2, -2, [-6, 3], [-4, 12], [[-1, 0, '(-1; 0)'], [0, 2, '(0; 2)']], 't(x) = 2ˣ⁺² − 2')),
]);

type Row = [string, string, number, number, number, number, string];
// label, tex, b, a, p, q, working text
const ROWS: Row[] = [
  ['1.1', 'y=2^x+1', 1, 2, 0, 1, r`Shift $y=2^x$ up 1. Asymptote $y=1$; y-intercept $(0;2)$; no x-intercept.`],
  ['1.2', 'y=2^x-1', 1, 2, 0, -1, r`Shift down 1. Asymptote $y=-1$; y-intercept $(0;0)$, which is also the x-intercept (solve $2^x=1$).`],
  ['1.3', 'y=2^{x+1}', 1, 2, -1, 0, r`Shift left 1. Asymptote $y=0$; y-intercept $(0;2)$.`],
  ['1.4', 'y=2^{x+1}-2', 1, 2, -1, -2, r`Shift left 1 and down 2. Asymptote $y=-2$; y-intercept $2^1-2=0$, so $(0;0)$, also the x-intercept.`],
  ['1.5', 'y=2^{x-1}', 1, 2, 1, 0, r`Shift right 1. Asymptote $y=0$; y-intercept $\left(0;\tfrac12\right)$.`],
  ['1.6', 'y=-2^x', -1, 2, 0, 0, r`Reflect in the x-axis. Asymptote $y=0$; y-intercept $(0;-1)$; the graph lies below the x-axis.`],
  ['1.7', 'y=-2^x+3', -1, 2, 0, 3, r`Reflect in the x-axis, then up 3. Asymptote $y=3$; y-intercept $(0;2)$; x-intercept where $2^x=3$, between $x=1$ and $x=2$ (about $1{,}58$).`],
  ['1.8', 'y=-2^{x+1}-3', -1, 2, -1, -3, r`Reflect, shift left 1 and down 3. Asymptote $y=-3$; y-intercept $(0;-5)$; no x-intercept (the graph is always below $-3$).`],
  ['1.9', 'y=2^{-x}+3', 1, 0.5, 0, 3, r`$2^{-x}=\left(\tfrac12\right)^x$ is decreasing. Asymptote $y=3$; y-intercept $(0;4)$; no x-intercept.`],
  ['1.10', 'y=2^{-x}+2', 1, 0.5, 0, 2, r`Decreasing. Asymptote $y=2$; y-intercept $(0;3)$; no x-intercept.`],
];

const taskBlocks = ROWS.flatMap(([n, tex, b, a, pp, q, text]) => {
  const y0 = b * Math.pow(a, -pp) + q;
  const lo = Math.min(q, y0) - 3;
  const hi = Math.max(q, y0, 4) + 4;
  return [
    h3(`${n} $${tex}$`),
    p(text),
    fig(expo(b, a, pp, q, [-4, 4], [Math.floor(lo), Math.ceil(hi)], [[0, y0, `(0; ${y0})`]], `${n}  ${tex.replace(/[{}]/g, '').replace('^', ' ^ ')}`)),
  ];
});

export const EXPONENTIAL_TASK_9 = lesson('alg-u6-task-9', 'D. Exponential Function: Task 9', 40, [
  ALG_ANSWERS_NOTE,
  h2('Task 9, Question 1: the graph of $y=2^x$ is given; hence sketch the following'),
  note(r`Use the shift and reflection rules: $f(x-a)$ right, $f(x+a)$ left, $f(x)\pm a$ up/down, $-f(x)$ reflects in the x-axis, $f(-x)$ in the y-axis. The horizontal asymptote of each graph is the value of $q$.`),
  ...taskBlocks,
]);

export const ALG_EXPONENTIAL_3_LESSONS: Lesson[] = [EXPONENTIAL_EXAMPLES_2, EXPONENTIAL_TASK_9];
