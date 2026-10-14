import type { Lesson } from '../../lib/types';
import { r, h2, h3, p, note, qs, solution, lesson as make, ANSWERS_NOTE } from './geomKit';

/**
 * Euclidean Geometry, section F continued: worked examples 4–5, Task 7, and parts of Tasks 8–9
 * (book pp. 132–133 and 138–139; photos …888 – …889). Pages 134–137 (the rest of Task 7 and the
 * first part of Task 8) are not in the photo set.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('geom-euclidean', id, title, minutes, blocks);

export const F_PRACTICE = lesson('geom-u3-f-practice', 'F. Circle Angles: Examples and Tasks', 35, [
  h2('Worked examples (continued)'),
  h3('Question 4'),
  p(r`Find the values of $x$ and $B\hat CO$. ($AC$ and $BO$ meet at $N$; $\hat C=40^\circ$ is the angle $ACO$, $\hat{ANO}=95^\circ$, $x=\hat{OBC}$... as in the book’s figure: $x$ is at $B$ between $BA$-side chord and $BO$.)`),
  solution([
    ['($\\angle$ at centre $=2\\angle$ at circumference)', r`\hat O_1=2\cdot\hat C_1=80^\circ`],
    ['(ext $\\angle$ of triangle)', r`x+80^\circ=95^\circ`],
    r`\therefore\;x=15^\circ`,
    ['($\\angle$ opp equal sides, $OB=OC$)', r`\text{Also }B\hat CO=\hat C_2=15^\circ`],
  ]),
  h3('Question 5'),
  p(r`Find the value of $x$. (Secants $ACB$ and $AED$ from the external point $A$; $\hat B=15^\circ$ is $\hat{CBE}$ and $\hat O=100^\circ$ is the central angle on arc $ED$... as drawn.)`),
  solution([
    ['($\\angle$ at centre $=2\\angle$ at circumference)', r`\hat E=\dfrac{\hat O}{2}=50^\circ`],
    ['(ext $\\angle$ of triangle)', r`x+15^\circ=50^\circ`],
    r`\therefore\;x=35^\circ`,
  ]),

  h2('Task 7'),
  p(r`All statements should be reasoned.`),
  ANSWERS_NOTE,
  qs([
    { n: '1', q: r`Find the value of $x$. ($O$ is the centre; $\hat B=40^\circ$ at the circumference and $x$ is the angle at the centre on the same arc $AC$.)`, a: r`$x=2\times40^\circ=80^\circ$ ($\angle$ at centre $=2\angle$ at circumference).` },
    { n: '2', q: r`Find the value of $x$. ($O$ is the centre of the circle through $B$, $C$, $D$; $x=\hat{BDC}$; $\hat{OCB}=40^\circ$.)`, a: r`$OB=OC$ (radii), so $\hat{OBC}=\hat{OCB}=40^\circ$ and $\hat{BOC}=100^\circ$ ($\angle$s of triangle). $x=\tfrac12\hat{BOC}=50^\circ$ ($\angle$ at centre $=2\angle$ at circumference).` },
    { n: '3', q: r`Find the size of $O\hat CA$. ($K$ is where $OB$ meets $AC$; $\hat{CKB}=70^\circ$ and $\hat A=30^\circ$.)`, a: r`$\hat{COB}=2\cdot30^\circ=60^\circ$ ($\angle$ at centre $=2\angle$ at circumference). $\hat{CKB}$ is an exterior angle of $\triangle OKC$: $60^\circ+O\hat CA=70^\circ$, so $O\hat CA=10^\circ$.` },
    { n: '4', q: r`Find the value of $x$. ($\hat{CBD}=120^\circ$ with $ABD$ a straight line; $x$ is the angle $AOC$ at the centre.)`, a: r`$\hat{ABC}=180^\circ-120^\circ=60^\circ$ (angles on a straight line). $x=2\cdot60^\circ=120^\circ$ ($\angle$ at centre $=2\angle$ at circumference).` },
    { n: '5', q: r`Find the value of $x$. ($\hat{AOC}$ side: $\hat{BOC}=110^\circ$, $\hat{ACO}=20^\circ$, $x=\hat{OBA}$.)`, a: r`$\hat{CAB}=\tfrac12\cdot110^\circ=55^\circ$. $OA=OC$, so $\hat{OAC}=20^\circ$ and $\hat{OAB}=55^\circ-20^\circ=35^\circ$. $OA=OB$, so $x=\hat{OBA}=35^\circ$.` },
    { n: '6', q: r`$AB$ is a diameter. Find the value of $x$. ($\hat{ACO}=40^\circ$, $x=\hat{CAB}$.)`, a: r`$OA=OC$ (radii), so $x=\hat{OAC}=\hat{OCA}=40^\circ$ ($\angle$s opp equal sides).` },
  ]),

  h2('Task 8 (the part in the photos)'),
  ANSWERS_NOTE,
  note(r`Question 12 is not included: its angle labels are too small to read reliably.`),
  qs([
    { n: '11.1', context: r`$O$ is the centre of the circle and $\hat O_1=100^\circ$ ($\hat{POR}$).`, q: r`Determine angles $S$, $T_1$, $T_2$.`, a: r`$S=T_1=\tfrac12\cdot100^\circ=50^\circ$ ($\angle$ at centre $=2\angle$ at circumference, and $\angle$s in the same segment). $T_1+T_2=180^\circ$ (angles on a straight line), so $T_2=130^\circ$.` },
    { n: '11.2', context: r`Same figure.`, q: r`Determine angles $O_2$ and $Q$.`, a: r`$O_2=360^\circ-100^\circ=260^\circ$ ($\angle$s round a point). $Q=\tfrac12\cdot260^\circ=130^\circ$ ($\angle$ at centre $=2\angle$ at circumference).` },
    { n: '11.3', context: r`Same figure.`, q: r`What do you notice about the sizes of angles $T_2$ and $Q$?`, a: r`They are equal: $T_2=Q=130^\circ$. (The exterior angle of the cyclic quadrilateral equals the interior opposite angle.)` },
    { n: '11.4', context: r`Same figure.`, q: r`Determine $T_1+Q$ and $S+Q$.`, a: r`$T_1+Q=50^\circ+130^\circ=180^\circ$ and $S+Q=50^\circ+130^\circ=180^\circ$. (Opposite angles of a cyclic quadrilateral are supplementary.)` },
  ]),

  h2('Task 9'),
  p(r`Find the unknowns providing reasons. $O$ is the centre for the following circles.`),
  ANSWERS_NOTE,
  note(r`Question 6 is not included: which angle $\alpha$ names is not clear in the photo.`),
  qs([
    { n: '1', q: r`$\hat J=45^\circ$ is the angle at the circumference on arc $HK$ and $b$ is the angle $HOK$ at the centre. Find $b$.`, a: r`$b=2\times45^\circ=90^\circ$ ($\angle$ at centre $=2\angle$ at circumference).` },
    { n: '2', q: r`$\hat{JOH}=45^\circ$ at the centre; $c$ is the angle $JKH$ at the circumference on the same arc. Find $c$.`, a: r`$c=\tfrac12\cdot45^\circ=22{,}5^\circ$ ($\angle$ at centre $=2\angle$ at circumference).` },
    { n: '3', q: r`$\hat J=100^\circ$ at the circumference and $d$ is the reflex angle $KOH$ at the centre on the arc opposite $J$. Find $d$.`, a: r`$d=2\times100^\circ=200^\circ$ ($\angle$ at centre $=2\angle$ at circumference).` },
    { n: '4', q: r`$JK$ passes through the centre $O$, $\hat K=35^\circ$ ($\hat{JKH}$) and $e=\hat{KJH}$. Find $e$.`, a: r`$JK$ is a diameter, so $\hat{JHK}=90^\circ$ ($\angle$ in semi-circle). $e=180^\circ-90^\circ-35^\circ=55^\circ$.` },
    { n: '5', q: r`$\hat{JOK}=120^\circ$ at the centre; $f=\hat{JHK}$ with $H$ on the arc on the opposite side of $JK$ from $O$. Find $f$.`, a: r`The major arc $JK$ subtends a reflex angle $360^\circ-120^\circ=240^\circ$ at the centre, so $f=\tfrac12\cdot240^\circ=120^\circ$.` },
  ]),
]);

export const GEOM_UNIT_3G_LESSONS: Lesson[] = [F_PRACTICE];
