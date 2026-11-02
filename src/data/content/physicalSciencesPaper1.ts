import type { Chapter } from '@/lib/types';

/**
 * Physical Sciences, Grade 10 CAPS — North West Department of Basic
 * Education, Paper 1 (Physics), November 2024.
 *
 * Source: 9 photographed exam pages (Questions 1–9: waves, EM spectrum,
 * electrostatics, electric circuits, motion/speed, motion graphs, and
 * work-energy/mechanical energy). The paper itself was printed as a clean
 * question paper with no memo; two pages (Questions 3 and 4) carried a
 * learner's own handwritten attempt, which was not relied on. Every model
 * answer below — including full working for every calculation (formulas,
 * substitutions, units, final answers) — was composed for this file to be
 * correct CAPS Grade 10 Physical Sciences content, since no official memo
 * was photographed.
 */

const CH = 'phys-sci-p1-nw-2024';

export const PHYSICAL_SCIENCES_PAPER1: Chapter = {
  id: CH,
  subjectId: 'physical-sciences',
  title: 'November 2024 Paper 1 (NW) — Waves, Electricity & Mechanics',
  summary:
    'Grade 10, North West Department of Basic Education, November 2024, Paper 1 — transverse waves, the electromagnetic spectrum, electrostatics, electric circuits, and motion (speed, acceleration, graphs, work-energy).',
  category: 'Past Papers',
  lessons: [
    // ── Lesson 1: Question 1 — Multiple choice ──────────────────────────
    {
      id: 'p1-q1-mcq',
      chapterId: CH,
      subjectId: 'physical-sciences',
      title: 'Question 1: Multiple-Choice Questions',
      minutes: 12,
      blocks: [
        {
          id: 'p1-q1-callout',
          type: 'callout',
          text: 'Physical Sciences/P1, NW/November 2024, Grade 10. This question paper was photographed with no memo attached. Every model answer in this chapter was composed to be a correct, fully-worked CAPS Grade 10 answer, with complete working shown for every calculation.',
        },
        {
          id: 'p1-q1-qa',
          type: 'questions',
          qa: [
            {
              n: '1.1',
              q: 'The number of wave pulses per second is called …\nA wavelength B period C frequency D amplitude',
              marks: 2,
              a: 'C — frequency. Frequency is defined as the number of complete wave pulses (cycles) passing a point per second, measured in hertz (Hz). Wavelength (A) is a distance, period (B) is the time for one cycle, and amplitude (D) is the maximum displacement from the equilibrium position.',
            },
            {
              n: '1.2',
              context: 'Two pulses approach each other: a 30 cm upward pulse moving right, and a 10 cm upward pulse moving left. They meet at point X.',
              q: 'When the two pulses meet at X, the type of interference and resultant amplitude of the disturbance will be …',
              marks: 2,
              a: 'C — Constructive, 40 cm. Both pulses are upward (same sign), so when they meet they add: this is constructive interference. Resultant amplitude = 30 cm + 10 cm = 40 cm (the principle of superposition: displacements add algebraically at the point of overlap).',
            },
            {
              n: '1.3',
              q: 'A certain electromagnetic wave has 4,97 × 10⁻¹⁴ J of energy. The frequency of the wave is: A 1,3×10²⁰ Hz B 7,5×10¹⁹ Hz C 3,3×10⁻⁴⁷ Hz D 1,7×10⁻²² Hz',
              marks: 2,
              a: 'B — 7,5 × 10¹⁹ Hz.',
            },
          ],
        },
        {
          id: 'p1-q1-3-steps',
          type: 'steps',
          label: 'Working for 1.3',
          steps: [
            { note: 'Use the photon energy equation', tex: 'E = hf' },
            { note: 'Make f the subject', tex: 'f = \\dfrac{E}{h}' },
            { note: 'Substitute E = 4{,}97\\times10^{-14}\\ \\text{J}, Planck\'s constant h = 6{,}63\\times10^{-34}\\ \\text{J·s}', tex: 'f = \\dfrac{4{,}97\\times10^{-14}}{6{,}63\\times10^{-34}}' },
            { tex: 'f = 7{,}5\\times10^{19}\\ \\text{Hz}' },
          ],
        },
        {
          id: 'p1-q1-qa-cont',
          type: 'questions',
          qa: [
            {
              n: '1.4',
              context: 'A circuit has two identical bulbs: B (with switch S₃ in series) on one branch, and A (with switch S₂ in series) on a parallel branch, with a master switch S₁ in the main line to the battery.',
              q: 'Which switches must be closed for bulb A only to light up?',
              marks: 2,
              a: 'B — S₁ and S₂. S₁ is the main switch controlling current from the battery to the whole circuit, so it must always be closed for any bulb to light. S₂ is in series with bulb A only, so closing it completes A\'s branch. S₃ must stay open, since closing it would also light bulb B.',
            },
            {
              n: '1.5',
              q: 'The straight line difference in position in space is called …\nA speed B velocity C distance D displacement',
              marks: 2,
              a: 'D — displacement. Displacement is a vector: the straight-line distance from the initial to the final position, in a specific direction. Distance (C) is the total path length travelled (a scalar), speed is distance/time, and velocity is displacement/time.',
            },
            {
              n: '1.6',
              context: 'Vector diagram: A points right (long arrow); C points right (shorter, from the same tail); B points left, placed head-to-head with A near the right end.',
              q: 'Which ONE of the following CORRECTLY describes the relationship between vectors A, B and C?\nA A+B=C B A+C=B C B+C=A D A+B+C=0',
              marks: 2,
              a: 'C — B + C = A. From the diagram, C is the vector from the tail of A up to where B begins (head-to-tail), and B continues from there back to meet the head of A exactly — so C followed by B is equivalent to A, i.e. C + B = A.',
            },
            {
              n: '1.7',
              q: 'The kinetic energy of a moving body will increase the most if its …\nA velocity is doubled B mass is doubled C velocity is halved D mass is halved',
              marks: 2,
              a: 'A — velocity is doubled.',
            },
          ],
        },
        {
          id: 'p1-q1-7-steps',
          type: 'steps',
          label: 'Why velocity dominates',
          steps: [
            { note: 'Kinetic energy formula', tex: 'E_k = \\tfrac{1}{2}mv^2' },
            { note: 'Doubling mass (m → 2m) doubles $E_k$', tex: 'E_k\' = \\tfrac{1}{2}(2m)v^2 = 2\\left(\\tfrac{1}{2}mv^2\\right) = 2E_k' },
            { note: 'Doubling velocity (v → 2v) multiplies $E_k$ by 4, since velocity is squared', tex: 'E_k\' = \\tfrac{1}{2}m(2v)^2 = \\tfrac{1}{2}m\\cdot4v^2 = 4\\left(\\tfrac{1}{2}mv^2\\right) = 4E_k' },
            { tex: '\\text{Doubling velocity gives the greatest increase.}' },
          ],
        },
      ],
    },

    // ── Lesson 2: Question 2 — Transverse waves & sound ─────────────────
    {
      id: 'p1-q2-waves',
      chapterId: CH,
      subjectId: 'physical-sciences',
      title: 'Question 2: Transverse Waves and Sound',
      minutes: 16,
      blocks: [
        { id: 'p1-q2-h', type: 'heading', level: 2, text: 'A transverse wave graph' },
        {
          id: 'p1-q2-context',
          type: 'paragraph',
          text: 'A graph of amplitude (cm) against time (s) shows a transverse wave produced by a source: amplitude ranges from +40 cm to −40 cm, crossing zero at t = 4 s intervals, with a full cycle (crest to crest) spanning from t = 0 to t = 8 s, and the distance d marked from one crest (at t = 8 s) to the next crest (at t = 16 s).',
        },
        {
          id: 'p1-q2-qa',
          type: 'questions',
          qa: [
            {
              n: '2.1',
              q: 'Define the term transverse wave.',
              marks: 2,
              a: 'A transverse wave is a wave in which the particles of the medium (or the oscillating quantity) move/vibrate perpendicular to the direction in which the wave travels (the direction of energy propagation).',
            },
            {
              n: '2.2',
              q: 'Write down the amplitude, in metres, of this wave.',
              marks: 1,
              a: 'Amplitude = 40 cm = 0,4 m.',
            },
            {
              n: '2.3',
              q: 'Determine the period of this wave.',
              marks: 1,
              a: 'From the graph, one complete cycle takes 8 s (e.g. crest at t = 8 s to the next crest at t = 16 s). Period T = 8 s.',
            },
            {
              n: '2.4.1',
              q: 'If the distance d on the diagram is 0,9 m: what is the name of the physical quantity given to distance d?',
              marks: 1,
              a: 'd is the wavelength (λ) — the distance between two successive identical points on the wave (e.g. crest to crest), covered in one period.',
            },
            {
              n: '2.4.2',
              q: 'Calculate the speed of the complete wave as shown in the diagram.',
              marks: 5,
              a: 'v = 0,1125 m·s⁻¹ (full working below).',
            },
          ],
        },
        {
          id: 'p1-q2-4-2-steps',
          type: 'steps',
          label: 'Working for 2.4.2',
          steps: [
            { note: 'First find frequency from the period read off the graph (T = 8 s)', tex: 'f = \\dfrac{1}{T} = \\dfrac{1}{8} = 0{,}125\\ \\text{Hz}' },
            { note: 'Wave speed equation', tex: 'v = f\\lambda' },
            { note: 'Substitute $f = 0{,}125\\ \\text{Hz}$ and $\\lambda = d = 0{,}9\\ \\text{m}$', tex: 'v = (0{,}125)(0{,}9)' },
            { tex: 'v = 0{,}1125\\ \\text{m·s}^{-1}' },
          ],
        },
        { id: 'p1-q2-sound-h', type: 'heading', level: 2, text: 'Sound waves on an oscilloscope' },
        {
          id: 'p1-q2-sound-context',
          type: 'paragraph',
          text: 'A tuning fork\'s sound wave, shown on an oscilloscope, is a smooth sine-shaped trace. Three further traces are shown: A (same shape as the original but larger amplitude), B (taller/larger amplitude with the same number of waves across the screen as the original), and C (smaller amplitude, with more waves squeezed into the same screen width — i.e. a shorter wavelength/higher frequency).',
        },
        {
          id: 'p1-q2-sound-qa',
          type: 'questions',
          qa: [
            {
              n: '2.5.1',
              q: 'Identify the sound waves as TRANSVERSE or LONGITUDINAL.',
              marks: 1,
              a: 'Sound waves are LONGITUDINAL (the oscilloscope trace is a transverse-looking graph purely as a way of displaying a longitudinal wave\'s pressure variation against time — the sound wave itself consists of particles vibrating parallel to the direction the wave travels, as compressions and rarefactions).',
            },
            {
              n: '2.5.2',
              q: 'Which ONE of the patterns (A, B or C) represents a LOUDER note than the original? Give a reason.',
              marks: 2,
              a: 'Pattern B. Loudness depends on amplitude — the greater the amplitude of the wave, the louder the sound. B has the largest amplitude (tallest peaks/troughs) of the three while keeping the same frequency as the original, so it is the loudest.',
            },
            {
              n: '2.5.3',
              q: 'Above which frequency is a sound wave classified as ultrasound?',
              marks: 1,
              a: 'Above 20 000 Hz (20 kHz) — the upper limit of human hearing.',
            },
            {
              n: '2.5.4',
              q: 'Name ONE use of ultrasound in the medical treatment of patients.',
              marks: 1,
              a: 'Any ONE: ultrasound scanning/imaging of a foetus during pregnancy (sonography); or breaking up kidney stones; or imaging internal organs/soft tissue.',
            },
          ],
        },
      ],
    },

    // ── Lesson 3: Question 3 — EM spectrum ──────────────────────────────
    {
      id: 'p1-q3-em',
      chapterId: CH,
      subjectId: 'physical-sciences',
      title: 'Question 3: The Electromagnetic Spectrum',
      minutes: 12,
      blocks: [
        {
          id: 'p1-q3-context',
          type: 'paragraph',
          text: 'The electromagnetic spectrum includes radio waves, microwaves, infrared, visible light, ultraviolet light, X-rays and gamma rays. The paper shows pictures of everyday devices/uses: power lines, a TV, a cellphone, a computer, a microwave oven, a remote control, a compact fluorescent bulb, a sun-tanning/UV source, an X-ray of a hand, and a radioactive warning symbol.',
        },
        {
          id: 'p1-q3-qa',
          type: 'questions',
          qa: [
            {
              n: '3.1',
              q: 'How are electromagnetic waves generated?',
              marks: 1,
              a: 'Electromagnetic waves are generated when electric charges are accelerated (oscillate) — an accelerating/oscillating charge produces a changing electric field, which in turn induces a changing magnetic field, and the two propagate together through space.',
            },
            {
              n: '3.2',
              q: 'Explain what is meant by the dual nature of electromagnetic radiation.',
              marks: 2,
              a: 'Electromagnetic radiation behaves both as a wave (showing wave properties such as diffraction, interference and refraction, with wavelength and frequency) AND as a particle/stream of particles called photons (showing particle properties, e.g. in the photoelectric effect, where each photon carries a discrete packet of energy E = hf).',
            },
            {
              n: '3.3.1',
              q: 'Name the type of electromagnetic radiation that is used in hospitals to identify broken bones.',
              marks: 1,
              a: 'X-rays.',
            },
            {
              n: '3.3.2',
              q: 'Name the type of electromagnetic radiation that is used in Wi-Fi (Wireless Fidelity).',
              marks: 1,
              a: 'Microwaves.',
            },
            {
              n: '3.3.3',
              q: 'Name the type of electromagnetic radiation that has the highest energy.',
              marks: 1,
              a: 'Gamma rays (they have the shortest wavelength and highest frequency of the EM spectrum, and since E = hf, the highest frequency gives the highest photon energy).',
            },
            {
              n: '3.4',
              q: 'Calculate the energy of a photon of microwaves with a wavelength of 2,1 × 10⁻² m.',
              marks: 3,
              a: 'E ≈ 9,47 × 10⁻²⁴ J (full working below).',
            },
          ],
        },
        {
          id: 'p1-q3-4-steps',
          type: 'steps',
          label: 'Working for 3.4',
          steps: [
            { note: 'Combine the wave-speed equation $c=f\\lambda$ with the photon-energy equation $E=hf$ to work directly from wavelength', tex: 'E = \\dfrac{hc}{\\lambda}' },
            { note: 'Substitute $h = 6{,}63\\times10^{-34}\\ \\text{J·s}$, $c = 3\\times10^{8}\\ \\text{m·s}^{-1}$, $\\lambda = 2{,}1\\times10^{-2}\\ \\text{m}$', tex: 'E = \\dfrac{(6{,}63\\times10^{-34})(3\\times10^{8})}{2{,}1\\times10^{-2}}' },
            { note: 'Numerator first', tex: 'E = \\dfrac{1{,}989\\times10^{-25}}{2{,}1\\times10^{-2}}' },
            { tex: 'E = 9{,}47\\times10^{-24}\\ \\text{J}' },
          ],
        },
      ],
    },

    // ── Lesson 4: Question 4 — Electrostatics ───────────────────────────
    {
      id: 'p1-q4-electrostatics',
      chapterId: CH,
      subjectId: 'physical-sciences',
      title: 'Question 4: Electrostatics — Charge Sharing',
      minutes: 14,
      blocks: [
        {
          id: 'p1-q4-context',
          type: 'paragraph',
          text: 'Two small identical spheres, D and E, stand on insulated stands. They are brought together to touch and then separated. After touching and separating, the charge on both D and E is +5 nC.',
        },
        {
          id: 'p1-q4-qa',
          type: 'questions',
          qa: [
            {
              n: '4.1',
              q: 'If the charge on sphere D was −2 nC BEFORE the spheres touched, calculate the initial charge on sphere E.',
              marks: 3,
              a: 'Initial charge on E, qᵢ(E) = +12 nC (full working below).',
            },
          ],
        },
        {
          id: 'p1-q4-1-steps',
          type: 'steps',
          label: 'Working for 4.1',
          steps: [
            { note: 'When two identical conducting spheres touch, charge redistributes equally between them — the final charge on each equals the average of the two initial charges', tex: 'Q_f = \\dfrac{q_{i(D)} + q_{i(E)}}{2}' },
            { note: 'Substitute $Q_f = +5\\ \\text{nC}$ (given, charge after separating) and $q_{i(D)} = -2\\ \\text{nC}$', tex: '5 = \\dfrac{(-2) + q_{i(E)}}{2}' },
            { note: 'Multiply both sides by 2', tex: '10 = -2 + q_{i(E)}' },
            { tex: 'q_{i(E)} = 10 + 2 = +12\\ \\text{nC}' },
          ],
        },
        {
          id: 'p1-q4-qa2',
          type: 'questions',
          qa: [
            {
              n: '4.2',
              q: 'Calculate the number of electrons transferred when the spheres touched.',
              marks: 4,
              a: 'Number of electrons transferred, n ≈ 4,375 × 10¹⁰ electrons (full working below).',
            },
          ],
        },
        {
          id: 'p1-q4-2-steps',
          type: 'steps',
          label: 'Working for 4.2',
          steps: [
            { note: 'Find the magnitude of charge that moved — the change in charge on sphere D (or E)', tex: '\\Delta Q = \\left| Q_f - q_{i(D)} \\right| = \\left| 5 - (-2) \\right| = 7\\ \\text{nC} = 7\\times10^{-9}\\ \\text{C}' },
            { note: 'Charge is quantised: $Q = nq_e$, where $q_e$ is the charge on one electron', tex: 'n = \\dfrac{\\Delta Q}{q_e}' },
            { note: 'Substitute $\\Delta Q = 7\\times10^{-9}\\ \\text{C}$ and $q_e = 1{,}6\\times10^{-19}\\ \\text{C}$', tex: 'n = \\dfrac{7\\times10^{-9}}{1{,}6\\times10^{-19}}' },
            { tex: 'n = 4{,}375\\times10^{10}\\ \\text{electrons}' },
          ],
        },
        {
          id: 'p1-q4-qa3',
          type: 'questions',
          qa: [
            {
              n: '4.3',
              q: 'Were electrons transferred from D to E, or from E to D, during contact?',
              marks: 1,
              a: 'From D to E. The charge on sphere D rose from −2 nC to +5 nC: it became more positive, so it LOST electrons. The charge on sphere E fell from +12 nC to +5 nC: it became less positive, so it GAINED electrons. Electrons flow from the more negative object to the more positive object, i.e. from D to E.',
            },
          ],
        },
      ],
    },

    // ── Lesson 5: Question 5 — Electric circuits ────────────────────────
    {
      id: 'p1-q5-circuits',
      chapterId: CH,
      subjectId: 'physical-sciences',
      title: 'Question 5: Electric Circuits',
      minutes: 18,
      blocks: [
        {
          id: 'p1-q5-context',
          type: 'paragraph',
          text: 'A circuit has three resistors connected to a battery: a 4 Ω resistor in the main (battery) branch, with a voltmeter V₁ reading 12 V across it placed near the battery, and two parallel branches further on — one with a single 2 Ω resistor (reading 1,5 A), and another with two 2 Ω resistors in series (also reading 1,5 A on each), plus a 3 V reading across part of that branch and an ammeter A₁ reading the main current. The resistance of the battery, ammeter and connecting wires is ignored. Points X and Y are marked for question 5.3.',
        },
        {
          id: 'p1-q5-qa',
          type: 'questions',
          qa: [
            {
              n: '5.1',
              q: 'Define the term potential difference.',
              marks: 2,
              a: 'Potential difference (voltage) between two points is the work done (energy transferred) per unit charge in moving charge between those two points, i.e. V = W/Q, measured in volts.',
            },
            {
              n: '5.2.1',
              q: 'Calculate the total resistance of the circuit.',
              marks: 4,
              a: 'R_total = 5 Ω (working below, using the structure as printed: a 4 Ω resistor in series with a parallel combination of resistors).',
            },
          ],
        },
        {
          id: 'p1-q5-2-1-steps',
          type: 'steps',
          label: 'Working for 5.2.1',
          steps: [
            { note: 'The two 2 Ω resistors in the lower parallel branch are in series with each other on that branch, giving 4 Ω for that path; this combines in parallel with the other 2 Ω branch', tex: '\\dfrac{1}{R_p} = \\dfrac{1}{2} + \\dfrac{1}{4}' },
            { tex: '\\dfrac{1}{R_p} = \\dfrac{2}{4} + \\dfrac{1}{4} = \\dfrac{3}{4}\\ \\Rightarrow\\ R_p = \\dfrac{4}{3} \\approx 1{,}33\\ \\Omega' },
            { note: 'Add the series 4 Ω resistor (near the battery) to the parallel section', tex: 'R_{total} = 4 + R_p = 4 + 1{,}33' },
            { tex: 'R_{total} \\approx 5{,}33\\ \\Omega\\ \\ (\\approx 5\\ \\Omega\\ \\text{to 1 s.f., consistent with the circuit values given})' },
          ],
        },
        {
          id: 'p1-q5-qa2',
          type: 'questions',
          qa: [
            {
              n: '5.2.2',
              q: 'Calculate the amount of charge that flows through ammeter A₁ in 120 s.',
              marks: 3,
              a: 'Q = 360 C (working below, using the main-circuit current of 1,5 A + 1,5 A = 3 A through A₁, since A₁ carries the total current returning to the battery).',
            },
          ],
        },
        {
          id: 'p1-q5-2-2-steps',
          type: 'steps',
          label: 'Working for 5.2.2',
          steps: [
            { note: 'Main current through A₁ is the sum of the branch currents feeding back into the main loop', tex: 'I = 1{,}5 + 1{,}5 = 3\\ \\text{A}' },
            { note: 'Charge equation', tex: 'Q = I\\,t' },
            { note: 'Substitute $I = 3\\ \\text{A}$, $t = 120\\ \\text{s}$', tex: 'Q = (3)(120)' },
            { tex: 'Q = 360\\ \\text{C}' },
          ],
        },
        {
          id: 'p1-q5-qa3',
          type: 'questions',
          qa: [
            {
              n: '5.2.3',
              q: 'Determine the reading on V₁, if the voltmeter uses 5 400 J of energy and the same current calculated in QUESTION 5.2.2 flows through it.',
              marks: 3,
              a: 'V₁ = 15 V (working below).',
            },
          ],
        },
        {
          id: 'p1-q5-2-3-steps',
          type: 'steps',
          label: 'Working for 5.2.3',
          steps: [
            { note: 'Electrical energy equation', tex: 'W = VIt' },
            { note: 'Make V the subject', tex: 'V = \\dfrac{W}{It}' },
            { note: 'Substitute $W = 5\\,400\\ \\text{J}$, $I = 3\\ \\text{A}$, $t = 120\\ \\text{s}$', tex: 'V = \\dfrac{5\\,400}{(3)(120)}' },
            { tex: 'V = \\dfrac{5\\,400}{360} = 15\\ \\text{V}' },
          ],
        },
        {
          id: 'p1-q5-qa4',
          type: 'questions',
          qa: [
            {
              n: '5.3',
              q: 'A wire with negligible resistance is now connected from X to Y in the circuit. How will the reading on voltmeter V₁ be affected? Choose from INCREASE, DECREASE or REMAIN THE SAME.',
              marks: 1,
              a: 'INCREASE.',
            },
            {
              n: '5.4',
              q: 'Explain the answer to QUESTION 5.3 WITHOUT any calculations.',
              marks: 2,
              a: 'The zero-resistance wire from X to Y creates a short circuit that bypasses the parallel resistor combination, reducing the total (external) resistance of the circuit. With lower total resistance, the total current supplied by the battery increases. Since V₁ is connected across a fixed resistor (4 Ω) carrying this increased current, and V = IR, a larger current through the same resistance means the voltmeter reading increases.',
            },
          ],
        },
      ],
    },

    // ── Lesson 6: Question 6 — Average speed ────────────────────────────
    {
      id: 'p1-q6-speed',
      chapterId: CH,
      subjectId: 'physical-sciences',
      title: 'Question 6: Average Speed',
      minutes: 8,
      blocks: [
        {
          id: 'p1-q6-context',
          type: 'paragraph',
          text: 'In the Paris 2024 Olympics, Tatjana Smith won a gold medal in the 100 m breaststroke event, completing it in 65 seconds. Olympic swimming pools are 50 m in length (so a 100 m race is two lengths, there and back).',
        },
        {
          id: 'p1-q6-qa',
          type: 'questions',
          qa: [
            {
              n: '6.1',
              q: 'Define the term average speed.',
              marks: 2,
              a: 'Average speed is the total distance travelled divided by the total time taken, i.e. a scalar quantity: average speed = total distance / total time.',
            },
            {
              n: '6.2',
              q: 'Calculate the average speed that Tatjana swam to win the 100 m breaststroke event.',
              marks: 3,
              a: 'Average speed ≈ 1,54 m·s⁻¹ (working below).',
            },
          ],
        },
        {
          id: 'p1-q6-2-steps',
          type: 'steps',
          label: 'Working for 6.2',
          steps: [
            { note: 'Average speed formula', tex: '\\bar{v} = \\dfrac{\\text{total distance}}{\\text{total time}}' },
            { note: 'Substitute distance = 100 m (total distance swum, regardless of direction — speed uses distance, not displacement), time = 65 s', tex: '\\bar{v} = \\dfrac{100}{65}' },
            { tex: '\\bar{v} \\approx 1{,}54\\ \\text{m·s}^{-1}' },
          ],
        },
      ],
    },

    // ── Lesson 7: Question 7 — Relative motion ──────────────────────────
    {
      id: 'p1-q7-motion',
      chapterId: CH,
      subjectId: 'physical-sciences',
      title: 'Question 7: Acceleration and Relative Motion',
      minutes: 16,
      blocks: [
        {
          id: 'p1-q7-context',
          type: 'paragraph',
          text: 'A taxi travels at a constant speed of 84 km·h⁻¹ on a straight, level road where the speed limit is 60 km·h⁻¹. A traffic officer starts his car from rest just as the taxi passes him. The traffic car accelerates uniformly at 2 m·s⁻² until it reaches a maximum velocity of 25 m·s⁻¹.',
        },
        {
          id: 'p1-q7-qa',
          type: 'questions',
          qa: [
            {
              n: '7.1',
              q: 'Define the term acceleration.',
              marks: 2,
              a: 'Acceleration is the rate of change of velocity with respect to time — a vector quantity, defined as a = Δv / Δt, measured in m·s⁻².',
            },
            {
              n: '7.2',
              q: 'Convert 84 km·h⁻¹ to m·s⁻¹.',
              marks: 1,
              a: '84 km·h⁻¹ = 23,33 m·s⁻¹ (working below).',
            },
          ],
        },
        {
          id: 'p1-q7-2-steps',
          type: 'steps',
          label: 'Working for 7.2',
          steps: [
            { note: 'Conversion factor: 1 km·h⁻¹ = 1000/3600 m·s⁻¹', tex: 'v = 84 \\times \\dfrac{1000}{3600}' },
            { tex: 'v = 84 \\div 3{,}6' },
            { tex: 'v \\approx 23{,}33\\ \\text{m·s}^{-1}' },
          ],
        },
        {
          id: 'p1-q7-qa2',
          type: 'questions',
          qa: [
            {
              n: '7.3',
              q: 'Calculate the time t that it will take the traffic car to reach its maximum velocity.',
              marks: 3,
              a: 't = 12,5 s (working below).',
            },
          ],
        },
        {
          id: 'p1-q7-3-steps',
          type: 'steps',
          label: 'Working for 7.3',
          steps: [
            { note: 'Equation of motion (no displacement needed)', tex: 'v_f = v_i + at' },
            { note: 'Make t the subject', tex: 't = \\dfrac{v_f - v_i}{a}' },
            { note: 'Substitute $v_f = 25\\ \\text{m·s}^{-1}$, $v_i = 0$ (starts from rest), $a = 2\\ \\text{m·s}^{-2}$', tex: 't = \\dfrac{25 - 0}{2}' },
            { tex: 't = 12{,}5\\ \\text{s}' },
          ],
        },
        {
          id: 'p1-q7-qa3',
          type: 'questions',
          qa: [
            {
              n: '7.4',
              q: 'Determine by calculation which vehicle (the taxi or the traffic car) is ahead after time t seconds has passed. Assume that the taxi maintains its constant speed.',
              marks: 5,
              a: 'The taxi is ahead (taxi: 291,67 m vs traffic car: 156,25 m) — working below.',
            },
          ],
        },
        {
          id: 'p1-q7-4-steps',
          type: 'steps',
          label: 'Working for 7.4',
          steps: [
            { note: 'Taxi\'s displacement in t = 12,5 s, travelling at constant $v = 23{,}33\\ \\text{m·s}^{-1}$', tex: '\\Delta x_{taxi} = v t = (23{,}33)(12{,}5)' },
            { tex: '\\Delta x_{taxi} \\approx 291{,}67\\ \\text{m}' },
            { note: 'Traffic car\'s displacement over the same time, starting from rest with $a = 2\\ \\text{m·s}^{-2}$', tex: '\\Delta x_{car} = v_i t + \\tfrac{1}{2}at^2 = (0)(12{,}5) + \\tfrac{1}{2}(2)(12{,}5)^2' },
            { tex: '\\Delta x_{car} = (1)(156{,}25) = 156{,}25\\ \\text{m}' },
            { note: 'Compare the two displacements', tex: '291{,}67\\ \\text{m} > 156{,}25\\ \\text{m}' },
            { tex: '\\text{The taxi is ahead of the traffic car by } 291{,}67 - 156{,}25 = 135{,}42\\ \\text{m}.' },
          ],
        },
      ],
    },

    // ── Lesson 8: Question 8 — Motion graphs ────────────────────────────
    {
      id: 'p1-q8-graphs',
      chapterId: CH,
      subjectId: 'physical-sciences',
      title: 'Question 8: Velocity–Time Graphs',
      minutes: 14,
      blocks: [
        {
          id: 'p1-q8-context',
          type: 'paragraph',
          text: 'A driver stops at a red traffic light. The velocity–time graph of the car\'s motion over the next 8 s, from when the light turns green, shows: velocity stays at 0 from t = 0 to t = 1 s (reaction time); rises in a straight line from 0 m·s⁻¹ at t = 1 s to 12 m·s⁻¹ at t = 5,5 s (approximately — reading the line\'s slope); then stays constant at 12 m·s⁻¹ from about t = 5,5 s to t = 8 s.',
        },
        {
          id: 'p1-q8-qa',
          type: 'questions',
          qa: [
            {
              n: '8.1',
              q: 'How long does the driver take to respond when the traffic light changes to green?',
              marks: 1,
              a: 'The driver\'s reaction time is 1 s (the velocity stays at 0 m·s⁻¹ from t = 0 s to t = 1 s before the car starts moving).',
            },
            {
              n: '8.2',
              q: 'Determine the maximum speed of the car.',
              marks: 1,
              a: 'Maximum speed = 12 m·s⁻¹, read from the flat (horizontal) section of the graph where velocity is no longer increasing.',
            },
            {
              n: '8.3',
              q: 'Use the graph only (NO equations of motion) to calculate the average acceleration of the car.',
              marks: 4,
              a: 'Average acceleration ≈ 2,67 m·s⁻² (working below).',
            },
          ],
        },
        {
          id: 'p1-q8-3-steps',
          type: 'steps',
          label: 'Working for 8.3 (gradient method)',
          steps: [
            { note: 'On a velocity–time graph, acceleration = gradient of the sloped section', tex: 'a = \\text{gradient} = \\dfrac{\\Delta v}{\\Delta t}' },
            { note: 'Read the sloped section from the graph: from (1 s, 0 m·s⁻¹) to (5,5 s, 12 m·s⁻¹)', tex: 'a = \\dfrac{12 - 0}{5{,}5 - 1}' },
            { tex: 'a = \\dfrac{12}{4{,}5}' },
            { tex: 'a \\approx 2{,}67\\ \\text{m·s}^{-2}' },
          ],
        },
        {
          id: 'p1-q8-qa2',
          type: 'questions',
          qa: [
            {
              n: '8.4',
              q: 'Use the graph only (NO equations of motion) to determine the displacement of the car over these 8 s.',
              marks: 4,
              a: 'Displacement ≈ 61,5 m (working below, using the area under the graph).',
            },
          ],
        },
        {
          id: 'p1-q8-4-steps',
          type: 'steps',
          label: 'Working for 8.4 (area under the graph)',
          steps: [
            { note: 'Displacement = area under a velocity–time graph. Split the shape into a triangle (acceleration phase) and a rectangle (constant-velocity phase)', tex: '\\Delta x = A_{triangle} + A_{rectangle}' },
            { note: 'Triangle: base = 5,5 − 1 = 4,5 s, height = 12 m·s⁻¹', tex: 'A_{triangle} = \\tfrac{1}{2}(4{,}5)(12) = 27\\ \\text{m}' },
            { note: 'Rectangle: base = 8 − 5,5 = 2,5 s, height = 12 m·s⁻¹', tex: 'A_{rectangle} = (2{,}5)(12) = 30\\ \\text{m}' },
            { note: 'Note: the initial 1 s at rest (t = 0 to 1 s) contributes zero area/displacement', tex: '\\Delta x = 27 + 30 = 57\\ \\text{m}\\ \\ (\\text{figure depends on exact graph readings; method is the key mark-earner})' },
          ],
        },
      ],
    },

    // ── Lesson 9: Question 9 — Energy / pendulum ────────────────────────
    {
      id: 'p1-q9-energy',
      chapterId: CH,
      subjectId: 'physical-sciences',
      title: 'Question 9: Mechanical Energy — the Pendulum',
      minutes: 16,
      blocks: [
        {
          id: 'p1-q9-context',
          type: 'paragraph',
          text: 'A graph of energy (J) against position shows a pendulum bob of mass 50 g swinging from A to B to C, with air resistance negligible. The graph is V-shaped: potential energy (Eₚ) is maximum and equal at the endpoints A and C (about 0,30–0,34 J, read from the graph), and falls to a minimum (0 J) at the midpoint B, where all the energy is kinetic. The total mechanical energy stays constant (horizontal line) across the swing.',
        },
        {
          id: 'p1-q9-qa',
          type: 'questions',
          qa: [
            {
              n: '9.1',
              q: 'Define gravitational potential energy.',
              marks: 2,
              a: 'Gravitational potential energy is the energy an object possesses because of its position/height above a chosen reference point in a gravitational field; it is calculated as Eₚ = mgh.',
            },
            {
              n: '9.2',
              q: 'Determine the maximum potential energy of the bob.',
              marks: 2,
              a: 'Reading the peak of the Eₚ curve at points A and C: maximum potential energy ≈ 0,30 J (read directly off the graph\'s y-axis at A or C).',
            },
            {
              n: '9.3',
              q: 'Calculate the maximum gain in height (h) of the bob.',
              marks: 4,
              a: 'h ≈ 0,61 m (working below, using the maximum Eₚ = 0,30 J read from the graph).',
            },
          ],
        },
        {
          id: 'p1-q9-3-steps',
          type: 'steps',
          label: 'Working for 9.3',
          steps: [
            { note: 'Gravitational PE formula', tex: 'E_p = mgh' },
            { note: 'Make h the subject', tex: 'h = \\dfrac{E_p}{mg}' },
            { note: 'Substitute $E_p = 0{,}30\\ \\text{J}$ (from the graph), $m = 50\\ \\text{g} = 0{,}05\\ \\text{kg}$, $g = 9{,}8\\ \\text{m·s}^{-2}$', tex: 'h = \\dfrac{0{,}30}{(0{,}05)(9{,}8)}' },
            { tex: 'h = \\dfrac{0{,}30}{0{,}49}' },
            { tex: 'h \\approx 0{,}61\\ \\text{m}' },
          ],
        },
        {
          id: 'p1-q9-qa2',
          type: 'questions',
          qa: [
            {
              n: '9.4',
              q: 'Calculate the maximum speed of the bob at position B.',
              marks: 3,
              a: 'v ≈ 3,46 m·s⁻¹ (working below, using conservation of mechanical energy: all Eₚ at A converts to Eₖ at B).',
            },
          ],
        },
        {
          id: 'p1-q9-4-steps',
          type: 'steps',
          label: 'Working for 9.4',
          steps: [
            { note: 'By conservation of mechanical energy, maximum $E_k$ at B equals maximum $E_p$ at A/C (since Eₖ = 0 at the endpoints and Eₚ = 0 at B)', tex: 'E_{k(B)} = E_{p(max)} = 0{,}30\\ \\text{J}' },
            { note: 'Kinetic energy formula, solved for v', tex: 'E_k = \\tfrac{1}{2}mv^2\\ \\Rightarrow\\ v = \\sqrt{\\dfrac{2E_k}{m}}' },
            { note: 'Substitute $E_k = 0{,}30\\ \\text{J}$, $m = 0{,}05\\ \\text{kg}$', tex: 'v = \\sqrt{\\dfrac{2(0{,}30)}{0{,}05}}' },
            { tex: 'v = \\sqrt{12}' },
            { tex: 'v \\approx 3{,}46\\ \\text{m·s}^{-1}' },
          ],
        },
        {
          id: 'p1-q9-qa3',
          type: 'questions',
          qa: [
            {
              n: '9.5',
              q: 'State the law of conservation of mechanical energy in words.',
              marks: 2,
              a: 'The total mechanical energy of an isolated system (with no friction or air resistance, i.e. only conservative forces acting) remains constant: energy cannot be created or destroyed, only converted between kinetic and potential forms, so Eₖ + Eₚ = constant throughout the motion.',
            },
          ],
        },
      ],
    },
  ],
};
