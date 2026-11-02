import type { Chapter } from '@/lib/types';

/**
 * Composed practice paper #4 for the November exam scope — the last of
 * the 4 new composed papers in the 5-paper set for this topic (see
 * loExamScopeNov.ts Lesson 1). Section A leans on "critically discuss /
 * analyse" short-answer phrasing closer to Section C style, to stretch
 * learners beyond simple recall; Section B pairs a news-style extract on
 * gender bias/discrimination with a careers/AI extract.
 */
export const LO_EXAM_SCOPE_PRACTICE_4: Chapter = {
  id: 'lo-exam-scope-practice-4',
  subjectId: 'life-orientation',
  title: 'November Exam Scope — Practice Paper 4',
  summary: 'Composed practice paper, 100 marks, 2 hours 30 minutes, aligned to the November exam scope. Section A (compulsory): youth risk behaviour/poverty, careers & AI, discrimination & multi-religious respect. Section B (compulsory, extract-based): gender bias in sport and careers/tertiary funding/lifelong learning. Section C (choose 2 of 3 essays): volunteerism, doping, assertiveness.',
  category: 'November Exam Scope',
  lessons: [
    // ── Section A ─────────────────────────────────────────────────────────
    {
      id: 'lo-pr4scope-section-a',
      chapterId: 'lo-exam-scope-practice-4',
      subjectId: 'life-orientation',
      title: 'Section A (Compulsory)',
      minutes: 30,
      blocks: [
        { id: 'pr4s-a-h1', type: 'heading', level: 2, text: 'Section A — Question 1 (Compulsory)' },
        {
          id: 'pr4s-a-callout',
          type: 'callout',
          text: 'Practice Paper 4 of 4 — composed to match the November exam scope, not an official past paper. This paper is the last of 4 composed papers; the real Oct 2025 past paper rounds out the set of 5.',
        },
        {
          id: 'pr4s-a-qa',
          type: 'questions',
          qa: [
            { n: '1.1.1', context: 'Choose the most correct answer and write only the letter (A–D) next to the question number.', q: 'Which of the following is the BEST example of a protective factor against adolescent risk behaviour? A) Low self-esteem B) A supportive family relationship C) Easy access to alcohol D) Lack of structured activities', marks: 1, a: 'B) A supportive family relationship' },
            { n: '1.1.2', q: 'A diploma offered by a university of technology, often including a workplace experience component, is: A) More theoretical than a university degree B) More practically oriented than a traditional university degree C) The same as a TVET qualification D) Only available through NSFAS', marks: 1, a: 'B) More practically oriented than a traditional university degree' },
            { n: '1.1.3', q: 'Discrimination against people with disabilities is known as: A) Ageism B) Ableism C) Xenophobia D) Sexism', marks: 1, a: 'B) Ableism' },
            { n: '1.1.4', q: 'The RIGHT in the Bill of Rights that is most directly breached by unfair gender bias in sport is the right to: A) Freedom of religion B) Equality C) Privacy D) Basic education', marks: 1, a: 'B) Equality' },
            { n: '1.1.5', q: 'A job field most likely to be affected by automation is one that mainly involves: A) Complex human judgement B) Creativity C) Routine, repetitive tasks D) Hands-on skill in unpredictable environments', marks: 1, a: 'C) Routine, repetitive tasks' },
            { n: '1.2.1', context: 'Give one word or phrase for the following statements.', q: 'An award for further study based on academic merit, sporting ability or other achievement.', marks: 1, a: 'A scholarship' },
            { n: '1.2.2', q: 'Harmful acts directed at an individual because of their gender, including physical, sexual, emotional or economic abuse.', marks: 1, a: 'Gender-based violence (GBV)' },
            { n: '1.2.3', q: 'The limits a person sets to protect their own wellbeing and define what behaviour from others they will accept.', marks: 1, a: 'Personal boundaries' },
            { n: '1.2.4', q: 'The act of offering your time, skills or resources to help others, without expecting payment.', marks: 1, a: 'Volunteerism/volunteering' },
            { n: '1.2.5', q: 'A disease linked to lifestyle factors such as diet and inactivity, e.g. type 2 diabetes.', marks: 1, a: 'A lifestyle disease' },
            {
              n: '1.3.1',
              context: 'Answer the following questions in full sentences.',
              q: 'Critically discuss why poverty is sometimes described as both a cause and a consequence of adolescent risk behaviour.',
              marks: 4,
              a: 'Poverty can be a cause of risk behaviour, since financial stress, limited access to safe recreation and exposure to crime in under-resourced communities can push an adolescent towards substance use or other risk behaviour. At the same time, risk behaviour can deepen poverty as a consequence — for example, substance abuse or involvement in crime can lead to school dropout or legal trouble, reducing future employability and income, which shows the two can reinforce each other in a cycle rather than operating in only one direction.',
            },
            {
              n: '1.3.2',
              q: 'Analyse ONE way AI and automation could create new career opportunities, even as they change existing jobs.',
              marks: 3,
              a: 'AI and automation create demand for people who can build, manage, maintain and apply these systems responsibly — for example, roles in data analysis, software development or AI ethics did not exist in their current form previously, showing that technological change shifts which skills are valued rather than only eliminating jobs.',
            },
            {
              n: '1.3.3',
              q: 'Explain why challenging a stereotype when you hear it is an effective way to combat discrimination.',
              marks: 3,
              a: 'Stereotypes are oversimplified, widely held beliefs that often underpin discriminatory attitudes; challenging them when they are voiced interrupts their casual repetition and normalisation, making it less likely that the listener (or speaker) continues to treat the stereotype as acceptable or true, which over time can shift attitudes within a peer group or community.',
            },
            {
              n: '1.3.4',
              q: 'Discuss TWO ways a multi-religious society such as South Africa can promote mutual respect between people of different faiths.',
              marks: 4,
              a: ['Protecting freedom of religion constitutionally, so no faith is privileged over another by the state, and every person can practise (or not practise) a religion without discrimination.', 'Encouraging education about different belief systems, so people understand the shared ethical values — such as compassion and honesty — that run across different faiths, reducing prejudice born from unfamiliarity.'],
            },
          ],
        },
        { id: 'pr4s-a-total', type: 'callout', text: 'TOTAL SECTION A: 20' },
      ],
    },

    // ── Section B ─────────────────────────────────────────────────────────
    {
      id: 'lo-pr4scope-section-b',
      chapterId: 'lo-exam-scope-practice-4',
      subjectId: 'life-orientation',
      title: 'Section B (Compulsory, Extract-Based)',
      minutes: 40,
      blocks: [
        { id: 'pr4s-b-h1', type: 'heading', level: 2, text: 'Section B — Question 2 (Gender Bias in Sport) and Question 3 (Careers, Funding & Lifelong Learning)' },
        { id: 'pr4s-b-q2-h', type: 'heading', level: 3, text: 'Question 2: Gender Bias in Sport' },
        {
          id: 'pr4s-b-q2-extract',
          type: 'quote',
          text: 'Extract: "A school newsletter reports that the boys\' first soccer team was given a new kit, a dedicated bus to away matches, and a feature article, while the girls\' first netball team — despite finishing the season undefeated — received none of these and had to arrange their own transport to matches. A learner wrote to the school newspaper: \'Why does winning mean something different depending on which team you\'re on?\'" (Composed scenario for this paper.)',
        },
        {
          id: 'pr4s-b-q2',
          type: 'questions',
          qa: [
            { n: '2.1', q: 'Identify the issue described in the extract and define it.', marks: 2, a: 'The issue is gender bias in sport — the unequal treatment of male and female athletes in areas such as resources, media coverage and opportunities to participate, despite comparable or superior performance.' },
            { n: '2.2', q: 'State TWO specific examples of unequal treatment described in the extract.', marks: 2, a: ['The boys\' team received a new kit and a bus to away matches, while the girls\' team did not.', 'The boys\' team received a feature article in the newsletter, while the undefeated girls\' team did not.'] },
            { n: '2.3', q: 'Explain why the learner\'s question — "Why does winning mean something different depending on which team you\'re on?" — reflects a human rights concern.', marks: 4, a: 'The question highlights that recognition and resources are being distributed based on gender rather than merit or performance, even though the girls\' team was undefeated. This breaches the constitutional right to equality, which protects everyone from unfair discrimination, including in how achievement is recognised and supported within an institution such as a school.' },
            { n: '2.4', q: 'Discuss THREE strategies the school could implement to address the gender bias described in the extract.', marks: 6, a: ['Apply an equal resourcing policy across all first teams regardless of gender, covering kit, transport and other logistical support.', 'Commit to equal media/newsletter coverage for boys\' and girls\' sporting achievements, based on performance rather than gender.', 'Promote female sporting role models and celebrate girls\' sport achievements publicly, to challenge the assumption that boys\' sport is inherently more newsworthy.'] },
          ],
        },
        { id: 'pr4s-b-q3-h', type: 'heading', level: 3, text: 'Question 3: Careers, Tertiary Funding and Lifelong Learning' },
        {
          id: 'pr4s-b-q3-extract',
          type: 'quote',
          text: 'Extract: "Mr Dlamini, a career guidance teacher, tells his Grade 10 class: \'Whatever subjects you choose this year, remember two things. First, look into funding early — NSFAS, bursaries and learnerships all have different requirements, and some close long before matric results are out. Second, don\'t assume the job you train for today will look exactly the same in ten years. Many of our best-placed alumni are the ones who kept learning new skills after they graduated, not just the ones who got the best marks in Grade 12.\'" (Composed scenario for this paper.)',
        },
        {
          id: 'pr4s-b-q3',
          type: 'questions',
          qa: [
            { n: '3.1', q: 'Name TWO sources of tertiary funding mentioned by Mr Dlamini.', marks: 2, a: ['NSFAS', 'Bursaries (also accept learnerships)'] },
            { n: '3.2', q: 'Explain why Mr Dlamini advises learners to research funding options early, according to the extract.', marks: 2, a: 'Different funding options have different requirements and some close for applications long before matric results are released, so researching early ensures a learner does not miss a deadline or an opportunity they would have qualified for.' },
            { n: '3.3', q: 'Discuss what Mr Dlamini means by saying "the job you train for today" may not "look exactly the same in ten years", linking this to job market trends covered in this guide.', marks: 4, a: 'Mr Dlamini is describing how globalisation, automation and AI are changing which skills are in demand faster than in the past, meaning the specific tasks and tools used in a given career can shift significantly over a decade. This is why staying informed about job market trends, rather than assuming a qualification is a fixed, lifelong guarantee, is an important part of realistic career planning.' },
            { n: '3.4', q: 'Analyse why Mr Dlamini says the best-placed alumni are "the ones who kept learning new skills" rather than only those with the best Grade 12 marks.', marks: 6, a: 'This reflects the value of lifelong learning over a single, fixed academic achievement: strong marks can open the door to a first qualification or job, but as industries change due to automation, AI and globalisation, the specific skills a career demands keep evolving. Alumni who continued reskilling or upskilling after graduating were able to adapt to these changes and remain employable, while a strong Grade 12 result alone does not guarantee ongoing relevance in a job market that keeps shifting — showing that career success increasingly depends on an ongoing commitment to learning, not a one-off academic result.' },
          ],
        },
        { id: 'pr4s-b-total', type: 'callout', text: 'TOTAL SECTION B: 40' },
      ],
    },

    // ── Section C ─────────────────────────────────────────────────────────
    {
      id: 'lo-pr4scope-section-c',
      chapterId: 'lo-exam-scope-practice-4',
      subjectId: 'life-orientation',
      title: 'Section C — Answer Any TWO of Three (Q4, Q5, Q6)',
      minutes: 40,
      blocks: [
        { id: 'pr4s-c-h1', type: 'heading', level: 2, text: 'Section C' },
        {
          id: 'pr4s-c-instructions',
          type: 'callout',
          text: 'Instruction: Answer any TWO of the following THREE questions. Your response must be in essay form, written in full sentences.',
        },
        { id: 'pr4s-c-q4-h', type: 'heading', level: 3, text: 'Question 4: Volunteerism and Civic Responsibility' },
        {
          id: 'pr4s-c-q4',
          type: 'questions',
          qa: [
            {
              n: '4',
              context: 'Write an essay discussing volunteerism and civic responsibility.',
              q: 'Discuss the connection between volunteering and social thinking skills, evaluate how volunteering contributes to a young person\'s self-identity, and discuss the conditions under which youth volunteering most benefits a community. (16)',
              marks: 16,
              a: 'Volunteering is closely connected to social thinking skills — the ability to understand and respond appropriately to the needs of others — because it demands cooperation within an organisation, responsiveness to people in circumstances different from one\'s own, and empathy built through direct, sustained contact with hardship rather than abstract learning about it. This process also shapes a young volunteer\'s self-identity in meaningful ways: exposure to unfamiliar environments, people and challenges helps a young person discover their genuine values, strengths and interests, building the confidence and sense of purpose that underpin a stable identity during adolescence, and sometimes revealing career interests they had not previously considered. Communities benefit most from youth volunteering under certain conditions: when the work is well-organised and properly supported by experienced staff or mentors, when it is sustained over time rather than a single, isolated event, and when it responds to needs the community has actually identified rather than needs assumed by outsiders. Under these conditions, volunteering provides genuine practical support — such as tutoring or food distribution — while also strengthening the broader culture of civic responsibility within the community.',
            },
          ],
        },
        { id: 'pr4s-c-q5-h', type: 'heading', level: 3, text: 'Question 5: Doping in Sport' },
        {
          id: 'pr4s-c-q5',
          type: 'questions',
          qa: [
            {
              n: '5',
              context: 'Write an essay discussing doping in sport.',
              q: 'Discuss the personal and systemic reasons athletes dope, evaluate the health risks of different doping methods, and discuss how maladministration undermines enforcement of anti-doping rules. (16)',
              marks: 16,
              a: 'Athletes\' reasons for doping are both personal and systemic: personally, an athlete may face pressure to win, to secure sponsorship or prize money, or to recover faster from injury; systemically, a culture in which doping is believed to be widespread can create pressure to dope simply to remain competitive, regardless of an individual athlete\'s own values. These motivations come at a serious cost: anabolic steroids can cause liver and kidney damage, heart disease and severe mood disturbances; stimulants can cause irregular heartbeat and heightened stroke risk; and blood-doping methods can thicken the blood, increasing the risk of clots, stroke and heart failure, with some methods carrying a risk of sudden death during intense exertion. Maladministration within sporting bodies significantly undermines efforts to enforce anti-doping rules: corruption, cover-ups, or a reluctance to sanction high-profile or medal-winning athletes (in order to protect an organisation\'s reputation and revenue) all weaken the credibility and consistency of enforcement, while under-resourced testing agencies — particularly in poorer sporting federations — may simply be unable to test all athletes regularly enough to catch doping reliably. Addressing both the personal pressures and the systemic failures is therefore necessary: education can reduce the personal temptation to dope, but only well-funded, consistently enforced, corruption-free testing systems can close the systemic loopholes that maladministration currently leaves open.',
            },
          ],
        },
        { id: 'pr4s-c-q6-h', type: 'heading', level: 3, text: 'Question 6: Assertiveness and Personal Boundaries' },
        {
          id: 'pr4s-c-q6',
          type: 'questions',
          qa: [
            {
              n: '6',
              context: 'Write an essay discussing assertiveness and personal boundaries.',
              q: 'Evaluate why peer pressure is such a powerful barrier to exercising the right to say "no", discuss practical ways a young person can assert personal boundaries around premature sexual activity, and assess the role religious ethics can play without becoming a source of coercion itself. (16)',
              marks: 16,
              a: 'Peer pressure is a powerful barrier to exercising the right to say "no" because adolescence is a period in which acceptance and belonging within a peer group matter intensely, so the fear of rejection, combined with low self-esteem, power imbalances in relationships, and cultural or gender norms discouraging refusal, can make even a clear personal boundary feel risky to assert. Despite this, every individual retains the right to refuse any activity, including sexual activity, without being coerced or punished, and exercising this right builds self-respect while protecting against real consequences such as unplanned pregnancy or sexually transmitted infections. Practical assertiveness techniques make this right usable under pressure: clear, direct "I" statements, confident body language, calmly repeated refusals if pressure continues, and physically removing oneself from an unsafe situation all increase the likelihood that a boundary is respected. Religious ethics can play a genuinely supportive role here, since most major faiths emphasise the dignity and bodily autonomy of every person and encourage self-discipline, giving an individual a further values-based reason to hold firm. This role must be carefully distinguished from coercion, however: religious teaching should strengthen an individual\'s own, freely chosen resolve, not be used by others — parents, peers, or religious leaders — to shame, pressure or control a person\'s decisions, especially in a diverse, multi-faith society like South Africa where not everyone shares the same beliefs.',
            },
          ],
        },
        { id: 'pr4s-c-total', type: 'callout', text: 'TOTAL SECTION C: 40 | GRAND TOTAL: 100' },
      ],
    },
  ],
};
