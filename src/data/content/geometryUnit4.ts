import type { Figure, Lesson } from '../../lib/types';
import { GEOM_UNIT_4B_LESSONS } from './geometryUnit4b';
import { r, h2, h3, p, note, formula, fig, solution, lesson as make } from './geomKit';

/**
 * Paper 2 — Unit 4: Measurements (book pp. 140–143; photos …890 – …893).
 * Photo …891 does not exist in the set; the pages that follow the first worked examples
 * (more examples and the tasks) are not in the photos.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('geom-measurements', id, title, minutes, blocks);

type P = [number, number];

/** A prism drawn in oblique projection: a base polygon and the same polygon shifted by (dx, dy). */
const prism = (base: P[], dx: number, dy: number, caption: string): Figure => {
  const n = base.length;
  const top = base.map(([x, y]) => [x + dx, y + dy] as P);
  const pts = [...base, ...top];
  const xs = pts.map((q) => q[0]);
  const ys = pts.map((q) => q[1]);
  return {
    xRange: [Math.min(...xs) - 1, Math.max(...xs) + 1],
    yRange: [Math.min(...ys) - 1, Math.max(...ys) + 1],
    axes: false,
    points: pts.map((q, i) => ({ id: `p${i}`, label: '', x: q[0], y: q[1], hide: true })),
    segments: [
      ...base.map((_, i) => ({ from: `p${i}`, to: `p${(i + 1) % n}` })),
      ...base.map((_, i) => ({ from: `p${n + i}`, to: `p${n + ((i + 1) % n)}` })),
      ...base.map((_, i) => ({ from: `p${i}`, to: `p${n + i}`, dashed: i === 0 })),
    ],
    caption,
  };
};

const cylinder: Figure = {
  xRange: [-4, 4], yRange: [-4.2, 4.2], axes: false,
  ellipses: [{ cx: 0, cy: 3, rx: 2.4, ry: 0.7 }, { cx: 0, cy: -3, rx: 2.4, ry: 0.7, color: 'amber' }],
  points: [{ id: 'a', label: '', x: -2.4, y: 3, hide: true }, { id: 'b', label: '', x: -2.4, y: -3, hide: true }, { id: 'c', label: '', x: 2.4, y: 3, hide: true }, { id: 'd', label: '', x: 2.4, y: -3, hide: true }, { id: 'o', label: '', x: 0, y: -3, hide: true }, { id: 'e', label: '', x: 2.4, y: -3, hide: true }],
  segments: [{ from: 'a', to: 'b' }, { from: 'c', to: 'd' }, { from: 'o', to: 'e', dashed: true, label: 'r' }],
  texts: [{ x: -2.7, y: 0, text: 'H', anchor: 'end', color: 'alt' }],
  caption: 'Cylinder: V = πr²·H, SA = 2πr² + 2πr·H (two circles and one side rectangle).',
};

const cone: Figure = {
  xRange: [-4, 4], yRange: [-1.6, 6], axes: false,
  ellipses: [{ cx: 0, cy: 0, rx: 2.6, ry: 0.75, color: 'amber' }],
  points: [{ id: 'T', label: '', x: 0, y: 5.4, hide: true }, { id: 'L', label: '', x: -2.6, y: 0, hide: true }, { id: 'R', label: '', x: 2.6, y: 0, hide: true }, { id: 'B', label: '', x: 0, y: 0, hide: true }],
  segments: [{ from: 'T', to: 'L' }, { from: 'T', to: 'R', label: 's' }, { from: 'T', to: 'B', dashed: true, label: 'H' }, { from: 'B', to: 'R', dashed: true, label: 'r' }],
  angles: [{ at: 'B', from: 'R', to: 'T', right: true }],
  caption: 'Cone: V = ⅓πr²·H, SA = πr² + πr·s, and s² = H² + r².',
};

const sphere: Figure = {
  xRange: [-4, 4], yRange: [-4, 4], axes: false,
  circles: [{ cx: 0, cy: 0, r: 3.4, color: 'amber' }],
  ellipses: [{ cx: 0, cy: 0, rx: 3.4, ry: 0.9, dashed: true, fill: false }],
  points: [{ id: 'o', label: '', x: 0, y: 0, side: 's', color: 'alt' }, { id: 'e', label: '', x: 3.4, y: 0, hide: true }],
  segments: [{ from: 'o', to: 'e', dashed: true, label: 'r' }],
  caption: 'Sphere: V = (4/3)πr³, SA = 4πr².',
};

const pyramid: Figure = {
  xRange: [-1, 11], yRange: [-1, 9], axes: false,
  points: [
    { id: 'A', label: '', x: 0, y: 0, hide: true }, { id: 'B', label: '', x: 7, y: 0, hide: true }, { id: 'C', label: '', x: 10, y: 2, hide: true }, { id: 'D', label: '', x: 3, y: 2, hide: true },
    { id: 'T', label: '', x: 5, y: 8, hide: true }, { id: 'M', label: '', x: 5, y: 1, hide: true },
  ],
  segments: [
    { from: 'A', to: 'B' }, { from: 'B', to: 'C' }, { from: 'C', to: 'D', dashed: true }, { from: 'D', to: 'A', dashed: true },
    { from: 'T', to: 'A' }, { from: 'T', to: 'B' }, { from: 'T', to: 'C' }, { from: 'T', to: 'D', dashed: true },
    { from: 'T', to: 'M', dashed: true, color: 'alt', label: 'H' },
  ],
  caption: 'Pyramid: V = ⅓·A(base)·H, SA = A(base) + side triangles.',
};

export const MEASUREMENTS_SOLIDS = lesson('geom-u4-solids', 'Solids: Volume and Surface Area', 25, [
  h2('Prisms'),
  p(r`If the base of a prism is a triangle then it is called a triangular prism, and if the base is a rectangle then it is called a rectangular prism. A triangular prism has 3 rectangular sides, while a rectangular prism has 4 rectangular sides. Note that a cube is a special rectangular prism.`),
  fig(prism([[0, 0], [3, 0], [1.5, 2.6]], 3.2, 1.3, 'Triangular prism: V = A(base)·H, SA = 2A(base) + side rectangles.')),
  fig(prism([[0, 0], [4, 0], [4, 2.4], [0, 2.4]], 1.4, 1.4, 'Rectangular prism (a cube is the special case with all edges equal).')),
  formula('Prism', r`V=A_{\text{base}}\cdot H,\qquad SA=2A_{\text{base}}+\text{side rectangles}`),
  h2('Cylinder'),
  fig(cylinder),
  formula('Cylinder', r`V=\pi r^2\cdot H,\qquad SA=2\pi r^2+2\pi r\cdot H`),
  p(r`Surface area consists of 2 circles and 1 side rectangle.`),
  p(r`Now let’s look at solids different than prisms. A pyramid is a solid figure with a polygon base and triangular faces that meet at a common vertex. A cone is a solid that has a circular base and a single vertex. A sphere is a 3-dimensional object shaped like a ball. Every point on the surface is the same distance from the centre.`),
  h2('Pyramid'),
  fig(pyramid),
  formula('Pyramid', r`V=\dfrac13A_{\text{base}}\cdot H,\qquad SA=A_{\text{base}}+\text{side triangles}`),
  p(r`A triangular pyramid has 3 triangular sides, while a rectangular pyramid has 4 triangular sides. To find the area of the side triangles use the slant height ($s$ or $h$). You may also need Pythagoras’ theorem.`),
  h2('Cone'),
  fig(cone),
  formula('Cone', r`V=\dfrac13\pi r^2\cdot H,\qquad SA=\pi r^2+\pi r\cdot s`),
  p(r`Use Pythagoras’ theorem to see that:`),
  { type: 'math', text: r`s^2=H^2+r^2` },
  h2('Sphere'),
  fig(sphere),
  formula('Sphere', r`V=\dfrac43\pi r^3,\qquad SA=4\pi r^2`),
  note(r`Many times shapes can be combined or divided: think about the shape and try to apply the formulae correctly.`),

  h2('Worked examples'),
  h3('Question 1'),
  p(r`A reservoir for water for farmers is made of a cylindrical base with a cone-shaped top. The cylinder has diameter $4$ m and height $2{,}25$ m; the slant height of the cone is $3{,}5$ m. Calculate: 1.1 How many litres of water can the reservoir store if it is full? 1.2 If only the top must be painted, how many m² must be painted?`),
  solution([
    ['1.1 The shape is made of a cone and a cylinder.', r`V_{\text{cylinder}}=\pi r^2\cdot H=\pi\cdot2^2\cdot2{,}25=28{,}27\text{ m}^3`],
    ['To find the height of the cone use Pythagoras:', r`x^2+2^2=3{,}5^2`],
    r`x^2=12{,}25-4\;\Rightarrow\;x=2{,}87`,
    r`V_{\text{cone}}=\dfrac13\pi r^2\cdot H=\dfrac13\pi\cdot2^2\cdot2{,}87=12{,}02\text{ m}^3`,
    ['Therefore', r`V=28{,}27+12{,}02=40{,}29\text{ m}^3=40\,290\text{ litres}`],
    ['1.2 We need to find only the area of the lateral side of a cone:', r`A=\pi r\cdot s=\pi\cdot2\cdot3{,}5=21{,}99\text{ m}^2`],
  ]),
  note(r`The book’s last line writes $V_{\text{cone}}=40{,}29$; it is the total volume of cylinder and cone that is $40{,}29\text{ m}^3$. (Using unrounded values the total is $40{,}30\text{ m}^3$, and $1\text{ m}^3=1000$ litres.)`),
  h3('Question 2'),
  p(r`In the given hemisphere (radius $10$) find the volume and surface area.`),
  solution([
    ['The volume is half of the volume of a sphere:', r`V=\dfrac12\left(\dfrac43\pi r^3\right)=\dfrac12\left(\dfrac43\pi\cdot10^3\right)=2094{,}4`],
    ['Surface area consists of half of a sphere and the base circle:', r`SA=\dfrac12(4\pi r^2)+\pi r^2=\dfrac12(4\pi\cdot10^2)+\pi\cdot10^2=942{,}48`],
  ]),
  h3('Question 3'),
  p(r`In the square pyramid below the height is $12$ cm and the base side is $10$ cm. Find the surface area.`),
  solution([
    ['From the right triangle with legs $5$ and $12$, find the slant height:', r`h^2=5^2+12^2\;\Rightarrow\;h=13`],
    ['Therefore', r`SA=A_{\text{base}}+4\text{ triangles}`],
    r`SA=10^2+4\cdot\left(\dfrac12\cdot10\cdot13\right)=100+260`,
    r`SA=360\text{ cm}^2`,
  ]),
]);

export const GEOM_UNIT_4_LESSONS: Lesson[] = [MEASUREMENTS_SOLIDS, ...GEOM_UNIT_4B_LESSONS];
