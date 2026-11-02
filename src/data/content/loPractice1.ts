import type { Chapter } from '@/lib/types';

/**
 * Composed practice paper #1 — not an official past paper. Built to match
 * the CAPS Grade 10 LO exam format (Section A compulsory MCQ/short-answer,
 * Section B compulsory extract-based, Section C choose 2 of 3 essay-style),
 * covering topics the two real past papers in this set did not focus on:
 * emotional intelligence/study skills, environmental health, and post-school
 * study options/career planning, plus relationships and the Constitution.
 */
export const LO_PRACTICE_PAPER_1: Chapter = {
  id: 'lo-practice-paper-1',
  subjectId: 'life-orientation',
  title: 'Practice Paper 1: Self, Environment and Careers',
  summary: 'Composed practice paper, 100 marks, 2 hours 30 minutes. Section A (compulsory): emotional intelligence, relationships and the Constitution. Section B (compulsory): environmental health and post-school study options. Section C (choose 2 of 3): stress and coping, career planning, and ethics in sport.',
  category: 'Past Papers',
  lessons: [
    // ── Section A ─────────────────────────────────────────────────────────
    {
      id: 'lo-pr1-section-a',
      chapterId: 'lo-practice-paper-1',
      subjectId: 'life-orientation',
      title: 'Section A (Compulsory)',
      minutes: 30,
      blocks: [
        { id: 'pr1-a-h1', type: 'heading', level: 2, text: 'Section A — Question 1 (Compulsory)' },
        {
          id: 'pr1-a-callout',
          type: 'callout',
          text: 'Practice paper — composed to match the CAPS exam format, not an official past paper. All questions and model answers are composed to reflect real CAPS Grade 10 Life Orientation content and typical exam style/mark allocations.',
        },
        {
          id: 'pr1-a-qa',
          type: 'questions',
          qa: [
            {
              n: '1.1.1',
              context: 'Various options are provided as possible answers. Choose the most correct answer and write only the letter (A–D) next to the question number.',
              q: 'Emotional intelligence can best be described as: A) Being the smartest person in the room B) The ability to identify, understand and manage your own emotions and respond appropriately to others\' emotions C) Never feeling negative emotions D) Suppressing all emotions at work',
              marks: 1,
              a: 'B) The ability to identify, understand and manage your own emotions and respond appropriately to others\' emotions',
            },
            { n: '1.1.2', q: 'Reading a text quickly to find a specific fact or figure is called: A) Skimming B) Scanning C) Reviewing D) Reciting', marks: 1, a: 'B) Scanning' },
            { n: '1.1.3', q: 'The supreme law of South Africa, which no other law may contradict, is the: A) Bill of Rights B) Employment Equity Act C) Constitution D) National Senior Certificate', marks: 1, a: 'C) Constitution' },
            { n: '1.1.4', q: 'A TVET College mainly offers: A) Academic degrees only B) Vocational and occupational qualifications, including artisan trade training C) Postgraduate research degrees D) None of the above', marks: 1, a: 'B) Vocational and occupational qualifications, including artisan trade training' },
            { n: '1.1.5', q: 'Which of the following is a component of physical fitness concerned with the range of motion at a joint? A) Muscular strength B) Cardiovascular endurance C) Flexibility D) Body composition', marks: 1, a: 'C) Flexibility' },
            { n: '1.2.1', context: 'Give one word/phrase for the following statements.', q: 'The ability to recover quickly from setbacks and adapt to change.', marks: 1, a: 'Resilience' },
            { n: '1.2.2', q: 'An oversimplified, widely held belief about a particular group of people.', marks: 1, a: 'A stereotype' },
            { n: '1.2.3', q: 'A clear, voluntary and informed agreement to take part in an activity.', marks: 1, a: 'Consent' },
            { n: '1.2.4', q: 'A chronic condition involving compulsive substance use despite harmful consequences.', marks: 1, a: 'Addiction' },
            { n: '1.2.5', q: 'The ability of a muscle to repeat a movement over time without becoming fatigued.', marks: 1, a: 'Muscular endurance' },
            {
              n: '1.3.1',
              context: 'Answer the following questions in full sentences.',
              q: 'Name TWO characteristics of a healthy relationship.',
              marks: 2,
              a: ['Mutual respect for each other\'s feelings and boundaries.', 'Open and honest communication.'],
            },
            { n: '1.3.2', q: 'State TWO founding values of the South African Constitution.', marks: 2, a: ['Human dignity and the advancement of human rights and freedoms.', 'Non-racialism and non-sexism.'] },
            { n: '1.3.3', q: 'Explain the difference between self-esteem and self-confidence.', marks: 4, a: 'Self-esteem is the overall sense of value or worth a person places on themselves, while self-confidence is trust in one\'s own abilities and judgement to successfully handle specific tasks or challenges — a person can be confident in one skill while still struggling with overall self-esteem.' },
            { n: '1.3.4', q: 'Suggest TWO ways a Grade 10 learner can improve their self-awareness.', marks: 4, a: ['Reflect regularly on personal strengths, weaknesses and reactions to situations, for example through journaling.', 'Seek honest feedback from trusted teachers, family or friends and consider it without becoming defensive.'] },
          ],
        },
        { id: 'pr1-a-total', type: 'callout', text: 'TOTAL SECTION A: 20' },
      ],
    },

    // ── Section B ─────────────────────────────────────────────────────────
    {
      id: 'lo-pr1-section-b',
      chapterId: 'lo-practice-paper-1',
      subjectId: 'life-orientation',
      title: 'Section B (Compulsory)',
      minutes: 35,
      blocks: [
        { id: 'pr1-b-h1', type: 'heading', level: 2, text: 'Section B — Question 2 (Environmental Health) and Question 3 (Post-School Study Options)' },
        { id: 'pr1-b-q2-h', type: 'heading', level: 3, text: 'Question 2: Environmental Health' },
        {
          id: 'pr1-b-q2',
          type: 'questions',
          qa: [
            {
              n: '2.1',
              context: 'Read the extract below and answer the questions that follow. "Informal settlements across South Africa face serious environmental health challenges: inadequate refuse removal, limited access to clean water and sanitation, and air pollution from burning fuel for heating and cooking. These conditions contribute to the spread of waterborne and respiratory diseases, and place additional strain on an already stretched public healthcare system."',
              q: 'Define environmental health.',
              marks: 2,
              a: 'Environmental health refers to aspects of human health and quality of life that are determined by physical, chemical, biological and social factors in the environment.',
            },
            { n: '2.2', q: 'State FOUR environmental health issues mentioned or implied in the extract.', marks: 4, a: ['Inadequate refuse removal / poor waste management.', 'Limited access to clean water and sanitation.', 'Air pollution from burning fuel for heating and cooking.', 'Overcrowded, unsafe living conditions.'] },
            { n: '2.3', q: 'Discuss TWO health impacts of poor environmental conditions described in the extract.', marks: 4, a: ['Waterborne diseases such as cholera and diarrhoea spread more easily where sanitation and clean water access is limited.', 'Respiratory diseases such as asthma and bronchitis increase due to air pollution from burning fuel indoors.'] },
            { n: '2.4', q: 'Discuss THREE ways communities can work together to improve environmental health in under-served areas.', marks: 6, a: ['Organise community clean-up campaigns and recycling programmes to manage waste better.', 'Advocate collectively for improved service delivery, such as regular refuse removal and water infrastructure, from local government.', 'Run community education campaigns on hygiene practices that reduce the spread of disease despite limited infrastructure.'] },
            { n: '2.5', q: 'Critically discuss the relationship between poverty and environmental health.', marks: 4, a: 'Poverty and poor environmental health reinforce each other: low-income communities are more likely to live in areas with inadequate infrastructure and are less able to access healthcare when environment-related illness occurs, while the resulting ill health reduces people\'s ability to work and study, deepening the poverty that caused the problem in the first place.' },
          ],
        },
        { id: 'pr1-b-q3-h', type: 'heading', level: 3, text: 'Question 3: Post-School Study Options' },
        {
          id: 'pr1-b-q3',
          type: 'questions',
          qa: [
            {
              n: '3.1',
              context: 'Read the extract below and answer the questions that follow. "Grade 12 learners in South Africa face a widening range of post-school options: traditional universities, universities of technology, TVET colleges, learnerships and apprenticeships, and private colleges. Each path has different admission requirements, costs, and career outcomes, and learners are encouraged to start researching these options from Grade 10 so that their subject choices keep the right doors open."',
              q: 'Name THREE post-school study options mentioned in the extract.',
              marks: 3,
              a: ['University', 'TVET college', 'Learnership/apprenticeship (or private college)'],
            },
            { n: '3.2', q: 'Explain why the extract suggests learners should start researching post-school options from Grade 10.', marks: 3, a: 'Subject choices made in Grade 10 affect which fields of study a learner will qualify for later, so researching career and study paths early helps ensure the correct subjects are chosen before it becomes too late to change them.' },
            { n: '3.3', q: 'Discuss TWO factors a learner should consider when choosing between a university and a TVET college.', marks: 4, a: ['Admission requirements — universities typically require a Bachelor\'s pass with specific subject marks, while TVET colleges may have more accessible entry requirements.', 'The practical versus theoretical nature of the qualification — TVET colleges focus more on hands-on, vocational training, which may suit learners who learn best through practice.'] },
            { n: '3.4', q: 'Discuss THREE ways a learner can fund their post-school studies.', marks: 6, a: ['Apply for NSFAS if they meet the financial need criteria.', 'Apply for bursaries offered by companies, often tied to studying in a scarce-skills field.', 'Consider a learnership, which combines paid work experience with part-time study.'] },
            { n: '3.5', q: 'Analyse how choosing a scarce-skills field could affect a learner\'s future employment prospects.', marks: 4, a: 'Training in a scarce-skills field, such as IT, engineering or specific trades, generally gives graduates better job security and stronger salary prospects, because demand for qualified workers in these fields exceeds the available supply, giving graduates more leverage and more employment options than fields with an oversupply of job seekers.' },
          ],
        },
        { id: 'pr1-b-total', type: 'callout', text: 'TOTAL SECTION B: 40' },
      ],
    },

    // ── Section C ─────────────────────────────────────────────────────────
    {
      id: 'lo-pr1-section-c',
      chapterId: 'lo-practice-paper-1',
      subjectId: 'life-orientation',
      title: 'Section C — Answer Any TWO of Three (Q4, Q5, Q6)',
      minutes: 40,
      blocks: [
        { id: 'pr1-c-h1', type: 'heading', level: 2, text: 'Section C' },
        { id: 'pr1-c-instructions', type: 'callout', text: 'Answer any TWO questions in this section. Your response must be in essay form. Marks will only be allocated for full sentences.' },
        { id: 'pr1-c-q4-h', type: 'heading', level: 3, text: 'Question 4: Stress and Coping' },
        {
          id: 'pr1-c-q4',
          type: 'questions',
          qa: [
            {
              n: '4.1',
              context: 'Read the extract below and write an essay on stress and coping. "A recent survey of Grade 10 and 11 learners found that over 60% reported feeling overwhelmed by schoolwork, exams and social pressures at least once a week. Counsellors note that learners who develop healthy coping strategies early tend to manage the increased pressure of Grade 12 far better than those who do not."',
              q: 'Define stress.',
              marks: 2,
              a: 'Stress is the body and mind\'s response to pressure or demands that feel overwhelming, which can be caused by exams, relationships, family problems or the changes of adolescence.',
            },
            { n: '4.2', q: 'State FOUR healthy coping strategies a learner could use to manage stress.', marks: 4, a: ['Physical activity and exercise to release built-up tension.', 'Talking to someone you trust about what is bothering you.', 'Time management and planning to reduce academic pressure.', 'Relaxation techniques such as deep breathing or listening to music.'] },
            { n: '4.3', q: 'Discuss TWO unhealthy coping strategies and explain why they are harmful.', marks: 8, a: ['Substance abuse — using alcohol or drugs to escape stress temporarily numbs feelings but does not resolve the underlying problem, and can lead to addiction and worsened mental health over time.', 'Social withdrawal and isolation — avoiding friends and family removes an important support system, which usually makes stress and related emotional difficulties worse rather than better.'] },
            { n: '4.4', q: 'Critically discuss why learners who develop healthy coping strategies in Grade 10 may be better prepared for the pressures of Grade 12.', marks: 6, a: 'Coping strategies, like any skill, improve with practice — a learner who has already built habits such as time management, healthy stress release and open communication by Grade 10 will be able to draw on those habits automatically when Grade 12 pressure increases, rather than having to learn them for the first time during the most demanding year; however, this benefit depends on the learner continuing to apply these strategies consistently rather than abandoning them under pressure.' },
          ],
        },
        { id: 'pr1-c-q5-h', type: 'heading', level: 3, text: 'Question 5: Career Planning' },
        {
          id: 'pr1-c-q5',
          type: 'questions',
          qa: [
            {
              n: '5.1',
              context: 'Study the scenario below and write an essay on career planning. "Lindiwe is in Grade 10 and enjoys biology and mathematics. She is unsure whether to pursue a career in medicine, which requires many years of expensive study, or a shorter qualification in a growing scarce-skills field such as biomedical technology."',
              q: 'Define the term "career".',
              marks: 2,
              a: 'A career is a person\'s chosen path of progressive achievement, usually involving a sequence of related jobs, across their working life.',
            },
            { n: '5.2', q: 'State FOUR factors Lindiwe should consider when deciding between the two career paths.', marks: 4, a: ['Her personal interests and strengths in biology and mathematics.', 'The cost and duration of each qualification.', 'Funding options available, such as bursaries for scarce-skills fields.', 'Job availability and demand in each field after qualifying.'] },
            { n: '5.3', q: 'Discuss THREE steps Lindiwe could take now, in Grade 10, to plan her career path.', marks: 6, a: ['Research the subject and mark requirements for both medicine and biomedical technology so she keeps the right subjects open.', 'Speak to people already working in both fields to understand the realities of each career.', 'Investigate funding options, such as bursaries, for both paths so cost does not unfairly limit her choice.'] },
            { n: '5.4', q: 'Analyse TWO ways in which choosing a scarce-skills field could benefit Lindiwe\'s future compared to an oversubscribed field.', marks: 8, a: ['A scarce-skills field such as biomedical technology is likely to offer stronger job security, since there are fewer qualified professionals relative to the number of available positions.', 'Scarce-skills fields often come with better starting salaries and faster career progression, because employers compete for the limited pool of qualified candidates.'] },
          ],
        },
        { id: 'pr1-c-q6-h', type: 'heading', level: 3, text: 'Question 6: Ethics in Sport' },
        {
          id: 'pr1-c-q6',
          type: 'questions',
          qa: [
            {
              n: '6.1',
              context: 'Study the scenario below and write an essay on ethics in sport. "A school athletics team is under pressure to win the provincial championships. Rumours circulate that some athletes from a rival school are using banned supplements to improve performance."',
              q: 'Define the term "fair play".',
              marks: 2,
              a: 'Fair play means competing according to the rules of a sport, with honesty and respect for opponents, officials and the spirit of the game.',
            },
            { n: '6.2', q: 'State FOUR principles of fair play that athletes should follow.', marks: 4, a: ['Respecting the rules of the game and the decisions of officials.', 'Respecting opponents, teammates and officials regardless of the outcome.', 'Competing to the best of one\'s own ability without cheating.', 'Refusing to use banned substances or other unfair advantages.'] },
            { n: '6.3', q: 'Discuss TWO reasons why athletes might be tempted to use banned supplements despite knowing the rules.', marks: 6, a: ['Intense pressure to win, from themselves, coaches or their school, can make athletes feel that results matter more than how they are achieved.', 'A belief that competitors are already using banned substances can create a feeling that doping is necessary just to remain competitive, even though this reasoning does not justify breaking the rules.'] },
            { n: '6.4', q: 'Critically discuss how a school could promote ethics and fair play among its athletes.', marks: 8, a: 'A school could combine clear, consistently enforced codes of conduct with genuine education about the health risks and unfairness of doping, since rules alone rarely change behaviour without understanding; involving coaches as visible role models of fair play, and publicly celebrating effort and sportsmanship rather than only wins, can help shift the culture so that athletes feel less pressure to cut corners to succeed.' },
          ],
        },
        { id: 'pr1-c-total', type: 'callout', text: 'TOTAL SECTION C: 40 | GRAND TOTAL: 100' },
      ],
    },
  ],
};
