import type { Lesson } from '../../lib/types';
import { r, h2, p, note, solution, qs, venn, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 8 Probability: A. Three-set worked questions and Task 1. Book pp. 188-189; photo 74.
 */

const prob = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-probability', id, title, minutes, blocks);

export const SETS_THREE = prob('alg-u8-a-three-sets', 'A. Three-Set Worked Questions', 30, [
  h2('Question 2'),
  p(r`$S$ is the sample space of the first 60 natural numbers. Inside $S$: $A$ is the set of even numbers, $B$ the set of numbers divisible by 3 and $C$ the set of numbers divisible by 5. 2.1 Write the number of elements in each set as well as their intersections and unions. 2.2 Draw a Venn diagram.`),
  solution([
    ['2.1 Sets', r`n(S)=60;\;n(A)=30;\;n(B)=20;\;n(C)=12`],
    ['$A$ and $B$ (divisible by 6); $A$ or $B$', r`n(A\cap B)=10;\quad n(A\cup B)=30+20-10=40`],
    ['$A$ and $C$ (divisible by 10); $A$ or $C$', r`n(A\cap C)=6;\quad n(A\cup C)=30+12-6=36`],
    ['$B$ and $C$ (divisible by 15); $B$ or $C$', r`n(B\cap C)=4;\quad n(B\cup C)=20+12-4=28`],
    ['$A$ and $B$ and $C$ (divisible by 30)', r`n(A\cap B\cap C)=2;\quad n(A\cup B\cup C)=44`],
  ]),
  p(r`2.2 Venn diagram regions (start in the middle): all three $2$; only $A\cap B$ $=10-2=8$; only $A\cap C$ $=6-2=4$; only $B\cap C$ $=4-2=2$; only $A$ $=30-8-4-2=16$; only $B$ $=20-8-2-2=8$; only $C$ $=12-4-2-2=4$; outside all three $=60-44=16$.`),
  venn(
    {
      sets: ['A (even)', 'B (÷3)', 'C (÷5)'],
      regions: { A: '16', B: '8', C: '4', AB: '8', AC: '4', BC: '2', ABC: '2', outside: '16' },
      outsideLabel: 'not even, ÷3 or ÷5',
      universe: 'S = first 60 natural numbers',
    },
    'Check: 16 + 8 + 4 + 8 + 4 + 2 + 2 + 16 = 60, matching n(S).',
  ),
  h2('Question 3'),
  p(r`From a group of 80 Grade 11 learners, 40 speak Afrikaans ($A$), 30 English ($E$) and 30 Zulu ($Z$), but: 10 speak none of the three, 15 speak both Afrikaans and English, 10 both Afrikaans and Zulu, 10 both English and Zulu. Find the number speaking all three languages.`),
  solution([
    ['Let $x$ be the number speaking all three. Regions: $A\cap E$ only $15-x$; $A\cap Z$ only $10-x$; $E\cap Z$ only $10-x$.', ''],
    ['Only $A$ $=40-(15-x)-(10-x)-x=15+x$; only $E$ $=30-(15-x)-(10-x)-x=5+x$; only $Z$ $=30-(10-x)-(10-x)-x=10+x$.', ''],
    ['Add all regions (and the 10 outside) to get 80:', r`(15+x)+(5+x)+(10+x)+(15-x)+(10-x)+(10-x)+x+10=75+x=80`],
    r`x=5`,
  ]),
  note(r`The book writes “$75+x+80\to x=5$”; the sum is $75+x=80$, giving $x=5$.`),
  venn(
    {
      sets: ['A (Afrikaans)', 'E (English)', 'Z (Zulu)'],
      regions: { A: '20', B: '10', C: '15', AB: '10', AC: '5', BC: '5', ABC: '5', outside: '10' },
      outsideLabel: 'speak none of the three',
      universe: 'S = 80 learners',
    },
    'With x = 5: only A = 15+5 = 20, only E = 5+5 = 10, only Z = 10+5 = 15, A∩E only = 15−5 = 10, A∩Z only = 10−5 = 5, E∩Z only = 10−5 = 5. Check: 20+10+15+10+5+5+5+10 = 80.',
  ),
]);

export const PROB_TASK_1 = prob('alg-u8-task-1', 'A. Sets: Task 1', 30, [
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1', q: r`Let $S$ be the whole numbers from 1 to 16, $X$ the even numbers from 1 to 16 and $Y$ the primes from 1 to 16. Draw a Venn diagram depicting $S$, $X$ and $Y$.`, a: r`$X=\{2,4,6,8,10,12,14,16\}$, $Y=\{2,3,5,7,11,13\}$. The overlap $X\cap Y=\{2\}$. Only $X$: $\{4,6,8,10,12,14,16\}$; only $Y$: $\{3,5,7,11,13\}$; outside both: $\{1,9,15\}$.` },
  ]),
  venn(
    { sets: ['X (even)', 'Y (prime)'], regions: { A: '4, 6, 8, 10, 12, 14, 16', AB: '2', B: '3, 5, 7, 11, 13', outside: '1, 9, 15' }, outsideLabel: 'neither even nor prime', universe: 'S = 1 to 16' },
  ),
  qs([
    { n: '2', context: r`79 Grade 10 learners all take some combination of Maths ($M$), Geography ($G$) and History ($H$). $n(G)=41$, $n(H)=36$, $n(M)=30$; $n(M\cap H)=16$; $n(G\cap H)=6$; 8 take Maths only; 16 take History only.`, q: r`2.1 Draw a Venn diagram. 2.2 How many take all three subjects?`, a: r`Let $x$ = all three. History: $16+(16-x)+(6-x)+x=36\Rightarrow38-x=36\Rightarrow x=2$. So 2 learners take all three. Regions: $M$ only $8$; $H$ only $16$; $M\cap H$ only $14$; $G\cap H$ only $4$; all three $2$.` },
    { n: '2.3', q: r`How many learners take Maths and Geography but not History?`, a: r`$M=30$: $8+14+2+(M\cap G\text{ only})=30\Rightarrow$ **6** learners.` },
    { n: '2.4', q: r`How many learners take Geography only?`, a: r`$G=41=G\text{ only}+6+4+2\Rightarrow G\text{ only}=29$. (Check: $8+16+29+6+14+4+2=79$ ✔.)` },
  ]),
  venn(
    {
      sets: ['M (Maths)', 'G (Geography)', 'H (History)'],
      regions: { A: '8', B: '29', C: '16', AB: '6', AC: '14', BC: '4', ABC: '2', outside: '0' },
      outsideLabel: 'take none of the three',
      universe: 'S = 79 learners',
    },
    'Every learner takes some combination of the three subjects, so there is no "outside" region here. Check: 8+29+16+6+14+4+2 = 79.',
  ),
  qs([
    { n: '3', context: r`Pieces of paper labelled 1 to 12 are placed in a box, one is taken out and replaced.`, q: r`3.1 What is the sample space $S$?`, a: r`$S=\{1,2,3,4,5,6,7,8,9,10,11,12\}$.` },
    { n: '3.2', q: r`Write the set $A$ for a factor of 12.`, a: r`$A=\{1,2,3,4,6,12\}$.` },
    { n: '3.3', q: r`Write the set $B$ for a prime number.`, a: r`$B=\{2,3,5,7,11\}$.` },
    { n: '3.4', q: r`Represent $A$, $B$ and $S$ by a Venn diagram.`, a: r`$A\cap B=\{2,3\}$; only $A$: $\{1,4,6,12\}$; only $B$: $\{5,7,11\}$; outside both: $\{8,9,10\}$.` },
    { n: '3.5', q: r`Find (i) $n(S)$, (ii) $n(A)$, (iii) $n(B)$.`, a: r`$n(S)=12$, $n(A)=6$, $n(B)=5$.` },
  ]),
  venn(
    { sets: ['A (factor of 12)', 'B (prime)'], regions: { A: '1, 4, 6, 12', AB: '2, 3', B: '5, 7, 11', outside: '8, 9, 10' }, outsideLabel: 'neither', universe: 'S = 1 to 12' },
  ),
  qs([
    { n: '4', q: r`In a group of 50 learners, 35 take Mathematics and 30 take History, while 12 take neither. How many take both?`, a: r`$38=35+30-x\Rightarrow x=27$ take both.` },
  ]),
]);

export const ALG_PROB_3_LESSONS: Lesson[] = [SETS_THREE, PROB_TASK_1];
