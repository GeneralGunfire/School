import type { Chapter } from '@/lib/types';

/**
 * Physical Sciences, Grade 10 CAPS — North West Department of Basic
 * Education, Paper 2 (Chemistry), November 2024.
 *
 * In CAPS Grade 10 Physical Sciences, Paper 2 covers the Chemistry content
 * (matter and materials, chemical change, chemical quantities) — it is
 * filed here under the app's `chemistry` subject, as the Physics content
 * from the same paper set is filed separately under `physical-sciences`
 * (Paper 1).
 *
 * Source: 8 photographed exam pages (Questions 1–8: matter classification,
 * atomic structure, states of matter/kinetic theory, isotopes & bonding,
 * periodic trends, physical/chemical change & stoichiometry, concentration
 * & hydrates, and the mole/molar volume). The paper itself was printed as a
 * clean question paper with no memo; some pages carried a learner's own
 * handwritten attempt (in orange/pencil), which was not relied on. Every
 * model answer below — including full working for every calculation
 * (formulas, substitutions, units, final answers) — was composed for this
 * file to be correct CAPS Grade 10 Chemistry content, since no official
 * memo was photographed.
 */

const CH = 'chem-p2-nw-2024';

export const CHEMISTRY_PAPER1: Chapter = {
  id: CH,
  subjectId: 'chemistry',
  title: 'November 2024 Paper 2 (NW) — Matter, Atoms & Chemical Change',
  summary:
    'Grade 10, North West Department of Basic Education, November 2024, Paper 2 (the Chemistry paper of the Physical Sciences exam) — classification of matter, atomic structure and isotopes, states of matter, periodic trends, chemical reactions and stoichiometry, concentration and hydrates, and the mole.',
  category: 'Past Papers',
  lessons: [
    // ── Lesson 1: Question 1 — Multiple choice ──────────────────────────
    {
      id: 'chem-p1-q1-mcq',
      chapterId: CH,
      subjectId: 'chemistry',
      title: 'Question 1: Multiple-Choice Questions',
      minutes: 14,
      blocks: [
        {
          id: 'chem-p1-q1-callout',
          type: 'callout',
          text: 'Physical Sciences/P2, NW/November 2024, Grade 10 — the Chemistry paper of the exam. This question paper was photographed with no memo attached. Every model answer in this chapter was composed to be a correct, fully-worked CAPS Grade 10 answer, with complete working shown for every calculation.',
        },
        {
          id: 'chem-p1-q1-qa',
          type: 'questions',
          qa: [
            {
              n: '1.1',
              q: 'The process when a solid substance changes directly to gaseous phase is called …\nA evaporation B condensation C sublimation D boiling',
              marks: 2,
              a: 'C — sublimation. Sublimation is the direct change of state from solid to gas, skipping the liquid phase (e.g. dry ice/solid CO₂, or iodine). Evaporation and boiling are liquid→gas, condensation is gas→liquid.',
            },
            {
              n: '1.2',
              q: 'Which ONE of the following substances is a pure substance?\nA Steel B Sulphur C Juice D Salt water',
              marks: 2,
              a: 'B — Sulphur. Sulphur is an element, which is a pure substance (fixed composition, cannot be separated by physical means). Steel is an alloy (mixture of metals), and juice and salt water are both mixtures (solutions).',
            },
            {
              n: '1.3',
              q: 'Which ONE of the following represents the electronic structure of Phosphorus (P)?\nA 1s²2s²2p⁶3s² B 1s²2s²2p⁶3s²3p³ C 1s²2s²2p⁶3s²3p⁵ D 1s²2s²2p⁶3s²3p⁶',
              marks: 2,
              a: 'B — 1s²2s²2p⁶3s²3p³. Phosphorus has atomic number 15, so it has 15 electrons. Filling sublevels in order: 1s² (2) + 2s² (2) + 2p⁶ (6) + 3s² (2) + 3p³ (3) = 2+2+6+2+3 = 15 electrons total, matching P\'s position in Group 15 (3 electrons in the 3p sublevel).',
            },
            {
              n: '1.4',
              q: 'In which ONE of the following compounds do covalent bonds occur between elementary particles?\nA Sodium chloride B Mercury C Ammonia D Carbon',
              marks: 2,
              a: 'C — Ammonia (NH₃). Ammonia is a molecular compound formed between two non-metals (nitrogen and hydrogen) sharing electrons — a covalent bond. Sodium chloride (A) is ionic (metal + non-metal), mercury (B) is a metal held by metallic bonding, and carbon (D) on its own is simply an element, not a compound.',
            },
            {
              n: '1.5',
              q: 'What is the percentage of hydrogen in a molecule of hydrogen peroxide with a molar mass of 34 g·mol⁻¹, if one mole of hydrogen reacts with one mole of oxygen?',
              marks: 2,
              a: 'D — 5,88 %.',
            },
          ],
        },
        {
          id: 'chem-p1-q1-5-steps',
          type: 'steps',
          label: 'Working for 1.5',
          steps: [
            { note: 'Hydrogen peroxide is H₂O₂ — formed from 2 mol H atoms and 2 mol O atoms (one mole of H₂ reacting with one mole of O₂ gives H₂O₂, so 2 H atoms and 2 O atoms per molecule)', tex: '\\%H = \\dfrac{\\text{mass of H in formula}}{\\text{molar mass of } H_2O_2} \\times 100' },
            { note: 'Mass of H in the formula: 2 × 1 g·mol⁻¹ = 2 g·mol⁻¹ (using relative atomic mass of H ≈ 1)', tex: '\\%H = \\dfrac{2}{34}\\times100' },
            { tex: '\\%H \\approx 5{,}88\\%' },
          ],
        },
        {
          id: 'chem-p1-q1-qa-cont',
          type: 'questions',
          qa: [
            {
              n: '1.6',
              q: 'If 30 g of reactant A reacts completely with 25 g of reactant B, which ONE of the following statements is CORRECT?\nA The total mass of the products will be equal to 55 g.\nB The total mass of products for any unreacted reactants will be less than 55 g.\nC The total mass of products for any unreacted reactants will be greater than 55 g.\nD The total mass of products for any unreacted reactants will be 55 g.',
              marks: 2,
              a: 'A — The total mass of the products will be equal to 55 g. By the Law of Conservation of Mass, mass is neither created nor destroyed in a chemical reaction — the total mass of reactants that actually react equals the total mass of products formed. Since the question states the 30 g of A reacts completely with the 25 g of B (no leftover reactant), the products must total 30 + 25 = 55 g.',
            },
            {
              n: '1.7',
              context: 'Two identical flasks at the same temperature and pressure: one holds ozone (O₃) with mass 0,48 g, the other holds an unknown gas X with mass 0,34 g.',
              q: 'The mass of the ozone gas in the flask is 0,48 g and the mass of gas X in the flask is 0,34 g. Gas X is:\nA O₂ B SO₂ C H₂S D NH₃',
              marks: 2,
              a: 'C — H₂S.',
            },
          ],
        },
        {
          id: 'chem-p1-q1-7-steps',
          type: 'steps',
          label: 'Working for 1.7',
          steps: [
            { note: 'Equal volumes of gas at the same temperature and pressure contain equal numbers of moles (Avogadro\'s law), so the two flasks hold the same number of moles of gas — set up a mole ratio using molar mass M = mass/n', tex: 'n_{O_3} = n_X\\ \\Rightarrow\\ \\dfrac{m_{O_3}}{M_{O_3}} = \\dfrac{m_X}{M_X}' },
            { note: 'Molar mass of ozone O₃ = 3 × 16 = 48 g·mol⁻¹', tex: '\\dfrac{0{,}48}{48} = \\dfrac{0{,}34}{M_X}' },
            { note: 'Solve for $M_X$', tex: 'M_X = \\dfrac{0{,}34 \\times 48}{0{,}48} = 34\\ \\text{g·mol}^{-1}' },
            { tex: '\\text{H}_2\\text{S has } M = 2(1) + 32 = 34\\ \\text{g·mol}^{-1} \\checkmark\\ \\text{(matches gas X)}' },
          ],
        },
      ],
    },

    // ── Lesson 2: Question 2 — Classification of matter ─────────────────
    {
      id: 'chem-p1-q2-matter',
      chapterId: CH,
      subjectId: 'chemistry',
      title: 'Question 2: Classifying Matter & Material Properties',
      minutes: 12,
      blocks: [
        {
          id: 'chem-p1-q2-context',
          type: 'paragraph',
          text: 'A table lists substances A–F: A Cobalt, B Gold, C Phosphorus, D Silicon, E Air, F Ammonium nitrate.',
        },
        {
          id: 'chem-p1-q2-qa',
          type: 'questions',
          qa: [
            {
              n: '2.1.1',
              q: 'Identify the ELEMENT that has a dull surface and cannot conduct electricity.',
              marks: 1,
              a: 'C — Phosphorus. Phosphorus is a non-metal: non-metals typically have a dull (non-lustrous) surface and are poor conductors of electricity.',
            },
            {
              n: '2.1.2',
              q: 'Identify ONE substance that is ductile.',
              marks: 1,
              a: 'A or B — Cobalt or Gold (both are metals; ductility, the ability to be drawn into wires, is a characteristic metallic property. Gold is the classic example of an extremely ductile metal).',
            },
            {
              n: '2.1.3',
              q: 'Which element has magnetic properties?',
              marks: 1,
              a: 'A — Cobalt. Cobalt is one of the few naturally ferromagnetic elements (along with iron and nickel).',
            },
            {
              n: '2.1.4',
              q: 'Identify the element that is a metalloid.',
              marks: 1,
              a: 'D — Silicon. Silicon lies along the "staircase" line of the periodic table and shows intermediate (metalloid) properties — e.g. it is a semiconductor.',
            },
            {
              n: '2.1.5',
              q: 'Write down the chemical formula for substance F (Ammonium nitrate).',
              marks: 2,
              a: 'NH₄NO₃ — formed from the ammonium ion (NH₄⁺) and the nitrate ion (NO₃⁻) combining in a 1:1 ratio, since both ions carry a single charge.',
            },
            {
              n: '2.2.1',
              q: 'The base of a frying pan is made from aluminium. What benefit does this give the base of the pan?',
              marks: 1,
              a: 'Aluminium is a good conductor of heat (thermal conductor), so it allows heat from the stove to spread through the base and transfer efficiently into the food.',
            },
            {
              n: '2.2.2',
              q: 'The handle of the pan is made of hard plastic. Why would the handle of the pan be made of plastic?',
              marks: 1,
              a: 'Plastic is a poor conductor of heat (a thermal insulator), so the handle stays cool and safe to hold even while the metal base is hot.',
            },
          ],
        },
      ],
    },

    // ── Lesson 3: Question 3 — States of matter / heating curve ────────
    {
      id: 'chem-p1-q3-states',
      chapterId: CH,
      subjectId: 'chemistry',
      title: 'Question 3: States of Matter — the Heating Curve',
      minutes: 14,
      blocks: [
        {
          id: 'chem-p1-q3-context',
          type: 'paragraph',
          text: 'Grade 10 learners conducted an experiment to determine the heating curve of water by using ice cubes, heated in a beaker (apparatus X) on a retort stand over a Bunsen burner, with the ice stirred using a glass rod. The resulting temperature-vs-time graph starts at −20 °C, rises to 0 °C at t₁, stays flat at 0 °C until t₂ (melting), rises again to 100 °C at t₃, stays flat at 100 °C until t₄ (boiling), then rises further (as vapour) up to t₅.',
        },
        {
          id: 'chem-p1-q3-qa',
          type: 'questions',
          qa: [
            {
              n: '3.1',
              q: 'Define the term temperature.',
              marks: 2,
              a: 'Temperature is a measure of the average kinetic energy of the particles in a substance (how hot or cold a substance is), measured in degrees Celsius (°C) or Kelvin (K).',
            },
            {
              n: '3.2',
              q: 'Name the apparatus labelled X.',
              marks: 1,
              a: 'A beaker (containing the ice/water, heated using a Bunsen burner on a retort stand/tripod).',
            },
            {
              n: '3.3',
              q: 'Why is it important to continuously stir the melting ice with a glass rod?',
              marks: 1,
              a: 'Stirring ensures the heat is evenly distributed throughout the ice/water mixture, so that an accurate, uniform temperature reading is obtained (preventing localised hot/cold spots from giving a misleading thermometer reading).',
            },
            {
              n: '3.4.1',
              q: 'Name the process taking place between t₁ and t₂ (the flat section at 0 °C).',
              marks: 1,
              a: 'Melting (fusion) — the change of state from solid (ice) to liquid (water) at constant temperature.',
            },
            {
              n: '3.4.2',
              q: 'Will the water particles move SLOWER or FASTER between t₂ and t₃, when compared to the movement of the particles between 0 and t₁? Give a reason for your answer.',
              marks: 2,
              a: 'FASTER. Between 0 and t₁ the ice is being heated but is still solid (particles only vibrate in fixed positions, gaining kinetic energy as temperature rises from −20 °C to 0 °C). Between t₂ and t₃, the substance is liquid water being heated from 0 °C to 100 °C, so its temperature (and hence average kinetic energy / particle speed) keeps increasing — and in the liquid phase, particles are also free to move past one another, so they move faster overall than the vibrating particles of the colder solid.',
            },
            {
              n: '3.4.3',
              q: 'Will the potential energy between t₃ and t₄ INCREASE, DECREASE or REMAIN THE SAME?',
              marks: 1,
              a: 'INCREASE. Between t₃ and t₄ the water is boiling (liquid → gas) at a constant temperature, so all the heat energy supplied goes into overcoming the intermolecular forces of attraction between particles (increasing their potential energy), not into increasing kinetic energy/temperature.',
            },
            {
              n: '3.4.4',
              q: 'Can the particles be compressed between t₄ and t₅? Answer YES or NO only.',
              marks: 1,
              a: 'YES. Between t₄ and t₅ the substance is a gas (water vapour/steam), and gas particles are far apart with large spaces between them, so they can be compressed (pushed closer together), unlike particles in a solid or liquid.',
            },
            {
              n: '3.4.5',
              q: 'The forces between particles of ethanol are weaker than those in water. Will the boiling point for ethanol be GREATER THAN or LESS THAN 100 °C under the same standard conditions?',
              marks: 1,
              a: 'LESS THAN 100 °C. Weaker intermolecular forces require less energy (and therefore a lower temperature) to overcome and separate the particles into the gas phase, so a substance with weaker forces than water boils at a lower temperature than water\'s 100 °C.',
            },
          ],
        },
      ],
    },

    // ── Lesson 4: Question 4 — Isotopes, bonding, Lewis diagrams ────────
    {
      id: 'chem-p1-q4-isotopes',
      chapterId: CH,
      subjectId: 'chemistry',
      title: 'Question 4: Isotopes, Bonding and Lewis Diagrams',
      minutes: 16,
      blocks: [
        {
          id: 'chem-p1-q4-context',
          type: 'paragraph',
          text: 'Naturally occurring oxygen consists of three isotopes: O-16 at 99,76% abundance, O-17 at 0,04% abundance, and O-18 at an unknown percentage abundance X. Aluminium is a metal and a good conductor of electricity. Aluminium reacts with nitrogen according to: Al + N₂ → AlN (unbalanced, as printed).',
        },
        {
          id: 'chem-p1-q4-qa',
          type: 'questions',
          qa: [
            {
              n: '4.1.1',
              q: 'Define isotopes.',
              marks: 2,
              a: 'Isotopes are atoms of the same element (same number of protons/atomic number) that have a different number of neutrons, and therefore a different mass number (atomic mass).',
            },
            {
              n: '4.1.2',
              q: 'What percentage abundance does O-18 occupy?',
              marks: 2,
              a: 'X = 0,20% (working below).',
            },
          ],
        },
        {
          id: 'chem-p1-q4-1-2-steps',
          type: 'steps',
          label: 'Working for 4.1.2',
          steps: [
            { note: 'The three abundances must add up to 100%', tex: '99{,}76\\% + 0{,}04\\% + X = 100\\%' },
            { tex: 'X = 100 - 99{,}76 - 0{,}04' },
            { tex: 'X = 0{,}20\\%' },
          ],
        },
        {
          id: 'chem-p1-q4-qa2',
          type: 'questions',
          qa: [
            {
              n: '4.1.3',
              q: 'Calculate the relative atomic mass of oxygen.',
              marks: 4,
              a: 'Relative atomic mass of oxygen ≈ 16,00 (working below).',
            },
          ],
        },
        {
          id: 'chem-p1-q4-1-3-steps',
          type: 'steps',
          label: 'Working for 4.1.3',
          steps: [
            { note: 'Relative atomic mass is the weighted average of each isotope\'s mass, weighted by its fractional abundance', tex: 'A_r = \\sum (\\text{isotope mass} \\times \\text{fractional abundance})' },
            { note: 'Substitute mass numbers 16, 17, 18 with abundances 99,76%, 0,04%, 0,20% (as fractions: ÷100)', tex: 'A_r = (16)(0{,}9976) + (17)(0{,}0004) + (18)(0{,}0020)' },
            { tex: 'A_r = 15{,}9616 + 0{,}0068 + 0{,}0360' },
            { tex: 'A_r \\approx 16{,}00' },
          ],
        },
        {
          id: 'chem-p1-q4-qa3',
          type: 'questions',
          qa: [
            {
              n: '4.2.1',
              q: 'Name the type of bonding between the aluminium atoms that makes it a good conductor of electricity.',
              marks: 1,
              a: 'Metallic bonding — a "sea" of delocalised (free-moving) valence electrons shared among a lattice of positive metal ions allows charge to flow through the metal.',
            },
            {
              n: '4.2.2',
              q: 'State AND explain another property of aluminium that can be attributed to the type of bond identified.',
              marks: 2,
              a: 'Malleability (can be hammered/rolled into sheets without breaking). This is because the layers of positive metal ions in metallic bonding can slide over one another while still remaining held together by the surrounding "sea" of delocalised electrons, so the metal bends/deforms rather than shattering.',
            },
            {
              n: '4.2.3',
              q: 'Aluminium reacts with nitrogen according to: Al + N₂ → AlN. Name the product that forms.',
              marks: 2,
              a: 'Aluminium nitride (AlN) — an ionic compound formed between the metal aluminium and the non-metal nitrogen.',
            },
            {
              n: '4.2.4',
              q: 'Use Lewis diagrams to show how the product is formed.',
              marks: 4,
              a: 'Aluminium (Group 13) has 3 valence electrons; it loses all 3 to form Al³⁺. Nitrogen (Group 15) has 5 valence electrons; it needs 3 more electrons to complete its octet, gaining them to form N³⁻. Balancing charges requires 1 Al³⁺ for every 1 N³⁻ (charges of +3 and −3 cancel). Lewis diagram: Al atom shown with 3 dots transferring all three to N (shown with 5 dots, becoming 8 dots/four pairs around N) — giving [Al]³⁺[​:N:​]³⁻ with N surrounded by 8 electrons (a full octet) and Al left with none (an empty outer shell, typical for a Group 13 metal ion). The balanced equation is 2Al + N₂ → 2AlN.',
            },
          ],
        },
      ],
    },

    // ── Lesson 5: Question 5 — Periodic trends ──────────────────────────
    {
      id: 'chem-p1-q5-periodic',
      chapterId: CH,
      subjectId: 'chemistry',
      title: 'Question 5: Periodic Trends — Ionisation Energy',
      minutes: 14,
      blocks: [
        {
          id: 'chem-p1-q5-context',
          type: 'paragraph',
          text: 'A graph shows the first ionisation energies of the Period 3 elements (Na through Ar). The general shape rises from Na (lowest, ≈ 490 kJ·mol⁻¹) to Ar (highest, ≈ 1520 kJ·mol⁻¹), with two small dips: Mg is higher than Al, and P is higher than S (both are the well-known exceptions to the general left-to-right increasing trend, caused by extra electron-pair/sub-shell stability).',
        },
        {
          id: 'chem-p1-q5-qa',
          type: 'questions',
          qa: [
            {
              n: '5.1',
              q: 'Define ionisation energy.',
              marks: 2,
              a: 'Ionisation energy is the minimum energy required to remove one electron from a neutral atom in its gaseous phase, forming a positive ion (cation).',
            },
            {
              n: '5.2',
              q: 'Describe the general trend in the first ionisation energies from sodium to argon.',
              marks: 2,
              a: 'First ionisation energy generally increases from left to right across Period 3 (from sodium to argon). This is because, across a period, the number of protons (nuclear charge) increases while electrons are added to the same outer energy level (similar shielding), so the increased nuclear attraction pulls the outer electrons in more tightly, making them harder to remove.',
            },
            {
              n: '5.3',
              q: 'Explain the difference in the first ionisation energies of magnesium and chlorine.',
              marks: 4,
              a: 'Chlorine has a higher first ionisation energy than magnesium. Moving across Period 3 from Mg to Cl, the number of protons in the nucleus increases while the electrons added are all in the same outer (third) energy level, so shielding stays roughly constant. The greater nuclear charge in chlorine pulls its valence electrons closer to the nucleus and attracts them more strongly, so chlorine\'s atomic radius is smaller and more energy is needed to remove an outer electron from chlorine than from magnesium.',
            },
            {
              n: '5.4',
              q: 'How will the SECOND ionisation energy of sodium compare to its FIRST ionisation energy? Choose from GREATER THAN, EQUAL TO or LESS THAN. Explain your answer.',
              marks: 4,
              a: 'GREATER THAN. Sodium\'s first electron is removed from its outer (3rd) energy level, which is far from the nucleus and only loosely held (giving sodium a low first ionisation energy). After this electron is removed, Na⁺ has a full, stable 2nd-level (noble-gas) configuration, and the second electron must now be removed from this inner, full shell, which is much closer to the nucleus and experiences far less shielding. This requires significantly more energy, so the second ionisation energy of sodium is much greater than its first.',
            },
          ],
        },
      ],
    },

    // ── Lesson 6: Question 6 — Chemical change & stoichiometry ──────────
    {
      id: 'chem-p1-q6-change',
      chapterId: CH,
      subjectId: 'chemistry',
      title: 'Question 6: Chemical Change, Balancing and Stoichiometry',
      minutes: 16,
      blocks: [
        {
          id: 'chem-p1-q6-context',
          type: 'paragraph',
          text: 'The balanced equation for a reaction is given: 2Pb(NO₃)₂(s) → 2PbO(s) + 4NO₂(g) + O₂(g).',
        },
        {
          id: 'chem-p1-q6-qa',
          type: 'questions',
          qa: [
            {
              n: '6.1.1',
              q: 'Classify as a PHYSICAL or CHEMICAL change: Iron metal is melted. Explain your answer.',
              marks: 2,
              a: 'PHYSICAL change. Melting only changes the state of the iron (solid → liquid) — no new substance is formed, and the iron can be re-solidified by cooling; its chemical composition/identity is unchanged.',
            },
            {
              n: '6.1.2',
              q: 'Classify as a PHYSICAL or CHEMICAL change: Grey hair is dyed to a red colour.',
              marks: 1,
              a: 'PHYSICAL change — the hair\'s chemical composition is not altered; only its external appearance/colour changes (the dye coats or is absorbed onto the hair).',
            },
            {
              n: '6.1.3',
              q: 'Classify as a PHYSICAL or CHEMICAL change: A car rusts.',
              marks: 1,
              a: 'CHEMICAL change — rusting is the reaction of iron with oxygen and water to form a new substance, iron oxide (rust); this cannot be reversed by simple physical means.',
            },
            {
              n: '6.2.1',
              q: 'What type of reaction is shown in: 2Pb(NO₃)₂(s) → 2PbO(s) + 4NO₂(g) + O₂(g)?',
              marks: 1,
              a: 'A decomposition reaction (thermal decomposition) — one reactant breaks down into multiple (three) simpler products.',
            },
            {
              n: '6.2.2',
              q: 'By use of a calculation, prove that the law of conservation of mass is TRUE for this reaction.',
              marks: 5,
              a: 'Molar mass of reactants = molar mass of products = 662,4 g (working below), confirming the law of conservation of mass.',
            },
          ],
        },
        {
          id: 'chem-p1-q6-2-2-steps',
          type: 'steps',
          label: 'Working for 6.2.2',
          steps: [
            { note: 'Molar masses: Pb = 207, N = 14, O = 16. Pb(NO₃)₂ = 207 + 2(14 + 3×16) = 207 + 2(62)', tex: 'M_{Pb(NO_3)_2} = 207 + 124 = 331\\ \\text{g·mol}^{-1}' },
            { note: 'Mass of reactants: 2 mol of Pb(NO₃)₂', tex: 'm_{reactants} = 2 \\times 331 = 662\\ \\text{g}' },
            { note: 'Products: PbO = 207+16 = 223; NO₂ = 14+2(16) = 46; O₂ = 2(16) = 32', tex: 'm_{products} = 2(223) + 4(46) + 1(32)' },
            { tex: 'm_{products} = 446 + 184 + 32 = 662\\ \\text{g}' },
            { tex: '\\text{Mass of reactants (662 g) = Mass of products (662 g)}\\ \\checkmark\\ \\text{— the law of conservation of mass holds.}' },
          ],
        },
        {
          id: 'chem-p1-q6-qa2',
          type: 'questions',
          qa: [
            {
              n: '6.2.3',
              q: 'When 6,62 g of lead nitrate [Pb(NO₃)₂] is heated, 4,46 g of solid is produced. What is the mass of gas that will be produced?',
              marks: 2,
              a: 'Mass of gas = 2,16 g (working below).',
            },
          ],
        },
        {
          id: 'chem-p1-q6-2-3-steps',
          type: 'steps',
          label: 'Working for 6.2.3',
          steps: [
            { note: 'By the law of conservation of mass: mass of reactant = mass of all products (solid + gas)', tex: 'm_{reactant} = m_{solid} + m_{gas}' },
            { note: 'Make $m_{gas}$ the subject and substitute', tex: 'm_{gas} = m_{reactant} - m_{solid} = 6{,}62 - 4{,}46' },
            { tex: 'm_{gas} = 2{,}16\\ \\text{g}' },
          ],
        },
        {
          id: 'chem-p1-q6-qa3',
          type: 'questions',
          qa: [
            {
              n: '6.3',
              q: 'Balance the following reaction equation: NH₃(g) + O₂(g) → NO(g) + H₂O(ℓ)',
              marks: 2,
              a: '4NH₃(g) + 5O₂(g) → 4NO(g) + 6H₂O(ℓ)',
            },
          ],
        },
        {
          id: 'chem-p1-q6-3-steps',
          type: 'steps',
          label: 'Checking the balance for 6.3',
          steps: [
            { note: 'Count atoms on each side of 4NH₃ + 5O₂ → 4NO + 6H₂O', tex: '\\text{N: } 4 = 4\\ \\checkmark\\quad \\text{H: } 4\\times3=12 = 6\\times2=12\\ \\checkmark' },
            { tex: '\\text{O: } 5\\times2 = 10\\ \\text{(reactants)} \\quad = \\quad 4(1) + 6(1) = 10\\ \\text{(products)}\\ \\checkmark' },
          ],
        },
      ],
    },

    // ── Lesson 7: Question 7 — Concentration & hydrates ─────────────────
    {
      id: 'chem-p1-q7-concentration',
      chapterId: CH,
      subjectId: 'chemistry',
      title: 'Question 7: Concentration and Water of Crystallisation',
      minutes: 14,
      blocks: [
        {
          id: 'chem-p1-q7-qa',
          type: 'questions',
          qa: [
            {
              n: '7.1',
              q: 'Calculate the concentration of a solution prepared by dissolving 5,85 g of sodium chloride in enough water to make a 500 cm³ solution.',
              marks: 4,
              a: 'c = 0,2 mol·dm⁻³ (working below).',
            },
          ],
        },
        {
          id: 'chem-p1-q7-1-steps',
          type: 'steps',
          label: 'Working for 7.1',
          steps: [
            { note: 'Molar mass of NaCl: Na = 23, Cl = 35,5', tex: 'M_{NaCl} = 23 + 35{,}5 = 58{,}5\\ \\text{g·mol}^{-1}' },
            { note: 'Moles of NaCl', tex: 'n = \\dfrac{m}{M} = \\dfrac{5{,}85}{58{,}5} = 0{,}1\\ \\text{mol}' },
            { note: 'Convert volume to dm³ (500 cm³ = 0,5 dm³), then apply concentration formula', tex: 'c = \\dfrac{n}{V} = \\dfrac{0{,}1}{0{,}5}' },
            { tex: 'c = 0{,}2\\ \\text{mol·dm}^{-3}' },
          ],
        },
        {
          id: 'chem-p1-q7-qa2',
          type: 'questions',
          qa: [
            {
              n: '7.2',
              q: 'Explain the concept of water of crystallisation and give the formula of a common hydrated salt.',
              marks: 3,
              a: 'Water of crystallisation is a fixed, definite number of water molecules chemically bound within the crystal structure of certain salts when they crystallise from an aqueous solution. A common example is copper(II) sulfate pentahydrate, CuSO₄·5H₂O (other correct examples: Na₂CO₃·10H₂O, MgSO₄·7H₂O).',
            },
            {
              n: '7.3',
              q: 'A learner heats 5 g of a hydrated salt until all the water of crystallisation has evaporated, leaving 3 g of the anhydrous salt. Determine the percentage of water of crystallisation in the hydrated salt.',
              marks: 2,
              a: '40% (working below).',
            },
          ],
        },
        {
          id: 'chem-p1-q7-3-steps',
          type: 'steps',
          label: 'Working for 7.3',
          steps: [
            { note: 'Mass of water lost = mass of hydrated salt − mass of anhydrous salt', tex: 'm_{water} = 5 - 3 = 2\\ \\text{g}' },
            { note: 'Percentage of water of crystallisation', tex: '\\% \\text{water} = \\dfrac{m_{water}}{m_{hydrated}} \\times 100 = \\dfrac{2}{5}\\times100' },
            { tex: '\\% \\text{water} = 40\\%' },
          ],
        },
      ],
    },

    // ── Lesson 8: Question 8 — The mole & molar volume ──────────────────
    {
      id: 'chem-p1-q8-mole',
      chapterId: CH,
      subjectId: 'chemistry',
      title: 'Question 8: The Mole, Molar Mass and Molar Volume',
      minutes: 16,
      blocks: [
        {
          id: 'chem-p1-q8-context',
          type: 'paragraph',
          text: 'There are several steps in the production of fertilisers. In the third step, nitrogen dioxide is absorbed by water to produce nitric acid. Nitric acid and ammonia then react together in an acid-base process to form the salt ammonium nitrate, which is soluble in water:\n3NO₂(g) + H₂O(ℓ) → 2HNO₃(aq) + NO(g)\nNH₃(ℓ) + HNO₃(ℓ) → NH₄NO₃(s)',
        },
        {
          id: 'chem-p1-q8-qa',
          type: 'questions',
          qa: [
            {
              n: '8.1',
              q: 'Define mole.',
              marks: 2,
              a: 'A mole is the amount of substance that contains exactly 6,022 × 10²³ elementary particles (atoms, molecules, ions, or formula units) — Avogadro\'s number of particles — of that substance.',
            },
            {
              n: '8.2',
              q: 'Give the scientific name of nitric acid.',
              marks: 1,
              a: 'Nitric(V) acid (nitric acid, HNO₃, is also correctly named trioxonitrate(V) acid, but "nitric acid" / "nitric(V) acid" is the standard CAPS answer).',
            },
            {
              n: '8.3.1',
              q: 'Calculate the molecular mass of ammonium nitrate.',
              marks: 2,
              a: 'M(NH₄NO₃) = 80 g·mol⁻¹ (working below).',
            },
          ],
        },
        {
          id: 'chem-p1-q8-3-1-steps',
          type: 'steps',
          label: 'Working for 8.3.1',
          steps: [
            { note: 'NH₄NO₃ contains 2 N, 4 H, 3 O. Atomic masses: N = 14, H = 1, O = 16', tex: 'M = 2(14) + 4(1) + 3(16)' },
            { tex: 'M = 28 + 4 + 48' },
            { tex: 'M = 80\\ \\text{g·mol}^{-1}' },
          ],
        },
        {
          id: 'chem-p1-q8-qa2',
          type: 'questions',
          qa: [
            {
              n: '8.3.2',
              q: 'Calculate the number of moles of ammonium nitrate if 15 g of it was formed.',
              marks: 3,
              a: 'n = 0,1875 mol (working below).',
            },
          ],
        },
        {
          id: 'chem-p1-q8-3-2-steps',
          type: 'steps',
          label: 'Working for 8.3.2',
          steps: [
            { note: 'Moles formula', tex: 'n = \\dfrac{m}{M}' },
            { note: 'Substitute $m = 15\\ \\text{g}$, $M = 80\\ \\text{g·mol}^{-1}$ (from 8.3.1)', tex: 'n = \\dfrac{15}{80}' },
            { tex: 'n = 0{,}1875\\ \\text{mol}' },
          ],
        },
        {
          id: 'chem-p1-q8-qa3',
          type: 'questions',
          qa: [
            {
              n: '8.3.3',
              q: 'Calculate the volume of 12 g of nitrogen oxide (NO) at STP.',
              marks: 5,
              a: 'V ≈ 8,96 dm³ (working below, using molar gas volume at STP = 22,4 dm³·mol⁻¹).',
            },
          ],
        },
        {
          id: 'chem-p1-q8-3-3-steps',
          type: 'steps',
          label: 'Working for 8.3.3',
          steps: [
            { note: 'Molar mass of NO: N = 14, O = 16', tex: 'M_{NO} = 14 + 16 = 30\\ \\text{g·mol}^{-1}' },
            { note: 'Moles of NO', tex: 'n = \\dfrac{m}{M} = \\dfrac{12}{30} = 0{,}4\\ \\text{mol}' },
            { note: 'At STP, 1 mol of any gas occupies 22,4 dm³ (molar gas volume)', tex: 'V = n \\times V_m = 0{,}4 \\times 22{,}4' },
            { tex: 'V = 8{,}96\\ \\text{dm}^3' },
          ],
        },
        {
          id: 'chem-p1-q8-qa4',
          type: 'questions',
          qa: [
            {
              n: '8.3.4',
              q: 'Calculate the number of nitrogen atoms present in 2 moles of ammonium nitrate.',
              marks: 4,
              a: 'Number of nitrogen atoms ≈ 2,409 × 10²⁴ atoms (working below).',
            },
          ],
        },
        {
          id: 'chem-p1-q8-3-4-steps',
          type: 'steps',
          label: 'Working for 8.3.4',
          steps: [
            { note: 'Each formula unit of NH₄NO₃ contains 2 nitrogen atoms, so 2 mol of NH₄NO₃ contains 2×2 = 4 mol of N atoms', tex: 'n_N = 2 \\times 2 = 4\\ \\text{mol N atoms}' },
            { note: 'Use Avogadro\'s number to convert moles of atoms to number of atoms', tex: 'N = n \\times N_A' },
            { note: 'Substitute $n = 4\\ \\text{mol}$, $N_A = 6{,}022\\times10^{23}\\ \\text{mol}^{-1}$', tex: 'N = 4 \\times 6{,}022\\times10^{23}' },
            { tex: 'N \\approx 2{,}409\\times10^{24}\\ \\text{nitrogen atoms}' },
          ],
        },
      ],
    },
  ],
};
