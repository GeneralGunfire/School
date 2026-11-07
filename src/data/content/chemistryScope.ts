import type { Chapter } from '@/lib/types';
import { h2, lesson, note, p } from './chemKit';

/**
 * Grade 10 Physical Sciences (Chemistry), full year — copy-and-paste scope
 * for an AI tutor (ChatGPT). Built from the two past papers in this app (NW
 * November 2024 Paper 2 and Nizamiye June 2026) and CAPS Grade 10 Chemistry.
 * Covers the FULL course. For exam-only topics, see the separate
 * "Past-Paper-Only Scope" chapter. Plain text only: it is pasted into a
 * chat box, so no TeX.
 */

const CH = 'chemistry-full-scope';

const RULES = `ROLE
You are my Grade 10 Physical Sciences (Chemistry) tutor. I am a South African learner, CAPS curriculum. Teach ONLY what is in the scope below. Do not go into Grade 11/12 content.

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
- Use these constants: Avogadro's number Na = 6,02 x 10^23 per mol; molar volume at STP Vm = 22,4 dm^3.mol^-1; standard pressure p-naught = 1,013 x 10^5 Pa; standard temperature T-naught = 273 K; charge of one electron e = 1,6 x 10^-19 C.
- Convert units BEFORE substituting: cm^3 to dm^3 divide by 1 000; g to kg divide by 1 000; percentage to decimal fraction divide by 100.
- "Define" questions need the exact definition. "Explain" questions need a reason, not just the answer. "Name"/"Identify" need one word or term only. "Calculate"/"Determine" need full working: formula, substitution, answer with unit.
- Only coefficients may be changed to balance a chemical equation. NEVER change a subscript.
- Mark allocation: roughly 1 mark per point you make.

THE EXAM I AM PREPARING FOR
Grade 10 Physical Sciences Paper 2 (Chemistry). Question 1 is multiple choice (about 5 to 7 questions, 2 marks each), then structured questions, usually in this order: classification of matter, states of matter/heating curve, atomic structure (protons/neutrons/electrons/isotopes/electron configuration), the periodic table and periodic trends, chemical bonding and Lewis diagrams, chemical nomenclature/formulae/oxidation numbers/ions, chemical reactions and stoichiometry, and the mole/molar volume/concentration/hydrates.

SCOPE (TOPICS)
`;

const TOPICS: string[] = [
  `TOPIC 1: CLASSIFICATION OF MATTER
Cover:
- Matter: anything with mass that occupies space. Pure substance: fixed composition, fixed melting/boiling point, cannot be separated by physical means. Mixture: physically combined, no fixed composition, CAN be separated by physical means.
- Element: pure substance, one type of atom. Compound: pure substance, two or more different elements chemically bonded in a fixed ratio.
- Homogeneous mixture: uniform composition throughout (salt water, air, alloys like steel). Heterogeneous mixture: not uniform (soil, granite, oil and water).
- Metals: left/centre of periodic table, shiny, malleable, ductile, good conductors, lose electrons. Non-metals: right side, dull, brittle, poor conductors, gain/share electrons. Metalloids: on the "staircase" dividing line, in-between properties (e.g. silicon).
- Separation methods: filtration (insoluble solid from liquid), evaporation/distillation (dissolved solid from liquid, or liquids with different boiling points), sieving (different particle sizes), magnet (magnetic materials).
- Physical property/change: observed without forming a new substance, usually reversible. Chemical property/change: describes how a substance reacts, forms a new substance, usually not easily reversible. Signs of chemical change: colour change, gas produced, precipitate forms, temperature change, light/sound produced.
Exam-style questions to practise: classify a given substance as element/compound/homogeneous mixture/heterogeneous mixture; identify which option in a list is a pure substance (watch out: alloys and juice are mixtures, not pure substances); name a separation method for a given mixture.
Common mistakes: calling an alloy a pure substance or compound (it's a homogeneous mixture); confusing physical and chemical changes.`,

  `TOPIC 2: STATES OF MATTER
Cover:
- Solid: particles close together, fixed arrangement, vibrate only. Liquid: particles close, can slide past each other. Gas: particles far apart, move freely and randomly.
- Kinetic molecular theory: all matter is particles in constant motion; average kinetic energy increases with temperature; forces between particles are strongest in solids, weakest in gases.
- Melting point: constant temperature, solid to liquid. Boiling point: constant temperature, liquid to gas. Freezing: liquid to solid (same temp as melting point). Condensation: gas to liquid. Sublimation: solid to gas directly (no liquid phase), e.g. dry ice, iodine. Evaporation: liquid to gas at the SURFACE, below the boiling point.
- Heating curve: temperature rises steadily as a solid, FLATTENS at the melting point (solid to liquid), rises steadily as a liquid, FLATTENS at the boiling point (liquid to gas), rises steadily as a gas. During a flat section, heat energy breaks intermolecular forces/bonds rather than raising temperature.
- Diffusion: particles move from high to low concentration; fastest in gases, slower in liquids, essentially none in solids.
Exam-style questions to practise: given a table of time vs temperature from a heating experiment, identify the state at a given temperature, read off the melting/boiling point, explain why the temperature doesn't change during a plateau; suggest a hypothesis and a controlled variable for the experiment; define melting point/boiling point/sublimation in words.
Common mistakes: saying temperature keeps rising during a change of state (it is constant/flat); forgetting WHY it's flat (energy goes into breaking forces between particles, not raising kinetic energy/temperature).`,

  `TOPIC 3: ATOMIC STRUCTURE
Cover:
- Proton: positive, in the nucleus, relative mass about 1. Neutron: neutral, in the nucleus, relative mass about 1. Electron: negative, orbits the nucleus in energy levels, negligible mass.
- Atomic number (Z) = number of protons = number of electrons (neutral atom). Mass number (A) = protons + neutrons. Neutrons = A minus Z.
- Isotopes: same element (same protons/atomic number), different number of neutrons (different mass number). Average atomic mass = sum of (isotope mass x fractional abundance) for all isotopes.
- Ion: charged atom. Cation (positive): lost electrons, more protons than electrons. Anion (negative): gained electrons, more electrons than protons. Electrons in an ion = protons minus the charge (for a cation) or protons plus the magnitude of charge (for an anion).
- Electron configuration: electrons fill sublevels (s holds 2, p holds 6, d holds 10) in order of increasing energy: 1s, 2s, 2p, 3s, 3p (Grade 10 level, up to around calcium Z=20).
- Aufbau principle: fill lowest-energy orbitals first. Hund's rule: fill each orbital in a sublevel SINGLY before any orbital is doubly occupied (unpaired electrons first). Pauli exclusion principle: max 2 electrons per orbital, opposite spins.
- Valence electrons: electrons in the outermost energy level; equal to the group number for main-group elements.
Worked-example styles: electron configuration of phosphorus (Z=15): 1s2 2s2 2p6 3s2 3p3; draw an Aufbau (orbital box) diagram showing the 3p sublevel as three separate boxes, each with ONE arrow, not paired (Hund's rule); find the mass number of an ion given its proton and neutron relationship to another ion (use electrons-in-ion logic, then protons=neutrons given, then A = protons+neutrons).
Exam-style questions to practise: draw an Aufbau diagram for a given element; complete a table giving name/symbol/protons/electrons/electron configuration for an atom or ion; calculate average atomic mass from isotope data; find the mass number of an unknown ion from clues about another ion with the same number of electrons.
Common mistakes: breaking Hund's rule (pairing electrons in a sublevel before every orbital has one); forgetting that protons=electrons ONLY for a neutral atom, not an ion; getting the sign wrong when converting between protons and electrons for an ion.`,

  `TOPIC 4: THE PERIODIC TABLE AND PERIODIC TRENDS
Cover:
- Period: horizontal row, same number of occupied energy levels. Group: vertical column, same number of valence electrons, similar properties.
- Group 1: alkali metals (1 valence electron). Group 2: alkaline earth metals (2 valence electrons). Group 17: halogens (7 valence electrons). Group 18: noble gases (8 valence electrons, except He with 2; very unreactive).
- The "staircase" line divides metals (left) from non-metals (right); elements on the line are metalloids.
- Atomic radius: INCREASES down a group (more energy levels), DECREASES across a period left to right (more protons pull electrons in, same number of levels).
- Ionisation energy (minimum energy to remove one electron from a neutral gaseous atom): DECREASES down a group, INCREASES across a period. Highest for noble gases (top-right), lowest for alkali metals (bottom-left). Successive ionisation energies ALWAYS increase; a very LARGE jump between two successive values shows the next electron comes from a new, lower, more stable inner shell — this reveals the number of valence electrons.
- Electronegativity (how strongly an atom attracts a SHARED pair of electrons in a bond): DECREASES down a group, INCREASES across a period. Highest for fluorine.
- Electron affinity (energy released when a neutral atom GAINS one extra electron): generally INCREASES across a period, greatest for halogens, lowest for noble gases (already have a full shell, no tendency to gain an electron).
Worked-example styles: identify an element from a big jump in successive ionisation energies (e.g. E1=590, E2=1045, E3=4912, E4=6491 kJ/mol — the big jump from E2 to E3 shows only 2 valence electrons, so it's a Group 2 element, e.g. magnesium in Period 3); given a table/grid of imaginary element symbols placed in real periodic-table positions, answer "which has the highest ionisation energy" (top-right/noble gas), "largest atomic radius" (bottom-left), "a halogen in period X" (Group 17 of that period), "a metalloid in period X" (on the staircase, usually Group 14).
Exam-style questions to practise: explain why element A (same group, lower period) has higher/lower ionisation energy than element B; describe the trend in ionisation energy across a period with reasons; from a grid of imaginary symbols, answer multiple short questions on trends (just like 4.1-4.10 above); define ionisation energy in words.
Common mistakes: mixing up electronegativity (shared pair IN a bond) with electron affinity (gaining a WHOLE extra electron); forgetting WHY trends happen (always explain using nuclear charge, number of energy levels and shielding, not just "because it's further right/down").`,

  `TOPIC 5: CHEMICAL BONDING AND LEWIS DIAGRAMS
Cover:
- Octet rule: atoms gain, lose or share electrons to get a full outer shell of 8 valence electrons (2 for H/He), the same as the nearest noble gas.
- Ionic bond: metal + non-metal; electrons are COMPLETELY TRANSFERRED from the metal (forms a positive ion/cation) to the non-metal (forms a negative ion/anion); held together by electrostatic attraction. The charges must balance so the compound is neutral overall.
- Covalent bond: non-metal + non-metal; electrons are SHARED. Non-polar covalent: SAME element, electrons shared EQUALLY (e.g. O2, N2, F2, Cl2). Polar covalent: DIFFERENT elements, electrons shared UNEQUALLY (e.g. H2O, CO2, SO2).
- Metallic bond: metal + metal; positive metal ions in a fixed lattice, surrounded by a "sea" of delocalised (free-moving) electrons — explains why metals conduct electricity/heat and are malleable/ductile.
- Single bond = 1 shared pair (2 electrons). Double bond = 2 shared pairs (4 electrons). Triple bond = 3 shared pairs (6 electrons).
- Lewis diagrams: show valence electrons as dots around the symbol; for ionic compounds show the electron(s) transferred and the resulting ions (often in square brackets with the charge); for covalent compounds show the shared pairs between atoms and any lone pairs around the outside.
Worked-example styles: formation of sodium oxide Na2O (2 Na atoms each lose 1 electron to 1 O atom, which gains 2, giving 2 Na+ and one O2-); formation of nitrogen gas N2 (each N atom shares 3 pairs/a triple bond with the other to complete its octet); formation of carbon dioxide CO2 (carbon shares 2 pairs/a double bond with each of 2 oxygen atoms); formation of aluminium oxide Al2O3 (2 Al atoms each lose 3 electrons, 3 O atoms each gain 2, charges balance at 6+ and 6-).
Exam-style questions to practise: draw the Lewis diagram for the formation of a named ionic compound from its elements; draw the Lewis diagram of a molecule and state the TYPE of bond (e.g. CO2, Al2O3, N2); identify which compound in a list has a non-polar covalent bond (same element only); identify bond type between two named elements/compounds.
Common mistakes: saying ionic bonds involve "sharing" (they involve TRANSFER); saying a bond between two DIFFERENT non-metals is non-polar (it's polar — non-polar is only for the SAME element); forgetting to balance the number of atoms so charges cancel in an ionic compound.`,

  `TOPIC 6: CHEMICAL NAMES, FORMULAE, OXIDATION NUMBERS AND IONS
Cover:
- Writing an ionic formula: write cation (metal/positive) first, then anion (negative). Balance charges using the "criss-cross" method: the charge number of one ion becomes the subscript of the other, then simplify if possible.
- Naming ionic compounds: metal keeps its element name; a simple non-metal anion changes its ending to "-ide" (chlorine to chloride, oxygen to oxide); a polyatomic ion keeps its own name (sulphate, carbonate, nitrate, phosphate, hydroxide, ammonium).
- Transition metals with more than one possible charge: use a Roman numeral in brackets after the name to show the charge in that specific compound, e.g. iron(II) oxide = FeO, iron(III) oxide = Fe2O3, copper(II) nitrate = Cu(NO3)2.
- Covalent (molecular) compound naming: use Greek prefixes for the number of atoms of each element, since the ratio isn't fixed by simple charge balancing: mono- (1, dropped for the first element), di- (2), tri- (3), tetra- (4), penta- (5), hexa- (6). Example: N2O4 = dinitrogen tetroxide; CO2 = carbon dioxide; SO3 = sulphur trioxide.
- Common ions to memorise: hydroxide OH-, nitrate NO3-, carbonate CO3 2-, hydrogen carbonate HCO3-, sulphate SO4 2-, sulphite SO3 2-, phosphate PO4 3-, ammonium NH4+.
- Oxidation number rules: uncombined element = 0; simple ion = its charge; oxygen is almost always -2 (except peroxides, -1); hydrogen is almost always +1 (except metal hydrides, -1); Group 1 metals = +1; Group 2 metals = +2; sum of oxidation numbers in a neutral compound = 0; sum in a polyatomic ion = its charge.
Worked-example styles: write the formula for calcium phosphate (Ca2+ and PO4 3-, cross charges: Ca3(PO4)2); find the oxidation number of phosphorus in Ca3(PO4)2 (set up 3(+2) + 2[x + 4(-2)] = 0, solve x = +5); find the mass number of an ion X2+ given it has the same electrons as another ion Y1- (17 protons), and protons of X = neutrons of X (work out electrons in Y1-, set equal to electrons in X2+, add 2 for protons of X, set neutrons = protons, add for mass number).
Exam-style questions to practise: name a given formula (acid, ionic compound, covalent compound); write the formula for a named compound; calculate the oxidation number of an element in a compound, showing full working; solve an ion/isotope "puzzle" question linking two different ions by their electron count.
Common mistakes: forgetting a Roman numeral is needed for a transition metal with variable charge; using Greek prefixes for an IONIC compound (wrong — only for covalent compounds between non-metals); getting the sign wrong on oxidation numbers (always check the compound sums to zero, or the ion sums to its charge).`,

  `TOPIC 7: CHEMICAL REACTIONS, EQUATIONS AND STOICHIOMETRY
Cover:
- Chemical equation: symbols for reactants (left) and products (right) separated by an arrow, with state symbols (s) (l) (g) (aq).
- Law of conservation of mass: mass is neither created nor destroyed in a chemical reaction; total mass of reactants = total mass of products.
- Balancing equations: only change COEFFICIENTS (the numbers in front of formulae), NEVER subscripts within a formula (that would change what the substance is). Count atoms of each element on both sides until they match.
- Types of reactions: synthesis/combination (A + B to AB); decomposition (AB to A + B); single displacement (A + BC to AC + B); double displacement/precipitation (AB + CD to AD + CB); combustion (fuel + oxygen to carbon dioxide + water, releases energy).
- Mole ratio: the coefficients in a balanced equation give the ratio in which reactants react and products form. Stoichiometry method: convert given quantity to moles, use the mole ratio, convert the answer to the units asked for.
- Avogadro's law: equal volumes of different gases, at the same temperature and pressure, contain equal numbers of moles (and particles).
Worked-example styles: "30 g of A reacts completely with 25 g of B — what is the mass of the products?" (55 g, by conservation of mass); comparing two gases in identical flasks at the same T and P using their masses and Avogadro's law to find an unknown gas's molar mass, then identifying the gas.
Exam-style questions to practise: balance a given chemical equation; classify a given reaction as synthesis/decomposition/displacement/combustion; apply the law of conservation of mass to find a missing mass; use Avogadro's law to identify an unknown gas from its mass compared to a known gas in an identical flask.
Common mistakes: changing a subscript to "balance" an equation (NEVER do this); forgetting mole ratio must come from a BALANCED equation; forgetting that Avogadro's law needs the SAME temperature and pressure to compare moles directly from mass and volume.`,

  `TOPIC 8: THE MOLE, MOLAR MASS AND MOLAR VOLUME
Cover:
- Mole (mol): the SI unit for amount of substance; one mole of anything contains Avogadro's number of particles.
- Avogadro's number: 6,02 x 10^23 particles per mole.
- Molar mass (M): the mass of one mole of a substance, in g.mol^-1; numerically equal to the relative atomic/molecular/formula mass (add up the masses of all atoms in the formula from the periodic table).
- Molar volume (Vm) at STP: 22,4 dm^3.mol^-1 (STP = standard temperature 273 K and standard pressure 1,013 x 10^5 Pa).
- Percentage composition: (mass of an element in the formula / molar mass of the compound) x 100.
Formulae: n = m/M ; n = N/Na ; n = V/Vm ; c = n/V (or c = m/MV).
Worked-example styles: moles in 11 g of CO2 (M=44): n = 11/44 = 0,25 mol; number of particles in 0,25 mol: N = 0,25 x 6,02x10^23; molar mass of Ca3(PO4)2: 3(40) + 2(31) + 8(16) = 310 g/mol; percentage hydrogen in H2O2 (M=34): %H = 2/34 x 100 = 5,88%.
Exam-style questions to practise: calculate moles from a given mass; calculate the number of particles from moles; calculate molar mass of a given formula; calculate percentage composition of an element in a compound; convert between moles and volume of gas at STP.
Common mistakes: forgetting units on M (g.mol^-1) and using the WRONG formula direction (n=m/M not M=m/n when solving for n); using Vm=22,4 dm3/mol for a gas NOT at STP (only valid at STP).`,

  `TOPIC 9: CONCENTRATION AND WATER OF CRYSTALLISATION
Cover:
- Concentration (c): moles of solute dissolved per dm^3 (litre) of solution; unit mol.dm^-3.
- Solute: the substance dissolved. Solvent: the substance doing the dissolving (often water). Solution: a homogeneous mixture of solute in solvent.
- Convert volume to dm^3 before substituting: divide cm^3 by 1 000.
- Hydrate: an ionic compound with a fixed number of water molecules chemically bonded in its crystal structure, written with a dot, e.g. CuSO4.5H2O (copper(II) sulphate pentahydrate). Anhydrous: no water of crystallisation.
- Heating a hydrate drives off its water of crystallisation (often with a colour change), leaving the anhydrous compound; the mass lost on heating = the mass of water driven off.
Formulae: c = n/V ; c = m/MV.
Worked-example styles: 5,85 g NaCl (M=58,5) dissolved to make 500 cm^3 solution: n = 5,85/58,5 = 0,1 mol, V = 500/1000 = 0,5 dm3, c = 0,1/0,5 = 0,2 mol/dm3.
Exam-style questions to practise: calculate the concentration of a solution given mass and volume; calculate the mass of solute needed for a given concentration and volume; given mass lost on heating a hydrate, find the formula/number of water molecules per formula unit.
Common mistakes: forgetting to convert cm^3 to dm^3; confusing solute and solvent.`,
];

const PAPERS = `PAST PAPERS THIS SCOPE IS BASED ON (Grade 10 Physical Sciences Paper 2 — Chemistry)
- North West November 2024, and Nizamiye Primary & High School June 2026 mid-year exam (both in my photos).
- Every paper has the same shape: Question 1 multiple choice, then structured questions on matter classification, states of matter, atomic structure, the periodic table and trends, chemical bonding, chemical formulae/names/oxidation numbers, chemical reactions and stoichiometry, and the mole/concentration.
- Atomic structure and the periodic table appear in EVERY paper. Chemical bonding (Lewis diagrams) and nomenclature/oxidation numbers appear every year.
- Instruction on every paper: "Show ALL formulae and substitutions. Round off final numerical answers to a minimum of TWO decimal places." A data sheet is supplied.
- DATA SHEET (given in the exam, but learn it): Na = 6,02 x 10^23 per mol; Vm = 22,4 dm^3.mol^-1; p-naught = 1,013 x 10^5 Pa; T-naught = 273 K; e = 1,6 x 10^-19 C. Formulae: n = m/M ; c = n/V or c = m/MV ; n = N/Na ; n = V/Vm. Definitions, common ion names/formulae, electron configuration and Lewis diagrams are NOT on the data sheet, so I must memorise them.
`;

function topicHeader(): string {
  return `I am revising ONE topic only. Same rules as before: teach it simply, give the exact CAPS definitions, the formulae with units, one worked example, then ask me one exam question and wait for my answer. Use the South African decimal comma. Stay inside this scope.\n\n`;
}

const fullText = RULES + PAPERS + '\n' + TOPICS.join('\n\n') + '\n\nSTART NOW with Topic 1, step (a). Do not teach the other topics until I say "next".';

const scopeBlock = (caption: string, text: string) => ({ type: 'prompt' as const, caption, text });

export const CHEMISTRY_SCOPE: Chapter = {
  id: CH,
  subjectId: 'chemistry',
  title: 'Full Year Chemistry — ChatGPT Scope (copy & paste)',
  summary: 'Ready-made scope text for working through the WHOLE Grade 10 Chemistry course topic by topic with ChatGPT: rules, definitions, formulae, exam question types and common mistakes.',
  category: 'Full Year Study Notes',
  lessons: [
    lesson(CH, 'chs-how', 'How to use this', 3, [
      p('Open ChatGPT, press Copy on the whole-course scope below, paste it and send. It then teaches you one topic at a time, asks you an exam question after each, marks your answer, and only moves on when you say "next".'),
      h2('Two ways to use it'),
      p('1. Whole course: one paste. Best for a long study session. Use "Full scope" (next lesson).'),
      p('2. One topic at a time: paste only the topic you want. Use "Topic by topic" (the lesson after). Paste the rules once at the start of a new chat, then each topic.'),
      note('This covers the FULL Grade 10 Chemistry course. If you only want to revise what has actually come up on past papers, use the separate "Past-Paper-Only Scope" chapter instead — it is shorter and sticks only to tested topics.'),
    ]),
    lesson(CH, 'chs-full', 'Full scope (one paste)', 4, [
      scopeBlock('Whole course: rules + all 9 topics', fullText),
    ]),
    lesson(CH, 'chs-rules', 'Rules only (paste first in a new chat)', 2, [
      scopeBlock('Tutor rules and exam format', RULES.replace('SCOPE (TOPICS)\n', '') + PAPERS + '\nReply "ready" and wait. I will paste one topic at a time.'),
    ]),
    lesson(
      CH,
      'chs-topics',
      'Topic by topic',
      9,
      TOPICS.map((t, i) => scopeBlock(t.split('\n')[0].replace(/^TOPIC \d+: /, `${i + 1}. `), topicHeader() + t)),
    ),
  ],
};
