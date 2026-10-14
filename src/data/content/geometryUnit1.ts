import type { Lesson } from '../../lib/types';
import { r, h2, h3, p, ul, note, formula, eq, fig, qs, solution, worked, lesson as makeLesson } from './geomKit';

/**
 * Paper 2 — Unit 1: Analytical Geometry.
 *
 * Transcribed from the photographed textbook pages in ../Math-Geometry
 * (photos …832 – …841). Theory, formulae, worked examples and the printed
 * solutions are the book's own. Task questions are the book's; the *answers*
 * to them are worked out here, because the book's answer key (p.190) was not
 * photographed — each task says so.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof makeLesson>[4]) =>
  makeLesson('geom-analytical', id, title, minutes, blocks);

const ANSWERS_NOTE = note(
  r`The answers below are worked out by Scholar from the book's questions. The book's own answer key (Answers to Exercise, p.190) was not in the photos, so check your working against it.`,
);

/* ── A. Distance ─────────────────────────────────────────────────────────── */

const A_DISTANCE = lesson('geom-u1-a-distance', 'A. Distance', 6, [
  h2('Distance between two points'),
  p(r`To find the distance between two points $A(x_1;\,y_1)$ and $B(x_2;\,y_2)$ use:`),
  formula('Distance formula', r`d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}`),
  worked(
    '1',
    r`Find the distance between the given pair of points: $P(-4;\,3)$ and $Q(0;\,0)$.`,
    [
      ['Using the distance formula', r`PQ=\sqrt{(0-(-4))^2+(0-3)^2}`],
      r`=\sqrt{16+9}`,
      r`=5`,
    ],
  ),
  worked(
    '2',
    r`$P(5;\,2)$, $Q(-2;\,-2)$ and $R(1;\,9)$ are given in the Cartesian plane. Determine whether triangle $PQR$ is scalene, isosceles or equilateral.`,
    [
      ['Let’s find the length of each side', r`PR=\sqrt{(5-1)^2+(2-9)^2}=\sqrt{65}`],
      r`QR=\sqrt{(-2-1)^2+(-2-9)^2}=\sqrt{130}`,
      r`PQ=\sqrt{(5+2)^2+(2+2)^2}=\sqrt{65}`,
      ['So the $\\triangle PQR$ is isosceles with', r`PQ=PR`],
    ],
    {
      xRange: [-4, 7],
      yRange: [-4, 11],
      points: [
        { id: 'P', label: 'P(5; 2)', x: 5, y: 2, side: 'e' },
        { id: 'Q', label: 'Q(−2; −2)', x: -2, y: -2, side: 'sw' },
        { id: 'R', label: 'R(1; 9)', x: 1, y: 9, side: 'e' },
      ],
      polygons: [{ ids: ['P', 'Q', 'R'] }],
      segments: [
        { from: 'P', to: 'Q', ticks: 1, color: 'main' },
        { from: 'P', to: 'R', ticks: 1, color: 'main' },
      ],
      caption: 'The two equal sides are marked with matching ticks.',
    },
  ),
  p(r`The book then asks: “Do you think we can say it is a right triangle?”`),
  solution(
    [
      ['Yes. Test Pythagoras on the two equal sides against the longest side', r`PQ^2+PR^2=65+65=130=QR^2`],
      ['By the converse of Pythagoras', r`\angle P=90^\circ`],
    ],
    'Answer',
  ),
]);

/* ── B. Midpoint ─────────────────────────────────────────────────────────── */

const B_MIDPOINT = lesson('geom-u1-b-midpoint', 'B. Midpoint', 6, [
  h2('Midpoint of a line segment'),
  p(r`The coordinates of the mid-point of the line segment joining the points $A(x_1;\,y_1)$ and $B(x_2;\,y_2)$:`),
  formula('Midpoint formula', r`M\left(\dfrac{x_1+x_2}{2};\,\dfrac{y_1+y_2}{2}\right)`),
  worked(
    '3',
    r`Determine the coordinates of the mid-point of the line joining $A(-1;\,-1)$ to $B(-3;\,8)$.`,
    [
      ['Let $M(x;\\,y)$ be the mid-point of $AB$', r`x=\dfrac{x_1+x_2}{2}\qquad\text{and}\qquad y=\dfrac{y_1+y_2}{2}`],
      ['Then', r`x=\dfrac{(-1)+(-3)}{2}=-2\qquad\qquad y=\dfrac{(-1)+(8)}{2}=3{,}5`],
      ['The co-ordinates of $M$ (midpoint) are', r`M(-2;\,3{,}5)`],
    ],
  ),
  worked(
    '4',
    r`$P(-3;\,5)$ is the midpoint of $AB$. The coordinates of $B$ are $(1;\,-3)$. Determine the coordinates of $A$.`,
    [
      ['$P$ is the midpoint and say $A(x;\\,y)$', ''],
      ['Use the midpoint formula for $A(x;\\,y)$ and $B(1;\\,-3)$', r`\left(\dfrac{x+1}{2};\,\dfrac{y-3}{2}\right)=P(-3;\,5)`],
      ['So', r`\dfrac{x+1}{2}=-3\qquad\Rightarrow\qquad x+1=-6\qquad\Rightarrow\qquad x=-7`],
      r`\dfrac{y-3}{2}=5\qquad\Rightarrow\qquad y-3=10\qquad\Rightarrow\qquad y=13`,
      ['Therefore, the coordinates of $A$ are', r`A(-7;\,13)`],
    ],
  ),
  h3('Alternative solution'),
  p(
    r`Try to make a pattern: for $x$: $1,\;-3,\;5$ — if you add the same differences between the numbers you will get $x=-7$ and $y=13$. Going from $B$ to $P$ moves $x$ by $-4$ and $y$ by $+8$; the same step again from $P$ lands on $A$.`,
  ),
  fig({
    xRange: [-9, 3],
    yRange: [-5, 15],
    points: [
      { id: 'A', label: 'A(x; y)', x: -7, y: 13, side: 'e' },
      { id: 'P', label: 'P(−3; 5)', x: -3, y: 5, side: 'e', color: 'green' },
      { id: 'B', label: 'B(1; −3)', x: 1, y: -3, side: 'nw' },
    ],
    segments: [
      { from: 'A', to: 'P', ticks: 1 },
      { from: 'P', to: 'B', ticks: 1 },
    ],
    caption: 'P is the midpoint, so the two halves AP and PB are equal.',
  }),
]);

/* ── C. Gradient ─────────────────────────────────────────────────────────── */

const C_GRADIENT = lesson('geom-u1-c-gradient', 'C. Gradient', 8, [
  h2('Gradient of a line'),
  p(r`In the line equation:`),
  eq(r`y=mx+c`),
  p(r`$m$ is the gradient (slope) and $c$ is the $y$-intercept.`),
  p(r`For example: in $y=5x-2$,  $m=5$ and $c=-2$.`),
  note(
    r`Gradient or slope ($m$) is a number that shows the steepness or pitch of the line from left to right.`,
  ),
  h3('Examples of positive gradients'),
  fig({
    xRange: [-4, 4],
    yRange: [-4, 4],
    lines: [
      { m: 1, c: 0, label: 'm = 1' },
      { m: 3, c: 0, label: 'm = 3' },
      { m: 1 / 3, c: 0, label: 'm = ⅓' },
    ],
    caption: 'Every line that rises from left to right has a positive gradient; the steeper it is, the larger m.',
  }),
  h3('Examples of negative gradients'),
  fig({
    xRange: [-4, 4],
    yRange: [-4, 4],
    lines: [
      { m: -1, c: 0, label: 'm = −1' },
      { m: -3, c: 0, label: 'm = −3' },
      { m: -1 / 3, c: 0, label: 'm = −⅓' },
    ],
    caption: 'Every line that falls from left to right has a negative gradient.',
  }),
  h3('Gradients of horizontal and vertical lines'),
  fig({
    xRange: [-4, 4],
    yRange: [-3, 3],
    lines: [
      { m: 0, c: 1.5, label: 'm = 0', color: 'main' },
      { x: -2, label: 'm is undefined', color: 'alt' },
    ],
    caption: 'A horizontal line does not rise at all (m = 0). A vertical line has no defined gradient.',
  }),
  formula('Gradient between two points', r`m=\dfrac{y_2-y_1}{x_2-x_1}`),
  worked(
    '5',
    r`Find the gradient of the line: $2y-3x=5$`,
    [
      r`2y-3x=5`,
      r`2y=3x+5`,
      r`y=\dfrac{3}{2}x+\dfrac{5}{2}`,
      r`\therefore\; m=\dfrac{3}{2}`,
    ],
  ),
  worked(
    '6',
    r`Find the gradient between the points $(-2;\,4)$ and $(-1;\,2)$.`,
    [
      r`m=\dfrac{y_2-y_1}{x_2-x_1}`,
      r`=\dfrac{2-4}{-1-(-2)}`,
      r`=-2`,
    ],
  ),
]);

/* ── D. Parallel and perpendicular lines ─────────────────────────────────── */

const D_PARALLEL_PERPENDICULAR = lesson('geom-u1-d-parallel-perpendicular', 'D. Parallel and Perpendicular Lines', 10, [
  h2('Parallel and perpendicular lines'),
  formula('Parallel lines', r`m_1=m_2`),
  p(r`Two lines are parallel if they have the same gradient.`),
  formula('Perpendicular lines', r`m_1\cdot m_2=-1`),
  p(r`Two lines are perpendicular if the product of their gradients is $-1$.`),
  fig({
    xRange: [-5, 5],
    yRange: [-5, 5],
    lines: [
      { m: 2, c: 1, color: 'main', label: 'y = 2x + 1' },
      { m: 2, c: -2, color: 'main', label: 'y = 2x − 2' },
    ],
    caption: 'Parallel: both lines have gradient 2, so m₁ = m₂.',
  }),
  fig({
    xRange: [-5, 5],
    yRange: [-5, 5],
    points: [{ id: 'O', x: 0, y: 0, hide: true, label: '' }],
    lines: [
      { m: 2, c: 0, color: 'main', label: 'm₁ = 2' },
      { m: -0.5, c: 0, color: 'alt', label: 'm₂ = −½' },
    ],
    angles: [{ at: 'O', from: 0, to: 90, right: true }],
    caption: 'Perpendicular: m₁ · m₂ = 2 × (−½) = −1.',
  }),
  worked(
    '7',
    r`$N(-5;\,3)$, $M(2;\,1)$, $L(-4;\,-1)$ and $K(3;\,-3)$ are given. Show that $NM\parallel LK$.`,
    [
      ['First, we have to find gradients of the lines.', r`m_{NM}=\dfrac{1-3}{2-(-5)}=\dfrac{-2}{7}=-\dfrac{2}{7}`],
      r`m_{LK}=\dfrac{-3-(-1)}{3-(-4)}=\dfrac{-2}{7}=-\dfrac{2}{7}`,
      ['So', r`m_{NM}=m_{LK}=-\dfrac{2}{7}\;\Rightarrow\;NM\parallel LK`],
      ['Then, just refer to the parallel lines’ rule.', r`m_1=m_2`],
    ],
  ),
  worked(
    '8',
    r`$A(-2;\,0)$, $B(-1;\,3)$, $C(2;\,2)$ and $D(2;\,-3)$ are given. Show that $AC\perp BD$.`,
    [
      ['First, we have to find gradients of the lines.', r`m_{AC}=\dfrac{2-0}{2-(-2)}=\dfrac{1}{2}`],
      r`m_{BD}=\dfrac{-3-3}{2-(-1)}=\dfrac{-6}{3}=-2`,
      ['And', r`m_{AC}\cdot m_{BD}=\dfrac{1}{2}\cdot(-2)=-1`],
      ['Then, just refer to the perpendicular lines’ rule', r`m_1\cdot m_2=-1`],
      ['So', r`AC\perp BD`],
    ],
  ),
  h3('Question 9'),
  p(
    r`If $A(-2;\,3)$, $B(1;\,4)$, $C(-4;\,1)$ and $D(x;\,4)$ then calculate the value of $x$ if: 9.1 $AB\parallel CD$; 9.2 $AC\perp CD$; 9.3 $A$, $C$ and $D$ are collinear points.`,
  ),
  h3('9.1  Find gradients and then equate them:'),
  solution([
    r`m_1=m_2`,
    r`m_{AB}=\dfrac{4-3}{1-(-2)}=\dfrac{1}{3}`,
    r`m_{CD}=\dfrac{4-1}{x-(-4)}=\dfrac{3}{x+4}`,
    ['Then', r`\dfrac{3}{x+4}=\dfrac{1}{3}\;\Rightarrow\;x+4=9\;\Rightarrow\;x=5`],
  ]),
  h3('9.2  Find gradients and then equate them:'),
  solution([
    r`m_1\cdot m_2=-1`,
    r`m_{AC}=\dfrac{1-3}{-4-(-2)}=\dfrac{-2}{-2}=1`,
    r`m_{CD}=\dfrac{4-1}{x-(-4)}=\dfrac{3}{x+4}`,
    ['Then', r`\dfrac{3}{x+4}\cdot1=-1`],
    r`\dfrac{3}{x+4}=\dfrac{1}{-1}\;\Rightarrow\;x+4=-3\;\Rightarrow\;x=-7`,
  ]),
  h3('9.3  Collinear points'),
  p(r`Collinear points are the points on the same straight line. Use gradient to find the value of the unknown.`),
  solution([
    ['So, $m_{AC}=m_{CD}$:', r`\dfrac{3}{x+4}=1`],
    r`x+4=3\;\Rightarrow\;x=-1`,
  ]),

  h2('Task 1'),
  ANSWERS_NOTE,
  qs([
    { n: '1', q: r`Which of the points $A(3;\,5)$ and $B(-4;\,-4)$ is closer to the origin?`, a: r`$OA=\sqrt{3^2+5^2}=\sqrt{34}\approx5{,}83$ and $OB=\sqrt{(-4)^2+(-4)^2}=\sqrt{32}\approx5{,}66$. $OB<OA$, so $B(-4;\,-4)$ is closer to the origin.` },
    { n: '2', q: r`Show that the points $A(3;\,6)$ and $B(-1;\,4)$ are equidistant from $C(2;\,3)$.`, a: r`$CA=\sqrt{(3-2)^2+(6-3)^2}=\sqrt{10}$ and $CB=\sqrt{(-1-2)^2+(4-3)^2}=\sqrt{10}$. $CA=CB$, so $A$ and $B$ are equidistant from $C$.` },
    { n: '3', q: r`A triangle has vertices $A(-4;\,0)$, $B(0;\,3)$ and $C(0;\,-3)$. Show that it is an isosceles triangle.`, a: r`$AB=\sqrt{16+9}=5$, $AC=\sqrt{16+9}=5$ and $BC=6$. Two sides are equal ($AB=AC$), so $\triangle ABC$ is isosceles.` },
    { n: '4.1', context: r`A quadrilateral has vertices $(-1;\,-1)$, $(3;\,1)$, $(1;\,-3)$ and $(-3;\,-5)$.`, q: r`Find the lengths of its sides.`, a: r`Call them $A(-1;\,-1)$, $B(3;\,1)$, $C(1;\,-3)$, $D(-3;\,-5)$. $AB=\sqrt{16+4}=\sqrt{20}$, $BC=\sqrt{4+16}=\sqrt{20}$, $CD=\sqrt{16+4}=\sqrt{20}$, $DA=\sqrt{4+16}=\sqrt{20}$. All four sides are $\sqrt{20}=2\sqrt5$.` },
    { n: '4.2', context: r`A quadrilateral has vertices $(-1;\,-1)$, $(3;\,1)$, $(1;\,-3)$ and $(-3;\,-5)$.`, q: r`What type of quadrilateral is it?`, a: r`All sides are equal, so it is a rhombus. It is not a square: $m_{AB}=\tfrac12$ and $m_{BC}=\tfrac{-4}{-2}=2$, and $\tfrac12\cdot2=1\ne-1$, so the angle at $B$ is not $90^\circ$ (equivalently the diagonals $AC=\sqrt8$ and $BD=\sqrt{72}$ are not equal).` },
    { n: '5', q: r`Given that $A$ is $(-2;\,2)$, $B$ is $(3;\,2)$, $C$ is $(1;\,-2)$ and $D$ is $(-4;\,-2)$, show that the opposite sides of the $ABCD$ are equal.`, a: r`$AB=\sqrt{25+0}=5$ and $DC=\sqrt{(1+4)^2+0}=5$. $BC=\sqrt{(3-1)^2+(2+2)^2}=\sqrt{20}$ and $AD=\sqrt{(-2+4)^2+(2+2)^2}=\sqrt{20}$. So $AB=DC$ and $BC=AD$.` },
    { n: '6', q: r`Prove that a circle can be drawn with centre $O(-2;\,1)$ and passing through three points $A(-5;\,3)$, $B(-4;\,-2)$ and $C(1;\,3)$. (Hint: use the lengths of radii.)`, a: r`$OA=\sqrt{(-5+2)^2+(3-1)^2}=\sqrt{13}$, $OB=\sqrt{(-4+2)^2+(-2-1)^2}=\sqrt{13}$, $OC=\sqrt{(1+2)^2+(3-1)^2}=\sqrt{13}$. All three points are $\sqrt{13}$ from $O$, so they lie on a circle with centre $O$ and radius $\sqrt{13}$.` },
    { n: '7.1', context: r`Find the midpoint $M$ of the line segment joining:`, q: r`$P(-5;\,-3)$ and $Q(-1;\,1)$`, a: r`$M\left(\dfrac{-5-1}{2};\,\dfrac{-3+1}{2}\right)=M(-3;\,-1)$` },
    { n: '7.2', context: r`Find the midpoint $M$ of the line segment joining:`, q: r`$S(3;\,2)$ and $T(-4;\,5)$`, a: r`$M\left(\dfrac{3-4}{2};\,\dfrac{2+5}{2}\right)=M\left(-\tfrac12;\,\tfrac72\right)$` },
    { n: '8.1', context: r`Find the gradient of each equation given below:`, q: r`$y=2x+3$`, a: r`$m=2$` },
    { n: '8.2', context: r`Find the gradient of each equation given below:`, q: r`$y+6x=5$`, a: r`$y=-6x+5$, so $m=-6$` },
    { n: '8.3', context: r`Find the gradient of each equation given below:`, q: r`$x-y-4=0$`, a: r`$y=x-4$, so $m=1$` },
    { n: '9.1', context: r`Find a gradient of a line parallel to $AB$ if:`, q: r`$m_{AB}=\dfrac23$`, a: r`Parallel lines have equal gradients: $m=\dfrac23$.` },
    { n: '9.2', context: r`Find a gradient of a line parallel to $AB$ if:`, q: r`$A(2;\,-3)$ and $B(3;\,1)$`, a: r`$m_{AB}=\dfrac{1-(-3)}{3-2}=4$, so a parallel line has $m=4$.` },
    { n: '10.1', context: r`Find a gradient of a line perpendicular to $AB$ if:`, q: r`$m_{AB}=1$`, a: r`$m=-\dfrac11=-1$` },
    { n: '10.2', context: r`Find a gradient of a line perpendicular to $AB$ if:`, q: r`$m_{AB}=-2$`, a: r`$m=\dfrac12$` },
    { n: '10.3', context: r`Find a gradient of a line perpendicular to $AB$ if:`, q: r`$m_{AB}=\dfrac12$`, a: r`$m=-2$` },
    { n: '10.4', context: r`Find a gradient of a line perpendicular to $AB$ if:`, q: r`$A(1;\,-3)$ and $B(4;\,1)$`, a: r`$m_{AB}=\dfrac{1+3}{4-1}=\dfrac43$, so a perpendicular line has $m=-\dfrac34$.` },
  ]),

  h2('Task 2'),
  ANSWERS_NOTE,
  fig({
    xRange: [-3, 3],
    yRange: [-4, 4],
    points: [
      { id: 'S', label: 'S(−1; 3)', x: -1, y: 3, side: 'nw' },
      { id: 'P', label: 'P(2; 2)', x: 2, y: 2, side: 'ne' },
      { id: 'Q', label: 'Q(2; −3)', x: 2, y: -3, side: 'e' },
      { id: 'R', label: 'R(−2; 0)', x: -2, y: 0, side: 'nw' },
    ],
    polygons: [{ ids: ['P', 'Q', 'R', 'S'] }],
    segments: [
      { from: 'S', to: 'Q', color: 'alt', dashed: true },
      { from: 'P', to: 'R', color: 'alt', dashed: true },
    ],
    caption: 'Figure for question 5 — PQRS with its diagonals SQ and PR.',
  }),
  qs([
    { n: '1.1', context: r`Given $P(x;\,y)$ are the co-ordinates of a point on the coordinate plane 4 units from the origin.`, q: r`Form an algebraic equation using the distance formula.`, a: r`$\sqrt{(x-0)^2+(y-0)^2}=4$, i.e. $\sqrt{x^2+y^2}=4$.` },
    { n: '1.2', context: r`Given $P(x;\,y)$ are the co-ordinates of a point on the coordinate plane 4 units from the origin.`, q: r`Simplify the equation by eliminating the square root sign.`, a: r`Square both sides: $x^2+y^2=16$ (a circle of radius 4 about the origin).` },
    { n: '2.1', context: r`Determine $x$ and $y$ if:`, q: r`$M(-2;\,2)$ is the mid-point of the line segment joining $A(x;\,3)$ and $B(1;\,y)$.`, a: r`$\dfrac{x+1}{2}=-2\Rightarrow x=-5$ and $\dfrac{3+y}{2}=2\Rightarrow y=1$.` },
    { n: '2.2', context: r`Determine $x$ and $y$ if:`, q: r`$M(-4;\,1)$ is the mid-point of the line segment joining $A(4;\,-2)$ and $B(x;\,y)$.`, a: r`$\dfrac{4+x}{2}=-4\Rightarrow x=-12$ and $\dfrac{-2+y}{2}=1\Rightarrow y=4$.` },
    { n: '3', q: r`Show that the $x$-axis bisects the line segment joining $(-6;\,5)$ to $(-2;\,-5)$.`, a: r`Midpoint $=\left(\dfrac{-6-2}{2};\,\dfrac{5-5}{2}\right)=(-4;\,0)$. Its $y$-coordinate is $0$, so the midpoint lies on the $x$-axis: the $x$-axis bisects the segment.` },
    { n: '4.1', context: r`$A(3;\,-4)$ and $B(-5;\,-2)$ are the end points of the diameter of a circle.`, q: r`Find the co-ordinates of the centre of the circle.`, a: r`The centre is the midpoint of the diameter: $\left(\dfrac{3-5}{2};\,\dfrac{-4-2}{2}\right)=(-1;\,-3)$.` },
    { n: '4.2', context: r`$A(3;\,-4)$ and $B(-5;\,-2)$ are the end points of the diameter of a circle.`, q: r`Calculate the radius of the circle. (Leave your answer in surd form.)`, a: r`$AB=\sqrt{(-5-3)^2+(-2+4)^2}=\sqrt{68}=2\sqrt{17}$, so $r=\dfrac{AB}{2}=\sqrt{17}$.` },
    { n: '5.1', context: r`Given $PQRS$ below (figure above).`, q: r`Prove that $SR=SP$.`, a: r`$SR=\sqrt{(-1+2)^2+(3-0)^2}=\sqrt{10}$ and $SP=\sqrt{(-1-2)^2+(3-2)^2}=\sqrt{10}$. So $SR=SP$.` },
    { n: '5.2', context: r`Given $PQRS$ below (figure above).`, q: r`Calculate the midpoint of $SQ$.`, a: r`$\left(\dfrac{-1+2}{2};\,\dfrac{3-3}{2}\right)=\left(\tfrac12;\,0\right)$` },
    { n: '5.3', context: r`Given $PQRS$ below (figure above).`, q: r`Calculate the gradient of $SQ$.`, a: r`$m_{SQ}=\dfrac{-3-3}{2-(-1)}=-2$` },
    { n: '5.4', context: r`Given $PQRS$ below (figure above).`, q: r`Calculate the gradient of $PR$.`, a: r`$m_{PR}=\dfrac{0-2}{-2-2}=\dfrac12$` },
    { n: '5.5', context: r`Given $PQRS$ below (figure above).`, q: r`What property do the diagonals of a kite have?`, a: r`The diagonals of a kite are perpendicular to each other.` },
    { n: '5.6', context: r`Given $PQRS$ below (figure above).`, q: r`Now, prove the statement made in 5.5.`, a: r`$m_{SQ}\cdot m_{PR}=-2\cdot\dfrac12=-1$, so $SQ\perp PR$. (Also $SR=SP=\sqrt{10}$ and $QR=QP=5$, so $PQRS$ is indeed a kite.)` },
  ]),
]);

/* ── E. Parallelogram ────────────────────────────────────────────────────── */

const E_PARALLELOGRAM = lesson('geom-u1-e-parallelogram', 'E. Parallelogram', 8, [
  h2('Proving a parallelogram'),
  p(r`There are four different ways to prove that $ABCD$ is a parallelogram:`),
  fig({
    xRange: [-0.5, 9.5],
    yRange: [-3, 3],
    axes: false,
    points: [
      { id: 'A', x: 0, y: 0, side: 'w', color: 'main' },
      { id: 'B', x: 3, y: -2, side: 's', color: 'main' },
      { id: 'C', x: 9, y: 0, side: 'e', color: 'main' },
      { id: 'D', x: 6, y: 2, side: 'n', color: 'main' },
      { id: 'M', x: 4.5, y: 0, side: 'ne', color: 'green' },
    ],
    polygons: [{ ids: ['A', 'B', 'C', 'D'] }],
    segments: [
      { from: 'A', to: 'C', color: 'alt', dashed: true },
      { from: 'B', to: 'D', color: 'alt', dashed: true },
    ],
  }),
  ul([
    r`i) The opposite sides are parallel, which means their gradients are equal: $m_{AB}=m_{CD}$ and $m_{AD}=m_{BC}$`,
    r`ii) The opposite sides are equal, which means their lengths are equal: $AB=CD$ and $AD=BC$`,
    r`iii) The diagonals bisect one another, which means the opposite vertices have the same midpoint: find the midpoints of $AC$ and $BD$`,
    r`iv) One of the pairs of opposite sides are parallel and their lengths are equal: $m_{AB}=m_{CD}$ and $AB=CD$`,
  ]),
  note(r`To be able to complete our solution any one of these four conditions, or whichever is the easiest, must be shown.`),
  h3('Example'),
  p(r`Let’s say $A(-3;\,2)$, $B(-5;\,-2)$, $C(1;\,0)$ and $D(3;\,4)$. Show that $ABCD$ is a parallelogram. Here we show sample solutions for i) and iii). The others can be done just for fun.`),
  solution(
    [
      ['Condition i): opposite sides parallel', r`m_{AB}=\dfrac{-2-2}{-5+3}=2\qquad m_{CD}=\dfrac{4-0}{3-1}=2`],
      r`m_{AD}=\dfrac{4-2}{3+3}=\dfrac13\qquad m_{BC}=\dfrac{0+2}{1+5}=\dfrac13`,
      ['Therefore', r`AB\parallel CD\text{ and }AD\parallel BC`],
    ],
    'Solution i)',
  ),
  solution(
    [
      ['Condition iii): diagonals bisect each other', r`M_{AC}=\left(\dfrac{-3+1}{2};\,\dfrac{2+0}{2}\right)=(-1;\,1)`],
      r`M_{BD}=\left(\dfrac{-5+3}{2};\,\dfrac{-2+4}{2}\right)=(-1;\,1)`,
      ['Both diagonals have the same midpoint, therefore', r`ABCD\text{ is a parallelogram.}`],
    ],
    'Solution iii)',
  ),
  worked(
    '1',
    r`$ABCD$ is a parallelogram with $A(2;\,3)$, $B(7;\,-5)$ and $C(3;\,-11)$. Find the co-ordinates of $D$.`,
    [
      ['Let’s say $D(x;\\,y)$. Using the fact that diagonals bisect each other is the easiest way. (The midpoint of $AC$ is the midpoint of $BD$.)', ''],
      ['Midpoint of $AC$', r`M_{AC}=\left(\dfrac{2+3}{2};\,\dfrac{3-11}{2}\right)=(2{,}5;\,-4)`],
      ['Midpoint of $BD$', r`M_{BD}=\left(\dfrac{7+x}{2};\,\dfrac{-5+y}{2}\right)`],
      ['Then', r`\dfrac{7+x}{2}=2{,}5\;\Rightarrow\;7+x=5\;\Rightarrow\;x=-2`],
      r`\dfrac{-5+y}{2}=-4\;\Rightarrow\;-5+y=-8\;\Rightarrow\;y=-3`,
      ['Therefore', r`D(-2;\,-3)`],
    ],
    {
      xRange: [-4, 9],
      yRange: [-13, 5],
      points: [
        { id: 'A', label: 'A(2; 3)', x: 2, y: 3, side: 'ne' },
        { id: 'B', label: 'B(7; −5)', x: 7, y: -5, side: 'e' },
        { id: 'C', label: 'C(3; −11)', x: 3, y: -11, side: 'se' },
        { id: 'D', label: 'D(−2; −3)', x: -2, y: -3, side: 'w', color: 'green' },
        { id: 'M', label: 'M(2,5; −4)', x: 2.5, y: -4, side: 'nw', color: 'green' },
      ],
      polygons: [{ ids: ['A', 'B', 'C', 'D'] }],
      segments: [
        { from: 'A', to: 'C', color: 'alt', dashed: true },
        { from: 'B', to: 'D', color: 'alt', dashed: true },
      ],
      caption: 'The diagonals AC and BD meet at their common midpoint M.',
    },
  ),
]);

/* ── F. Rectangle, rhombus and square ────────────────────────────────────── */

const F_SPECIAL_QUADS = lesson('geom-u1-f-special-quadrilaterals', 'F. Rectangle, Rhombus and Square', 10, [
  h2('1. Rectangle'),
  p(r`A rectangle is a parallelogram with all interior angles $90^\circ$. The ways to show that a quadrilateral is a rectangle:`),
  fig({
    xRange: [-1, 8],
    yRange: [-1, 5],
    axes: false,
    points: [
      { id: 'A', x: 0, y: 0, side: 'sw', color: 'main' },
      { id: 'B', x: 7, y: 0, side: 'se', color: 'main' },
      { id: 'C', x: 7, y: 4, side: 'ne', color: 'main' },
      { id: 'D', x: 0, y: 4, side: 'nw', color: 'main' },
      { id: 'M', x: 3.5, y: 2, side: 'n', color: 'green' },
    ],
    polygons: [{ ids: ['A', 'B', 'C', 'D'] }],
    segments: [
      { from: 'A', to: 'C', color: 'alt', dashed: true },
      { from: 'B', to: 'D', color: 'alt', dashed: true },
    ],
    angles: [{ at: 'B', from: 'A', to: 'C', right: true }],
  }),
  ul([
    r`i) Prove that it is a parallelogram and it has one right angle using gradients of sides: $m_1\cdot m_2=-1$`,
    r`ii) (Rare) Show that $AM=BM=CM=DM$`,
  ]),
  worked(
    '2',
    r`Show that quadrilateral $PQRS$ with vertices $P(6;\,2)$, $Q(3;\,5)$, $R(-3;\,-1)$ and $S(0;\,-4)$ is a rectangle.`,
    [
      ['First it must be a parallelogram.', ''],
      ['Midpoint of $PR$ is', r`\left(\dfrac{6-3}{2};\,\dfrac{2-1}{2}\right)=\left(\dfrac32;\,\dfrac12\right)`],
      ['Midpoint of $QS$ is', r`\left(\dfrac{3+0}{2};\,\dfrac{5-4}{2}\right)=\left(\dfrac32;\,\dfrac12\right)`],
      ['So midpoint is common and $\\therefore$ $PQRS$ is a parallelogram.', ''],
      ['Secondly, we need ONE right angle (if one of the angles is right, then all four are right angles).', ''],
      r`m_{PS}=\dfrac{-4-2}{0-6}=1\qquad m_{RS}=\dfrac{-4+1}{0+3}=-1`,
      ['And', r`m_{PS}\cdot m_{RS}=-1`],
      ['Which means angle $S=90^\\circ$, $\\therefore$ $PQRS$ is a rectangle.', ''],
    ],
    {
      xRange: [-5, 8],
      yRange: [-6, 7],
      points: [
        { id: 'P', label: 'P(6; 2)', x: 6, y: 2, side: 'e' },
        { id: 'Q', label: 'Q(3; 5)', x: 3, y: 5, side: 'ne' },
        { id: 'R', label: 'R(−3; −1)', x: -3, y: -1, side: 'w' },
        { id: 'S', label: 'S(0; −4)', x: 0, y: -4, side: 'sw' },
        { id: 'M', label: 'M', x: 1.5, y: 0.5, side: 'nw', color: 'green' },
      ],
      polygons: [{ ids: ['P', 'Q', 'R', 'S'] }],
      segments: [
        { from: 'P', to: 'R', color: 'alt', dashed: true },
        { from: 'Q', to: 'S', color: 'alt', dashed: true },
      ],
      angles: [{ at: 'S', from: 'P', to: 'R', right: true }],
    },
  ),

  h2('2. Rhombus'),
  p(r`A rhombus is a parallelogram with four equal sides. The ways to show that a quadrilateral is a rhombus:`),
  fig({
    xRange: [-5, 5],
    yRange: [-4, 4],
    axes: false,
    points: [
      { id: 'A', x: -4, y: 0, side: 'w', color: 'main' },
      { id: 'B', x: 0, y: 3, side: 'n', color: 'main' },
      { id: 'C', x: 4, y: 0, side: 'e', color: 'main' },
      { id: 'D', x: 0, y: -3, side: 's', color: 'main' },
      { id: 'M', x: 0, y: 0, side: 'se', color: 'green' },
    ],
    polygons: [{ ids: ['A', 'B', 'C', 'D'] }],
    segments: [
      { from: 'A', to: 'B', ticks: 2, color: 'main' },
      { from: 'B', to: 'C', ticks: 2, color: 'main' },
      { from: 'C', to: 'D', ticks: 2, color: 'main' },
      { from: 'D', to: 'A', ticks: 2, color: 'main' },
      { from: 'A', to: 'C', color: 'alt', dashed: true },
      { from: 'B', to: 'D', color: 'alt', dashed: true },
    ],
    angles: [{ at: 'M', from: 'C', to: 'B', right: true }],
  }),
  ul([
    r`i) Show that all sides are equal in length.`,
    r`ii) Prove that the shape is a parallelogram, and the diagonals are perpendicular using their gradients: $m_1\cdot m_2=-1$`,
  ]),

  h2('3. Square'),
  p(r`A square is defined as having all sides equal, and its interior angles are all right angles.`),
  fig({
    xRange: [-1, 6],
    yRange: [-1, 6],
    axes: false,
    points: [
      { id: 'A', x: 0, y: 0, side: 'sw', color: 'main' },
      { id: 'B', x: 0, y: 5, side: 'nw', color: 'main' },
      { id: 'C', x: 5, y: 5, side: 'ne', color: 'main' },
      { id: 'D', x: 5, y: 0, side: 'se', color: 'main' },
    ],
    polygons: [{ ids: ['A', 'B', 'C', 'D'] }],
    segments: [
      { from: 'A', to: 'B', ticks: 1 },
      { from: 'B', to: 'C', ticks: 1 },
      { from: 'C', to: 'D', ticks: 1 },
      { from: 'D', to: 'A', ticks: 1 },
    ],
    angles: [
      { at: 'A', from: 'D', to: 'B', right: true },
      { at: 'B', from: 'A', to: 'C', right: true },
      { at: 'C', from: 'B', to: 'D', right: true },
      { at: 'D', from: 'C', to: 'A', right: true },
    ],
  }),
  p(r`The way to show that a shape is a square:`),
  note(r`Prove that all sides are equal, and one of the angles is 90 degrees.`),

  h2('4. Kite'),
  p(r`A quadrilateral $ABCD$ is a kite when:`),
  fig({
    xRange: [-4, 4],
    yRange: [-6, 3],
    axes: false,
    points: [
      { id: 'A', x: -3, y: 0, side: 'w', color: 'main' },
      { id: 'B', x: 0, y: 2, side: 'n', color: 'main' },
      { id: 'C', x: 3, y: 0, side: 'e', color: 'main' },
      { id: 'D', x: 0, y: -5, side: 's', color: 'main' },
      { id: 'E', x: 0, y: 0, side: 'ne', color: 'green' },
    ],
    polygons: [{ ids: ['A', 'B', 'C', 'D'] }],
    segments: [
      { from: 'A', to: 'B', ticks: 1 },
      { from: 'B', to: 'C', ticks: 1 },
      { from: 'C', to: 'D', ticks: 2 },
      { from: 'D', to: 'A', ticks: 2 },
      { from: 'A', to: 'C', color: 'alt', dashed: true },
      { from: 'B', to: 'D', color: 'alt', dashed: true },
    ],
    angles: [{ at: 'E', from: 'C', to: 'B', right: true }],
  }),
  ul([
    r`i) $AB=BC$ and $CD=DA$`,
    r`ii) $BD$ is perpendicular to $AC$ ($m_{BD}\cdot m_{AC}=-1$) and $E$ is the midpoint of $A$ and $C$`,
    r`iii) $E$ is the midpoint of $A$ and $C$ and $BD$ is the bisector of angles $\angle B$ and $\angle D$.`,
  ]),
  note(r`NOTE: Rectangle, Rhombus and Square are all special parallelograms, while a Kite is not a parallelogram.`),
]);

/* ── G. Equation of a straight line ──────────────────────────────────────── */

const G_STRAIGHT_LINE = lesson('geom-u1-g-straight-line', 'G. Equation of a Straight Line', 10, [
  h2('Finding the equation of a line'),
  p(r`To find the equation of a straight line $y=mx+c$ we need to know the gradient of the line and at least one point on the line. So we can use one of the following:`),
  ul([
    r`i) Get the gradient.`,
    r`ii) Substitute the gradient and the point into $y=mx+c$ to find $c$`,
    r`iii) Use the formula $y-y_1=m(x-x_1)$`,
  ]),
  formula('Point–gradient formula', r`y-y_1=m(x-x_1)`),
  h3('Note'),
  ul([
    r`Sometimes the $y$-intercept is given (on graph), so don’t waste time to find it.`,
    r`A horizontal line has $m=0$, therefore the line equation is $y=a$`,
    r`The equation of a vertical line is $x=b$`,
  ]),
  worked(
    '1',
    r`Determine the equation of the straight line through $(1;\,2)$ and $(-1;\,4)$.`,
    [
      r`m=\dfrac{4-2}{-1-1}=\dfrac{2}{-2}=-1`,
      ['Use', r`y-y_1=m(x-x_1)`],
      r`y-2=-1(x-1)`,
      r`y=-x+1+2`,
      ['Finally,', r`y=-x+3`],
    ],
    {
      xRange: [-3, 5],
      yRange: [-1, 6],
      points: [
        { id: 'A', label: '(1; 2)', x: 1, y: 2, side: 'ne' },
        { id: 'B', label: '(−1; 4)', x: -1, y: 4, side: 'ne' },
      ],
      lines: [{ m: -1, c: 3, label: 'y = −x + 3' }],
    },
  ),
  worked(
    '2',
    r`Determine the equation of the line perpendicular to the line joining $A(-3;\,-4)$ and $B(2;\,6)$ passing through $C(-5;\,1)$.`,
    [
      r`m_{AB}=\dfrac{6+4}{2+3}=2`,
      ['Gradient of perpendicular line', r`m=-\dfrac12`],
      ['Further,', r`y-y_1=m(x-x_1)`],
      r`y-1=-\dfrac12(x+5)`,
      r`y-1=-\dfrac12x-\dfrac52`,
      r`y=-\dfrac12x-\dfrac32`,
    ],
    {
      xRange: [-8, 4],
      yRange: [-6, 8],
      points: [
        { id: 'A', label: 'A(−3; −4)', x: -3, y: -4, side: 'se' },
        { id: 'B', label: 'B(2; 6)', x: 2, y: 6, side: 'e' },
        { id: 'C', label: 'C(−5; 1)', x: -5, y: 1, side: 'nw', color: 'green' },
      ],
      lines: [
        { m: 2, c: 2, color: 'main', label: 'AB' },
        { m: -0.5, c: -1.5, color: 'green', label: 'perpendicular' },
      ],
    },
  ),

  h2('Task 5'),
  ANSWERS_NOTE,
  note(r`Question 10 is partly hidden by a thumb in the photo, so it is not included.`),
  qs([
    { n: '1', q: r`Find the equation of the line passing through $A(-1;\,-4)$ with a gradient of $-2$.`, a: r`$y+4=-2(x+1)\;\Rightarrow\;y=-2x-6$` },
    { n: '2', q: r`Find the equation of the line $AB$ if $A(6;\,-2)$ and $B(-3;\,1)$.`, a: r`$m=\dfrac{1+2}{-3-6}=-\dfrac13$. $y+2=-\dfrac13(x-6)\;\Rightarrow\;y=-\dfrac13x$` },
    { n: '3', q: r`Find the equation of the line passing through $A(2;\,-4)$ parallel to the line passing through $B(1;\,1)$ and $C(-3;\,-2)$.`, a: r`$m_{BC}=\dfrac{-2-1}{-3-1}=\dfrac34$. $y+4=\dfrac34(x-2)\;\Rightarrow\;y=\dfrac34x-\dfrac{11}{2}$` },
    { n: '4', q: r`Find the equation of the line parallel to $2y+4x=5$ passing through the point $P(-1;\,-6)$.`, a: r`$y=-2x+\dfrac52$, so $m=-2$. $y+6=-2(x+1)\;\Rightarrow\;y=-2x-8$` },
    { n: '5', q: r`Find the equation of the line perpendicular to $4y+x=-8$ through the point $Q(-1;\,-3)$.`, a: r`$y=-\dfrac14x-2$, so $m=-\dfrac14$ and the perpendicular gradient is $4$. $y+3=4(x+1)\;\Rightarrow\;y=4x+1$` },
    { n: '6', q: r`Find the equation of the line perpendicular to the line joining $A(-3;\,-4)$ and $B(2;\,6)$ and passing through $C(5;\,-1)$.`, a: r`$m_{AB}=\dfrac{6+4}{2+3}=2$, so $m=-\dfrac12$. $y+1=-\dfrac12(x-5)\;\Rightarrow\;y=-\dfrac12x+\dfrac32$` },
    { n: '7', q: r`Find the equation of the line parallel to the $x$-axis through the point $(4;\,2)$.`, a: r`A horizontal line through $y=2$: $y=2$.` },
    { n: '8', q: r`Find the equation of the line through the points $(3;\,1)$ and $(3;\,-4)$.`, a: r`Both points have $x=3$, so the line is vertical: $x=3$.` },
    { n: '9', q: r`The points $A(3;\,1)$, $B(1;\,-2)$, $C(2;\,3)$ and $D(5;\,t)$ are points in the Cartesian plane. If $CD\parallel AB$, determine the value of $t$.`, a: r`$m_{AB}=\dfrac{-2-1}{1-3}=\dfrac32$ and $m_{CD}=\dfrac{t-3}{5-2}=\dfrac{t-3}{3}$. Parallel: $\dfrac{t-3}{3}=\dfrac32\;\Rightarrow\;t-3=\dfrac92\;\Rightarrow\;t=\dfrac{15}{2}$` },
  ]),

  h2('Task 6'),
  ANSWERS_NOTE,
  fig({
    xRange: [-6, 5],
    yRange: [-6, 7],
    points: [
      { id: 'T', label: 'T(−4; 5)', x: -4, y: 5, side: 'nw' },
      { id: 'V', label: 'V(a; b)', x: 3, y: 4, side: 'ne' },
      { id: 'B', label: 'B(−1; −4)', x: -1, y: -4, side: 'sw' },
      { id: 'M', label: 'M(1; 0)', x: 1, y: 0, side: 'se', color: 'green' },
    ],
    polygons: [{ ids: ['T', 'V', 'B'] }],
    caption: 'Figure for question 4 — V is drawn at (3; 4), the value proved in 4.1.',
  }),
  qs([
    { n: '1.1', context: r`The equation of line $PQ$ is $y=(3-k)x+12$. Calculate the numerical value of $k$ in each case, if line $PQ$:`, q: r`is parallel to the line $y=4x+7$`, a: r`$3-k=4\;\Rightarrow\;k=-1$` },
    { n: '1.2', context: r`The equation of line $PQ$ is $y=(3-k)x+12$. Calculate the numerical value of $k$ in each case, if line $PQ$:`, q: r`is perpendicular to the line through points $(1;\,3)$ and $(-2;\,4)$`, a: r`$m=\dfrac{4-3}{-2-1}=-\dfrac13$, so the perpendicular gradient is $3$. $3-k=3\;\Rightarrow\;k=0$` },
    { n: '1.3', context: r`The equation of line $PQ$ is $y=(3-k)x+12$. Calculate the numerical value of $k$ in each case, if line $PQ$:`, q: r`passes through the point $(-3;\,4)$`, a: r`$4=(3-k)(-3)+12\;\Rightarrow\;(3-k)(-3)=-8\;\Rightarrow\;3-k=\dfrac83\;\Rightarrow\;k=\dfrac13$` },
    { n: '1.4', context: r`The equation of line $PQ$ is $y=(3-k)x+12$. Calculate the numerical value of $k$ in each case, if line $PQ$:`, q: r`is parallel to the $x$-axis`, a: r`A horizontal line has gradient $0$: $3-k=0\;\Rightarrow\;k=3$` },
    { n: '2.1', context: r`Find the equation of the straight lines`, q: r`Parallel to the line $y+8=0$ and passes through $(2;\,1)$.`, a: r`$y+8=0$ is horizontal ($y=-8$), so the line is $y=1$.` },
    { n: '2.2', context: r`Find the equation of the straight lines`, q: r`Perpendicular to the line $y-2=0$ and passes through $(-1;\,7)$.`, a: r`$y=2$ is horizontal, so the perpendicular is vertical: $x=-1$.` },
    { n: '3.1', context: r`$A(-5;\,-2)$, $B(-1;\,m)$ and $C(-9;\,-6)$ are three points on a Cartesian plane. Calculate $m$ if:`, q: r`$A$, $B$ and $C$ are collinear`, a: r`$m_{AC}=\dfrac{-6+2}{-9+5}=1$ and $m_{AB}=\dfrac{m+2}{-1+5}=\dfrac{m+2}{4}$. Collinear: $\dfrac{m+2}{4}=1\;\Rightarrow\;m=2$` },
    { n: '3.2', context: r`$A(-5;\,-2)$, $B(-1;\,m)$ and $C(-9;\,-6)$ are three points on a Cartesian plane. Calculate $m$ if:`, q: r`$AB\perp AC$`, a: r`$m_{AB}\cdot m_{AC}=-1\;\Rightarrow\;\dfrac{m+2}{4}\cdot1=-1\;\Rightarrow\;m=-6$` },
    { n: '4.1', context: r`In the figure, $T$, $V$ and $B$ are the vertices of triangle $TVB$ with $M(1;\,0)$ the midpoint of $VB$. $T(-4;\,5)$, $V(a;\,b)$, $B(-1;\,-4)$.`, q: r`Prove that $a=3$ and $b=4$`, a: r`$\dfrac{a+(-1)}{2}=1\;\Rightarrow\;a=3$ and $\dfrac{b+(-4)}{2}=0\;\Rightarrow\;b=4$.` },
    { n: '4.2', context: r`In the figure, $T$, $V$ and $B$ are the vertices of triangle $TVB$ with $M(1;\,0)$ the midpoint of $VB$. $T(-4;\,5)$, $V(a;\,b)$, $B(-1;\,-4)$.`, q: r`Calculate the equation of the perpendicular bisector of $VB$ in the form $y=mx+c$`, a: r`$m_{VB}=\dfrac{4+4}{3+1}=2$, so the perpendicular gradient is $-\dfrac12$, through $M(1;\,0)$: $y=-\dfrac12(x-1)=-\dfrac12x+\dfrac12$` },
  ]),
]);

/* ── H. Angle of inclination ─────────────────────────────────────────────── */

const H_INCLINATION = lesson('geom-u1-h-inclination', 'H. Angle of Inclination of a Line', 10, [
  h2('Angle of inclination'),
  p(r`The angle of inclination of a straight line is the angle between the line and the positive (right side of) $x$-axis. (The angle is being measured in anti-clockwise direction.)`),
  p(r`To find this angle we need the concept of gradient and link it directly to trigonometry.`),
  fig({
    xRange: [-1, 7],
    yRange: [-1, 5],
    points: [
      { id: 'B', label: 'B(x; 0)', x: 1, y: 0, side: 'sw' },
      { id: 'F', x: 5, y: 0, hide: true, label: '' },
      { id: 'A', label: 'A(x+k; p)', x: 5, y: 3, side: 'ne' },
    ],
    segments: [
      { from: 'B', to: 'A', color: 'main' },
      { from: 'B', to: 'F', color: 'muted', dashed: true, label: 'k' },
      { from: 'F', to: 'A', color: 'muted', dashed: true, label: 'p' },
    ],
    angles: [
      { at: 'B', from: '+x', to: 'A', label: 'α' },
      { at: 'F', from: 'B', to: 'A', right: true },
    ],
  }),
  p(r`We know that in the right triangle:`),
  eq(r`\tan\alpha=\dfrac{p}{k}`),
  p(r`and the gradient of $AB$ is:`),
  eq(r`m_{AB}=\dfrac{p-0}{x+k-x}=\dfrac{p}{k}`),
  formula('Therefore, in general', r`\tan\alpha=m\qquad\qquad\alpha=\tan^{-1}(m)`),
  worked(
    '1',
    r`Find the angle of inclination of line $AB$ where $A(1;\,4)$ and $B(-3;\,-2)$.`,
    [
      r`m_{AB}=\dfrac{-2-4}{-3-1}=\dfrac32`,
      ['Therefore', r`\alpha=\tan^{-1}\left(\dfrac32\right)=56{,}31^\circ`],
    ],
  ),
  worked(
    '2',
    r`Find the angle of inclination of $PQ$ where $P(-2;\,6)$, $Q(1;\,-4)$.`,
    [
      r`m_{PQ}=\dfrac{-4-6}{1+2}=-\dfrac{10}{3}`,
      ['Using the formula,', r`\alpha=\tan^{-1}\left(-\dfrac{10}{3}\right)=-73{,}30^\circ`],
      ['To get the real angle of inclination we need to add a period of $\\tan$, which is $180^\\circ$.', r`\therefore\;\alpha=-73{,}30^\circ+180^\circ=106{,}70^\circ`],
    ],
  ),
  note(r`Note that when $\tan\alpha<0$, we are working with the negative angle! To get the real angle of inclination we need to add a period of tan, which is $180^\circ$.`),

  h2('Angle between two lines'),
  p(r`To find the angle between two lines, get the angle of inclination for both and subtract them.`),
  worked(
    '1',
    r`Find the angle $\theta$ in the diagram below, where the lines are $y=-\dfrac{2x}{3}+5$ and $y=2x-2$.`,
    [
      ['Let’s find both inclination angles,', r`\alpha_1=\tan^{-1}(2)=63{,}43^\circ`],
      r`\alpha_2=\tan^{-1}\left(-\dfrac23\right)+180^\circ=146{,}31^\circ`,
      ['And finally,', r`\theta=146{,}31^\circ-63{,}43^\circ=82{,}88^\circ`],
    ],
    {
      xRange: [-2, 8],
      yRange: [-3, 7],
      points: [{ id: 'I', label: '', x: 21 / 8, y: 3.25, hide: true }],
      lines: [
        { m: -2 / 3, c: 5, color: 'green', label: 'y = −2x/3 + 5' },
        { m: 2, c: -2, color: 'main', label: 'y = 2x − 2' },
      ],
      angles: [{ at: 'I', from: 63.43, to: 146.31, label: 'θ', radius: 26 }],
      caption: 'θ is the angle between the two lines: the difference of their inclination angles.',
    },
  ),
  note(r`The angle between two lines can be acute as well as obtuse, so if necessary you have to find the one from $180^\circ$ (just like determining the supplementary angle).`),
  worked(
    '2',
    r`Find the equation of the given line, which cuts the $y$-axis at $5$ and has an angle of inclination of $30^\circ$.`,
    [
      ['Because the angle is given,', r`m=\tan(30^\circ)=\dfrac{\sqrt3}{3}`],
      ['And the $y$-intercept is $5$, therefore', r`y=\dfrac{\sqrt3}{3}x+5`],
    ],
    {
      xRange: [-11, 3],
      yRange: [-1, 7],
      points: [
        { id: 'X', label: '', x: -5 * Math.sqrt(3), y: 0, hide: true },
        { id: 'Y', label: '(0; 5)', x: 0, y: 5, side: 'ne' },
      ],
      lines: [{ m: Math.sqrt(3) / 3, c: 5, label: 'y = (√3/3)x + 5' }],
      angles: [{ at: 'X', from: '+x', to: 30, label: '30°', radius: 34 }],
    },
  ),

  h2('Task 7'),
  ANSWERS_NOTE,
  qs([
    { n: '1.1', context: r`Calculate the inclination of $AB$ if`, q: r`$A(-3;\,0)$ and $B(6;\,8)$`, a: r`$m=\dfrac{8-0}{6+3}=\dfrac89$, so $\alpha=\tan^{-1}\left(\dfrac89\right)=41{,}63^\circ$` },
    { n: '1.2', context: r`Calculate the inclination of $AB$ if`, q: r`$A(-4;\,\sqrt2)$ and $B(7;\,1)$`, a: r`$m=\dfrac{1-\sqrt2}{7+4}\approx-0{,}0377$. $\tan^{-1}(m)\approx-2{,}16^\circ$, so add $180^\circ$: $\alpha\approx177{,}84^\circ$` },
    { n: '1.3', context: r`Calculate the inclination of $AB$ if`, q: r`$A(4\sqrt3;\,-1)$ and $B(2;\,\sqrt3)$`, a: r`$m=\dfrac{\sqrt3+1}{2-4\sqrt3}\approx-0{,}554$. $\tan^{-1}(m)\approx-29{,}0^\circ$, so add $180^\circ$: $\alpha\approx151{,}0^\circ$` },
    { n: '1.4', context: r`Calculate the inclination of $AB$ if`, q: r`$A(3;\,4)$ and $B(3;\,-6)$`, a: r`Both points have $x=3$: the line is vertical, the gradient is undefined and $\alpha=90^\circ$.` },
    { n: '1.5', context: r`Calculate the inclination of $AB$ if`, q: r`$A(1;\,-1)$ and $B(6;\,-1)$`, a: r`Both points have $y=-1$: the line is horizontal, $m=0$ and $\alpha=0^\circ$.` },
    { n: '2.1', context: r`Calculate the inclination of the following straight lines`, q: r`$3y+x=4$`, a: r`$y=-\dfrac13x+\dfrac43$, $m=-\dfrac13$. $\tan^{-1}\left(-\tfrac13\right)=-18{,}43^\circ$, add $180^\circ$: $\alpha=161{,}57^\circ$` },
    { n: '2.2', context: r`Calculate the inclination of the following straight lines`, q: r`$2y-x=3$`, a: r`$y=\dfrac12x+\dfrac32$, $m=\dfrac12$, so $\alpha=\tan^{-1}\left(\tfrac12\right)=26{,}57^\circ$` },
    { n: '2.3', context: r`Calculate the inclination of the following straight lines`, q: r`$4x+y=1$`, a: r`$y=-4x+1$, $m=-4$. $\tan^{-1}(-4)=-75{,}96^\circ$, add $180^\circ$: $\alpha=104{,}04^\circ$` },
    { n: '2.4', context: r`Calculate the inclination of the following straight lines`, q: r`$x=\dfrac12y-3$`, a: r`$\dfrac12y=x+3\;\Rightarrow\;y=2x+6$, $m=2$, so $\alpha=\tan^{-1}(2)=63{,}43^\circ$` },
    { n: '3.1', context: r`Find the size of the angles between the following lines`, q: r`$y=-x+4$ and $y=\dfrac12x+3$`, a: r`$\alpha_1=\tan^{-1}(-1)+180^\circ=135^\circ$ and $\alpha_2=\tan^{-1}\left(\tfrac12\right)=26{,}57^\circ$. $\theta=135^\circ-26{,}57^\circ=108{,}43^\circ$` },
    { n: '3.2', context: r`Find the size of the angles between the following lines`, q: r`$y=-3x-4$ and $y=-x$`, a: r`$\alpha_1=\tan^{-1}(-3)+180^\circ=108{,}43^\circ$ and $\alpha_2=135^\circ$. $\theta=135^\circ-108{,}43^\circ=26{,}57^\circ$` },
    { n: '3.3', context: r`Find the size of the angles between the following lines`, q: r`$y=8x$ and $y=2x+3$`, a: r`$\alpha_1=\tan^{-1}(8)=82{,}87^\circ$ and $\alpha_2=\tan^{-1}(2)=63{,}43^\circ$. $\theta=82{,}87^\circ-63{,}43^\circ=19{,}44^\circ$` },
    { n: '4', q: r`Find the magnitude of angle $DEF$ if $D(5;\,-2)$, $E(-3;\,7)$ and $F(2;\,5)$.`, a: r`$m_{EF}=\dfrac{5-7}{2+3}=-\dfrac25$, so $\alpha_{EF}=\tan^{-1}\left(-\tfrac25\right)+180^\circ=158{,}20^\circ$. $m_{ED}=\dfrac{-2-7}{5+3}=-\dfrac98$, so $\alpha_{ED}=\tan^{-1}\left(-\tfrac98\right)+180^\circ=131{,}63^\circ$. $\angle DEF=158{,}20^\circ-131{,}63^\circ=26{,}57^\circ$` },
  ]),
]);

/* ── Worked example + exemplar tasks ─────────────────────────────────────── */

const U1_WORKED_EXAMPLE = lesson('geom-u1-worked-example', 'Worked Example and Exemplar Tasks', 20, [
  h2('Worked Example'),
  p(r`$A(-5;\,-3)$, $B(7;\,2)$ and $C(3;\,9)$ are the vertices of $\triangle ABC$ in the Cartesian plane. $BN\perp CA$ and $M$ is the midpoint of $AC$.`),
  fig({
    xRange: [-7, 9],
    yRange: [-5, 11],
    points: [
      { id: 'A', label: 'A(−5; −3)', x: -5, y: -3, side: 'sw' },
      { id: 'B', label: 'B(7; 2)', x: 7, y: 2, side: 'e' },
      { id: 'C', label: 'C(3; 9)', x: 3, y: 9, side: 'ne' },
      { id: 'M', label: 'M', x: -1, y: 3, side: 'nw', color: 'green' },
      { id: 'N', label: 'N(1; 6)', x: 1, y: 6, side: 'nw', color: 'green' },
    ],
    polygons: [{ ids: ['A', 'B', 'C'] }],
    segments: [{ from: 'B', to: 'N', color: 'alt', dashed: true }],
    angles: [
      { at: 'N', from: 'C', to: 'B', right: true },
      { at: 'A', from: 'B', to: 'C', label: 'θ', radius: 30 },
    ],
  }),
  ul([
    r`1.1 Calculate the length of $AC$. (Leave your answer in surd form.) (3)`,
    r`1.2 Determine the co-ordinates of $M$, the midpoint of $AC$. (2)`,
    r`1.3 Calculate the gradient of $AC$. (2)`,
    r`1.4 Hence, determine the equation of $BN$. (3)`,
    r`1.5 Calculate the area of $\triangle ABC$ if $N$ is the point $(1;\,6)$. (4)`,
    r`1.6 Calculate the measure of $\theta$ correct to 1 decimal place. (4)`,
  ]),
  h3('1.1  Distance'),
  solution([r`AC=\sqrt{(-5-3)^2+(-3-9)^2}`, r`=\sqrt{64+144}`, r`=\sqrt{208}`]),
  h3('1.2  Midpoint'),
  solution([r`\left(\dfrac{-5+3}{2};\,\dfrac{-3+9}{2}\right)`, r`M=(-1;\,3)`]),
  h3('1.3  Gradient'),
  solution([r`m_{AC}=\dfrac{9+3}{3+5}`, r`=\dfrac32`]),
  h3('1.4  Equation of BN'),
  solution([
    ['$AN$ perpendicular to $BN$, therefore', r`m_{BN}=-\dfrac23\quad\text{and equation is}\quad y=-\dfrac23x+c`],
    ['Use point $B(7;\\,2)$ to get $c$.', r`2=-\dfrac23(7)+c`],
    r`2=\dfrac{-14}{3}+c`,
    r`c=\dfrac{20}{3}`,
    ['So finally', r`y=-\dfrac23x+\dfrac{20}{3}`],
  ]),
  h3('1.5  Area of the triangle'),
  solution([
    ['Length of $BN$', r`BN=\sqrt{(7-1)^2+(2-6)^2}=\sqrt{36+16}=\sqrt{52}`],
    ['And', r`\text{Area}=\dfrac12\cdot AC\cdot BN`],
    r`=\dfrac12\sqrt{208}\cdot\sqrt{52}`,
    r`=52\text{ square units}`,
  ]),
  h3('1.6  Inclination angles'),
  p(r`Find the inclination angle for two lines:`),
  solution([
    ['For $AC$,', r`m_{AC}=\dfrac32\;\Rightarrow\;\therefore\alpha=\tan^{-1}\left(\dfrac32\right)=56{,}30^\circ`],
    ['For $AB$,', r`m_{AB}=\dfrac{5}{12}\;\Rightarrow\;\therefore\beta=22{,}61^\circ`],
    ['And angle $CAB$', r`\theta=56{,}30^\circ-22{,}61^\circ=33{,}69^\circ`],
  ]),
  note(r`The book rounds the two inclination angles to $56{,}30^\circ$ and $22{,}61^\circ$. Unrounded they are $56{,}31^\circ$ and $22{,}62^\circ$, which give the same $\theta=33{,}69^\circ$.`),

  h2('Task 9'),
  ANSWERS_NOTE,
  fig({
    xRange: [-9, 5],
    yRange: [-4, 9],
    points: [
      { id: 'A', label: 'A(1; 6)', x: 1, y: 6, side: 'ne' },
      { id: 'B', label: 'B(3; −2)', x: 3, y: -2, side: 'e' },
      { id: 'C', label: 'C(−7; −k)', x: -7, y: 4, side: 'nw' },
    ],
    polygons: [{ ids: ['A', 'B', 'C'] }],
    segments: [
      { from: 'A', to: 'B', ticks: 1, color: 'main' },
      { from: 'A', to: 'C', ticks: 1, color: 'main' },
    ],
    angles: [{ at: 'B', from: '+x', to: 'A', label: 'θ', radius: 28 }],
    caption: 'Figure for question 1 — drawn with k = −4, one of the two values found in 1.4.',
  }),
  fig({
    xRange: [-4, 12],
    yRange: [-2, 10],
    points: [
      { id: 'T', label: 'T', x: 1, y: 7, side: 'nw' },
      { id: 'W', label: 'W', x: 0, y: 5, side: 'nw', color: 'green' },
      { id: 'P', label: 'P', x: 10, y: 0, side: 'ne' },
      { id: 'O', label: '', x: 0, y: 0, hide: true },
    ],
    segments: [{ from: 'W', to: 'P', color: 'alt' }],
    lines: [{ m: 2, c: 5, color: 'main', label: 'y = 2x + 5' }],
    angles: [{ at: 'W', from: 'T', to: 'P', right: true }],
    caption: 'Figure for question 2 — TW is y = 2x + 5, W is on the y-axis and P is on the x-axis.',
  }),
  qs([
    { n: '1.1', context: r`$A(1;\,6)$, $B(3;\,-2)$ and $C(-7;\,-k)$ are three points in a Cartesian plane. $\triangle ABC$ is isosceles with $AB=AC$. Determine:`, q: r`The gradient of $AB$. (2)`, a: r`$m_{AB}=\dfrac{-2-6}{3-1}=-4$` },
    { n: '1.2', context: r`$A(1;\,6)$, $B(3;\,-2)$ and $C(-7;\,-k)$ are three points in a Cartesian plane. $\triangle ABC$ is isosceles with $AB=AC$. Determine:`, q: r`The size of $\theta$, the angle of inclination of $AB$, rounded off to the nearest degree. (2)`, a: r`$\tan\theta=-4\;\Rightarrow\;\theta=-75{,}96^\circ+180^\circ=104{,}04^\circ\approx104^\circ$` },
    { n: '1.3', context: r`$A(1;\,6)$, $B(3;\,-2)$ and $C(-7;\,-k)$ are three points in a Cartesian plane. $\triangle ABC$ is isosceles with $AB=AC$. Determine:`, q: r`The length of $AB$. (Leave the answer in surd form.) (3)`, a: r`$AB=\sqrt{(3-1)^2+(-2-6)^2}=\sqrt{68}=2\sqrt{17}$` },
    { n: '1.4', context: r`$A(1;\,6)$, $B(3;\,-2)$ and $C(-7;\,-k)$ are three points in a Cartesian plane. $\triangle ABC$ is isosceles with $AB=AC$. Determine:`, q: r`The value(s) of $k$ (use $AB=AC$).`, a: r`$AC^2=(-7-1)^2+(-k-6)^2=64+(k+6)^2$ and $AB^2=68$. So $(k+6)^2=4\;\Rightarrow\;k+6=\pm2\;\Rightarrow\;k=-4$ or $k=-8$.` },
    { n: '1.5', context: r`$A(1;\,6)$, $B(3;\,-2)$ and $C(-7;\,-k)$ are three points in a Cartesian plane. $\triangle ABC$ is isosceles with $AB=AC$. Determine:`, q: r`Show that the line joining the midpoints of $AB$ and $BC$ is parallel to line $AC$.`, a: r`Midpoint of $AB$: $(2;\,2)$. Midpoint of $BC$: $\left(-2;\,\dfrac{-2-k}{2}\right)$. Gradient between them: $\dfrac{\frac{-2-k}{2}-2}{-2-2}=\dfrac{k+6}{8}$. $m_{AC}=\dfrac{-k-6}{-7-1}=\dfrac{k+6}{8}$. The gradients are equal, so the lines are parallel.` },
    { n: '2.1', context: r`In the diagram, straight lines $TW$ and $PW$ intersect at $W$. The equation of $TW$ is $y=2x+5$. $W$ lies on the $y$-axis. Point $P$ lies on the $x$-axis. Determine:`, q: r`Give the coordinates of $W$. (1)`, a: r`$W$ is on the $y$-axis, so $x=0$ and $y=2(0)+5=5$: $W(0;\,5)$.` },
    { n: '2.2', context: r`In the diagram, straight lines $TW$ and $PW$ intersect at $W$. The equation of $TW$ is $y=2x+5$. $W$ lies on the $y$-axis. Point $P$ lies on the $x$-axis. Determine:`, q: r`If $TW\perp WP$, determine the equation of straight line $WP$. (4)`, a: r`$m_{WP}=-\dfrac12$ and the $y$-intercept is $5$: $y=-\dfrac12x+5$.` },
    { n: '2.3', context: r`In the diagram, straight lines $TW$ and $PW$ intersect at $W$. The equation of $TW$ is $y=2x+5$. $W$ lies on the $y$-axis. Point $P$ lies on the $x$-axis. Determine:`, q: r`Determine the coordinates of $P$. (2)`, a: r`$P$ is on the $x$-axis, so $y=0$: $0=-\dfrac12x+5\;\Rightarrow\;x=10$. $P(10;\,0)$.` },
    { n: '2.4', context: r`In the diagram, straight lines $TW$ and $PW$ intersect at $W$. The equation of $TW$ is $y=2x+5$. $W$ lies on the $y$-axis. Point $P$ lies on the $x$-axis. Determine:`, q: r`Calculate the area of $\triangle WOP$. (3)`, a: r`$\triangle WOP$ is right-angled at $O$ with $OP=10$ and $OW=5$: $\text{Area}=\dfrac12\cdot10\cdot5=25$ square units.` },
  ]),

  h2('Task 10'),
  ANSWERS_NOTE,
  note(r`The final line of Task 10 question 1 is cut off at the page edge, so its wording is completed from the context (see 1.6).`),
  fig({
    xRange: [-4, 6],
    yRange: [-1, 9],
    points: [
      { id: 'A', label: 'A(4; 3)', x: 4, y: 3, side: 'e' },
      { id: 'B', label: 'B(2; 7)', x: 2, y: 7, side: 'ne' },
      { id: 'C', label: 'C(−2; 5)', x: -2, y: 5, side: 'nw' },
      { id: 'D', label: 'D(0; 1)', x: 0, y: 1, side: 'sw' },
      { id: 'M', label: 'M', x: 1, y: 4, side: 'nw', color: 'green' },
    ],
    polygons: [{ ids: ['A', 'B', 'C', 'D'] }],
    segments: [
      { from: 'A', to: 'C', color: 'alt', dashed: true },
      { from: 'B', to: 'D', color: 'alt', dashed: true },
    ],
    caption: 'Figure for question 1.',
  }),
  fig({
    xRange: [-7, 5],
    yRange: [-11, 8],
    points: [
      { id: 'N', label: 'N(3; 6)', x: 3, y: 6, side: 'e' },
      { id: 'K', label: 'K(−1; −2)', x: -1, y: -2, side: 'e', color: 'green' },
      { id: 'L', label: 'L(x; y)', x: -5, y: -10, side: 'e' },
      { id: 'P', label: 'P', x: -5, y: 0, side: 'nw' },
      { id: 'X', label: '', x: -2, y: 0, hide: true },
    ],
    segments: [
      { from: 'L', to: 'N', color: 'main' },
      { from: 'P', to: 'K', color: 'alt' },
    ],
    angles: [
      { at: 'K', from: 'P', to: 'N', right: true },
      { at: 'X', from: '+x', to: 'N', label: 'θ', radius: 24 },
    ],
    caption: 'Figure for question 2 — L is drawn at (−5; −10), the value found in 2.3.',
  }),
  qs([
    { n: '1.1', context: r`In the diagram, $A(4;\,3)$, $B(2;\,7)$, $C(-2;\,5)$ and $D(0;\,1)$ are four points in a Cartesian plane. Determine:`, q: r`The length of $BD$ (leave the answer in surd form if necessary). (2)`, a: r`$BD=\sqrt{(2-0)^2+(7-1)^2}=\sqrt{40}=2\sqrt{10}$` },
    { n: '1.2', context: r`In the diagram, $A(4;\,3)$, $B(2;\,7)$, $C(-2;\,5)$ and $D(0;\,1)$ are four points in a Cartesian plane. Determine:`, q: r`Show that $CA=BD$. (3)`, a: r`$CA=\sqrt{(4+2)^2+(3-5)^2}=\sqrt{40}=2\sqrt{10}=BD$` },
    { n: '1.3', context: r`In the diagram, $A(4;\,3)$, $B(2;\,7)$, $C(-2;\,5)$ and $D(0;\,1)$ are four points in a Cartesian plane. Determine:`, q: r`Show that the midpoint of $BD$ is $(1;\,4)$. (2)`, a: r`$M_{BD}=\left(\dfrac{2+0}{2};\,\dfrac{7+1}{2}\right)=(1;\,4)$` },
    { n: '1.4', context: r`In the diagram, $A(4;\,3)$, $B(2;\,7)$, $C(-2;\,5)$ and $D(0;\,1)$ are four points in a Cartesian plane. Determine:`, q: r`Prove that $MA$ and $BD$ are perpendicular, where $M(1;\,4)$. (5)`, a: r`$m_{MA}=\dfrac{3-4}{4-1}=-\dfrac13$ and $m_{BD}=\dfrac{1-7}{0-2}=3$. $m_{MA}\cdot m_{BD}=-\dfrac13\cdot3=-1$, so $MA\perp BD$.` },
    { n: '1.5', context: r`In the diagram, $A(4;\,3)$, $B(2;\,7)$, $C(-2;\,5)$ and $D(0;\,1)$ are four points in a Cartesian plane. Determine:`, q: r`Prove that $C$, $M$ and $A$ are collinear. (3)`, a: r`$m_{CM}=\dfrac{4-5}{1+2}=-\dfrac13$ and $m_{MA}=-\dfrac13$. The gradients are equal and $M$ is common, so $C$, $M$ and $A$ lie on one straight line.` },
    { n: '1.6', context: r`In the diagram, $A(4;\,3)$, $B(2;\,7)$, $C(-2;\,5)$ and $D(0;\,1)$ are four points in a Cartesian plane. Determine:`, q: r`State, giving a reason, which type of quadrilateral $ABCD$ is. (3)`, a: r`The diagonals bisect each other ($M$ is the midpoint of both $BD$ and $AC$), are equal ($AC=BD=2\sqrt{10}$) and are perpendicular ($AC\perp BD$). A parallelogram whose diagonals are equal and perpendicular is a square. (Check: every side is $\sqrt{20}$.)` },
    { n: '2.1', context: r`In the diagram, $K(-1;\,-2)$ is the midpoint of $LN$ with $N(3;\,6)$. $PK\perp NL$ with $P$ on the $x$-axis. The angle of inclination of $NL$ is $\theta$. Determine:`, q: r`The gradient of $NK$. (2)`, a: r`$m_{NK}=\dfrac{6+2}{3+1}=2$` },
    { n: '2.2', context: r`In the diagram, $K(-1;\,-2)$ is the midpoint of $LN$ with $N(3;\,6)$. $PK\perp NL$ with $P$ on the $x$-axis. The angle of inclination of $NL$ is $\theta$. Determine:`, q: r`The size of $\theta$. (2)`, a: r`$\tan\theta=2\;\Rightarrow\;\theta=63{,}43^\circ$` },
    { n: '2.3', context: r`In the diagram, $K(-1;\,-2)$ is the midpoint of $LN$ with $N(3;\,6)$. $PK\perp NL$ with $P$ on the $x$-axis. The angle of inclination of $NL$ is $\theta$. Determine:`, q: r`The coordinates of $L$. (4)`, a: r`$K$ is the midpoint of $LN$: $\dfrac{x+3}{2}=-1\Rightarrow x=-5$ and $\dfrac{y+6}{2}=-2\Rightarrow y=-10$. $L(-5;\,-10)$.` },
    { n: '2.4', context: r`In the diagram, $K(-1;\,-2)$ is the midpoint of $LN$ with $N(3;\,6)$. $PK\perp NL$ with $P$ on the $x$-axis. The angle of inclination of $NL$ is $\theta$. Determine:`, q: r`The length of $NK$. (3)`, a: r`$NK=\sqrt{(3+1)^2+(6+2)^2}=\sqrt{80}=4\sqrt5$` },
    { n: '2.5', context: r`In the diagram, $K(-1;\,-2)$ is the midpoint of $LN$ with $N(3;\,6)$. $PK\perp NL$ with $P$ on the $x$-axis. The angle of inclination of $NL$ is $\theta$. Determine:`, q: r`The equation of the straight line parallel to $PK$ and which passes through $N$. (5)`, a: r`$PK\perp NL$, so $m_{PK}=-\dfrac12$. A parallel line through $N(3;\,6)$: $y-6=-\dfrac12(x-3)\;\Rightarrow\;y=-\dfrac12x+\dfrac{15}{2}$` },
  ]),
]);

export const GEOM_UNIT_1_LESSONS: Lesson[] = [
  A_DISTANCE,
  B_MIDPOINT,
  C_GRADIENT,
  D_PARALLEL_PERPENDICULAR,
  E_PARALLELOGRAM,
  F_SPECIAL_QUADS,
  G_STRAIGHT_LINE,
  H_INCLINATION,
  U1_WORKED_EXAMPLE,
];
