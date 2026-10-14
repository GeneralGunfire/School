import type { Lesson } from '../../lib/types';
import { r, h2, p, ul, note, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 8 Probability: E. Tree diagrams, goalkeeper example and Task 6. Book pp. 200-201; photo 80.
 */

const prob = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-probability', id, title, minutes, blocks);

export const TREE_EXAMPLE = prob('alg-u8-e-tree-example', 'E. Tree Diagrams: Goalkeeper Example', 25, [
  p(r`Two tosses: the probability of “Head, Head” is $0{,}5\times0{,}5=0{,}25$. All probabilities add to 1, which is always a good check. The probability of at least one head from two tosses is $0{,}25+0{,}25+0{,}25=0{,}75$.`),
  h2('Example'),
  p(r`You love being the goalkeeper, but that depends on the coach: with Coach Sam the probability of being goalkeeper is $0{,}5$; with Coach Alex it is $0{,}3$. Sam is coach about 6 out of every 10 games ($0{,}6$). What is the probability you will be goalkeeper in the next match?`),
  ul([
    r`Sam $(0{,}6)$ then goalkeeper yes $(0{,}5)$: $0{,}6\times0{,}5=0{,}30$; no: $0{,}6\times0{,}5=0{,}30$.`,
    r`Alex $(0{,}4)$ then yes $(0{,}3)$: $0{,}4\times0{,}3=0{,}12$; no $(0{,}7)$: $0{,}4\times0{,}7=0{,}28$.`,
  ]),
  { type: 'math', label: 'Add the “yes” outcomes', text: r`0{,}30+0{,}12=0{,}42` },
  p(r`Check: $0{,}30+0{,}30+0{,}12+0{,}28=1$.`),
  note(r`Conclusion: when in doubt, draw a tree diagram, **multiply along the branches** and **add the columns**. Make sure all probabilities add to 1: one of these outcomes will definitely happen.`),
]);

export const PROB_TASK_6 = prob('alg-u8-task-6', 'E. Tree Diagrams: Task 6', 30, [
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1.1', context: r`One die and a coin are thrown together. Use a tree diagram to find:`, q: r`the probability that the number is even and heads.`, a: r`$P(\text{even})=\dfrac36=\dfrac12$, $P(H)=\dfrac12$: $\dfrac12\times\dfrac12=\dfrac14$.` },
    { n: '1.2', q: r`the probability that the number is less than five and tails.`, a: r`$P(<5)=\dfrac46=\dfrac23$: $\dfrac23\times\dfrac12=\dfrac13$.` },
    { n: '2', q: r`Jack wakes up late on 3 days in every 5. If he wakes up late, the probability he is late for school is $\dfrac9{10}$; if not, $\dfrac3{10}$. On what percent of days does Jack get to school on time?`, a: r`Late for school: $\dfrac35\times\dfrac9{10}+\dfrac25\times\dfrac3{10}=\dfrac{27}{50}+\dfrac6{50}=\dfrac{33}{50}=66\%$. On time: $1-0{,}66=34\%$.` },
    { n: '3', q: r`Tina’s mom cooks pasta once a week. If she cooks pasta, the probability Tina gets ice cream is $\dfrac23$; if not, $\dfrac14$. What is the probability Tina gets ice cream?`, a: r`$\dfrac17\times\dfrac23+\dfrac67\times\dfrac14=\dfrac2{21}+\dfrac3{14}=\dfrac4{42}+\dfrac9{42}=\dfrac{13}{42}$.` },
    { n: '4.1', context: r`Teddy has 2 pairs of black shoes and 3 pairs of brown shoes, and 3 pairs of red socks, 4 of brown socks and 6 of black socks. He chooses a pair of shoes and a pair of socks at random.`, q: r`Probability that he chooses shoes and socks of the same colour?`, a: r`Black: $\dfrac25\times\dfrac6{13}=\dfrac{12}{65}$. Brown: $\dfrac35\times\dfrac4{13}=\dfrac{12}{65}$. Total $=\dfrac{24}{65}$.` },
    { n: '4.2', q: r`Probability that the colours he chooses are black and brown?`, a: r`Black shoes and brown socks: $\dfrac25\times\dfrac4{13}=\dfrac8{65}$. Brown shoes and black socks: $\dfrac35\times\dfrac6{13}=\dfrac{18}{65}$. In either order: $\dfrac{26}{65}=\dfrac25$.` },
  ]),
  note(r`In 4.2 “black and brown” is read as one of each in either order. Answers are my own worked solutions.`),
]);

export const ALG_PROB_9_LESSONS: Lesson[] = [TREE_EXAMPLE, PROB_TASK_6];
