import type { Chapter } from '@/lib/types';

export const BUSINESS_CHAPTER_6: Chapter = {
  id: 'business-ch6',
  subjectId: 'business',
  title: 'Chapter 6: Interrelationship Between Business Environments',
  summary: 'Grade 10 Paper 1 — The link between the features of the micro-environment, the interrelationship between the micro and market environments, and how the micro, market and macro environments influence each other.',
  paper: 1,
  category: 'Business Environments',
  lessons: [
    // ── Lesson 1: Interrelationship — Business and Consumers/Suppliers ──────
    {
      id: 'bs-ch6-consumers-suppliers',
      chapterId: 'business-ch6',
      subjectId: 'business',
      title: 'Interrelationship: Business, Consumers & Suppliers',
      minutes: 10,
      blocks: [
        { id: 'bs6-cs-h1', type: 'heading', level: 2, text: 'Interrelationships Between the Micro and Market Environment' },
        {
          id: 'bs6-cs-tip',
          type: 'callout',
          text: ' Exam Tip: "Interrelationship" questions ask you to show HOW one environment/component depends on or affects another — always explain the connection in both directions, not just describe each part on its own.',
        },
        {
          id: 'bs6-cs-intro',
          type: 'paragraph',
          text: 'The business environments are related to each other, as they cannot operate in isolation. The business does not have a purpose without the market environment.',
        },
        { id: 'bs6-cs-h2', type: 'heading', level: 3, text: 'Business and Consumers' },
        {
          id: 'bs6-cs-consumers',
          type: 'list',
          text: [
            'Consumers are people who are willing and able to pay for the business\'s products/services.',
            'Consumers depend on businesses for their goods and services to satisfy their needs and wants, and businesses also depend on consumers for their income when consumers buy from them.',
            'The business needs to market/advertise its goods and services to ensure that there is a demand for them.',
            'The business needs to carry out market research to determine the appropriate type of goods and services and the best price for them.',
            'The public relations department should ensure that the business has a good image and that its consumers remain loyal.',
          ],
        },
        { id: 'bs6-cs-h3', type: 'heading', level: 3, text: 'Business and Suppliers' },
        {
          id: 'bs6-cs-suppliers',
          type: 'list',
          text: [
            'Suppliers provide raw materials, inputs, equipment and business services that a business needs to produce its products.',
            'Without raw materials from suppliers, a business cannot produce its goods or services.',
            'The business needs to ensure that it is using the best supplier to get the best quality for the best price.',
            'Businesses need to communicate with suppliers about the latest developments in technology and products.',
            'They need to ensure that the suppliers have enough stock to meet consumers\' demand.',
            'Businesses need to pay their suppliers, as they are also customers (of the supplier).',
          ],
        },
        {
          id: 'bs6-cs-qa',
          type: 'questions',
          qa: [
            {
              q: 'Explain the interrelationship between a business and its consumers.',
              marks: 4,
              a: [
                'Consumers depend on businesses for goods and services to satisfy their needs and wants.',
                'Businesses depend on consumers for their income when consumers buy from them.',
                'The business must market/advertise its goods and carry out market research to determine the best products and prices for its consumers.',
              ],
            },
            {
              q: 'Discuss the interrelationship between a business and its suppliers.',
              marks: 4,
              a: [
                'Without raw materials from suppliers, a business cannot produce its goods or services.',
                'The business must ensure it uses the best supplier for the best quality and price, and must communicate with suppliers about new developments.',
                'Businesses need to pay their suppliers, since suppliers are also the business\'s customers.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 2: Interrelationship — Intermediaries & Competitors ──────────
    {
      id: 'bs-ch6-intermediaries-competitors',
      chapterId: 'business-ch6',
      subjectId: 'business',
      title: 'Interrelationship: Business, Intermediaries & Competitors',
      minutes: 10,
      blocks: [
        { id: 'bs6-ic-h1', type: 'heading', level: 2, text: 'Business and Intermediaries' },
        {
          id: 'bs6-ic-intermediaries',
          type: 'list',
          text: [
            'Intermediaries help businesses to distribute and sell goods to customers.',
            'They are the link between the business and the consumers.',
            'Businesses need to maintain a good relationship with the intermediaries.',
            'Business sells its goods and services to the intermediaries.',
            'Intermediaries help the business to access consumers and they influence its sales.',
            'Businesses need to find the best transport and communication companies at the best prices to transport and market their product.',
            'Intermediaries need to be reliable and responsible, as they affect the quality, service and price of the goods and services.',
            'Intermediaries are also the customers of the business, and so businesses need to always treat them with care.',
          ],
        },
        { id: 'bs6-ic-h2', type: 'heading', level: 2, text: 'Business and Competitors' },
        {
          id: 'bs6-ic-competitors',
          type: 'list',
          text: [
            'Competitors are businesses that produce the same product/services for the same target market.',
            'The business needs to study the activities of its competitors and devise strategies to provide goods or services that are better than those offered by their competitors.',
            'Increased competition will lead to lower prices of goods and services.',
            'Competitors influence the prices and quality of the products.',
            'Businesses are in constant competition and need to keep up to date with advertising and marketing trends.',
            'Businesses must be up to date with current trends and the latest technology to remain competitive in the market.',
            'Entrepreneurs need to be creative in turning the challenge of competitors into positive changes for their companies.',
          ],
        },
        {
          id: 'bs6-ic-qa',
          type: 'questions',
          qa: [
            {
              q: 'Explain why intermediaries are also regarded as customers of the business.',
              marks: 2,
              a: 'The business sells its goods and services to the intermediaries, who then distribute and sell them to consumers — so intermediaries buy from the business before selling onward, making them customers of the business too.',
            },
            {
              q: 'Discuss the interrelationship between a business and its competitors.',
              marks: 4,
              a: [
                'Competitors produce the same product/services for the same target market, so the business must study competitor activities and devise better strategies.',
                'Increased competition lowers prices and influences the quality of products.',
                'Businesses must stay current with marketing trends and technology to remain competitive.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 3: Micro, Market & Macro Interrelationship ───────────────────
    {
      id: 'bs-ch6-three-environments',
      chapterId: 'business-ch6',
      subjectId: 'business',
      title: 'The Relationship Between Micro, Market & Macro Environments',
      minutes: 12,
      blocks: [
        { id: 'bs6-three-h1', type: 'heading', level: 2, text: 'The Relationship Between Micro, Market and Macro Environments' },
        {
          id: 'bs6-three-tip',
          type: 'callout',
          text: ' Exam Tip: Remember the control gradient — FULL control (micro) → LITTLE/influence only (market) → NO control, must adapt (macro). This is one of the most commonly tested ideas in the whole Business Environments topic.',
        },
        {
          id: 'bs6-three-list',
          type: 'list',
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
        { id: 'bs6-three-h2', type: 'heading', level: 3, text: 'Worked Example: Micro-Environment Links' },
        {
          id: 'bs6-three-micro-examples',
          type: 'list',
          text: [
            'Businesses need managers to develop their vision, mission and objectives.',
            'The business\'s vision and goals will also influence the business culture and its organisational structure.',
            'The financial function must ensure that sufficient funds are available to finance other business functions.',
            'The marketing function must identify consumer needs and advise the production function on products that need to be produced.',
          ],
        },
        {
          id: 'bs6-three-qa',
          type: 'questions',
          qa: [
            {
              q: 'Explain the amount of control a business has over each of the three business environments.',
              marks: 6,
              a: [
                'The business has full control over all elements/features of the micro environment.',
                'The business has less/little control over the market environment, but it can influence it.',
                'The business has no control over the macro environment, but it must develop strategies to adapt to the challenges posed by this environment.',
              ],
            },
            {
              q: 'Using an example, explain how a change in the macro environment can lead to a change in the market environment.',
              marks: 4,
              a: 'An increase in the interest rate (macro/economic environment) may lead to an increase in production costs for the business (micro environment), which may in turn reduce consumer spending (market environment) — showing how the three environments are interrelated and not isolated from each other.',
            },
            {
              q: 'Explain, using an example, how the marketing function and production function (micro environment) are interrelated.',
              marks: 3,
              a: 'The marketing function must identify consumer needs through market research, and then advise the production function on what products need to be produced to meet those needs — so marketing and production depend on each other to achieve the business\'s goals.',
            },
          ],
        },
      ],
    },
  ],
};
