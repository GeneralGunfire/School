import type { Figure, FigurePoint, Lesson } from '../../lib/types';
import { r, h2, h3, p, ul, note, eq, fig, solution, lesson as make } from './geomKit';
import { boxPlot } from './geometryUnit5a';

/**
 * Unit 5 Statistics: end of section A (comparing box plots), section B grouped data and
 * section C cumulative frequency and ogive (book pp. 154–157; photos …895 – …896).
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('geom-statistics', id, title, minutes, blocks);

const BINS = [20, 30, 40, 50, 60, 70, 80, 90, 100];
const FREQ = [2, 12, 25, 32, 35, 27, 14, 9];
const CUM = [2, 14, 39, 71, 106, 133, 147, 156];

const histogram: Figure = (() => {
  const points: FigurePoint[] = [];
  const polygons: { ids: string[] }[] = [];
  FREQ.forEach((f, i) => {
    const a = `b${i}a`, b = `b${i}b`, c = `b${i}c`, d = `b${i}d`;
    points.push(
      { id: a, label: '', x: BINS[i], y: 0, hide: true }, { id: b, label: '', x: BINS[i + 1], y: 0, hide: true },
      { id: c, label: '', x: BINS[i + 1], y: f, hide: true }, { id: d, label: '', x: BINS[i], y: f, hide: true },
    );
    polygons.push({ ids: [a, b, c, d] });
  });
  return {
    xRange: [10, 105], yRange: [0, 40], xStep: 10, yStep: 5, axes: true, grid: true, stretch: 2.2, points, polygons,
    texts: FREQ.map((f, i) => ({ x: (BINS[i] + BINS[i + 1]) / 2, y: f + 1.8, text: String(f), color: 'muted' as const })),
    caption: 'Histogram of the math-test scores (x-axis: scores, y-axis: frequency).',
  };
})();

const ogive: Figure = (() => {
  const xs = [20, ...BINS.slice(1)];
  const ys = [0, ...CUM];
  const f = (x: number) => {
    for (let i = 0; i < xs.length - 1; i++) if (x <= xs[i + 1]) return ys[i] + ((x - xs[i]) / (xs[i + 1] - xs[i])) * (ys[i + 1] - ys[i]);
    return ys[ys.length - 1];
  };
  const points: FigurePoint[] = xs.map((x, i) => ({ id: `o${i}`, label: '', x, y: ys[i], color: 'main' as const }));
  const q = [[50, 39, 'Q₁'], [62, 78, 'Q₂'], [74, 117, 'Q₃']] as const;
  const segments: NonNullable<Figure['segments']> = [];
  q.forEach(([x, y, name], i) => {
    points.push(
      { id: `qa${i}`, label: '', x: 10, y, hide: true }, { id: `qp${i}`, label: name, x, y, side: 'se', color: 'alt' },
      { id: `qx${i}`, label: String(x), x, y: 0, side: 's', color: 'alt' },
    );
    segments.push({ from: `qa${i}`, to: `qp${i}`, dashed: true, color: 'alt' }, { from: `qp${i}`, to: `qx${i}`, dashed: true, color: 'alt' });
  });
  return {
    xRange: [10, 105], yRange: [0, 165], xStep: 10, yStep: 20, axes: true, grid: true, stretch: 0.33,
    curves: [{ fn: f, domain: [20, 100] }], points, segments,
    caption: 'Ogive (cumulative frequency graph). Q₁ = 50, Q₂ = 62, Q₃ = 74.',
  };
})();

const skew = (fn: (x: number) => number, caption: string): Figure => ({
  xRange: [0, 10], yRange: [0, 1.2], axes: false, stretch: 1.4,
  curves: [{ fn, color: 'green' }],
  points: [{ id: 'a', label: '', x: 0, y: 0, hide: true }, { id: 'b', label: '', x: 10, y: 0, hide: true }],
  segments: [{ from: 'a', to: 'b', color: 'amber', arrow: true }],
  caption,
});
const bump = (m: number, sl: number, sr: number) => (x: number) => Math.exp(-((x - m) ** 2) / (2 * (x < m ? sl : sr) ** 2));

export const A_COMPARE = lesson('geom-u5-a-compare', 'A. Comparing Distributions', 15, [
  note(r`When you compare two similar diagrams, skew to the left means having higher values than skew to the right (opposite thinking!).`),
  h2('Example'),
  p(r`Compare the performances of class A and class B. (Class A: min $34$, $Q_1=48$, $Q_2=70$, $Q_3=77$, max $90$. Class B: min $37$, $Q_1=50$, $Q_2=65$, $Q_3=76$, max $90$ — read from the book’s diagram.)`),
  fig(boxPlot({ min: 34, q1: 48, q2: 70, q3: 77, max: 90 }, [30, 90, 10], 'Class A')),
  fig(boxPlot({ min: 37, q1: 50, q2: 65, q3: 76, max: 90 }, [30, 90, 10], 'Class B')),
  p(r`Class A performed better because it skewed more to the left than Class B (its median and upper values are higher). You may find more reasons and explain in different ways.`),
]);

export const B_GROUPED = lesson('geom-u5-b-grouped', 'B. Grouped Data', 30, [
  h2('Frequency tables and histograms'),
  p(r`Most of the time statistics deals with a large amount of data. In that case we group our values. Frequency is the number of times a value occurs in a survey.`),
  h3('Example: scores on a math test'),
  eq(
    String.raw`\begin{array}{c|c} \text{Score intervals} & \text{Frequency }(f)\\\hline 20\le x<30 & 2\\ 30\le x<40 & 12\\ 40\le x<50 & 25\\ 50\le x<60 & 32\\ 60\le x<70 & 35\\ 70\le x<80 & 27\\ 80\le x<90 & 14\\ 90\le x<100 & 9\end{array}`,
  ),
  p(r`A histogram shows us frequencies on the graph.`),
  fig(histogram),
  p(r`We can calculate the mean and mode of grouped data, but those will be approximate values:`),
  ul([
    r`a) The mode group is $60\le x<70$.`,
    r`b) To calculate an approximate mean we have to add up all values and then divide by $n$. Using the midpoint of each interval: two $25$s, twelve $35$s, twenty-five $45$s, thirty-two $55$s, and so on.`,
  ]),
  solution([
    r`\bar x=\dfrac{2(25)+12(35)+25(45)+32(55)+\dots+9(95)}{156}`,
    r`=\dfrac{9\,700}{156}=62{,}18`,
  ]),
  { type: 'math', label: 'Approximate mean (grouped data)', text: r`\bar x=\dfrac{\sum(\text{midpoint of each interval}\cdot\text{frequency})}{\text{number of total values}}` },
  p(r`To find the median and quartiles use a cumulative frequency graph. Often frequencies of variables are represented with curves (similar to a histogram or frequency polygon).`),

  h2('Interpretations of distribution of data'),
  h3('Data is evenly distributed (normal distribution)'),
  ul([r`Left and right parts are the same in size.`, r`The shape is symmetrical.`, r`Mean and median values are very close.`]),
  fig(skew(bump(5, 2, 2), 'Normal distribution curve: symmetric, with the median in the middle.')),
  h3('Data is skewed to the left (negatively skewed)'),
  ul([r`The left side is bigger and longer than the right.`, r`The shape is NOT symmetrical.`, r`Mean is less than median.`]),
  fig(skew(bump(6.5, 3, 1.2), 'Negative (left) skew: a long tail on the left.')),
  h3('Data is skewed to the right (positively skewed)'),
  ul([r`The right side is bigger and longer than the left.`, r`The shape is NOT symmetrical.`, r`Mean is more than median.`]),
  fig(skew(bump(3.5, 1.2, 3), 'Positive (right) skew: a long tail on the right.')),
  p(r`The matching box plots: a left-skewed distribution has the median closer to $Q_3$; a right-skewed one has it closer to $Q_1$; a symmetric one has it in the middle of the box.`),
]);

export const C_OGIVE = lesson('geom-u5-c-ogive', 'C. Cumulative Frequency and Ogive', 30, [
  h2('Cumulative frequency'),
  p(r`Cumulative frequency shows the number of observations in a data set that is less than a particular value. The graph that represents cumulative frequencies is called an ogive.`),
  h3('Example'),
  eq(
    String.raw`\begin{array}{c|cc} \text{Score intervals} & f & \text{Cum. freq}\\\hline 20\le x<30 & 2 & 2\\ 30\le x<40 & 12 & 14\\ 40\le x<50 & 25 & 39\\ 50\le x<60 & 32 & 71\\ 60\le x<70 & 35 & 106\\ 70\le x<80 & 27 & 133\\ 80\le x<90 & 14 & 147\\ 90\le x<100 & 9 & 156\end{array}`,
  ),
  ul([
    r`$2$ people have less than $30$`,
    r`$14$ people have less than $40$`,
    r`$39$ people have less than $50$`,
    r`$\dots$`,
    r`$156$ people have less than $100$`,
  ]),
  fig(ogive),
  note(r`Don’t forget to join $y=0$ (the graph starts at the lower end of the first interval, $x=20$). It is important to understand that a cumulative frequency graph will never decrease.`),
  h2('Finding the median and quartiles'),
  p(r`The ogive allows us to find the median and quartiles. If there are $156$ “ordered” people, then the middle person will have the median score. In the same way “quarter” persons will have the quartile scores.`),
  ul([
    r`To find $Q_2$ start from the $78^{\text{th}}$ person ($156\div2$).`,
    r`To find $Q_1$ and $Q_3$ start from the $39^{\text{th}}$ and $117^{\text{th}}$ persons respectively.`,
  ]),
  p(r`Read across from the cumulative frequency to the graph, then down to the scores axis:`),
  { type: 'math', text: r`Q_1=50\qquad Q_2=62\qquad Q_3=74` },
  h3('How many students have: (a) less than 45 marks; (b) more than 75?'),
  p(r`Start from the scores line (75 in this example is a score of 75). Read up to the graph, then across to the cumulative frequency axis.`),
  solution([
    ['a) At $45$ marks the graph reads', r`\approx26\text{ people}`],
    ['b) At $75$ marks the graph reads $119$, so the number above $75$ is', r`156-119=37\text{ people}`],
  ]),
]);

export const GEOM_UNIT_5B_LESSONS: Lesson[] = [A_COMPARE, B_GROUPED, C_OGIVE];
