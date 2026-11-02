import type { Chapter } from '@/lib/types';

/**
 * Composed practice paper #2 for the November exam scope. Part of the
 * 5-paper set for this topic (see loExamScopeNov.ts Lesson 1). Varies
 * question style from the Mock Paper — more fill-in-the-blank and
 * "state/name" short-answer in Section A, a different extract pairing
 * in Section B (human rights/gender bias + study skills/careers combo).
 */
export const LO_EXAM_SCOPE_PRACTICE_2: Chapter = {
  id: 'lo-exam-scope-practice-2',
  subjectId: 'life-orientation',
  title: 'November Exam Scope — Practice Paper 2',
  summary: 'Composed practice paper, 100 marks, 2 hours 30 minutes, aligned to the November exam scope. Section A (compulsory): discrimination, multi-religious respect, gender bias in sport, poverty. Section B (compulsory, extract-based): study skills vs cramming, careers/AI/tertiary funding. Section C (choose 2 of 3 essays): volunteerism, doping, assertiveness.',
  category: 'November Exam Scope',
  lessons: [
    // ── Section A ─────────────────────────────────────────────────────────
    {
      id: 'lo-pr2scope-section-a',
      chapterId: 'lo-exam-scope-practice-2',
      subjectId: 'life-orientation',
      title: 'Section A (Compulsory)',
      minutes: 30,
      blocks: [
        { id: 'pr2s-a-h1', type: 'heading', level: 2, text: 'Section A — Question 1 (Compulsory)' },
        {
          id: 'pr2s-a-callout',
          type: 'callout',
          text: 'Practice Paper 2 of 4 — composed to match the November exam scope, not an official past paper.',
        },
        {
          id: 'pr2s-a-qa',
          type: 'questions',
          qa: [
            { n: '1.1.1', context: 'Choose the most correct answer and write only the letter (A–D) next to the question number.', q: 'A disease linked to lifestyle factors such as diet, inactivity or substance use, rather than infection, is called: A) An acute illness B) A genetic disorder C) A lifestyle disease D) An occupational hazard', marks: 1, a: 'C) A lifestyle disease' },
            { n: '1.1.2', q: 'Which of the following is an example of the primary economic sector? A) A bank teller B) A software developer C) A farmer D) A retail manager', marks: 1, a: 'C) A farmer' },
            { n: '1.1.3', q: 'The belief system centred on the Trinity — the Father, the Son and the Holy Spirit — is: A) Islam B) Judaism C) Christianity D) Hinduism', marks: 1, a: 'C) Christianity' },
            { n: '1.1.4', q: 'Unequal media coverage and sponsorship between men\'s and women\'s sport is best described as: A) Fair play B) Gender bias in sport C) Doping D) Multi-religious respect', marks: 1, a: 'B) Gender bias in sport' },
            { n: '1.1.5', q: 'Which strategy is MOST likely to help a learner remember work for an exam in the long term? A) Cramming the night before B) Spaced repetition over several weeks C) Re-reading notes once D) Avoiding past papers', marks: 1, a: 'B) Spaced repetition over several weeks' },
            { n: '1.2.1', context: 'Fill in the missing word(s).', q: 'A career that processes raw materials into finished goods, such as manufacturing, belongs to the ______ sector.', marks: 1, a: 'Secondary' },
            { n: '1.2.2', q: 'Unequal or unreliable access to sufficient, nutritious food is called ______.', marks: 1, a: 'Food insecurity' },
            { n: '1.2.3', q: 'The influence exerted by a peer group encouraging a person to conform to group norms is called ______.', marks: 1, a: 'Peer pressure' },
            { n: '1.2.4', q: 'A government-funded financial aid scheme that helps qualifying students pay for tertiary study is called ______.', marks: 1, a: 'NSFAS (National Student Financial Aid Scheme)' },
            { n: '1.2.5', q: 'Computer systems able to perform tasks that normally require human intelligence are known as ______.', marks: 1, a: 'Artificial intelligence (AI)' },
            {
              n: '1.3.1',
              context: 'Answer the following questions in full sentences.',
              q: 'State TWO forms discrimination can take in South African society.',
              marks: 2,
              a: ['Racism — discrimination based on race or ethnicity.', 'Sexism — discrimination based on gender.'],
            },
            {
              n: '1.3.2',
              q: 'Name TWO belief systems found in South Africa\'s multi-religious society, besides Christianity.',
              marks: 2,
              a: ['Islam', 'African Traditional Religion (also accept Judaism, Hinduism, Buddhism)'],
            },
            {
              n: '1.3.3',
              q: 'Explain why gender bias in sport is considered a human rights issue.',
              marks: 4,
              a: 'Gender bias in sport — such as unequal prize money, sponsorship or media coverage for men\'s and women\'s competitions — breaches the constitutional right to equality, which protects everyone from unfair discrimination on the grounds of gender, regardless of the field in which that discrimination occurs.',
            },
            {
              n: '1.3.4',
              q: 'Discuss TWO ways poverty can increase the likelihood that an adolescent engages in risk behaviour.',
              marks: 4,
              a: ['Limited access to safe, structured recreational activities leaves more unsupervised time, increasing exposure to risk behaviour.', 'Stress and hopelessness linked to poverty can push an adolescent towards substance use or crime as a way of coping or earning income.'],
            },
            {
              n: '1.3.5',
              q: 'Suggest TWO ways South Africans of different religions can show respect for each other in a multi-religious society.',
              marks: 2,
              a: ['Learn about other religions without mockery and recognise shared ethical values such as honesty and compassion.', 'Allow others to observe their own religious practices and holidays without pressure to conform.'],
            },
          ],
        },
        { id: 'pr2s-a-total', type: 'callout', text: 'TOTAL SECTION A: 20' },
      ],
    },

    // ── Section B ─────────────────────────────────────────────────────────
    {
      id: 'lo-pr2scope-section-b',
      chapterId: 'lo-exam-scope-practice-2',
      subjectId: 'life-orientation',
      title: 'Section B (Compulsory, Extract-Based)',
      minutes: 40,
      blocks: [
        { id: 'pr2s-b-h1', type: 'heading', level: 2, text: 'Section B — Question 2 (Study Skills) and Question 3 (Careers, Tertiary Funding & AI)' },
        { id: 'pr2s-b-q2-h', type: 'heading', level: 3, text: 'Question 2: Study Skills vs Cramming' },
        {
          id: 'pr2s-b-q2-extract',
          type: 'quote',
          text: 'Extract: "Sibusiso has three tests this week. Rather than starting early, he decided to leave all his studying for the night before each test, staying up until 2am trying to memorise his notes. By the second test, he found he could barely recall what he had \'learnt\' for the first one two days earlier. His friend Lerato, by contrast, drew up a study timetable at the start of the term, reviewed small sections of work every few days, and tested herself with flashcards and old exam questions. She felt calm and well-rested going into each test." (Composed scenario for this paper.)',
        },
        {
          id: 'pr2s-b-q2',
          type: 'questions',
          qa: [
            { n: '2.1', q: 'Identify which study approach — Sibusiso\'s or Lerato\'s — is an example of cramming, and define the term.', marks: 2, a: 'Sibusiso\'s approach is cramming — trying to learn a large amount of work in a short period, usually the night before an assessment, relying on short-term memory.' },
            { n: '2.2', q: 'State TWO effective study methods Lerato used, according to the extract.', marks: 2, a: ['A study timetable set up in advance.', 'Flashcards and practising with old exam questions (self-testing).'] },
            { n: '2.3', q: 'Explain why Sibusiso could barely recall what he had "learnt" for the first test, using what you know about memory and study methods.', marks: 4, a: 'Cramming relies mainly on short-term memory, which fades quickly once the immediate pressure of the test has passed. Because Sibusiso did not review or space out his learning over time, the information was never properly moved into long-term memory, so it was largely forgotten within just a couple of days.' },
            { n: '2.4', q: 'Using the extract, discuss THREE study methods Sibusiso could adopt to study more effectively in future.', marks: 6, a: ['Draw up a realistic study timetable at the start of the term, as Lerato did, rather than leaving everything to the last night.', 'Use spaced repetition — reviewing small sections of work regularly over several weeks rather than cramming it all in once.', 'Use active-recall tools such as flashcards and past exam questions to test himself, rather than passively re-reading notes.'] },
          ],
        },
        { id: 'pr2s-b-q3-h', type: 'heading', level: 3, text: 'Question 3: Careers, Tertiary Funding and AI' },
        {
          id: 'pr2s-b-q3-extract',
          type: 'quote',
          text: 'Extract: "A recent graduate from a rural Eastern Cape school, who had relied on an NSFAS bursary to complete a diploma at a university of technology, says she almost chose a field that is now being affected by automation. \'I nearly studied something that a lot of companies are now doing with software instead of people,\' she said. \'My lecturer told us that whatever we study, we need to keep learning new things after we graduate, because the skills companies want keep changing.\' She now works in IT support, a field she says is still growing because someone always needs to manage and maintain the technology itself." (Composed scenario for this paper, grounded in general, non-dated trends.)',
        },
        {
          id: 'pr2s-b-q3',
          type: 'questions',
          qa: [
            { n: '3.1', q: 'Identify the source of tertiary funding mentioned in the extract, and define it.', marks: 2, a: 'NSFAS (the National Student Financial Aid Scheme) is identified — a government-funded financial aid scheme that helps qualifying students pay for tertiary study.' },
            { n: '3.2', q: 'According to the extract, what effect can automation have on certain career fields?', marks: 2, a: 'Automation can reduce the need for jobs that can be done by software/machines instead of people, as suggested by the graduate nearly choosing such a field.' },
            { n: '3.3', q: 'Explain what the lecturer meant by saying graduates need to "keep learning new things" after they graduate, linking this to the concept of lifelong learning.', marks: 4, a: 'The lecturer is describing lifelong learning — the ongoing pursuit of new knowledge and skills after formal study ends. This matters because industries and the specific skills they need now change faster than before, due to forces such as automation and AI, so a qualification earned once may not remain sufficient for an entire career without ongoing reskilling or upskilling.' },
            { n: '3.4', q: 'Discuss TWO reasons why a career in IT support, as mentioned in the extract, might remain a growing field despite increasing automation.', marks: 6, a: 'IT support involves managing, maintaining and troubleshooting the technology itself, including the very systems that automate other tasks — this kind of hands-on, adaptive problem-solving is harder to automate than routine, repetitive work. In addition, as more companies adopt digital tools and AI-based systems, the overall demand for people who can keep that technology running reliably tends to grow rather than shrink, even as automation changes other roles.' },
          ],
        },
        { id: 'pr2s-b-total', type: 'callout', text: 'TOTAL SECTION B: 40' },
      ],
    },

    // ── Section C ─────────────────────────────────────────────────────────
    {
      id: 'lo-pr2scope-section-c',
      chapterId: 'lo-exam-scope-practice-2',
      subjectId: 'life-orientation',
      title: 'Section C — Answer Any TWO of Three (Q4, Q5, Q6)',
      minutes: 40,
      blocks: [
        { id: 'pr2s-c-h1', type: 'heading', level: 2, text: 'Section C' },
        {
          id: 'pr2s-c-instructions',
          type: 'callout',
          text: 'Instruction: Answer any TWO of the following THREE questions. Your response must be in essay form, written in full sentences.',
        },
        { id: 'pr2s-c-q4-h', type: 'heading', level: 3, text: 'Question 4: Volunteerism and Civic Responsibility' },
        {
          id: 'pr2s-c-q4',
          type: 'questions',
          qa: [
            {
              n: '4',
              context: 'Write an essay discussing volunteerism and civic responsibility.',
              q: 'Define social thinking skills, and discuss how volunteering develops these skills, builds a young person\'s self-identity, and benefits the community they serve. (16)',
              marks: 16,
              a: 'Social thinking skills are the ability to understand, interpret and respond appropriately to social situations and the needs of others. Volunteering develops these skills directly, because it requires a person to read and respond to the needs of people in circumstances different from their own, to cooperate within a team or organisation, and to build empathy through sustained, direct contact with hardship rather than learning about it only abstractly. This same exposure plays an important role in building a young volunteer\'s self-identity: new environments, challenges and people outside their usual routine help them discover their genuine values, strengths and interests, building the confidence and sense of purpose central to a stable identity during adolescence. The community, in turn, benefits from the practical support volunteers provide — such as tutoring, food distribution or environmental clean-ups — support it may not otherwise have the capacity or funding to deliver on its own, while the energy and new ideas young volunteers bring can inspire wider community participation and a stronger culture of civic responsibility, provided the work is well-organised and sustained rather than a short-lived, once-off gesture.',
            },
          ],
        },
        { id: 'pr2s-c-q5-h', type: 'heading', level: 3, text: 'Question 5: Doping in Sport' },
        {
          id: 'pr2s-c-q5',
          type: 'questions',
          qa: [
            {
              n: '5',
              context: 'Write an essay discussing doping in sport.',
              q: 'Discuss the reasons athletes dope, the health risks involved, and the challenges sports administration bodies face in enforcing anti-doping rules. (16)',
              marks: 16,
              a: 'Athletes may decide to dope for several overlapping reasons: intense pressure to win and secure sponsorships, prize money or national selection; the belief that rivals are already doping; pressure from coaches or team doctors; and a desire to recover faster from injury or extend a fading career. Doping carries severe health risks in return for these perceived gains — anabolic steroids can damage the liver, kidneys and heart and cause severe mood disturbances; stimulants can cause irregular heartbeat and heightened stroke risk; and blood-doping methods can thicken the blood, raising the risk of clots, stroke and heart failure, with some methods even carrying a risk of sudden death during intense exertion. Enforcing anti-doping rules against this backdrop is made difficult by maladministration within sporting bodies — corruption, cover-ups or inconsistent testing can occur when organisations protect high-profile or medal-winning athletes to preserve their own reputation and revenue — and by under-resourced testing agencies that cannot test all athletes consistently, especially in less wealthy sporting federations. Overcoming these challenges requires rigorous, randomised, year-round testing, transparent and consistently applied sanctions regardless of an athlete\'s profile, and sustained education that addresses the ethical and health risks of doping before an athlete is ever tempted to use a banned substance.',
            },
          ],
        },
        { id: 'pr2s-c-q6-h', type: 'heading', level: 3, text: 'Question 6: Assertiveness and Personal Boundaries' },
        {
          id: 'pr2s-c-q6',
          type: 'questions',
          qa: [
            {
              n: '6',
              context: 'Write an essay discussing assertiveness and personal boundaries.',
              q: 'Discuss the role of peer pressure in making it difficult to say "no", the ways a young person can assertively exercise this right in resisting premature sexual activity, and the part religious ethics can play in strengthening this resolve. (16)',
              marks: 16,
              a: 'Peer pressure, whether openly stated or simply felt by observing others, often makes exercising the right to say "no" genuinely difficult — fear of rejection, low self-esteem, power imbalances within a relationship, and cultural or gender norms that discourage refusal are all common barriers. Nonetheless, every person has the right to refuse any activity, including sexual activity, without being coerced or punished; exercising this right builds self-respect and personal boundaries, and protects against the real physical and emotional consequences of premature sexual activity, such as unplanned pregnancy or sexually transmitted infections. Practical assertiveness skills make this right usable in the moment: clear, direct refusals, confident body language, calmly repeating a boundary under continued pressure, and removing oneself from an unsafe situation are techniques that strengthen a young person\'s ability to say "no" convincingly. Understanding the ethical teachings of major religions on dignity, bodily autonomy and self-discipline can add a further values-based foundation to this resolve, giving an individual an additional reason to stand firm under pressure — though in South Africa\'s diverse, multi-faith society, this must be balanced with respect for personal choice, so that religious belief empowers rather than shames or coerces others.',
            },
          ],
        },
        { id: 'pr2s-c-total', type: 'callout', text: 'TOTAL SECTION C: 40 | GRAND TOTAL: 100' },
      ],
    },
  ],
};
