import type { Lesson } from '../../lib/types';
import { r, h2, h3, p, ul, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Finance Task 9 (end) and Unit 8 Probability: A. Sets and Venn diagrams (start). Book pp. 184-185; photo 72.
 */

const fin = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-finance', id, title, minutes, blocks);
const prob = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-probability', id, title, minutes, blocks);

export const FINANCE_TASK_9B = fin('alg-u7-task-9b', 'Finance: Task 9 (continued)', 20, [
  ALG_ANSWERS_NOTE,
  qs([
    { n: '3', context: r`I want to buy an iPod that costs £100, with the exchange rate currently £1 = R14. I believe the rate will reach R12 in a month.`, q: r`3.1 How much will the iPod cost in rand if I buy it now?`, a: r`$100\times14=R1\,400$.` },
    { n: '3.2', q: r`How much will I save if the exchange rate drops to R12?`, a: r`$100\times12=R1\,200$, so I save $1\,400-1\,200=R200$.` },
    { n: '3.3', q: r`How much will I lose if the exchange rate moves to R15?`, a: r`$100\times15=R1\,500$, so I lose $R100$ compared with buying now.` },
    { n: '4', context: r`Exchange rates (rand per unit): UK pound R20,68; US dollar R15,48.`, q: r`4.1 In South Africa a new Honda Civic costs R439 500; in England £20 670; in the USA $22 005. In which country is the car cheapest compared in rand?`, a: r`England: $20\,670\times20{,}68=R427\,455{,}60$. USA: $22\,005\times15{,}48=R340\,637{,}40$. South Africa: R439 500. The **USA** is cheapest.` },
    { n: '4.2', q: r`Sollie gets a £8 tip and Arinda $12. How many rand did each get?`, a: r`Sollie: $8\times20{,}68=R165{,}44$. Arinda: $12\times15{,}48=R185{,}76$.` },
  ]),
]);

export const SETS_INTRO = prob('alg-u8-a-sets', 'A. Sets and Venn Diagrams', 25, [
  h2('Sets'),
  p(r`A **set** is a well-defined collection of distinct elements or members. The elements of a set can be anything. For example, the items you wear form a set: shoes, socks, hat, shirt, pants and so on. You write sets inside curly brackets: $\{\text{socks, shoes, pants, watches, shirts, }\ldots\}$.`),
  p(r`Sets of numbers: whole numbers $\{0,1,2,3,\ldots\}$ and prime numbers $\{2,3,5,7,11,13,17,\ldots\}$.`),
  ul([
    r`The **empty set** has no elements: $\{\;\}$.`,
    r`The **sample space** $S$ or **universal set** is the set that contains everything we are interested in now.`,
  ]),
  h2('1. Venn diagram'),
  p(r`A **Venn diagram** is a graphical way of representing the relationship between sets. A set is represented by a closed curve. The region inside the curve represents the elements that belong to the set, while the region outside represents the elements excluded from the set.`),
  h3('Example'),
  p(r`Ten best friends: $\{\text{Alex, Blair, Casey, Drew, Erin, Francis, Glen, Hunter, Ira, Jade}\}$. Alex, Casey, Drew and Hunter play soccer, and Casey, Drew and Jade play tennis:`),
  { type: 'math', label: 'Two sets', text: r`\text{Soccer}=\{\text{Alex, Casey, Drew, Hunter}\}\qquad\text{Tennis}=\{\text{Casey, Drew, Jade}\}` },
  p(r`You could put each set’s names in its own circle (the book first draws two separate circles). Casey and Drew belong to both sets, so in a proper Venn diagram the circles overlap and Casey and Drew sit in the overlap.`),
]);

export const ALG_PROB_1_LESSONS: Lesson[] = [SETS_INTRO];
export const ALG_FINANCE_9_LESSONS: Lesson[] = [FINANCE_TASK_9B];
