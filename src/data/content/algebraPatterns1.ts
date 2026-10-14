import type { Lesson } from '../../lib/types';
import { r, h2, h3, p, ul, note, formula, eq, qs, solution, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 3: Number Patterns, A (common patterns), B (arithmetic sequence) and the start of C
 * (quadratic sequence). Book pp. 55–61; photos 13–16 of the Math-Algebra folder.
 * Task 1 question 4.3.2 is cut off at the page edge and is not included.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-number-patterns', id, title, minutes, blocks);

export const PATTERNS_COMMON = lesson('alg-u3-a-common', 'A. Common Number Patterns', 20, [
  h2('Common number patterns'),
  p(r`Numbers can have interesting patterns. Here we list the most common patterns and how they are made.`),
  solution([
    ['Difference of $3$: continue by adding $3$ to the last number each time.', r`1,\;4,\;7,\;10,\;13,\;16,\;19,\;22,\;25,\;\ldots`],
    ['Difference of $5$: continue by adding $5$ to the last number each time.', r`3,\;8,\;13,\;18,\;23,\;28,\;33,\;38,\;\ldots`],
    ['A factor of $2$ between each consecutive two numbers: multiply the last number by $2$ each time.', r`2,\;4,\;8,\;16,\;32,\;64,\;128,\;256,\;\ldots`],
    ['A factor of $3$: multiply the last number by $3$ each time.', r`3,\;9,\;27,\;81,\;243,\;729,\;2187,\;\ldots`],
  ], 'Examples'),
  h3('Square numbers'),
  eq(r`1,\;4,\;9,\;16,\;25,\;36,\;49,\;64,\;81,\;\ldots`),
  p(r`The next number is made by squaring the term number. The second number is $2$ squared ($2^2$ or $2\times2$); the seventh number is $7$ squared ($7^2$ or $7\times7$), etc.`),
  h3('Cube numbers'),
  eq(r`1,\;8,\;27,\;64,\;125,\;216,\;343,\;512,\;729,\;\ldots`),
  p(r`The next term is made by cubing the term number. The second number is $2$ cubed ($2^3$ or $2\times2\times2$); the seventh number is $7$ cubed ($7^3$ or $7\times7\times7$).`),
  h3('Triangular numbers'),
  eq(r`1,\;3,\;6,\;10,\;15,\;21,\;28,\;36,\;45,\;\ldots`),
  p(r`This sequence is generated from a pattern of dots which form a triangle. By adding another row of dots and counting all the dots we can find the next number of the sequence. In each term the difference between the terms increases by one.`),

  h2('General formula, $T_n$'),
  p(r`A sequence does not have to follow a pattern, but when it does, we can often write down a formula to calculate the $n^{\text{th}}$-term. In the sequence $1;\,4;\,9;\,16;\,25;\ldots$, where the sequence consists of the squares of integers, the formula for the $n^{\text{th}}$-term is $T_n=n^2$.`),
  p(r`You can check this by looking at:`),
  eq(r`T_1=1^2=1\quad T_2=2^2=4\quad T_3=3^2=9\quad T_4=4^2=16\quad T_5=5^2=25\ldots`),
  p(r`Therefore we can generate a pattern, namely squares of integers.`),
  h3('Question 1'),
  p(r`In the triangle of odd numbers, row $1$ is $1$; row $2$ is $3+5$; row $3$ is $7+9+11$; row $4$ is $13+15+17+19$; and so on. The sums of the rows are $1$, $8$, $27$. 1.1 Find the sum of the numbers in the $5^{\text{th}}$ row. 1.2 Determine a formula for the sum of numbers in the $n^{\text{th}}$ row. 1.3 Calculate the sum of the numbers in the $(n-1)^{\text{th}}$ row.`),
  solution([
    ['1.1 The relation between the row and the sum of the numbers in the row is that the sum is the cube of that row number: first row $1^3=1$; second row $2^3=8$ and so on. The sum of the $5^{\\text{th}}$ row is', r`5^3=125`],
    ['1.2 The sum of the $n^{\\text{th}}$ row:', r`n^3`],
    ['1.3 The sum of the $(n-1)^{\\text{th}}$ row:', r`(n-1)^3`],
  ]),
  note(r`The book prints the solution to 1.2 and 1.3 only as their questions; the formulas above follow directly from 1.1.`),
]);

export const PATTERNS_LINEAR = lesson('alg-u3-b-arithmetic', 'B. Linear / Arithmetic Sequence', 40, [
  h2('Definition'),
  p(r`A linear sequence is a sequence of numbers in which the differences between each consecutive term is the same, called a common difference.`),
  formula('Common difference', r`T_2-T_1=T_3-T_2`),
  p(r`For example, $5;\,8;\,11;\,14;\,17;\ldots$ is a linear sequence because:`),
  eq(r`T_2-T_1=8-5=3\qquad T_3-T_2=11-8=3\qquad T_4-T_3=14-11=3\qquad T_1=5\text{ and }d=3`),
  p(r`Let the first term be $T_1=a$. Then $T_2=a+d$, $T_3=a+d+d=a+2d$ and $T_4=a+d+d+d=a+3d$. As you notice, in the $2^{\text{nd}}$ term there is only one $d$; the $3^{\text{rd}}$ term has $2d$, the $4^{\text{th}}$ term has $3d$ and so on. In the $n^{\text{th}}$ term there will be $(n-1)d$.`),
  formula('Arithmetic sequence formula', r`T_n=a+(n-1)\cdot d`),
  ul([
    r`$T_n$ = the $n^{\text{th}}$ term`,
    r`$a=T_1$, the first term`,
    r`$d$ = common difference`,
    r`$n$ = number of the terms`,
  ]),
  h3('How to determine the general term without using the formula'),
  ul([
    r`Firstly determine the common difference, $d$.`,
    r`Write $dn$.`,
    r`Substitute $n$ with $1$ and find the number that needs to be added or subtracted from $d$ to get the first term.`,
    r`It will be $dn$ plus or minus that number.`,
  ]),
  solution([
    ['$8;\\,15;\\,22;\\,29;\\ldots$ the difference is $7$, so the general term is $7n+1$, because it gives $8$ when $n$ is $1$.', r`T_n=7n+1`],
    ['$55;\\,42;\\,29;\\,16;\\ldots$ the difference is $-13$, so the general term is $-13n+68$ because it gives $55$ when $n$ is $1$.', r`T_n=-13n+68`],
    ['$3;\\,14;\\,25;\\,36;\\ldots$ the difference is $11$, so the general term is $11n-8$ because it gives $3$ when $n$ is $1$.', r`T_n=11n-8`],
  ], 'Examples'),

  h2('Worked questions'),
  h3('Question 1'),
  p(r`Study the following pattern: $1;\,6;\,11;\,16;\,21;\ldots$ 1.1 What is the next number in the sequence? 1.2 Use variables to write an algebraic statement to generalise the pattern. 1.3 What will the $100^{\text{th}}$ term of the sequence be? 1.4 Which term of the sequence is $96$?`),
  solution([
    ['1.1 The numbers increase by $5$, the first difference is the same, so it is linear. The next two numbers are', r`26;\;31`],
    ['1.2 $a=T_1=1$ and $d=5$', r`T_n=a+(n-1)d=1+(n-1)5=1+5n-5=5n-4`],
    ['1.3 $n=100$', r`T_{100}=5\cdot100-4=496`],
    ['1.4 $T_n=96$, $n=?$', r`96=5n-4\;\Rightarrow\;100=5n\;\Rightarrow\;n=20`],
  ]),
  h3('Question 2'),
  p(r`Given the linear sequence $x-3,\;2x-1,\;4x-6$. Find $x$.`),
  solution([
    ['A linear sequence has a common difference, $T_2-T_1=T_3-T_2$. Therefore', r`(2x-1)-(x-3)=(4x-6)-(2x-1)`],
    r`x+2=2x-5\;\Rightarrow\;7=x`,
  ]),

  h2('Task 1'),
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1.1', context: r`Consider the following sequences and in each case write down the next two terms and try to determine its general formula.`, q: r`$3;\,7;\,11;\,15;\,19;\ldots$`, a: r`$23;\,27$. $d=4$: $T_n=4n-1$.` },
    { n: '1.2', context: r`Same.`, q: r`$50;\,44;\,38;\,32;\,26;\ldots$`, a: r`$20;\,14$. $d=-6$: $T_n=-6n+56$.` },
    { n: '1.3', context: r`Same.`, q: r`$2;\,3;\,5;\,8;\,13;\ldots$`, a: r`$21;\,34$. Each term is the sum of the two before it (the Fibonacci pattern); there is no linear formula.` },
    { n: '1.4', context: r`Same.`, q: r`$1;\,2;\,4;\,8;\,16;\ldots$`, a: r`$32;\,64$. Each term doubles: $T_n=2^{n-1}$.` },
    { n: '1.5', context: r`Same.`, q: r`$1;\,4;\,9;\,16;\,25;\ldots$`, a: r`$36;\,49$. $T_n=n^2$.` },
    { n: '1.6', context: r`Same.`, q: r`$-27;\,-22;\,-17;\,-12;\,-7;\ldots$`, a: r`$-2;\,3$. $d=5$: $T_n=5n-32$.` },
    { n: '1.7', context: r`Same.`, q: r`$5+7x;\,7+9x;\,9+11x;\,11+13x;\ldots$`, a: r`$13+15x;\,15+17x$. Both parts are arithmetic: $T_n=(2n+3)+(2n+5)x$.` },
    { n: '2', q: r`Ayush sits and writes MATHSMATHSMATHS… If he continues writing this pattern, determine the $2022^{\text{nd}}$ letter that he will write down.`, a: r`The pattern repeats every $5$ letters. $2022=5\cdot404+2$, so the $2022^{\text{nd}}$ letter is the $2^{\text{nd}}$ letter of MATHS: A.` },
    { n: '3.1', context: r`Consider the following sequences and in each case determine the next three terms and a general algebraic formula.`, q: r`$-4;\,1;\,6;\,11;\,16;\ldots$`, a: r`$21;\,26;\,31$. $d=5$: $T_n=5n-9$.` },
    { n: '3.2', context: r`Same.`, q: r`$3;\,10;\,21;\,36;\,55;\ldots$`, a: r`First differences $7,\,11,\,15,\,19$; second difference $4$. Next three: $78;\,105;\,136$. $2a=4\Rightarrow a=2$; $3a+b=7\Rightarrow b=1$; $a+b+c=3\Rightarrow c=0$: $T_n=2n^2+n$.` },
    { n: '3.3', context: r`Same.`, q: r`$1;\,8;\,27;\,64;\,125;\ldots$`, a: r`$216;\,343;\,512$. $T_n=n^3$.` },
    { n: '3.4', context: r`Same.`, q: r`$\dfrac13;\dfrac25;\dfrac37;\dfrac49;\dfrac5{11};\ldots$`, a: r`$\dfrac6{13};\dfrac7{15};\dfrac8{17}$. The numerator is $n$ and the denominator goes up by $2$: $T_n=\dfrac n{2n+1}$.` },
    { n: '4.1', context: r`Answer the following questions.`, q: r`Three consecutive terms of a sequence are $2x-3$; $5x+2$ and $x-7$. The formula for the general term is linear. Determine the value of $x$ and the three terms.`, a: r`$(5x+2)-(2x-3)=(x-7)-(5x+2)\Rightarrow3x+5=-4x-9\Rightarrow x=-2$. The terms are $-7;\,-8;\,-9$ ($d=-1$).` },
    { n: '4.2', context: r`Same.`, q: r`Find the next two terms as well as the general term of $16;\,11;\,6;\ldots$`, a: r`$1;\,-4$. $d=-5$: $T_n=-5n+21$.` },
    { n: '4.3.1', context: r`Given the arithmetic sequence $23;\,19;\,15;\ldots$ find:`, q: r`the $12^{\text{th}}$ term`, a: r`$a=23$, $d=-4$: $T_{12}=23+11(-4)=-21$.` },
  ]),

  h2('Task 2'),
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1', q: r`Find the $11^{\text{th}}$ term of the arithmetic sequence $4;\,7;\,10;\ldots$`, a: r`$d=3$: $T_{11}=4+10\cdot3=34$.` },
    { n: '2', q: r`Find the $50^{\text{th}}$ term of $13;\,10;\,7;\ldots$`, a: r`$d=-3$: $T_{50}=13+49(-3)=-134$.` },
    { n: '3', q: r`Find the $30^{\text{th}}$ term of $4+7x;\,5+9x;\,6+11x;\ldots$`, a: r`$d=1+2x$: $T_{30}=4+7x+29(1+2x)=33+65x$.` },
    { n: '4', q: r`Find the $7^{\text{th}}$ term of the arithmetic sequence if $a=4$, $d=7$.`, a: r`$T_7=4+6\cdot7=46$.` },
    { n: '5', q: r`Find the $10^{\text{th}}$ term of the arithmetic sequence if $a=-2$; $T_5=18$.`, a: r`$-2+4d=18\Rightarrow d=5$. $T_{10}=-2+9\cdot5=43$.` },
    { n: '6', q: r`Which term of the arithmetic sequence $3;\,5;\,7;\ldots$ is equal to $27$?`, a: r`$d=2$: $27=3+(n-1)2\Rightarrow n-1=12\Rightarrow n=13$.` },
    { n: '7.1', context: r`Given the arithmetic sequence $-5;\,-4\tfrac14;\,-3\tfrac12;\ldots$`, q: r`Which term in the sequence is equal to $13$?`, a: r`$d=\tfrac34$: $13=-5+(n-1)\tfrac34\Rightarrow n-1=24\Rightarrow n=25$.` },
    { n: '7.2', context: r`Same.`, q: r`Calculate the $13^{\text{th}}$ term.`, a: r`$T_{13}=-5+12\cdot\tfrac34=4$.` },
    { n: '8', q: r`Which term of the arithmetic sequence $25;\,14;\,3;\ldots$ is equal to $-52$?`, a: r`$d=-11$: $-52=25-11(n-1)\Rightarrow n-1=7\Rightarrow n=8$.` },
    { n: '9.1', context: r`$x+2$; $3x-1$ and $4x-3$ are the first three terms of an arithmetic sequence.`, q: r`Determine $x$ and then write down the numerical values of the first three terms.`, a: r`$(3x-1)-(x+2)=(4x-3)-(3x-1)\Rightarrow2x-3=x-2\Rightarrow x=1$. The terms are $3;\,2;\,1$.` },
    { n: '9.2', context: r`Same.`, q: r`Determine a formula for the $n^{\text{th}}$ term.`, a: r`$a=3$, $d=-1$: $T_n=3-(n-1)=4-n$.` },
    { n: '9.3', context: r`Same.`, q: r`If the $n^{\text{th}}$ term is $-41$, calculate $n$.`, a: r`$4-n=-41\Rightarrow n=45$.` },
    { n: '9.4', context: r`Same.`, q: r`Calculate the $20^{\text{th}}$ term.`, a: r`$T_{20}=4-20=-16$.` },
    { n: '10', q: r`Find the $10^{\text{th}}$ term of $7;\,13;\,19;\ldots$`, a: r`$d=6$: $T_{10}=7+9\cdot6=61$.` },
    { n: '11', q: r`Find the $9^{\text{th}}$ term of $-5a;\,-8a;\,-11a;\ldots$`, a: r`$d=-3a$: $T_9=-5a+8(-3a)=-29a$.` },
    { n: '12', q: r`Malwande writes ILIKEMATHILIKEMATH… (the pattern ILIKEMATH repeats every $9$ letters). Determine the $1000^{\text{th}}$ letter.`, a: r`$1000=9\cdot111+1$, so it is the $1^{\text{st}}$ letter of ILIKEMATH: I.` },
  ]),
]);

export const PATTERNS_QUADRATIC_INTRO = lesson('alg-u3-c-quadratic-intro', 'C. Quadratic Sequence', 30, [
  h2('Second differences'),
  p(r`A quadratic sequence is a sequence of numbers in which the second difference between any two consecutive terms is the same.`),
  p(r`For example, $1;\,2;\,4;\,7;\,11;\ldots$ is a quadratic sequence. If we take the difference between consecutive terms we get $1;\,2;\,3;\,4;\ldots$. We then work out the second differences, which is simply the difference between consecutive differences $\{1;\,2;\,3;\,4;\ldots\}$:`),
  eq(String.raw`\begin{array}{ccccccccc}1&&2&&4&&7&&11\\&1&&2&&3&&4&\\&&1&&1&&1&&\end{array}`),
  p(r`We see that the second differences are equal to $1$. Thus, the sequence is a quadratic sequence. Note that the differences between consecutive terms (the first differences) of a quadratic sequence form a sequence where there is a constant difference between consecutive terms. In the example, the sequence $\{1;\,2;\,3;\,4;\ldots\}$ has a linear formula, $an+b$. So the first differences of any quadratic sequence is an arithmetic sequence.`),
  p(r`A quadratic sequence is similar to a quadratic equation, $y=ax^2+bx+c$. In the Cartesian plane, $T_n$ is the $y$-value and $n$ is the $x$-value. The general term of a quadratic sequence is:`),
  formula('General term', r`T_n=an^2+bn+c`),
  eq(r`2a=\text{second difference}\qquad3a+b=\text{first difference}\qquad a+b+c=\text{first term}`),
  note(r`The book writes the quadratic equation as “$y=ax^2+x+c$”; the middle term is $bx$.`),
  h3('Question 1'),
  p(r`Study the following pattern: $1;\,7;\,19;\,37;\,61;\ldots$ 1.1 What is the next number in the sequence? 1.2 Use variables to write an algebraic statement to generalise the pattern. 1.3 What will the $30^{\text{th}}$ term of the sequence be?`),
  eq(String.raw`\begin{array}{ccccccccccc}1&&7&&19&&37&&61&&\ldots\\&6&&12&&18&&24&&30&&36\\&&6&&6&&6&&6&&6\end{array}`),
  solution([
    ['1.1 The second difference is the same: $6=6$. The next two terms are', r`91;\;127`],
    ['1.2 $2a=$ second difference', r`2a=6\;\Rightarrow\;a=3`],
    ['$3a+b=$ first difference', r`3\cdot3+b=6\;\Rightarrow\;b=-3`],
    ['$a+b+c=$ first term', r`3-3+c=1\;\Rightarrow\;c=1`],
    ['So $a=3$, $b=-3$, $c=1$', r`T_n=3n^2-3n+1`],
    ['1.3 $n=30$ and $T_n=3n^2-3n+1$', r`T_{30}=3(30)^2-3\cdot30+1=2611`],
  ]),
]);

export const ALG_PATTERNS_1_LESSONS: Lesson[] = [PATTERNS_COMMON, PATTERNS_LINEAR, PATTERNS_QUADRATIC_INTRO];
