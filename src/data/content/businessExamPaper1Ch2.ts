import type { Chapter } from '@/lib/types';

/**
 * Scope: Business Operations — Structure, PR, Management, Capital & Credit — scope-only chapter for the Business Studies Paper 1 exam topic.
 * Contains ONLY the content from the student's Paper 1 scope sheet that maps to
 * this source chapter. See src/data/content/businessExamPaper1.ts for the full
 * scope Overview checklist.
 */

const L7_STRUCTURE_PR_MGMT = {
  id: 'bs-p1x-l7-structure-pr-mgmt',
  chapterId: 'business-exam-p1-ch2',
  subjectId: 'business' as const,
  title: 'Organisational Structure & Levels, Public Relations & General Management',
  minutes: 20,
  blocks: [
    { id: 'bs-p1x-l7-h1', type: 'heading' as const, level: 2 as const, text: 'Organisational Structures' },
    {
      id: 'bs-p1x-l7-tip',
      type: 'callout' as const,
      text: ' Exam Tip: Expect questions naming the three types of organisational structure and their features, questions on identifying the level of management from a scenario, and questions on the management tasks (POLC + Risk management).',
    },
    {
      id: 'bs-p1x-l7-struct-meaning',
      type: 'list' as const,
      text: [
        'An organisational structure is a system that outlines how certain activities are directed to achieve the goals of an organisation.',
        'These activities can include rules, roles, and responsibilities.',
        'The organisational structure also determines how information flows between levels within the company.',
      ],
    },
    { id: 'bs-p1x-l7-h2', type: 'heading' as const, level: 3 as const, text: 'Factors that Influence the Organisation Structure' },
    { id: 'bs-p1x-l7-struct-factors', type: 'list' as const, text: ['Size of the organisation', 'Strategy', 'Technology', 'Resources'] },
    { id: 'bs-p1x-l7-h3', type: 'heading' as const, level: 3 as const, text: 'Functional Organisational Structure' },
    {
      id: 'bs-p1x-l7-struct-functional',
      type: 'list' as const,
      text: ['Employees get instructions from more than one manager.', 'The plans to be executed determine who will be giving instructions.', 'This structure confuses employees because they report to more than one manager.'],
    },
    { id: 'bs-p1x-l7-h4', type: 'heading' as const, level: 3 as const, text: 'Project Organisational Structure' },
    {
      id: 'bs-p1x-l7-struct-project',
      type: 'list' as const,
      text: ['Structured around project teams.', 'It is a temporary structure because employees are drawn from different departments.', 'Employees are then grouped to form a project team that will carry out a particular project.'],
    },
    { id: 'bs-p1x-l7-h5', type: 'heading' as const, level: 3 as const, text: 'Matrix Organisational Structure' },
    {
      id: 'bs-p1x-l7-struct-matrix',
      type: 'list' as const,
      text: ['Structured around projects but employees remain in their departments.', 'A project must be completed up to a certain point.', 'The project is then passed on to the next team that will carry out the next phase of the project.'],
    },
    { id: 'bs-p1x-l7-h6', type: 'heading' as const, level: 2 as const, text: 'Levels of Management' },
    {
      id: 'bs-p1x-l7-levels-meaning',
      type: 'list' as const,
      text: ['The level of management determines a chain of command, the amount of authority, and status enjoyed by any managerial position.'],
    },
    { id: 'bs-p1x-l7-h7', type: 'heading' as const, level: 3 as const, text: 'Top Level Management' },
    {
      id: 'bs-p1x-l7-top',
      type: 'list' as const,
      text: [
        'Oversees the activities of the other functions so that the business can achieve its objectives.',
        'Reports to a board of directors/advisory board.',
        'Takes long-term strategic decisions.',
        'Comprises of the CEO and directors.',
        'Develop long-term goals, strategic plans, and business policies.',
        'Determines the vision/mission/objectives/strategy of the business.',
      ],
    },
    { id: 'bs-p1x-l7-h8', type: 'heading' as const, level: 3 as const, text: 'Middle Level Management' },
    {
      id: 'bs-p1x-l7-middle',
      type: 'list' as const,
      text: [
        'Responsible for specific departments within the business.',
        'Takes medium-term tactical decisions.',
        'Responsible for achieving the goals and objectives set for the specific department.',
        'Concerned with implementing plans made by top level management.',
        'Responsible for working with managers in other departments and for acquiring resources needed in their departments.',
      ],
    },
    { id: 'bs-p1x-l7-h9', type: 'heading' as const, level: 3 as const, text: 'Lower-Level Management' },
    {
      id: 'bs-p1x-l7-lower',
      type: 'list' as const,
      text: [
        'Act as role models for employees because they provide supervision, performance feedback and so on.',
        'Focus on controlling and directing.',
        'Responsible for a high level of productivity, technical assistance, and motivating employees.',
        'Takes short-term routine/tactical decisions.',
        'Implement instructions given by middle management.',
        'They are also called first management level as it is the first management level to which subordinates can be promoted.',
      ],
    },
    {
      id: 'bs-p1x-l7-levels-table',
      type: 'definitions' as const,
      rows: [
        { term: 'Top level management — decisions & roles', meaning: 'Makes long-term strategic decisions (policy, with long-term outcomes). Examples: CEOs, directors, sole-trader owner, partners. Responsibilities: plan the future of the business; manage change in the business environment; plan the activities of the business; give direction to the vision, mission, goals and objectives.' },
        { term: 'Middle level management — decisions & roles', meaning: 'Makes medium-term tactical decisions (organise the activities needed to carry out a plan). Examples: departmental managers, e.g. marketing manager, financial manager. Responsibilities: controls the people and processes in the business; is the link between top and lower-level management; passes information from top management to lower management; focuses on how the business will carry out strategic decisions; acquires resources needed in their department.' },
        { term: 'Lower-level management — decisions & roles', meaning: 'Makes short-term operational decisions. Examples: foreman, supervisor, team leaders. Responsibilities: makes routine activities; plans the daily activities; sets individual objectives for workers under them; offers feedback and suggestions to middle management; implements the objectives of middle management; motivates and guides workers.' },
      ],
    },
    { id: 'bs-p1x-l7-h10', type: 'heading' as const, level: 2 as const, text: 'The General Management Function' },
    {
      id: 'bs-p1x-l7-genmgmt-intro',
      type: 'list' as const,
      text: [
        'Sets the overall direction or strategy for the business.',
        'This function leads, organises and controls all the other functions.',
        'Management has three different levels, each with its own roles and responsibilities.',
        'Ensures that there is co-ordination among the seven different functions of the business.',
      ],
    },
    { id: 'bs-p1x-l7-h11', type: 'heading' as const, level: 3 as const, text: 'Management Tasks' },
    {
      id: 'bs-p1x-l7-tasks-meaning',
      type: 'paragraph' as const,
      text: 'The management tasks are tools used by an organisation to help complete projects more efficiently by organising and prioritising related tasks. There are five basic management tasks.',
    },
    { id: 'bs-p1x-l7-tasks-list', type: 'list' as const, text: ['Planning', 'Organising', 'Leadership', 'Controlling', 'Risk management'] },
    { id: 'bs-p1x-l7-h12', type: 'heading' as const, level: 3 as const, text: 'Planning' },
    {
      id: 'bs-p1x-l7-planning',
      type: 'list' as const,
      text: [
        'The process of setting goals and developing strategies.',
        'Top management formulates strategic plans; middle management formulates tactical plans; lower management formulates operational plans.',
        'Analyzing the information and set long-term goals, considering different plans, choosing the best plan.',
        'Deciding on the backup plan to use if the chosen plan becomes impossible.',
        'Implementing the chosen plan, and following up to make sure the plan is successful.',
      ],
    },
    { id: 'bs-p1x-l7-h13', type: 'heading' as const, level: 3 as const, text: 'Organising' },
    {
      id: 'bs-p1x-l7-organising',
      type: 'list' as const,
      text: [
        'It is the mechanism used to execute the plan.',
        'Involves breaking a plan into action; the way in which people are grouped together.',
        'May also include training to ensure that the jobs are carried out successfully.',
        'The activities are assigned/delegated to specific individuals.',
      ],
    },
    { id: 'bs-p1x-l7-h14', type: 'heading' as const, level: 3 as const, text: 'Leading/Directing/Activating' },
    {
      id: 'bs-p1x-l7-leading',
      type: 'list' as const,
      text: [
        'Letting staff know what needs to be done, and by when it needs to be done.',
        'The employees are motivated to contribute to the success of the business.',
        'The process of leading is to guide, motivate and inspire others to achieve goals.',
        'Establishing a productive working climate and guiding employees in the right direction.',
      ],
    },
    { id: 'bs-p1x-l7-h15', type: 'heading' as const, level: 3 as const, text: 'Controlling' },
    {
      id: 'bs-p1x-l7-controlling',
      type: 'list' as const,
      text: [
        'Ensures that the business achieves its goals.',
        'Establish performance standards and ensure that those standards are met.',
        'Involves comparing actual results with goals set by management.',
        'Corrective measures must be taken if there is a difference between actual results and the goals the business set out to achieve.',
      ],
    },
    { id: 'bs-p1x-l7-h16', type: 'heading' as const, level: 3 as const, text: 'Risk Management' },
    {
      id: 'bs-p1x-l7-risk',
      type: 'list' as const,
      text: [
        'Identify possible risk by finding risk-bearing activities within the organisation.',
        'Assists businesses in analysing each possible risk to assess how likely it is that the risk will happen.',
        'Evaluates the potential impact of risk in terms of financial liability.',
        'Handle the risk by determining what actions to take should the event happen, using a contingency plan.',
      ],
    },
    { id: 'bs-p1x-l7-h17', type: 'heading' as const, level: 2 as const, text: 'The Public Relations Function' },
    {
      id: 'bs-p1x-l7-pr-meaning',
      type: 'list' as const,
      text: ['The public relations function is responsible for keeping all stakeholders of the business happy.', 'It ensures that there is good communication between the business and all its stakeholders.'],
    },
    { id: 'bs-p1x-l7-h18', type: 'heading' as const, level: 3 as const, text: 'The Importance of Public Relations' },
    {
      id: 'bs-p1x-l7-pr-importance',
      type: 'list' as const,
      text: [
        'Businesses get publicity for promotional events and information through media.',
        'News conferences may be called to release information which will ensure the survival of the business.',
        'Employees may volunteer to spend time with people in need at orphanages/hospitals/schools etc.',
        'Businesses can sponsor community events, and produce annual reports that review business activities and achievements.',
        'Networking — a popular form of public relations — is direct contact with employees or telephonic communication.',
        'Use corporate social responsibility as a public relations activity involving communities to get positive exposure.',
      ],
    },
    { id: 'bs-p1x-l7-h19', type: 'heading' as const, level: 3 as const, text: 'Differences Between External and Internal Public Relations' },
    {
      id: 'bs-p1x-l7-pr-extint',
      type: 'definitions' as const,
      rows: [
        { term: 'External public relations', meaning: 'Creates a good company image and awareness to those outside of the company.' },
        { term: 'Internal public relations', meaning: 'Creates a good company image and awareness to employees in the company.' },
      ],
    },
    { id: 'bs-p1x-l7-h20', type: 'heading' as const, level: 3 as const, text: 'Methods of Public Relations' },
    {
      id: 'bs-p1x-l7-pr-methods',
      type: 'definitions' as const,
      rows: [
        { term: 'Media', meaning: 'Businesses get publicity for promotional events and information through media. Includes advertising and the distribution of information about the business.' },
        { term: 'Direct contact', meaning: 'Information about the business is passed on to the members of the public who have dealt with the business previously. Direct contact with employees or telephonic communication is a popular form of public relations.' },
        { term: 'Brochures', meaning: 'Excellent way of distributing information in a cost-effective way.' },
        { term: 'Exhibitions', meaning: 'The business is introduced to the public and meets existing customers in shopping centres.' },
        { term: 'Social responsibility', meaning: 'The business uplifts the community as the community supports the business by buying their product.' },
        { term: 'Transit advertising', meaning: 'Advertising on vehicles such as taxis, busses, vans etc.' },
        { term: 'Use of the telephone', meaning: 'A potential customer phones the business to enquire about something; the person answering the phone is perceived as the business.' },
      ],
    },
    {
      id: 'bs-p1x-l7-qa',
      type: 'questions' as const,
      qa: [
        { q: 'Name and briefly explain THREE types of organisational structures.', marks: 6, a: ['Functional structure — employees get instructions from more than one manager, which can confuse them.', 'Project structure — a temporary structure built around project teams drawn from different departments.', 'Matrix structure — structured around projects, but employees remain in their own departments while the project passes between teams.'] },
        { q: 'Name the three levels of management.', marks: 3, a: ['Top level management', 'Middle level management', 'Lower-level management'] },
        { q: 'Identify the level of management being described: "This level comprises the CEO and directors, and takes long-term strategic decisions reported to a board of directors."', marks: 2, a: 'Top level management — it comprises the CEO and directors and takes long-term strategic decisions, reporting to a board of directors.' },
        { q: 'Name the FIVE basic management tasks.', marks: 5, a: ['Planning', 'Organising', 'Leadership (leading/directing/activating)', 'Controlling', 'Risk management'] },
        { q: 'Explain what is meant by the management task of "controlling."', marks: 4, a: ['Controlling ensures that the business achieves its goals by establishing performance standards and ensuring those standards are met.', 'It involves comparing actual results with the goals set by management.', 'Corrective measures must be taken if there is a difference between actual results and the goals the business set out to achieve.'] },
        { q: 'Distinguish between external and internal public relations.', marks: 4, a: ['External public relations creates a good company image and awareness to those outside of the company.', 'Internal public relations creates a good company image and awareness to employees within the company.'] },
        { q: 'Name any THREE methods of public relations.', marks: 3, a: ['Media', 'Brochures', 'Exhibitions (any three of: media, direct contact, brochures, exhibitions, social responsibility, transit advertising, use of the telephone)'] },
      ],
    },
  ],
};

const L8_STOCK_CAPITAL = {
  id: 'bs-p1x-l8-stock-capital',
  chapterId: 'business-exam-p1-ch2',
  subjectId: 'business' as const,
  title: 'Stock Control & Fixed/Working Capital',
  minutes: 14,
  blocks: [
    { id: 'bs-p1x-l8-h1', type: 'heading' as const, level: 2 as const, text: 'The Importance of Stock Control' },
    {
      id: 'bs-p1x-l8-tip',
      type: 'callout' as const,
      text: ' Exam Tip: Learn fixed vs working capital and own vs borrowed capital as paired-column facts — these come up as table-completion or short-answer questions almost every year.',
    },
    {
      id: 'bs-p1x-l8-stock',
      type: 'list' as const,
      text: [
        'Enables businesses to determine the amount/value of stock.',
        'Businesses can check the cost and selling price of products.',
        'Ensures that there is enough stock to meet the normal demand of customers.',
        'Keeps the correct levels of stock on hand.',
        'Records the cost prices and selling prices of stock.',
        'Identifies theft in the business when the physical stock count is compared with the electronic stock control system.',
      ],
    },
    { id: 'bs-p1x-l8-h2', type: 'heading' as const, level: 2 as const, text: 'The Financial Function' },
    {
      id: 'bs-p1x-l8-fin-meaning',
      type: 'list' as const,
      text: [
        'Financial function is responsible for planning and managing all the funds and assets of the business.',
        'Businesses need a regular stream of income to pay their expenses.',
        'The financial function involves the acquiring and utilization of funds necessary for efficient operations.',
      ],
    },
    { id: 'bs-p1x-l8-h3', type: 'heading' as const, level: 3 as const, text: 'The Purpose of the Financial Function' },
    {
      id: 'bs-p1x-l8-fin-purpose',
      type: 'list' as const,
      text: [
        'The financial function determines how much capital the business needs.',
        'Establishes the sources for acquiring the capital.',
        'Decides how to invest/allocate the capital funds in the business.',
        'Ensures that the business can generate enough income to cover the cost of raising capital.',
        'Prepare financial statements to present to the bank/investors to convince them that the business is financially healthy.',
      ],
    },
    { id: 'bs-p1x-l8-h4', type: 'heading' as const, level: 3 as const, text: 'Budgeting' },
    {
      id: 'bs-p1x-l8-budget-intro',
      type: 'paragraph' as const,
      text: 'It is a planning tool to estimate the money that will be received (income) and how it will be used (expenditure). Once the budget is drawn, it should be compared to the actual income and expenditure.',
    },
    {
      id: 'bs-p1x-l8-budget-types',
      type: 'definitions' as const,
      rows: [
        { term: 'Capital budget', meaning: 'Determines whether an organisation\'s long-term investment plans are worth pursuing. Estimates the fixed capital. Plans the purchasing, upgrading, and changing of fixed assets such as buildings, machinery, equipment, and so on.' },
        { term: 'Cash budget', meaning: 'Determines whether income will be sufficient to cover expenses. Estimates the working capital. Assesses whether the business will be able to buy all the needs for its operation.' },
      ],
    },
    { id: 'bs-p1x-l8-h5', type: 'heading' as const, level: 3 as const, text: 'Types of Capital' },
    {
      id: 'bs-p1x-l8-capital-list',
      type: 'definitions' as const,
      rows: [
        { term: 'Fixed capital', meaning: 'Capital that people invest in fixed assets, for example, land and buildings. Finances long-term capital needs of the business. Examples: capital market, selling shares, mortgage bonds etc.' },
        { term: 'Working capital/operating capital', meaning: 'Money that pays for day-to-day activity, e.g. trading stock, raw materials, etc. Finances the short-term capital of the business. Examples: money market, credit allowed by suppliers, short-term loans etc.' },
        { term: 'Own capital', meaning: 'Provided by the owners of the business. It could come from their savings, the sale of their assets, or investors. Examples: personal savings and venture capital.' },
        { term: 'Borrowed capital', meaning: 'Money borrowed from financial institutions like banks or a person. Should be paid back with interest, e.g. bank loan, bank overdraft.' },
      ],
    },
    { id: 'bs-p1x-l8-h6', type: 'heading' as const, level: 3 as const, text: 'Differences Between Fixed and Working Capital' },
    {
      id: 'bs-p1x-l8-fixedworking-table',
      type: 'definitions' as const,
      rows: [
        { term: 'Fixed capital', meaning: 'Money pays fixed assets, e.g. land and buildings etc. Finances long-term capital needs of the business. Examples: capital market, selling shares, mortgage bonds etc.' },
        { term: 'Working capital', meaning: 'Money pays for day-to-day activity, e.g. trading stock, raw materials, etc. Finances the short-term capital of the business. Examples: money market, credit allowed by suppliers, short-term loans etc.' },
      ],
    },
    { id: 'bs-p1x-l8-h7', type: 'heading' as const, level: 3 as const, text: 'Differences Between Owned and Borrowed Capital' },
    {
      id: 'bs-p1x-l8-owneborrowed-table',
      type: 'definitions' as const,
      rows: [
        { term: 'Owned capital', meaning: 'Owner provides capital. Permanent capital as the company is not under obligation to repay the amount. It is not a liability for a business. Return on capital is based on profits.' },
        { term: 'Borrowed capital', meaning: 'Obtained from financial institutions. Temporary capital as it is to be repaid after a fixed period. It is a liability for a company. Return on capital is paid in the form of interest.' },
      ],
    },
    {
      id: 'bs-p1x-l8-qa',
      type: 'questions' as const,
      qa: [
        { q: 'Explain the importance of stock control.', marks: 4, a: ['Enables businesses to determine the amount/value of stock.', 'Ensures that there is enough stock to meet the normal demand of customers.', 'Records the cost prices and selling prices of stock.', 'Identifies theft by comparing the physical stock count with the electronic stock control system.'] },
        { q: 'Explain the purpose of the financial function.', marks: 5, a: ['Determines how much capital the business needs.', 'Establishes the sources for acquiring the capital.', 'Decides how to invest/allocate the capital funds in the business.', 'Ensures that the business can generate enough income to cover the cost of raising capital.', 'Prepares financial statements to present to the bank/investors.'] },
        { q: 'Distinguish between fixed capital and working capital.', marks: 4, a: ['Fixed capital pays for fixed assets such as land and buildings and finances the long-term capital needs of the business, e.g. through the capital market or mortgage bonds.', 'Working capital pays for day-to-day activity such as trading stock and raw materials, financing the short-term capital needs of the business, e.g. through the money market or short-term loans.'] },
        { q: 'Explain the difference between own capital and borrowed capital.', marks: 4, a: ['Own capital is provided by the owners of the business (e.g. from savings or sale of assets) and is permanent, with no obligation to repay it; return on capital comes from profits.', 'Borrowed capital is obtained from financial institutions, is temporary (must be repaid after a fixed period), is a liability, and the return on it is paid as interest.'] },
        { q: 'Distinguish between a capital budget and a cash budget.', marks: 4, a: ['A capital budget determines whether an organisation\'s long-term investment plans are worth pursuing and estimates the fixed capital needed for assets such as buildings and machinery.', 'A cash budget determines whether income will be sufficient to cover expenses and estimates the working capital needed for day-to-day operations.'] },
      ],
    },
  ],
};

const L9_NCA_CPA_CREDIT = {
  id: 'bs-p1x-l9-nca-cpa-credit',
  chapterId: 'business-exam-p1-ch2',
  subjectId: 'business' as const,
  title: 'NCA, CPA, Credit Purchasing & Credit Providers',
  minutes: 22,
  blocks: [
    { id: 'bs-p1x-l9-h1', type: 'heading' as const, level: 2 as const, text: 'The Purchasing Function & Purchasing Procedure' },
    {
      id: 'bs-p1x-l9-tip',
      type: 'callout' as const,
      text: ' Exam Tip: Learn the purchasing procedure steps IN ORDER — this is a favourite sequencing question. Also learn the cash vs credit payment differences and the advantages/disadvantages of credit purchasing, plus the NCA/CPA impact essay structure (positives/negatives).',
    },
    {
      id: 'bs-p1x-l9-purch-meaning',
      type: 'list' as const,
      text: [
        'The purchasing function plays an important role in buying quality raw materials and services for the business.',
        'It should continuously look for suitable, new and better suppliers.',
        'It should place orders with suppliers and follow up on them to ensure that the ordered products are delivered on time.',
        'It ensures that ordered goods are delivered at the agreed price, right quantities and right quality.',
      ],
    },
    { id: 'bs-p1x-l9-h2', type: 'heading' as const, level: 3 as const, text: 'Purchasing Procedure (in order)' },
    {
      id: 'bs-p1x-l9-purch-proc',
      type: 'definitions' as const,
      rows: [
        { term: '1. Determine the need for the product/Requisition', meaning: 'Liaise with the financial department to establish the budget for the purchasing of goods and services. Determine the product/material/resource needs of the business.' },
        { term: '2. Determine the price of the product', meaning: 'Find the best price by obtaining quotes/tenders or making enquiries.' },
        { term: '3. Select/Choose a suitable supplier', meaning: 'Choose reliable suppliers; evaluate based on quality of raw material/prices/delivery time; investigate reputation and reliability.' },
        { term: '4. Place an order', meaning: 'Place an order in writing so that goods delivered can be compared with the order; confirm prices to avoid unexpected surprises when payments are made.' },
        { term: '5. Collect or receive the order', meaning: 'Ensure the right orders are received and recorded; check quality and quantity against the order; keep a copy of the delivery note.' },
        { term: '6. Pay the supplier', meaning: 'Purchasing instructs the financial department to pay the supplier after delivery; the supplier sends the invoice for final payment after satisfactory delivery.' },
        { term: '7. Distribute stock', meaning: 'Ensure proper distribution of stock/raw materials to all relevant departments, in line with pre-requisite orders from each department to avoid stock loss.' },
        { term: '8. Complete the order', meaning: 'Ensure that all the correct documentation is in place and filed for future reference.' },
      ],
    },
    { id: 'bs-p1x-l9-h3', type: 'heading' as const, level: 3 as const, text: 'Cash and Credit Payments' },
    {
      id: 'bs-p1x-l9-cashcredit-table',
      type: 'definitions' as const,
      rows: [
        { term: 'Cash payment', meaning: 'Refers to all payments made by cash/cheque for business purchases. Enables businesses to budget for stock purchases and avoid unnecessary delays. Cash payers can qualify for cash discounts.' },
        { term: 'Credit payment', meaning: 'Refers to all payments made by means of credit cards/on a future date for business purchases. Allows businesses to buy stock and pay on a future date. The credit payer can pay more for goods due to interest added on credit purchases.' },
      ],
    },
    { id: 'bs-p1x-l9-h4', type: 'heading' as const, level: 2 as const, text: 'Credit Purchases: Advantages & Disadvantages' },
    { id: 'bs-p1x-l9-h5', type: 'heading' as const, level: 3 as const, text: 'Advantages of Credit Purchasing' },
    {
      id: 'bs-p1x-l9-creditadv',
      type: 'list' as const,
      text: [
        'There is no discrimination based on age/race/religion on granting credit.',
        'If interest rates decrease, consumers will have more cash to pay off debts.',
        'Consumers will be having disposable income to purchase products if interest rates are low.',
        'Low income consumers can buy products on an affordable re-payment as per credit agreement.',
        'Consumers can access more than one credit from different creditors if the creditor made a personal assessment and is satisfied with the credit evaluation.',
        'Credit goods bought by the consumer have extended warranty per the credit agreement.',
        'If any of the goods/products is damaged, it can be easily repaired or replaced.',
      ],
    },
    { id: 'bs-p1x-l9-h6', type: 'heading' as const, level: 3 as const, text: 'Disadvantages of Credit Purchasing' },
    {
      id: 'bs-p1x-l9-creditdisadv',
      type: 'list' as const,
      text: [
        'There is always the risk of unsettled debts.',
        'Accounts should be sent out to debtors.',
        'There will be less money to invest for consumers.',
        'The credit provider can refuse credit based on credit risk evaluation.',
        'A consumer\'s income and expenses can be declared reckless, and credit can be suspended if a credit agreement is not adhered to.',
        'Consumers will have less money to spend so they would not buy as much.',
        'The consumer pays more than the original price due to high interest rates on credit purchases.',
      ],
    },
    { id: 'bs-p1x-l9-h7', type: 'heading' as const, level: 2 as const, text: 'Credit Providers & Responsibilities' },
    {
      id: 'bs-p1x-l9-resp',
      type: 'list' as const,
      text: [
        'Credit providers should conduct a credit assessment on the consumer\'s affordability.',
        'Check the most recent pay slip or bank statement to ensure the consumer has an income.',
        'Check the consumer\'s monthly debt-repayment obligations in terms of credit agreements.',
        'Consider other expenses of the consumer.',
        'Consider the consumer\'s debt-repayment history.',
      ],
    },
    { id: 'bs-p1x-l9-h8', type: 'heading' as const, level: 2 as const, text: 'The National Credit Act (NCA)' },
    { id: 'bs-p1x-l9-h9', type: 'heading' as const, level: 3 as const, text: 'Definition & Purpose of the NCA' },
    {
      id: 'bs-p1x-l9-nca-def',
      type: 'list' as const,
      text: [
        'The NCA was introduced to provide both credit providers and credit applicants with clear guidelines regarding their rights and responsibilities.',
        'This Act applies to all businesses that sell on credit.',
        'Promotes the development of a credit market that is accessible to all South Africans.',
        'Encourages responsible buying; avoidance of over-indebtedness.',
        'Addresses and corrects imbalances in negotiating power between consumers and credit providers.',
        'Discourages reckless credit granting by credit providers.',
        'Educates consumers on making the right choice when applying for credit.',
      ],
    },
    { id: 'bs-p1x-l9-h10', type: 'heading' as const, level: 3 as const, text: 'Consumer Rights Outlined in the NCA' },
    {
      id: 'bs-p1x-l9-nca-rights',
      type: 'list' as const,
      text: [
        'Apply for credit.',
        'Receive information in one\'s official language.',
        'Be protected from unfair discrimination in granting credit.',
        'Be given reasons why an application for credit is refused.',
        'Be informed about the interest rate and any other costs of the proposed credit transaction.',
        'Receive a copy of a credit contract and a replacement copy when the consumer asks for one.',
        'Apply for debt counselling if a customer has too much debt.',
      ],
    },
    { id: 'bs-p1x-l9-h11', type: 'heading' as const, level: 3 as const, text: 'The Impact of the NCA on Businesses' },
    {
      id: 'bs-p1x-l9-nca-impact',
      type: 'definitions' as const,
      rows: [
        { term: 'Positives/Advantages', meaning: 'Lower bad debts resulting in better cash flow. Protects business against non-paying consumers. Increases cash sales as credit can only be granted to qualifying customers. Prevents reckless lending by financial institutions. Ensures that the credit process is transparent.' },
        { term: 'Negatives/Disadvantages', meaning: 'Businesses are forced to budget to keep more cash on hand for stock purchases. Businesses can no longer carry out credit marketing. Businesses can only buy limited stock as credit is not available, resulting in loss of customers. The Act complicates the purchasing process due to too much administration work. It may take longer to purchase goods, influencing overall efficiency.' },
      ],
    },
    { id: 'bs-p1x-l9-h12', type: 'heading' as const, level: 3 as const, text: 'Remedies of the NCA' },
    {
      id: 'bs-p1x-l9-remedies',
      type: 'definitions' as const,
      rows: [
        { term: 'The Consumer Tribunal', meaning: 'Responsible for reviewing decisions made by the National Credit Regulator (NCR) and the National Consumer Commission (NCC).' },
        { term: 'National Consumer Commission', meaning: 'Responsible for promoting compliance with the NCA and CPA through advocacy and enforcement. Protects the economic welfare of consumers.' },
        { term: 'Ombudsman', meaning: 'An independent person with authority and responsibility to receive/investigate/formally address complaints from consumers.' },
      ],
    },
    { id: 'bs-p1x-l9-h13', type: 'heading' as const, level: 2 as const, text: 'The Consumer Protection Act (CPA)' },
    { id: 'bs-p1x-l9-h14', type: 'heading' as const, level: 3 as const, text: 'Definition & Purpose' },
    {
      id: 'bs-p1x-l9-cpa-def',
      type: 'list' as const,
      text: [
        'The Consumer Protection Act was introduced to prevent consumers from exploitation by businesses.',
        'This Act ensures the full participation of previously disadvantaged individuals in the economy.',
        'It applies to all businesses which sell goods and services to consumers.',
        'Promotes responsible consumer behaviour and consumer safety by protecting them from hazardous products/services.',
        'Promotes fair/accessible and sustainable places for people to sell their products.',
        'Establishes national standards to protect consumers, and a National Consumer Commission (NCC).',
        'Ensures that consumers have access to information they need to make informed choices.',
        'Empowers consumers to take legal action if their rights are not upheld.',
      ],
    },
    { id: 'bs-p1x-l9-h15', type: 'heading' as const, level: 3 as const, text: 'The Impact of the CPA on Businesses' },
    {
      id: 'bs-p1x-l9-cpa-impact',
      type: 'definitions' as const,
      rows: [
        { term: 'Positives/Advantages', meaning: 'Businesses may be safeguarded from dishonest competitors. Businesses may build a good image if they ensure that they do not violate consumer rights. Prevents larger businesses from undermining smaller ones. May gain consumer loyalty if they comply with the CPA. Faulty items may be replaced/repaired/refunded if the fault occurs within six months after purchase.' },
        { term: 'Negatives/Disadvantages', meaning: 'Confidential business information may become available to competitors. Penalties for non-compliance may be very high. Staff need to be trained/legal experts need to be consulted, which can increase costs. Consumers can take advantage of businesses and return goods when it is not necessary to do so. Administration costs increase as legal contracts need to be worded in plain language.' },
      ],
    },
    {
      id: 'bs-p1x-l9-qa',
      type: 'questions' as const,
      qa: [
        { q: 'Outline the purchasing procedure a business should follow, IN ORDER.', marks: 8, a: ['Determine the need for the product/requisition.', 'Determine the price of the product.', 'Select/choose a suitable supplier.', 'Place an order.', 'Collect or receive the order.', 'Pay the supplier.', 'Distribute stock.', 'Complete the order.'] },
        { q: 'Distinguish between cash payment and credit payment.', marks: 4, a: ['Cash payment refers to payments made by cash/cheque for business purchases, allowing businesses to budget and qualify for cash discounts.', 'Credit payment refers to payments made by credit cards or on a future date, allowing businesses to buy stock and pay later, but the credit payer can pay more due to interest.'] },
        { q: 'Discuss any THREE advantages of credit purchasing for a consumer.', marks: 6, a: ['There is no discrimination based on age/race/religion in granting credit.', 'Low income consumers can buy products on an affordable repayment plan.', 'Credit goods bought have extended warranty per the credit agreement, and damaged goods can easily be repaired or replaced.'] },
        { q: 'Discuss any THREE disadvantages of credit purchasing for a consumer.', marks: 6, a: ['There is always the risk of unsettled debts.', 'The credit provider can refuse credit based on credit risk evaluation.', 'The consumer pays more than the original price due to high interest rates on credit purchases.'] },
        { q: 'Outline the purpose of the National Credit Act.', marks: 4, a: ['Promotes the development of a credit market that is accessible to all South Africans.', 'Encourages responsible buying and discourages reckless credit granting.', 'Addresses and corrects imbalances in negotiating power between consumers and credit providers.', 'Educates consumers on making the right choice when applying for credit.'] },
        { q: 'Name any THREE consumer rights outlined in the NCA.', marks: 3, a: ['The right to apply for credit.', 'The right to be protected from unfair discrimination in granting credit.', 'The right to be given reasons why an application for credit is refused (any three).'] },
        { q: 'Discuss the impact (positives and negatives) of the National Credit Act on businesses.', marks: 8, a: ['Positives: lower bad debts and better cash flow; protects businesses against non-paying consumers; increases cash sales as credit is only granted to qualifying customers; prevents reckless lending; ensures transparency in the credit process.', 'Negatives: businesses must budget to keep more cash on hand; can no longer carry out credit marketing; may buy limited stock due to credit restrictions, losing customers; the Act complicates the purchasing process with extra administration; it may take longer to purchase goods, affecting efficiency.'] },
        { q: 'Explain the purpose of the Consumer Protection Act.', marks: 5, a: ['Promotes responsible consumer behaviour and consumer safety.', 'Promotes fair, accessible and sustainable places for people to sell products.', 'Establishes national standards to protect consumers and a National Consumer Commission.', 'Ensures consumers have access to information needed to make informed choices.', 'Empowers consumers to take legal action if their rights are not upheld.'] },
        { q: 'Name the remedies available under the NCA, and briefly explain ONE.', marks: 4, a: ['The remedies are the Consumer Tribunal, the National Consumer Commission, the Consumer Court, and an appropriate Ombudsman.', 'The Ombudsman, for example, is an independent person with the authority and responsibility to receive, investigate and formally address complaints from consumers.'] },
      ],
    },
  ],
};

export const BUSINESS_EXAM_P1_CH2: Chapter = {
  id: 'business-exam-p1-ch2',
  subjectId: 'business',
  title: 'Scope: Business Operations — Structure, PR, Management, Capital & Credit',
  summary: 'Only the content on your Paper 1 exam scope — nothing outside it.',
  paper: 1,
  hidden: true,
  lessons: [L7_STRUCTURE_PR_MGMT, L8_STOCK_CAPITAL, L9_NCA_CPA_CREDIT],
};
