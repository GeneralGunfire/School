import type { Figure, Lesson } from '../../lib/types';
import { r, h2, h3, p, ul, note, eq, fig, qs, lesson as make, ANSWERS_NOTE } from './geomKit';
import { boxPlot } from './geometryUnit5a';

/**
 * Unit 5 Statistics: sections D (standard deviation) and E (bivariate data, scatter plots) and
 * Task 3 (book pp. 162–165; photos …899 – …900). Page 161 and the second half of page 163 are
 * not both in the photos; the lesson follows the pages that are.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('geom-statistics', id, title, minutes, blocks);

/** Scatter plot with points and an optional best-fit curve. */
const scatter = (pts: [number, number][], xr: [number, number], yr: [number, number], caption: string, fit?: (x: number) => number, steps?: { x?: number; y?: number }): Figure => ({
  xRange: xr, yRange: yr, axes: true, grid: true, xStep: steps?.x, yStep: steps?.y,
  points: pts.map((q, i) => ({ id: `s${i}`, label: '', x: q[0], y: q[1], color: 'alt' as const })),
  curves: fit ? [{ fn: fit, domain: xr, color: 'main' as const }] : [],
  caption,
});

const seeded = (() => { let s = 7; return () => ((s = (s * 16807) % 2147483647) / 2147483647 - 0.5); })();
const cloud = (f: (x: number) => number, n: number, xr: [number, number], noise: number): [number, number][] =>
  Array.from({ length: n }, (_, i) => { const x = xr[0] + ((i + 0.5) / n) * (xr[1] - xr[0]); return [x, f(x) + seeded() * noise] as [number, number]; });

const small = (pts: [number, number][], fit: ((x: number) => number) | undefined, caption: string): Figure => ({
  xRange: [0, 10], yRange: [0, 10], axes: false, stretch: 0.8,
  points: [{ id: 'o', label: '', x: 0, y: 0, hide: true }, { id: 'x', label: '', x: 10, y: 0, hide: true }, { id: 'y', label: '', x: 0, y: 10, hide: true },
    ...pts.map((q, i) => ({ id: `p${i}`, label: '', x: q[0], y: q[1], color: 'alt' as const }))],
  segments: [{ from: 'o', to: 'x', arrow: true, color: 'muted' }, { from: 'o', to: 'y', arrow: true, color: 'muted' }],
  curves: fit ? [{ fn: fit, domain: [0.3, 9.7] as [number, number] }] : [],
  caption,
});

export const D_STANDARD_DEVIATION = lesson('geom-u5-d-sd', 'D. Standard Deviation', 25, [
  h2('Spread of data'),
  p(r`Sets of data can have their values close to the mean or very spread out. The value of the standard deviation gives an idea about the spread of the data. To measure this dispersion of data, we use a measure of variability.`),
  p(r`The variance is the average of the squares of the distances of each value from the mean. Suppose we represent each value in the set by the variable $x$, the mean of the data is $\bar x$, and the number of elements in the set is $n$.`),
  p(r`For each element $x$, we calculate $(x-\bar x)$ (called the deviation of that value), then square it, then add up all of those numbers. Here $\bar x=86$:`),
  eq(
    String.raw`\begin{array}{c|cc} x & (x-\bar x) & (x-\bar x)^2\\\hline 78&-8&64\\78&-8&64\\80&-6&36\\80&-6&36\\80&-6&36\\88&2&4\\91&5&25\\92&6&36\\95&9&81\\98&12&144\\\hline \text{Sum}&&526\end{array}`,
  ),
  p(r`Now that we have the sum of the squares, finding the average of the squared deviations is easy:`),
  eq(r`\dfrac{526}{10}=52{,}6`),
  p(r`That value, $52{,}6$, is the variance. The reason that we squared the values was to eliminate the negative deviations. Now we can take the square root of the variance and get the standard deviation.`),
  { type: 'math', label: 'Standard deviation', text: r`\sigma=SD=\sqrt{\dfrac{\sum(x-\bar x)^2}{n}}` },
  p(r`Standard deviation of a set of data is the square root of its variance. Therefore the standard deviation (represented by $\sigma$) is: $\sigma=\sqrt{52{,}6}\approx7{,}25$.`),
  h3('The meaning'),
  p(r`Standard deviation is a number that shows the spread of the data. The larger its value, the wider the data is spread. In the example the mean ($\bar x$) is $86$ and $SD$ is $7{,}25$. Because $SD$ is a relatively small number (compared to $86$) we can predict that scores are close to the centre.`),
  ul([
    r`$\bar x\pm1\,SD$ (one SD from the mean): this interval represents $68\%$ of the data. In normally distributed data $68\%$ of the values are expected to be within one standard deviation of the mean: $86\pm7{,}25$. Here the interval is from $78{,}75$ to $93{,}25$. Six of the numbers ($80,\,80,\,80,\,88,\,91,\,92$) lie in this interval.`,
    r`$\bar x\pm2\,SD$ (two SD from the mean): this interval represents $95\%$ of the data: $86\pm2(7{,}25)$. Here the interval is from $71{,}5$ to $100{,}5$. All ten of the numbers lie in this interval.`,
    r`Also, there is three standard deviations from the mean ($\bar x\pm3\,SD$), which covers about $99{,}7\%$ of normally distributed data.`,
  ]),
  note(r`The book’s first interval reads “six of the numbers lie in this interval”; checking: $78{,}75\le x\le93{,}25$ contains $80,\,80,\,80,\,88,\,91,\,92$, that is six numbers, as stated. The page does not give the $99{,}7\%$ figure; it is the standard value for $\pm3\,SD$.`),
]);


export const E_SCATTER = lesson('geom-u5-e-scatter', 'E. Bivariate Data and Scatter Plots', 25, [
  h2('Bivariate data'),
  p(r`Sometimes we have two different data sets related to each other, e.g. the relation between learners’ exam scores and their hours spent studying, or the number of students and tuck-shop sales. We call these data types bivariate data.`),
  p(r`A scatter plot is a graph that shows the relationship between two variables (bivariate data).`),
  h3('Example'),
  eq(String.raw`\begin{array}{c|cccccc} \text{Score} & 45&50&65&75&80&95\\\hline \text{Time spent studying (min)} & 20&30&55&90&120&150\end{array}`),
  fig({
    ...scatter([[45, 20], [50, 30], [65, 55], [75, 90], [80, 120], [95, 150]], [40, 100], [0, 160], 'Scatter plot of score against study time, with the line of best fit.', (x) => 2.65 * (x - 41), { x: 10, y: 20 }),
    stretch: 0.26,
  }),
  p(r`Also we can draw “the best fit line”: try to draw a line that will leave the same number of dots on both sides. Sometimes data can spread very complicated and “the line of best fit” may be a parabola, exponential or quadratic graph.`),
  note(r`The best-fit line drawn here is an eye-fitted line through the middle of the points: $y\approx2{,}65(x-41)$.`),
  p(r`An outlier is a point on a scatter plot which is not close to the other points.`),
  ul([
    r`Positive trend: if a line of best fit has a positive gradient, we say that the data has a positive trend. As the variable on the $x$-axis increases, the variable on the $y$-axis also increases.`,
    r`Negative trend: if a line of best fit has a negative gradient, we say that the data has a negative trend. As the variable on the $x$-axis increases, the variable on the $y$-axis decreases.`,
  ]),
  p(r`If the points on the scatter plot are close to the line of best fit, we have a strong correlation between the two variables. If the points are not so close to the line of best fit, we have a weak correlation between the two variables.`),
  h3('Examples of plots and lines of best fit'),
  fig(small(cloud((x) => 1.5 + 0.55 * x, 14, [0.5, 9.5], 1.2), (x) => 1.5 + 0.55 * x, 'Positive trend')),
  fig(small(cloud((x) => 8 - 0.6 * x, 14, [0.5, 9.5], 1.2), (x) => 8 - 0.6 * x, 'Negative trend')),
  fig(small(cloud((x) => 1 + 1.0 * x, 12, [1, 9], 0.6), (x) => 1 + x, 'Linear (strong correlation)')),
  fig(small(cloud((x) => 1 + 2 * x - 0.2 * x * x, 14, [0.5, 9.5], 0.8), (x) => 1 + 2 * x - 0.2 * x * x, 'Quadratic')),
  fig(small(cloud((x) => 0.3 * Math.exp(0.33 * x) + 0.3, 14, [0.5, 9.5], 0.5), (x) => 0.3 * Math.exp(0.33 * x) + 0.3, 'Exponential')),
  fig(small([[1.5, 8], [4, 5], [6, 5.5], [8, 7], [3, 3], [5.5, 2.5], [8.5, 4], [2, 6.2], [7, 1.5]], undefined, 'No trend')),
  fig(
    (() => {
      const base = cloud((x) => 1 + 0.9 * x, 8, [1, 9], 0.8);
      return small([...base, [1.2, 8.4], [8.2, 1.1]], (x) => 1 + 0.9 * x, 'Data outliers: the two circled-in-the-book points far from the line');
    })(),
  ),
  h3('Examples of different outliers'),
  p(r`On a box plot an outlier is drawn as a separate square beyond the whiskers: in the book, a symmetric box with no outlier, a negatively skewed box with an outlier at the low end, and a positively skewed box with an outlier at the high end.`),
  fig(boxPlot({ min: 0, q1: 10, q2: 30, q3: 40, max: 50 }, [0, 60, 10], 'Symmetric: no outliers (illustrative values).')),
]);

export const TASK_3 = lesson('geom-u5-task-3', 'Statistics: Task 3', 15, [
  h2('Task 3'),
  ANSWERS_NOTE,
  fig(scatter([[2002, 9.2], [2003, 6.4], [2004, 5.0], [2005, 3.5], [2006, 4.8], [2007, 6.4], [2008, 11.6], [2009, 14]], [2001.5, 2009.5], [0, 15], 'Question 4.1 — scatter diagram of the CPI, with a best-fit quadratic curve.', (x) => 0.623 * (x - 2005) ** 2 + 0.152 * (x - 2005) + 4.11, { x: 1, y: 5 })),
  qs([
    { n: '1.1', context: r`The masses of $5$ grade 12 boys: $75,\,62,\,83,\,70,\,90$.`, q: r`Find the mean.`, a: r`$\bar x=\dfrac{75+62+83+70+90}{5}=\dfrac{380}{5}=76$.` },
    { n: '1.2', context: r`Same data.`, q: r`Calculate the standard deviation of the data without use of a calculator.`, a: r`Deviations: $-1,\,-14,\,7,\,-6,\,14$; squares $1,\,196,\,49,\,36,\,196$ (sum $478$). Variance $=\dfrac{478}{5}=95{,}6$, so $\sigma=\sqrt{95{,}6}\approx9{,}78$.` },
    { n: '2', q: r`The average weight of six people in a lift is $75$ kg. On the first floor somebody who weighs $100$ kg got off and on the second floor a person of $60$ kg gets on. Calculate the new average of the weight.`, a: r`Total weight $=6\cdot75=450$. New total $=450-100+60=410$ for the same number of people ($6-1+1$): $\dfrac{410}{6}=68{,}33$ kg.` },
    { n: '3', q: r`Consider the following data and calculate the standard deviation: $1,\,2,\,9,\,16,\,17$.`, a: r`$\bar x=\dfrac{45}{5}=9$. Deviations $-8,\,-7,\,0,\,7,\,8$; squares $64,\,49,\,0,\,49,\,64$ (sum $226$). $\sigma=\sqrt{\dfrac{226}{5}}=\sqrt{45{,}2}\approx6{,}72$.` },
    { n: '4.1', marks: 3, context: r`The consumer price index (CPI) for January: $2002$: $9{,}2$; $2003$: $6{,}4$; $2004$: $5{,}0$; $2005$: $3{,}5$; $2006$: $4{,}8$; $2007$: $6{,}4$; $2008$: $11{,}6$; $2009$: $14$.`, q: r`Draw a scatter diagram for the data.`, a: r`Plot the eight points $(\text{year};\,\text{CPI})$ (figure above).` },
    { n: '4.2', context: r`Same data.`, q: r`Suggest whether a linear, quadratic or exponential function would best fit the data. Draw this line or curve of best fit on the same system of axes.`, a: r`The CPI falls to a minimum around $2005$ and then rises, so the points form a U-shape: a quadratic function (parabola opening upward) fits best. A least-squares quadratic is $y\approx0{,}62(x-2005)^2+0{,}15(x-2005)+4{,}1$ (drawn above).` },
    { n: '4.3', context: r`Same data.`, q: r`Estimate, by using a curve of best fit, the CPI for June 2008.`, a: r`June $2008$ is about $2008{,}5$, i.e. $x-2005=3{,}5$: $0{,}62(3{,}5)^2+0{,}15(3{,}5)+4{,}1\approx12{,}3$. Reading off a hand-drawn curve, an answer of about $12$ to $13$ is acceptable.` },
  ]),
]);

export const GEOM_UNIT_5D_LESSONS: Lesson[] = [D_STANDARD_DEVIATION, E_SCATTER, TASK_3];

