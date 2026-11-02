import type { Chapter } from '../../lib/types';
import { h2, h3, p, ul, box, table, qa, peel, lessonIn, type WB } from './writeKit';

/**
 * History: a second, separate essay-writing topic built around the student's own
 * handwritten notes (PEEL, command words, linking words, essay structure) and the four
 * example essay questions on the Highveld and the South African War photographed from
 * their notebook. Ends with an extended set of predicted South African War essays and a
 * dedicated evidence bank for that topic (fact + ready-made explanation, for dropping
 * straight into the "E" and "E" of PEEL).
 */

const CH = 'hist-essays-2';
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
  box('Marker’s check: Does the introduction state a line of argument? Does every paragraph sustain it? Is each piece of evidence relevant and specific (names, dates, laws)? Is there an explanation after every example? Does the conclusion answer the question and stay consistent with the introduction? Write the paragraphs as continuous prose in the exam — the P/E/E/L labels are only here to show you the structure.'),
];

/* ───────────────────────── Lesson 1: your notes, formalised ───────────────────────── */

const METHOD = L('he2-method', 'Essay Method: Your Notes on Structure, Command Words and Linking', 30, [
  h2('1. The shape of an essay (from "How to write an essay")'),
  table([
    ['Step 1: understand the question', 'Underline the command word. Work out exactly what it is asking you to do before you plan anything.'],
    ['Step 2: essay structure', 'Introduction → Body paragraphs (PEEL) → Conclusion.'],
    ['Step 3: introduction', 'State whether you agree/disagree, give your reason why, and say "This essay will outline/discuss/examine…". Never just repeat the question word-for-word.'],
    ['Step 4: body paragraphs', 'P = Point (main idea), E = Explain (explain the idea), E = Evidence (facts and/or dates), L = Link (link back to the line of argument).'],
  ]),
  box('Example introduction from your notes:\n"One would agree that the Songhai Empire collapsed due to internal weakness and external tension. This is because… This essay will outline the internal problems and external factors that led to the collapse."\n\nNotice the pattern: (1) take a position, (2) give the reason in one line, (3) say what the essay will cover — without repeating the question.'),
  h2('2. Command words: what each one actually wants'),
  table([
    ['Explain', 'Give reasons and make the point clear.'],
    ['Discuss', 'Give different viewpoints and evidence for each.'],
    ['Analyse', 'Break the topic into parts and show how they relate to each other.'],
    ['Compare', 'Show similarities.'],
    ['Contrast', 'Show differences.'],
    ['Evaluate', 'Give a judgement, backed by evidence.'],
    ['Account for', 'Give reasons (same idea as "explain").'],
  ]),
  h2('3. Introductions: the exact wording to use'),
  ul([
    '"One would agree / disagree that…" — state your position immediately.',
    'Give your reason why, in one short sentence.',
    '"This essay will outline / discuss / examine…" — say what is coming, but do NOT just repeat the question back.',
  ]),
  h2('4. PEEL in full, from your notes'),
  table([
    ['P — Point', 'The main idea of the paragraph.'],
    ['E — Explain', 'Explain the idea — unpack what the point means and why it matters to the question.'],
    ['E — Evidence', 'Give facts and/or dates — names, places, numbers, specific events.'],
    ['L — Link', 'Link back to the line of argument, using a linking word.'],
  ]),
  box('Your notes put EXPLAIN before EVIDENCE. That is a perfectly valid order and often reads more naturally: you say what you mean, then you prove it. Either order (Explain-then-Evidence, or Evidence-then-Explain) is accepted by markers, as long as both are there and the link is clear. In this guide, the model essays below use Evidence-then-Explain (the more common exam pattern); the extra South African War essays at the end use your preferred Explain-then-Evidence order, with a full evidence bank to match. Use whichever order feels more natural to you — just never give one without the other.'),
  h2('5. Linking words ("How to write a link")'),
  ul([
    'Furthermore,', 'In addition,', 'Moreover,', 'Therefore,', 'As a result,', 'Consequently,', 'Hence,', 'Whereas,', 'Subsequently,', 'However,',
  ]),
  box('Example from your notes:\n"As a result, the empire became vulnerable to invasion."\n\nUse a linking word at the START of your link sentence — it signals to the marker that you are tying the paragraph back to your argument, not drifting into a new, unrelated fact.'),
  h2('6. Conclusions'),
  ul([
    'Start with "In conclusion, …"',
    'Summarise your main points — do not just repeat them word for word, draw them together.',
    'Restate your argument (your line from the introduction).',
    'Answer the question clearly, in a direct final sentence.',
  ]),
  box('Golden rule: your conclusion must agree with your introduction. If your introduction says "one would agree", your conclusion cannot suddenly disagree. And never introduce a brand-new fact in the conclusion — that is where you draw everything together, not where you add something new.'),
  h2('Quick self-test'),
  qa([
    { q: 'In your own notes, what four things does Step 3 (introduction) tell you to include?', a: 'Take a position (agree/disagree), give your reason why in one line, and say "This essay will outline/discuss/examine…" without repeating the question.' },
    { q: 'What do the two Es in PEEL stand for?', a: 'Explain (unpack the idea) and Evidence (facts and/or dates). Your notes explain the idea before giving the evidence; both must be present either way.' },
    { q: 'Give three linking words from your notes that could start a Link sentence.', a: 'Any three of: Furthermore, In addition, Moreover, Therefore, As a result, Consequently, Hence, Whereas, Subsequently, However.' },
    { q: 'What two things must a conclusion NEVER do?', a: 'It must never contradict the introduction, and it must never introduce new facts that were not discussed in the body.' },
  ]),
]);

/* ───────────────────────── Lesson 2: Highveld essays (3 example questions) ───────────────────────── */

const HIGHVELD = L('he2-highveld', 'Model Essays: Co-operation and Conflict on the Highveld', 45, [
  p('Based on your Topic 5, Chapter 2/3 notes — "Co-operation and Conflict in the Highveld". Facts you can use: the arrival of the voortrekkers on the Highveld after 1836; Moshoeshoe and the Basotho at Thaba Bosiu; the Orange River Sovereignty annexed by Britain in 1848; the Warden Line (1849); the Sand River Convention (1852) recognising Transvaal independence; the Bloemfontein Convention (1854) creating the Orange Free State; wars between the Orange Free State and the Basotho (1858 and 1865–68); the Treaty of Aliwal North (1869); Basutoland becoming a British protectorate (1868).'),
  ...essay({
    title: 'Essay 1: The voortrekkers and conflict with African communities',
    question: 'The arrival of the voortrekkers in the Highveld was responsible for increased conflict with the African communities. Discuss this statement.',
    command: '"Discuss" — give different viewpoints and evidence for each, then reach a judgement.',
    line: 'Largely agree: the voortrekkers’ search for land directly caused new wars and land loss, though African communities were already in conflict with each other before 1836, which the Boers then exploited.',
    plan: [
      'Voortrekkers wanted independent farms, free of British control — competed directly for Highveld land.',
      'Wars and land seizure: conflict with the Ndebele (Mzilikazi) and later the Basotho.',
      'Boers exploited existing African rivalries rather than creating all conflict from nothing.',
      'Judgement: voortrekkers were the main new factor that escalated conflict.',
    ],
    intro: 'From 1836 onward, large numbers of Boer voortrekkers moved onto the Highveld, seeking land free from British rule. This essay will argue that the statement is largely true: the voortrekkers’ search for farms directly increased conflict with African communities, although some conflict between African groups predated their arrival and was then drawn into the wider struggle.',
    body: [
      {
        label: 'Body paragraph 1: competition for land',
        p: 'The voortrekkers’ demand for farms put them in direct competition with African communities for the same land.',
        e: 'Boer parties under leaders such as Potgieter and Retief trekked onto the Highveld from 1836, claiming large tracts of open grazing land that African chiefdoms also used and, in some cases, already occupied.',
        x: 'Because both groups depended on land for cattle and crops, the arrival of thousands of new settlers made conflict over territory almost unavoidable.',
        l: 'This shows that the voortrekkers were a new and direct cause of increased conflict.',
      },
      {
        label: 'Body paragraph 2: war with the Ndebele',
        p: 'Conflict broke out quickly between the voortrekkers and the Ndebele under Mzilikazi.',
        e: 'In 1837 voortrekker commandos fought the Ndebele at places such as Vegkop and eventually drove Mzilikazi’s people out of the Highveld and across the Limpopo River.',
        x: 'This was a direct result of the Boers moving onto land the Ndebele controlled, and it shows how quickly the arrival of the trekkers turned into open war.',
        l: 'Therefore, the trekkers’ arrival escalated conflict into full-scale war within a year.',
      },
      {
        label: 'Body paragraph 3: existing African rivalries',
        p: 'However, not all conflict was created by the voortrekkers; some was already present and was exploited by them.',
        e: 'Rivalries between African chiefdoms, worsened by the upheaval of the Mfecane/Difaqane in the 1820s, meant some groups were already weakened or in conflict before 1836.',
        x: 'The voortrekkers sometimes took advantage of this instability, allying with one group against another to gain land more easily, rather than being the sole original cause.',
        l: 'This shows the statement needs some qualification, even though the trekkers remained the main new factor.',
      },
    ],
    conclusion: 'In conclusion, the arrival of the voortrekkers was largely responsible for increased conflict on the Highveld, as their search for independent farmland led directly to wars such as that against the Ndebele. Existing rivalries among African communities meant the region was not entirely peaceful before 1836, but the scale and speed of conflict increased sharply once the trekkers arrived.',
  }),
  ...essay({
    title: 'Essay 2: Boer settlement and its impact on African communities',
    question: 'The expansion of Boer settlement had a negative impact on African communities in the Highveld. Do you agree with this statement?',
    command: '"Do you agree?" — take a clear position and defend it with evidence.',
    line: 'Agree: Boer expansion cost African communities land, independence and labour, although a small minority found limited opportunities through trade or alliance.',
    plan: [
      'Loss of land: Boer farms claimed over Basotho and other African territory.',
      'Loss of independence: annexation, conventions, and republics formed without African consent.',
      'Forced labour: the inboekelinge system.',
      'Qualification: limited trade and occasional alliances.',
    ],
    intro: 'As Boer voortrekkers settled across the Highveld from 1836, their expansion steadily reduced the land and independence of African communities such as the Basotho. This essay will argue that the impact was largely negative, shown through land loss, loss of political independence and forced labour, although there were limited exceptions where trade briefly benefited some African communities.',
    body: [
      {
        label: 'Body paragraph 1: loss of land',
        p: 'Boer expansion resulted in the steady loss of African land.',
        e: 'After the Orange Free State was established by the Bloemfontein Convention of 1854, it fought wars against the Basotho in 1858 and 1865–68, ending with the Treaty of Aliwal North in 1869, which took much of the fertile land west of the Caledon River from Moshoeshoe’s people.',
        x: 'This land was essential for Basotho farming and grazing; losing it weakened the kingdom’s economy and food security permanently.',
        l: 'This shows that Boer expansion had a direct and lasting negative impact on African land.',
      },
      {
        label: 'Body paragraph 2: loss of independence',
        p: 'African communities also lost political independence as Boer republics were formally recognised.',
        e: 'The Sand River Convention (1852) recognised Transvaal independence and the Bloemfontein Convention (1854) created the Orange Free State — both without consulting African leaders whose land lay within or near these new borders.',
        x: 'These agreements meant that major decisions about African land and sovereignty were made entirely by white negotiators, showing how little say African communities had over their own future.',
        l: 'This confirms the negative political impact of Boer settlement.',
      },
      {
        label: 'Body paragraph 3: forced labour',
        p: 'Boer settlement also brought forced labour practices that harmed African families.',
        e: 'Under the inboekelinge system, Boers registered captured African children as "apprentices", keeping girls in unpaid service until 21 and boys until 25.',
        x: 'This system separated families and amounted to a form of slavery in practice, showing a severe social cost of Boer expansion.',
        l: 'Therefore, the impact on African communities went beyond land loss into direct exploitation of people.',
      },
      {
        label: 'Body paragraph 4: limited counter-examples',
        p: 'A small minority of African communities found limited benefit through trade or short-term alliance with Boer groups.',
        e: 'Some African traders exchanged cattle, ivory or labour for goods such as guns and ammunition with Boer settlers, and occasionally African leaders allied with Boer commandos against rival chiefdoms.',
        x: 'These cases were limited in scale and did not offset the much larger losses of land and independence experienced across the region.',
        l: 'This shows that while not every effect was negative, the overall balance strongly supports the statement.',
      },
    ],
    conclusion: 'In conclusion, the expansion of Boer settlement had a largely negative impact on African communities in the Highveld, through the loss of land, political independence and the forced labour of the inboekelinge system. Limited trade or occasional alliances with Boers do not outweigh these losses, so the statement is correct.',
  }),
  ...essay({
    title: 'Essay 3: Colonial expansion, co-operation and conflict after 1750',
    question: 'Explain to what extent the colonial expansion after 1750 led to co-operation and conflict on the Highveld between the Boers, the British and the Basotho. Substantiate your answer with relevant evidence.',
    command: '"Explain… to what extent" — give reasons and make your judgement of degree clear, for BOTH co-operation and conflict, across all three groups.',
    line: 'Colonial expansion after 1750 led mostly to conflict, as Boers, British and Basotho competed for land and power, though moments of co-operation — trade, alliances and treaties — did occur, particularly when it served a group’s own interests.',
    plan: [
      'Conflict: Boer–Basotho wars over land (1858, 1865–68).',
      'Conflict: British annexation and the Warden Line (1849) angering both Boers and Basotho.',
      'Co-operation: Moshoeshoe’s diplomacy and alliances with missionaries and, briefly, the British.',
      'Co-operation: trade in guns, cattle and goods between all three groups at different times.',
      'Judgement: conflict dominated, but co-operation was real and strategic.',
    ],
    intro: 'From the mid-eighteenth century, as Boer trekboers, British colonial officials and Basotho under Moshoeshoe all competed for land and influence on the Highveld, their relationships alternated between conflict and co-operation. This essay will argue that conflict was the dominant outcome of this expansion, driven by competition for land and political control, but that genuine co-operation also occurred, especially through diplomacy, missionaries and trade, whenever it suited a group’s immediate interests.',
    body: [
      {
        label: 'Body paragraph 1: conflict between Boers and Basotho',
        p: 'The clearest evidence of conflict is the series of wars fought between the Orange Free State and the Basotho kingdom.',
        e: 'War broke out in 1858 and again in 1865–68, with Boer commandos destroying Basotho crops and homesteads, ending in the Treaty of Aliwal North (1869), which stripped the Basotho of fertile land west of the Caledon River.',
        x: 'These wars show that as both groups needed the same farmland, expansion by one side directly threatened the survival of the other, making conflict almost unavoidable once both populations grew.',
        l: 'This demonstrates that competition for land was a major source of conflict in this period.',
      },
      {
        label: 'Body paragraph 2: British actions causing conflict',
        p: 'British colonial expansion also caused conflict, by angering both Boers and Basotho at different times.',
        e: 'Britain annexed the Orange River Sovereignty in 1848, and the British Resident, Major Warden, drew the Warden Line in 1849, which gave land both groups considered theirs to the other side, satisfying neither.',
        x: 'This shows that British expansion, intended to control the region cheaply, instead created new grievances and set the stage for further conflict once Britain withdrew in 1854.',
        l: 'Therefore, British involvement added another layer of conflict rather than resolving existing disputes.',
      },
      {
        label: 'Body paragraph 3: co-operation through Moshoeshoe’s diplomacy',
        p: 'Despite this conflict, genuine co-operation occurred through Moshoeshoe’s skilful diplomacy.',
        e: 'Moshoeshoe welcomed French missionaries to Thaba Bosiu from 1833, used them as advisers and intermediaries with colonial authorities, and in 1868 successfully requested that Britain make Basutoland a protectorate to stop further Boer attacks.',
        x: 'This shows that Moshoeshoe used co-operation strategically — allying with outsiders when it protected his kingdom — rather than relying on conflict alone.',
        l: 'This proves that co-operation, not only conflict, shaped relations between the three groups.',
      },
      {
        label: 'Body paragraph 4: trade as co-operation',
        p: 'Trade also created periods of co-operation between all three groups.',
        e: 'Basotho farmers sold grain and cattle to Boer and British markets, and in return obtained guns, horses and goods, while some Boer traders depended on this exchange for supplies.',
        x: 'This shows that even amid political tension, economic self-interest encouraged all sides to co-operate when it was profitable to do so.',
        l: 'This confirms that co-operation, though smaller in scale than conflict, was a real and recurring feature of Highveld relations.',
      },
    ],
    conclusion: 'In conclusion, colonial expansion after 1750 led mainly to conflict between the Boers, the British and the Basotho, driven above all by competition for land, as shown by the Boer–Basotho wars and British annexation policies. However, co-operation was also present, particularly through Moshoeshoe’s diplomacy and ongoing trade, showing that all three groups chose co-operation when it served their immediate interests. Overall, conflict was the larger and more consistent pattern, but co-operation was never entirely absent.',
  }),
]);

/* ───────────────────────── Lesson 3: South African War essays (your notes) ───────────────────────── */

type EssayXE = {
  title: string;
  question: string;
  command: string;
  line: string;
  plan: string[];
  intro: string;
  body: { label: string; p: string; x: string; e: string; l: string }[];
  conclusion: string;
};

/** Same essay layout, but Explain comes before Evidence, matching the student's own notes. */
const essayXE = (e: EssayXE): WB[] => [
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
  ...e.body.flatMap((b) => [
    h3(b.label),
    table([
      ['Point', b.p],
      ['Explain', b.x],
      ['Evidence', b.e],
      ['Link', b.l],
    ]),
  ]),
  h3('Conclusion'),
  p(e.conclusion),
];

const WAR = L('he2-war', 'The South African War: Essay Topic', 30, [
  h2('Essay Topic (from your notes)'),
  box('"The South African War and Union"\n\ne.g. The South African War was seen as a white man’s war, but other races played a role. Discuss this statement.\n\ne.g. The South African war increased co-operation between the British and the Boers at the expense of Black South Africans. Do you agree?\n\ne.g. The scorched earth policy was responsible for the suffering of Boer citizens/civilians during the South African War. Do you agree?'),
  p('The three essays below answer exactly these three questions, in the Explain-then-Evidence order from your own PEEL notes. More predicted South African War essays, and a full evidence bank you can use for any South African War essay question, follow in the next two lessons.'),
  ...essayXE({
    title: 'Essay 1: A "white man’s war"?',
    question: 'The South African War was seen as a white man’s war, but other races played a role. Discuss this statement.',
    command: '"Discuss" — give different viewpoints and evidence for each, then judge the statement overall.',
    line: 'Agree: the war was officially fought and negotiated between whites, but Black and Coloured South Africans played essential and often dangerous roles as labourers, scouts, armed defenders and camp victims.',
    plan: [
      'Official framing: Britain called it a "white man’s war".',
      'Reality: African labourers and scouts were essential to both armies.',
      'Reality: armed Africans helped defend towns, e.g. Mafeking.',
      'Reality: Africans suffered too — scorched earth and separate concentration camps.',
      'Judgement: the label hides a much larger African role.',
    ],
    intro: 'Officially, the South African War of 1899–1902 was presented by Britain as a conflict between white British and white Boer forces, a "white man’s war". This essay will argue that this label is misleading: although the formal fighting and peace talks were conducted by whites, Black and Coloured South Africans played an essential and costly role throughout the war, as labourers, scouts, armed defenders and, tragically, as victims.',
    body: [
      {
        label: 'Body paragraph 1: the official "white man’s war" framing',
        p: 'Britain deliberately described the war as a white man’s war to avoid arming Africans on a large scale and to keep the conflict politically simple.',
        x: 'This framing let Britain claim the moral high ground as a civilised European power while avoiding the uncomfortable admission that it depended heavily on African labour and support to fight the war at all.',
        e: 'Both the British and Boer governments publicly agreed that Africans should not be formally armed as soldiers, even though thousands were, in practice, used in combat-support and sometimes combat roles.',
        l: 'This shows that the "white man’s war" idea was a political label, not a description of what actually happened on the ground.',
      },
      {
        label: 'Body paragraph 2: African labour kept both armies moving',
        p: 'In reality, neither army could have operated without African labour.',
        x: 'Modern armies of this size needed huge numbers of drivers, porters, trench-diggers and messengers; without this labour, supply lines would have collapsed within weeks.',
        e: 'Thousands of Africans served the British as wagon drivers, labourers and scouts, while Boer commandos relied on African servants known as agterryers to handle horses, carry supplies and act as scouts.',
        l: 'This disproves the idea that Africans had no meaningful role in the war effort.',
      },
      {
        label: 'Body paragraph 3: armed African defenders',
        p: 'Some Africans went further than support roles and took up arms to defend towns under siege.',
        x: 'This happened because, despite official policy, commanders on the ground needed every available defender during long sieges, showing that practical necessity overrode the "white man’s war" principle.',
        e: 'During the 217-day siege of Mafeking (October 1899 to May 1900), several hundred armed Africans helped defend the town, and the writer Sol Plaatje, who worked there as a court interpreter, recorded the siege in his diary.',
        l: 'This confirms that African participation went beyond labour into direct, armed defence.',
      },
      {
        label: 'Body paragraph 4: African suffering',
        p: 'Africans also suffered directly from British military strategy, showing they were deeply involved as victims, not bystanders.',
        x: 'The British scorched-earth policy did not distinguish between Boer and African homesteads, and Africans were placed in separate, often worse-resourced concentration camps, showing that the war’s destruction reached Black South Africans just as it reached the Boers.',
        e: 'Roughly 115,000 to 140,000 Africans were held in separate concentration camps during the war, where thousands died of disease and malnutrition, a toll that received far less attention at the time than that of the roughly 26,000 Boer deaths in the white camps.',
        l: 'This proves that other races were deeply affected by the war, even though their suffering is less remembered.',
      },
    ],
    conclusion: 'In conclusion, the statement is correct that the South African War was officially labelled a white man’s war, but this label hid the true picture. Africans provided essential labour, acted as armed defenders in sieges such as Mafeking, and suffered terribly in separate concentration camps. Their role was indispensable to both sides, even though it was deliberately minimised at the time.',
  }),
  ...essayXE({
    title: 'Essay 2: Co-operation between British and Boer, at Black South Africans’ expense?',
    question: 'The South African war increased co-operation between the British and the Boers at the expense of Black South Africans. Do you agree?',
    command: '"Do you agree?" — take a clear position and defend it with evidence about both the British–Boer relationship and its cost to Black South Africans.',
    line: 'Agree: the Treaty of Vereeniging and the path to Union reconciled British and Boer interests specifically by postponing and then denying African political rights.',
    plan: [
      'Treaty of Vereeniging (1902): Africans excluded from the peace talks.',
      'African franchise postponed "until after self-government" is granted.',
      'Union of South Africa (1910): built on this British–Boer reconciliation.',
      'Result: Black South Africans paid the price for white reconciliation.',
    ],
    intro: 'After three years of war, the Treaty of Vereeniging (31 May 1902) ended the fighting between Britain and the Boer republics. This essay will argue that the statement is correct: the peace process and the path toward Union in 1910 reconciled British and Boer interests specifically by sacrificing the political rights of Black South Africans, who were excluded from the negotiations that decided their future.',
    body: [
      {
        label: 'Body paragraph 1: Africans excluded from peace talks',
        p: 'The negotiations that ended the war and reconciled the British and Boers deliberately excluded African representatives.',
        x: 'This exclusion meant that the people whose land and labour had been fought over for three years had no voice in deciding the political future of the country, even though they had suffered and served throughout the war.',
        e: 'The Treaty of Vereeniging was signed only by British and Boer representatives, including Boer generals such as Louis Botha and Jan Smuts, with no African delegation present or consulted.',
        l: 'This shows that reconciliation between the British and Boers was built on excluding Black South Africans from the start.',
      },
      {
        label: 'Body paragraph 2: the franchise question postponed',
        p: 'The treaty specifically postponed the question of African political rights to win Boer agreement to peace.',
        x: 'Britain made this concession because the Boer leaders refused to accept peace terms that would give Africans the vote on equal terms with whites, so Britain gave way on this issue in order to secure British–Boer co-operation and end the costly war.',
        e: 'Article 8 of the Treaty of Vereeniging stated that the question of granting the franchise to Africans would not be decided until after the former republics were granted self-government.',
        l: 'This confirms that British–Boer co-operation was achieved directly at the cost of Black political rights.',
      },
      {
        label: 'Body paragraph 3: Union of South Africa (1910)',
        p: 'This pattern of co-operation at African expense continued into the formation of the Union.',
        x: 'Because the 1910 constitution was drafted mainly by former Boer and British leaders working together, and because keeping Boer support meant limiting the Cape’s relatively more inclusive franchise rather than extending it, the new Union excluded the vast majority of Black South Africans from full citizenship.',
        e: 'The Union of South Africa was formed on 31 May 1910, combining the Cape, Natal, Transvaal and Orange Free State under a constitution that allowed each former colony to keep its own voting qualifications, meaning Africans in the Transvaal, Free State and Natal had no vote at all.',
        l: 'This shows that the reconciliation begun at Vereeniging was completed through Union, with the same cost to Black South Africans.',
      },
    ],
    conclusion: 'In conclusion, the statement is correct. The Treaty of Vereeniging reconciled British and Boer interests by excluding African voices and postponing the question of the African franchise, and the Union of 1910 built directly on this foundation by denying Black South Africans political rights across most of the new country. British–Boer co-operation after the war was real, but it came at the direct expense of Black South Africans.',
  }),
  ...essayXE({
    title: 'Essay 3: The scorched-earth policy and Boer suffering',
    question: 'The scorched earth policy was responsible for the suffering of Boer citizens/civilians during the South African War. Do you agree?',
    command: '"Do you agree?" — take a position on how much responsibility the policy bears, using specific evidence.',
    line: 'Largely agree: the scorched-earth policy directly caused the destruction of Boer homes and farms and forced families into concentration camps, where thousands died, although the camps themselves — through disease and poor planning — were the more immediate cause of the deaths.',
    plan: [
      'What the policy was: farm-burning under Roberts and Kitchener.',
      'Direct effect: destruction of homes, crops and livestock.',
      'Consequence: homeless families forced into concentration camps.',
      'Nuance: camp conditions (disease, overcrowding) were the immediate cause of most deaths.',
    ],
    intro: 'From 1900, British commanders Lord Roberts and later Lord Kitchener adopted a scorched-earth policy to defeat the Boer commandos who continued fighting a guerrilla war. This essay will argue that the scorched-earth policy was largely responsible for Boer civilian suffering, as it destroyed their homes and livelihoods and forced them into concentration camps, although the catastrophic death toll in the camps was the direct result of disease and neglect once families were already there.',
    body: [
      {
        label: 'Body paragraph 1: what the policy involved',
        p: 'The scorched-earth policy was a deliberate British strategy to deny the Boer commandos food, shelter and support.',
        x: 'British commanders reasoned that Boer fighters survived on supplies from their own farms, so destroying those farms would starve the commandos into surrender, even though this meant targeting civilian property on a massive scale.',
        e: 'British troops burned an estimated 30,000 Boer farmhouses and destroyed crops and livestock across the Transvaal and Orange Free State from 1900 to 1902, under orders from Lord Roberts and intensified by Lord Kitchener.',
        l: 'This shows that civilian suffering was a direct and intended consequence of British military strategy.',
      },
      {
        label: 'Body paragraph 2: direct loss of homes and livelihood',
        p: 'The immediate effect of the policy was the loss of homes, food and income for ordinary Boer families.',
        x: 'With their houses burned and fields and animals destroyed, families had no way to feed or shelter themselves, which left the British army itself responsible for finding somewhere to put the thousands of people it had just made homeless.',
        e: 'Women, children and elderly Boers whose farms were destroyed were rounded up and moved into camps set up by the British military across the two former republics.',
        l: 'This confirms that the scorched-earth policy was the direct cause of this mass displacement.',
      },
      {
        label: 'Body paragraph 3: the concentration camps and the death toll',
        p: 'The greatest suffering occurred once families were inside the concentration camps, which were a direct consequence of the scorched-earth policy, but whose terrible conditions were a further, additional failure.',
        x: 'The camps were overcrowded, undersupplied and lacked proper sanitation and medical care, so diseases such as measles and typhoid spread quickly among weakened, malnourished people who had already lost everything.',
        e: 'Around 26,000 Boer women and children died in the concentration camps, out of roughly 115,000 to 160,000 Boers interned; the British social worker Emily Hobhouse visited the camps and publicised the conditions in 1901, leading to public outcry in Britain.',
        l: 'This shows that while the scorched-earth policy created the crisis, poor camp management turned that crisis into mass death.',
      },
    ],
    conclusion: 'In conclusion, the scorched-earth policy was largely responsible for Boer civilian suffering, as it directly destroyed homes and livelihoods and forced families into the camps in the first place. However, the extremely high death toll inside the camps resulted more immediately from disease and neglect once people were interned. The statement is therefore largely correct, since without the scorched-earth policy, the camps — and the deaths within them — would never have existed.',
  }),
]);

/* ───────────────────────── Lesson 4: more predicted South African War essays ───────────────────────── */

const WAR_MORE = L('he2-war-more', 'South African War: More Predicted Essays', 45, [
  p('Further possible exam questions on the South African War, in the same style as your notes, with full model answers.'),
  ...essayXE({
    title: 'Essay 4: Gold as the main cause of the war',
    question: 'Gold was the main cause of the South African War. Do you agree? Substantiate your answer with relevant evidence.',
    command: '"Do you agree?" with "main cause" — take a position and compare gold against other causes.',
    line: 'Agree: the discovery of gold transformed the Transvaal into a prize worth fighting for and created the Uitlander dispute that triggered the war.',
    plan: [
      'Gold discovered 1886 — Transvaal becomes wealthy and powerful.',
      'Uitlanders flood in; denied the vote by Kruger.',
      'Britain uses the Uitlander issue as a pretext; Milner’s hard line.',
      'Judgement: without gold, none of the other triggers would exist.',
    ],
    intro: 'War broke out between Britain and the Boer republics in October 1899, eleven years after gold was discovered on the Witwatersrand. This essay will argue that gold was the main cause of the war, because it made the Transvaal rich and strategically important to Britain, and because it directly created the Uitlander franchise dispute that became the immediate trigger for war.',
    body: [
      {
        label: 'Body paragraph 1: gold transformed the Transvaal',
        p: 'The discovery of gold turned a poor agricultural republic into one of the wealthiest territories in the world, making it a prize Britain could not ignore.',
        x: 'Because Britain depended on gold to back its currency and finance its empire, a rich, independent Boer republic on Britain’s doorstep threatened British economic and strategic dominance in southern Africa.',
        e: 'Gold was discovered on the Witwatersrand in 1886, and by the late 1890s the Transvaal was producing roughly a quarter of the world’s gold, with Johannesburg growing from nothing into a city of over 100,000 people.',
        l: 'This shows that gold directly raised the stakes for Britain, making conflict far more likely than before 1886.',
      },
      {
        label: 'Body paragraph 2: the Uitlander dispute',
        p: 'The gold rush created the Uitlander population, and the dispute over their rights became the immediate flashpoint of the war.',
        x: 'President Kruger feared that giving the vote to the mostly British Uitlanders, who soon outnumbered Transvaal Boers on the Rand, would mean losing control of his own republic through the ballot box, so he refused, which gave Britain a grievance to exploit.',
        e: 'Kruger’s government required Uitlanders to live in the Transvaal for fourteen years before they could vote, while taxing the gold industry heavily to fund the Boer state.',
        l: 'This confirms that the war’s immediate political cause was itself a direct product of the gold discovery.',
      },
      {
        label: 'Body paragraph 3: British imperial interest',
        p: 'British officials used the Uitlander issue and imperial ambition to push the Transvaal toward war, but their interest was rooted in gold.',
        x: 'Figures such as Cecil Rhodes and High Commissioner Alfred Milner wanted a single British-ruled southern Africa, and the Transvaal’s gold wealth made it the one republic too valuable to leave independent.',
        e: 'Rhodes backed the failed Jameson Raid of 1895–96, an attempt to seize the Transvaal by force, and in 1899 Milner broke off the Bloemfontein talks with Kruger, pushing both sides toward Kruger’s ultimatum of October 1899 and the outbreak of war.',
        l: 'This shows that even imperial ambition was ultimately focused on controlling the gold-rich Transvaal.',
      },
    ],
    conclusion: 'In conclusion, gold was the main cause of the South African War. It transformed the Transvaal into a state wealthy and powerful enough to resist Britain, created the Uitlander dispute that became the immediate trigger, and gave British imperialists a clear economic reason to want the republic under British control. Without the discovery of 1886, none of these pressures would have existed.',
  }),
  ...essayXE({
    title: 'Essay 5: Black Week and British military planning',
    question: 'Critically discuss the extent to which Black Week (December 1899) exposed weaknesses in British military planning.',
    command: '"Critically discuss… the extent" — weigh the evidence and reach a judgement of degree.',
    line: 'Largely agree: the three British defeats of Black Week exposed serious failures of intelligence, tactics and preparation, although Britain’s much greater resources ultimately allowed it to recover and win.',
    plan: [
      'What Black Week was: three defeats in one week, December 1899.',
      'Weakness 1: underestimating Boer marksmanship and mobility.',
      'Weakness 2: outdated infantry tactics against trench and rifle fire.',
      'Qualification: Britain’s resources allowed Roberts and Kitchener to recover.',
    ],
    intro: 'In December 1899, within a single week, British forces suffered three major defeats at Stormberg, Magersfontein and Colenso, a period that became known as Black Week. This essay will argue that Black Week exposed serious weaknesses in British military planning, particularly poor intelligence and outdated tactics, although Britain’s far greater manpower and resources meant these weaknesses did not prevent eventual British victory.',
    body: [
      {
        label: 'Body paragraph 1: three defeats in one week',
        p: 'The scale and speed of the British defeats during Black Week showed that British commanders had seriously underestimated their opponent.',
        x: 'Losing three separate battles against a numerically smaller Boer force within seven days suggested that British planning had not accounted for how the Boers would actually fight, rather than how a conventional European army was expected to fight.',
        e: 'British forces were defeated at Stormberg (10 December 1899), Magersfontein (11 December) and Colenso (15 December 1899), suffering heavy casualties in each battle while attempting to relieve the besieged towns of Kimberley and Ladysmith.',
        l: 'This shows that these were not isolated failures but a pattern revealing a deeper planning problem.',
      },
      {
        label: 'Body paragraph 2: underestimating Boer tactics',
        p: 'A key weakness was that British commanders underestimated the mobility and marksmanship of the Boer commandos.',
        x: 'Boer fighters were skilled horsemen and marksmen who fought from well-concealed, entrenched positions using modern Mauser rifles, a style of warfare very different from the set-piece battles British officers had trained for.',
        e: 'At Magersfontein, Boer forces under Koos de la Rey dug trenches at the base rather than the top of the ridge, catching advancing British infantry completely by surprise and inflicting heavy losses.',
        l: 'This demonstrates a genuine failure of British intelligence and planning, not simply bad luck.',
      },
      {
        label: 'Body paragraph 3: outdated tactics',
        p: 'British infantry tactics themselves were outdated and poorly suited to the firepower of the Boer rifles.',
        x: 'Marching in close formation toward entrenched riflemen, as British troops often did, made them easy targets, showing that pre-war training had not kept pace with the deadliness of modern repeating rifles.',
        e: 'At Colenso, General Buller’s frontal assault across open ground against entrenched Boer positions on the Tugela River resulted in heavy British casualties and the loss of ten artillery guns.',
        l: 'This confirms that planning failures extended beyond intelligence into basic battlefield tactics.',
      },
      {
        label: 'Body paragraph 4: Britain’s recovery',
        p: 'However, Britain’s far greater resources meant these weaknesses, while real, were not fatal to the overall British war effort.',
        x: 'Because Britain could call on the full strength of its empire, it was able to replace failed commanders and flood the region with troops and supplies in a way the much smaller Boer republics never could.',
        e: 'Britain replaced its commanders with Lord Roberts and Lord Kitchener in early 1900, deployed roughly 450,000 troops in total over the course of the war against fewer than 90,000 Boer combatants, and relieved Kimberley, Ladysmith and Mafeking by mid-1900.',
        l: 'This shows that while Black Week exposed real planning failures, British manpower and resources ultimately outweighed them.',
      },
    ],
    conclusion: 'In conclusion, Black Week genuinely exposed serious weaknesses in British military planning, particularly poor intelligence about Boer tactics and outdated infantry methods. However, these weaknesses did not determine the outcome of the war, because Britain’s overwhelming advantage in troops and resources allowed it to recover quickly under new commanders. Black Week is therefore best understood as a real but temporary crisis in British planning, rather than evidence that Britain could not win the war.',
  }),
  ...essayXE({
    title: 'Essay 6: The guerrilla phase and British response',
    question: 'Assess the effectiveness of British methods in responding to the Boer guerrilla war (1900–1902).',
    command: '"Assess the effectiveness" — judge how successful the methods were, using evidence on both sides.',
    line: 'British methods (blockhouses, scorched earth, concentration camps) were militarily effective in ending the war, but at an extremely high human cost that damaged Britain’s international reputation.',
    plan: [
      'The guerrilla problem: commandos continued fighting after the capitals fell.',
      'Blockhouse system: restricted commando movement.',
      'Scorched earth and camps: destroyed the commandos’ support base.',
      'Cost: civilian deaths and international criticism undermined the "success".',
    ],
    intro: 'After British forces captured Pretoria in June 1900, many expected the war to end, but Boer commandos under leaders such as Christiaan de Wet and Louis Botha continued a guerrilla war until May 1902. This essay will assess that British methods of blockhouses, scorched earth and concentration camps were militarily effective in eventually forcing a Boer surrender, but that the human cost of these methods was so severe that it undermines any simple judgement of success.',
    body: [
      {
        label: 'Body paragraph 1: the guerrilla challenge',
        p: 'The Boer commandos’ guerrilla tactics after mid-1900 created a serious new military problem for Britain.',
        x: 'Because small, mobile groups of Boer fighters knew the terrain and could strike supply lines and isolated British units before disappearing, conventional battles were no longer enough to win the war, forcing Britain to change its entire strategy.',
        e: 'Commando leaders such as Christiaan de Wet, Jan Smuts and Koos de la Rey led hit-and-run raids across the former republics and even into the Cape Colony well into 1901 and 1902.',
        l: 'This shows why Britain needed new methods beyond conventional warfare to end the conflict.',
      },
      {
        label: 'Body paragraph 2: the blockhouse system',
        p: 'The blockhouse system was an effective method for restricting commando movement across the countryside.',
        x: 'By building a dense network of small fortified posts connected by barbed wire, Kitchener’s forces divided the open veld into manageable sections, making it far harder for commandos to move and regroup undetected.',
        e: 'By 1902 the British had built around 8,000 blockhouses connected by roughly 6,000 kilometres of barbed wire, used in coordinated "drives" to trap Boer commandos between lines of troops.',
        l: 'This demonstrates that the blockhouse system was a genuinely effective military innovation.',
      },
      {
        label: 'Body paragraph 3: scorched earth and the camps',
        p: 'Scorched earth and the concentration camps directly undermined the commandos’ ability to keep fighting, by destroying their source of food and shelter.',
        x: 'Because commandos depended on their own farms and families for supplies, removing both through farm-burning and internment steadily reduced the Boers’ capacity and will to continue the war.',
        e: 'Roughly 30,000 Boer farms were destroyed and over 100,000 Boer civilians, along with 115,000–160,000 Africans, were placed in camps, where mounting deaths added pressure on Boer leaders to negotiate.',
        l: 'This shows that these methods were militarily effective at breaking the commandos’ support network.',
      },
      {
        label: 'Body paragraph 4: the human and reputational cost',
        p: 'However, the effectiveness of these methods must be weighed against their devastating human cost.',
        x: 'The death of around 26,000 Boer women and children, and thousands more Africans, in the camps caused international outrage once publicised, meaning that what was militarily successful was also a serious moral and political failure for Britain.',
        e: 'Emily Hobhouse’s 1901 reports on camp conditions led to public debate in the British Parliament and lasting damage to Britain’s international reputation, even as the Treaty of Vereeniging was signed in May 1902.',
        l: 'This shows that any assessment of effectiveness must account for this enormous cost, not military success alone.',
      },
    ],
    conclusion: 'In conclusion, British methods of blockhouses, scorched earth and concentration camps were militarily effective, as they steadily reduced Boer resources and mobility and eventually forced the Treaty of Vereeniging in 1902. However, these methods caused immense civilian suffering and lasting damage to Britain’s reputation, so their "success" must be judged as militarily effective but morally costly.',
  }),
]);

/* ───────────────────────── Lesson 5: evidence bank for PEEL paragraphs ───────────────────────── */

type EvRow = { fact: string; explain: string };
const evTable = (rows: EvRow[]): WB => ({
  type: 'definitions',
  rows: rows.map((r) => ({ term: r.fact, meaning: r.explain })),
});

const WAR_EVIDENCE = L('he2-war-evidence', 'South African War: Evidence Bank for PEEL Paragraphs', 40, [
  p('Use this lesson to find ready-made Evidence + Explanation pairs for ANY South African War essay question, grouped by theme. Left column = specific fact (names, dates, numbers) to use as your Evidence. Right column = a ready-to-adapt sentence you can use as your Explain. Copy a pair, then rewrite the Explain slightly so it answers YOUR specific question — never paste it in unchanged.'),
  h2('Theme 1: Causes of the war'),
  evTable([
    { fact: 'Gold discovered on the Witwatersrand, 1886; by the late 1890s the Transvaal produced roughly a quarter of the world’s gold.', explain: 'This shows that gold transformed a poor agricultural republic into a wealthy state that Britain could not afford to leave independent.' },
    { fact: 'Uitlanders denied the vote unless resident 14 years; heavily taxed by Kruger’s government.', explain: 'This explains why Britain could use the Uitlander grievance as a political justification for intervening in the Transvaal.' },
    { fact: 'Jameson Raid, December 1895–January 1896, backed by Cecil Rhodes, failed attempt to overthrow Kruger.', explain: 'This shows that British and British-aligned figures were already willing to use force to gain control of the Transvaal years before war broke out.' },
    { fact: 'Alfred Milner broke off the Bloemfontein Conference, June 1899.', explain: 'This demonstrates that British officials chose confrontation over compromise in the final months before war.' },
    { fact: 'Kruger’s ultimatum, 9 October 1899, demanding British troops withdraw from the border; war began 11 October 1899.', explain: 'This shows that the Transvaal, not only Britain, took a hard line, making war the final result of both sides’ refusal to compromise.' },
  ]),
  h2('Theme 2: Black Week and the sieges'),
  evTable([
    { fact: 'Black Week: British defeats at Stormberg (10 Dec 1899), Magersfontein (11 Dec), Colenso (15 Dec 1899).', explain: 'This shows that British commanders badly underestimated Boer tactics and mobility in the early stages of the war.' },
    { fact: 'Siege of Mafeking, October 1899–May 1900 (217 days); siege of Ladysmith, Nov 1899–Feb 1900; siege of Kimberley, Oct 1899–Feb 1900.', explain: 'This demonstrates that the Boers were able to pin down significant British forces for months, delaying British victory far beyond initial expectations.' },
    { fact: 'Hundreds of armed Africans helped defend Mafeking; Sol Plaatje worked there as a court interpreter and recorded the siege in his diary.', explain: 'This proves that African participation went well beyond the official "white man’s war" framing, even including armed defence.' },
    { fact: 'Lord Roberts and Lord Kitchener took over British command in early 1900; Pretoria captured June 1900.', explain: 'This shows that once Britain replaced its commanders and committed greater resources, it was able to reverse the setbacks of Black Week.' },
  ]),
  h2('Theme 3: Guerrilla war, scorched earth and the blockhouse system'),
  evTable([
    { fact: 'Commando leaders Christiaan de Wet, Jan Smuts and Koos de la Rey continued guerrilla fighting into 1901–1902, even raiding into the Cape Colony.', explain: 'This explains why the war did not end when the Boer capitals were captured, forcing Britain to change its entire strategy.' },
    { fact: 'Roughly 30,000 Boer farmhouses burned under the scorched-earth policy, 1900–1902.', explain: 'This shows that Britain deliberately destroyed the commandos’ source of food and shelter in order to force them to surrender.' },
    { fact: 'About 8,000 blockhouses built, connected by roughly 6,000 km of barbed wire, used in coordinated "drives".', explain: 'This demonstrates a genuinely effective British military innovation that restricted commando movement across open country.' },
  ]),
  h2('Theme 4: The concentration camps'),
  evTable([
    { fact: 'Around 115,000–160,000 Boer civilians interned; approximately 26,000 Boer women and children died in the camps.', explain: 'This shows that the human cost of the scorched-earth policy fell overwhelmingly on civilians rather than combatants.' },
    { fact: 'Separate camps for Africans held an estimated 115,000–140,000 people; thousands died of disease and malnutrition, with far less attention than the white camps.', explain: 'This proves that African suffering during the war was extensive but has often been under-recorded compared to Boer suffering.' },
    { fact: 'Emily Hobhouse visited the camps in 1901 and publicised the shocking conditions in Britain, leading to parliamentary debate.', explain: 'This shows that public knowledge of camp conditions damaged Britain’s international reputation even while the war continued.' },
  ]),
  h2('Theme 5: The peace and Union'),
  evTable([
    { fact: 'Treaty of Vereeniging signed 31 May 1902, by British representatives and Boer generals including Louis Botha and Jan Smuts; no African delegation present.', explain: 'This demonstrates that the peace that reconciled Britain and the Boers was negotiated entirely without African representation.' },
    { fact: 'Article 8 of the treaty postponed the question of the African franchise until after self-government was restored to the former republics.', explain: 'This shows that British–Boer reconciliation was achieved directly at the cost of African political rights.' },
    { fact: 'Union of South Africa formed 31 May 1910, combining the Cape, Natal, Transvaal and Orange Free State; each region kept its own voting rules, so most Africans outside the Cape had no vote.', explain: 'This confirms that the reconciliation begun at Vereeniging was completed through a Union that excluded the majority of Black South Africans from citizenship.' },
  ]),
  h2('How to use this bank in an exam'),
  ul([
    'Pick the 2–3 themes most relevant to your question (e.g. a question on causes needs Theme 1; a question on suffering needs Themes 3–4).',
    'Use ONE fact per paragraph as your Evidence — never list five facts in a row with no explanation between them.',
    'Rewrite the ready-made Explain sentence so it answers your specific question wording, not just the general topic.',
    'Always follow your Explain/Evidence with a Link sentence back to your line of argument, using a linking word (Therefore, As a result, This shows that…).',
  ]),
  qa([
    { q: 'Which theme would you draw evidence from for a question about whether Africans were truly left out of the war?', a: 'Theme 2 (Black Week and sieges — armed defenders at Mafeking) and Theme 4 (the separate African concentration camps).' },
    { q: 'Which single fact best proves that British–Boer reconciliation came at African expense?', a: 'Article 8 of the Treaty of Vereeniging, which postponed the African franchise question until after self-government was restored to the former republics.' },
    { q: 'Why should you never use a fact from this bank without also writing your own explanation?', a: 'Because markers award marks for showing HOW the evidence answers the specific question asked, not just for stating a correct fact.' },
  ]),
]);

export const HISTORY_ESSAYS_2_CHAPTER: Chapter = {
  id: CH,
  subjectId: 'history',
  title: 'Essay Writing (Highveld & South African War)',
  summary: 'A second essay-writing topic built from your own notes: the PEEL method and linking words, model essays on the Highveld co-operation/conflict questions, model essays and six predicted South African War essays, plus a themed evidence bank for the South African War.',
  lessons: [METHOD, HIGHVELD, WAR, WAR_MORE, WAR_EVIDENCE],
};
