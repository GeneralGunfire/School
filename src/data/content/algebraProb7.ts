import type { Lesson } from '../../lib/types';
import { r, p, note, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 8 Probability: D. Independent events final example and Task 4. Book pp. 196-197; photo 78.
 */

const prob = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-probability', id, title, minutes, blocks);

export const PROB_TASK_4 = prob('alg-u8-task-4', 'D. Independent Events: Task 4', 35, [
  p(r`Final example from the book: two groups with 5 and 7 members; one member of each group is chosen for the winners’ circle, then one of those two wins the prize. Your chance of reaching the winners’ circle is $\tfrac15$, then $\tfrac12$ of winning: $\tfrac15\cdot\tfrac12=\tfrac1{10}$.`),
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1', q: r`If $P(A)=\dfrac34$, what is $P(A')$?`, a: r`$P(A')=1-\dfrac34=\dfrac14$.` },
    { n: '2', q: r`Two fair coins are tossed. What is the probability at least one lands heads up?`, a: r`Complement: both tails, $\dfrac14$. So $1-\dfrac14=\dfrac34$.` },
    { n: '3', q: r`A spinner is a regular pentagon with numbers 1 to 5, each equally likely. If it is spun twice, what is the probability that the two scores are different?`, a: r`Same: $\dfrac15$ (5 of 25 pairs). Different: $1-\dfrac15=\dfrac45$.` },
    { n: '4', q: r`Two fair dice are thrown. What is the probability that the two scores do not add to 7?`, a: r`Sum 7 has 6 outcomes out of 36: $\dfrac16$. So $1-\dfrac16=\dfrac56$.` },
    { n: '5', q: r`A code consists of a digit from 0 to 9 followed by a letter of the alphabet. What is the probability the code is 9Z?`, a: r`Independent: $\dfrac1{10}\times\dfrac1{26}=\dfrac1{260}$.` },
    { n: '6', q: r`Two cards are drawn from the top of a well-shuffled deck. What is the probability they are both black aces?`, a: r`There are 2 black aces: $\dfrac2{52}\times\dfrac1{51}=\dfrac1{1\,326}$ (drawn without replacement, so dependent).` },
    { n: '7.1', context: r`Survey of 150 males and 100 females. Liked it: male 60, female $a$, total 130. Did not like it: male $b$, female 30, total $c$. Totals: male 150, female 100, all $d$.`, q: r`Calculate $a$, $b$, $c$ and $d$.`, a: r`$a=130-60=70$; $b=150-60=90$; $c=90+30=120$; $d=150+100=250$.` },
    { n: '7.2', q: r`Probability of choosing at random a female who did not like the programme.`, a: r`$\dfrac{30}{250}=\dfrac3{25}=0{,}12$.` },
    { n: '7.3', q: r`Is a person’s preference independent of gender? Support your answer.`, a: r`If independent, $P(\text{male and liked})=P(\text{male})\times P(\text{liked})=\dfrac{150}{250}\times\dfrac{130}{250}=0{,}312$. But $P(\text{male and liked})=\dfrac{60}{250}=0{,}24$. These differ, so preference is **not independent** of gender.` },
    { n: '8', q: r`$A$ and $B$ are independent events with $P(A)=\dfrac13$ and $P(A\text{ and }B)=\dfrac1{12}$. Determine $P(B)$.`, a: r`$P(A\text{ and }B)=P(A)\times P(B)\Rightarrow P(B)=\dfrac{1/12}{1/3}=\dfrac14$.` },
    { n: '9', q: r`A bag has 5 red, 4 green and 1 blue marble. A marble is chosen and not replaced; then a second is chosen. Probability both are green?`, a: r`$\dfrac4{10}\times\dfrac39=\dfrac{12}{90}=\dfrac2{15}$.` },
  ]),
  note(r`Answers are my own worked solutions; the book’s answer key was not photographed.`),
]);

export const ALG_PROB_7_LESSONS: Lesson[] = [PROB_TASK_4];
