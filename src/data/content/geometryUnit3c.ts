import type { Figure, Lesson } from '../../lib/types';
import { r, h2, h3, p, note, fig, eq, solution, lesson as make } from './geomKit';

/**
 * Euclidean Geometry, section D, proportionality and midpoint theorems
 * (book pp. 116–118; photos …880 – …881). Photo …881 (left page) is partly out of focus; the
 * first worked example is read from its printed solution.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('geom-euclidean', id, title, minutes, blocks);

const parallelTri = (
  labels: { top: string; l: string; r: string; bl: string; br: string },
  ratio: number,
  segs: Record<string, string> = {},
): Figure => ({
  xRange: [-1, 9],
  yRange: [-0.8, 8],
  axes: false,
  points: [
    { id: 'A', label: labels.top, x: 4, y: 7, side: 'n', color: 'main' },
    { id: 'B', label: labels.bl, x: 0, y: 0, side: 'sw', color: 'main' },
    { id: 'C', label: labels.br, x: 8, y: 0, side: 'se', color: 'main' },
    { id: 'D', label: labels.l, x: 4 * (1 - ratio), y: 7 * (1 - ratio), side: 'w', color: 'green' },
    { id: 'E', label: labels.r, x: 4 + 4 * (1 - ratio), y: 7 * (1 - ratio), side: 'e', color: 'green' },
  ],
  polygons: [{ ids: ['A', 'B', 'C'] }],
  segments: [
    { from: 'D', to: 'E', arrow: true, label: segs.de },
    { from: 'B', to: 'C', arrow: true, label: segs.bc },
    { from: 'A', to: 'D', label: segs.ad },
    { from: 'D', to: 'B', label: segs.db },
    { from: 'A', to: 'E', label: segs.ae },
    { from: 'E', to: 'C', label: segs.ec },
  ],
});

export const D_PROPORTIONALITY = lesson('geom-u3-d-proportionality', 'D. Proportionality and Midpoint Theorems', 35, [
  h2('1. Proportionality theorem'),
  note(r`A line parallel to one side of a triangle divides the other two sides into parts of equal proportion.`),
  p(r`$DE\parallel BC$, and we get similar triangles.`),
  fig(parallelTri({ top: 'A', l: 'D', r: 'E', bl: 'B', br: 'C' }, 0.45, { ad: 'm', db: 'n', ae: 'x', ec: 'y' })),
  p(r`We can write:`),
  eq(r`\dfrac{AD}{DB}=\dfrac{AE}{EC}\quad\text{or}\quad\dfrac mn=\dfrac xy`),
  p(r`Questions may involve base sides ($DE$ and $BC$):`),
  eq(r`\dfrac{DE}{BC}=\dfrac{AD}{AB}=\dfrac{AE}{AC}\quad\text{(sides in ratio)}`),
  p(r`In some cases you might need the converse of the proportionality theorem:`),
  note(r`If a line divides two sides of a triangle proportionally then it is parallel to the third side of the triangle.`),
  h3('Question 1'),
  p(r`In the given diagram, find $y$. ($PH\parallel BC$; $AP=9$, $PB=3$, $AH=12$, $HC=y$.)`),
  solution([
    ['(proportionality th.)', r`\dfrac{9}{3}=\dfrac{12}{y}`],
    r`\therefore\;y=4`,
  ]),

  h2('2. Midpoint theorem'),
  note(r`A line joining the midpoints of two sides of a triangle is parallel to the third side and half as long as the third side.`),
  fig(parallelTri({ top: 'B', l: 'D', r: 'E', bl: 'A', br: 'C' }, 0.5)),
  eq(r`DE\parallel AC\quad\text{and}\quad DE=\dfrac12AC`),
  h3('Question 2'),
  p(r`Show that $MN=AK$. ($\triangle ABC$ is right-angled at $B$; $M$ is the midpoint of $CA$; $MN\perp CB$ and $MK\perp BA$.)`),
  solution([
    r`MK\parallel CB\;\text{and}\;CM=MA`,
    ['(midpoint th.)', r`\therefore\;BK=KA`],
    ['(parallelogram)', r`\text{But }NM=BK`],
    r`\therefore\;NM=KA`,
  ]),
  note(r`The midpoint theorem is just a special condition of the proportionality theorem. Both theorems work in both directions: if the lines are parallel then the sides are in proportion; if the sides are in proportion then the lines are parallel.`),

  h2('Worked examples'),
  h3('Question 1'),
  p(r`In the triangle $ABC$, $EF\parallel AC$, $AK=KD$, $BD=2DC$ and $AE=3$ cm. Find the length of $EB$. ($E$ is on $AB$; $D$ and $F$ are on $BC$; $K$ is on $EF$ with $AK=KD$.)`),
  solution([
    ['$K$ is the midpoint of $AD$ and $KF\\parallel AC$. Therefore (midpoint th.)', r`DF=FC`],
    ['Call $DF=FC=k$, then', r`BD=4k\quad(BD=2DC)`],
    ['Using $EF\\parallel AC$ (proportionality th.):', r`\dfrac{BE}{EA}=\dfrac{BF}{FC}=\dfrac{4k+k}{k}`],
    r`\dfrac{BE}{3}=\dfrac51\;\Rightarrow\;BE=15\text{ cm}`,
  ]),
  h3('Question 2'),
  p(r`In $\triangle ABC$, $AF=FE$, $DB=10$ cm, $BE:BC=2:5$. Find the length of $AD$. ($D$ is on $AB$, $E$ on $BC$, $F$ on $DC$... as drawn, with $EK\parallel CD$ and $K$ on $BD$.)`),
  solution([
    ['Mark $BE=2k$, $EC=3k$ (because $BC=5k$). In $\\triangle BCD$, $EK\\parallel CD$ and from the proportionality th.', r`BK=2a;\quad KD=3a`],
    ['Because $BD=10$ cm', r`2a+3a=10\;\Rightarrow\;a=2`],
    ['And', r`BK=4\text{ cm};\quad KD=6\text{ cm}`],
    ['In triangle $KAE$, $DC$ cuts the midpoint of $AE$ (as $AF=FE$) and $DC\\parallel KE$', r`\therefore\;DA=KD=6\text{ cm (midpoint th.)}`],
  ]),
  h3('Question 3'),
  p(r`In the figure, $DE\parallel BC$, $DF\parallel BE$, $AD:DB=3:1$ and $AF$ is $6$ cm. Find the lengths of $EF$ and $EC$.`),
  fig({
    xRange: [-1, 9],
    yRange: [-0.8, 8],
    axes: false,
    points: [
      { id: 'A', label: 'A', x: 4, y: 7, side: 'n', color: 'main' },
      { id: 'B', label: 'B', x: 0, y: 0, side: 'sw', color: 'main' },
      { id: 'C', label: 'C', x: 8, y: 0, side: 'se', color: 'main' },
      { id: 'D', label: 'D', x: 1, y: 1.75, side: 'w', color: 'green' },
      { id: 'E', label: 'E', x: 7, y: 1.75, side: 'e', color: 'green' },
      { id: 'F', label: 'F', x: 5.5, y: 4.4, side: 'e', color: 'green' },
    ],
    polygons: [{ ids: ['A', 'B', 'C'] }],
    segments: [
      { from: 'D', to: 'E', arrow: true },
      { from: 'D', to: 'F', arrow: true },
      { from: 'B', to: 'E', arrow: true },
      { from: 'A', to: 'D', label: '3k' },
      { from: 'D', to: 'B', label: 'k' },
      { from: 'A', to: 'F', label: '6' },
      { from: 'F', to: 'E', label: 'x' },
      { from: 'E', to: 'C', label: 'y' },
    ],
    caption: 'Not to scale; DF ∥ BE and DE ∥ BC.',
  }),
  solution([
    ['Mark $AD=3k$ and $BD=k$ (3:1). Using $DF\\parallel BE$ and proportionality th.', r`\dfrac{3k}{k}=\dfrac6x`],
    r`\dfrac31=\dfrac6x\;\Rightarrow\;x=2`,
    ['Using $DE\\parallel BC$ and proportionality th.', r`\dfrac{3k}{k}=\dfrac{6+2}{y}`],
    r`\dfrac31=\dfrac8y\;\Rightarrow\;y=\dfrac83=2{,}67`,
  ]),
  p(r`So $EF=2$ cm and $EC=2{,}67$ cm.`),
]);

export const GEOM_UNIT_3C_LESSONS: Lesson[] = [D_PROPORTIONALITY];
