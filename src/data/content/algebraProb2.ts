import type { Lesson } from '../../lib/types';
import { r, h2, p, ul, solution, lesson as make } from './algKit';

/**
 * Unit 8 Probability: A. Union, intersection, complement, Venn problem, three sets. Book pp. 186-187; photo 73.
 */

const prob = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-probability', id, title, minutes, blocks);

export const SETS_OPERATIONS = prob('alg-u8-a-set-operations', 'A. Union, Intersection, Complement', 35, [
  h2('2. Union'),
  p(r`The **union** of two sets $A$ and $B$ is the set of all elements of $A$ **or** $B$, denoted $A\cup B$.`),
  p(r`Friends who play soccer OR tennis: $S\cup T=\{\text{Alex, Casey, Drew, Hunter, Jade}\}$. Not everyone is in that set, only the friends who play soccer or tennis. In the Venn diagram, Alex and Hunter are only in Soccer, Jade is only in Tennis, **Casey and Drew are in BOTH sets**, and Erin, Glen, Ira, Francis and Blair are outside both circles.`),
  h2('3. Intersection'),
  p(r`The **intersection** of two sets $A$ and $B$ is the set of all elements of $A$ **and** $B$ together, denoted $A\cap B$. “Intersection” is when you are in BOTH sets. In our case that means they play both soccer AND tennis:`),
  { type: 'math', label: 'Intersection', text: r`S\cap T=\{\text{Casey, Drew}\}` },
  h2('4. Complement'),
  p(r`The **complement** of a set $A$ is the set of all the elements of the sample space that lie outside of set $A$, denoted $A'$ (or $A^C$).`),
  p(r`When the event is $\{\text{Monday, Wednesday}\}$ the complement is $\{\text{Tuesday, Thursday, Friday, Saturday, Sunday}\}$.`),
  h2('Example with a die'),
  p(r`Events $A=\{1,2,3,4\}$ and $B=\{4,5,6\}$ in rolling a die. The sample space is $\{1,2,3,4,5,6\}$. Therefore:`),
  ul([
    r`$A\text{ or }B=\{1,2,3,4,5,6\}$ (all outcomes of $A$ or $B$).`,
    r`$A\text{ and }B=\{4\}$ (all common outcomes).`,
    r`$A'=\{5,6\}$ (all outcomes of the sample space that do not lie in $A$).`,
  ]),
]);

export const SETS_VENN_PROBLEM = prob('alg-u8-a-venn-problems', 'A. Venn Diagram Problems and Three Sets', 30, [
  h2('Question 1'),
  p(r`In a group of 40 learners, 25 play chess and 22 play rugby, while 7 play neither. How many students play both chess and rugby?`),
  solution([
    ['Let $x$ be the number who play both. Then', r`\text{chess only}=25-x,\qquad\text{rugby only}=22-x`],
    ['Venn diagram: $C$ only $25-x$, overlap $x$, $R$ only $22-x$, outside both $7$. Total:', r`(25-x)+x+(22-x)+7=40`],
    r`54-x=40\;\Rightarrow\;x=14`,
  ]),
  p(r`So 14 learners play both chess and rugby (11 chess only, 8 rugby only).`),
  h2('5. Three sets'),
  p(r`The following strategies are useful:`),
  ul([
    r`Draw a Venn diagram in a universal set $U$. Label the sets.`,
    r`Write the given information in the regions.`,
    r`Start with the intersection of all sets ($A$ and $B$ and $C$).`,
    r`Then write the sets “only ($A$ and $B$)”, “only ($A$ and $C$)”, “only ($B$ and $C$)”.`,
    r`Then write “only $A$”, “only $B$” and “only $C$”.`,
  ]),
  p(r`The diagram has seven regions: only $A$, only $B$, only $C$, only $A$ and $B$, only $A$ and $C$, only $B$ and $C$, and $A$ and $B$ and $C$ (the middle), plus the outside of all three circles inside $U$.`),
]);

export const ALG_PROB_2_LESSONS: Lesson[] = [SETS_OPERATIONS, SETS_VENN_PROBLEM];
