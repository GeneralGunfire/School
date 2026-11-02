import type { Chapter } from '@/lib/types';

/**
 * Mock paper for the November exam scope — composed to match the CAPS
 * Grade 10 LO exam format exactly (100 marks, 2h30, Section A compulsory
 * MCQ/short-answer, Section B compulsory extract-based, Section C choose
 * 2 of 3 essay-style), targeting every topic on the teacher's November
 * exam scope. This is paper 1 of the 5-paper set for this topic (the
 * revision guide's own Lesson 1 explains the grouping); papers 2–4 are
 * loExamScopePractice2.ts through loExamScopePractice4.ts, and the 5th
 * paper is the real, unmodified loPastPaper1.ts.
 */
export const LO_EXAM_SCOPE_MOCK: Chapter = {
  id: 'lo-exam-scope-mock',
  subjectId: 'life-orientation',
  title: 'November Exam Scope — Mock Paper',
  summary: 'Composed mock paper, 100 marks, 2 hours 30 minutes, built specifically to match the November exam scope. Section A (compulsory): study skills, careers/AI, human rights, youth risk behaviour. Section B (compulsory, extract-based): fitness/health and sexuality/career planning. Section C (choose 2 of 3 essays): volunteerism, doping, assertiveness.',
  category: 'November Exam Scope',
  lessons: [
    // ── Section A ─────────────────────────────────────────────────────────
    {
      id: 'lo-mock-section-a',
      chapterId: 'lo-exam-scope-mock',
      subjectId: 'life-orientation',
      title: 'Section A (Compulsory)',
      minutes: 30,
      blocks: [
        { id: 'mock-a-h1', type: 'heading', level: 2, text: 'Section A — Question 1 (Compulsory)' },
        {
          id: 'mock-a-callout',
          type: 'callout',
          text: 'Mock paper — composed specifically to match the November exam scope, not an official past paper. All questions and model answers are composed to reflect CAPS Grade 10 content and typical exam-style mark allocations for this scope.',
        },
        {
          id: 'mock-a-qa',
          type: 'questions',
          qa: [
            {
              n: '1.1.1',
              context: 'Various options are provided as possible answers to the following questions. Choose the answer and write only the letter (A–D) next to the question number.',
              q: 'Trying to learn a large amount of work the night before a test, relying on short-term memory, is called: A) Spaced repetition B) Skimming C) Cramming D) Self-testing',
              marks: 1,
              a: 'C) Cramming',
            },
            { n: '1.1.2', q: 'A career in manufacturing (e.g. a factory worker processing raw materials into finished goods) belongs to which economic sector? A) Primary B) Secondary C) Tertiary D) Informal', marks: 1, a: 'B) Secondary' },
            { n: '1.1.3', q: 'Unequal prize money and media coverage between men\'s and women\'s sport is an example of: A) Fair play B) Gender bias in sport C) Doping D) Civic responsibility', marks: 1, a: 'B) Gender bias in sport' },
            { n: '1.1.4', q: 'Which of the following is NOT typically considered a protective factor against adolescent risk behaviour? A) High self-esteem B) Strong family relationships C) Easy access to substances D) Involvement in structured sport', marks: 1, a: 'C) Easy access to substances' },
            { n: '1.1.5', q: 'NSFAS is best described as: A) A private student loan company B) A government-funded financial aid scheme for tertiary study C) A TVET college D) A sports bursary only', marks: 1, a: 'B) A government-funded financial aid scheme for tertiary study' },
            { n: '1.2.1', context: 'Give one word or phrase for the following statements.', q: 'Reviewing material repeatedly over increasing intervals of time to move it into long-term memory.', marks: 1, a: 'Spaced repetition' },
            { n: '1.2.2', q: 'The part of the economy that provides services rather than physical goods.', marks: 1, a: 'The tertiary sector' },
            { n: '1.2.3', q: 'A preconceived, usually negative, opinion or attitude towards a person or group not based on fact.', marks: 1, a: 'Prejudice' },
            { n: '1.2.4', q: 'A state in which a household lacks the financial resources to meet basic needs.', marks: 1, a: 'Poverty' },
            { n: '1.2.5', q: 'Computer systems that can perform tasks normally requiring human intelligence.', marks: 1, a: 'Artificial intelligence (AI)' },
            {
              n: '1.3.1',
              context: 'Answer the following questions in full sentences.',
              q: 'Explain the difference between cramming and effective, spaced study methods.',
              marks: 4,
              a: 'Cramming is trying to learn a large amount of work in a short period, usually the night before a test, relying mostly on short-term memory. Effective, spaced study methods spread learning out over time with repeated review, building genuine long-term understanding rather than information that is quickly forgotten.',
            },
            {
              n: '1.3.2',
              q: 'Identify TWO sources of tertiary funding available to a Grade 12 learner wishing to study further.',
              marks: 2,
              a: ['NSFAS (National Student Financial Aid Scheme)', 'A bursary from a company, government department or institution'],
            },
            {
              n: '1.3.3',
              q: 'Discuss TWO ways in which AI and automation are likely to affect the South African job market.',
              marks: 4,
              a: ['AI and automation are likely to reduce demand for jobs built mainly on routine, repetitive tasks, since machines or software can perform these more efficiently.', 'AI is also likely to create new roles in fields such as data analysis and digital content, and to increase the general demand for digital literacy and adaptability across almost all career fields, not only technical ones.'],
            },
            {
              n: '1.3.4',
              q: 'State THREE reasons why adolescents may engage in risk behaviour.',
              marks: 3,
              a: ['Peer pressure and the desire to fit in.', 'Curiosity and a desire to experiment.', 'Low self-esteem, or a desire for independence and to test boundaries set by adults.'],
            },
            {
              n: '1.3.5',
              q: 'Define discrimination and name ONE form it can take.',
              marks: 3,
              a: 'Discrimination is unjust and unfair treatment of a person or group based on characteristics such as race, gender, religion, disability or sexual orientation. One form: racism, sexism, xenophobia, ableism, ageism or homophobia (any one).',
            },
          ],
        },
        { id: 'mock-a-total', type: 'callout', text: 'TOTAL SECTION A: 20' },
      ],
    },

    // ── Section B ─────────────────────────────────────────────────────────
    {
      id: 'lo-mock-section-b',
      chapterId: 'lo-exam-scope-mock',
      subjectId: 'life-orientation',
      title: 'Section B (Compulsory, Extract-Based)',
      minutes: 40,
      blocks: [
        { id: 'mock-b-h1', type: 'heading', level: 2, text: 'Section B — Question 2 (Physical Fitness & Health) and Question 3 (Sexuality & Career Planning)' },
        { id: 'mock-b-q2-h', type: 'heading', level: 3, text: 'Question 2: Physical Fitness & Health' },
        {
          id: 'mock-b-q2-extract',
          type: 'quote',
          text: 'Extract: "A growing number of Grade 10 learners report spending more than six hours a day on their phones or in front of a screen, often sitting for the entire time. Health professionals warn that this sedentary pattern — even among otherwise healthy teenagers — is linked to a higher risk of future lifestyle diseases, and that the emotional benefits of regular movement are often the first thing lost when screen time replaces physical activity. Encouragingly, experts note that effective exercise does not need to be expensive: a brisk walk, a skipping rope or an informal game of soccer in a local park can deliver most of the same benefits as a gym membership." (Adapted, general health reporting.)',
        },
        {
          id: 'mock-b-q2',
          type: 'questions',
          qa: [
            { n: '2.1', q: 'Define the term "sedentary lifestyle", using the extract to support your answer.', marks: 2, a: 'A sedentary lifestyle is a pattern of daily living involving little or no physical activity, characterised by long periods of sitting — as described in the extract, where learners spend more than six hours a day sitting in front of a screen.' },
            { n: '2.2', q: 'State THREE health risks of a sedentary lifestyle mentioned or implied in the extract.', marks: 3, a: ['Higher risk of future lifestyle diseases.', 'Loss of the emotional benefits normally gained from regular movement.', 'Reduced overall physical fitness from extended inactivity (implied by the health professionals\' warning).'] },
            { n: '2.3', q: 'Explain TWO emotional benefits of exercise that a learner loses when screen time replaces physical activity, as suggested by the extract.', marks: 4, a: ['The mood-boosting effect of endorphins released during exercise, which helps reduce stress and anxiety.', 'The sense of achievement and improved self-esteem that comes from regular physical activity and, where applicable, the social connection built through team sport.'] },
            { n: '2.4', q: 'Using the extract, discuss THREE cost-free exercise habits a Grade 10 learner could realistically adopt, and explain why cost-free options are important.', marks: 6, a: 'The extract names a brisk walk, a skipping rope and an informal game of soccer in a park as cost-free options. These are important because gym memberships and sports equipment are unaffordable for many South African households, yet — as the extract states — these cost-free activities can deliver most of the same cardiovascular and emotional benefits as paid options, meaning financial hardship need not be a barrier to good health.' },
          ],
        },
        { id: 'mock-b-q3-h', type: 'heading', level: 3, text: 'Question 3: Sexuality & Career Planning' },
        {
          id: 'mock-b-q3-extract',
          type: 'quote',
          text: 'Extract: "Thandi is in Grade 10. Her boyfriend has been pressuring her to have sex, saying that \'everyone else their age is already doing it.\' Thandi feels confused: she is curious, but she also knows she is not ready, and she is worried about what might happen to the relationship if she refuses. At the same time, Thandi has started thinking seriously about her future career in IT, after reading that demand for digital skills keeps growing even as some other jobs become automated. She has started researching NSFAS and looking into which subjects she needs to keep studying in Grade 11 and 12 to qualify for a computer science degree." (Composed scenario for this paper.)',
        },
        {
          id: 'mock-b-q3',
          type: 'questions',
          qa: [
            { n: '3.1', q: 'Identify the decision-making pressure Thandi is facing regarding her sexuality, according to the extract.', marks: 2, a: 'Thandi is facing peer and relationship pressure to have sex before she feels ready, based on the claim that "everyone else" her age is already doing it, along with a fear that refusing could harm her relationship.' },
            { n: '3.2', q: 'Explain TWO steps in a responsible decision-making process Thandi could apply to this situation.', marks: 4, a: ['She should gather accurate information about the real consequences of sexual activity (e.g. pregnancy, STIs) rather than being swayed only by what she is told others are doing.', 'She should weigh the decision against her own personal values and readiness, rather than her boyfriend\'s pressure or a generalised claim about peers, and take responsibility for whichever choice she makes.'] },
            { n: '3.3', q: 'Discuss how Thandi exercising her right to say "no" could protect her, with reference to the extract.', marks: 6, a: 'Exercising her right to say "no" protects Thandi from the physical consequences of activity she is not ready for, such as unplanned pregnancy or sexually transmitted infections, and from emotional consequences such as regret. It also reinforces her self-respect and personal boundaries: a relationship that cannot tolerate a clear "no" is, by definition, not built on the mutual respect a healthy relationship requires, which is a more useful way for Thandi to judge the relationship than her boyfriend\'s pressure.' },
            { n: '3.4', q: 'Using the extract, discuss why lifelong learning and awareness of job market trends — such as Thandi\'s research into IT and digital skills — are valuable career planning strategies.', marks: 6, a: 'As the extract shows, Thandi is responding to the trend that digital skills remain in growing demand even as automation changes other jobs — exactly the kind of job market awareness Section A discusses. By researching funding (NSFAS) and the subjects required now, in Grade 10, she is building a realistic, informed career plan rather than reacting only once she reaches Grade 12. This lifelong-learning mindset — staying informed and adjusting her plan as trends and her own interests develop — will help her remain employable even if the specific skills in demand continue to shift.' },
          ],
        },
        { id: 'mock-b-total', type: 'callout', text: 'TOTAL SECTION B: 40' },
      ],
    },

    // ── Section C ─────────────────────────────────────────────────────────
    {
      id: 'lo-mock-section-c',
      chapterId: 'lo-exam-scope-mock',
      subjectId: 'life-orientation',
      title: 'Section C — Answer Any TWO of Three (Q4, Q5, Q6)',
      minutes: 40,
      blocks: [
        { id: 'mock-c-h1', type: 'heading', level: 2, text: 'Section C' },
        {
          id: 'mock-c-instructions',
          type: 'callout',
          text: 'Instruction: Answer any TWO of the following THREE questions. Your response must be in essay form, written in full sentences. Marks will only be allocated for full sentences/paragraphs, not bullet points.',
        },
        { id: 'mock-c-q4-h', type: 'heading', level: 3, text: 'Question 4: Volunteerism and Civic Responsibility' },
        {
          id: 'mock-c-q4',
          type: 'questions',
          qa: [
            {
              n: '4',
              context: 'Write an essay discussing volunteerism and civic responsibility.',
              q: 'Discuss how volunteering exercises social thinking skills, helps a young person build their own self-identity, and benefits the broader community. (16)',
              marks: 16,
              a: 'Volunteering exercises social thinking skills because it requires a young person to read and respond to the needs of people in circumstances different from their own, to cooperate within a team or organisation, and to build empathy through direct contact with people facing hardship rather than learning about it only in theory. Beyond these social skills, volunteering plays a significant role in shaping a young person\'s self-identity: exposure to new environments, people and challenges outside their usual routine helps them discover their genuine values, strengths and interests, and the confidence built through this exposure contributes to a stable sense of identity during adolescence. It can even reveal unexpected career interests, directly informing future career planning. The community benefits directly too, gaining practical support such as food distribution or tutoring that it may not otherwise have capacity to provide, and young volunteers bring fresh energy that can inspire wider participation. This community benefit, however, depends on volunteers being properly supported and the work being sustained rather than once-off, so that the contribution creates lasting value rather than a short-lived gesture.',
            },
          ],
        },
        { id: 'mock-c-q5-h', type: 'heading', level: 3, text: 'Question 5: Doping in Sport' },
        {
          id: 'mock-c-q5',
          type: 'questions',
          qa: [
            {
              n: '5',
              context: 'Write an essay discussing doping in sport.',
              q: 'Discuss the reasons athletes make the decision to dope, the health risks of doping, and how sports administration bodies attempt to enforce anti-doping rules. (16)',
              marks: 16,
              a: 'Athletes decide to dope for a range of interconnected reasons: intense pressure to win and secure sponsorships, prize money or national selection; the belief that rivals are already doping; pressure from coaches or team doctors; and a desire to recover faster from injury or extend a fading career. These pressures come at a serious cost to health — anabolic steroids can cause liver and kidney damage, heart disease and severe mood disturbances; stimulants can cause irregular heartbeat and heighten stroke risk; and blood-doping methods can thicken the blood, increasing the risk of clots and heart failure, with some methods carrying a risk of sudden death during intense exertion. Enforcing anti-doping rules is complicated by maladministration within sporting bodies, which may protect high-profile or medal-winning athletes from proper sanction to preserve organisational reputation and revenue, and by under-resourced testing agencies unable to test all athletes consistently, particularly in poorer federations. Effective enforcement therefore requires rigorous, randomised, year-round testing, transparent sanctions applied consistently regardless of an athlete\'s profile, and sustained education programmes addressing the ethical and health risks of doping before an athlete is ever tempted to use a banned substance.',
            },
          ],
        },
        { id: 'mock-c-q6-h', type: 'heading', level: 3, text: 'Question 6: Assertiveness and Personal Boundaries' },
        {
          id: 'mock-c-q6',
          type: 'questions',
          qa: [
            {
              n: '6',
              context: 'Write an essay discussing assertiveness and personal boundaries.',
              q: 'Discuss how peer pressure makes it difficult to exercise the right to say "no", how a young person can assertively resist pressure towards premature sexual activity, and the role religious ethics can play in strengthening this resolve. (16)',
              marks: 16,
              a: 'Peer pressure, whether direct or indirect, often makes it genuinely difficult for a young person to exercise their right to say "no" — fear of rejection, low self-esteem, power imbalances within a relationship, and cultural or gender norms that discourage refusal are all common barriers. Despite this, every individual has the right to refuse any activity, including sexual activity, without being coerced or punished, and exercising this right builds self-respect, reinforces personal boundaries, and protects against the real physical and emotional consequences of premature sexual activity, such as unplanned pregnancy or sexually transmitted infections. In practice, assertiveness skills support this right: using clear, direct statements, maintaining confident body language, calmly repeating a refusal if pressure continues, and removing oneself from an unsafe situation are all techniques that strengthen a young person\'s ability to say "no" convincingly and consistently. Understanding the ethical teachings of major religions on dignity, bodily autonomy and self-discipline can add a further values-based foundation to this resolve, giving an individual an additional reason to stand firm under pressure. Because South Africa is a diverse, multi-faith society, however, this understanding must be balanced with respect for personal choice, so that religious belief empowers an individual\'s own decision rather than being used by others to shame or coerce them.',
            },
          ],
        },
        { id: 'mock-c-total', type: 'callout', text: 'TOTAL SECTION C: 40 | GRAND TOTAL: 100' },
      ],
    },
  ],
};
