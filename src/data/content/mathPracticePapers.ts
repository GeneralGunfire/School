import type { Chapter, Lesson, QAItem } from '@/lib/types';

/**
 * Two original practice papers written to match the school's November 2025
 * Grade 10 Mathematics Paper 1 (algebra) and Paper 2 (geometry): same number
 * of questions, same mark weighting, same style and formula sheet, but new
 * numbers. Every answer was worked out and checked by hand.
 */

type Q = { title: string; minutes: number; intro?: string; qa: QAItem[] };

function paperLessons(chapterId: string, subjectId: 'math-algebra' | 'math-geometry', prefix: string, items: Q[]): Lesson[] {
  return items.map((it, i) => ({
    id: `${prefix}-q${i}`,
    chapterId,
    subjectId,
    title: it.title,
    minutes: it.minutes,
    blocks: [
      ...(it.intro ? [{ id: `${prefix}-q${i}-intro`, type: 'paragraph' as const, text: it.intro }] : []),
      ...(it.qa.length ? [{ id: `${prefix}-q${i}-qa`, type: 'questions' as const, qa: it.qa }] : []),
    ],
  }));
}

/* ───────────────────────── PAPER 1 (algebra) ───────────────────────── */

const ALG_ITEMS: Q[] = [
  {
    title: 'Instructions, formulae and mark plan',
    minutes: 3,
    intro:
      'Mathematics P1, Grade 10, practice paper. 100 marks, 2 hours, NINE questions. Show all calculations. Round to two decimal places unless told otherwise. Formula sheet: m = (y₂ − y₁)/(x₂ − x₁); x = (−b ± √(b² − 4ac))/2a; d = √((x₂ − x₁)² + (y₂ − y₁)²); Tₙ = a + (n − 1)d; P(A or B) = P(A) + P(B) − P(A and B); A = P(1 + i·n); A = P(1 − i·n); A = P(1 + i)ⁿ; A = P(1 − i)ⁿ. Mark plan: Q1 [21], Q2 [12], Q3 [11], Q4 [14], Q5 [10], Q6 [6], Q7 [13], Q8 [6], Q9 [7]. Try each question on paper first, then open the answers.',
    qa: [],
  },
  {
    title: 'Question 1: Equations and inequalities [21]',
    minutes: 20,
    qa: [
      { n: '1.1.1', q: 'Solve for x: 5 − 3(x − 2) = 2x − 14', marks: 3, a: '5 − 3x + 6 = 2x − 14 → 11 − 3x = 2x − 14 → 25 = 5x → x = 5. Check: LHS = 5 − 3(3) = −4; RHS = 10 − 14 = −4 ✓.' },
      { n: '1.1.2', q: 'Solve for x: (x + 1)/2 − (x − 3)/5 = 2', marks: 4, a: 'Multiply every term by the LCD 10: 5(x + 1) − 2(x − 3) = 20 → 5x + 5 − 2x + 6 = 20 → 3x + 11 = 20 → 3x = 9 → x = 3.' },
      { n: '1.2', q: 'Solve for x and y simultaneously: 3x + 2y = 16 and x − y = 2', marks: 4, a: 'From the second equation x = y + 2. Substitute: 3(y + 2) + 2y = 16 → 5y + 6 = 16 → y = 2, so x = 4. Check: 3(4) + 2(2) = 16 ✓ and 4 − 2 = 2 ✓.' },
      { n: '1.3', q: 'Solve for x and show your solution on a number line: −7 < 3 − 2x ≤ 5', marks: 3, a: 'Subtract 3: −10 < −2x ≤ 2. Divide by −2 and REVERSE the signs: 5 > x ≥ −1, i.e. −1 ≤ x < 5. Number line: closed dot at −1, open dot at 5, shade between.' },
      { n: '1.4', q: 'Make q the subject of the formula: √((q − 2)/6) = t', marks: 3, a: 'Square both sides: (q − 2)/6 = t² → q − 2 = 6t² → q = 6t² + 2.' },
      { n: '1.5', q: 'Solve with an equation: A father is three times as old as his son. In 6 years’ time the sum of their ages will be 60. How old is each now?', marks: 4, a: 'Let the son be x years old, the father 3x. In 6 years: (x + 6) + (3x + 6) = 60 → 4x + 12 = 60 → x = 12. The son is 12 and the father is 36. Check: 18 + 42 = 60 ✓.' },
    ],
  },
  {
    title: 'Question 2: Exponents and surds [12]',
    minutes: 14,
    qa: [
      { n: '2.1.1', q: 'Simplify without a calculator: (2^(x+2) · 3^(x+1)) / 6ˣ', marks: 4, a: 'Write 6ˣ = 2ˣ · 3ˣ. Then 2^(x+2)/2ˣ = 2² = 4 and 3^(x+1)/3ˣ = 3¹ = 3. Answer: 4 × 3 = 12.' },
      { n: '2.1.2', q: 'Simplify without a calculator: (√75 + √12 − √27)/√3', marks: 3, a: '√75 = 5√3; √12 = 2√3; √27 = 3√3. Numerator: 5√3 + 2√3 − 3√3 = 4√3. Divide by √3: 4.' },
      { n: '2.2', q: 'Solve for x: 2^(2x) · 4^(x − 1) = 32', marks: 3, a: '4^(x−1) = 2^(2x−2) and 32 = 2⁵. So 2^(2x + 2x − 2) = 2⁵ → 4x − 2 = 5 → x = 7/4 = 1,75.' },
      { n: '2.3', q: 'Write 0,000 042 in scientific notation.', marks: 1, a: '4,2 × 10⁻⁵' },
      { n: '2.4', q: 'Write 3,5 × 10⁶ as an ordinary number.', marks: 1, a: '3 500 000' },
    ],
  },
  {
    title: 'Question 3: Factorising [11]',
    minutes: 12,
    qa: [
      { n: '3.1.1', q: 'Factorise fully: 6a²b − 9ab² + 12ab³', marks: 2, a: '3ab(2a − 3b + 4b²). Check: 3ab · 4b² = 12ab³ ✓.' },
      { n: '3.1.2', q: 'Factorise: 3x² + 2x − 8', marks: 2, a: '(3x − 4)(x + 2). Check: 3x² + 6x − 4x − 8 ✓.' },
      { n: '3.1.3', q: 'Factorise: 8x³ − 27', marks: 2, a: 'Difference of cubes (2x)³ − 3³ = (2x − 3)(4x² + 6x + 9).' },
      { n: '3.2', q: 'Simplify (state the restrictions): (x² − 9)/(x² + x − 12) ÷ (x + 3)/(x² + 4x)', marks: 5, a: 'Factorise: (x − 3)(x + 3) / [(x + 4)(x − 3)] × x(x + 4)/(x + 3). Cancel (x − 3), (x + 3) and (x + 4): the answer is x. Restrictions: x ≠ −4, 3, −3, 0.' },
    ],
  },
  {
    title: 'Question 4: Quadratic and rational equations [14]',
    minutes: 16,
    qa: [
      { n: '4.1', q: 'Solve for x: (2x − 1)(x + 4) = 0', marks: 2, a: 'x = ½ or x = −4.' },
      { n: '4.2', q: 'Solve for x: x(x − 5) = −6', marks: 4, a: 'x² − 5x + 6 = 0 → (x − 2)(x − 3) = 0 → x = 2 or x = 3.' },
      { n: '4.3', q: 'Solve for x, correct to TWO decimal places: 2x² − 6x − 3 = 0', marks: 3, a: 'a = 2, b = −6, c = −3. x = (6 ± √(36 + 24))/4 = (6 ± √60)/4. x = 3,44 or x = −0,44.' },
      { n: '4.4', q: 'Solve for x: 2/(x − 1) + 3/(x + 1) = 1', marks: 5, a: 'Restrictions x ≠ ±1. Multiply by (x − 1)(x + 1): 2(x + 1) + 3(x − 1) = x² − 1 → 5x − 1 = x² − 1 → x² − 5x = 0 → x(x − 5) = 0. x = 0 or x = 5 (both allowed).' },
    ],
  },
  {
    title: 'Question 5: Number patterns [10]',
    minutes: 12,
    qa: [
      { n: '5.1', q: 'The pattern 4; 7; 10; 13; … gives the number of tiles in each shape.', a: 'First differences are all 3, so the pattern is linear: a = 4, d = 3.' },
      { n: '5.1.1', q: 'How many tiles are in the 10th shape?', marks: 1, a: 'Tₙ = 3n + 1, so T₁₀ = 31.' },
      { n: '5.1.2', q: 'Determine a formula for the number of tiles in the nth shape.', marks: 2, a: 'Tₙ = a + (n − 1)d = 4 + (n − 1)(3) = 3n + 1.' },
      { n: '5.1.3', q: 'Which shape has 100 tiles?', marks: 1, a: '3n + 1 = 100 → n = 33. The 33rd shape.' },
      { n: '5.2', q: 'Consider the quadratic pattern 3; 8; 15; 24; …', a: 'First differences 5; 7; 9. Second differences 2; 2 (constant).' },
      { n: '5.2.1', q: 'Write down the next term.', marks: 1, a: '24 + 11 = 35.' },
      { n: '5.2.2', q: 'Determine the nth term.', marks: 3, a: '2a = 2 → a = 1. 3a + b = 5 → b = 2. a + b + c = 3 → c = 0. Tₙ = n² + 2n.' },
      { n: '5.2.3', q: 'Which term is equal to 143?', marks: 2, a: 'n² + 2n = 143 → n² + 2n − 143 = 0 → (n + 13)(n − 11) = 0. n = 11 (reject n = −13). The 11th term.' },
    ],
  },
  {
    title: 'Question 6: The parabola [6]',
    minutes: 8,
    intro: 'Given: f(x) = −x² + 2x + 8.',
    qa: [
      { n: '6.1', q: 'Sketch the graph of f, showing all intercepts with the axes and the turning point.', marks: 3, a: 'y-intercept: (0; 8). x-intercepts: −x² + 2x + 8 = 0 → x² − 2x − 8 = 0 → (x − 4)(x + 2) = 0 → (−2; 0) and (4; 0). Turning point: x = −b/2a = −2/(−2) = 1; y = −1 + 2 + 8 = 9 → (1; 9). The parabola opens DOWN (a < 0).' },
      { n: '6.2', q: 'Write down the range of f.', marks: 1, a: 'y ≤ 9.' },
      { n: '6.3', q: 'h is obtained by shifting f down 3 units. Write down the equation of h.', marks: 1, a: 'h(x) = f(x) − 3 = −x² + 2x + 5.' },
      { n: '6.4', q: 'Write down the equation of the axis of symmetry of f.', marks: 1, a: 'x = 1.' },
    ],
  },
  {
    title: 'Question 7: Hyperbola and straight line [13]',
    minutes: 16,
    intro: 'The graph of f(x) = 3/(x − 2) + 1 and the straight line g(x) = x/3 + 1/3 are drawn.',
    qa: [
      { n: '7.1', q: 'Write down the equations of the asymptotes of f.', marks: 2, a: 'x = 2 (vertical) and y = 1 (horizontal).' },
      { n: '7.2', q: 'Determine the coordinates of the x-intercept and the y-intercept of f.', marks: 3, a: 'x-intercept (y = 0): 3/(x − 2) = −1 → x − 2 = −3 → x = −1: (−1; 0). y-intercept (x = 0): f(0) = 3/(−2) + 1 = −½: (0; −½).' },
      { n: '7.3', q: 'Write down the domain and range of f.', marks: 2, a: 'Domain: x ∈ ℝ, x ≠ 2. Range: y ∈ ℝ, y ≠ 1.' },
      { n: '7.4', q: 'Calculate the coordinates of the points of intersection of f and g.', marks: 4, a: 'Set f(x) = g(x): 3/(x − 2) + 1 = x/3 + 1/3 → 3/(x − 2) = (x − 2)/3 → (x − 2)² = 9 → x − 2 = ±3 → x = 5 or x = −1. g(5) = 2 and g(−1) = 0. Points: (5; 2) and (−1; 0).' },
      { n: '7.5', q: 'The graph of f is shifted 2 units to the left and 1 unit down to give h. Write down the equation of h.', marks: 2, a: 'h(x) = f(x + 2) − 1 = 3/x + 1 − 1 = 3/x.' },
    ],
  },
  {
    title: 'Question 8: Finance [6]',
    minutes: 8,
    intro: 'Thandi buys a television costing R12 000 on hire purchase. Conditions: a deposit of 10% of the cash price; the balance is paid off in equal monthly instalments over 18 months; simple interest of 12% per annum is charged on the balance.',
    qa: [
      { n: '8.1', q: 'Calculate the balance after the deposit has been paid.', marks: 2, a: 'Deposit = 10% × 12 000 = R1 200. Balance = 12 000 − 1 200 = R10 800.' },
      { n: '8.2', q: 'Calculate the monthly instalment.', marks: 4, a: '18 months = 1,5 years. A = P(1 + i·n) = 10 800(1 + 0,12 × 1,5) = 10 800 × 1,18 = R12 744. Instalment = 12 744 ÷ 18 = R708.' },
    ],
  },
  {
    title: 'Question 9: Sets and probability [7]',
    minutes: 9,
    qa: [
      { n: '9.1', q: 'In a class of 50 learners, 30 take Mathematics (M), 25 take Science (S) and 8 take neither subject.', a: 'Learners taking at least one subject: 50 − 8 = 42.' },
      { n: '9.1.1', q: 'Draw a Venn diagram and calculate how many learners take both subjects.', marks: 4, a: 'n(M or S) = n(M) + n(S) − n(M and S) → 42 = 30 + 25 − x → x = 13 take both. Venn: M only 17, both 13, S only 12, neither 8 (outside the circles). 17 + 13 + 12 + 8 = 50 ✓.' },
      { n: '9.1.2', q: 'How many learners take Mathematics but not Science?', marks: 1, a: '30 − 13 = 17.' },
      { n: '9.2', q: 'P(A) = 0,3; P(B) = 0,5 and P(A or B) = 0,65. Calculate P(A and B) and state whether A and B are mutually exclusive.', marks: 2, a: 'P(A and B) = P(A) + P(B) − P(A or B) = 0,3 + 0,5 − 0,65 = 0,15. Since P(A and B) ≠ 0, the events are NOT mutually exclusive.' },
    ],
  },
];

export const ALGEBRA_PRACTICE_PAPER: Chapter = {
  id: 'algebra-term4-practice-paper',
  subjectId: 'math-algebra',
  title: 'Practice Paper 1 (made from the Nov 2025 paper)',
  summary: 'A full 100-mark Grade 10 Paper 1 in the same style as your November 2025 exam, new numbers, every answer worked.',
  hidden: true,
  isPaper: true,
  lessons: paperLessons('algebra-term4-practice-paper', 'math-algebra', 'algp', ALG_ITEMS),
};

/* ───────────────────────── PAPER 2 (geometry) ───────────────────────── */

const GEO_ITEMS: Q[] = [
  {
    title: 'Instructions, formulae and mark plan',
    minutes: 3,
    intro:
      'Mathematics P2, Grade 10, practice paper. 100 marks, 2 hours, TEN questions. Show all calculations, diagrams and graphs; round to two decimal places unless told otherwise; state reasons in geometry. Formula sheet: x = (−b ± √(b² − 4ac))/2a; m = (y₂ − y₁)/(x₂ − x₁); d = √((x₂ − x₁)² + (y₂ − y₁)²); y = mx + c; y − y₁ = m(x − x₁); m = tan θ; M((x₁ + x₂)/2 ; (y₁ + y₂)/2). Mark plan: Q1 [9], Q2 [14], Q3 [17], Q4 [5], Q5 [16], Q6 [7], Q7 [6], Q8 [10], Q9 [10], Q10 [6]. Draw the graphs and diagrams yourself on paper.',
    qa: [],
  },
  {
    title: 'Question 1: Statistics, ungrouped data [9]',
    minutes: 10,
    intro: 'The marks (out of 40) of 16 learners in a test are: 12; 15; 15; 18; 20; 21; 22; 24; 25; 25; 27; 28; 30; 32; 35; 40.',
    qa: [
      { n: '1.1', q: 'Determine the median.', marks: 2, a: 'n = 16, so the median is the mean of the 8th and 9th values: (24 + 25)/2 = 24,5.' },
      { n: '1.2', q: 'Calculate the mean.', marks: 2, a: 'Sum = 389. Mean = 389 ÷ 16 = 24,31.' },
      { n: '1.3', q: 'Determine the range and the interquartile range.', marks: 3, a: 'Range = 40 − 12 = 28. Q₁ = median of the lower 8 values (12; 15; 15; 18; 20; 21; 22; 24) = (18 + 20)/2 = 19. Q₃ = median of the upper 8 values (25; 25; 27; 28; 30; 32; 35; 40) = (28 + 30)/2 = 29. IQR = 29 − 19 = 10.' },
      { n: '1.4', q: 'Draw a box-and-whisker diagram.', marks: 2, a: 'Five-number summary: minimum 12; Q₁ = 19; median = 24,5; Q₃ = 29; maximum 40. Draw a scaled number line, a box from 19 to 29 with a line at 24,5, whiskers to 12 and 40.' },
    ],
  },
  {
    title: 'Question 2: Statistics, grouped data [14]',
    minutes: 16,
    intro: 'The weekly study time (hours) of 40 learners: 0 ≤ x < 5: 4 learners; 5 ≤ x < 10: 10; 10 ≤ x < 15: 16; 15 ≤ x < 20: 8; 20 ≤ x < 25: 2.',
    qa: [
      { n: '2.1', q: 'Draw a frequency polygon.', marks: 3, a: 'Plot the midpoints 2,5; 7,5; 12,5; 17,5; 22,5 against the frequencies 4; 10; 16; 8; 2 and join with straight lines (close the ends on the x-axis at −2,5 and 27,5).' },
      { n: '2.2', q: 'Complete the cumulative frequency column.', marks: 2, a: '4; 14; 30; 38; 40.' },
      { n: '2.3', q: 'Draw an ogive.', marks: 3, a: 'Plot (0; 0), (5; 4), (10; 14), (15; 30), (20; 38), (25; 40): the cumulative frequency against the UPPER limit of each class. Join with a smooth curve.' },
      { n: '2.4', q: 'Estimate the median and the lower quartile from the ogive.', marks: 4, a: 'Median: position n/2 = 20 → about 11,9 hours (calculation check: 10 + (20 − 14)/16 × 5 = 11,875). Lower quartile: position n/4 = 10 → about 8 hours (calculation check: 5 + (10 − 4)/10 × 5 = 8). Accept readings close to these.' },
      { n: '2.5', q: 'Calculate the approximate mean.', marks: 2, a: 'Mean ≈ (2,5×4 + 7,5×10 + 12,5×16 + 17,5×8 + 22,5×2)/40 = (10 + 75 + 200 + 140 + 45)/40 = 470/40 = 11,75 hours.' },
    ],
  },
  {
    title: 'Question 3: Analytical geometry [17]',
    minutes: 20,
    intro: 'P(−2; 0), Q(2; 2) and R(4; −2) are the vertices of triangle PQR. T is the midpoint of PR and S is the midpoint of QR.',
    qa: [
      { n: '3.1', q: 'Calculate the length of PQ. Leave your answer in surd form.', marks: 2, a: 'PQ = √((2 + 2)² + (2 − 0)²) = √(16 + 4) = √20 = 2√5.' },
      { n: '3.2', q: 'Calculate the gradient of PQ.', marks: 1, a: 'm = (2 − 0)/(2 + 2) = 1/2.' },
      { n: '3.3', q: 'Determine the coordinates of T and S.', marks: 4, a: 'T = ((−2 + 4)/2 ; (0 − 2)/2) = (1; −1). S = ((2 + 4)/2 ; (2 − 2)/2) = (3; 0).' },
      { n: '3.4', q: 'Show that PQ ⊥ QR.', marks: 2, a: 'm(QR) = (−2 − 2)/(4 − 2) = −2. m(PQ) × m(QR) = ½ × (−2) = −1, so PQ ⊥ QR.' },
      { n: '3.5', q: 'Show that PQ = QR and hence name the type of triangle.', marks: 2, a: 'QR = √(4 + 16) = √20 = PQ. The triangle is a right-angled isosceles triangle.' },
      { n: '3.6', q: 'Calculate the area of triangle PQR.', marks: 2, a: 'Area = ½ × PQ × QR = ½ × √20 × √20 = 10 square units.' },
      { n: '3.7', q: 'Calculate the angle of inclination of PQ.', marks: 2, a: 'tan θ = ½ → θ = 26,57°.' },
      { n: '3.8', q: 'Calculate the gradient of TS and state what this shows about TS and PQ.', marks: 2, a: 'm(TS) = (0 + 1)/(3 − 1) = ½ = m(PQ), so TS ∥ PQ. (Midpoint theorem: the line joining the midpoints of two sides of a triangle is parallel to the third side.)' },
    ],
  },
  {
    title: 'Question 4: Trigonometry on the Cartesian plane [5]',
    minutes: 6,
    intro: 'T(−5; 12) is a point on the Cartesian plane. OT makes an angle θ with the positive x-axis. Answer WITHOUT a calculator.',
    qa: [
      { n: '4.1', q: 'Determine the length of OT.', marks: 1, a: 'OT = √(25 + 144) = √169 = 13.' },
      { n: '4.2', q: 'Determine the value of sec θ + tan θ.', marks: 4, a: 'cos θ = −5/13, so sec θ = −13/5. tan θ = 12/(−5) = −12/5. sec θ + tan θ = −13/5 − 12/5 = −25/5 = −5.' },
    ],
  },
  {
    title: 'Question 5: Trigonometry: identities, reduction, equations [16]',
    minutes: 18,
    qa: [
      { n: '5.1', q: 'Prove the identity: (1/cos x − cos x)/sin x = tan x', marks: 4, a: 'LHS = ((1 − cos²x)/cos x)/sin x = (sin²x/cos x)/sin x = sin x/cos x = tan x = RHS.' },
      { n: '5.2', q: 'Simplify to a single trigonometric ratio: sin(180° + x) · cos(360° − x) · tan(−x) / cos(90° − x)', marks: 5, a: 'sin(180° + x) = −sin x; cos(360° − x) = cos x; tan(−x) = −tan x; cos(90° − x) = sin x. Expression = (−sin x)(cos x)(−tan x)/sin x = cos x · tan x = sin x.' },
      { n: '5.3', q: 'Evaluate WITHOUT a calculator: sin 150° · cos 300° + tan 225°', marks: 3, a: 'sin 150° = sin 30° = ½; cos 300° = cos 60° = ½; tan 225° = tan 45° = 1. Answer: ½ × ½ + 1 = 5/4.' },
      { n: '5.4', q: 'Determine the general solution of 2 sin x − 1 = 0.', marks: 4, a: 'sin x = ½ → reference angle 30°. x = 30° + k·360° or x = 150° + k·360°, k ∈ ℤ.' },
    ],
  },
  {
    title: 'Question 6: Trigonometric graphs [7]',
    minutes: 8,
    intro: 'Given f(x) = −2 cos x for x ∈ [0°; 360°].',
    qa: [
      { n: '6.1', q: 'Write down the amplitude and the period of f.', marks: 2, a: 'Amplitude = 2. Period = 360°.' },
      { n: '6.2', q: 'Write down the range of f.', marks: 2, a: '−2 ≤ y ≤ 2.' },
      { n: '6.3', q: 'Sketch the graph of f, showing the intercepts with the axes and the turning points.', marks: 3, a: 'Key points: (0°; −2), (90°; 0), (180°; 2), (270°; 0), (360°; −2). It is the graph of y = cos x reflected in the x-axis and stretched to an amplitude of 2: starts at the minimum −2, maximum 2 at 180°.' },
    ],
  },
  {
    title: 'Question 7: Measurement [6]',
    minutes: 7,
    intro: 'A silo is made of a cylinder of radius 5 cm and height 12 cm with a hemisphere of radius 5 cm fixed on top. (V = πr²h for a cylinder and V = ⁴⁄₃πr³ for a sphere.)',
    qa: [
      { n: '7.1', q: 'Calculate the volume of the whole solid.', marks: 6, a: 'Cylinder: π(5)²(12) = 300π. Hemisphere: ½ × ⁴⁄₃π(5)³ = (2/3)π(125) = 83,33π. Total = 383,33π = 1 204,28 cm³.' },
    ],
  },
  {
    title: 'Question 8: Euclidean geometry: parallelogram [10]',
    minutes: 12,
    intro: 'ABCD is a parallelogram. The diagonals AC and BD intersect at E. State all reasons.',
    qa: [
      { n: '8.1', q: 'Prove that ΔABE ≡ ΔCDE.', marks: 4, a: 'In ΔABE and ΔCDE: (1) AB = CD (opposite sides of a parallelogram). (2) ∠BAE = ∠DCE (alternate angles, AB ∥ DC). (3) ∠ABE = ∠CDE (alternate angles, AB ∥ DC). ∴ ΔABE ≡ ΔCDE (AAS).' },
      { n: '8.2', q: 'Hence prove that the diagonals of a parallelogram bisect each other.', marks: 2, a: 'AE = CE and BE = DE (corresponding sides of congruent triangles). So E is the midpoint of both diagonals.' },
      { n: '8.3', q: 'If AC ⊥ BD, prove that ABCD is a rhombus.', marks: 4, a: 'In ΔABE and ΔCBE: (1) AE = CE (diagonals bisect each other). (2) ∠AEB = ∠CEB = 90° (AC ⊥ BD). (3) BE is common. ∴ ΔABE ≡ ΔCBE (SAS), so AB = CB. In a parallelogram the opposite sides are equal, so all four sides are equal: ABCD is a rhombus.' },
    ],
  },
  {
    title: 'Question 9: Midpoint theorem and similarity [10]',
    minutes: 12,
    intro: 'In ΔABC, D is the midpoint of AB and E is the midpoint of AC. DE = 2x + 1 and BC = 5x − 2.',
    qa: [
      { n: '9.1', q: 'State the theorem that relates DE and BC.', marks: 2, a: 'The line segment joining the midpoints of two sides of a triangle is parallel to the third side and equal to half of it: DE ∥ BC and DE = ½BC.' },
      { n: '9.2', q: 'Calculate the value of x.', marks: 3, a: 'BC = 2DE: 5x − 2 = 2(2x + 1) = 4x + 2 → x = 4.' },
      { n: '9.3', q: 'Calculate the length of BC.', marks: 1, a: 'BC = 5(4) − 2 = 18 (and DE = 9).' },
      { n: '9.4', q: 'If ∠ADE = 62°, determine ∠ABC. Give a reason.', marks: 2, a: '∠ABC = 62° (corresponding angles, DE ∥ BC).' },
      { n: '9.5', q: 'Prove that ΔADE ||| ΔABC.', marks: 2, a: '∠A is common; ∠ADE = ∠ABC (corresponding angles, DE ∥ BC). So the triangles are equiangular: ΔADE ||| ΔABC.' },
    ],
  },
  {
    title: 'Question 10: Circle geometry [6]',
    minutes: 7,
    intro: 'O is the centre of a circle with radius 13 cm. Chord AB = 24 cm and OM ⊥ AB at M.',
    qa: [
      { n: '10.1', q: 'Give a reason why AM = 12 cm.', marks: 2, a: 'The line from the centre of a circle perpendicular to a chord bisects the chord, so AM = ½ × 24 = 12 cm.' },
      { n: '10.2', q: 'Calculate the length of OM.', marks: 4, a: 'In right-angled ΔOMA: OM² = OA² − AM² (Pythagoras) = 13² − 12² = 169 − 144 = 25. OM = 5 cm.' },
    ],
  },
];

export const GEOMETRY_PRACTICE_PAPER: Chapter = {
  id: 'geometry-term4-practice-paper',
  subjectId: 'math-geometry',
  title: 'Practice Paper 2 (made from the Nov 2025 paper)',
  summary: 'A full 100-mark Grade 10 Paper 2 in the same style as your November 2025 exam, new numbers, every answer worked.',
  hidden: true,
  isPaper: true,
  lessons: paperLessons('geometry-term4-practice-paper', 'math-geometry', 'geop', GEO_ITEMS),
};
