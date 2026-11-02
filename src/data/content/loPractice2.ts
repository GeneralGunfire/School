import type { Chapter } from '@/lib/types';

/**
 * Composed practice paper #2 — not an official past paper. Built to match
 * the CAPS Grade 10 LO exam format, covering topics the two real past
 * papers in this set did not focus on: gender-based violence/relationships,
 * nutrition and lifestyle diseases, substance abuse, and diversity and
 * discrimination.
 */
export const LO_PRACTICE_PAPER_2: Chapter = {
  id: 'lo-practice-paper-2',
  subjectId: 'life-orientation',
  title: 'Practice Paper 2: Health, Diversity and Relationships',
  summary: 'Composed practice paper, 100 marks, 2 hours 30 minutes. Section A (compulsory): relationships, gender and emotional intelligence. Section B (compulsory): nutrition/lifestyle diseases and substance abuse. Section C (choose 2 of 3): diversity and discrimination, gender-based violence, and physical fitness and safety.',
  category: 'Past Papers',
  lessons: [
    // ── Section A ─────────────────────────────────────────────────────────
    {
      id: 'lo-pr2-section-a',
      chapterId: 'lo-practice-paper-2',
      subjectId: 'life-orientation',
      title: 'Section A (Compulsory)',
      minutes: 30,
      blocks: [
        { id: 'pr2-a-h1', type: 'heading', level: 2, text: 'Section A — Question 1 (Compulsory)' },
        {
          id: 'pr2-a-callout',
          type: 'callout',
          text: 'Practice paper — composed to match the CAPS exam format, not an official past paper. All questions and model answers are composed to reflect real CAPS Grade 10 Life Orientation content and typical exam style/mark allocations.',
        },
        {
          id: 'pr2-a-qa',
          type: 'questions',
          qa: [
            {
              n: '1.1.1',
              context: 'Choose the most correct answer and write only the letter (A–D) next to the question number.',
              q: 'An unequal power relation in a relationship is characterised by: A) Shared decision-making B) One partner having significantly more control and authority than the other C) Mutual respect D) Open communication',
              marks: 1,
              a: 'B) One partner having significantly more control and authority than the other',
            },
            { n: '1.1.2', q: 'A lifestyle disease is best defined as a disease: A) Caused only by infection B) Linked to how a person lives, such as diet and physical activity C) That cannot be prevented D) Found only in elderly people', marks: 1, a: 'B) Linked to how a person lives, such as diet and physical activity' },
            { n: '1.1.3', q: 'Discrimination based on gender is called: A) Racism B) Ableism C) Sexism D) Ageism', marks: 1, a: 'C) Sexism' },
            { n: '1.1.4', q: 'The compulsive use of a substance despite harmful consequences is called: A) Peer pressure B) Addiction C) Resilience D) Self-regulation', marks: 1, a: 'B) Addiction' },
            { n: '1.1.5', q: 'Cardiovascular endurance is best developed through activities such as: A) Stretching B) Weightlifting only C) Running, swimming and cycling D) Sitting for long periods', marks: 1, a: 'C) Running, swimming and cycling' },
            { n: '1.2.1', context: 'Give one word/phrase for the following statements.', q: 'The socially constructed roles and characteristics a society considers appropriate for men and women.', marks: 1, a: 'Gender' },
            { n: '1.2.2', q: 'A preconceived, usually negative, opinion about a person or group not based on fact.', marks: 1, a: 'Prejudice' },
            { n: '1.2.3', q: 'Poor nutrition resulting from an insufficient, excessive or unbalanced diet.', marks: 1, a: 'Malnutrition' },
            { n: '1.2.4', q: 'The influence a peer group exerts to encourage someone to conform to its norms.', marks: 1, a: 'Peer pressure' },
            { n: '1.2.5', q: 'Every person\'s right to refuse to participate in any activity without being coerced or punished for it.', marks: 1, a: 'The right to say "no"' },
            {
              n: '1.3.1',
              context: 'Answer the following questions in full sentences.',
              q: 'Name TWO forms of discrimination.',
              marks: 2,
              a: ['Racism — discrimination based on race or ethnicity.', 'Xenophobia — discrimination against foreign nationals.'],
            },
            { n: '1.3.2', q: 'State TWO common lifestyle diseases.', marks: 2, a: ['Type 2 diabetes', 'Hypertension (high blood pressure)'] },
            { n: '1.3.3', q: 'Explain the difference between masculinity and femininity.', marks: 4, a: 'Masculinity refers to the set of characteristics, behaviours and roles traditionally associated with being male, while femininity refers to the set of characteristics, behaviours and roles traditionally associated with being female — both are shaped by social and cultural expectations rather than being fixed by biology alone.' },
            { n: '1.3.4', q: 'Suggest TWO reasons why a teenager might struggle to resist peer pressure to use substances.', marks: 4, a: ['Low self-esteem, making the teenager more dependent on peer approval and acceptance.', 'Fear of social exclusion or being mocked/rejected by their friend group if they refuse.'] },
          ],
        },
        { id: 'pr2-a-total', type: 'callout', text: 'TOTAL SECTION A: 20' },
      ],
    },

    // ── Section B ─────────────────────────────────────────────────────────
    {
      id: 'lo-pr2-section-b',
      chapterId: 'lo-practice-paper-2',
      subjectId: 'life-orientation',
      title: 'Section B (Compulsory)',
      minutes: 35,
      blocks: [
        { id: 'pr2-b-h1', type: 'heading', level: 2, text: 'Section B — Question 2 (Nutrition and Lifestyle Diseases) and Question 3 (Substance Abuse)' },
        { id: 'pr2-b-q2-h', type: 'heading', level: 3, text: 'Question 2: Nutrition and Lifestyle Diseases' },
        {
          id: 'pr2-b-q2',
          type: 'questions',
          qa: [
            {
              n: '2.1',
              context: 'Read the extract below and answer the questions that follow. "Health experts warn that lifestyle diseases such as obesity, type 2 diabetes and hypertension are rising sharply among South African teenagers, linked to diets high in sugar, salt and processed food, combined with increasing screen time and reduced physical activity."',
              q: 'Define the term "lifestyle disease".',
              marks: 2,
              a: 'A lifestyle disease is a disease linked to the way a person lives — diet, physical activity levels and substance use — rather than caused by infection, for example type 2 diabetes and hypertension.',
            },
            { n: '2.2', q: 'State FOUR lifestyle diseases mentioned or related to those in the extract.', marks: 4, a: ['Obesity', 'Type 2 diabetes', 'Hypertension', 'Cardiovascular disease'] },
            { n: '2.3', q: 'Discuss TWO causes of lifestyle diseases identified in the extract.', marks: 4, a: ['Diets high in sugar, salt and processed food provide excess calories and poor nutrition, contributing to obesity and related diseases.', 'Increasing screen time and reduced physical activity mean the body burns fewer calories and loses cardiovascular fitness over time.'] },
            { n: '2.4', q: 'Discuss THREE ways a teenager can prevent lifestyle diseases.', marks: 6, a: ['Eat a balanced diet rich in fruit, vegetables, whole grains and lean protein.', 'Engage in regular physical activity, at least 30 minutes most days.', 'Limit screen time and avoid prolonged periods of sitting.'] },
            { n: '2.5', q: 'Critically discuss why rising lifestyle diseases among teenagers is a concern for the future of South Africa\'s healthcare system.', marks: 4, a: 'Lifestyle diseases developing earlier in life mean more years of chronic illness, higher long-term healthcare costs, and reduced workforce productivity, placing a growing strain on an already under-resourced public healthcare system — though this trend is preventable through early education and lifestyle changes, which makes schools an important point of intervention.' },
          ],
        },
        { id: 'pr2-b-q3-h', type: 'heading', level: 3, text: 'Question 3: Substance Abuse' },
        {
          id: 'pr2-b-q3',
          type: 'questions',
          qa: [
            {
              n: '3.1',
              context: 'Read the extract below and answer the questions that follow. "A 2024 national survey found that a significant number of high school learners reported having tried alcohol or other substances by Grade 10, most commonly citing peer pressure, curiosity and stress as reasons. Experts stress that early intervention programmes in schools can significantly reduce long-term substance abuse."',
              q: 'Define substance abuse.',
              marks: 2,
              a: 'Substance abuse is the harmful or hazardous use of psychoactive substances, including alcohol and illegal drugs, that negatively affects a person\'s health, relationships and daily functioning.',
            },
            { n: '3.2', q: 'State THREE reasons given in the extract or elsewhere for why teenagers use substances.', marks: 3, a: ['Peer pressure', 'Curiosity/experimentation', 'Escaping stress or difficult circumstances'] },
            { n: '3.3', q: 'Discuss TWO effects of substance abuse on a teenager\'s life.', marks: 4, a: ['Physical effects, including impaired brain development, since the teenage brain is still maturing, and increased risk of addiction.', 'Social effects, including breakdown of relationships with family and friends, and potential involvement in crime.'] },
            { n: '3.4', q: 'Discuss THREE strategies a school-based intervention programme could use to reduce substance abuse among learners, as suggested in the extract.', marks: 6, a: ['Provide honest, fact-based education on the risks of substance abuse rather than relying on fear alone.', 'Offer confidential counselling support for learners already struggling with substance use or the stress that leads to it.', 'Build learners\' assertiveness and self-esteem so that they feel more able to resist peer pressure.'] },
            { n: '3.5', q: 'Critically evaluate why early intervention, as mentioned in the extract, is more effective than addressing substance abuse later.', marks: 5, a: 'Early intervention reaches learners before patterns of use become habitual or lead to addiction, and it builds protective skills — such as assertiveness and healthy coping strategies — while peer and social pressures are still forming rather than already entrenched; waiting until later often means addressing both the substance use and its accumulated social, academic and health consequences at the same time, which is considerably harder to reverse.' },
          ],
        },
        { id: 'pr2-b-total', type: 'callout', text: 'TOTAL SECTION B: 40' },
      ],
    },

    // ── Section C ─────────────────────────────────────────────────────────
    {
      id: 'lo-pr2-section-c',
      chapterId: 'lo-practice-paper-2',
      subjectId: 'life-orientation',
      title: 'Section C — Answer Any TWO of Three (Q4, Q5, Q6)',
      minutes: 40,
      blocks: [
        { id: 'pr2-c-h1', type: 'heading', level: 2, text: 'Section C' },
        { id: 'pr2-c-instructions', type: 'callout', text: 'Answer any TWO questions in this section. Your response must be in essay form. Marks will only be allocated for full sentences.' },
        { id: 'pr2-c-q4-h', type: 'heading', level: 3, text: 'Question 4: Diversity and Discrimination' },
        {
          id: 'pr2-c-q4',
          type: 'questions',
          qa: [
            {
              n: '4.1',
              context: 'Study the scenario below and write an essay on diversity and discrimination. "At a Gauteng high school, a group of learners from different cultural and religious backgrounds report feeling excluded from certain social groups and occasionally mocked for their accents or traditional dress. The school has decided to launch a diversity awareness programme in response."',
              q: 'Define discrimination.',
              marks: 2,
              a: 'Discrimination is the unjust or unfair treatment of a person or group based on characteristics such as race, gender, religion, disability or sexual orientation.',
            },
            { n: '4.2', q: 'State FOUR forms of discrimination that could apply to this scenario or more broadly in South African society.', marks: 4, a: ['Racism', 'Xenophobia (if targeting foreign learners)', 'Religious discrimination', 'Discrimination based on culture/language/accent'] },
            { n: '4.3', q: 'Discuss TWO impacts discrimination could have on the excluded learners described in the scenario.', marks: 6, a: ['Psychological harm — lowered self-esteem, anxiety or depression resulting from repeated exclusion and mockery.', 'Social exclusion — the learners may withdraw from school activities and struggle to build a sense of belonging, which can also affect academic performance.'] },
            { n: '4.4', q: 'Critically discuss how the school\'s diversity awareness programme could help combat discrimination, and suggest ONE additional strategy the school should consider.', marks: 8, a: 'A diversity awareness programme can help by building understanding and empathy among learners who may discriminate out of ignorance rather than deliberate malice, and it signals that the school takes inclusion seriously; however, awareness alone is often not enough to change entrenched behaviour, so the school should also consider a clear, consistently enforced code of conduct with real consequences for discriminatory behaviour, so that the values taught in the programme are backed up by accountability.' },
          ],
        },
        { id: 'pr2-c-q5-h', type: 'heading', level: 3, text: 'Question 5: Gender-Based Violence' },
        {
          id: 'pr2-c-q5',
          type: 'questions',
          qa: [
            {
              n: '5.1',
              context: 'Study the extract below and write an essay on gender-based violence. "South Africa continues to record some of the highest rates of gender-based violence in the world. Advocacy groups stress that changing harmful gender norms and empowering young people to understand consent and healthy relationships from an early age are essential to reducing GBV in the long term."',
              q: 'Define gender-based violence.',
              marks: 2,
              a: 'Gender-based violence (GBV) refers to harmful acts directed at an individual based on their gender, including physical, sexual, emotional and economic abuse.',
            },
            { n: '5.2', q: 'State FOUR reasons why individuals may feel unable to exercise their right to say "no" in a relationship.', marks: 4, a: ['Fear of rejection or losing the relationship.', 'Peer pressure to conform to what friends are doing.', 'Low self-esteem and a need for approval.', 'Power imbalances in the relationship or fear of retaliation.'] },
            { n: '5.3', q: 'Discuss TWO ways that harmful gender norms, as mentioned in the extract, contribute to gender-based violence.', marks: 6, a: ['Norms that teach some men they should dominate or control relationships can normalise controlling or violent behaviour towards partners.', 'Norms that discourage women from asserting their boundaries can make it harder for victims to recognise or report abuse, allowing harmful patterns to continue.'] },
            { n: '5.4', q: 'Critically discuss how understanding consent and healthy relationships from an early age, as the extract suggests, could help reduce GBV in the long term.', marks: 8, a: 'Teaching consent and healthy relationship skills early gives young people a clear, shared understanding of respect and boundaries before harmful patterns have a chance to form, which can prevent abusive behaviour rather than only responding to it after the fact; this is a long-term, generational strategy, however, and must be paired with stronger law enforcement, support services for survivors, and community-level efforts to shift entrenched gender norms, since education alone cannot address every driver of GBV.' },
          ],
        },
        { id: 'pr2-c-q6-h', type: 'heading', level: 3, text: 'Question 6: Physical Fitness and Safety' },
        {
          id: 'pr2-c-q6',
          type: 'questions',
          qa: [
            {
              n: '6.1',
              context: 'Study the scenario below and write an essay on physical fitness and safety. "A Grade 10 learner wants to start a regular exercise routine to improve fitness and reduce stress, but is unsure how to train safely and effectively without access to a gym or coach."',
              q: 'Define physical fitness.',
              marks: 2,
              a: 'Physical fitness is the ability of the body to function efficiently and effectively in work and leisure activities, and to resist disease.',
            },
            { n: '6.2', q: 'Name FOUR components of physical fitness.', marks: 4, a: ['Cardiovascular endurance', 'Muscular strength', 'Muscular endurance', 'Flexibility (or body composition)'] },
            { n: '6.3', q: 'Discuss THREE safety precautions the learner in the scenario should follow when starting a new exercise routine.', marks: 6, a: ['Warm up before activity to prepare muscles and joints and reduce injury risk.', 'Progress gradually, avoiding sudden increases in intensity or duration, since the learner is new to regular training.', 'Stay hydrated and allow adequate rest between sessions to support recovery.'] },
            { n: '6.4', q: 'Analyse TWO benefits the learner in the scenario is likely to experience from a consistent exercise routine, beyond physical fitness.', marks: 8, a: ['Reduced stress and improved mood, since regular physical activity releases endorphins and provides a healthy outlet for the pressures of school life.', 'Improved concentration, energy levels and sleep quality, which can in turn support better academic performance, creating a positive cycle between physical activity and schoolwork.'] },
          ],
        },
        { id: 'pr2-c-total', type: 'callout', text: 'TOTAL SECTION C: 40 | GRAND TOTAL: 100' },
      ],
    },
  ],
};
