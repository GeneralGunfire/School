import type { Lesson } from '../../lib/types';
import { r, h2, p, ul, note, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 8 Probability: Task 5 and E. Tree diagrams (start). Book pp. 198-199; photo 79.
 */

const prob = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-probability', id, title, minutes, blocks);

export const PROB_TASK_5 = prob('alg-u8-task-5', 'D. Probability: Task 5', 35, [
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1', context: r`A box contains 24 purple, 32 orange and 41 white blocks ($n(S)=97$).`, q: r`1.1 purple? 1.2 purple or white? 1.3 purple and orange? 1.4 not orange?`, a: r`1.1 $\dfrac{24}{97}$. 1.2 $\dfrac{24+41}{97}=\dfrac{65}{97}$. 1.3 $0$ (a block has one colour). 1.4 $\dfrac{24+41}{97}=\dfrac{65}{97}$.` },
    { n: '2', context: r`Class of 30. Male: 3 years 2, 4 years 7, 5 years 6. Female: 3 years 6, 4 years 5, 5 years 4.`, q: r`2.1 a female? 2.2 a 4-year-old male? 2.3 aged 3 or 4? 2.4 aged 3 and 4? 2.5 not 5? 2.6 either 3 or female?`, a: r`2.1 $\dfrac{15}{30}=\dfrac12$. 2.2 $\dfrac7{30}$. 2.3 $\dfrac{8+12}{30}=\dfrac23$. 2.4 $0$. 2.5 $\dfrac{20}{30}=\dfrac23$. 2.6 $3$-year-olds $8$ + females $15$ − 3-year-old females $6$ $=17$: $\dfrac{17}{30}$.` },
    { n: '3', q: r`A bag has 5 red, 4 green and 1 blue marble. A marble is chosen and not replaced; then a second is chosen. Probability that neither is blue?`, a: r`$\dfrac9{10}\times\dfrac89=\dfrac45$.` },
    { n: '4', context: r`Fiona has 85 discs numbered 1 to 85, one chosen at random. Probability the number:`, q: r`4.1 ends with 5? 4.2 is a multiple of 3? 4.3 multiple of 6? 4.4 is 65? 4.5 not a multiple of 5? 4.6 multiple of 4 or 3? 4.7 multiple of 2 and 6? 4.8 is 1?`, a: r`4.1 $5,15,\ldots,85$: $\dfrac9{85}$. 4.2 $28$ multiples: $\dfrac{28}{85}$. 4.3 $14$: $\dfrac{14}{85}$. 4.4 $\dfrac1{85}$. 4.5 17 multiples of 5, so $\dfrac{68}{85}=\dfrac45$. 4.6 multiples of 4: 21, of 3: 28, of 12: 7: $\dfrac{21+28-7}{85}=\dfrac{42}{85}$. 4.7 multiples of 6: $\dfrac{14}{85}$. 4.8 $\dfrac1{85}$.` },
    { n: '5', q: r`Two cards are drawn from the top of a well shuffled deck. Probability both are Diamonds?`, a: r`$\dfrac{13}{52}\times\dfrac{12}{51}=\dfrac1{17}$.` },
    { n: '6', context: r`Four groups with 5 members each: a member of each group is chosen for the winners’ circle, then one of those four gets the big prize.`, q: r`6.1 Probability of someone going to the winners’ circle? 6.2 Of someone from the 1st group winning? 6.3 Of a random person winning?`, a: r`6.1 Each group sends someone: $1$ (certain); for one particular person it is $\dfrac15$. 6.2 One of four finalists: $\dfrac14$. 6.3 A particular person: $\dfrac15\times\dfrac14=\dfrac1{20}$.` },
  ]),
  note(r`In Question 6 the wording is a little vague (“someone”); the readings used are shown. Answers are my own worked solutions.`),
]);

export const TREE_INTRO = prob('alg-u8-e-tree', 'E. Tree Diagrams', 30, [
  p(r`Calculating probabilities can be hard: sometimes you add them and sometimes you multiply them. Tree diagrams help.`),
  ul([
    r`There are two “branches” (heads and tails).`,
    r`The probability of each branch is written on the branch.`,
    r`The outcome is written at the end of the branch; the final outcomes are written at the end.`,
  ]),
  h2('Two tosses of a coin'),
  p(r`Each branch is $0{,}5$. The four final outcomes are $HH$, $HT$, $TH$, $TT$.`),
  ul([
    r`**Multiply** probabilities along the branches to get the probability of that specific final outcome: $0{,}5\times0{,}5=0{,}25$ for each.`,
    r`If there are a few possible outcomes, **add** their probabilities downwards. All final probabilities add up to 1: $0{,}25\times4=1{,}00$.`,
  ]),
]);

export const ALG_PROB_8_LESSONS: Lesson[] = [PROB_TASK_5, TREE_INTRO];
