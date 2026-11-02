import type { Chapter } from '@/lib/types';

/**
 * Scope: Social Responsibility & CSR — scope-only chapter for Paper 2.
 *
 * Contains ONLY the content on the student's Paper 2 exam-scope sheet for this
 * source chapter, extracted from the full chapter. Linked from the "Exam Scope:
 * Paper 2" Overview checklist so a student lands here, not in the full chapter.
 */

export const BUSINESS_EXAM_P2_CH9: Chapter = {
  id: 'business-exam-p2-ch9',
  subjectId: 'business',
  title: 'Scope: Social Responsibility & CSR',
  summary: 'Only the content on your Paper 2 exam scope — nothing else.',
  paper: 2,
  hidden: true,
  lessons: [
{
  id: 'bs-p2x-csr',
  chapterId: 'business-exam-p2-ch9',
  subjectId: 'business' as const,
  title: 'Social Responsibility & CSR: Poverty, HIV/Aids, Unemployment, Crime & Gambling',
  minutes: 22,
  blocks: [
    { id: 'p2x-csr-h1', type: 'heading' as const, level: 2 as const, text: 'Key Definitions' },
    {
      id: 'p2x-csr-def-table',
      type: 'definitions' as const,
      rows: [
        { term: 'Social responsibility', meaning: 'When each person is responsible for the effects their behaviours and lifestyle has on the environment and others. Any person/group/organisation has a responsibility to act in a way that benefits society as a whole, including getting actively involved in projects that have a positive, sustainable impact on society.' },
        { term: 'Corporate Social Responsibility (CSR)', meaning: 'The term used when a business takes responsibility for its impact on society and the environment. It is an ethical way of doing business in the interest of both the business and the wider community. CSR is the way businesses manage their resources/processes to impact positively on society.' },
      ],
    },
    { id: 'p2x-csr-sr-h1', type: 'heading' as const, level: 2 as const, text: 'The Meaning of Social Responsibility' },
    {
      id: 'p2x-csr-sr-meaning',
      type: 'list' as const,
      text: [
        'Each person is responsible for the effects their behaviours and lifestyle has on the environment and others.',
        'Any person/group/organisation has a responsibility to act in a way that benefits society as a whole.',
        'It means getting actively involved in projects that have a positive, sustainable impact on society.',
        'Each person has a duty to act in the best interests of their environment and society as a whole.',
      ],
    },
    { id: 'p2x-csr-sr-ex-h', type: 'heading' as const, level: 3 as const, text: 'Common Examples of Social Responsibility' },
    {
      id: 'p2x-csr-sr-ex',
      type: 'list' as const,
      text: [
        'Reducing carbon footprints: direct emissions from fossil-fuel combustion, e.g. manufacturing, heating, transportation, electricity, and consumption of goods/services.',
        'Donations to charities.',
        'Volunteering in the community: taking part in voluntary social, charitable and environmental activities towards the betterment of a community.',
      ],
    },
    { id: 'p2x-csr-h2', type: 'heading' as const, level: 2 as const, text: 'Corporate Social Responsibility (CSR)' },
    {
      id: 'p2x-csr-meaning',
      type: 'list' as const,
      text: [
        'The term used when a business takes responsibility for its impact on society and the environment.',
        'An ethical way of doing business in the interest of both the business and the wider community.',
        'A business must be careful that all its actions protect the environment and improve the quality of life for citizens.',
        'The goal of CSR is to have a positive impact on the environment, consumers, employees, communities and other stakeholders.',
      ],
    },
    { id: 'p2x-csr-init-h1', type: 'heading' as const, level: 2 as const, text: 'Initiatives Businesses Can Take to Address Poverty and Inequality' },
    {
      id: 'p2x-csr-init-poverty',
      type: 'list' as const,
      text: [
        'Provide bursaries to matriculants for further studies, or learnerships/apprenticeships for scarce skills.',
        'Develop employees’ skills; invest in a young starting SME that can be a competitor, buyer or supplier.',
        'Organise and encourage entrepreneurial programmes for startups to stimulate economic growth.',
        'Offer employee volunteer programs; support government poverty alleviation programs.',
        'Donate money/food parcels to local NGOs.',
        'Increase employment through economic growth; improve infrastructure and services in poor communities.',
        'Encourage entrepreneurship through business training and mentoring entrepreneurs.',
      ],
    },
    { id: 'p2x-csr-init-hiv-h1', type: 'heading' as const, level: 2 as const, text: 'Initiatives Businesses Can Take to Address HIV/Aids' },
    {
      id: 'p2x-csr-init-hiv',
      type: 'list' as const,
      text: [
        'Develop/train counselling programs for infected and affected persons/employees.',
        'Conduct regular workshops and information sessions on the effects of HIV/AIDS.',
        'Roll out anti-retroviral (ARV) treatment programs (ART) for infected employees.',
        'Encourage employees to join HIV/Aids support groups; develop strategies to deal with stigma and discrimination.',
        'Participate in HIV/Aids prevention programmes implemented in the community.',
        'Support non-governmental/community-based organisations working with people infected/affected by HIV/Aids.',
      ],
    },
    { id: 'p2x-csr-init-unemp-h1', type: 'heading' as const, level: 2 as const, text: 'Initiatives Businesses Can Take to Address Unemployment' },
    {
      id: 'p2x-csr-init-unemp',
      type: 'list' as const,
      text: [
        'Provide skills development programs through learnerships.',
        'Offer bursaries to the community to improve education levels; create jobs for members of the community.',
        'Provide entrepreneurial programs that promote self-employment.',
        'Support existing small businesses to create more employment opportunities.',
      ],
    },
    { id: 'p2x-csr-init-crime-h1', type: 'heading' as const, level: 2 as const, text: 'Initiatives Businesses Can Take to Address Crime (and Violence)' },
    {
      id: 'p2x-csr-init-crime',
      type: 'list' as const,
      text: [
        'Encourage employees to participate in community policing forums.',
        'Offer employment; get involved in sustainable community projects.',
        'Sponsor special sports programmes by providing finance for community events.',
        'Adopt a school, providing most of its needs.',
        'For violence: provide an employee assistance program (EAP) and counselling facilities, or refer victims to private counsellors.',
      ],
    },
    { id: 'p2x-csr-init-gambling-h1', type: 'heading' as const, level: 2 as const, text: 'Initiatives Businesses Can Take to Address Gambling' },
    {
      id: 'p2x-csr-init-gambling',
      type: 'list' as const,
      text: ['Offer financial literacy education.', 'Make use of organisations such as Gamblers Anonymous and the National Council on Problem Gambling to help gamblers fight their addiction.'],
    },
    { id: 'p2x-csr-other-h1', type: 'heading' as const, level: 2 as const, text: 'Other Examples of CSR Initiatives' },
    {
      id: 'p2x-csr-other',
      type: 'list' as const,
      text: [
        'Reducing carbon footprints; donations to charities; volunteering in the community.',
        'Producing socially responsible goods and services; treating employees in a socially responsible way.',
        'Ensuring production techniques are socially responsible; initiating community projects.',
      ],
    },
    {
      id: 'p2x-csr-tip',
      type: 'callout' as const,
      text: 'Exam Tip: Interview-and-evaluate questions (a common Paper 2 task) ask you to interview local businesses on initiatives taken, and then evaluate how well those initiatives addressed the socio-economic issue — e.g. fewer complaints, more jobs created, reduced crime statistics, improved health outcomes.',
    },
    {
      id: 'p2x-csr-qa',
      type: 'questions' as const,
      qa: [
        { q: 'Define "social responsibility" and "Corporate Social Responsibility," and distinguish between them.', marks: 6, a: ['Social responsibility: any person/group/organisation has a responsibility to act in a way that benefits society as a whole.', 'CSR: the term specifically used when a BUSINESS takes responsibility for its impact on society and the environment, as an ethical way of doing business.'] },
        { q: 'Recommend TWO initiatives businesses can take to address poverty and inequality.', marks: 4, a: ['Provide bursaries or learnerships/apprenticeships for scarce skills.', 'Donate money/food parcels to local NGOs (any 2).'] },
        { q: 'Suggest TWO initiatives a business can take to address the impact of HIV/Aids on its employees.', marks: 4, a: ['Develop/train counselling programs for infected/affected employees.', 'Roll out ARV treatment programs for infected employees (any 2).'] },
        { q: 'Recommend TWO initiatives businesses can take to address unemployment, and TWO to address crime.', marks: 8, a: ['Unemployment: provide skills development programs through learnerships; create jobs for community members.', 'Crime: encourage employees to join community policing forums; adopt a school by providing most of its needs.'] },
        { q: 'How can businesses help employees who struggle with gambling addiction?', marks: 2, a: 'Offer financial literacy education, and use organisations such as Gamblers Anonymous and the National Council on Problem Gambling.' },
      ],
    },
  ],
}
  ],
};
