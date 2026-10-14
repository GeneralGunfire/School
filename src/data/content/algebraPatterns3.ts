import type { Lesson } from '../../lib/types';
import { r, h2, h3, p, ul, note, formula, qs, solution, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 3: Number Patterns, D (geometric sequence) and Task 5. Book pp. 65–67; photos 18–19 of the
 * Math-Algebra folder. Task 5 is answered from its printed questions.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-number-patterns', id, title, minutes, blocks);

export const PATTERNS_GEOMETRIC = lesson('alg-u3-d-geometric', 'D. Geometric Sequence', 35, [
  h2('Definition'),
  p(r`A geometric sequence is a sequence in which every term in the sequence is equal to the previous term, multiplied by a constant number. This means that the ratio between consecutive numbers in the geometric sequence is a constant, $r$, the common ratio.`),
  p(r`To find the common ratio of a geometric sequence, any term is divided by the previous term.`),
  formula('Common ratio', r`r=\dfrac{T_2}{T_1}=\dfrac{T_3}{T_2}`),
  p(r`To find any term in the sequence, we use the general formula:`),
  formula('Geometric sequence formula', r`T_n=a\cdot r^{\,n-1}`),
  ul([r`$T_n$ = the $n^{\text{th}}$ term`, r`$a=T_1$, the first term`, r`$r$ = common ratio`, r`$n$ = number of the terms`]),
  p(r`To find the consecutive term of any geometric sequence, multiply the term by the common ratio. For example: $2;\,6;\,18;\ldots$ The next term in the sequence will be $18\cdot3=54$ (we multiplied the previous term by the common ratio).`),

  h2('Worked questions'),
  h3('Question 1'),
  p(r`Continue the sequence to the $7^{\text{th}}$ term: $2;\,-4;\,8;\ldots$`),
  solution([
    r`r=\dfrac{-4}{2}=\dfrac{8}{-4}=-2`,
    ['We can continue writing the terms by multiplying the terms with $-2$:', r`2;\,-4;\,8;\,-16;\,32;\,-64;\,128`],
  ]),
  h3('Question 2'),
  p(r`Find the $12^{\text{th}}$ term of the geometric sequence $1;\,\dfrac52;\,\dfrac{25}4;\ldots$`),
  note(r`The book’s solution reads $a=1$ and $r=\dfrac{-5/2}{1}=\dfrac{-5}2$ (a sign slip: the second term is $+\frac52$, so $r=+\frac52$). The corrected working follows; the book’s printed $T_{12}=-\left(\frac52\right)^{11}$ is for $r=-\frac52$.`),
  solution([
    r`a=1,\qquad r=\dfrac{\frac52}{1}=\dfrac52`,
    r`T_n=a\cdot r^{n-1}\;\Rightarrow\;T_{12}=1\cdot\left(\dfrac52\right)^{11}`,
  ]),
  h3('Question 3'),
  p(r`If $x+1$; $x-1$; and $x$ are the first three terms of a geometric sequence, find the value of $x$ and the first three terms of this sequence.`),
  solution([
    ['The ratio can be found by dividing the third term by the second term or the second term by the first term:', r`r=\dfrac{x}{x-1}=\dfrac{x-1}{x+1}`],
    ['Cross-multiply to get $x$:', r`x^2+x=x^2-2x+1`],
    r`3x=1\;\Rightarrow\;x=\dfrac13`,
    ['The first three terms are', r`\dfrac43;\;-\dfrac23;\;\dfrac13;\ldots`],
  ]),
  h3('Question 4'),
  p(r`The $n^{\text{th}}$ term of a geometric sequence is $8\times5^{n-3}$. Find the term of the sequence which has a value of $200$.`),
  solution([
    ['The general term is given as a function:', r`T_n=8\cdot5^{n-3}`],
    r`200=8\cdot5^{n-3}`,
    ['Divide both sides by $8$:', r`25=5^{n-3}\;\Rightarrow\;5^2=5^{n-3}`],
    r`n-3=2\;\therefore\;n=5`,
  ]),
  note(r`The book’s last two lines read “$n=5^{n-2}$, $\therefore n=5$”; the working above ($n-3=2$) is the correct step.`),

  h2('Task 5'),
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1', q: r`Determine the $4^{\text{th}}$ and $6^{\text{th}}$ terms of the geometric sequence $2;\,6;\,18;\ldots$`, a: r`$r=3$: $T_4=2\cdot27=54$ and $T_6=2\cdot243=486$.` },
    { n: '2', q: r`Find the $5^{\text{th}}$ term of the geometric sequence of which $a=2$ and $r=3$.`, a: r`$T_5=2\cdot3^4=162$.` },
    { n: '3', q: r`Find the $12^{\text{th}}$ term of the geometric sequence $2x^2,\,6x^3,\,18x^4,\ldots$`, a: r`$r=3x$: $T_{12}=2x^2(3x)^{11}=2\cdot3^{11}x^{13}=354\,294\,x^{13}$.` },
    { n: '4', q: r`If $x-4$; $x+2$; and $3x+1$ are the first three terms of a geometric sequence, write down the numerical values of the first three terms if $x$ is positive.`, a: r`$\dfrac{x+2}{x-4}=\dfrac{3x+1}{x+2}\Rightarrow(x+2)^2=(x-4)(3x+1)\Rightarrow2x^2-15x-8=0\Rightarrow(2x+1)(x-8)=0$. $x=8$ (positive): the terms are $4;\,10;\,25$.` },
    { n: '5', q: r`Determine the values of $x$ so that $-\dfrac34;\,x;\,-\dfrac13$ is a geometric sequence.`, a: r`$\dfrac{x}{-\frac34}=\dfrac{-\frac13}{x}\Rightarrow x^2=\dfrac14\Rightarrow x=\pm\dfrac12$.` },
    { n: '6', q: r`Find $r$ in the geometric sequence in which the sixth term is $96$ and the first term is $3$.`, a: r`$3r^5=96\Rightarrow r^5=32\Rightarrow r=2$.` },
    { n: '7', q: r`Find $r$ in the geometric sequence in which the fifth term is $\dfrac7{81}$ and the first term is $7$.`, a: r`$7r^4=\dfrac7{81}\Rightarrow r^4=\dfrac1{81}\Rightarrow r=\pm\dfrac13$.` },
    { n: '8', q: r`Find the $2^{\text{nd}}$ term of the geometric sequence of which $T_1=1$ and $T_7=729$.`, a: r`$r^6=729\Rightarrow r=\pm3$, so $T_2=3$ or $T_2=-3$.` },
    { n: '9', q: r`Determine the first three terms of the geometric sequence with fourth term $-\dfrac4{25}$ and fifth term $\dfrac4{125}$.`, a: r`$r=\dfrac{4/125}{-4/25}=-\dfrac15$. $a=\dfrac{T_4}{r^3}=\dfrac{-4/25}{-1/125}=20$. The terms are $20;\,-4;\,\dfrac45$.` },
    { n: '10', q: r`Which term of the geometric sequence $1;\,5;\,25;\ldots$ is equal to $625$?`, a: r`$625=5^{n-1}\Rightarrow5^4=5^{n-1}\Rightarrow n=5$.` },
  ]),
]);

export const ALG_PATTERNS_3_LESSONS: Lesson[] = [PATTERNS_GEOMETRIC];
