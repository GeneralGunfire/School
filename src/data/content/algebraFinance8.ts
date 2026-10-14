import type { Lesson } from '../../lib/types';
import { r, note, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 7 Finance: Task 8 and Task 9 (rate of exchange). Book pp. 182-183; photo 71.
 */

const fin = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-finance', id, title, minutes, blocks);

export const FINANCE_TASK_8 = fin('alg-u7-task-8', 'Finance: Task 8', 40, [
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1.1', context: r`Nicholas buys a R18 000 fridge: 20% deposit, the balance by hire purchase at 20,25% p.a. simple interest over 42 months. An annual insurance premium of 1,5% of the total cost is added and paid in monthly payments.`, q: r`Calculate the value of the loan Nicholas will take.`, a: r`Deposit $=0{,}2\times18\,000=R3\,600$. Loan $=18\,000-3\,600=R14\,400$.` },
    { n: '1.2', q: r`Calculate the total amount that must be repaid on the hire purchase agreement.`, a: r`$n=\dfrac{42}{12}=3{,}5$ years. $A=14\,400(1+0{,}2025\times3{,}5)=14\,400\times1{,}70875=R24\,606$.` },
    { n: '1.3', q: r`Calculate the monthly repayment, which includes the monthly insurance premium.`, a: r`Insurance: $0{,}015\times18\,000=R270$ per year $=R22{,}50$ per month, i.e. $R945$ over 3,5 years. Monthly repayment $=\dfrac{24\,606}{42}+22{,}50=585{,}86+22{,}50=R608{,}36$.` },
    { n: '2.1', context: r`R8 000 is deposited into a savings account for one year at 13,5% p.a. compounded quarterly.`, q: r`What is the quarterly interest rate?`, a: r`$\dfrac{13{,}5\%}4=3{,}375\%$.` },
    { n: '2.2', q: r`Calculate the effective annual interest rate.`, a: r`$(1{,}03375)^4-1=0{,}1420\approx14{,}2\%$.` },
    { n: '3', q: r`On her 5th birthday, Bianca’s father invested a certain sum for her university education at 12% compounded semi-annually. On her 17th birthday the investment has grown to R13 214,60. How much did he initially invest?`, a: r`$n=17-5=12$ years, $m=2$, $i=\dfrac{0{,}12}2=0{,}06$: $13\,214{,}60=P(1{,}06)^{24}\Rightarrow P=\dfrac{13\,214{,}60}{4{,}0489}\approx R3\,263{,}72$.` },
    { n: '4', context: r`R1 950 is invested at a compound rate (the rate and the compounding options are cut off in the photo) and the interest after one year is compared quarterly, yearly and monthly.`, q: r`4.1 Quarterly. 4.2 Yearly. 4.3 Which investment is best? 4.4 The effective yearly rate if compounded monthly.`, a: r`Method: interest $=1\,950\left(1+\tfrac{i}{m}\right)^m-1\,950$ for $m=4,\,1,\,12$. The one with the largest $m$ earns most, so monthly is best, and $i_{eff}=\left(1+\tfrac{i}{12}\right)^{12}-1$.` },
    { n: '5', q: r`Calculate the amount of money that could be borrowed at 5,5% p.a. compound interest, compounded quarterly, over 4 years, so that the total repayment does not exceed R50 000.`, a: r`$50\,000=P\left(1+\tfrac{0{,}055}4\right)^{16}\Rightarrow P=\dfrac{50\,000}{1{,}24427}\approx R40\,186{,}12$.` },
  ]),
  note(r`In Question 4 the interest rate is cut off by the page edge, so only the method is given. The book does not say whether the insurance in 1.3 is on the R18 000 cost; that is the reading used.`),
]);

export const FINANCE_TASK_9 = fin('alg-u7-task-9', 'Finance: Task 9 (rate of exchange)', 25, [
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1', context: r`Value of one unit in rand: USA dollar R7,081; Swiss franc R5,892; UK pound R13,982.`, q: r`1.1 You have R5 000 to spend in Switzerland. How many francs can you buy?`, a: r`$\dfrac{5\,000}{5{,}892}=848{,}61$ francs.` },
    { n: '1.2', q: r`What will it cost in rand to buy 4 500 dollars?`, a: r`$4\,500\times7{,}081=R31\,864{,}50$.` },
    { n: '1.3', q: r`If you exchange 600 pounds, how many rand will you get?`, a: r`$600\times13{,}982=R8\,389{,}20$.` },
    { n: '2', context: r`Units per R1: Swiss franc $0{,}1697$; New Zealand dollar $0{,}21$; Japanese yen $16{,}03$.`, q: r`2.1 You have R5 000 to spend in Switzerland. How many francs can you buy?`, a: r`Multiply: $5\,000\times0{,}1697=848{,}50$ francs.` },
    { n: '2.2', q: r`What will it cost in rand to purchase 5 000 yen?`, a: r`Divide: $\dfrac{5\,000}{16{,}03}=R311{,}92$.` },
    { n: '2.3', q: r`If you exchange 1 000 NZD, how many rand will you get?`, a: r`$\dfrac{1\,000}{0{,}21}=R4\,761{,}90$.` },
    { n: '2.4', q: r`You want to import a personal computer from Japan at a total cost of 96 180 yen. The equivalent computer costs R8 500 in South Africa. Will you import or buy locally?`, a: r`$\dfrac{96\,180}{16{,}03}=R6\,000$. This is cheaper than R8 500, so **import** it (saving R2 500, ignoring any extra import costs).` },
  ]),
  note(r`Rule: rand to foreign currency, multiply by “units per R1”; foreign currency to rand, divide by it. If the table gives the value of one unit in rand, do the opposite.`),
]);

export const ALG_FINANCE_8_LESSONS: Lesson[] = [FINANCE_TASK_8, FINANCE_TASK_9];
