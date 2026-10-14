import type { Figure, Lesson } from '../../lib/types';
import { r, h2, note, fig, eq, qs, lesson as make, ANSWERS_NOTE } from './geomKit';

/**
 * Unit 5 Statistics: end of Task 3 (questions 5–6, book p. 166) and Task 4 (book p. 167);
 * photos …901. Page 168–169 are not in the photo set.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('geom-statistics', id, title, minutes, blocks);

const hoursMarks: Figure = {
  xRange: [0, 6.5], yRange: [50, 100], axes: true, grid: true, xStep: 1, yStep: 10, stretch: 0.9,
  points: [[2, 80], [5, 88], [1, 70], [4, 90], [2, 60], [3, 75]].map(([x, y], i) => ({ id: `h${i}`, label: '', x, y, color: 'alt' as const })),
  curves: [{ fn: (x: number) => 64 + 5 * x, domain: [0.5, 6] }],
  caption: 'Question 5.1 — scatter plot of hours studied (x) against mark (y), with an eye-fitted straight line y ≈ 64 + 5x.',
};

export const TASKS_3_4 = lesson('geom-u5-task-3-4', 'Statistics: Task 3 (cont.) and Task 4', 30, [
  h2('Task 3 (continued)'),
  ANSWERS_NOTE,
  fig(hoursMarks),
  qs([
    { n: '5.1', marks: 4, context: r`Hours studied: $2,\,5,\,1,\,4,\,2,\,3$. Marks: $80,\,88,\,70,\,90,\,60,\,75$.`, q: r`Draw a scatter plot of the number of hours studied compared to the examination mark received.`, a: r`Plot $(2;80),(5;88),(1;70),(4;90),(2;60),(3;75)$ (figure above).` },
    { n: '5.2', marks: 2, context: r`Same data.`, q: r`Decide which of the following graphs fit the above-mentioned data best: straight line, parabola or exponential.`, a: r`The points rise steadily with some scatter and no sign of curving, so a straight line (positive trend, moderate correlation) fits best.` },
    { n: '6.1', marks: 5, context: r`Grade 2 scores. Girls: $19,\,20,\,23,\,37,\,30,\,34,\,41,\,45,\,21,\,39$. Boys: $16,\,15,\,15,\,22,\,28,\,25,\,37,\,30,\,36,\,45,\,43,\,42,\,23,\,18,\,20$.`, q: r`Draw a back-to-back stem and leaf plot to illustrate this data.`, a: r`Girls | stem | Boys: $9\,|\,1\,|\,5\,5\,6\,8$; $3\,1\,0\,|\,2\,|\,0\,2\,3\,5\,8$; $9\,7\,4\,0\,|\,3\,|\,0\,6\,7$; $5\,1\,|\,4\,|\,2\,3\,5$ (leaves read outward from the stem; girls’ leaves are written in reverse order, nearest the stem first smallest).` },
    { n: '6.2', marks: 2, context: r`Same data.`, q: r`Calculate the mean of the scores of the girls.`, a: r`$\bar x=\dfrac{19+20+21+23+30+34+37+39+41+45}{10}=\dfrac{309}{10}=30{,}9$.` },
    { n: '6.3.1', marks: 1, context: r`Same data.`, q: r`What is the modal class of the boys?`, a: r`The stem $2$ has the most leaves ($5$), so the modal class is $20$–$29$.` },
    { n: '6.3.2', marks: 4, context: r`Same data.`, q: r`Write down the inter-quartile range of the scores of the boys.`, a: r`Sorted ($15$ values): $15,\,15,\,16,\,18,\,20,\,22,\,23,\,25,\,28,\,30,\,36,\,37,\,42,\,43,\,45$. $Q_1=18$ (the $4^{\text{th}}$), $Q_3=37$ (the $12^{\text{th}}$). $\text{IQR}=37-18=19$.` },
  ]),

  h2('Task 4'),
  ANSWERS_NOTE,
  note(r`Heights (cm) of a squad of Springbok rugby players. Forwards: $184,\,191,\,195,\,189,\,201,\,200,\,184,\,193,\,183$. Backs: $186,\,186,\,179,\,190,\,180,\,187,\,179,\,191,\,185$.`),
  eq(String.raw`\begin{array}{c|cc} \text{Height in cm} & \text{No. of players} & \text{Cum. freq}\\\hline 175\le x<180 & 2 & 2\\ 180\le x<185 & 4 & 6\\ 185\le x<190 & 5 & 11\\ 190\le x<195 & 4 & 15\\ 195\le x<200 & 1 & 16\\ 200\le x<205 & 2 & 18\end{array}`),
  (() => {
    const xs = [175, 180, 185, 190, 195, 200, 205];
    const ys = [0, 2, 6, 11, 15, 16, 18];
    const f = (x: number) => { for (let i = 0; i < xs.length - 1; i++) if (x <= xs[i + 1]) return ys[i] + ((x - xs[i]) / 5) * (ys[i + 1] - ys[i]); return 18; };
    return fig({
      xRange: [172, 207], yRange: [0, 20], xStep: 5, yStep: 2, axes: true, grid: true, stretch: 0.55,
      curves: [{ fn: f, domain: [175, 205] }],
      points: [...xs.map((x, i) => ({ id: `c${i}`, label: '', x, y: ys[i], color: 'main' as const })), { id: 'ua', label: '', x: 172, y: 13.5, hide: true }, { id: 'uq', label: 'Q₃ ≈ 193', x: 193.1, y: 13.5, side: 'se', color: 'alt' }, { id: 'ux', label: '', x: 193.1, y: 0, hide: true }],
      segments: [{ from: 'ua', to: 'uq', dashed: true, color: 'alt' }, { from: 'uq', to: 'ux', dashed: true, color: 'alt' }],
      caption: 'Question 1.1–1.2 — ogive of the squad’s heights; the upper quartile is read at the 13,5th player.',
    });
  })(),
  qs([
    { n: '1.1', context: r`Eighteen players ($9$ forwards and $9$ backs).`, q: r`Complete the table and use the information to sketch an ogive on the axes provided.`, a: r`Frequencies $2,\,4,\,5,\,4,\,1,\,2$; cumulative $2,\,6,\,11,\,15,\,16,\,18$. Plot $(175;0),(180;2),(185;6),(190;11),(195;15),(200;16),(205;18)$ (a value on a class boundary belongs to the class above, e.g. $190$ goes in $190\le x<195$).` },
    { n: '1.2', context: r`Same data.`, q: r`Use your graph in 1.1 to estimate the upper quartile of the squad’s height. Represent this on your graph.`, a: r`$Q_3$ is at $\tfrac34\cdot18=13{,}5$ players. Between $190$ ($11$) and $195$ ($15$): $190+\dfrac{13{,}5-11}{4}\cdot5\approx193$ cm.` },
    { n: '1.3.1', context: r`Find the mean heights of:`, q: r`the forwards.`, a: r`$\bar x=\dfrac{184+191+195+189+201+200+184+193+183}{9}=\dfrac{1\,720}{9}=191{,}1$ cm.` },
    { n: '1.3.2', context: r`Find the mean heights of:`, q: r`the backs.`, a: r`$\bar x=\dfrac{186+186+179+190+180+187+179+191+185}{9}=\dfrac{1\,663}{9}=184{,}8$ cm.` },
  ]),
]);


export const GEOM_UNIT_5E_LESSONS: Lesson[] = [TASKS_3_4];
