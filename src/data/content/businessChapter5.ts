import type { Chapter } from '@/lib/types';

export const BUSINESS_CHAPTER_5: Chapter = {
  id: 'business-ch5',
  subjectId: 'business',
  title: 'Chapter 5: The Macro Environment',
  summary: 'Grade 10 Paper 1 — Meaning of the macro/external environment, its components (physical/natural, economic, social/cultural/demographic, technological, legal, political/institutional, international/global), and the challenges each poses to businesses.',
  paper: 1,
  category: 'Business Environments',
  lessons: [
    // ── Lesson 1: Meaning & Components ──────────────────────────────────────
    {
      id: 'bs-ch5-meaning',
      chapterId: 'business-ch5',
      subjectId: 'business',
      title: 'The Meaning of the Macro Environment',
      minutes: 8,
      blocks: [
        { id: 'bs5-meaning-h1', type: 'heading', level: 2, text: 'The Macro Environment / External Environment' },
        {
          id: 'bs5-meaning-tip',
          type: 'callout',
          text: ' Exam Tip: The macro-environment is the OUTERMOST, LEAST controllable environment. Businesses have NO control over it — they can only adapt/develop strategies. Do not confuse this with the market environment, where the business can still influence to some extent.',
        },
        {
          id: 'bs5-meaning-list',
          type: 'list',
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
        { id: 'bs5-meaning-h2', type: 'heading', level: 3, text: 'Components of the Macro Environment' },
        {
          id: 'bs5-meaning-components',
          type: 'list',
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
        {
          id: 'bs5-meaning-qa',
          type: 'questions',
          qa: [
            {
              q: 'Define the term "macro-environment."',
              marks: 2,
              a: 'The macro-environment includes all the forces/events and circumstances that affect the business and its market environment. It is located outside the business and is also known as the external environment.',
            },
            {
              q: 'Name any FOUR components of the macro environment.',
              marks: 4,
              a: [
                'Physical/Natural environment',
                'Economic environment',
                'Social, cultural and demographic environment',
                'Technological environment (any 4 of the 7 listed — also: Legal, Political/Institutional, International/Global)',
              ],
            },
            {
              q: 'Why do businesses have no control over the macro environment, yet still need to respond to it?',
              marks: 2,
              a: 'The macro environment is outside the business and is always developing and changing, so the business cannot control it; however, it must develop strategies to adapt to the challenges this environment poses, or risk failing to achieve its goals.',
            },
          ],
        },
      ],
    },

    // ── Lesson 2: Key Definitions ────────────────────────────────────────────
    {
      id: 'bs-ch5-definitions',
      chapterId: 'business-ch5',
      subjectId: 'business',
      title: 'Key Definitions of the Macro Environment',
      minutes: 8,
      blocks: [
        { id: 'bs5-def-h1', type: 'heading', level: 2, text: 'Key Terms & Definitions' },
        {
          id: 'bs5-def-tip',
          type: 'callout',
          text: ' Exam Tip: These definitions are tested directly and also used in scenario questions — learn the specific keywords that distinguish "cultural" from "demographic" (values/beliefs vs. age/income/population statistics).',
        },
        {
          id: 'bs5-def-table',
          type: 'definitions',
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
        {
          id: 'bs5-def-qa',
          type: 'questions',
          qa: [
            {
              q: 'Define "demographic environment."',
              marks: 2,
              a: 'The demographic environment refers to the socio-economic characteristics of a population, which businesses use to identify the product preferences and purchasing behaviours of customers.',
            },
            {
              q: 'Distinguish between the "cultural environment" and the "demographic environment."',
              marks: 4,
              a: [
                'The cultural environment includes religion, customs, and traditions, which influence actions and decisions.',
                'The demographic environment refers to the socio-economic characteristics of a population (e.g. age, income, residential area), which businesses use to identify product preferences and purchasing behaviour.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 3: Physical/Natural & International/Global Environment ──────
    {
      id: 'bs-ch5-physical-global',
      chapterId: 'business-ch5',
      subjectId: 'business',
      title: 'Physical/Natural & International/Global Environment',
      minutes: 12,
      blocks: [
        { id: 'bs5-pg-h1', type: 'heading', level: 2, text: 'Physical/Natural Environment' },
        {
          id: 'bs5-pg-physical-desc',
          type: 'list',
          text: [
            'These are forces present in the natural environment, such as natural resources/pollution/increased cost of energy/infrastructure.',
            'Businesses that use raw materials to transform them into useful products, such as clothing and electricity, need nature for their survival.',
            'Ecological aspects: weather and climate influence the availability of natural resources.',
            'Non-renewable resources: depletion of non-renewable resources.',
            'Pollution: air, water, noise pollution.',
          ],
        },
        { id: 'bs5-pg-physical-challenges-h', type: 'heading', level: 3, text: 'Challenges to Businesses' },
        {
          id: 'bs5-pg-physical-challenges',
          type: 'list',
          text: [
            'The physical location of a business has a large effect on the success of the business.',
            'Unpredictable weather may cause significant disruption to businesses.',
            'Manufacturing businesses dump waste materials that impact negatively on the physical environment.',
            'The awareness of pollution and environmental damage provides new challenges for businesses.',
            'Pollution poses a threat to the sustainability of a business.',
            'Some natural resources are scarce and expensive, e.g. sources of energy are expensive.',
            'The scarcity of natural resources has a negative impact on production costs and results in high prices of goods and services.',
          ],
        },
        { id: 'bs5-pg-h2', type: 'heading', level: 2, text: 'International/Global Environment' },
        {
          id: 'bs5-pg-global-desc',
          type: 'list',
          text: [
            'Globalisation refers to an increase in trade and investment between countries (international trade).',
            'Health issues: such as the COVID-19 pandemic, Ebola virus, and so on.',
          ],
        },
        { id: 'bs5-pg-global-challenges-h', type: 'heading', level: 3, text: 'Challenges to Businesses' },
        {
          id: 'bs5-pg-global-challenges',
          type: 'list',
          text: [
            'Globalisation results in increased competition from businesses around the world which sell their goods to South Africa.',
            'Businesses are unable to import and export goods during lockdown periods.',
            'Many businesses are unable to operate efficiently and face liquidation.',
            'International problems impact businesses across the world.',
            'Businesses are expected to understand the cultures of foreign people.',
          ],
        },
        {
          id: 'bs5-pg-env-tip',
          type: 'callout',
          text: 'Note: the physical/natural and international/global environments are sometimes grouped together as the "ENVIRONMENTAL" category in exam mark grids, alongside the institutional/political category.',
        },
        {
          id: 'bs5-pg-qa',
          type: 'questions',
          qa: [
            {
              q: 'Explain how the physical/natural environment poses a challenge to businesses.',
              marks: 4,
              a: [
                'The physical location of a business has a large effect on its success.',
                'Unpredictable weather may cause significant disruption to businesses.',
                'Manufacturing businesses\' waste dumping impacts negatively on the physical environment, creating new challenges around pollution awareness.',
                'Scarce and expensive natural resources increase production costs and the price of goods and services.',
              ],
            },
            {
              q: 'Discuss TWO challenges that globalisation poses to South African businesses.',
              marks: 4,
              a: [
                'Globalisation increases competition from businesses around the world selling to South Africa.',
                'International problems (e.g. a pandemic) can prevent businesses from importing/exporting goods, causing some to face liquidation.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 4: Economic Environment ──────────────────────────────────────
    {
      id: 'bs-ch5-economic',
      chapterId: 'business-ch5',
      subjectId: 'business',
      title: 'The Economic Environment',
      minutes: 12,
      blocks: [
        { id: 'bs5-eco-h1', type: 'heading', level: 2, text: 'Economic Environment' },
        {
          id: 'bs5-eco-tip',
          type: 'callout',
          text: ' Exam Tip: Learn interest rates, inflation, exchange rates, and economic growth (business cycle) as the FOUR core economic factors — each has its own worked challenge below. Scenario questions often give a Rand exchange-rate or interest-rate change and ask you to explain the effect.',
        },
        {
          id: 'bs5-eco-desc',
          type: 'list',
          text: [
            'The economic environment includes all those factors that affect financial matters, e.g. interest rates/inflation/business cycle, etc.',
            'Interest rates are the charges people and businesses pay for the cost of borrowing money.',
            'Inflation refers to the general increase in the prices of goods and services in the economy.',
            'Exchange rates: the price of the Rand in terms of another currency/imports and exports.',
            'Economic growth: upswing/downswing economic activity of business cycles.',
          ],
        },
        { id: 'bs5-eco-challenges-h', type: 'heading', level: 3, text: 'Challenges to Businesses' },
        {
          id: 'bs5-eco-challenges',
          type: 'list',
          text: [
            'Economic changes affect business: if the rand becomes weaker, businesses are more likely to export products successfully.',
            'If interest rates increase, the business will pay more monthly instalments to the bank for the loan taken.',
            'High inflation means consumers will have less money to spend on goods/services.',
            'If taxation goes up, businesses will be charged more on their profit, and people will have less money to spend on buying goods and services.',
            'Exchange rates influence international trade, as it becomes expensive to buy raw materials and machinery from overseas.',
          ],
        },
        {
          id: 'bs5-eco-mark-grid',
          type: 'definitions',
          rows: [
            { term: 'Economic (mark-grid summary)', meaning: 'Inflation/Interest rates; Loans; Fluctuations in foreign currency; Trade agreements of some medicine/products. Challenges: High inflation/interest rate means loans may be expensive due to high interest rates, and fluctuations in foreign currency may restrict imports.' },
          ],
        },
        {
          id: 'bs5-eco-qa',
          type: 'questions',
          qa: [
            {
              q: 'Define "inflation" and explain its effect on consumer spending.',
              marks: 4,
              a: [
                'Inflation refers to the general increase in the prices of goods and services in the economy.',
                'A high inflation rate will mean that consumers have less money to spend on goods and services.',
              ],
            },
            {
              q: 'Explain the effect of an increase in interest rates on a business that has taken out a loan.',
              marks: 2,
              a: 'If interest rates increase, the business will have to pay more in monthly instalments to the bank for the loan it has taken out.',
            },
            {
              context: 'Scenario: "The Rand weakened sharply against the US Dollar this year."',
              q: 'Explain, quoting from the scenario, how this affects a business that imports machinery from overseas.',
              marks: 3,
              a: [
                'Quote: "The Rand weakened sharply against the US Dollar."',
                'A weaker exchange rate makes it more expensive to buy machinery and raw materials from overseas, since more Rand is needed to buy the same amount of foreign currency.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 5: Social, Cultural & Demographic Environment ────────────────
    {
      id: 'bs-ch5-social',
      chapterId: 'business-ch5',
      subjectId: 'business',
      title: 'Social, Cultural & Demographic Environment',
      minutes: 10,
      blocks: [
        { id: 'bs5-soc-h1', type: 'heading', level: 2, text: 'Social, Cultural and Demographic Environment' },
        {
          id: 'bs5-soc-desc',
          type: 'list',
          text: [
            'Social issues: includes issues such as poverty, unemployment and crime.',
            'Health issues: includes issues such as HIV/AIDS and TB.',
            'Low levels of literacy: large numbers of people in South Africa are poorly educated and are therefore unskilled.',
            'The cultural and social environment can be defined as the sum total of the languages/values/cultural norms/preferences/religions and beliefs.',
            'The demographic environment refers to the composition of a country\'s inhabitants, e.g. their age/residential areas/skill level/income level, etc.',
          ],
        },
        { id: 'bs5-soc-challenges-h', type: 'heading', level: 3, text: 'Challenges to Businesses' },
        {
          id: 'bs5-soc-challenges',
          type: 'list',
          text: [
            'Social issues such as poverty, HIV/AIDS, unemployment, low levels of literacy and crime can affect consumers\' spending, employee productivity, and business profitability.',
            'Social and cultural diversity have the potential to create conflict in the workplace.',
            'Employees from different cultural backgrounds may have different cultural norms/preferences/beliefs, etc.',
            'Businesses may not be conversant with the local language of their customers.',
            'South Africa has a large number of people who are poorly educated and unskilled — this means that businesses may have fewer skilled customers/employees.',
          ],
        },
        {
          id: 'bs5-soc-mark-grid',
          type: 'callout',
          text: 'Mark-grid examples (Social, includes Cultural and Demographic): low-income levels/high unemployment; language of customers; some customers\' preferences; high crime rate.',
        },
        {
          id: 'bs5-soc-qa',
          type: 'questions',
          qa: [
            {
              q: 'Explain how low levels of literacy in South Africa pose a challenge to businesses.',
              marks: 3,
              a: 'Large numbers of people in South Africa are poorly educated and therefore unskilled, meaning businesses may struggle to find skilled employees and may have fewer customers who can afford their products.',
            },
            {
              q: 'Discuss how social and cultural diversity can be a challenge in the workplace.',
              marks: 4,
              a: [
                'Social and cultural diversity has the potential to create conflict in the workplace.',
                'Employees from different cultural backgrounds may have different norms, preferences and beliefs.',
                'Businesses may not be conversant with the local language of their customers, creating communication difficulties.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 6: Technological Environment ─────────────────────────────────
    {
      id: 'bs-ch5-technological',
      chapterId: 'business-ch5',
      subjectId: 'business',
      title: 'The Technological Environment',
      minutes: 10,
      blocks: [
        { id: 'bs5-tech-h1', type: 'heading', level: 2, text: 'Technological Environment' },
        {
          id: 'bs5-tech-desc',
          type: 'list',
          text: [
            'These factors include the development of new technological products and services.',
            'The rise of information technology, such as computers and communication technology, allows for a rapid flow of large amounts of digital information/ICT.',
            'Technological developments: include wireless communication, business techniques, and smartphone applications.',
            'Technical skills: a skilled technical workforce is needed, and this requires training and retaining employees.',
            'High maintenance costs: it is expensive to buy new technology, but it is also costly to maintain it.',
            'Technological dependence: results in communication breakdowns, disruptions, or delays.',
            'Security in cryptography: the risk of cyberattacks includes stealing/erasing/changing data.',
          ],
        },
        { id: 'bs5-tech-challenges-h', type: 'heading', level: 3, text: 'Challenges to Businesses' },
        {
          id: 'bs5-tech-challenges',
          type: 'list',
          text: [
            'Many businesses may not be able to succeed without internet connectivity.',
            'Businesses may not be able to keep up with/be aware of the latest technology.',
            'Employees may not be skilled to operate/maintain new technology/equipment.',
            'Staying up to date with the latest technology can be expensive.',
            'Businesses experiencing systems failure will be rendered paralysed, which will cause businesses to lose capital due to stalling in operations.',
            'The availability of online shopping has decreased the demand for some products from conventional street stores and service businesses.',
            'IT systems can be hacked by fraudsters.',
          ],
        },
        {
          id: 'bs5-tech-qa',
          type: 'questions',
          qa: [
            {
              q: 'Explain why high maintenance costs are a challenge of the technological environment.',
              marks: 2,
              a: 'It is expensive to buy new technology, but it is also costly to maintain it — staying up to date with the latest technology can be expensive for businesses.',
            },
            {
              q: 'Discuss THREE ways the technological environment can challenge a business.',
              marks: 6,
              a: [
                'Businesses may not be able to succeed without internet connectivity.',
                'Employees may not be skilled to operate or maintain new technology, requiring costly training.',
                'IT systems can be hacked by fraudsters, risking data loss or theft.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 7: Legal Environment ─────────────────────────────────────────
    {
      id: 'bs-ch5-legal',
      chapterId: 'business-ch5',
      subjectId: 'business',
      title: 'The Legal Environment',
      minutes: 10,
      blocks: [
        { id: 'bs5-legal-h1', type: 'heading', level: 2, text: 'Legal Environment' },
        {
          id: 'bs5-legal-tip',
          type: 'callout',
          text: ' Exam Tip: Learn the Acts under each category (Business, Labour, Consumer, Competition, Municipal by-laws) — exam questions frequently ask you to name an Act or match an Act to a scenario.',
        },
        {
          id: 'bs5-legal-desc',
          type: 'list',
          text: [
            'The legal component of the macro-environment consists of the legislation that has been passed.',
            'The government plays a large role in the development of policies and legal frameworks.',
          ],
        },
        { id: 'bs5-legal-categories-h', type: 'heading', level: 3, text: 'Categories of Business Legislation' },
        {
          id: 'bs5-legal-categories',
          type: 'definitions',
          rows: [
            { term: 'Business law', meaning: 'Skills Development Act (SDA); Broad-Based Black Economic Empowerment (BBBEE); Employment Equity Act (EEA).' },
            { term: 'Labour law', meaning: 'Labour Relations Act (LRA); Basic Conditions of Employment Act (BCEA); Compensation for Occupational Injuries and Diseases Act (COIDA) — dictates how employees should be treated.' },
            { term: 'Consumer law', meaning: 'National Credit Act (NCA); Consumer Protection Act (CPA) — to protect consumers.' },
            { term: 'Competition laws', meaning: 'A law that promotes market competition by regulating anti-competitive conduct by companies.' },
            { term: 'Municipal by-laws', meaning: 'A law passed by the local government, such as zoning ordinances, business hours, permits and licences.' },
          ],
        },
        { id: 'bs5-legal-challenges-h', type: 'heading', level: 3, text: 'Challenges to Businesses' },
        {
          id: 'bs5-legal-challenges',
          type: 'list',
          text: [
            'An unstable government and poor relationship between the government and business creates a negative political environment.',
            'Changes in government salaries can have an impact on the spending patterns of consumers.',
            'Legal requirements for businesses to operate are time-consuming to implement.',
            'Businesses are affected by legislation such as the National Credit Act (the business must do background checks on clients, which may be costly and time-consuming) and the Consumer Protection Act (the business must give information on the ingredients of the product), as well as the Employment Equity Act and the Basic Conditions of Employment Act.',
            'Businesses have to apply for a trading licence before they are able to legally trade.',
          ],
        },
        {
          id: 'bs5-legal-qa',
          type: 'questions',
          qa: [
            {
              q: 'Name TWO Acts that fall under "labour law."',
              marks: 2,
              a: ['Labour Relations Act (LRA)', 'Basic Conditions of Employment Act (BCEA) — (or Compensation for Occupational Injuries and Diseases Act, COIDA)'],
            },
            {
              q: 'Explain how the Consumer Protection Act (CPA) creates a challenge for businesses.',
              marks: 2,
              a: 'Businesses are legally required to give information on the ingredients of their products, which can be time-consuming and costly to comply with.',
            },
            {
              q: 'Discuss why obtaining a trading licence is both a legal requirement and a challenge for businesses.',
              marks: 3,
              a: 'Businesses have to apply for a trading licence before they are legally allowed to trade; legal requirements for businesses to operate are time-consuming to implement, which can delay a business from starting operations.',
            },
          ],
        },
      ],
    },

    // ── Lesson 8: Political & Institutional Environment ─────────────────────
    {
      id: 'bs-ch5-political',
      chapterId: 'business-ch5',
      subjectId: 'business',
      title: 'Political & Institutional Environment',
      minutes: 10,
      blocks: [
        { id: 'bs5-pol-h1', type: 'heading', level: 2, text: 'Political / Institutional Environment' },
        {
          id: 'bs5-pol-desc',
          type: 'list',
          text: [
            'This refers to the three spheres of government, e.g. local, provincial and national government.',
            'Political instability: strikes/protests impact on investment, consumption, and economic growth.',
            'Tax policy: tax rates decided by the government impact businesses.',
            'Corruption: corruption impacts the implementation of the rule of law and democratic values.',
          ],
        },
        { id: 'bs5-pol-challenges-h', type: 'heading', level: 3, text: 'Challenges to Businesses' },
        {
          id: 'bs5-pol-challenges',
          type: 'list',
          text: [
            'The provincial government has an indirect impact on businesses through its role in providing services such as health, housing and education.',
            'Strikes/protests cause political instability and delays in productivity.',
            'Increased taxation has the same effect as an increase in costs.',
            'Reports of corruption in businesses can cause shareholders and investors to lose trust and confidence in a business.',
            'Consumers may be called upon to boycott certain products and/or businesses.',
          ],
        },
        {
          id: 'bs5-pol-mark-grid',
          type: 'callout',
          text: 'Mark-grid summary (Political — includes Institutional): some government policies may affect businesses; trade agreements.',
        },
        {
          id: 'bs5-pol-qa',
          type: 'questions',
          qa: [
            {
              q: 'Explain how corruption can negatively impact a business.',
              marks: 3,
              a: 'Reports of corruption in businesses can cause shareholders and investors to lose trust and confidence in the business, and consumers may be called upon to boycott its products.',
            },
            {
              q: 'Describe the three spheres of government that form the institutional environment.',
              marks: 3,
              a: 'The institutional environment refers to local, provincial and national government — the three spheres of government that make laws and rules that regulate how businesses operate.',
            },
            {
              q: 'ESSAY: Discuss how the political and institutional environment poses challenges to businesses. (100–150 words)',
              marks: 8,
              a: 'The political and institutional environment refers to the three spheres of government — local, provincial and national — that make rules and regulations to control business activity. Political instability, such as strikes and protests, impacts on investment, consumption and economic growth, and causes delays in business productivity. Government tax policy also affects businesses directly: increased taxation has the same effect on a business as an increase in costs, reducing profitability. Corruption is another major challenge — reports of corruption can cause shareholders and investors to lose trust and confidence in a business, and may even lead to consumer boycotts of the business\'s products. The provincial government also has an indirect impact through its role in providing services such as health, housing and education, which affects the wellbeing and spending power of a business\'s employees and customers. Businesses therefore need strategies to adapt to the political and institutional environment, since they have no control over it.',
            },
          ],
        },
      ],
    },
  ],
};
