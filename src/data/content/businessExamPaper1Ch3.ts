import type { Chapter } from '@/lib/types';

/**
 * Scope: Quality (Essay Topic) — scope-only chapter for the Business Studies Paper 1 exam topic.
 * Contains ONLY the content from the student's Paper 1 scope sheet that maps to
 * this source chapter. See src/data/content/businessExamPaper1.ts for the full
 * scope Overview checklist.
 */

const L10_QUALITY_ESSAY = {
  id: 'bs-p1x-l10-quality-essay',
  chapterId: 'business-exam-p1-ch3',
  subjectId: 'business' as const,
  title: 'Quality Control, Assurance & Quality-Indicators Essay (Highlighted)',
  minutes: 22,
  blocks: [
    {
      id: 'bs-p1x-l10-tip',
      type: 'callout' as const,
      text: ' HIGHLIGHTED ON THE SCOPE SHEET — a guaranteed essay. Know quality control vs quality assurance, the importance of quality, AND the quality indicators of HR, Administration, Financial and General Management cold.',
    },
    { id: 'bs-p1x-l10-h1', type: 'heading' as const, level: 2 as const, text: 'The Meaning of Quality' },
    {
      id: 'bs-p1x-l10-quality-list',
      type: 'list' as const,
      text: [
        'Quality is the ability to satisfy customer/consumer needs.',
        'It refers to the features/characteristics of a product/service that meet customer\'s requirements.',
        'It refers to products and services that satisfy needs and exceed customer expectations on a continuous basis.',
        'Includes learning from mistakes and continuously improving all aspects of the business.',
        'It is a degree of excellence to which a product/service satisfies the required needs of customers.',
      ],
    },
    { id: 'bs-p1x-l10-h2', type: 'heading' as const, level: 2 as const, text: 'Quality Control vs Quality Assurance' },
    {
      id: 'bs-p1x-l10-qcqa-tip',
      type: 'callout' as const,
      text: ' Quality control vs quality assurance is the single most commonly confused pair in this topic. Remember: Control = inspecting the FINAL product. Assurance = inspecting DURING and AFTER production, at every stage, to get it right the first time.',
    },
    {
      id: 'bs-p1x-l10-qcqa-table',
      type: 'definitions' as const,
      rows: [
        { term: 'Quality control', meaning: 'Inspection of the final product to ensure that it meets the required standards. Includes setting targets/measuring performance and taking corrective measures. Raw materials/employees/machinery/workmanship/production are checked to ensure that high quality standards are maintained.' },
        { term: 'Quality assurance', meaning: 'The continuous maintaining of the required level of quality in a service/product. Inspection is carried out during AND after the production process, ensuring required standards have been met at every stage. Ensures every process is aimed at getting the product/service right the first time and prevents mistakes from happening again.' },
      ],
    },
    { id: 'bs-p1x-l10-h3', type: 'heading' as const, level: 2 as const, text: 'The Importance of Quality for Businesses' },
    {
      id: 'bs-p1x-l10-imp-list',
      type: 'list' as const,
      text: [
        'Effective customer services are rendered, resulting in increased customer satisfaction.',
        'Time and resources are used efficiently.',
        'Productivity increases through proper time management/using high quality resources.',
        'Products/Services are constantly improved resulting in increased levels of customer satisfaction.',
        'Vision/Mission/Business goals may be achieved.',
        'Business has a competitive advantage over its competitors.',
        'Regular training will continuously improve the quality of employees\' skills/knowledge.',
        'Employers and employees will have a healthy working relationship resulting in happy/productive workers.',
        'Quality enables businesses to have a good reputation and promotes brand awareness.',
        'Consumers associate the image of the business with the quality of the product.',
        'Quality products increase sales, profits, business growth and attract prospective investors.',
        'The business gains goodwill and support from the community.',
        'Improves business image as there are fewer defects/returns.',
      ],
    },
    { id: 'bs-p1x-l10-h4', type: 'heading' as const, level: 2 as const, text: 'Quality in Products — Methods Used to Indicate Quality' },
    {
      id: 'bs-p1x-l10-prod-table',
      type: 'definitions' as const,
      rows: [
        { term: 'Trademarks', meaning: 'Brand names, a slogan, or a logo used by manufacturers.' },
        { term: 'Samples', meaning: 'A small sample product intended to show the customers how the real product will look.' },
        { term: 'Grades', meaning: 'A particular level that is used to rank the quality of the product.' },
        { term: 'Commercial Standards', meaning: 'The South African Bureau of Standards (SABS) approves commercial standards of products.' },
      ],
    },
    { id: 'bs-p1x-l10-h5', type: 'heading' as const, level: 2 as const, text: 'Quality Indicators of the Business Functions' },
    {
      id: 'bs-p1x-l10-qi-tip',
      type: 'callout' as const,
      text: ' You must be able to "outline/explain/suggest" quality indicators for FOUR specific functions — Human Resources, Administration, Financial, and General Management. Case studies may ask you to identify strengths/weaknesses from a scenario using these indicators.',
    },
    { id: 'bs-p1x-l10-h6', type: 'heading' as const, level: 3 as const, text: 'Quality Indicators of the Human Resources Function' },
    {
      id: 'bs-p1x-l10-qi-hr',
      type: 'list' as const,
      text: [
        'A low rate of staff turnover in the business.',
        'Maintain a healthy relationship between employees and employer.',
        'Provide good working conditions.',
        'The HR manager should work towards building a good relationship with employees.',
        'Performance incentives for staff should be offered to increase productivity.',
        'Market-related salaries should be offered.',
        'Fair remuneration packages that are aligned to the industry should be provided.',
        'Makes sure there is a good recruitment policy that attracts best candidates.',
        'Ensures fair and equitable selection process.',
        'Ensure that employees understand the goals and objectives of the business.',
      ],
    },
    { id: 'bs-p1x-l10-h7', type: 'heading' as const, level: 3 as const, text: 'Quality Indicators of the Administration Function' },
    {
      id: 'bs-p1x-l10-qi-admin',
      type: 'list' as const,
      text: [
        'Use modern technology efficiently.',
        'All systems and processes should be documented.',
        'Easy to recall/find information/documentation. This is a vital part of the administration function.',
        'Complaints should be handled quickly and effectively.',
        'The administration function should collect data that can be used in decision-making, and store it safely.',
        'Fast and reliable data capturing and processing systems.',
        'Make relevant information available for quick decision-making.',
        'All documentation is kept neatly and orderly in a safe place.',
        'Financial documents are kept up to date and recorded accurately.',
        'Vital information should be available to management when needed.',
      ],
    },
    { id: 'bs-p1x-l10-h8', type: 'heading' as const, level: 3 as const, text: 'Quality Indicators of the Financial Function' },
    {
      id: 'bs-p1x-l10-qi-fin',
      type: 'list' as const,
      text: [
        'Ensuring a healthy cash flow through ensuring payments are made on time.',
        'The financial function has to obtain capital from the most suitable sources.',
        'They should draw up a budget to ensure sufficient allocation of cash to prevent wastage.',
        'Financial records to be kept up to date.',
        'Accurate financial statements should be drawn up so that management can see the performance of the business.',
        'Accountability through tight financial processes.',
        'Negotiate better interest rates in order to keep financial costs down.',
        'Draw up accurate financial statements timeously/regularly.',
        'Surplus funds should be invested to save for future projects/expansion/growth.',
      ],
    },
    { id: 'bs-p1x-l10-h9', type: 'heading' as const, level: 3 as const, text: 'Quality Indicators of the General Management Function' },
    {
      id: 'bs-p1x-l10-qi-genmgmt',
      type: 'list' as const,
      text: [
        'The general management function develops/implements/monitors effective strategic plans.',
        'Set direction and establish priorities for their business.',
        'Effectively communicate shared vision, mission and values.',
        'Take responsibility for setting direction and prioritising responsibilities.',
        'Ensure that employees have the necessary resources to do the work.',
        'Ensure that all departments/the business meet their deadlines/targets.',
        'Learn about/understand changes in the business environment on an on-going basis.',
        'Be prepared to set an example of the behaviour that is expected from employees in terms of ethics/professionalism as well as productivity.',
      ],
    },
    { id: 'bs-p1x-l10-h10', type: 'heading' as const, level: 2 as const, text: 'Management and Business Success' },
    {
      id: 'bs-p1x-l10-corr-list',
      type: 'list' as const,
      text: [
        'Management plays an important role in making the correct decisions and motivating employees to be productive.',
        'Poor management can result in ineffective employees and loss in productivity.',
        'Businesses require ongoing decision-making and problem solving.',
        'Problems that cannot be solved and decisions that are not made appropriately can lead to a decrease in productivity.',
      ],
    },
    { id: 'bs-p1x-l10-h11', type: 'heading' as const, level: 2 as const, text: 'Model Essay Plan: Quality Indicators Across the Business Functions' },
    {
      id: 'bs-p1x-l10-essay-plan',
      type: 'callout' as const,
      text: 'Essay structure: (1) Define quality, quality control and quality assurance, distinguishing the two. (2) State the importance of quality to a business. (3) Go function by function — HR, Administration, Financial, General Management — and list that function\'s quality indicators. (4) Close by linking quality indicators + sound management to the business achieving its vision, mission, goals and objectives.',
    },
    {
      id: 'bs-p1x-l10-qa',
      type: 'questions' as const,
      qa: [
        { q: 'Distinguish between quality control and quality assurance.', marks: 4, a: ['Quality control is the inspection of the FINAL product only, to ensure it meets required standards, including setting targets and taking corrective measures.', 'Quality assurance is carried out DURING AND AFTER the whole production process, ensuring standards are met at every stage and that products are right the first time.'] },
        { q: 'Discuss the importance of quality for businesses.', marks: 8, a: ['Effective customer service results in increased customer satisfaction, and products/services are constantly improved.', 'Time and resources are used efficiently, and productivity increases through proper time management and high quality resources.', 'The business gains a competitive advantage over its competitors and a good reputation that promotes brand awareness.', 'Quality products increase sales, profits, business growth and attract prospective investors.', 'The business gains goodwill and support from the community, and its image improves as there are fewer defects/returns.'] },
        { q: 'Outline FOUR quality indicators of the Human Resources function.', marks: 4, a: ['A low rate of staff turnover in the business.', 'Market-related salaries and fair remuneration packages should be offered.', 'A good recruitment policy that attracts the best candidates and a fair, equitable selection process.', 'Performance incentives for staff should be offered to increase productivity.'] },
        { q: 'Explain quality indicators of the Administration function.', marks: 4, a: ['Use of modern technology efficiently, with fast and reliable data capturing and processing systems.', 'All systems and processes should be documented, and documentation kept neatly and safely.', 'Complaints should be handled quickly and effectively.', 'Vital information should be available to management when needed for decision-making.'] },
        { q: 'Suggest quality indicators of the Financial function.', marks: 4, a: ['Ensuring a healthy cash flow by making payments on time.', 'Drawing up an accurate, up-to-date budget to allocate cash and prevent wastage.', 'Negotiating better interest rates to keep financial costs down.', 'Investing surplus funds for future projects/expansion/growth.'] },
        { q: 'Outline quality indicators of the General Management function.', marks: 4, a: ['Developing, implementing and monitoring effective strategic plans.', 'Setting direction and establishing priorities for the business.', 'Effectively communicating a shared vision, mission and values.', 'Setting an example of the ethical, professional and productive behaviour expected of employees.'] },
        {
          q: 'ESSAY: Discuss how quality indicators across the business functions, combined with sound management, contribute to a business achieving its objectives. (150–200 words)',
          marks: 10,
          a: 'Quality indicators give a business concrete, measurable signs that each function is operating well, which directly supports the achievement of its objectives. In Human Resources, a low staff turnover and fair remuneration keep skilled, motivated employees in place. In Administration, efficient use of technology and well-organised, accurate documentation ensures management always has reliable information for decision-making. In the Financial function, healthy cash flow, accurate budgets, and well-negotiated financing keep the business solvent and able to invest in growth. General Management ties all of this together: by setting clear direction, communicating a shared vision, and modelling professional and ethical behaviour, management ensures that the other functions pursue the same goals in a coordinated way. However, quality indicators alone are not enough — management must also make timeous, correct decisions and solve problems as they arise, since poor management leads to ineffective employees and falling productivity even where good systems exist. When strong quality indicators are paired with sound, consistent management, a business builds a good reputation, retains customers, and is far more likely to achieve its vision, mission, goals and objectives.',
        },
      ],
    },
  ],
};

export const BUSINESS_EXAM_P1_CH3: Chapter = {
  id: 'business-exam-p1-ch3',
  subjectId: 'business',
  title: 'Scope: Quality (Essay Topic)',
  summary: 'Only the content on your Paper 1 exam scope — nothing outside it.',
  paper: 1,
  hidden: true,
  lessons: [L10_QUALITY_ESSAY],
};
