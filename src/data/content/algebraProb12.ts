import type { Lesson } from '../../lib/types';
import { r, h2, p, solution, lesson as make } from './algKit';

/**
 * Unit 8 Probability: F. Mutually exclusive: worked Questions 1 and 2. Book pp. 206-207 (photos 83-84).
 * Questions 3 and 4 are on p. 207 (photo 84, right page).
 */

const prob = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-probability', id, title, minutes, blocks);

export const PROB_ME_EXAMPLES = prob('alg-u8-f-examples', 'F. Mutually Exclusive: Worked Questions', 25, [
  h2('Question 1'),
  p(r`$P(A)=0{,}5$, $P(B)=0{,}3$ and $P(A\text{ or }B)=0{,}65$ are given. 1.1 Are the events $A$ and $B$ mutually exclusive? Justify. 1.2 Calculate $P(A\text{ and }B)$. 1.3 Are the events $A$ and $B$ independent? Justify.`),
  solution([
    ['1.1 If two events are mutually exclusive then $P(A\text{ or }B)=P(A)+P(B)$. Substitute:', r`0{,}65\overset?=0{,}5+0{,}3=0{,}8`],
    ['This is wrong, therefore **no**, they are not mutually exclusive.', ''],
    ['1.2 Use $P(A\text{ or }B)=P(A)+P(B)-P(A\text{ and }B)$:', r`0{,}65=0{,}5+0{,}3-P(A\text{ and }B)\;\Rightarrow\;-0{,}15=-P(A\text{ and }B)`],
    r`P(A\text{ and }B)=0{,}15`,
    ['1.3 If two events are independent then $P(A\text{ and }B)=P(A)\times P(B)$. Substitute:', r`0{,}15=0{,}5\times0{,}3=0{,}15`],
    ['This is right, therefore **yes**, they are independent.', ''],
  ]),
  h2('Question 2'),
  p(r`What is the probability of throwing at least one six in four rolls of a regular six-sided die?`),
  solution([
    ['This is difficult straight on, but easy if you think of the opposite. The probability of no six in four rolls:', r`\dfrac56\cdot\dfrac56\cdot\dfrac56\cdot\dfrac56=\dfrac{625}{1\,296}`],
    r`P(\text{at least one six})=1-\dfrac{625}{1\,296}=\dfrac{671}{1\,296}\approx0{,}518`,
  ]),
]);

export const PROB_ME_EXAMPLES_2 = prob('alg-u8-f-examples-2', 'F. Mutually Exclusive: Worked Questions 3 and 4', 25, [
  h2('Question 3'),
  p(r`Three machines $A$, $B$ and $C$ make plastic bottles: they produce 20%, 30% and 50% of the total. 1%, 2% and 6% respectively of the bottles are defective. 3.1 Represent the information by a tree diagram. 3.2 Probability it was produced by machine $B$ and is not defective. 3.3 Probability the bottle is defective.`),
  solution([
    ['3.1 First branches: machine $A$ $0{,}2$, $B$ $0{,}3$, $C$ $0{,}5$. Second branches: defective / not defective with $0{,}01/0{,}99$ for $A$, $0{,}02/0{,}98$ for $B$, $0{,}06/0{,}94$ for $C$. Outcomes: $A$ def $0{,}001$; $A$ Nd $0{,}198$; $B$ def $0{,}006$; $B$ Nd $0{,}294$; $C$ def $0{,}03$; $C$ Nd $0{,}47$.', ''],
    ['3.2', r`P(	ext{not defective and from }B)=0{,}3	imes0{,}98=0{,}294`],
    ['3.3', r`P(	ext{defective})=0{,}001+0{,}006+0{,}030=0{,}037`],
  ]),
  h2('Question 4'),
  p(r`Research results: Male: don’t play sport $51$, play sport $69$, total $120$. Female: $49$, $67$, total $116$. Totals: $100$, $136$, $236$. 4.1 Probabilities that (i) a person is male, (ii) a person is a female who plays sport. 4.2 Are ‘male’ and ‘do not play sport’ independent?`),
  solution([
    ['4.1', r`P(	ext{Male})=\dfrac{120}{236},\qquad P(	ext{Female and plays sport})=\dfrac{67}{236}`],
    ['4.2 Check whether P(Male and not play) = P(Male) x P(not play):', r`\dfrac{51}{236}\overset?=\dfrac{120}{236}\times\dfrac{100}{236}`],
    ['51/236 = 0,2161 but (120/236)(100/236) = 0,2155, so **no**, not independent (rounded to 2 decimals both look like 0,22).', ''],
  ]),
]);

export const ALG_PROB_12_LESSONS: Lesson[] = [PROB_ME_EXAMPLES, PROB_ME_EXAMPLES_2];
