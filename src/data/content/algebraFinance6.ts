import type { Lesson } from '../../lib/types';
import { r, h2, p, ul, note, solution, lesson as make } from './algKit';

/**
 * Unit 7 Finance: C. Nominal and effective interest rate. Book pp. 178-179; photo 69.
 */

const fin = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-finance', id, title, minutes, blocks);

export const NOMINAL_EFFECTIVE = fin('alg-u7-c-nominal-effective', 'C. Nominal and Effective Interest Rate', 40, [
  h2('Nominal interest'),
  p(r`Sometimes interest is charged yearly but **compounded many times within the year**. This type of interest rate is called a **nominal interest** rate.`),
  ul([
    r`“$m$” values: compounded semi-annually, $m=2$; quarterly, $m=4$; monthly, $m=12$; daily, $m=365$.`,
  ]),
  h2('Example: compounded twice a year'),
  p(r`R1 000 invested at “10% per annum compounded semi-annually”. Semi-annual means twice a year, so the 10% is split into two: 5% halfway through the year and another 5% at the end, and each time it is compounded (the interest is added to the total).`),
  solution([
    r`A_1=1\,000(1+5\%)=R1\,050`,
    r`A_2=1\,050(1+5\%)=R1\,102{,}50`,
  ]),
  p(r`There are two annual rates: the **nominal rate** is 10% (the rate they mention) and the **effective annual rate** is 10,25% (the rate after compounding), since $\dfrac{1\,102{,}50-1\,000}{1\,000}=10{,}25\%$.`),
  p(r`The effective annual rate is what you actually get paid. If interest is compounded within the year, the effective annual rate will be higher than the nominal rate.`),
  { type: 'math', label: 'Compound interest formula', text: r`A=P\left(1+\dfrac im\right)^{n\cdot m}` },
  ul([r`$m$ is the number of times it is compounded in one year; $n$ is in years.`]),
  { type: 'math', label: 'Converting effective and nominal rates', text: r`P(1+i)^n=P\left(1+\dfrac{i}{m}\right)^{n\cdot m}\quad\Rightarrow\quad1+i_{eff}=\left(1+\dfrac{i_{nom}}m\right)^m` },

  h2('Question 1'),
  p(r`On their savings accounts, a bank offers an interest rate of 18% p.a., compounded monthly. If you save R100 in such an account now, how much would it accumulate to in 3 years’ time?`),
  solution([
    ['It is a nominal rate question: $m=12$, $i=0{,}18$, $n=3$.', r`A=100\left(1+\dfrac{0{,}18}{12}\right)^{12\times3}=100(1{,}015)^{36}`],
    r`A=R170{,}91`,
  ]),
  h2('Question 2'),
  p(r`Cebela received R120 000 on her investment of R80 000 in five years. Calculate the interest rate per annum compounded quarterly.`),
  solution([
    r`120\,000=80\,000\left(1+\dfrac i4\right)^{5\times4}\;\Rightarrow\;1{,}5=\left(1+\dfrac i4\right)^{20}`,
    ['Take the 20th root:', r`1+\dfrac i4=\sqrt[20]{1{,}5}=1{,}020480\;\Rightarrow\;\dfrac i4=0{,}020480`],
    r`i=0{,}081921=8{,}19\%`,
  ]),
  h2('Question 3'),
  p(r`Calculate the effective rate equivalent to a nominal interest rate of 8,75% p.a. compounded monthly.`),
  solution([
    ['The nominal rate is given; use the conversion formula:', r`1+i_{eff}=\left(1+\dfrac{0{,}0875}{12}\right)^{12}=1{,}0911`],
    r`i_{eff}=0{,}0911\approx9{,}1\%`,
  ]),
  note(r`The book writes the conversion formula with “$1+1_{eff}$”; it should read $1+i_{eff}$.`),
]);

export const ALG_FINANCE_6_LESSONS: Lesson[] = [NOMINAL_EFFECTIVE];
