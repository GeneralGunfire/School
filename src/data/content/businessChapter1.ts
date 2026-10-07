import type { Chapter } from '@/lib/types';

export const BUSINESS_CHAPTER_1: Chapter = {
  id: 'business-ch1',
  subjectId: 'business',
  title: 'Chapter 1: Components of the Micro-Environment',
  summary: 'Grade 10 Term 1 — Business environments, VMGO, organisational resources, management (POLC), structure, culture, and the eight business functions.',
  term: 1,
  lessons: [
    // ── Lesson 1: Key Definitions ────────────────────────────────────────────
    {
      id: 'bs-ch1-definitions',
      chapterId: 'business-ch1',
      subjectId: 'business',
      title: 'Key Definitions',
      minutes: 8,
      blocks: [
        { id: 'bs-def-h1', type: 'heading', level: 2, text: 'Key Terms & Definitions' },
        {
          id: 'bs-def-intro',
          type: 'paragraph',
          text: 'Learn these definitions carefully — you will be asked to define, explain, or apply these terms in exams.',
        },
        {
          id: 'bs-def-table',
          type: 'definitions',
          rows: [
            { term: 'Business functions', meaning: 'The tasks requiring specific knowledge and skills that are carried out by the various departments to achieve the goals of the business.' },
            { term: 'Goals', meaning: 'The long-term plans of what the business wants to achieve.' },
            { term: 'Leadership', meaning: 'The way in which an individual can influence the behaviour of others towards achieving the objectivities of the business.' },
            { term: 'Management', meaning: 'The way the business is managed. This entails planning, leading, organising and controlling the people in the business.' },
            { term: 'Micro-environment', meaning: 'Includes everything inside the business. All the internal affairs of the business are managed by the directors or the owners of the business. The business has full/complete control over its micro-environment.' },
            { term: 'Mission statement', meaning: 'Describes what the business provides or produces.' },
            { term: 'Objectives', meaning: 'Describes how goals will be achieved.' },
            { term: 'Vision', meaning: 'Refers to what the business wants to achieve in the long-term. That is, the dream of the business.' },
          ],
        },
        {
          id: 'bs-def-qa',
          type: 'questions',
          qa: [
            {
              q: 'Define the term "micro-environment."',
              marks: 2,
              a: 'The micro-environment includes everything inside the business. All the internal affairs of the business are managed by the directors or owners. The business has full/complete control over its micro-environment.',
            },
            {
              q: 'Differentiate between "vision" and "mission statement."',
              marks: 4,
              a: [
                'Vision refers to what the business wants to achieve in the long-term — it is the dream of the business.',
                'Mission statement describes what the business provides or produces — it explains the reason for the business\'s existence.',
                'Vision answers "where are we going?"; mission answers "what do we do to get there?"',
                'Example: Vision = "To become globally competitive." Mission = "To provide professional hairdressing services."',
              ],
            },
            {
              q: 'Explain the difference between "goals" and "objectives."',
              marks: 4,
              a: [
                'Goals are the long-term plans of what the business wants to achieve.',
                'Objectives are short-term tasks/steps used to reach goals.',
                'Goals give the business a sense of direction; objectives contain a deadline for achievement.',
                'Example: Goal = "Open five more branches in the next five years." Objective = "Increase profit margin by 50% in 2020."',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 2: The Micro-Environment ─────────────────────────────────────
    {
      id: 'bs-ch1-micro',
      chapterId: 'business-ch1',
      subjectId: 'business',
      title: 'The Micro-Environment',
      minutes: 8,
      blocks: [
        { id: 'bs-micro-h1', type: 'heading', level: 2, text: 'The Micro-Environment / Internal Environment' },
        {
          id: 'bs-micro-meaning-h',
          type: 'heading',
          level: 3,
          text: 'Meaning of the Micro-Environment',
        },
        {
          id: 'bs-micro-meaning',
          type: 'list',
          text: [
            'It is the environment within which a business operates and consists of the business itself.',
            'It is the decision-making environment because management make decisions that help the business achieve its goals.',
            'It can also be referred to as the immediate environment in which a business operates and includes all the internal factors of the business.',
            'Includes everything inside the business — all internal affairs managed by directors or owners.',
            'The business has full/complete control over its micro-environment.',
            'The micro-environment is the smallest environment and is also known as the internal environment.',
            'Businesses have full control over all the features/elements/components of the micro-environment.',
          ],
        },
        {
          id: 'bs-micro-components-h',
          type: 'heading',
          level: 3,
          text: 'Components of the Micro-Environment',
        },
        {
          id: 'bs-micro-components',
          type: 'list',
          text: [
            'Vision, mission statement, goals and objectives (VMGO)',
            'Organisational resources',
            'Leadership and management',
            'Eight Business functions',
            'Organisational structure',
            'Organisational culture',
          ],
        },
        {
          id: 'bs-micro-callout',
          type: 'callout',
          text: 'The three business environments are: Micro-environment (innermost) → Market environment → Macro-environment (outermost). The business has full control over the micro-environment but less control over market and macro environments.',
        },
        {
          id: 'bs-micro-qa',
          type: 'questions',
          qa: [
            {
              q: 'State any THREE components of the micro-environment.',
              marks: 3,
              a: [
                'Vision, mission statement, goals and objectives',
                'Organisational resources',
                'Leadership and management',
                '(Any 3 of the 6 components)',
              ],
            },
            {
              q: 'Explain why the micro-environment is called the "decision-making environment."',
              marks: 2,
              a: 'It is called the decision-making environment because management make all the decisions that help the business achieve its goals. The business has full control over everything inside it, so all decisions belong to the directors and owners.',
            },
            {
              q: 'Name the three business environments and explain in which one a business has the most control.',
              marks: 3,
              a: [
                'The three environments are: micro-environment, market environment, and macro-environment.',
                'The business has the most control over the micro-environment because it consists of the business itself — all internal affairs are managed by the directors or owners.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 3: Vision, Mission, Goals & Objectives ───────────────────────
    {
      id: 'bs-ch1-vmgo',
      chapterId: 'business-ch1',
      subjectId: 'business',
      title: 'Vision, Mission, Goals & Objectives',
      minutes: 10,
      blocks: [
        { id: 'bs-vmgo-h1', type: 'heading', level: 2, text: 'Vision, Mission Statement, Goals & Objectives' },
        {
          id: 'bs-vmgo-vision-h',
          type: 'heading',
          level: 3,
          text: 'Vision',
        },
        {
          id: 'bs-vmgo-vision',
          type: 'list',
          text: [
            'Refers to a statement that explains what a business aims to achieve.',
            'Answers the question: "Where are we going from here?"',
            'The vision of a business describes its long-term goal — where the business sees itself in the future.',
            'Sets out where the business needs to go to be successful.',
            'The dream of the business and what it wants to achieve in future.',
            'Gives businesses a clear idea of what they want to achieve.',
            'The inspiring statement about what a business wants the future to look like.',
            'Example: "To provide job opportunities for the local community."',
          ],
        },
        {
          id: 'bs-vmgo-mission-h',
          type: 'heading',
          level: 3,
          text: 'Mission Statement',
        },
        {
          id: 'bs-vmgo-mission',
          type: 'list',
          text: [
            'A statement that explains the reason for the business\'s existence.',
            'Enables businesses to develop strategies to achieve their vision.',
            'Answers the question: "What do we do to make a profit?"',
            'Explains what the business does to achieve its vision.',
            'Gives clear direction on how the business intends to achieve its vision.',
            'Describes the purpose and basic activities of the business.',
            'Example: "To become a world-class communication company."',
          ],
        },
        {
          id: 'bs-vmgo-goals-h',
          type: 'heading',
          level: 3,
          text: 'Goals',
        },
        {
          id: 'bs-vmgo-goals',
          type: 'list',
          text: [
            'Can be defined as long-term objectives of what the business wants to achieve.',
            'Example: To open five more branches in the next five years.',
            'Goals breakdown the business objective into specific and measurable statements.',
            'Goals give the business a sense of direction.',
          ],
        },
        {
          id: 'bs-vmgo-objectives-h',
          type: 'heading',
          level: 3,
          text: 'Objectives',
        },
        {
          id: 'bs-vmgo-objectives',
          type: 'list',
          text: [
            'Short-term tasks/steps to reach goals.',
            'Example: In order to open five more branches in the next five years: "We will upskill our current employees by offering specific and targeted employee training."',
            'Contain a deadline for achievement.',
            'Explain how the goals of the business will be reached.',
            'Explain targets and strategies that will help the business fulfil its mission.',
            'The purpose of the business, for example, a business may have a primary objective of making a profit and a secondary objective of social upliftment.',
          ],
        },
        {
          id: 'bs-vmgo-qa',
          type: 'questions',
          qa: [
            {
              q: 'Formulate a vision, mission statement, goals and objectives for a cell phone provider.',
              marks: 8,
              a: [
                'Vision: "To become the most trusted cell phone provider in South Africa."',
                'Mission statement: "To provide affordable, high-quality mobile communication services to all South Africans."',
                'Goals: To open 20 new service centres across rural areas by 2027.',
                'Objectives: We will train 50 new technicians by June 2025; we will launch a new affordable data package by March 2025.',
              ],
            },
            {
              q: 'Identify whether the following is a vision, mission, goal or objective: "To increase our profit margin by 10% by December 2025."',
              marks: 2,
              a: 'This is an objective. It is a short-term, specific, measurable task with a deadline for achievement. Objectives explain HOW goals will be reached.',
            },
          ],
        },
      ],
    },

    // ── Lesson 4: Organisational Resources ──────────────────────────────────
    {
      id: 'bs-ch1-resources',
      chapterId: 'business-ch1',
      subjectId: 'business',
      title: 'Organisational Resources',
      minutes: 10,
      blocks: [
        { id: 'bs-res-h1', type: 'heading', level: 2, text: 'Organisational Resources' },
        {
          id: 'bs-res-intro',
          type: 'paragraph',
          text: 'Organisational resources are assets that the business uses to produce goods/services and to achieve its goals. The following groups of resources are controlled by management.',
        },
        {
          id: 'bs-res-acronym',
          type: 'acronym',
          word: 'PFHI',
          forWhat: 'Four main types of organisational resources',
          items: [
            { letter: 'P', stands: 'Physical resources', note: 'Raw materials, machinery, buildings, vehicles, natural resources' },
            { letter: 'F', stands: 'Financial resources', note: 'Capital, cash, bank overdrafts, credit, loans, money invested' },
            { letter: 'H', stands: 'Human resources', note: 'Employees, contractors — people with knowledge and skills' },
            { letter: 'I', stands: 'Information & Technological resources', note: 'Computers, internet, software, production technology' },
          ],
        },
        { id: 'bs-res-types-h', type: 'heading', level: 3, text: 'Explanation of Types of Resources' },
        {
          id: 'bs-res-human-h',
          type: 'heading',
          level: 3,
          text: 'Human Resources (People)',
        },
        {
          id: 'bs-res-human',
          type: 'list',
          text: [
            'People with knowledge and skills such as employees, consultants, managers, etc.',
            'The people needed to perform the work and keep the organisation functioning.',
            'People who contribute towards achieving the goals of the business.',
            'Includes: Employees and Contractors.',
          ],
        },
        {
          id: 'bs-res-natural-h',
          type: 'heading',
          level: 3,
          text: 'Natural Resources (within Physical resources)',
        },
        {
          id: 'bs-res-natural',
          type: 'list',
          text: [
            'Assets from nature that are used to offer services and products.',
            'Examples: minerals, water, wood, raw materials.',
          ],
        },
        {
          id: 'bs-res-physical-h',
          type: 'heading',
          level: 3,
          text: 'Physical Resources / Operating Resources',
        },
        {
          id: 'bs-res-physical',
          type: 'list',
          text: [
            'Include raw materials, office furniture/equipment, machinery, plant necessary to operate the business successfully.',
            'Also includes: buildings, machinery and vehicles, infrastructure, assets from nature such as water, minerals, and wood.',
          ],
        },
        {
          id: 'bs-res-financial-h',
          type: 'heading',
          level: 3,
          text: 'Financial / Capital Resources',
        },
        {
          id: 'bs-res-financial',
          type: 'list',
          text: [
            'Money invested in the business to acquire production goods such as land, buildings, and machinery.',
            'Can be in the form of: Capital, own capital, cash, bank overdrafts, credit card, short and medium term loans, money invested in the business to acquire production goods.',
          ],
        },
        {
          id: 'bs-res-tech-h',
          type: 'heading',
          level: 3,
          text: 'Information & Technological Resources',
        },
        {
          id: 'bs-res-tech',
          type: 'list',
          text: [
            'Resources that include computers, voice mail/emails/production technology that gives the business an advantage over its competitors.',
            'Includes: Technology, use of computers, research, production technology, computer software, laptops, websites, internet facilities, cell phones, photocopy machines.',
          ],
        },
        {
          id: 'bs-res-entrepreneurial-h',
          type: 'heading',
          level: 3,
          text: 'Entrepreneurial Resources',
        },
        {
          id: 'bs-res-entrepreneurial',
          type: 'paragraph',
          text: 'The person responsible for combining the factors of production in such a way that the business will make a profit.',
        },
        {
          id: 'bs-res-qa',
          type: 'questions',
          qa: [
            {
              q: 'Name the four types of organisational resources.',
              marks: 4,
              a: [
                'Physical resources (operating resources)',
                'Financial resources',
                'Human resources (people)',
                'Information and Technological resources',
              ],
            },
            {
              q: 'Explain the difference between human resources and financial resources.',
              marks: 4,
              a: [
                'Human resources refer to people with knowledge and skills, such as employees and contractors, who perform the work and keep the organisation functioning.',
                'Financial resources refer to money invested in the business to acquire production goods such as land, buildings, and machinery, in the form of capital, cash, loans, or overdrafts.',
              ],
            },
            {
              q: 'Explain what is meant by technological resources and give TWO examples.',
              marks: 4,
              a: [
                'Technological resources include computers, voice mail, emails, and production technology that give the business an advantage over its competitors.',
                'Examples: Computer software and production technology (any valid examples from the list).',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 5: Management & Leadership ───────────────────────────────────
    {
      id: 'bs-ch1-management',
      chapterId: 'business-ch1',
      subjectId: 'business',
      title: 'Management & Leadership',
      minutes: 10,
      blocks: [
        { id: 'bs-mgmt-h1', type: 'heading', level: 2, text: 'Management and Leadership' },
        {
          id: 'bs-mgmt-management-h',
          type: 'heading',
          level: 3,
          text: 'Management',
        },
        {
          id: 'bs-mgmt-management',
          type: 'list',
          text: [
            'The management of a business is the process whereby an individual or individuals guide and direct the organisation to achieve its goals and objectives.',
            'Good managers are able to plan properly, organise, lead, and control all the resources in the business.',
          ],
        },
        {
          id: 'bs-mgmt-polc',
          type: 'acronym',
          word: 'POLC',
          forWhat: 'The four functions of management',
          items: [
            { letter: 'P', stands: 'Plan', note: 'Set goals and decide how to achieve them' },
            { letter: 'O', stands: 'Organise', note: 'Arrange resources and tasks to achieve goals' },
            { letter: 'L', stands: 'Lead', note: 'Guide, motivate, and direct employees' },
            { letter: 'C', stands: 'Control', note: 'Monitor progress and correct deviations from the plan' },
          ],
        },
        {
          id: 'bs-mgmt-leadership-h',
          type: 'heading',
          level: 3,
          text: 'Leadership',
        },
        {
          id: 'bs-mgmt-leadership',
          type: 'list',
          text: [
            'Leadership is the ability of an individual to inspire, influence or motivate their subordinates to achieve the goals and objectives of the business.',
            'A leader influences the behaviour of others towards achieving the goals of the business.',
          ],
        },
        {
          id: 'bs-mgmt-qa',
          type: 'questions',
          qa: [
            {
              q: 'Explain the functions of management using the acronym POLC.',
              marks: 8,
              a: [
                'P — Plan: Management sets goals and decides how to achieve them through planning.',
                'O — Organise: Management arranges resources, tasks and people to achieve the goals.',
                'L — Lead: Management guides, motivates and directs employees to work towards goals.',
                'C — Control: Management monitors progress and corrects deviations from the plan.',
              ],
            },
            {
              q: 'Distinguish between management and leadership.',
              marks: 4,
              a: [
                'Management refers to the process whereby an individual guides and directs the organisation to achieve its goals and objectives.',
                'Leadership is the ability of an individual to inspire, influence or motivate their subordinates to achieve the goals of the business.',
                'Management focuses on planning, organising, leading, and controlling (POLC).',
                'Leadership focuses on inspiring and influencing people.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 6: Organisational Structure ──────────────────────────────────
    {
      id: 'bs-ch1-structure',
      chapterId: 'business-ch1',
      subjectId: 'business',
      title: 'Organisational Structure',
      minutes: 8,
      blocks: [
        { id: 'bs-struct-h1', type: 'heading', level: 2, text: 'Organisational Structure' },
        {
          id: 'bs-struct-intro',
          type: 'paragraph',
          text: 'The organisational structure shows the different departments in the organisation and how they are organised. The organisational structure is also known as an organogram. An organogram shows the level of authority, responsibility and tasks of the various departments in the business. An organogram shows the hierarchical structure of the business.',
        },
        {
          id: 'bs-struct-purpose-h',
          type: 'heading',
          level: 3,
          text: 'Purpose of the Organisational Structure',
        },
        {
          id: 'bs-struct-purpose',
          type: 'list',
          text: [
            'Helping to ensure the smooth and efficient functioning of the business — ensuring that work happens with precise co-ordination and minimum wastage of resources.',
            'Helping the business to work towards its goals.',
            'Show the connections between various positions and tasks in the business — describes the coordination between various departments.',
          ],
        },
        {
          id: 'bs-struct-importance-h',
          type: 'heading',
          level: 3,
          text: 'Importance of the Organisational Structure (Organogram)',
        },
        {
          id: 'bs-struct-importance',
          type: 'list',
          text: [
            'The organisational structure shows each person\'s tasks and level of authority and responsibility.',
            'The structure also shows the flow of instruction and feedback in the business.',
            'It determines the position of management, the departments and the employees.',
            'It determines who reports to whom, and which departments fall under which manager.',
            'The structure also indicates the way decisions are taken and carried out.',
            'Duties (jobs) with the same function are grouped together and coordinated.',
          ],
        },
        {
          id: 'bs-struct-qa',
          type: 'questions',
          qa: [
            {
              q: 'Explain what is meant by an "organisational structure."',
              marks: 3,
              a: 'An organisational structure shows the different departments in the organisation and how they are organised. It is also known as an organogram and shows the level of authority, responsibility and tasks of the various departments, as well as the hierarchical structure of the business.',
            },
            {
              q: 'State FOUR reasons why an organisational structure (organogram) is important for a business.',
              marks: 4,
              a: [
                'It shows each person\'s tasks and level of authority and responsibility.',
                'It shows the flow of instruction and feedback in the business.',
                'It determines who reports to whom and which departments fall under which manager.',
                'It indicates the way decisions are taken and carried out.',
              ],
            },
            {
              q: 'Explain the purpose of the organisational structure.',
              marks: 3,
              a: [
                'It ensures the smooth and efficient functioning of the business with minimum wastage of resources.',
                'It helps the business to work towards its goals.',
                'It shows the connections between various positions and tasks, describing coordination between departments.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 7: Organisational Culture ────────────────────────────────────
    {
      id: 'bs-ch1-culture',
      chapterId: 'business-ch1',
      subjectId: 'business',
      title: 'Organisational Culture',
      minutes: 8,
      blocks: [
        { id: 'bs-cult-h1', type: 'heading', level: 2, text: 'Organisational Culture' },
        {
          id: 'bs-cult-intro',
          type: 'paragraph',
          text: 'Organisational culture refers to how things are done in the business — for example, how the employees communicate among themselves, their dress code and their administration policy. Organisational culture also includes the values, beliefs, norms and standards that are shared among the employees and management.',
        },
        {
          id: 'bs-cult-purpose-h',
          type: 'heading',
          level: 3,
          text: 'Purpose of Organisational Culture',
        },
        {
          id: 'bs-cult-purpose',
          type: 'list',
          text: [
            'The purpose of the organisational culture is to define the business\'s internal and external identity as well as its core values.',
            'A strong business culture has the power to turn employees into ambassadors of the business.',
            'It helps businesses to retain its employees and clients.',
            'It breaks down boundaries between teams, guides decision-making, and improves productivity.',
          ],
        },
        {
          id: 'bs-cult-qa',
          type: 'questions',
          qa: [
            {
              q: 'Outline the purpose of organisational culture.',
              marks: 4,
              a: [
                'It defines the business\'s internal and external identity as well as its core values.',
                'A strong culture turns employees into ambassadors of the business.',
                'It helps businesses retain their employees and clients.',
                'It breaks down boundaries between teams, guides decision-making, and improves productivity.',
              ],
            },
            {
              q: 'Explain what is meant by "organisational culture."',
              marks: 3,
              a: 'Organisational culture refers to how things are done in the business — for example, how employees communicate, their dress code, and administration policy. It also includes the values, beliefs, norms and standards shared among employees and management.',
            },
          ],
        },
      ],
    },

    // ── Lesson 8: The Eight Business Functions ───────────────────────────────
    {
      id: 'bs-ch1-functions',
      chapterId: 'business-ch1',
      subjectId: 'business',
      title: 'The Eight Business Functions',
      minutes: 12,
      blocks: [
        { id: 'bs-func-h1', type: 'heading', level: 2, text: 'The Eight Business Functions' },
        {
          id: 'bs-func-list',
          type: 'list',
          text: [
            'General management',
            'Administration function',
            'Financial function',
            'Purchasing function',
            'Public relations function',
            'Human resources function',
            'Production function',
            'Marketing function',
          ],
        },
        {
          id: 'bs-func-acronym',
          type: 'acronym',
          word: 'GAP-FHPM',
          forWhat: 'The eight business functions',
          items: [
            { letter: 'G', stands: 'General management', note: 'Coordinates all other business functions' },
            { letter: 'A', stands: 'Administration', note: 'Collects, processes and stores data and information' },
            { letter: 'P', stands: 'Purchasing', note: 'Buys all resources the business needs' },
            { letter: 'F', stands: 'Financial function', note: 'Determines and manages financial needs' },
            { letter: 'H', stands: 'Human resources', note: 'Attracts, manages and trains people' },
            { letter: 'P', stands: 'Public relations', note: 'Creates and maintains a good public image' },
            { letter: 'M', stands: 'Marketing', note: 'Researches needs and advertises goods/services' },
            { letter: '+Production', stands: 'Production', note: 'Changes raw materials into finished/semi-finished products' },
          ],
        },
        { id: 'bs-func-detail-h', type: 'heading', level: 3, text: 'Each Function Explained' },
        {
          id: 'bs-func-detail',
          type: 'definitions',
          rows: [
            {
              term: 'General management',
              meaning: 'Coordinates the other business functions to achieve the goals and objectives of the business. The general management function plans, organises, leads and controls (POLC) resources in the business.',
            },
            {
              term: 'Purchasing function',
              meaning: 'Responsible for buying all the resources that the business needs in order to produce its goods and services.',
            },
            {
              term: 'Production function',
              meaning: 'Responsible for changing/processing raw materials into finished or semi-finished products. It ensures that the business creates quality products to meet the demands of the target market.',
            },
            {
              term: 'Marketing function',
              meaning: 'Undertakes market research to determine the real needs of the target market. It is also responsible for the advertising/promotion of goods and services to customers.',
            },
            {
              term: 'Public relations function',
              meaning: 'Responsible for creating a good public image for the business. It ensures that there is proper communication between the business and all its stakeholders.',
            },
            {
              term: 'Human resources function',
              meaning: 'Responsible for attracting new employees into the business. It also has to manage all the people in the business by providing education and training for their employees.',
            },
            {
              term: 'Administration function',
              meaning: 'Responsible for collecting, processing and storing all the data and information required by the business. The administration function has to be up to date with the latest information technology.',
            },
            {
              term: 'Financial function',
              meaning: 'Responsible for determining all the financial needs of the business. It ensures that the business\'s funds are used efficiently. It manages all the funds and financial assets of the business.',
            },
          ],
        },
        {
          id: 'bs-func-qa',
          type: 'questions',
          qa: [
            {
              q: 'Name the eight business functions.',
              marks: 8,
              a: [
                'General management',
                'Administration function',
                'Financial function',
                'Purchasing function',
                'Public relations function',
                'Human resources function',
                'Production function',
                'Marketing function',
              ],
            },
            {
              q: 'Explain the role of the FINANCIAL function.',
              marks: 4,
              a: [
                'The financial function is responsible for determining all the financial needs of the business.',
                'It ensures that the business\'s funds are used efficiently.',
                'It manages all the funds and financial assets of the business.',
              ],
            },
            {
              q: 'Describe the role of the HUMAN RESOURCES function.',
              marks: 4,
              a: [
                'The human resource function is responsible for attracting new employees into the business.',
                'It also has to manage all the people in the business by providing education and training for their employees.',
              ],
            },
            {
              q: 'Distinguish between the PRODUCTION function and the MARKETING function.',
              marks: 4,
              a: [
                'The production function is responsible for changing/processing raw materials into finished or semi-finished products, ensuring quality products to meet the demands of the target market.',
                'The marketing function undertakes market research to determine the real needs of the target market, and is responsible for advertising/promotion of goods and services to customers.',
                'Production creates the product; marketing researches what customers want and promotes the product.',
              ],
            },
            {
              q: 'Identify the business function being described: "This department is responsible for creating a good public image for the business and ensuring that there is proper communication between the business and all its stakeholders."',
              marks: 2,
              a: 'This is the Public Relations function. It is responsible for creating a good public image for the business and ensuring proper communication between the business and all its stakeholders.',
            },
            {
              q: 'ESSAY: Discuss how the eight business functions work together to help a business achieve its goals. (150–200 words)',
              marks: 10,
              a: 'The eight business functions work in a coordinated system under the direction of General Management, which plans, organises, leads and controls (POLC) all resources. General Management acts as the coordinator, ensuring all functions support the business\'s vision, mission, and goals. The Purchasing function sources all the raw materials and resources that the Production function needs to manufacture finished goods. The Marketing function then researches what customers want and promotes those finished goods to the target market. The Financial function ensures all departments have the funds they need and that money is spent efficiently. The Human Resources function attracts and trains the people who perform all these roles. The Administration function collects, processes and stores all the data and information the business needs to make good decisions. Finally, the Public Relations function manages the business\'s image and ensures effective communication with all stakeholders. No function operates in isolation — each depends on the others. The Administration function supports all functions with information, while the Financial function funds them all. When all eight functions work in harmony under effective management, the business is able to achieve its goals and objectives efficiently.',
            },
          ],
        },
      ],
    },
  ],
};
