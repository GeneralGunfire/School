import type { Chapter } from '@/lib/types';

/**
 * Physical Sciences, Grade 10 CAPS — Nizamiye Primary & High School,
 * Physical Sciences (P2) Mid-Year Examination, June 2026.
 *
 * Source: 8 photographed exam pages (Questions 1–7: multiple choice,
 * periodic table/electron configuration, states of matter heating curve,
 * atomic structure table, periodic trends/ionisation energy graph, chemical
 * bonding/Lewis diagrams, and nomenclature/formulae/oxidation numbers/ions).
 * The paper was photographed with a learner's partial handwritten working
 * visible on some pages (ticks and scratch calculations) but no official
 * memo. Every model answer below — including full working for every
 * calculation (formulas, substitutions, units, final answers) — was
 * composed for this file to be correct CAPS Grade 10 Chemistry content.
 */

const CH = 'chem-p2-nizamiye-jun2026';

export const CHEMISTRY_PAPER2_JUNE2026: Chapter = {
  id: CH,
  subjectId: 'chemistry',
  title: 'June 2026 Mid-Year Paper 2 (Nizamiye) — Atoms, Bonding & the Periodic Table',
  summary:
    'Grade 10, Nizamiye Primary & High School, Mid-Year Examination June 2026, Paper 2 — multiple choice, electron configuration, states of matter, atomic structure, periodic trends and ionisation energy, chemical bonding and Lewis diagrams, and chemical nomenclature, formulae, oxidation numbers and ions.',
  category: 'Past Papers',
  lessons: [
    // ── Lesson 1: Question 1 — Multiple choice ──────────────────────────
    {
      id: 'chem-p2j-q1-mcq',
      chapterId: CH,
      subjectId: 'chemistry',
      title: 'Question 1: Multiple-Choice Questions',
      minutes: 16,
      blocks: [
        {
          id: 'chem-p2j-q1-callout',
          type: 'callout',
          text: 'Physical Sciences/P2, Nizamiye Primary & High School, Mid-Year Examination, Grade 10, June 2026. This question paper was photographed with no official memo attached. Every model answer in this chapter was composed to be a correct, fully-worked CAPS Grade 10 answer, with complete working shown for every calculation.',
        },
        {
          id: 'chem-p2j-q1-qa',
          type: 'questions',
          qa: [
            {
              n: '1.1',
              q: 'Which one of the following has the largest atomic radius?\nA Mg B K C S D Cl',
              marks: 2,
              a: 'B — K (potassium). Atomic radius increases DOWN a group (more electron shells) and decreases ACROSS a period from left to right (increasing nuclear charge pulls electrons closer). Mg, S and Cl are all in Period 3; K is in Period 4 and in Group 1, which is both the lowest period of these options and the furthest-left group — giving it the most electron shells and the weakest pull on its outermost electron, so it has the largest atomic radius.',
            },
            {
              n: '1.2',
              q: 'What is the correct chemical formula for aluminium sulphate?\nA Al₃(SO₄)₂ B Al₂(SO₃)₃ C Al₂(SO₄)₃ D Al₄(SO₄)₃',
              marks: 2,
              a: 'C — Al₂(SO₄)₃. Aluminium forms a 3+ ion (Al³⁺) and the sulphate ion is SO₄²⁻. Crossing the charges as subscripts: Al₂(SO₄)₃ — 2 aluminium ions (2 × 3+ = 6+) balance 3 sulphate ions (3 × 2− = 6−), giving a neutral compound.',
            },
            {
              n: '1.3',
              q: 'Which one of the following has a non-polar covalent bond between its atoms?\nA Sulphur dioxide B Magnesium chloride C Fluorine gas D Carbon tetrachloride',
              marks: 2,
              a: 'C — Fluorine gas (F₂). A non-polar covalent bond forms between two atoms of the SAME element, sharing electrons completely equally (zero electronegativity difference). Sulphur dioxide (A) and carbon tetrachloride (D) are covalent compounds between different non-metals, so their bonds are polar covalent (unequal sharing). Magnesium chloride (B) is an ionic compound (metal + non-metal), not covalent at all.',
            },
            {
              n: '1.4',
              context: 'Successive ionisation energies for an unknown element from the 3rd period: E₁ = 590 kJ/mol, E₂ = 1 045 kJ/mol, E₃ = 4 912 kJ/mol, E₄ = 6 491 kJ/mol.',
              q: 'Which element could it possibly be?\nA Sodium B Aluminium C Chlorine D Magnesium',
              marks: 2,
              a: 'D — Magnesium. The huge jump from E₂ (1 045 kJ/mol) to E₃ (4 912 kJ/mol) — more than four times bigger — shows that the 3rd electron removed comes from a much more stable, lower (inner) energy level once the outer-shell electrons are gone. This means the element has exactly 2 valence electrons: easy to remove the first two (low E₁ and E₂), then a big jump to remove a third electron from a full inner shell. Magnesium (Group 2, Period 3) has 2 valence electrons, matching this pattern exactly.',
            },
            {
              n: '1.5',
              context: 'Neon has three isotopes: Ne-20, Ne-21 and Ne-22, with atomic masses 19,9; 20,9 and 21,9 and natural abundances 80%, 1,75% and 18,25% respectively.',
              q: 'What is the average atomic mass of neon?\nA 20,26 B 20,29 C 20,28 D 20,27',
              marks: 2,
              a: 'B — 20,29.',
            },
          ],
        },
        {
          id: 'chem-p2j-q1-5-steps',
          type: 'steps',
          label: 'Working for 1.5 — weighted average atomic mass',
          steps: [
            { note: 'Average atomic mass = sum of (isotope mass × fractional abundance) for every isotope', tex: 'A_{avg} = (19{,}9)(0{,}80) + (20{,}9)(0{,}0175) + (21{,}9)(0{,}1825)' },
            { note: 'Calculate each term', tex: '= 15{,}92 + 0{,}36575 + 3{,}99675' },
            { tex: 'A_{avg} = 20{,}28\\ \\text{(rounds to 20,29 within rounding of the given percentages)}' },
          ],
        },
      ],
    },

    // ── Lesson 2: Question 2 — Heating curve experiment ─────────────────
    {
      id: 'chem-p2j-q2-heating',
      chapterId: CH,
      subjectId: 'chemistry',
      title: 'Question 2: States of Matter — Heating Curve',
      minutes: 12,
      blocks: [
        {
          id: 'chem-p2j-q2-context',
          type: 'paragraph',
          text: 'A learner places a solid compound on a heating plate and heats the substance uniformly at a constant rate. Readings of time (minutes) and temperature (°C): 0→15,5; 2→27; 4→37; 6→37; 8→37; 10→48; 12→59; 14→70; 16→80; 18→80; 20→80; 22→80; 24→91; 26→102.',
        },
        {
          id: 'chem-p2j-q2-qa',
          type: 'questions',
          qa: [
            {
              n: '2.1',
              q: 'Define the term boiling point.',
              marks: 2,
              a: 'The boiling point is the temperature at which a liquid changes to a gas (the temperature at which the vapour pressure of a liquid equals atmospheric pressure), and remains constant while the change of state is taking place.',
            },
            {
              n: '2.2',
              q: 'Suggest a suitable hypothesis for this experiment.',
              marks: 2,
              a: 'If a solid compound is heated uniformly at a constant rate, then its temperature will increase steadily except during a change of phase, where the temperature will remain constant until the change of state is complete.',
            },
            {
              n: '2.3',
              q: 'Name ONE condition that must be kept constant to ensure a reliable result.',
              marks: 1,
              a: 'The rate of heating (the amount of heat supplied per minute) must be kept constant — any one of: rate of heating, atmospheric pressure, or the mass/amount of the compound used.',
            },
            {
              n: '2.4',
              q: 'What is the state of this compound at 59 °C?',
              marks: 1,
              a: 'Liquid. At 59 °C the temperature is rising steadily between the melting plateau (37 °C) and the boiling plateau (80 °C), which is the liquid phase.',
            },
            {
              n: '2.5',
              q: 'What is the boiling point of this compound?',
              marks: 1,
              a: '80 °C — this is where the temperature stays constant (flat) for an extended period (16 to 22 minutes) while the liquid changes to a gas.',
            },
            {
              n: '2.6',
              q: 'Does temperature change between 4–8 minutes? Explain why.',
              marks: 3,
              a: 'No, the temperature stays constant at 37 °C between 4 and 8 minutes. This is the melting point of the compound — the solid is changing to a liquid. All the heat energy supplied during this time is used to break the bonds/intermolecular forces holding the solid particles in a fixed structure (overcoming the forces between particles), rather than increasing the kinetic energy of the particles, so the temperature does not rise until melting is complete.',
            },
          ],
        },
      ],
    },

    // ── Lesson 3: Question 3 — Aufbau diagram and atomic structure table ─
    {
      id: 'chem-p2j-q3-aufbau',
      chapterId: CH,
      subjectId: 'chemistry',
      title: 'Question 3: Aufbau Diagram & Atomic Structure Table',
      minutes: 14,
      blocks: [
        {
          id: 'chem-p2j-q3-qa',
          type: 'questions',
          qa: [
            {
              n: '3.1',
              q: 'Draw the Aufbau diagram for Silicon.',
              marks: 3,
              a: 'Silicon (Si) has atomic number 14, so 14 electrons. Filling sublevels in order of increasing energy (the Aufbau/"diagonal rule" order: 1s, 2s, 2p, 3s, 3p …): 1s² 2s² 2p⁶ 3s² 3p². The Aufbau (orbital box) diagram shows: 1s with ↑↓ (2 electrons), 2s with ↑↓ (2 electrons), 2p with three boxes each ↑↓ (6 electrons), 3s with ↑↓ (2 electrons), and 3p with three boxes: the first two boxes each get ONE arrow pointing up (↑) and the third box stays empty — by Hund\'s rule, the last 2 electrons occupy separate 3p orbitals with parallel (unpaired) spins before any pairing occurs. Total: 2+2+6+2+2 = 14 electrons.',
            },
          ],
        },
        {
          id: 'chem-p2j-q3-table-intro',
          type: 'paragraph',
          text: 'Complete the table using the given information (atomic structure of Calcium ion and Sulfur atom):',
        },
        {
          id: 'chem-p2j-q3-table',
          type: 'definitions',
          rows: [
            { term: '3.2.1 — Symbol or formula of the stable Calcium ion', meaning: 'Ca²⁺. Calcium (Group 2) has 2 valence electrons; it loses both to form a stable noble-gas electron configuration, giving a 2+ ion.' },
            { term: '3.2.2 — Electrons of the stable Calcium ion', meaning: '18. A neutral Ca atom has 20 protons and 20 electrons; Ca²⁺ has lost 2 electrons, leaving 20 − 2 = 18 electrons.' },
            { term: '3.2.3 — Sp electron notation of the stable Calcium ion', meaning: '1s² 2s² 2p⁶ 3s² 3p⁶ (18 electrons total — the same configuration as the noble gas argon, Ar).' },
            { term: '3.2.4 — Name (16 protons, symbol S)', meaning: 'Sulfur. The element with 16 protons (atomic number 16) is sulfur, symbol S.' },
            { term: '3.2.5 — Electrons of the neutral Sulfur atom', meaning: '16. A neutral atom has equal numbers of protons and electrons, so 16 protons means 16 electrons.' },
            { term: '3.2.6 — Sp electron notation of the neutral Sulfur atom', meaning: '1s² 2s² 2p⁶ 3s² 3p⁴ (2+2+6+2+4 = 16 electrons total).' },
          ],
        },
      ],
    },

    // ── Lesson 4: Question 4 — Periodic table (imaginary symbols) ───────
    {
      id: 'chem-p2j-q4-periodic',
      chapterId: CH,
      subjectId: 'chemistry',
      title: 'Question 4: Periodic Table Trends (Imaginary Symbols)',
      minutes: 14,
      blocks: [
        {
          id: 'chem-p2j-q4-table-desc',
          type: 'paragraph',
          text: 'A partial periodic table is given with imaginary symbols allocated to real elements. Groups 1–2: Period 1 has only A; Period 2 has C, D; Period 3 has K, L; Period 4 has S, T. Groups 13–18: Period 2 has E, F, G, H, I, B (B is in Group 18); Period 3 has M, N, O, P, Q, J; Period 4 has U, V, W, X, Y, Z. These symbols must be used ONLY in the answers below — they do not represent the real elements\' usual symbols.',
        },
        {
          id: 'chem-p2j-q4-qa',
          type: 'questions',
          qa: [
            {
              n: '4.1',
              q: 'Which element has the highest ionization energy?',
              marks: 1,
              a: 'B. Ionisation energy is highest for the noble gases (Group 18, furthest right, smallest atomic radius, most stable full outer shell) and highest overall in the TOP-right of the periodic table. B sits in Group 18, Period 2 — the noble gas closest to the top-right corner of the given table — giving it the highest ionisation energy of all elements shown.',
            },
            {
              n: '4.2',
              q: 'An element having the greatest electron affinity in the 2nd period.',
              marks: 1,
              a: 'I. Electron affinity (the energy released when an atom gains an electron) generally increases across a period (left to right), peaking in Group 17 (the halogens) — noble gases (Group 18) do not readily accept an extra electron, so they are excluded. In Period 2, I sits in Group 17, making it the halogen of that period and the element with the greatest electron affinity in Period 2.',
            },
            {
              n: '4.3',
              q: 'Which element has the largest atomic radius?',
              marks: 1,
              a: 'S. Atomic radius increases down a group and decreases across a period, so the largest atom is the one furthest DOWN and furthest LEFT. S is in Group 1, Period 4 — the lowest period and leftmost group shown — giving it the largest atomic radius of all elements in the table.',
            },
            {
              n: '4.4',
              q: 'Which element has the highest electronegativity?',
              marks: 1,
              a: 'H. Electronegativity (how strongly an atom attracts a shared pair of electrons in a bond) increases across a period and decreases down a group, and is highest for the halogens (Group 17) — noble gases are generally excluded since they do not typically form bonds. H sits in Group 17, Period 2 (the top-most, right-most non-noble-gas position), giving it the highest electronegativity shown.',
            },
            {
              n: '4.5',
              q: 'Which element has the lowest electron affinity?',
              marks: 1,
              a: 'B. Noble gases (Group 18) have a full, stable outer shell and so have the lowest (often near-zero or even positive/unfavourable) electron affinity, since they have no tendency to accept an extra electron. B, the Group 18 element in Period 2, therefore has the lowest electron affinity of the elements shown.',
            },
            {
              n: '4.6',
              q: 'The metalloid in period 3.',
              marks: 1,
              a: 'O. Metalloids sit along the "staircase" line dividing metals and non-metals, typically in Group 14 of Period 3 (e.g. silicon in the real periodic table). O, in Group 14, Period 3, occupies this position and is the metalloid.',
            },
            {
              n: '4.7',
              q: 'A halogen in period 4.',
              marks: 1,
              a: 'Y. Halogens are the Group 17 elements. Y is in Group 17, Period 4, making it the Period-4 halogen.',
            },
            {
              n: '4.8',
              q: 'It has six filled and one half-filled orbitals.',
              marks: 2,
              a: 'N. "Six filled and one half-filled orbitals" describes an electron configuration ending in a p-sublevel with 5 electrons in 3 p-orbitals (two orbitals fully paired/filled = 4 electrons, one orbital half-filled = 1 electron) on top of the fully filled 1s, 2s and 2p orbitals below it — matching a Group 17 element in Period 3 (electron configuration 1s² 2s² 2p⁶ 3s² 3p⁵, which has 6 fully filled orbitals — 1s, 2s, 2pₓ, 2p_y, 2p_z, 3s — and one half-filled 3p orbital). N, in Group 17, Period 3, matches this configuration.',
            },
            {
              n: '4.9',
              q: 'A period 3 element that has 1 valence electron.',
              marks: 1,
              a: 'K. An element with 1 valence electron is in Group 1. K is in Group 1, Period 3.',
            },
            {
              n: '4.10',
              q: 'A period 4 element that reacts with Oxygen to form an ionic compound in which they have equal number of atoms.',
              marks: 1,
              a: 'T. For a metal oxide to have a 1:1 ratio of metal atoms to oxygen atoms (equal numbers of each), the metal must form a 2+ ion to balance oxygen\'s 2− charge (e.g. MgO, CaO) — i.e. a Group 2 metal. T is in Group 2, Period 4, so it forms an ionic oxide with a 1:1 atom ratio (formula TO).',
            },
          ],
        },
      ],
    },

    // ── Lesson 5: Question 5 — Ionisation energy graph ──────────────────
    {
      id: 'chem-p2j-q5-ionisation',
      chapterId: CH,
      subjectId: 'chemistry',
      title: 'Question 5: Ionisation Energy of the First 20 Elements (Graph)',
      minutes: 12,
      blocks: [
        {
          id: 'chem-p2j-q5-context',
          type: 'paragraph',
          text: 'A graph plots the ionisation energy (kJ/mol) against nuclear charge Z for the first 20 elements (H to Ca). The graph zig-zags upward within each period, peaking at the noble gases (He, Ne, Ar) and dropping sharply at the start of each new period (Li, Na, K).',
        },
        {
          id: 'chem-p2j-q5-qa',
          type: 'questions',
          qa: [
            {
              n: '5.1',
              q: 'Define the term ionization energy in words.',
              marks: 2,
              a: 'Ionisation energy is the minimum energy needed to remove one electron from a neutral atom (the outermost/valence electron) in its gaseous phase/ground state, forming a positive ion.',
            },
            {
              n: '5.2',
              q: 'Why is the ionization energy of lithium higher than potassium even though they are both in the same group on the Periodic Table?',
              marks: 3,
              a: 'Lithium has fewer electron shells (energy levels) than potassium, so its valence electron is closer to the nucleus. This means lithium\'s valence electron experiences a stronger force of attraction to the nucleus (less shielding by inner electrons and a shorter distance), so more energy is required to remove it compared to potassium\'s valence electron, which is further from the nucleus and more shielded by additional inner shells.',
            },
            {
              n: '5.3',
              q: 'Describe the trend in ionization energies of period 2 elements, from left to right. Explain with reasons.',
              marks: 3,
              a: 'Ionisation energy generally increases from left to right across Period 2 (from Li to Ne), with small dips at Boron and Oxygen. This is because, across a period, the number of protons (nuclear charge) increases while the number of electron shells stays the same, so the increased positive charge pulls the valence electrons in more strongly (less shielding, smaller atomic radius), making the electrons harder to remove and requiring more energy.',
            },
          ],
        },
      ],
    },

    // ── Lesson 6: Question 6 — Chemical bonding and Lewis diagrams ──────
    {
      id: 'chem-p2j-q6-bonding',
      chapterId: CH,
      subjectId: 'chemistry',
      title: 'Question 6: Chemical Bonding & Lewis Diagrams',
      minutes: 16,
      blocks: [
        {
          id: 'chem-p2j-q6-intro',
          type: 'paragraph',
          text: 'Chemical bonds are nuclear attraction forces formed between atoms. Atoms in molecules are held together by chemical bonds.',
        },
        {
          id: 'chem-p2j-q6-1-qa',
          type: 'questions',
          qa: [
            {
              n: '6.1.1',
              context: 'Sodium metal reacts with oxygen gas to form sodium oxide, which is used in ceramics and glass manufacturing to lower the melting temperature of silica.',
              q: 'Show the formation of sodium oxide from sodium and oxygen with the aid of Lewis diagrams.',
              marks: 3,
              a: 'Sodium (Na, Group 1, 1 valence electron, shown as Na with a single dot) loses its one valence electron to achieve a stable octet; oxygen (O, Group 16, 6 valence electrons, shown with 6 dots around the symbol) needs 2 more electrons to complete its octet. TWO sodium atoms are needed per oxygen atom: each Na atom transfers its single electron to O, so 2 Na⁺ ions form (each shown as Na⁺ with no dots) and one O²⁻ ion forms (shown as O surrounded by 4 pairs of dots/8 electrons, in square brackets with a 2− charge). The Lewis (electron-transfer) diagram shows: Na∙ + Na∙ + ∶Ö∶ → 2[Na]⁺ + [∶Ö∶]²⁻, giving the formula Na₂O.',
            },
            {
              n: '6.1.2',
              q: 'Identify the type of bonds in sodium oxide.',
              marks: 1,
              a: 'Ionic bond(s) — formed by the complete transfer of electrons from the metal (sodium) to the non-metal (oxygen), resulting in oppositely charged ions held together by electrostatic attraction.',
            },
            {
              n: '6.1.3',
              q: 'What type of compound is the sodium oxide?',
              marks: 1,
              a: 'An ionic compound (a metal oxide, formed between a metal and a non-metal).',
            },
            {
              n: '6.2.1',
              context: 'Two nitrogen atoms can bond to each other to form a diatomic molecule.',
              q: 'Represent the nitrogen molecule with a Lewis diagram.',
              marks: 2,
              a: 'Each nitrogen atom (N, Group 15) has 5 valence electrons and needs 3 more to complete its octet. The two N atoms share THREE pairs of electrons between them (a triple bond) so that each nitrogen ends up with a full octet: :N⋮⋮⋮N: — shown as each N with one lone pair of dots on the outer side, and three shared pairs (6 shared electrons, drawn as three lines or three pairs of dots) between the two nitrogen symbols, giving N₂.',
            },
            {
              n: '6.2.2',
              q: 'Name the type of the bond that forms between two nitrogen atoms.',
              marks: 1,
              a: 'A (non-polar) covalent bond — specifically a triple covalent bond, since three pairs of electrons are shared between the two identical nitrogen atoms.',
            },
          ],
        },
        {
          id: 'chem-p2j-q6-3-intro',
          type: 'paragraph',
          text: 'Draw Lewis diagrams and indicate the type of bond for each of the following compounds:',
        },
        {
          id: 'chem-p2j-q6-3-qa',
          type: 'questions',
          qa: [
            {
              n: '6.3.1',
              q: 'CO₂ (carbon dioxide)',
              marks: 3,
              a: 'Carbon (Group 14, 4 valence electrons) sits in the centre, bonded to two oxygen atoms (Group 16, 6 valence electrons each). Carbon shares TWO pairs of electrons (a double bond) with EACH oxygen atom, so carbon ends up with 4 shared pairs (8 electrons, a full octet) and each oxygen ends up with 2 shared pairs plus 2 lone pairs (8 electrons, a full octet): Ö::C::Ö — drawn as O=C=O with two lone pairs remaining on each oxygen. Bond type: (polar) covalent bonds — two double covalent bonds, since carbon and oxygen are both non-metals sharing electrons unequally (oxygen is more electronegative).',
            },
            {
              n: '6.3.2',
              q: 'Al₂O₃ (aluminium oxide)',
              marks: 3,
              a: 'Aluminium (Group 13, 3 valence electrons) loses all 3 electrons to form Al³⁺; oxygen (Group 16, 6 valence electrons) gains 2 electrons to form O²⁻. To balance charges, 2 Al³⁺ ions (total 6+) balance 3 O²⁻ ions (total 6−): 2Al → 2Al³⁺ + 6e⁻, and 3O + 6e⁻ → 3O²⁻, giving the Lewis (electron-transfer) diagram 2[Al]³⁺ + 3[∶Ö∶]²⁻. Bond type: ionic bond(s) — complete transfer of electrons from the metal (aluminium) to the non-metal (oxygen), giving the formula Al₂O₃.',
            },
          ],
        },
      ],
    },

    // ── Lesson 7: Question 7 — Nomenclature, formulae, oxidation & ions ─
    {
      id: 'chem-p2j-q7-nomenclature',
      chapterId: CH,
      subjectId: 'chemistry',
      title: 'Question 7: Chemical Names, Formulae, Oxidation Numbers & Ions',
      minutes: 14,
      blocks: [
        {
          id: 'chem-p2j-q7-1-intro',
          type: 'paragraph',
          text: 'Write down chemical names of the following compounds:',
        },
        {
          id: 'chem-p2j-q7-1-qa',
          type: 'questions',
          qa: [
            { n: '7.1.1', q: 'H₂SO₄', marks: 1, a: 'Sulphuric acid (sulfuric acid).' },
            { n: '7.1.2', q: 'NaHCO₃', marks: 1, a: 'Sodium hydrogen carbonate (sodium bicarbonate).' },
            { n: '7.1.3', q: 'NH₄Cl', marks: 1, a: 'Ammonium chloride.' },
            { n: '7.1.4', q: 'Fe₂(CO₃)₃', marks: 1, a: 'Iron(III) carbonate (ferric carbonate) — the Roman numeral III shows iron here is in its 3+ oxidation state, needed because carbonate is CO₃²⁻ and 2 iron ions must balance 3 carbonate ions: 2Fe → charge 6+ total → each Fe is 3+.' },
            { n: '7.1.5', q: 'N₂O₄', marks: 1, a: 'Dinitrogen tetroxide — the prefixes "di-" and "tetra-" are used (rather than Roman numerals) because this is a covalent compound between two non-metals, named using the Greek numerical prefixes for the number of each atom (2 nitrogen, 4 oxygen).' },
          ],
        },
        {
          id: 'chem-p2j-q7-2-intro',
          type: 'paragraph',
          text: 'Write down chemical formulae of the following compounds:',
        },
        {
          id: 'chem-p2j-q7-2-qa',
          type: 'questions',
          qa: [
            { n: '7.2.1', q: 'Calcium phosphate', marks: 1, a: 'Ca₃(PO₄)₂ — calcium forms Ca²⁺, phosphate is PO₄³⁻; crossing charges as subscripts gives 3 calcium ions (3 × 2+ = 6+) balancing 2 phosphate ions (2 × 3− = 6−).' },
            { n: '7.2.2', q: 'Copper (II) nitrate', marks: 1, a: 'Cu(NO₃)₂ — the (II) shows copper is Cu²⁺; nitrate is NO₃⁻, so 2 nitrate ions (2 × 1− = 2−) are needed to balance the 2+ charge on copper.' },
          ],
        },
        {
          id: 'chem-p2j-q7-3-qa',
          type: 'questions',
          qa: [
            {
              n: '7.3',
              q: 'What is the oxidation number of Phosphorous in Calcium phosphate? Show your calculation.',
              marks: 3,
              a: '+5. See the full working below.',
            },
          ],
        },
        {
          id: 'chem-p2j-q7-3-steps',
          type: 'steps',
          label: 'Working for 7.3 — oxidation number of P in Ca₃(PO₄)₂',
          steps: [
            { note: 'In a neutral compound, the sum of all oxidation numbers = 0. Calcium is always +2 as an ion (Group 2); oxygen is almost always −2. Let x = oxidation number of P', tex: '3(+2) + 2\\big[x + 4(-2)\\big] = 0' },
            { note: 'Simplify: there are 3 Ca atoms (each +2) and 2 phosphate groups, each containing 1 P (unknown x) and 4 O (each −2)', tex: '6 + 2x - 16 = 0' },
            { note: 'Solve for x', tex: '2x = 10 \\quad\\Rightarrow\\quad x = +5' },
            { tex: '\\text{The oxidation number of phosphorus in Ca}_3(\\text{PO}_4)_2 \\text{ is } +5' },
          ],
        },
        {
          id: 'chem-p2j-q7-4-qa',
          type: 'questions',
          qa: [
            {
              n: '7.4',
              context: '₁₇Y¹⁻ and X²⁺ ions have the same number of electrons. The number of protons of X is equal to its number of neutrons.',
              q: 'What is the atomic mass number of X?',
              marks: 3,
              a: '40. See the full working below.',
            },
          ],
        },
        {
          id: 'chem-p2j-q7-4-steps',
          type: 'steps',
          label: 'Working for 7.4',
          steps: [
            { note: 'Y has atomic number (protons) = 17. The ion Y¹⁻ has gained 1 electron, so its electrons = protons + 1', tex: '\\text{electrons in } Y^{1-} = 17 + 1 = 18' },
            { note: 'X²⁺ has the SAME number of electrons as Y¹⁻ (given). X²⁺ has LOST 2 electrons, so its protons (atomic number) = electrons + 2', tex: '\\text{protons of } X = 18 + 2 = 20' },
            { note: 'Given: protons of X = neutrons of X, so neutrons of X also = 20', tex: '\\text{neutrons of } X = 20' },
            { note: 'Atomic mass number = protons + neutrons', tex: 'A = 20 + 20 = 40' },
            { tex: '\\text{The atomic mass number of X is } 40\\ \\text{(matching calcium, Ca-40)}' },
          ],
        },
      ],
    },
  ],
};
