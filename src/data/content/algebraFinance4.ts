import type { Lesson } from '../../lib/types';
import { r, note, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 7 Finance: Task 2 and Task 3. Book pp. 174-175; photo 67 (Task 2 right-hand header is cut off in the photo).
 */

const fin = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-finance', id, title, minutes, blocks);

export const FINANCE_TASK_2 = fin('alg-u7-task-2', 'Finance: Task 2 (growth and depreciation)', 35, [
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1', q: r`On 1 January 2017 the value of my Kia Sorento is R320 000. Each year after that the car’s value decreases 20% of the previous year’s value. What is the value on 1 January 2021?`, a: r`Reducing balance, $n=4$: $A=320\,000(1-0{,}2)^4=R131\,072$.` },
    { n: '2', q: r`The population of Bonduel decreases at 9,5% per annum as people migrate to the cities. Calculate the decrease in population over 5 years if the initial population was 2 178 000.`, a: r`$A=2\,178\,000(1-0{,}095)^5\approx855\,789$. Decrease $=2\,178\,000-855\,789\approx1\,322\,211$ people.` },
    { n: '3', q: r`A 20 kg watermelon consists of 98% water. If it is left in the sun it loses 3% of its water each day. How much does it weigh after a month of 31 days?`, a: r`Water: $0{,}98\times20=19{,}6$ kg; the rest $0{,}4$ kg does not change. Water after 31 days $=19{,}6(0{,}97)^{31}\approx7{,}62$ kg. Mass $\approx7{,}62+0{,}4\approx8{,}02$ kg.` },
    { n: '4', q: r`A computer depreciates at $x\%$ p.a. (reducing balance). Four years ago its value was R10 000; it is now worth R4 520. Calculate $x$ to two decimal places.`, a: r`$4\,520=10\,000(1-i)^4\Rightarrow1-i=0{,}452^{0{,}25}=0{,}8199\Rightarrow i=0{,}1801$, so $x\approx18{,}01\%$.` },
    { n: '5.1', q: r`Spiderman buys a Mercedes worth R385 000 in January 2015. What will it be worth at the end of 2020 (6 years) if it depreciates at 6% p.a. straight-line?`, a: r`$A=385\,000(1-0{,}06\times6)=385\,000\times0{,}64=R246\,400$.` },
    { n: '5.2', q: r`…if it depreciates at 12% p.a. reducing balance?`, a: r`$A=385\,000(1-0{,}12)^6\approx R178\,795{,}57$.` },
    { n: '6', q: r`Ayush buys a DsTV satellite dish for R3 000. It depreciates simply at 15% p.a. After how long will it be worth nothing?`, a: r`$0=3\,000(1-0{,}15n)\Rightarrow n=\dfrac1{0{,}15}=6{,}67$ years (6 years 8 months).` },
    { n: '7', q: r`Shrek buys his grandpa’s donkey for R800. Grandpa is pleased as it has depreciated at 3% per year (straight-line). Grandpa bought it 5 years ago. What did grandpa pay?`, a: r`$800=P(1-0{,}03\times5)=0{,}85P\Rightarrow P\approx R941{,}18$.` },
  ]),
]);

export const FINANCE_TASK_3 = fin('alg-u7-task-3', 'Finance: Task 3 (mixed)', 40, [
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1', q: r`Peter invested R6 000 at 12% p.a. simple interest for 4 years. Jade invested R6 000 at 10% compound interest p.a. for 4 years. Who gained more interest?`, a: r`Peter: $6\,000\times0{,}12\times4=R2\,880$. Jade: $6\,000(1{,}1)^4-6\,000=R2\,784{,}60$. **Peter** gained more.` },
    { n: '2', q: r`Bula wants to buy a video camera for R9 500 and has a deposit of R1 500. He pays the balance using hire purchase over 2,5 years at 16% p.a. (simple), with insurance of 2% per annum on the purchase price included. Calculate his monthly instalment.`, a: r`Balance $=9\,500-1\,500=R8\,000$. Loan: $8\,000(1+0{,}16\times2{,}5)=R11\,200$. Insurance: $2\%\times9\,500\times2{,}5=R475$. Total $=R11\,675$ over 30 months: **R389,17** per month. (Reading used: insurance is 2% of the R9 500 price per year.)` },
    { n: '3.1', q: r`A photocopier is sold after 4 years for R12 250. What was the purchase price if it depreciated 25% p.a. on a reducing balance?`, a: r`$12\,250=P(0{,}75)^4\Rightarrow P=\dfrac{12\,250}{0{,}31640625}\approx R38\,716{,}05$.` },
    { n: '3.2', q: r`How long will it take a sum of money to treble itself at 16% p.a. simple interest?`, a: r`$3P=P(1+0{,}16n)\Rightarrow0{,}16n=2\Rightarrow n=12{,}5$ years.` },
    { n: '4.1', q: r`In 10 years the urban population of the Western Cape grew from 984 372 to 5 million. Use the compound-interest formula to calculate the growth rate.`, a: r`$5\,000\,000=984\,372(1+i)^{10}\Rightarrow1+i=\left(\dfrac{5\,000\,000}{984\,372}\right)^{0{,}1}=1{,}1765\Rightarrow i\approx17{,}65\%$ p.a.` },
    { n: '4.2', q: r`Monique bought a stove for R3 750. After 3 years she paid for it and the R956,25 interest that was charged. Determine the simple rate of interest.`, a: r`$956{,}25=3\,750\times i\times3\Rightarrow i=\dfrac{956{,}25}{11\,250}=0{,}085=8{,}5\%$.` },
    { n: '5', q: r`How much compound interest is payable on a loan of R2 000 for a year at 10%?`, a: r`$2\,000(1{,}1)-2\,000=R200$.` },
    { n: '6.1', q: r`Calculate the compound interest on a R2 000 loan for 2 years at 5%.`, a: r`$2\,000(1{,}05)^2-2\,000=R205$.` },
    { n: '6.2', q: r`A R1 500 investment for 7 years at 6,5%.`, a: r`$1\,500(1{,}065)^7-1\,500\approx R830{,}98$.` },
  ]),
  note(r`In Task 3 Question 2 the word “hire purchase” is underlined by hand in the book; the working above uses the usual hire-purchase (simple interest) method.`),
]);

export const ALG_FINANCE_4_LESSONS: Lesson[] = [FINANCE_TASK_2, FINANCE_TASK_3];
