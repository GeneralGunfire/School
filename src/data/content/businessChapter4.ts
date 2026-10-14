import type { Chapter } from '@/lib/types';

export const BUSINESS_CHAPTER_4: Chapter = {
  id: 'business-ch4',
  subjectId: 'business',
  title: 'Chapter 4: The Market Environment',
  summary: 'Grade 10 Term 1, Paper 1 — The meaning and components of the market environment: customers, suppliers, intermediaries, competitors, civil society/other organisations, regulators, unions, strategic allies, and the opportunities and threats businesses face.',
  paper: 1,
  lessons: [
    // ── Lesson 1: Meaning & Customers ────────────────────────────────────────
    {
      id: 'bs-ch4-meaning-customers',
      chapterId: 'business-ch4',
      subjectId: 'business',
      title: 'The Meaning of the Market Environment & Customers',
      minutes: 10,
      blocks: [
        { id: 'bs4-h1', type: 'heading', level: 2, text: 'The Market Environment' },
        {
          id: 'bs4-tip',
          type: 'callout',
          text: ' Exam Tip: The market environment sits between the micro-environment (full control) and the macro-environment (no control). Businesses have little or no control over it, but must be able to influence its components to succeed.',
        },
        { id: 'bs4-meaning-h', type: 'heading', level: 3, text: '1. The Meaning of the Market Environment' },
        {
          id: 'bs4-meaning',
          type: 'list',
          text: [
            'The market environment refers to the immediate external components that directly affect the ability of the business to operate.',
            'Challenges and influences outside the business.',
            'For the business to be successful it must be able to influence the components in this environment.',
            'Businesses have little or no control over the environment.',
            'All elements that determine the reasons for the existence of a business.',
            'Includes all forces/stakeholders that have a direct effect on the functioning of the business.',
          ],
        },
        { id: 'bs4-components-h', type: 'heading', level: 3, text: '2. Components/Features/Elements of the Market Environment' },
        { id: 'bs4-customers-h', type: 'heading', level: 3, text: '2.1 Customers/Customers/Market' },
        {
          id: 'bs4-customers',
          type: 'list',
          text: [
            'The market refers to all the people who have money to buy goods and services.',
            'These people are known as consumers or customers.',
            'Customers are the buyers/final users of products and services offered by businesses.',
            'Their spending decision is influenced by cultural, social, personal, and psychological factors.',
            'Customer’s preferences and taste does change as time goes by, so it is essential for businesses to conduct market research to ensure that their target market’s changing needs are continuously met.',
            'If customers are not happy with the products or services of a business, they will turn to a competitor.',
            'Businesses should understand their customers’ needs and wants in order to build a good relationship with them.',
            'The more customers the business have the more money they have flowing through the business.',
            'The government is also a customer as it buys goods/services from businesses through contracts and tenders.',
          ],
        },
        {
          id: 'bs4-m1-qa',
          type: 'questions',
          qa: [
            { q: 'Define the term "market environment".', marks: 2, a: 'The market environment refers to the immediate external components that directly affect the ability of the business to operate. Businesses have little or no control over this environment.' },
            { q: 'Explain the meaning of customers as a component of the market environment.', marks: 4, a: ['Customers are the buyers/final users of products and services offered by a business.', 'Their spending decision is influenced by cultural, social, personal, and psychological factors.', 'Businesses should understand their customers’ needs and wants to build a good relationship with them.', 'The government is also a customer as it buys goods/services through contracts and tenders.'] },
          ],
        },
      ],
    },

    // ── Lesson 2: Suppliers & Intermediaries ────────────────────────────────
    {
      id: 'bs-ch4-suppliers-intermediaries',
      chapterId: 'business-ch4',
      subjectId: 'business',
      title: 'Suppliers & Intermediaries',
      minutes: 10,
      blocks: [
        { id: 'bs4-sup-h1', type: 'heading', level: 2, text: '2.2 Suppliers' },
        {
          id: 'bs4-sup',
          type: 'list',
          text: [
            'Suppliers are individuals/agents who provide the raw materials, transport and other services to the business.',
            'The business needs inputs from suppliers to produce goods and services.',
            'Suppliers play an important role in the success or failure of a business e.g. consumers will purchase the product/services from another business if a supplier is unable to supply a particular product/service.',
            'Businesses usually choose suppliers provide the best quality of goods, correct quantity and deliver goods at the agreed upon times and at the best price.',
            'Producers and manufacturers are some examples of suppliers as they supply raw materials.',
            'Businesses can establish a good relationship with their suppliers by signing long-term contracts for their raw materials.',
            'Suppliers are individuals/agents who provide the raw materials/transport/other services to the business.',
            'The business requires suppliers to supply the right quality and quantity at the right time.',
            'Suppliers play an important role in the success or failure of a business e.g. consumers will purchase the product/services from another business if a supplier is unable to supply a particular product/service.',
            'Pricing and credit terms must be considered when choosing suppliers.',
          ],
        },
        { id: 'bs4-inter-h1', type: 'heading', level: 2, text: '2.3 Intermediaries/Agents' },
        {
          id: 'bs4-inter',
          type: 'list',
          text: [
            'The intermediaries of a business are all those businesses that play a role in distributing/promoting the goods and services to customers.',
            'They bridge the gap between the manufacturer and the consumer.',
            'They serve as a link the micro environment to the market environment.',
            'Intermediaries make it easier for the consumer to access the product by selling the product closer to the consumer’s location.',
            'Intermediaries often affect the final price of goods and services as they place a mark-up on the product before they sell it to consumers.',
            'Many intermediaries/Agents receive a commission on the sale of products.',
          ],
        },
        { id: 'bs4-inter-ex-h', type: 'heading', level: 3, text: 'Some of the Examples of Intermediaries Are:' },
        { id: 'bs4-inter-ex', type: 'list', text: ['Retailers, agents, and wholesalers', 'Financial institutions and insurance brokers'] },
        {
          id: 'bs4-si-qa',
          type: 'questions',
          qa: [
            { q: 'Explain the role of suppliers in the market environment.', marks: 4, a: ['Suppliers are individuals/agents who provide the raw materials, transport and other services to the business.', 'They play an important role in the success or failure of a business.', 'Businesses choose suppliers who provide the best quality of goods, correct quantity and deliver at the agreed price.', 'Pricing and credit terms must be considered when choosing suppliers.'] },
            { q: 'Discuss the role of intermediaries/agents in the market environment.', marks: 4, a: ['Intermediaries are businesses that play a role in distributing/promoting goods and services to customers.', 'They bridge the gap between the manufacturer and the consumer.', 'They make it easier for consumers to access the product by selling it closer to the consumer’s location.', 'Many intermediaries receive a commission on the sale of products.'] },
          ],
        },
      ],
    },

    // ── Lesson 3: Competitors ────────────────────────────────────────────────
    {
      id: 'bs-ch4-competitors',
      chapterId: 'business-ch4',
      subjectId: 'business',
      title: 'Competitors',
      minutes: 10,
      blocks: [
        { id: 'bs4-comp-h1', type: 'heading', level: 2, text: '2.4 Competitors' },
        {
          id: 'bs4-comp',
          type: 'list',
          text: [
            'Competitors are all businesses that provide similar products or services for more or less the same target market.',
            'Businesses also compete with other businesses for skilled employees for skilled employees/raw material/equipment/finance etc.',
            'Businesses will be forced to offer quality products or else they will lose their customers to their competitors.',
            'Examples of competitors in the retail market include Spar and Shoprite, Truworths, MTN and Vodacom, etc.',
            'Competition also comes from businesses that produce possible substitute goods.',
            'Competition is influenced by the following Porter’s Five Forces model: New entrants to the market, Power of suppliers, Power of consumers, Threats of substitute products/services, Competitive rivalry.',
            'Competition is beneficial to customers because it keeps prices down.',
            'Competition also promotes innovation and encourages businesses to be more productive.',
          ],
        },
        {
          id: 'bs4-why-challenge-h',
          type: 'heading',
          level: 2,
          text: '4. Reasons Why Competition Poses a Challenge to Businesses',
        },
        {
          id: 'bs4-why-challenge',
          type: 'list',
          text: [
            'Competition keeps prices down and reduces the business profitability.',
            'It forces businesses to find new ways to produce an existing product or develop new products/ services.',
            'A business may close down if it is unable to compete with other businesses.',
            'Competition reduces the business market share and its target market.',
          ],
        },
        {
          id: 'bs4-comp-qa',
          type: 'questions',
          qa: [
            { q: 'Define the term "competitors".', marks: 2, a: 'Competitors are all businesses that provide similar products or services for more or less the same target market.' },
            { q: 'Name the five forces used in Porter’s Five Forces model to describe competition.', marks: 5, a: ['New entrants to the market', 'Power of suppliers', 'Power of consumers', 'Threats of substitute products/services', 'Competitive rivalry'] },
            { q: 'Discuss any THREE reasons why competition poses a challenge to businesses.', marks: 6, a: ['Competition keeps prices down and reduces profitability.', 'It forces businesses to find new ways to produce existing products or develop new ones.', 'A business may close down if it cannot compete with others.', 'Competition reduces market share and target market. (Any THREE)'] },
          ],
        },
      ],
    },

    // ── Lesson 4: Civil Society, CBOs, NGOs & Regulators ────────────────────
    {
      id: 'bs-ch4-civil-regulators',
      chapterId: 'business-ch4',
      subjectId: 'business',
      title: 'Civil Society, CBOs, NGOs & Regulators',
      minutes: 12,
      blocks: [
        { id: 'bs4-other-h1', type: 'heading', level: 2, text: '3. Other Organisations That Form Part of the Market Environment' },
        { id: 'bs4-civil-h', type: 'heading', level: 3, text: '3.1 Civil Society/Other Organisations' },
        {
          id: 'bs4-civil',
          type: 'list',
          text: [
            'Civil society are those organisations that deal with social problems.',
            'These organisations include non-government organisations (NGOs)/ community-based organisations (CBOs) unions/regulators/strategic allies etc.',
            'A CBO could affect the operation of a business through lobbying.',
          ],
        },
        { id: 'bs4-cbo-h', type: 'heading', level: 3, text: 'Community Based Organisations (CBOs)' },
        {
          id: 'bs4-cbo',
          type: 'list',
          text: [
            'Community-based organisations (CBOs) are established to assist the community with job creation, socio-economic development, and becoming self-sufficient.',
            'They are local organisations that operate in the community to provide social services with aim of social upliftment.',
            'They focus on socio-economic issues such as: HIV/AIDS, unemployment, crime, illiteracy.',
          ],
        },
        { id: 'bs4-ngo-h', type: 'heading', level: 3, text: '3.2 Non-Government Organisations (NGOs)' },
        {
          id: 'bs4-ngo',
          type: 'list',
          text: [
            'Non-governmental organisations (NGOs) are non-profit organisations that operate separately from the government. They are established to fulfil important needs in the community by addressing some socio-economic issues.',
            'They are part of the market environment because they supply consumer goods and services.',
            'They are part of the market environment because they supply consumer goods and services and they are concerned about the welfare of others.',
          ],
        },
        {
          id: 'bs4-ngo-reasons-h',
          type: 'heading',
          level: 3,
          text: 'Two Reasons Why NGOs and CBOs Form Part of the Market',
        },
        {
          id: 'bs4-ngo-reasons',
          type: 'list',
          text: [
            'They employ workers and supply and consume goods and services.',
            'They satisfy important needs of the community.',
            'They are concerned with the welfare of others.',
          ],
        },
        { id: 'bs4-reg-h', type: 'heading', level: 3, text: '3.3 Regulators' },
        {
          id: 'bs4-reg',
          type: 'list',
          text: [
            'Regulators are government bodies that make rules and regulations to control the activities of businesses.',
            'These rules and regulations are put in place to ensure that businesses do not exploit their customers or employees.',
          ],
        },
        { id: 'bs4-reg-ex-h', type: 'heading', level: 3, text: 'Some of the Examples of Regulators in South Africa Are:' },
        {
          id: 'bs4-reg-ex',
          type: 'list',
          text: [
            'National Energy Regulator of South Africa (NERSA) which regulates electricity/ piped gas/petroleum pipeline industries etc.',
            'National Credit Regulator (NCR) which regulates the supply of loans/credit by credit providers such as banks and retailer such as clothing and furniture.',
            'Independent Communications Authority of South Africa (ICASA), which regulates the South African communications, broadcasting, and postal services sectors.',
            'Advertising Standards Authority (ASA) regulates advertising in the public interest.',
          ],
        },
        {
          id: 'bs4-cr-qa',
          type: 'questions',
          qa: [
            { q: 'Outline the differences between CBOs and NGOs.', marks: 8, a: ['CBOs are local community-based organisations established to assist the community with job creation and becoming self-sufficient, focusing on issues such as HIV/AIDS, unemployment, crime and illiteracy.', 'NGOs are non-profit organisations operating separately from government, established to fulfil important needs in the community by addressing socio-economic issues more broadly.'] },
            { q: 'Discuss any other TWO organisations of the market environment except CBOs and NGOs.', marks: 6, a: ['Regulators — government bodies that make rules and regulations to control business activities and prevent the exploitation of customers/employees.', 'Unions — established bodies that protect the interest of workers.', '(Any other TWO: strategic allies, competitors, suppliers, intermediaries, etc.)'] },
            { q: 'Name the examples of regulators in South Africa.', marks: 4, a: ['National Energy Regulator of South Africa (NERSA)', 'National Credit Regulator (NCR)', 'Independent Communications Authority of South Africa (ICASA)', 'Advertising Standards Authority (ASA)'] },
          ],
        },
      ],
    },

    // ── Lesson 5: Unions & Strategic Alliances ──────────────────────────────
    {
      id: 'bs-ch4-unions-allies',
      chapterId: 'business-ch4',
      subjectId: 'business',
      title: 'Unions & Strategic Alliances',
      minutes: 8,
      blocks: [
        { id: 'bs4-union-h1', type: 'heading', level: 2, text: '3.4 Unions' },
        {
          id: 'bs4-union',
          type: 'list',
          text: [
            'Unions are established bodies that protect the interest of workers. They have the right to call for industrial actions such as strikes or go-slows if their demands are not met by organisations or the government.',
            'They constantly negotiate for better wages and salaries for their members and also safeguard their members against unfair dismissal.',
            'They also negotiate for better working conditions for their members and may represent them during disciplinary hearings.',
          ],
        },
        { id: 'bs4-ally-h1', type: 'heading', level: 2, text: '3.5 Strategic Alliance' },
        {
          id: 'bs4-ally',
          type: 'list',
          text: [
            'Strategic allies are businesses that combine their resources to undertake a project that will benefit all of them. They may share their expertise and information to benefit all their members.',
            'These relationships help businesses to explore new markets and also gain competitive advantage.',
          ],
        },
        {
          id: 'bs4-ua-qa',
          type: 'questions',
          qa: [
            { q: 'Explain the role of unions as part of the market environment.', marks: 4, a: ['Unions protect the interest of workers and may call for strikes or go-slows if demands are not met.', 'They negotiate for better wages, salaries and working conditions for their members.', 'They safeguard members against unfair dismissal and may represent them during disciplinary hearings.'] },
            { q: 'Explain what is meant by a "strategic alliance".', marks: 4, a: 'A strategic alliance is formed when businesses combine their resources to undertake a project that will benefit all of them. They may share their expertise and information, which helps them explore new markets and gain a competitive advantage.' },
          ],
        },
      ],
    },

    // ── Lesson 6: Opportunities & Threats ───────────────────────────────────
    {
      id: 'bs-ch4-opportunities-threats',
      chapterId: 'business-ch4',
      subjectId: 'business',
      title: 'Opportunities & Threats in the Market Environment',
      minutes: 10,
      blocks: [
        { id: 'bs4-ot-h1', type: 'heading', level: 2, text: '5. Opportunities and Threats Faced by Businesses in the External Environment' },
        {
          id: 'bs4-ot-intro',
          type: 'list',
          text: [
            'Businesses are faced with both opportunities and threats in the market environment in which they operate.',
            'Businesses do not have any control over these however, they can influence them to some extent.',
            'Management sees competition as an opportunity and a threat.',
          ],
        },
        { id: 'bs4-opp-h', type: 'heading', level: 3, text: '5.1 The Meaning of Opportunities' },
        {
          id: 'bs4-opp',
          type: 'list',
          text: [
            'Opportunity takes place when consumers are made aware of the product if it is marketed by different businesses.',
            'Opportunities are any factors in the external environment that will contribute or is already contributing to the success of the business.',
            'Businesses need to constantly seek opportunities in their external environment in order to remain competitive.',
            'Opportunities will always be available when consumers need to satisfy their needs.',
          ],
        },
        { id: 'bs4-threat-h', type: 'heading', level: 3, text: '5.2 The Meaning of Threats' },
        {
          id: 'bs4-threat',
          type: 'list',
          text: [
            'Threats are any factors in the external environment that will stand in the way or is already standing in the way of businesses achieving their goals.',
            'Businesses have a challenge of constantly identifying threats in the external environment and devising strategies to turn them into opportunities otherwise they will not be successful.',
            'A threat exists if a business is unable to produce/perform s desired because of reasons outside the business such as competition/legislation/global economic trends.',
          ],
        },
        { id: 'bs4-ot-table-h', type: 'heading', level: 3, text: 'Examples of Opportunities and Threats' },
        {
          id: 'bs4-ot-table',
          type: 'definitions',
          rows: [
            { term: 'Opportunities', meaning: 'Expansion of product lines to serve a broader range of customers. Entering into new markets. Decline in interest rates.' },
            { term: 'Threats', meaning: 'New competitors entering the market with a lower price. New legislation which could limit business transactions. Changing buyer needs and tastes. Slower market growth. Increase in interest rates. Less investment in the business. New law which increases consumer minimum wages and salaries. Increase in investor in the business. Increase in production due to increase in demand.' },
          ],
        },
        {
          id: 'bs4-ot-qa',
          type: 'questions',
          qa: [
            { q: 'Explain the meaning of "opportunities".', marks: 2, a: 'Opportunities are any factors in the external environment that will contribute, or are already contributing, to the success of the business. Businesses need to constantly seek opportunities in their external environment to remain competitive.' },
            { q: 'Name THREE practical examples of threats in a business.', marks: 3, a: ['New competitors entering the market with a lower price.', 'New legislation which could limit business transactions.', 'Changing buyer needs and tastes.', 'Slower market growth.', 'Increase in interest rates. (Any THREE)'] },
          ],
        },
      ],
    },
  ],
};
