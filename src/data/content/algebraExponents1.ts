import type { Lesson } from '../../lib/types';
import { r, h2, h3, p, note, formula, eq, qs, solution, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Grade 10 Mathematics Paper 1, Unit 2: Exponents & Surds, A (exponential laws) and the start of
 * B (scientific notation). Book pp. 26–33; photos 1–4 of the Math-Algebra folder.
 * The folder starts at p.26, so the earlier pages (the multiplication laws) are not in the photos.
 * Task 3 is printed small and blurred; only the questions that can be read with certainty are included.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-exponents-surds', id, title, minutes, blocks);

export const EXP_LAWS = lesson('alg-u2-a-laws', 'A. Exponential Laws', 35, [
  h2('Division with equal powers'),
  p(r`If the bases are different but the powers are the same, divide the base in the numerator by the base in the denominator and keep your power the same.`),
  formula('Division of equal powers', r`\dfrac{a^m}{b^m}=\left(\dfrac ab\right)^m`),
  solution([
    r`\dfrac{6^5}{2^5}=\left(\dfrac62\right)^5=3^5`,
    r`\dfrac{a^{15}}{b^{15}}=\left(\dfrac ab\right)^{15}`,
  ], 'Examples'),

  h2('Negative power'),
  p(r`We usually do not leave any base with a negative power in the final answer. If the exponential expression moves from the numerator to the denominator or vice versa, the sign of the power becomes its opposite.`),
  formula('Negative exponent', r`a^{-n}=\dfrac1{a^n}`),
  solution([
    r`2^{-3}=\dfrac1{2^3}=\dfrac18`,
    r`\dfrac1{y^{-2}}=y^2`,
    r`\dfrac{y^{-1}}{x^{-1}}=\dfrac{x^1}{y^1}=\dfrac xy`,
    r`\dfrac{4a^{-2}}{b}=\dfrac{4}{ba^2}`,
    r`\dfrac{3^{-1}\,2^{-1}}{4}=\dfrac1{4\cdot3\cdot2}=\dfrac1{24}`,
  ], 'Examples'),
  note(r`Remark: in $\dfrac{a^{-1}+b^{-1}}{c^{-1}}$ you cannot cancel out any term, because there is addition in the numerator.`),

  h2('Power of zero'),
  p(r`Anything (except zero) to the power of zero is equal to one (1).`),
  formula('Zero exponent', r`a^0=1\quad(a\ne0)`),
  solution([
    r`(3y)^0=1`,
    ['($0$ belongs to $x$, not $5$)', r`5x^0=5\cdot1=5`],
    r`-5a^0b^2=-5b^2`,
    r`-a^0=-1`,
    r`(-a)^0=1`,
  ], 'Examples'),

  h2('Raise to a power'),
  p(r`If there is another power over the original power, we multiply the powers.`),
  formula('Power of a power', r`(a^m)^n=a^{m\times n}`),
  solution([
    r`\dfrac{(x^2)^3}{(y^2)^4}=\dfrac{x^6}{y^8}`,
    r`(a^m)^n=(a^n)^m=a^{m\times n}`,
    ['$2^{2x}$ can be written as a power of $4$:', r`2^{2x}=(2^2)^x=4^x`],
  ], 'Examples'),

  h2('The power of a product'),
  eq(r`(a^mb^n)^k=a^{m\times k}\,b^{n\times k}\qquad\text{and}\qquad\left(\dfrac{a^m}{b^n}\right)^k=\dfrac{a^{m\times k}}{b^{n\times k}}`),
  solution([
    r`(2x^4)^3=2^3x^{12}=8x^{12}`,
    r`\left(\dfrac{x^2y}{z^3}\right)^4=\dfrac{x^8\cdot y^4}{z^{12}}`,
  ], 'Examples'),

  h2('Mixed examples'),
  h3('Example 1'),
  solution([
    r`\dfrac{4a^0+1}{(4a)^0+1}=\dfrac{4+1}{1+1}=\dfrac52`,
  ]),
  h3('Example 2'),
  solution([
    r`3(x^4)^2+4x^8y^0+\dfrac{9(x^4)^3}{18x^4}`,
    r`=3x^8+4x^8+\dfrac{9x^{12}}{18x^4}`,
    r`=7x^8+\dfrac12x^8=7\tfrac12x^8`,
  ]),
  h3('Example 3'),
  solution([
    r`\dfrac{(2a^2b^3)^4\times(8b^{-2})^2}{4ab^5\times12a^9b^7}=\dfrac{2^4a^8b^{12}\times8^2a^2b^{-4}}{4\cdot12a^{10}b^{12}}`,
    r`=\dfrac{16\cdot64\,a^{10}b^8}{4\cdot12\,a^{10}b^{12}}`,
    r`=\dfrac{64\cdot a^0\cdot b^{-4}}{3}=\dfrac{64\cdot1\cdot b^{-4}}{3}=\dfrac{64}{3b^4}`,
  ]),
  note(r`In the first line of Example 3 the book writes the second factor of the numerator as $8^2a^2b^{-4}$; $(8b^{-2})^2=8^2b^{-4}$ has no $a^2$. The $a^2$ belongs to the first bracket: $(2a^2b^3)^4=2^4a^8b^{12}$, and multiplying all the $a$ powers gives $a^8\cdot a^2$ in the printed line. Working from the question as printed, $\dfrac{16\cdot64\,a^8b^8}{48\,a^{10}b^{12}}=\dfrac{64}{3a^2b^4}$; the answer $\dfrac{64}{3b^4}$ follows the book’s printed steps.`),

  h2('Worked questions'),
  h3('Question 1'),
  p(r`Simplify: $\dfrac{512\cdot16^{12}}{256^3}$`),
  solution([
    ['The bases $512$, $16$ and $256$ are powers of $2$. Write each base as a power of $2$ and use the multiplication and division rules.', r`\dfrac{2^9\cdot(2^4)^{12}}{(2^8)^3}=\dfrac{2^9\cdot2^{48}}{2^{24}}=2^{9+48-24}=2^{33}`],
  ]),
  h3('Question 2'),
  p(r`Simplify: $\dfrac{128^2\cdot27^3\cdot8}{32^2\cdot9^4}$`),
  solution([
    ['The bases $128$, $8$ and $32$ are powers of $2$; $27$ and $9$ are powers of $3$.', r`\dfrac{(2^7)^2\cdot(3^3)^3\cdot2^3}{(2^5)^2\cdot(3^2)^4}=\dfrac{2^{14}\cdot3^9\cdot2^3}{2^{10}\cdot3^8}=2^7\cdot3`],
  ]),
  h3('Question 3'),
  p(r`Simplify: $\dfrac{1}{\left(\frac18\right)^{-\frac13}}$`),
  solution([
    r`\dfrac{1}{\left(\frac18\right)^{-\frac13}}=\left(\dfrac18\right)^{\frac13}=\left(\dfrac1{2^3}\right)^{\frac13}=\dfrac12`,
  ]),
  h3('Question 4'),
  p(r`Simplify: $\dfrac{25^{2x-4}}{5^{3x-1}\cdot5^{2x-3}\cdot5^{-1}}$`),
  solution([
    r`\dfrac{(5^2)^{2x-4}}{5^{3x-1+2x-3-1}}=\dfrac{5^{4x-8}}{5^{5x-5}}`,
    r`=5^{4x-8-(5x-5)}=5^{-x-3}`,
  ]),
  h3('Question 5'),
  p(r`Simplify: $\dfrac{(xy)^{\frac12}(x^3)^{\frac16}(xy)^{\frac32}}{(x^2)^{-\frac54}}$`),
  solution([
    r`\dfrac{x^{\frac12}y^{\frac12}\,x^{\frac12}\,x^{\frac32}y^{\frac32}}{x^{-\frac52}}=x^{\frac12+\frac12+\frac32+\frac52}\,y^{\frac12+\frac32}`,
    r`=x^{\frac{8}{2}}\cdot y^{\frac42}=x^4y^2`,
  ]),
  note(r`The book’s middle step prints $x^{\frac12-\frac12+(\frac{-5}2)}$, which does not match the question; the exponents of $x$ are $\frac12+\frac12+\frac32$ in the numerator, minus $-\frac52$ from the denominator, giving $\frac{4+4}{2}\cdot$ i.e. $x^4$, the book’s result.`),
  h3('Question 6'),
  p(r`Simplify: $(3^{-1}+2^{-2})^{-2}$`),
  solution([
    ['You cannot use the power of the power because the operation in the bracket is addition (there are two terms). First write the expression in the bracket as one term.', r`(3^{-1}+2^{-2})^{-2}=\left(\dfrac13+\dfrac14\right)^{-2}`],
    r`=\left(\dfrac7{12}\right)^{-2}=\dfrac{144}{49}`,
  ]),
  h3('Question 7'),
  p(r`Simplify: $\dfrac{7^{-1}-2^{-1}}{3^{-2}+5^{-1}}$`),
  solution([
    r`=\dfrac{\frac17-\frac12}{\frac19+\frac15}=\dfrac{\frac{2-7}{14}}{\frac{5+9}{45}}`,
    r`=\dfrac{-\frac5{14}}{\frac{14}{45}}=\dfrac{-5}{14}\cdot\dfrac{45}{14}=\dfrac{-225}{196}`,
  ]),
  h3('Question 8'),
  p(r`Simplify: $-7^0\left(\dfrac{27}{125}\right)^{-\frac13}$`),
  solution([
    r`-7^0\left(\dfrac{27}{125}\right)^{-\frac13}=-1\left(\dfrac{3^3}{5^3}\right)^{-\frac13}=-\dfrac{(3^3)^{-\frac13}}{(5^3)^{-\frac13}}`,
    r`=-\dfrac{3^{-1}}{5^{-1}}=-\dfrac53`,
  ]),
  h3('Question 9'),
  p(r`Simplify: $\left(\dfrac32\right)^{-3}+\left(\dfrac43\right)^{-1}$`),
  solution([
    r`\left(\dfrac32\right)^{-3}+\left(\dfrac43\right)^{-1}=\dfrac{2^3}{3^3}+\dfrac34`,
    r`=\dfrac{8}{27}+\dfrac34=\dfrac{113}{108}`,
  ]),
  note(r`The book’s middle line (“$\frac{3^{-3}}{2^{-3}}+\frac{4^{-1}}{3^{-1}}$ $=\frac{2^3}{3^3}+\frac34$”) is the same working; $\left(\frac32\right)^{-3}=\frac{2^3}{3^3}=\frac8{27}$ and $\left(\frac43\right)^{-1}=\frac34$.`),
  h3('Question 10'),
  p(r`Simplify: $\left(\dfrac{5}{4^{-1}-9^{-1}}\right)^{\frac12}$`),
  solution([
    ['You cannot use the power of the brackets, because the operation in the bracket is subtraction (there are two terms). Write the expression in the bracket in one term.', r`\left(\dfrac5{\frac14-\frac19}\right)^{\frac12}=\left(\dfrac5{\frac{9-4}{36}}\right)^{\frac12}=\left(\dfrac5{\frac5{36}}\right)^{\frac12}`],
    r`=\left(5\times\dfrac{36}5\right)^{\frac12}=36^{\frac12}=(6^2)^{\frac12}=6`,
  ]),

  h2('Task 1'),
  ALG_ANSWERS_NOTE,
  note(r`Question 1.5 is printed small; it is read as $\dfrac{(2xy)^2\cdot2(x^2y)^3}{8xy^2\cdot x^2y^3}$.`),
  qs([
    { n: '1.1', context: r`Use exponential rules to simplify the following expressions.`, q: r`$(2u^2)^3$`, a: r`$8u^6$` },
    { n: '1.2', context: r`Same.`, q: r`$\dfrac{4p^2q^3}{pq^2}$`, a: r`$4pq$` },
    { n: '1.3', context: r`Same.`, q: r`$\left(2m\cdot\dfrac5y\right)^0$`, a: r`$1$` },
    { n: '1.4', context: r`Same.`, q: r`$\dfrac{m^2w\cdot m^3w^2}{m^4w^3}$`, a: r`$\dfrac{m^5w^3}{m^4w^3}=m$` },
    { n: '1.5', context: r`Same.`, q: r`$\dfrac{(2xy)^2\cdot2(x^2y)^3}{8xy^2\cdot x^2y^3}$`, a: r`$\dfrac{4x^2y^2\cdot2x^6y^3}{8x^3y^5}=\dfrac{8x^8y^5}{8x^3y^5}=x^5$` },
    { n: '2.1', context: r`Simplify and express your answer with positive indices.`, q: r`$(a^{-3}b^2)^3\cdot(a^2b^4)^{-1}$`, a: r`$a^{-9}b^6\cdot a^{-2}b^{-4}=a^{-11}b^2=\dfrac{b^2}{a^{11}}$` },
    { n: '2.2', context: r`Same.`, q: r`$2(x^2y^{-1})\cdot(3xy^4)^3$`, a: r`$2x^2y^{-1}\cdot27x^3y^{12}=54x^5y^{11}$` },
    { n: '2.3', context: r`Same.`, q: r`$\dfrac{(3rs^2)^4}{r^3s^4}\cdot\dfrac{(2r^2s)^2}{s^7}$`, a: r`$\dfrac{81r^4s^8}{r^3s^4}\cdot\dfrac{4r^4s^2}{s^7}=81rs^4\cdot4r^4s^{-5}=\dfrac{324r^5}{s}$` },
    { n: '2.4', context: r`Same.`, q: r`$\dfrac{4(x^{-2}y^4)^2}{x^2y^{-3}}\cdot\dfrac{xy^6}{2x^{-2}y}$`, a: r`$\dfrac{4x^{-4}y^8}{x^2y^{-3}}\cdot\dfrac{xy^6}{2x^{-2}y}=4x^{-6}y^{11}\cdot\dfrac12x^3y^5=\dfrac{2y^{16}}{x^3}$` },
    { n: '2.5', context: r`Same.`, q: r`$\left(\dfrac{a^2b^3}{b^{-2}}\right)^2\div\left(\dfrac{ab^4}{a^2}\right)^2$`, a: r`$(a^2b^5)^2\div(a^{-1}b^4)^2=a^4b^{10}\div a^{-2}b^8=a^6b^2$` },
  ]),

  h2('Task 2'),
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1.1', context: r`Use exponential laws to simplify the following expressions. (No calculator)`, q: r`$\dfrac{x^{\frac13}\cdot x^{\frac14}}{x^{\frac16}}$`, a: r`$x^{\frac13+\frac14-\frac16}=x^{\frac{4+3-2}{12}}=x^{\frac5{12}}$` },
    { n: '1.2', context: r`Same.`, q: r`$\left(\dfrac{27}{125}\right)^{\frac23}$`, a: r`$\left(\dfrac{3^3}{5^3}\right)^{\frac23}=\dfrac{3^2}{5^2}=\dfrac9{25}$` },
    { n: '1.3', context: r`Same.`, q: r`$2^3\cdot8^4\cdot16$`, a: r`$2^3\cdot2^{12}\cdot2^4=2^{19}$` },
    { n: '1.4', context: r`Same.`, q: r`$9^3\cdot81^{-4}\cdot27^2$`, a: r`$3^6\cdot3^{-16}\cdot3^6=3^{-4}=\dfrac1{81}$` },
    { n: '1.5', context: r`Same.`, q: r`$25^5\cdot125^{-3}$`, a: r`$5^{10}\cdot5^{-9}=5$` },
    { n: '1.6', context: r`Same.`, q: r`$1024^2\cdot512^{\frac13}\cdot2^{-15}$`, a: r`$2^{20}\cdot2^3\cdot2^{-15}=2^8=256$` },
    { n: '2.1', context: r`Simplify and express your answer with positive exponents.`, q: r`$\dfrac{8\cdot x^{7a}\cdot y^{-7b}}{x^{6a}\cdot(2y^4)^{2b}}$`, a: r`$\dfrac{2^3\,x^{7a}\,y^{-7b}}{x^{6a}\,2^{2b}\,y^{8b}}=2^{3-2b}\,x^{a}\,y^{-15b}=\dfrac{2^{3-2b}\,x^a}{y^{15b}}$` },
    { n: '2.2', context: r`Same.`, q: r`$3^2y^2z\div xy^2z^3$`, a: r`$\dfrac{9y^2z}{xy^2z^3}=\dfrac{9}{xz^2}$` },
    { n: '2.3', context: r`Same.`, q: r`$\left(\dfrac ab\right)^{x+y}\cdot\left(\dfrac ba\right)^{y-x}$`, a: r`$\left(\dfrac ab\right)^{x+y}\cdot\left(\dfrac ab\right)^{x-y}=\left(\dfrac ab\right)^{2x}=\dfrac{a^{2x}}{b^{2x}}$` },
    { n: '2.4', context: r`Same.`, q: r`$(a^2)^3\div\left(\dfrac1{a^2}\right)$`, a: r`$a^6\div a^{-2}=a^8$` },
    { n: '2.5', context: r`Same.`, q: r`$\dfrac{2^3a^{\frac34}\cdot a^{\frac14}\cdot2b^{\frac12}}{4b^{\frac12}}$`, a: r`$\dfrac{2^4\,a^{1}\,b^{\frac12}}{2^2\,b^{\frac12}}=2^2a=4a$` },
  ]),

  h2('Task 3'),
  ALG_ANSWERS_NOTE,
  note(r`Most exponents on this page are printed too small to read with certainty, so only question 1.1 is included. Questions 1.2–1.7 and 2.1–2.6 are not transcribed rather than guessed.`),
  qs([
    { n: '1.1', context: r`Use exponential rules to simplify the following expressions.`, q: r`$3^{-1}+4^{-1}$`, a: r`$\dfrac13+\dfrac14=\dfrac7{12}$` },
  ]),
]);

export const SCI_NOTATION = lesson('alg-u2-b-scientific', 'B. Scientific Notation', 15, [
  h2('Scientific notation'),
  p(r`Scientific notation is a convenient way to express very large or very small numbers in a short way. Scientific notation requires $1$ significant digit in front of the comma (left side of the comma).`),
  h3('Examples'),
  solution([
    r`0{,}00318=3{,}18\cdot10^{-3}`,
    ['(the comma is moved $9$ places)', r`1\,340\,000\,000=1{,}34\cdot10^{9}`],
    r`1{,}25\cdot10^4=12\,500`,
    r`5{,}068\cdot10^{-6}=0{,}000005068`,
    r`2\cdot10^4\cdot9{,}1\cdot10^{-8}=18{,}2\cdot10^{-4}=1{,}82\cdot10^{-3}`,
    ['(write both terms with the same power)', r`1{,}05\cdot10^{-2}+3{,}8\cdot10^{-3}=1{,}05\cdot10^{-2}+0{,}38\cdot10^{-2}`],
    r`=(1{,}05+0{,}38)\cdot10^{-2}=1{,}43\cdot10^{-2}`,
  ]),

  h2('Task 4'),
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1.1', context: r`Write these as ordinary numbers.`, q: r`$8{,}515\cdot10^4$`, a: r`$85\,150$` },
    { n: '1.2', context: r`Same.`, q: r`$6{,}12\cdot10^{-5}$`, a: r`$0{,}0000612$` },
    { n: '1.3', context: r`Same.`, q: r`$7{,}632\cdot10^{-2}$`, a: r`$0{,}07632$` },
    { n: '1.4', context: r`Same.`, q: r`$0{,}0012\cdot10^7$`, a: r`$12\,000$` },
    { n: '1.5', context: r`Same.`, q: r`$90500\cdot10^{-7}$`, a: r`$0{,}00905$` },
    { n: '2.1', context: r`Write these in scientific notation.`, q: r`$3\,728\,935$`, a: r`$3{,}728935\cdot10^6$ (about $3{,}73\cdot10^6$)` },
    { n: '2.2', context: r`Same.`, q: r`$173{,}529$`, a: r`$1{,}73529\cdot10^2$` },
    { n: '2.3', context: r`Same.`, q: r`$0{,}000\,0605$`, a: r`$6{,}05\cdot10^{-5}$` },
    { n: '2.4', context: r`Same.`, q: r`$0{,}007\,832$`, a: r`$7{,}832\cdot10^{-3}$` },
    { n: '2.5', context: r`Same.`, q: r`$87\,500\,000$`, a: r`$8{,}75\cdot10^7$` },
    { n: '2.6', context: r`Same.`, q: r`$0{,}006$`, a: r`$6\cdot10^{-3}$` },
    { n: '2.7', context: r`Same.`, q: r`$345\,000\,000$`, a: r`$3{,}45\cdot10^8$` },
    { n: '2.8', context: r`Same.`, q: r`$158{,}0023$`, a: r`$1{,}580023\cdot10^2$` },
    { n: '3.1', context: r`Simplify without using a calculator.`, q: r`$3{,}6\cdot10^3\cdot2\cdot10^4$`, a: r`$7{,}2\cdot10^7$` },
    { n: '3.2', context: r`Same.`, q: r`$2{,}34\cdot10^{-12}\cdot5\cdot10^7$`, a: r`$11{,}7\cdot10^{-5}=1{,}17\cdot10^{-4}$` },
    { n: '3.3', context: r`Same.`, q: r`$7{,}23\cdot10^{-2}+6{,}9\cdot10^{-2}$`, a: r`$14{,}13\cdot10^{-2}=1{,}413\cdot10^{-1}$` },
    { n: '3.4', context: r`Same.`, q: r`$4{,}2\cdot10^{-4}+51\cdot10^{-5}$`, a: r`$4{,}2\cdot10^{-4}+5{,}1\cdot10^{-4}=9{,}3\cdot10^{-4}$` },
  ]),
]);

export const ALG_EXP_1_LESSONS: Lesson[] = [EXP_LAWS, SCI_NOTATION];
