import type { Chapter } from '@/lib/types';
import { checklist, defs, formula, h2, h3, lesson, note, p, r, solution, ul } from './chemKit';

/**
 * Grade 10 Physical Sciences (Chemistry), full-year — full study notes.
 *
 * Built to CAPS Grade 10 Chemistry outcomes (Matter and Materials, Chemical
 * Change, Chemical Quantities), cross-checked against both past papers in
 * this app (NW November 2024 Paper 2 and the Nizamiye June 2026 mid-year
 * paper). Structured exactly like the Physics "Full Study Notes" chapter:
 * one lesson per topic, definitions, formulae, worked examples.
 */

const CH = 'chemistry-full';

export const CHEMISTRY_FULL: Chapter = {
  id: CH,
  subjectId: 'chemistry',
  title: 'Full Year Chemistry — Full Study Notes',
  summary:
    'Every Grade 10 Chemistry topic explained step by step: classification of matter, states of matter, atomic structure, the periodic table, chemical bonding, chemical reactions and stoichiometry, and the mole — with definitions, formulae and worked examples.',
  category: 'Full Year Study Notes',
  lessons: [
    // ── 0. Exam map ─────────────────────────────────────────────────────
    lesson(CH, 'chf-map', 'Start here: what the exam tests', 6, [
      note('Written for Grade 10, CAPS. Use this chapter to learn, then the Condensed chapter to revise fast, then Key Points & Definitions the night before. The checklist below maps every past-paper question to a lesson, so nothing is missed.'),
      checklist([
        { id: 'c1', text: 'Classification of matter', detail: 'Lesson 1: pure substances, mixtures, elements, compounds, metals/non-metals/metalloids.', goTo: { subjectId: 'chemistry', chapterId: 'chem-p2-nw-2024' } },
        { id: 'c2', text: 'States of matter & the kinetic molecular theory', detail: 'Lesson 2: solid/liquid/gas, heating/cooling curves, melting point, boiling point.' },
        { id: 'c3', text: 'Atomic structure', detail: 'Lesson 3: protons/neutrons/electrons, atomic number, mass number, isotopes, electron configuration, Aufbau diagrams.' },
        { id: 'c4', text: 'The Periodic Table & periodic trends', detail: 'Lesson 4: groups, periods, metals/non-metals/metalloids, atomic radius, ionisation energy, electronegativity, electron affinity.' },
        { id: 'c5', text: 'Chemical bonding', detail: 'Lesson 5: ionic, covalent (polar/non-polar) and metallic bonds, Lewis diagrams, valence electrons, octet rule.' },
        { id: 'c6', text: 'Chemical nomenclature, formulae, oxidation numbers & ions', detail: 'Lesson 6: naming compounds, writing formulae, calculating oxidation numbers, common ions.' },
        { id: 'c7', text: 'Chemical reactions, equations & stoichiometry', detail: 'Lesson 7: balancing equations, conservation of mass, types of reactions, mole ratio calculations.' },
        { id: 'c8', text: 'The mole, molar mass & molar volume', detail: 'Lesson 8: Avogadro\'s number, n = m/M, n = N/Nₐ, n = V/Vₘ.' },
        { id: 'c9', text: 'Concentration & water of crystallisation', detail: 'Lesson 9: c = n/V, hydrates, percentage composition.' },
      ]),
      h2('Formulae and constants the data sheet gives you'),
      p('The data sheet provides p° = 1,013 × 10⁵ Pa, Vₘ = 22,4 dm³·mol⁻¹, T° = 273 K, e = 1,6 × 10⁻¹⁹ C, and the formulae n = m/M, c = n/V (or c = m/MV), n = N/Nₐ, n = V/Vₘ. You must still KNOW every definition, the names/formulae/charges of common ions, and how to draw Lewis diagrams and balance equations — these are not on the data sheet.'),
      h2('The scientific method (for any practical/experiment question)'),
      defs([
        { term: 'Independent variable', meaning: 'The variable you deliberately change.' },
        { term: 'Dependent variable', meaning: 'The variable you measure; it responds to the change.' },
        { term: 'Controlled variable', meaning: 'A variable kept the same so the test is fair (e.g. rate of heating, pressure, mass of sample).' },
        { term: 'Hypothesis', meaning: 'A testable prediction of what you expect to happen and why.' },
      ]),
    ]),

    // ── 1. Classification of matter ─────────────────────────────────────
    lesson(CH, 'chf-matter', '1. Classification of matter', 14, [
      h2('Matter and its states'),
      defs([
        { term: 'Matter', meaning: 'Anything that has mass and occupies space (volume).' },
        { term: 'Pure substance', meaning: 'Matter with a fixed, definite composition and a fixed set of properties (a fixed melting/boiling point) — cannot be separated into other substances by PHYSICAL means. Pure substances are either elements or compounds.' },
        { term: 'Mixture', meaning: 'Two or more substances (elements and/or compounds) that are physically combined (not chemically bonded) and can be separated by physical means. A mixture does NOT have a fixed composition or a fixed melting/boiling point.' },
      ]),
      h3('Classifying matter'),
      ul([
        'Element: a pure substance made of only ONE type of atom; cannot be broken down into simpler substances by chemical means (e.g. sulphur, oxygen, iron).',
        'Compound: a pure substance made of TWO or more different elements chemically bonded together in a fixed ratio; CAN be broken down into its elements by chemical means (e.g. water H₂O, carbon dioxide CO₂).',
        'Homogeneous mixture (solution): has a uniform composition throughout — you cannot see the different parts (e.g. salt water, air, steel — an alloy).',
        'Heterogeneous mixture: does NOT have a uniform composition — the different parts can be seen or distinguished (e.g. soil, granite, oil and water, a salad).',
      ]),
      note('A common exam trap: steel and other ALLOYS are mixtures (of metals), not pure substances or compounds, even though they feel uniform — they are homogeneous mixtures. Juice and salt water are also mixtures (solutions), not pure substances.'),
      h3('Metals, non-metals and metalloids'),
      defs([
        { term: 'Metal', meaning: 'An element that is shiny (lustrous), malleable, ductile, a good conductor of heat and electricity, and typically loses electrons to form positive ions. Found on the LEFT and centre of the periodic table.' },
        { term: 'Non-metal', meaning: 'An element that is typically dull, brittle (if solid), a poor conductor of heat and electricity, and typically gains electrons to form negative ions (or shares electrons). Found on the RIGHT of the periodic table.' },
        { term: 'Metalloid (semi-metal)', meaning: 'An element with properties BETWEEN metals and non-metals (e.g. semi-conducting). Found along the "staircase" line dividing metals and non-metals (e.g. silicon, germanium, boron).' },
      ]),
      h3('Separating mixtures'),
      ul([
        'Filtration: separates an insoluble solid from a liquid.',
        'Evaporation/distillation: separates a dissolved solid from a liquid (evaporation) or separates liquids with different boiling points (distillation).',
        'Sieving: separates solids of different particle sizes.',
        'Using a magnet: separates magnetic materials (e.g. iron) from a mixture.',
      ]),
      h2('Physical vs chemical properties and changes'),
      defs([
        { term: 'Physical property', meaning: 'A property that can be observed or measured WITHOUT changing the substance into a new substance (e.g. colour, density, melting point, hardness).' },
        { term: 'Chemical property', meaning: 'A property that describes how a substance reacts with other substances, changing it into a new substance (e.g. flammability, reactivity with acid).' },
        { term: 'Physical change', meaning: 'A change in which NO new substance is formed; the change of state or form is usually reversible (e.g. melting, boiling, dissolving, cutting).' },
        { term: 'Chemical change (chemical reaction)', meaning: 'A change in which one or more NEW substances are formed with different properties from the original; usually NOT easily reversible (e.g. burning, rusting, cooking).' },
      ]),
      ul([
        'Signs that a chemical change has occurred: a colour change, a gas is produced (bubbles), a precipitate forms (a solid appears in a solution), a temperature change (exothermic/endothermic), or light/sound is produced.',
      ]),
    ]),

    // ── 2. States of matter and the kinetic molecular theory ───────────
    lesson(CH, 'chf-states', '2. States of matter & the kinetic molecular theory', 14, [
      h2('The three states of matter'),
      defs([
        { term: 'Solid', meaning: 'Particles are packed closely together in a fixed, ordered arrangement; they vibrate in place but do not move past each other. Has a fixed shape and fixed volume.' },
        { term: 'Liquid', meaning: 'Particles are close together but can move/slide past each other; held together by weaker forces than in a solid. Has a fixed volume but takes the shape of its container.' },
        { term: 'Gas', meaning: 'Particles are far apart and move freely and randomly at high speed; forces between particles are very weak/negligible. Has no fixed shape and no fixed volume — expands to fill its container.' },
      ]),
      h3('The kinetic molecular theory'),
      ul([
        'All matter is made of tiny particles (atoms, ions or molecules) that are in constant motion.',
        'The particles have kinetic energy; the AVERAGE kinetic energy of the particles increases as temperature increases.',
        'There are forces of attraction (intermolecular forces) between particles — strongest in solids, weaker in liquids, weakest (almost negligible) in gases.',
        'Heating a substance gives its particles more kinetic energy, making them move/vibrate faster and spread further apart, which can cause a change of phase (state).',
      ]),
      h2('Changes of state and the heating curve'),
      defs([
        { term: 'Melting point', meaning: 'The constant temperature at which a solid changes to a liquid (melts); the reverse of freezing.' },
        { term: 'Boiling point', meaning: 'The temperature at which a liquid changes to a gas (boils) — the temperature at which the vapour pressure equals atmospheric pressure; remains constant during boiling.' },
        { term: 'Freezing/solidification', meaning: 'The change from liquid to solid, at the same temperature as the melting point.' },
        { term: 'Condensation', meaning: 'The change from gas to liquid.' },
        { term: 'Sublimation', meaning: 'The change directly from solid to gas (or gas to solid) WITHOUT passing through the liquid phase (e.g. dry ice/solid CO₂, iodine).' },
        { term: 'Evaporation', meaning: 'The change from liquid to gas that happens gradually at the SURFACE of a liquid, at temperatures BELOW the boiling point (unlike boiling, which happens throughout the liquid at the boiling point).' },
      ]),
      p('A heating curve (a graph of temperature against time while a substance is heated at a constant rate) has a distinctive shape: temperature rises steadily while the substance is entirely solid, FLATTENS (stays constant) at the melting point while the solid changes to liquid, rises steadily again while entirely liquid, then FLATTENS again at the boiling point while the liquid changes to gas, then rises again as a gas.'),
      note('Why the temperature stays flat during a change of state: all the heat energy supplied during this time is used to break the intermolecular forces/bonds holding the particles together (changing their arrangement/potential energy), rather than increasing their kinetic energy — so the temperature does not rise until the change of state is complete.'),
      h2('Diffusion and the states of matter'),
      ul([
        'Diffusion: the movement of particles from a region of higher concentration to a region of lower concentration, due to the random motion of particles.',
        'Diffusion happens fastest in gases (particles move fastest, furthest apart), slower in liquids, and essentially does not happen in solids (particles are fixed in place).',
      ]),
    ]),

    // ── 3. Atomic structure ─────────────────────────────────────────────
    lesson(CH, 'chf-atoms', '3. Atomic structure', 18, [
      h2('Sub-atomic particles'),
      defs([
        { term: 'Proton', meaning: 'A sub-atomic particle with a POSITIVE charge (+1), found in the nucleus. Relative mass ≈ 1.' },
        { term: 'Neutron', meaning: 'A sub-atomic particle with NO charge (neutral), found in the nucleus. Relative mass ≈ 1.' },
        { term: 'Electron', meaning: 'A sub-atomic particle with a NEGATIVE charge (−1), found orbiting the nucleus in energy levels/shells. Relative mass ≈ negligible (about 1/1836 of a proton).' },
        { term: 'Nucleus', meaning: 'The small, dense, positively charged centre of an atom, containing the protons and neutrons.' },
        { term: 'Atomic number (Z)', meaning: 'The number of PROTONS in an atom\'s nucleus; this defines which element it is. In a neutral atom, number of protons = number of electrons.' },
        { term: 'Mass number (A)', meaning: 'The total number of PROTONS plus NEUTRONS in an atom\'s nucleus (A = Z + number of neutrons). Written as a superscript before the element symbol, e.g. ²³Na.' },
      ]),
      formula('Number of neutrons', r`\text{neutrons} = A - Z`),
      h3('Isotopes'),
      defs([
        { term: 'Isotopes', meaning: 'Atoms of the SAME element (same number of protons/atomic number) with DIFFERENT numbers of neutrons (and therefore different mass numbers).' },
      ]),
      solution('Worked example: average atomic mass from isotope abundance', [
        ['Neon has isotopes Ne-20 (mass 19,9, abundance 80%), Ne-21 (mass 20,9, abundance 1,75%) and Ne-22 (mass 21,9, abundance 18,25%)', r`A_{avg} = \sum(\text{isotope mass} \times \text{fractional abundance})`],
        ['Substitute each isotope\'s mass and its abundance as a decimal fraction', r`A_{avg} = (19{,}9)(0{,}80) + (20{,}9)(0{,}0175) + (21{,}9)(0{,}1825)`],
        ['Calculate each term and add', r`A_{avg} = 15{,}92 + 0{,}36575 + 3{,}99675 \approx 20{,}28\ \text{u}`],
      ]),
      h2('Ions'),
      defs([
        { term: 'Ion', meaning: 'An atom (or group of atoms) that has lost or gained one or more electrons, giving it an overall electric charge.' },
        { term: 'Cation', meaning: 'A POSITIVELY charged ion, formed when an atom LOSES one or more electrons (protons > electrons). Metals typically form cations.' },
        { term: 'Anion', meaning: 'A NEGATIVELY charged ion, formed when an atom GAINS one or more electrons (electrons > protons). Non-metals typically form anions.' },
      ]),
      note('To find the number of electrons in an ion: start with the number of protons (= atomic number, unchanged by ionisation), then SUBTRACT the positive charge (cation) or ADD the magnitude of the negative charge (anion). E.g. Ca²⁺ (20 protons) has 20 − 2 = 18 electrons.'),
      h2('Electron configuration'),
      ul([
        'Electrons are arranged around the nucleus in energy levels (shells), and within each energy level in sublevels (s, p, d, f) and orbitals.',
        'Each orbital can hold a MAXIMUM of 2 electrons, with opposite spins (shown as two arrows pointing in opposite directions, ↑↓, in an Aufbau/orbital-box diagram).',
        'Sublevel capacities: s holds up to 2 electrons (1 orbital), p holds up to 6 electrons (3 orbitals), d holds up to 10 electrons (5 orbitals).',
      ]),
      h3('The Aufbau principle and filling order'),
      defs([
        { term: 'Aufbau principle', meaning: 'Electrons fill the lowest-energy orbitals available FIRST, before filling higher-energy orbitals.' },
        { term: "Hund's rule", meaning: 'When filling orbitals of EQUAL energy within a sublevel (e.g. the three p orbitals), electrons fill each orbital singly (with parallel/unpaired spins) BEFORE any orbital gets a second (paired) electron.' },
        { term: 'Pauli exclusion principle', meaning: 'No two electrons in the same atom can have the same set of quantum numbers — in practice, this means a single orbital can hold a maximum of 2 electrons, and they must have opposite spins.' },
      ]),
      p('Filling order (the "diagonal rule"), for Grade 10: 1s, 2s, 2p, 3s, 3p (and beyond into 4s, 3d, etc. for heavier elements, but Grade 10 CAPS mostly covers elements up to around calcium, Z = 20).'),
      solution('Worked example: electron configuration of phosphorus (P, Z = 15)', [
        ['Phosphorus has atomic number 15, so 15 electrons to place, filling sublevels in order of increasing energy', r`1s^2\,2s^2\,2p^6\,3s^2\,3p^3`],
        ['Check the total adds up to 15', r`2+2+6+2+3 = 15\ \checkmark`],
      ]),
      note('Aufbau (orbital box) diagrams: draw a box for each orbital, label the sublevel beneath/beside it, and fill with arrows following Aufbau, Hund and Pauli. For a p sublevel with 3 electrons (like phosphorus\'s 3p³), draw 3 separate boxes each with ONE arrow pointing up — do not pair any of them, by Hund\'s rule.'),
      h2('Valence electrons'),
      defs([
        { term: 'Valence electrons', meaning: 'The electrons in the OUTERMOST energy level (highest principal quantum number) of an atom. These are the electrons involved in chemical bonding.' },
      ]),
      p('The number of valence electrons equals the GROUP number for the main-group elements (Groups 1, 2, and 13–18 using the 1–18 numbering): Group 1 has 1 valence electron, Group 2 has 2, Group 13 has 3, up to Group 18 which has 8 (a full outer shell, except helium with 2).'),
    ]),

    // ── 4. The Periodic Table and periodic trends ───────────────────────
    lesson(CH, 'chf-periodic', '4. The Periodic Table & periodic trends', 18, [
      h2('Organisation of the Periodic Table'),
      defs([
        { term: 'Period', meaning: 'A HORIZONTAL row of the periodic table. Elements in the same period have the same number of occupied electron energy levels (shells).' },
        { term: 'Group', meaning: 'A VERTICAL column of the periodic table. Elements in the same group have the same number of valence electrons and similar chemical properties.' },
      ]),
      ul([
        'Group 1: alkali metals (e.g. Li, Na, K) — 1 valence electron, very reactive metals.',
        'Group 2: alkaline earth metals (e.g. Mg, Ca) — 2 valence electrons.',
        'Group 17: halogens (e.g. F, Cl, Br) — 7 valence electrons, very reactive non-metals.',
        'Group 18: noble gases (e.g. He, Ne, Ar) — 8 valence electrons (full outer shell, except He with 2), very UNREACTIVE/stable.',
        'The staircase line (running roughly from boron to astatine) divides metals (left) from non-metals (right); elements along this line are metalloids.',
      ]),
      h2('Periodic trends'),
      note('The main driver behind every periodic trend is the balance between (1) the number of occupied energy levels (more levels = electrons further from the nucleus = weaker pull) and (2) the nuclear charge (more protons = stronger pull on the SAME energy level, with little extra shielding across a period).'),
      h3('Atomic radius'),
      defs([
        { term: 'Atomic radius', meaning: 'A measure of the size of an atom, usually the distance from the nucleus to the outermost electron shell.' },
      ]),
      ul([
        'DOWN a group: atomic radius INCREASES — each row adds another full energy level, so the outermost electrons are further from the nucleus.',
        'ACROSS a period (left to right): atomic radius DECREASES — the number of energy levels stays the same, but the number of protons (nuclear charge) increases, pulling the electrons in more strongly (with roughly constant shielding from inner electrons).',
      ]),
      h3('Ionisation energy'),
      defs([
        { term: 'Ionisation energy', meaning: 'The minimum energy needed to remove one electron (the outermost/valence electron, in its gaseous ground state) from a neutral atom, forming a positive ion.' },
      ]),
      ul([
        'DOWN a group: ionisation energy DECREASES — the valence electron is further from the nucleus and more shielded by inner electrons, so it is easier to remove (held less tightly).',
        'ACROSS a period (left to right): ionisation energy generally INCREASES — increasing nuclear charge with the same shielding pulls the valence electrons in more tightly, making them harder to remove. (Small irregular dips occur at Groups 13 and 16 due to sublevel stability, but the overall trend is upward.)',
        'Ionisation energy is HIGHEST for the noble gases (Group 18, top-right) and LOWEST for the alkali metals (Group 1, bottom-left).',
        'SUCCESSIVE ionisation energies (removing a 2nd, 3rd, 4th electron from the same atom) always increase, because removing an electron from an already-positive ion is harder. A very LARGE jump between two successive ionisation energies shows that the next electron is being removed from a new (lower, more stable, full) inner energy level — this reveals the number of valence electrons the atom had.',
      ]),
      solution('Worked example: identifying an element from a jump in successive ionisation energies', [
        ['An unknown Period 3 element has E₁ = 590, E₂ = 1 045, E₃ = 4 912, E₄ = 6 491 kJ/mol', r`\text{Ratio } \dfrac{E_3}{E_2} = \dfrac{4\,912}{1\,045} \approx 4{,}7\ (\text{a huge jump})`],
        ['A huge jump between E₂ and E₃ means the 3rd electron removed comes from a full, stable inner shell — so the atom had only 2 valence electrons', r`\text{2 valence electrons} \Rightarrow \text{Group 2 element}`],
        ['In Period 3, Group 2 is magnesium (Mg)', r`\text{The element is magnesium}`],
      ]),
      h3('Electronegativity'),
      defs([
        { term: 'Electronegativity', meaning: 'A measure of how strongly an atom attracts a shared pair of electrons towards itself in a chemical bond.' },
      ]),
      ul([
        'DOWN a group: electronegativity DECREASES (larger atomic radius, electrons further from the nucleus, weaker attraction for a shared pair).',
        'ACROSS a period (left to right): electronegativity INCREASES (smaller radius, stronger pull on shared electrons).',
        'Electronegativity is highest for fluorine (top of Group 17) and essentially not assigned/very low for the noble gases, which do not typically form bonds.',
      ]),
      h3('Electron affinity'),
      defs([
        { term: 'Electron affinity', meaning: 'The energy change (usually released) when a neutral atom in the gaseous state gains an extra electron to form a negative ion.' },
      ]),
      ul([
        'Electron affinity generally INCREASES (more energy released) across a period (left to right), as atoms "want" to gain electrons to complete a nearly-full outer shell.',
        'Electron affinity is GREATEST (most energy released) for the halogens (Group 17) — they need only 1 more electron for a full, stable octet.',
        'Electron affinity is LOWEST for the noble gases (Group 18) — their outer shell is already full and stable, so they have no tendency to accept an extra electron.',
      ]),
    ]),

    // ── 5. Chemical bonding ──────────────────────────────────────────────
    lesson(CH, 'chf-bonding', '5. Chemical bonding & Lewis diagrams', 18, [
      h2('Why atoms bond: the octet rule'),
      defs([
        { term: 'Chemical bond', meaning: 'A force of attraction that holds atoms (or ions) together in a molecule or compound, formed by the transfer or sharing of electrons.' },
        { term: 'Octet rule', meaning: 'Atoms tend to gain, lose or share electrons so as to achieve a full outer shell of 8 valence electrons (2 for hydrogen/helium), the same stable electron configuration as the nearest noble gas.' },
      ]),
      h2('Lewis (electron) diagrams'),
      ul([
        'A Lewis diagram shows the valence electrons of an atom or ion as dots around the element\'s symbol.',
        'For a bonded molecule/compound, shared electron pairs (covalent bonds) are drawn between the atoms, and unshared (lone) pairs are drawn around the outside.',
        'A single bond = 1 shared pair of electrons (2 electrons). A double bond = 2 shared pairs (4 electrons). A triple bond = 3 shared pairs (6 electrons).',
      ]),
      h2('Types of chemical bonds'),
      h3('Ionic bonding'),
      defs([
        { term: 'Ionic bond', meaning: 'The electrostatic force of attraction between oppositely charged ions, formed by the COMPLETE TRANSFER of one or more electrons from a metal atom to a non-metal atom.' },
      ]),
      ul([
        'Forms between a METAL and a NON-METAL (a large difference in electronegativity).',
        'The metal LOSES electrons to form a positive ion (cation); the non-metal GAINS those electrons to form a negative ion (anion). Both ions end up with a full outer shell (octet).',
        'The number of electrons transferred must balance, so the total positive and negative charge in the compound is equal (the compound is electrically neutral overall).',
      ]),
      solution('Worked example: formation of sodium oxide (Na₂O)', [
        ['Sodium (Group 1, 1 valence electron) must LOSE 1 electron to reach a full octet; oxygen (Group 16, 6 valence electrons) must GAIN 2 electrons to reach a full octet', r`Na \to Na^+ + e^-\qquad O + 2e^- \to O^{2-}`],
        ['To balance the electrons transferred, 2 sodium atoms are needed for every 1 oxygen atom (2 electrons lost in total = 2 electrons gained)', r`2Na + O \to 2Na^+ + O^{2-} \to Na_2O`],
      ]),
      h3('Covalent bonding'),
      defs([
        { term: 'Covalent bond', meaning: 'A chemical bond formed by the SHARING of one or more pairs of electrons between two atoms, so that both atoms achieve a full outer shell (octet).' },
        { term: 'Non-polar covalent bond', meaning: 'A covalent bond in which the electron pair is shared EQUALLY between the two atoms — occurs between two atoms of the SAME element (zero electronegativity difference), e.g. in F₂, O₂, N₂, Cl₂.' },
        { term: 'Polar covalent bond', meaning: 'A covalent bond in which the electron pair is shared UNEQUALLY between two atoms of DIFFERENT elements (a small-to-moderate electronegativity difference), so one atom carries a slightly negative charge (δ−) and the other a slightly positive charge (δ+), e.g. in H₂O, CO₂, SO₂.' },
      ]),
      ul([
        'Forms between two NON-METALS.',
        'Molecular compounds (made of covalently bonded molecules) typically have LOW melting and boiling points compared to ionic compounds, and do not conduct electricity (no free-moving charged particles).',
      ]),
      solution('Worked example: formation of carbon dioxide (CO₂)', [
        ['Carbon (Group 14, 4 valence electrons) needs 4 more electrons for an octet; each oxygen (Group 16, 6 valence electrons) needs 2 more electrons for an octet', r`C\ \text{shares 2 pairs (a double bond) with EACH of 2 oxygen atoms}`],
        ['Carbon ends up with 4 shared pairs (8 electrons); each oxygen ends up with 2 shared pairs plus 2 lone pairs (8 electrons)', r`O=C=O\quad (\text{CO}_2)`],
      ]),
      h3('Metallic bonding'),
      defs([
        { term: 'Metallic bond', meaning: 'The force of attraction between positive metal ions (in a fixed lattice) and a "sea" of delocalised (free-moving) valence electrons shared among all the atoms in the metal.' },
      ]),
      ul([
        'Forms between METAL atoms only.',
        'Explains why metals conduct electricity and heat well (the delocalised electrons can move freely), and why metals are malleable and ductile (the layers of positive ions can slide past each other without breaking the bond, since the electron "sea" moves with them).',
      ]),
      h2('Determining bond type from a compound'),
      ul([
        'Metal + non-metal → ionic bond.',
        'Non-metal + non-metal (different elements) → polar covalent bond.',
        'Non-metal + the SAME non-metal (e.g. O₂, N₂, Cl₂, F₂) → non-polar covalent bond.',
        'Metal + the same or another metal → metallic bond.',
      ]),
    ]),

    // ── 6. Nomenclature, formulae, oxidation numbers and ions ──────────
    lesson(CH, 'chf-nomenclature', '6. Chemical names, formulae, oxidation numbers & ions', 18, [
      h2('Writing and naming ionic compound formulae'),
      ul([
        'Write the cation (positive ion) first, then the anion (negative ion).',
        'The total positive charge must equal the total negative charge (the compound is neutral overall) — use the "criss-cross" or "balance the charges" method: the numerical charge of each ion becomes the SUBSCRIPT of the other ion (then simplify if both subscripts share a common factor).',
        'Naming: the metal (cation) keeps its element name; the non-metal (anion) changes its ending to "-ide" (e.g. chlorine → chloride, oxygen → oxide) UNLESS it is a polyatomic ion, which keeps its own name (e.g. sulphate, carbonate, nitrate).',
      ]),
      solution('Worked example: formula of calcium phosphate', [
        ['Calcium forms Ca²⁺; phosphate is the polyatomic ion PO₄³⁻', r`\text{Cross the charges as subscripts: } Ca^{2+}\ \to\ 3\ \text{(from PO}_4^{3-}\text{), } PO_4^{3-}\ \to\ 2\ \text{(from Ca}^{2+}\text{)}`],
        ['The formula balances 3 calcium ions (3 × 2+ = 6+) against 2 phosphate ions (2 × 3− = 6−)', r`Ca_3(PO_4)_2`],
      ]),
      h2('Transition metal compounds — Roman numerals'),
      p('Some metals (mostly transition metals, e.g. iron, copper, tin) can form ions with MORE THAN ONE possible charge. A Roman numeral in brackets after the metal\'s name shows which charge (oxidation state) it has in that specific compound, e.g. iron(II) oxide = FeO (Fe²⁺), iron(III) oxide = Fe₂O₃ (Fe³⁺); copper(II) nitrate = Cu(NO₃)₂ (Cu²⁺).'),
      h2('Naming covalent (molecular) compounds'),
      p('Covalent compounds between two non-metals are named using GREEK NUMERICAL PREFIXES to show how many atoms of each element are present (since, unlike ionic compounds, the ratio is not fixed by simple charge-balancing): mono- (1, usually omitted for the first element), di- (2), tri- (3), tetra- (4), penta- (5), hexa- (6).'),
      defs([
        { term: 'Example: N₂O₄', meaning: 'Dinitrogen tetroxide — "di-" (2 nitrogen) + "tetr-oxide" (4 oxygen).' },
        { term: 'Example: CO₂', meaning: 'Carbon dioxide — "mono-" is dropped for the first element (carbon), "di-oxide" (2 oxygen).' },
        { term: 'Example: SO₃', meaning: 'Sulphur trioxide — "tri-oxide" (3 oxygen).' },
      ]),
      h2('Common polyatomic ions to memorise'),
      defs([
        { term: 'Hydroxide', meaning: 'OH⁻' },
        { term: 'Nitrate', meaning: 'NO₃⁻' },
        { term: 'Carbonate', meaning: 'CO₃²⁻' },
        { term: 'Hydrogen carbonate (bicarbonate)', meaning: 'HCO₃⁻' },
        { term: 'Sulphate', meaning: 'SO₄²⁻' },
        { term: 'Phosphate', meaning: 'PO₄³⁻' },
        { term: 'Ammonium', meaning: 'NH₄⁺' },
        { term: 'Sulphuric acid', meaning: 'H₂SO₄' },
      ]),
      h2('Oxidation numbers'),
      defs([
        { term: 'Oxidation number', meaning: 'A number assigned to an atom in a compound or ion, representing the charge it would have if all bonds to atoms of a different element were fully ionic (electrons fully transferred rather than shared).' },
      ]),
      ul([
        'An uncombined element has an oxidation number of 0 (e.g. O₂, Na, Fe).',
        'A simple (monatomic) ion has an oxidation number equal to its charge (e.g. Na⁺ is +1, O²⁻ is −2).',
        'Oxygen is almost always −2 in compounds (except in peroxides, where it is −1).',
        'Hydrogen is almost always +1 in compounds (except when bonded to a metal, where it is −1).',
        'Group 1 metals are always +1; Group 2 metals are always +2 in their compounds.',
        'The sum of all oxidation numbers in a NEUTRAL compound must equal 0. The sum of all oxidation numbers in a POLYATOMIC ION must equal the charge on that ion.',
      ]),
      solution('Worked example: oxidation number of phosphorus in calcium phosphate, Ca₃(PO₄)₂', [
        ['Let x = oxidation number of P. Calcium is always +2; oxygen is always −2. There are 3 Ca atoms and 2 phosphate groups (each with 1 P and 4 O)', r`3(+2) + 2\big[x + 4(-2)\big] = 0`],
        ['Expand and simplify', r`6 + 2x - 16 = 0 \quad\Rightarrow\quad 2x = 10`],
        ['Solve for x', r`x = +5`],
      ]),
      h2('Finding mass number from protons and neutrons (ion problems)'),
      solution('Worked example: ₁₇Y¹⁻ and X²⁺ have the same number of electrons; X has equal protons and neutrons — find the mass number of X', [
        ['Y has 17 protons (given by the subscript). Y¹⁻ has gained 1 electron', r`\text{electrons in } Y^{1-} = 17 + 1 = 18`],
        ['X²⁺ has the same number of electrons as Y¹⁻ (given), and has LOST 2 electrons, so its proton count is 2 more than its electron count', r`\text{protons of } X = 18 + 2 = 20`],
        ['Given: protons of X = neutrons of X', r`\text{neutrons of } X = 20`],
        ['Mass number A = protons + neutrons', r`A = 20 + 20 = 40`],
      ]),
    ]),

    // ── 7. Chemical reactions, equations and stoichiometry ─────────────
    lesson(CH, 'chf-reactions', '7. Chemical reactions, equations & stoichiometry', 18, [
      h2('Chemical equations'),
      defs([
        { term: 'Chemical equation', meaning: 'A symbolic representation of a chemical reaction, showing the reactants (left) and products (right) separated by an arrow, with their formulae and state symbols.' },
        { term: 'Reactant', meaning: 'A substance present at the START of a chemical reaction (before the reaction), consumed during the reaction.' },
        { term: 'Product', meaning: 'A substance formed as a RESULT of a chemical reaction.' },
        { term: 'State symbols', meaning: '(s) solid, (l) liquid, (g) gas, (aq) aqueous (dissolved in water).' },
      ]),
      h2('The law of conservation of mass'),
      defs([
        { term: 'Law of conservation of mass', meaning: 'Mass is neither created nor destroyed in a chemical reaction — the total mass of the reactants equals the total mass of the products.' },
      ]),
      solution('Worked example: 30 g of A reacts completely with 25 g of B', [
        ['By the law of conservation of mass, since both reactants react completely (no leftover reactant), the total mass of the products formed equals the total mass of reactants that reacted', r`m_{products} = m_A + m_B = 30 + 25 = 55\ \text{g}`],
      ]),
      h2('Balancing chemical equations'),
      ul([
        'Because mass (and therefore atoms) cannot be created or destroyed, a balanced equation must have the SAME number of atoms of each element on both sides.',
        'Only the COEFFICIENTS (the numbers placed in front of a formula) may be changed to balance an equation — NEVER change a subscript within a formula, since that would change the identity of the substance.',
        'Method: (1) write the correct formulae for all reactants and products, (2) count the atoms of each element on each side, (3) add coefficients (starting with the most complex molecule or the element appearing in the fewest places) until every element balances, (4) check the final count on both sides.',
      ]),
      h2('Types of chemical reactions'),
      defs([
        { term: 'Synthesis (combination) reaction', meaning: 'Two or more simple substances combine to form one more complex product: A + B → AB.' },
        { term: 'Decomposition reaction', meaning: 'A single compound breaks down into two or more simpler substances: AB → A + B.' },
        { term: 'Single displacement reaction', meaning: 'One element replaces another element in a compound: A + BC → AC + B.' },
        { term: 'Double displacement (precipitation) reaction', meaning: 'The positive and negative ions of two compounds "swap partners", often forming an insoluble precipitate: AB + CD → AD + CB.' },
        { term: 'Combustion reaction', meaning: 'A substance reacts with oxygen, usually releasing energy as heat and light (e.g. burning a fuel); hydrocarbon combustion produces carbon dioxide and water.' },
      ]),
      h2('Mole ratio and stoichiometric calculations'),
      p('In a balanced chemical equation, the COEFFICIENTS give the MOLE RATIO in which the reactants react and the products form. This mole ratio is the basis of every stoichiometry calculation: convert a given quantity (mass, volume, number of particles) to moles, use the mole ratio from the balanced equation to find the moles of the substance you want, then convert back to the units asked for.'),
      note('Equal volumes of different gases, measured at the SAME temperature and pressure, contain EQUAL NUMBERS OF MOLES (and therefore equal numbers of particles) — this is Avogadro\'s law/hypothesis. It lets you compare two gas samples using their molar masses even without converting to moles explicitly.'),
      solution('Worked example: using Avogadro\'s law to identify an unknown gas', [
        ['Two identical flasks (same T and P) hold ozone O₃ (0,48 g) and an unknown gas X (0,34 g). Equal volumes at the same T and P means equal moles', r`n_{O_3} = n_X \quad\Rightarrow\quad \dfrac{m_{O_3}}{M_{O_3}} = \dfrac{m_X}{M_X}`],
        ['Molar mass of O₃ = 3 × 16 = 48 g·mol⁻¹. Substitute', r`\dfrac{0{,}48}{48} = \dfrac{0{,}34}{M_X}`],
        ['Solve for the molar mass of X', r`M_X = \dfrac{0{,}34 \times 48}{0{,}48} = 34\ \text{g·mol}^{-1}`],
        ['H₂S has M = 2(1) + 32 = 34 g·mol⁻¹, matching gas X', r`\text{Gas X is H}_2\text{S}`],
      ]),
    ]),

    // ── 8. The mole, molar mass and molar volume ────────────────────────
    lesson(CH, 'chf-mole', '8. The mole, molar mass & molar volume', 16, [
      h2("Avogadro's number and the mole"),
      defs([
        { term: 'Mole (mol)', meaning: 'The SI unit for the "amount of substance" — one mole of any substance contains exactly Avogadro\'s number of particles (atoms, molecules, ions or formula units).' },
        { term: "Avogadro's number (Nₐ)", meaning: '6,02 × 10²³ particles per mole — the number of particles in exactly one mole of any substance.' },
        { term: 'Molar mass (M)', meaning: 'The mass of exactly one mole of a substance, in grams per mole (g·mol⁻¹). Numerically equal to the substance\'s relative atomic/molecular/formula mass.' },
        { term: 'Molar volume (Vₘ)', meaning: 'The volume occupied by one mole of any GAS at standard temperature and pressure (STP): Vₘ = 22,4 dm³·mol⁻¹.' },
        { term: 'Standard temperature and pressure (STP)', meaning: 'T° = 273 K (0 °C) and p° = 1,013 × 10⁵ Pa.' },
      ]),
      h2('The mole formulae'),
      formula('Moles from mass', r`n = \dfrac{m}{M}`),
      formula('Moles from number of particles', r`n = \dfrac{N}{N_A}`),
      formula('Moles from gas volume at STP', r`n = \dfrac{V}{V_m}`),
      formula('Concentration', r`c = \dfrac{n}{V}\qquad\text{or}\qquad c = \dfrac{m}{MV}`),
      solution('Worked example: moles of a substance from its mass', [
        ['Find the number of moles in 11 g of CO₂ (M of CO₂ = 12 + 2(16) = 44 g·mol⁻¹)', r`n = \dfrac{m}{M} = \dfrac{11}{44}`],
        ['Calculate', r`n = 0{,}25\ \text{mol}`],
      ]),
      solution('Worked example: number of particles from moles', [
        ['Find the number of molecules in 0,25 mol of CO₂', r`N = n \times N_A = 0{,}25 \times 6{,}02\times10^{23}`],
        ['Calculate', r`N = 1{,}505\times10^{23}\ \text{molecules}`],
      ]),
      h2('Calculating molar mass'),
      p('Add up the relative atomic masses (from the periodic table) of every atom in the formula, multiplied by how many of each atom are present.'),
      solution('Worked example: molar mass of Ca₃(PO₄)₂', [
        ['Count atoms: 3 Ca, 2 P, 8 O (2 phosphate groups × 4 O each)', r`M = 3(40) + 2(31) + 8(16)`],
        ['Calculate', r`M = 120 + 62 + 128 = 310\ \text{g·mol}^{-1}`],
      ]),
      h2('Percentage composition'),
      formula('Percentage by mass of an element in a compound', r`\%\text{element} = \dfrac{\text{mass of that element in the formula}}{\text{molar mass of the compound}} \times 100`),
      solution('Worked example: % hydrogen in hydrogen peroxide H₂O₂ (M = 34 g·mol⁻¹)', [
        ['Mass of H in the formula: 2 × 1 = 2 g·mol⁻¹', r`\%H = \dfrac{2}{34}\times100`],
        ['Calculate', r`\%H \approx 5{,}88\%`],
      ]),
    ]),

    // ── 9. Concentration and water of crystallisation ──────────────────
    lesson(CH, 'chf-concentration', '9. Concentration & water of crystallisation', 14, [
      h2('Concentration of a solution'),
      defs([
        { term: 'Concentration (c)', meaning: 'The amount (in moles) of solute dissolved per unit volume (in dm³/litres) of solution. Unit: mol·dm⁻³.' },
        { term: 'Solute', meaning: 'The substance that is dissolved (the smaller amount).' },
        { term: 'Solvent', meaning: 'The substance that does the dissolving (usually the larger amount, often water).' },
        { term: 'Solution', meaning: 'A homogeneous mixture of a solute dissolved in a solvent.' },
      ]),
      formula('Concentration', r`c = \dfrac{n}{V}\qquad\text{or, combined with } n=\dfrac{m}{M},\qquad c = \dfrac{m}{MV}`),
      note('Always convert volume to dm³ (litres) before substituting: 1 dm³ = 1 000 cm³ (mL), so divide a volume in cm³ by 1 000 to get dm³.'),
      solution('Worked example: concentration of a solution', [
        ['5,85 g of NaCl (M = 58,5 g·mol⁻¹) is dissolved to make 500 cm³ of solution', r`n = \dfrac{m}{M} = \dfrac{5{,}85}{58{,}5} = 0{,}1\ \text{mol}`],
        ['Convert volume to dm³', r`V = \dfrac{500}{1\,000} = 0{,}5\ \text{dm}^3`],
        ['Calculate concentration', r`c = \dfrac{n}{V} = \dfrac{0{,}1}{0{,}5} = 0{,}2\ \text{mol·dm}^{-3}`],
      ]),
      h2('Water of crystallisation (hydrates)'),
      defs([
        { term: 'Hydrate', meaning: 'An ionic compound that has a fixed number of water molecules chemically bonded within its crystal structure.' },
        { term: 'Water of crystallisation', meaning: 'The water molecules that are part of a hydrate\'s crystal structure, shown in the formula after a dot, e.g. CuSO₄·5H₂O (copper(II) sulphate pentahydrate).' },
        { term: 'Anhydrous', meaning: 'Describes a substance with NO water of crystallisation (the water has been removed, usually by heating).' },
      ]),
      p('Heating a hydrate drives off the water of crystallisation, leaving the anhydrous compound (often with a visible colour change, e.g. blue CuSO₄·5H₂O turns white anhydrous CuSO₄). The mass lost on heating equals the mass of water driven off, which can be used to calculate the number of moles of water per mole of the anhydrous compound.'),
    ]),
  ],
};
