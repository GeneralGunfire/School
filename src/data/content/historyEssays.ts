import type { Chapter } from '../../lib/types';
import { h2, h3, p, ul, box, table, qa, peel, lessonIn, type WB } from './writeKit';

/**
 * History: essay-writing guide and PEEL model essays for the four topics in this library
 * (Britain and the Cape, Highveld, the South African War, the Natives’ Land Act).
 * The PEEL description follows the language of the DBE History marking guidelines
 * (introduction with a line of argument, body paragraphs that sustain it, explanation that links
 * evidence to the question, and a conclusion). Essays are argued, never narrated.
 */

const CH = 'hist-essays';
const L = (id: string, title: string, minutes: number, blocks: Array<WB | WB[]>) =>
  lessonIn('history', CH, id, title, minutes, blocks);

type Essay = {
  title: string;
  question: string;
  command: string;
  line: string;
  plan: string[];
  intro: string;
  body: { label: string; p: string; e: string; x: string; l: string }[];
  conclusion: string;
};

/** One model essay: question, analysis, line of argument, plan, introduction, PEEL body, conclusion. */
const essay = (e: Essay): WB[] => [
  h2(e.title),
  box(`QUESTION: ${e.question}`),
  table([
    ['Command words', e.command],
    ['Line of argument', e.line],
  ]),
  h3('Plan'),
  ul(e.plan),
  h3('Introduction'),
  p(e.intro),
  ...e.body.flatMap((b) => peel(b.label, b.p, b.e, b.x, b.l)),
  h3('Conclusion'),
  p(e.conclusion),
  box('Marker’s check: Does the introduction state a line of argument? Does every paragraph sustain it? Is each piece of evidence relevant and specific (names, dates, laws)? Is there an explanation after every example? Does the conclusion answer the question and stay consistent with the introduction? In the exam, write the paragraphs as continuous prose. The labels (Point, Evidence, Explain, Link) are here only so you can see the structure.'),
];

/* ── Skills ───────────────────────────────────────────────────────────── */

const SKILLS = L('hist-e-skills', 'Essay Skills: Structure, Command Words and Wording', 30, [
  h2('What a history essay is (and is not)'),
  p('A history essay is an ARGUMENT, not a story. You are given a statement or a question and you must take a position (your line of argument) and defend it with historical evidence. A narrative that simply retells events in order will not earn high marks even if every fact is right. Markers look for a clear argument, relevant evidence and explanation.'),
  table([
    ['Narrative (avoid)', 'In 1836 the Voortrekkers left the Cape. Then they crossed the Orange River. Then in 1838 they fought at Blood River…'],
    ['Argument (aim for this)', 'Dissatisfaction with British policies on labour was the main reason Boers left the Cape in 1836, because the abolition of slavery in 1834 removed their workforce and the compensation was too low.'],
  ]),
  h2('The structure the department expects'),
  table([
    ['Introduction', 'Briefly introduce the topic and the key issue, and state your LINE OF ARGUMENT (your answer to the question). Say what you will discuss. Do not tell the whole story.'],
    ['Body paragraphs', 'Each paragraph develops ONE main point that supports your line of argument. Use the PEEL pattern.'],
    ['Conclusion', 'Bring the argument together and answer the question directly. Do not introduce new facts. It must be consistent with your introduction.'],
  ]),
  h2('PEEL: the paragraph formula'),
  table([
    ['P: Point', 'The topic sentence: the main point of the paragraph, and a direct answer to the question.'],
    ['E: Evidence', 'Relevant, specific facts: names, dates, laws, events, numbers, short source references.'],
    ['E: Explain', 'Show HOW and WHY the evidence supports your point and the question. This is where most marks are won or lost.'],
    ['L: Link', 'Link back to the question or the line of argument, and lead into the next point.'],
  ]),
  p('The marking guidelines describe the same thing in other words: each paragraph must sustain the major point, the explanation must clarify the point and how it answers the question, examples must be relevant and support the argument, and the link keeps the argument sustained and coherent.'),
  h2('Command words: what the question is asking'),
  table([
    ['Discuss', 'Give a balanced answer with both sides, then reach a conclusion.'],
    ['Critically discuss / Critically evaluate', 'Weigh the strengths and weaknesses of an idea or statement. Judge it using evidence.'],
    ['Do you agree? / To what extent do you agree?', 'Take a clear position (fully, partly or not at all) and justify it. “Partly” is allowed if you explain exactly how far.'],
    ['Explain / Account for', 'Give reasons and causes. “Why did…?”'],
    ['Assess', 'Judge how successful, important or harmful something was.'],
    ['Compare', 'Show similarities AND differences.'],
    ['Analyse', 'Break the issue into parts and explain how they connect.'],
  ]),
  h2('Useful essay wording'),
  table([
    ['Introduction', '“This essay will argue that…”  “In this essay I will show/examine/discuss…”  “It will be argued that… although…”'],
    ['Adding a point', '“Furthermore…”  “In addition…”  “Another key factor was…”'],
    ['Evidence', '“For example…”  “This is evident from…”  “This is illustrated by…”  “According to [historian/source]…”'],
    ['Explaining', '“This shows that…”  “This meant that…”  “As a result…”  “Consequently…”  “This is significant because…”'],
    ['Contrast / counter-argument', '“However…”  “On the other hand…”  “Despite this…”  “Although some argue that… the evidence shows…”'],
    ['Linking back', '“Therefore, this supports the view that…”  “This confirms that… was a key factor.”'],
    ['Conclusion', '“In conclusion, it is clear that…”  “Therefore, it can be argued that…”  “Overall, the evidence shows that…”'],
  ]),
  h2('Planning in five minutes'),
  ul([
    'Underline the command word and the key concepts in the question.',
    'Write your line of argument in one sentence.',
    'List three or four main points (each will become a paragraph).',
    'Next to each point, jot two or three facts (a name, a date, a law).',
    'Decide the order: strongest point first, or build to the strongest.',
  ]),
  h2('Typical errors'),
  ul([
    'Writing everything you know about the topic instead of answering THIS question.',
    'Narrating events in chronological order with no argument.',
    'Making a point but giving no evidence, or giving evidence with no explanation.',
    'A conclusion that contradicts the introduction, or that adds new facts.',
    'Using the words “I think” or “I feel” without evidence. Rather write “The evidence shows…”.',
  ]),
  h2('Quick self-test'),
  qa([
    { q: 'What is a line of argument?', a: 'Your answer to the question in one sentence. It is stated in the introduction and sustained in every paragraph.' },
    { q: 'What does the E for Explain do in PEEL?', a: 'It shows how the evidence proves your point and answers the question. Evidence alone is not enough.' },
    { q: 'Can you answer “To what extent do you agree?” with “partly”?', a: 'Yes, if you say how far you agree and give evidence for both your agreement and your reservations.' },
  ]),
]);

/* ── Britain and the Cape ─────────────────────────────────────────────── */

const CAPE = L('hist-e-cape', 'Model Essays: Britain and the Cape', 45, [
  p('Facts you can use: the Dutch settlement (1652) and the loss of Khoikhoi land and cattle; the smallpox epidemic of 1713; slavery at the Cape; British occupation (1795 and permanently 1806); the Caledon Code (1809); the Black Circuit (1812); Ordinance 50 (1828); abolition of slavery (1834) and the apprenticeship period to 1838; Slagtersnek (1815); the 1820 Settlers; the Great Trek from 1836; the Xhosa Wars and the cattle-killing (1856–57).'),
  ...essay({
    title: 'Essay 1: The abolition of slavery and the Great Trek',
    question: '“The abolition of slavery was the main reason why Boers left the Cape Colony in the 1830s.” Do you agree? Support your answer with relevant evidence.',
    command: '“Do you agree?” means you must take a position. “Main reason” invites you to compare causes.',
    line: 'Agree, but only partly: abolition was the most important cause, because it destroyed the Boers’ labour system, but it combined with frontier insecurity and British policies on land and law.',
    plan: [
      'Main cause: abolition of slavery (1834) removed labour; compensation inadequate.',
      'Related: Ordinance 50 and the Black Circuit changed master–servant relations.',
      'Frontier insecurity: Xhosa Wars and British policy.',
      'Anglicisation and the loss of Boer identity.',
    ],
    intro: 'Between 1835 and the early 1840s several thousand Boers, later known as Voortrekkers, left the Cape Colony and moved into the interior. This essay will argue that the abolition of slavery was the single most important reason, because it struck at the Boers’ economic and social order, but that it was strengthened by other grievances, namely British legal reforms, insecurity on the eastern frontier, and cultural pressure.',
    body: [
      {
        label: 'Body paragraph 1: abolition of slavery',
        p: 'The abolition of slavery was the main cause of the Boers’ departure because it destroyed the labour on which their farms depended.',
        e: 'Slavery was abolished in the British Empire in 1834, with a four-year apprenticeship period for slaves until 1838. The British government offered compensation, but it was far lower than the value of the slaves, and it had to be claimed in London, which forced many farmers to sell their claims to agents at a loss.',
        x: 'Slaves were the main workforce on farms in the Cape. Losing them without fair payment threatened farmers with ruin. This helps to explain why Piet Retief’s manifesto of 1837 complained about the losses caused by the freeing of the slaves and the inadequate compensation.',
        l: 'This shows that the economic blow of abolition was central to the decision to leave.',
      },
      {
        label: 'Body paragraph 2: legal and labour reforms',
        p: 'British reforms that gave Khoikhoi and other servants legal protection strengthened the view that Boers were losing control.',
        e: 'The Caledon Code (1809) required written labour contracts, the Black Circuit (1812) investigated complaints of ill-treatment, and Ordinance 50 (1828) removed pass restrictions on Khoikhoi and gave them legal equality.',
        x: 'These measures limited the power of farmers over their servants and made it harder to force people to work. Many Boers resented the idea that servants could complain against masters in court.',
        l: 'Thus abolition was part of a wider pattern of British interference, which increased the Boers’ dissatisfaction.',
      },
      {
        label: 'Body paragraph 3: frontier insecurity',
        p: 'Insecurity on the eastern frontier also pushed farmers to leave.',
        e: 'The Sixth Frontier War (1834–1835) saw Xhosa forces raid farms, and the Cape governor’s decision to return some conquered land to the Xhosa angered the frontier farmers. The Boers felt the British did not protect their property.',
        x: 'Boers who had lost cattle and homes believed the government valued peace with the Xhosa more than their losses. This made leaving to find new, safer land attractive.',
        l: 'This shows that insecurity was an important but secondary cause, strengthening the effect of abolition.',
      },
      {
        label: 'Body paragraph 4: culture and identity',
        p: 'Anglicisation threatened the Boers’ culture and was a further reason for dissatisfaction.',
        e: 'English replaced Dutch as the official language in the courts and government in 1828, and Slagtersnek (1815), where Boer rebels were hanged, left a bitter memory of British justice.',
        x: 'Boers saw these actions as an attack on their identity and independence. This feeling made them more willing to leave British rule altogether.',
        l: 'Therefore, culture was a contributing factor, but less direct than economic loss.',
      },
    ],
    conclusion: 'In conclusion, the abolition of slavery was the main reason for the Great Trek because it removed the labour and wealth of the farmers without fair compensation. However, it cannot be separated from British legal reforms, frontier insecurity and cultural pressure, which together made life under British rule unacceptable to many Boers. Abolition was therefore the most important of several linked causes.',
  }),
  ...essay({
    title: 'Essay 2: British rule and the Khoikhoi',
    question: '“British rule at the Cape improved the lives of the Khoikhoi.” Critically discuss this statement.',
    command: '“Critically discuss” means weigh the evidence for and against and reach a judgement.',
    line: 'British rule gave the Khoikhoi some legal improvements, notably Ordinance 50, but these were limited and often undermined by vagrancy laws, loss of land and continued exploitation, so overall the improvement was partial.',
    plan: [
      'Improvements: Ordinance 50 (1828), Black Circuit, missionaries (Kat River).',
      'Limits: Caledon Code and vagrancy laws; passes.',
      'Land loss and labour: Khoikhoi remained servants.',
      'Judgement: partial improvement.',
    ],
    intro: 'When Britain took control of the Cape, the Khoikhoi had already lost most of their land, cattle and independence under the Dutch. This essay will argue that British rule brought some real legal gains to the Khoikhoi, but that these gains were limited by labour controls and land loss, so that overall their lives improved only partly.',
    body: [
      {
        label: 'Body paragraph 1: legal improvements',
        p: 'British reforms gave the Khoikhoi legal protection they had not had before.',
        e: 'The Black Circuit of 1812 allowed Khoikhoi to complain about ill-treatment by farmers, and Ordinance 50 of 1828 removed the pass laws and gave Khoikhoi the same legal rights as other free people. They could now own land and move freely.',
        x: 'These laws officially recognised Khoikhoi as free subjects and gave them the right to seek work and justice in court. This was a significant change from the situation under the Dutch East India Company.',
        l: 'Therefore, in law, British rule improved the position of the Khoikhoi.',
      },
      {
        label: 'Body paragraph 2: limits on freedom',
        p: 'However, other British laws limited the Khoikhoi’s freedom.',
        e: 'The Caledon Code of 1809 forced Khoikhoi to carry passes and to have a fixed place of residence, and could be used to bind them to farmers, as Khoikhoi without work could be seen as vagrants. Farmers could register Khoikhoi children as “apprentices” until adulthood.',
        x: 'These laws let farmers control Khoikhoi labour, which kept many in a position close to servitude. Ordinance 50 improved the law but did not end the economic power of farmers.',
        l: 'This shows that early British reforms did not fully free the Khoikhoi.',
      },
      {
        label: 'Body paragraph 3: land and economic position',
        p: 'The Khoikhoi continued to be landless and dependent, which limited any real improvement.',
        e: 'Most Khoikhoi had lost their grazing land to farmers before 1806. Few had the means to buy land after Ordinance 50. Some found refuge at mission stations, such as Bethelsdorp, or the Kat River Settlement founded in 1829, but even these were later restricted or removed by the colonial government.',
        x: 'Without land and cattle, the Khoikhoi had no choice but to work for farmers on low wages. Legal equality did not give them economic independence.',
        l: 'This confirms that improvements in law were not matched by improvements in daily life.',
      },
    ],
    conclusion: 'In conclusion, British rule brought legal reforms such as Ordinance 50 that improved the status of the Khoikhoi, but vagrancy laws, loss of land and continued dependence on farmers limited these gains. The statement is therefore only partly true: the Khoikhoi were better protected on paper than before, but their real situation changed little.',
  }),
  ...essay({
    title: 'Essay 3: Xhosa responses to colonial expansion',
    question: '“The Xhosa did not simply accept colonial expansion but responded in various ways.” Discuss.',
    command: '“Discuss” asks for a range of responses, with evidence, and a judgement on how effective they were.',
    line: 'The Xhosa responded with armed resistance, strategic diplomacy and, later, millenarian hope, which shows that they were active agents, although none stopped colonial expansion.',
    plan: [
      'Armed resistance: frontier wars (1779–1853), leaders Ngqika, Ndlambe, Makana.',
      'Prophets and spiritual resistance: Nxele (Makana) and Mlanjeni.',
      'Alliances and adaptation: trade and mission schools.',
      'Cattle-killing (1856–57) as the end result of defeat.',
    ],
    intro: 'From the late eighteenth century the Xhosa chiefdoms came into repeated contact with the expanding Cape Colony. This essay will argue that the Xhosa were not passive victims but responded actively through warfare, leadership and spiritual movements, and by adapting to change, even though they were ultimately overpowered by superior colonial military and economic strength.',
    body: [
      {
        label: 'Body paragraph 1: armed resistance',
        p: 'The Xhosa resisted colonial expansion with armed force over many decades.',
        e: 'A series of frontier wars lasted from 1779 to 1879. In the Fifth Frontier War (1818–19) Makana (Nxele) led an attack on Grahamstown, and in the Sixth War (1834–35) Xhosa warriors pushed deep into the colony.',
        x: 'These wars show a sustained attempt to protect land and cattle. The use of guerrilla tactics in difficult terrain allowed the Xhosa to hold out against better-armed troops.',
        l: 'This demonstrates that the Xhosa actively defended their independence.',
      },
      {
        label: 'Body paragraph 2: spiritual leadership',
        p: 'Spiritual leaders inspired resistance by uniting people against the colonists.',
        e: 'Makana, a prophet and military leader, told followers that the ancestors would help them drive out the settlers. In 1850–53 the prophet Mlanjeni encouraged people to fight and promised protection from bullets.',
        x: 'These beliefs gave hope in times of loss and united chiefdoms that were often divided. It shows that resistance was both military and spiritual.',
        l: 'This confirms that responses were varied, not only military.',
      },
      {
        label: 'Body paragraph 3: adaptation and co-operation',
        p: 'Some Xhosa adapted to colonial presence through trade and education.',
        e: 'Some chiefs traded with settlers at fairs and allowed missionaries to open schools. Others took paid work on settler farms.',
        x: 'These choices show that people tried to survive and benefit under changing conditions, not only to oppose.',
        l: 'Thus the Xhosa response was flexible as well as defiant.',
      },
      {
        label: 'Body paragraph 4: cattle-killing',
        p: 'The cattle-killing of 1856–57 showed the desperate end point of defeat.',
        e: 'After the loss of land and a lung disease that killed many cattle, a young girl, Nongqawuse, prophesied that if the Xhosa destroyed their cattle and crops, the ancestors would return and drive out the whites. Tens of thousands died of starvation.',
        x: 'The movement shows both the strength of Xhosa belief and the despair after long wars, and its failure left the Xhosa weak and allowed the colonial government to take more land.',
        l: 'This shows that while Xhosa responses were active, they could not stop colonial expansion.',
      },
    ],
    conclusion: 'In conclusion, the Xhosa responded to colonial expansion with military resistance, spiritual leadership, adaptation and, finally, the cattle-killing. These responses show that they were active agents in their own history, although the colony’s superior resources meant that none of them prevented the loss of land and independence.',
  }),
  ...essay({
    title: 'Essay 4: Dutch settlement and Khoikhoi society',
    question: '“Dutch settlement at the Cape destroyed Khoikhoi society.” To what extent do you agree?',
    command: '“To what extent” invites a judgement of degree, with evidence for and against.',
    line: 'Largely agree: the loss of land and cattle, disease and forced labour broke up the Khoikhoi’s way of life, although some Khoikhoi resisted and adapted.',
    plan: [
      'Land and cattle lost; free burghers and trekboers.',
      'Disease: smallpox 1713.',
      'Labour and legal control; Khoikhoi resistance wars (1659, 1673–77).',
      'Qualification: survival and absorption into Cape society.',
    ],
    intro: 'After Jan van Riebeeck arrived in 1652, the Dutch East India Company’s refreshment station grew into a colony. This essay will argue that Dutch settlement largely destroyed Khoikhoi society by taking land and cattle, introducing disease and forcing people into labour, although Khoikhoi people resisted and their culture did not disappear entirely.',
    body: [
      {
        label: 'Body paragraph 1: land and cattle',
        p: 'The loss of land and cattle undermined the basis of Khoikhoi society.',
        e: 'The Khoikhoi were herders. As the Company gave land to free burghers from 1657 and trekboers moved further out, grazing and water sources were taken. Wars in 1659 and 1673–1677 ended with the Khoikhoi losing cattle and independence.',
        x: 'Without land and cattle, chiefdoms could not support themselves, and leaders lost their authority. The economic base of their society collapsed.',
        l: 'This supports the view that settlement destroyed Khoikhoi society.',
      },
      {
        label: 'Body paragraph 2: disease',
        p: 'Disease devastated Khoikhoi communities.',
        e: 'The smallpox epidemic of 1713, brought on a Dutch ship, killed a large part of the Khoikhoi population around Cape Town. Many other Khoikhoi were also weakened by new diseases.',
        x: 'Losing so many people broke family and political structures, and left survivors with little choice but to work for the Dutch.',
        l: 'This shows how the arrival of the Dutch directly caused the collapse.',
      },
      {
        label: 'Body paragraph 3: labour and control',
        p: 'The Khoikhoi were absorbed as servants and labourers.',
        e: 'By the eighteenth century many Khoikhoi worked on farms for food and small wages, and laws tied them to farmers. Many intermarried with slaves and settlers and became part of a mixed Cape population.',
        x: 'This changed their identity and language, and ended their independent way of life.',
        l: 'This confirms that Khoikhoi society was largely destroyed.',
      },
      {
        label: 'Body paragraph 4: qualification',
        p: 'However, Khoikhoi did not disappear completely.',
        e: 'Some resisted with raids and wars; others escaped to the frontier or joined groups like the Griqua, who preserved elements of their culture.',
        x: 'This shows that Khoikhoi people adapted and survived, even if their traditional society did not.',
        l: 'Therefore, the statement is largely, but not entirely, true.',
      },
    ],
    conclusion: 'In conclusion, Dutch settlement largely destroyed Khoikhoi society through land loss, disease and forced labour. However, the survival of Khoikhoi descendants and groups such as the Griqua shows that it was transformed rather than completely erased.',
  }),
]);

/* ── Highveld ─────────────────────────────────────────────────────────── */

const HIGHVELD = L('hist-e-highveld', 'More Model Essays: Co-operation and Conflict on the Highveld', 30, [
  p('Facts you can use: Moshoeshoe and Thaba Bosiu; the Voortrekkers on the Highveld; British annexation of the Orange River Sovereignty (1848); the Warden Line (1849); the Battle of Berea (1852); the Sand River Convention (1852) and Bloemfontein Convention (1854); the Orange Free State and its wars with the Basotho (1858, 1865–68); the inboekelinge system; Basutoland as a British protectorate (1868).'),
  ...essay({
    title: 'Essay 1: The Boer republics and African communities',
    question: '“The Boer republics posed a greater threat to African communities on the Highveld than British colonial rule.” To what extent do you agree?',
    command: '“To what extent” and a comparison between two groups.',
    line: 'Largely agree: the Boer republics took land and labour by force, while the British, though self-interested, sometimes limited Boer expansion.',
    plan: [
      'Boer republics: land seizure and wars on the Basotho.',
      'Boer republics: forced labour, inboekelinge.',
      'British: Warden Line and the withdrawal of 1854.',
      'Judgement: republics were the greater direct threat, but British policy enabled them.',
    ],
    intro: 'In the middle of the nineteenth century, African communities such as the Basotho faced pressure from both Boer settlers and British officials. This essay will argue that the Boer republics were the greater direct threat to African land and freedom, although British actions, especially their withdrawal in 1854, made this threat possible.',
    body: [
      {
        label: 'Body paragraph 1: land and war',
        p: 'The Boer republics threatened African communities by taking their land through war.',
        e: 'After the Orange Free State was recognised in 1854, it fought the Basotho in 1858 and again in 1865–1868. Boer commandos destroyed crops and captured cattle, and by the Treaty of Aliwal North (1869) the Basotho lost much of their fertile land west of the Caledon River.',
        x: 'This loss of the best farming land threatened the survival of the Basotho and weakened their economy. The Boers acted with the aim of permanent settlement.',
        l: 'This shows that the republics were a direct and serious threat.',
      },
      {
        label: 'Body paragraph 2: labour',
        p: 'The republics also threatened African freedom through forced labour.',
        e: 'The inboekelinge system allowed Boers to register captured African children as apprentices. Girls had to work until 21 and boys until 25, without wages.',
        x: 'It was slavery in all but name, and it showed that the republics did not accept African equality.',
        l: 'This adds weight to the argument that the Boer republics were the greater danger.',
      },
      {
        label: 'Body paragraph 3: British policy',
        p: 'British rule was less direct a threat, but it was not harmless.',
        e: 'Britain annexed the Orange River Sovereignty in 1848 and under Warden drew a line in 1849 which gave away Basotho land. In 1854 it withdrew, leaving the Basotho to face the new republic alone.',
        x: 'British officials acted in British interests, wanting to keep costs low and trade open, and abandoned African allies. This helped the Boers to expand.',
        l: 'This shows that the British share some responsibility, but the actual invasions came from the republics.',
      },
    ],
    conclusion: 'In conclusion, the Boer republics were the greater direct threat to African communities because of their invasions and forced labour. British policy was self-interested and helped the republics, but the republics were the chief aggressors.',
  }),
  ...essay({
    title: 'Essay 2: The Conventions of 1852 and 1854',
    question: '“The Sand River and Bloemfontein Conventions betrayed the interests of Africans.” Discuss.',
    command: '“Discuss” with a loaded word, “betrayed”. Weigh the evidence and decide.',
    line: 'The conventions did betray African interests because Britain recognised Boer independence without protecting African land or rights, although Britain’s motives were financial rather than hostile.',
    plan: [
      'Sand River (1852): Boer independence in the Transvaal; Africans not consulted.',
      'Bloemfontein (1854): British withdraw from the Orange River Sovereignty.',
      'Impact on the Basotho: wars and loss of land.',
      'Counter-point: British motives and later protection (1868).',
    ],
    intro: 'In 1852 and 1854 Britain signed conventions that recognised the independence of the Boer republics north of the Orange and Vaal Rivers. This essay will argue that these agreements did betray the interests of African communities, who were not consulted and were left without protection, although Britain was driven by cost and strategy, not by a desire to harm Africans.',
    body: [
      {
        label: 'Body paragraph 1: Africans excluded',
        p: 'The conventions were made without African consent.',
        e: 'The Sand River Convention (1852) recognised the right of the Transvaal Boers to govern themselves, and the Bloemfontein Convention (1854) did the same for the Orange Free State. Neither African leaders such as Moshoeshoe nor their people were involved.',
        x: 'Decisions about land that belonged to African communities were taken by Britain and the Boers alone. This ignored African rights and showed that African interests were secondary.',
        l: 'This supports the view that the conventions were a betrayal.',
      },
      {
        label: 'Body paragraph 2: no protection',
        p: 'The conventions removed British protection from Africans.',
        e: 'Britain withdrew its officials and troops and promised not to make alliances with African chiefs north of the Orange River, which had made Moshoeshoe a British ally.',
        x: 'This left the Basotho facing a hostile new state. The British gave up a role as a check on Boer expansion.',
        l: 'This confirms that African interests were sacrificed.',
      },
      {
        label: 'Body paragraph 3: consequences',
        p: 'The results for the Basotho were destructive.',
        e: 'The Orange Free State attacked Basutoland in 1858 and in 1865–68, destroying crops and capturing land.',
        x: 'The wars showed what happened when Boers were free from British restraint, and led Moshoeshoe to ask for British protection.',
        l: 'The harm that followed proves that the conventions were a betrayal.',
      },
      {
        label: 'Body paragraph 4: Britain’s motives',
        p: 'However, British motives were financial, and later action offered some protection.',
        e: 'Britain was fighting wars elsewhere and wanted to cut the costs of governing the interior. In 1868 it made Basutoland a protectorate, which saved the Basotho from being swallowed by the Free State.',
        x: 'This does not excuse the earlier abandonment, but it shows that the British were not simply hostile to Africans.',
        l: 'Overall, the conventions still fit the description of a betrayal.',
      },
    ],
    conclusion: 'In conclusion, the Sand River and Bloemfontein Conventions betrayed African interests by excluding Africans and removing British protection. Although Britain acted from cost-cutting motives and later made Basutoland a protectorate, the damage was done in the years in between.',
  }),
]);

/* ── South African War ────────────────────────────────────────────────── */

const WAR = L('hist-e-war', 'More Model Essays: The South African War', 30, [
  p('Facts you can use: the discovery of gold on the Witwatersrand (1886); Uitlanders and the franchise; Cecil Rhodes and the Jameson Raid (1895–96); Alfred Milner; the failed Bloemfontein talks and Kruger’s ultimatum (October 1899); Black Week (December 1899); the sieges of Mafeking, Kimberley and Ladysmith; Roberts and Kitchener; the scorched-earth policy and concentration camps; Emily Hobhouse; the role of Africans as workers, scouts and armed fighters; the Treaty of Vereeniging (31 May 1902).'),
  ...essay({
    title: 'Essay 1: The causes of the war',
    question: '“Gold was the main cause of the South African War (1899–1902).” Do you agree? Support your answer with relevant evidence.',
    command: '“Do you agree?” and “main cause”: take a position and compare causes.',
    line: 'Agree: the discovery of gold raised the stakes for Britain and led to the conflicts over Uitlander rights and control, which were the immediate causes.',
    plan: [
      'Gold (1886): wealth and power of the Transvaal.',
      'Uitlander franchise and Kruger.',
      'Imperial ambition: Rhodes, Jameson Raid, Milner.',
      'Judgement: gold lies behind all of them.',
    ],
    intro: 'In October 1899 war broke out between Britain and the two Boer republics, the Transvaal and the Orange Free State. This essay will argue that gold was the main cause, because it transformed the Transvaal into a rich state that Britain wished to control, and because it brought thousands of Uitlanders whose rights became the focus of the dispute.',
    body: [
      {
        label: 'Body paragraph 1: gold',
        p: 'The discovery of gold made the Transvaal valuable to Britain.',
        e: 'Gold was found on the Witwatersrand in 1886, and Johannesburg grew quickly. By the 1890s the Transvaal was one of the world’s main sources of gold.',
        x: 'The wealth made the Transvaal independent and powerful, which threatened British control in the region. Britain wanted the gold to support its economy and the gold standard.',
        l: 'This shows that gold made control of the Transvaal important to Britain.',
      },
      {
        label: 'Body paragraph 2: Uitlanders',
        p: 'The Uitlander issue arose directly because of gold.',
        e: 'Thousands of mostly British miners came to the Rand. Kruger’s government refused them the vote unless they lived in the republic for fourteen years, and taxed the gold industry heavily.',
        x: 'Britain used the complaints of the Uitlanders as a reason to interfere. Kruger saw giving the vote as a threat to Boer independence.',
        l: 'Therefore, a dispute created by the gold rush became the immediate reason for the war.',
      },
      {
        label: 'Body paragraph 3: imperial ambitions',
        p: 'British imperial ambitions were also important, but they were closely connected to gold.',
        e: 'Cecil Rhodes supported the failed Jameson Raid of 1895–96, an attempt to overthrow Kruger. Alfred Milner, the High Commissioner, took a hard line and broke off talks at Bloemfontein in 1899.',
        x: 'Rhodes and Milner wanted a British-controlled southern Africa, and the gold fields were the most valuable prize.',
        l: 'This suggests that imperialism and gold were closely linked.',
      },
    ],
    conclusion: 'In conclusion, gold was the main cause of the war, as it brought wealth, the Uitlander problem and British imperial interest together. Other factors mattered, but without gold the conflict would probably not have happened.',
  }),
  ...essay({
    title: 'Essay 2: Africans and the war',
    question: '“The South African War was a white man’s war in which Africans played no role.” Critically discuss.',
    command: '“Critically discuss” a one-sided statement.',
    line: 'Disagree: although the war was fought mainly between Boers and British, Africans took part as workers, scouts, soldiers and victims, and suffered greatly.',
    plan: [
      'Roles as workers and scouts.',
      'Armed Africans, for example at Mafeking.',
      'Africans as victims: camps and loss of land.',
      'Outcome: Africans’ hopes ignored at Vereeniging.',
    ],
    intro: 'The South African War is often described as a war between Boers and British. This essay will argue that this view is too narrow, because Africans took part in many ways and suffered heavily, even though their role was often ignored in the peace settlement.',
    body: [
      {
        label: 'Body paragraph 1: workers and scouts',
        p: 'Many Africans served as workers and scouts on both sides.',
        e: 'Thousands of Africans acted as drivers, labourers, messengers and scouts for the British army, and Boer commandos also took African servants (agterryers) with them to look after horses and carry supplies.',
        x: 'Armies could not have moved or been supplied without this labour, so Africans were essential to both armies.',
        l: 'This disproves the claim that Africans played no role.',
      },
      {
        label: 'Body paragraph 2: armed Africans',
        p: 'Some Africans also fought or helped defend towns.',
        e: 'During the siege of Mafeking (1899–1900) hundreds of armed Africans helped to defend the town, and Sol Plaatje worked as a court interpreter and kept a diary of the siege.',
        x: 'Britain officially said it was a “white man’s war”, but in practice it relied on African fighters, and many Africans hoped that supporting the British would improve their political rights.',
        l: 'This shows that Africans took an active, if unofficial, military role.',
      },
      {
        label: 'Body paragraph 3: victims',
        p: 'Africans were also victims of the war.',
        e: 'The scorched-earth policy destroyed African farms as well as Boer farms. Thousands of Africans were held in separate concentration camps, where many died of disease and poor conditions, though their suffering received less attention than that of the Boers.',
        x: 'This shows that the war affected African communities directly, and their losses were seen as less important at the time.',
        l: 'This confirms that Africans were deeply involved.',
      },
      {
        label: 'Body paragraph 4: the peace',
        p: 'Africans were ignored in the outcome, which created the false impression that they were not involved.',
        e: 'The Treaty of Vereeniging (May 1902) said that the question of the African vote would be left until after self-government was granted to the former republics.',
        x: 'This postponed any rights for Africans, and helped Britain and the Boers to reconcile at African expense.',
        l: 'This explains why the war is remembered as a white man’s war, although Africans played a significant part.',
      },
    ],
    conclusion: 'In conclusion, the statement is not accurate. Africans served as workers, scouts and fighters and suffered in the camps and on their farms. They were left out of the peace settlement, which is why their role has often been forgotten.',
  }),
]);

/* ── Natives’ Land Act ────────────────────────────────────────────────── */

const LAND = L('hist-e-land', 'More Model Essays: The Natives’ Land Act, 1913', 30, [
  p('Facts you can use: the Union of South Africa (1910); the SANNC (later the ANC) founded in 1912; the Natives’ Land Act (1913): African ownership restricted to scheduled reserves (about 7% of the land, later extended to about 13% in 1936), a ban on buying land outside them, and an attack on sharecropping; the effect on Black farmers and tenants; Sol Plaatje’s Native Life in South Africa (1916); the 1914 SANNC deputation to Britain; migrant labour and the mines.'),
  ...essay({
    title: 'Essay 1: Why was the Land Act passed?',
    question: '“The main aim of the Natives’ Land Act of 1913 was to create a cheap labour force for white farmers and mines.” Do you agree?',
    command: '“Do you agree?” and “main aim”: take a position and weigh aims.',
    line: 'Agree: the Act was designed to push Africans off independent farming into wage labour, although it also served segregation and land protection for whites.',
    plan: [
      'Reserves limited African land.',
      'Ban on sharecropping forced tenants into wages.',
      'Mines needed labour; Act fed the migrant system.',
      'Other aims: segregation, white political demands.',
    ],
    intro: 'The Natives’ Land Act of 1913 was one of the first major segregation laws of the new Union of South Africa. This essay will argue that its main aim was to create a cheap, dependent labour force for white farmers and the mines by limiting African land ownership, although other motives, such as white fear of competition and a policy of segregation, also played a part.',
    body: [
      {
        label: 'Body paragraph 1: land limits',
        p: 'The Act limited African land so that Africans could not support themselves.',
        e: 'It set aside about 7% of the land as scheduled areas (reserves) in which Africans could own land and made it illegal for Africans to buy or rent land outside them.',
        x: 'With so little land, reserves could not support the population, so many people had to seek work with farmers or on the mines to pay taxes and survive.',
        l: 'This supports the claim that the Act aimed to produce labour.',
      },
      {
        label: 'Body paragraph 2: sharecropping',
        p: 'The Act attacked sharecropping, which gave Black farmers independence.',
        e: 'Many Africans farmed as sharecroppers on white-owned land, giving the owner a share of the harvest. The Act banned this arrangement and forced many tenants to become labourers who were paid wages or worked for the landowner.',
        x: 'Sharecroppers had often been more successful than white farmers, and white farmers resented the competition. Forcing them to become labourers ended that competition and gave farmers workers.',
        l: 'This confirms that the Act served economic aims.',
      },
      {
        label: 'Body paragraph 3: mines and migrant labour',
        p: 'The Act helped supply the mines with workers.',
        e: 'The mining industry depended on migrant labour from rural areas. As land shrank and families lost their farms, men left for the mines on short contracts.',
        x: 'The mining companies benefited from a steady supply of poor workers who accepted low pay.',
        l: 'This shows that the Act supported the wider economy of white South Africa.',
      },
      {
        label: 'Body paragraph 4: other motives',
        p: 'However, segregation and white politics also shaped the Act.',
        e: 'The new Union government wanted to keep white and Black South Africans apart, and white farmers lobbied for protection from Black competition.',
        x: 'This shows that the Act was part of a wider policy of segregation, not only labour supply.',
        l: 'Even so, the effect on labour remained the most important result.',
      },
    ],
    conclusion: 'In conclusion, the Natives’ Land Act mainly aimed to create a cheap labour force by limiting African land and ending sharecropping, though it also fitted a broader plan of segregation. The statement is therefore largely correct.',
  }),
  ...essay({
    title: 'Essay 2: African responses to the Land Act',
    question: '“Africans protested against the Land Act, but their protests achieved nothing.” To what extent do you agree?',
    command: '“To what extent” and a negative claim to test.',
    line: 'Partly agree: protests such as those of the SANNC and Sol Plaatje did not change the law, but they raised awareness, built national organisation and began a long tradition of resistance.',
    plan: [
      'SANNC protests and the 1914 deputation to Britain.',
      'Sol Plaatje’s Native Life in South Africa.',
      'Failure: the Act stayed and was later extended.',
      'Long-term significance for resistance.',
    ],
    intro: 'The Natives’ Land Act caused immediate hardship and anger. This essay will argue that Africans protested strongly, but that the protests failed to repeal the Act, so the claim is partly true. However, the protests had lasting importance because they strengthened African political organisation.',
    body: [
      {
        label: 'Body paragraph 1: organised protest',
        p: 'The SANNC organised protests against the Land Act.',
        e: 'The South African Native National Congress (SANNC), formed in 1912, held meetings and sent a delegation to London in 1914 to ask the British government to intervene. Members included Sol Plaatje and Walter Rubusana.',
        x: 'This was one of the first national attempts by Africans to use petitions and diplomacy against segregation.',
        l: 'This shows African protest was organised and determined.',
      },
      {
        label: 'Body paragraph 2: Sol Plaatje’s work',
        p: 'Sol Plaatje drew attention to the human cost of the Act.',
        e: 'He travelled through rural areas and wrote Native Life in South Africa (1916), describing families evicted from farms with their cattle and children. The book was published in Britain.',
        x: 'It exposed the suffering to an international audience and recorded what happened for later generations.',
        l: 'This shows that protest had value, although it did not change the law immediately.',
      },
      {
        label: 'Body paragraph 3: failure to change the law',
        p: 'In terms of immediate results, the protests failed.',
        e: 'The British government refused to overrule the South African government, and the Land Act remained in force. In 1936 the Native Trust and Land Act added more land to the reserves, but only to about 13% of South Africa.',
        x: 'Africans remained restricted to a small part of the land. This shows how little political power they had.',
        l: 'This supports the part of the statement that protests did not succeed in changing the law.',
      },
      {
        label: 'Body paragraph 4: long-term impact',
        p: 'The protests had a long-term impact on resistance.',
        e: 'The SANNC, later renamed the African National Congress (1923), continued to campaign against segregation and land laws for decades.',
        x: 'The campaign taught leaders the value of organisation and prepared the ground for later mass movements.',
        l: 'Therefore, the claim that the protests achieved nothing is too strong.',
      },
    ],
    conclusion: 'In conclusion, the protests did not stop the Land Act, so in the short term they failed. However, they created a national organisation, produced an important historical record and began a tradition of resistance. The statement is therefore only partly correct.',
  }),
]);

export const HISTORY_ESSAYS_CHAPTER: Chapter = {
  id: CH,
  subjectId: 'history',
  title: 'Essay Writing Guide and PEEL Model Essays',
  summary: 'How a history essay is built and marked, the command words and wording, and ten model essays on Britain and the Cape, the Highveld, the South African War and the Land Act.',
  lessons: [SKILLS, CAPE, HIGHVELD, WAR, LAND],
};
