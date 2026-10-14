import type { Chapter } from '@/lib/types';

export const BUSINESS_CHAPTER_5: Chapter = {
  id: 'business-ch5',
  subjectId: 'business',
  title: 'Chapter 5: The Macro Environment',
  summary: 'Grade 10 Term 1, Paper 1 — The meaning and components of the macro/external environment using the PESTLE model: political/institutional, economic, social/cultural and demographic, technological, legal, and international/global/environmental.',
  paper: 1,
  lessons: [
    // ── Lesson 1: Meaning & PESTLE Overview ─────────────────────────────────
    {
      id: 'bs-ch5-meaning-pestle',
      chapterId: 'business-ch5',
      subjectId: 'business',
      title: 'The Meaning of the Macro Environment & PESTLE Overview',
      minutes: 10,
      blocks: [
        { id: 'bs5-h1', type: 'heading', level: 2, text: 'The Macro Environment / External Environment' },
        {
          id: 'bs5-tip',
          type: 'callout',
          text: ' Exam Tip: Remember the PESTLE acronym — Political, Economic, Social, Technological, Legal, Environmental. The macro environment is the outermost of the three business environments and businesses have NO control over it.',
        },
        { id: 'bs5-meaning-h', type: 'heading', level: 3, text: 'The Meaning of the Macro Environment' },
        {
          id: 'bs5-meaning',
          type: 'list',
          text: [
            'The macro-environment includes all the forces/events and circumstances that affects the business and its market environment.',
            'It refers to the interaction of businesses with forces outside of themselves.',
            'This is the environment that businesses interact with forces outside the business.',
            'The macro environment is also known as the external environment.',
            'The business cannot control this environment.',
            'It is also known as the external environment, but it can influence it.',
            'The macro environment is always developing and changing.',
            'Businesses have no control over this environment as it poses challenges to businesses.',
          ],
        },
        { id: 'bs5-components-h', type: 'heading', level: 3, text: '10 Components of the Macro Environment' },
        {
          id: 'bs5-components',
          type: 'list',
          text: [
            'Physical/Natural environment',
            'Economic environment',
            'Social, cultural and demographic environment',
            'Technological environment',
            'Legal environment and political environment',
            'International /Global environment',
            'Institutional environment',
          ],
        },
        { id: 'bs5-acronym-h', type: 'heading', level: 3, text: 'PESTLE Analysis Cheat Sheet' },
        {
          id: 'bs5-acronym',
          type: 'acronym',
          word: 'PESTLE',
          forWhat: 'The components of the macro environment',
          items: [
            { letter: 'P', stands: 'Political — government policy, political instability, tax policy, corruption, consumer rights organisations', note: 'Includes the institutional environment' },
            { letter: 'E', stands: 'Economic — inflation/petrol price, interest rates, conditions of credit, exchange rates, economic growth', note: 'Covers the socio-economic environment' },
            { letter: 'S', stands: 'Social — social issues, health issues, low levels of literacy, social and cultural diversity, language', note: 'Includes demographic factors' },
            { letter: 'T', stands: 'Technological — technological developments, technical skills, high maintenance costs, technological dependence, security in cryptography', note: 'The rise of information technology' },
            { letter: 'L', stands: 'Legal — business law, labour law, consumer law, competition laws', note: 'Laws passed by government that affect businesses' },
            { letter: 'E', stands: 'Environmental — ecological aspects, non-renewable resources, pollution', note: 'Includes the physical/natural and global environment' },
          ],
        },
        {
          id: 'bs5-terms',
          type: 'definitions',
          rows: [
            { term: 'Cultural environment', meaning: 'The cultural environment affecting businesses includes religion, customs, and traditions, which influence actions and decisions.' },
            { term: 'Demographic environment', meaning: 'Refers to the socio-economic characteristics of a population, which businesses use to identify product preferences and purchasing behaviours of customers.' },
            { term: 'Economic environment', meaning: 'Refers to all the external economic factors that influence how businesses operate.' },
            { term: 'International/global environment', meaning: 'Consumers and businesses.' },
            { term: 'Legal environment', meaning: 'The laws passed by the government in which businesses operate.' },
            { term: 'Physical/Natural environment', meaning: 'Refers to natural and man-made variables that surround businesses.' },
            { term: 'Technological environment', meaning: 'Refers to development in the field of technology with new and innovative knowledge, new inventions, and other improvements in techniques that affect businesses.' },
            { term: 'Institutional environment', meaning: 'Refers to the three levels of government in South Africa, that puts laws and rules that regulate how businesses operate in place.' },
          ],
        },
        {
          id: 'bs5-m1-qa',
          type: 'questions',
          qa: [
            { q: 'Define/Elaborate on the meaning of the macro-environment.', marks: 4, a: 'The macro-environment includes all the forces/events and circumstances outside of the business that affect the business and its market environment. It is also known as the external environment, and the business cannot control it, although it can influence it.' },
            { q: 'Name the components of the macro environment.', marks: 7, a: ['Physical/Natural environment', 'Economic environment', 'Social, cultural and demographic environment', 'Technological environment', 'Legal environment and political environment', 'International/Global environment', 'Institutional environment'] },
          ],
        },
      ],
    },

    // ── Lesson 2: Political/Institutional ──────────────────────────────────
    {
      id: 'bs-ch5-political',
      chapterId: 'business-ch5',
      subjectId: 'business',
      title: 'Political / Institutional Environment',
      minutes: 12,
      blocks: [
        { id: 'bs5-pol-h1', type: 'heading', level: 2, text: 'Political / Institutional Environment' },
        {
          id: 'bs5-pol-desc',
          type: 'list',
          text: [
            'This refers to the three spheres of government e.g. local, provincial and national government.',
          ],
        },
        { id: 'bs5-pol-examples-h', type: 'heading', level: 3, text: 'Description / Examples' },
        {
          id: 'bs5-pol-examples',
          type: 'list',
          text: [
            'Political instability: Strikes/protests impact on investment, consumption, and economic growth.',
            'Tax policy: Tax rates decided by the government impact businesses.',
            'Corruption: Corruption impacts the implementation of the rule of law and democratic values.',
          ],
        },
        { id: 'bs5-pol-practical-h', type: 'heading', level: 3, text: 'Practical Examples of Political Features' },
        {
          id: 'bs5-pol-practical',
          type: 'list',
          text: [
            'Some government policies may affect businesses.',
            'Trade agreements.',
          ],
        },
        { id: 'bs5-pol-challenges-h', type: 'heading', level: 3, text: 'Challenges to Businesses' },
        {
          id: 'bs5-pol-challenges',
          type: 'list',
          text: [
            'Strikes/protests cause political instability and delays in productivity.',
            'Increased taxation has the same effect as an increase in costs.',
            'Reports of corruption in businesses can cause businesses to lose trust and confidence in a business.',
            'Consumers may be called upon to boycott certain products and/or businesses.',
            'The provincial government has an indirect impact on businesses through its role in providing services such as health and education, and housing.',
            'An unstable government and poor relationship between the government and the business creates a negative political environment.',
          ],
        },
        {
          id: 'bs5-pol-qa',
          type: 'questions',
          qa: [
            { q: 'Explain what is meant by the "political/institutional environment".', marks: 4, a: 'The political/institutional environment refers to the three spheres of government — local, provincial and national — e.g. tax policy, corruption, and government policy, that put laws and rules in place that businesses must obey.' },
            { q: 'Discuss any THREE challenges that the political environment poses to businesses.', marks: 6, a: ['Strikes/protests cause political instability and delays in productivity.', 'Increased taxation has the same effect as an increase in costs.', 'Reports of corruption cause businesses to lose investor trust and confidence.', '(Any THREE)'] },
          ],
        },
      ],
    },

    // ── Lesson 3: Economic Environment ──────────────────────────────────────
    {
      id: 'bs-ch5-economic',
      chapterId: 'business-ch5',
      subjectId: 'business',
      title: 'Economic Environment',
      minutes: 12,
      blocks: [
        { id: 'bs5-econ-h1', type: 'heading', level: 2, text: 'Economic Environment' },
        {
          id: 'bs5-econ-desc',
          type: 'list',
          text: [
            'The economic environment includes all those factors that affect financial matters e.g. interest rates / inflation / business cycle etc.',
          ],
        },
        { id: 'bs5-econ-features-h', type: 'heading', level: 3, text: 'Description / Examples' },
        {
          id: 'bs5-econ-features',
          type: 'list',
          text: [
            'Interest rates are the charges people and businesses pay for the cost of borrowing money.',
            'Inflation refers to the general increase in the prices of goods and services in the economy.',
            'Exchange rates: The price of the Rand in terms of another currency/imports and exports.',
            'Economic growth: Upswing/downswing economic activity of business cycles.',
          ],
        },
        { id: 'bs5-econ-practical-h', type: 'heading', level: 3, text: 'Practical Examples' },
        {
          id: 'bs5-econ-practical',
          type: 'list',
          text: [
            'Inflation/Interest rates.',
            'Loans.',
            'Fluctuations in foreign currency.',
            'High inflation/Interest rate.',
            'Loans may be expensive due to high interest rates.',
            'Fluctuations in foreign currency may restrict imports.',
            'Trade agreements of some medicine/products.',
          ],
        },
        { id: 'bs5-econ-challenges-h', type: 'heading', level: 3, text: 'Challenges to Businesses' },
        {
          id: 'bs5-econ-challenges',
          type: 'list',
          text: [
            'If interest rates increase, it means the business will pay more monthly instalments to the bank for the loan taken.',
            'A high inflation will mean that consumers will have less money to spend on goods/services.',
            'If taxation goes up, businesses will be charged more on their profit, and people will have less money on their profit, and people will have less money to spend on buying goods and services.',
            'If exchange rates influence trade as international trade becomes expensive to buy raw materials and machinery from overseas.',
            'Economic changes affect business, if the rand becomes weaker, businesses are more likely to be able to export product successfully.',
          ],
        },
        {
          id: 'bs5-econ-qa',
          type: 'questions',
          qa: [
            { q: 'Explain what is meant by the "economic environment".', marks: 4, a: 'The economic environment includes all those factors that affect financial matters, such as interest rates, inflation, exchange rates, and the business cycle.' },
            { q: 'Discuss how a high inflation rate can challenge a business.', marks: 4, a: 'Inflation refers to the general increase in prices of goods and services in the economy. A high inflation rate means consumers will have less money to spend on goods and services, and if businesses charge up prices, people will have less money to spend on buying goods and services.' },
            { q: 'Explain how exchange rates can pose a challenge to businesses.', marks: 4, a: 'Exchange rates influence trade as international trade becomes expensive to buy raw materials and machinery from overseas. If exchange rates increase, it becomes more expensive to buy raw materials and machinery from overseas.' },
          ],
        },
      ],
    },

    // ── Lesson 4: Social, Cultural & Demographic Environment ────────────────
    {
      id: 'bs-ch5-social',
      chapterId: 'business-ch5',
      subjectId: 'business',
      title: 'Social, Cultural & Demographic Environment',
      minutes: 12,
      blocks: [
        { id: 'bs5-soc-h1', type: 'heading', level: 2, text: 'Social, Cultural and Demographic Environment' },
        {
          id: 'bs5-soc-desc',
          type: 'list',
          text: [
            'Social issues: includes issues such as poverty and unemployment and crime.',
            'Health issues: includes issues such as HIV/AIDS and TB.',
            'Low levels of literacy: Large numbers of people in South Africa are poorly educated and are therefore unskilled.',
            'The cultural and social environment can be defined as the sum total of the languages / values / cultural norms / preferences / religions and beliefs.',
            'The demographic environment refers to the composition of a country’s inhabitants e.g. their age/residential areas/skill level/income level etc.',
          ],
        },
        { id: 'bs5-soc-challenges-h', type: 'heading', level: 3, text: 'Challenges to Businesses' },
        {
          id: 'bs5-soc-challenges',
          type: 'list',
          text: [
            'Social issues such as poverty as poverty, unemployment, low levels of literacy and crime can affect consumers’ spending, the productivity of the employees and the profitability of the business.',
            'Social and cultural diversity have the potential to create conflict in the workplace.',
            'Employees from different cultural backgrounds may have different cultural norms/preferences/beliefs etc.',
            'Businesses may not be conversant with the local language of their customers.',
            'South Africa has a large number of people who are poorly educated and unskilled. This means that businesses that have a few customers.',
            'Low levels of literacy: Large numbers of people in South Africa are poorly educated and are therefore unskilled and are therefore unskilled.',
            'The demographic environment refers to the composition of a country’s inhabitants e.g. their age/residential areas/skill level/income level etc.',
          ],
        },
        {
          id: 'bs5-soc-qa',
          type: 'questions',
          qa: [
            { q: 'Explain what is meant by the "social, cultural and demographic environment".', marks: 6, a: 'This environment includes social issues such as poverty, unemployment and crime; health issues such as HIV/AIDS and TB; low levels of literacy; and the cultural and social environment, defined as the sum total of the languages, values, cultural norms, preferences, religions and beliefs of a population. The demographic environment refers to the composition of a country’s inhabitants, e.g. their age, residential areas, skill level, and income level.' },
            { q: 'Discuss how social and cultural diversity can pose a challenge to businesses.', marks: 4, a: 'Social and cultural diversity has the potential to create conflict in the workplace, since employees from different cultural backgrounds may have different cultural norms, preferences and beliefs. Businesses may also not be conversant with the local language of their customers, which means they may not be able to converse with their local customers.' },
          ],
        },
      ],
    },

    // ── Lesson 5: Technological Environment ─────────────────────────────────
    {
      id: 'bs-ch5-technological',
      chapterId: 'business-ch5',
      subjectId: 'business',
      title: 'Technological Environment',
      minutes: 12,
      blocks: [
        { id: 'bs5-tech-h1', type: 'heading', level: 2, text: 'Technological Environment' },
        {
          id: 'bs5-tech-desc',
          type: 'list',
          text: [
            'These factors include the development of new technological products and services.',
          ],
        },
        { id: 'bs5-tech-examples-h', type: 'heading', level: 3, text: 'Description / Examples' },
        {
          id: 'bs5-tech-examples',
          type: 'list',
          text: [
            'The rise of information technology such computers and communication technology allow for a rapid flow of large amounts of digital information/ICT.',
            'Technological developments: include wireless communication, business techniques, and smartphone applications.',
            'Technical skills: A skilled technical workforce is needed, and this requires training and retaining employees.',
            'High maintenance costs: It is expensive to buy new technology, but it is also costly to maintain it.',
            'Technological dependence: Results in communication breakdowns, disruptions, or delays.',
            'Security in cryptography: The risk of cyberattacks include stealing/erasing/changing data.',
          ],
        },
        { id: 'bs5-tech-challenges-h', type: 'heading', level: 3, text: 'Challenges to Businesses' },
        {
          id: 'bs5-tech-challenges',
          type: 'list',
          text: [
            'Many businesses may not be able to succeed without internet connectivity.',
            'Businesses may not be able to keep up/be aware of the latest technology.',
            'Employees may not be skilled to operate/maintain new technology/equipment.',
            'Staying up to date with the latest technology can be expensive.',
            'Businesses experiencing systems failure will be rendered paralysed, which will cause businesses to lose capital due to stalling in operations.',
            'The availability of online shopping decreased the demand for some products from conventional street stores and service businesses.',
            'IT systems can be hacked by fraudsters.',
          ],
        },
        {
          id: 'bs5-tech-qa',
          type: 'questions',
          qa: [
            { q: 'Explain what is meant by the "technological environment".', marks: 4, a: 'The technological environment includes those factors that affect the development of new technological products and services, such as the rise of information technology, wireless communication, and new business techniques.' },
            { q: 'Discuss any THREE challenges that technology poses to businesses.', marks: 6, a: ['Employees may not be skilled to operate/maintain new technology.', 'Staying up to date with the latest technology can be expensive.', 'Systems failure can paralyse a business, causing it to lose capital.', 'IT systems can be hacked by fraudsters.', '(Any THREE)'] },
          ],
        },
      ],
    },

    // ── Lesson 6: Legal Environment ──────────────────────────────────────────
    {
      id: 'bs-ch5-legal',
      chapterId: 'business-ch5',
      subjectId: 'business',
      title: 'Legal Environment',
      minutes: 12,
      blocks: [
        { id: 'bs5-legal-h1', type: 'heading', level: 2, text: 'Legal Environment' },
        {
          id: 'bs5-legal-desc',
          type: 'list',
          text: [
            'The legal component of the macro-environment consists of the legislation that has been passed.',
            'The government plays a large role in the development of policies and legal frameworks.',
          ],
        },
        { id: 'bs5-legal-examples-h', type: 'heading', level: 3, text: 'Description / Examples' },
        {
          id: 'bs5-legal-examples',
          type: 'list',
          text: [
            'Business law: Skills Development Act (SDA), Broad Based Economic Empowerment (BBBEE), Employment Empowerment Equity Act (EEA).',
            'Labour law: Labour Relations Act (LRA), Basic Conditions of Employment Act (BCEA), Compensation for Occupational Injuries and Diseases Act (COIDA) dictates how employees should be treated.',
            'Consumer law: National Credit Act (NCA), Consumer Protection Act (CPA) to protect consumers.',
            'Competition laws: A law that promotes market competition by regulating anti-competitive conduct by companies.',
            'Municipal by-laws: A law passed by the local government such as zoning ordinances, business hours, permits and licences.',
          ],
        },
        { id: 'bs5-legal-challenges-h', type: 'heading', level: 3, text: 'Challenges to Businesses' },
        {
          id: 'bs5-legal-challenges',
          type: 'list',
          text: [
            'Businesses are affected by legislation such as the National Credit Act (the business must do background checks on clients, which may be costly and time-consuming), the Consumer Protection Act (the business must give information on the ingredients of the product), Employment Equity Act, Basic Conditions of Employment Act etc.',
            'Legal requirements for businesses to operate are time-consuming to implement.',
            'Businesses have to apply for a trading licence before they are able to legally trade.',
            'Changes in government salaries can have an impact on the spending patterns of consumers.',
            'An unstable government and poor relationship between government and the business creates a negative political environment.',
          ],
        },
        {
          id: 'bs5-legal-qa',
          type: 'questions',
          qa: [
            { q: 'Explain what is meant by the "legal environment".', marks: 4, a: 'The legal environment consists of all the legislation that has been passed by government that businesses must comply with, e.g. the National Credit Act, Consumer Protection Act, Employment Equity Act, and Basic Conditions of Employment Act.' },
            { q: 'Discuss any THREE pieces of legislation that affect the legal environment of a business, and the challenges they pose.', marks: 9, a: ['National Credit Act (NCA) — the business must do background checks on clients, which can be costly and time-consuming.', 'Consumer Protection Act (CPA) — the business must give information on the ingredients of the product.', 'Employment Equity Act / Basic Conditions of Employment Act — businesses have legal requirements for employment conditions that can be time-consuming to implement.'] },
          ],
        },
      ],
    },

    // ── Lesson 7: International/Global & Physical/Natural (Environmental) ──
    {
      id: 'bs-ch5-environmental-global',
      chapterId: 'business-ch5',
      subjectId: 'business',
      title: 'Environmental & International/Global Environment',
      minutes: 14,
      blocks: [
        { id: 'bs5-env-h1', type: 'heading', level: 2, text: 'Environmental (Physical/Natural & Global)' },
        { id: 'bs5-env-natural-h', type: 'heading', level: 3, text: 'Physical/Natural Environment' },
        {
          id: 'bs5-env-natural-desc',
          type: 'list',
          text: [
            'These are forces that are present in the natural environment such as the natural environment and are present in the business.',
            'The physical location of a business has a large effect on the success of the business.',
          ],
        },
        { id: 'bs5-env-natural-examples-h', type: 'heading', level: 3, text: 'Description / Examples' },
        {
          id: 'bs5-env-natural-examples',
          type: 'list',
          text: [
            'Businesses that use raw material to transform them into useful products such as clothing and electricity products need nature for their survival.',
            'Ecological aspects: Weather and climate influence the availability of natural resources.',
            'Non-renewable resources: Depletion of non-renewable resources.',
            'Pollution: Air, water, noise pollution.',
          ],
        },
        { id: 'bs5-env-natural-challenges-h', type: 'heading', level: 3, text: 'Challenges to Businesses' },
        {
          id: 'bs5-env-natural-challenges',
          type: 'list',
          text: [
            'Unpredictable weather may cause significant disruption to businesses.',
            'Manufacturing businesses dump their waste materials that impact negatively on the physical environment.',
            'The awareness of pollution and environmental damage provide new challenges for businesses.',
            'Pollution poses a threat to the sustainability of a business.',
            'Some natural resources are scarce and expensive, e.g. sources of energy are expensive.',
            'The scarcity of natural resources has a negative impact on the production costs and results in high prices of goods and services.',
          ],
        },
        { id: 'bs5-env-global-h', type: 'heading', level: 3, text: 'International/Global Environment' },
        {
          id: 'bs5-env-global-desc',
          type: 'list',
          text: [
            'Globalisation refers to an increase in trade and investment between countries (international trade).',
          ],
        },
        { id: 'bs5-env-global-examples-h', type: 'heading', level: 3, text: 'Description / Examples' },
        {
          id: 'bs5-env-global-examples',
          type: 'list',
          text: [
            'Health issues: Such as the COVID-19 pandemic, Ebola virus, and so on.',
          ],
        },
        { id: 'bs5-env-global-challenges-h', type: 'heading', level: 3, text: 'Challenges to Businesses' },
        {
          id: 'bs5-env-global-challenges',
          type: 'list',
          text: [
            'Businesses are unable to import and export goods during lockdown periods.',
            'Many businesses are unable to operate efficiently and faces liquidation.',
            'International problems impact businesses across the world.',
            'Businesses are expected to understand the cultures of foreign people.',
            'Globalisation result in increased competition from businesses around the world which sell their goods to South Africa.',
          ],
        },
        {
          id: 'bs5-env-qa',
          type: 'questions',
          qa: [
            { q: 'Explain what is meant by the "physical/natural environment".', marks: 4, a: 'The physical/natural environment refers to forces that are present in nature that are outside of the business, such as weather, climate, natural resources, and pollution. The physical location of a business also has a large effect on the success of the business.' },
            { q: 'Discuss any THREE challenges that the physical/natural environment poses to businesses.', marks: 6, a: ['Unpredictable weather may cause significant disruption to a business.', 'Pollution poses a threat to the sustainability of a business.', 'Scarce and expensive natural resources increase production costs and the price of goods and services.', '(Any THREE)'] },
            { q: 'Define the term "globalisation".', marks: 2, a: 'Globalisation refers to an increase in trade and investment between countries (international trade).' },
            { q: 'Discuss any TWO challenges that globalisation poses to businesses.', marks: 4, a: ['Businesses are unable to import and export goods during lockdown periods, e.g. during a health pandemic such as COVID-19.', 'Globalisation results in increased competition from businesses around the world which sell their goods in South Africa.', '(Any TWO)'] },
          ],
        },
      ],
    },
  ],
};
