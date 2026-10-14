import type { Figure, Lesson } from '../../lib/types';
import { r, h2, note, fig, qs, lesson as make, ANSWERS_NOTE } from './geomKit';
import { boxPlot } from './geometryUnit5a';

/**
 * Unit 5 Statistics: Tasks 1 and 2 (book pp. 158–161; photos …897 – …898).
 * Task 2 question 3 (the Bafana Bafana ogive) has no readable scale on the cumulative-frequency
 * axis in the photo, so its answers are not included.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('geom-statistics', id, title, minutes, blocks);

const ogiveOf = (xs: number[], ys: number[], axisX: [number, number, number], yMax: number, yStep: number, caption: string, mark?: { x: number; y: number; name: string }[]): Figure => {
  const f = (x: number) => {
    for (let i = 0; i < xs.length - 1; i++) if (x <= xs[i + 1]) return ys[i] + ((x - xs[i]) / (xs[i + 1] - xs[i])) * (ys[i + 1] - ys[i]);
    return ys[ys.length - 1];
  };
  const m = mark ?? [];
  return {
    xRange: [axisX[0] - 1, axisX[1] + 1], yRange: [0, yMax], xStep: axisX[2], yStep, axes: true, grid: true,
    stretch: Math.min(1.4, 240 / (yMax * ((520 - 62) / (axisX[1] - axisX[0] + 2)))),
    curves: [{ fn: f, domain: [xs[0], xs[xs.length - 1]] }],
    points: [
      ...xs.map((x, i) => ({ id: `o${i}`, label: '', x, y: ys[i], color: 'main' as const })),
      ...m.flatMap((k, i) => [
        { id: `ma${i}`, label: '', x: axisX[0] - 1, y: k.y, hide: true }, { id: `mp${i}`, label: k.name, x: k.x, y: k.y, side: 'se' as const, color: 'alt' as const },
        { id: `mx${i}`, label: '', x: k.x, y: 0, hide: true },
      ]),
    ],
    segments: m.flatMap((_, i) => [{ from: `ma${i}`, to: `mp${i}`, dashed: true, color: 'alt' as const }, { from: `mp${i}`, to: `mx${i}`, dashed: true, color: 'alt' as const }]),
    caption,
  };
};

export const TASKS_5 = lesson('geom-u5-tasks', 'Statistics: Tasks 1 and 2', 35, [
  h2('Task 1'),
  ANSWERS_NOTE,
  fig(boxPlot({ min: 27, q1: 32, q2: 42, q3: 46, max: 62 }, [20, 70, 10], 'Question 1.3 — basketball points: min 27, Q₁ 32, Q₂ 42, Q₃ 46, max 62.')),
  qs([
    { n: '1.1', context: r`Fifteen players scored: $27,\,28,\,30,\,32,\,34,\,38,\,41,\,42,\,43,\,43,\,44,\,46,\,53,\,56,\,62$.`, q: r`Determine the median of the given data.`, a: r`There are $15$ values; the median is the $8^{\text{th}}$: $Q_2=42$.` },
    { n: '1.2', context: r`Same data.`, q: r`Determine the interquartile range for the data.`, a: r`Lower half (first $7$): $Q_1$ is the $4^{\text{th}}$ value $=32$. Upper half: $Q_3$ is the $12^{\text{th}}$ value $=46$. $\text{IQR}=Q_3-Q_1=14$.` },
    { n: '1.3', context: r`Same data.`, q: r`Draw a box and whisker diagram to represent the data.`, a: r`Five-number summary: $\min=27$, $Q_1=32$, $Q_2=42$, $Q_3=46$, $\max=62$ (diagram above).` },
    { n: '1.4', context: r`Same data.`, q: r`Use the box and whisker diagram to comment on the points scored by the players in this team.`, a: r`Half the players scored between $32$ and $46$ points. The left part of the box ($32$ to $42$) is longer than the right part ($42$ to $46$), so the box is skewed to the left, but the upper whisker ($46$ to $62$) is much longer than the lower one ($27$ to $32$): a few players scored far higher than the rest.` },
    { n: '2.1', context: r`FIFA World Cup stadium capacities: $70\,000$, $70\,000$, $61\,000$, $94\,000$, $48\,000$, $48\,000$, $46\,000$, $46\,000$, $42\,000$, $50\,000$.`, q: r`Sorted, the data is $42,\,46,\,46,\,48,\,48,\,50,\,61,\,70,\,70,\,94$ (thousands). Find the five-number summary.`, a: r`$n=10$. $\min=42\,000$; $Q_1$ is the $3^{\text{rd}}$ value $=46\,000$; $Q_2=\dfrac{48+50}{2}=49\,000$; $Q_3$ is the $8^{\text{th}}$ value $=70\,000$; $\max=94\,000$.` },
    { n: '2.2', context: r`The data is summarised by a box and whisker plot whose scale marks are $42\,000$, $b$, $c$, $d$, $e$ (left whisker end, start of box, median line, end of box, right whisker end).`, q: r`Determine the values of $b$, $c$, $d$ and $e$.`, a: r`$b=Q_1=46\,000$, $c=Q_2=49\,000$, $d=Q_3=70\,000$, $e=\max=94\,000$.` },
    { n: '3.1', context: r`PSL log points of the top $8$ teams: $55,\,55,\,50,\,47,\,x,\,x,\,x,\,42$.`, q: r`If the average points for these $8$ teams is $48{,}375$, show that $x=46$.`, a: r`$\dfrac{55+55+50+47+3x+42}{8}=48{,}375\Rightarrow249+3x=387\Rightarrow3x=138\Rightarrow x=46$.` },
    { n: '3.2', context: r`Same data, with $x=46$.`, q: r`Draw a box and whisker diagram of the information given.`, a: r`Sorted: $42,\,46,\,46,\,46,\,47,\,50,\,55,\,55$. $\min=42$, $Q_1=\dfrac{46+46}{2}=46$, $Q_2=\dfrac{46+47}{2}=46{,}5$, $Q_3=\dfrac{50+55}{2}=52{,}5$, $\max=55$.` },
    { n: '4.1', context: r`Two classes of $25$ learners write the June exam. Class A marks: $9,\,14,\,14,\,19,\,21,\,23,\,33,\,35,\,37,\,37,\,42,\,45,\,55,\,56,\,57,\,59,\,68,\,75,\,75,\,75,\,77,\,78,\,80,\,81,\,82$. (Some digits are small in the photo.)`, q: r`Write down the five-number summary for Class A.`, a: r`$\min=9$; $Q_1=\dfrac{23+33}{2}=28$ (median of the first $12$); $Q_2=55$ (the $13^{\text{th}}$); $Q_3=\dfrac{75+75}{2}=75$ (median of the last $12$); $\max=82$.` },
    { n: '4.2', context: r`Class B’s box and whisker diagram (read from the book: $\min\approx10$, $Q_1\approx31$, $Q_2\approx61$, $Q_3\approx71$, $\max\approx90$).`, q: r`Draw the box and whisker diagram that represents Class A’s marks on the same diagram above. Clearly indicate ALL relevant values.`, a: r`Use $9$, $28$, $55$, $75$, $82$ on the same number line as Class B (see the two diagrams below).` },
    { n: '4.3', context: r`Same classes.`, q: r`Determine which class performed better in the June examination and give a reason for your answer.`, a: r`Class B did better overall: its median ($\approx61$) is higher than Class A’s ($55$), its lower quartile and maximum are higher, and its marks are more evenly spread. (Class A’s upper quartile, $75$, is higher than Class B’s, $\approx71$, so the best of Class A did well; the book’s diagram for B is read approximately, so this comparison is too.)` },
  ]),
  fig(boxPlot({ min: 9, q1: 28, q2: 55, q3: 75, max: 82 }, [10, 90, 10], 'Class A: 9, 28, 55, 75, 82.')),
  fig(boxPlot({ min: 10, q1: 31, q2: 61, q3: 71, max: 90 }, [10, 90, 10], 'Class B (read approximately): 10, 31, 61, 71, 90.')),

  h2('Task 2'),
  ANSWERS_NOTE,
  note(r`The pencil-written values in the photo for question 2.1 ($5,\,7,\,7,\,4,\,2$ and $5,\,12,\,19,\,23,\,25$) are checked against the masses and agree.`),
  fig(ogiveOf([10, 12, 14, 16, 18, 20], [0, 14, 32, 59, 69, 73], [10, 20, 1], 80, 10, 'Question 1.3 — ogive of the workers’ wages (R1 000). The median is the 37th value, about R14,4.', [{ x: 14.37, y: 36.5, name: 'median' }])),
  fig(ogiveOf([60, 70, 80, 90, 100, 110], [0, 5, 12, 19, 23, 25], [60, 110, 5], 25, 5, 'Question 2.2 — ogive of the rugby players’ masses (kg).', [{ x: 92.5, y: 20, name: 'A' }, { x: 75, y: 8.5, name: 'B' }])),
  qs([
    { n: '1.1', context: r`Wages (R1 000) and frequencies: $10$–$12$: $14$; $12$–$14$: $18$; $14$–$16$: $27$; $16$–$18$: $10$; $18$–$20$: $4$.`, q: r`Calculate the approximate mean wage.`, a: r`Midpoints $11,\,13,\,15,\,17,\,19$: $\bar x=\dfrac{14(11)+18(13)+27(15)+10(17)+4(19)}{73}=\dfrac{1\,039}{73}=14{,}23$, i.e. about R14 230.` },
    { n: '1.2', context: r`Same table.`, q: r`Complete the cumulative frequency table.`, a: r`$14,\;32,\;59,\;69,\;73$.` },
    { n: '1.3', context: r`Same table.`, q: r`Draw the ogive and estimate the median wage.`, a: r`Plot $(10;0),(12;14),(14;32),(16;59),(18;69),(20;73)$. The median is the $\tfrac{73}{2}=36{,}5^{\text{th}}$ value: between $14$ and $16$, $14+\dfrac{36{,}5-32}{27}\cdot2\approx14{,}3$ (about R14 300).` },
    { n: '1.4', context: r`Same table.`, q: r`Draw a box and whisker plot for this data.`, a: r`From the ogive: $\min=10$, $Q_1\approx12{,}5$ (the $18{,}25^{\text{th}}$), $Q_2\approx14{,}3$, $Q_3\approx15{,}7$ (the $54{,}75^{\text{th}}$), $\max=20$.` },
    { n: '2.1', context: r`Masses (kg) of $25$ rugby players: $78,\,102,\,88,\,93,\,81,\,90,\,75,\,60,\,76,\,75,\,68,\,90,\,80,\,77,\,81,\,69,\,60,\,83,\,91,\,100,\,86,\,70,\,81,\,64,\,70$.`, q: r`Complete the table of frequency and cumulative frequency for the intervals $60\le x<70$ to $100\le x<110$.`, a: r`Frequencies $5,\,7,\,7,\,4,\,2$; cumulative $5,\,12,\,19,\,23,\,25$.` },
    { n: '2.2', context: r`Same data.`, q: r`Draw an ogive for the above table.`, a: r`Plot $(60;0),(70;5),(80;12),(90;19),(100;23),(110;25)$ and join with a smooth curve (figure above).` },
    { n: '2.3', context: r`Same data.`, q: r`What is the minimum weight of the five heaviest players? (Indicate on the graph as A.)`, a: r`The five heaviest are the last $5$, so start at the $20^{\text{th}}$ player: from the ogive, about $92{,}5$ kg (point A). (From the raw data the five heaviest are $102,\,100,\,93,\,91,\,90$, so the true minimum is $90$ kg; the ogive gives an estimate.)` },
    { n: '2.4', context: r`Same data.`, q: r`There is a special training section for players lighter than $75$ kg. Estimate how many players will be involved. (Indicate on the graph as B.)`, a: r`Read up from $75$ kg on the ogive to about $8{,}5$: about $8$ or $9$ players (point B).` },
  ]),
]);

export const GEOM_UNIT_5C_LESSONS: Lesson[] = [TASKS_5];
