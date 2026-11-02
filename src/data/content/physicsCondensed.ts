import type { Chapter } from '@/lib/types';
import { diagram, formula, h2, lesson, note, p, r, ul } from './physKit';

/**
 * Grade 10 Physical Sciences (Physics), Term 4 — condensed revision.
 * One short lesson per topic: the ideas, the formulae and the one diagram
 * that matters. The long explanations live in the Full Study Notes chapter.
 */

const CH = 'physics-term4-condensed';

export const PHYSICS_CONDENSED: Chapter = {
  id: CH,
  subjectId: 'physical-sciences',
  title: 'Term 4 Physics — Condensed Revision',
  summary: 'The whole Term 4 Physics course on a few short pages per topic: the ideas, the formulae and the key diagram.',
  category: 'Term 4 Study Notes',
  lessons: [
    lesson(CH, 'p4c-waves', 'Waves and sound', 5, [
      diagram('wave-anatomy'),
      ul([
        'Transverse: particles move perpendicular to the wave. Longitudinal: parallel to the wave.',
        'Amplitude = maximum displacement from rest. Wavelength λ = distance between successive points in phase. Period T = time for one wave. Frequency f = waves per second (Hz).',
        'Waves carry energy, not matter.',
        'Superposition: resultant = algebraic sum. Same side = constructive; opposite sides = destructive.',
        'Sound is longitudinal, needs a medium, is fastest in solids and slowest in gases.',
        'Pitch depends on frequency; loudness depends on amplitude.',
        'Infrasound < 20 Hz; audible 20 Hz – 20 000 Hz; ultrasound > 20 000 Hz.',
      ]),
      formula('Wave equations', r`f = \dfrac{1}{T}\qquad v = f\lambda`),
      diagram('superposition'),
    ]),
    lesson(CH, 'p4c-em', 'Electromagnetic radiation', 4, [
      diagram('em-spectrum'),
      ul([
        'Made by accelerating charges. Transverse. No medium needed. c = 3,0 × 10⁸ m·s⁻¹ in a vacuum.',
        'Dual nature: behaves as a wave AND as particles (photons).',
        'Order (low to high frequency): radio, microwave, infrared, visible, ultraviolet, X-ray, gamma.',
        'Higher frequency = higher energy = shorter wavelength = more dangerous (UV, X-ray and gamma are ionising).',
        'Uses: radio/TV, Wi-Fi and cellphones (microwaves), remote controls (IR), sterilising (UV), bone images (X-rays), cancer treatment (gamma).',
      ]),
      formula('Photon energy', r`c = f\lambda\qquad E = hf = \dfrac{hc}{\lambda}`),
    ]),
    lesson(CH, 'p4c-electro', 'Electrostatics', 5, [
      diagram('atoms'),
      ul([
        'Protons (+) stay in the nucleus; only electrons move.',
        'Neutral: nₚ = nₑ. Positive: lost electrons. Negative: gained electrons.',
        'Conservation of charge: the net charge of an isolated system stays constant during any physical process.',
        'Quantisation: charge is an integer multiple of the charge on one electron, qₑ = −1,6 × 10⁻¹⁹ C.',
        'Identical spheres that touch share charge equally. Electrons flow from the more negative sphere to the more positive one.',
        'ΔQ = final − initial. Negative ΔQ means electrons were gained.',
      ]),
      formula('Formulae', r`Q = nq_e\qquad Q = \dfrac{Q_1+Q_2}{2}\qquad \Delta Q = Q_f - Q_i`),
      note('Prefixes: µ = 10⁻⁶, n = 10⁻⁹. For n, use the magnitude of qₑ and get the sign from gain or loss.'),
    ]),
    lesson(CH, 'p4c-circuits', 'Electric circuits', 5, [
      diagram('circuits'),
      ul([
        'Potential difference: work done per unit charge (J·C⁻¹ = V). Current: rate of flow of charge (A). Resistance: opposition to current (Ω).',
        'Resistance rises with length and temperature; falls with thickness. It also depends on the material.',
        'Ammeter in series; voltmeter in parallel.',
        'Series: same I; V adds; Rₜ = R₁ + R₂. Parallel: same V; I adds; 1/Rₜ = 1/R₁ + 1/R₂.',
        'More resistors in parallel: total resistance falls, total current rises. A short circuit sends the current round the component, so its voltage drops to about zero.',
      ]),
      formula('Formulae', r`V = \dfrac{W}{Q}\qquad I = \dfrac{Q}{\Delta t}\qquad R = \dfrac{V}{I}`),
    ]),
    lesson(CH, 'p4c-motion', 'Motion and graphs', 6, [
      diagram('distance-displacement'),
      ul([
        'Distance and speed are scalars. Displacement, velocity and acceleration are vectors.',
        'Average speed = total distance ÷ total time. Average velocity = displacement ÷ time. Acceleration = change in velocity ÷ time.',
        'Convert km·h⁻¹ to m·s⁻¹ by dividing by 3,6.',
        'Equations of motion only work for constant acceleration. Pick the equation that leaves out the quantity you do not need.',
        'x–t graph: gradient = velocity. v–t graph: gradient = acceleration, area = displacement. a–t graph: area = change in velocity.',
        'To compare two vehicles, find the displacement of each after the same time.',
      ]),
      formula('Equations of motion', r`v_f = v_i + a\Delta t\qquad \Delta x = v_i\Delta t + \tfrac12 a\Delta t^2\qquad v_f^2 = v_i^2 + 2a\Delta x\qquad \Delta x = \dfrac{v_i+v_f}{2}\Delta t`),
      diagram('motion-graphs'),
    ]),
    lesson(CH, 'p4c-energy', 'Mechanical energy', 4, [
      diagram('pendulum'),
      ul([
        'Eₚ: energy due to position (height). Eₖ: energy due to motion. Eₘ = Eₚ + Eₖ.',
        'Conservation: total mechanical energy of an isolated system stays constant when there is no friction.',
        'Top of a swing: Eₖ = 0, Eₚ maximum. Bottom: Eₚ = 0, Eₖ maximum.',
        'Doubling v makes Eₖ four times bigger; doubling m only doubles it.',
      ]),
      formula('Formulae', r`E_p = mgh\qquad E_k = \tfrac12mv^2\qquad E_{m} = E_p+E_k`),
      p('Use g = 9,8 m·s⁻². Mass in kg. Energy in joules.'),
      h2('Exam routine'),
      ul([
        'Write the formula, substitute with units, give the answer with a unit.',
        'For "define" questions, use the exact definition and finish the sentence.',
        'For "explain" questions, give a reason, not just the answer.',
      ]),
    ]),
  ],
};
