import type { Lesson } from '../../lib/types';
import { r, h2, p, ul, note, lesson as make } from './algKit';

/**
 * Unit 8 Probability: C. Complement of an event and D. Independent events. Book pp. 194-195; photo 77.
 */

const prob = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-probability', id, title, minutes, blocks);

export const PROB_COMPLEMENT = prob('alg-u8-c-complement', 'C. Complement of an Event', 25, [
  p(r`The **complement** of an event $A$ is the set of all outcomes of the sample space that lie outside event $A$, denoted $A'$ (not $A$, or $A^C$). The complement is all the other outcomes (not the ones you want).`),
  ul([
    r`Event heads: complement is tails.`,
    r`Event $\{\text{Monday, Wednesday}\}$: complement is $\{\text{Tuesday, Thursday, Friday, Saturday, Sunday}\}$.`,
    r`Event $\{\text{Hearts}\}$: complement is the other suits ($\{\text{Spades, Clubs, Diamonds}\}$; the book also lists Jokers, which are not in a standard 52-card deck).`,
  ]),
  { type: 'math', label: 'Event plus complement', text: r`P(A)+P(A')=1` },
  h2('Example: rolling a 5 or 6'),
  p(r`$A=\{5,6\}$: $P(A)=\dfrac26=\dfrac13$. The complement $A'=\{1,2,3,4\}$: $P(A')=\dfrac46=\dfrac23$. Check: $\dfrac13+\dfrac23=1$.`),
  h2('Why is the complement useful?'),
  p(r`It is sometimes easier to work out the complement first. Throw two dice: what is the probability that the two scores are different? Listing the different pairs $(1,2),(1,3),(1,4),\ldots$ is a long list. The complement (the two scores are the same) has only 6 outcomes: $(1,1),(2,2),(3,3),(4,4),(5,5),(6,6)$.`),
  { type: 'math', label: 'Answer', text: r`P(A')=\dfrac6{36}=\dfrac16\;\Rightarrow\;P(A)=1-\dfrac16=\dfrac56` },
]);

export const PROB_INDEPENDENT = prob('alg-u8-d-independent', 'D. Independent and Dependent Events', 25, [
  p(r`**Independent events** are not affected by the previous event(s). Each event is separate. Example: you toss a coin and it comes up heads three times. The chance that the next toss is also heads is still $\tfrac12$: whatever has happened in the past does not affect the following toss.`),
  { type: 'math', label: 'Independent events', text: r`P(A\text{ and }B)=P(A)\times P(B)` },
  h2('Dependent events'),
  p(r`Sometimes an event can affect the next one. 2 blue and 3 red marbles are in a bag. The chance of a blue marble is 2 in 5. But after taking one out the chances change:`),
  ul([
    r`If you got a red marble first, the chance of a blue one next is $2$ in $4$.`,
    r`If you got a blue marble first, the chance of a blue one next is $1$ in $4$ (the book’s second bullet says “red” by mistake).`,
  ]),
  p(r`We call such events **dependent events**: what happens next depends on what has happened before.`),
  note(r`If you had replaced the marbles in the bag each time, the chances would not have changed and the events would be independent.`),
  h2('Example: three heads in a row'),
  { type: 'math', label: 'Three heads', text: r`\tfrac12\;\to\;\tfrac12\cdot\tfrac12=\tfrac14\;\to\;\tfrac12\cdot\tfrac12\cdot\tfrac12=\tfrac18=0{,}125` },
]);

export const ALG_PROB_6_LESSONS: Lesson[] = [PROB_COMPLEMENT, PROB_INDEPENDENT];
