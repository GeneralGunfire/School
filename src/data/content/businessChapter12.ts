import type { Chapter } from '@/lib/types';

export const BUSINESS_CHAPTER_12: Chapter = {
  id: 'business-ch12',
  subjectId: 'business',
  title: 'Chapter 12: Business Opportunities & Related Factors',
  summary:
    'Grade 10 Term 3 — The meaning and importance of a business opportunity, designing research instruments, research protocol and ethics, market research, and compiling a SWOT analysis to determine a viable business venture.',
  paper: 2,
  category: 'Business Ventures',
  lessons: [
    // ── Lesson 1: Key Definitions & Business Opportunity ────────────────────
    {
      id: 'bs-ch12-definitions',
      chapterId: 'business-ch12',
      subjectId: 'business',
      title: 'Key Definitions & the Meaning of a Business Opportunity',
      minutes: 12,
      blocks: [
        { id: 'bs12-def-h1', type: 'heading', level: 2, text: 'Terms & Definitions' },
        {
          id: 'bs12-def-tip',
          type: 'callout',
          text: 'Exam Tip: Learn these definitions word-for-word — "business opportunity", "SWOT analysis", "viable" and "feasible" are frequently tested and easy to confuse with each other.',
        },
        {
          id: 'bs12-def-table',
          type: 'definitions',
          rows: [
            { term: 'Business opportunity', meaning: 'The potential of a business idea to succeed based on the researched needs and desires of the potential market.' },
            { term: 'Research', meaning: 'A systematic investigation to find facts or to collect information.' },
            { term: 'Potential market', meaning: 'Customers who will want to buy a product/service and who have the cash or credit facilities to do so.' },
            { term: 'Risks', meaning: 'Possibilities of loss or damage.' },
            { term: 'Research instrument', meaning: 'A device/tool that can be used to gather information or to form a set of guidelines for observation.' },
            { term: 'Respondents', meaning: 'People to whom the investigation is carried out / person who completes a questionnaire.' },
            { term: 'Feasible', meaning: 'Being possible and practical to achieve something easily/conveniently.' },
            { term: 'Viable', meaning: 'Capable of working successfully.' },
            { term: 'Strengths', meaning: 'Particular skills and circumstances that exist in the business and its staff that contribute to its success.' },
            { term: 'Weaknesses', meaning: 'Circumstances that work against the business and its success.' },
            { term: 'Opportunities', meaning: 'Circumstances that make something possible to the advantage of the business.' },
            { term: 'Threats', meaning: 'Things that can cause the business to fail.' },
            { term: 'Target market', meaning: 'A specific group of customers at which a company aims its products and services.' },
            { term: 'SWOT analysis', meaning: 'A technique/tool that is used to evaluate a situation from different angles in order to make strategic decisions.' },
          ],
        },
        { id: 'bs12-meaning-h', type: 'heading', level: 2, text: 'The Meaning of a Business Opportunity' },
        {
          id: 'bs12-meaning',
          type: 'list',
          text: [
            'A business opportunity is an idea for a person to start a business so that they can generate an income.',
            'It is a chance of improving the current operations of a business, which can contribute to greater profitability.',
            'A business opportunity is an idea for a product/service that will meet needs/desires, and that can be sold or leased to earn an income.',
            'Entrepreneurs should be constantly on the lookout for new business opportunities to be competitive.',
            'It is an idea that can be converted into a viable, income-producing business.',
            'Each need and desire is a possible business opportunity.',
            "It is a gap in the market when people's needs and desires are unfulfilled.",
          ],
        },
        {
          id: 'bs12-meaning-ex-h',
          type: 'heading',
          level: 3,
          text: 'Examples of Business Opportunities',
        },
        {
          id: 'bs12-meaning-ex',
          type: 'list',
          text: [
            'Home care services for senior citizens',
            'Online education programmes',
            'Catering',
            'Ready-made meals',
          ],
        },
        {
          id: 'bs12-def-qa',
          type: 'questions',
          qa: [
            {
              q: 'Define the term "business opportunity."',
              marks: 2,
              a: 'A business opportunity is an idea for a product/service that will meet needs/desires, and that can be sold or leased to earn an income. It is a gap in the market when needs and desires are unfulfilled.',
            },
            {
              q: 'Distinguish between "viable" and "feasible."',
              marks: 4,
              a: [
                'Viable means capable of working successfully.',
                'Feasible means being possible and practical to achieve something easily/conveniently.',
              ],
            },
            {
              q: 'Name any TWO examples of a business opportunity.',
              marks: 2,
              a: ['Home care services for senior citizens', 'Online education programmes / catering / ready-made meals (any two)'],
            },
          ],
        },
      ],
    },

    // ── Lesson 2: Needs, Desires & Research Instruments ─────────────────────
    {
      id: 'bs-ch12-needs-instruments',
      chapterId: 'business-ch12',
      subjectId: 'business',
      title: 'Assessing Needs & Desires and Designing a Research Instrument',
      minutes: 14,
      blocks: [
        {
          id: 'bs12-needs-h1',
          type: 'heading',
          level: 2,
          text: 'The Importance of Assessing Needs and Desires in Identifying a Business Opportunity',
        },
        {
          id: 'bs12-needs-list',
          type: 'list',
          text: [
            'Needs and desires are keys to successful business opportunities.',
            'The success of a business opportunity depends on the awareness and fulfilment of the target market.',
            'Every need and every desire is a possible business opportunity.',
            'Businesses should create a desire for the product through well-designed advertising and marketing campaigns.',
            'Needs and desires create a possible market.',
            'When people have needs or desires that are not fulfilled, then a business opportunity is presented to fulfil those needs and desires.',
            'It is easier to find something that people want and to create a business around that, since desires are unlimited.',
            'Sometimes an entrepreneur will invent a new product for which there is no existing desire or market.',
            'In such a case, the entrepreneur would have to create a desire for the product through clever advertising and a good marketing campaign.',
          ],
        },
        {
          id: 'bs12-needs-tip',
          type: 'callout',
          text: 'Exam Tip: Remember the key distinction — a NEED is something essential; a DESIRE is something wanted. Businesses can create desire through advertising even where no natural need/market previously existed.',
        },
        {
          id: 'bs12-instr-h1',
          type: 'heading',
          level: 2,
          text: 'Designing a Research Instrument to Assess Needs and Desires',
        },
        {
          id: 'bs12-instr-intro',
          type: 'list',
          text: [
            "A well-designed research instrument informs a business about the needs and desires of potential customers.",
            'Businesses can use this research data to reduce risk and make informed business decisions.',
            "Entrepreneurs usually develop a research instrument to find out about people's needs and desires.",
          ],
        },
        { id: 'bs12-instr-21-h', type: 'heading', level: 3, text: '2.1 Different Research Instruments' },
        {
          id: 'bs12-instr-21',
          type: 'list',
          text: [
            'A research instrument is a tool used to collect, measure and analyse data related to a business opportunity.',
            'A good research instrument will provide information about a target market that is meaningful, that is, the respondents actively participated in the research.',
          ],
        },
        { id: 'bs12-instr-22-h', type: 'heading', level: 3, text: '2.2 Designing a Good Research Instrument' },
        {
          id: 'bs12-instr-22-intro',
          type: 'paragraph',
          text: 'A good research instrument will give you complete and accurate information. The following steps must be followed:',
        },
        {
          id: 'bs12-instr-22-steps',
          type: 'list',
          text: [
            'Decide what information you need.',
            'Be clear about what you want to know about potential customers.',
            'Use a table to analyse data from the research.',
            'Ask simple and clear questions.',
            'Have a variety of questions.',
            'Include some multiple-choice, tick-box questions, and questions where things must be ranked according to a scale.',
            'Test the questions.',
          ],
        },
        {
          id: 'bs12-instr-enrich',
          type: 'callout',
          text: 'FOR ENRICHMENT — NOT EXAMINABLE: The types of research instruments below (questionnaires and interviews) are included for enrichment purposes and are not examinable, but are useful background knowledge.',
        },
        { id: 'bs12-instr-23-h', type: 'heading', level: 3, text: '2.3 Types of Research Instruments for Data Collection (Enrichment)' },
        { id: 'bs12-instr-quest-h', type: 'heading', level: 3, text: 'Questionnaires' },
        {
          id: 'bs12-instr-quest',
          type: 'list',
          text: [
            'Questionnaires are designed to collect information from people about their attitudes/preferences/level of knowledge/personalities/beliefs etc.',
            'A questionnaire consists of a series of questions that are developed to gain information from respondents.',
            'Respondents give answers in writing.',
            'Responses may be immediate/direct or need to be emailed.',
          ],
        },
        { id: 'bs12-instr-interv-h', type: 'heading', level: 3, text: 'Interviews' },
        {
          id: 'bs12-instr-interv',
          type: 'list',
          text: [
            'Business situations provide opportunities for interviews with employers, customers, analysts, etc.',
            'The interviewer leads the interview by asking questions, and the interviewee responds to the questions.',
            'Responses are collected from an individual or a group and may be recorded.',
            'Questions should be carefully prepared and selected to avoid any biasness.',
            'Questions should be carefully prepared to avoid anything that might be sensitive and offensive.',
            'Helps businesses to collect the same type of information from many people.',
            'Businesses do not require processing assistants, as they are able to analyse responses/data.',
          ],
        },
        {
          id: 'bs12-needs-instr-qa',
          type: 'questions',
          qa: [
            {
              q: 'Explain why assessing needs and desires is important when identifying a business opportunity.',
              marks: 4,
              a: [
                'Every need and desire is a possible business opportunity, and needs and desires create a possible market.',
                'The success of a business opportunity depends on the awareness and fulfilment of the target market.',
                'Businesses can create a desire for a product through well-designed advertising and marketing campaigns, even where no prior demand existed.',
              ],
            },
            {
              q: 'Name the steps that must be followed in designing a good research instrument.',
              marks: 5,
              a: [
                'Decide what information you need.',
                'Be clear about what you want to know about potential customers.',
                'Use a table to analyse data from the research.',
                'Ask simple and clear questions, with a variety of question types.',
                'Test the questions.',
              ],
            },
            {
              q: 'Distinguish between a questionnaire and an interview as research instruments.',
              marks: 4,
              a: [
                'A questionnaire is a series of written questions that respondents answer in writing (directly or via email).',
                'An interview involves the interviewer asking questions orally, and the interviewee responding verbally, with responses possibly recorded.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 3: Research Protocol & Ethics ────────────────────────────────
    {
      id: 'bs-ch12-protocol',
      chapterId: 'business-ch12',
      subjectId: 'business',
      title: 'The Protocol for Conducting Research',
      minutes: 12,
      blocks: [
        { id: 'bs12-proto-h1', type: 'heading', level: 2, text: 'The Protocol for Conducting Research' },
        { id: 'bs12-proto-31-h', type: 'heading', level: 3, text: '3.1 The Meaning of Research Protocol' },
        {
          id: 'bs12-proto-31',
          type: 'list',
          text: [
            'A research protocol is a plan with detailed guidelines that explain the rules of the research.',
            'It will describe the objectives, design, methodology and statistical considerations of the research, depending on the type of information required.',
          ],
        },
        {
          id: 'bs12-proto-32-h',
          type: 'heading',
          level: 3,
          text: '3.2 Ethical Issues and Protocols to be Adhered to When Doing Research',
        },
        {
          id: 'bs12-proto-32',
          type: 'list',
          text: [
            'The research should be conducted with the willing cooperation of participants.',
            'If research is taking place within an organisation, it must be approved first.',
            'The person conducting the research should not try to influence the opinions of the participants.',
          ],
        },
        {
          id: 'bs12-proto-33-h',
          type: 'heading',
          level: 3,
          text: '3.3 When Pursuing a Business Opportunity, Ensure That:',
        },
        {
          id: 'bs12-proto-33',
          type: 'list',
          text: [
            'It does not break any law or infringe on any copyright.',
            'It does not harm the environment.',
            'The product or service should be safe.',
            "The product or service should not be bad for people's health.",
          ],
        },
        {
          id: 'bs12-proto-34-h',
          type: 'heading',
          level: 3,
          text: '3.4 The Research Protocol Also Addresses the Integrity of Research',
        },
        {
          id: 'bs12-proto-34-intro',
          type: 'paragraph',
          text: 'The research protocol must cover the ethics of the process. Ethics in research has three elements:',
        },
        {
          id: 'bs12-proto-34-elements',
          type: 'list',
          text: [
            'Research may not disadvantage anyone.',
            'Research may not be inhumane.',
            'Research may not exploit anyone.',
          ],
        },
        {
          id: 'bs12-proto-34-more',
          type: 'list',
          text: [
            'The research should be conducted with the willing cooperation of participants.',
            'The research must be approved first if it is taking place within an organisation.',
            'Research must comply with the ethical standards of the organisation by obtaining clearance from the authorised bodies or persons.',
            'The person conducting the research should not try to influence the opinions of the participants.',
            'The research protocol should address the integrity of the research.',
            'The research should obtain consent from the respondents to carry out the research.',
          ],
        },
        {
          id: 'bs12-proto-tip',
          type: 'callout',
          text: 'Exam Tip: Remember the THREE elements of research ethics — may not disadvantage anyone, may not be inhumane, may not exploit anyone. These three are commonly tested together.',
        },
        {
          id: 'bs12-proto-qa',
          type: 'questions',
          qa: [
            {
              q: 'Define a "research protocol."',
              marks: 2,
              a: 'A research protocol is a plan with detailed guidelines that explain the rules of the research — describing the objectives, design, methodology and statistical considerations of the research.',
            },
            {
              q: 'Name the THREE elements of ethics in research.',
              marks: 3,
              a: [
                'Research may not disadvantage anyone.',
                'Research may not be inhumane.',
                'Research may not exploit anyone.',
              ],
            },
            {
              q: 'State any THREE things that must be ensured when pursuing a business opportunity.',
              marks: 3,
              a: [
                'It does not break any law or infringe on any copyright.',
                'It does not harm the environment.',
                "The product or service should be safe and not bad for people's health.",
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 4: Market Research ────────────────────────────────────────────
    {
      id: 'bs-ch12-market-research',
      chapterId: 'business-ch12',
      subjectId: 'business',
      title: 'Conducting Market Research',
      minutes: 12,
      blocks: [
        {
          id: 'bs12-mr-h1',
          type: 'heading',
          level: 2,
          text: 'Conduct Market Research and Identify a Business Opportunity',
        },
        {
          id: 'bs12-mr-def',
          type: 'paragraph',
          text: 'Market research is the systematic gathering, recording, and analysing of data about the marketing of goods and services. Market research is used to assess needs and desires.',
        },
        { id: 'bs12-mr-41-h', type: 'heading', level: 3, text: '4.1 The Importance of Market Research for a Business' },
        {
          id: 'bs12-mr-41',
          type: 'list',
          text: [
            'Market research assesses the needs and desires of customers.',
            'Entrepreneurs gain information about industry trends and the actions of their competitors.',
            'Helps the business in developing and enhancing the product.',
            'Guides business to minimise risks and identify gaps in customer expectation.',
            'Can be used to identify a business opportunity.',
            'Can guide a business to minimise risks.',
            'To identify gaps in customer expectations.',
            "People's tastes, habits, behaviours, and desires change constantly.",
            'Regular market research will inform the business about the changes.',
          ],
        },
        {
          id: 'bs12-mr-42-h',
          type: 'heading',
          level: 3,
          text: '4.2 The Differences Between Internal and External Market Research',
        },
        {
          id: 'bs12-mr-42-table',
          type: 'definitions',
          rows: [
            { term: 'Internal market research — source', meaning: 'Usually conducted from within the business.' },
            { term: 'External market research — source', meaning: 'Usually conducted by an outside specialist.' },
            {
              term: 'Internal market research — information',
              meaning: 'Employees together with general employers indicate taste and type of products/services of the business.',
            },
            {
              term: 'External market research — information',
              meaning: 'Businesses use data from market research that has been conducted in the past by other organisations/statistics published by the government.',
            },
            {
              term: 'Internal market research — resources',
              meaning: 'Different resources are used for gathering business information to help management make informed decisions.',
            },
            {
              term: 'External market research — resources',
              meaning: "Useful information about the target market, environment, and customers' needs and desires can be obtained.",
            },
            {
              term: 'Internal market research — feedback',
              meaning: 'Employees are familiar with both customers and products, which means they are uniquely capable of generating new ideas and how to market them.',
            },
            {
              term: 'External market research — feedback',
              meaning: 'The feedback is obtained from customers, potential customers, and suppliers.',
            },
            {
              term: 'Internal market research — focus',
              meaning: 'Internal market research focuses on the factors within the business.',
            },
            {
              term: 'External market research — focus',
              meaning: 'External market research focuses on the interaction between the business and the customers.',
            },
          ],
        },
        {
          id: 'bs12-mr-qa',
          type: 'questions',
          qa: [
            {
              q: 'Define the term "market research."',
              marks: 2,
              a: 'Market research is the systematic gathering, recording, and analysing of data about the marketing of goods and services.',
            },
            {
              q: 'Name any THREE benefits of market research for a business.',
              marks: 3,
              a: [
                'It assesses the needs and desires of customers.',
                'It helps a business minimise risks and identify gaps in customer expectations.',
                'It can be used to identify a business opportunity.',
              ],
            },
            {
              q: 'Distinguish between internal and external market research.',
              marks: 4,
              a: [
                'Internal market research is conducted from within the business, using employees, and focuses on factors within the business.',
                'External market research is conducted by an outside specialist, using data from past research/government statistics, and focuses on the interaction between the business and customers.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 5: SWOT Analysis ───────────────────────────────────────────────
    {
      id: 'bs-ch12-swot',
      chapterId: 'business-ch12',
      subjectId: 'business',
      title: 'Compiling a SWOT Analysis',
      minutes: 16,
      blocks: [
        {
          id: 'bs12-swot-h1',
          type: 'heading',
          level: 2,
          text: 'Compile a SWOT Analysis to Determine a Viable Business Venture',
        },
        {
          id: 'bs12-swot-tip',
          type: 'callout',
          text: 'Exam Tip: SWOT questions often give a scenario and ask you to classify a given statement as a Strength, Weakness, Opportunity or Threat. Remember: Strengths & Weaknesses = INTERNAL (micro-environment, business controls them). Opportunities & Threats = EXTERNAL (market/macro-environment, business has little or no control).',
        },
        { id: 'bs12-swot-51-h', type: 'heading', level: 3, text: '5.1 The Meaning of a SWOT Analysis' },
        {
          id: 'bs12-swot-51',
          type: 'list',
          text: [
            'A SWOT analysis is a strategic tool.',
            'It summarises a large amount of data into a user-friendly diagram.',
            'SWOT stands for Strengths, Weaknesses, Opportunities and Threats.',
            'Strengths and Weaknesses relate to internal factors, which are under the control of the business (micro-environment).',
            'Opportunities and Threats relate to external factors over which the business has little (market environment) or no control (macro-environment).',
            'It is used to help businesses make decisions by setting out information clearly, in order to focus only on important information.',
            'Entrepreneurs use a SWOT analysis to decide if their business idea is indeed a viable business opportunity.',
          ],
        },
        {
          id: 'bs12-swot-example-1-h',
          type: 'heading',
          level: 3,
          text: 'Example 1: SWOT Analysis — Selling Cakes at the School Market Day',
        },
        {
          id: 'bs12-swot-example-1-intro',
          type: 'paragraph',
          text: 'Imagine that you have decided to sell cakes at the school market day. The table below shows what a completed SWOT analysis for this idea might look like.',
        },
        {
          id: 'bs12-swot-example-1',
          type: 'definitions',
          rows: [
            {
              term: 'STRENGTHS (internal)',
              meaning: 'Easily available; can be made by learners; cheap to make; strong customer base; well-trained staff; adequate resources; strong financial strength.',
            },
            {
              term: 'WEAKNESSES (internal)',
              meaning: 'Perishable; need careful handling; need to be hygienically stored; have to be hygienically displayed; bad reputation; financial problems; lack of trained staff; lack of capabilities; lack of resources.',
            },
            {
              term: 'OPPORTUNITIES (external)',
              meaning: 'Strategic partnerships; possibility of obtaining tenders and contracts; new product and market development; appeals to most learners; not gender specific (boys and girls like cakes); cheap compared to other products.',
            },
            {
              term: 'THREATS (external)',
              meaning: 'Economic factors, e.g. high inflation rate; political factors like strikes and protests; environmental factors like climate change and pollution; legal factors, e.g. Acts that can impact businesses (EEA, SDA, BBBEE); high competition; low profit margin.',
            },
          ],
        },
        {
          id: 'bs12-swot-example-2-h',
          type: 'heading',
          level: 3,
          text: 'Example 2: Another SWOT Analysis',
        },
        {
          id: 'bs12-swot-example-2',
          type: 'definitions',
          rows: [
            {
              term: 'STRENGTHS (internal)',
              meaning: 'Capabilities; good employees; sufficient resources; quality products/services.',
            },
            {
              term: 'WEAKNESSES (internal)',
              meaning: 'Special registration; bad reputation; lack of finances/resources; lack of leadership; lack of capabilities.',
            },
            {
              term: 'OPPORTUNITIES (external)',
              meaning: 'Partnership with other businesses; fashion and trends; tenders; product development.',
            },
            {
              term: 'THREATS (external)',
              meaning: 'Economic factors; political factors; environmental factors; technological factors; legal factors; physical factors; competitors.',
            },
          ],
        },
        { id: 'bs12-swot-52-h', type: 'heading', level: 3, text: '5.2 Benefits of a SWOT Analysis' },
        {
          id: 'bs12-swot-52',
          type: 'list',
          text: [
            'It is not expensive to perform a SWOT analysis.',
            'It is a planning tool that can help a business to make decisions.',
            'It gives a big picture of a business opportunity.',
            'It can help a business to focus on what is important.',
            'It does not take a lot of time to perform a SWOT analysis — it can be done quickly, and you have the analysis immediately available.',
            'Useful to find possible challenges in all three business environments.',
          ],
        },
        { id: 'bs12-swot-53-h', type: 'heading', level: 3, text: '5.3 The Importance of Conducting a SWOT Analysis' },
        {
          id: 'bs12-swot-53',
          type: 'list',
          text: [
            'It is a useful planning tool and helps people make decisions by setting out information clearly.',
            'Businesses use this tool when making important decisions.',
            'Entrepreneurs use it when making decisions about the viability of a business opportunity.',
            'It is useful to assess business opportunities because it assesses a business\'s strengths and weaknesses.',
            'Helps business owners to identify ways in which their business can grow, and identify potential threats.',
            'Businesses can use this tool during any stage of development.',
            "Helps a business to determine its position to fulfil the needs and wants of their prospective customers.",
            'It is useful if there are changes in the market environment, or when considering starting a new business venture.',
          ],
        },
        { id: 'bs12-swot-54-h', type: 'heading', level: 3, text: '5.4 Limitations of a SWOT Analysis' },
        {
          id: 'bs12-swot-54-intro',
          type: 'paragraph',
          text: 'When conducting a SWOT analysis, you should keep in mind that it is only one stage of the business planning process. For complex issues, you will usually need to conduct more in-depth research. A SWOT analysis may be limited because it:',
        },
        {
          id: 'bs12-swot-54',
          type: 'list',
          text: [
            'Does not prioritise issues.',
            'Does not provide solutions or offer alternative decisions.',
            'Can generate too many ideas but not help you choose which one is best.',
            'Can produce a lot of information, but not all of it is useful.',
            'May cause businesses to overlook certain aspects of the business.',
          ],
        },
        {
          id: 'bs12-swot-qa',
          type: 'questions',
          qa: [
            {
              q: 'Define the term "SWOT analysis" and explain what each letter stands for.',
              marks: 5,
              a: [
                'A SWOT analysis is a strategic tool/technique used to evaluate a situation from different angles in order to make strategic decisions.',
                'S = Strengths, W = Weaknesses, O = Opportunities, T = Threats.',
              ],
            },
            {
              q: 'Explain why Strengths and Weaknesses are classified as internal factors, while Opportunities and Threats are classified as external factors.',
              marks: 4,
              a: [
                'Strengths and Weaknesses relate to internal factors that are under the control of the business (micro-environment).',
                'Opportunities and Threats relate to external factors over which the business has little (market environment) or no control (macro-environment).',
              ],
            },
            {
              context: 'Refer to the scenario: A learner wants to sell cakes at the school market day. They note that cakes are cheap to make but perishable, and that there is a possibility of obtaining tenders, but high competition from other sellers.',
              q: 'Classify each of the following into the correct SWOT category: (a) cheap to make (b) perishable (c) possibility of obtaining tenders (d) high competition.',
              marks: 4,
              a: [
                '(a) Cheap to make — Strength.',
                '(b) Perishable — Weakness.',
                '(c) Possibility of obtaining tenders — Opportunity.',
                '(d) High competition — Threat.',
              ],
            },
            {
              q: 'Discuss any THREE benefits and THREE limitations of a SWOT analysis.',
              marks: 6,
              a: [
                'Benefit: It is inexpensive and quick to perform.',
                'Benefit: It gives a big picture of a business opportunity and helps focus on what is important.',
                'Benefit: It is useful to find possible challenges in all three business environments.',
                'Limitation: It does not prioritise issues or provide solutions.',
                'Limitation: It can generate too many ideas without helping decide which is best.',
                'Limitation: It may cause businesses to overlook certain aspects of the business.',
              ],
            },
          ],
        },
      ],
    },
  ],
};
