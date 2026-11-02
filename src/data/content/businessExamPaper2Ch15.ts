import type { Chapter } from '@/lib/types';

/**
 * Scope: Relationships & Team Performance (Essay Topic) — scope-only chapter for Paper 2.
 *
 * Contains ONLY the content on the student's Paper 2 exam-scope sheet for this
 * source chapter, extracted from the full chapter. Linked from the "Exam Scope:
 * Paper 2" Overview checklist so a student lands here, not in the full chapter.
 */

export const BUSINESS_EXAM_P2_CH15: Chapter = {
  id: 'business-exam-p2-ch15',
  subjectId: 'business',
  title: 'Scope: Relationships & Team Performance (Essay Topic)',
  summary: 'Only the content on your Paper 2 exam scope — nothing else.',
  paper: 2,
  hidden: true,
  lessons: [
{
  id: 'bs-p2x-relationships-teams',
  chapterId: 'business-exam-p2-ch15',
  subjectId: 'business' as const,
  title: 'Relationship and Team Performance (Essay Topic) — Interpersonal Relationships, Teamwork & Successful Teams',
  minutes: 26,
  blocks: [
    {
      id: 'p2x-rt-essay-tip',
      type: 'callout' as const,
      text: 'HIGHLIGHTED ON SCOPE SHEET: a full essay on relationships and team performance is guaranteed. This lesson covers interpersonal relationships, the benefits of teamwork, factors influencing team relationships, and the criteria for successful team performance — the full essay content.',
    },
    { id: 'p2x-rt-h1', type: 'heading' as const, level: 2 as const, text: 'Key Definitions' },
    {
      id: 'p2x-rt-def-table',
      type: 'definitions' as const,
      rows: [
        { term: 'Team', meaning: 'Consists of two or more people who work together in a business or organisation to achieve a common goal.' },
        { term: 'Interpersonal relationships', meaning: 'A strong association among individuals working together; team members build trust, openness, understanding and effective communication.' },
        { term: 'Prejudice', meaning: 'A preconceived opinion or judgement of something or someone, normally not based on reason or fact, which can lead to discrimination (e.g. racism, xenophobia, sexism, religious prejudice).' },
        { term: 'Discrimination', meaning: 'Occurs when an employee is treated unfairly because of race, gender, sexuality, religion or disability.' },
        { term: 'Diversity', meaning: 'What makes people unique — different cultures, backgrounds, beliefs, gender, language and life experiences.' },
        { term: 'Belief', meaning: 'A conviction generally accepted to be true without evidence or proof, related to culture and religion.' },
        { term: 'Equity', meaning: 'The practice of being fair or impartial in the workplace; achieved when there is no discrimination.' },
        { term: 'Peer relationships', meaning: 'Relationships between employees on the same level at the workplace, based on mutual respect.' },
        { term: 'Group relationships', meaning: 'Relationships between members of a team or group; healthy relationships ensure good results, poor relationships can cause conflict.' },
        { term: 'Authority relationships', meaning: 'Relationships between a manager and a subordinate, based on mutual respect.' },
        { term: 'External relationships', meaning: 'Relationships with people outside of the company, usually based on service delivery or outsourcing.' },
      ],
    },
    { id: 'p2x-rt-tw-h1', type: 'heading' as const, level: 2 as const, text: 'The Benefits of Teamwork' },
    {
      id: 'p2x-rt-tw-intro',
      type: 'paragraph' as const,
      text: 'Teamwork is when two or more people come together to reach a common goal. Successful teams communicate frequently and openly, engage with one another, and are flexible to ensure overall success. Poor relationships amongst team members can cause distress, anger and withdrawal, dividing the team and leading to poorer performance.',
    },
    {
      id: 'p2x-rt-tw-benefits',
      type: 'list' as const,
      text: [
        'Members learn from each other and grow; the team achieves more than the individual.',
        'Good teamwork helps the business achieve its objectives, and gives employees more control over their jobs.',
        "The performance of all team members improves because they support each other's skills.",
        'Teamwork encourages workers to increase their range of skills to increase productivity, and improves effective communication.',
        'Creates strong relationships among employees, leading to better communication within a team.',
        'Promotes healthy risk-taking — members take more risks, knowing they have the support of the team in case of failure.',
        'Promotes a wider sense of ownership, building loyalty towards the company and individual job satisfaction.',
        'Promotes creativity and learning; creates synergy to maximise energy levels of employees.',
      ],
    },
    { id: 'p2x-rt-tw-env-h', type: 'heading' as const, level: 3 as const, text: 'Ways Businesses Can Create an Environment That Enables Teams to Work Effectively' },
    {
      id: 'p2x-rt-tw-env',
      type: 'list' as const,
      text: [
        'Ensure the team clearly understands the business objectives; set ground rules and establish team values/goals.',
        'Consider each employee’s ideas as valuable; be clear and specific when communicating to prevent confusion.',
        'Encourage listening and brainstorming; encourage trust, respect, and cooperation among team members.',
        'Encourage team members to share information and resources effectively; delegate problem-solving tasks to the team.',
        'Establish a method for arriving at a consensus to prevent conflict; be aware of employees’ unspoken feelings.',
      ],
    },
    { id: 'p2x-rt-ir-h1', type: 'heading' as const, level: 2 as const, text: 'Interpersonal Relationships in the Workplace' },
    {
      id: 'p2x-rt-ir-meaning',
      type: 'list' as const,
      text: [
        'A strong association among individuals working together; team members share a special relationship.',
        'Team members build up a relationship of trust, openness, understanding and effective communication.',
        'Everyone plays a role in achieving the business objectives.',
      ],
    },
    { id: 'p2x-rt-ir-imp-h', type: 'heading' as const, level: 3 as const, text: 'The Importance of Each Individual in Achieving Business Objectives' },
    {
      id: 'p2x-rt-ir-imp',
      type: 'list' as const,
      text: [
        'The quality of interpersonal relationships impacts the productivity of teams.',
        'If employees are skilled and knowledgeable, teams will be strong and efficient.',
        'Employees take pride in their work if aware of how their efforts impact the business objectives.',
        'Celebrating milestones and praising team members leads to excitement and higher productivity.',
      ],
    },
    { id: 'p2x-rt-ir-types-h', type: 'heading' as const, level: 3 as const, text: 'Types of Interpersonal Working Relationships' },
    {
      id: 'p2x-rt-ir-types-table',
      type: 'definitions' as const,
      rows: [
        { term: 'Peer relationships', meaning: 'Between employees on the same level; employees are equal, relationships based on mutual respect.' },
        { term: 'Group relationships', meaning: 'Between members of a team or group; healthy relationships ensure good results, poor relationships cause conflict.' },
        { term: 'Authority relationships', meaning: 'Between a manager and a subordinate, based on mutual respect.' },
        { term: 'External relationships', meaning: 'With people outside of the company, usually based on service delivery or outsourcing.' },
      ],
    },
    { id: 'p2x-rt-fac-h1', type: 'heading' as const, level: 2 as const, text: 'Factors That Can Influence Team Relationships' },
    {
      id: 'p2x-rt-fac-tip',
      type: 'callout' as const,
      text: 'Exam Tip: Learn each factor paired with how businesses address it — a common question gives the factor and asks you to recommend the business response.',
    },
    {
      id: 'p2x-rt-fac-table',
      type: 'definitions' as const,
      rows: [
        { term: 'Prejudice', meaning: 'A negative attitude towards an individual, usually based on differences between social groups (e.g. an unfamiliar cultural group). Addressed by: teambuilding activities; awareness of cross-cultural differences.' },
        { term: 'Discrimination', meaning: 'Negative action towards an individual because of gender, race, religion, or sexual orientation. Addressed by: a human relations policy against discrimination, and a procedure to report it.' },
        { term: 'Diversity', meaning: 'The practice of including people from a range of social/ethnic backgrounds, genders and sexual orientations. Addressed by: a policy of equal opportunities in appointments; teambuilding activities.' },
        { term: 'Belief', meaning: 'A conviction generally accepted as true without evidence, related to culture and religion, influencing thoughts and attitudes. Addressed by: awareness of moral values and integrity in the business.' },
        { term: 'Equity', meaning: 'Respectful and dignified treatment of every person; encourages diversity in decision-making, job satisfaction and engagement. Addressed by: HR policy promoting equity in appointment, promotion and allocation of resources.' },
      ],
    },
    { id: 'p2x-rt-fac-promote-h', type: 'heading' as const, level: 3 as const, text: 'Ways to Promote Healthy Interpersonal Relationships' },
    {
      id: 'p2x-rt-fac-promote',
      type: 'list' as const,
      text: [
        'Having empathy for others — considering the thoughts, feelings and needs of others.',
        'Relying on other people builds trust; teamwork establishes strong relationships.',
        'Despite occasional disagreements, an effective team enjoys working together and shares a strong bond.',
      ],
    },
    { id: 'p2x-rt-crit-h1', type: 'heading' as const, level: 2 as const, text: 'Criteria for Successful and Collaborative Team Performance' },
    {
      id: 'p2x-rt-crit-tip',
      type: 'callout' as const,
      text: 'Exam Tip: Remember the SIX criteria — Clear objectives and agreed goals; Interpersonal attitudes and behaviour; Shared values and mutual respect; Communication; Co-operation/Collaboration; Mutual respect, support, trust. You may be asked to assess a given team against these criteria.',
    },
    { id: 'p2x-rt-crit1-h', type: 'heading' as const, level: 3 as const, text: '1. Clear Objectives and Agreed Goals' },
    {
      id: 'p2x-rt-crit1',
      type: 'list' as const,
      text: ['Team members must agree on goals and set clear objectives for direction.', 'Members who agree to the goals will be committed, and show more commitment when objectives are understood clearly.'],
    },
    { id: 'p2x-rt-crit2-h', type: 'heading' as const, level: 3 as const, text: '2. Interpersonal Attitudes and Behaviour' },
    {
      id: 'p2x-rt-crit2',
      type: 'list' as const,
      text: ['Team members have a positive attitude of support and motivation towards each other.', 'Good interpersonal relationships ensure job satisfaction and increase productivity.', 'Team leaders give credit to members for positive contributions.'],
    },
    { id: 'p2x-rt-crit3-h', type: 'heading' as const, level: 3 as const, text: '3. Shared Values and Mutual Respect' },
    {
      id: 'p2x-rt-crit3',
      type: 'list' as const,
      text: ['Shows respect for the knowledge or skills of other members.', 'Performs team tasks with integrity, meeting deadlines with commitment to team goals.', 'Shows loyalty, respect and trust towards team members despite differences.'],
    },
    { id: 'p2x-rt-crit4-h', type: 'heading' as const, level: 3 as const, text: '4. Communication' },
    {
      id: 'p2x-rt-crit4',
      type: 'list' as const,
      text: ['A clear set of processes and procedures ensures every team member understands their role.', 'Efficient communication may result in quick decisions; quality feedback improves team morale.', 'Open discussions lead to effective problem solving; continuous review allows correction of mistakes.'],
    },
    { id: 'p2x-rt-crit5-h', type: 'heading' as const, level: 3 as const, text: '5. Co-operation/Collaboration' },
    {
      id: 'p2x-rt-crit5',
      type: 'list' as const,
      text: ['Clearly defined, realistic goals ensure all members know what is expected.', 'All members should actively participate in decision-making, and show willingness to cooperate as a unit.', 'A balanced composition of skills, knowledge, experience and expertise ensures teams achieve their objectives.'],
    },
    { id: 'p2x-rt-crit6-h', type: 'heading' as const, level: 3 as const, text: '6. Mutual Respect, Support, Trust' },
    {
      id: 'p2x-rt-crit6',
      type: 'list' as const,
      text: ['Team members must not fear being laughed at or rejected for expressing concern — this encourages participation.', 'Members should consult with all group members and learn from one another.', 'Reliability — doing what you say you will, and taking risks with others — helps build mutual trust.'],
    },
    {
      id: 'p2x-rt-qa',
      type: 'questions' as const,
      qa: [
        { q: 'Discuss any FOUR benefits of teamwork for a business.', marks: 8, a: ['Members learn from each other and the team achieves more than any individual.', 'Teamwork improves effective communication and creates strong relationships.', 'It promotes healthy risk-taking, since members have team support.', 'It promotes a wider sense of ownership, building loyalty and job satisfaction (any 4).'] },
        { q: 'Explain "interpersonal relationship" in the workplace, and distinguish between peer and authority relationships.', marks: 7, a: ['Interpersonal relationships are a strong association among individuals working together, built on trust, openness, understanding and communication.', 'Peer relationships: between employees on the same level, based on mutual respect.', 'Authority relationships: between a manager and subordinate, also based on mutual respect but across levels.'] },
        { q: 'Define "prejudice" and "discrimination," explain how they are related, and recommend ONE way to address each.', marks: 6, a: ['Prejudice is a preconceived, usually unfounded opinion/judgement, which can lead to discrimination.', 'Discrimination is unfair treatment based on race, gender, sexuality, religion or disability.', 'Prejudice: addressed through teambuilding activities and cross-cultural awareness.', 'Discrimination: addressed through an HR policy against it and a reporting procedure.'] },
        { q: 'List the SIX criteria for successful and collaborative team performance.', marks: 6, a: ['Clear objectives and agreed goals', 'Interpersonal attitudes and behaviour', 'Shared values and mutual respect', 'Communication', 'Co-operation/Collaboration', 'Mutual respect, support, trust'] },
        { q: 'ESSAY: Discuss how team members can work in a team to accomplish business objectives, with reference to interpersonal relationships, the benefits of teamwork, factors influencing team relationships, and the criteria for successful team performance. (150–200 words)', marks: 10, a: 'Teamwork occurs when two or more people come together to reach a common goal, and it benefits a business because members learn from each other, achieve more collectively, communicate more effectively, and take healthy risks knowing they have team support. Strong interpersonal relationships — built on trust, openness and understanding — ensure everyone plays their role in achieving business objectives, whether through peer, group, authority or external relationships. Factors such as prejudice, discrimination, diversity, belief and equity can disrupt these relationships, so businesses must respond with teambuilding activities, clear HR policies against discrimination, equal-opportunity appointment policies, and awareness of moral values. Finally, successful and collaborative team performance depends on six criteria: clear objectives and agreed goals, positive interpersonal attitudes, shared values and mutual respect, effective communication, co-operation and collaboration, and mutual respect, support and trust between members. When all of these are present, teams can work together, correct mistakes through continuous review, and ultimately achieve the business’s objectives.' },
      ],
    },
  ],
}
  ],
};
