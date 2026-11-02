import type { Chapter } from '@/lib/types';

/**
 * Composed practice paper #3 for the November exam scope. Part of the
 * 5-paper set for this topic (see loExamScopeNov.ts Lesson 1). Section B
 * extracts pair fitness/health with sexuality/decision-making from a
 * different angle (image/infographic-style source description) to the
 * Mock Paper and Practice Paper 2.
 */
export const LO_EXAM_SCOPE_PRACTICE_3: Chapter = {
  id: 'lo-exam-scope-practice-3',
  subjectId: 'life-orientation',
  title: 'November Exam Scope — Practice Paper 3',
  summary: 'Composed practice paper, 100 marks, 2 hours 30 minutes, aligned to the November exam scope. Section A (compulsory): adolescent risk behaviour, economic sectors, religious diversity, study skills. Section B (compulsory, extract-based): cardiovascular fitness/sedentary lifestyle and adolescent sexuality/personal values. Section C (choose 2 of 3 essays): volunteerism, doping, assertiveness.',
  category: 'November Exam Scope',
  lessons: [
    // ── Section A ─────────────────────────────────────────────────────────
    {
      id: 'lo-pr3scope-section-a',
      chapterId: 'lo-exam-scope-practice-3',
      subjectId: 'life-orientation',
      title: 'Section A (Compulsory)',
      minutes: 30,
      blocks: [
        { id: 'pr3s-a-h1', type: 'heading', level: 2, text: 'Section A — Question 1 (Compulsory)' },
        {
          id: 'pr3s-a-callout',
          type: 'callout',
          text: 'Practice Paper 3 of 4 — composed to match the November exam scope, not an official past paper.',
        },
        {
          id: 'pr3s-a-qa',
          type: 'questions',
          qa: [
            { n: '1.1.1', context: 'Choose the most correct answer and write only the letter (A–D) next to the question number.', q: 'Which of the following is an example of adolescent risk behaviour? A) Keeping a study timetable B) Substance abuse C) Volunteering at a shelter D) Practising assertiveness', marks: 1, a: 'B) Substance abuse' },
            { n: '1.1.2', q: 'A qualification that combines structured workplace training with part-time study is called: A) A bursary B) A learnership/apprenticeship C) A scholarship D) A student loan', marks: 1, a: 'B) A learnership/apprenticeship' },
            { n: '1.1.3', q: 'The belief that the goal of life is to realise the supreme soul (atman) as one\'s innermost identity is most closely associated with: A) Christianity B) Judaism C) Hinduism D) African Traditional Religion', marks: 1, a: 'C) Hinduism' },
            { n: '1.1.4', q: 'Reading a text quickly to get a general overview of its content is called: A) Scanning B) Skimming C) Cramming D) Reciting', marks: 1, a: 'B) Skimming' },
            { n: '1.1.5', q: 'Which of these is a protective factor that reduces the likelihood of adolescent risk behaviour? A) Low self-esteem B) Lack of parental supervision C) Involvement in structured sport or clubs D) Exposure to risk behaviour at home', marks: 1, a: 'C) Involvement in structured sport or clubs' },
            { n: '1.2.1', context: 'Give one word or phrase for the following statements.', q: 'The deeply held beliefs and principles that guide a person\'s judgement of right and wrong.', marks: 1, a: 'Values' },
            { n: '1.2.2', q: 'A pattern of daily living involving little or no physical activity, with long periods of sitting.', marks: 1, a: 'A sedentary lifestyle' },
            { n: '1.2.3', q: 'The part of the economy that extracts raw materials directly from nature, e.g. farming or mining.', marks: 1, a: 'The primary sector' },
            { n: '1.2.4', q: 'The ongoing, voluntary pursuit of knowledge and skills throughout a person\'s life, beyond formal schooling.', marks: 1, a: 'Lifelong learning' },
            { n: '1.2.5', q: 'An oversimplified, widely held belief about a particular group of people.', marks: 1, a: 'A stereotype' },
            {
              n: '1.3.1',
              context: 'Answer the following questions in full sentences.',
              q: 'Explain the difference between scanning and skimming.',
              marks: 4,
              a: 'Scanning is moving your eyes quickly over a text to find a specific fact, keyword or figure, without reading every word. Skimming is reading quickly over headings and topic sentences to get a general overview of what a text is about, rather than looking for one specific detail.',
            },
            {
              n: '1.3.2',
              q: 'State TWO causes of adolescent risk behaviour.',
              marks: 2,
              a: ['Peer pressure and the desire to fit in.', 'Poor impulse control linked to the ongoing development of the adolescent brain (also accept curiosity, low self-esteem, exposure to risk behaviour at home).'],
            },
            {
              n: '1.3.3',
              q: 'Discuss TWO ways AI and automation may affect jobs in South Africa, being careful to keep your claims general rather than citing specific statistics.',
              marks: 4,
              a: ['AI and automation are likely to reduce demand for roles built mainly on routine, repetitive tasks, since these can increasingly be performed by machines or software.', 'At the same time, AI is likely to create new kinds of jobs and increase the general need for digital literacy and adaptability across almost all career fields, not only technical ones.'],
            },
            {
              n: '1.3.4',
              q: 'Name TWO religions or belief systems practised in South Africa\'s multi-religious society, and explain why respecting religious diversity matters.',
              marks: 4,
              a: 'Any two of: Christianity, Islam, Judaism, Hinduism, Buddhism, African Traditional Religion. Respecting religious diversity matters because the Constitution protects every person\'s right to freedom of religion, belief and opinion, and mutual respect across different faiths reduces social conflict and strengthens social cohesion in a diverse society.',
            },
            {
              n: '1.3.5',
              q: 'Suggest ONE effective study method a Grade 10 learner could use instead of cramming, and explain why it works better.',
              marks: 2,
              a: 'Spaced repetition — reviewing material at increasing intervals rather than once — works better because it moves information into long-term memory through repeated exposure, rather than relying on short-term memory that fades quickly after cramming.',
            },
          ],
        },
        { id: 'pr3s-a-total', type: 'callout', text: 'TOTAL SECTION A: 20' },
      ],
    },

    // ── Section B ─────────────────────────────────────────────────────────
    {
      id: 'lo-pr3scope-section-b',
      chapterId: 'lo-exam-scope-practice-3',
      subjectId: 'life-orientation',
      title: 'Section B (Compulsory, Extract-Based)',
      minutes: 40,
      blocks: [
        { id: 'pr3s-b-h1', type: 'heading', level: 2, text: 'Section B — Question 2 (Physical Fitness & Health) and Question 3 (Sexuality & Personal Values)' },
        { id: 'pr3s-b-q2-h', type: 'heading', level: 3, text: 'Question 2: Physical Fitness & Health' },
        {
          id: 'pr3s-b-q2-extract',
          type: 'quote',
          text: 'Infographic description: A simple two-column infographic titled "Moving vs Sitting" contrasts a stick figure walking (labelled with ticks: "stronger heart", "better mood", "costs nothing") against a stick figure sitting at a screen (labelled with crosses: "higher disease risk", "lower mood", "weaker muscles"). A caption below reads: "You don\'t need a gym. You need to move." (Composed infographic description for this paper.)',
        },
        {
          id: 'pr3s-b-q2',
          type: 'questions',
          qa: [
            { n: '2.1', q: 'According to the infographic, state TWO benefits of regular movement/exercise.', marks: 2, a: ['A stronger heart (improved cardiovascular fitness).', 'A better mood (emotional benefits of exercise).'] },
            { n: '2.2', q: 'Explain, with reference to the infographic, why a sedentary lifestyle is associated with "higher disease risk".', marks: 4, a: 'A sedentary lifestyle, as shown by the sitting figure in the infographic, involves little physical activity, which increases the risk of lifestyle diseases such as obesity, type 2 diabetes, hypertension and cardiovascular disease, since the body is not being regularly challenged to maintain cardiovascular and muscular fitness.' },
            { n: '2.3', q: 'The caption states, "You don\'t need a gym. You need to move." Discuss THREE cost-free exercise habits that support this statement.', marks: 6, a: ['Walking or jogging outdoors, which requires no equipment or membership.', 'Bodyweight exercises at home, such as push-ups, squats and planks.', 'Playing informal sport with friends or family in a park or on school grounds.'] },
            { n: '2.4', q: 'Analyse why the emotional benefit shown in the infographic ("better mood") occurs during exercise.', marks: 4, a: 'Exercise triggers the release of endorphins, chemicals in the brain that improve mood and act as natural painkillers. Regular physical activity also reduces stress and anxiety, builds self-esteem through a sense of achievement, and, where it involves team sport, builds social connection — together producing the improved mood the infographic depicts.' },
          ],
        },
        { id: 'pr3s-b-q3-h', type: 'heading', level: 3, text: 'Question 3: Sexuality, Decision-Making and Personal Values' },
        {
          id: 'pr3s-b-q3-extract',
          type: 'quote',
          text: 'Extract: "Kagiso, 16, writes in a school magazine: \'A lot of people my age think saying no makes you boring or immature. I used to think that too, until I actually thought about what matters to me — my family, my faith, and my own plans for the future. Now when I feel pressure, I ask myself: does this match what I actually believe, or am I just scared of what people will say? That question has helped me more than anything else.\'" (Composed scenario for this paper.)',
        },
        {
          id: 'pr3s-b-q3',
          type: 'questions',
          qa: [
            { n: '3.1', q: 'Identify the personal values Kagiso mentions in the extract.', marks: 2, a: 'Family, faith/religion, and personal/future plans (career goals).' },
            { n: '3.2', q: 'Explain how Kagiso\'s question — "does this match what I actually believe" — reflects the role of personal values in decision-making.', marks: 4, a: 'Kagiso is using his personal values as an internal standard to measure a decision against, rather than simply reacting to social pressure in the moment. This reflects how a clear sense of values gives a young person a stable reference point for responsible decision-making, helping them choose based on what genuinely matters to them rather than on fear of others\' opinions.' },
            { n: '3.3', q: 'Discuss how understanding religious ethics, as referenced by Kagiso\'s mention of "my faith", can strengthen a young person\'s resolve to resist pressure towards premature sexual activity.', marks: 6, a: 'Most major religions teach respect for the dignity and bodily autonomy of every person and often emphasise self-discipline, which can give a young person an additional, values-based foundation for confidently resisting pressure — as Kagiso describes, measuring pressure against his faith alongside his other values. However, because South Africa is a diverse, multi-faith society, this must be balanced with respect for the personal choices of others, so that religious belief empowers an individual\'s own decision rather than being used to shame or coerce someone else.' },
            { n: '3.4', q: 'Suggest TWO practical assertiveness techniques Kagiso could use if he directly needs to refuse pressure from a peer.', marks: 4, a: ['Use a clear, direct statement such as "I don\'t want to do that" rather than a vague or apologetic refusal.', 'Calmly repeat the refusal if the pressure continues, and remove himself from the situation if necessary.'] },
          ],
        },
        { id: 'pr3s-b-total', type: 'callout', text: 'TOTAL SECTION B: 40' },
      ],
    },

    // ── Section C ─────────────────────────────────────────────────────────
    {
      id: 'lo-pr3scope-section-c',
      chapterId: 'lo-exam-scope-practice-3',
      subjectId: 'life-orientation',
      title: 'Section C — Answer Any TWO of Three (Q4, Q5, Q6)',
      minutes: 40,
      blocks: [
        { id: 'pr3s-c-h1', type: 'heading', level: 2, text: 'Section C' },
        {
          id: 'pr3s-c-instructions',
          type: 'callout',
          text: 'Instruction: Answer any TWO of the following THREE questions. Your response must be in essay form, written in full sentences.',
        },
        { id: 'pr3s-c-q4-h', type: 'heading', level: 3, text: 'Question 4: Volunteerism and Civic Responsibility' },
        {
          id: 'pr3s-c-q4',
          type: 'questions',
          qa: [
            {
              n: '4',
              context: 'Write an essay discussing volunteerism and civic responsibility.',
              q: 'Critically discuss the relationship between volunteering, the development of social thinking skills, the building of self-identity, and the benefits (and limits) of youth volunteering to a community. (16)',
              marks: 16,
              a: 'Volunteering builds social thinking skills — the ability to understand and respond appropriately to the needs of others — because it requires young people to cooperate within organisations, read the needs of people in different circumstances to their own, and build empathy through direct contact with hardship. This same process contributes meaningfully to a young volunteer\'s self-identity: exposure to new environments and challenges helps them discover genuine values, strengths and interests, building the confidence and sense of purpose central to identity formation in adolescence, and sometimes revealing career interests the volunteer did not know they had. Communities gain real, practical benefits from this involvement, such as tutoring or food distribution that they might not otherwise have the capacity to provide, and the energy of young volunteers can inspire broader civic participation. These benefits are not automatic, however: poorly organised or purely once-off volunteering can fail to create lasting value, and communities benefit most when volunteer programmes are well-supported, properly coordinated and sustained over time rather than treated as a short-term gesture.',
            },
          ],
        },
        { id: 'pr3s-c-q5-h', type: 'heading', level: 3, text: 'Question 5: Doping in Sport' },
        {
          id: 'pr3s-c-q5',
          type: 'questions',
          qa: [
            {
              n: '5',
              context: 'Write an essay discussing doping in sport.',
              q: 'Analyse why athletes choose to dope despite the serious health risks involved, and evaluate how effectively sports administration bodies enforce anti-doping rules. (16)',
              marks: 16,
              a: 'Athletes choose to dope despite the risks because the perceived benefits — winning, securing sponsorship or prize money, recovering faster from injury, or simply keeping up with rivals believed to be doping — can feel more immediate and concrete than the long-term health consequences. Those consequences are nonetheless severe: anabolic steroids can damage the liver, kidneys and heart and cause severe mood disturbances; stimulants can cause irregular heartbeat and heightened stroke risk; and blood-doping methods can thicken the blood, increasing the risk of clots, stroke and heart failure, with some methods carrying a risk of sudden death during intense exertion. Sports administration bodies have mixed success enforcing anti-doping rules: where testing is rigorous, randomised and year-round, and sanctions are applied transparently regardless of an athlete\'s profile, enforcement is reasonably effective; however, maladministration — including corruption, cover-ups, or protecting high-profile athletes to preserve organisational reputation and revenue — and under-resourced testing in poorer federations create real loopholes. Overall, enforcement remains only as strong as the integrity and resourcing of the bodies responsible for it, which is why ongoing education about doping\'s health and ethical consequences is an essential complement to testing and sanctions, rather than a substitute for them.',
            },
          ],
        },
        { id: 'pr3s-c-q6-h', type: 'heading', level: 3, text: 'Question 6: Assertiveness and Personal Boundaries' },
        {
          id: 'pr3s-c-q6',
          type: 'questions',
          qa: [
            {
              n: '6',
              context: 'Write an essay discussing assertiveness and personal boundaries.',
              q: 'Discuss why peer pressure can make it difficult for a young person to say "no", how assertiveness skills can be used to resist pressure towards premature sexual activity, and how religious ethics can play a supporting role in this process. (16)',
              marks: 16,
              a: 'Peer pressure makes exercising the right to say "no" genuinely difficult for many young people, through fear of rejection, low self-esteem, power imbalances within relationships, and cultural or gender norms that discourage refusal — pressures that can feel especially intense during adolescence, when acceptance by peers matters a great deal. Nonetheless, every person retains the right to refuse any activity, including sexual activity, without being coerced or punished, and exercising this right builds self-respect and personal boundaries while protecting against real consequences such as unplanned pregnancy or sexually transmitted infections. Assertiveness skills translate this right into practical action: clear, direct statements, confident body language, calmly repeated refusals under continued pressure, and removing oneself from an unsafe situation all make a "no" more effective and more likely to be respected. Religious ethics can play a genuinely supporting role here, since most major faiths teach respect for the dignity and bodily autonomy of every person and often emphasise self-discipline, giving an individual a further values-based reason to hold their boundary. In a diverse, multi-faith South African society, however, this must remain a matter of personal choice, so that religious belief strengthens an individual\'s own resolve rather than becoming a tool others use to pressure or shame them.',
            },
          ],
        },
        { id: 'pr3s-c-total', type: 'callout', text: 'TOTAL SECTION C: 40 | GRAND TOTAL: 100' },
      ],
    },
  ],
};
