import type { Lesson } from '../../lib/types';
import { r, h2, h3, p, note, fig, qs, solution, lesson as make, ANSWERS_NOTE } from './geomKit';

/**
 * Euclidean Geometry, section E (continued): tangents, Theorems 2 and 3, worked examples and
 * Task 6 (book pp. 124–127; photos …884 – …885). Task 6 question 12's figure is too unclear to
 * read, so it is left out.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('geom-euclidean', id, title, minutes, blocks);

export const E_TANGENTS = lesson('geom-u3-e-tangents', 'E. Tangents and Task 6', 35, [
  h2('Tangents'),
  p(r`A tangent is a line that touches the circumference of a circle at only one point. In the figure, $TH$ is a tangent line to the circle with $H$ as a point of tangency.`),
  h2('Theorem 2'),
  note(r`The tangent to a circle is perpendicular to the radius of the circle at the point of contact: tan $\perp$ rad OR tan $\perp$ diameter.`),
  fig({
    xRange: [-5, 5], yRange: [-5, 5.5], axes: false,
    circles: [{ cx: 0, cy: 0, r: 4 }],
    points: [
      { id: 'T', label: 'T', x: -4.6, y: 4, side: 'n', color: 'main' }, { id: 'H', label: 'H', x: 0, y: 4, side: 'n', color: 'green' },
      { id: 'X', label: '', x: 4.6, y: 4, hide: true }, { id: 'O', label: 'O', x: 0, y: 0, side: 'e', color: 'alt' },
    ],
    segments: [{ from: 'T', to: 'X', color: 'main' }, { from: 'O', to: 'H', color: 'alt' }],
    angles: [{ at: 'H', from: 'O', to: 'X', right: true }],
    caption: 'OH ⊥ TH',
  }),
  h2('Theorem 3'),
  note(r`Two tangents drawn to a circle from the same point outside the circle are equal in length: tans from same point (or tans from common point).`),
  fig({
    xRange: [-5, 11], yRange: [-5.5, 5.5], axes: false,
    circles: [{ cx: 0, cy: 0, r: 3.5 }],
    points: [
      { id: 'O', label: 'O', x: 0, y: 0, side: 'nw', color: 'alt' }, { id: 'P', label: 'P', x: 9, y: 0, side: 'e', color: 'main' },
      { id: 'A', label: 'A', x: 1.5, y: 3.16, side: 'n', color: 'green' }, { id: 'B', label: 'B', x: 1.5, y: -3.16, side: 's', color: 'green' },
    ],
    segments: [{ from: 'P', to: 'A', ticks: 1 }, { from: 'P', to: 'B', ticks: 1 }, { from: 'O', to: 'A', dashed: true }, { from: 'O', to: 'B', dashed: true }, { from: 'O', to: 'P', dashed: true, color: 'muted' }],
    caption: 'Tangents PA and PB from P are equal in length; OA ⊥ PA and OB ⊥ PB.',
  }),
  note(r`Pay attention: in the book’s diagram the caption reads “tangents $PA\perp PB$”, but that is only true for a special position of $P$; the theorem states $PA=PB$.`),

  h2('Worked examples'),
  h3('Question 1'),
  p(r`$OC$, a radius of the circle with centre $O$, cuts chord $AB$ at $M$. $OC=17$ mm, $AB=30$ mm and $OC\perp AB$. Calculate the length of $MC$.`),
  fig({
    xRange: [-5, 5], yRange: [-5, 5], axes: false,
    circles: [{ cx: 0, cy: 0, r: 4.25 }],
    points: [
      { id: 'A', label: 'A', x: -3.75, y: 2, side: 'w', color: 'main' }, { id: 'B', label: 'B', x: 3.75, y: 2, side: 'e', color: 'main' },
      { id: 'M', label: 'M', x: 0, y: 2, side: 'ne', color: 'green' }, { id: 'C', label: 'C', x: 0, y: 4.25, side: 'n', color: 'main' },
      { id: 'O', label: 'O', x: 0, y: 0, side: 'se', color: 'alt' },
    ],
    segments: [{ from: 'A', to: 'B' }, { from: 'M', to: 'C', color: 'alt' }, { from: 'O', to: 'M', color: 'alt' }, { from: 'O', to: 'A', dashed: true }],
    angles: [{ at: 'M', from: 'B', to: 'C', right: true }],
    caption: 'Drawn with the book’s proportions: AB = 30, OC = 17, OM = 8, MC = 9.',
  }),
  solution([
    ['Draw radius $OA$. Now:', r`AM=MB\quad\text{(line from centre }\perp\text{ to chord)}`],
    r`\therefore\;AM=15\text{ mm}`,
    ['And:', r`OA=17\text{ mm (radius)}`],
    ['$\\triangle OAM$ is right-angled:', r`OM^2+15^2=17^2`],
    r`OM^2=17^2-15^2=64`,
    r`OM=8\text{ mm}`,
    ['$MC=OC-OM$:', r`MC=17-8=9\text{ mm}`],
  ]),
  h3('Question 2'),
  p(r`The diameter of the circle with centre $O$ is $60$ mm, and $PO=50$ mm. Calculate the length of the tangents $PA$ and $PB$.`),
  solution([
    ['In $\\triangle POA$:', r`AO=30\quad\text{(half of a diameter)}`],
    ['', r`\hat A=90^\circ\quad(\tan\perp\text{radius})`],
    ['By Pythagoras:', r`50^2=30^2+PB^2`],
    r`\therefore\;PB=40`,
    ['And finally:', r`PA=PB=40\quad\text{(tans from same point)}`],
  ]),

  h2('Task 6'),
  p(r`All statements should be reasoned.`),
  ANSWERS_NOTE,
  qs([
    { n: '1', q: r`Given $OQ\perp PR$ and $PR=8$ units ($OP=5$), determine the value of $x$ ($=OQ$).`, a: r`$OQ\perp PR$ bisects the chord: $PQ=4$ (line from centre $\perp$ to chord). $OQ^2+4^2=5^2\Rightarrow x^2=25-16=9\Rightarrow x=3$.` },
    { n: '2.1', context: r`The radius of circle $O$ is $15$ cm, $CD=24$ cm and $OH=12$ cm. ($OI\perp CD$ at $I$; $OH\perp AB$ at $H$.)`, q: r`Find $OI$.`, a: r`$CI=\tfrac12CD=12$ (line from centre $\perp$ to chord). $OI^2+12^2=15^2\Rightarrow OI^2=81\Rightarrow OI=9$ cm.` },
    { n: '2.2', context: r`Same figure.`, q: r`Find $AB$.`, a: r`$OH\perp AB$, so $H$ is the midpoint of $AB$. $HB^2=15^2-12^2=81\Rightarrow HB=9$, so $AB=18$ cm.` },
    { n: '3', q: r`$ON\perp KL$ and $KL=10$ cm, $ON=3$ cm. Find $r$ ($=OK$).`, a: r`$KN=\tfrac12KL=5$ (line from centre $\perp$ to chord). $r^2=3^2+5^2=34$, so $r=\sqrt{34}\approx5{,}83$ cm.` },
    { n: '4', q: r`In the figure, $X$, $Y$ and $Z$ are points of tangency. $AX=6$ cm, $CZ=4$ cm and $BY=2$ cm. Find the perimeter of $\triangle ABC$.`, a: r`Tangents from the same point are equal: $AY=AX=6$, $CX=CZ=4$, $BZ=BY=2$. Perimeter $=2(6+4+2)=24$ cm.` },
    { n: '5', q: r`In the figure $OA\perp BC$, $AK=2$ cm and $KC=4$ cm. Find $OK$.`, a: r`$OA\perp BC$ so $K$ is the midpoint of the chord $BC$ and $BK=KC=4$. Let $OK=x$; the radius $OC=OA=x+2$. In $\triangle OKC$: $(x+2)^2=x^2+4^2\Rightarrow x^2+4x+4=x^2+16\Rightarrow4x=12\Rightarrow x=3$. So $OK=3$ cm.` },
    { n: '6', q: r`In the figure, $AC=6$ cm and $AB=3$ cm. Find $OB=r$. ($AC$ is a tangent at $C$, and $A$, $B$, $O$ lie on one line.)`, a: r`$OC=r$ and $OA=r+3$. Tan $\perp$ radius, so $\hat{ACO}=90^\circ$: $(r+3)^2=r^2+6^2\Rightarrow6r+9=36\Rightarrow r=4{,}5$ cm.` },
    { n: '7.1', context: r`In the figure, $AP=12$ and $OA=5$ ($PA$, $PB$ are tangents).`, q: r`Find $OP$.`, a: r`Tan $\perp$ radius: $\hat{OAP}=90^\circ$. $OP^2=12^2+5^2=169\Rightarrow OP=13$.` },
    { n: '7.2', context: r`Same figure.`, q: r`Find $BP$.`, a: r`$BP=AP=12$ (tangents from the same point).` },
    { n: '8', q: r`Prove that, if two segments from the same exterior point are tangent to a circle, then they are congruent. (Hint: draw $OA$ and $OB$.)`, a: r`Draw $OA$, $OB$, $OP$. In $\triangle OAP$ and $\triangle OBP$: $\hat A=\hat B=90^\circ$ (tan $\perp$ radius); $OA=OB$ (radii); $OP$ is common. So $\triangle OAP\equiv\triangle OBP$ (R.H.S.), hence $PA=PB$.` },
    { n: '9', q: r`In the circle with centre $O$, $OQ=4$ units and $PR=10$. Determine $x$ ($=OP$).`, a: r`$PQ=\tfrac12PR=5$ (line from centre $\perp$ to chord). $x^2=4^2+5^2=41$, so $x=\sqrt{41}\approx6{,}40$.` },
    { n: '10', q: r`In the circle with centre $O$ and radius $10$ units, $OQ\perp PR$ and $PR=8$. Determine the value of $x$ ($=OQ$).`, a: r`$PQ=4$. $x^2=10^2-4^2=84$, so $x=2\sqrt{21}\approx9{,}17$. (The ticked pencil answer $8$ on the page does not match these numbers.)` },
    { n: '11', q: r`In the circle with centre $O$, $OQ\perp PR$, $PR=12$ units and $SQ=2$ units. Determine the value of $x$ ($=OP=OR$, the radius).`, a: r`$PQ=6$ (perpendicular from the centre bisects the chord). $OQ=x-2$, so in $\triangle OQP$: $(x-2)^2+6^2=x^2\Rightarrow-4x+4+36=0\Rightarrow x=10$.` },
  ]),
]);

export const GEOM_UNIT_3E_LESSONS: Lesson[] = [E_TANGENTS];
