import type { Chapter } from '@/lib/types';

export const BUSINESS_CHAPTER_14: Chapter = {
  id: 'business-ch14',
  subjectId: 'business',
  title: 'Chapter 14: The Business Plan',
  summary:
    'Grade 10 Term 3 — The importance of a business plan, the PESTLE analysis of the macro environment, the components of a business plan (executive summary, VMGO, structure and forms of ownership, legal requirements, marketing plan and the 7Ps, strategies to overcome competition, and the financial plan).',
  paper: 2,
  category: 'Business Ventures',
  lessons: [
    // ── Lesson 1: Importance of a Business Plan & PESTLE ────────────────────
    {
      id: 'bs-ch14-importance-pestle',
      chapterId: 'business-ch14',
      subjectId: 'business',
      title: 'The Importance of a Business Plan & PESTLE Analysis',
      minutes: 12,
      blocks: [
        { id: 'bs14-def-h1', type: 'heading', level: 2, text: 'Terms & Definitions' },
        {
          id: 'bs14-def-tip',
          type: 'callout',
          text: 'Exam Tip: Learn the term/definition table word-for-word, especially "business plan", "executive summary" and "marketing mix" — these are the most commonly tested definitions in this chapter.',
        },
        {
          id: 'bs14-def-table',
          type: 'definitions',
          rows: [
            { term: 'Business plan', meaning: "A document that outlines all the important facts, processes, and procedures of the business — a document setting out a business's future objectives and strategies for achieving them." },
            { term: 'Cover page', meaning: 'Indicates the name of the entrepreneur, name of the business, the logo, address, and contact details of the business.' },
            { term: 'Index page', meaning: 'The list of all sections of the business plan and the page numbers of each section.' },
            { term: 'Executive summary', meaning: 'The summary of the entire business plan — a short document or section of a document produced for business purposes that summarises the entire business plan.' },
            { term: 'Description of the business', meaning: 'The description of the product/service and the unique features of the business.' },
            { term: 'Vision', meaning: 'The long-term future goal of the business.' },
            { term: 'Mission statement', meaning: 'The activities the business will do in order to achieve its goal.' },
            { term: 'Legal requirements', meaning: 'Legal documentation such as licences, permits and tax regulations that must be complied with before the business can start operating — that needs to be complied with before the commencement of the business.' },
            { term: 'SWOT analysis', meaning: 'The analysis of the strengths, weaknesses, opportunities and threats of the business.' },
            { term: 'Marketing plan', meaning: "A strategy/plan of how the business is going to sell its product/service." },
            { term: 'Market research', meaning: "The action of gathering information about consumers' needs and preferences." },
            { term: 'Financial analysis', meaning: 'Refers to the assessment of the viability and the profitability of the business.' },
            { term: 'Environmental factors', meaning: 'Refers to external influences on the business that it has limited or no control over.' },
            { term: 'Marketing mix', meaning: 'A set of actions that the business uses to promote its brand.' },
            { term: 'Price', meaning: 'The amount of money required as payment for goods.' },
            { term: 'Product', meaning: 'An object that is manufactured for sale.' },
            { term: 'Promotion', meaning: 'A method used to advertise the product.' },
            { term: 'Place', meaning: 'Location of the business.' },
            { term: 'People', meaning: 'Refers to employees as well as the target market.' },
            { term: 'Physical environment', meaning: 'Is the environment around the business.' },
            { term: 'Process', meaning: 'The system used to deliver the product or service.' },
          ],
        },
        { id: 'bs14-importance-h1', type: 'heading', level: 2, text: '1. The Importance of a Business Plan' },
        {
          id: 'bs14-importance-list',
          type: 'list',
          text: [
            'A business plan helps entrepreneurs to set goals and objectives.',
            'It can be used to attract investors and prospective employees.',
            'Helps stakeholders to understand the role they play in the business, and encourages them to contribute effectively.',
            "Guides the entrepreneur on the viability of his/her business idea.",
            'It also helps the entrepreneur to identify problems that may arise, and helps management to take steps to avoid these problems.',
            'Improves business operations processes and practices.',
            'It evaluates the success of the business.',
            'It is essential when applying for financial assistance from investors or lenders.',
            'Compels an entrepreneur to arrange his/her thoughts in a logical order.',
            'It gives direction once the business is operating.',
            'Helps the entrepreneur to face threats head-on and deal with them.',
          ],
        },
        {
          id: 'bs14-pestle-h1',
          type: 'heading',
          level: 2,
          text: '2. Challenges of the Macro Environment Using PESTLE Analysis',
        },
        {
          id: 'bs14-pestle-list',
          type: 'list',
          text: [
            'Entrepreneurs should look at the factors that could have a negative impact on their businesses.',
            'Businesses do not have control over the elements/features of the macro-environment.',
            'Businesses can use PESTLE analysis to scan the macro environment.',
            'A PESTLE analysis enables a business to identify challenges that are posed by the following external factors: Physical, Economic, Social, Technological, Legal and Environmental factors.',
          ],
        },
        {
          id: 'bs14-pestle-diagram',
          type: 'paragraph',
          text: 'Diagram note: the source document includes a PESTLE diagram — typically shown as a wheel or list with the six letters P-E-S-T-L-E radiating outward, each labelled with its external factor (Physical, Economic, Social, Technological, Legal, Environmental) and short examples of challenges the macro-environment poses in that category.',
        },
        {
          id: 'bs14-pestle-tip',
          type: 'callout',
          text: 'Exam Tip: PESTLE = Physical, Economic, Social, Technological, Legal, Environmental. Note this chapter uses "Physical" as the P (not "Political" as in some other sources) — learn it exactly as given here for this exam.',
        },
        {
          id: 'bs14-l1-qa',
          type: 'questions',
          qa: [
            {
              q: 'Define the term "business plan."',
              marks: 2,
              a: "A business plan is a document that outlines all the important facts, processes, and procedures of the business — it sets out a business's future objectives and strategies for achieving them.",
            },
            {
              q: 'State any FIVE reasons why a business plan is important to an entrepreneur.',
              marks: 5,
              a: [
                'It helps entrepreneurs to set goals and objectives.',
                'It can be used to attract investors and prospective employees.',
                "It guides the entrepreneur on the viability of his/her business idea.",
                'It helps identify problems that may arise, so management can take steps to avoid them.',
                'It is essential when applying for financial assistance from investors or lenders.',
              ],
            },
            {
              q: 'What does the acronym PESTLE stand for, and why is it useful to an entrepreneur?',
              marks: 7,
              a: [
                'P = Physical, E = Economic, S = Social, T = Technological, L = Legal, E = Environmental.',
                'A PESTLE analysis enables a business to identify challenges posed by these external factors.',
                'Businesses have no control over the macro-environment, so PESTLE helps entrepreneurs scan it and prepare for its challenges.',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 2: Components of a Business Plan & Executive Summary ────────
    {
      id: 'bs-ch14-components-exec',
      chapterId: 'business-ch14',
      subjectId: 'business',
      title: 'Components of a Business Plan & the Executive Summary',
      minutes: 14,
      blocks: [
        { id: 'bs14-comp-h1', type: 'heading', level: 2, text: '3. Components of a Business Plan' },
        {
          id: 'bs14-comp-list',
          type: 'list',
          text: [
            'Cover page',
            'Contents page/Index',
            'Executive summary',
            'Description of the business/Overview',
            'SWOT analysis',
            'Legal requirements of business',
            'Marketing plan',
            'Operational plan',
            'Financial plan',
            'Management plan',
            'Competitor analysis',
          ],
        },
        {
          id: 'bs14-comp-explain-h',
          type: 'heading',
          level: 3,
          text: 'Explanation of the Components of a Business Plan',
        },
        {
          id: 'bs14-comp-table',
          type: 'definitions',
          rows: [
            {
              term: 'Cover page',
              meaning: 'It contains the following information: the name of the business; contact details of the owner(s) and address; address of the business; the logo of the business; a copyright disclaimer to protect the contents of the plan.',
            },
            {
              term: 'Contents page/Index',
              meaning: 'This page gives a title and page number of each subsection of the plan. Allows the reader to find the information in the document.',
            },
            {
              term: 'Executive summary',
              meaning: 'Detailed summary of the entire business plan. It is written after the business plan has been completed, but appears at the front to provide users with a brief overview before reading the details.',
            },
            {
              term: 'Description of the business/Overview',
              meaning: 'Usually a short description of the product/service that the business will offer. It also describes the long-term objectives/mission/vision of the business. It indicates whether the business is a sole trader or partnership, and indicates the form of ownership. It includes a description of the product/service the business offers, and includes the legal requirements of the business.',
            },
            {
              term: 'Legal requirements',
              meaning: 'Provides the legal requirements that the business needs to comply with before it can start operating. (Refer to types of legal requirements below.)',
            },
            {
              term: 'SWOT analysis',
              meaning: 'An entrepreneur needs to carry out a SWOT analysis when starting a business. It helps the entrepreneur build on what he/she does well, address what is lacking, minimise risks, and take the greatest possible advantage of chances for success. A SWOT analysis is a strategic plan used to help an organisation identify major strengths and weaknesses of the business. It also makes the business aware of opportunities and threats in its external environment. A SWOT analysis is an indication that research was conducted to support the establishment of a business.',
            },
            {
              term: 'Marketing plan',
              meaning: 'This is the most important component of the business plan. It gives details of the 7Ps of marketing. This plan also describes the target market, customers, and competition.',
            },
            {
              term: 'Operational plan',
              meaning: 'Includes where the business will be located. Describes the daily operation of the business. Includes a description of a product, how and where it will be manufactured. Provides details of the equipment and suppliers.',
            },
            {
              term: 'Financial plan',
              meaning: 'Records details of how much capital is required and how it will be raised. Contains projected statements of profit, loss and cash flow.',
            },
            {
              term: 'Management plan',
              meaning: 'Considers the short and long-term business strategies. Outlines who will oversee running the business, as well as the skills of the entrepreneur and others in the business. Discusses the hierarchy and roles of the employees.',
            },
            {
              term: 'Competitor analysis',
              meaning: "Description of competitors in the market and their products. Details of competitors' marketing strategy and its effect on a proposed business.",
            },
          ],
        },
        { id: 'bs14-exec-h1', type: 'heading', level: 2, text: '4. The Executive Summary' },
        { id: 'bs14-exec-purpose-h', type: 'heading', level: 3, text: 'Purpose of the Executive Summary' },
        {
          id: 'bs14-exec-purpose',
          type: 'list',
          text: [
            'It is included to satisfy those who do not have time to go through the entire plan in detail.',
            'Most lenders and investors read it first before the entire business plan.',
            'It gives readers an idea of what is contained in the business plan.',
          ],
        },
        {
          id: 'bs14-exec-aspects-h',
          type: 'heading',
          level: 3,
          text: 'Aspects That Must Be Included in the Executive Summary',
        },
        {
          id: 'bs14-exec-aspects',
          type: 'list',
          text: [
            'The form of business enterprise',
            'The main business activity',
            'Information about the owner of the business',
            'The way in which capital will be obtained',
          ],
        },
        {
          id: 'bs14-comp-tip',
          type: 'callout',
          text: "Exam Tip: Remember that the Executive Summary is written LAST (after the full plan is done) but placed FIRST (at the front of the document) — this order is a popular trick question.",
        },
        {
          id: 'bs14-l2-qa',
          type: 'questions',
          qa: [
            {
              q: 'Name any FIVE components of a business plan.',
              marks: 5,
              a: [
                'Cover page',
                'Executive summary',
                'Description of the business/overview',
                'SWOT analysis',
                'Marketing plan',
                'Financial plan (any 5 of the 11)',
              ],
            },
            {
              q: 'Explain the purpose of the executive summary.',
              marks: 3,
              a: [
                'It is included to satisfy those who do not have time to go through the entire plan in detail.',
                'Most lenders and investors read it first before the entire business plan.',
                'It gives readers an idea of what is contained in the business plan.',
              ],
            },
            {
              q: 'State any FOUR aspects that must be included in the executive summary.',
              marks: 4,
              a: [
                'The form of business enterprise',
                'The main business activity',
                'Information about the owner of the business',
                'How capital will be obtained',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 3: VMGO, Structure & Forms of Ownership, Legal Requirements ──
    {
      id: 'bs-ch14-vmgo-structure-legal',
      chapterId: 'business-ch14',
      subjectId: 'business',
      title: 'Vision, Mission & Objectives, Business Structure & Legal Requirements',
      minutes: 14,
      blocks: [
        {
          id: 'bs14-vmgo-h1',
          type: 'heading',
          level: 2,
          text: '5. The Vision, Mission Statement, Goals and Objectives',
        },
        { id: 'bs14-vision-h', type: 'heading', level: 3, text: '5.1.1 The Vision Statement' },
        {
          id: 'bs14-vision-list',
          type: 'list',
          text: [
            'A statement which describes how the business will achieve its purpose.',
            'The vision statement is the long-term goal of how entrepreneurs see their business in future and how they want it to grow.',
            'It addresses profit, growth, purpose and stability.',
          ],
        },
        { id: 'bs14-mission-h', type: 'heading', level: 3, text: '5.1.2 The Mission Statement' },
        {
          id: 'bs14-mission-list',
          type: 'list',
          text: [
            'A statement which describes the purpose of the business and explains why the business exists.',
            'The mission statement addresses how entrepreneurs hope to achieve their vision.',
            'It focuses on business operations, and it is also specific and measurable.',
            'The short-term objectives are more specific stepping-stones to reach short-term goals in order to achieve the long-term goals.',
          ],
        },
        { id: 'bs14-goals-h', type: 'heading', level: 3, text: '5.1.3 Goals and Objectives' },
        {
          id: 'bs14-goals-list',
          type: 'list',
          text: [
            'The long-term objectives are formulated to provide direction for the company to achieve the vision.',
            'It is also specific and measurable, just like the mission statement.',
          ],
        },
        {
          id: 'bs14-structure-h1',
          type: 'heading',
          level: 2,
          text: '6. The Relationship Between the Structure of the Business and Forms of Ownership',
        },
        {
          id: 'bs14-structure-intro',
          type: 'paragraph',
          text: 'The business structure should have a description of the following aspects:',
        },
        {
          id: 'bs14-structure-list',
          type: 'list',
          text: [
            'How many people the business intends to employ.',
            'Management and staff, e.g. their qualifications, experience, job description and remuneration.',
            'Administration and record keeping.',
            'Staff policies regarding working hours, fringe benefits, overtime, sick leave and medical aid.',
            'The structure of the business should include the type of ownership, such as sole trader/partnership/close corporation/private company/public company.',
          ],
        },
        {
          id: 'bs14-structure-determine-h',
          type: 'heading',
          level: 3,
          text: 'The Form of Ownership Will Determine the Following',
        },
        {
          id: 'bs14-structure-determine',
          type: 'list',
          text: [
            'The reason for the form of ownership',
            'Legal requirements of the business',
            'Products and services offered',
            'Size of the business',
            'Number of owners required',
            'How much control the owners want',
            'Legal protection',
          ],
        },
        {
          id: 'bs14-legal-h1',
          type: 'heading',
          level: 2,
          text: '7. Different Types of Legal Requirements of a Business',
        },
        {
          id: 'bs14-legal-intro',
          type: 'paragraph',
          text: 'A business needs to be registered before it can obtain finance or start doing transactions. A business needs to comply with the following types of legal requirements:',
        },
        {
          id: 'bs14-legal-list',
          type: 'list',
          text: [
            'Trading licences and permits to operate legally.',
            'Taxation regulations.',
            'International trading/exporting and importing requirements/exchange rates.',
            'Registration fees.',
            'Registration.',
            'The Basic Conditions of Employment Act (BCEA) (No. 75 of 1997).',
            'The Labour Relations Act (LRA) (No. 66 of 1995).',
            'The National Credit Act (NCA) (No. 34 of 2005).',
            'The Environmental Conservation Act (No. 73 of 1989).',
            'Patents and copyrights.',
          ],
        },
        {
          id: 'bs14-legal-tip',
          type: 'callout',
          text: 'Exam Tip: Learn each Act with its FULL NAME, ABBREVIATION and NUMBER (e.g. "The Basic Conditions of Employment Act (BCEA) (No. 75 of 1997)") — exams often ask you to match the abbreviation to the full name.',
        },
        {
          id: 'bs14-l3-qa',
          type: 'questions',
          qa: [
            {
              q: 'Distinguish between the vision statement and the mission statement of a business.',
              marks: 4,
              a: [
                'The vision statement describes how the business will achieve its purpose — it is the long-term goal of how entrepreneurs see their business in future.',
                'The mission statement describes the purpose of the business and explains why it exists, addressing how entrepreneurs hope to achieve their vision.',
              ],
            },
            {
              q: 'Explain how the form of ownership can determine aspects of the business structure. Name any THREE such aspects.',
              marks: 3,
              a: [
                'Legal requirements of the business',
                'Number of owners required',
                'How much control the owners want',
                '(Any 3 of: reason for form of ownership, products/services offered, size of business, legal protection)',
              ],
            },
            {
              q: 'Name any FOUR types of legal requirements that a business must comply with, including their abbreviations.',
              marks: 4,
              a: [
                'The Basic Conditions of Employment Act (BCEA)',
                'The Labour Relations Act (LRA)',
                'The National Credit Act (NCA)',
                'The Environmental Conservation Act / trading licences and permits / patents and copyrights (any 4)',
              ],
            },
          ],
        },
      ],
    },

    // ── Lesson 4: Marketing Plan, Market Research & the 7Ps ────────────────
    {
      id: 'bs-ch14-marketing-7ps',
      chapterId: 'business-ch14',
      subjectId: 'business',
      title: 'The Marketing Plan, Market Research & the Marketing Mix (7Ps)',
      minutes: 18,
      blocks: [
        {
          id: 'bs14-mkt-h1',
          type: 'heading',
          level: 2,
          text: '8. Importance of a Marketing Plan and Market Research',
        },
        { id: 'bs14-mkt-plan-h', type: 'heading', level: 3, text: '8.1 Importance of a Marketing Plan' },
        {
          id: 'bs14-mkt-plan-list',
          type: 'list',
          text: [
            'It is a description of the market analysis, including the target market.',
            'It includes the analysis of the target market, customer, and competition.',
            'Explains the marketing mix and provides the marketing strategy of the business.',
            'Guides businesses on how to advertise their products/services.',
            'Describes the proposed prices of goods and services.',
          ],
        },
        { id: 'bs14-mkt-research-h', type: 'heading', level: 3, text: 'Importance of Market Research' },
        {
          id: 'bs14-mkt-research-list',
          type: 'list',
          text: [
            "It is a process to understand more about customers' needs.",
            'A marketing plan helps businesses to promote products and services.',
            'The target market refers to the people who are likely to buy the product or service offered by the business.',
            'The business must conduct market research to know about the following factors of the target market: age group, gender, personality, income, and education.',
            'The methods of conducting market research include surveys, interviews, and questionnaires.',
            'The results of the market research are important, as they indicate whether the target market shows interest in the goods and services the proposed business aims to offer.',
          ],
        },
        {
          id: 'bs14-7p-h1',
          type: 'heading',
          level: 2,
          text: '9. The Meaning of the Marketing Mix With Specific Reference to the 7Ps',
        },
        {
          id: 'bs14-7p-intro',
          type: 'list',
          text: [
            'The marketing plan can be explained by using seven elements.',
            'There are four main elements and three additional elements.',
            'A marketing mix is a combination of Product, Price, Place, People, Promotion, Process, and Physical environment.',
            'The above-mentioned aspects are usually referred to as the 7Ps.',
            'The reason for extending the 4Ps to the 7Ps is the growth of the service industry.',
            'Once the target market has been identified, the business must work out the marketing mix that best satisfies the needs of the target market.',
          ],
        },
        {
          id: 'bs14-7p-diagram',
          type: 'paragraph',
          text: "Diagram note: the source document includes a marketing mix diagram — typically a wheel or circle with 'Marketing Mix' at the centre and the seven Ps (Product, Price, Place, Promotion, People, Process, Physical environment) arranged around it as the seven elements the business combines when designing its marketing strategy.",
        },
        { id: 'bs14-9-1-h', type: 'heading', level: 3, text: '9.1 Product/Service' },
        {
          id: 'bs14-9-1-list',
          type: 'list',
          text: [
            'It is a description of the product, appearance, and usage that is available to customers.',
            'It can be a picture, drawing or photograph of what the product looks like.',
            'The manufacturing process used to make the product.',
            "The appearance of the product/service must be different from competitors' products.",
            'The packaging of the product should project and preserve the product.',
          ],
        },
        { id: 'bs14-9-2-h', type: 'heading', level: 3, text: '9.2 Price' },
        {
          id: 'bs14-9-2-list',
          type: 'list',
          text: [
            'The price of a product refers to the amount of money that must be paid by the consumer to obtain the product.',
            'The proposed business must include its pricing policy in the business plan.',
            'The pricing policy describes the way in which the price is used to attract customers.',
            'The price needs to cover all costs and must appeal to the target market.',
            'It must be affordable for the consumers.',
            'Good access to the product/service will increase sales.',
            "Cash or credit facilities may affect the customer's attitude to the price.",
            'Customers may be aware of other sellers who are selling the same products for less.',
          ],
        },
        { id: 'bs14-9-3-h', type: 'heading', level: 3, text: '9.3 Place/Distribution' },
        {
          id: 'bs14-9-3-list',
          type: 'list',
          text: [
            'The location where goods and services are sold.',
            'Place where consumers can access the goods or service.',
            'The business can sell the product directly to customers itself, or can market the product through other businesses.',
          ],
        },
        {
          id: 'bs14-9-3-channels-h',
          type: 'heading',
          level: 3,
          text: 'Channels of Distribution a Business May Use',
        },
        {
          id: 'bs14-9-3-channels',
          type: 'definitions',
          rows: [
            { term: 'Direct selling', meaning: 'The manufacturer sells directly to consumers.' },
            { term: 'Door-to-door selling', meaning: 'Businesses employ salespeople to sell door to door, and they carry few stocks with them.' },
            { term: 'Mail order', meaning: 'Large businesses print catalogues that can be used by consumers to order items of their choice. Small businesses advertise in local papers, inviting consumers to buy direct from the business.' },
            { term: 'Telephone sales', meaning: 'The business employs people who phone members of the public and try to persuade them to buy their goods.' },
            { term: 'Internet/online shopping', meaning: 'Businesses use systems on the internet to allow customers to order their shopping online and have it delivered to the door.' },
          ],
        },
        { id: 'bs14-9-4-h', type: 'heading', level: 3, text: '9.4 Promotion' },
        {
          id: 'bs14-9-4-list',
          type: 'list',
          text: [
            'Refers to how the business is going to make its target market aware of its product or service.',
            'A promotion should communicate the benefits of the product to customers.',
            'The proposed business must include detail about its promotion policy.',
            'The promotion policy must describe how sales of products will be promoted.',
          ],
        },
        {
          id: 'bs14-9-4-methods-h',
          type: 'heading',
          level: 3,
          text: 'Methods of Advertisement',
        },
        {
          id: 'bs14-9-4-methods',
          type: 'list',
          text: [
            'Advertising through the radio, magazines, press, television, etc.',
            'Special offers',
            'Trial products, such as free samples for testing',
            'Free gifts',
            'Direct mailing',
            'Online marketing',
            'Social media',
            'Public relations',
            'Brand awareness',
          ],
        },
        { id: 'bs14-9-5-h', type: 'heading', level: 3, text: '9.5 People' },
        {
          id: 'bs14-9-5-list',
          type: 'list',
          text: [
            'Refers to employees, management, directors, and shareholders / all people involved in selling the products.',
            'The business plan must include detailed information about the people who will be involved in the proposed business and in making a business.',
            'They can affect the business with their knowledge, skills, and attitudes.',
          ],
        },
        { id: 'bs14-9-6-h', type: 'heading', level: 3, text: '9.6 Process' },
        {
          id: 'bs14-9-6-list',
          type: 'list',
          text: [
            'Refers to processes that are designed and implemented to ensure a pleasant shopping experience.',
            'Describes the way in which the marketing and sales processes are carried out.',
            'The process of giving a service and the behaviour of those delivering the service are important for customer approval and keeping customers happy.',
          ],
        },
        {
          id: 'bs14-9-6-examples-h',
          type: 'heading',
          level: 3,
          text: 'Examples of Systems and Processes That Ensure a Good Customer Experience',
        },
        {
          id: 'bs14-9-6-examples',
          type: 'list',
          text: [
            'Systems and processes to ensure that consumers do not wait long in queues/for goods to be delivered.',
            'Systems and processes to make sure telephonic messages are dealt with and delivered to the right person.',
            'Systems and processes to ensure that emailed messages are read.',
          ],
        },
        { id: 'bs14-9-7-h', type: 'heading', level: 3, text: '9.7 Physical Environment' },
        {
          id: 'bs14-9-7-list',
          type: 'list',
          text: [
            'Refers to the environment where goods and services are sold/service rendered.',
            'It includes the appearance of the building and the uniforms of employees.',
            'The physical environment must be appropriate and make the customer feel comfortable.',
            'Clean and functional facilities attract and retain customers.',
            'A well-decorated reception also helps to reassure customers that the business offers the best services and values its customers.',
          ],
        },
        {
          id: 'bs14-7p-tip',
          type: 'callout',
          text: 'Exam Tip: Learn the 7Ps in order — Product, Price, Place, Promotion, People, Process, Physical environment. The first 4Ps are the "main elements"; People, Process and Physical environment are the three "additional elements" added for the service industry.',
        },
        {
          id: 'bs14-l4-qa',
          type: 'questions',
          qa: [
            {
              q: 'Name the 7Ps of the marketing mix.',
              marks: 7,
              a: ['Product', 'Price', 'Place', 'Promotion', 'People', 'Process', 'Physical environment'],
            },
            {
              q: 'Explain why the 4Ps were extended to the 7Ps.',
              marks: 2,
              a: 'The 4Ps were extended to the 7Ps because of the growth of the service industry — People, Process and Physical environment were added as additional elements relevant to services.',
            },
            {
              context: 'A new coffee shop plans to use an attractive shopfront with clean tables, friendly uniformed staff, and a loyalty card promotion advertised on social media.',
              q: 'Identify the elements of the marketing mix illustrated in the scenario above.',
              marks: 6,
              a: [
                'Physical environment — the attractive shopfront and clean tables.',
                'People — the friendly uniformed staff.',
                'Promotion — the loyalty card promotion and social media advertising.',
              ],
            },
            {
              q: 'Discuss any THREE channels of distribution (Place) that a business may use.',
              marks: 6,
              a: [
                'Direct selling — the manufacturer sells directly to consumers.',
                'Door-to-door selling — salespeople sell door to door, carrying little stock.',
                'Internet/online shopping — customers order online and have goods delivered to their door.',
              ],
            },
            {
              q: 'ESSAY: Discuss the importance of a marketing plan and market research to a new business, and explain how the 7Ps of the marketing mix help a business satisfy its target market. (150–200 words)',
              marks: 10,
              a: "A marketing plan is the most important component of a business plan because it describes the target market, customers, and competition, and explains the marketing strategy the business will use. Market research is essential because it helps a business understand customers' needs by investigating factors such as age group, gender, personality, income, and education through surveys, interviews, and questionnaires. The results indicate whether the target market shows real interest in the proposed goods or services, reducing the risk of starting a business with no demand. Once the target market is identified, the business designs a marketing mix using the 7Ps: the Product must be different from competitors' offerings; Price must cover costs while remaining affordable; Place/distribution must make the product accessible; Promotion creates awareness through advertising and social media; People (staff) affect the business through their knowledge and attitudes; Process ensures a pleasant, efficient customer experience; and Physical environment (appearance of premises and staff) makes customers feel comfortable. Together, thorough market research and a well-designed 7Ps marketing mix give a new business the best chance of attracting and retaining its target market.",
            },
          ],
        },
      ],
    },

    // ── Lesson 5: Overcoming Competition & the Financial Plan ───────────────
    {
      id: 'bs-ch14-competition-financial',
      chapterId: 'business-ch14',
      subjectId: 'business',
      title: 'Overcoming Competition & the Financial Plan',
      minutes: 14,
      blocks: [
        {
          id: 'bs14-comp10-h1',
          type: 'heading',
          level: 2,
          text: '10. Strategies to Overcome Competition in the Market',
        },
        {
          id: 'bs14-comp10-intro',
          type: 'paragraph',
          text: 'The business should use the following strategies to overcome competition in the market:',
        },
        {
          id: 'bs14-comp10-list',
          type: 'list',
          text: [
            'Sell quality products and services.',
            'Offer after-sales services.',
            'Charge reasonable prices.',
            'Conduct intensive marketing campaigns.',
            'Make use of clever advertising slogans.',
            'Make your product unique.',
            'Provide attractive product displays.',
            'Businesses must ensure that they produce unique/differentiated goods or services for the target market.',
            "Businesses need to provide more personalised services by being responsive to their customers' needs/wants.",
            "Goods/services must be priced lower than competitors' goods/services in the market.",
            'Businesses must produce high-quality goods/services that customers will be interested in.',
            'Businesses must improve customer service and keep customers happy.',
            'Businesses must create a positive outlook by regularly renovating their premises and improving their systems.',
            'Businesses must undertake good marketing campaigns that will draw the attention of the target market.',
            'Create a positive image/publicity through regular engagement in community development projects.',
            'Businesses must offer low-cost extras, such as improved credit terms/loyalty schemes.',
            'Businesses must ensure that they have well-trained and dedicated employees who create a better working atmosphere.',
          ],
        },
        {
          id: 'bs14-fin-h1',
          type: 'heading',
          level: 2,
          text: '11. Financial Plan Including a Balance Sheet',
        },
        {
          id: 'bs14-fin-intro',
          type: 'list',
          text: [
            "It is a detailed description of the entrepreneur's financial contribution, the funding requirements, and projected cash flow statements for a three-year period.",
            'The purpose of financial analysis is to project/predict the profitability of the proposed business and to project how long it will take before the business starts to show a profit.',
          ],
        },
        { id: 'bs14-fin-elements-h', type: 'heading', level: 3, text: 'A Financial Plan Includes the Following Elements' },
        {
          id: 'bs14-fin-elements-table',
          type: 'definitions',
          rows: [
            {
              term: 'Budget',
              meaning: 'A budget is an estimation of revenue and expenses over a specified future period. Gives a monthly indication of the projected flow of cash in and out of the business. Helps the owner to control spending by comparing actual income and expenditure.',
            },
            {
              term: 'Cash flow statements over a three-year period',
              meaning: "Cash flows are the net amount of cash and cash equivalents being transferred into and out of a business's accounts. Helps the owner to identify operational difficulties the business might experience, and any need for more finance.",
            },
            {
              term: 'Income statement',
              meaning: 'A monthly account of sales and expenses. It shows actual profits and/or losses.',
            },
            {
              term: 'Break-even point',
              meaning: 'A point at which profits are equal to expenses / a business does not show profit nor loss. Shows how much the business sold to cover all expenses before making a profit.',
            },
            {
              term: 'Balance sheet',
              meaning: "Includes assets on one side and liabilities on the other. A list of all business assets, liabilities, and owners' equity at a specific point in time. Assets include land, buildings, equipment, vehicles, and money in the bank account. Liabilities are monies owed to other people or businesses, such as bank loans, buying on credit, and bank overdrafts. Owners' equity is the difference between the total liabilities and total assets.",
            },
          ],
        },
        {
          id: 'bs14-fin-tip',
          type: 'callout',
          text: 'Exam Tip: Know the difference between a Budget (a plan/estimate for the future), an Income Statement (a record of actual sales and expenses), and a Balance Sheet (a snapshot of assets, liabilities and equity at one point in time) — these three are often confused.',
        },
        {
          id: 'bs14-l5-qa',
          type: 'questions',
          qa: [
            {
              q: 'Discuss any FIVE strategies a business can use to overcome competition in the market.',
              marks: 10,
              a: [
                'Sell quality products and services, and offer after-sales services.',
                'Charge reasonable prices and conduct intensive marketing campaigns.',
                'Make the product unique and provide attractive product displays.',
                'Provide more personalised, responsive customer service.',
                'Offer low-cost extras such as improved credit terms or loyalty schemes.',
              ],
            },
            {
              q: 'Name the elements that must be included in a financial plan.',
              marks: 5,
              a: ['Budget', 'Cash flow statements over a three-year period', 'Income statement', 'Break-even point', 'Balance sheet'],
            },
            {
              q: 'Explain what is meant by a "break-even point."',
              marks: 2,
              a: 'The break-even point is the point at which profits are equal to expenses — the business neither makes a profit nor a loss. It shows how much the business needs to sell to cover all its expenses before making a profit.',
            },
            {
              q: "Define a balance sheet and name the THREE main elements it includes.",
              marks: 4,
              a: [
                "A balance sheet is a list of all business assets, liabilities, and owners' equity at a specific point in time.",
                'Assets, Liabilities, and Owners’ equity.',
              ],
            },
            {
              q: 'Distinguish between a budget and an income statement.',
              marks: 4,
              a: [
                'A budget is an estimation of revenue and expenses over a specified FUTURE period, used to control spending.',
                'An income statement is a monthly account of ACTUAL sales and expenses, showing actual profits and/or losses already made.',
              ],
            },
          ],
        },
      ],
    },
  ],
};
