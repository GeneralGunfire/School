import type { Lesson } from '../../lib/types';
import { r, h2, h3, p, note, formula, solution, qs, lesson as make, ALG_ANSWERS_NOTE } from './algKit';

/**
 * Unit 4: Factorisation, B (sum and difference of two cubes), Tasks 2 and 3, and the start of C
 * (trinomials, type 1). Book pp. 74–78; photos 23–24 of the Math-Algebra folder. The cubes page
 * is blurred in the photo; the working is read from it and re-derived. The page that carries the
 * header of the second set of practice questions is cut off, so it is labelled Task 3 here.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-algebra-factorisation', id, title, minutes, blocks);

export const CUBES_AND_TASKS = lesson('alg-u4-b-cubes-tasks', 'B. Cubes, and Tasks 2 and 3', 45, [
  h2('4. By sum or difference of two cubes'),
  formula('Sum of cubes', r`a^3+b^3=(a+b)(a^2-ab+b^2)`),
  formula('Difference of cubes', r`a^3-b^3=(a-b)(a^2+ab+b^2)`),
  h3('Question 9'),
  p(r`Factorise: $8x^3+27$ and $m^3-64n^3$`),
  solution([
    ['The cube roots are $2x$ and $3$.', r`8x^3+27=(2x+3)\left((2x)^2-2x\cdot3+3^2\right)`],
    r`=(2x+3)(4x^2-6x+9)`,
  ], 'Solution 1'),
  solution([
    ['The cube roots are $m$ and $4n$.', r`m^3-64n^3=(m-4n)\left(m^2+m\cdot4n+(4n)^2\right)`],
    r`=(m-4n)(m^2+4mn+16n^2)`,
  ], 'Solution 2'),
  note(r`The book prints the first expression as “$6x^3+27$” in the blurred question line but works it as $8x^3+27$ ($2x$ cubed is $8x^3$), which is what is solved here.`),

  h2('Task 2'),
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1', context: r`Factorise the following expressions. 1) Common factor:`, q: r`$16m-4$`, a: r`$4(4m-1)$` },
    { n: '2', context: r`Same.`, q: r`$48x^4-15x^3$`, a: r`$3x^3(16x-5)$` },
    { n: '3', context: r`Same.`, q: r`$5a^2b^2c-20ab^2c-30abc$`, a: r`$5abc(ab-4b-6)$` },
    { n: '4', context: r`Same.`, q: r`$3ab(p-q)-12a(q-p)$`, a: r`$3ab(p-q)+12a(p-q)=3a(p-q)(b+4)$` },
    { n: '5', context: r`Same.`, q: r`$12w^3v^2-14w^2v^3+16w^4v$`, a: r`$2w^2v(6wv-7v^2+8w^2)$` },
    { n: '6', context: r`Same.`, q: r`$5x(p-q)-9y(q-p)+(p-q)$`, a: r`$5x(p-q)+9y(p-q)+(p-q)=(p-q)(5x+9y+1)$` },
    { n: '7', context: r`Same.`, q: r`$14x^2(x-y)-21x(x-y)^2$`, a: r`$7x(x-y)\left[2x-3(x-y)\right]=7x(x-y)(-x+3y)=-7x(x-y)(x-3y)$` },
    { n: '8', context: r`Same.`, q: r`$-3x+15y$`, a: r`$-3(x-5y)$` },
    { n: '9', context: r`Same.`, q: r`$-6ax^3+4cx^2-2dx$`, a: r`$-2x(3ax^2-2cx+d)$` },
    { n: '10', context: r`Same.`, q: r`$a(x-4)-c(x-4)$`, a: r`$(x-4)(a-c)$` },
    { n: '11', context: r`Same.`, q: r`$7a(2x-3y)-(2x-3y)$`, a: r`$(2x-3y)(7a-1)$` },
    { n: '12', context: r`Same.`, q: r`$2m(x-y)-3n(y-x)+(x-y)$`, a: r`$(x-y)(2m+3n+1)$` },
    { n: '13', context: r`Same.`, q: r`$36x^{2002}-24x^{2003}-72x^{2001}$`, a: r`$12x^{2001}(3x-2x^2-6)=-12x^{2001}(2x^2-3x+6)$` },
    { n: '14', context: r`2) Grouping:`, q: r`$xy+2x-y-2$`, a: r`$x(y+2)-(y+2)=(y+2)(x-1)$` },
    { n: '15', context: r`Same.`, q: r`$x^2+yz+xy+xz$`, a: r`$(x^2+xy)+(xz+yz)=x(x+y)+z(x+y)=(x+y)(x+z)$` },
    { n: '16', context: r`Same.`, q: r`$by-cy-b+c$`, a: r`$y(b-c)-(b-c)=(b-c)(y-1)$` },
    { n: '17', context: r`Same.`, q: r`$xk+yk-xm-ym$`, a: r`$k(x+y)-m(x+y)=(x+y)(k-m)$` },
    { n: '18', context: r`Same.`, q: r`$x^3+x^2+4x+4$`, a: r`$x^2(x+1)+4(x+1)=(x+1)(x^2+4)$` },
  ]),

  h2('Task 3'),
  ALG_ANSWERS_NOTE,
  qs([
    { n: '1', context: r`Factorise the following expressions. Grouping:`, q: r`$x^2-x(y-5)-5y$`, a: r`$x^2-xy+5x-5y=x(x-y)+5(x-y)=(x-y)(x+5)$` },
    { n: '2', context: r`Same.`, q: r`$a^3-2a^2-ab+ac-2c+2b$`, a: r`$a^2(a-2)-b(a-2)+c(a-2)=(a-2)(a^2-b+c)$` },
    { n: '3', context: r`Same.`, q: r`$2x^3-3x^2-6x+9$`, a: r`$x^2(2x-3)-3(2x-3)=(2x-3)(x^2-3)$` },
    { n: '4', context: r`Differences of two squares:`, q: r`$16x^2-25$`, a: r`$(4x+5)(4x-5)$` },
    { n: '5', context: r`Same.`, q: r`$x^8-256$`, a: r`$(x^4+16)(x^4-16)=(x^4+16)(x^2+4)(x+2)(x-2)$` },
    { n: '6', context: r`Same.`, q: r`$25m^2n^2-49p^{36}r^{100}$`, a: r`$(5mn+7p^{18}r^{50})(5mn-7p^{18}r^{50})$` },
    { n: '7', context: r`Same.`, q: r`$-4x^2+9$`, a: r`$9-4x^2=(3+2x)(3-2x)$` },
    { n: '8', context: r`Same.`, q: r`$-5x^2+20$`, a: r`$-5(x^2-4)=-5(x+2)(x-2)$` },
    { n: '9', context: r`Same.`, q: r`$\dfrac49x^2-\dfrac1{25}y^2$`, a: r`$\left(\dfrac23x+\dfrac15y\right)\left(\dfrac23x-\dfrac15y\right)$` },
    { n: '10', context: r`Same.`, q: r`$7k^2-7m^2$`, a: r`$7(k+m)(k-m)$` },
    { n: '11', context: r`Same.`, q: r`$16x^2-4b^2$`, a: r`$4(4x^2-b^2)=4(2x+b)(2x-b)$` },
    { n: '12', context: r`Same.`, q: r`$121x^4y-y$`, a: r`$y(121x^4-1)=y(11x^2+1)(11x^2-1)$` },
    { n: '13', context: r`Same.`, q: r`$81m^7n^3k-100m^{11}nk$`, a: r`$m^7nk(81n^2-100m^4)=m^7nk(9n+10m^2)(9n-10m^2)$` },
    { n: '14', context: r`Same.`, q: r`$(a+b+c)^2-(a-b-c)^2$`, a: r`$\left[(a+b+c)+(a-b-c)\right]\left[(a+b+c)-(a-b-c)\right]=2a\cdot2(b+c)=4a(b+c)$` },
    { n: '15', context: r`Sum or difference of two cubes:`, q: r`$3x^3-24$`, a: r`$3(x^3-8)=3(x-2)(x^2+2x+4)$` },
    { n: '16', context: r`Same.`, q: r`$m^3+27n^3$`, a: r`$(m+3n)(m^2-3mn+9n^2)$` },
    { n: '17', context: r`Same.`, q: r`$8x^6-125y^3$`, a: r`$(2x^2-5y)(4x^4+10x^2y+25y^2)$` },
  ]),
]);

export const TRINOMIALS_1 = lesson('alg-u4-c-trinomials-1', 'C. Factorising Trinomials (Type 1)', 20, [
  h2('Type 1: $x^2+bx+c$'),
  p(r`If the leading coefficient of a polynomial is $1$ (the number in front of $x^2$) it is very easy to factorise that trinomial.`),
  p(r`To factorise $x^2+bx+c$: identify $m$ and $n$, two factors of $c$ which add up to $b$, i.e. $c=m\cdot n$ and $b=m+n$. Write the trinomial in the form:`),
  formula('Type-1 trinomial', r`x^2+bx+c=(x+m)(x+n)`),
  h3('Question 1'),
  p(r`Factorise: $x^2+5x+4$`),
  solution([
    ['We have to look for two factors of $+4$ which give the sum $5$. Possible factors of $+4$ are:', ''],
    r`+1\times(+4)=4:\;\text{the sum}=1+4=5`,
    r`-1\times(-4)=4:\;\text{the sum}=-1-4=-5`,
    r`+2\times(+2)=4:\;\text{the sum}=2+2=4`,
    r`\therefore\;x^2+5x+4=(x+4)(x+1)`,
  ]),
  h3('Question 2'),
  p(r`Factorise: $x^2-5x-6$`),
  solution([
    ['We have to look for two factors of $-6$ which give the sum $-5$. Possible factors of $-6$ are:', ''],
    r`+2\times(-3)=-6:\;\text{the sum}=2-3=-1`,
    r`-2\times(+3)=-6:\;\text{the sum}=-2+3=1`,
    r`+1\times(-6)=-6:\;\text{the sum}=1-6=-5`,
    r`-1\times(+6)=-6:\;\text{the sum}=-1+6=5`,
    r`\therefore\;x^2-5x-6=(x+1)(x-6)`,
  ]),
]);

export const ALG_FACTORISATION_3_LESSONS: Lesson[] = [CUBES_AND_TASKS, TRINOMIALS_1];
