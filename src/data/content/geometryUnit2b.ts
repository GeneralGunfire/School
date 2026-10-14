import type { Figure, Lesson } from '../../lib/types';
import { r, h2, h3, p, ul, note, formula, eq, fig, qs, solution, worked, lesson as make, ANSWERS_NOTE, quadrants } from './geomKit';

/**
 * Paper 2 — Unit 2: Trigonometry, sections C–E (book pp. 43–57; photos …847 – …852).
 * Pages 48–49, 54–55 and 58–59 are not in the photo set; they are examples and tasks.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('geom-trigonometry', id, title, minutes, blocks);

/** A point in the Cartesian plane with its angle from the positive x-axis, as in the book's sketches. */
const anglePlane = (x: number, y: number, label: string, alpha: string, extra: Partial<Figure> = {}): Figure => {
  const m = Math.max(Math.abs(x), Math.abs(y), 4);
  const lim = Math.ceil(m + 1);
  return {
    xRange: [-lim, lim],
    yRange: [-lim, lim],
    axes: true,
    grid: true,
    points: [
      { id: 'O', label: '', x: 0, y: 0, side: 'se', color: 'main' },
      { id: 'P', label, x, y, side: x >= 0 ? 'e' : 'w', color: 'alt' },
    ],
    segments: [{ from: 'O', to: 'P', color: 'alt' }],
    angles: [{ at: 'O', from: '+x', to: 'P', label: alpha, radius: 30 }],
    ...extra,
  };
};


/* ── C. Trigonometry in the Cartesian plane ──────────────────────────────── */

export const C_CARTESIAN = lesson('geom-u2-c-cartesian', 'C. Trigonometry in the Cartesian Plane', 22, [
  h2('Ratios from coordinates'),
  p(r`Let’s say $P(x;\,y)$ is a point on the coordinate system, $\theta$ is the angle between the positive $x$-axis and the line from $P$ to the origin, $O$.`),
  fig({
    xRange: [-1, 8], yRange: [-1, 6],
    points: [
      { id: 'O', label: '', x: 0, y: 0, side: 'sw', color: 'main' },
      { id: 'A', label: 'A', x: 5, y: 0, side: 'se', color: 'main' },
      { id: 'P', label: 'P(x; y)', x: 5, y: 4, side: 'ne', color: 'alt' },
    ],
    segments: [
      { from: 'O', to: 'P', color: 'alt', label: 'r' },
      { from: 'O', to: 'A', color: 'main', label: 'x' },
      { from: 'A', to: 'P', color: 'main', label: 'y' },
    ],
    angles: [{ at: 'O', from: '+x', to: 'P', label: 'θ', radius: 36 }, { at: 'A', from: 'O', to: 'P', right: true }],
  }),
  p(r`So, we have a right triangle $POA$, where the hypotenuse is $PO$. Take $PA=y$, $OA=x$, and say $PO=r$, then:`),
  formula('Pythagoras', r`x^2+y^2=r^2`),
  p(r`Using SOH CAH TOA:`),
  formula('Ratios in the plane', r`\sin\theta=\dfrac{y}{r}\qquad\cos\theta=\dfrac{x}{r}\qquad\tan\theta=\dfrac{y}{x}`),
  p(r`, we get SYR CXR TYX.`),
  note(r`If the chosen point is in any other quadrant, $x$ and $y$ values may become negative, but $r$ is always positive. These relations do not change.`),

  h2('The four quadrants'),
  fig(quadrants(['1st  (+ ; +)', '2nd  (− ; +)', '3rd  (− ; −)', '4th  (+ ; −)'], 'The signs of (x ; y) in each quadrant.')),
  ul([
    r`In the 1st quadrant ($0^\circ<\theta<90^\circ$) $x$ and $y$ are positive, so ALL trig functions will be positive.`,
    r`In the 2nd quadrant ($90^\circ<\theta<180^\circ$) $x$ is negative and $y$ is positive, so SINE will be positive while the other trig functions are negative.`,
    r`In the 3rd quadrant ($180^\circ<\theta<270^\circ$) $x$ and $y$ are negative, so TANGENT is positive while the other trig functions are negative.`,
    r`In the 4th quadrant ($270^\circ<\theta<360^\circ$) $x$ is positive and $y$ is negative, so COSINE is positive while the other trig functions are negative.`,
  ]),
  p(r`It would be easier to say it this way:`),
  ul([
    r`1st quadrant, $0^\circ<\theta<90^\circ$: ALL`,
    r`2nd quadrant, $90^\circ<\theta<180^\circ$: SIN`,
    r`3rd quadrant, $180^\circ<\theta<270^\circ$: TAN`,
    r`4th quadrant, $270^\circ<\theta<360^\circ$: COS`,
  ]),
  p(r`functions get positive values (CAST diagram).`),
  fig(quadrants(['A +', 'S +', 'T +', 'C +'], 'CAST diagram — which functions are positive in each quadrant.')),
  note(r`Angles are taken from the positive $x$-axis and in an anti-clockwise direction.`),
  note(r`After $360^\circ$, angles start to repeat, i.e. rotate: $410^\circ=50^\circ$ and $850^\circ=130^\circ$.`),
  note(r`Negative value angles represent the direction as clockwise: $-30^\circ=330^\circ$ and $-150^\circ=210^\circ$.`),

  h2('Worked examples'),
  ...worked(
    '1',
    r`$R(-6;\,8)$ is given and the angle $R\hat OX=\alpha$. 1.1 Determine the length of $OR$. 1.2 Determine the value of $\sin\alpha$. 1.3 Determine the value of $\tan\alpha$.`,
    [
      ['1.1 (Pythagoras)', r`OR=\sqrt{6^2+8^2}=10\text{ units}`],
      ['1.2', r`\sin\alpha=\dfrac{y}{r}=\dfrac{8}{10}=\dfrac45`],
      ['1.3', r`\tan\alpha=\dfrac{y}{x}=-\dfrac{8}{6}=-\dfrac43`],
    ],
    anglePlane(-6, 8, 'R(−6; 8)', 'α'),
  ),
  ...worked(
    '2',
    r`Given $\tan\alpha=-2$ and $\alpha\in[180^\circ;\,360^\circ]$. Using a sketch determine $\cos\alpha$.`,
    [
      ['Step 1: The angle is in the 3rd or 4th quadrant. But it can’t be in the 3rd because tan is not positive (CAST).', ''],
      ['Step 2: Because', r`\tan\alpha=\dfrac{y}{x}=\dfrac{-2}{1}`],
      ['we say that $y=-2$ and $x=1$ ($x$ is positive and $y$ is negative).', ''],
      ['Step 3: Use Pythagoras to find $r$:', r`1^2+2^2=r^2\;\Rightarrow\;r^2=5\;\Rightarrow\;r=\sqrt5`],
      ['Step 4: Find other trig functions:', r`\cos\alpha=\dfrac{x}{r}=\dfrac{1}{\sqrt5}`],
    ],
    anglePlane(1, -2, '(1; −2)', 'α'),
  ),
  ...worked(
    '3',
    r`Given $\sin\theta=\dfrac{1}{\sqrt3}$ and $\theta\in[90^\circ;\,180^\circ]$. Using a sketch determine the values of $\cos\theta$ and $\tan\theta$.`,
    [
      ['Step 1: To find other trig functions we sketch the angle in its own quadrant.', ''],
      ['Step 2: Because', r`\sin\theta=\dfrac{y}{r}`],
      ['we say that $y=1$ and $r=\\sqrt3$ ($x$ is negative and $y$ is positive).', ''],
      ['Step 3: Use Pythagoras to find $x$:', r`x^2+1^2=(\sqrt3)^2`],
      r`x^2=3-1=2`,
      ['$x=\\sqrt2$ — NA (not allowed: $x$ is negative here) — so', r`x=-\sqrt2`],
      ['Step 4: Find other trig functions:', r`\cos\theta=\dfrac{x}{r}=\dfrac{-\sqrt2}{\sqrt3}`],
      r`\tan\theta=\dfrac{y}{x}=\dfrac{1}{-\sqrt2}=\dfrac{-1}{\sqrt2}`,
    ],
    anglePlane(-Math.SQRT2, 1, '(x; 1)', 'θ', { xRange: [-4, 3], yRange: [-3, 3] }),
  ),
  ...worked(
    '4',
    r`If $17\cos B-8=0$ and $\sin B<0$. Without a calculator evaluate the value of $\tan B\cdot\sin B$.`,
    [
      ['', r`\cos B=\dfrac{8}{17}\left(\dfrac{x}{r}\right)`],
      ['Step 1: The angle is in the 4th quadrant, because cosine is positive and sine is negative (CAST).', ''],
      ['Step 2: Because', r`\cos B=\dfrac{x}{r}=\dfrac{8}{17}`],
      ['we say that $x=8$ and $r=17$ ($x$ is positive and $y$ is negative).', ''],
      ['Step 3: Use Pythagoras to find $y$:', r`8^2+y^2=17^2\;\Rightarrow\;y^2=17^2-8^2=225`],
      ['$y=-\\sqrt{225}$ or $y=\\sqrt{225}$ (NA: $y$ is negative here), so', r`y=-15`],
      ['Step 4: Find other trig functions:', r`\sin B=\dfrac{y}{r}=\dfrac{-15}{17}\qquad\tan B=\dfrac{y}{x}=\dfrac{-15}{8}`],
      ['And finally,', r`\tan B\cdot\sin B=\dfrac{-15}{8}\cdot\dfrac{-15}{17}=\dfrac{225}{136}`],
    ],
    anglePlane(8, -15, '(8; y)', 'B', { xRange: [-4, 11], yRange: [-17, 4] }),
  ),
  note(r`The book’s last line for this question reads “$\tan B+\sin B=-\frac{15}{15}\cdot\left(-\frac87\right)=\frac{120}{119}$”, which does not follow from its own values $\sin B=-\frac{15}{17}$ and $\tan B=-\frac{15}{8}$. The product is $\frac{225}{136}$, as worked above.`),
  ...worked(
    '5',
    r`In the diagram, $OR=4$ and $R\hat OX=210^\circ$. Determine the coordinates of $R$.`,
    [
      ['$OR=r=4$. Use $\\sin\\theta=\\dfrac{y}{r}$ to find $y$:', r`\sin210^\circ=\dfrac{y}{4}`],
      r`y=4\cdot\sin210^\circ=-2`,
      ['Use $\\cos\\theta=\\dfrac{x}{r}$ to find $x$ (the book labels this step “find $y$”):', r`\cos210^\circ=\dfrac{x}{4}`],
      r`x=4\cdot\cos210^\circ=-2\sqrt3`,
      ['So,', r`R(-2\sqrt3;\,-2)`],
    ],
    anglePlane(-2 * Math.sqrt(3), -2, 'R', '210°', { xRange: [-5, 3], yRange: [-4, 3] }),
  ),
  ...worked(
    '6',
    r`Prove, using a sketch, $\sin^2\theta+\cos^2\theta=1$.`,
    [
      ['', r`\sin\theta=\dfrac{y}{r}\qquad\cos\theta=\dfrac{x}{r}`],
      ['(Pythagoras Th.; the book prints a “+” in place of the “=”)', r`x^2+y^2=r^2`],
      ['', r`\text{LHS}=\sin^2\theta+\cos^2\theta`],
      r`=\dfrac{y^2}{r^2}+\dfrac{x^2}{r^2}`,
      ['(Pythagoras)', r`=\dfrac{x^2+y^2}{r^2}`],
      r`=\dfrac{r^2}{r^2}`,
      r`=1=\text{RHS}`,
    ],
    {
      xRange: [-1, 8], yRange: [-1, 5], axes: true, grid: false,
      points: [
        { id: 'O', label: '', x: 0, y: 0, hide: true },
        { id: 'A', label: '', x: 6, y: 0, hide: true },
        { id: 'P', label: '', x: 6, y: 3.6, hide: true },
      ],
      segments: [
        { from: 'O', to: 'P', color: 'alt', label: 'r' },
        { from: 'O', to: 'A', color: 'main', label: 'x' },
        { from: 'A', to: 'P', color: 'main', label: 'y' },
      ],
      angles: [{ at: 'O', from: '+x', to: 'P', label: 'θ', radius: 34 }, { at: 'A', from: 'O', to: 'P', right: true }],
    },
  ),
]);

/* ── D. Trigonometric equations ──────────────────────────────────────────── */

export const D_EQUATIONS = lesson('geom-u2-d-equations', 'D. Trigonometric Equations', 22, [
  h2('Trigonometric equations'),
  p(r`Trigonometric equations are questions where you need to find the value of the angle. But trig equations have more than one solution.`),
  h3('1. The general solutions'),
  ul([
    r`First leave the trigonometric function alone by using equation rules.`,
    r`Then find the unknown angle using inverse trig functions ($\sin^{-1}$, $\cos^{-1}$ or $\tan^{-1}$). Call it the ref angle.`,
    r`Use the formulas below to find general solutions.`,
  ]),
  formula('For sin x', r`x=\text{ref}+k\cdot360^\circ\qquad x=180^\circ-\text{ref}+k\cdot360^\circ`),
  formula('For cos x', r`x=\text{ref}+k\cdot360^\circ\qquad x=-\text{ref}+k\cdot360^\circ`),
  formula('For tan x', r`x=\text{ref}+k\cdot180^\circ`),
  p(r`where $k\in\mathbb{Z}$.`),
  note(r`It’s very important that you do NOT do an operation with the unknown angle before you write the general solution.`),
  h3('2. Solutions in an interval'),
  p(r`Many times you are given an interval for solutions. In this case:`),
  ul([
    r`First, we follow the same procedure as we find the general solutions.`,
    r`Then by replacing $k$ with integers like $0$, $1$, $2$, $-1$ etc. we can determine the solutions in the given interval.`,
  ]),

  h2('Worked examples'),
  ...worked(
    '1',
    r`Determine the general solution of: $3\sin\alpha+1=0$`,
    [
      r`\sin\alpha=-\dfrac13`,
      r`=\sin^{-1}\left(-\dfrac13\right)=-19{,}47^\circ\quad(\text{ref})`,
      r`\alpha=-19{,}47^\circ+k\cdot360^\circ`,
      r`\alpha=180^\circ-(-19{,}47^\circ)+k\cdot360^\circ=199{,}47^\circ+k\cdot360^\circ`,
      ['Therefore', r`\left.\begin{aligned}\alpha&=-19{,}47^\circ+k\cdot360^\circ\\\alpha&=199{,}47^\circ+k\cdot360^\circ\end{aligned}\right\}\;k\in\mathbb{Z}`],
    ],
  ),
  note(r`The book prints the second solution as $-199{,}47^\circ+k\cdot360^\circ$; its own line above it ($180^\circ-(-19{,}47^\circ)$) gives $199{,}47^\circ$, which is what is used here.`),
  ...worked(
    '2',
    r`Determine the general solution of: $\cos\alpha+\tan147^\circ=0$`,
    [
      r`\cos\alpha=-\tan147^\circ`,
      r`\cos\alpha=0{,}65`,
      r`\alpha=\cos^{-1}(0{,}65)=49{,}50^\circ`,
      ['Therefore', r`\left.\begin{aligned}\alpha&=49{,}50^\circ+k\cdot360^\circ\\\alpha&=-49{,}50^\circ+k\cdot360^\circ\end{aligned}\right\}\;k\in\mathbb{Z}`],
    ],
  ),
  ...worked(
    '3',
    r`Determine the general solution of: $\cos3\alpha+1=0$`,
    [
      r`\cos3\alpha=-1`,
      r`3\alpha=\cos^{-1}(-1)=180^\circ\quad(\text{ref})`,
      r`3\alpha=180^\circ+k\cdot360^\circ\qquad3\alpha=-180^\circ+k\cdot360^\circ`,
      r`3\alpha=\pm180^\circ+360^\circ\cdot k`,
      r`\therefore\;\alpha=\pm60^\circ+k\cdot120^\circ,\;k\text{ is an integer}`,
    ],
  ),
  ...worked(
    '4',
    r`Determine the general solution of: $5+2\tan\alpha=0$ where $\alpha\in[-180^\circ;\,360^\circ]$`,
    [
      r`\tan\alpha=-\dfrac52`,
      r`\alpha=\tan^{-1}\left(-\dfrac52\right)=-68{,}20^\circ\quad(\text{ref})`,
      r`\therefore\;\alpha=-68{,}20^\circ+k\cdot180^\circ,\;k\in\mathbb{Z}`,
      ['As we see, so far everything is the same. Now it is time to replace $k$ with the integers that we want. Starting from $0$, take $1,-1,2\\ldots$ if necessary. We get the answers for $k=0$, $1$ and $2$.', r`\therefore\;\alpha=-68{,}20^\circ;\;111{,}80^\circ;\;291{,}80^\circ`],
    ],
  ),
  ...worked(
    '5',
    r`Determine the general solution of: $2\sin(\alpha+25^\circ)-1=0$`,
    [
      r`\sin(\alpha+25^\circ)=\dfrac12`,
      r`\alpha+25^\circ=\sin^{-1}\left(\dfrac12\right)=30^\circ\quad(\text{ref})`,
      r`\alpha+25^\circ=30^\circ+k\cdot360\qquad\alpha+25^\circ=150^\circ+k\cdot360`,
      ['Therefore', r`\alpha=5^\circ+k\cdot360^\circ\qquad\alpha=125^\circ+k\cdot360^\circ,\;k\text{ is an integer}`],
    ],
  ),
  ...worked(
    '6',
    r`Determine the general solution of: $3\sin2\alpha-2=0$ where $\alpha\in[-120^\circ;\,360^\circ]$`,
    [
      r`\sin2\alpha=\dfrac23`,
      r`2\alpha=\sin^{-1}\left(\dfrac23\right)=41{,}81^\circ`,
      r`2\alpha=41{,}81^\circ+k\cdot360^\circ\qquad2\alpha=138{,}19^\circ+k\cdot360^\circ`,
      ['Therefore', r`\alpha=20{,}91^\circ+k\cdot180^\circ\qquad\alpha=69{,}09^\circ+k\cdot180^\circ,\;k\text{ is an integer}`],
      ['For $k=-1;\\,0;\\,1$', r`\alpha=20{,}91^\circ;\;200{,}91^\circ\quad\text{and}\quad\alpha=-110{,}91^\circ;\;69{,}09^\circ;\;249{,}09^\circ`],
    ],
  ),
  ...worked(
    '7',
    r`Determine the solution(s) for the equation $2\cos(3\alpha+60^\circ)+1=0$, where $\alpha\in[-180^\circ;\,180^\circ]$ (the right-hand end of the interval is cut off in the photo; the solutions listed end at $180^\circ$).`,
    [
      r`\cos(3\alpha+60^\circ)=-\dfrac12`,
      r`3\alpha+60^\circ=120^\circ\quad(\text{ref})`,
      r`3\alpha+60^\circ=120^\circ+k\cdot360^\circ\qquad3\alpha+60^\circ=-120^\circ+k\cdot360^\circ`,
      r`3\alpha=60^\circ+k\cdot360^\circ\qquad3\alpha=-180^\circ+k\cdot360^\circ`,
      ['So, the general solutions are', r`\alpha=20^\circ+k\cdot120^\circ\qquad\alpha=-60^\circ+k\cdot120^\circ,\;k\text{ is an integer}`],
      ['For the first equation we replace $k=-1,0,1$', r`\alpha=-100^\circ;\;20^\circ;\;140^\circ`],
      ['For the second equation we replace $k=0,1,2$', r`\alpha=-60^\circ;\;60^\circ;\;180^\circ`],
      ['So, there are 6 solutions in this interval.', r`\therefore\;\alpha=-100^\circ;\,-60^\circ;\,20^\circ;\,60^\circ;\,140^\circ;\,180^\circ`],
    ],
  ),
  ...worked(
    '8',
    r`Determine the general solution of: $\cos\alpha\cdot(\sin\alpha+1)=0$`,
    [
      r`\text{Either }\cos\alpha=0\quad\text{OR}\quad\sin\alpha+1=0`,
      r`\alpha=\cos^{-1}(0)=90^\circ\;(\text{ref})\qquad\sin\alpha=-1\;\Rightarrow\;\alpha=-90^\circ\;(\text{ref})`,
      r`\alpha=90^\circ+k\cdot360^\circ\qquad\alpha=-90^\circ+k\cdot360^\circ`,
      r`\alpha=-90^\circ+k\cdot360^\circ\qquad\alpha=270^\circ+k\cdot360^\circ`,
      r`\therefore\;\alpha=\pm90^\circ+k\cdot360^\circ,\;k\text{ is an integer}`,
    ],
  ),
  note(r`Sometimes, factorization is very important to be able to solve the questions… (the rest of this note is cut off at the edge of the photo).`),

  h2('Task 5'),
  ANSWERS_NOTE,
  qs([
    { n: '1', q: r`Determine the general solution of: $7\cos\alpha+3=0$`, a: r`$\cos\alpha=-\dfrac37$, ref $=\cos^{-1}\left(-\tfrac37\right)=115{,}38^\circ$. $\alpha=115{,}38^\circ+k\cdot360^\circ$ or $\alpha=-115{,}38^\circ+k\cdot360^\circ$, $k\in\mathbb{Z}$.` },
    { n: '2', q: r`Determine the general solution of: $\tan\alpha+\cos147^\circ=0$`, a: r`$\tan\alpha=-\cos147^\circ=0{,}8387$, ref $=\tan^{-1}(0{,}8387)=39{,}99^\circ$. $\alpha=39{,}99^\circ+k\cdot180^\circ$, $k\in\mathbb{Z}$.` },
    { n: '3', q: r`Determine the general solution of: $3+5\sin\alpha=0$`, a: r`$\sin\alpha=-\dfrac35$, ref $=\sin^{-1}(-0{,}6)=-36{,}87^\circ$. $\alpha=-36{,}87^\circ+k\cdot360^\circ$ or $\alpha=180^\circ-(-36{,}87^\circ)+k\cdot360^\circ=216{,}87^\circ+k\cdot360^\circ$.` },
    { n: '4', q: r`Determine all solutions of $\tan(\alpha+5^\circ)-8=0$, where $\alpha\in[-180^\circ;\,360^\circ]$`, a: r`$\tan(\alpha+5^\circ)=8$, ref $=82{,}87^\circ$. $\alpha+5^\circ=82{,}87^\circ+k\cdot180^\circ$, so $\alpha=77{,}87^\circ+k\cdot180^\circ$. In the interval: $\alpha=-102{,}13^\circ;\;77{,}87^\circ;\;257{,}87^\circ$.` },
    { n: '5', q: r`Determine all solutions of $\sin5\alpha-1=0$ in the given interval $\alpha\in[-50^\circ;\,100^\circ]$`, a: r`$\sin5\alpha=1$, ref $=90^\circ$. $5\alpha=90^\circ+k\cdot360^\circ$, so $\alpha=18^\circ+k\cdot72^\circ$. In the interval ($k=-1$ gives $-54^\circ$, which is out): $\alpha=18^\circ;\;90^\circ$.` },
    { n: '6', q: r`Determine all solutions of $4\cos4\alpha+1=0$, $\alpha\in[0^\circ;\,180^\circ]$`, a: r`$\cos4\alpha=-\dfrac14$, ref $=104{,}48^\circ$. $4\alpha=\pm104{,}48^\circ+k\cdot360^\circ$, so $\alpha=\pm26{,}12^\circ+k\cdot90^\circ$. In the interval: $\alpha=26{,}12^\circ;\;63{,}88^\circ;\;116{,}12^\circ;\;153{,}88^\circ$.` },
  ]),
]);

/* ── E. Trigonometric identities ─────────────────────────────────────────── */

export const E_IDENTITIES = lesson('geom-u2-e-identities', 'E. Trigonometric Identities', 14, [
  h2('The two identities'),
  p(r`Mainly there are two trigonometric identities (something which is always true).`),
  formula('Identity 1', r`\sin^2x+\cos^2x=1`),
  p(r`which also may look as:`),
  eq(r`1-\sin^2x=\cos^2x\qquad\qquad1-\cos^2x=\sin^2x`),
  formula('Identity 2', r`\tan x=\dfrac{\sin x}{\cos x}`),
  p(r`also may look as:`),
  eq(r`\dfrac{1}{\tan x}=\dfrac{\cos x}{\sin x}\;(=\cot x)`),
  p(r`Also you should know well the rules of addition, subtraction and division of fractions:`),
  formula('Add / Subtract', r`\dfrac{a}{b}-\dfrac{x}{y}=\dfrac{a\cdot y-x\cdot b}{b\cdot y}`),
  formula('Division', r`\dfrac{\;\dfrac{a}{b}\;}{\dfrac{x}{y}}=\dfrac{a}{b}\cdot\dfrac{y}{x}`),

  h2('Examples'),
  h3('1  Simplify  1 − sin x · cos x · tan x'),
  solution([
    r`1-\sin x\cdot\cos x\cdot\dfrac{\sin x}{\cos x}`,
    r`=1-\sin x\cdot\sin x`,
    r`=1-\sin^2x`,
    r`=\cos^2x`,
  ]),
  h3('2  Simplify  tan²θ · cos²θ'),
  solution([
    r`=\dfrac{\sin^2\theta}{\cos^2\theta}\cdot\cos^2\theta`,
    r`=\sin^2\theta`,
  ]),
  h3('3  Simplify  1/cos²x − tan²x'),
  solution([
    r`\dfrac{1}{\cos^2x}-\tan^2x`,
    r`=\dfrac{1}{\cos^2x}-\dfrac{\sin^2x}{\cos^2x}`,
    r`=\dfrac{1-\sin^2x}{\cos^2x}`,
    r`=\dfrac{\cos^2x}{\cos^2x}`,
    r`=1`,
  ]),
  h3('4  Show that  sin x/cos x + cos x/sin x = 1/(sin x · cos x)'),
  p(r`To show this equality, take LHS and show that it equals RHS:`),
  solution([
    ['(make denominators the same)', r`\text{LHS}=\dfrac{\sin x}{\cos x}+\dfrac{\cos x}{\sin x}`],
    ['(top is equal to 1)', r`=\dfrac{\sin^2x}{\sin x\cos x}+\dfrac{\cos^2x}{\sin x\cos x}`],
    r`=\dfrac{1}{\sin x\cdot\cos x}=\text{RHS}`,
  ]),
  h3('5  Prove that  sin x cos x / (1 − sin²x + cos²x) = ½ tan x'),
  p(r`To prove this expression, take LHS and show that it equals RHS:`),
  solution([
    r`\text{LHS}=\dfrac{\sin x\cos x}{1-\sin^2x+\cos^2x}`,
    r`=\dfrac{\sin x\cos x}{\cos^2x+\cos^2x}`,
    r`=\dfrac{\sin x\cos x}{2\cos^2x}`,
    r`=\dfrac{\sin x}{2\cos x}`,
    r`=\dfrac12\tan x=\text{RHS}`,
  ]),
  h3('6  Show that  tan θ + cos θ/(sin θ − 1) = −1/cos θ'),
  note(r`The book prints this question without its “=” sign, but its solution ends at $-\dfrac{1}{\cos\theta}=\text{RHS}$, so that is the statement being shown.`),
  p(r`To show this equality, take LHS and show that it equals RHS:`),
  solution([
    r`\text{LHS}=\tan\theta+\dfrac{\cos\theta}{\sin\theta-1}`,
    ['(make denominators the same)', r`=\dfrac{\sin\theta}{\cos\theta}+\dfrac{\cos\theta}{\sin\theta-1}`],
    r`=\dfrac{\sin\theta(\sin\theta-1)+\cos\theta\cdot\cos\theta}{\cos\theta(\sin\theta-1)}`,
    r`=\dfrac{\sin^2\theta-\sin\theta+\cos^2\theta}{\cos\theta(\sin\theta-1)}`,
    r`=\dfrac{1-\sin\theta}{\cos\theta(\sin\theta-1)}`,
    r`=\dfrac{-1}{\cos\theta}=\text{RHS}`,
  ]),
]);

export const GEOM_UNIT_2B_LESSONS: Lesson[] = [C_CARTESIAN, D_EQUATIONS, E_IDENTITIES];
