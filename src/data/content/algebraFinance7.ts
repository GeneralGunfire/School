import type { Lesson } from '../../lib/types';
import { r, note, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 7 Finance: Task 6 and Task 7 (nominal and effective rates). Book pp. 180-181; photo 70.
 */

const fin = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-finance', id, title, minutes, blocks);

export const FINANCE_TASK_6 = fin('alg-u7-task-6', 'Finance: Task 6 (nominal and effective)', 40, [
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1', q: r`Calculate the final amount to be paid on a loan of R15 000 at 12% p.a. for 4 years under each condition: 1.1 simple interest; 1.2 compound annually; 1.3 compounded quarterly; 1.4 compounded monthly; 1.5 compounded daily.`, a: r`1.1 $15\,000(1+0{,}12\times4)=R22\,200$. 1.2 $15\,000(1{,}12)^4=R23\,602{,}79$. 1.3 $15\,000(1{,}03)^{16}=R24\,070{,}60$. 1.4 $15\,000(1{,}01)^{48}=R24\,183{,}39$. 1.5 $15\,000\left(1+\tfrac{0{,}12}{365}\right)^{1460}=R24\,239{,}20$. (More frequent compounding gives more.)` },
    { n: '2', q: r`The nominal yearly rate is 7,79%. Calculate the effective yearly rate if interest is compounded daily.`, a: r`$1+i_{eff}=\left(1+\dfrac{0{,}0779}{365}\right)^{365}=1{,}0810\Rightarrow i_{eff}\approx8{,}10\%$.` },
    { n: '3', q: r`How much money must you invest at 12,5% p.a., compounded monthly, if you know you will need R15 000 in 3 years’ time?`, a: r`$15\,000=P\left(1+\tfrac{0{,}125}{12}\right)^{36}\Rightarrow P=\dfrac{15\,000}{1{,}45227}\approx R10\,329{,}36$.` },
    { n: '4', q: r`Paul invested for 4 years at a nominal 6,1% p.a. compounded monthly (said to be equivalent to an effective 6,29%). Seth invested at a nominal 6% p.a. compounded daily. Seth thinks he has the better deal. Do you agree? Compare their effective rates.`, a: r`Paul: $\left(1+\tfrac{0{,}061}{12}\right)^{12}-1\approx6{,}27\%$ (the book quotes 6,29%). Seth: $\left(1+\tfrac{0{,}06}{365}\right)^{365}-1\approx6{,}18\%$. Seth’s effective rate is lower, so **no**, I do not agree: Paul has the better deal.` },
    { n: '5.1', q: r`Paris owes Hilton Fashion World R5 000 and the shop agrees to let her pay the bill at a nominal rate of 24% compounded monthly. How much will she owe after two years?`, a: r`$A=5\,000\left(1+\tfrac{0{,}24}{12}\right)^{24}=5\,000(1{,}02)^{24}=R8\,042{,}19$.` },
    { n: '5.2', q: r`What is the effective rate of interest that Hilton Fashion World is charging her?`, a: r`$(1{,}02)^{12}-1\approx0{,}2682=26{,}82\%$.` },
  ]),
]);

export const FINANCE_TASK_7 = fin('alg-u7-task-7', 'Finance: Task 7', 40, [
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1', q: r`R55 000 is deposited into a savings account. Calculate the value after 8 years if the interest is: 1.1 12% p.a. compounded annually; 1.2 12% p.a. compounded semi-annually; 1.3 12% p.a. compounded monthly.`, a: r`1.1 $55\,000(1{,}12)^8=R136\,177{,}97$. 1.2 $55\,000(1{,}06)^{16}=R139\,719{,}34$. 1.3 $55\,000(1{,}01)^{96}=R142\,960{,}01$.` },
    { n: '2', q: r`A company takes out a loan of R2,8 million, repaid in one amount at the end of 5 years. Interest is 8,5% p.a. compounded quarterly. How much does the company owe at the end of 5 years?`, a: r`$A=2\,800\,000\left(1+\tfrac{0{,}085}4\right)^{20}=R4\,263\,825{,}50$.` },
    { n: '3', q: r`R5 600 is deposited in a savings account. How much is in the account after 18 months at 9,25% p.a. compounded half-yearly?`, a: r`18 months $=3$ half-years: $A=5\,600\left(1+\tfrac{0{,}0925}2\right)^3=R6\,413{,}49$.` },
    { n: '4.1', context: r`R2 500 is deposited into a savings account at 15% p.a. compounded monthly.`, q: r`What is the monthly interest rate?`, a: r`$\dfrac{15\%}{12}=1{,}25\%$ per month.` },
    { n: '4.2', q: r`Determine the yearly effective interest rate, correct to 1 decimal digit.`, a: r`$(1{,}0125)^{12}-1=0{,}1608\approx16{,}1\%$.` },
    { n: '4.3', q: r`Calculate the amount in the account at the end of three years.`, a: r`$2\,500(1{,}0125)^{36}=R3\,909{,}86$.` },
    { n: '5', q: r`The inflation rate in Zimbabwe was 10% per month for 2006. What was the effective annual inflation rate for 2006?`, a: r`$(1{,}1)^{12}-1=2{,}1384\approx213{,}8\%$ per year.` },
    { n: '6', q: r`After 15 years of reducing balance depreciation, a set of factory machinery has $\tfrac18$ of its original value. The original value was R720 000. Calculate the depreciation rate as a percentage.`, a: r`$\tfrac18=(1-i)^{15}\Rightarrow1-i=0{,}125^{1/15}=0{,}8706\Rightarrow i\approx12{,}94\%$.` },
  ]),
  note(r`These are my worked answers; the book’s answer key was not photographed.`),
]);

export const ALG_FINANCE_7_LESSONS: Lesson[] = [FINANCE_TASK_6, FINANCE_TASK_7];
