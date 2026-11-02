import type { Chapter } from '@/lib/types';
import { acronym, checklist, defs, diagram, formula, h2, h3, lesson, note, p, qs, r, solution, ul } from './physKit';

/**
 * Grade 10 Physical Sciences (Physics), Term 4 — full study notes.
 *
 * Built from the learner's own handwritten notes (waves, electrostatics,
 * electric circuits, motion and energy) and the CAPS Grade 10 outcomes, with
 * the definitions re-checked against CAPS wording. Where the notes needed
 * fixing (mainly electrostatics) the lesson says so in a "Fix your notes" box.
 */

const CH = 'physics-term4-full';

export const PHYSICS_FULL: Chapter = {
  id: CH,
  subjectId: 'physical-sciences',
  title: 'Term 4 Physics — Full Study Notes',
  summary:
    'Every Term 4 Physics topic explained step by step: waves and sound, the EM spectrum, electrostatics, electric circuits, motion, graphs and energy — with diagrams and worked examples.',
  category: 'Term 4 Study Notes',
  lessons: [
    // ── 0. Exam map ─────────────────────────────────────────────────────
    lesson(CH, 'p4f-map', 'Start here: what the exam tests', 6, [
      note('Written for Grade 10, CAPS. Use this chapter to learn, then the Condensed chapter to revise fast, then Key Points & Definitions the night before. The checklist below maps every question in the practice exam to a lesson, so nothing is missed.'),
      checklist([
        { id: 'm1', text: 'Q1 Multiple choice', detail: 'Frequency, interference, photon energy, circuit switches, displacement, vectors, kinetic energy — lessons 1–9.', goTo: { subjectId: 'physical-sciences', chapterId: 'phys-sci-p1-nw-2024' } },
        { id: 'm2', text: 'Q2 Transverse waves and sound', detail: 'Lessons 1 and 2: amplitude, period, wavelength, v = fλ, loudness, ultrasound.' },
        { id: 'm3', text: 'Q3 Electromagnetic spectrum', detail: 'Lesson 3: how EM waves are made, dual nature, uses, E = hf = hc/λ.' },
        { id: 'm4', text: 'Q4 Electrostatics — charge sharing', detail: 'Lesson 4: Q = nqₑ, conservation of charge, sharing between identical spheres.' },
        { id: 'm5', text: 'Q5 Electric circuits', detail: 'Lesson 5: potential difference, current, resistance, series and parallel, short circuits.' },
        { id: 'm6', text: 'Q6 Average speed', detail: 'Lesson 6: distance, displacement, speed, velocity.' },
        { id: 'm7', text: 'Q7 Acceleration and relative motion', detail: 'Lessons 6 and 7: unit conversion, equations of motion, comparing two vehicles.' },
        { id: 'm8', text: 'Q8 Velocity–time graphs', detail: 'Lesson 8: gradient = acceleration, area = displacement.' },
        { id: 'm9', text: 'Q9 Mechanical energy — the pendulum', detail: 'Lesson 9: Eₚ, Eₖ, conservation of mechanical energy.' },
        { id: 'm10', text: 'Rugby-player and train-and-car questions', detail: 'Lessons 6–8: distance vs displacement, average velocity, reading a v–t graph, relative motion.' },
      ]),
      h2('Formulae and constants the exam gives you'),
      p('The data sheet provides g = 9,8 m·s⁻², c = 3,0 × 10⁸ m·s⁻¹, h = 6,63 × 10⁻³⁴ J·s, e = −1,6 × 10⁻¹⁹ C and the four equations of motion. You must still KNOW every definition and the other formulae (v = fλ, V = W/Q, I = Q/Δt, Eₚ = mgh and so on).'),
      h2('The scientific method (for any practical question)'),
      acronym('QHAMRC', 'the steps of an investigation', [
        { letter: 'Q', stands: 'Question / aim', note: 'What are we trying to find out?' },
        { letter: 'H', stands: 'Hypothesis', note: 'A testable prediction.' },
        { letter: 'A', stands: 'Apparatus', note: 'What you use.' },
        { letter: 'M', stands: 'Method', note: 'Steps, changing ONE variable at a time.' },
        { letter: 'R', stands: 'Results', note: 'Recorded measurements.' },
        { letter: 'C', stands: 'Conclusion', note: 'Does the data support the hypothesis?' },
      ]),
      defs([
        { term: 'Independent variable', meaning: 'The variable you deliberately change.' },
        { term: 'Dependent variable', meaning: 'The variable you measure; it responds to the change.' },
        { term: 'Controlled variable', meaning: 'A variable kept the same so the test is fair.' },
      ]),
    ]),

    // ── 1. Transverse pulses and waves ──────────────────────────────────
    lesson(CH, 'p4f-waves', '1. Pulses and transverse waves', 16, [
      h2('Pulses'),
      defs([
        { term: 'Pulse', meaning: 'A single disturbance that moves through a medium.' },
        { term: 'Medium', meaning: 'The material the disturbance travels through (a rope, water, air).' },
        { term: 'Transverse pulse / wave', meaning: 'The particles of the medium move PERPENDICULAR (at right angles) to the direction the pulse or wave travels.' },
        { term: 'Longitudinal wave', meaning: 'The particles of the medium move PARALLEL to the direction the wave travels.' },
        { term: 'Amplitude', meaning: 'The maximum displacement of a particle from its rest (equilibrium) position.' },
      ]),
      p('A wave transfers ENERGY, not matter. A cork on water bobs up and down as the wave passes; it does not travel along with the wave.'),
      h2('Anatomy of a transverse wave'),
      diagram('wave-anatomy', 'A transverse wave. A crest is above the rest position, a trough below. Crest and trough have the same size but lie on opposite sides.'),
      defs([
        { term: 'Crest', meaning: 'The highest point: maximum displacement ABOVE the rest position.' },
        { term: 'Trough', meaning: 'The lowest point: maximum displacement BELOW the rest position.' },
        { term: 'Wavelength (λ)', meaning: 'The distance between two successive points that are in phase, e.g. crest to crest or trough to trough. Measured in metres (m).' },
        { term: 'Period (T)', meaning: 'The time taken for one complete wave (cycle) to pass a point. Measured in seconds (s).' },
        { term: 'Frequency (f)', meaning: 'The number of complete waves (cycles) that pass a point in one second. Measured in hertz (Hz).' },
      ]),
      note('A full wave (one cycle) is a full crest AND a full trough. A full cycle contains one upward pulse and one downward pulse.'),
      h2('Frequency, period and wave speed'),
      formula('Frequency', r`f = \dfrac{\text{number of waves}}{\text{time}}`),
      formula('Period and frequency are inverses', r`T = \dfrac{1}{f} \qquad f = \dfrac{1}{T}`),
      formula('Wave speed', r`v = f\lambda`),
      solution('Worked example: a wave passes a point 5 times in 2 s, wavelength 0,3 m', [
        ['Frequency = number of waves ÷ time', r`f = \dfrac{5}{2} = 2{,}5\ \text{Hz}`],
        ['Period is the inverse', r`T = \dfrac{1}{f} = \dfrac{1}{2{,}5} = 0{,}4\ \text{s}`],
        ['Wave speed', r`v = f\lambda = (2{,}5)(0{,}3) = 0{,}75\ \text{m·s}^{-1}`],
      ]),
      note('Always write the unit. Frequency in Hz, period in s, wavelength in m, speed in m·s⁻¹. A graph of displacement against TIME gives you the period; a graph against DISTANCE gives you the wavelength.'),
      h2('Superposition and interference of pulses'),
      defs([
        { term: 'Principle of superposition', meaning: 'When two or more pulses overlap, the resultant disturbance at that point is the ALGEBRAIC SUM of the disturbances of the individual pulses.' },
        { term: 'Constructive interference', meaning: 'Pulses on the SAME side of the rest position meet: the resultant amplitude is larger than either pulse.' },
        { term: 'Destructive interference', meaning: 'Pulses on OPPOSITE sides of the rest position meet: the resultant amplitude is smaller than the larger pulse (or zero if they are equal).' },
      ]),
      diagram('superposition', 'Pulses pass through each other unchanged: after overlapping, each carries on exactly as before.'),
      p('Use signs: upward is positive, downward negative. A 3 cm upward pulse meeting a 2 cm upward pulse gives +3 + (+2) = +5 cm (constructive). A 3 cm upward pulse meeting a 2 cm downward pulse gives +3 + (−2) = +1 cm (destructive).'),
    ]),

    // ── 2. Longitudinal waves and sound ─────────────────────────────────
    lesson(CH, 'p4f-sound', '2. Longitudinal waves and sound', 14, [
      h2('Longitudinal waves'),
      diagram('longitudinal-wave', 'In a longitudinal wave the particles vibrate backwards and forwards along the direction the wave travels.'),
      defs([
        { term: 'Compression', meaning: 'A region where the particles are CLOSEST together (high pressure).' },
        { term: 'Rarefaction', meaning: 'A region where the particles are FURTHEST apart (low pressure).' },
        { term: 'Wavelength (λ) of a longitudinal wave', meaning: 'The distance between two successive compressions or two successive rarefactions.' },
      ]),
      p('The wave quantities and formulae are the same as for transverse waves: f = number of waves ÷ time, T = time ÷ number of waves, T = 1/f, v = fλ. Frequency and period are inverses: if f = 0,5 Hz then T = 2 s.'),
      solution('Worked example: 1,5 waves occupy 3 m; 2 waves pass in 4 s', [
        ['Wavelength = distance ÷ number of waves', r`\lambda = \dfrac{3}{1{,}5} = 2\ \text{m}`],
        ['Frequency', r`f = \dfrac{2}{4} = 0{,}5\ \text{Hz}`],
        ['Period', r`T = \dfrac{4}{2} = 2\ \text{s}`],
        ['Speed', r`v = f\lambda = (0{,}5)(2) = 1\ \text{m·s}^{-1}`],
      ]),
      h2('Sound'),
      ul([
        'Sound is a LONGITUDINAL wave: it is made of compressions and rarefactions. It needs a medium and cannot travel through a vacuum.',
        'Sound travels fastest in solids, slower in liquids, slowest in gases. In a denser, more tightly packed medium the particles pass the vibration on more quickly.',
        'Sound also travels faster when the medium is warmer.',
        'An oscilloscope displays sound as a transverse-looking graph, but the sound wave itself is still longitudinal.',
      ]),
      h3('Pitch, loudness and tone'),
      defs([
        { term: 'Pitch', meaning: 'How high or low a note sounds. It depends on the FREQUENCY: higher frequency = higher pitch.' },
        { term: 'Loudness', meaning: 'How loud a note sounds. It depends on the AMPLITUDE: larger amplitude = louder sound.' },
        { term: 'Tone (quality)', meaning: 'What makes two instruments playing the same note sound different. It depends on the shape of the wave.' },
      ]),
      diagram('pitch-loudness', 'Compare each trace with the original: B has a bigger amplitude (louder), C has more waves in the same time (higher pitch).'),
      h3('Ranges of sound'),
      diagram('sound-ranges'),
      defs([
        { term: 'Infrasound', meaning: 'Sound with a frequency below 20 Hz; humans cannot hear it.' },
        { term: 'Audible sound', meaning: 'Sound between about 20 Hz and 20 000 Hz.' },
        { term: 'Ultrasound', meaning: 'Sound with a frequency above 20 000 Hz.' },
      ]),
      ul([
        'Uses of ultrasound: scanning a foetus (sonar-type imaging of soft tissue); breaking up kidney stones; cleaning delicate objects; ships and bats use echoes to find objects.',
        'Echo: sound reflected off a surface. Distance = speed × time ÷ 2, because the sound travels there AND back.',
      ]),
    ]),

    // ── 3. Electromagnetic radiation ────────────────────────────────────
    lesson(CH, 'p4f-em', '3. Electromagnetic radiation', 14, [
      h2('What are electromagnetic waves?'),
      ul([
        'They are produced by ACCELERATING (oscillating) electric charges. The changing electric field creates a changing magnetic field, and the two keep each other going.',
        'They are TRANSVERSE waves.',
        'They need NO medium: they travel through a vacuum.',
        'All of them travel at the same speed in a vacuum: c = 3,0 × 10⁸ m·s⁻¹.',
      ]),
      defs([
        { term: 'Photon', meaning: 'A packet (quantum) of electromagnetic energy.' },
        { term: 'Dual nature of EM radiation', meaning: 'EM radiation behaves like a WAVE (it has wavelength and frequency, and shows interference and diffraction) AND like a stream of PARTICLES called photons.' },
      ]),
      h2('The spectrum'),
      diagram('em-spectrum', 'Moving from radio waves to gamma rays: frequency and photon energy go UP, wavelength goes DOWN.'),
      acronym('RMIVUXG', 'the order of the spectrum from lowest to highest frequency', [
        { letter: 'R', stands: 'Radio waves' },
        { letter: 'M', stands: 'Microwaves' },
        { letter: 'I', stands: 'Infrared' },
        { letter: 'V', stands: 'Visible light' },
        { letter: 'U', stands: 'Ultraviolet' },
        { letter: 'X', stands: 'X-rays' },
        { letter: 'G', stands: 'Gamma rays' },
      ]),
      defs([
        { term: 'Radio waves', meaning: 'Communication: radio and TV broadcasts. Lowest frequency, longest wavelength.' },
        { term: 'Microwaves', meaning: 'Cellphones, Wi-Fi, microwave ovens, radar.' },
        { term: 'Infrared', meaning: 'Heat radiation; remote controls, thermal imaging, night vision.' },
        { term: 'Visible light', meaning: 'The only part we can see.' },
        { term: 'Ultraviolet', meaning: 'Sterilising water and equipment; makes vitamin D; too much causes skin cancer and eye damage.' },
        { term: 'X-rays', meaning: 'Imaging bones and teeth; high energy, so exposure must be limited.' },
        { term: 'Gamma rays', meaning: 'Treating cancer, sterilising food and medical equipment. Highest frequency and energy, most penetrating and most dangerous.' },
      ]),
      note('UV, X-rays and gamma rays are IONISING: their photons carry enough energy to damage living cells. The higher the frequency, the greater the danger.'),
      h2('Calculations'),
      formula('Speed of light', r`c = f\lambda`),
      formula('Energy of a photon', r`E = hf = \dfrac{hc}{\lambda}`),
      p('Frequency and energy go together: double the frequency and the photon energy doubles. Wavelength and energy go opposite ways: shorter wavelength means more energy.'),
      solution('Worked example: a photon of green light, λ = 5,0 × 10⁻⁷ m', [
        ['Frequency from c = fλ', r`f = \dfrac{c}{\lambda} = \dfrac{3{,}0\times10^{8}}{5{,}0\times10^{-7}} = 6{,}0\times10^{14}\ \text{Hz}`],
        ['Energy from E = hf', r`E = (6{,}63\times10^{-34})(6{,}0\times10^{14}) = 3{,}98\times10^{-19}\ \text{J}`],
      ]),
    ]),

    // ── 4. Electrostatics ───────────────────────────────────────────────
    lesson(CH, 'p4f-electro', '4. Electrostatics', 20, [
      note('Fix your notes. Your page said "charge: where electrons are and where electrons are not" and wrote the quantisation principle with "total energy charge" and "the electron gain or loss". Both were muddled. The corrected definitions are in the boxes below, and the same fixes are in the Key Points chapter.'),
      h2('What is charge?'),
      defs([
        { term: 'Electric charge', meaning: 'A basic property of matter. Protons carry positive charge, electrons carry negative charge. An object\'s charge comes from an imbalance between its protons and electrons. Symbol Q, unit coulomb (C).' },
        { term: 'Neutral object', meaning: 'Has equal numbers of protons and electrons (nₚ = nₑ), so its net charge is zero.' },
        { term: 'Positively charged object', meaning: 'Has LOST electrons, so it has more protons than electrons (nₚ > nₑ).' },
        { term: 'Negatively charged object', meaning: 'Has GAINED electrons, so it has more electrons than protons (nₚ < nₑ).' },
      ]),
      diagram('atoms'),
      note('Only electrons move. Protons are locked in the nucleus, so objects become charged by gaining or losing ELECTRONS. Like charges repel; unlike charges attract.'),
      defs([
        { term: 'Conductor', meaning: 'A material that allows charge to move through it easily (metals, graphite).' },
        { term: 'Insulator', meaning: 'A material that does NOT allow charge to move through it easily (plastic, rubber, glass, dry air).' },
      ]),
      h2('Two principles you must be able to state'),
      defs([
        { term: 'Principle of conservation of charge', meaning: 'The net (total) charge of an isolated system remains constant during any physical process. Charge is never created or destroyed, only transferred.' },
        { term: 'Principle of charge quantisation', meaning: 'Charge is quantised: the charge on any object is an INTEGER MULTIPLE of the charge on one electron, so charge exists only in whole "packets" of 1,6 × 10⁻¹⁹ C.' },
      ]),
      formula('Quantisation of charge', r`Q = nq_e`),
      ul([
        'Q = charge on the object (C).',
        'n = the whole number of excess (or missing) electrons.',
        'qₑ = the charge of one electron = −1,6 × 10⁻¹⁹ C. When you find n, use the MAGNITUDE 1,6 × 10⁻¹⁹ and decide the sign afterwards from whether electrons were gained (negative) or lost (positive).',
        'One coulomb is the charge of about 6,25 × 10¹⁸ electrons.',
      ]),
      p('Prefixes: milli (m) = 10⁻³, micro (µ) = 10⁻⁶, nano (n) = 10⁻⁹. So 8 µC = 8 × 10⁻⁶ C and 2,5 nC = 2,5 × 10⁻⁹ C.'),
      solution('Worked example: how many electrons were gained to give an object a charge of −8 × 10⁻⁶ C?', [
        ['Quantisation formula, magnitude of qₑ', r`Q = nq_e`],
        ['Substitute', r`8\times10^{-6} = n\,(1{,}6\times10^{-19})`],
        ['Solve', r`n = \dfrac{8\times10^{-6}}{1{,}6\times10^{-19}} = 5\times10^{13}\ \text{electrons}`],
        ['The charge is negative, so these electrons were GAINED', r`Q = -8\ \mu\text{C}`],
      ]),
      h2('Charge sharing between identical conductors'),
      p('When two identical conducting spheres touch, charge flows until it is shared equally, and the total charge is conserved. Add the two charges (with signs) and divide by two.'),
      formula('Charge after contact (identical spheres)', r`Q = \dfrac{Q_1 + Q_2}{2}`),
      formula('Change in charge: always final minus initial', r`\Delta Q = Q_f - Q_i`),
      diagram('charge-sharing', 'Sphere A (−8 µC) touches sphere B (+2 µC). Net charge = −6 µC, shared equally: −3 µC each.', { qa: '−8 µC', qb: '+2 µC', qf: '−3 µC', flow: 'electrons move from A to B' }),
      solution('Worked example: A = −8 µC and B = +2 µC touch, then separate', [
        ['Net charge before', r`Q_{net} = (-8) + (+2) = -6\ \mu\text{C}`],
        ['Share equally', r`Q = \dfrac{-8+2}{2} = -3\ \mu\text{C on each sphere}`],
        ['Change on A', r`\Delta Q_A = (-3)-(-8) = +5\ \mu\text{C}`],
        ['Electrons that moved', r`n = \dfrac{5\times10^{-6}}{1{,}6\times10^{-19}} = 3{,}1\times10^{13}`],
      ]),
      note('Which way do electrons move? Always from the object with MORE electrons (the more negative one) towards the more positive one. Here A (−8 µC) is more negative than B (+2 µC), so electrons go from A to B. Check your answer with the sign of ΔQ: an object whose ΔQ is negative GAINED electrons; positive ΔQ means it LOST electrons.'),
    ]),

    // ── 5. Electric circuits ────────────────────────────────────────────
    lesson(CH, 'p4f-circuits', '5. Electric circuits', 20, [
      h2('The three key quantities'),
      defs([
        { term: 'Potential difference (V)', meaning: 'The work done (energy transferred) per unit charge between two points. V = W/Q. Unit: volt (V), where 1 V = 1 J·C⁻¹.' },
        { term: 'Current (I)', meaning: 'The rate of flow of charge. I = Q/Δt. Unit: ampere (A), where 1 A = 1 C·s⁻¹.' },
        { term: 'Resistance (R)', meaning: 'The opposition to the flow of electric current. R = V/I. Unit: ohm (Ω), where 1 Ω = 1 V·A⁻¹.' },
      ]),
      formula('Potential difference', r`V = \dfrac{W}{Q}`),
      formula('Current', r`I = \dfrac{Q}{\Delta t}`),
      formula('Resistance (Ohm\'s law form)', r`R = \dfrac{V}{I}`),
      solution('Worked examples', [
        ['A battery uses 15 J to move 3 C through a circuit. Voltage?', r`V = \dfrac{W}{Q} = \dfrac{15}{3} = 5\ \text{V}`],
        ['A 12 V battery expends 30 J. Charge moved?', r`Q = \dfrac{W}{V} = \dfrac{30}{12} = 2{,}5\ \text{C}`],
        ['A current of 2,5 A flows for 120 s. Charge?', r`Q = I\Delta t = (2{,}5)(120) = 300\ \text{C}`],
      ]),
      h2('What affects the resistance of a wire?'),
      ul([
        'Length: a longer wire has MORE resistance.',
        'Thickness (cross-sectional area): a thicker wire has LESS resistance.',
        'Temperature: a hotter metal wire has MORE resistance.',
        'Type of material: copper conducts better than nichrome, so has less resistance.',
      ]),
      p('Ohm\'s law: at constant temperature the current through a conductor is directly proportional to the potential difference across it, so V/I (the resistance) stays constant.'),
      h2('Meters'),
      ul([
        'An AMMETER measures current. It is connected in SERIES and has very low resistance.',
        'A VOLTMETER measures potential difference. It is connected in PARALLEL across the component and has very high resistance.',
      ]),
      h2('Series and parallel'),
      diagram('circuits'),
      defs([
        { term: 'Resistors in series', meaning: 'One path for the current. The current is the same everywhere; the potential differences add up to the supply voltage. Rₜ = R₁ + R₂ + …' },
        { term: 'Resistors in parallel', meaning: 'Branches. Every branch has the same potential difference; the branch currents add up to the total current. 1/Rₜ = 1/R₁ + 1/R₂ + …' },
      ]),
      ul([
        'Adding a resistor in SERIES increases the total resistance and decreases the total current.',
        'Adding a resistor in PARALLEL decreases the total resistance (more paths) and increases the total current.',
        'Removing a resistor from a parallel circuit does the reverse: total resistance goes UP and total current goes DOWN.',
        'The total resistance of parallel resistors is always smaller than the smallest single resistor.',
      ]),
      solution('Worked example: 6 Ω and 3 Ω in parallel, connected to a 12 V battery', [
        ['Total resistance (two resistors: product ÷ sum)', r`R_t = \dfrac{(6)(3)}{6+3} = 2\ \Omega`],
        ['Total current', r`I = \dfrac{V}{R_t} = \dfrac{12}{2} = 6\ \text{A}`],
        ['Current in the 6 Ω branch (same 12 V across it)', r`I_1 = \dfrac{12}{6} = 2\ \text{A}`],
        ['Current in the 3 Ω branch', r`I_2 = \dfrac{12}{3} = 4\ \text{A}\quad(2+4=6\ \checkmark)`],
      ]),
      solution('Worked example: the same resistors in series, 12 V battery', [
        ['Total resistance', r`R_t = 6+3 = 9\ \Omega`],
        ['Current (same in both)', r`I = \dfrac{12}{9} = 1{,}33\ \text{A}`],
        ['Potential difference across each', r`V_6 = (1{,}33)(6) = 8\ \text{V},\quad V_3 = (1{,}33)(3) = 4\ \text{V}\quad(8+4=12\ \checkmark)`],
      ]),
      h2('Short circuits and switches'),
      ul([
        'A wire of negligible resistance connected across a component gives the current an easy path around it. The component\'s potential difference drops to (almost) zero, and the total resistance falls so the total current rises.',
        'An OPEN switch breaks the circuit: no current flows in that path. A CLOSED switch completes it. For a bulb on its own branch to light, the main switch AND that branch\'s switch must both be closed.',
      ]),
    ]),

    // ── 6. Motion in one dimension ──────────────────────────────────────
    lesson(CH, 'p4f-motion', '6. Describing motion', 18, [
      h2('Scalars and vectors'),
      defs([
        { term: 'Scalar', meaning: 'A physical quantity with magnitude (size) only, e.g. distance, speed, time, mass, energy.' },
        { term: 'Vector', meaning: 'A physical quantity with BOTH magnitude and direction, e.g. displacement, velocity, acceleration, force.' },
        { term: 'Resultant vector', meaning: 'A single vector that has the same effect as two or more vectors acting together.' },
        { term: 'Position', meaning: 'Where an object is, measured from a chosen reference point (origin), with a direction.' },
        { term: 'Frame of reference', meaning: 'The reference point (and direction) from which position and motion are measured.' },
      ]),
      diagram('vector-addition', 'To add vectors, place them head-to-tail; the resultant joins the tail of the first to the head of the last.'),
      p('Choose a positive direction first (for example east or up) and keep to it: vectors that point the opposite way take a negative sign.'),
      h2('Distance and displacement'),
      diagram('distance-displacement', 'The distance follows the path walked; the displacement is the straight line from start to finish, with direction.'),
      defs([
        { term: 'Distance', meaning: 'The total length of the path travelled. A scalar; unit metre (m).' },
        { term: 'Displacement', meaning: 'The change in position: the straight-line distance from the starting point to the finishing point, in a specific direction. A vector; Δx = xf − xi.' },
      ]),
      h2('Speed and velocity'),
      defs([
        { term: 'Average speed', meaning: 'The total distance travelled divided by the total time taken. A scalar.' },
        { term: 'Average velocity', meaning: 'The rate of change of displacement: displacement divided by the time taken. A vector.' },
        { term: 'Acceleration', meaning: 'The rate of change of velocity: the change in velocity divided by the time taken. A vector; unit m·s⁻².' },
      ]),
      formula('Average speed', r`\text{average speed} = \dfrac{\text{total distance}}{\text{total time}}`),
      formula('Average velocity', r`v = \dfrac{\Delta x}{\Delta t}`),
      formula('Acceleration', r`a = \dfrac{\Delta v}{\Delta t} = \dfrac{v_f - v_i}{\Delta t}`),
      solution('Worked example: walk 40 m east then 30 m north in 25 s', [
        ['Distance', r`40+30 = 70\ \text{m}`],
        ['Displacement (Pythagoras)', r`\Delta x = \sqrt{40^2+30^2} = 50\ \text{m},\ 36{,}9^\circ\ \text{north of east}`],
        ['Average speed', r`\dfrac{70}{25} = 2{,}8\ \text{m·s}^{-1}`],
        ['Average velocity', r`\dfrac{50}{25} = 2\ \text{m·s}^{-1}\ \text{at 36,9° north of east}`],
      ]),
      note('A change in direction counts as a change in velocity, even when the speed stays constant. If acceleration points opposite to the velocity the object is slowing down (deceleration).'),
      h3('Unit conversion'),
      solution('km·h⁻¹ ↔ m·s⁻¹', [
        ['Divide by 3,6 to go from km·h⁻¹ to m·s⁻¹', r`84\ \text{km·h}^{-1} = \dfrac{84}{3{,}6} = 23{,}3\ \text{m·s}^{-1}`],
        ['Multiply by 3,6 to go the other way', r`20\ \text{m·s}^{-1} = 20\times3{,}6 = 72\ \text{km·h}^{-1}`],
      ]),
    ]),

    // ── 7. Equations of motion ──────────────────────────────────────────
    lesson(CH, 'p4f-equations', '7. Equations of motion', 18, [
      p('These four equations apply ONLY when the acceleration is CONSTANT and the motion is in a straight line. All four are on your data sheet.'),
      formula('1', r`v_f = v_i + a\Delta t`),
      formula('2', r`\Delta x = v_i\Delta t + \tfrac{1}{2}a\Delta t^2`),
      formula('3', r`v_f^2 = v_i^2 + 2a\Delta x`),
      formula('4', r`\Delta x = \left(\dfrac{v_i + v_f}{2}\right)\Delta t`),
      defs([
        { term: 'vᵢ and v_f', meaning: 'Initial and final velocity (m·s⁻¹).' },
        { term: 'a', meaning: 'Acceleration (m·s⁻²).' },
        { term: 'Δt', meaning: 'Time interval (s).' },
        { term: 'Δx', meaning: 'Displacement (m).' },
      ]),
      h2('How to solve any motion problem'),
      ul([
        'Draw a quick sketch and choose a positive direction.',
        'List what you know: vᵢ, v_f, a, Δt, Δx (use signs). "From rest" means vᵢ = 0. "Comes to rest" means v_f = 0. A free-falling object has a = g = 9,8 m·s⁻² downwards.',
        'Choose the equation that contains the three knowns and the one unknown (the missing quantity is the one it leaves out).',
        'Substitute with units, solve, and state the answer with its unit and direction.',
      ]),
      solution('Worked example: a car accelerates uniformly from rest at 2 m·s⁻² for 8 s', [
        ['Known: vᵢ = 0, a = 2, Δt = 8', r`v_f = v_i + a\Delta t = 0 + (2)(8) = 16\ \text{m·s}^{-1}`],
        ['Displacement', r`\Delta x = v_i\Delta t + \tfrac{1}{2}a\Delta t^2 = 0 + \tfrac{1}{2}(2)(8)^2 = 64\ \text{m}`],
      ]),
      solution('Worked example: a car at 20 m·s⁻¹ brakes at 4 m·s⁻² until it stops', [
        ['Take forward as positive, so a = −4 and v_f = 0', r`v_f^2 = v_i^2 + 2a\Delta x`],
        ['Substitute', r`0 = 20^2 + 2(-4)\Delta x`],
        ['Solve', r`\Delta x = \dfrac{400}{8} = 50\ \text{m}`],
      ]),
      h2('Relative motion: two vehicles'),
      p('To decide which of two vehicles is ahead (or whether one catches the other), find each vehicle\'s displacement after the SAME time and compare. The train-and-car and taxi-and-traffic-car questions are done this way.'),
      solution('Worked example: a truck travels at a constant 15 m·s⁻¹. A car starts from rest beside it and accelerates at 3 m·s⁻² for 6 s. Who is ahead?', [
        ['Truck (constant velocity, a = 0)', r`\Delta x = v\Delta t = (15)(6) = 90\ \text{m}`],
        ['Car (from rest)', r`\Delta x = \tfrac{1}{2}a\Delta t^2 = \tfrac{1}{2}(3)(6)^2 = 54\ \text{m}`],
        ['Compare', r`\text{The truck is ahead by } 90-54 = 36\ \text{m}`],
      ]),
      note('For a long train and a car overtaking, remember the car must travel the train\'s length MORE than the train does before it is level with the front. Use displacement of the car = displacement of the train + the length.'),
    ]),

    // ── 8. Motion graphs ────────────────────────────────────────────────
    lesson(CH, 'p4f-graphs', '8. Graphs of motion', 16, [
      diagram('motion-graphs', 'Top row: constant velocity. Bottom row: constant acceleration from rest.'),
      defs([
        { term: 'Position–time graph', meaning: 'The GRADIENT gives the velocity. A straight line means constant velocity; a horizontal line means the object is at rest; a curve means the velocity is changing.' },
        { term: 'Velocity–time graph', meaning: 'The GRADIENT gives the acceleration. The AREA between the graph and the time axis gives the displacement.' },
        { term: 'Acceleration–time graph', meaning: 'The AREA under the graph gives the change in velocity.' },
      ]),
      h2('Reading a velocity–time graph'),
      ul([
        'Horizontal line above the axis: constant velocity (acceleration zero).',
        'Straight line sloping up: constant positive acceleration. Sloping down: constant negative acceleration (slowing down, if the velocity is still positive).',
        'Line on the time axis: at rest.',
        'Area above the axis is displacement in the positive direction; area below the axis is displacement in the negative direction.',
        'Where a graph crosses the time axis, the object momentarily stops and reverses direction.',
      ]),
      solution('Worked example: v–t graph. At rest for 2 s, then speeds up uniformly to 10 m·s⁻¹ by 6 s, then constant 10 m·s⁻¹ until 10 s', [
        ['Average acceleration from 2 s to 6 s (gradient)', r`a = \dfrac{\Delta v}{\Delta t} = \dfrac{10-0}{6-2} = 2{,}5\ \text{m·s}^{-2}`],
        ['Displacement 2–6 s: area of a triangle', r`\tfrac{1}{2}(4)(10) = 20\ \text{m}`],
        ['Displacement 6–10 s: area of a rectangle', r`(4)(10) = 40\ \text{m}`],
        ['Total displacement over the 10 s', r`0 + 20 + 40 = 60\ \text{m}`],
      ]),
      note('When a question says "use the graph only", do NOT use the equations of motion. Use gradient for acceleration and area for displacement, and show the areas you calculated.'),
      h3('Describing the motion in words'),
      p('Use a pattern: "For the first 4 s the player accelerates uniformly from rest. From 4 s to 10 s the velocity is constant. From 10 s to 13 s the player decelerates uniformly to rest." State the velocity, whether it is constant or changing, and the time range.'),
    ]),

    // ── 9. Energy ───────────────────────────────────────────────────────
    lesson(CH, 'p4f-energy', '9. Mechanical energy', 16, [
      defs([
        { term: 'Gravitational potential energy (Eₚ)', meaning: 'The energy an object has because of its position (height) relative to a chosen reference point.' },
        { term: 'Kinetic energy (Eₖ)', meaning: 'The energy an object has because of its motion.' },
        { term: 'Mechanical energy (Eₘ)', meaning: 'The sum of the gravitational potential energy and the kinetic energy: Eₘ = Eₚ + Eₖ.' },
        { term: 'Principle of conservation of mechanical energy', meaning: 'The total mechanical energy in an isolated system (with no friction or other non-conservative forces) remains constant.' },
      ]),
      formula('Gravitational potential energy', r`E_p = mgh`),
      formula('Kinetic energy', r`E_k = \tfrac{1}{2}mv^2`),
      formula('Mechanical energy', r`E_m = E_p + E_k`),
      p('Energy is measured in joules (J). Mass must be in kg, height in m, speed in m·s⁻¹, and g = 9,8 m·s⁻². Eₚ is relative to a reference level you choose: the lowest point is usually h = 0.'),
      diagram('pendulum', 'At the top of the swing all energy is potential; at the bottom all of it is kinetic. The total never changes (no friction).'),
      solution('Worked example: a 0,5 kg pendulum bob is released from a height of 0,2 m above its lowest point', [
        ['Maximum potential energy (at the top, where v = 0)', r`E_p = mgh = (0{,}5)(9{,}8)(0{,}2) = 0{,}98\ \text{J}`],
        ['At the bottom Eₚ = 0, so all of it is kinetic', r`E_{m,top} = E_{m,bottom} \Rightarrow 0{,}98 = \tfrac{1}{2}(0{,}5)v^2`],
        ['Solve', r`v = \sqrt{\dfrac{2(0{,}98)}{0{,}5}} = 1{,}98\ \text{m·s}^{-1}`],
      ]),
      solution('Worked example: a 2 kg ball is dropped from 5 m. Speed just before landing?', [
        ['Mechanical energy at the top (v = 0)', r`E_m = mgh = (2)(9{,}8)(5) = 98\ \text{J}`],
        ['All kinetic at the bottom', r`\tfrac{1}{2}(2)v^2 = 98 \Rightarrow v = 9{,}9\ \text{m·s}^{-1}`],
      ]),
      ul([
        'Doubling the mass doubles Eₖ. Doubling the velocity makes Eₖ FOUR times bigger, because velocity is squared.',
        'As an object falls, Eₚ decreases and Eₖ increases by the same amount; as it rises the opposite happens.',
        'If friction or air resistance acts, some mechanical energy is changed into heat and the mechanical energy is NOT conserved.',
      ]),
      note('To apply conservation of mechanical energy write Eₘ at point A = Eₘ at point B, i.e. (Eₚ + Eₖ)ᴀ = (Eₚ + Eₖ)ʙ, then cancel what is zero (Eₖ = 0 when at rest, Eₚ = 0 at the reference level).'),
    ]),

    // ── 10. Quick questions ─────────────────────────────────────────────
    lesson(CH, 'p4f-practice', '10. Test yourself', 12, [
      p('Try each question first, then reveal the model answer.'),
      qs([
        { n: '1', q: 'Define frequency.', marks: 2, a: 'The number of complete waves (cycles) that pass a point in one second.' },
        { n: '2', q: 'Two pulses, 4 cm upward and 3 cm downward, meet. State the type of interference and the resultant amplitude.', marks: 3, a: 'Destructive interference. Resultant = (+4) + (−3) = +1 cm (1 cm upward).' },
        { n: '3', q: 'Which has the higher energy: a photon of X-rays or of microwaves? Explain.', marks: 2, a: 'X-rays. They have the higher frequency (and shorter wavelength), and E = hf, so a higher frequency means more energy.' },
        { n: '4', q: 'State the principle of conservation of charge.', marks: 2, a: 'The net charge of an isolated system remains constant during any physical process.' },
        { n: '5', q: 'A sphere has a charge of +4,8 × 10⁻¹⁸ C. How many electrons has it lost?', marks: 3, a: 'n = Q/qₑ = (4,8 × 10⁻¹⁸)/(1,6 × 10⁻¹⁹) = 30 electrons lost (positive charge means electrons were lost).' },
        { n: '6', q: 'Two identical spheres with charges +6 nC and −2 nC touch and are separated. What is the charge on each?', marks: 3, a: 'Q = (Q₁ + Q₂)/2 = (6 + (−2))/2 = +2 nC on each sphere.' },
        { n: '7', q: 'Define potential difference.', marks: 2, a: 'The work done (energy transferred) per unit charge between two points.' },
        { n: '8', q: 'Three 6 Ω resistors are connected in parallel. What is the total resistance?', marks: 3, a: '1/Rₜ = 1/6 + 1/6 + 1/6 = 3/6, so Rₜ = 2 Ω.' },
        { n: '9', q: 'Define displacement.', marks: 2, a: 'The change in position: the straight-line distance from the starting point to the finishing point in a specific direction.' },
        { n: '10', q: 'A car accelerates from 5 m·s⁻¹ to 20 m·s⁻¹ in 6 s. Calculate its acceleration.', marks: 3, a: 'a = (v_f − vᵢ)/Δt = (20 − 5)/6 = 2,5 m·s⁻² in the direction of motion.' },
        { n: '11', q: 'State the law of conservation of mechanical energy in words.', marks: 2, a: 'The total mechanical energy (Eₚ + Eₖ) in an isolated system, with no friction or other non-conservative forces, remains constant.' },
        { n: '12', q: 'A 1 200 kg car moves at 15 m·s⁻¹. Calculate its kinetic energy.', marks: 3, a: 'Eₖ = ½mv² = ½(1 200)(15)² = 135 000 J.' },
      ]),
    ]),
  ],
};
