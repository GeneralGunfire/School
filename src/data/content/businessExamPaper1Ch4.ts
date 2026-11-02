import type { Chapter } from '@/lib/types';

/**
 * Scope: Market Environment & SWOT — scope-only chapter for the Business Studies Paper 1 exam topic.
 * Contains ONLY the content from the student's Paper 1 scope sheet that maps to
 * this source chapter. See src/data/content/businessExamPaper1.ts for the full
 * scope Overview checklist.
 */

const L2_MARKET_SWOT = {
  id: 'bs-p1x-l2-market',
  chapterId: 'business-exam-p1-ch4',
  subjectId: 'business' as const,
  title: 'Market Environment Components & SWOT',
  minutes: 18,
  blocks: [
    { id: 'bs-p1x-l2-h1', type: 'heading' as const, level: 2 as const, text: 'The Market Environment' },
    {
      id: 'bs-p1x-l2-tip',
      type: 'callout' as const,
      text: ' Exam Tip: The market environment sits between the micro-environment (full control) and the macro-environment (no control) — the business has LITTLE or NO control here but CAN influence it. TWO ASPECTS of the market environment will be asked — be ready to apply any two components below.',
    },
    { id: 'bs-p1x-l2-h2', type: 'heading' as const, level: 3 as const, text: 'Meaning of the Market Environment' },
    {
      id: 'bs-p1x-l2-meaning',
      type: 'list' as const,
      text: [
        'The market environment refers to the immediate external components that directly affect the ability of the business to operate.',
        'Challenges and influences outside the business.',
        'For the business to be successful it must be able to influence the components in this environment.',
        'Businesses have little or no control over the environment.',
        'All elements that determine the reasons for the existence of a business.',
        'Includes all forces/stakeholders that have a direct effect on the functioning of the business.',
      ],
    },
    { id: 'bs-p1x-l2-h3', type: 'heading' as const, level: 3 as const, text: 'Components of the Market Environment' },
    {
      id: 'bs-p1x-l2-components',
      type: 'list' as const,
      text: [
        'Customers/the market',
        'Suppliers',
        'Intermediaries/Agents',
        'Competitors',
        'Other organisations/Civil society (CBOs, NGOs, regulators, unions, strategic alliances)',
      ],
    },
    { id: 'bs-p1x-l2-h4', type: 'heading' as const, level: 3 as const, text: 'Customers/Consumers/The Market' },
    {
      id: 'bs-p1x-l2-customers',
      type: 'list' as const,
      text: [
        'The market refers to all the people who have money to buy goods and services. These people are known as consumers or customers.',
        'Customers are the buyers/final users of products and services offered by businesses.',
        'Their spending decision is influenced by cultural, social, personal, and psychological factors.',
        'Customers\' preferences and tastes change over time, so businesses must conduct market research to ensure their target market\'s changing needs are continuously met.',
        'If customers are not happy with the products or services of a business, they will turn to a competitor.',
        'Businesses should understand their customers\' needs and wants in order to build a good relationship with them.',
        'The more customers the business has, the more money flows through the business.',
        'The government is also a customer, as it buys goods/services from businesses through contracts and tenders.',
      ],
    },
    { id: 'bs-p1x-l2-h5', type: 'heading' as const, level: 3 as const, text: 'Suppliers' },
    {
      id: 'bs-p1x-l2-suppliers',
      type: 'list' as const,
      text: [
        'Suppliers are individuals/agents who provide the raw materials, transport and other services to the business.',
        'The business needs inputs from suppliers to produce goods and services.',
        'Suppliers play an important role in the success or failure of a business, e.g. consumers will purchase the product/services from another business if a supplier is unable to supply a particular product/service.',
        'Businesses usually choose suppliers who provide the best quality of goods, correct quantity and deliver goods at the agreed-upon times and at the best price.',
        'Producers and manufacturers are examples of suppliers, as they supply raw materials.',
        'Businesses can establish a good relationship with their suppliers by signing long-term contracts for their raw materials at fixed prices.',
      ],
    },
    { id: 'bs-p1x-l2-h6', type: 'heading' as const, level: 3 as const, text: 'Intermediaries/Agents' },
    {
      id: 'bs-p1x-l2-intermediaries',
      type: 'list' as const,
      text: [
        'The intermediaries of a business are all those businesses that play a role in distributing/promoting the goods and services to customers.',
        'They bridge the gap between the manufacturer and the consumer.',
        'They serve as a link between the micro-environment and the market environment.',
        'Intermediaries make it easier for the consumer to access the product, by selling the product closer to the consumer\'s location.',
        'Intermediaries often affect the final price of goods and services, as they place a mark-up on the product before they sell it to consumers.',
        'Many intermediaries/agents receive a commission on the sale of products.',
        'Examples of intermediaries: retailers, agents, and wholesalers; financial institutions and insurance brokers.',
      ],
    },
    { id: 'bs-p1x-l2-h7', type: 'heading' as const, level: 3 as const, text: 'Competitors & Competition' },
    {
      id: 'bs-p1x-l2-competitors',
      type: 'list' as const,
      text: [
        'Competitors are all businesses that provide similar products or services for more or less the same target market.',
        'Businesses also compete with other businesses for skilled employees/raw materials/equipment/finance, etc.',
        'Businesses are forced to offer quality products or services at the lowest possible prices, or they will lose customers to competitors.',
        'Examples of competitors in the retail market: Spar and Shoprite, Woolworths and Truworths, MTN and Vodacom, etc.',
        'Competition also comes from businesses that produce possible substitute goods.',
        'Competition is beneficial to customers because it keeps prices down.',
        'Competition also promotes innovation and encourages businesses to be more productive.',
      ],
    },
    { id: 'bs-p1x-l2-h8', type: 'heading' as const, level: 3 as const, text: "Porter's Five Forces Model (Competition is influenced by)" },
    {
      id: 'bs-p1x-l2-porter',
      type: 'list' as const,
      text: ['New entrants to the market', 'Power of suppliers', 'Power of consumers', 'Threats of substitute products/services', 'Competitive rivalry'],
    },
    { id: 'bs-p1x-l2-h9', type: 'heading' as const, level: 3 as const, text: 'Other Organisations & Civil Society' },
    {
      id: 'bs-p1x-l2-civil-intro',
      type: 'paragraph' as const,
      text: 'Civil society/other organisations are those organisations that deal with social problems. These organisations include non-government organisations (NGOs), community-based organisations (CBOs), unions, regulators, strategic allies, etc. A CBO could affect the operation of a business through lobbying.',
    },
    {
      id: 'bs-p1x-l2-civil-def',
      type: 'definitions' as const,
      rows: [
        { term: 'CBOs', meaning: 'Community-based organisations that are established to assist the community with job creation, socio-economic development, and becoming self-sufficient. Local organisations operating in the community to provide social services aimed at social upliftment; focus on issues such as HIV/AIDS, unemployment, crime, illiteracy.' },
        { term: 'NGOs', meaning: 'Non-governmental organisations — non-profit organisations that operate separately from the government. Established to fulfil important needs in the community by addressing socio-economic issues. Part of the market environment because they supply consumer goods and services and are concerned about the welfare of others.' },
        { term: 'Regulators', meaning: 'Government bodies that make rules and regulations to control the activities of businesses, ensuring businesses do not exploit customers or employees. Examples: NERSA (energy), NCR (credit), ICASA (communications/broadcasting/postal), ASA (advertising).' },
        { term: 'Unions', meaning: 'Established bodies that protect the interests of workers. Have the right to call for industrial action (strikes/go-slows) if demands are not met. Negotiate for better wages/salaries/working conditions and safeguard members against unfair dismissal.' },
        { term: 'Strategic allies', meaning: 'Businesses that combine their resources to undertake a project that will benefit all of them, sharing expertise and information. Helps businesses explore new markets and gain competitive advantage.' },
      ],
    },
    { id: 'bs-p1x-l2-h10', type: 'heading' as const, level: 2 as const, text: 'SWOT Analysis' },
    {
      id: 'bs-p1x-l2-swot-tip',
      type: 'callout' as const,
      text: ' Exam Tip: SWOT = Strengths and Weaknesses are INTERNAL (micro-environment, within the business\'s control); Opportunities and Threats are EXTERNAL (market environment, outside the business\'s control). Scenario questions often ask you to identify an opportunity OR threat, quoting the scenario.',
    },
    {
      id: 'bs-p1x-l2-swot-intro',
      type: 'paragraph' as const,
      text: 'Businesses are faced with both opportunities and threats in the market environment in which they operate. Businesses do not have any control over these; however, they can influence them to some extent. Management sees competition as both an opportunity and a threat.',
    },
    { id: 'bs-p1x-l2-h11', type: 'heading' as const, level: 3 as const, text: 'Meaning of Opportunities' },
    {
      id: 'bs-p1x-l2-opportunities',
      type: 'list' as const,
      text: [
        'Opportunity takes place when consumers are made aware of the product if it is marketed by different businesses.',
        'Opportunities are any factors in the external environment that will contribute, or are already contributing, to the success of the business.',
        'Businesses need to constantly seek opportunities in their external environment in order to remain competitive.',
        'Opportunities will always be available when consumers need to satisfy their needs.',
      ],
    },
    { id: 'bs-p1x-l2-h12', type: 'heading' as const, level: 3 as const, text: 'Meaning of Threats' },
    {
      id: 'bs-p1x-l2-threats',
      type: 'list' as const,
      text: [
        'Threats are any factors in the external environment that will stand in the way, or are already standing in the way, of businesses achieving their goals.',
        'Businesses have the challenge of constantly identifying threats in the external environment and devising strategies to turn them into opportunities, otherwise they will not be successful.',
        'A threat exists if a business is unable to produce/perform as desired because of reasons outside the business such as competition/legislation/global economic trends.',
      ],
    },
    {
      id: 'bs-p1x-l2-ot-examples',
      type: 'definitions' as const,
      rows: [
        { term: 'Opportunities', meaning: 'Expansion of product lines to serve a broader range of customers; entering into new markets; decline in interest rates; new law which increases consumer minimum wages and salaries; increase in investors in the business; increase in production due to increase in demand.' },
        { term: 'Threats', meaning: 'New competitors entering the market with a lower price; new legislation which could limit business transactions; changing buyer needs and tastes; slower market growth; increase in interest rates; less investment in the business.' },
      ],
    },
    {
      id: 'bs-p1x-l2-qa',
      type: 'questions' as const,
      qa: [
        { q: 'Define the term "market environment."', marks: 2, a: 'The market environment refers to the immediate external components that directly affect the ability of the business to operate. Businesses have little or no control over this environment, but must try to influence it.' },
        { q: 'Explain the role of intermediaries in the market environment.', marks: 4, a: ['Intermediaries distribute and promote goods and services to customers.', 'They bridge the gap between the manufacturer and the consumer.', 'They make it easier for consumers to access the product by selling it closer to the consumer\'s location.', 'Many receive a commission on the sale of products, and they affect the final price through their mark-up.'] },
        { q: 'Name Porter\'s Five Forces that influence competition.', marks: 5, a: ['New entrants to the market', 'Power of suppliers', 'Power of consumers', 'Threats of substitute products/services', 'Competitive rivalry'] },
        { q: 'Distinguish between a CBO and an NGO.', marks: 4, a: ['A CBO is a local, community-based organisation set up to assist the community with job creation and socio-economic development.', 'An NGO is a non-profit organisation that operates separately from government, established to address broader socio-economic issues in the community.'] },
        { q: 'Define the terms "opportunity" and "threat" in a business context.', marks: 4, a: ['An opportunity is any factor in the external environment that will contribute, or is already contributing, to the success of the business.', 'A threat is any factor in the external environment that will stand in the way, or is already standing in the way, of businesses achieving their goals.'] },
        {
          context: 'Scenario: "ABC Traders recently signed a long-term supply contract that locked in low raw material prices for the next three years, just before global prices doubled."',
          q: 'Identify whether this is an opportunity or a threat for ABC Traders, quoting from the scenario, and give a reason for your answer.',
          marks: 3,
          a: ['This is an opportunity for ABC Traders.', 'Quote: "locked in low raw material prices for the next three years, just before global prices doubled."', 'Reason: This factor in the external environment is already contributing to the success of the business, since ABC Traders will pay far less for materials than competitors who did not have such a contract.'],
        },
      ],
    },
  ],
};

export const BUSINESS_EXAM_P1_CH4: Chapter = {
  id: 'business-exam-p1-ch4',
  subjectId: 'business',
  title: 'Scope: Market Environment & SWOT',
  summary: 'Only the content on your Paper 1 exam scope — nothing outside it.',
  paper: 1,
  hidden: true,
  lessons: [L2_MARKET_SWOT],
};
