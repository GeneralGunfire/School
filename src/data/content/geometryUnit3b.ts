import type { Figure, Lesson, LessonBlock } from '../../lib/types';
import { r, h2, h3, p, ul, note, eq, fig, qs, lesson as make, ANSWERS_NOTE, type B } from './geomKit';

/**
 * Euclidean Geometry, section B (quadrilaterals) and the start of section C (similarity)
 * (book pp. 102–109; photos …872 – …875). Page 102 (Task 1 questions 12–14) is too blurred to read.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('geom-euclidean', id, title, minutes, blocks);

const proof = (rows: [string, string][]): B => ({
  type: 'definitions',
  rows: rows.map(([term, meaning]) => ({ term, meaning })),
} as Omit<LessonBlock, 'id'>);

type Pt = [number, number];
/** A quadrilateral from four points (A, B, C, D in order) with optional diagonals and tick marks. */
const quad = (
  pts: [Pt, Pt, Pt, Pt],
  o: { diagonals?: boolean; sideTicks?: [number, number, number, number]; diagTicks?: [number, number]; rightAt?: 'O'; names?: string; caption?: string } = {},
): Figure => {
  const [A, , C] = pts;
  const xs = pts.map((q) => q[0]);
  const ys = pts.map((q) => q[1]);
  const names = (o.names ?? 'ABCD').split('');
  const t = o.sideTicks ?? [0, 0, 0, 0];
  const O: Pt = [(A[0] + C[0]) / 2, (A[1] + C[1]) / 2];
  const ids = ['A', 'B', 'C', 'D'];
  const sides: ('sw' | 'se' | 'ne' | 'nw')[] = ['sw', 'se', 'ne', 'nw'];
  return {
    xRange: [Math.min(...xs) - 0.7, Math.max(...xs) + 0.7],
    yRange: [Math.min(...ys) - 0.7, Math.max(...ys) + 0.7],
    axes: false,
    points: [
      ...pts.map((q, i) => ({ id: ids[i], label: names[i], x: q[0], y: q[1], side: sides[i], color: 'main' as const })),
      ...(o.diagonals ? [{ id: 'O', label: '', x: O[0], y: O[1], hide: true }] : []),
    ],
    polygons: [{ ids }],
    segments: [
      { from: 'A', to: 'B', ticks: t[0] }, { from: 'B', to: 'C', ticks: t[1] },
      { from: 'C', to: 'D', ticks: t[2] }, { from: 'D', to: 'A', ticks: t[3] },
      ...(o.diagonals
        ? [
            { from: 'A', to: 'C', color: 'alt' as const, dashed: true, ticks: o.diagTicks?.[0] },
            { from: 'B', to: 'D', color: 'alt' as const, dashed: true, ticks: o.diagTicks?.[1] },
          ]
        : []),
    ],
    angles: o.rightAt ? [{ at: 'O', from: 'B', to: 'C', right: true }] : [],
    caption: o.caption,
  };
};

export const B_QUADRILATERALS = lesson('geom-u3-b-quadrilaterals', 'B. Quadrilaterals', 40, [
  h2('Parallelogram'),
  p(r`A parallelogram is a quadrilateral with parallel opposite sides.`),
  fig(quad([[0, 0], [5, 0], [6.5, 3], [1.5, 3]], { diagonals: true, sideTicks: [1, 2, 1, 2], diagTicks: [1, 2], caption: 'Opposite sides parallel and equal; diagonals bisect each other.' })),
  note(r`Properties of a parallelogram: opposite sides are parallel; opposite sides are equal in length; opposite angles have the same size; the diagonals bisect each other.`),
  h3('Question 1'),
  p(r`$ABCD$ is a quadrilateral with $AB\parallel DC$ and $AD\parallel BC$. Show that: (a) $AB=DC$ and $AD=BC$; (b) $\hat A=\hat C$ and $\hat B=\hat D$.`),
  p(r`(a) Draw $AC$ and prove the congruency:`),
  proof([
    ['Â₁ = Ĉ₁', 'alternate angles'],
    ['AC = AC', 'common side'],
    ['Â₂ = Ĉ₂', 'alternate angles'],
    ['∴ △ACB ≡ △CAD', 'ASA rule'],
  ]),
  p(r`It means $AB=CD$ and $AD=CB$.`),
  p(r`(b) Draw $AC$ and prove that congruency: $\hat B=\hat D$. If we say $\hat A_1=x$ and $\hat A_2=y$, then $\hat A=x+y$ and $\hat C=x+y$.`),

  h2('Rectangle'),
  p(r`A rectangle is a parallelogram that has four right interior angles.`),
  fig(quad([[0, 0], [6, 0], [6, 3.6], [0, 3.6]], { diagonals: true, sideTicks: [1, 2, 1, 2], diagTicks: [1, 1] })),
  note(r`Properties of a rectangle: all properties of a parallelogram; the diagonals are equal in length; all interior angles are equal to $90^\circ$.`),
  h3('Question 2'),
  p(r`$PQRS$ is a rectangle. Prove that the diagonals are equal in length.`),
  p(r`We can use all properties of a rectangle except the one we have to prove. Let’s prove $\triangle PRS\equiv\triangle QSR$:`),
  proof([
    ['PS = QR', 'opp sides of rect.'],
    ['Ŝ = R̂ = 90°', 'angles of rect.'],
    ['SR', 'is common'],
    ['∴ △PRS ≡ △QSR', 'SAS rule'],
  ]),
  p(r`Therefore $PR=QS$.`),

  h2('Rhombus'),
  p(r`A rhombus is a parallelogram with four equal sides.`),
  fig(quad([[0, 0], [4.4, 0.6], [5.6, 4.6], [1.2, 4]], { diagonals: true, sideTicks: [2, 2, 2, 2], diagTicks: [1, 1], rightAt: 'O' })),
  note(r`Properties of a rhombus: all properties of a parallelogram; all sides are equal in length; the diagonals bisect each other at $90^\circ$; the diagonals bisect interior angles.`),
  h3('Question 3'),
  p(r`$ABCD$ is a rhombus. Prove that 3.1 the diagonals bisect each other perpendicularly; 3.2 the diagonals bisect the interior angles.`),
  p(r`3.1 Let’s prove that $\triangle ABE\equiv\triangle CBE$ (with $E$ the intersection of the diagonals):`),
  proof([
    ['AB = CB', 'sides of rhombus'],
    ['BE', 'is common'],
    ['AE = CE', 'diagonals bisect'],
    ['∴ △ABE ≡ △CBE', 'SSS rule'],
  ]),
  p(r`Therefore $\hat E_1=\hat E_2=90^\circ$. (Note: you may use another rule.)`),
  p(r`3.2 From the congruency above: $\hat B_1=\hat B_2$. And in the same manner the diagonals bisect angles $A$, $C$ and $D$.`),

  h2('Square'),
  p(r`A square is a rhombus and a rectangle at the same time.`),
  fig(quad([[0, 0], [4, 0], [4, 4], [0, 4]], { diagonals: true, sideTicks: [1, 1, 1, 1], diagTicks: [2, 2], rightAt: 'O' })),
  note(r`Properties of a square: all properties of a rhombus and a rectangle; all sides are equal in length; all interior angles are equal to $90^\circ$; the diagonals bisect the interior angles (i.e. all are $45^\circ$).`),

  h2('Trapezium'),
  p(r`A trapezium is a quadrilateral with one pair of opposite sides parallel.`),
  fig({
    xRange: [-1, 8], yRange: [-0.8, 3.8], axes: false,
    points: [
      { id: 'A', label: 'A', x: 0, y: 0, side: 'sw', color: 'main' }, { id: 'D', label: 'D', x: 7, y: 0, side: 'se', color: 'main' },
      { id: 'C', label: 'C', x: 5.4, y: 3, side: 'ne', color: 'main' }, { id: 'B', label: 'B', x: 1.6, y: 3, side: 'nw', color: 'main' },
    ],
    polygons: [{ ids: ['A', 'D', 'C', 'B'] }],
    segments: [{ from: 'A', to: 'D', arrow: true }, { from: 'B', to: 'C', arrow: true }],
    caption: 'BC ∥ AD (the parallel sides are marked with arrows).',
  }),

  h2('Kite'),
  p(r`A kite is a quadrilateral with two pairs of adjacent sides equal.`),
  fig({
    xRange: [-3.5, 3.5], yRange: [-5.4, 3.4], axes: false,
    points: [
      { id: 'A', label: 'A', x: -2.8, y: 0, side: 'w', color: 'main' }, { id: 'B', label: 'B', x: 0, y: 3, side: 'n', color: 'main' },
      { id: 'C', label: 'C', x: 2.8, y: 0, side: 'e', color: 'main' }, { id: 'D', label: 'D', x: 0, y: -5, side: 's', color: 'main' },
      { id: 'E', label: '', x: 0, y: 0, hide: true },
    ],
    polygons: [{ ids: ['A', 'B', 'C', 'D'] }],
    segments: [
      { from: 'A', to: 'B', ticks: 1 }, { from: 'B', to: 'C', ticks: 1 }, { from: 'C', to: 'D', ticks: 2 }, { from: 'D', to: 'A', ticks: 2 },
      { from: 'A', to: 'C', color: 'alt', dashed: true }, { from: 'B', to: 'D', color: 'alt', dashed: true },
    ],
    angles: [{ at: 'E', from: 'C', to: 'B', right: true }],
  }),
  note(r`Properties of a kite: the diagonals intersect at $90^\circ$; the diagonal between equal sides bisects the other diagonal; one pair of opposite angles are equal (the angles between unequal sides); the diagonal between equal sides bisects the corresponding interior angles and that diagonal is an axis of symmetry.`),

  h2('Task 2'),
  ANSWERS_NOTE,
  note(r`Questions 7–10 are printed small and blurred in the photo, so their statements are read as closely as possible; check them against your book.`),
  qs([
    { n: '1', q: r`Prove that the diagonals of parallelogram $MNRS$ bisect one another at $P$.`, a: r`In $\triangle MPN$ and $\triangle RPS$: $MN=SR$ (opposite sides of a parallelogram); $\hat{NMP}=\hat{SRP}$ (alternate angles, $MN\parallel SR$); $\hat{MNP}=\hat{RSP}$ (alternate angles). So $\triangle MPN\equiv\triangle RPS$ (A.S.A), hence $MP=PR$ and $NP=PS$.` },
    { n: '2.1', context: r`$ABCD$ is a quadrilateral. Diagonals $AC$ and $BD$ intersect at $T$. $AC=BD$, $AT=TC$, $DT=TB$.`, q: r`Prove that $ABCD$ is a parallelogram.`, a: r`In $\triangle ATB$ and $\triangle CTD$: $AT=CT$, $BT=DT$, $\hat{ATB}=\hat{CTD}$ (vertically opposite), so they are congruent (S.A.S) and $AB=DC$. In the same way $\triangle ATD\equiv\triangle CTB$ gives $AD=BC$. Both pairs of opposite sides are equal, so $ABCD$ is a parallelogram. (Equivalently: the diagonals bisect each other.)` },
    { n: '2.2', context: r`Same figure.`, q: r`Prove that $ABCD$ is a rectangle.`, a: r`$ABCD$ is a parallelogram, so $AB=DC$. In $\triangle ABD$ and $\triangle DCA$: $AB=DC$, $AD=DA$ (common), $BD=CA$ (given). So $\triangle ABD\equiv\triangle DCA$ (S.S.S) and $\hat{BAD}=\hat{CDA}$. But $AB\parallel DC$, so $\hat{BAD}+\hat{CDA}=180^\circ$ (co-interior angles). Therefore each is $90^\circ$ and the parallelogram is a rectangle.` },
    { n: '3', q: r`Use the sketch of quadrilateral $ABCD$ to prove the diagonals are perpendicular to each other. (Kite: $AB=AD$, $CB=CD$; $O$ is where the diagonals meet; $\hat{BCO}=\hat{DCO}=x$.)`, a: r`In $\triangle BOC$ and $\triangle DOC$: $BC=DC$ (given); $\hat{BCO}=\hat{DCO}$ (given); $OC=OC$ (common). So they are congruent (S.A.S) and $\hat{BOC}=\hat{DOC}$. These angles are on a straight line, so they add to $180^\circ$; each is $90^\circ$. So $AC\perp BD$.` },
    { n: '4.1', context: r`$ABCD$ is a kite with $AD=AB$ and $CD=CB$. Prove that:`, q: r`$\hat D=\hat B$`, a: r`In $\triangle ADC$ and $\triangle ABC$: $AD=AB$, $CD=CB$ (given), $AC=AC$ (common). So $\triangle ADC\equiv\triangle ABC$ (S.S.S) and $\hat D=\hat B$.` },
    { n: '4.2', context: r`$ABCD$ is a kite with $AD=AB$ and $CD=CB$. Prove that:`, q: r`Diagonal $AC$ bisects angles $A$ and $C$.`, a: r`From the congruency in 4.1: $\hat A_1=\hat A_2$ and $\hat C_1=\hat C_2$, so $AC$ bisects $\hat A$ and $\hat C$.` },
    { n: '5', q: r`Prove that if both pairs of opposite angles in a quadrilateral are equal, the quadrilateral is a parallelogram. (Hint: all angles add up to $360^\circ$.)`, a: r`Let $\hat W=\hat Y=y$ and $\hat X=\hat Z=x$ in $WXYZ$. Then $2x+2y=360^\circ$, so $x+y=180^\circ$. $\hat W+\hat Z=y+x=180^\circ$ are co-interior angles on $WZ$, so $WX\parallel ZY$. Also $\hat Z+\hat Y=x+y=180^\circ$ are co-interior angles on $ZY$, so $ZW\parallel YX$. Both pairs of opposite sides are parallel: a parallelogram.` },
    { n: '6', q: r`Prove that $PQRS$ is a rhombus if $\triangle PQR$ and $\triangle PSR$ are equilateral triangles.`, a: r`$\triangle PQR$ equilateral: $PQ=QR=PR$. $\triangle PSR$ equilateral: $PS=SR=PR$. So $PQ=QR=RS=SP$ (all equal $PR$). A quadrilateral with four equal sides is a rhombus.` },
    { n: '7.1', context: r`$ABCD$ is a parallelogram with diagonal $AC$. Given that $AF=HC$ (with $F$, $H$ on $AC$), show that:`, q: r`$\triangle AFD\equiv\triangle CHB$`, a: r`$AD=CB$ (opposite sides); $\hat{DAF}=\hat{BCH}$ (alternate angles, $AD\parallel BC$); $AF=CH$ (given). So the triangles are congruent (S.A.S).` },
    { n: '7.2', context: r`Same figure.`, q: r`$DF\parallel HB$`, a: r`From 7.1, $\hat{AFD}=\hat{CHB}$, so $\hat{DFH}=180^\circ-\hat{AFD}=180^\circ-\hat{CHB}=\hat{BHF}$. These are alternate angles, so $DF\parallel HB$.` },
    { n: '7.3', context: r`Same figure.`, q: r`$DFBH$ is a parallelogram`, a: r`From 7.1, $DF=BH$, and from 7.2, $DF\parallel BH$. One pair of opposite sides is equal and parallel, so $DFBH$ is a parallelogram.` },
    { n: '8.1', context: r`$KLMN$ is a rhombus with $\hat{KNM}=60^\circ$ and $KN=2p$ units. The diagonals intersect at $O$.`, q: r`Prove that $KNM$ is an equilateral triangle.`, a: r`$KN=NM$ (sides of a rhombus), so $\triangle KNM$ is isosceles and $\hat K=\hat M=\dfrac{180^\circ-60^\circ}{2}=60^\circ$. All angles are $60^\circ$, so it is equilateral.` },
    { n: '8.2', context: r`Same figure.`, q: r`Calculate the length of $LN$ in terms of $p$.`, a: r`$KM=2p$ (equilateral) and the diagonals bisect each other at right angles, so $KO=p$. In $\triangle KON$: $NO=\sqrt{(2p)^2-p^2}=\sqrt3\,p$. $LN=2NO=2\sqrt3\,p$.` },
    { n: '9.1', context: r`Parallelogram $ABCD$ with $AE$ bisecting $\hat A$ and $FC$ bisecting $\hat C$ ($E$ on $DC$, $F$ on $AB$).`, q: r`Write all interior angles in terms of $y$.`, a: r`Let $\hat A_1=\hat A_2=y$. Then $\hat A=\hat C=2y$ (opposite angles) and $\hat B=\hat D=180^\circ-2y$.` },
    { n: '9.2', context: r`Same figure.`, q: r`Prove that $AFCE$ is a parallelogram.`, a: r`$\hat{EAF}=y$ and $\hat{FCE}=y$ (halves of equal angles), so $\hat{EAF}=\hat{FCE}$. $\hat{AEC}=180^\circ-\hat{DEA}=180^\circ-y$ ($\hat{DEA}=\hat{EAB}=y$, alternate angles) and likewise $\hat{AFC}=180^\circ-y$. Both pairs of opposite angles of $AFCE$ are equal, so it is a parallelogram (Task 2, question 5).` },
    { n: '10.1', context: r`$LMNO$ is a quadrilateral with $LM=LO$ and diagonals that intersect (at $S$) such that $MS=SO$. Show that:`, q: r`$\hat L_1=\hat L_2$`, a: r`In $\triangle LMS$ and $\triangle LOS$: $LM=LO$, $MS=OS$, $LS=LS$ (common). So they are congruent (S.S.S) and $\hat L_1=\hat L_2$.` },
    { n: '10.2', context: r`Same figure.`, q: r`$\triangle LON\equiv\triangle LMN$`, a: r`$LO=LM$ (given), $\hat L_1=\hat L_2$ (10.1), $LN=LN$ (common): $\triangle LON\equiv\triangle LMN$ (S.A.S).` },
    { n: '10.3', context: r`Same figure.`, q: r`$MO\perp LN$`, a: r`From the congruent triangles in 10.1, $\hat{LSM}=\hat{LSO}$. They are angles on a straight line, so they add to $180^\circ$: each is $90^\circ$. So $MO\perp LN$.` },
  ]),
]);

/* ── C. Similarity (first page) ──────────────────────────────────────────── */

export const C_SIMILARITY = lesson('geom-u3-c-similarity', 'C. Similarity', 15, [
  h2('Similar figures'),
  p(r`Generally, figures having the same shape but different sizes are called similar figures. For instance: two circles, two squares or two equilateral triangles are always similar.`),
  note(r`Two triangles are similar if their corresponding angles are congruent and corresponding sides are proportional. We use the $|||$ symbol to show similarity.`),
  p(r`We can write $\triangle ABC\,|||\,\triangle DEF$ if:`),
  ul([
    r`$\hat A=\hat D$, $\hat B=\hat E$ and $\hat C=\hat F$; also`,
    r`$\dfrac{a}{d}=\dfrac{b}{e}=\dfrac{c}{f}$`,
  ]),
  note(r`Note that, in writing of similarity of triangles, the vertices must be listed in corresponding order, so that we can conclude which angles are congruent and which sides are proportional. In the previous example $\dfrac{AB}{DE}=\dfrac{BC}{EF}=\dfrac{AC}{DF}$.`),
  h3('Question 1'),
  p(r`In the figure, $\triangle ABC\,|||\,\triangle DEF$. Find the length of sides $x$ and $y$. (In $\triangle ABC$: $AB=x$, $AC=12$, $BC=y$; in $\triangle DEF$: $DE=5$, $DF=4$, $EF=7$.)`),
  fig({
    xRange: [-1, 8], yRange: [-0.8, 7.2], axes: false,
    points: [
      { id: 'A', label: 'A', x: 3.5, y: 6, side: 'n', color: 'main' }, { id: 'B', label: 'B', x: 0, y: 0, side: 'sw', color: 'main' }, { id: 'C', label: 'C', x: 7, y: 0, side: 'se', color: 'main' },
    ],
    polygons: [{ ids: ['A', 'B', 'C'] }],
    segments: [{ from: 'B', to: 'A', label: 'x' }, { from: 'A', to: 'C', label: '12' }, { from: 'B', to: 'C', label: 'y' }],
    caption: 'Triangle ABC (the similar triangle DEF has sides 5, 4 and 7).',
  }),
  eq(r`\dfrac{AB}{DE}=\dfrac{AC}{DF}=\dfrac{BC}{EF}`),
  eq(r`\dfrac{x}{5}=\dfrac{12}{4}\;\Rightarrow\;4x=60\;\Rightarrow\;x=15\qquad\qquad\dfrac{y}{7}=\dfrac{12}{4}\;\Rightarrow\;4y=84\;\Rightarrow\;y=21`),
  p(r`The following rules state the conditions that we need in order to determine that two triangles are similar.`),
  h2('1. A.A.A similarity rule'),
  note(r`If three angles in one triangle are congruent (equal) to the three angles in another triangle, then the triangles are similar. Note that two pairs of angles are enough; the third pair will always be equal because of the sum of angles in a triangle.`),
  h3('Question 2'),
  p(r`Given that $B$ and $D$ are right angles, prove that $AB\cdot EC=AC\cdot ED$. ($A$, $C$, $E$ are on a straight line, $BD$ is a straight line through $C$.)`),
  fig({
    xRange: [-1, 5], yRange: [-0.8, 7], axes: false,
    points: [
      { id: 'A', label: 'A', x: 1.2, y: 6.2, side: 'n', color: 'main' }, { id: 'B', label: 'B', x: 0, y: 1.2, side: 'w', color: 'main' },
      { id: 'C', label: 'C', x: 1, y: 0.7, side: 'ne', color: 'green' }, { id: 'D', label: 'D', x: 1.2, y: -0.2, side: 'sw', color: 'main' },
      { id: 'E', label: 'E', x: 4, y: -0.2, side: 'se', color: 'main' },
    ],
    segments: [{ from: 'A', to: 'B' }, { from: 'B', to: 'D' }, { from: 'A', to: 'E' }, { from: 'D', to: 'E' }],
    caption: 'Sketch to show the relationship (not drawn to scale).',
  }),
  proof([
    ['1. Ĉ₁ = Ĉ₂', 'Vertically opp angles'],
    ['2. B̂ = D̂', 'Given, both are 90°'],
    ['3. Â = Ê', '3rd angle of triangle'],
    ['∴ △ABC ||| △EDC', 'A.A.A rule'],
  ]),
  p(r`Using proportions: $\dfrac{AB}{ED}=\dfrac{AC}{EC}$, so $AB\cdot EC=AC\cdot ED$.`),
  h3('Question 3'),
  p(r`Given $DE\parallel BC$ ($D$ on $AB$, $E$ on $AC$). Prove that $\triangle ABC\,|||\,\triangle ADE$.`),
  fig({
    xRange: [-1, 9], yRange: [-0.8, 8], axes: false,
    points: [
      { id: 'A', label: 'A', x: 4, y: 7, side: 'n', color: 'main' }, { id: 'B', label: 'B', x: 0, y: 0, side: 'sw', color: 'main' }, { id: 'C', label: 'C', x: 8, y: 0, side: 'se', color: 'main' },
      { id: 'D', label: 'D', x: 1.6, y: 2.8, side: 'w', color: 'green' }, { id: 'E', label: 'E', x: 6.4, y: 2.8, side: 'e', color: 'green' },
    ],
    polygons: [{ ids: ['A', 'B', 'C'] }],
    segments: [{ from: 'D', to: 'E', arrow: true }, { from: 'B', to: 'C', arrow: true }],
  }),
  proof([
    ['Â is common', ''],
    ['B̂ = D̂', 'corresponding angles'],
    ['Ĉ = Ê', 'corresponding angles'],
    ['∴ △ABC ||| △ADE', 'A.A.A rule'],
  ]),

  h2('2. S.S.S similarity rule'),
  note(r`If all the sides of two triangles are in proportion, then the triangles are similar.`),
  h3('Question 4'),
  p(r`Use the information in the figure to show that $\triangle ABC\,|||\,\triangle DAC$. (Sides: $AB=10$, $BC=8$, $AC=12$, $AD=15$, $CD=18$.)`),
  proof([
    ['1. 8/12 = 10/15 = 12/18  i.e.  BC/AC = AB/AD = AC/CD', 'Sides in proportion'],
    ['∴ △ACB ||| △DCA', 'S.S.S rule'],
  ]),
  note(r`To write proportions easier: at the top, write the sides of one of the triangles in order (e.g. from smallest); at the bottom write the sides of another triangle in the same order. To write correct similar triangles use equal angles; if you don’t have them, use angles opposite to proportional sides. In the example above, $A$ is opposite to the smallest side in the first triangle while $D$ is opposite to the smallest side in the second.`),
  h3('Question 5'),
  p(r`Sameer is standing so that the end of his shadow is at point $C$. The end of the shadow of the tree is also at point $C$. Sameer is $1{,}6$ m tall and his shadow is $2$ m long. The shadow of the tree is $8$ m long. How tall is the tree?`),
  p(r`$DE\parallel AB$, then $\triangle CED\,|||\,\triangle CBA$. Because of the A.A.A rule: $\hat C$ is common; $\hat E=\hat B$ (corresponding angles); $\hat D=\hat A$ (corresponding angles). Write the ratios:`),
  eq(r`\dfrac{DE}{AB}=\dfrac{CE}{CB}\;\Rightarrow\;\dfrac{1{,}6}{x}=\dfrac{2}{8}\;\Rightarrow\;2x=12{,}8\;\Rightarrow\;x=6{,}4\text{ m}`),
  h2('Task 3'),
  ANSWERS_NOTE,
  note(r`All questions must contain proof of similarity. In this book copy, questions 2–4, 8–10, 11 and 13 are partly covered by pencil work or too small to read reliably, so only the legible ones are included, with Scholar’s own working.`),
  qs([
    { n: '1', q: r`$DE\parallel BC$ ($D$ on $AB$, $E$ on $AC$): $AD=8$, $DB=4$, $DE=6$, $AE=x$, $EC=3$. Find $x$ and $BC$.`, a: r`$\hat A$ is common; $\hat D=\hat B$ and $\hat E=\hat C$ (corresponding angles). So $\triangle ADE\,|||\,\triangle ABC$ (A.A.A) and $\dfrac{AD}{AB}=\dfrac{AE}{AC}=\dfrac{DE}{BC}$: $\dfrac{8}{12}=\dfrac{x}{x+3}\Rightarrow 3x=2x+6\Rightarrow x=6$; $\dfrac{8}{12}=\dfrac{6}{BC}\Rightarrow BC=9$.` },
    { n: '5', q: r`$AB\parallel DE$ with $AB=12$, $BC=10$, $AC=15$, $CD=x$, $CE=9$, $DE=y$. Find $x$ and $y$.`, a: r`$\hat A=\hat E$ and $\hat B=\hat D$ (alternate angles), so $\triangle ABC\,|||\,\triangle EDC$ (A.A.A) and $\dfrac{AB}{ED}=\dfrac{BC}{DC}=\dfrac{AC}{EC}$: $\dfrac{12}{y}=\dfrac{10}{x}=\dfrac{15}{9}=\dfrac53$. So $x=6$ and $y=\dfrac{36}{5}=7{,}2$.` },
    { n: '12', q: r`State whether the following triangles are similar or not: $\triangle RPS$ with sides $RP=9$, $RS=6$, $PS=12$, and $\triangle PTS$ with $PT=24$, $TS=18$, $PS=12$.`, a: r`Compare sides in the same order (smallest to largest): $\dfrac{6}{12}=\dfrac{9}{18}=\dfrac{12}{24}=\dfrac12$. All three ratios are equal, so the triangles are similar (S.S.S): $\triangle SRP\,|||\,\triangle STP$.` },
  ]),

  h2('Task 4'),
  ANSWERS_NOTE,
  qs([
    { n: '1.1', context: r`There are three right-angled triangles in the diagram: $\triangle ABC$ right-angled at $A$, with $AH\perp BC$, $BH=9$ and $HC=16$.`, q: r`Show the similarity of $\triangle AHC$ and $\triangle ABC$.`, a: r`$\hat C$ is common; $\hat{AHC}=\hat{BAC}=90^\circ$; so the third angles are equal too. $\triangle AHC\,|||\,\triangle BAC$ (A.A.A).` },
    { n: '1.2', context: r`Same figure.`, q: r`Write the sides’ ratios of $\triangle AHC$ and $\triangle ABC$.`, a: r`$\dfrac{AH}{BA}=\dfrac{HC}{AC}=\dfrac{AC}{BC}$` },
    { n: '1.3', context: r`Same figure.`, q: r`Hence, find the length of $AC$.`, a: r`$\dfrac{HC}{AC}=\dfrac{AC}{BC}\Rightarrow AC^2=HC\cdot BC=16\cdot25=400$, so $AC=20$.` },
    { n: '2', context: r`$\triangle PNM$ is right-angled at $M$ with $S$ on $PN$ and $MS\perp PN$; $PS=3$ and $PM=6$.`, q: r`2.1 Show that $\triangle PMS\,|||\,\triangle PNM$. 2.2 Write the sides’ ratios. 2.3 Hence, find the length of $SN$.`, a: r`2.1 $\hat P$ is common and $\hat{PSM}=\hat{PMN}=90^\circ$, so $\triangle PMS\,|||\,\triangle PNM$ (A.A.A). 2.2 $\dfrac{PM}{PN}=\dfrac{MS}{NM}=\dfrac{PS}{PM}$. 2.3 $\dfrac{3}{6}=\dfrac{6}{PN}\Rightarrow PN=12$, so $SN=12-3=9$.` },
    { n: '3', q: r`$PQ\parallel RS$, with diagonals $PS$ and $QR$ meeting at $T$: $PQ=9$, $RS=15$, $QT=x$, $TR=x+4$. Find the length of $QR$ with reasons.`, a: r`$\hat{PQT}=\hat{SRT}$ (alternate angles, $PQ\parallel RS$) and $\hat{QTP}=\hat{RTS}$ (vertically opposite), so $\triangle PQT\,|||\,\triangle SRT$ (A.A.A). $\dfrac{QT}{RT}=\dfrac{PQ}{SR}$: $\dfrac{x}{x+4}=\dfrac{9}{15}\Rightarrow15x=9x+36\Rightarrow x=6$. $QR=x+(x+4)=16$.` },
    { n: '4.1', context: r`Triangle $RTK$ with $RJ=12$, $JK=x$, $TK=8$, $\hat{RTK}=90^\circ$ and $TJ\perp RK$.`, q: r`Show $\triangle RKT\,|||\,\triangle TKJ$ and find the length of $JK$.`, a: r`$\hat K$ is common and $\hat{RTK}=\hat{TJK}=90^\circ$, so $\triangle RKT\,|||\,\triangle TKJ$ (A.A.A). $\dfrac{RK}{TK}=\dfrac{TK}{JK}$: $\dfrac{12+x}{8}=\dfrac{8}{x}\Rightarrow x(12+x)=64\Rightarrow x^2+12x-64=0\Rightarrow(x+16)(x-4)=0$, so $x=4$ (the length cannot be $-16$).` },
    { n: '4.2', context: r`Same figure.`, q: r`Show $\triangle RJT\,|||\,\triangle TJK$ and find the length of $JT$.`, a: r`$\hat{RJT}=\hat{TJK}=90^\circ$ and $\hat R=\hat{JTK}$ (both complete $\hat{RTJ}$ to $90^\circ$ with the other acute angle), so $\triangle RJT\,|||\,\triangle TJK$. $\dfrac{RJ}{TJ}=\dfrac{JT}{JK}\Rightarrow JT^2=12\cdot4=48\Rightarrow JT=4\sqrt3$.` },
    { n: '5', context: r`$\triangle KLM$ has $\hat K=90^\circ$; $N$ is on $KM$ with $NH\perp LM$ at $H$, $LH=10$, $HM=6$, $KN=NM=4\sqrt3$ (marked equal).`, q: r`Show the similarity of $\triangle KLM$ and $\triangle NHM$ to determine the length of $KL$ with reasons.`, a: r`$\hat M$ is common and $\hat K=\hat{NHM}=90^\circ$, so $\triangle NHM\,|||\,\triangle LKM$ (A.A.A). $LM=16$ and $KM=8\sqrt3$. $KL^2=LM^2-KM^2=256-192=64$, so $KL=8$. (Check with ratios: $\dfrac{HM}{KM}=\dfrac{6}{8\sqrt3}=\dfrac{NH}{KL}\Rightarrow NH=2\sqrt3$.)` },
    { n: '6', q: r`The boy has placed a mirror on level ground at point $B$ so that he can see the top of the flagpole in it. His eyes are $160$ cm high. $AB=2{,}4$ m and $BC=9$ m. Find the height of the pole.`, a: r`The angles of incidence and reflection are equal and both people stand at $90^\circ$ to the ground, so $\triangle DAB\,|||\,\triangle EBC$ (A.A.A). $\dfrac{DA}{EC}=\dfrac{AB}{BC}$: $\dfrac{1{,}6}{x}=\dfrac{2{,}4}{9}\Rightarrow x=\dfrac{1{,}6\cdot9}{2{,}4}=6\text{ m}$. (The handwritten working on the page inverts one ratio and gets $13{,}5$ m; the correct ratio gives $6$ m.)` },
    { n: '7', context: r`In $\triangle ABC$, $DE\parallel FC$ and $FE\parallel BC$ ($D$, $F$ on $AB$; $E$ on $AC$). If $AE:EC=3:1$, find the values of the following ratios.`, q: r`7.1 $\dfrac{AD}{DF}$  7.2 $\dfrac{AD}{FB}$`, a: r`7.1 In $\triangle AFC$, $DE\parallel FC$: $\dfrac{AD}{DF}=\dfrac{AE}{EC}=3$. 7.2 In $\triangle ABC$, $FE\parallel BC$: $\dfrac{AF}{FB}=\dfrac{AE}{EC}=3$. Since $AD=\dfrac34AF$: $\dfrac{AD}{FB}=\dfrac34\cdot3=\dfrac94$.` },
    { n: '8', context: r`In $\triangle MNP$, $MN\parallel KS$ and $KN\parallel TS$ ($K$, $T$ on $MP$; $S$ on $NP$). $NS:SP=2:1$ and $KT=2$ cm.`, q: r`What is $MK$?`, a: r`In $\triangle NKP$, $TS\parallel KN$: $\dfrac{KT}{TP}=\dfrac{NS}{SP}=2\Rightarrow TP=1$. In $\triangle MNP$, $KS\parallel MN$: $\dfrac{MK}{KP}=\dfrac{NS}{SP}=2$, and $KP=KT+TP=3$, so $MK=6\text{ cm}$.` },
  ]),
]);

export const GEOM_UNIT_3B_LESSONS: Lesson[] = [B_QUADRILATERALS, C_SIMILARITY];
