import type { Lesson } from '../../lib/types';
import { r, h2, p, ul, venn, lesson as make } from './algKit';

/**
 * Unit 8 Probability: F. Mutually exclusive events. Book pp. 204-205; photo 82.
 */

const prob = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-probability', id, title, minutes, blocks);

export const PROB_MUTUALLY_EXCLUSIVE = prob('alg-u8-f-mutually-exclusive', 'F. Mutually Exclusive Events', 35, [
  p(r`**Mutually exclusive events** cannot happen at the same time: they have no intersection.`),
  h2('Examples'),
  ul([
    r`Turning left and turning right are mutually exclusive (they cannot be done at the same time).`,
    r`Tossing a coin: heads and tails are mutually exclusive.`,
    r`Cards: kings and aces are mutually exclusive.`,
    r`Subjects: Mathematical Literacy and Physical Sciences are mutually exclusive.`,
  ]),
  h2('What is not mutually exclusive'),
  ul([
    r`Turning left and scratching your head can happen at the same time.`,
    r`Kings and hearts, because you can have the king of hearts.`,
    r`A learner can take both Mathematics and Accounting together, or both CAT and Religious Studies.`,
  ]),
  p(r`Aces and kings are mutually exclusive (cannot be both); hearts and kings are not (the king of hearts is in both circles).`),
  venn(
    { sets: ['Aces', 'Kings'], regions: { A: 'A♠ A♥ A♦ A♣', AB: '', B: 'K♠ K♥ K♦ K♣', outside: '' } },
    'Aces and Kings — mutually exclusive, so the circles have nothing in common (no card is both an ace and a king).',
  ),
  venn(
    { sets: ['Hearts', 'Kings'], regions: { A: 'A♥ 2♥ … Q♥ (12 cards)', AB: 'K♥', B: 'K♠ K♦ K♣', outside: '' } },
    'Hearts and Kings — NOT mutually exclusive: the king of hearts (K♥) belongs to both sets, so it sits in the overlap.',
  ),
  h2('1. Mutually exclusive'),
  p(r`For mutually exclusive events it is impossible for them to happen together:`),
  { type: 'math', label: 'Mutually exclusive', text: r`P(A\text{ and }B)=0\quad\Rightarrow\quad P(A\text{ or }B)=P(A)+P(B)` },
  p(r`Example, a deck of 52 cards: $P(\text{King})=\dfrac4{52}=\dfrac1{13}$ and $P(\text{Ace})=\dfrac1{13}$. $P(\text{King and Ace})=0$ (impossible) and $P(\text{King or Ace})=\dfrac1{13}+\dfrac1{13}=\dfrac2{13}$.`),
  venn(
    { sets: ['King', 'Ace'], regions: { A: '4', AB: '0', B: '4', outside: '44' }, outsideLabel: 'neither', universe: 'S = 52 cards' },
  ),
  h2('2. Not mutually exclusive'),
  p(r`When events are not mutually exclusive we use the general formula, which can always be used:`),
  { type: 'math', label: 'The general formula', text: r`P(A\text{ or }B)=P(A)+P(B)-P(A\text{ and }B)` },
  p(r`The formula may be used for mutually exclusive events as well: then $P(A\text{ and }B)=0$, so nothing is subtracted. When the events are not mutually exclusive, $P(A\text{ and }B)\ne0$, so there is something to subtract from $P(A)+P(B)$.`),
  p(r`Example: cards that are hearts or kings. There are 13 hearts and 4 kings, but that counts the king of hearts twice, so $16$ cards $=13+4-1$.`),
  { type: 'math', label: 'Hearts or kings', text: r`P(H\text{ or }K)=\dfrac{13}{52}+\dfrac4{52}-\dfrac1{52}=\dfrac{16}{52}=\dfrac4{13}` },
  venn(
    { sets: ['Hearts', 'Kings'], regions: { A: '12', AB: '1', B: '3', outside: '36' }, outsideLabel: 'neither hearts nor kings', universe: 'S = 52 cards' },
    'Hearts only = 13 − 1 = 12 (the king of hearts is counted in the overlap, not here); Kings only = 4 − 1 = 3. Check: 12+1+3+36 = 52.',
  ),
]);

export const ALG_PROB_11_LESSONS: Lesson[] = [PROB_MUTUALLY_EXCLUSIVE];
