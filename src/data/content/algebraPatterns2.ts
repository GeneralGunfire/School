import type { Lesson } from '../../lib/types';
import { r, h2, note, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 3: Number Patterns, Tasks 3 and 4 (quadratic sequences). Book pp. 62–64; photos 17–18 of the
 * Math-Algebra folder. Task 3 question 3 (a long telescoping product whose last factor is cut off)
 * and question 4 (a dot-diagram table whose diagram is partly cut off) are not answered.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-number-patterns', id, title, minutes, blocks);

export const PATTERNS_QUADRATIC_TASKS = lesson('alg-u3-c-quadratic-tasks', 'C. Quadratic Sequences: Tasks 3 and 4', 30, [
  h2('Task 3'),
  ALG_ANSWERS_NOTE,
  note(r`Method used throughout: $2a=$ second difference, $3a+b=$ first difference of the first two terms, $a+b+c=$ first term.`),
  qs([
    { n: '1.1', context: r`Consider the sequence $-1;\,2;\,7;\,14;\ldots$`, q: r`Will the form of the general term be linear or quadratic? Explain your answer.`, a: r`First differences $3;\,5;\,7$ are not constant but the second differences are constant ($2$), so it is quadratic.` },
    { n: '1.2', context: r`Same.`, q: r`Find the general term.`, a: r`$2a=2\Rightarrow a=1$; $3a+b=3\Rightarrow b=0$; $a+b+c=-1\Rightarrow c=-2$. $T_n=n^2-2$.` },
    { n: '1.3', context: r`Same.`, q: r`Extend the sequence by three terms.`, a: r`$T_5=23$, $T_6=34$, $T_7=47$.` },
    { n: '2.1', context: r`A sequence is given as $7;\,13;\,23;\,37;\ldots$`, q: r`Determine $T_n$.`, a: r`First differences $6;\,10;\,14$, second difference $4$: $a=2$, $b=0$, $c=5$. $T_n=2n^2+5$.` },
    { n: '2.2', context: r`Same.`, q: r`Use your formula to find the value of $T_{30}$.`, a: r`$T_{30}=2(900)+5=1805$.` },
  ]),

  h2('Task 4'),
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1.1', context: r`Consider the sequence $-2;\,1;\,10;\,25;\ldots$`, q: r`Is the general term linear, quadratic or neither? Justify your answer.`, a: r`First differences $3;\,9;\,15$; second differences $6;\,6$ are constant, so it is quadratic.` },
    { n: '1.2', context: r`Same.`, q: r`Determine a formula for $T_n$.`, a: r`$2a=6\Rightarrow a=3$; $3a+b=3\Rightarrow b=-6$; $a+b+c=-2\Rightarrow c=1$. $T_n=3n^2-6n+1$.` },
    { n: '2.1', context: r`Dots are arranged in patterns: $2$, $6$, $12$, $20$ dots (a rectangle $n$ by $n+1$).`, q: r`Make a conjecture about the relationship between the number of dots and the pattern number.`, a: r`The number of dots is the pattern number times the next whole number: $1\cdot2$, $2\cdot3$, $3\cdot4$, $4\cdot5$. The second difference is $2$, so the relationship is quadratic.` },
    { n: '2.2', context: r`Same.`, q: r`Write an algebraic formula that generalises the relationship.`, a: r`$T_n=n(n+1)=n^2+n$.` },
    { n: '3', q: r`Study the pattern $3;\,6;\,11;\,18;\,27;\ldots$ Determine a formula for the general term.`, a: r`First differences $3;\,5;\,7;\,9$, second difference $2$: $a=1$, $b=0$, $c=2$. $T_n=n^2+2$.` },
    { n: '4.1', context: r`Groups of squares: group $1$ has $1$ square, group $2$ has $5$, group $3$ has $13$, group $4$ has $25$.`, q: r`How many squares are there in the $5^{\text{th}}$ and the $6^{\text{th}}$ group?`, a: r`First differences $4;\,8;\,12$, second difference $4$ (next first differences $16$, $20$). $T_5=25+16=41$ and $T_6=41+20=61$.` },
    { n: '4.2', context: r`Same.`, q: r`Determine the formula for the $n^{\text{th}}$ term of the sequence.`, a: r`$a=2$; $3a+b=4\Rightarrow b=-2$; $a+b+c=1\Rightarrow c=1$. $T_n=2n^2-2n+1$.` },
    { n: '4.3', context: r`Same.`, q: r`How many squares are in the $70^{\text{th}}$ group?`, a: r`$T_{70}=2(4900)-140+1=9661$.` },
    { n: '5.1', context: r`Consider the sequence $52;\,60;\,72;\,88;\ldots$`, q: r`Write down the next $2$ terms of the sequence.`, a: r`First differences $8;\,12;\,16$, second difference $4$. Next first differences $20$, $24$: the terms are $108;\,132$.` },
    { n: '5.2', context: r`Same.`, q: r`Find the general term of the sequence.`, a: r`$a=2$; $3a+b=8\Rightarrow b=2$; $a+b+c=52\Rightarrow c=48$. $T_n=2n^2+2n+48$.` },
  ]),
]);

export const ALG_PATTERNS_2_LESSONS: Lesson[] = [PATTERNS_QUADRATIC_TASKS];
