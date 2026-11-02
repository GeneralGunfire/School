import type { Chapter } from '@/lib/types';

/**
 * Scope: Relationship Between Environments — scope-only chapter for the Business Studies Paper 1 exam topic.
 * Contains ONLY the content from the student's Paper 1 scope sheet that maps to
 * this source chapter. See src/data/content/businessExamPaper1.ts for the full
 * scope Overview checklist.
 */

const L4_RELATIONSHIP = {
  id: 'bs-p1x-l4-relationship',
  chapterId: 'business-exam-p1-ch6',
  subjectId: 'business' as const,
  title: 'Relationship Between the Business Environments',
  minutes: 14,
  blocks: [
    { id: 'bs-p1x-l4-h1', type: 'heading' as const, level: 2 as const, text: 'Interrelationships Between the Micro and Market Environment' },
    {
      id: 'bs-p1x-l4-tip',
      type: 'callout' as const,
      text: ' Exam Tip: "Interrelationship" questions ask you to show HOW one environment/component depends on or affects another — always explain the connection in both directions, not just describe each part on its own.',
    },
    {
      id: 'bs-p1x-l4-intro',
      type: 'paragraph' as const,
      text: 'The business environments are related to each other, as they cannot operate in isolation. The business does not have a purpose without the market environment.',
    },
    { id: 'bs-p1x-l4-h2', type: 'heading' as const, level: 3 as const, text: 'Business and Consumers' },
    {
      id: 'bs-p1x-l4-consumers',
      type: 'list' as const,
      text: [
        'Consumers are people who are willing and able to pay for the business\'s products/services.',
        'Consumers depend on businesses for their goods and services to satisfy their needs and wants, and businesses also depend on consumers for their income when consumers buy from them.',
        'The business needs to market/advertise its goods and services to ensure that there is a demand for them.',
        'The business needs to carry out market research to determine the appropriate type of goods and services and the best price for them.',
        'The public relations department should ensure that the business has a good image and that its consumers remain loyal.',
      ],
    },
    { id: 'bs-p1x-l4-h3', type: 'heading' as const, level: 3 as const, text: 'Business and Suppliers' },
    {
      id: 'bs-p1x-l4-suppliers',
      type: 'list' as const,
      text: [
        'Suppliers provide raw materials, inputs, equipment and business services that a business needs to produce its products.',
        'Without raw materials from suppliers, a business cannot produce its goods or services.',
        'The business needs to ensure that it is using the best supplier to get the best quality for the best price.',
        'Businesses need to communicate with suppliers about the latest developments in technology and products.',
        'Businesses need to pay their suppliers, as they are also customers (of the supplier).',
      ],
    },
    { id: 'bs-p1x-l4-h4', type: 'heading' as const, level: 3 as const, text: 'Business and Intermediaries' },
    {
      id: 'bs-p1x-l4-intermediaries',
      type: 'list' as const,
      text: [
        'Intermediaries help businesses to distribute and sell goods to customers.',
        'They are the link between the business and the consumers.',
        'Businesses need to maintain a good relationship with the intermediaries.',
        'Intermediaries help the business to access consumers and they influence its sales.',
        'Intermediaries are also the customers of the business, and so businesses need to always treat them with care.',
      ],
    },
    { id: 'bs-p1x-l4-h5', type: 'heading' as const, level: 3 as const, text: 'Business and Competitors' },
    {
      id: 'bs-p1x-l4-competitors',
      type: 'list' as const,
      text: [
        'Competitors are businesses that produce the same product/services for the same target market.',
        'The business needs to study the activities of its competitors and devise strategies to provide goods or services that are better than those offered by their competitors.',
        'Increased competition will lead to lower prices of goods and services.',
        'Competitors influence the prices and quality of the products.',
        'Businesses must be up to date with current trends and the latest technology to remain competitive in the market.',
      ],
    },
    { id: 'bs-p1x-l4-h6', type: 'heading' as const, level: 2 as const, text: 'The Relationship Between Micro, Market and Macro Environments' },
    {
      id: 'bs-p1x-l4-three-tip',
      type: 'callout' as const,
      text: ' Exam Tip: Remember the control gradient — FULL control (micro) → LITTLE/influence only (market) → NO control, must adapt (macro). This is one of the most commonly tested ideas in the whole Business Environments topic.',
    },
    {
      id: 'bs-p1x-l4-three-list',
      type: 'list' as const,
      text: [
        'A change in the macro environment may cause a change in the micro environment which may in turn create a change in the market environment, e.g. an increase in the rate of interest may lead to an increase in production costs, which may reduce consumer spending.',
        'Businesses (the micro environment) are in constant interaction with components of the market and macro environment.',
        'Businesses are challenged by changes in the market and macro environment which cannot be controlled by the business.',
        'A change in the economic environment may lead to a change in the technological environment and the way in which people spend money.',
        'The legal, political and institutional environment has a large impact on other business environments, e.g. politics and laws affect the economic environment.',
        'The business has full control over all elements/features of the micro environment.',
        'The business has less/little control over the market environment, but it can influence it.',
        'The business has no control over the macro environment, but it must develop strategies to adapt to the challenges that are posed by this environment.',
      ],
    },
    { id: 'bs-p1x-l4-h7', type: 'heading' as const, level: 3 as const, text: 'Worked Example: Micro-Environment Links' },
    {
      id: 'bs-p1x-l4-micro-examples',
      type: 'list' as const,
      text: [
        'Businesses need managers to develop their vision, mission and objectives.',
        'The business\'s vision and goals will also influence the business culture and its organisational structure.',
        'The financial function must ensure that sufficient funds are available to finance other business functions.',
        'The marketing function must identify consumer needs and advise the production function on products that need to be produced.',
      ],
    },
    {
      id: 'bs-p1x-l4-qa',
      type: 'questions' as const,
      qa: [
        { q: 'Explain the amount of control a business has over each of the three business environments.', marks: 6, a: ['The business has full control over all elements/features of the micro environment.', 'The business has less/little control over the market environment, but it can influence it.', 'The business has no control over the macro environment, but it must develop strategies to adapt to the challenges posed by this environment.'] },
        { q: 'Using an example, explain how a change in the macro environment can lead to a change in the market environment.', marks: 4, a: 'An increase in the interest rate (macro/economic environment) may lead to an increase in production costs for the business (micro environment), which may in turn reduce consumer spending (market environment) — showing how the three environments are interrelated and not isolated from each other.' },
        { q: 'Explain the interrelationship between a business and its consumers.', marks: 4, a: ['Consumers depend on businesses for goods and services to satisfy their needs and wants.', 'Businesses depend on consumers for their income when consumers buy from them.', 'The business must market/advertise its goods and carry out market research to determine the best products and prices for its consumers.'] },
        { q: 'Explain why intermediaries are also regarded as customers of the business.', marks: 2, a: 'The business sells its goods and services to the intermediaries, who then distribute and sell them to consumers — so intermediaries buy from the business before selling onward, making them customers of the business too.' },
      ],
    },
  ],
};

export const BUSINESS_EXAM_P1_CH6: Chapter = {
  id: 'business-exam-p1-ch6',
  subjectId: 'business',
  title: 'Scope: Relationship Between Environments',
  summary: 'Only the content on your Paper 1 exam scope — nothing outside it.',
  paper: 1,
  hidden: true,
  lessons: [L4_RELATIONSHIP],
};
