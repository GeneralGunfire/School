import type { Lesson } from '../../lib/types';
import { r, h2, note, solution, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 7 Finance: B. Compound interest worked questions and Task 1. Book pp. 172-173; photo 66.
 */

const fin = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-finance', id, title, minutes, blocks);

export const COMPOUND_EXAMPLES = fin('alg-u7-b-compound-examples', 'B. Compound Interest: Worked Questions', 25, [
  h2('Question 1: population'),
  p0(r`South Africa’s population is increasing by 2,5% per year. If the current population is 43 million, what was the population two years ago?`),
  solution([
    ['Given: $A=43\,000\,000$, $P$ unknown, $n=2$, $i=2{,}5\%$. Use', r`A=P(1+i)^n`],
    r`43\,000\,000=P(1+0{,}025)^2`,
    r`P=\dfrac{43\,000\,000}{(1{,}025)^2}=40\,928\,019`,
  ]),
  note(r`The book prints the formula as $A=P(1+1)^n$; it should be $A=P(1+i)^n$.`),
  h2('Question 2: finding $i$'),
  p0(r`$A=3\,000$, $P=2\,000$, $n=5$. Find $i$ for compound interest.`),
  solution([
    r`3\,000=2\,000(1+i)^5\;\Rightarrow\;\dfrac{3\,000}{2\,000}=(1+i)^5`,
    ['Take the fifth root of both sides:', r`\sqrt[5]{1{,}5}=1+i\;\Rightarrow\;1{,}084472=1+i`],
    r`i=0{,}084472=8{,}45\%`,
  ]),
  h2('Question 3'),
  p0(r`An amount of R3 500 is invested in an account which pays compound interest at 7,5% per annum. Calculate the balance accumulated by the end of 2 years.`),
  solution([
    r`A=P(1+i)^n=3\,500(1+0{,}075)^2`,
    r`A=R4\,044{,}69`,
  ]),
]);

export const FINANCE_TASK_1 = fin('alg-u7-task-1', 'Finance: Task 1', 30, [
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1.1', q: r`Calculate the simple interest: a loan of R300 at a rate of 8% for 1 year.`, a: r`Interest $=300\times0{,}08\times1=R24$ (total owed $R324$).` },
    { n: '1.2', q: r`An investment of R225 at a rate of 12,5% for 6 years.`, a: r`Interest $=225\times0{,}125\times6=R168{,}75$ (accumulated $A=225(1+0{,}125\times6)=R393{,}75$).` },
    { n: '2', q: r`I made a deposit of R5 000 in the bank for my 5-year-old son’s 21st birthday. I have given him R18 000 on his birthday. At what rate was the money invested, if simple interest was calculated?`, a: r`$n=21-5=16$ years. $18\,000=5\,000(1+16i)\Rightarrow3{,}6=1+16i\Rightarrow i=\dfrac{2{,}6}{16}=0{,}1625=16{,}25\%$.` },
    { n: '3', q: r`Bongani buys a dining room table costing R8 500 on hire purchase. He is charged simple interest at 17,5% per annum over 3 years. 3.1 How much will Bongani pay in total? 3.2 How much interest does he pay?`, a: r`3.1 $A=8\,500(1+0{,}175\times3)=8\,500\times1{,}525=R12\,962{,}50$. 3.2 Interest $=12\,962{,}50-8\,500=R4\,462{,}50$.` },
    { n: '4', q: r`If the average rate of inflation for the past few years was 7,3% and your water and electricity account is R1 425 on average, what would you expect to pay in 6 years’ time?`, a: r`Inflation compounds: $A=1\,425(1+0{,}073)^6=1\,425\times1{,}5260\approx R2\,174{,}50$.` },
    { n: '5', q: r`Shaheen wants to invest some money at 11% per annum compound interest. How much money (to the nearest rand) should he invest if he wants to reach R100 000 in five years’ time?`, a: r`$100\,000=P(1{,}11)^5\Rightarrow P=\dfrac{100\,000}{1{,}685058}\approx R59\,345$.` },
    { n: '6', q: r`Chaka has R1 450 to invest for 3 years. Bank A pays simple interest at 11% p.a.; Bank B pays compound interest at 10,5% p.a. Which account leaves the highest balance after 3 years?`, a: r`Bank A: $1\,450(1+0{,}11\times3)=R1\,928{,}50$. Bank B: $1\,450(1{,}105)^3\approx R1\,956{,}40$. **Bank B** is higher.` },
    { n: '7', q: r`A business buys a truck for R560 000. Over 10 years the value depreciates to R0 (straight-line method). What is the value of the truck after 8 years?`, a: r`Depreciation per year $=\dfrac{560\,000}{10}=R56\,000$. Value after 8 years $=560\,000-8\times56\,000=R112\,000$. (Same as $560\,000(1-0{,}1\times8)$ with $i=10\%$ of the original.)` },
  ]),
]);

function p0(t: string) { return { type: 'paragraph' as const, text: t }; }

export const ALG_FINANCE_3_LESSONS: Lesson[] = [COMPOUND_EXAMPLES, FINANCE_TASK_1];
