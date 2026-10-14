import type { Lesson } from '../../lib/types';
import { r, h2, p, note, fig, qs, lesson as make, ANSWERS_NOTE } from './geomKit';

/**
 * Euclidean Geometry: Task 5 (proportionality, book pp. 120–122; photos …882 – …883) and the
 * start of section E, chords and tangents (book p. 123; photo …883).
 * Task 5 question 10's figure is cut off at the page edge, so its answer uses the stated data.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('geom-euclidean', id, title, minutes, blocks);

export const D_TASK_5 = lesson('geom-u3-d-task-5', 'D. Proportionality: Task 5', 25, [
  h2('Task 5'),
  ANSWERS_NOTE,
  qs([
    { n: '1.1', context: r`$MN\parallel KL$ ($M$ on $JK$, $N$ on $JL$), $JM=5$ units and $MK=2$ units. Find the following ratios.`, q: r`$\dfrac{JN}{NL}$`, a: r`$\dfrac{JN}{NL}=\dfrac{JM}{MK}=\dfrac52$ (proportionality th.)` },
    { n: '1.2', context: r`Same figure.`, q: r`$\dfrac{JN}{JL}$`, a: r`$\dfrac{JN}{JL}=\dfrac{JM}{JK}=\dfrac57$` },
    { n: '1.3', context: r`Same figure.`, q: r`$\dfrac{NL}{JL}$`, a: r`$\dfrac{NL}{JL}=\dfrac{MK}{JK}=\dfrac27$` },
    { n: '2.1', context: r`Find the value of $x$ in the following figures according to the given information.`, q: r`$DE\parallel BC$: $AD=3$, $DB=6$, $AE=x$, $EC=8$.`, a: r`$\dfrac{AD}{DB}=\dfrac{AE}{EC}\Rightarrow\dfrac36=\dfrac{x}{8}\Rightarrow x=4$` },
    { n: '2.2', context: r`Find the value of $x$ in the following figures according to the given information.`, q: r`A line through $P$ on $KM$ parallel to $KN$ meets $MN$ at $R$: $KP=x$, $PM=8$, $MR=12$, $RN=3$.`, a: r`$\dfrac{PM}{KP}=\dfrac{MR}{RN}\Rightarrow\dfrac8x=\dfrac{12}{3}\Rightarrow x=2$` },
    { n: '3.1', context: r`In $\triangle ABC$, $AD:BD=4:3$, $EF\parallel AB$ and $DE\parallel BC$ ($D$ on $AB$, $E$ on $AC$, $F$ on $BC$). Find the following ratios.`, q: r`$\dfrac{AC}{AE}$`, a: r`$DE\parallel BC$: $\dfrac{AE}{EC}=\dfrac{AD}{DB}=\dfrac43$, so $\dfrac{AC}{AE}=\dfrac{7}{4}$.` },
    { n: '3.2', context: r`Same figure.`, q: r`$\dfrac{AC}{EC}$`, a: r`$\dfrac{AC}{EC}=\dfrac{7}{3}$` },
    { n: '3.3', context: r`Same figure.`, q: r`$\dfrac{BF}{FC}$`, a: r`$EF\parallel AB$: $\dfrac{BF}{FC}=\dfrac{AE}{EC}=\dfrac43$` },
    { n: '3.4', context: r`Same figure.`, q: r`$\dfrac{FC}{BC}$`, a: r`$\dfrac{FC}{BC}=\dfrac{3}{7}$` },
    { n: '3.5', context: r`Same figure.`, q: r`$\dfrac{FB}{BC}$`, a: r`$\dfrac{FB}{BC}=\dfrac{4}{7}$` },
    { n: '4.1', context: r`In $\triangle ABC$, $DE\parallel FC$ and $FE\parallel BC$. If $AE:EC=3:1$, find the values of the following ratios.`, q: r`$\dfrac{AD}{DF}$`, a: r`In $\triangle AFC$, $DE\parallel FC$: $\dfrac{AD}{DF}=\dfrac{AE}{EC}=3$.` },
    { n: '4.2', context: r`Same figure.`, q: r`$\dfrac{AF}{FB}$`, a: r`In $\triangle ABC$, $FE\parallel BC$: $\dfrac{AF}{FB}=\dfrac{AE}{EC}=3$.` },
    { n: '4.3', context: r`Same figure.`, q: r`$\dfrac{AD}{DB}$`, a: r`Let $DF=x$: $AD=3x$, $AF=4x$, $FB=\dfrac{4x}{3}$, $DB=x+\dfrac{4x}{3}=\dfrac{7x}{3}$. So $\dfrac{AD}{DB}=\dfrac{3x}{7x/3}=\dfrac97$.` },
    { n: '4.4', context: r`Same figure.`, q: r`$\dfrac{DF}{FB}$`, a: r`$\dfrac{x}{4x/3}=\dfrac34$` },
    { n: '4.5', context: r`Same figure.`, q: r`$\dfrac{AD}{FB}$`, a: r`$\dfrac{3x}{4x/3}=\dfrac94$` },
    { n: '4.6', context: r`Same figure.`, q: r`$\dfrac{DF}{AB}$`, a: r`$AB=AF+FB=4x+\dfrac{4x}{3}=\dfrac{16x}{3}$, so $\dfrac{DF}{AB}=\dfrac{x}{16x/3}=\dfrac{3}{16}$.` },
    { n: '5', q: r`In $\triangle MNP$, $MN\parallel KS$ and $KN\parallel TS$. If $NS:SP=2:1$ and $KT=2$ cm, what is $MK$?`, a: r`In $\triangle NKP$, $TS\parallel KN$: $\dfrac{KT}{TP}=\dfrac{NS}{SP}=2\Rightarrow TP=1$, so $KP=3$. In $\triangle MNP$, $KS\parallel MN$: $\dfrac{MK}{KP}=2$, so $MK=6$ cm.` },
    { n: '6.1', context: r`$PT\parallel NK\parallel RS$ and $TK:KS=3:2$ (the transversals are $PR$, $PS$ and $TS$). Find the following ratios.`, q: r`$\dfrac{PN}{NR}$`, a: r`Parallel lines cut transversals in the same ratio: $\dfrac{PN}{NR}=\dfrac{PM}{MS}=\dfrac{TK}{KS}=\dfrac32$.` },
    { n: '6.2', context: r`Same figure.`, q: r`$\dfrac{MS}{PM}$`, a: r`$\dfrac{MS}{PM}=\dfrac23$` },
    { n: '6.3', context: r`Same figure.`, q: r`$\dfrac{PS}{MS}$`, a: r`$PS=PM+MS=3+2=5$ parts, so $\dfrac{PS}{MS}=\dfrac52$.` },
    { n: '6.4', context: r`Same figure.`, q: r`$\dfrac{NR}{PR}$`, a: r`$\dfrac{NR}{PR}=\dfrac{2}{5}$` },
    { n: '6.5', context: r`Same figure.`, q: r`$\dfrac{PN}{PR}$`, a: r`$\dfrac{PN}{PR}=\dfrac35$` },
    { n: '7', q: r`$FG\parallel BC$ and $EG\parallel DC$ (quadrilateral $ABCD$ with $F$ on $AB$, $G$ on $AC$, $E$ on $AD$; $AF=9$, $FB=3$, $AE=12$, $ED=x$, $DC=16$, $EG=y$). Find the values of $x$ and $y$.`, a: r`$FG\parallel BC$: $\dfrac{AG}{GC}=\dfrac{AF}{FB}=\dfrac93=3$. $EG\parallel DC$: $\dfrac{AE}{ED}=\dfrac{AG}{GC}$, so $\dfrac{12}{x}=3\Rightarrow x=4$. Also $\dfrac{EG}{DC}=\dfrac{AG}{AC}=\dfrac34$, so $y=12$. (The photo does not show clearly which segment $y$ names; $y=EG$ is read from the figure.)` },
    { n: '8', q: r`In the given right triangle $CB=6$ cm, $AD=DB=4$ cm and $DE\parallel AC$ ($E$ on $CB$, with $CE=EB=3$). Find the value of $x$ ($=DE$).`, a: r`$AB=8$ and $\hat B=90^\circ$, so $AC=\sqrt{8^2+6^2}=10$. $D$ is the midpoint of $AB$ and $DE\parallel AC$, so by the midpoint theorem $DE=\tfrac12AC$: $x=5$.` },
    { n: '9', q: r`In the triangle $ABC$, $EF\parallel AC$, $AK=KD$, $BD=\tfrac32DC$ and $AE=12$ cm. Find the length of $EB$. (Same figure type as the worked example: $K$ is on $EF$, $D$ and $F$ on $BC$.)`, a: r`$K$ is the midpoint of $AD$ and $KF\parallel AC$, so $DF=FC=k$ (midpoint th.). $DC=2k$, so $BD=3k$ and $BF=4k$. Then $\dfrac{BE}{EA}=\dfrac{BF}{FC}=4$, so $EB=4\cdot12=48$ cm.` },
    { n: '10', q: r`In $\triangle ABC$, $AF=FE$, $DB=21$ cm, $DC\parallel KE$, $BE:BC=3:7$. Find the length of $AD$.`, a: r`$BE=3k$, $BC=7k$. In $\triangle BDC$, $KE\parallel DC$: $\dfrac{BK}{KD}=\dfrac{BE}{EC}=\dfrac34$, and $BK+KD=21$, so $BK=9$ and $KD=12$. In $\triangle AKE$, $F$ is the midpoint of $AE$ and $DF\parallel KE$, so $D$ is the midpoint of $AK$: $AD=DK=12$ cm.` },
    { n: '11', q: r`The diagonals of parallelogram $EFGH$ intersect at $O$. $K$, $L$, $M$ and $N$ are the midpoints of $OE$, $OF$, $OG$ and $OH$ respectively. Prove that $KLMN$ is a parallelogram.`, a: r`In $\triangle OEF$, $K$ and $L$ are midpoints: $KL\parallel EF$ and $KL=\tfrac12EF$. In $\triangle OGH$, $M$ and $N$ are midpoints: $MN\parallel GH$ and $MN=\tfrac12GH$. In a parallelogram $EF\parallel GH$ and $EF=GH$, so $KL\parallel MN$ and $KL=MN$. One pair of opposite sides is equal and parallel: $KLMN$ is a parallelogram.` },
    { n: '12.1', context: r`In right triangle $ABC$ ($\hat B=90^\circ$), $PQ\parallel CB$ and $P$ is the midpoint of $AC$ ($Q$ on $AB$). Prove that:`, q: r`$PQ\perp AB$`, a: r`$PQ\parallel CB$ and $CB\perp AB$, so $PQ\perp AB$.` },
    { n: '12.2', context: r`Same figure.`, q: r`$Q$ is the midpoint of $AB$`, a: r`$P$ is the midpoint of $AC$ and $PQ\parallel CB$, so by the converse of the midpoint theorem $Q$ is the midpoint of $AB$.` },
    { n: '12.3', context: r`Same figure.`, q: r`$PB=PA=\tfrac12AC$`, a: r`In $\triangle PQA$ and $\triangle PQB$: $AQ=QB$, $\hat{PQA}=\hat{PQB}=90^\circ$, $PQ$ common. So $\triangle PQA\equiv\triangle PQB$ (S.A.S) and $PA=PB$. $P$ is the midpoint of $AC$, so $PA=\tfrac12AC$.` },
  ]),
]);

export const E_CHORDS = lesson('geom-u3-e-chords', 'E. Chords and Tangents', 20, [
  h2('Chords'),
  p(r`A line which joins two different points on a circle is called a chord. For example, $AB$ and $CD$ in the figure are chords ($CD$ passes through the centre $O$).`),
  fig({
    xRange: [-5, 5], yRange: [-5, 5], axes: false,
    circles: [{ cx: 0, cy: 0, r: 4.2 }],
    points: [
      { id: 'A', label: 'A', x: -3.9, y: 1.7, side: 'nw', color: 'main' }, { id: 'B', label: 'B', x: 3.3, y: 2.6, side: 'ne', color: 'main' },
      { id: 'C', label: 'C', x: -4.1, y: -0.9, side: 'w', color: 'main' }, { id: 'D', label: 'D', x: 4.1, y: 0.9, side: 'e', color: 'main' },
      { id: 'O', label: 'O', x: 0, y: 0, side: 'se', color: 'alt' },
    ],
    segments: [{ from: 'A', to: 'B', color: 'alt' }, { from: 'C', to: 'D', color: 'alt' }],
  }),
  h2('Theorem 1a'),
  note(r`The line drawn from the centre of a circle perpendicular to a chord, bisects the chord: line from centre $\perp$ to chord.`),
  fig({
    xRange: [-5, 5], yRange: [-5, 5], axes: false,
    circles: [{ cx: 0, cy: 0, r: 4.2 }],
    points: [
      { id: 'O', label: 'O', x: 0, y: 0, side: 'ne', color: 'alt' }, { id: 'A', label: 'A', x: -3.4, y: -2.4, side: 'w', color: 'main' },
      { id: 'B', label: 'B', x: 3.4, y: -2.4, side: 'e', color: 'main' }, { id: 'E', label: 'E', x: 0, y: -2.4, side: 's', color: 'green' },
    ],
    segments: [{ from: 'A', to: 'B', ticks: 0 }, { from: 'O', to: 'E', color: 'alt' }, { from: 'O', to: 'A', label: 'r', dashed: true }, { from: 'O', to: 'B', label: 'r', dashed: true }],
    angles: [{ at: 'E', from: 'B', to: 'O', right: true }],
    caption: 'If OE ⊥ AB then AE = EB.',
  }),
  p(r`Proof: $AO=OB$ (both are radii); $OE$ is common. Use of the Theorem of Pythagoras gives us that $AE=EB$.`),
  h2('Theorem 1b'),
  p(r`Also we can use the converse of this rule:`),
  note(r`The line drawn from the centre of a circle to the mid-point of a chord, is perpendicular to the chord: line from centre to mid-point of chord.`),
  h2('Theorem 1c'),
  note(r`The perpendicular bisector of a chord passes through the centre of the circle.`),
]);

export const GEOM_UNIT_3D_LESSONS: Lesson[] = [D_TASK_5, E_CHORDS];
