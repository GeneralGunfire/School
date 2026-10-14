import type { Lesson } from '../../lib/types';
import { r, h2, p, note, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 8 Probability: B. P(E) = n(E)/n(S), examples and Task 3. Book pp. 192-193; photo 76.
 */

const prob = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-probability', id, title, minutes, blocks);

export const PROB_FORMULA = prob('alg-u8-b-formula', 'B. Probability of an Event', 25, [
  h2('In general'),
  { type: 'math', label: 'Probability of an event', text: r`P(E)=\dfrac{\text{number of ways the event can happen}}{\text{total number of all possible outcomes}}=\dfrac{n(E)}{n(S)}` },
  h2('Example 1'),
  p(r`A die is thrown once. What is the probability that the score is a factor of 6? The factors of six are $1,2,3,6$, so the number of ways it can happen is $4$. There are six possible scores, so $n(S)=6$.`),
  { type: 'math', label: 'Answer', text: r`P(\text{factor of }6)=\dfrac46=\dfrac23` },
  h2('Example 2'),
  p(r`A fair coin is tossed three times. What is the probability of obtaining one head and two tails? There are 8 possible ways the coins can land:`),
  p(r`$(H,H,H),\,(H,H,T),\,(H,T,H),\,(H,T,T),\,(T,H,H),\,(T,H,T),\,(T,T,H),\,(T,T,T)$`),
  p(r`Of these, 3 have one head and two tails: $(H,T,T)$, $(T,H,T)$ and $(T,T,H)$.`),
  { type: 'math', label: 'Answer', text: r`P(\text{one head and two tails})=\dfrac38` },
]);

export const PROB_TASK_3 = prob('alg-u8-task-3', 'B. Probability: Task 3', 30, [
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1', context: r`A bag contains 6 red, 3 blue, 2 green and 1 white ball ($n(S)=12$). A ball is picked at random. Probability that it is:`, q: r`1.1 red`, a: r`$\dfrac6{12}=\dfrac12$.` },
    { n: '1.2', q: r`blue or white`, a: r`$\dfrac{3+1}{12}=\dfrac13$.` },
    { n: '1.3', q: r`not green`, a: r`$\dfrac{12-2}{12}=\dfrac56$.` },
    { n: '1.4', q: r`not green or red`, a: r`Blue or white: $\dfrac4{12}=\dfrac13$.` },
    { n: '2', context: r`A playing card is selected at random from 52 cards. Probability that it is:`, q: r`2.1 the 2 of hearts`, a: r`$\dfrac1{52}$.` },
    { n: '2.2', q: r`a red card`, a: r`$\dfrac{26}{52}=\dfrac12$.` },
    { n: '2.3', q: r`an ace`, a: r`$\dfrac4{52}=\dfrac1{13}$.` },
    { n: '2.4', q: r`a number less than 4`, a: r`Number cards 2 and 3 in four suits: $\dfrac8{52}=\dfrac2{13}$. (If the ace counts as 1: $\dfrac{12}{52}=\dfrac3{13}$.)` },
    { n: '3', q: r`Each letter of MISSISSIPPI is written on a piece of paper, folded and mixed in a hat. One piece is chosen. What is the probability it is an I?`, a: r`11 letters, 4 of them I: $\dfrac4{11}$.` },
    { n: '4', q: r`Even numbers from 2 to 100 are written on cards. What is the probability of selecting a multiple of 5?`, a: r`$n(S)=50$. Even multiples of 5 are the multiples of 10: $10,20,\ldots,100$, which is 10 cards. $P=\dfrac{10}{50}=\dfrac15$.` },
    { n: '5', q: r`A card is chosen from 52. What is the probability it is a Queen or a King?`, a: r`$\dfrac{4+4}{52}=\dfrac8{52}=\dfrac2{13}$.` },
    { n: '6', q: r`A fair coin is tossed three times. What is the probability of at least one head and one tail?`, a: r`All outcomes except $HHH$ and $TTT$: $\dfrac68=\dfrac34$.` },
    { n: '7', q: r`A coin is tossed three times. Find the probability that head and tail show alternately.`, a: r`$HTH$ and $THT$: $\dfrac28=\dfrac14$.` },
    { n: '8', q: r`A committee of four is chosen from five councillors: Adams, Burke, Cobb, Dilby and Evans. What is the probability Burke is not on the committee?`, a: r`There are 5 possible committees (leave one person out). Burke is not on it in exactly 1: $\dfrac15$.` },
  ]),
  note(r`These are my worked answers; the book’s answer key was not photographed.`),
]);

export const ALG_PROB_5_LESSONS: Lesson[] = [PROB_FORMULA, PROB_TASK_3];
