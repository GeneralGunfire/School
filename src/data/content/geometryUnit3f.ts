import type { Lesson } from '../../lib/types';
import { r, h2, h3, p, note, fig, qs, solution, lesson as make, ANSWERS_NOTE } from './geomKit';

/**
 * Euclidean Geometry: end of Task 6 (book p. 128) and section F, angles at the centre and at the
 * circumference (book pp. 129–131; photos …886 – …887). The left page of …887 is the last
 * page with theory; its right page is the start of the worked examples.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('geom-euclidean', id, title, minutes, blocks);

/** A circle of radius 4 with labelled points given by angle (degrees) on the circumference. */
const onCircle = (deg: number) => ({ x: 4 * Math.cos((deg * Math.PI) / 180), y: 4 * Math.sin((deg * Math.PI) / 180) });

export const E_TASK_6_END = lesson('geom-u3-e-task-6-end', 'E. Task 6 (continued)', 10, [
  h2('Task 6 (continued)'),
  ANSWERS_NOTE,
  qs([
    { n: '13', q: r`In the circle with centre $O$, $OT\perp SQ$, $OT\perp PR$ ($T$ on $SQ$, $U$ on $PR$), $OP=10$ units, $ST=5$ units, $PU=8$ units. Determine $TU$.`, a: r`$OU\perp PR$ bisects the chord; in $\triangle OPU$: $OU^2=10^2-8^2=36\Rightarrow OU=6$. $OS=OP=10$, so in $\triangle OST$: $OT^2=10^2-5^2=75\Rightarrow OT=5\sqrt3$. $TU=OT-OU=5\sqrt3-6\approx2{,}66$ units.` },
    { n: '14', q: r`In the circle with centre $O$, $OT\perp PQ$, $OS\perp PR$, $OT=5$ units, $PQ=24$ and $PR=25$ units. Determine $x$ ($=OS$). (The book prints “$OT\perp OP$”; from the figure the right angle is at $T$ on $PQ$.)`, a: r`$PT=\tfrac12PQ=12$, so $OP^2=5^2+12^2=169\Rightarrow OP=13$. $PS=\tfrac12PR=12{,}5$, so $x^2=13^2-12{,}5^2=12{,}75\Rightarrow x=\dfrac{\sqrt{51}}{2}\approx3{,}57$ units.` },
    { n: '15', q: r`$KL$ and $LN$ are tangents to a circle with centre $O$ ($OK=2$ cm is a radius, $KL=6$ cm, $OL=2\sqrt{10}$ cm, $LM=6$ cm where $M$ is the point of contact on $LN$, $MN=1{,}5$ cm and $LN=7{,}5$ cm). Find the length of $e$ ($=ON$).`, a: r`$OM$ is a radius ($=2$ cm) and $OM\perp LN$ (tan $\perp$ radius). In $\triangle OMN$: $e^2=OM^2+MN^2=2^2+1{,}5^2=6{,}25\Rightarrow e=2{,}5$ cm.` },
  ]),
]);

export const F_CIRCLE_ANGLES = lesson('geom-u3-f-circle-angles', 'F. Angles at the Centre and at the Circumference', 40, [
  h2('Central angle and angle at the circumference'),
  p(r`An angle whose vertex is at the centre of a circle is called a central angle or angle at the centre of the circle. Angle $O$ is an example of an angle at the centre (it stands on the arc $AB$).`),
  p(r`An angle whose vertex lies on a circle and whose sides are the chords of the circle is called an angle at the circumference. Angle $B$ (standing on the same arc) is an example of an angle at the circle.`),

  h2('Theorem 4'),
  note(r`The angle subtended by an arc at the centre of a circle is double the size of the angle subtended by the same arc at the circle: $\angle$ at centre $=2\cdot\angle$ at circumference.`),
  fig({
    xRange: [-5, 5], yRange: [-5, 5], axes: false,
    circles: [{ cx: 0, cy: 0, r: 4 }],
    points: [
      { id: 'O', label: 'O', x: 0, y: 0, side: 'sw', color: 'alt' },
      { id: 'B', label: 'B', x: -4, y: 0, side: 'w', color: 'main' },
      { id: 'C', label: 'C', ...onCircle(60), side: 'ne', color: 'main' },
      { id: 'A', label: 'A', ...onCircle(-60), side: 'se', color: 'main' },
    ],
    segments: [{ from: 'B', to: 'C' }, { from: 'B', to: 'A' }, { from: 'O', to: 'C', color: 'alt' }, { from: 'O', to: 'A', color: 'alt' }],
    angles: [{ at: 'B', from: 'A', to: 'C', label: 'α', radius: 40 }, { at: 'O', from: 'A', to: 'C', label: '2α', radius: 22 }],
    caption: 'Angle at the centre AÔC = 2 × angle at the circumference ABC.',
  }),
  h3('Proof'),
  p(r`Draw line $BO$ until it cuts the circle at $E$. Let $\hat B_1=a$ and $\hat B_2=b$.`),
  solution([
    ['($OB=OC$, radii)', r`\hat B_1=\hat C_2=a\quad\text{(isosceles)}`],
    ['', r`\hat O_1=2a\quad\text{(exterior angle of triangle)}`],
    ['($OB=OA$, radii)', r`\hat B_2=\hat A=b\quad\text{(isosceles)}`],
    ['', r`\hat O_2=2b\quad\text{(exterior angle of triangle)}`],
    ['', r`\text{Therefore }\hat O=2\hat B\quad(2a+2b\text{ and }a+b)`],
  ]),

  h2('Theorem 5'),
  p(r`So if an angle at the circumference is half of the central one then:`),
  note(r`Angles subtended by a chord of the circle on the same side of the chord are equal: $\angle$s in the same segment.`),
  fig({
    xRange: [-5, 5], yRange: [-5, 5], axes: false,
    circles: [{ cx: 0, cy: 0, r: 4 }],
    points: [
      { id: 'A', label: 'A', ...onCircle(60), side: 'ne', color: 'main' }, { id: 'B', label: 'B', ...onCircle(-30), side: 'e', color: 'main' },
      { id: 'C', label: 'C', ...onCircle(130), side: 'nw', color: 'green' }, { id: 'D', label: 'D', ...onCircle(165), side: 'w', color: 'green' },
      { id: 'E', label: 'E', ...onCircle(200), side: 'sw', color: 'green' }, { id: 'F', label: 'F', ...onCircle(235), side: 's', color: 'green' },
    ],
    segments: ['C', 'D', 'E', 'F'].flatMap((v) => [{ from: v, to: 'A' }, { from: v, to: 'B' }]),
    caption: 'Ĉ = D̂ = Ê = F̂, because all of them are in the same segment and stand on the chord AB.',
  }),
  p(r`For example, in the figure, $\hat C=\hat D=\hat E=\hat F$, because all of them are in the same segment and they have the common angle at the centre.`),
  h3('Question 1'),
  p(r`Find the values of $x$ and $y$. ($BD$ is a diameter through $O$; $\hat{BAC}$-type angles as marked: the angle at $A$ is $20^\circ$.)`),
  solution([
    ['($\\angle$s in same segment)', r`x=20^\circ`],
    ['($\\angle$ at centre $=2\\angle$ at circumference)', r`y=40^\circ`],
  ]),

  h2('Theorem 6'),
  note(r`The angle subtended by the diameter at the circumference of the circle is in a semicircle and is $90^\circ$: $\angle$ in semi-circle, or diameter subtends right angle.`),
  fig({
    xRange: [-5, 5], yRange: [-5, 5], axes: false,
    circles: [{ cx: 0, cy: 0, r: 4 }],
    points: [
      { id: 'A', label: 'A', x: -4, y: 0, side: 'w', color: 'main' }, { id: 'B', label: 'B', x: 4, y: 0, side: 'e', color: 'main' },
      { id: 'O', label: 'O', x: 0, y: 0, side: 's', color: 'alt' },
      { id: 'M', label: 'M', ...onCircle(125), side: 'nw', color: 'green' }, { id: 'N', label: 'N', ...onCircle(75), side: 'n', color: 'green' },
      { id: 'L', label: 'L', ...onCircle(-50), side: 'se', color: 'green' },
    ],
    segments: ['M', 'N', 'L'].flatMap((v) => [{ from: v, to: 'A' }, { from: v, to: 'B' }]).concat([{ from: 'A', to: 'B' }]),
    angles: [{ at: 'M', from: 'B', to: 'A', right: true }, { at: 'N', from: 'B', to: 'A', right: true }, { at: 'L', from: 'A', to: 'B', right: true }],
    caption: 'AB is a diameter: the angle at the circumference is 90° wherever the point is.',
  }),
  p(r`You can see that the central angle is $180^\circ$, therefore the angles at the circle are $90^\circ$ (half of central).`),

  h2('Worked examples'),
  h3('Question 1'),
  p(r`Find $x$. ($AB$ is a diameter, $\hat{CAB}=10^\circ$, and $x=\hat{ADC}$ with $\hat D_1$ standing on $BC$.)`),
  solution([
    ['($\\angle$s in the same seg.)', r`\hat A_1=\hat D_1`],
    ['($\\angle$ in semi-circle)', r`A\hat DB=90^\circ`],
    r`\therefore\;x=90^\circ-10^\circ=80^\circ`,
  ]),
  h3('Question 2'),
  p(r`Find $x$. (Chords $AD$ and $BC$ meet at $E$ inside the circle; $\hat A=30^\circ$, $\hat{BED}=70^\circ$, $x=\hat D$.)`),
  solution([
    ['($\\angle$s in the same seg.)', r`\hat C=\hat A=30^\circ`],
    ['(ext $\\angle$ of triangle)', r`x+30^\circ=70^\circ`],
    r`\therefore\;x=40^\circ`,
  ]),
  h3('Question 3'),
  p(r`Find the size of $x$. ($\hat{AOC}=120^\circ$ is the central angle; $\hat C=35^\circ$ at the circumference; $x=\hat{OAB}$.)`),
  note(r`Join $OB$. In many examples it is wise to join a point with the centre, obtaining isosceles triangle(s).`),
  solution([
    ['($\\angle$ opp equal sides)', r`\hat B_2=35^\circ`],
    ['($\\angle$ opp equal sides)', r`\hat B_1=x`],
    ['($\\angle$ at centre $=2\\angle$ at circumference)', r`x+35^\circ=60^\circ`],
    r`\therefore\;x=25^\circ`,
  ]),
]);

export const GEOM_UNIT_3F_LESSONS: Lesson[] = [E_TASK_6_END, F_CIRCLE_ANGLES];
