import type { Figure, Lesson } from '../../lib/types';
import { r, note, fig, qs, lesson as make } from './algKit';

/**
 * Unit 6: Functions, E. Mixed functions: worked Question 5. Book p. 157 (photo 58, right page).
 * The left page of photo 58 is a blurred see-through of the previous page and is not transcribed.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('math-functions-mixed', id, title, minutes, blocks);

const q5Fig: Figure = {
  xRange: [-3, 8], yRange: [-17, 22], axes: true, grid: true,
  curves: [{ fn: (x: number) => -2 * x * x + 8 * x + 10 }],
  lines: [{ m: -2, c: -2, color: 'amber' }],
  points: [
    { id: 'E', x: 2, y: 18, label: 'E(2; 18)' },
    { id: 'A', x: 0, y: 18, label: 'A(0; 18)' },
    { id: 'C', x: -1, y: 0, label: 'C(-1; 0)' },
    { id: 'B', x: 5, y: 0, label: 'B(5; 0)' },
    { id: 'R', x: 6, y: -14, label: 'R(6; -14)' },
    { id: 'P', x: 1, y: 16, label: 'P(1; 16)' },
    { id: 'Q', x: 1, y: -4, label: 'Q(1; -4)' },
  ],
  caption: 'f(x) = −2x² + 8x + 10 and g(x) = −2x − 2',
} as Figure;

export const MIXED_EXAMPLES_3 = lesson('alg-u6-e-mixed-examples-3', 'E. Mixed Functions: Worked Question 5', 25, [
  qs([
    { n: '5', context: r`The diagram represents the graphs of $f(x)=-2x^2+8x+10$ and $g(x)=-2x-2$. The point $E$ is the turning point of $f$. $A$ is on the y-axis level with $E$; $B$ and $C$ are the x-intercepts of $f$; $R$ is the other point where $f$ and $g$ meet; $P$ is on $f$ and $Q$ on $g$ directly above and below the point $D$ on the x-axis.`, q: r`5.1.1 Determine the coordinates of $A$.`, a: r`Turning point: $x=\dfrac{-8}{2(-2)}=2$. Substitute: $y=-2(2)^2+8(2)+10=18$. $E(2;18)$. The y-coordinate of $E$ is the same as the y-coordinate of $A$, and $A$ is on the y-axis: $A(0;\,18)$.` },
    { n: '5.1.2', q: r`Determine the coordinates of $B$ and $C$.`, a: r`$B$ and $C$ are the x-intercepts: $0=-2x^2+8x+10$. Divide both sides by $-2$: $0=x^2-4x-5=(x-5)(x+1)$. $x=5$ or $x=-1$. $B(5;\,0)$ and $C(-1;\,0)$.` },
    { n: '5.1.3', q: r`Determine the coordinates of $R$.`, a: r`$R$ is an intersection point, so $f(x)=g(x)$: $-2x^2+8x+10=-2x-2\Rightarrow-2x^2+10x+12=0\Rightarrow x^2-5x-6=0\Rightarrow(x-6)(x+1)=0$. $x=6$ or $x=-1$ ($x=-1$ is point $C$, which lies on both graphs). So $R$ has $x=6$. Substitute into the straight line (easier): $g(6)=-2(6)-2=-14$. $R(6;\,-14)$.` },
    { n: '5.2', q: r`If $OD=1$ unit, calculate the length of $PQ$.`, a: r`$PQ$ is a vertical distance, $y_{top}-y_{bottom}$, at $x=1$. $P$ on the parabola: $f(1)=-2+8+10=16$. $Q$ on the line: $g(1)=-2-2=-4$. $PQ=16-(-4)=20$ units. (Using the formula $f(x)-g(x)=-2x^2+10x+12$ at $x=1$ gives $20$ too.)` },
    { n: '5.3', q: r`What will be the equation of the new parabola if $y=-2x^2+8x+10$ is translated 3 units up?`, a: r`Add $3$: $y=-2x^2+8x+13$.` },
    { n: '5.4', q: r`For which values of $x$ is $f(x)\le g(x)$?`, a: r`Where the parabola is on or below the line: outside the intersection points $x=-1$ and $x=6$. $x\le-1$ or $x\ge6$.` },
  ]),
  fig(q5Fig),
  note(r`The left-hand page of this photo is a blurred see-through of the page behind it, so only Question 5 is taken from this spread.`),
]);

export const ALG_MIXED_4_LESSONS: Lesson[] = [MIXED_EXAMPLES_3];
