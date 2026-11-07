import type { Chapter } from '@/lib/types';
import { formula, lesson, note, r, ul } from './chemKit';

/**
 * Grade 10 Physical Sciences (Chemistry), full-year — condensed revision.
 * One short lesson per topic: the ideas and the formulae. The long
 * explanations live in the Full Study Notes chapter.
 */

const CH = 'chemistry-condensed';

export const CHEMISTRY_CONDENSED: Chapter = {
  id: CH,
  subjectId: 'chemistry',
  title: 'Full Year Chemistry — Condensed Revision',
  summary: 'The whole Grade 10 Chemistry course on a few short pages per topic: the ideas and the formulae.',
  category: 'Full Year Study Notes',
  lessons: [
    lesson(CH, 'chc-matter', 'Classification of matter', 5, [
      ul([
        'Pure substance: fixed composition, fixed melting/boiling point. Elements (one type of atom) and compounds (two+ elements chemically bonded) are both pure substances.',
        'Mixture: physically combined, no fixed composition, separable by physical means. Homogeneous (uniform, e.g. salt water, alloys) or heterogeneous (not uniform, e.g. soil).',
        'Metals: left/centre of the table, shiny, malleable, good conductors, lose electrons. Non-metals: right, dull, brittle, poor conductors, gain/share electrons. Metalloids: on the staircase line, properties between the two.',
        'Physical change: no new substance, usually reversible (melting, dissolving). Chemical change: new substance formed, usually not easily reversible (burning, rusting) — look for colour change, gas, precipitate, temperature change.',
      ]),
    ]),
    lesson(CH, 'chc-states', 'States of matter', 5, [
      ul([
        'Solid: particles fixed, vibrate only; liquid: particles close, slide past each other; gas: particles far apart, move freely.',
        'Kinetic molecular theory: all matter is particles in constant motion; heating increases average kinetic energy.',
        'Melting point: solid → liquid, constant temperature. Boiling point: liquid → gas, constant temperature. Sublimation: solid → gas directly.',
        'Heating curve: temperature rises, FLATTENS at melting point, rises, FLATTENS at boiling point, rises. Flat sections: heat energy breaks intermolecular forces instead of raising temperature.',
        'Diffusion fastest in gases, slower in liquids, essentially none in solids.',
      ]),
    ]),
    lesson(CH, 'chc-atoms', 'Atomic structure', 6, [
      ul([
        'Proton (+1, nucleus), neutron (0, nucleus), electron (−1, orbits nucleus).',
        'Atomic number (Z) = protons = electrons (neutral atom). Mass number (A) = protons + neutrons.',
        'Isotopes: same protons, different neutrons (different mass number).',
        'Ion: charged atom. Cation (+): lost electrons. Anion (−): gained electrons. Electrons in an ion = protons ∓ charge.',
        'Aufbau: fill lowest-energy orbitals first. Hund\'s rule: fill each orbital in a sublevel singly before pairing. Pauli: max 2 electrons per orbital, opposite spins.',
        'Valence electrons = outermost shell electrons = group number (main-group elements).',
      ]),
      formula('Neutrons and mass number', r`\text{neutrons} = A - Z\qquad A = \text{protons} + \text{neutrons}`),
    ]),
    lesson(CH, 'chc-periodic', 'The Periodic Table & trends', 6, [
      ul([
        'Period = row (same number of energy levels). Group = column (same valence electrons, similar properties).',
        'Group 1: alkali metals. Group 2: alkaline earth metals. Group 17: halogens. Group 18: noble gases (unreactive, full shell).',
        'Atomic radius: increases DOWN a group, decreases ACROSS a period (left to right).',
        'Ionisation energy, electronegativity, electron affinity: decrease DOWN a group, increase ACROSS a period. All are highest near the top-right (excluding noble gases for electronegativity/affinity), lowest at the bottom-left.',
        'A big jump between successive ionisation energies shows how many valence electrons an atom has — the jump happens right after the last valence electron is removed.',
      ]),
    ]),
    lesson(CH, 'chc-bonding', 'Chemical bonding', 6, [
      ul([
        'Octet rule: atoms gain/lose/share electrons to get 8 valence electrons (2 for H/He), like the nearest noble gas.',
        'Ionic bond: metal + non-metal, electrons fully TRANSFERRED, forms + and − ions held by electrostatic attraction.',
        'Covalent bond: non-metal + non-metal, electrons SHARED. Non-polar: same element (equal sharing, e.g. O₂). Polar: different elements (unequal sharing, e.g. H₂O).',
        'Metallic bond: metal atoms, positive ions in a lattice + a "sea" of delocalised electrons — explains conductivity and malleability.',
        'Single bond = 1 shared pair. Double = 2 pairs. Triple = 3 pairs.',
      ]),
      note('Quick test: metal + non-metal → ionic. Non-metal + different non-metal → polar covalent. Non-metal + same non-metal → non-polar covalent. Metal + metal → metallic.'),
    ]),
    lesson(CH, 'chc-nomenclature', 'Names, formulae, oxidation numbers & ions', 6, [
      ul([
        'Ionic formula: balance charges — the charge of one ion becomes the subscript of the other, then simplify.',
        'Naming: metal keeps its name; non-metal ending becomes "-ide" (unless a polyatomic ion, which keeps its own name).',
        'Roman numerals (e.g. iron(II), copper(II)) show the charge of a metal that can have more than one.',
        'Covalent compounds: Greek prefixes show atom count — mono- (1, omitted first), di- (2), tri- (3), tetra- (4), penta- (5), hexa- (6).',
        'Memorise: OH⁻ hydroxide, NO₃⁻ nitrate, CO₃²⁻ carbonate, HCO₃⁻ hydrogen carbonate, SO₄²⁻ sulphate, PO₄³⁻ phosphate, NH₄⁺ ammonium.',
        'Oxidation numbers: element = 0. O is usually −2. H is usually +1. Group 1 = +1, Group 2 = +2. Sum = 0 for a neutral compound, = charge for a polyatomic ion.',
      ]),
    ]),
    lesson(CH, 'chc-reactions', 'Reactions, equations & stoichiometry', 6, [
      ul([
        'Law of conservation of mass: total mass of reactants = total mass of products.',
        'Balancing: only change COEFFICIENTS, never subscripts. Same number of each atom on both sides.',
        'Synthesis: A + B → AB. Decomposition: AB → A + B. Single displacement: A + BC → AC + B. Double displacement: AB + CD → AD + CB. Combustion: fuel + O₂ → CO₂ + H₂O (+ energy).',
        'Mole ratio comes from the balanced equation\'s coefficients — convert given quantity to moles, apply the ratio, convert back.',
        'Avogadro\'s law: equal volumes of gas at the same T and P have equal moles (and equal numbers of particles).',
      ]),
    ]),
    lesson(CH, 'chc-mole', 'The mole, molar mass & molar volume', 6, [
      ul([
        'Mole = Avogadro\'s number (6,02 × 10²³) of particles.',
        'Molar mass M (g·mol⁻¹): sum of relative atomic masses in the formula.',
        'Molar volume at STP: 22,4 dm³·mol⁻¹ (STP: 273 K, 1,013 × 10⁵ Pa).',
      ]),
      formula('Mole formulae', r`n = \dfrac{m}{M}\qquad n = \dfrac{N}{N_A}\qquad n = \dfrac{V}{V_m}`),
      formula('Percentage composition', r`\%\text{element} = \dfrac{\text{mass of element in formula}}{\text{molar mass of compound}}\times100`),
    ]),
    lesson(CH, 'chc-concentration', 'Concentration & hydrates', 5, [
      ul([
        'Concentration: moles of solute per dm³ of solution (mol·dm⁻³). Convert cm³ to dm³ by dividing by 1 000.',
        'Hydrate: ionic compound with water molecules built into its crystal structure, e.g. CuSO₄·5H₂O. Anhydrous = no water of crystallisation.',
        'Heating a hydrate drives off the water, leaving the anhydrous compound — mass lost = mass of water driven off.',
      ]),
      formula('Concentration', r`c = \dfrac{n}{V}\qquad\text{or}\qquad c = \dfrac{m}{MV}`),
    ]),
  ],
};
