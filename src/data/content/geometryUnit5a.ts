import type { Figure, Lesson } from '../../lib/types';
import { r, h2, h3, p, note, fig, eq, solution, lesson as make } from './geomKit';

/**
 * Paper 2 — Unit 5: Statistics, section A, basics (book pp. 152–153; photos …894 – …895).
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('geom-statistics', id, title, minutes, blocks);

/** A box-and-whisker diagram drawn on a number line from the five-number summary. */
export const boxPlot = (
  s: { min: number; q1: number; q2: number; q3: number; max: number },
  axis: [number, number, number],
  caption: string,
  quarters = false,
): Figure => {
  const [a, b, step] = axis;
  const ticks: { x: number; y: number; text: string }[] = [];
  for (let v = a; v <= b + 1e-9; v += step) ticks.push({ x: v, y: -0.55, text: String(v) });
  const span = b - a;
  return {
    xRange: [a - span * 0.04, b + span * 0.04],
    yRange: [-1, 3.2],
    axes: false,
    stretch: 150 / (4.2 * ((520 - 44) / (span * 1.08))),
    points: [
      { id: 'min', label: '', x: s.min, y: 1.5, hide: true }, { id: 'q1', label: '', x: s.q1, y: 1.5, hide: true },
      { id: 'q3', label: '', x: s.q3, y: 1.5, hide: true }, { id: 'max', label: '', x: s.max, y: 1.5, hide: true },
      { id: 'a', label: '', x: s.q1, y: 0.7, hide: true }, { id: 'b', label: '', x: s.q3, y: 0.7, hide: true },
      { id: 'c', label: '', x: s.q1, y: 2.3, hide: true }, { id: 'd', label: '', x: s.q3, y: 2.3, hide: true },
      { id: 'm1', label: '', x: s.q2, y: 0.7, hide: true }, { id: 'm2', label: '', x: s.q2, y: 2.3, hide: true },
      { id: 'n1', label: '', x: s.min, y: 1, hide: true }, { id: 'n2', label: '', x: s.min, y: 2, hide: true },
      { id: 'x1', label: '', x: s.max, y: 1, hide: true }, { id: 'x2', label: '', x: s.max, y: 2, hide: true },
      { id: 'l0', label: '', x: a, y: 0, hide: true }, { id: 'l1', label: '', x: b, y: 0, hide: true },
    ],
    polygons: [{ ids: ['a', 'b', 'd', 'c'] }],
    segments: [
      { from: 'min', to: 'q1' }, { from: 'q3', to: 'max' }, { from: 'm1', to: 'm2', color: 'alt' },
      { from: 'n1', to: 'n2' }, { from: 'x1', to: 'x2' }, { from: 'l0', to: 'l1', color: 'muted' },
    ],
    texts: [
      ...ticks,
      ...(quarters
        ? [
            { x: (s.min + s.q1) / 2, y: 2.7, text: '25%', color: 'muted' as const }, { x: (s.q1 + s.q2) / 2, y: 1.5, text: '25%', color: 'muted' as const },
            { x: (s.q2 + s.q3) / 2, y: 1.5, text: '25%', color: 'muted' as const }, { x: (s.q3 + s.max) / 2, y: 2.7, text: '25%', color: 'muted' as const },
          ]
        : []),
    ],
    caption,
  };
};

export const A_BASICS = lesson('geom-u5-a-basics', 'A. Basics', 25, [
  h2('Measures of central tendency'),
  p(r`In statistics, a central tendency is a central or typical value for a distribution. The most common measures of central tendency are the arithmetic mean, the median and the mode.`),
  p(r`Mean ($\bar x$) is the average of given values. To find the mean, the sum of all values must be divided by the number of terms.`),
  { type: 'math', label: 'Mean', text: r`\bar x=\dfrac{\sum x}{n}` },
  p(r`Mode is the most occurring value.`),
  p(r`Median ($Q_2$) is the middle value in ascending order.`),
  p(r`The median divides data into two parts. The middle number of the lower half is called the Lower Quartile ($Q_1$) and the middle of the upper half is the Upper Quartile ($Q_3$).`),
  h3('Question 1'),
  p(r`Find the median and quartiles for each set of data: 1.1 $5,\,11,\,14,\,17,\,21,\,23,\,25$; 1.2 $2,\,4,\,7,\,9,\,10,\,12,\,14,\,17$.`),
  note(r`Make sure that the numbers are in ascending order.`),
  solution([
    ['1.1 The median is the middle value', r`Q_2=17`],
    ['By excluding $17$, we get', r`Q_1=11\quad\text{and}\quad Q_3=23`],
  ], 'Solution 1.1'),
  solution([
    ['1.2 The median is between $9$ and $10$:', r`Q_2=\dfrac{9+10}{2}=9{,}5`],
    ['Then', r`Q_1=\dfrac{4+7}{2}=5{,}5\quad\text{and}\quad Q_3=\dfrac{12+14}{2}=13`],
  ], 'Solution 1.2'),
  note(r`In the book the first line of 1.2 reads “Median is $Q_2=17$”; that is a leftover from 1.1. The median of the eight values is $9{,}5$, as worked below it.`),
  p(r`Range is the difference between the largest and smallest value: $\text{Max}-\text{Min}$.`),
  p(r`Inter-Quartile Range (IQR) is the difference between the quartiles: $Q_3-Q_1$.`),
  p(r`A box and whisker diagram shows the position of the five-number summary ($\min$, $Q_1$, $Q_2$, $Q_3$ and $\max$) on a number line.`),

  h3('Question 2'),
  p(r`Draw a box and whisker diagram for the numbers:`),
  eq(
    String.raw`\begin{array}{cccccccccc}40&41&41&44&46&51&53&54&54&61\\63&64&64&66&67&77&77&78&79&80\end{array}`,
  ),
  solution([
    ['There are $20$ numbers, so the median would be between the $10^{\\text{th}}$ and $11^{\\text{th}}$', r`Q_2=\dfrac{61+63}{2}=62`],
    ['The lower quartile is between the $5^{\\text{th}}$ and $6^{\\text{th}}$', r`Q_1=\dfrac{46+51}{2}=48{,}5`],
    ['The upper quartile is between the $15^{\\text{th}}$ and $16^{\\text{th}}$', r`Q_3=\dfrac{67+77}{2}=72`],
  ]),
  p(r`If we draw on scales: (each part of the diagram holds 25% of the data)`),
  fig(boxPlot({ min: 40, q1: 48.5, q2: 62, q3: 72, max: 80 }, [40, 80, 10], 'Five-number summary: min 40, Q₁ 48,5, Q₂ 62, Q₃ 72, max 80.', true)),

  h2('Distribution of data'),
  p(r`If the left part of a box is bigger than the right part, we say data is shifted to the left or negatively skewed: more data is closer to the maximum value.`),
  fig(boxPlot({ min: 0, q1: 5, q2: 7.5, q3: 9, max: 10 }, [0, 10, 5], 'Negative skew: the left whisker and left half of the box are longer; most data is near the maximum.')),
  p(r`If the right side is bigger, then data is shifted to the right or positively skewed, and so on.`),
  fig(boxPlot({ min: 0, q1: 1, q2: 2.5, q3: 5, max: 10 }, [0, 10, 5], 'Positive skew: the right side is longer; most data is near the minimum.')),
  p(r`In case both are almost the same, then data is distributed evenly or symmetrically (a normal distribution).`),
  fig(boxPlot({ min: 0, q1: 3, q2: 5, q3: 7, max: 10 }, [0, 10, 5], 'Normal (symmetric) distribution.')),
]);

export const GEOM_UNIT_5A_LESSONS: Lesson[] = [A_BASICS];
