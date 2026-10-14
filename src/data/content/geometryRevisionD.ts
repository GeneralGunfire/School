import type { Lesson } from '../../lib/types';
import { r, h2, note, qs, lesson as make, ANSWERS_NOTE } from './geomKit';

/**
 * Unit 6: Revision 12 (September exemplar) and Revision 13 (Final exemplar), book pp. 184–187;
 * photos …909 – …910. Revision 13 question 4 is left out (its labels are inconsistent), and the
 * pages after p.187 are not in the photos.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('geom-revision', id, title, minutes, blocks);

export const REVISION_E = lesson('geom-rev-e-september', 'E. September Exemplar (Euclidean Geometry)', 45, [
  h2('Revision 12: September exemplar'),
  ANSWERS_NOTE,
  note(r`Several diagrams show angle labels that are small in the photos; the proofs below use the standard reading of each figure.`),
  qs([
    { n: '1.1', marks: 4, context: r`$ABCD$ is a parallelogram and $DE\parallel BF$ ($E$ and $F$ lie on diagonal $AC$). Let $\hat E_1=x$.`, q: r`Prove that $\hat E_1=\hat F_1$.`, a: r`$DE\parallel BF$ with transversal $AC$: $\hat E_2=\hat F_2$ (alternate angles). $\hat E_1+\hat E_2=180^\circ$ and $\hat F_1+\hat F_2=180^\circ$ (angles on a straight line). So $\hat E_1=\hat F_1$.` },
    { n: '1.2', marks: 4, context: r`Same figure.`, q: r`Prove that $\triangle AED\equiv\triangle CFB$.`, a: r`In $\triangle AED$ and $\triangle CFB$: $\hat A_1=\hat C_1$ (alternate angles, $AD\parallel BC$); $\hat E_1=\hat F_1$ (1.1); $AD=CB$ (opposite sides of a parallelogram). So $\triangle AED\equiv\triangle CFB$ (A.A.S).` },
    { n: '2', marks: 5, context: r`$ABC$ is isosceles with $AB=BC$, and $BD$ bisects $\hat B$ (with $D$ on $AC$).`, q: r`Prove that $BD\perp AC$ and $AD=DC$.`, a: r`In $\triangle ABD$ and $\triangle CBD$: $AB=CB$ (given); $\hat B_1=\hat B_2$ ($BD$ bisects $\hat B$); $BD$ is common. So $\triangle ABD\equiv\triangle CBD$ (S.A.S), hence $AD=DC$ and $\hat D_1=\hat D_2$. These are angles on a straight line, so each is $90^\circ$: $BD\perp AC$.` },
    { n: '3', marks: 5, context: r`$AB\parallel CD$ and $BE=EC$; $AB=4$, $AE=2x-4$, $ED=6$, $CD=6y-2$ (lines $AD$ and $BC$ cross at $E$).`, q: r`Find $x$ and $y$ (with reasons).`, a: r`$\hat B=\hat C$ (alternate angles, $AB\parallel CD$); $BE=EC$; $\hat{AEB}=\hat{DEC}$ (vertically opposite). So $\triangle ABE\equiv\triangle DCE$ (A.A.S): $AB=DC$ and $AE=DE$. Then $4=6y-2\Rightarrow y=1$ and $2x-4=6\Rightarrow x=5$.` },
    { n: '4.1', marks: 5, context: r`$A$, $B$, $C$, $D$ are the midpoints of $SP$, $PQ$, $QR$, $RS$ respectively, and $SQ$ is drawn.`, q: r`Prove that $AB\parallel DC$.`, a: r`In $\triangle PSQ$, $A$ and $B$ are midpoints, so $AB\parallel SQ$ (midpoint theorem). In $\triangle RSQ$, $D$ and $C$ are midpoints, so $DC\parallel SQ$. Hence $AB\parallel DC$.` },
    { n: '4.2', marks: 3, context: r`Same figure.`, q: r`Prove that $AB=DC$.`, a: r`$AB=\tfrac12SQ$ and $DC=\tfrac12SQ$ (midpoint theorem), so $AB=DC$.` },
    { n: '4.3', marks: 2, context: r`Same figure.`, q: r`What type of quadrilateral is $ABCD$? Explain.`, a: r`A parallelogram: one pair of opposite sides ($AB$ and $DC$) is equal and parallel.` },
    { n: '5.1', marks: 7, context: r`$GB\parallel FC$ and $EB\parallel CD$; $AC=6$ cm, $EB=3$ cm, $AB=2BC$ ($B$ on $AC$, $H$ and $E$ on $AD$).`, q: r`Find $AH:ED$.`, a: r`$AB=4$, $BC=2$. $EB\parallel CD$ in $\triangle ACD$: $\dfrac{AE}{ED}=\dfrac{AB}{BC}=2$. $HB\parallel EC$ in $\triangle AEC$: $\dfrac{AH}{HE}=\dfrac{AB}{BC}=2$, so $AH=\tfrac23AE$. With $ED=k$: $AE=2k$, $AH=\dfrac{4k}3$. $AH:ED=4:3$.` },
    { n: '5.2', marks: 2, context: r`Same figure.`, q: r`If $HE=2$ cm, find the length of $AD$.`, a: r`$HE=\tfrac13AE=2\Rightarrow AE=6$, $ED=3$, so $AD=9$ cm.` },
    { n: '5.3', marks: 5, context: r`Same figure.`, q: r`Prove that $\triangle AEB\,|||\,\triangle ADC$ and hence determine the length of $DC$.`, a: r`$\hat A$ is common; $\hat{AEB}=\hat{ADC}$ (corresponding angles, $EB\parallel DC$). So $\triangle AEB\,|||\,\triangle ADC$ (A.A.A). $\dfrac{EB}{DC}=\dfrac{AB}{AC}=\dfrac46\Rightarrow DC=\dfrac{3\cdot6}{4}=4{,}5$ cm.` },
    { n: '6.1', marks: 4, context: r`In $\triangle ABC$: $AP=6$, $PB=8$, $AQ=7$, $QC=5$, $BC=15$.`, q: r`Prove that $\triangle ABC\,|||\,\triangle AQP$.`, a: r`$AB=14$, $AC=12$. $\dfrac{AB}{AQ}=\dfrac{14}7=2$ and $\dfrac{AC}{AP}=\dfrac{12}6=2$, with $\hat A$ common. So $\triangle ABC\,|||\,\triangle AQP$ (sides about the common angle in proportion).` },
    { n: '6.2', marks: 2, context: r`Same figure.`, q: r`Hence find the length of $PQ$.`, a: r`$\dfrac{BC}{QP}=2\Rightarrow PQ=\dfrac{15}2=7{,}5$.` },
    { n: '7.1', marks: 1, context: r`$E$ is on $BC$ with $BD=6$ cm, $DC=9$ cm, $AT:TC=2:1$ and $AD\parallel TE$.`, q: r`Write down the value of $\dfrac{CD}{ED}$.`, a: r`$TE\parallel AD$ in $\triangle ADC$: $\dfrac{CE}{ED}=\dfrac{CT}{TA}=\dfrac12$, so $ED=\tfrac23CD=6$. $\dfrac{CD}{ED}=\dfrac96=\dfrac32$.` },
    { n: '7.2', marks: 3, context: r`Same figure.`, q: r`Show that $D$ is the midpoint of $BE$.`, a: r`$DE=6$ (7.1) and $BD=6$, so $BD=DE$.` },
    { n: '7.3', marks: 4, context: r`$F$ lies on $AD$ and on $BT$.`, q: r`If $FD=2$ cm, calculate the length of $TE$.`, a: r`In $\triangle BET$: $D$ is the midpoint of $BE$ and $FD\parallel TE$, so $F$ is the midpoint of $BT$ and $FD=\tfrac12TE$. $TE=4$ cm.` },
    { n: '8', marks: 5, context: r`$\triangle KLM$ is right-angled at $K$; $N$ is on $KM$ with $KN=NM$; $NH\perp LM$, $LH=10$, $HM=6$; $\hat M=x$ and $NM=a$.`, q: r`Find the length of $KL$ with reasons.`, a: r`$LM=16$, $KM=2a$. $\cos x=\dfrac{HM}{NM}=\dfrac6a$ and $\cos x=\dfrac{KM}{LM}=\dfrac{2a}{16}=\dfrac a8$. So $a^2=48$ and $\cos x=\dfrac{\sqrt{48}}8=\dfrac{\sqrt3}2$, $x=30^\circ$. $KL=LM\sin30^\circ=8$.` },
    { n: '9.1', marks: 1, q: r`Complete: the line drawn from the centre of the circle which is perpendicular to the chord…`, a: r`…bisects the chord.` },
    { n: '9.2.1', marks: 2, context: r`$O$ is the centre; diameter $DE\perp$ chord $PQ$ at $C$; $DE=20$ cm and $CE=2$ cm.`, q: r`Calculate the length of $DC$.`, a: r`$DC=DE-CE=18$ cm.` },
    { n: '9.2.2', marks: 5, context: r`Same figure.`, q: r`Calculate the length of $PQ$ with reasons.`, a: r`Radius $OP=10$; $OC=10-2=8$. $OC\perp PQ$, so $PC^2=OP^2-OC^2=100-64=36\Rightarrow PC=6$. A line from the centre perpendicular to a chord bisects it, so $PQ=12$ cm.` },
    { n: '10.1', marks: 2, context: r`$O$ is the centre and $\hat B=38^\circ$ (diagram with $K$, $A$, $C$ on the circle; $\hat O_2=A\hat OC$).`, q: r`$\hat K$`, a: r`$\hat K=\hat B=38^\circ$ ($\angle$s in the same segment, standing on chord $AC$).` },
    { n: '10.2', marks: 2, context: r`Same figure.`, q: r`$\hat O_2$`, a: r`$\hat O_2=2\cdot38^\circ=76^\circ$ ($\angle$ at centre $=2\angle$ at circumference).` },
    { n: '10.3', marks: 2, context: r`Same figure.`, q: r`$\hat C_1$`, a: r`$OA=OC$ (radii): $\hat C_1=\dfrac{180^\circ-76^\circ}2=52^\circ$.` },
  ]),
]);

export const REVISION_F = lesson('geom-rev-f-final', 'F. Final Exemplar', 30, [
  h2('Revision 13: Final exemplar'),
  ANSWERS_NOTE,
  note(r`Question 1.2 is printed “Prove that $AB=RQ$”, but from the coordinates $AB=10$ and $RQ=5$; what is true is $AB=2RQ$ (midpoint theorem), which is shown below. Question 4 (the triangle with $AB=x+1$, $AE=x+3$, …) has inconsistent labels in the photo and is not included. Question 3.1 assumes $AB\parallel CD$ (the sides satisfy $AB:DC=AE:EC=3:5$).`),
  qs([
    { n: '1.1', marks: 4, context: r`$A(-3;5)$, $B(5;11)$, $C(5;1)$, $D(-3;-5)$. $R$ and $Q$ are the midpoints of $BC$ and $AC$.`, q: r`Find the coordinates of $R$ and $Q$.`, a: r`$R\left(\dfrac{5+5}2;\dfrac{11+1}2\right)=(5;6)$; $Q\left(\dfrac{-3+5}2;\dfrac{5+1}2\right)=(1;3)$.` },
    { n: '1.2', marks: 4, context: r`Same points.`, q: r`Show the relationship between $AB$ and $RQ$.`, a: r`$AB=\sqrt{8^2+6^2}=10$; $RQ=\sqrt{4^2+3^2}=5$. So $AB=2RQ$ (and $m_{AB}=m_{RQ}=\dfrac34$, so $AB\parallel RQ$).` },
    { n: '1.3', marks: 3, context: r`Same points.`, q: r`Show analytically that $ABCD$ is a parallelogram.`, a: r`$m_{AB}=\dfrac{11-5}{5+3}=\dfrac34=m_{DC}=\dfrac{1+5}{5+3}$; $AD$ and $BC$ are both vertical ($x=-3$, $x=5$). Both pairs of opposite sides are parallel.` },
    { n: '1.4', marks: 3, context: r`Same points.`, q: r`Explain briefly whether $ABCD$ is a rhombus or not.`, a: r`$AB=BC=CD=DA=10$, so all four sides are equal: it is a rhombus. (Check: $m_{AC}\cdot m_{BD}=-\dfrac12\cdot2=-1$, the diagonals are perpendicular.)` },
    { n: '1.5', marks: 5, context: r`Same points.`, q: r`Calculate the value of $B\hat AD$.`, a: r`$\vec{AB}=(8;6)$, $\vec{AD}=(0;-10)$: $\cos B\hat AD=\dfrac{-60}{10\cdot10}=-0{,}6\Rightarrow B\hat AD=126{,}9^\circ$.` },
    { n: '1.6.1', marks: 2, context: r`Same points. Determine the equation of the straight line passing through:`, q: r`$A$ and $B$`, a: r`$y-5=\dfrac34(x+3)\Rightarrow y=\dfrac34x+\dfrac{29}4$.` },
    { n: '1.6.2', marks: 2, context: r`Same points.`, q: r`$C$, perpendicular to line $AB$`, a: r`$m=-\dfrac43$: $y-1=-\dfrac43(x-5)\Rightarrow y=-\dfrac43x+\dfrac{23}3$.` },
    { n: '1.6.3', marks: 2, context: r`Same points.`, q: r`$D$, parallel to the $y$-axis`, a: r`$x=-3$` },
    { n: '2.1', marks: 3, context: r`$ABC$ is a right triangle (right angle at $B$) with hypotenuse $AC=13$ cm and $AD=4$ cm, where $BD\perp AC$.`, q: r`Show that $\triangle ABD\,|||\,\triangle BDC$.`, a: r`$\hat{ADB}=\hat{BDC}=90^\circ$. $\hat A+\hat{ABD}=90^\circ$ and $\hat{ABD}+\hat{DBC}=90^\circ$ (as $\hat B=90^\circ$), so $\hat A=\hat{DBC}$. Hence $\triangle ABD\,|||\,\triangle BDC$ (A.A.A).` },
    { n: '2.2', marks: 4, context: r`Same figure.`, q: r`Find $BC$.`, a: r`$DC=13-4=9$. $\dfrac{AD}{BD}=\dfrac{BD}{DC}\Rightarrow BD^2=36\Rightarrow BD=6$. $BC=\sqrt{BD^2+DC^2}=\sqrt{117}=3\sqrt{13}\approx10{,}8$ cm.` },
    { n: '3.1', marks: 4, context: r`$AE=24$ mm, $AB=21$ mm, $EC=40$ mm, $DC=35$ mm (lines $AC$ and $BD$ cross at $E$).`, q: r`Determine the similarity between the triangles.`, a: r`$\hat{AEB}=\hat{CED}$ (vertically opposite) and $\hat A=\hat C$, $\hat B=\hat D$ (alternate angles, $AB\parallel DC$). $\triangle ABE\,|||\,\triangle CDE$ (A.A.A), consistent with $\dfrac{AE}{CE}=\dfrac{24}{40}=\dfrac35=\dfrac{AB}{CD}=\dfrac{21}{35}$.` },
    { n: '3.2', marks: 2, context: r`Same figure.`, q: r`Write the ratio $DC:AB$.`, a: r`$35:21=5:3$.` },
  ]),
]);

export const GEOM_REVISION_D_LESSONS: Lesson[] = [REVISION_E, REVISION_F];
