import type { Figure, FigureCurve, Lesson } from '../../lib/types';
import { r, h2, h3, p, note, formula, eq, fig, qs, lesson as make, ANSWERS_NOTE } from './geomKit';

/**
 * Paper 2 — Unit 2: Trigonometry, section H, trigonometric graphs (book pp. 73–83; photos …859 – …863).
 * Pages 80–81 are not in the photo set; they are tasks.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('geom-trigonometry', id, title, minutes, blocks);

/** A trig graph in degrees. Pixel height is fixed so waves look like the book's, whatever the x-range. */
const trig = (
  xRange: [number, number],
  yRange: [number, number],
  curves: FigureCurve[],
  opts: Partial<Figure> = {},
): Figure => {
  const wide = (520 - 62) / (xRange[1] - xRange[0]);
  const stretch = (Math.min(260, 64 * (yRange[1] - yRange[0])) / (yRange[1] - yRange[0])) / wide;
  return { xRange, yRange, xStep: 90, yStep: 1, xSuffix: '°', grid: true, stretch, curves, ...opts };
};

const table = (xs: (number | string)[], ys: (number | string)[]) =>
  eq(
    String.raw`\begin{array}{c|${'c'.repeat(xs.length)}} x & ${xs.join(' & ')}\\\hline y & ${ys.join(' & ')}\end{array}`,
  );

const W: [number, number] = [-360, 360];

export const H_GRAPHS = lesson('geom-u2-h-graphs', 'H. Trigonometric Graphs', 40, [
  /* ── sine ───────────────────────────────────────────────────────────── */
  h2('1. Graphs of sine functions'),
  p(r`Let’s start with the basic sine function, $y=\sin x$. Using a calculator, fill the table and draw a graph:`),
  eq(
    String.raw`\begin{array}{c|ccccccc} x & 0^\circ & 30^\circ & 60^\circ & 90^\circ & 120^\circ & 150^\circ & 180^\circ\\\hline \sin x & 0 & 0{,}5 & 0{,}87 & 1 & 0{,}87 & 0{,}5 & 0\end{array}`,
  ),
  eq(
    String.raw`\begin{array}{c|cccccc} x & 210^\circ & 240^\circ & 270^\circ & 300^\circ & 330^\circ & 360^\circ\\\hline \sin x & -0{,}5 & -0{,}87 & -1 & -0{,}87 & -0{,}5 & 0\end{array}`,
  ),
  p(r`This function has an amplitude of $1$ because the graph goes one unit up and one unit down from the midline of the graph. This function has a period of $360^\circ$ because the sine wave repeats itself every $360^\circ$ units. The graph $y=\sin x$:`),
  fig(trig(W, [-1.5, 1.5], [{ kind: 'sin' }], { yStep: 0.5, caption: 'y = sin x   —   amplitude 1, period 360°' })),
  table([-360, -270, -180, -90, 0, 90, 180, 270, 360], [0, 1, 0, -1, 0, 1, 0, -1, 0]),
  note(r`The number multiplied by the trig function (sin or cos) is the amplitude, OR $\dfrac{y_{\max}-y_{\min}}{2}$. Amplitude cannot be a negative number.`),
  p(r`Now let’s look at $y=3\sin x$:`),
  fig(trig(W, [-3.5, 3.5], [{ kind: 'sin', a: 3 }], { caption: 'y = 3 sin x   —   the amplitude has changed from 1 to 3' })),
  table([-360, -270, -180, -90, 0, 90, 180, 270, 360], [0, 3, 0, -3, 0, 3, 0, -3, 0]),
  note(r`The book’s table for $3\sin x$ prints $0,\,0,\,-3,\,0,\,3,\,0,\,-3,\,0,\,3$, which does not match its own graph. The values above are computed: $3\sin x$ is $3$ at $-270^\circ$ and $90^\circ$, and $-3$ at $-90^\circ$ and $270^\circ$.`),
  p(r`The number multiplied by the trigonometric function shows you the amplitude. In the same manner: $\frac12\sin x$ has amplitude $\frac12$, and $-2\sin x$ has amplitude $2$.`),
  p(r`Now let’s look at $y=\sin x+2$:`),
  fig(trig(W, [-1, 3.5], [{ kind: 'sin', q: 2 }], { caption: 'y = sin x + 2   —   the graph is shifted up by two units' })),
  table([-360, -270, -180, -90, 0, 90, 180, 270, 360], [2, 3, 2, 1, 2, 3, 2, 1, 2]),
  p(r`If a number is added outside the function, then the graph is shifted up by that number; if it is subtracted, then the graph is shifted down by that number. So $\sin x-3$ is the regular sine wave, but shifted three units downward; and $\sin x+0{,}6$ is the regular sine curve, but shifted upward by $0{,}6$ unit.`),
  formula('The general sine function', r`y=a\sin x+q`),
  p(r`where $a$ is the amplitude and $q$ gives you the vertical shift (up or down).`),
  note(r`Often to draw a trig function, just fill the table of values. (Zero $\pm\,90^\circ$.)`),
  h3('For example:  y = 2 sin x + 3,  x ∈ [−180°; 360°]'),
  fig(trig([-180, 360], [-0.5, 6.5], [{ kind: 'sin', a: 2, q: 3 }], { xStep: 90, caption: 'y = 2 sin x + 3   —   range y ∈ [1; 5]' })),
  p(r`Range of the function is $y\in[1;\,5]$.`),

  /* ── cosine ─────────────────────────────────────────────────────────── */
  h2('2. Graphs of cosine functions'),
  p(r`To graph the cosine function, $y=\cos x$. Using a calculator, fill the table and draw a graph:`),
  eq(
    String.raw`\begin{array}{c|ccccccc} x & 0^\circ & 30^\circ & 60^\circ & 90^\circ & 120^\circ & 150^\circ & 180^\circ\\\hline \cos x & 1 & 0{,}87 & 0{,}5 & 0 & -0{,}5 & -0{,}87 & -1\end{array}`,
  ),
  eq(
    String.raw`\begin{array}{c|cccccc} x & 210^\circ & 240^\circ & 270^\circ & 300^\circ & 330^\circ & 360^\circ\\\hline \cos x & -0{,}87 & -0{,}5 & 0 & 0{,}5 & 0{,}87 & 1\end{array}`,
  ),
  note(r`The book’s empty table is headed “$\sin(x)$” in both rows; for the cosine graph it is $\cos x$ that is filled in, as above.`),
  p(r`This function has an amplitude of $1$ because the graph goes one unit up and one unit down from the midline of the graph. This function has a period of $360^\circ$ because the cosine wave repeats every $360^\circ$ units. The graph $y=\cos x$:`),
  fig(trig(W, [-1.5, 1.5], [{ kind: 'cos' }], { yStep: 0.5, caption: 'y = cos x' })),
  table([-360, -270, -180, -90, 0, 90, 180, 270, 360], [1, 0, -1, 0, 1, 0, -1, 0, 1]),
  p(r`Here is $y=3\cos x$:`),
  fig(trig(W, [-3.5, 3.5], [{ kind: 'cos', a: 3 }], { caption: 'y = 3 cos x   —   the amplitude has changed from 1 to 3' })),
  table([-360, -270, -180, -90, 0, 90, 180, 270, 360], [3, 0, -3, 0, 3, 0, -3, 0, 3]),
  p(r`The amplitude has changed from $1$ to $3$. Likewise $0{,}5\cos x$ would have an amplitude of $\frac12$, and $-2\cos x$ would have an amplitude of $2$.`),
  p(r`Now let’s look at $y=-\cos x$. A negative sign makes a graph flip upside down, so swap the $+1$ with $-1$:`),
  fig(trig([-90, 450], [-1.5, 1.5], [{ kind: 'cos', a: -1 }], { yStep: 0.5, caption: 'y = −cos x   —   flipped upside down' })),
  table([-90, 0, 90, 180, 270, 360, 450], [0, -1, 0, 1, 0, -1, 0]),
  note(r`Often to draw a trig function, just fill the table of values. (Zero $\pm\,90^\circ$.)`),
  formula('The general cosine function', r`y=a\cos x+q`),
  p(r`where $a$ is the amplitude and $q$ gives you the vertical shift (up or down).`),
  h3('For example:  y = −cos x + 1,  x ∈ [−90°; 450°]'),
  fig(trig([-90, 450], [-1, 3], [{ kind: 'cos', a: -1, q: 1 }], { caption: 'y = −cos x + 1   —   range y ∈ [0; 2]' })),
  table([-90, 0, 90, 180, 270, 360, 450], [1, 0, 1, 2, 1, 0, 1]),
  p(r`Range of the function is $y\in[0;\,2]$.`),

  /* ── tangent ────────────────────────────────────────────────────────── */
  h2('3. Graphs of tangent functions'),
  p(r`To graph the tangent function, $y=\tan x$. Using a calculator, fill the table and draw a graph:`),
  eq(
    String.raw`\begin{array}{c|ccccc} x & -90^\circ & -45^\circ & 0^\circ & 45^\circ & 90^\circ\\\hline \tan x & \text{und} & -1 & 0 & 1 & \text{und}\end{array}\qquad\begin{array}{c|ccccc} x & 135^\circ & 180^\circ & 225^\circ & 270^\circ & 360^\circ\\\hline \tan x & -1 & 0 & 1 & \text{und} & 0\end{array}`,
  ),
  p(r`The undefined values (at $-90^\circ$, $90^\circ$ and $270^\circ$) give us asymptotes. This function has a period of $180^\circ$ because the tangent curve repeats every $180^\circ$ units. The graph $y=\tan x$ looks like this:`),
  fig(trig([-90, 270], [-3.5, 3.5], [{ kind: 'tan' }], { asymptotes: [-90, 90, 270], caption: 'y = tan x   —   asymptotes at −90°, 90° and 270°, period 180°' })),
  table(['-90', -45, 0, 45, 90, 135, 180, 225, 270], [String.raw`\text{und}`, -1, 0, 1, String.raw`\text{und}`, -1, 0, 1, String.raw`\text{und}`]),
  p(r`Range of a tangent function isn’t restricted: $y\in\mathbb{R}$.`),
  p(r`Now let’s look at $y=\tan x-1$:`),
  fig(trig([-90, 270], [-3.5, 3.5], [{ kind: 'tan', q: -1 }], { asymptotes: [-90, 90, 270], caption: 'y = tan x − 1   —   the graph is shifted 1 unit down' })),
  p(r`Graph is shifted $1$ unit down.`),

  /* ── Task 16 ────────────────────────────────────────────────────────── */
  h2('Task 16'),
  p(r`The book asks you to plot each set on the same axes. The completed graphs are drawn here so you can check your own.`),
  ANSWERS_NOTE,
  h3('1  sin x + q:  sin x,  sin x − 2,  sin x + 2'),
  fig(trig(W, [-3.5, 3.5], [{ kind: 'sin' }, { kind: 'sin', q: -2 }, { kind: 'sin', q: 2 }], { caption: 'Blue: sin x · Red: sin x − 2 · Green: sin x + 2. q shifts the whole graph up (q > 0) or down (q < 0).' })),
  h3('2  a·sin x:  sin x,  3 sin x,  ½ sin x'),
  fig(trig(W, [-3.5, 3.5], [{ kind: 'sin' }, { kind: 'sin', a: 3 }, { kind: 'sin', a: 0.5 }], { caption: 'Blue: sin x · Red: 3 sin x · Green: ½ sin x. a stretches or squashes the graph vertically; it is the amplitude.' })),
  h3('3  a·sin x:  sin x,  −sin x,  −2 sin x'),
  fig(trig(W, [-3.5, 3.5], [{ kind: 'sin' }, { kind: 'sin', a: -1 }, { kind: 'sin', a: -2 }], { caption: 'Blue: sin x · Red: −sin x · Green: −2 sin x. A negative a flips the graph upside down.' })),
  h3('4  cos x + q:  cos x,  cos x − 2,  cos x + 1'),
  fig(trig(W, [-3.5, 3.5], [{ kind: 'cos' }, { kind: 'cos', q: -2 }, { kind: 'cos', q: 1 }], { caption: 'Blue: cos x · Red: cos x − 2 · Green: cos x + 1.' })),
  h3('5  a·cos x:  cos x,  2 cos x,  −2 cos x'),
  fig(trig(W, [-3.5, 3.5], [{ kind: 'cos' }, { kind: 'cos', a: 2 }, { kind: 'cos', a: -2 }], { caption: 'Blue: cos x · Red: 2 cos x · Green: −2 cos x.' })),
  h3('6  sin x and cos x'),
  fig(trig(W, [-1.5, 1.5], [{ kind: 'sin' }, { kind: 'cos' }], { yStep: 0.5, caption: 'Blue: sin x · Red: cos x.' })),
  qs([
    { n: '1', q: r`Use your results to deduce the effect of $q$ in $\sin x+q$ and $\cos x+q$.`, a: r`$q$ shifts the graph vertically: up by $q$ units if $q>0$, down by $|q|$ units if $q<0$. The amplitude and period do not change; the range becomes $[q-1;\,q+1]$.` },
    { n: '2', q: r`Use your results to deduce the effect of $a$ in $a\sin x$ and $a\cos x$.`, a: r`$|a|$ is the amplitude: the graph is stretched ($|a|>1$) or squashed ($|a|<1$) vertically. The period does not change.` },
    { n: '3', q: r`Use your results to deduce the effect of a negative $a$.`, a: r`A negative $a$ reflects the graph in the $x$-axis (flips it upside down). The amplitude is $|a|$.` },
    { n: '6', q: r`What do $\sin x$ and $\cos x$ have in common? And what is different?`, a: r`Common: the same shape (a wave), amplitude $1$, period $360^\circ$ and range $[-1;\,1]$. Different: $\sin x$ starts at $0$ (passes through the origin) while $\cos x$ starts at its maximum $1$ ($y$-intercept $1$). The cosine graph is the sine graph shifted $90^\circ$ to the left.` },
  ]),

  /* ── Task 17 ────────────────────────────────────────────────────────── */
  h2('Task 17'),
  note(r`Only questions 2.3–2.4 and 3.1–3.8 of this task are in the photos. In 2.3 and 2.4 you sketch the graphs on the book’s blank axes, so they are drawn here.`),
  h3('2.3  y = −2 cos x + 2'),
  fig(trig(W, [-1, 5], [{ kind: 'cos', a: -2, q: 2 }], { caption: 'y = −2 cos x + 2   —   range y ∈ [0; 4]' })),
  h3('2.4  y = sin x − 3'),
  fig(trig(W, [-5, 0], [{ kind: 'sin', q: -3 }], { caption: 'y = sin x − 3   —   range y ∈ [−4; −2]' })),
  h3('3  Determine the unknowns using the graphs'),
  ANSWERS_NOTE,
  p(r`These are read off the book’s sketches, so values are as accurate as the sketches allow.`),
  qs([
    { n: '3.1', q: r`Given $y=a\cos x$. Find $a$. (The graph starts at $y=2$ when $x=0^\circ$.)`, a: r`At $x=0^\circ$, $y=a\cos0^\circ=a$, and the graph passes through $(0^\circ;\,2)$, so $a=2$.` },
    { n: '3.2', q: r`Given $y=\sin x+q$. Find $q$. (The graph passes through $(0^\circ;\,1)$.)`, a: r`At $x=0^\circ$, $y=\sin0^\circ+q=q=1$, so $q=1$.` },
    { n: '3.3', q: r`Given $y=b\sin x$. Find $b$. (The graph dips to $-1$ at $90^\circ$.)`, a: r`At $x=90^\circ$, $y=b\sin90^\circ=b=-1$, so $b=-1$.` },
    { n: '3.4', q: r`Given $y=\cos x+p$. Find $p$. (The graph starts at $y=-1$ and has its minimum at $-3$.)`, a: r`At $x=0^\circ$, $y=\cos0^\circ+p=1+p=-1$, so $p=-2$ (check: minimum $=-1-2=-3$).` },
    { n: '3.5', q: r`Given $y=c\tan x$. Find $c$. (The graph passes through $(45^\circ;\,-1)$.)`, a: r`$c\tan45^\circ=c=-1$, so $c=-1$.` },
    { n: '3.6', q: r`Given $y=d\tan x+q$. Find $d$ and $q$. (The graph passes through $(0^\circ;\,-1)$ and $(45^\circ;\,-2)$.)`, a: r`At $x=0^\circ$: $d\tan0^\circ+q=q=-1$. At $x=45^\circ$: $d(1)-1=-2$, so $d=-1$. So $d=-1$ and $q=-1$.` },
    { n: '3.7', q: r`Given $y=a\sin x+q$. Find $a$ and $q$. (The graph passes through $(0^\circ;\,1)$, has a maximum near $3$ and a minimum near $-1$.)`, a: r`At $x=0^\circ$, $y=q=1$. Amplitude $a=\dfrac{y_{\max}-y_{\min}}{2}=\dfrac{3-(-1)}{2}=2$. So $a=2$ and $q=1$ (the sketch is read as maximum $3$, minimum $-1$).` },
    { n: '3.8', q: r`Given $y=a\sin x+q$. Find $a$ and $q$. (The graph has a maximum of $2$ and a minimum of $-4$.)`, a: r`The midline is $q=\dfrac{2+(-4)}{2}=-1$ and the amplitude is $a=\dfrac{2-(-4)}{2}=3$. Note that the sketch has its maximum at $0^\circ$ and its minimum at $180^\circ$, which is the shape of a cosine graph, so check the form of the equation against the sketch.` },
  ]),
]);

export const GEOM_UNIT_2D_LESSONS: Lesson[] = [H_GRAPHS];
