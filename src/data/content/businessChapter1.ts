import type { Chapter } from '@/lib/types';

/**
 * Business Studies — Grade 10, Term 1
 * Chapter 1: Components of the Micro-Environment
 *
 * Content extracted from study-guide photographs in BusinessStudies-Chapter1/.
 * Every section includes: definitions, detailed explanations, acronyms where
 * relevant, and exam-style questions with model answers.
 */
export const BUSINESS_CHAPTER_1: Chapter = {
  id: 'bus-ch1',
  subjectId: 'business',
  title: 'Chapter 1 — Components of the Micro-Environment',
  summary: 'Vision, mission, goals, objectives, resources, leadership, structure, culture and the eight business functions.',
  term: 1,
  lessons: [

    /* ── 1. Key concepts & definitions ──────────────────────────────────── */
    {
      id: 'bus-ch1-definitions',
      chapterId: 'bus-ch1',
      subjectId: 'business',
      title: 'Key Concepts & Definitions',
      minutes: 8,
      blocks: [
        {
          id: 'def-h1',
          type: 'heading',
          level: 2,
          text: 'Key Terms You Must Know',
        },
        {
          id: 'def-p1',
          type: 'paragraph',
          text: 'Before studying the micro-environment, you must be able to define and explain each of the following terms. These definitions appear directly in exam questions — learn them word for word and understand the difference between similar terms (e.g. vision vs mission, goals vs objectives).',
        },
        {
          id: 'def-table',
          type: 'definitions',
          rows: [
            { term: 'Business functions', meaning: 'The tasks requiring specific knowledge and skills that are carried out by the various departments to achieve the goals of the business.' },
            { term: 'Goals', meaning: 'The long-term plans of what the business wants to achieve. Goals break down the business objective into specific and measurable statements.' },
            { term: 'Leadership', meaning: 'The way in which an individual can influence the behaviour of others towards achieving the objectives of the business. Leadership is the ability to inspire, influence or motivate subordinates to achieve goals.' },
            { term: 'Management', meaning: 'The way the business is managed. This entails planning, leading, organising and controlling the people in the business. Good managers are able to POLC — Plan, Organise, Lead, Control.' },
            { term: 'Micro-environment', meaning: 'Includes everything inside the business. All the internal affairs of the business are managed by the directors or the owners. The business has full/complete control over its micro-environment. Also known as the internal environment.' },
            { term: 'Mission statement', meaning: 'Describes what the business provides or produces. It explains the reason for the business\'s existence and gives clear direction on HOW the business intends to achieve its vision.' },
            { term: 'Objectives', meaning: 'Short-term tasks and steps used to reach goals. They contain a deadline for achievement and explain how the goals of the business will be reached.' },
            { term: 'Vision', meaning: 'Refers to what the business wants to achieve in the long-term — the dream of the business. Sets out where the business needs to go to be successful and describes its long-term goal.' },
            { term: 'Organisational structure', meaning: 'Shows the different departments in the organisation and how they are organised. Also known as an organogram. It shows levels of authority, responsibility and tasks of the various departments.' },
            { term: 'Organisational culture', meaning: 'Refers to how things are done in the business — the values, beliefs, norms and standards shared among employees and management.' },
          ],
        },
        {
          id: 'def-callout',
          type: 'callout',
          text: '📌 Exam tip: When asked to "define" a term, give the full sentence definition. When asked to "explain", add context and an example. Know the difference between vision (where we want to go) vs mission (how we will get there) vs goals (long-term targets) vs objectives (short-term steps).',
        },
      ],
    },

    /* ── 2. The micro-environment ────────────────────────────────────────── */
    {
      id: 'bus-ch1-micro',
      chapterId: 'bus-ch1',
      subjectId: 'business',
      title: 'The Micro-Environment',
      minutes: 10,
      blocks: [
        {
          id: 'micro-h1',
          type: 'heading',
          level: 2,
          text: 'What is the Micro-Environment?',
        },
        {
          id: 'micro-p1',
          type: 'paragraph',
          text: 'The micro-environment is the internal environment of the business — everything that happens inside the organisation. It is the smallest of the three business environments (micro, market/task, macro) and is the one over which the business has FULL and COMPLETE control. This is what makes it unique compared to the market and macro environments.',
        },
        {
          id: 'micro-h2',
          type: 'heading',
          level: 3,
          text: 'Characteristics of the Micro-Environment',
        },
        {
          id: 'micro-list1',
          type: 'list',
          text: [
            'It is the environment within which a business OPERATES and consists of the business itself.',
            'It is the DECISION-MAKING environment — management make decisions here that help the business achieve its goals.',
            'It can also be referred to as the IMMEDIATE ENVIRONMENT in which a business operates.',
            'It includes all the INTERNAL FACTORS of the business — everything that happens inside.',
            'The business has FULL/COMPLETE CONTROL over all features/elements/components of the micro-environment.',
            'The micro-environment is also known as the INTERNAL ENVIRONMENT.',
            'It is the smallest environment — nested inside the market environment, which is nested inside the macro environment (like concentric circles).',
          ],
        },
        {
          id: 'micro-h3',
          type: 'heading',
          level: 3,
          text: 'Components of the Micro-Environment',
        },
        {
          id: 'micro-p2',
          type: 'paragraph',
          text: 'The micro-environment consists of six main components. Each component is a separate topic you must study in detail:',
        },
        {
          id: 'micro-list2',
          type: 'list',
          text: [
            'Vision, mission statement, goals and objectives',
            'Organisational resources (Physical, Financial, Human, Information & Technological)',
            'Leadership and management',
            'Eight business functions',
            'Organisational structure',
            'Organisational culture',
          ],
        },
        {
          id: 'micro-acronym',
          type: 'acronym',
          word: 'VORLSO',
          forWhat: 'The 6 components of the micro-environment',
          items: [
            { letter: 'V', stands: 'Vision, mission, goals & objectives', note: 'The direction the business is heading' },
            { letter: 'O', stands: 'Organisational resources', note: 'Physical, Financial, Human, IT resources' },
            { letter: 'R', stands: 'Resources (management & leadership)', note: 'How people are led and managed' },
            { letter: 'L', stands: 'Leadership & management (POLC)', note: 'Plan, Organise, Lead, Control' },
            { letter: 'S', stands: 'Structure (organisational)', note: 'The organogram showing authority levels' },
            { letter: 'O', stands: 'Organisational culture', note: 'Values, norms, how things are done' },
          ],
        },
        {
          id: 'micro-questions',
          type: 'questions',
          qa: [
            {
              q: 'Define the term "micro-environment".',
              marks: 2,
              a: 'The micro-environment includes everything inside the business. All the internal affairs of the business are managed by the directors or the owners of the business. The business has full/complete control over its micro-environment.',
            },
            {
              q: 'Give THREE characteristics of the micro-environment.',
              marks: 3,
              a: [
                'It is the environment within which a business operates and consists of the business itself.',
                'It is the decision-making environment because management makes decisions that help the business achieve its goals.',
                'The business has full/complete control over all features/elements/components of the micro-environment.',
              ],
            },
            {
              q: 'Name the SIX components of the micro-environment.',
              marks: 6,
              a: [
                'Vision, mission statement, goals and objectives',
                'Organisational resources',
                'Leadership and management',
                'Eight business functions',
                'Organisational structure',
                'Organisational culture',
              ],
            },
          ],
        },
      ],
    },

    /* ── 3. Vision, mission, goals & objectives ──────────────────────────── */
    {
      id: 'bus-ch1-vmgo',
      chapterId: 'bus-ch1',
      subjectId: 'business',
      title: 'Vision, Mission, Goals & Objectives',
      minutes: 14,
      blocks: [
        {
          id: 'vmgo-h1',
          type: 'heading',
          level: 2,
          text: 'Vision',
        },
        {
          id: 'vmgo-p1',
          type: 'paragraph',
          text: 'The vision refers to a statement that explains what a business aims to achieve in the long-term. It is the "dream" of the business — where the business sees itself in the future. The vision answers the question: "Where are we going from here?"',
        },
        {
          id: 'vmgo-vision-list',
          type: 'list',
          text: [
            'Refers to a statement that explains what a business AIMS TO ACHIEVE.',
            'Answers the question: "Where are we going from here?"',
            'The vision describes the business\'s LONG-TERM GOAL — where the business sees itself in the future.',
            'Sets out where the business needs to go to be SUCCESSFUL.',
            'The DREAM of the business and what it wants to achieve in future.',
            'Gives businesses a clear idea of WHAT they want to achieve.',
            'The INSPIRING statement about what a business wants the future to look like.',
            'Explains what a business aims to achieve taking into consideration its purpose.',
            'Example: "To provide job opportunities for the local community."',
            'Example for a cell phone provider: "To become the most trusted telecommunications brand in Africa."',
          ],
        },
        {
          id: 'vmgo-h2',
          type: 'heading',
          level: 2,
          text: 'Mission Statement',
        },
        {
          id: 'vmgo-p2',
          type: 'paragraph',
          text: 'The mission statement explains the REASON FOR THE BUSINESS\'S EXISTENCE — what it does right now to achieve its vision. While the vision is about the future ("where we want to go"), the mission is about the present ("what we do to get there").',
        },
        {
          id: 'vmgo-mission-list',
          type: 'list',
          text: [
            'A statement that explains the REASON FOR THE BUSINESS\'S EXISTENCE.',
            'Example: Oliwethu Beauty Salon (OBS) wants to provide professional services in hairdressing and also supply beauty products.',
            'Enables businesses to develop STRATEGIES to achieve their vision.',
            'Answers the question: "What do businesses do to make a profit?"',
            'Explains WHAT THE BUSINESS DOES to achieve its vision.',
            'Gives clear direction on HOW the business intends to achieve its vision.',
            'Describes the PURPOSE and BASIC ACTIVITIES of the business.',
            'Example: "To become a world-class communication company."',
          ],
        },
        {
          id: 'vmgo-h3',
          type: 'heading',
          level: 2,
          text: 'Goals',
        },
        {
          id: 'vmgo-goals-list',
          type: 'list',
          text: [
            'Can be defined as LONG-TERM OBJECTIVES of what the business wants to achieve.',
            'Example: "To open five more branches in the next five years."',
            'Goals BREAK DOWN THE BUSINESS OBJECTIVE into specific and measurable statements.',
            'Example: Increase profit margin by 50% in 2025.',
            'Goals give the business a SENSE OF DIRECTION.',
          ],
        },
        {
          id: 'vmgo-h4',
          type: 'heading',
          level: 2,
          text: 'Objectives',
        },
        {
          id: 'vmgo-obj-list',
          type: 'list',
          text: [
            'SHORT-TERM TASKS and steps to reach goals.',
            'Example: "In order to open five more branches in the next five years: We will upskill our current employees by offering specific and targeted employee training / We will increase our efforts to reduce carbon emissions / We will set up specific marketing campaigns to gain greater market share and increase our profit margins."',
            'Contain a DEADLINE FOR ACHIEVEMENT.',
            'Explain HOW THE GOALS of the business will be reached.',
            'Explain targets and strategies that will help the business fulfil its mission.',
            'The purpose of the business — for example, a business may have a primary objective of making a profit and a secondary objective of social upliftment.',
          ],
        },
        {
          id: 'vmgo-compare-callout',
          type: 'callout',
          text: '🔑 KEY DIFFERENCE: Vision = long-term dream (WHERE we are going). Mission = reason for existence / what we do NOW (HOW we will get there). Goals = long-term measurable targets. Objectives = short-term steps with deadlines to reach the goals.',
        },
        {
          id: 'vmgo-questions',
          type: 'questions',
          qa: [
            {
              q: 'Explain the difference between a vision and a mission statement.',
              marks: 4,
              a: [
                'A vision refers to a statement that explains what a business AIMS TO ACHIEVE in the long-term — it is the dream of the business, where it sees itself in the future.',
                'A mission statement explains the REASON FOR THE BUSINESS\'S EXISTENCE — what it does right now to achieve the vision.',
                'The vision answers "Where are we going?" while the mission answers "What do we do to get there?"',
                'Example: Vision — "To become Africa\'s most trusted telecommunications brand." Mission — "To provide affordable and reliable mobile services to all South Africans."',
              ],
            },
            {
              q: 'What is the difference between goals and objectives?',
              marks: 4,
              a: [
                'Goals are the LONG-TERM plans of what the business wants to achieve — they give the business a sense of direction and break objectives into specific and measurable statements.',
                'Objectives are SHORT-TERM TASKS and steps used to reach the goals — they contain a deadline for achievement.',
                'Example: Goal — "To open five more branches in the next five years." Objective — "We will upskill our employees through targeted training programmes by December this year."',
              ],
            },
            {
              q: 'Formulate a vision, mission statement, goals and objectives for a cell phone provider.',
              marks: 8,
              a: [
                'Vision: To become Africa\'s most trusted and innovative mobile telecommunications brand.',
                'Mission: To provide affordable, reliable and cutting-edge mobile communication services that connect communities across South Africa.',
                'Goals: To expand our network coverage to reach 95% of South Africa\'s population within five years.',
                'Objectives: We will invest R500 million in new infrastructure this financial year / We will launch a new budget smartphone range by June / We will recruit 200 additional technicians by March.',
              ],
            },
          ],
        },
      ],
    },

    /* ── 4. Organisational resources ─────────────────────────────────────── */
    {
      id: 'bus-ch1-resources',
      chapterId: 'bus-ch1',
      subjectId: 'business',
      title: 'Organisational Resources',
      minutes: 12,
      blocks: [
        {
          id: 'res-h1',
          type: 'heading',
          level: 2,
          text: 'What are Organisational Resources?',
        },
        {
          id: 'res-p1',
          type: 'paragraph',
          text: 'Organisational resources are the assets that the business uses to produce goods and services, and to achieve its goals. They are controlled by management. There are four main groups of resources — and businesses need ALL FOUR to function effectively.',
        },
        {
          id: 'res-acronym',
          type: 'acronym',
          word: 'PFHI',
          forWhat: 'The 4 types of organisational resources',
          items: [
            { letter: 'P', stands: 'Physical resources', note: 'Raw materials, machinery, buildings, vehicles, infrastructure' },
            { letter: 'F', stands: 'Financial resources', note: 'Capital, cash, bank overdrafts, loans, credit cards' },
            { letter: 'H', stands: 'Human resources (People)', note: 'Employees, contractors — people with knowledge and skills' },
            { letter: 'I', stands: 'Information & Technological resources', note: 'Computers, software, internet, production technology' },
          ],
        },
        {
          id: 'res-h2',
          type: 'heading',
          level: 3,
          text: 'Physical Resources (Operating Resources)',
        },
        {
          id: 'res-physical-list',
          type: 'list',
          text: [
            'Include raw materials/office furniture/equipment/machinery/plant necessary to operate the business successfully.',
            'Natural resources — assets from nature used to offer services and products, such as minerals, water, and wood.',
            'Machinery — the equipment used in production.',
            'Buildings, machinery and vehicles — the physical assets of the business.',
            'Infrastructure — roads, power lines, water supply used by the business.',
            'Assets from nature such as water, minerals, and wood (raw materials).',
          ],
        },
        {
          id: 'res-h3',
          type: 'heading',
          level: 3,
          text: 'Financial Resources (Capital Resources)',
        },
        {
          id: 'res-financial-list',
          type: 'list',
          text: [
            'Money invested in the business to acquire production goods such as land, buildings, and machinery.',
            'Can be in the form of cash / bank overdrafts / short- and medium-term loans.',
            'Own capital — money the owner puts into the business.',
            'Credit cards and bank overdrafts — short-term financial resources.',
            'Short and medium-term loans from financial institutions.',
          ],
        },
        {
          id: 'res-h4',
          type: 'heading',
          level: 3,
          text: 'Human Resources (People)',
        },
        {
          id: 'res-human-list',
          type: 'list',
          text: [
            'People with KNOWLEDGE AND SKILLS such as employees, consultants, managers, etc.',
            'The people needed to PERFORM THE WORK and keep the organization functioning.',
            'People who contribute towards achieving the goals of the business.',
            'Includes both employees (permanent staff) and contractors (external specialists).',
          ],
        },
        {
          id: 'res-h5',
          type: 'heading',
          level: 3,
          text: 'Information & Technological Resources',
        },
        {
          id: 'res-tech-list',
          type: 'list',
          text: [
            'Resources that include computers, voice mail, emails, and production technology that GIVES THE BUSINESS AN ADVANTAGE over its competitors.',
            'Technology — the use of computers and digital systems.',
            'Research and production technology.',
            'Computer software — programs that run the business.',
            'Laptops, computers, websites — digital infrastructure.',
            'Internet facilities for communication and research.',
            'Cell phones and photocopying machines.',
          ],
        },
        {
          id: 'res-h6',
          type: 'heading',
          level: 3,
          text: 'Entrepreneurial Resources',
        },
        {
          id: 'res-entrepreneur-list',
          type: 'list',
          text: [
            'The person responsible for COMBINING THE FACTORS OF PRODUCTION in such a way that the business will make a profit.',
            'The entrepreneur takes the risk of starting and running the business.',
            'They bring together physical, financial, human and technological resources.',
          ],
        },
        {
          id: 'res-questions',
          type: 'questions',
          qa: [
            {
              q: 'Name and briefly describe the FOUR types of organisational resources.',
              marks: 8,
              a: [
                'Physical resources: Include raw materials, machinery, buildings and equipment necessary to operate the business.',
                'Financial resources: Money invested in the business including capital, cash, bank overdrafts and loans.',
                'Human resources: People with knowledge and skills — employees and contractors — needed to perform the work.',
                'Information & Technological resources: Computers, software, internet and production technology that gives the business a competitive advantage.',
              ],
            },
            {
              q: 'Explain why human resources are the most important resource for any business.',
              marks: 3,
              a: [
                'Human resources are the people with knowledge and skills needed to operate all other resources.',
                'Without people, physical, financial and technological resources cannot be utilised effectively.',
                'People contribute towards achieving the goals of the business and keep the organisation functioning.',
              ],
            },
          ],
        },
      ],
    },

    /* ── 5. Management & leadership (POLC) ───────────────────────────────── */
    {
      id: 'bus-ch1-management',
      chapterId: 'bus-ch1',
      subjectId: 'business',
      title: 'Management & Leadership',
      minutes: 10,
      blocks: [
        {
          id: 'mgmt-h1',
          type: 'heading',
          level: 2,
          text: 'Management',
        },
        {
          id: 'mgmt-p1',
          type: 'paragraph',
          text: 'Management is the process whereby an individual or individuals guide and direct the organisation to achieve its goals and objectives. Good managers are able to plan, organise, lead and control all the resources in the business.',
        },
        {
          id: 'mgmt-polc',
          type: 'acronym',
          word: 'POLC',
          forWhat: 'The four functions of management',
          items: [
            { letter: 'P', stands: 'Plan', note: 'Setting goals and deciding how to achieve them. Creating strategies and action plans.' },
            { letter: 'O', stands: 'Organise', note: 'Arranging resources and tasks — deciding who does what, when and how.' },
            { letter: 'L', stands: 'Lead', note: 'Motivating, guiding and directing people to work towards the goals.' },
            { letter: 'C', stands: 'Control', note: 'Monitoring performance against the plan and taking corrective action when needed.' },
          ],
        },
        {
          id: 'mgmt-h2',
          type: 'heading',
          level: 2,
          text: 'Leadership',
        },
        {
          id: 'mgmt-leadership-list',
          type: 'list',
          text: [
            'Leadership is the ABILITY of an individual to INSPIRE, INFLUENCE OR MOTIVATE their subordinates to achieve the goals and objectives of the business.',
            'A leader guides people — they don\'t just manage tasks, they shape behaviour.',
            'Leadership is about influencing how people think and act towards achieving the business\'s vision.',
            'Good leaders create a positive work environment that improves productivity.',
          ],
        },
        {
          id: 'mgmt-callout',
          type: 'callout',
          text: '🔑 KEY DIFFERENCE: Management is about controlling RESOURCES and TASKS (things). Leadership is about influencing PEOPLE (behaviour). A good manager uses POLC. A good leader inspires, influences and motivates. You can be a manager without being a leader — but the best managers ARE leaders.',
        },
        {
          id: 'mgmt-questions',
          type: 'questions',
          qa: [
            {
              q: 'Explain what is meant by the POLC principle of management.',
              marks: 4,
              a: [
                'Plan: Setting goals and deciding how to achieve them through strategies and action plans.',
                'Organise: Arranging resources and tasks — deciding who does what, when and how.',
                'Lead: Motivating and directing people to work towards the goals of the business.',
                'Control: Monitoring performance against the plan and taking corrective action when necessary.',
              ],
            },
            {
              q: 'Distinguish between management and leadership.',
              marks: 4,
              a: [
                'Management is the process whereby individuals guide and direct the organisation to achieve its goals — it focuses on planning, organising, leading and controlling RESOURCES.',
                'Leadership is the ability of an individual to inspire, influence or motivate subordinates to achieve the goals — it focuses on influencing PEOPLE\'s behaviour.',
                'Management deals with tasks and processes; leadership deals with people and motivation.',
                'A manager can manage without leading, but the best managers also demonstrate leadership qualities.',
              ],
            },
          ],
        },
      ],
    },

    /* ── 6. Organisational structure ─────────────────────────────────────── */
    {
      id: 'bus-ch1-structure',
      chapterId: 'bus-ch1',
      subjectId: 'business',
      title: 'Organisational Structure',
      minutes: 10,
      blocks: [
        {
          id: 'struct-h1',
          type: 'heading',
          level: 2,
          text: 'What is Organisational Structure?',
        },
        {
          id: 'struct-p1',
          type: 'paragraph',
          text: 'The organisational structure shows the different departments in the organisation and how they are organised. It is also known as an organogram. An organogram shows the level of authority, responsibility and tasks of the various departments in the business and the hierarchical structure of the organisation.',
        },
        {
          id: 'struct-h2',
          type: 'heading',
          level: 3,
          text: 'Purpose of the Organisational Structure',
        },
        {
          id: 'struct-purpose-list',
          type: 'list',
          text: [
            'Helping to ensure the SMOOTH AND EFFICIENT FUNCTIONING of the business — ensuring that work happens with precise co-ordination and minimum wastage of resources.',
            'Helping the business to work towards its goals.',
            'Show the CONNECTIONS BETWEEN VARIOUS POSITIONS and tasks in the business — it describes the coordination between various departments in the business.',
          ],
        },
        {
          id: 'struct-h3',
          type: 'heading',
          level: 3,
          text: 'Importance of the Organisational Structure / Organogram',
        },
        {
          id: 'struct-importance-list',
          type: 'list',
          text: [
            'The organisational structure shows EACH PERSON\'S TASKS and their level of authority and responsibility.',
            'The structure also shows the FLOW OF INSTRUCTION and feedback in the business.',
            'It determines the POSITION OF MANAGEMENT, the departments and the employees.',
            'It determines WHO REPORTS TO WHOM, and which departments fall under which manager.',
            'The structure also indicates the WAY DECISIONS ARE TAKEN and carried out.',
            'Duties (jobs) with the same function are GROUPED TOGETHER and coordinated.',
          ],
        },
        {
          id: 'struct-questions',
          type: 'questions',
          qa: [
            {
              q: 'What is an organogram? State its purpose.',
              marks: 4,
              a: [
                'An organogram is a visual diagram (also called an organisational structure) that shows the different departments in the organisation and how they are organised.',
                'Purpose 1: It shows each person\'s tasks and their level of authority and responsibility.',
                'Purpose 2: It shows the flow of instruction and feedback in the business.',
                'Purpose 3: It determines who reports to whom and which departments fall under which manager.',
              ],
            },
            {
              q: 'Give THREE reasons why organisational structure is important for a business.',
              marks: 3,
              a: [
                'It helps ensure the smooth and efficient functioning of the business with minimum wastage of resources.',
                'It shows the connections between various positions and tasks, describing how departments coordinate.',
                'It determines the way decisions are taken and carried out in the business.',
              ],
            },
          ],
        },
      ],
    },

    /* ── 7. Organisational culture ───────────────────────────────────────── */
    {
      id: 'bus-ch1-culture',
      chapterId: 'bus-ch1',
      subjectId: 'business',
      title: 'Organisational Culture',
      minutes: 8,
      blocks: [
        {
          id: 'cult-h1',
          type: 'heading',
          level: 2,
          text: 'What is Organisational Culture?',
        },
        {
          id: 'cult-p1',
          type: 'paragraph',
          text: 'Organisational culture refers to HOW THINGS ARE DONE in the business. This includes how the employees communicate among themselves, their dress code, and their administration policy. It also includes the values, beliefs, norms and standards that are shared among employees and management.',
        },
        {
          id: 'cult-h2',
          type: 'heading',
          level: 3,
          text: 'Purpose of Organisational Culture',
        },
        {
          id: 'cult-purpose-list',
          type: 'list',
          text: [
            'To define the business\'s INTERNAL AND EXTERNAL IDENTITY as well as its core values.',
            'A strong business culture has the power to turn employees into AMBASSADORS of the business.',
            'It helps businesses to RETAIN ITS EMPLOYEES and clients (reduces staff turnover).',
            'It breaks down boundaries between teams, GUIDES DECISION-MAKING, and improves productivity.',
          ],
        },
        {
          id: 'cult-callout',
          type: 'callout',
          text: '💡 Culture is "the way we do things around here." It is invisible but powerful — it determines whether employees feel valued, whether customers are treated well, and whether the business achieves its goals. A business with a strong positive culture has a competitive advantage.',
        },
        {
          id: 'cult-questions',
          type: 'questions',
          qa: [
            {
              q: 'Define "organisational culture".',
              marks: 2,
              a: 'Organisational culture refers to how things are done in the business — the values, beliefs, norms and standards that are shared among employees and management, including how employees communicate, their dress code and administration policy.',
            },
            {
              q: 'Outline the purpose of organisational culture.',
              marks: 4,
              a: [
                'To define the business\'s internal and external identity as well as its core values.',
                'A strong business culture has the power to turn employees into ambassadors of the business.',
                'It helps businesses to retain its employees and clients.',
                'It breaks down boundaries between teams, guides decision-making, and improves productivity.',
              ],
            },
          ],
        },
      ],
    },

    /* ── 8. Eight business functions ─────────────────────────────────────── */
    {
      id: 'bus-ch1-functions',
      chapterId: 'bus-ch1',
      subjectId: 'business',
      title: 'The Eight Business Functions',
      minutes: 18,
      blocks: [
        {
          id: 'func-h1',
          type: 'heading',
          level: 2,
          text: 'What are Business Functions?',
        },
        {
          id: 'func-p1',
          type: 'paragraph',
          text: 'Business functions are the tasks requiring specific knowledge and skills that are carried out by the various departments to achieve the goals of the business. There are EIGHT business functions — every business, large or small, must perform all eight to operate successfully.',
        },
        {
          id: 'func-acronym',
          type: 'acronym',
          word: 'GAP-FHPM',
          forWhat: 'The 8 Business Functions',
          items: [
            { letter: 'G', stands: 'General management', note: 'Co-ordinates all other functions using POLC' },
            { letter: 'A', stands: 'Administration function', note: 'Collects, processes and stores all data' },
            { letter: 'P', stands: 'Purchasing function', note: 'Buys all resources the business needs' },
            { letter: 'F', stands: 'Financial function', note: 'Determines and manages financial needs' },
            { letter: 'H', stands: 'Human resources function', note: 'Attracts, trains and manages people' },
            { letter: 'P', stands: 'Production function', note: 'Changes raw materials into finished products' },
            { letter: 'M', stands: 'Marketing function', note: 'Research, advertising and promotion' },
            { letter: 'PR', stands: 'Public relations function', note: 'Creates good public image and communication' },
          ],
        },
        {
          id: 'func-h2',
          type: 'heading',
          level: 3,
          text: 'General Management',
        },
        {
          id: 'func-gm-list',
          type: 'list',
          text: [
            'The general management in a business CO-ORDINATES THE OTHER BUSINESS FUNCTIONS to achieve the goals and objectives of the business.',
            'The general management function PLANS, ORGANISES, LEADS AND CONTROLS resources in the business (POLC).',
            'It is the overarching function — it ensures all other seven functions work together effectively.',
          ],
        },
        {
          id: 'func-h3',
          type: 'heading',
          level: 3,
          text: 'Purchasing Function',
        },
        {
          id: 'func-purchase-list',
          type: 'list',
          text: [
            'The purchasing function is responsible for BUYING ALL THE RESOURCES that the business needs in order to produce its goods and services.',
            'This includes raw materials, stationery, equipment, and any other inputs needed for production.',
          ],
        },
        {
          id: 'func-h4',
          type: 'heading',
          level: 3,
          text: 'Production Function',
        },
        {
          id: 'func-prod-list',
          type: 'list',
          text: [
            'The production function is responsible for CHANGING/PROCESSING RAW MATERIALS into finished or semi-finished products.',
            'It ensures that the business CREATES QUALITY PRODUCTS to meet the demands of the target market.',
            'It is the "making" or "creating" department of the business.',
          ],
        },
        {
          id: 'func-h5',
          type: 'heading',
          level: 3,
          text: 'Marketing Function',
        },
        {
          id: 'func-mkt-list',
          type: 'list',
          text: [
            'The marketing function undertakes MARKET RESEARCH to determine the REAL NEEDS of the target market.',
            'It is also responsible for the ADVERTISING/PROMOTION of goods and services to customers.',
            'Marketing determines what customers want, at what price, in what place, and how to promote it (the 4 Ps).',
          ],
        },
        {
          id: 'func-h6',
          type: 'heading',
          level: 3,
          text: 'Public Relations Function',
        },
        {
          id: 'func-pr-list',
          type: 'list',
          text: [
            'The public relations function is responsible for CREATING A GOOD PUBLIC IMAGE for the business.',
            'It ensures that there is proper COMMUNICATION BETWEEN THE BUSINESS AND ALL ITS STAKEHOLDERS (customers, suppliers, community, government, media).',
          ],
        },
        {
          id: 'func-h7',
          type: 'heading',
          level: 3,
          text: 'Human Resources Function',
        },
        {
          id: 'func-hr-list',
          type: 'list',
          text: [
            'The human resource function is responsible for ATTRACTING NEW EMPLOYEES into the business (recruitment and selection).',
            'It also has to MANAGE ALL THE PEOPLE IN THE BUSINESS by providing education and training for their employees.',
            'HR deals with salaries, employee welfare, performance management, and disciplinary matters.',
          ],
        },
        {
          id: 'func-h8',
          type: 'heading',
          level: 3,
          text: 'Administration Function',
        },
        {
          id: 'func-admin-list',
          type: 'list',
          text: [
            'The administration function is responsible for COLLECTING, PROCESSING AND STORING ALL THE DATA and information required by the business.',
            'The administration function has to be up to date with the LATEST INFORMATION TECHNOLOGY.',
            'This includes record-keeping, filing, communication systems and office management.',
          ],
        },
        {
          id: 'func-h9',
          type: 'heading',
          level: 3,
          text: 'Financial Function',
        },
        {
          id: 'func-fin-list',
          type: 'list',
          text: [
            'The financial function is responsible for DETERMINING ALL THE FINANCIAL NEEDS of the business.',
            'It ensures that the BUSINESS\'S FUNDS ARE USED EFFICIENTLY.',
            'It manages all the funds and financial assets of the business — budgets, financial statements, tax, investments.',
          ],
        },
        {
          id: 'func-callout',
          type: 'callout',
          text: '📝 Note: All EIGHT functions are equally important. General management CO-ORDINATES the other seven. In the exam, you may be given a scenario/case study and asked to identify which business function is being described — make sure you know what each function does.',
        },
        {
          id: 'func-questions',
          type: 'questions',
          qa: [
            {
              q: 'Name the EIGHT business functions.',
              marks: 8,
              a: [
                '1. General management',
                '2. Administration function',
                '3. Financial function',
                '4. Purchasing function',
                '5. Public relations function',
                '6. Human resources function',
                '7. Production function',
                '8. Marketing function',
              ],
            },
            {
              q: 'Explain the role of the marketing function in a business.',
              marks: 4,
              a: [
                'The marketing function undertakes market research to determine the real needs of the target market.',
                'It is responsible for the advertising and promotion of goods and services to customers.',
                'Marketing determines what customers want, at what price, where to sell it, and how to promote it.',
                'It plays a vital role in increasing sales and ensuring the business stays competitive.',
              ],
            },
            {
              q: 'Describe the role of the human resources function.',
              marks: 4,
              a: [
                'The human resource function is responsible for attracting new employees into the business through recruitment and selection.',
                'It manages all the people in the business by providing education and training.',
                'HR deals with salaries, employee welfare, performance management and disciplinary matters.',
                'It ensures the business has the right people with the right skills in the right positions.',
              ],
            },
            {
              q: 'Identify the business function being described: "This department is responsible for changing raw materials into products that satisfy customer needs."',
              marks: 1,
              a: 'Production function',
            },
            {
              q: 'Identify the business function being described: "This department collects, processes and stores all the data and information required by the business."',
              marks: 1,
              a: 'Administration function',
            },
            {
              q: 'How does the general management function differ from the other seven business functions?',
              marks: 2,
              a: [
                'The general management function CO-ORDINATES all other seven business functions to ensure they work together to achieve the goals of the business.',
                'It is the overarching function that uses POLC (Plan, Organise, Lead, Control) to direct all other functions.',
              ],
            },
          ],
        },
      ],
    },
  ],
};
