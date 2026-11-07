import type { Chapter } from '@/lib/types';
import { defs, formula, h2, lesson, r, ul } from './chemKit';

/**
 * Grade 10 Physical Sciences (Chemistry), full-year — key things to
 * remember: every definition in CAPS wording, the formulae, constants and
 * common ions, and the usual mistakes.
 */

const CH = 'chemistry-keypoints';

export const CHEMISTRY_KEY_POINTS: Chapter = {
  id: CH,
  subjectId: 'chemistry',
  title: 'Full Year Chemistry — Key Points & Definitions',
  summary: 'Every definition, formula, unit, common ion and constant you can be asked for, in the exact wording to learn, plus the mistakes to avoid.',
  category: 'Full Year Study Notes',
  lessons: [
    lesson(CH, 'chk-defs-matter', 'Definitions: matter and states', 6, [
      defs([
        { term: 'Matter', meaning: 'Anything that has mass and occupies space (volume).' },
        { term: 'Pure substance', meaning: 'Matter with a fixed composition that cannot be separated into other substances by physical means.' },
        { term: 'Mixture', meaning: 'Two or more substances physically combined, without a fixed composition, separable by physical means.' },
        { term: 'Element', meaning: 'A pure substance made of only one type of atom.' },
        { term: 'Compound', meaning: 'A pure substance made of two or more different elements chemically bonded in a fixed ratio.' },
        { term: 'Homogeneous mixture', meaning: 'A mixture with a uniform composition throughout.' },
        { term: 'Heterogeneous mixture', meaning: 'A mixture that does not have a uniform composition.' },
        { term: 'Physical change', meaning: 'A change in which no new substance is formed; usually reversible.' },
        { term: 'Chemical change', meaning: 'A change in which one or more new substances are formed; usually not easily reversible.' },
        { term: 'Melting point', meaning: 'The constant temperature at which a solid changes to a liquid.' },
        { term: 'Boiling point', meaning: 'The temperature at which a liquid changes to a gas, remaining constant while boiling.' },
        { term: 'Sublimation', meaning: 'The direct change from solid to gas (or gas to solid) without passing through the liquid phase.' },
        { term: 'Kinetic molecular theory', meaning: 'All matter is made of particles in constant motion, with the average kinetic energy of the particles increasing as temperature increases.' },
      ]),
    ]),
    lesson(CH, 'chk-defs-atoms', 'Definitions: atomic structure', 6, [
      defs([
        { term: 'Proton', meaning: 'A positively charged sub-atomic particle found in the nucleus.' },
        { term: 'Neutron', meaning: 'A neutral (uncharged) sub-atomic particle found in the nucleus.' },
        { term: 'Electron', meaning: 'A negatively charged sub-atomic particle found orbiting the nucleus in energy levels.' },
        { term: 'Atomic number (Z)', meaning: 'The number of protons in an atom\'s nucleus.' },
        { term: 'Mass number (A)', meaning: 'The total number of protons and neutrons in an atom\'s nucleus.' },
        { term: 'Isotopes', meaning: 'Atoms of the same element with the same number of protons but a different number of neutrons.' },
        { term: 'Ion', meaning: 'An atom (or group of atoms) that has lost or gained electrons, giving it an overall charge.' },
        { term: 'Cation', meaning: 'A positively charged ion, formed when an atom loses electrons.' },
        { term: 'Anion', meaning: 'A negatively charged ion, formed when an atom gains electrons.' },
        { term: 'Valence electrons', meaning: 'The electrons in the outermost energy level of an atom.' },
        { term: 'Aufbau principle', meaning: 'Electrons fill the lowest-energy orbitals available first.' },
        { term: "Hund's rule", meaning: 'Electrons fill orbitals of equal energy singly before any orbital is doubly occupied.' },
        { term: 'Pauli exclusion principle', meaning: 'A single orbital can hold a maximum of two electrons, with opposite spins.' },
      ]),
      ul(['neutrons = A − Z.', 'Electrons in an ion = protons ∓ charge (subtract for a cation, add for an anion).']),
    ]),
    lesson(CH, 'chk-defs-periodic', 'Definitions: the Periodic Table and trends', 6, [
      defs([
        { term: 'Period', meaning: 'A horizontal row of the periodic table; elements in a period have the same number of occupied energy levels.' },
        { term: 'Group', meaning: 'A vertical column of the periodic table; elements in a group have the same number of valence electrons.' },
        { term: 'Atomic radius', meaning: 'The distance from the nucleus to the outermost electron shell of an atom.' },
        { term: 'Ionisation energy', meaning: 'The minimum energy needed to remove one electron from a neutral atom in its gaseous state.' },
        { term: 'Electronegativity', meaning: 'A measure of how strongly an atom attracts a shared pair of electrons in a chemical bond.' },
        { term: 'Electron affinity', meaning: 'The energy change when a neutral gaseous atom gains an extra electron to form a negative ion.' },
      ]),
      ul([
        'Atomic radius: increases down a group, decreases across a period.',
        'Ionisation energy, electronegativity, electron affinity: decrease down a group, increase across a period.',
        'Highest ionisation energy, electronegativity: top-right (excluding noble gases for electronegativity). Lowest: bottom-left.',
        'A large jump between successive ionisation energies reveals the number of valence electrons.',
      ]),
    ]),
    lesson(CH, 'chk-defs-bonding', 'Definitions: chemical bonding', 6, [
      defs([
        { term: 'Chemical bond', meaning: 'A force of attraction that holds atoms or ions together, formed by the transfer or sharing of electrons.' },
        { term: 'Octet rule', meaning: 'Atoms tend to gain, lose or share electrons to achieve a full outer shell of 8 valence electrons.' },
        { term: 'Ionic bond', meaning: 'The electrostatic force of attraction between oppositely charged ions, formed by the complete transfer of electrons from a metal to a non-metal.' },
        { term: 'Covalent bond', meaning: 'A bond formed by the sharing of one or more pairs of electrons between two atoms.' },
        { term: 'Non-polar covalent bond', meaning: 'A covalent bond in which the electron pair is shared equally, between two atoms of the same element.' },
        { term: 'Polar covalent bond', meaning: 'A covalent bond in which the electron pair is shared unequally, between two atoms of different elements.' },
        { term: 'Metallic bond', meaning: 'The force of attraction between positive metal ions and a sea of delocalised electrons.' },
      ]),
      ul(['Metal + non-metal → ionic.', 'Non-metal + different non-metal → polar covalent.', 'Non-metal + same non-metal → non-polar covalent.', 'Metal + metal → metallic.']),
    ]),
    lesson(CH, 'chk-defs-reactions', 'Definitions: reactions, the mole and concentration', 7, [
      defs([
        { term: 'Chemical equation', meaning: 'A symbolic representation of a chemical reaction, showing reactants and products.' },
        { term: 'Law of conservation of mass', meaning: 'Mass is neither created nor destroyed in a chemical reaction; total mass of reactants = total mass of products.' },
        { term: 'Mole (mol)', meaning: 'The SI unit for amount of substance; one mole of any substance contains Avogadro\'s number of particles.' },
        { term: "Avogadro's number", meaning: '6,02 × 10²³ particles per mole.' },
        { term: 'Molar mass', meaning: 'The mass of exactly one mole of a substance, in g·mol⁻¹.' },
        { term: 'Molar volume', meaning: 'The volume occupied by one mole of any gas at STP: 22,4 dm³·mol⁻¹.' },
        { term: "Avogadro's law", meaning: 'Equal volumes of different gases, at the same temperature and pressure, contain equal numbers of moles.' },
        { term: 'Concentration', meaning: 'The amount, in moles, of solute dissolved per unit volume (dm³) of solution.' },
        { term: 'Hydrate', meaning: 'An ionic compound with a fixed number of water molecules chemically bonded within its crystal structure.' },
        { term: 'Anhydrous', meaning: 'A substance with no water of crystallisation.' },
      ]),
    ]),
    lesson(CH, 'chk-formulae', 'Formulae, constants and units', 6, [
      h2('The mole'),
      formula('Mole formulae', r`n = \dfrac{m}{M}\qquad n = \dfrac{N}{N_A}\qquad n = \dfrac{V}{V_m}`),
      formula('Concentration', r`c = \dfrac{n}{V}\qquad\text{or}\qquad c = \dfrac{m}{MV}`),
      h2('Atomic structure'),
      formula('Mass number', r`A = \text{protons} + \text{neutrons}\qquad \text{neutrons} = A - Z`),
      formula('Percentage composition', r`\%\text{element} = \dfrac{\text{mass of element in formula}}{\text{molar mass of compound}}\times100`),
      defs([
        { term: 'Constants', meaning: 'Nₐ = 6,02 × 10²³ mol⁻¹; Vₘ = 22,4 dm³·mol⁻¹ (STP); p° = 1,013 × 10⁵ Pa; T° = 273 K; e (charge on electron) = 1,6 × 10⁻¹⁹ C.' },
        { term: 'Units', meaning: 'mol (amount of substance), g·mol⁻¹ (molar mass), dm³·mol⁻¹ (molar volume), mol·dm⁻³ (concentration), g (mass), Pa (pressure), K (temperature).' },
        { term: 'Conversions', meaning: '1 dm³ = 1 000 cm³ = 1 000 mL. °C to K: add 273. Percentage to decimal fraction: divide by 100.' },
      ]),
    ]),
    lesson(CH, 'chk-ions', 'Common ions and oxidation numbers', 6, [
      defs([
        { term: 'Hydroxide', meaning: 'OH⁻' },
        { term: 'Nitrate', meaning: 'NO₃⁻' },
        { term: 'Carbonate', meaning: 'CO₃²⁻' },
        { term: 'Hydrogen carbonate', meaning: 'HCO₃⁻' },
        { term: 'Sulphate', meaning: 'SO₄²⁻' },
        { term: 'Sulphite', meaning: 'SO₃²⁻' },
        { term: 'Phosphate', meaning: 'PO₄³⁻' },
        { term: 'Ammonium', meaning: 'NH₄⁺' },
      ]),
      h2('Oxidation number rules'),
      ul([
        'Uncombined element = 0.',
        'Simple (monatomic) ion = its charge.',
        'Oxygen = −2 (except peroxides, −1).',
        'Hydrogen = +1 (except metal hydrides, −1).',
        'Group 1 metals = +1. Group 2 metals = +2.',
        'Sum of oxidation numbers = 0 for a neutral compound; = the ion\'s charge for a polyatomic ion.',
      ]),
    ]),
    lesson(CH, 'chk-remember', 'Remember: common mistakes', 5, [
      h2('Mistakes that lose marks'),
      ul([
        'Calling an alloy (e.g. steel) a pure substance or compound — alloys are homogeneous MIXTURES.',
        'Saying temperature keeps rising during melting/boiling — it stays CONSTANT (flat on the graph) while the state change happens.',
        'Forgetting that protons = electrons only in a NEUTRAL atom — for an ion, add or subtract the charge.',
        'Breaking Hund\'s rule: electrons fill each orbital in a sublevel singly before pairing up.',
        'Changing a SUBSCRIPT to balance a chemical equation — only coefficients may change.',
        'Forgetting units in the mole formulae: M in g·mol⁻¹, V in dm³ for concentration (convert cm³ by ÷1 000), Vₘ = 22,4 dm³·mol⁻¹ ONLY at STP.',
        'Mixing up ionic vs covalent: metal + non-metal is ionic; non-metal + non-metal is covalent.',
        'Mixing up polar vs non-polar covalent: SAME element = non-polar; DIFFERENT elements = polar.',
        'Confusing electronegativity (attraction for a SHARED pair in a bond) with electron affinity (energy change gaining a whole extra electron).',
        'Forgetting that successive ionisation energies always increase, and a big jump shows a change of energy level (reveals the number of valence electrons).',
        'Using the wrong charge for a transition metal — check the Roman numeral in the compound\'s name.',
        'Giving only the answer to an "explain" question: always add the reason.',
      ]),
    ]),
  ],
};
