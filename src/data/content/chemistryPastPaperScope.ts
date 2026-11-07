import type { Chapter } from '@/lib/types';
import { lesson, note, p } from './chemKit';

/**
 * Grade 10 Physical Sciences (Chemistry) — PAST-PAPER-ONLY copy-and-paste
 * scope for an AI tutor (ChatGPT). Unlike `chemistryScope.ts` (the full
 * course), this covers ONLY the exact topics, question styles and skills
 * that have actually appeared across the two past papers in this app (NW
 * November 2024 Paper 2 and Nizamiye June 2026 mid-year). Narrower and
 * exam-focused — use this when short on time and revising only what has
 * actually been tested. Plain text only: it is pasted into a chat box, so
 * no TeX.
 */

const CH = 'chemistry-pastpaper-scope';

const RULES = `ROLE
You are my Grade 10 Physical Sciences (Chemistry) tutor, revising ONLY the topics and question styles that have actually come up in my past papers (not the whole CAPS course). I am a South African learner.

HOW TO TEACH ME (follow every time)
1. Work ONE topic at a time, in the order given. Start with Topic 1 unless I say otherwise.
2. For each topic: (a) explain it simply, (b) give the exact CAPS definition word-for-word if there is one, (c) give the formula with units if there is one, (d) do ONE worked example in the EXACT style it was asked on the past paper, (e) then give me a near-identical practice question (different numbers/elements) and WAIT for my answer.
3. Mark my answer like a CAPS marker: what earned marks, what lost marks, why. Then give a memo-style model answer.
4. Only move on when I say "next".
5. At the end of each topic give a 3-line "MEMORISE" summary.
6. Keep answers short. South African decimal comma: 9,8 not 9.8.

EXAM RULES
- Always show the formula, substitution with units, then the answer with a unit.
- Only coefficients may be changed to balance an equation, never subscripts.
- For multiple choice, give the letter AND a one-line reason.
- Mark allocation is roughly 1 mark per point.

SCOPE (ONLY WHAT HAS BEEN TESTED)
`;

const TOPICS: string[] = [
  `TOPIC 1: MULTIPLE CHOICE MIX (as tested)
Exact question styles seen on past papers:
- Largest/smallest atomic radius from a short list of elements (use period/group position).
- Correct chemical formula for a named ionic compound (e.g. "aluminium sulphate" — cross the charges of Al3+ and SO4 2-).
- Which option has a non-polar covalent bond (same element only, e.g. fluorine gas F2) vs polar covalent (different non-metals) vs ionic (metal+non-metal).
- Identify an element from a table of its successive ionisation energies (look for the big jump — it shows the number of valence electrons).
- Weighted average atomic mass from isotope masses and % abundances.
- Percentage of an element in a compound by mass, given the molar mass (e.g. %H in hydrogen peroxide H2O2).
- Using the Law of Conservation of Mass: total mass of products from two reactants that react completely.
- Using Avogadro's law (equal volumes of gas at same T and P = equal moles) to identify an unknown gas by comparing its mass to a known gas's mass in an identical flask.
- Electron configuration (sp notation) of a named element, e.g. phosphorus: 1s2 2s2 2p6 3s2 3p3.
Practise with: 5-7 multiple choice questions in this exact mixed style, one at a time, letter + reason.`,

  `TOPIC 2: STATES OF MATTER — THE HEATING CURVE (as tested)
Exact question style: a table of time (minutes) vs temperature (degrees C) for a solid heated at a constant rate, showing one or two FLAT sections (plateaus).
Cover:
- Define boiling point and melting point in exact CAPS wording.
- Suggest a hypothesis for a heating experiment.
- Name ONE condition kept constant for a reliable result (usually rate of heating).
- Read off the STATE of the substance (solid/liquid/gas) at a given temperature from the table/graph.
- Read off the melting point or boiling point as the temperature where it goes flat.
- Explain WHY temperature does not change during a plateau (heat energy breaks intermolecular forces/bonds, changing the particle arrangement, instead of raising kinetic energy/temperature).
Practise with: a new time/temperature table (different numbers, same shape with one or two plateaus), then ask me the same 6 question types: define boiling point, hypothesis, controlled variable, state at X degrees, melting/boiling point value, explain the flat section.`,

  `TOPIC 3: ATOMIC STRUCTURE — AUFBAU DIAGRAMS AND TABLES (as tested)
Exact question styles:
- Draw the Aufbau (orbital box) diagram for a named element (apply Hund's rule: fill p-orbitals singly before pairing).
- Complete a table: given a stable ion's symbol/formula and its PROTON count, find its number of ELECTRONS and its sp electron notation (e.g. stable Ca2+ ion: 20 protons, 18 electrons, 1s2 2s2 2p6 3s2 3p6).
- Complete a table: given an element's proton count and a chemical symbol, find its NAME, its number of electrons, and its sp notation (e.g. 16 protons, symbol S: name sulfur, 16 electrons, 1s2 2s2 2p6 3s2 3p4).
- Solve an "ion puzzle": two ions (e.g. subscript-17 Y with a 1- charge, and X with a 2+ charge) have the SAME number of electrons; X's protons = X's neutrons; find X's mass number (work out Y's electrons from its proton count and charge, set equal to X's electrons, add the charge back to find X's protons, set neutrons=protons, add for mass number A).
Practise with: a new Aufbau diagram for a different element, a new table to complete for a different ion/element pair, and a new ion-puzzle calculation with different numbers.`,

  `TOPIC 4: PERIODIC TABLE GRID OF IMAGINARY SYMBOLS (as tested)
Exact question style: a partial periodic table is given with IMAGINARY/made-up symbols standing in for real elements, arranged in real group/period positions (e.g. groups 1-2 and groups 13-18 across 3-4 periods). You must answer using ONLY the given imaginary symbols, applying real periodic trends to their real positions.
Cover the trend logic needed for each question type:
- Highest ionisation energy: top-right (closest to a noble gas, Group 18, lowest period shown).
- Greatest electron affinity in a given period: the halogen (Group 17) of that period (noble gases excluded).
- Largest atomic radius: bottom-left (lowest group number, highest period number shown).
- Highest electronegativity: top-right excluding noble gases (so usually Group 17, lowest period shown).
- Lowest electron affinity: the noble gas (Group 18) of that period — full shell, no tendency to gain an electron.
- The metalloid in a given period: on the staircase line, usually Group 14.
- A halogen in a given period: Group 17 of that period.
- "Six filled and one half-filled orbital": a Group 17 element in Period 3 (electron configuration ...3p5 — 6 full orbitals plus one half-filled p-orbital).
- A period-X element with exactly 1 valence electron: Group 1 of that period.
- A period-X element that forms a 1:1 ionic oxide (equal atoms of metal and oxygen): a Group 2 metal (2+ ion balances oxygen's 2- exactly).
Practise with: a NEW grid of different imaginary symbols in the same real positions, then ask me the same 10 question types, one at a time.`,

  `TOPIC 5: IONISATION ENERGY GRAPH — FIRST 20 ELEMENTS (as tested)
Exact question style: a graph of ionisation energy (kJ/mol) vs nuclear charge Z for elements H to Ca (Z=1 to 20), zig-zagging upward within each period and peaking at the noble gases (He, Ne, Ar).
Cover:
- Define ionisation energy in exact CAPS wording (minimum energy to remove one electron from a neutral gaseous atom).
- Explain why an element has HIGHER ionisation energy than another element in the SAME GROUP but a lower period (fewer energy levels = valence electron closer to the nucleus = stronger attraction = more energy needed to remove it; e.g. lithium vs potassium).
- Describe the trend in ionisation energy across Period 2 (or any period) left to right, WITH REASONS (increases, because nuclear charge increases while number of energy levels/shielding stays about the same, pulling the valence electrons in more strongly).
Practise with: the same three question types but comparing a different pair of elements and a different period.`,

  `TOPIC 6: CHEMICAL BONDING — LEWIS DIAGRAMS (as tested)
Exact question styles:
- Given a short scenario (e.g. a metal reacting with a gas to form a named oxide), show the FORMATION of the compound with Lewis diagrams (electron transfer, balanced so charges cancel), e.g. sodium + oxygen forming sodium oxide Na2O.
- Identify the type of bond in a named compound (ionic/covalent/metallic) and the TYPE of compound (ionic compound, covalent/molecular compound).
- Represent a diatomic molecule (two atoms of the same element) with a Lewis diagram, showing shared pairs (e.g. N2, a triple bond).
- Name the type of bond formed between two identical non-metal atoms (non-polar covalent).
- Draw Lewis diagrams AND state the bond type for given covalent and ionic formulae (e.g. CO2 — double covalent bonds; Al2O3 — ionic bonds).
Practise with: a new metal+non-metal formation scenario, a new diatomic molecule, and two new compounds (one covalent, one ionic) to diagram and name the bond type for.`,

  `TOPIC 7: CHEMICAL NAMES, FORMULAE, OXIDATION NUMBERS AND ION PUZZLES (as tested)
Exact question styles:
- Write the chemical NAME for a given formula, including acids (H2SO4 = sulphuric acid), simple salts (NaHCO3, NH4Cl), a transition-metal compound needing a Roman numeral (Fe2(CO3)3 = iron(III) carbonate — work out the numeral from charge balancing), and a covalent compound using Greek prefixes (N2O4 = dinitrogen tetroxide).
- Write the chemical FORMULA for a given name, including a compound with a polyatomic ion (calcium phosphate = Ca3(PO4)2) and a transition-metal compound with a Roman numeral (copper(II) nitrate = Cu(NO3)2).
- Calculate the OXIDATION NUMBER of one element in a compound, showing full working (sum of oxidation numbers = 0 for the whole compound; e.g. phosphorus in calcium phosphate Ca3(PO4)2: 3(+2) + 2[x+4(-2)] = 0, x = +5).
- Solve an ion/mass-number PUZZLE linking two different ions by their shared electron count and a proton=neutron condition (same style as Topic 3's ion puzzle, but phrased as a standalone Question 7 item).
Practise with: 5 new names-to-formulae-and-back questions in the exact same mixed style, one new oxidation-number calculation, and one new ion-puzzle mass-number question.`,
];

const PAPERS = `PAST PAPERS THIS SCOPE IS BASED ON (Grade 10 Physical Sciences Paper 2 — Chemistry)
- North West November 2024, and Nizamiye Primary & High School June 2026 mid-year exam.
- This scope deliberately does NOT cover chemical reactions/stoichiometry/balancing equations, or the mole/molar volume/concentration/hydrates in depth, because neither past paper in this app has tested them yet — if a new past paper covers them, ask me to add that topic. For the FULL course (including those topics), use the separate "Full Year Chemistry — ChatGPT Scope" chapter instead.
- Instruction on both papers: "Show ALL formulae and substitutions. Round off final numerical answers to a minimum of TWO decimal places." A data sheet is supplied with: Na = 6,02 x 10^23 per mol; Vm = 22,4 dm^3.mol^-1; p-naught = 1,013 x 10^5 Pa; T-naught = 273 K; e = 1,6 x 10^-19 C; formulae n=m/M, c=n/V or c=m/MV, n=N/Na, n=V/Vm. Definitions, ion names/formulae, electron configuration and Lewis diagrams are NOT on the data sheet.
`;

function topicHeader(): string {
  return `I am revising ONE past-paper topic only. Same rules as before: teach it simply, give exact definitions where relevant, one worked example in the exact past-paper style, then give me a new practice question and wait for my answer. South African decimal comma. Stay inside this scope.\n\n`;
}

const fullText = RULES + PAPERS + '\n' + TOPICS.join('\n\n') + '\n\nSTART NOW with Topic 1, step (a). Do not teach the other topics until I say "next".';

const scopeBlock = (caption: string, text: string) => ({ type: 'prompt' as const, caption, text });

export const CHEMISTRY_PAST_PAPER_SCOPE: Chapter = {
  id: CH,
  subjectId: 'chemistry',
  title: 'Past-Paper-Only Chemistry — ChatGPT Scope (copy & paste)',
  summary: 'A SHORTER scope covering only what has actually come up on your past papers — exact question styles, not the full CAPS course. Use this when short on time; use the Full Year scope for complete coverage.',
  category: 'Full Year Study Notes',
  lessons: [
    lesson(CH, 'chpp-how', 'How to use this', 3, [
      p('This is the exam-focused version: it only covers topics and question styles that have actually appeared on the two Chemistry past papers in this app. Open ChatGPT, press Copy on the whole scope below, paste it and send.'),
      note('For complete CAPS coverage (including topics not yet tested on a past paper, like chemical reactions/stoichiometry and the mole/concentration), use the separate "Full Year Chemistry — ChatGPT Scope" chapter instead.'),
    ]),
    lesson(CH, 'chpp-full', 'Full past-paper scope (one paste)', 3, [
      scopeBlock('Past-paper-only: rules + all 7 topics', fullText),
    ]),
    lesson(CH, 'chpp-rules', 'Rules only (paste first in a new chat)', 2, [
      scopeBlock('Tutor rules and exam format', RULES.replace('SCOPE (ONLY WHAT HAS BEEN TESTED)\n', '') + PAPERS + '\nReply "ready" and wait. I will paste one topic at a time.'),
    ]),
    lesson(
      CH,
      'chpp-topics',
      'Topic by topic',
      7,
      TOPICS.map((t, i) => scopeBlock(t.split('\n')[0].replace(/^TOPIC \d+: /, `${i + 1}. `), topicHeader() + t)),
    ),
  ],
};
