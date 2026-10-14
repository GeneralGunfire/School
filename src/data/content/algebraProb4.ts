import type { Lesson } from '../../lib/types';
import { r, h2, p, ul, note, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 8 Probability: Task 2 (three-set problems) and B. Probability (start). Book pp. 190-191; photo 75.
 */

const prob = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-probability', id, title, minutes, blocks);

export const PROB_TASK_2 = prob('alg-u8-task-2', 'A. Sets: Task 2', 30, [
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1', context: r`A survey of 80 students: 44 read National Geographic ($N$), 33 read Getaway ($G$), 39 read Leadership ($L$); 23 read $N$ and $L$; 19 read $G$ and $L$; 9 read all three; 69 read at least one magazine.`, q: r`1.1 How many did not read any magazine? (1)`, a: r`$80-69=11$.` },
    { n: '1.2', marks: 5, q: r`Let $x$ be the number who read $N$ and $G$ but not $L$. Draw a Venn diagram. (5)`, a: r`Regions: all three $9$; $N\cap L$ only $23-9=14$; $G\cap L$ only $19-9=10$; $N\cap G$ only $x$; $N$ only $44-x-14-9=21-x$; $G$ only $33-x-10-9=14-x$; $L$ only $39-14-10-9=6$; outside $11$.` },
    { n: '1.3', marks: 3, q: r`Hence show that $x=5$. (3)`, a: r`Total: $(21-x)+(14-x)+6+x+14+10+9+11=85-x=80\Rightarrow x=5$ ✔. (Then $N$ only $16$, $G$ only $9$.)` },
    { n: '1.4', marks: 3, q: r`How many read at least two of the three magazines? (3)`, a: r`$x+14+10+9=5+14+10+9=38$.` },
    { n: '2', context: r`A school camp for Grade 12 learners: each chose from chicken ($C$), vegetables ($V$) and fish ($F$). 2 eat none of them; 5 eat only vegetables; 2 only chicken; 3 only fish; 21 do not eat fish; 66 eat chicken and fish; 75 eat vegetables and fish. Let $x$ be the number who eat all three.`, q: r`2.1 Draw an appropriate Venn diagram. (7) 2.2 Calculate $x$. (2)`, a: r`“21 do not eat fish” $=2+5+2+(C\cap V\text{ only})\Rightarrow C\cap V$ only $=12$. $C\cap F$ only $=66-x$; $V\cap F$ only $=75-x$. The total number of learners (needed to solve for $x$) is cut off in the photo. With total $T$: $2+5+2+3+12+(66-x)+(75-x)+x=165-x=T$, so $x=165-T$.` },
    { n: '2.3.1', q: r`Calculate the number who eat only chicken and fish, and no vegetables. (2)`, a: r`$66-x$.` },
    { n: '2.3.2', q: r`Calculate the number who eat any TWO of the given food choices. (2)`, a: r`$12+(66-x)+(75-x)=153-2x$.` },
  ]),
  note(r`The total number of learners in Question 2 is cut off, so $x$ is given in terms of the total.`),
]);

export const PROB_INTRO = prob('alg-u8-b-probability', 'B. Probability: Basics', 30, [
  h2('What is probability?'),
  p(r`Many events cannot be predicted with total certainty. The best we can say is how likely they are to happen, using the idea of **probability**.`),
  ul([
    r`**Probability** is a value between 0 and 1 which shows how likely something is to happen. It can be a fraction ($0{,}75=\tfrac34$) or a decimal or a percentage.`,
    r`An **experiment** is an action where the result is uncertain: tossing a coin, throwing dice, seeing what pizza people choose.`,
  ]),
  p(r`A fair coin has two outcomes, heads or tails: $P(H)=P(T)=\tfrac12=0{,}5$. In an unfair coin $P(H)$ and $P(T)$ are NOT equal. If a coin has tails on both sides: $P(H)=0$ (impossible) and $P(T)=1=100\%$ (certain).`),
  p(r`A fair die has six outcomes $1,2,3,4,5,6$, each with probability $\tfrac16$. We use $P$ to mean “probability of”.`),
  { type: 'math', label: 'Probability line', text: r`0\;(\text{impossible})\;\;\cdots\;\;\tfrac16\;(\text{unlikely})\;\;\cdots\;\;0{,}5\;(\text{even chance})\;\;\cdots\;\;\tfrac45\;(\text{likely})\;\;\cdots\;\;1\;(\text{certain})` },
  ul([
    r`**Sample space** is all possible outcomes of an experiment; the number of elements is written $n(S)$. Example: choosing a card from a deck has $n(S)=52$ (no jokers).`,
    r`An **event** is a single result of an experiment, e.g. getting a tail, rolling a “5”. An event can include one or more outcomes: choosing a “King” (any of the 4 kings), or rolling an even number $\{2,4,6\}$.`,
  ]),
]);

export const ALG_PROB_4_LESSONS: Lesson[] = [PROB_TASK_2, PROB_INTRO];
