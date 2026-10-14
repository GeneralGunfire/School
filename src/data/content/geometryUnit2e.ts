import type { Figure, Lesson } from '../../lib/types';
import { r, h2, h3, p, ul, note, formula, eq, fig, qs, solution, lesson as make, ANSWERS_NOTE } from './geomKit';
import { H_GRAPHS_TASK_18_FIGURES } from './geometryUnit2eFigures';

/**
 * Paper 2 — Unit 2: Trigonometry, Task 18 and section I, applications (book pp. 84–91; photos …864 – …867).
 * Page 83 onward of Task 17 and the pages after 91 are covered elsewhere or are not in the photo set.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('geom-trigonometry', id, title, minutes, blocks);

type V = 'A' | 'B' | 'C';

/** A triangle drawn to scale from its three sides (a opposite A, b opposite B, c opposite C). */
export const triangle = (
  a: number,
  b: number,
  c: number,
  o: {
    names?: [string, string, string];
    sides?: [string?, string?, string?];
    angles?: { at: V; label: string }[];
    right?: V;
    caption?: string;
  } = {},
): Figure => {
  const x = (a * a + c * c - b * b) / (2 * a);
  const y = Math.sqrt(Math.max(c * c - x * x, 0.0001));
  const P: Record<V, [number, number]> = { B: [0, 0], C: [a, 0], A: [x, y] };
  const [nA, nB, nC] = o.names ?? ['', '', ''];
  const [sa, sb, sc] = o.sides ?? [];
  const others: Record<V, [V, V]> = { A: ['B', 'C'], B: ['C', 'A'], C: ['A', 'B'] };
  const pad = Math.max(a, y) * 0.16;
  return {
    xRange: [Math.min(0, x) - pad, Math.max(a, x) + pad],
    yRange: [-pad, y + pad],
    axes: false,
    points: [
      { id: 'A', label: nA, x: P.A[0], y: P.A[1], side: 'n', color: 'main' },
      { id: 'B', label: nB, x: P.B[0], y: P.B[1], side: 'sw', color: 'main' },
      { id: 'C', label: nC, x: P.C[0], y: P.C[1], side: 'se', color: 'main' },
    ],
    polygons: [{ ids: ['A', 'B', 'C'] }],
    segments: [
      { from: 'B', to: 'C', label: sa },
      { from: 'C', to: 'A', label: sb },
      { from: 'A', to: 'B', label: sc },
    ],
    angles: [
      ...(o.right ? [{ at: o.right, from: others[o.right][0], to: others[o.right][1], right: true }] : []),
      ...(o.angles ?? []).map((m) => ({ at: m.at, from: others[m.at][1], to: others[m.at][0], label: m.label, radius: 24 })),
    ],
    caption: o.caption,
  };
};

export const I_APPLICATIONS = lesson('geom-u2-i-applications', 'I. Applications of Trigonometry', 45, [
  /* ── Task 18 ────────────────────────────────────────────────────────── */
  h2('Task 18'),
  ANSWERS_NOTE,
  ...H_GRAPHS_TASK_18_FIGURES,
  qs([
    { n: '1.1', context: r`The graphs of two trig functions $f$ and $g$ are shown for $x\in[0^\circ;\,360^\circ]$. Find the equation of $f$ and $g$.`, q: r`$f(x)=a\cos x$ and $g(x)=b\sin x$. Find $a$ and $b$.`, a: r`$f$ starts at $2$ when $x=0^\circ$: $a\cos0^\circ=a=2$, so $f(x)=2\cos x$. $g$ has maximum $1$: $b=1$, so $g(x)=\sin x$.` },
    { n: '1.2', context: r`Same diagram:`, q: r`Write down the range of $f$.`, a: r`$f(x)=2\cos x$, so $y\in[-2;\,2]$.` },
    { n: '1.3', context: r`Same diagram:`, q: r`If $f$ and $g$ intersect at $A(63{,}4^\circ;\,p)$, determine the value of $p$.`, a: r`$p=g(63{,}4^\circ)=\sin63{,}4^\circ=0{,}89$ (check with $f$: $2\cos63{,}4^\circ=0{,}90$).` },
    { n: '1.4', context: r`Same diagram:`, q: r`Write down the period of $g$.`, a: r`$360^\circ$` },
    { n: '2.1', context: r`Given $f(x)=-2\cos x$ and $g(x)=\sin x-1$.`, q: r`On the set of axes, draw sketch graphs of $f$ and $g$ for $x\in[0^\circ;\,360^\circ]$.`, a: r`See the sketch above: $f$ starts at $-2$, rises to $2$ at $180^\circ$ and returns to $-2$; $g$ is the sine curve shifted down $1$ unit, running between $-2$ and $0$.` },
    { n: '2.2', context: r`Given $f(x)=-2\cos x$ and $g(x)=\sin x-1$.`, q: r`Write down the period of $g$.`, a: r`$360^\circ$` },
    { n: '2.3', context: r`Given $f(x)=-2\cos x$ and $g(x)=\sin x-1$.`, q: r`What is the range of $f$?`, a: r`$y\in[-2;\,2]$` },
    { n: '2.4', context: r`Given $f(x)=-2\cos x$ and $g(x)=\sin x-1$.`, q: r`Write down the one value of $x$ for which $f(x)=g(x)$.`, a: r`From the sketch the graphs meet at $x=90^\circ$, where $f(90^\circ)=-2\cos90^\circ=0$ and $g(90^\circ)=\sin90^\circ-1=0$. (They cross a second time near $323^\circ$.)` },
    { n: '3.1', context: r`Given graphs $f(x)=\tan x$ and $g(x)=a\cos x$.`, q: r`Determine the value of $a$.`, a: r`$g$ has its minimum $-3$ at $180^\circ$ and starts at $3$ when $x=0^\circ$, so $a=3$.` },
    { n: '3.2', context: r`Given graphs $f(x)=\tan x$ and $g(x)=a\cos x$.`, q: r`If $f(x)$ is shifted two units upwards, write down the equation of the new function.`, a: r`$y=\tan x+2$` },
    { n: '3.3', context: r`Given graphs $f(x)=\tan x$ and $g(x)=a\cos x$.`, q: r`Write down the values of $x$ for which $g(x)=0$.`, a: r`$3\cos x=0$ at $x=90^\circ$ and $x=270^\circ$ (in the interval shown).` },
    { n: '3.4', context: r`Given graphs $f(x)=\tan x$ and $g(x)=a\cos x$.`, q: r`Write down the range of $g$.`, a: r`$y\in[-3;\,3]$` },
    { n: '3.5', context: r`Given graphs $f(x)=\tan x$ and $g(x)=a\cos x$.`, q: r`Write down the period of $f$.`, a: r`$180^\circ$` },
  ]),

  /* ── I. Applications ────────────────────────────────────────────────── */
  h2('I. Applications of trigonometry'),
  p(r`In $\triangle ABC$, we call: $a$ the side opposite to $A$, $b$ the side opposite to $B$ and $c$ the side opposite to $C$.`),
  fig(triangle(8, 6.5, 5, { names: ['A', 'B', 'C'], sides: ['a', 'b', 'c'] })),

  h3('1. Area rule'),
  p(r`To find the area of a triangle we may use:`),
  formula('Area rule', r`\text{Area}(\triangle ABC)=\dfrac12\,ab\cdot\sin\hat C`),
  p(r`Use this formula when you know the lengths of two sides and the angle between them ($a$, $b$ and angle $C$). This rule can be written with other angles as well:`),
  eq(r`\text{Area}(\triangle ABC)=\dfrac12\,bc\sin\hat A\qquad\text{Area}(\triangle ABC)=\dfrac12\,ac\sin\hat B`),

  h3('2. Cosine rule'),
  p(r`This rule is similar to the Pythagoras rule but in any triangle:`),
  formula('Cosine rule', r`a^2=b^2+c^2-2bc\cdot\cos\hat A`),
  p(r`Apply this rule:`),
  ul([
    r`When you know the lengths of two sides and the angle between them ($b$, $c$ and angle $A$), you can find the third side ($a$).`,
    r`When you know all three sides, then you can find an angle.`,
  ]),
  p(r`This rule can be written for other angles as well:`),
  eq(r`b^2=a^2+c^2-2ac\cdot\cos\hat B\qquad c^2=a^2+b^2-2ab\cdot\cos\hat C`),

  h3('3. Sine rule'),
  p(r`And another rule that describes the relations among sides and angles of a triangle:`),
  formula('Sine rule', r`\dfrac{a}{\sin A}=\dfrac{b}{\sin B}=\dfrac{c}{\sin C}`),
  p(r`Apply this rule:`),
  ul([
    r`When you know two angles (which means all angles also) and one side, you can find the other sides.`,
    r`When you know two sides and one angle (not between them), you can find an angle.`,
  ]),
  note(r`Note that each fraction has an angle and the side opposite to that angle. Also, we usually use only two ratios with cross multiplication followed.`),

  h2('Examples'),
  p(r`Decide which rule you will use (area, sine or cosine) to find the unknowns $x$ or $y$.`),
  fig(triangle(7, 5.47, 5, { sides: ['7', 'x', '5'], angles: [{ at: 'B', label: '51°' }], caption: 'a)  two sides and the included angle' })),
  fig(triangle(15, 12, 13.2, { sides: ['15', '12', ''], angles: [{ at: 'A', label: 'y' }, { at: 'C', label: '49°' }], caption: 'b)  two sides and a non-included angle' })),
  fig(triangle(9.7, 9, 8.8, { sides: ['y', 'x', '9'], angles: [{ at: 'A', label: '56°' }, { at: 'B', label: '66°' }], caption: 'c)  two angles and one side' })),
  fig(triangle(13, 11, 7, { sides: ['13', '11', '7'], angles: [{ at: 'A', label: 'y' }, { at: 'C', label: 'x' }], caption: 'd)  all three sides' })),
  note(r`The book leaves the four answers blank. Using its own rules: a) cosine rule (two sides and the angle between them); b) sine rule (two sides and an angle not between them); c) sine rule (two angles and a side); d) cosine rule (all three sides). The sides in b) and d) are drawn to match the numbers given; the rest are to scale as well.`),

  h3('Question 1'),
  p(r`According to the figure, determine the length of $x$ and calculate the area of the triangle. (Sides $5$ and $7$ with the included angle $51^\circ$.)`),
  solution([
    ['We know two sides and the included angle, so use the cosine rule:', r`x^2=5^2+7^2-2\cdot5\cdot7\cdot\cos51^\circ`],
    r`x^2=29{,}95`,
    r`x=5{,}47`,
    ['Use the area formula:', r`\text{Area}=\dfrac12\cdot7\cdot5\cdot\sin51^\circ=13{,}60`],
  ]),
  note(r`The book writes this area as $\frac12\cdot7\cdot5\cdot\cos51^\circ=11{,}01$. The area rule uses $\sin$ of the included angle, so the correct area is $13{,}60$ square units.`),
  h3('Question 2'),
  p(r`According to the figure, calculate $y$ (acute). (Sides $12$ and $15$, with $49^\circ$ opposite the side $12$ and $y$ opposite the side $15$.)`),
  solution([
    ['Two sides and a non-included angle are given, so use the sine rule (pay attention to use opposite side and angle ratios):', r`\dfrac{15}{\sin y}=\dfrac{12}{\sin49^\circ}`],
    ['(cross multiply)', r`12\sin y=15\sin49^\circ`],
    r`\sin y=\dfrac{15\sin49^\circ}{12}=0{,}94`,
    r`y=70{,}63^\circ`,
  ]),
  note(r`The book prints $y=70{,}05^\circ$; $\sin^{-1}(0{,}9434)=70{,}63^\circ$.`),
  h3('Question 3'),
  p(r`In the figure below find the values of $x$ and $y$. (A triangle with angles $56^\circ$, $66^\circ$ and the third angle $58^\circ$, and side $9$ opposite the $58^\circ$ angle.)`),
  solution([
    ['Because we know two angles and one side, we’ll use the sine rule (the angle opposite to $9$ is $58^\\circ$):', r`\dfrac{9}{\sin58^\circ}=\dfrac{x}{\sin66^\circ}=\dfrac{y}{\sin56^\circ}`],
    ['To find $x$:', r`x=\dfrac{9\sin66^\circ}{\sin58^\circ}=9{,}7`],
    ['Use the second proportion to find $y$:', r`y=\dfrac{9\sin56^\circ}{\sin58^\circ}=8{,}8`],
  ]),
  h3('Question 4'),
  p(r`In the figure below find the values of $x$ and $y$. (Sides $11$, $13$ and $7$; $x$ is opposite $7$.)`),
  solution([
    ['Because we know all three sides, we’ll use the cosine rule:', r`7^2=11^2+13^2-2\cdot11\cdot13\cdot\cos x`],
    r`49=290-286\cos x`,
    r`-241=-286\cos x`,
    r`\cos x=0{,}84\;\Rightarrow\;x=32{,}6^\circ`,
    ['Use the cosine or sine rule to find angle $y$ yourself ($y$ is opposite $13$):', r`\cos y=\dfrac{11^2+7^2-13^2}{2\cdot11\cdot7}=\dfrac{1}{154}\;\Rightarrow\;y=89{,}6^\circ`],
  ]),
  note(r`The book gives $x=32{,}86^\circ$, which comes from rounding $\cos x$ to $0{,}84$ first. Unrounded, $\cos x=\frac{241}{286}=0{,}8427$ and $x=32{,}6^\circ$. Always round at the end.`),

  h2('Task 19'),
  ANSWERS_NOTE,
  qs([
    { n: '1.1', context: r`In $\triangle PQR$, $\hat Q=24^\circ$, $\hat R=64^\circ$ and $PQ=3$.`, q: r`Find $RQ$ and $PR$.`, a: r`$\hat P=180^\circ-24^\circ-64^\circ=92^\circ$. $\dfrac{RQ}{\sin92^\circ}=\dfrac{3}{\sin64^\circ}\Rightarrow RQ=3{,}34$. $\dfrac{PR}{\sin24^\circ}=\dfrac{3}{\sin64^\circ}\Rightarrow PR=1{,}36$.` },
    { n: '1.2', context: r`In $\triangle KLM$, $\hat K=43^\circ$, $\hat M=50^\circ$ and $KL=1$.`, q: r`Find $LM$ and $KM$.`, a: r`$\hat L=87^\circ$. $\dfrac{LM}{\sin43^\circ}=\dfrac{1}{\sin50^\circ}\Rightarrow LM=0{,}89$. $\dfrac{KM}{\sin87^\circ}=\dfrac{1}{\sin50^\circ}\Rightarrow KM=1{,}30$.` },
    { n: '2', q: r`In $\triangle ABC$, $\hat A=116^\circ$, $\hat C=32^\circ$ and $AC=23\text{ cm}$. Find the length of the side $BC$.`, a: r`$\hat B=32^\circ$. $\dfrac{BC}{\sin116^\circ}=\dfrac{23}{\sin32^\circ}\Rightarrow BC=\dfrac{23\sin116^\circ}{\sin32^\circ}=39{,}0\text{ cm}$.` },
    { n: '3', q: r`In $\triangle KMS$, $\hat K=20^\circ$, $\hat M=100^\circ$ and $KM=30\text{ cm}$. Find the perimeter of $\triangle KMS$.`, a: r`$\hat S=60^\circ$. $KS=\dfrac{30\sin100^\circ}{\sin60^\circ}=34{,}11$ and $MS=\dfrac{30\sin20^\circ}{\sin60^\circ}=11{,}85$. Perimeter $=30+34{,}11+11{,}85=75{,}96\text{ cm}$.` },
    { n: '4.1', context: r`Find the unknown sides and angles of the following triangles.`, q: r`Find side $a$ in $\triangle ABC$ if $\hat A=70^\circ$, $b=4$ and $c=9$.`, a: r`$a^2=4^2+9^2-2\cdot4\cdot9\cos70^\circ=72{,}38$, so $a=8{,}51$.` },
    { n: '4.2', context: r`Find the unknown sides and angles of the following triangles.`, q: r`Find side $z$ in $\triangle XYZ$ if $\hat Y=112^\circ$, $x=2$ and $y=3$.`, a: r`Two sides $x$, $y$ and the angle $Y$ opposite $y$ (not between them), so use the sine rule: $\dfrac{\sin X}{2}=\dfrac{\sin112^\circ}{3}\Rightarrow X=38{,}2^\circ$, $Z=29{,}8^\circ$, then $z=\dfrac{3\sin29{,}8^\circ}{\sin112^\circ}=1{,}61$.` },
    { n: '4.3', context: r`Find the unknown sides and angles of the following triangles.`, q: r`Find angle $\hat K$ in $\triangle KLM$ if $KL=5$, $LM=10$ and $KM=7$.`, a: r`$\cos K=\dfrac{5^2+7^2-10^2}{2\cdot5\cdot7}=-\dfrac{26}{70}$, so $K=111{,}8^\circ$.` },
    { n: '5', q: r`Determine the largest angle in $\triangle JHK$ where $JH=6$, $HK=4$ and $JK=3$.`, a: r`The largest angle is opposite the longest side $JH$, i.e. $\hat K$: $\cos K=\dfrac{4^2+3^2-6^2}{2\cdot4\cdot3}=-\dfrac{11}{24}$, so $\hat K=117{,}3^\circ$.` },
    { n: '6', q: r`Find the area of $\triangle PQR$ in which $\hat Q=30^\circ$, $r=10$ and $p=7$.`, a: r`$\text{Area}=\dfrac12pr\sin Q=\dfrac12\cdot7\cdot10\cdot\sin30^\circ=17{,}5$ square units.` },
    { n: '7', q: r`Find the area of $	riangle XYZ$ with $XY=6	ext{ cm}$, $XZ=7	ext{ cm}$ and $hat Z=28^circ$.`, a: r`The given angle is not between the given sides, so first find another angle with the sine rule: $dfrac{sin Y}{7}=dfrac{sin28^circ}{6}Rightarrowsin Y=0{,}5477$, so $Y=33{,}2^circ$ (or the obtuse $146{,}8^circ$). With $Y=33{,}2^circ$: $X=180^circ-28^circ-33{,}2^circ=118{,}8^circ$ and $	ext{Area}=dfrac12cdot6cdot7cdotsin118{,}8^circ=18{,}4	ext{ cm}^2$. With $Y=146{,}8^circ$: $X=5{,}2^circ$ and $	ext{Area}=1{,}9	ext{ cm}^2$. Both triangles fit the information (the ambiguous case); the usual answer is $18{,}4	ext{ cm}^2$.` },
    { n: '8', q: r`If the area of $\triangle ABC$ is $5000\text{ m}^2$ with $a=150\text{ m}$ and $b=70\text{ m}$, what is the possible size of $\hat C$?`, a: r`$5000=\dfrac12\cdot150\cdot70\cdot\sin C\Rightarrow\sin C=0{,}9524$. $\hat C=72{,}2^\circ$ or $\hat C=180^\circ-72{,}2^\circ=107{,}8^\circ$.` },
  ]),

  h2('Worked examples'),
  h3('Question 1'),
  p(r`In the diagram, quadrilateral $ABCD$ has $AB=3\text{ cm}$, $AD=9{,}5\text{ cm}$, $\hat A=112^\circ$ and $C\hat BD=C\hat DB=67^\circ$. 1.1 Show by calculation that $BD=10{,}98$ units. 1.2 Hence calculate the perimeter of $ABCD$.`),
  fig(triangle(10.98, 9.5, 3, { names: ['A', 'B', 'D'], sides: ['BD', '9,5', '3'], angles: [{ at: 'A', label: '112°' }], caption: 'Triangle ABD — drawn with A at the top.' })),
  solution([
    ['1.1 Use $\\triangle ABD$ to find $BD$. From the cosine rule:', r`BD^2=3^2+9{,}5^2-2\cdot3\cdot9{,}5\cdot\cos112^\circ`],
    r`BD^2=120{,}6`,
    r`BD=\sqrt{120{,}6}=10{,}98`,
    ['1.2 To find the perimeter we have to find $BC$ and $DC$, which are the same (isosceles triangle). Use $\\triangle BDC$ ($67^\\circ$, $67^\\circ$ and $46^\\circ$) and the sine rule:', r`\dfrac{BC}{\sin67^\circ}=\dfrac{10{,}98}{\sin46^\circ}`],
    r`BC=\dfrac{10{,}98\cdot\sin67^\circ}{\sin46^\circ}=14{,}05\text{ cm}`,
    ['Perimeter of $ABCD$ is $AB+BC+CD+DA$:', r`3+14{,}05+14{,}05+9{,}5=40{,}6\text{ cm}`],
  ]),
  h3('Question 2'),
  p(r`Vertical poles $CM$ and $BA$ are placed on ground $AM$ (round off to ONE decimal place). $\hat B=120^\circ$, $B\hat AM=75^\circ$, $AB=8{,}3\text{ m}$. 2.1 Show that $BC$ is $3\text{ m}$. 2.2 If $AC=10{,}2\text{ m}$ and $D$ is $5{,}2\text{ m}$ below point $C$, calculate how high $D$ is above the ground.`),
  solution([
    ['2.1 In $\\triangle ABC$, $\\hat A=15^\\circ$ and $\\hat C=45^\\circ$. Using the sine rule:', r`\dfrac{BC}{\sin15^\circ}=\dfrac{8{,}3}{\sin45^\circ}`],
    r`BC=\dfrac{8{,}3\cdot\sin15^\circ}{\sin45^\circ}=3`,
    ['2.2 From $\\triangle AMC$ (right-angled at $M$):', r`\sin75^\circ=\dfrac{MC}{10{,}2}`],
    r`MC=10{,}2\cdot\sin75^\circ=9{,}9`,
    ['Then, the height of $D$ above the ground is', r`MD=9{,}9-5{,}2=4{,}7\text{ m}`],
  ]),
  note(r`Here $BC=3{,}04$ before rounding; the book rounds it to $3$ m for the “show that” part.`),

  h2('Task 20'),
  ANSWERS_NOTE,
  qs([
    { n: '1.1', context: r`$AP$ is a building of height $9{,}6\text{ m}$ and $QT=10{,}4\text{ m}$. $QS$ is a tower in the same horizontal plane as $AP$. The angle of elevation from $P$ to $Q$ is $68^\circ$.`, q: r`The distance of $PQ$.`, a: r`$QS=QT+TS=10{,}4+9{,}6=20\text{ m}$. $\sin68^\circ=\dfrac{20}{PQ}\Rightarrow PQ=\dfrac{20}{\sin68^\circ}=21{,}57\text{ m}$.` },
    { n: '1.2', context: r`Same figure.`, q: r`The shortest distance between the building and the tower.`, a: r`The shortest distance is the horizontal distance $PS=AT$: $\tan68^\circ=\dfrac{20}{PS}\Rightarrow PS=\dfrac{20}{\tan68^\circ}=8{,}08\text{ m}$.` },
    { n: '1.3', context: r`Same figure.`, q: r`The area of triangle $APQ$.`, a: r`$\hat{APQ}=90^\circ-68^\circ=22^\circ$. $\text{Area}=\dfrac12\cdot AP\cdot PQ\cdot\sin22^\circ=\dfrac12\cdot9{,}6\cdot21{,}57\cdot\sin22^\circ=38{,}79\text{ m}^2$.` },
    { n: '1.4', context: r`Same figure.`, q: r`Calculate the distance of $AQ$ by using the cosine rule.`, a: r`$AQ^2=9{,}6^2+21{,}57^2-2\cdot9{,}6\cdot21{,}57\cdot\cos22^\circ=173{,}5$, so $AQ=13{,}17\text{ m}$. (Check: $AQ=\sqrt{8{,}08^2+10{,}4^2}=13{,}17$.)` },
    { n: '2', q: r`A hot air balloon is kept at a constant altitude by two ropes anchoring it in the ground. One rope is $20\text{ m}$ long and makes an angle of $62^\circ$ with the ground. If the second rope makes an angle of $81^\circ$ with the ground, how long is this rope? (The angle at the balloon is $180^\circ-62^\circ-81^\circ=37^\circ$.)`, a: r`The $20$ m rope is opposite the $81^\circ$ angle, and the second rope is opposite the $62^\circ$ angle: $\dfrac{x}{\sin62^\circ}=\dfrac{20}{\sin81^\circ}\Rightarrow x=\dfrac{20\sin62^\circ}{\sin81^\circ}=17{,}88\text{ m}$.` },
    { n: '3.1', context: r`$MP$ is the median of $NR$, $MN=60\text{ cm}$, $MR=160\text{ cm}$ and $N\hat MR=60^\circ$.`, q: r`Calculate the length of $NR$.`, a: r`$NR^2=60^2+160^2-2\cdot60\cdot160\cdot\cos60^\circ=19\,600$, so $NR=140\text{ cm}$.` },
    { n: '3.2', context: r`Same figure.`, q: r`Prove that $\sin N=\dfrac{4\sqrt3}{7}$.`, a: r`$\dfrac{\sin N}{160}=\dfrac{\sin60^\circ}{140}\Rightarrow\sin N=\dfrac{160\cdot\frac{\sqrt3}{2}}{140}=\dfrac{80\sqrt3}{140}=\dfrac{4\sqrt3}{7}$.` },
    { n: '3.3', context: r`Same figure.`, q: r`Hence, show that area $\triangle NMP=1200\sqrt3$ (the rest of the line is hidden by a thumb in the photo).`, a: r`$P$ is the midpoint of $NR$, so $\text{Area}\,\triangle NMP=\dfrac12\text{Area}\,\triangle NMR=\dfrac12\cdot\dfrac12\cdot60\cdot160\cdot\sin60^\circ=2400\cdot\dfrac{\sqrt3}{2}=1200\sqrt3\text{ cm}^2$.` },
  ]),
  h2('Task 21'),
  ANSWERS_NOTE,
  qs([
    { n: '1.1', context: r`A soccer player $S$, who is $15$ m from the back line $CH$, aims towards a goal post. The angle from the left goal post $G$ to the player is $\hat{SGH}=116^\circ$. The goal posts are $7{,}32$ m wide ($GH=7{,}32$). $CS\perp CH$.`, q: r`How far is the player from the left post $FG$ (i.e. $SG$)?`, a: r`$\hat{SGC}=180^\circ-116^\circ=64^\circ$ (straight line $CGH$). In $\triangle SCG$: $\sin64^\circ=\dfrac{15}{SG}\Rightarrow SG=16{,}69\text{ m}$.` },
    { n: '1.2', context: r`Same figure.`, q: r`How far is the player from the right post $EH$ (i.e. $SH$)?`, a: r`$CG=\dfrac{15}{\tan64^\circ}=7{,}32$, so $CH=7{,}32+7{,}32=14{,}64$. $SH=\sqrt{15^2+14{,}64^2}=20{,}96\text{ m}$.` },
    { n: '1.3', context: r`Same figure.`, q: r`Find the size of $\hat{GSH}$, the angle within which he can score.`, a: r`$\tan\hat H=\dfrac{15}{14{,}64}\Rightarrow\hat H=45{,}7^\circ$. In $\triangle SGH$: $\hat{GSH}=180^\circ-116^\circ-45{,}7^\circ=18{,}3^\circ$.` },
    { n: '2.1', context: r`The vertices of the regular polygon $ABCDE$ (a pentagon) lie on a circle with centre $O$ and radius $r=7\text{ cm}$. Let $D\hat OE=\alpha$.`, q: r`Determine the size of $D\hat OE$.`, a: r`The five central angles are equal: $\alpha=\dfrac{360^\circ}{5}=72^\circ$.` },
    { n: '2.2', context: r`Same figure.`, q: r`Calculate the length of the side of the pentagon.`, a: r`In $\triangle DOE$ ($OD=OE=7$, $\alpha=72^\circ$): $DE^2=7^2+7^2-2\cdot7\cdot7\cos72^\circ$, so $DE=8{,}23\text{ cm}$. (Or $DE=2\cdot7\sin36^\circ=8{,}23$.)` },
    { n: '2.3', context: r`Same figure.`, q: r`Determine the area of $\triangle DEO$.`, a: r`$\text{Area}=\dfrac12\cdot7\cdot7\cdot\sin72^\circ=23{,}30\text{ cm}^2$.` },
    { n: '3.1', context: r`In the diagram $ABCD$ is a rectangle with $E$ on $BC$, $BE=25\text{ cm}$ and $EC=40\text{ cm}$; $A\hat EB=55^\circ$ and $D\hat EC=40^\circ$.`, q: r`Length of $AE$.`, a: r`In $\triangle ABE$ (right angle at $B$): $\cos55^\circ=\dfrac{25}{AE}\Rightarrow AE=43{,}59\text{ cm}$.` },
    { n: '3.2', context: r`Same figure.`, q: r`Length of $ED$.`, a: r`In $\triangle ECD$ (right angle at $C$): $\cos40^\circ=\dfrac{40}{ED}\Rightarrow ED=52{,}22\text{ cm}$.` },
    { n: '3.3', context: r`Same figure.`, q: r`Length of $AD$.`, a: r`$ABCD$ is a rectangle, so $AD=BC=25+40=65\text{ cm}$. (The $60^\circ$ written beside the figure is not needed for these answers.)` },
    { n: '4.1', context: r`Tower $TB$ is $25$ m high; cars $K$ and $L$ are on the road. The angle of depression from $T$ to car $L$ is $10^\circ$. The angle of elevation from $K$ to the top of the tower is $17^\circ$.`, q: r`Calculate the length of $KT$.`, a: r`In $\triangle TBK$: $\sin17^\circ=\dfrac{25}{KT}\Rightarrow KT=85{,}51\text{ m}$.` },
    { n: '4.2', context: r`Same figure.`, q: r`Calculate the size of angle $L$.`, a: r`The angle of depression equals the angle of elevation from $L$ (alternate angles, parallel lines): $\hat L=10^\circ$.` },
    { n: '4.3', context: r`Same figure.`, q: r`Hence calculate the distance between the two cars.`, a: r`In $\triangle TKL$: $\hat K=180^\circ-17^\circ=163^\circ$, $\hat L=10^\circ$, so $\hat T=7^\circ$. Sine rule: $\dfrac{KL}{\sin7^\circ}=\dfrac{85{,}51}{\sin10^\circ}\Rightarrow KL=60{,}0\text{ m}$. (Check: $BL-BK=141{,}8-81{,}8=60{,}0$.)` },
    { n: '5.1', context: r`A game ranger $G$ is $8{,}3$ km from control centre $C$ at a bearing of $54^\circ$ east. An injured antelope $A$ is $4{,}8$ km from $C$ at $25^\circ$ south of east.`, q: r`Calculate how far the game ranger is from the injured antelope.`, a: r`$G$ is $54^\circ$ east of north, i.e. $36^\circ$ above the east line; $A$ is $25^\circ$ below it, so $\hat{GCA}=36^\circ+25^\circ=61^\circ$. Cosine rule: $GA^2=8{,}3^2+4{,}8^2-2\cdot8{,}3\cdot4{,}8\cos61^\circ=53{,}3$, so $GA=7{,}30\text{ km}$.` },
    { n: '5.2', context: r`Same figure.`, q: r`Calculate the area of $\triangle GCA$.`, a: r`$\text{Area}=\dfrac12\cdot8{,}3\cdot4{,}8\cdot\sin61^\circ=17{,}42\text{ km}^2$.` },
  ]),
]);

export const GEOM_UNIT_2E_LESSONS: Lesson[] = [I_APPLICATIONS];
