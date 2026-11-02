import type { Chapter } from '@/lib/types';
import { acronym, defs, formula, h2, lesson, note, r, ul } from './physKit';

/**
 * Grade 10 Physical Sciences (Physics), Term 4 — key things to remember:
 * every definition and law in CAPS wording, the formulae, units and the usual
 * mistakes. The electrostatics definitions here replace the muddled versions
 * in the original handwritten notes.
 */

const CH = 'physics-term4-keypoints';

export const PHYSICS_KEY_POINTS: Chapter = {
  id: CH,
  subjectId: 'physical-sciences',
  title: 'Term 4 Physics — Key Points & Definitions',
  summary: 'Every definition, law, formula and unit you can be asked for, in the exact wording to learn, plus the mistakes to avoid.',
  category: 'Term 4 Study Notes',
  lessons: [
    lesson(CH, 'p4k-defs-waves', 'Definitions: waves, sound and light', 6, [
      defs([
        { term: 'Pulse', meaning: 'A single disturbance in a medium.' },
        { term: 'Transverse wave', meaning: 'A wave in which the particles of the medium move perpendicular to the direction of propagation of the wave.' },
        { term: 'Longitudinal wave', meaning: 'A wave in which the particles of the medium move parallel to the direction of propagation of the wave.' },
        { term: 'Amplitude', meaning: 'The maximum displacement of a particle from its rest (equilibrium) position.' },
        { term: 'Wavelength', meaning: 'The distance between two successive points in phase (e.g. crest to crest).' },
        { term: 'Period', meaning: 'The time taken for one complete wave to pass a point.' },
        { term: 'Frequency', meaning: 'The number of complete waves passing a point in one second.' },
        { term: 'Principle of superposition', meaning: 'The resultant disturbance at a point is the algebraic sum of the disturbances of the individual pulses.' },
        { term: 'Constructive interference', meaning: 'Pulses on the same side of the rest position meet and give a larger amplitude.' },
        { term: 'Destructive interference', meaning: 'Pulses on opposite sides meet and give a smaller amplitude.' },
        { term: 'Compression / rarefaction', meaning: 'The region where particles are closest together / furthest apart.' },
        { term: 'Pitch / loudness', meaning: 'Pitch depends on frequency; loudness depends on amplitude.' },
        { term: 'Ultrasound', meaning: 'Sound with a frequency above 20 000 Hz.' },
        { term: 'Dual nature of EM radiation', meaning: 'EM radiation behaves both as a wave and as a stream of particles (photons).' },
      ]),
    ]),
    lesson(CH, 'p4k-defs-electro', 'Definitions: electrostatics (corrected)', 6, [
      note('These replace the definitions in your handwritten notes. Mistakes fixed: charge is NOT "where electrons are and are not"; the quantisation principle is about CHARGE being a whole-number multiple of the electron charge (not "energy charge" or "electron gain or loss"); n is the number of excess or missing ELECTRONS.'),
      defs([
        { term: 'Electric charge', meaning: 'A property of matter, positive (protons) or negative (electrons), measured in coulombs (C). A charged object has an imbalance of protons and electrons.' },
        { term: 'Neutral', meaning: 'Equal numbers of protons and electrons.' },
        { term: 'Positively charged', meaning: 'Has lost electrons: more protons than electrons.' },
        { term: 'Negatively charged', meaning: 'Has gained electrons: more electrons than protons.' },
        { term: 'Principle of conservation of charge', meaning: 'The net charge of an isolated system remains constant during any physical process.' },
        { term: 'Principle of charge quantisation', meaning: 'The charge on an object is an integer multiple of the charge of an electron: Q = nqₑ.' },
        { term: 'Conductor', meaning: 'A material that allows charge to move through it easily.' },
        { term: 'Insulator', meaning: 'A material that does not allow charge to move through it easily.' },
      ]),
      ul([
        'qₑ = −1,6 × 10⁻¹⁹ C. About 6,25 × 10¹⁸ electrons make 1 C.',
        'Only electrons move; protons stay in the nucleus.',
        'Identical spheres in contact share charge equally: Q = (Q₁ + Q₂) ÷ 2.',
        'ΔQ = Q_final − Q_initial. Negative ΔQ means electrons gained.',
        'Electrons flow from the more negative object towards the more positive one.',
      ]),
    ]),
    lesson(CH, 'p4k-defs-circuits', 'Definitions: circuits, motion and energy', 7, [
      defs([
        { term: 'Potential difference', meaning: 'The work done (energy transferred) per unit charge between two points.' },
        { term: 'Current', meaning: 'The rate of flow of charge.' },
        { term: 'Resistance', meaning: 'The opposition to the flow of electric current.' },
        { term: 'Ohm\'s law', meaning: 'At constant temperature, the current through a conductor is directly proportional to the potential difference across it.' },
        { term: 'Scalar', meaning: 'A quantity with magnitude only.' },
        { term: 'Vector', meaning: 'A quantity with magnitude and direction.' },
        { term: 'Resultant vector', meaning: 'A single vector with the same effect as two or more vectors acting together.' },
        { term: 'Distance', meaning: 'The total length of the path travelled.' },
        { term: 'Displacement', meaning: 'The change in position: the straight-line distance from start to finish, in a specific direction.' },
        { term: 'Average speed', meaning: 'Total distance divided by total time.' },
        { term: 'Average velocity', meaning: 'The rate of change of displacement.' },
        { term: 'Acceleration', meaning: 'The rate of change of velocity.' },
        { term: 'Gravitational potential energy', meaning: 'The energy an object has because of its position relative to a reference point.' },
        { term: 'Kinetic energy', meaning: 'The energy an object has because of its motion.' },
        { term: 'Mechanical energy', meaning: 'The sum of gravitational potential energy and kinetic energy.' },
        { term: 'Law of conservation of mechanical energy', meaning: 'The total mechanical energy of an isolated system (no friction) remains constant.' },
      ]),
    ]),
    lesson(CH, 'p4k-formulae', 'Formulae, units and constants', 6, [
      h2('Waves and EM radiation'),
      formula('Frequency, period, speed', r`f = \dfrac{1}{T}\qquad v = f\lambda\qquad c = f\lambda`),
      formula('Photon energy', r`E = hf = \dfrac{hc}{\lambda}`),
      h2('Electrostatics'),
      formula('Charge', r`Q = nq_e\qquad Q_{after} = \dfrac{Q_1+Q_2}{2}\qquad \Delta Q = Q_f-Q_i`),
      h2('Circuits'),
      formula('Circuit quantities', r`V = \dfrac{W}{Q}\qquad I = \dfrac{Q}{\Delta t}\qquad R = \dfrac{V}{I}`),
      formula('Series and parallel', r`R_s = R_1+R_2\qquad \dfrac{1}{R_p} = \dfrac{1}{R_1}+\dfrac{1}{R_2}`),
      h2('Motion'),
      formula('Speed, velocity, acceleration', r`v = \dfrac{\Delta x}{\Delta t}\qquad a = \dfrac{v_f-v_i}{\Delta t}`),
      formula('Equations of motion', r`v_f = v_i + a\Delta t\quad \Delta x = v_i\Delta t+\tfrac12a\Delta t^2\quad v_f^2 = v_i^2+2a\Delta x\quad \Delta x = \dfrac{v_i+v_f}{2}\Delta t`),
      h2('Energy'),
      formula('Energy', r`E_p = mgh\qquad E_k = \tfrac12mv^2\qquad E_m = E_p+E_k`),
      defs([
        { term: 'Constants', meaning: 'g = 9,8 m·s⁻²; c = 3,0 × 10⁸ m·s⁻¹; h = 6,63 × 10⁻³⁴ J·s; qₑ = −1,6 × 10⁻¹⁹ C.' },
        { term: 'Units', meaning: 'Hz (frequency), s (period), m (wavelength), C (charge), V = J·C⁻¹, A = C·s⁻¹, Ω = V·A⁻¹, m·s⁻¹ (velocity), m·s⁻² (acceleration), J (energy).' },
        { term: 'Conversions', meaning: 'km·h⁻¹ ÷ 3,6 = m·s⁻¹. µ = 10⁻⁶, n = 10⁻⁹, m = 10⁻³.' },
      ]),
    ]),
    lesson(CH, 'p4k-remember', 'Remember: memory aids and common mistakes', 5, [
      acronym('RMIVUXG', 'EM spectrum, low to high frequency', [
        { letter: 'R', stands: 'Radio' },
        { letter: 'M', stands: 'Microwave' },
        { letter: 'I', stands: 'Infrared' },
        { letter: 'V', stands: 'Visible' },
        { letter: 'U', stands: 'Ultraviolet' },
        { letter: 'X', stands: 'X-ray' },
        { letter: 'G', stands: 'Gamma' },
      ]),
      h2('Mistakes that lose marks'),
      ul([
        'Forgetting units, or mixing them up (cm instead of m, km·h⁻¹ instead of m·s⁻¹).',
        'Saying "speed" when the question asks for velocity or displacement: vectors need a direction.',
        'Using the equations of motion when the question says "use the graph only".',
        'Using a negative sign for qₑ when finding n: use its magnitude, then decide the sign of the charge.',
        'Saying electrons move to the more NEGATIVE object: they go to the more positive one.',
        'Saying ultrasound is a transverse wave: all sound is longitudinal.',
        'Saying EM waves need a medium: they do not.',
        'Confusing loudness (amplitude) with pitch (frequency).',
        'Not squaring v in Eₖ = ½mv².',
        'Adding currents in a series circuit: in series the current is the same; in parallel the potential difference is the same.',
        'Giving only the answer to an "explain" question: always add the reason.',
      ]),
    ]),
  ],
};
