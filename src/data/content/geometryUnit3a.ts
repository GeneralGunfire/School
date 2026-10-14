import type { Figure, Lesson, LessonBlock } from '../../lib/types';
import { r, h2, h3, p, note, fig, qs, lesson as make, ANSWERS_NOTE, type B } from './geomKit';

/**
 * Paper 3 of the book, Unit 3: Euclidean Geometry, section A, congruent triangles
 * (book pp. 96–101; photos …869 – …871). Page 99 onward of Task 1 is partly covered by fingers
 * in the photos, so the figures for questions 7–11 are described rather than redrawn.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('geom-euclidean', id, title, minutes, blocks);

/** Statement / Reason proof table. */
const proof = (rows: [string, string][]): B => ({
  type: 'definitions',
  rows: rows.map(([term, meaning]) => ({ term, meaning })),
} as Omit<LessonBlock, 'id'>);

type Pt = [number, number];
const tri = (A: Pt, B: Pt, C: Pt, names: [string, string, string], ticks: [number, number, number] = [0, 0, 0], caption?: string): Figure => ({
  xRange: [Math.min(A[0], B[0], C[0]) - 0.6, Math.max(A[0], B[0], C[0]) + 0.6],
  yRange: [Math.min(A[1], B[1], C[1]) - 0.6, Math.max(A[1], B[1], C[1]) + 0.6],
  axes: false,
  points: [
    { id: 'A', label: names[0], x: A[0], y: A[1], side: 'n', color: 'main' },
    { id: 'B', label: names[1], x: B[0], y: B[1], side: 'sw', color: 'main' },
    { id: 'C', label: names[2], x: C[0], y: C[1], side: 'se', color: 'main' },
  ],
  polygons: [{ ids: ['A', 'B', 'C'] }],
  segments: [
    { from: 'A', to: 'B', ticks: ticks[0] },
    { from: 'B', to: 'C', ticks: ticks[1] },
    { from: 'C', to: 'A', ticks: ticks[2] },
  ],
  caption,
});

export const A_CONGRUENT = lesson('geom-u3-a-congruent', 'A. Congruent Triangles', 40, [
  h2('Congruent figures'),
  p(r`Whenever two figures have the same shape and same size they are called congruent figures. Formally, we can say that congruent means “fitting together exactly” or “coincident”.`),
  p(r`However, we also need a more certain way to decide if two or more figures are congruent. Thus we define congruent triangles in terms of congruent line segments (segments that have equal lengths) and congruent angles (angles that have equal measures).`),
  note(r`If the corresponding angles and the corresponding sides of two triangles are congruent then the triangles are called congruent triangles. We use the $\equiv$ symbol to show congruency.`),
  p(r`For example, in the figure, $\triangle ABC$ and $\triangle DEF$ are congruent. We can write $\triangle ABC\equiv\triangle DEF$.`),
  fig(tri([2, 3], [0, 0], [4.4, 0], ['A', 'B', 'C'], [2, 0, 1], 'Triangle ABC')),
  fig(tri([2, 3], [0, 0], [4.4, 0], ['D', 'E', 'F'], [2, 0, 1], 'Triangle DEF — an exact copy of ABC')),
  p(r`The corresponding angles and sides are congruent as follows:`),
  { type: 'math', text: r`\hat A=\hat D\quad\hat B=\hat E\quad\hat C=\hat F\qquad AB=DE\quad BC=EF\quad CA=FD` },
  p(r`We can write the congruency of two triangles in more than one way, as long as we write corresponding vertices in the same order. For example, in the figure, $\triangle CAB\equiv\triangle FDE$ is true but $\triangle CAB\equiv\triangle FED$ is not true.`),
  p(r`If two triangles are congruent, the six parts (three sides and three vertices) of one triangle are congruent to the six corresponding parts of the other triangle. However, it is not necessary to compare all six parts of two triangles to show that they are congruent. The following postulates give us three ways to prove that two triangles are congruent by comparing only three pairs of corresponding parts.`),

  h2('1. S.S.S rule'),
  note(r`If three sides of a triangle are equal to the three sides of another triangle, then the triangles are congruent.`),
  p(r`Look at the figures. By the SSS rule, $\triangle ABC\equiv\triangle XYZ$.`),
  h3('Question 1'),
  p(r`Given $AB=AD$ and $BC=DC$, prove $\triangle ABC\equiv\triangle ADC$.`),
  fig({
    xRange: [-3, 3], yRange: [-3.2, 3.2], axes: false,
    points: [
      { id: 'A', label: 'A', x: 0, y: 3, side: 'n', color: 'main' },
      { id: 'B', label: 'B', x: -2.2, y: 0, side: 'w', color: 'main' },
      { id: 'C', label: 'C', x: 0, y: -2.6, side: 's', color: 'main' },
      { id: 'D', label: 'D', x: 2.2, y: 0, side: 'e', color: 'main' },
    ],
    polygons: [{ ids: ['A', 'B', 'C', 'D'] }],
    segments: [
      { from: 'A', to: 'B', ticks: 2 }, { from: 'A', to: 'D', ticks: 2 },
      { from: 'B', to: 'C', ticks: 1 }, { from: 'D', to: 'C', ticks: 1 },
      { from: 'A', to: 'C', color: 'alt' },
    ],
  }),
  proof([
    ['1. AB = AD', 'Given'],
    ['2. BC = DC', 'Given'],
    ['3. AC = AC', 'Common'],
    ['∴ △ABC ≡ △ADC', 'S.S.S rule'],
  ]),

  h2('2. S.A.S rule'),
  note(r`If two sides and their interior angle in a triangle are equal to two sides and their interior angle in another triangle, then the triangles are congruent. (The interior angles are those between the marked sides: $\hat B$ and $\hat E$.)`),
  h3('Question 2'),
  p(r`Given $AB=BD$ and $\hat B_1=\hat B_2$, prove $\triangle ABC\equiv\triangle DBC$. (The book’s figure has the shared side $BC$ drawn horizontally, with $A$ above and $D$ below.)`),
  fig({
    xRange: [-1, 6], yRange: [-2.6, 2.6], axes: false,
    points: [
      { id: 'B', label: 'B', x: 0, y: 0, side: 'w', color: 'main' },
      { id: 'C', label: 'C', x: 5, y: 0, side: 'e', color: 'main' },
      { id: 'A', label: 'A', x: 3, y: 2, side: 'n', color: 'main' },
      { id: 'D', label: 'D', x: 3, y: -2, side: 's', color: 'main' },
    ],
    polygons: [{ ids: ['B', 'A', 'C', 'D'] }],
    segments: [{ from: 'B', to: 'A', ticks: 2 }, { from: 'B', to: 'D', ticks: 2 }, { from: 'B', to: 'C', color: 'alt' }],
    angles: [{ at: 'B', from: 'C', to: 'A', label: '1', radius: 30 }, { at: 'B', from: 'D', to: 'C', label: '2', radius: 30 }],
  }),
  proof([
    ['1. AB = DB', 'Given'],
    ['2. B̂₁ = B̂₂', 'Given'],
    ['3. BC = BC', 'Common'],
    ['∴ △ABC ≡ △DBC', 'S.A.S rule'],
  ]),
  h3('Question 3'),
  p(r`In the figure, $C$ is the common midpoint of $AE$ and $BD$. Find $x$ and $y$. (Marked: $AC=3$, $BA=x$, $DE=4$, $CE=y$.)`),
  fig({
    xRange: [-1, 7], yRange: [-2.6, 2.6], axes: false,
    points: [
      { id: 'A', label: 'A', x: 0, y: 2, side: 'nw', color: 'main' },
      { id: 'E', label: 'E', x: 6, y: -2, side: 'se', color: 'main' },
      { id: 'B', label: 'B', x: 0, y: -2, side: 'sw', color: 'main' },
      { id: 'D', label: 'D', x: 6, y: 2, side: 'ne', color: 'main' },
      { id: 'C', label: 'C', x: 3, y: 0, side: 'n', color: 'green' },
    ],
    segments: [
      { from: 'A', to: 'E' }, { from: 'B', to: 'D' }, { from: 'A', to: 'B', label: 'x' }, { from: 'D', to: 'E', label: '4' },
      { from: 'A', to: 'C', ticks: 1, label: '3' }, { from: 'C', to: 'E', ticks: 1, label: 'y' },
      { from: 'B', to: 'C', ticks: 2 }, { from: 'C', to: 'D', ticks: 2 },
    ],
  }),
  proof([
    ['AC = EC', 'given, C is midpoint'],
    ['Ĉ₁ = Ĉ₂', 'vertically opposite angles'],
    ['BC = DC', 'given, C is midpoint'],
    ['∴ △ACB ≡ △ECD', 'S.A.S rule'],
  ]),
  note(r`Pay attention to the way of writing triangles: $AB=ED$, then $x=4$; $AC=EC$, then $y=3$.`),

  h2('3. A.S.A rule'),
  note(r`If two angles and their common side in a triangle are equal to two angles and their common side in another triangle, then the triangles are congruent.`),
  p(r`Look at the figures. By the ASA rule, $\triangle PQR\equiv\triangle TSZ$.`),
  h3('Question 4'),
  p(r`In the figure, $KS\perp TZ$ and $KS$ is the angle bisector of angle $K$. Prove that $\triangle KTS\equiv\triangle KZS$.`),
  fig({
    xRange: [-3, 3], yRange: [-0.8, 4.4], axes: false,
    points: [
      { id: 'K', label: 'K', x: 0, y: 4, side: 'n', color: 'main' },
      { id: 'T', label: 'T', x: -2.6, y: 0, side: 'sw', color: 'main' },
      { id: 'Z', label: 'Z', x: 2.6, y: 0, side: 'se', color: 'main' },
      { id: 'S', label: 'S', x: 0, y: 0, side: 's', color: 'green' },
    ],
    polygons: [{ ids: ['K', 'T', 'Z'] }],
    segments: [{ from: 'K', to: 'S', color: 'alt' }],
    angles: [{ at: 'S', from: 'Z', to: 'K', right: true }, { at: 'S', from: 'K', to: 'T', right: true }, { at: 'K', from: 'T', to: 'S', label: '1', radius: 30 }, { at: 'K', from: 'S', to: 'Z', label: '2', radius: 30 }],
  }),
  proof([
    ['1. K̂₁ = K̂₂', 'KS is bisector of K̂'],
    ['2. KS = KS', 'Common'],
    ['3. Ŝ₁ = Ŝ₂ = 90°', 'Given is perpendicular'],
    ['∴ △TKS ≡ △ZKS', 'A.S.A rule'],
  ]),
  h3('Question 5'),
  p(r`In the figure, $AB\parallel DE$ and $AB=DE=4$. Find $x$. (Marked: $DC=2x+1$, $BC=4x-3$.)`),
  fig({
    xRange: [-1, 5], yRange: [-0.8, 4.8], axes: false,
    points: [
      { id: 'A', label: 'A', x: 0, y: 4, side: 'nw', color: 'main' },
      { id: 'B', label: 'B', x: 4, y: 4, side: 'ne', color: 'main' },
      { id: 'D', label: 'D', x: 0, y: 0, side: 'sw', color: 'main' },
      { id: 'E', label: 'E', x: 4, y: 0, side: 'se', color: 'main' },
      { id: 'C', label: 'C', x: 2, y: 2, side: 'n', color: 'green' },
    ],
    segments: [
      { from: 'A', to: 'B', label: '4' }, { from: 'D', to: 'E', label: '4' },
      { from: 'A', to: 'E' }, { from: 'B', to: 'D' },
      { from: 'D', to: 'C', label: '2x+1' }, { from: 'C', to: 'B', label: '4x−3' },
    ],
  }),
  proof([
    ['Â = Ê', 'alternate angles'],
    ['AB = DE', 'given'],
    ['B̂ = D̂', 'alternate angles'],
    ['∴ △DEC ≡ △BAC', 'A.S.A rule'],
  ]),
  { type: 'math', text: r`DC=BC\;\text{then}\;2x+1=4x-3\;\Rightarrow\;-2x=-4\;\Rightarrow\;x=2` },

  h2('Task 1'),
  ANSWERS_NOTE,
  note(r`Questions 7–11 have figures partly hidden by a finger or by pencil marks, so those answers use the marks that are legible; check them against your book.`),
  qs([
    { n: '1.1', context: r`Indicate and write the congruent triangles.`, q: r`Triangle $ABC$ ($\hat A=60^\circ$, $\hat B=90^\circ$, $\hat C=30^\circ$, $AB=3$) and triangle $TSK$ ($\hat T=90^\circ$, $\hat S=30^\circ$, $\hat K=60^\circ$, $TK=3$).`, a: r`$\hat A=\hat K$, $\hat B=\hat T$, $\hat C=\hat S$ and $AB=KT=3$ (the side between the $60^\circ$ and $90^\circ$ angles). So $\triangle ABC\equiv\triangle KTS$ (A.S.A).` },
    { n: '1.2', context: r`Indicate and write the congruent triangles.`, q: r`Triangle $DEF$ ($DE=8$, $EF=5$, $DF=7$) and triangle $PQR$ ($PQ=7$, $PR=5$, $QR=8$).`, a: r`$DE=QR=8$, $EF=RP=5$, $DF=QP=7$. So $\triangle DEF\equiv\triangle QRP$ (S.S.S).` },
    { n: '2', q: r`In the figure, $\triangle ABC\equiv\triangle DFE$ ($A=100^\circ$, $AB=4$, $AC=2x+1$, $\hat C=30^\circ$; $DE=7$, $DF=5y-1$, $\hat F=2z^\circ$). Find $x$, $y$ and $z$.`, a: r`$AC=DE$: $2x+1=7\Rightarrow x=3$. $AB=DF$: $5y-1=4\Rightarrow y=1$. $\hat B=180^\circ-100^\circ-30^\circ=50^\circ=\hat F$: $2z=50\Rightarrow z=25$.` },
    { n: '3', q: r`Given $KY=RA$ and $KY\parallel RA$. Prove $KR=AY$.`, a: r`In $\triangle KYR$ and $\triangle ARY$: $KY=RA$ (given); $\hat{KYR}=\hat{ARY}$ (alternate angles, $KY\parallel RA$); $YR=RY$ (common). So $\triangle KYR\equiv\triangle ARY$ (S.A.S), hence $KR=AY$.` },
    { n: '4', q: r`Given $LU\perp KU$, $YK\perp KU$ and $C$ the midpoint of $LY$. Prove $LU=YK$.`, a: r`In $\triangle LUC$ and $\triangle YKC$: $\hat U=\hat K=90^\circ$ (given); $\hat{LCU}=\hat{YCK}$ (vertically opposite); $LC=YC$ ($C$ is the midpoint). So $\triangle LUC\equiv\triangle YKC$ (A.A.S), hence $LU=YK$.` },
    { n: '5', q: r`Given $KN$ bisects angle $K$ and $KN\perp EO$. Prove $KE=KO$.`, a: r`In $\triangle KNE$ and $\triangle KNO$: $\hat K_1=\hat K_2$ ($KN$ bisects $\hat K$); $KN=KN$ (common); $\hat N_1=\hat N_2=90^\circ$ ($KN\perp EO$). So $\triangle KNE\equiv\triangle KNO$ (A.S.A), hence $KE=KO$.` },
    { n: '6', q: r`Given $BC=EF$, $\hat E=\hat B$ and $\hat C=\hat F$. Find $x$, $y$ and $z$ (left triangle $KEF$ with $KE=6$, $KF=4$, $EF=z$; right triangle $ABC$ with $AB=x$, $AC=y$, $BC=9$).`, a: r`$\triangle KEF\equiv\triangle ABC$ (A.S.A). So $x=KE=6$, $y=KF=4$ and $z=BC=9$.` },
    { n: '7', context: r`Prove that the two triangles in each figure are congruent, using the given data.`, q: r`Left figure: $ABCD$ with diagonal $BC$; right figure: lines $AD$ and $BC$ crossing at the midpoint, $\hat A=\hat D=30^\circ$ and the two marked sides $6$ and $6$.`, a: r`Left: $AB=CD$, $AC=BD$ (marked) and $BC$ common, so the triangles are congruent (S.S.S). Right: $\hat A=\hat D=30^\circ$, $AE=DE=6$ and $\hat{AEB}=\hat{DEC}$ (vertically opposite), so the triangles are congruent (A.S.A).` },
    { n: '8', context: r`Prove that the two triangles in each figure are congruent, using the given data.`, q: r`Left: kite $AQRS$ with $\hat{AQS}=\hat{RQS}$ and $AS=RS$; right: $XT=TY$ and $T=90^\circ$.`, a: r`Left: $\hat Q_1=\hat Q_2$, $QS$ common, $AS=RS$ (marked) — use the marked sides and angle between them (S.A.S). Right: $XT=TY$, $\hat{XTZ}=\hat{YTZ}=90^\circ$, $TZ$ common, so $\triangle XTZ\equiv\triangle YTZ$ (S.A.S).` },
    { n: '9', q: r`Given $AB$ and $FD$ bisect each other (at $E$). Prove that $\hat D_1=\hat F$.`, a: r`In $\triangle AED$ and $\triangle BEF$: $AE=BE$ and $DE=FE$ (bisect each other); $\hat{AED}=\hat{BEF}$ (vertically opposite). So the triangles are congruent (S.A.S) and $\hat D_1=\hat F$.` },
    { n: '10', q: r`(Difficult) Given $AB=AE$ and $BC=EC$. Prove that $\hat B_1=\hat E_1$.`, a: r`In $\triangle ABC$ and $\triangle AEC$: $AB=AE$ (given); $BC=EC$ (given); $AC=AC$ (common). So $\triangle ABC\equiv\triangle AEC$ (S.S.S) and the corresponding angles at $B$ and $E$ are equal: $\hat B_1=\hat E_1$.` },
    { n: '11', context: r`Prove that the two triangles in each figure are congruent, using the given data.`, q: r`Left: lines $AE$ and $BD$ crossing at $C$ with $AC=CD$ and $BC=CE$ marked; right: $HK\parallel MN$ with $HK=MN=5$ and lines $HN$, $KM$ crossing at $L$.`, a: r`Left: $AC=CD$, $BC=CE$ and $\hat{ACB}=\hat{DCE}$ (vertically opposite), so $\triangle ABC\equiv\triangle DEC$ (S.A.S). Right: $HK=MN=5$, $\hat{HKL}=\hat{MNL}$ (alternate angles, $HK\parallel MN$) and $\hat{HLK}=\hat{MLN}$ (vertically opposite), so $\triangle HKL\equiv\triangle NML$ (A.A.S).` },
  ]),
]);

export const GEOM_UNIT_3A_LESSONS: Lesson[] = [A_CONGRUENT];
