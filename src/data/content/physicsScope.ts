import type { Chapter } from '@/lib/types';
import { h2, lesson, note, p, type B } from './physKit';

/**
 * Grade 10 Physical Sciences (Physics), Term 4 — copy-and-paste scope for an
 * AI tutor (ChatGPT). Built from the NW November 2024 Paper 1, the handwritten
 * notes and CAPS. One paste for the whole course, or one paste per topic.
 * Plain text only: it is pasted into a chat box, so no TeX.
 */

const CH = 'physics-term4-scope';

const RULES = `ROLE
You are my Grade 10 Physical Sciences (Physics) tutor. I am a South African learner writing the NOVEMBER (end-of-year) EXAM, Paper 1, CAPS curriculum. Teach ONLY what is in the scope below. Do not go into Grade 11/12 content.

HOW TO TEACH ME (follow every time)
1. Work ONE topic at a time, in the order given. Do not jump ahead. Start with Topic 1 unless I say otherwise.
2. For each topic: (a) explain it simply with an everyday example, (b) give the exact CAPS definitions word-for-word in a "LEARN THIS" box, (c) give the formulae with units, (d) do ONE fully worked example, (e) then ask me ONE exam-style question and WAIT for my answer.
3. Mark my answer like a CAPS marker: say what earned marks, what lost marks and why. Then give a memo-style model answer.
4. Only move on when I say "next". If I get something wrong, re-explain a different way and give me a new question.
5. At the end of each topic give a 5-line "MEMORISE" summary.
6. Keep answers short and clear. No long essays. Use simple words.

SOUTH AFRICAN EXAM RULES (always apply)
- Decimal comma: write 9,8 not 9.8. Use a space for thousands: 20 000.
- Always write the formula, substitute with units, then give the answer with a unit. Show every step.
- Use these constants: g = 9,8 m.s^-1 squared; c = 3,0 x 10^8 m.s^-1; h = 6,63 x 10^-34 J.s; charge of one electron qe = -1,6 x 10^-19 C.
- Convert units BEFORE substituting: km/h divided by 3,6 = m/s; cm to m; g to kg; nC to C (x 10^-9); microC to C (x 10^-6).
- "Define" questions need the exact definition. "Explain" questions need a reason, not just the answer. "Use the graph only" means NO equations of motion.
- Vectors need a direction. Scalars do not.
- Mark allocation: roughly 1 mark per point you make.

THE EXAM I AM PREPARING FOR
It looks like the NW November 2024 Grade 10 Paper 1: Question 1 is multiple choice (about 7 questions, 2 marks each) and Questions 2 to 9 are structured, in this order: 2 transverse waves and sound, 3 the electromagnetic spectrum, 4 electrostatics (charge sharing), 5 electric circuits, 6 average speed, 7 acceleration and relative motion (equations of motion), 8 velocity-time graphs, 9 mechanical energy (pendulum).

SCOPE (TOPICS)
`;

const TOPICS: string[] = [
  `TOPIC 1: PULSES AND TRANSVERSE WAVES
Exam link: Q1.1, Q1.2, Q2.1 to Q2.4.2.
Cover:
- A pulse is a single disturbance in a medium. A wave is a continuous periodic disturbance. Waves transfer ENERGY, not matter.
- Transverse wave: particles of the medium move PERPENDICULAR to the direction of propagation.
- Parts of a transverse wave: crest, trough, rest (equilibrium) position, amplitude, wavelength, period, frequency.
- Amplitude: the maximum displacement of a particle from its rest position. Wavelength (lambda, m): the distance between two successive points in phase (e.g. crest to crest). Period (T, s): time for one complete wave to pass a point. Frequency (f, Hz): number of complete waves passing a point per second.
- Principle of superposition: the resultant disturbance at a point is the algebraic sum of the disturbances of the individual pulses. Constructive interference: pulses on the same side of the rest position, amplitude increases. Destructive interference: pulses on opposite sides, amplitude decreases (equal and opposite pulses cancel completely at that moment).
- Formulae: f = 1/T ; T = 1/f ; v = f x lambda.
- Reading a displacement-time or displacement-position graph: read amplitude, period or wavelength straight off the axes. A period is read on a time axis; a wavelength is read on a distance axis.
Exam-style questions to practise: (a) multiple choice on frequency vs period vs wavelength vs amplitude; (b) two pulses of 30 cm and 10 cm, both up, meeting: constructive, 40 cm; (c) "Define transverse wave" (2 marks); (d) read amplitude in cm and convert to m; (e) read period T = 8 s, find f = 1/T, then v = f x lambda with lambda = 0,9 m giving 0,1125 m.s^-1 (5 marks).
Common mistakes: reading cm as m; using the period as the wavelength; forgetting f = 1/T before v = f x lambda; saying waves carry matter.`,

  `TOPIC 2: LONGITUDINAL WAVES AND SOUND
Exam link: Q2.5.1 to Q2.5.4.
Cover:
- Longitudinal wave: particles of the medium move PARALLEL to the direction of propagation. Made of compressions (particles close together, high pressure) and rarefactions (particles far apart, low pressure). Wavelength = distance from one compression to the next compression.
- Sound is a longitudinal wave. It needs a medium (cannot travel through a vacuum). Speed of sound: fastest in solids, slower in liquids, slowest in gases (about 340 m.s^-1 in air).
- Pitch depends on FREQUENCY (higher frequency = higher pitch). Loudness depends on AMPLITUDE (bigger amplitude = louder).
- Hearing range of humans: 20 Hz to 20 000 Hz. Infrasound is below 20 Hz. Ultrasound is ABOVE 20 000 Hz.
- Uses of ultrasound: medical scans (sonar scans of a foetus), breaking up kidney stones, cleaning jewellery, echolocation in bats, depth finding with sonar.
- Oscilloscope traces: a taller trace = larger amplitude = louder; more waves across the same screen = higher frequency = higher pitch. The trace LOOKS transverse but sound is still longitudinal.
Exam-style questions to practise: identify sound as longitudinal (1 mark); choose which trace is louder and give the reason (amplitude); frequency above which sound is ultrasound; one medical use of ultrasound.
Common mistakes: saying sound is transverse; mixing up pitch and loudness; saying sound travels in a vacuum.`,

  `TOPIC 3: ELECTROMAGNETIC (EM) RADIATION
Exam link: Q1.3, Q3.1 to Q3.4.
Cover:
- EM waves are produced by ACCELERATING (oscillating) electric charges. They are TRANSVERSE and need NO medium; they travel through a vacuum at c = 3,0 x 10^8 m.s^-1.
- Dual nature: EM radiation behaves as BOTH a wave (diffraction, interference) AND a stream of particles called photons (photoelectric effect), each photon carrying a packet of energy.
- Order from LOW to HIGH frequency (radio to gamma): Radio, Microwave, Infrared, Visible, Ultraviolet, X-ray, Gamma. Mnemonic: R M I V U X G. From low to high frequency: energy goes UP, wavelength goes DOWN.
- Uses: radio waves (radio and TV), microwaves (cell phones, Wi-Fi, microwave ovens, radar), infrared (remote controls, thermal imaging), visible light (sight, photography), ultraviolet (sterilising, security marks, tanning), X-rays (broken bones, airport scanners), gamma rays (killing cancer cells, sterilising equipment).
- Dangers: UV, X-rays and gamma rays are ionising and can damage cells and cause cancer; the higher the frequency the more dangerous.
- Formulae: c = f x lambda ; E = h x f ; E = h x c / lambda ; h = 6,63 x 10^-34 J.s.
Worked-example styles: E = 4,97 x 10^-14 J, find f = E / h = 7,5 x 10^19 Hz. Photon of microwaves, lambda = 2,1 x 10^-2 m: E = hc/lambda = (6,63 x 10^-34)(3 x 10^8) / (2,1 x 10^-2) = 9,47 x 10^-24 J.
Exam-style questions to practise: how EM waves are generated (1); explain dual nature (2); name radiation used for broken bones (X-rays), Wi-Fi (microwaves), highest energy (gamma rays); photon energy calculation (3).
Common mistakes: forgetting to square or use the right power of ten; mixing frequency and wavelength; saying EM waves need a medium.`,

  `TOPIC 4: ELECTROSTATICS (CHARGE)
Exam link: Q4.1 to Q4.3.
Cover:
- Atom: protons (positive) and neutrons in the nucleus, electrons (negative) outside. ONLY electrons move; protons stay in the nucleus.
- Neutral object: number of protons = number of electrons. Positively charged: LOST electrons (fewer electrons than protons). Negatively charged: GAINED electrons (more electrons than protons).
- Charge Q is measured in coulombs (C). Common units: 1 nC = 10^-9 C; 1 microC = 10^-6 C. Charge of one electron qe = -1,6 x 10^-19 C.
- Law/principle of conservation of charge: the net charge of an ISOLATED system remains constant during any physical process.
- Principle of charge quantisation: the charge on an object is an integer multiple of the charge on one electron, Q = n x qe.
- Conductors allow charge to move through them easily (metals, graphite); insulators do not (plastic, glass, rubber).
- Charging by contact and sharing: two IDENTICAL conducting spheres in contact share their total charge equally, so Q(each, after) = (Q1 + Q2) / 2.
- Formulae: Q = n x qe ; ΔQ = Q(final) - Q(initial) ; n = ΔQ / qe (use the magnitude of qe, then decide the sign yourself).
- Direction of electron flow: electrons move from the more NEGATIVE object to the more POSITIVE object. A sphere whose charge becomes more positive LOST electrons; a sphere whose charge becomes more negative GAINED electrons.
Worked example style: D = -2 nC and E = ? touch; afterwards each = +5 nC. Then (-2 + E)/2 = 5, so E = +12 nC. Charge moved: ΔQ = 5 - (-2) = 7 nC = 7 x 10^-9 C, so n = 7 x 10^-9 / 1,6 x 10^-19 = 4,375 x 10^10 electrons. D's charge rose from -2 to +5 (lost electrons); E's fell from +12 to +5 (gained electrons), so electrons moved FROM D TO E.
Exam-style questions to practise: find an unknown initial charge after sharing; number of electrons transferred; direction of electron transfer (always justify with the before and after charges).
Common mistakes: saying protons move; saying electrons move to the more negative object; forgetting nC to C conversion; using a negative qe and getting a negative n.
NOTE: my handwritten notes had muddled definitions here (for example "charge is where electrons are and are not", and "quantisation is energy charge of electron gain or loss"). Use the CAPS definitions above, not those.`,

  `TOPIC 5: ELECTRIC CIRCUITS
Exam link: Q1.4, Q5.1 to Q5.4.
Cover:
- Potential difference (voltage, V): the work done (energy transferred) per unit charge between two points. V = W / Q. Unit: volt (V = J.C^-1).
- Current (I): the rate of flow of charge. I = Q / Δt. Unit: ampere (A = C.s^-1).
- Resistance (R): the opposition to the flow of current. R = V / I. Unit: ohm.
- Ohm's law: at constant temperature, the current through a conductor is directly proportional to the potential difference across it.
- Resistance of a conductor increases with length and temperature, decreases with thickness (cross-sectional area), and depends on the material.
- Ammeter: measures current, connected in SERIES. Voltmeter: measures potential difference, connected in PARALLEL across the component.
- SERIES: same current everywhere; potential differences ADD; Rs = R1 + R2 + R3.
- PARALLEL: same potential difference across every branch; branch currents ADD; 1/Rp = 1/R1 + 1/R2 (for two resistors Rp = R1R2 / (R1 + R2)).
- Electrical energy: W = V x I x Δt (and W = V x Q).
- Adding more resistors in parallel: total resistance DECREASES and total current from the battery INCREASES. A short circuit (a zero-resistance wire across a component) lets current bypass that component, so total resistance falls and current rises.
- Switch logic (Q1.4): a bulb only lights if there is a COMPLETE path from the battery through it. A switch in the main line must be closed for everything; a switch in one branch only controls that branch.
Worked-example styles: Q = I x Δt = 3 x 120 = 360 C. V = W / (I x Δt) = 5 400 / (3 x 120) = 15 V.
Exam-style questions to practise: define potential difference (2); total resistance of a series-parallel network; charge through an ammeter in a given time; find voltage from energy, current and time; "What happens to the voltmeter reading if a wire is connected across X and Y?" with a no-calculation explanation (short circuit, total resistance decreases, current increases, V = IR across the fixed resistor increases).
Common mistakes: adding currents in series; adding voltages in parallel; forgetting to invert at the end of 1/Rp; connecting the ammeter in parallel.
CAUTION: when I give you a circuit from a picture, make sure the resistor arrangement (which are in series and which in parallel) is stated clearly before calculating.`,

  `TOPIC 6: DESCRIBING MOTION
Exam link: Q1.5, Q1.6, Q6.1, Q6.2, Q7.1, Q7.2.
Cover:
- Scalars (magnitude only): distance, speed, time, mass. Vectors (magnitude AND direction): displacement, velocity, acceleration.
- Distance: the total length of the path travelled. Displacement: the change in position, the straight-line distance from start to finish in a specific direction. Resultant vector: a single vector that has the same effect as two or more vectors acting together.
- Average speed = total distance / total time. Average velocity = displacement / time (the rate of change of displacement). Acceleration = change in velocity / time (the rate of change of velocity), a = (vf - vi) / Δt, unit m.s^-2.
- Frames of reference and a positive direction: choose one direction as positive and keep it consistent; velocities in the opposite direction are negative.
- Unit conversion: km.h^-1 divided by 3,6 = m.s^-1 (84 km.h^-1 = 23,33 m.s^-1); m.s^-1 times 3,6 = km.h^-1.
- Head-to-tail vector addition: the resultant goes from the tail of the first vector to the head of the last.
Worked-example styles: 100 m swum in 65 s gives average speed = 100 / 65 = 1,54 m.s^-1 (speed uses DISTANCE; a 100 m race in a 50 m pool ends where it started, so displacement is 0 m).
Exam-style questions to practise: multiple choice on displacement vs distance; define average speed (2) and acceleration (2); calculate average speed; convert km.h^-1 to m.s^-1; choose the correct vector relationship from a diagram.
Common mistakes: using speed when displacement is asked; leaving a velocity in km.h^-1 inside an equation; forgetting direction on a vector answer.`,

  `TOPIC 7: EQUATIONS OF MOTION (CONSTANT ACCELERATION)
Exam link: Q7.3, Q7.4.
Cover:
- Use these ONLY when acceleration is constant, with a positive direction chosen:
  vf = vi + a x Δt
  Δx = vi x Δt + 1/2 x a x Δt^2
  vf^2 = vi^2 + 2 x a x Δx
  Δx = ((vi + vf) / 2) x Δt
- Method: (1) draw a quick sketch, (2) list what is given (vi, vf, a, Δt, Δx) and what is wanted, (3) choose the equation that does NOT contain the quantity you neither have nor want, (4) substitute with units, (5) answer with a unit.
- "Starts from rest" means vi = 0. "Constant speed" means a = 0 so Δx = v x Δt.
- Comparing two vehicles: find the displacement of each after the same time and compare; the larger displacement is ahead.
Worked example: a traffic car starts from rest with a = 2 m.s^-2 up to 25 m.s^-1. Time: t = (25 - 0) / 2 = 12,5 s. A taxi at 84 km.h^-1 = 23,33 m.s^-1 for the same 12,5 s travels 23,33 x 12,5 = 291,67 m. The car travels 0 + 1/2 x 2 x 12,5^2 = 156,25 m. The taxi is ahead (by 135,42 m).
Exam-style questions to practise: find time to reach a speed; find displacement of an accelerating vehicle; decide which of two vehicles is ahead (5 marks); stopping distance; a ball thrown up (use g = 9,8 m.s^-2 downward, so a = -9,8 if up is positive).
Common mistakes: not converting km.h^-1; using the equations when acceleration is not constant; mixing the taxi's constant-speed formula with the accelerating formula; forgetting to square the time.`,

  `TOPIC 8: GRAPHS OF MOTION
Exam link: Q8.1 to Q8.4.
Cover:
- Position-time (x-t) graph: GRADIENT = velocity. Straight horizontal line = at rest. Straight sloped line = constant velocity. Curve = changing velocity.
- Velocity-time (v-t) graph: GRADIENT = acceleration. AREA under the graph = displacement. Horizontal line = constant velocity. Sloped line = constant acceleration. Line on the time axis = at rest.
- Acceleration-time (a-t) graph: AREA = change in velocity.
- Areas: rectangle = base x height; triangle = 1/2 x base x height; trapezium = 1/2 x (sum of parallel sides) x height. Split a v-t graph into these shapes.
- "Use the graph only" means find gradient and area from the graph, with NO equations of motion.
- Reaction time: the period at the start when velocity is still 0.
- Always read the scale carefully, use the units of the axes, and show the points you used for the gradient.
Worked-example style: graph with 0 m.s^-1 until 1 s, rising straight to 12 m.s^-1 at 5,5 s, then constant 12 m.s^-1 until 8 s. Reaction time = 1 s. Maximum speed = 12 m.s^-1. Acceleration = gradient = 12 / (5,5 - 1) = 2,67 m.s^-2. Displacement = triangle (1/2 x 4,5 x 12) + rectangle (2,5 x 12).
Exam-style questions to practise: read reaction time and maximum speed; gradient for acceleration; area for displacement; describe the motion in each section; sketch the x-t, v-t and a-t graphs for a given description.
Common mistakes: using the equations when told not to; forgetting the rest period has zero area; reading time from the wrong axis; using the whole height of a graph for a triangle.`,

  `TOPIC 9: MECHANICAL ENERGY
Exam link: Q1.7, Q9.1 to Q9.4.
Cover:
- Gravitational potential energy (Ep): the energy an object has because of its position (height) above a reference point. Ep = m x g x h, unit joule (J).
- Kinetic energy (Ek): the energy an object has because of its motion. Ek = 1/2 x m x v^2.
- Mechanical energy: the sum of gravitational potential energy and kinetic energy, Em = Ep + Ek.
- Law of conservation of mechanical energy: the total mechanical energy of an isolated system (no friction or air resistance) remains constant. So Em at the top = Em at the bottom, and the loss in Ep equals the gain in Ek.
- Pendulum or swing: at the highest points Ek = 0 and Ep is maximum; at the lowest point Ep = 0 (reference level) and Ek is maximum.
- Doubling the speed makes Ek four times bigger; doubling the mass only doubles Ek.
- Always use mass in kg (g divided by 1 000) and height in m. Use g = 9,8 m.s^-2.
- Finding speed from height: m x g x h = 1/2 x m x v^2, so v = square root of (2 x g x h) (mass cancels).
Worked example style: bob of mass 50 g = 0,05 kg with maximum Ep = 0,30 J: h = Ep / (m x g) = 0,30 / (0,05 x 9,8) = 0,61 m. Maximum speed at the bottom: Ek = 0,30 J so v = square root of (2 x 0,30 / 0,05) = 3,46 m.s^-1.
Exam-style questions to practise: define gravitational potential energy (2); read maximum Ep from a graph; maximum height; speed at the lowest point; "State the law of conservation of mechanical energy"; which quantity is the same everywhere in the swing.
Common mistakes: forgetting 50 g = 0,05 kg; not squaring v; saying energy is "used up" instead of converted.`,

  `TOPIC 10: EXAM TECHNIQUE AND MIXED REVISION
Cover:
- A full mixed practice paper in the style of NW November 2024 Paper 1 (Question 1 multiple choice, then Questions 2 to 9), about 100 marks, 2 hours, with a memo at the end. Do NOT show the memo until I have answered.
- Command words: define (exact definition), state (short answer), explain (reason), calculate (formula, substitution, units), determine (read from graph or calculate), name (one word), identify (choose), compare, describe.
- Marks: write one clear point per mark. Always include units. Never leave a calculation without the formula line.
- Time plan: about 1 minute per mark. Do the multiple choice first, then the topics I am strongest at.
- Run a "weak spots" check: ask me 10 quick-fire definition questions from all nine topics, mark them, and list what I must revise again.`,
];

const PAPERS = `PAST PAPERS THIS SCOPE IS BASED ON (Grade 10 Physics Paper 1, 100 marks, 2 hours)
- North West November 2024 (from my photos), Gauteng Provincial November 2023, November 2022 and November 2021, with their memos.
- Every paper has the same shape: Question 1 multiple choice (7 to 10 questions, 2 marks each), then structured questions on waves, EM radiation, electrostatics, circuits, vectors and motion, graphs, and mechanical energy.
- Electric circuits and electrostatics appear in EVERY paper. Waves, motion and energy appear every year. Mechanical energy always asks for a definition, a calculation and the conservation law.
- Instruction on every paper: "Show ALL formulae and substitutions. Round off final numerical answers to a minimum of TWO decimal places." A data sheet is supplied.
- DATA SHEET (given in the exam, but learn it): g = 9,8 m.s^-2; c = 3,0 x 10^8 m.s^-1; h = 6,63 x 10^-34 J.s; qe = -1,6 x 10^-19 C; electron mass 9,11 x 10^-31 kg. Formulae: vf = vi + a.t ; x = vi.t + 1/2 a.t^2 ; vf^2 = vi^2 + 2a.x ; x = ((vf + vi)/2).t ; Ep = mgh ; Ek = 1/2 mv^2 ; Em = Ek + Ep ; v = f.lambda ; T = 1/f ; E = hf = hc/lambda ; n = Q/e ; Q = (Q1 + Q2)/2 ; Q = I.t ; Rs = R1 + R2 ; 1/Rp = 1/R1 + 1/R2 ; V = W/Q. Definitions are NOT on the data sheet, so I must memorise them.
`;

const EXTRA: string[] = [
  `ALSO ASKED IN PAST PAPERS (Gauteng 2021 to 2023): label points on a wave drawing as crest, trough, wavelength or amplitude; name two points that are IN PHASE (a whole number of wavelengths apart, e.g. crest to crest) and two that are OUT OF PHASE; define "superposition" (the algebraic sum of two disturbances that occupy the same space at the same time); if A to F spans 2 wavelengths use that to find lambda; find the time for the wave to move between two points using T = 1/f (30 Hz gives T = 0,03 s); amplitude from a drawing: half the total height (20 cm tall wave = 10 cm = 0,1 m); wavelength read from the labelled length (2 m); then T = 1/1,5 = 0,67 s and v = f x lambda = 1,5 x 2 = 3 m.s^-1; v = 30 x 4 = 120 m.s^-1; multiple choice: if the speed is constant and wavelength decreases, frequency increases; two complete waves per second with 8 cm between crests gives v = 16 cm.s^-1.`,
  `ALSO ASKED IN PAST PAPERS: v = f x lambda for sound: 340 m.s^-1 and lambda = 60 cm = 0,6 m gives f = 566,67 Hz (convert cm to m!); radio waves differ from sound waves because radio waves are electromagnetic (and transverse and faster); "number of sound vibrations per second" = frequency.`,
  `ALSO ASKED IN PAST PAPERS: define photon (a quantum/packet of EM radiation whose energy is proportional to its frequency); name the type of radiation at each labelled place on the spectrum bar (radio, microwave, infrared, visible, ultraviolet, X-ray, gamma) and name THREE waves with lower frequency than UV in order of INCREASING frequency (microwave, infrared, visible); penetrating ability increases with frequency, so gamma > X-ray > UV > visible > infrared > microwave > radio, and gamma rays have the greatest penetrating ability and highest energy; photon energy from frequency: E = hf = 6,63 x 10^-34 x 3,2 x 10^10 = 2,12 x 10^-23 J; photon wavelength in NANOMETRES: 700 nm = 700 x 10^-9 m, E = hc / lambda = 2,84 x 10^-19 J, then f = E / h = 4,29 x 10^14 Hz; one medical use of X-rays (look for fractured bones).`,
  `ALSO ASKED IN PAST PAPERS: "Explain what is meant by a neutral object" (equal numbers of protons and electrons, so no net charge); "Briefly explain how a neutral sphere is attracted to a charged one" (POLARISATION: the charged sphere repels or attracts the electrons in the neutral sphere so one side becomes negative and the other positive; the opposite charge on the NEAR side is closer, so the attraction is stronger than the repulsion); a negatively charged ruler attracts small pieces of paper: the papers can be positive OR neutral; if a sphere has an excess of 20 electrons then Q = 20 x (-1,6 x 10^-19) = -3,2 x 10^-18 C; a sphere with +1,6 x 10^-17 C means 100 electrons were REMOVED (n = 1,6 x 10^-17 / 1,6 x 10^-19 = 100); identical spheres touching: net charge of the system = Q1 + Q2 (net charge is conserved), each sphere after = (Q1 + Q2) / 2; spheres of +5 nC and -2 nC give net charge +3 nC and +1,5 nC each; electrons moved = (change in charge on ONE sphere) / qe, e.g. 5 - 1,5 = 3,5 nC so n = 3,5 x 10^-9 / 1,6 x 10^-19 = 2,19 x 10^10 electrons; identical spheres after contact have equal charge, so if A has q then B has q; direction: electrons move from the sphere that was more negative (excess electrons) to the sphere that was more positive (deficit); the quantisation definition used in memos: "the charge on an object is an integer multiple of the charge of one electron".`,
  `ALSO ASKED IN PAST PAPERS: define "voltage" (the work done per unit charge) and "emf" (the work done per unit charge BY THE BATTERY / source); cells in series ADD their emfs (four 1,5 V cells give emf = 6 V); a bulb in a parallel group of resistors: 1/Rp = 1/3 + 1/6 gives Rp = 2 ohm; total resistance = series part + parallel part (8 + 2 = 10 ohm); voltmeter in the parallel part reads V(total) minus the voltage over the series resistor (6 - 4,8 = 1,2 V); I = V / R then Q = I.t (0,6 A for 20 s = 12 C; 4 A for 2 minutes = 4 x 120 = 480 C: CONVERT MINUTES TO SECONDS); V across parallel part = emf minus V over the series resistor (24 - 6 = 18 V); three resistors 6, 4, 3 ohm in parallel gives 1,33 ohm; with 2,67 ohm in series total = 4 ohm; MCQ: V = W / Q so Q = 400 000 / 17 400 = 22,99 C; 1 volt = 1 J.C^-1; "adding more resistors in parallel DECREASES the total resistance and INCREASES the total current"; if one bulb in the circuit "fuses" (open circuit in a series path) the total resistance INCREASES so the total current DECREASES; a short circuit does the opposite.`,
  `ALSO ASKED IN PAST PAPERS: "define vector" (a physical quantity with both magnitude and direction); "define resultant vector" (a single vector that has the same effect as a number of vectors acting together); resultant of two forces in opposite directions: subtract (5 N right and 2 N friction left gives 3 N to the right), in the same direction: add; position relative to a REFERENCE POINT with a chosen positive direction (a school 250 m to the left of Mathe's house when right is positive is -250 m; 500 m to the left is -500 m); scalar pairs (time and distance); a learner walks 200 m and back home in 4 minutes: distance = 400 m, displacement = 0 m, average speed = 400 / 240 = 1,67 m.s^-1 (4 minutes = 240 s), average velocity = 0; "differentiate between average speed and average velocity" (speed = total distance / total time; velocity = displacement / time, rate of change of position); "displacement is the change in position, final minus initial position"; displacement from a position-diagram: x = final position minus initial position (33 - 12 = 21 m East); athlete in equal distances in equal times = constant velocity; Peter walks 25 m to a street and back: distance 50 m, displacement 0 m, displacement is a vector because it has magnitude and direction.`,
  `ALSO ASKED IN PAST PAPERS: convert first (135 km.h^-1 / 3,6 = 37,5 m.s^-1); car B from rest at 1,5 m.s^-2 for 11,5 s: vf = 0 + 1,5 x 11,5 = 17,25 m.s^-1, then x = 0 + 1/2 x 1,5 x 11,5^2 = 99,19 m; braking car: given vi = 37,5, x = 40 m and the time, use x = vi.t + 1/2 a.t^2 to get a negative acceleration; or vi, vf = 0 and x: vf^2 = vi^2 + 2a.x; a negative acceleration = deceleration (slowing down in the positive direction); "determine the velocity" means include direction if given.`,
  `ALSO ASKED IN PAST PAPERS: v-t graph with points A to F: describe each section (AB: starts from rest, constant positive acceleration / uniformly accelerated; CD: constant velocity, zero acceleration; EF: at rest); acceleration of a section with a negative gradient, e.g. D to E from 40 m.s^-1 to 0 in 10 s: a = (0 - 40)/(60 - 50) = -4 m.s^-2, i.e. 4 m.s^-2 in the opposite direction (deceleration); which section has the greatest acceleration: the STEEPEST gradient; gradient of a displacement-time graph = velocity; area under a v-t graph = displacement; a velocity-time graph for an object initially moving east: negative velocity means west; acceleration from graph: a = (v2 - v1) / (t2 - t1), e.g. (-10 - 10) / (7 - 3) = -5 m.s^-2, i.e. 5 m.s^-2 west; horizontal line at 10 m.s^-1 east = constant velocity of 10 m.s^-1 east; a graph where the line is flat between t1 and t2 means constant velocity.`,
  `ALSO ASKED IN PAST PAPERS: "prove with calculations that the mechanical energy at A is 588 J": Em = Ep + Ek = mgh + 1/2 mv^2 = (2)(9,8)(30) + 0 = 588 J (at rest at the top so Ek = 0); speed at B by conservation: Em(A) = Em(B), 588 = (2)(9,8)(10) + 1/2 (2) v^2, v = 19,80 m.s^-1; mechanical energy at C EQUAL TO at B because there is no friction; kinetic energy of a 180 g cricket ball at 30 m.s^-1 is 1/2 (0,18)(30)^2 = 81 J; speed for twice that energy: 162 = 1/2 (0,18) v^2 gives v = 42,43 m.s^-1; dropped from the same height, mass 2m gives kinetic energy 2E on impact; at half the height the mechanical energy is still the same (M); potential energy is smallest at the lowest point; trolley and boy on a frictionless ramp of 25 degrees: total mass 45 kg, start 0,2 m above the end, Em = 45 x 9,8 x 0,2 = 88,2 J, then v from conservation, then the ramp LENGTH = height / sin 25 degrees; "name and explain the principle you used" (the law of conservation of mechanical energy: the total mechanical energy of an isolated system stays constant when only gravity does work, so Ep lost = Ek gained).`,
  ``,
];

function topicHeader(): string {
  return `I am revising ONE topic only. Same rules as before: teach it simply, give the exact CAPS definitions, the formulae with units, one worked example, then ask me one exam question and wait for my answer. Use the South African decimal comma. Stay inside this scope.\n\n`;
}

const FULL_TOPICS = TOPICS.map((t, i) => (EXTRA[i] ? t + '\n' + EXTRA[i] : t));

const fullText = RULES + PAPERS + '\n' + FULL_TOPICS.join('\n\n') + '\n\nSTART NOW with Topic 1, step (a). Do not teach the other topics until I say "next".';

const scopeBlock = (caption: string, text: string): B => ({ type: 'prompt', caption, text });

export const PHYSICS_SCOPE: Chapter = {
  id: CH,
  subjectId: 'physical-sciences',
  title: 'Term 4 Physics — ChatGPT Scope (copy & paste)',
  summary: 'Ready-made scope text for working through Physics topic by topic with ChatGPT: rules, definitions, formulae, exam question types and common mistakes.',
  category: 'Term 4 Study Notes',
  lessons: [
    lesson(CH, 'p4s-how', 'How to use this', 3, [
      p('Open ChatGPT, press Copy on the whole-course scope below, paste it and send. It then teaches you one topic at a time, asks you an exam question after each, marks your answer, and only moves on when you say "next".'),
      h2('Two ways to use it'),
      p('1. Whole course: one paste. Best for a long study session. Use "Full scope" (next lesson).'),
      p('2. One topic at a time: paste only the topic you want. Use "Topic by topic" (the lesson after). Paste the rules once at the start of a new chat, then each topic.'),
      note('Built from four Grade 10 November papers (NW 2024, Gauteng 2023, 2022 and 2021, with their memos), your handwritten notes and CAPS. The electrostatics definitions are the corrected ones, not the ones in the original notes. Always check ChatGPT\'s answers against your Key Points chapter: if it disagrees, trust the Key Points.'),
    ]),
    lesson(CH, 'p4s-full', 'Full scope (one paste)', 4, [
      scopeBlock('Whole course: rules + all 10 topics', fullText),
    ]),
    lesson(CH, 'p4s-rules', 'Rules only (paste first in a new chat)', 2, [
      scopeBlock('Tutor rules and exam format', RULES.replace('SCOPE (TOPICS)\n', '') + PAPERS + '\nReply "ready" and wait. I will paste one topic at a time.'),
    ]),
    lesson(
      CH,
      'p4s-topics',
      'Topic by topic',
      10,
      FULL_TOPICS.map((t, i): B => scopeBlock(t.split('\n')[0].replace(/^TOPIC \d+: /, `${i + 1}. `), topicHeader() + t)),
    ),
  ],
};
