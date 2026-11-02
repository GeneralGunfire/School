import type { Chapter } from '@/lib/types';

export const BUSINESS_CHAPTER_4: Chapter = {
  id: 'business-ch4',
  subjectId: 'business',
  title: 'Chapter 4: The Market Environment',
  summary: 'Grade 10 Paper 1 — Meaning of the market environment, its components (customers, suppliers, intermediaries, competitors, civil society/other organisations), why competition challenges businesses, and opportunities & threats.',
  paper: 1,
  category: 'Business Environments',
  lessons: [
    // ── Lesson 1: Meaning & Key Definitions ─────────────────────────────────
    {
      id: 'bs-ch4-meaning',
      chapterId: 'business-ch4',
      subjectId: 'business',
      title: 'The Meaning of the Market Environment',
      minutes: 8,
      blocks: [
        { id: 'bs4-meaning-h1', type: 'heading', level: 2, text: 'The Market Environment' },
        {
          id: 'bs4-meaning-tip',
          type: 'callout',
          text: ' Exam Tip: The market environment sits between the micro-environment (full control) and the macro-environment (no control) — the business has LITTLE or NO control here but CAN influence it. Keep this distinction sharp for "compare the three environments" questions.',
        },
        { id: 'bs4-meaning-h2', type: 'heading', level: 3, text: 'Meaning of the Market Environment' },
        {
          id: 'bs4-meaning-list',
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
        { id: 'bs4-meaning-h3', type: 'heading', level: 3, text: 'Components of the Market Environment' },
        {
          id: 'bs4-meaning-components',
          type: 'list',
          text: [
            'Customers/the market',
            'Suppliers',
            'Intermediaries/Agents',
            'Competitors',
            'Other organisations/Civil society (CBOs, NGOs, regulators, unions, strategic alliances)',
          ],
        },
        {
          id: 'bs4-meaning-qa',
          type: 'questions',
          qa: [
            {
              q: 'Define the term "market environment."',
              marks: 2,
              a: 'The market environment refers to the immediate external components that directly affect the ability of the business to operate. Businesses have little or no control over this environment, but must try to influence it.',
            },
            {
              q: 'Name THREE components of the market environment.',
              marks: 3,
              a: ['Customers/the market', 'Suppliers', 'Competitors (any 3 of: intermediaries, other organisations/civil society)'],
            },
          ],
        },
      ],
    },

    // ── Lesson 2: Customers, Suppliers, Intermediaries ──────────────────────
    {
      id: 'bs-ch4-customers-suppliers',
      chapterId: 'business-ch4',
      subjectId: 'business',
      title: 'Customers, Suppliers & Intermediaries',
      minutes: 12,
      blocks: [
        { id: 'bs4-cs-h1', type: 'heading', level: 2, text: 'Customers, Suppliers & Intermediaries' },
        { id: 'bs4-cs-h2', type: 'heading', level: 3, text: 'Customers/Consumers/The Market' },
        {
          id: 'bs4-cs-customers',
          type: 'list',
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
        { id: 'bs4-cs-h3', type: 'heading', level: 3, text: 'Suppliers' },
        {
          id: 'bs4-cs-suppliers',
          type: 'list',
          text: [
            'Suppliers are individuals/agents who provide the raw materials, transport and other services to the business.',
            'The business needs inputs from suppliers to produce goods and services.',
            'Suppliers play an important role in the success or failure of a business, e.g. consumers will purchase the product/services from another business if a supplier is unable to supply a particular product/service.',
            'Businesses usually choose suppliers who provide the best quality of goods, correct quantity and deliver goods at the agreed-upon times and at the best price.',
            'Producers and manufacturers are examples of suppliers, as they supply raw materials.',
            'Businesses can establish a good relationship with their suppliers by signing long-term contracts for their raw materials at fixed prices.',
          ],
        },
        {
          id: 'bs4-cs-suppliers-tick',
          type: 'callout',
          text: 'Mark-scheme phrasing: Suppliers are individuals/agents √ who provide the raw materials/transport/other services to the business. √ The business requires suppliers to supply the right quality √ and quantity at the right time. √ Pricing √ and credit terms must be considered when choosing suppliers. √',
        },
        { id: 'bs4-cs-h4', type: 'heading', level: 3, text: 'Intermediaries/Agents' },
        {
          id: 'bs4-cs-intermediaries',
          type: 'list',
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
        {
          id: 'bs4-cs-qa',
          type: 'questions',
          qa: [
            {
              q: 'Explain who "customers" are and give TWO factors that influence their spending decisions.',
              marks: 4,
              a: [
                'Customers are the buyers/final users of products and services offered by businesses.',
                'Their spending decisions are influenced by cultural, social, personal, and psychological factors (any two).',
              ],
            },
            {
              q: 'Why do businesses need suppliers?',
              marks: 2,
              a: 'Suppliers provide the raw materials, transport and other services the business needs to produce its goods and services — without them, the business cannot produce.',
            },
            {
              q: 'Explain the role of intermediaries in the market environment.',
              marks: 4,
              a: [
                'Intermediaries distribute and promote goods and services to customers.',
                'They bridge the gap between the manufacturer and the consumer.',
                'They make it easier for consumers to access the product by selling it closer to the consumer\'s location.',
                'Many receive a commission on the sale of products, and they affect the final price through their mark-up.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 3: Competitors ───────────────────────────────────────────────
    {
      id: 'bs-ch4-competitors',
      chapterId: 'business-ch4',
      subjectId: 'business',
      title: 'Competitors & Competition',
      minutes: 10,
      blocks: [
        { id: 'bs4-comp-h1', type: 'heading', level: 2, text: 'Competitors' },
        {
          id: 'bs4-comp-tip',
          type: 'callout',
          text: ' Exam Tip: Learn Porter\'s Five Forces by name — a common question asks learners to "name the Five Forces of competition."',
        },
        {
          id: 'bs4-comp-list',
          type: 'list',
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
        { id: 'bs4-comp-h2', type: 'heading', level: 3, text: "Porter's Five Forces Model (Competition is influenced by)" },
        {
          id: 'bs4-comp-porter',
          type: 'list',
          text: [
            'New entrants to the market',
            'Power of suppliers',
            'Power of consumers',
            'Threats of substitute products/services',
            'Competitive rivalry',
          ],
        },
        { id: 'bs4-comp-h3', type: 'heading', level: 3, text: 'Reasons Why Competition Poses a Challenge to Businesses' },
        {
          id: 'bs4-comp-challenges',
          type: 'list',
          text: [
            'Competition keeps prices down and reduces the business\'s profitability.',
            'It forces businesses to find new ways to produce existing products or develop new products/services.',
            'A business may close down if it is unable to compete with other businesses.',
            'Competition reduces the business\'s market share and its target market.',
          ],
        },
        {
          id: 'bs4-comp-qa',
          type: 'questions',
          qa: [
            {
              q: 'Name Porter\'s Five Forces that influence competition.',
              marks: 5,
              a: [
                'New entrants to the market',
                'Power of suppliers',
                'Power of consumers',
                'Threats of substitute products/services',
                'Competitive rivalry',
              ],
            },
            {
              q: 'Explain TWO reasons why competition poses a challenge to businesses.',
              marks: 4,
              a: [
                'Competition keeps prices down and reduces business profitability.',
                'It forces businesses to find new ways to produce existing products or develop new ones, or the business may close down if unable to compete.',
              ],
            },
            {
              q: 'Discuss why competition can also be seen as beneficial to consumers.',
              marks: 2,
              a: 'Competition is beneficial to consumers because it keeps prices down, and it promotes innovation and encourages businesses to be more productive.',
            },
          ],
        },
      ],
    },

    // ── Lesson 4: Other Organisations / Civil Society ───────────────────────
    {
      id: 'bs-ch4-civil-society',
      chapterId: 'business-ch4',
      subjectId: 'business',
      title: 'Other Organisations & Civil Society',
      minutes: 14,
      blocks: [
        { id: 'bs4-civ-h1', type: 'heading', level: 2, text: 'Other Organisations That Form Part of the Market Environment' },
        {
          id: 'bs4-civ-intro',
          type: 'paragraph',
          text: 'Civil society/other organisations are those organisations that deal with social problems. These organisations include non-government organisations (NGOs), community-based organisations (CBOs), unions, regulators, strategic allies, etc. A CBO could affect the operation of a business through lobbying.',
        },
        { id: 'bs4-civ-h2', type: 'heading', level: 3, text: 'Community-Based Organisations (CBOs)' },
        {
          id: 'bs4-civ-cbo',
          type: 'list',
          text: [
            'Community-based organisations (CBOs) are established to assist the community with job creation, socio-economic development, and becoming self-sufficient.',
            'They are local organisations that operate in the community to provide social services with the aim of social upliftment.',
            'They focus on socio-economic issues such as: HIV/AIDS, unemployment, crime, illiteracy.',
          ],
        },
        { id: 'bs4-civ-h3', type: 'heading', level: 3, text: 'Non-Government Organisations (NGOs)' },
        {
          id: 'bs4-civ-ngo',
          type: 'list',
          text: [
            'Non-governmental organisations (NGOs) are non-profit organisations that operate separately from the government. They are established to fulfil important needs in the community by addressing some socio-economic issues.',
            'They are part of the market environment because they supply consumer goods and services and are concerned about the welfare of others.',
          ],
        },
        {
          id: 'bs4-civ-ngo-reasons',
          type: 'callout',
          text: 'TWO reasons why NGOs and CBOs form part of the market: They employ workers √ and supply and consume goods and services. √ | They satisfy important needs √ of the community. √ | They are concerned √ with the welfare of others. √',
        },
        { id: 'bs4-civ-h4', type: 'heading', level: 3, text: 'Regulators' },
        {
          id: 'bs4-civ-regulators',
          type: 'list',
          text: [
            'Regulators are government bodies that make rules and regulations to control the activities of businesses.',
            'These rules and regulations ensure that businesses do not exploit their customers or employees.',
            'National Energy Regulator of South Africa (NERSA) — regulates electricity/piped gas/petroleum pipeline industries, etc.',
            'National Credit Regulator (NCR) — regulates the supply of loans/credit by credit providers such as banks and retailers (e.g. clothing and furniture retailers).',
            'Independent Communications Authority of South Africa (ICASA) — regulates the South African communications, broadcasting, and postal services sectors.',
            'Advertising Standards Authority (ASA) — regulates advertising in the public interest.',
          ],
        },
        { id: 'bs4-civ-h5', type: 'heading', level: 3, text: 'Unions' },
        {
          id: 'bs4-civ-unions',
          type: 'list',
          text: [
            'Unions are established bodies that protect the interest of workers.',
            'They have the right to call for industrial action such as strikes or go-slows if their demands are not met by organisations or the government.',
            'They constantly negotiate for better wages and salaries for their members and also safeguard their members against unfair dismissal.',
            'They also negotiate for better working conditions for their members and may represent them during disciplinary hearings.',
          ],
        },
        { id: 'bs4-civ-h6', type: 'heading', level: 3, text: 'Strategic Alliance' },
        {
          id: 'bs4-civ-strategic',
          type: 'list',
          text: [
            'Strategic allies are businesses that combine their resources to undertake a project that will benefit all of them. They may share their expertise and information to benefit all their members.',
            'These relationships help businesses to explore new markets and also gain competitive advantage.',
          ],
        },
        {
          id: 'bs4-civ-definitions',
          type: 'definitions',
          rows: [
            { term: 'Competitors', meaning: 'Businesses that sell more or less the same goods and services.' },
            { term: 'CBOs', meaning: 'Community-based organisations that provide certain essential goods/services to the members of the community.' },
            { term: 'NGOs', meaning: 'Non-governmental organisations that are established to provide for certain needs of the people in the community without the aim of making a profit.' },
            { term: 'Regulators', meaning: 'Government bodies/institutions that make rules and regulations to monitor the operations of businesses, for example, SABS, ACSA, and so on.' },
            { term: 'Strategic allies', meaning: 'Businesses that join their resources together to undertake a project that will benefit all the members in the alliance.' },
            { term: 'Unions', meaning: 'An organised group of workers that protect the interest of their members in a particular industry.' },
          ],
        },
        {
          id: 'bs4-civ-qa',
          type: 'questions',
          qa: [
            {
              q: 'Name FOUR examples of regulators in South Africa.',
              marks: 4,
              a: [
                'National Energy Regulator of South Africa (NERSA)',
                'National Credit Regulator (NCR)',
                'Independent Communications Authority of South Africa (ICASA)',
                'Advertising Standards Authority (ASA)',
              ],
            },
            {
              q: 'Explain the role of unions in the market environment.',
              marks: 4,
              a: [
                'Unions are established bodies that protect the interests of workers.',
                'They have the right to call for industrial action (strikes/go-slows) if demands are not met.',
                'They negotiate for better wages, salaries and working conditions.',
                'They safeguard members against unfair dismissal and may represent them at disciplinary hearings.',
              ],
            },
            {
              q: 'Distinguish between a CBO and an NGO.',
              marks: 4,
              a: [
                'A CBO is a local, community-based organisation set up to assist the community with job creation and socio-economic development.',
                'An NGO is a non-profit organisation that operates separately from government, established to address broader socio-economic issues in the community.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 5: Opportunities & Threats ───────────────────────────────────
    {
      id: 'bs-ch4-opportunities-threats',
      chapterId: 'business-ch4',
      subjectId: 'business',
      title: 'Opportunities & Threats',
      minutes: 12,
      blocks: [
        { id: 'bs4-ot-h1', type: 'heading', level: 2, text: 'Opportunities and Threats Faced by Businesses in the External Environment' },
        {
          id: 'bs4-ot-tip',
          type: 'callout',
          text: ' Exam Tip: Scenario questions often ask you to identify an opportunity OR threat and give a reason, quoting the scenario. Opportunity = helps the business succeed; threat = stands in the way of the business achieving its goals.',
        },
        {
          id: 'bs4-ot-intro',
          type: 'paragraph',
          text: 'Businesses are faced with both opportunities and threats in the market environment in which they operate. Businesses do not have any control over these; however, they can influence them to some extent. Management sees competition as both an opportunity and a threat.',
        },
        { id: 'bs4-ot-h2', type: 'heading', level: 3, text: 'Meaning of Opportunities' },
        {
          id: 'bs4-ot-opportunities',
          type: 'list',
          text: [
            'Opportunity takes place when consumers are made aware of the product if it is marketed by different businesses.',
            'Opportunities are any factors in the external environment that will contribute, or are already contributing, to the success of the business.',
            'Businesses need to constantly seek opportunities in their external environment in order to remain competitive.',
            'Opportunities will always be available when consumers need to satisfy their needs.',
          ],
        },
        { id: 'bs4-ot-h3', type: 'heading', level: 3, text: 'Meaning of Threats' },
        {
          id: 'bs4-ot-threats',
          type: 'list',
          text: [
            'Threats are any factors in the external environment that will stand in the way, or are already standing in the way, of businesses achieving their goals.',
            'Businesses have the challenge of constantly identifying threats in the external environment and devising strategies to turn them into opportunities, otherwise they will not be successful.',
            'A threat exists if a business is unable to produce/perform as desired because of reasons outside the business such as competition/legislation/global economic trends.',
          ],
        },
        { id: 'bs4-ot-h4', type: 'heading', level: 3, text: 'Examples of Opportunities and Threats' },
        {
          id: 'bs4-ot-examples',
          type: 'definitions',
          rows: [
            { term: 'Opportunities', meaning: 'Expansion of product lines to serve a broader range of customers; entering into new markets; decline in interest rates; new law which increases consumer minimum wages and salaries; increase in investors in the business; increase in production due to increase in demand.' },
            { term: 'Threats', meaning: 'New competitors entering the market with a lower price; new legislation which could limit business transactions; changing buyer needs and tastes; slower market growth; increase in interest rates; less investment in the business.' },
          ],
        },
        {
          id: 'bs4-ot-qa',
          type: 'questions',
          qa: [
            {
              q: 'Define the term "opportunity" in a business context.',
              marks: 2,
              a: 'An opportunity is any factor in the external environment that will contribute, or is already contributing, to the success of the business.',
            },
            {
              q: 'Define the term "threat" in a business context.',
              marks: 2,
              a: 'A threat is any factor in the external environment that will stand in the way, or is already standing in the way, of businesses achieving their goals.',
            },
            {
              context: 'Scenario: "ABC Traders recently signed a long-term supply contract that locked in low raw material prices for the next three years, just before global prices doubled."',
              q: 'Identify whether this is an opportunity or a threat for ABC Traders, quoting from the scenario, and give a reason for your answer.',
              marks: 3,
              a: [
                'This is an opportunity for ABC Traders.',
                'Quote: "locked in low raw material prices for the next three years, just before global prices doubled."',
                'Reason: This factor in the external environment is already contributing to the success of the business, since ABC Traders will pay far less for materials than competitors who did not have such a contract.',
              ],
            },
          ],
        },
      ],
    },
  ],
};
