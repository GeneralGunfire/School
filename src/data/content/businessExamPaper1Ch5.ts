import type { Chapter } from '@/lib/types';

/**
 * Scope: Macro-Environment — scope-only chapter for the Business Studies Paper 1 exam topic.
 * Contains ONLY the content from the student's Paper 1 scope sheet that maps to
 * this source chapter. See src/data/content/businessExamPaper1.ts for the full
 * scope Overview checklist.
 */

const L3_MACRO = {
  id: 'bs-p1x-l3-macro',
  chapterId: 'business-exam-p1-ch5',
  subjectId: 'business' as const,
  title: 'Macro-Environment & Its Components',
  minutes: 20,
  blocks: [
    { id: 'bs-p1x-l3-h1', type: 'heading' as const, level: 2 as const, text: 'The Macro Environment / External Environment' },
    {
      id: 'bs-p1x-l3-tip',
      type: 'callout' as const,
      text: ' Exam Tip: The macro-environment is the OUTERMOST, LEAST controllable environment. Businesses have NO control over it — they can only adapt/develop strategies. Do not confuse this with the market environment, where the business can still influence to some extent.',
    },
    {
      id: 'bs-p1x-l3-meaning',
      type: 'list' as const,
      text: [
        'The macro-environment includes all the forces/events and circumstances that affect the business and its market environment.',
        'It refers to the interaction of businesses with forces outside of themselves.',
        'This is the environment that is located outside the business.',
        'The macro environment is also known as the external environment.',
        'The business cannot control this environment but it can influence it.',
        'The macro environment is always developing and changing.',
        'Businesses have no control over this environment as it poses challenges to businesses.',
      ],
    },
    { id: 'bs-p1x-l3-h2', type: 'heading' as const, level: 3 as const, text: 'Components of the Macro Environment' },
    {
      id: 'bs-p1x-l3-components',
      type: 'list' as const,
      text: [
        'Physical/Natural environment',
        'Economic environment',
        'Social, cultural and demographic environment',
        'Technological environment',
        'Legal environment and political environment',
        'International/Global environment',
        'Institutional environment',
      ],
    },
    { id: 'bs-p1x-l3-h3', type: 'heading' as const, level: 2 as const, text: 'Key Definitions' },
    {
      id: 'bs-p1x-l3-def-table',
      type: 'definitions' as const,
      rows: [
        { term: 'Cultural environment', meaning: 'The cultural environment affecting businesses includes religion, customs, and traditions, which influence actions and decisions.' },
        { term: 'Demographic environment', meaning: 'Refers to the socio-economic characteristics of a population, which businesses use to identify the product preferences and purchasing behaviours of customers.' },
        { term: 'Economic environment', meaning: 'Refers to all the external economic factors that influence buying habits of consumers and businesses.' },
        { term: 'International/global environment', meaning: 'Refers to the international interactions that influence how businesses operate.' },
        { term: 'Legal environment', meaning: 'The laws passed by the government in which businesses operate.' },
        { term: 'Physical/Natural environment', meaning: 'Refers to natural and man-made variables that surround businesses.' },
        { term: 'Technological environment', meaning: 'Refers to developments in the field of technology with new and innovative knowledge, new inventions, and other improvements in techniques that affect businesses.' },
        { term: 'Institutional environment', meaning: 'Refers to the three levels of government in South Africa, that put in place laws and rules that regulate how businesses operate.' },
      ],
    },
    { id: 'bs-p1x-l3-h4', type: 'heading' as const, level: 2 as const, text: 'Physical/Natural Environment' },
    {
      id: 'bs-p1x-l3-physical',
      type: 'list' as const,
      text: [
        'These are forces present in the natural environment, such as natural resources/pollution/increased cost of energy/infrastructure.',
        'Businesses that use raw materials to transform them into useful products, such as clothing and electricity, need nature for their survival.',
        'Ecological aspects: weather and climate influence the availability of natural resources.',
        'Non-renewable resources: depletion of non-renewable resources.',
        'Pollution: air, water, noise pollution.',
      ],
    },
    {
      id: 'bs-p1x-l3-physical-challenges',
      type: 'list' as const,
      text: [
        'The physical location of a business has a large effect on the success of the business.',
        'Unpredictable weather may cause significant disruption to businesses.',
        'Manufacturing businesses dump waste materials that impact negatively on the physical environment.',
        'Some natural resources are scarce and expensive, e.g. sources of energy are expensive, which increases production costs and prices.',
      ],
    },
    { id: 'bs-p1x-l3-h5', type: 'heading' as const, level: 2 as const, text: 'International/Global Environment' },
    {
      id: 'bs-p1x-l3-global',
      type: 'list' as const,
      text: [
        'Globalisation refers to an increase in trade and investment between countries (international trade).',
        'Health issues: such as the COVID-19 pandemic, Ebola virus, and so on.',
        'Challenges: increased competition from businesses around the world; businesses unable to import/export during lockdown periods; many businesses face liquidation; businesses are expected to understand the cultures of foreign people.',
      ],
    },
    { id: 'bs-p1x-l3-h6', type: 'heading' as const, level: 2 as const, text: 'The Economic Environment' },
    {
      id: 'bs-p1x-l3-eco-tip',
      type: 'callout' as const,
      text: ' Learn interest rates, inflation, exchange rates, and economic growth (business cycle) as the FOUR core economic factors — scenario questions often give a Rand exchange-rate or interest-rate change and ask you to explain the effect.',
    },
    {
      id: 'bs-p1x-l3-eco',
      type: 'list' as const,
      text: [
        'The economic environment includes all those factors that affect financial matters, e.g. interest rates/inflation/business cycle, etc.',
        'Interest rates are the charges people and businesses pay for the cost of borrowing money.',
        'Inflation refers to the general increase in the prices of goods and services in the economy.',
        'Exchange rates: the price of the Rand in terms of another currency/imports and exports.',
        'Economic growth: upswing/downswing economic activity of business cycles.',
      ],
    },
    {
      id: 'bs-p1x-l3-eco-challenges',
      type: 'list' as const,
      text: [
        'Economic changes affect business: if the rand becomes weaker, businesses are more likely to export products successfully.',
        'If interest rates increase, the business will pay more monthly instalments to the bank for the loan taken.',
        'High inflation means consumers will have less money to spend on goods/services.',
        'If taxation goes up, businesses will be charged more on their profit, and people will have less money to spend on buying goods and services.',
        'Exchange rates influence international trade, as it becomes expensive to buy raw materials and machinery from overseas.',
      ],
    },
    { id: 'bs-p1x-l3-h7', type: 'heading' as const, level: 2 as const, text: 'Social, Cultural & Demographic Environment' },
    {
      id: 'bs-p1x-l3-social',
      type: 'list' as const,
      text: [
        'Social issues: includes issues such as poverty, unemployment and crime.',
        'Health issues: includes issues such as HIV/AIDS and TB.',
        'Low levels of literacy: large numbers of people in South Africa are poorly educated and are therefore unskilled.',
        'The cultural and social environment can be defined as the sum total of the languages/values/cultural norms/preferences/religions and beliefs.',
        'The demographic environment refers to the composition of a country\'s inhabitants, e.g. their age/residential areas/skill level/income level, etc.',
      ],
    },
    {
      id: 'bs-p1x-l3-social-challenges',
      type: 'list' as const,
      text: [
        'Social issues such as poverty, HIV/AIDS, unemployment, low levels of literacy and crime can affect consumers\' spending, employee productivity, and business profitability.',
        'Social and cultural diversity have the potential to create conflict in the workplace.',
        'Employees from different cultural backgrounds may have different cultural norms/preferences/beliefs, etc.',
        'Businesses may not be conversant with the local language of their customers.',
      ],
    },
    { id: 'bs-p1x-l3-h8', type: 'heading' as const, level: 2 as const, text: 'The Technological Environment' },
    {
      id: 'bs-p1x-l3-tech',
      type: 'list' as const,
      text: [
        'These factors include the development of new technological products and services.',
        'The rise of information technology, such as computers and communication technology, allows for a rapid flow of large amounts of digital information/ICT.',
        'Technical skills: a skilled technical workforce is needed, and this requires training and retaining employees.',
        'High maintenance costs: it is expensive to buy new technology, but it is also costly to maintain it.',
        'Security in cryptography: the risk of cyberattacks includes stealing/erasing/changing data.',
      ],
    },
    {
      id: 'bs-p1x-l3-tech-challenges',
      type: 'list' as const,
      text: [
        'Many businesses may not be able to succeed without internet connectivity.',
        'Employees may not be skilled to operate/maintain new technology/equipment.',
        'Businesses experiencing systems failure will be rendered paralysed, which will cause businesses to lose capital due to stalling in operations.',
        'IT systems can be hacked by fraudsters.',
      ],
    },
    { id: 'bs-p1x-l3-h9', type: 'heading' as const, level: 2 as const, text: 'The Legal Environment' },
    {
      id: 'bs-p1x-l3-legal',
      type: 'list' as const,
      text: [
        'The legal component of the macro-environment consists of the legislation that has been passed.',
        'The government plays a large role in the development of policies and legal frameworks.',
      ],
    },
    {
      id: 'bs-p1x-l3-legal-categories',
      type: 'definitions' as const,
      rows: [
        { term: 'Business law', meaning: 'Skills Development Act (SDA); Broad-Based Black Economic Empowerment (BBBEE); Employment Equity Act (EEA).' },
        { term: 'Labour law', meaning: 'Labour Relations Act (LRA); Basic Conditions of Employment Act (BCEA); Compensation for Occupational Injuries and Diseases Act (COIDA) — dictates how employees should be treated.' },
        { term: 'Consumer law', meaning: 'National Credit Act (NCA); Consumer Protection Act (CPA) — to protect consumers.' },
        { term: 'Competition laws', meaning: 'A law that promotes market competition by regulating anti-competitive conduct by companies.' },
        { term: 'Municipal by-laws', meaning: 'A law passed by the local government, such as zoning ordinances, business hours, permits and licences.' },
      ],
    },
    {
      id: 'bs-p1x-l3-legal-challenges',
      type: 'list' as const,
      text: [
        'An unstable government and poor relationship between the government and business creates a negative political environment.',
        'Legal requirements for businesses to operate are time-consuming to implement.',
        'Businesses are affected by legislation such as the National Credit Act and the Consumer Protection Act.',
        'Businesses have to apply for a trading licence before they are able to legally trade.',
      ],
    },
    { id: 'bs-p1x-l3-h10', type: 'heading' as const, level: 2 as const, text: 'Political / Institutional Environment' },
    {
      id: 'bs-p1x-l3-political',
      type: 'list' as const,
      text: [
        'This refers to the three spheres of government, e.g. local, provincial and national government.',
        'Political instability: strikes/protests impact on investment, consumption, and economic growth.',
        'Tax policy: tax rates decided by the government impact businesses.',
        'Corruption: corruption impacts the implementation of the rule of law and democratic values.',
      ],
    },
    {
      id: 'bs-p1x-l3-political-challenges',
      type: 'list' as const,
      text: [
        'The provincial government has an indirect impact on businesses through its role in providing services such as health, housing and education.',
        'Strikes/protests cause political instability and delays in productivity.',
        'Increased taxation has the same effect as an increase in costs.',
        'Reports of corruption in businesses can cause shareholders and investors to lose trust and confidence in a business.',
      ],
    },
    {
      id: 'bs-p1x-l3-qa',
      type: 'questions' as const,
      qa: [
        { q: 'Define the term "macro-environment."', marks: 2, a: 'The macro-environment includes all the forces/events and circumstances that affect the business and its market environment. It is located outside the business and is also known as the external environment.' },
        { q: 'Name any FOUR components of the macro environment.', marks: 4, a: ['Physical/Natural environment', 'Economic environment', 'Social, cultural and demographic environment', 'Technological environment (any 4 of the 7 listed — also: Legal, Political/Institutional, International/Global)'] },
        { q: 'Distinguish between the "cultural environment" and the "demographic environment."', marks: 4, a: ['The cultural environment includes religion, customs, and traditions, which influence actions and decisions.', 'The demographic environment refers to the socio-economic characteristics of a population (e.g. age, income, residential area), which businesses use to identify product preferences and purchasing behaviour.'] },
        { q: 'Explain the effect of an increase in interest rates on a business that has taken out a loan.', marks: 2, a: 'If interest rates increase, the business will have to pay more in monthly instalments to the bank for the loan it has taken out.' },
        { q: 'Name TWO Acts that fall under "labour law."', marks: 2, a: ['Labour Relations Act (LRA)', 'Basic Conditions of Employment Act (BCEA) — (or Compensation for Occupational Injuries and Diseases Act, COIDA)'] },
        {
          q: 'ESSAY-style: Discuss how the political and institutional environment poses challenges to businesses. (100–150 words)',
          marks: 8,
          a: 'The political and institutional environment refers to the three spheres of government — local, provincial and national — that make rules and regulations to control business activity. Political instability, such as strikes and protests, impacts on investment, consumption and economic growth, and causes delays in business productivity. Government tax policy also affects businesses directly: increased taxation has the same effect on a business as an increase in costs, reducing profitability. Corruption is another major challenge — reports of corruption can cause shareholders and investors to lose trust and confidence in a business, and may even lead to consumer boycotts. The provincial government also has an indirect impact through its role in providing services such as health, housing and education. Businesses therefore need strategies to adapt to the political and institutional environment, since they have no control over it.',
        },
      ],
    },
  ],
};

export const BUSINESS_EXAM_P1_CH5: Chapter = {
  id: 'business-exam-p1-ch5',
  subjectId: 'business',
  title: 'Scope: Macro-Environment',
  summary: 'Only the content on your Paper 1 exam scope — nothing outside it.',
  paper: 1,
  hidden: true,
  lessons: [L3_MACRO],
};
