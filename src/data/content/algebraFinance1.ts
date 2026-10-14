import type { Lesson } from '../../lib/types';
import { r, h2, h3, p, ul, note, solution, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 6 Trial Test 4, Question 2, and Unit 7 Finance: A. Simple interest (start).
 * Book pp. 168–169; photo 64.
 */

const trial = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-functions-trials', id, title, minutes, blocks);
const fin = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-finance', id, title, minutes, blocks);

export const TRIAL_FUNCTIONS_4B = trial('alg-u6-trial-4b', 'Functions Trial Test 4: Question 2 [14]', 20, [
  ALG_ANSWERS_NOTE,
  p(r`Given $f(x)=-\dfrac12(x+1)^2+2$ and $g(x)=-2x-6$. Total for the test: 25.`),
  qs([
    { n: '2.1', marks: 2, q: r`Write down the co-ordinates of the turning point of $f$. (2)`, a: r`$TP(-1;\,2)$.` },
    { n: '2.2', marks: 4, q: r`Calculate the roots of the equation $f(x)=0$. (4)`, a: r`$(x+1)^2=4\Rightarrow x+1=\pm2$, so $x=1$ or $x=-3$.` },
    { n: '2.3', marks: 1, q: r`Write down the equation of the axis of symmetry of $f$. (1)`, a: r`$x=-1$.` },
    { n: '2.4', marks: 7, q: r`Sketch the graphs of $f$ and $g$ on the same system of axes. Show ALL intercepts with the axes. (7)`, a: r`$f$: sad parabola, $TP(-1;2)$, x-intercepts $(-3;0)$ and $(1;0)$, y-intercept $f(0)=\tfrac32$, so $(0;\tfrac32)$. $g$: line with gradient $-2$, y-intercept $(0;-6)$, x-intercept $(-3;0)$ (it meets the parabola at $(-3;0)$).` },
  ]),
]);

export const SIMPLE_INTEREST = fin('alg-u7-a-simple-interest', 'A. Simple Interest', 25, [
  h2('What is simple interest?'),
  p(r`**Simple interest** is where you earn or pay the same (fixed) amount of interest every year: interest on the initial amount that you invested, but not any interest on interest.`),
  p(r`Example: invest R1 000 for 1 year at 7% simple interest. Interest $=7\%=\dfrac7{100}=0{,}07$, so the interest is $R1\,000\times0{,}07=R70$ per annum. With a principal of R1 000, the accumulated amount after one year is $R1\,000+R70=R1\,070$ and after two years $R1\,000+2\times R70=R1\,140$.`),
  { type: 'math', label: 'Simple interest formula', text: r`A=P(1+i\cdot n)` },
  ul([
    r`$A$ is “After”, the final amount.`,
    r`$P$ is “Previous”, the starting amount (principal).`,
    r`$i$ is the interest rate (as a decimal).`,
    r`$n$ is the number of **years**.`,
  ]),
  h3('Keywords'),
  ul([r`Simple interest, straight line method, hire purchase.`, r`If nothing is given specifically, use simple interest.`, r`Depreciation means $-i$.`]),
  h2('Question 1'),
  p(r`If I deposit R1 000 into a special bank account which pays simple interest of 7% for 3 years, how much will I get back at the end?`),
  solution([
    ['Step 1: identify', r`P=R1\,000,\quad i=7\%=0{,}07,\quad n=3\text{ years; find }A`],
    ['Step 2: use', r`A=P(1+in)`],
    ['Step 3: solve', r`A=1\,000(1+0{,}07\times3)=R1\,210`],
  ]),
  note(r`Always convert the percentage to a decimal and make sure $n$ is in years (for months divide by 12).`),
]);

export const ALG_FINANCE_1_LESSONS: Lesson[] = [SIMPLE_INTEREST];
export const ALG_TRIALS_U6C_LESSONS: Lesson[] = [TRIAL_FUNCTIONS_4B];
