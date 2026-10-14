import type { Lesson } from '../../lib/types';
import { r, h2, h3, p, ul, note, solution, lesson as make } from './algKit';

/**
 * Unit 7 Finance: A. Simple interest Questions 2-3 and B. Compound interest (intro). Book pp. 170-171; photo 65.
 */

const fin = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-finance', id, title, minutes, blocks);

export const SIMPLE_INTEREST_2 = fin('alg-u7-a-simple-interest-2', 'A. Simple Interest: Questions 2 and 3', 25, [
  h2('Question 2'),
  p(r`If I deposit R30 000 into a special bank account which pays simple interest of 7,5%, for how many years must I invest this amount to generate R45 000?`),
  solution([
    ['Given', r`P=R30\,000,\quad i=7{,}5\%=0{,}075,\quad A=R45\,000;\;\text{find }n`],
    ['Use $A=P(1+in)$', r`45\,000=30\,000(1+0{,}075n)`],
    r`\dfrac{45\,000}{30\,000}=1+0{,}075n\;\Rightarrow\;0{,}075n=1{,}5-1`,
    r`n=6{,}6666667`,
    ['$n$ has to be a whole number of years to reach R45 000, so', r`n=7`],
  ]),
  note(r`The book writes “$0{,}75n$” on one line; the correct term is $0{,}075n$, and the result $n=6{,}67$ is right.`),
  h2('Question 3 (hire purchase)'),
  p(r`Troy is keen to buy an additional hard drive for his laptop advertised for R2 500 on the internet. There is an option of paying a 10% deposit then making 24 monthly payments using a hire purchase agreement where interest is calculated at 7,5% p.a. simple interest. Calculate the amount of Troy’s monthly payments.`),
  solution([
    ['A new opening balance is required, as the 10% deposit is paid in cash. 10% of R2 500', r`=R250`],
    r`P=R2\,500-R250=R2\,250,\quad i=0{,}075,\quad n=2\text{ years (24 months)}`,
    ['Use $A=P(1+in)$', r`A=2\,250(1+2\times0{,}075)=R2\,587{,}50`],
    ['Monthly payment', r`\dfrac{2\,587{,}5}{24}=R107{,}81`],
  ]),
]);

export const COMPOUND_INTRO = fin('alg-u7-b-compound', 'B. Compound Interest', 25, [
  h2('Compound interest'),
  p(r`With compound interest, you work out the interest for the first period, add it to the total, and then calculate the interest for the next period, and so on.`),
  h3('Example'),
  p(r`Deposit R1 000 at 7%. Take everything out after a year and invest it again, and so on for 3 years.`),
  solution([
    ['Year 1', r`A=P(1+i)=1\,000(1+0{,}07)=R1\,070`],
    ['Year 2 with $P=1\,070$', r`A=1\,070(1+0{,}07)=R1\,144{,}90`],
    ['Year 3', r`1\,144{,}90\times1{,}07=R1\,225{,}04`],
  ]),
  p(r`$\begin{array}{c|cccc}\text{Year}&0&1&2&3\\hline\text{Amount (R)}&1\,000&1\,070&1\,144{,}90&1\,225{,}04\end{array}$`),
  p(r`When the money was re-invested, interest was earned in the second year on the interest (R70) from the first year, and interest on the interest on the interest in the third year.`),
  p(r`**Compound interest** is the interest payable on the principal and any previous interest.`),
  { type: 'math', label: 'Compound interest formula', text: r`A=P(1+i)^n` },
  ul([r`$A$ is “After”, the final amount; $P$ is “Previous”, the starting amount.`, r`$i$ is the interest rate; $n$ is the number of years.`]),
  h3('Keywords'),
  ul([r`Compound interest, interest of previous value or year, inflation, population.`, r`Reducing balance ($-i$); depreciation means $-i$.`]),
  note(r`Check: $1\,000(1{,}07)^3=R1\,225{,}04$, the same as the year-by-year table.`),
]);

export const ALG_FINANCE_2_LESSONS: Lesson[] = [SIMPLE_INTEREST_2, COMPOUND_INTRO];
