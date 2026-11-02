import type { Chapter } from '@/lib/types';

/**
 * November exam scope revision guide — built directly from a teacher's
 * official exam scope document (Section A/B/C as issued). This is the
 * single, consolidated place to revise every named topic on that scope;
 * it draws on CAPS Grade 10 LO content already covered elsewhere in this
 * app (chapters 1–5) but is written fresh here so a student has everything
 * for this specific exam in one lesson group, without needing to cross
 * reference other chapters.
 *
 * This chapter is the "hub" for the November exam topic area. Four new
 * composed practice papers (loExamScopePractice2.ts through 5.ts) and the
 * existing real past paper (loPastPaper1.ts, unmodified) sit alongside it
 * as the 5 papers for this exam. See the note block in Lesson 1 below.
 */
export const LO_EXAM_SCOPE_NOV: Chapter = {
  id: 'lo-exam-scope-nov',
  subjectId: 'life-orientation',
  title: 'November Exam Scope — Full Revision Guide',
  summary: 'A complete revision guide built directly from the teacher\'s official November exam scope, covering Section A (study skills, careers, human rights, youth risk behaviour), Section B (physical health, sexuality and careers) and Section C (volunteerism, doping, assertiveness) — plus a matching mock paper and 4 new practice papers alongside the real Oct 2025 past paper.',
  category: 'November Exam Scope',
  lessons: [
    // ════════════════════════════════════════════════════════════════════
    // LESSON 1 — Orientation: how this topic area is organised
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'lo-exam-scope-overview',
      chapterId: 'lo-exam-scope-nov',
      subjectId: 'life-orientation',
      title: 'How to Use This Revision Guide (Start Here)',
      minutes: 5,
      blocks: [
        { id: 'scope-ov-h1', type: 'heading', level: 2, text: 'November Exam Scope — Revision Guide' },
        {
          id: 'scope-ov-callout',
          type: 'callout',
          text: 'This revision guide was built directly from your teacher\'s official November exam scope document. It follows that document\'s own Section A / Section B / Section C structure, so you can revise in exactly the order the exam is organised — even though the topics are drawn from different terms and chapters in your school\'s own numbering.',
        },
        { id: 'scope-ov-structure-h', type: 'heading', level: 3, text: 'What This Exam Covers' },
        {
          id: 'scope-ov-structure',
          type: 'list',
          text: [
            'Section A — General Knowledge & Concepts: study skills vs cramming; economic sectors, tertiary funding, job trends and AI in the workplace; gender bias in sport, discrimination and multi-religious respect; youth risk behaviour, poverty and doping.',
            'Section B — Physical Health, Sexuality & Careers: cardiovascular fitness, emotional benefits of exercise, sedentary lifestyle risks and cost-free exercise; adolescent sexuality, decision-making, personal values and lifelong learning for job trends.',
            'Section C — Essay Questions (choose any TWO of THREE): volunteerism and civic responsibility; doping in sport; assertiveness, personal boundaries and the right to say "no".',
          ],
        },
        { id: 'scope-ov-papers-h', type: 'heading', level: 3, text: 'The 5 Papers for This Exam' },
        {
          id: 'scope-ov-papers',
          type: 'list',
          text: [
            '1. This Revision Guide (Lessons 1–4 below) — read this first. It teaches every topic on the scope in full CAPS-accurate depth.',
            '2. Mock Paper — a complete 100-mark, 2h30 paper built to match this exact scope and the real CAPS Grade 10 exam format (see the "Mock Paper" lessons in this chapter).',
            '3–5. Practice Papers 2, 3 and 4 — three more full composed papers, each 100 marks, each targeting this same scope from different angles (different MCQs, extracts and essay prompts), found as separate chapters directly below this one in your Life Orientation subject list.',
            'The 5th paper is the ONE REAL past paper already in the app: "Past Paper 1: Johannesburg East District PLC (Oct 2025)". It is a genuine exam paper with a real learner\'s preserved handwritten answers in Section A. It is not specifically written for this scope, but it overlaps heavily (self-awareness, power relations, gender, doping, volunteerism, the right to say "no") and is excellent general exam practice — use it as your final, real-paper test alongside the 4 composed papers above.',
          ],
        },
        {
          id: 'scope-ov-howto',
          type: 'callout',
          text: 'Suggested revision order: read all 4 lessons in this guide → attempt the Mock Paper → attempt Practice Papers 2, 3 and 4 (one every few days, not all at once) → finish with the real Oct 2025 past paper under timed exam conditions.',
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    // LESSON 2 — SECTION A: General Knowledge & Concepts
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'lo-exam-scope-section-a',
      chapterId: 'lo-exam-scope-nov',
      subjectId: 'life-orientation',
      title: 'Section A: General Knowledge & Concepts',
      minutes: 30,
      blocks: [
        { id: 'scope-a-h1', type: 'heading', level: 2, text: 'Section A: General Knowledge & Concepts' },

        // ── A1: Study skills ──────────────────────────────────────────────
        { id: 'scope-a-study-h', type: 'heading', level: 3, text: 'A1. Study Skills: Effective Study Methods vs Cramming' },
        {
          id: 'scope-a-study-def',
          type: 'definitions',
          rows: [
            { term: 'Study skills', meaning: 'The learned techniques and habits — such as planning, note-making, memory aids and self-testing — that allow a learner to absorb, retain and recall information effectively.' },
            { term: 'Cramming', meaning: 'Trying to learn a large amount of information in a very short period, usually the night before an assessment, relying on short-term memory rather than real understanding.' },
            { term: 'Spaced repetition', meaning: 'Reviewing material repeatedly over increasing intervals of time (rather than once, intensively) to move it into long-term memory.' },
            { term: 'Scanning', meaning: 'Moving your eyes quickly over a text to find a specific fact, keyword, date or figure, without reading every word.' },
            { term: 'Skimming', meaning: 'Reading quickly over headings, topic sentences and first/last paragraphs to get a general overview of what a text is about.' },
          ],
        },
        { id: 'scope-a-study-why-h', type: 'heading', level: 3, text: 'Why Effective Study Methods Beat Cramming' },
        {
          id: 'scope-a-study-why',
          type: 'list',
          text: [
            'Cramming relies on short-term memory, so information is quickly forgotten after the test — effective methods build long-term retention through repeated, spaced review.',
            'Cramming increases stress and anxiety in the final hours before an exam, which can impair recall during the exam itself; planned studying reduces last-minute pressure.',
            'Cramming favours rote memorisation over understanding, so a learner struggles to apply knowledge to unfamiliar exam questions; active study methods (summarising, self-testing, teaching someone else) build genuine understanding that transfers to new questions.',
            'Cramming often sacrifices sleep the night before an exam, which directly harms concentration and memory consolidation; a proper study timetable protects sleep.',
            'Effective study methods distribute workload evenly across all subjects, whereas cramming is usually reactive and uneven, leaving some subjects neglected.',
          ],
        },
        { id: 'scope-a-study-methods-h', type: 'heading', level: 3, text: 'Effective Study Methods' },
        {
          id: 'scope-a-study-methods',
          type: 'list',
          text: [
            'Draw up a realistic study timetable well in advance, allocating time to every subject.',
            'Use the SQ3R method — Survey, Question, Read, Recite, Review — to actively engage with a text rather than passively re-reading it.',
            'Use spaced repetition: review material at increasing intervals (e.g. after 1 day, 3 days, a week) instead of once.',
            'Summarise notes in your own words rather than copying them verbatim — this forces real understanding.',
            'Use mind maps and diagrams to visually connect related ideas.',
            'Use flashcards for memorising key terms, dates, formulae and definitions.',
            'Practise with past exam papers under timed conditions to build familiarity with the format and time pressure.',
            'Study in short, focused sessions with regular breaks (e.g. the Pomodoro technique: 25 minutes of focused work, then a short break).',
            'Test yourself actively (self-quizzing, explaining concepts aloud) rather than simply re-reading notes, since active recall strengthens memory far more than passive review.',
          ],
        },
        {
          id: 'scope-a-study-qa',
          type: 'questions',
          qa: [
            { q: 'Differentiate between scanning and skimming as methods of reading.', marks: 4, a: 'Scanning is reading quickly over a text to find a specific fact, keyword or figure, without reading every word. Skimming is reading quickly over headings and topic sentences to get a general overview of what the text is about.' },
            { q: 'Distinguish between cramming and effective study methods, and explain why cramming is a less effective approach to exam preparation.', marks: 6, a: 'Cramming is trying to learn a large amount of work in a short period, usually the night before an assessment, relying on short-term memory. Effective study methods — such as a study timetable, spaced repetition and self-testing — spread learning out over time and build genuine, long-term understanding. Cramming is less effective because it relies on short-term memory that fades quickly, increases exam-eve stress and sacrifices sleep, and favours memorising facts over understanding concepts well enough to apply them to unfamiliar exam questions.' },
          ],
        },

        // ── A2: Careers & Workplace ───────────────────────────────────────
        { id: 'scope-a-careers-h', type: 'heading', level: 3, text: 'A2. Careers & Workplace: Economic Sectors, Tertiary Funding, Job Trends and AI' },
        { id: 'scope-a-sectors-h', type: 'heading', level: 3, text: 'The Three Economic Sectors' },
        {
          id: 'scope-a-sectors-def',
          type: 'definitions',
          rows: [
            { term: 'Primary sector', meaning: 'The part of the economy that extracts or produces raw materials directly from nature — e.g. farming, fishing, mining, forestry.' },
            { term: 'Secondary sector', meaning: 'The part of the economy that processes or manufactures raw materials from the primary sector into finished or semi-finished goods — e.g. manufacturing, construction, food processing.' },
            { term: 'Tertiary sector', meaning: 'The part of the economy that provides services rather than physical goods — e.g. retail, education, healthcare, banking, tourism, IT and transport.' },
          ],
        },
        {
          id: 'scope-a-sectors-examples',
          type: 'list',
          text: [
            'Primary sector careers: farmer, miner, fisher, forester, game ranger.',
            'Secondary sector careers: factory worker, construction worker, engineer, artisan (electrician, plumber, welder), food technologist.',
            'Tertiary sector careers: teacher, nurse, accountant, software developer, retail manager, tour guide.',
            'South Africa\'s economy, like most developed and developing economies, is increasingly dominated by the tertiary (service) sector, though the primary and secondary sectors remain essential, particularly for export earnings and employment in rural areas.',
          ],
        },
        { id: 'scope-a-funding-h', type: 'heading', level: 3, text: 'Tertiary Funding' },
        {
          id: 'scope-a-funding',
          type: 'list',
          text: [
            'NSFAS (National Student Financial Aid Scheme) — government-funded financial aid covering tuition, accommodation and living allowances for qualifying students from poor and working-class households at public universities and TVET colleges.',
            'Bursaries — financial awards from government departments, companies or institutions, usually linked to a field of study and sometimes requiring the graduate to work for the funder for a set period afterwards.',
            'Scholarships — awards based on academic merit, sporting ability or other achievement, which may be fully or partially funded.',
            'Student loans — borrowed funds (from banks or other lenders) that must be repaid, usually with interest, after the student graduates and starts earning.',
            'Learnerships and apprenticeships — combine paid workplace training with part-time study, so the learner earns an income while studying towards a recognised qualification.',
            'Government tax revenue indirectly funds public universities and TVET colleges, as well as NSFAS itself, through subsidies — this is why understanding the tax system matters to understanding how tertiary education is funded nationally.',
          ],
        },
        { id: 'scope-a-jobtrends-h', type: 'heading', level: 3, text: 'Job Trends' },
        {
          id: 'scope-a-jobtrends',
          type: 'list',
          text: [
            'Globalisation has increased interconnectedness between countries, exponentially increasing job opportunities overall — but this growth is not spread evenly across all sectors and countries.',
            'South Africa faces a critical and persistent skills shortage across almost all sectors, especially IT, engineering, finance and healthcare — these are known as "scarce skills".',
            'There is a growing demand for digital and IT literacy across almost every industry, not just technology-specific careers.',
            'Remote and flexible working arrangements have become far more common and accepted since the early 2020s.',
            'Lifelong learning and reskilling are increasingly necessary, since industries and the specific skills they need now change faster than in the past.',
            'The green economy (renewable energy, sustainability-related careers) is a growing source of new job opportunities.',
          ],
        },
        { id: 'scope-a-ai-h', type: 'heading', level: 3, text: 'AI in the Workplace' },
        {
          id: 'scope-a-ai-callout',
          type: 'callout',
          text: 'Exam tip: when writing about AI and automation, keep claims general and defensible rather than citing specific invented statistics — examiners reward accurate, balanced reasoning over precise-sounding numbers you cannot verify.',
        },
        {
          id: 'scope-a-ai',
          type: 'list',
          text: [
            'Artificial intelligence (AI) refers to computer systems that can perform tasks which normally require human intelligence, such as recognising patterns, making decisions, understanding language or learning from data.',
            'AI and automation are changing which jobs exist and which skills are in demand, in the same way earlier waves of technology have done — some routine, repetitive tasks are increasingly performed by machines or software, while new roles are created to build, manage and work alongside these systems.',
            'AI increases the need for digital literacy, adaptability and problem-solving skills across almost all career fields, not only technical ones, since many workplaces now use AI-based tools in everyday tasks (e.g. customer service, data analysis, drafting documents, scheduling).',
            'Jobs that rely heavily on routine, predictable and repetitive tasks are generally more exposed to automation than jobs requiring complex human judgement, creativity, empathy or hands-on physical skill in unpredictable environments.',
            'AI also creates new career opportunities — in fields such as data science, AI ethics, software development and digital content — so its overall effect on the job market is better understood as a shift in which skills are valued, rather than a simple loss of jobs.',
            'Because AI and automation evolve quickly, lifelong learning and a willingness to reskill are essential strategies for remaining employable as the technology develops further.',
            'Employers increasingly value "soft skills" that are harder to automate — communication, critical thinking, collaboration and ethical judgement — alongside technical/digital skills.',
          ],
        },
        {
          id: 'scope-a-careers-qa',
          type: 'questions',
          qa: [
            { context: 'Various options are provided as possible answers. Choose the most correct answer and write only the letter (A–D).', q: 'A career in mining belongs to which economic sector? A) Primary B) Secondary C) Tertiary D) Quaternary', marks: 1, a: 'A) Primary' },
            { q: 'Identify TWO sources of financial assistance available to a learner wishing to study further after Grade 12.', marks: 2, a: ['NSFAS (National Student Financial Aid Scheme)', 'A bursary from a company or government department'] },
            { q: 'Define the three economic sectors (primary, secondary and tertiary), giving ONE example career for each.', marks: 6, a: 'Primary sector: extracts raw materials directly from nature, e.g. a farmer or miner. Secondary sector: processes or manufactures raw materials into finished goods, e.g. a factory worker or engineer. Tertiary sector: provides services rather than goods, e.g. a teacher or accountant.' },
            { q: 'Discuss TWO ways in which artificial intelligence (AI) is likely to change the South African job market, and explain ONE strategy a Grade 10 learner can use to remain employable as this change happens.', marks: 8, a: 'AI is likely to automate routine, repetitive tasks across many industries, reducing demand for some entry-level roles that rely only on repetitive work, while simultaneously creating new roles in fields such as data analysis and digital content that did not exist before. It also increases the general demand for digital literacy across almost all careers, even non-technical ones, since more workplaces now use AI-based tools daily. A learner can remain employable by committing to lifelong learning and deliberately building digital literacy and adaptable "soft skills" such as critical thinking and communication, which are harder for AI to replace.' },
          ],
        },

        // ── A3: Human Rights & Society ────────────────────────────────────
        { id: 'scope-a-hr-h', type: 'heading', level: 3, text: 'A3. Human Rights & Society: Gender Bias in Sport, Discrimination and Multi-Religious Respect' },
        { id: 'scope-a-gender-sport-h', type: 'heading', level: 3, text: 'Gender Bias in Sports' },
        {
          id: 'scope-a-gender-sport-def',
          type: 'definitions',
          rows: [
            { term: 'Gender bias', meaning: 'Unfair treatment, assumptions or expectations based on a person\'s gender rather than their actual ability or merit.' },
            { term: 'Gender bias in sport', meaning: 'The unequal treatment of male and female athletes in areas such as media coverage, sponsorship, prize money, facilities and opportunities to participate.' },
          ],
        },
        {
          id: 'scope-a-gender-sport',
          type: 'list',
          text: [
            'Forms of gender bias in sport include unequal prize money and sponsorship between men\'s and women\'s competitions in the same sport, far greater media coverage of men\'s sport, fewer professional opportunities and facilities for women, and stereotypes that certain sports are "for men" or "for women".',
            'Gender bias in sport is a human rights issue because it breaches the constitutional right to equality, which states that no one may be unfairly discriminated against on the grounds of gender.',
            'Consequences of gender bias in sport include talented female athletes having fewer opportunities to compete professionally or earn a living from sport, and young girls being discouraged from participating in sport they are interested in due to stereotyping.',
            'Ways to address gender bias in sport include equal media coverage and prize money policies, promoting female role models and women\'s leagues, encouraging girls\' participation in school sport from a young age, and challenging comments or jokes that reinforce gender stereotypes in sport.',
          ],
        },
        { id: 'scope-a-discrim-h', type: 'heading', level: 3, text: 'Discrimination' },
        {
          id: 'scope-a-discrim-def',
          type: 'definitions',
          rows: [
            { term: 'Discrimination', meaning: 'Unjust and unfair treatment of a person or group based on characteristics such as race, gender, religion, disability, age or sexual orientation.' },
            { term: 'Prejudice', meaning: 'A preconceived, usually negative, opinion or attitude towards a person or group, not based on actual experience or fact.' },
            { term: 'Stereotype', meaning: 'An oversimplified, widely held belief about a particular group of people.' },
          ],
        },
        {
          id: 'scope-a-discrim',
          type: 'list',
          text: [
            'Forms of discrimination include racism, sexism, ableism (against people with disabilities), ageism, homophobia and xenophobia (against foreign nationals).',
            'Discrimination causes psychological harm (anxiety, depression, lowered self-esteem), social exclusion, economic disadvantage (unequal access to jobs, education and services), and can escalate into violence.',
            'Section 9 of the South African Constitution (the equality clause) states that everyone is equal before the law and has the right not to be unfairly discriminated against, directly or indirectly, on one or more listed grounds including race, gender, sex, pregnancy, marital status, ethnic or social origin, colour, sexual orientation, age, disability, religion, conscience, belief, culture, language and birth.',
            'Discrimination can be combated through education and awareness from a young age, challenging stereotypes and prejudiced comments when encountered, supporting anti-discrimination laws (e.g. the Employment Equity Act, the Promotion of Equality and Prevention of Unfair Discrimination Act/PEPUDA), and building inclusive school and community environments.',
          ],
        },
        { id: 'scope-a-religion-h', type: 'heading', level: 3, text: 'Multi-Religious Respect' },
        {
          id: 'scope-a-religion-def',
          type: 'definitions',
          rows: [
            { term: 'Multi-religious society', meaning: 'A society in which people of many different faiths and belief systems live together, each with the constitutional right to practise their religion freely.' },
            { term: 'Monotheism', meaning: 'Belief in and worship of a single God, e.g. Christianity, Islam and Judaism.' },
            { term: 'African Traditional Religion', meaning: 'Belief in God/the Creator through the power and appeasement of ancestors, central to many indigenous South African belief systems.' },
          ],
        },
        {
          id: 'scope-a-religion',
          type: 'list',
          text: [
            'South Africa is a constitutionally secular, religiously diverse state: the Constitution protects freedom of religion, belief and opinion for everyone, and no religion is given preference over another by the state.',
            'Major belief systems represented in South Africa include Christianity, Islam, Judaism, Hinduism, Buddhism and African Traditional Religion — each with its own sacred texts, practices and ethical teachings, but often sharing common values such as compassion, honesty and respect for others.',
            'Christianity centres on belief in the Trinity (the Father, the Son and the Holy Spirit) and the teachings of Jesus Christ.',
            'Islam centres on belief in one God (Allah) and the teachings of the Prophet Muhammad as recorded in the Qur\'an.',
            'Judaism centres on belief in one God and the covenant and teachings recorded in the Torah, including the Ten Commandments.',
            'Hinduism includes a range of traditions; a widely shared belief is that the goal of life is to realise the supreme soul (atman) as the innermost core of one\'s own identity.',
            'African Traditional Religion centres on belief in a Creator/Supreme Being, approached through the power and appeasement of ancestors who mediate between the living and the divine.',
            'Multi-religious respect means recognising the equal right of every person to hold and practise their own beliefs (or none at all), engaging with different faiths without mockery or forced conversion, and finding common ethical ground — such as honesty, respect for life and care for others — across different belief systems.',
            'Respecting religious diversity reduces social conflict, strengthens social cohesion in a diverse society, and models the constitutional values of dignity and equality for all South Africans regardless of their faith.',
          ],
        },
        {
          id: 'scope-a-hr-qa',
          type: 'questions',
          qa: [
            { context: 'Give ONE word or phrase for the following statement.', q: 'Unjust and unfair treatment of others based on their religion, race or gender.', marks: 1, a: 'Discrimination' },
            { q: 'The African traditional religious belief system can be summed up as: A) Belief in the Ten Commandments B) Belief in the Trinity C) Belief in God/the Creator through the power and appeasement of ancestors D) Belief in realising the supreme soul as one\'s innermost identity', marks: 1, a: 'C) Belief in God/the Creator through the power and appeasement of ancestors' },
            { q: 'Discuss TWO examples of gender bias that exist in sport, and explain why this is considered a human rights issue.', marks: 6, a: 'Examples: unequal prize money and sponsorship between men\'s and women\'s competitions in the same sport; far greater media coverage given to men\'s sport than women\'s sport. This is a human rights issue because it breaches the constitutional right to equality, which protects everyone from unfair discrimination on the grounds of gender.' },
            { q: 'Explain how South Africans of different religions can show respect for one another in a multi-religious society, referring to the constitutional right to freedom of religion.', marks: 6, a: 'The Constitution protects every person\'s right to freedom of religion, belief and opinion, meaning no one may be forced to follow a particular faith or be discriminated against for their beliefs. South Africans can show respect by learning about other religions without mockery, recognising shared ethical values such as honesty and compassion across different faiths, allowing others to observe their own religious practices and holidays, and avoiding assumptions or stereotypes about what a person of a particular faith believes or does.' },
          ],
        },

        // ── A4: Youth Risk Behaviour & Sports Ethics ──────────────────────
        { id: 'scope-a-risk-h', type: 'heading', level: 3, text: 'A4. Youth Risk Behaviour & Sports Ethics: Adolescent Risk Behaviour, Poverty and Doping' },
        { id: 'scope-a-riskbehaviour-h', type: 'heading', level: 3, text: 'Adolescent Risk Behaviour' },
        {
          id: 'scope-a-riskbehaviour-def',
          type: 'definitions',
          rows: [
            { term: 'Risk behaviour', meaning: 'Any behaviour that exposes a person to the possibility of injury, disease, legal consequences or long-term harm.' },
            { term: 'Peer pressure', meaning: 'The influence exerted by a peer group, encouraging a person to change their behaviour, attitudes or values to conform to group norms.' },
          ],
        },
        {
          id: 'scope-a-riskbehaviour',
          type: 'list',
          text: [
            'Common risk behaviours among adolescents include substance abuse (alcohol, tobacco, illegal drugs), unsafe/early sexual activity, reckless driving or being a passenger with a reckless driver, involvement in violence or gangs, and truancy/dropping out of school.',
            'Causes of adolescent risk behaviour include peer pressure and the desire to fit in or feel accepted, curiosity and a desire to experiment, poor impulse control linked to the ongoing development of the adolescent brain, low self-esteem, exposure to risk behaviour at home or in the community, and a desire for independence and to "test boundaries" set by adults.',
            'Poverty is a significant risk factor: it can push adolescents towards risk behaviour through limited access to safe recreational activities, stress and hopelessness about the future, exposure to crime and substance use in under-resourced communities, and pressure to earn income in unsafe or illegal ways.',
            'Consequences of adolescent risk behaviour include physical harm or injury, addiction, unplanned pregnancy and sexually transmitted infections, legal consequences, damaged relationships and reduced future opportunities (e.g. school dropout reducing employability).',
            'Protective factors that reduce the likelihood of risk behaviour include strong, supportive relationships with family and positive role models, high self-esteem and a clear sense of personal values, involvement in structured activities such as sport or clubs, and accurate knowledge of the real risks involved.',
          ],
        },
        { id: 'scope-a-poverty-h', type: 'heading', level: 3, text: 'Poverty' },
        {
          id: 'scope-a-poverty-def',
          type: 'definitions',
          rows: [
            { term: 'Poverty', meaning: 'A state in which a person or household lacks the financial resources to meet basic needs such as food, shelter, clothing, healthcare and education.' },
            { term: 'Food insecurity', meaning: 'Unequal or unreliable access to sufficient, nutritious food, due to the inability to afford or obtain it.' },
          ],
        },
        {
          id: 'scope-a-poverty',
          type: 'list',
          text: [
            'Harmful effects of poverty: malnutrition and stunted development in children; limited access to quality education, often leading to school dropout; poor access to healthcare; increased vulnerability to crime, exploitation and substance abuse; psychological effects such as chronic stress and hopelessness.',
            'Poverty and adolescent risk behaviour are closely linked: financial stress at home, limited positive recreational outlets, and exposure to crime or substance use in under-resourced areas can all increase the likelihood that a young person engages in risk behaviour.',
            'Ways an individual can help overcome poverty: pursue education and skills development to improve future employability; volunteer time or support community feeding schemes and NPOs; practise budgeting and financial literacy to use limited resources wisely; support or start small income-generating projects such as community gardens.',
          ],
        },
        { id: 'scope-a-doping-intro-h', type: 'heading', level: 3, text: 'Doping (Introduced Here; Fully Developed as a Section C Essay Topic)' },
        {
          id: 'scope-a-doping-intro',
          type: 'list',
          text: [
            'Doping is the use of banned/illegal performance-enhancing substances or methods by athletes to artificially improve their sporting performance.',
            'It is both a sports-ethics issue (it undermines fair competition) and a youth risk-behaviour issue, since adolescent athletes can face the same pressures to dope as adults — pressure to win, to secure a scholarship or sponsorship, or to keep up with the belief that competitors are already doping.',
            'See the dedicated "Doping in Sport" essay lesson in Section C of this guide for full depth on reasons, health risks and enforcement.',
          ],
        },
        {
          id: 'scope-a-risk-qa',
          type: 'questions',
          qa: [
            { context: 'Give ONE word or phrase for the following statement.', q: 'Careers where there are few or no qualified and experienced people to do the work.', marks: 1, a: 'Scarce skills' },
            { q: 'State THREE reasons why adolescents engage in risk behaviour.', marks: 3, a: ['Peer pressure and the desire to fit in.', 'Curiosity and a desire to experiment.', 'Low self-esteem or a desire for independence/to test boundaries.'] },
            { q: 'Discuss TWO ways in which poverty can increase the likelihood of an adolescent engaging in risk behaviour.', marks: 4, a: ['Limited access to safe, structured recreational activities can leave adolescents with more unsupervised time and fewer positive outlets, increasing exposure to risk behaviour.', 'Stress and hopelessness linked to poverty can push adolescents towards substance use or crime as a way of coping or earning income.'] },
            { q: 'Suggest THREE protective factors that reduce the likelihood of an adolescent engaging in risk behaviour.', marks: 6, a: ['Strong, supportive relationships with family and positive role models.', 'High self-esteem and a clear sense of personal values.', 'Involvement in structured, positive activities such as sport or community clubs.'] },
          ],
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    // LESSON 3 — SECTION B: Physical Health, Sexuality & Careers
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'lo-exam-scope-section-b',
      chapterId: 'lo-exam-scope-nov',
      subjectId: 'life-orientation',
      title: 'Section B: Physical Health, Sexuality & Careers',
      minutes: 28,
      blocks: [
        { id: 'scope-b-h1', type: 'heading', level: 2, text: 'Section B: Physical Health, Sexuality & Careers' },

        // ── B1: Physical Fitness & Health ─────────────────────────────────
        { id: 'scope-b-fitness-h', type: 'heading', level: 3, text: 'B1. Physical Fitness & Health' },
        { id: 'scope-b-cardio-h', type: 'heading', level: 3, text: 'Cardiovascular Fitness' },
        {
          id: 'scope-b-cardio-def',
          type: 'definitions',
          rows: [
            { term: 'Cardiovascular fitness', meaning: 'The ability of the heart, lungs and blood vessels to supply oxygen-rich blood to working muscles efficiently during sustained physical activity.' },
            { term: 'Aerobic exercise', meaning: 'Sustained physical activity that uses oxygen to produce energy, raising heart rate and breathing rate — e.g. running, swimming, cycling, brisk walking.' },
          ],
        },
        {
          id: 'scope-b-cardio',
          type: 'list',
          text: [
            'Benefits of cardiovascular fitness: a stronger heart muscle that pumps blood more efficiently; lower resting heart rate and blood pressure; improved lung capacity; reduced risk of cardiovascular disease, stroke and type 2 diabetes; improved circulation and energy levels for daily activities.',
            'Cardiovascular fitness is built through regular aerobic activity — ideally at least 150 minutes of moderate-intensity aerobic activity per week, according to general health guidelines, built up gradually over time.',
          ],
        },
        { id: 'scope-b-emotional-h', type: 'heading', level: 3, text: 'Emotional Benefits of Exercise' },
        {
          id: 'scope-b-emotional',
          type: 'list',
          text: [
            'Exercise triggers the release of endorphins, chemicals in the brain that improve mood and act as natural painkillers, producing a feeling often described as a post-exercise "high".',
            'Regular physical activity reduces symptoms of stress, anxiety and depression.',
            'Exercise improves self-esteem and body image by giving a sense of achievement and control over one\'s own health.',
            'Participation in team sport builds social connection, belonging and support networks, which further benefit emotional wellbeing.',
            'Exercise improves sleep quality, which in turn supports better emotional regulation and concentration during the day.',
          ],
        },
        { id: 'scope-b-sedentary-h', type: 'heading', level: 3, text: 'Risks of a Sedentary Lifestyle' },
        {
          id: 'scope-b-sedentary-def',
          type: 'definitions',
          rows: [
            { term: 'Sedentary lifestyle', meaning: 'A pattern of daily living involving little or no physical activity, characterised by long periods of sitting (e.g. screen time, desk work) and minimal exercise.' },
          ],
        },
        {
          id: 'scope-b-sedentary',
          type: 'list',
          text: [
            'A sedentary lifestyle significantly increases the risk of lifestyle diseases, including obesity, type 2 diabetes, hypertension (high blood pressure) and cardiovascular disease.',
            'Physical risks of inactivity: weakened muscles and bones over time, poor posture and increased risk of musculoskeletal problems, reduced cardiovascular fitness and reduced immune function.',
            'Mental/emotional risks of inactivity: higher rates of stress, anxiety and depression, since exercise\'s mood-boosting and stress-relieving benefits are lost.',
            'Excessive screen time (a major driver of sedentary behaviour among adolescents) is linked to disrupted sleep, reduced concentration and increased risk of a sedentary lifestyle continuing into adulthood.',
          ],
        },
        { id: 'scope-b-costfree-h', type: 'heading', level: 3, text: 'Cost-Free Exercise Habits' },
        {
          id: 'scope-b-costfree',
          type: 'list',
          text: [
            'Walking or jogging outdoors or around the neighbourhood, requiring no equipment or membership fees.',
            'Bodyweight exercises at home — push-ups, sit-ups, squats, lunges, planks.',
            'Skipping rope — an inexpensive, highly effective cardiovascular workout.',
            'Dancing to music at home for both cardiovascular fitness and emotional benefit.',
            'Playing informal sport with friends or family (soccer, netball, touch rugby) in open spaces such as parks or school grounds.',
            'Using household stairs for step exercises.',
            'Stretching routines for flexibility, which require no cost and can be done anywhere.',
            'These cost-free options are important in a South African context, where gym memberships and sports equipment are unaffordable for many households, yet the health benefits of regular exercise remain fully accessible without them.',
          ],
        },
        {
          id: 'scope-b-fitness-qa',
          type: 'questions',
          qa: [
            { q: 'Define cardiovascular fitness.', marks: 2, a: 'Cardiovascular fitness is the ability of the heart, lungs and blood vessels to supply oxygen-rich blood to working muscles efficiently during sustained physical activity.' },
            { q: 'Explain TWO emotional benefits that regular exercise provides to a teenager.', marks: 4, a: ['Exercise triggers the release of endorphins, which improve mood and reduce symptoms of stress and anxiety.', 'Exercise builds self-esteem and a sense of achievement, and participation in team sport builds social connection and support.'] },
            { q: 'Discuss THREE health risks associated with a sedentary lifestyle.', marks: 6, a: ['Increased risk of lifestyle diseases such as obesity, type 2 diabetes and hypertension.', 'Weakened muscles, poor posture and reduced cardiovascular fitness.', 'Higher rates of stress, anxiety and depression due to losing exercise\'s mood-boosting benefits.'] },
            { q: 'Suggest THREE cost-free exercise habits a learner from a low-income household could realistically build into their routine, and explain why cost-free options matter in the South African context.', marks: 8, a: 'Cost-free habits: walking or jogging outdoors; bodyweight exercises at home such as push-ups and squats; playing informal sport with friends in open spaces such as a park or school field. These matter because gym memberships and sports equipment are unaffordable for many South African households, yet the full health and emotional benefits of regular exercise can still be accessed without any cost, meaning financial hardship need not be a barrier to good physical and mental health.' },
          ],
        },

        // ── B2: Sexuality & Career Planning ────────────────────────────────
        { id: 'scope-b-sex-h', type: 'heading', level: 3, text: 'B2. Sexuality & Career Planning' },
        { id: 'scope-b-sexuality-h', type: 'heading', level: 3, text: 'Adolescent Sexuality' },
        {
          id: 'scope-b-sexuality-def',
          type: 'definitions',
          rows: [
            { term: 'Adolescent sexuality', meaning: 'The physical, emotional and social development of sexual feelings, identity and behaviour that occurs during adolescence as part of normal human development.' },
            { term: 'Consent', meaning: 'A clear, voluntary and informed agreement to take part in an activity; it can be withdrawn at any time and cannot be given under pressure, manipulation or when a person is unable to make a free choice.' },
          ],
        },
        {
          id: 'scope-b-sexuality',
          type: 'list',
          text: [
            'Puberty brings physical changes (development of secondary sexual characteristics) alongside new emotional experiences — increased interest in romantic relationships, curiosity about sex, and sometimes confusion or anxiety about these changes.',
            'Adolescent sexuality is a normal part of development, but acting on sexual feelings carries real physical consequences (unplanned pregnancy, sexually transmitted infections including HIV) and emotional consequences (regret, pressure, impact on self-esteem and relationships) that a Grade 10 learner should understand clearly before making decisions.',
            'Understanding one\'s own values, and having accurate information about contraception, consent and STIs, allows a young person to make informed, responsible decisions about their sexuality rather than being driven only by curiosity or peer pressure.',
          ],
        },
        { id: 'scope-b-decision-h', type: 'heading', level: 3, text: 'Decision-Making' },
        {
          id: 'scope-b-decision',
          type: 'list',
          text: [
            'Responsible decision-making about sexuality (and about life generally) involves: gathering accurate information, weighing up the possible consequences of each choice, considering your own values and goals, and taking responsibility for the outcome of the decision made.',
            'A useful decision-making process: (1) identify the decision to be made, (2) gather relevant, accurate information, (3) consider the possible options and their consequences, (4) weigh the options against your own values and goals, (5) make the decision and act on it, (6) reflect on the outcome.',
            'Decision-making about sexual activity is often complicated by peer pressure, a partner\'s pressure, alcohol or substance use (which impairs judgement), and a desire for acceptance or to prove maturity — recognising these pressures in advance helps a young person make a clearer, values-based decision rather than a reactive one.',
          ],
        },
        { id: 'scope-b-values-h', type: 'heading', level: 3, text: 'The Role of Personal Values' },
        {
          id: 'scope-b-values-def',
          type: 'definitions',
          rows: [
            { term: 'Values', meaning: 'The deeply held beliefs and principles that guide a person\'s judgement of what is important, right and wrong, shaping their behaviour and decisions.' },
          ],
        },
        {
          id: 'scope-b-values',
          type: 'list',
          text: [
            'Personal values (e.g. respect, honesty, self-respect, responsibility, family or religious belief) act as an internal compass when a young person faces pressure to act against what they actually believe is right.',
            'A learner with a clear sense of their own values is better able to resist peer pressure, including pressure related to sexual activity or substance use, because they can measure a decision against what matters to them personally, rather than simply going along with the group.',
            'Values are shaped by family upbringing, culture, religion, education and personal experience, and can be consciously examined and strengthened through reflection — this connects directly to the self-awareness skills covered elsewhere in Life Orientation.',
          ],
        },
        { id: 'scope-b-lifelong-h', type: 'heading', level: 3, text: 'Lifelong Learning for Job Trends' },
        {
          id: 'scope-b-lifelong',
          type: 'list',
          text: [
            'Lifelong learning is the ongoing, voluntary pursuit of knowledge and skills throughout one\'s life, beyond formal schooling — through further study, short courses, on-the-job training or self-directed learning.',
            'As covered in Section A, industries now change faster than before due to globalisation and AI/automation, meaning the skills required for a given job can shift significantly over a career.',
            'Lifelong learning allows a worker to adapt to these changes by reskilling (learning new skills for a different role) or upskilling (deepening skills in their current field) as job market demands evolve.',
            'Strategies for building lifelong learning habits: stay informed about trends in your chosen field; pursue short courses or certifications relevant to emerging skills (e.g. digital literacy); seek mentorship and feedback throughout your career, not only while studying; remain open to changing direction if a field becomes oversupplied or automated.',
          ],
        },
        {
          id: 'scope-b-sex-qa',
          type: 'questions',
          qa: [
            { q: 'Define the term "consent".', marks: 2, a: 'Consent is a clear, voluntary and informed agreement to take part in an activity; it can be withdrawn at any time.' },
            { q: 'Outline THREE steps in a responsible decision-making process that a Grade 10 learner could apply when facing pressure around sexual activity.', marks: 6, a: ['Gather accurate information about the possible consequences (e.g. pregnancy, STIs) before deciding anything.', 'Weigh the options against your own personal values and long-term goals, not just the pressure of the moment.', 'Make the decision and take responsibility for the outcome, rather than blaming the pressure for the choice made.'] },
            { q: 'Explain how a clear sense of personal values can help a young person resist peer pressure related to sexual activity.', marks: 4, a: 'A young person with a clear sense of their own values has an internal standard to measure a decision against, rather than simply following the group. This makes it easier to recognise when a choice conflicts with what they genuinely believe is right for themselves, giving them a stronger, values-based reason to resist pressure rather than relying only on willpower in the moment.' },
            { q: 'Discuss why lifelong learning is becoming increasingly important for South African workers in light of current job market trends.', marks: 6, a: 'Globalisation and the growth of AI and automation mean that industries and the skills they need now change faster than before, so a qualification earned once at the start of a career may not remain sufficient for its entire duration. Lifelong learning allows workers to reskill or upskill as demands shift, keeping them employable even as particular jobs or tasks become automated or oversupplied, and is therefore an increasingly essential career strategy rather than an optional extra.' },
          ],
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    // LESSON 4 — SECTION C: Essay Topics (volunteerism, doping, assertiveness)
    // ════════════════════════════════════════════════════════════════════
    {
      id: 'lo-exam-scope-section-c',
      chapterId: 'lo-exam-scope-nov',
      subjectId: 'life-orientation',
      title: 'Section C: Essay Topics — Volunteerism, Doping, Assertiveness',
      minutes: 30,
      blocks: [
        { id: 'scope-c-h1', type: 'heading', level: 2, text: 'Section C: Essay Topics' },
        {
          id: 'scope-c-intro',
          type: 'callout',
          text: 'On the real exam, Section C gives you THREE essay questions and asks you to answer any TWO. Know all three topics below thoroughly so you can choose confidently on the day, and remember: marks are only given for answers written in full sentences/paragraph form, not bullet points.',
        },

        // ── C1: Volunteerism & Civic Responsibility ───────────────────────
        { id: 'scope-c-vol-h', type: 'heading', level: 3, text: 'C1. Volunteerism & Civic Responsibility' },
        {
          id: 'scope-c-vol-def',
          type: 'definitions',
          rows: [
            { term: 'Volunteerism', meaning: 'The act of offering your time, skills or resources to help others or a cause, without expecting payment.' },
            { term: 'Civic responsibility', meaning: 'The duty of an individual to actively contribute to the wellbeing and functioning of their community and society.' },
            { term: 'Social thinking skills', meaning: 'The ability to understand, interpret and respond appropriately to social situations and the needs and perspectives of others.' },
          ],
        },
        { id: 'scope-c-vol-skills-h', type: 'heading', level: 3, text: 'Volunteering and Social Thinking Skills' },
        {
          id: 'scope-c-vol-skills',
          type: 'list',
          text: [
            'Volunteering is itself an act of exercising social thinking skills because it requires reading and responding to the needs of people in different circumstances to your own.',
            'It involves working cooperatively within a team or organisation, often alongside people from different backgrounds, which builds collaboration skills.',
            'It builds empathy through direct, personal contact with people facing hardship, rather than only learning about hardship abstractly.',
            'It requires problem-solving under real-world constraints — limited time, resources or support — which develops practical social judgement.',
          ],
        },
        { id: 'scope-c-vol-identity-h', type: 'heading', level: 3, text: 'Volunteering and Building Self-Identity' },
        {
          id: 'scope-c-vol-identity',
          type: 'list',
          text: [
            'Volunteering exposes young people to new experiences, environments and perspectives beyond their usual routine, helping them discover their own values, strengths and interests.',
            'Working alongside diverse people and facing genuine community challenges builds confidence and a clearer sense of purpose — both central to forming a stable, mature self-identity during adolescence.',
            'Volunteering can reveal career interests or strengths a learner did not know they had (e.g. discovering a passion for teaching through tutoring younger learners), directly informing future career planning.',
          ],
        },
        { id: 'scope-c-vol-community-h', type: 'heading', level: 3, text: 'Community Benefits of Youth Volunteering' },
        {
          id: 'scope-c-vol-community',
          type: 'list',
          text: [
            'Communities gain practical support — such as food distribution, tutoring or environmental clean-ups — that they may not otherwise have the capacity or funding to provide.',
            'Young volunteers bring fresh energy and new ideas, which can inspire further community participation and a stronger culture of collective responsibility.',
            'However, the benefit to a community depends on volunteers being well-supported and the work being sustained and well-organised, rather than once-off or poorly coordinated — critical evaluation of a programme\'s effectiveness is a skill examiners reward.',
            'Volunteering strengthens social cohesion by connecting different groups within a community around a shared, practical goal.',
          ],
        },
        {
          id: 'scope-c-vol-essay',
          type: 'questions',
          qa: [
            {
              n: 'Essay (Volunteerism)',
              context: 'Write an essay in full sentences discussing volunteerism and civic responsibility. Cover social thinking skills, the building of self-identity, and the benefits to the community of youth volunteering. (16 marks)',
              q: 'Discuss how volunteering exercises social thinking skills, helps young people build their own self-identity, and benefits the community.',
              marks: 16,
              a: 'Volunteering is an exercise in social thinking skills because it requires a young person to read and respond to the needs of people in different circumstances to their own, to work cooperatively within a team or organisation, and to build empathy through direct contact with people facing hardship. Beyond these social skills, volunteering plays an important role in developing a young person\'s own self-identity: by exposing them to new environments, challenges and people outside their usual routine, it helps them discover their genuine values, strengths and interests, rather than ones assumed by their usual social circle. The confidence and sense of purpose built through this exposure are central to forming a stable identity during adolescence, and volunteering can even reveal career interests a learner did not know they had. At the same time, communities benefit directly: volunteers provide practical support such as food distribution or tutoring that under-resourced communities may not otherwise have capacity to deliver, and young volunteers bring fresh energy that can inspire wider community participation. This benefit, however, depends on volunteers being well-supported and the work being sustained rather than once-off, so that genuine, lasting value is created for both the volunteer and the community they serve.',
            },
          ],
        },

        // ── C2: Doping in Sport ────────────────────────────────────────────
        { id: 'scope-c-dop-h', type: 'heading', level: 3, text: 'C2. Doping in Sport' },
        {
          id: 'scope-c-dop-def',
          type: 'definitions',
          rows: [
            { term: 'Doping', meaning: 'The use of banned/illegal performance-enhancing substances or methods by athletes to artificially improve their sporting performance.' },
            { term: 'Maladministration', meaning: 'Poor, corrupt or inconsistent management of an organisation — in sport, this can include cover-ups, inconsistent testing, or protecting high-profile athletes from proper sanction.' },
          ],
        },
        { id: 'scope-c-dop-reasons-h', type: 'heading', level: 3, text: 'Reasons for Doping' },
        {
          id: 'scope-c-dop-reasons',
          type: 'list',
          text: [
            'Pressure to win and secure sponsorships, prize money or a place on a national team.',
            'Belief that competitors are already doping, creating a perceived need to "level the playing field".',
            'Pressure from coaches, team doctors or sporting federations to perform at all costs.',
            'Desire to recover faster from injury or extend a fading career.',
            'Weak testing and enforcement in some sports or countries, reducing the perceived risk of being caught.',
          ],
        },
        { id: 'scope-c-dop-risks-h', type: 'heading', level: 3, text: 'Health Risks of Doping' },
        {
          id: 'scope-c-dop-risks',
          type: 'list',
          text: [
            'Anabolic steroids can cause liver and kidney damage, heart disease, severe mood swings/aggression ("roid rage"), and hormonal disruption.',
            'Stimulants can cause irregular heartbeat, high blood pressure, dependency and heightened risk of stroke.',
            'Blood-doping methods (e.g. artificially increasing red blood cell count) can thicken the blood, increasing the risk of blood clots, stroke and heart failure.',
            'Long-term doping can cause irreversible organ damage, and some substances carry a serious risk of sudden death during intense exertion.',
            'Beyond physical harm, doping scandals cause severe psychological and reputational damage — athletes caught doping often face public humiliation, stripped titles and the loss of sponsorship and career opportunities.',
          ],
        },
        { id: 'scope-c-dop-enforce-h', type: 'heading', level: 3, text: 'Sports Administration Enforcement' },
        {
          id: 'scope-c-dop-enforce',
          type: 'list',
          text: [
            'Maladministration — such as corruption, cover-ups or inconsistent testing — undermines fair and reliable enforcement, because sporting bodies may protect high-profile or medal-winning athletes to preserve the organisation\'s reputation and revenue.',
            'Under-resourced or poorly managed testing agencies may be unable to test all athletes regularly or consistently across different countries, creating loopholes athletes can exploit.',
            'Wealthier sporting federations often have better-funded, more frequent testing programmes than poorer ones, leading to inconsistent enforcement internationally.',
            'Effective enforcement requires rigorous, randomised, year-round (not only pre-competition) testing; consistent and transparent sanctions regardless of an athlete\'s profile or medal status; and independent oversight bodies free from conflicts of interest with the sporting federations they regulate.',
            'Education programmes that teach athletes about the health risks and ethical consequences of doping — delivered consistently, not as a once-off talk — are an important complement to testing and sanctions, helping prevent doping before it starts.',
          ],
        },
        {
          id: 'scope-c-dop-essay',
          type: 'questions',
          qa: [
            {
              n: 'Essay (Doping)',
              context: 'Write an essay in full sentences discussing doping in sport. Cover the reasons athletes dope, the health risks involved, and how sports administration bodies attempt to enforce anti-doping rules. (16 marks)',
              q: 'Discuss the reasons athletes make the decision to dope, the health risks associated with doping, and how sporting bodies enforce anti-doping rules.',
              marks: 16,
              a: 'Athletes make the illegal decision to dope for a range of reasons, including intense pressure to win and secure sponsorships, prize money or a place on a national team, the belief that their competitors are already doping, pressure from coaches or team doctors, and a desire to recover faster from injury or extend a fading career. These pressures must be weighed against the serious health risks doping carries: anabolic steroids can cause liver and kidney damage, heart disease and severe mood disturbances, stimulants can cause irregular heartbeat and heightened stroke risk, and blood-doping methods can thicken the blood and increase the risk of blood clots and heart failure, with some substances carrying a risk of sudden death during intense exertion. Enforcing anti-doping rules is made difficult by maladministration within sporting bodies: corruption, cover-ups or inconsistent testing can occur when organisations protect high-profile or medal-winning athletes to preserve their own reputation and revenue, and under-resourced testing agencies may be unable to test all athletes regularly, especially in poorer sporting federations. Effective enforcement therefore requires rigorous, year-round and randomised testing, consistent and transparent sanctions applied regardless of an athlete\'s profile, and ongoing education programmes that address the ethical and health consequences of doping before an athlete is ever tempted to use banned substances.',
            },
          ],
        },

        // ── C3: Assertiveness & Personal Boundaries ───────────────────────
        { id: 'scope-c-ass-h', type: 'heading', level: 3, text: 'C3. Assertiveness & Personal Boundaries' },
        {
          id: 'scope-c-ass-def',
          type: 'definitions',
          rows: [
            { term: 'Assertiveness', meaning: 'Expressing your own thoughts, feelings and needs clearly, honestly and respectfully, without violating the rights of others or allowing your own rights to be violated.' },
            { term: 'Personal boundaries', meaning: 'The physical, emotional and psychological limits a person sets to protect their own wellbeing and define what behaviour from others they will and will not accept.' },
            { term: 'Peer pressure', meaning: 'The influence exerted by a peer group, encouraging a person to change their behaviour, attitudes or values to conform to group norms.' },
          ],
        },
        { id: 'scope-c-ass-peer-h', type: 'heading', level: 3, text: 'Peer Pressure and Why Saying "No" Is Hard' },
        {
          id: 'scope-c-ass-peer',
          type: 'list',
          text: [
            'Peer pressure can be direct (explicitly being told or dared to do something) or indirect (simply observing what peers are doing and feeling pressure to conform).',
            'Reasons individuals feel unable to use their right to say "no": fear of rejection or losing the relationship/friend group; low self-esteem and a need for approval; power imbalances in the relationship (e.g. age, popularity, financial dependence); fear of physical or emotional retaliation; cultural or social gender norms that discourage refusal; manipulation or coercion by the other person.',
          ],
        },
        { id: 'scope-c-ass-right-h', type: 'heading', level: 3, text: 'Exercising the Right to Say "No"' },
        {
          id: 'scope-c-ass-right',
          type: 'list',
          text: [
            'Every person has the right to refuse to participate in any activity — including sexual activity, substance use, or any other pressured decision — without being pressured, coerced or punished for it.',
            'Exercising this right builds self-respect and reinforces personal boundaries, giving a person the confidence to refuse unwanted activity without guilt.',
            'It protects against the physical and emotional consequences of premature or unwanted sexual activity, such as unplanned pregnancy or sexually transmitted infections, by allowing a person to wait until they are genuinely, emotionally and physically ready.',
            'Practical assertiveness techniques: use clear, direct "I" statements (e.g. "I don\'t want to do that" rather than an apologetic or vague refusal); maintain confident body language and eye contact; repeat the refusal calmly if pressure continues ("the broken record" technique); suggest an alternative activity; remove yourself from the situation if pressure persists; seek support from a trusted adult if the pressure becomes coercive or unsafe.',
          ],
        },
        { id: 'scope-c-ass-religion-h', type: 'heading', level: 3, text: 'Religious Ethics and Resisting Premature Sexual Activity' },
        {
          id: 'scope-c-ass-religion',
          type: 'list',
          text: [
            'Most major religions (Christianity, Islam, Judaism, Hinduism, Buddhism, African Traditional Religion) teach respect for the dignity and bodily autonomy of every person, and many emphasise self-discipline and, in various forms, abstinence before marriage.',
            'Understanding these religious teachings can give an individual an additional, value-based foundation for confidently resisting pressure towards premature sexual activity, strengthening their resolve beyond willpower alone.',
            'Because South Africa is a diverse, multi-faith (and non-faith) society, this understanding must be balanced with respect for personal choice, so that religious belief empowers an individual\'s own decision rather than being used by others to shame or coerce them.',
          ],
        },
        {
          id: 'scope-c-ass-essay',
          type: 'questions',
          qa: [
            {
              n: 'Essay (Assertiveness)',
              context: 'Write an essay in full sentences discussing assertiveness and personal boundaries. Cover peer pressure, exercising the right to say "no", resisting premature sexual activity, and the role religious ethics can play. (16 marks)',
              q: 'Discuss how a young person can exercise assertiveness and personal boundaries when facing peer pressure, including the right to say "no" and resisting pressure towards premature sexual activity, and explain the role religious ethics can play.',
              marks: 16,
              a: 'Peer pressure, whether direct or indirect, can make it genuinely difficult for a young person to exercise their right to say "no" — common reasons include fear of rejection, low self-esteem, power imbalances within a relationship, and cultural or gender norms that discourage refusal. Despite these pressures, every person has the constitutional and personal right to refuse to participate in any activity, including sexual activity, without being coerced or punished for it; exercising this right builds self-respect, reinforces personal boundaries, and protects against the real physical and emotional consequences of premature sexual activity, such as unplanned pregnancy or sexually transmitted infections, by allowing a person to wait until they are genuinely ready. Practical assertiveness skills support this right in the moment: clear "I" statements, confident body language, calmly repeating a refusal under continued pressure, and removing oneself from an unsafe situation are all techniques that strengthen a young person\'s ability to say "no" convincingly. Understanding the ethical teachings of major religions on dignity, bodily autonomy and self-discipline can add a further, values-based foundation to this resolve, strengthening an individual\'s confidence in resisting pressure. However, because South Africa is a diverse, multi-faith society, this understanding must be balanced with respect for personal choice, so that religious belief empowers an individual\'s own decision-making rather than being used to shame or coerce others into a particular choice.',
            },
          ],
        },
      ],
    },
  ],
};
