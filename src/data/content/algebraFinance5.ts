import type { Lesson } from '../../lib/types';
import { r, note, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 7 Finance: Task 4 and Task 5. Book pp. 176-177; photo 68.
 */

const fin = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-finance', id, title, minutes, blocks);

export const FINANCE_TASK_4 = fin('alg-u7-task-4', 'Finance: Task 4 (depreciation graphs)', 30, [
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1', context: r`The diagram shows two depreciation methods for farming equipment: line $A$ (straight, from R80 000 at year 0 down to R0 at year 8) and curve $B$ (passing through $(7;\,10\,000)$).`, q: r`1.1 What is the initial value of the equipment?`, a: r`R80 000.` },
    { n: '1.2', q: r`What type of decrease does Method A illustrate?`, a: r`Straight-line (simple) depreciation: it falls by the same amount each year ($\tfrac{80\,000}8=R10\,000$ per year).` },
    { n: '1.3', q: r`What type of decrease does Method B illustrate?`, a: r`Reducing-balance (compound) depreciation: it falls by a smaller amount each year.` },
    { n: '1.4', q: r`Determine the depreciation rate for method B.`, a: r`$10\,000=80\,000(1-i)^7\Rightarrow1-i=\left(\tfrac18\right)^{1/7}=0{,}7430\Rightarrow i\approx25{,}70\%$.` },
    { n: '2', q: r`After 5 years of reducing-balance depreciation, office equipment has $\tfrac15$ of its original value. The original value was R80 000. Calculate the depreciation rate as a percentage.`, a: r`$\tfrac15P=P(1-i)^5\Rightarrow1-i=0{,}2^{0{,}2}=0{,}7248\Rightarrow i\approx27{,}52\%$.` },
    { n: '3', context: r`Anna bought a car; the graph (value against time in years) shows it falling from R80 000 and passing through $(2;\,72\,000)$.`, q: r`3.1 What is the initial value of the vehicle?`, a: r`R80 000 (where the curve meets the value axis).` },
    { n: '3.3', q: r`What type of depreciation is this?`, a: r`Reducing-balance (curved) depreciation.` },
    { n: '3.4', q: r`Determine the rate of decrease as a percentage.`, a: r`$72\,000=80\,000(1-i)^2\Rightarrow1-i=\sqrt{0{,}9}=0{,}9487\Rightarrow i\approx5{,}13\%$.` },
    { n: '3.5', q: r`Write down a formula for working out the depreciated value after $n$ years.`, a: r`$A=80\,000(1-0{,}0513)^n$, i.e. $A=80\,000(0{,}9487)^n$.` },
    { n: '4', q: r`Office equipment is presently valued at R36 000. Calculate its value at the end of 5 years if depreciation is calculated at a given rate p.a. on a straight-line basis.`, a: r`Use $A=36\,000(1-in)$ with $n=5$ and the rate $i$ given in the question.` },
  ]),
  note(r`In 3.2 and Question 4 part of the wording is cut off by the page edge, so they are given as method only.`),
]);

export const FINANCE_TASK_5 = fin('alg-u7-task-5', 'Finance: Task 5', 35, [
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1', q: r`Tshego wants to buy a video camera for R7 500. He has a deposit of R1 000 and pays the balance by hire purchase over 3,5 years. Interest is 16% p.a. Included is insurance of 2% per annum on the purchase price. Calculate his monthly instalment.`, a: r`Balance $=R6\,500$. $A=6\,500(1+0{,}16\times3{,}5)=R10\,140$. Insurance $=0{,}02\times7\,500\times3{,}5=R525$. Total $=R10\,665$ over 42 months: **R253,93** per month.` },
    { n: '2', q: r`Examination Aid bought furniture valued at R15 000, depreciating at 12% p.a. straight-line. Value after 5 years?`, a: r`$15\,000(1-0{,}12\times5)=15\,000\times0{,}4=R6\,000$.` },
    { n: '3', q: r`Malwande bought a stove for R5 750. After 4 years he paid for it and an extra R956,25 interest. Determine the simple interest rate.`, a: r`$956{,}25=5\,750\times i\times4\Rightarrow i=\dfrac{956{,}25}{23\,000}=0{,}04158\approx4{,}16\%$.` },
    { n: '4', q: r`Angelina invested R13 000 in shares. The value depreciated at 6,5% p.a. straight-line. After how many years will it be less than R10 000?`, a: r`Loss per year $=0{,}065\times13\,000=R845$. Needed loss $>3\,000$: $n>\dfrac{3\,000}{845}=3{,}55$. After **4 years** (during the 4th year) it is below R10 000.` },
    { n: '5', q: r`A car which initially cost R189 000 decreased on a reducing balance at $r\%$ p.a. and after 5 years is worth R100 833,34. Calculate $r$.`, a: r`$100\,833{,}34=189\,000(1-r)^5\Rightarrow1-r=0{,}5335^{0{,}2}=0{,}8819\Rightarrow r\approx11{,}81\%$.` },
    { n: '6.1', q: r`A computer was purchased for R5 500; after 3 years its book value is R1 787,50. Determine the decrease rate if the depreciation is simple (straight-line).`, a: r`Loss $=5\,500-1\,787{,}5=R3\,712{,}50$ over 3 years: $i=\dfrac{3\,712{,}5}{5\,500\times3}=0{,}225=22{,}5\%$.` },
    { n: '6.2', q: r`What is the annual amount of depreciation?`, a: r`$\dfrac{3\,712{,}50}3=R1\,237{,}50$ per year.` },
    { n: '6.3', q: r`Calculate the annual depreciation rate if it is reducing balance.`, a: r`$1\,787{,}5=5\,500(1-i)^3\Rightarrow1-i=0{,}325^{1/3}=0{,}6875\Rightarrow i\approx31{,}25\%$.` },
  ]),
]);

export const ALG_FINANCE_5_LESSONS: Lesson[] = [FINANCE_TASK_4, FINANCE_TASK_5];
