import type { Chapter } from '@/lib/types';

export const BUSINESS_CHAPTER_3: Chapter = {
  id: 'business-ch3',
  subjectId: 'business',
  title: 'Chapter 3: The Concept of Quality',
  summary: 'Grade 10 Term 1 — Quality, quality control and quality assurance, the importance of quality, quality indicators of the business functions, and the correlation between management and business success.',
  paper: 1,
  category: 'Business Operations',
  lessons: [
    // ── Lesson 1: Key Definitions ────────────────────────────────────────────
    {
      id: 'bs-ch3-definitions',
      chapterId: 'business-ch3',
      subjectId: 'business',
      title: 'Key Definitions',
      minutes: 8,
      blocks: [
        { id: 'bs3-def-h1', type: 'heading', level: 2, text: 'Key Terms & Definitions' },
        {
          id: 'bs3-def-tip',
          type: 'callout',
          text: ' Exam Tip: Quality control vs quality assurance is the single most commonly confused pair in this chapter. Remember: Control = inspecting the FINAL product. Assurance = inspecting DURING and AFTER production, at every stage, to get it right the first time.',
        },
        {
          id: 'bs3-def-table',
          type: 'definitions',
          rows: [
            { term: 'Quality', meaning: 'Refers to how goods/services satisfy the specific needs of customers.' },
            { term: 'Quality control', meaning: 'A system to maintain standards in manufacturing by testing the output against the specifications.' },
            { term: 'Quality assurance', meaning: 'The continuous maintaining of the required level of quality in a service/product.' },
            { term: 'Business function', meaning: 'Activities carried out by the enterprise, for example, marketing, production, administration, financial, human resources, purchasing, and so on.' },
            { term: 'Quality management', meaning: 'The act of overseeing all activities and tasks needed to maintain a desired level of excellence.' },
          ],
        },
        {
          id: 'bs3-def-qa',
          type: 'questions',
          qa: [
            { q: 'Define the term "quality."', marks: 2, a: 'Quality refers to how goods/services satisfy the specific needs of customers.' },
            { q: 'Define "quality management."', marks: 2, a: 'Quality management is the act of overseeing all activities and tasks needed to maintain a desired level of excellence.' },
            { q: 'Define "business function" and give TWO examples.', marks: 3, a: ['A business function is the activities carried out by the enterprise.', 'Examples: marketing, production, administration, financial, human resources, purchasing (any two).'] },
          ],
        },
      ],
    },

    // ── Lesson 2: Quality, Quality Control & Quality Assurance ──────────────
    {
      id: 'bs-ch3-quality-qc-qa',
      chapterId: 'business-ch3',
      subjectId: 'business',
      title: 'Quality, Quality Control & Quality Assurance',
      minutes: 12,
      blocks: [
        { id: 'bs3-quality-h1', type: 'heading', level: 2, text: 'The Meaning of Quality' },
        {
          id: 'bs3-quality-tip',
          type: 'callout',
          text: ' Exam Tip: "Elaborate on the meaning of quality" questions want MULTIPLE points, not just one definition. Use several of the bullet points below to build a full answer.',
        },
        {
          id: 'bs3-quality-list',
          type: 'list',
          text: [
            'Quality is the ability to satisfy customer/consumer needs.',
            'It refers to the features/characteristics of a product/service that meet customer\'s requirements.',
            'It refers to products and services that satisfy needs and exceed customer expectations on a continuous basis.',
            'Includes learning from mistakes and continuously improving all aspects of the business.',
            'It is a degree of excellence to which a product/service satisfies the required needs of customers.',
          ],
        },
        { id: 'bs3-qc-h1', type: 'heading', level: 2, text: 'The Meaning of Quality Control' },
        {
          id: 'bs3-qc-list',
          type: 'list',
          text: [
            'Inspection of the final product to ensure that it meets the required standards.',
            'Includes setting targets/measuring performance and taking corrective measures.',
            'Raw materials/employees/machinery/workmanship/production are checked to ensure that high quality standards are maintained.',
          ],
        },
        { id: 'bs3-qa-h1', type: 'heading', level: 2, text: 'The Meaning of Quality Assurance' },
        {
          id: 'bs3-qa-list',
          type: 'list',
          text: [
            'The inspection of products/services should be carried out during and after the production process.',
            'This will ensure that the required standards that were set out for the product/service have been adhered to at every stage of the process.',
            'It also ensures that every process is aimed at getting the product/service right the first time, and enables teams to prevent mistakes from happening again.',
          ],
        },
        { id: 'bs3-diff-h1', type: 'heading', level: 2, text: 'Differences Between Quality Control and Quality Assurance' },
        {
          id: 'bs3-diff-table',
          type: 'definitions',
          rows: [
            { term: 'Quality control', meaning: 'Inspection of the final product to ensure that it meets the required standards. Includes setting targets/measuring performance and taking corrective measures.' },
            { term: 'Quality assurance', meaning: 'Carried out during and after the production process to ensure required standards have been met at every stage of the process. Ensures that every process is aimed at getting the product right the first time and prevents mistakes from happening again.' },
          ],
        },
        {
          id: 'bs3-qcqa-qa',
          type: 'questions',
          qa: [
            { q: 'Define "quality control."', marks: 2, a: 'Quality control is a system to maintain standards in manufacturing by testing the output against the specifications — it is the inspection of the final product to ensure it meets required standards.' },
            { q: 'Define "quality assurance."', marks: 2, a: 'Quality assurance is the continuous maintaining of the required level of quality in a service/product — inspection is carried out during and after the production process to ensure standards are adhered to at every stage.' },
            { q: 'Distinguish between quality control and quality assurance.', marks: 4, a: ['Quality control is the inspection of the FINAL product only, to ensure it meets required standards, including setting targets and taking corrective measures.', 'Quality assurance is carried out DURING AND AFTER the whole production process, ensuring standards are met at every stage and that products are right the first time.'] },
            { q: 'Elaborate on the meaning of quality.', marks: 4, a: ['Quality is the ability to satisfy customer/consumer needs.', 'It refers to the features/characteristics of a product/service that meet the customer\'s requirements.', 'It refers to products and services that satisfy needs and exceed customer expectations on a continuous basis.', 'It includes learning from mistakes and continuously improving all aspects of the business.'] },
          ],
        },
      ],
    },

    // ── Lesson 3: The Importance of Quality & Quality in Products ───────────
    {
      id: 'bs-ch3-importance-indicators',
      chapterId: 'business-ch3',
      subjectId: 'business',
      title: 'The Importance of Quality & Quality in Products',
      minutes: 12,
      blocks: [
        { id: 'bs3-imp-h1', type: 'heading', level: 2, text: 'The Importance of Quality for Businesses' },
        {
          id: 'bs3-imp-tip',
          type: 'callout',
          text: ' Exam Tip: "Discuss the importance of quality" is often worth 6-8 marks — write in full sentences, not just keywords, and link the point back to a business benefit (e.g. increased sales, competitive advantage, customer satisfaction).',
        },
        {
          id: 'bs3-imp-list',
          type: 'list',
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
        { id: 'bs3-prod-h1', type: 'heading', level: 2, text: 'Quality in Products' },
        {
          id: 'bs3-prod-intro',
          type: 'paragraph',
          text: 'Methods used to indicate quality include the following:',
        },
        {
          id: 'bs3-prod-table',
          type: 'definitions',
          rows: [
            { term: 'Trademarks', meaning: 'Brand names, a slogan, or a logo used by manufacturers.' },
            { term: 'Samples', meaning: 'A small sample product intended to show the customers how the real product will look.' },
            { term: 'Grades', meaning: 'A particular level that is used to rank the quality of the product.' },
            { term: 'Commercial Standards', meaning: 'The South African Bureau of Standards (SABS) approves commercial standards of products.' },
          ],
        },
        {
          id: 'bs3-imp-qa',
          type: 'questions',
          qa: [
            { q: 'Discuss the importance of quality for businesses.', marks: 8, a: ['Effective customer service results in increased customer satisfaction, and products/services are constantly improved.', 'Time and resources are used efficiently, and productivity increases through proper time management and high quality resources.', 'The business gains a competitive advantage over its competitors and a good reputation that promotes brand awareness.', 'Quality products increase sales, profits, business growth and attract prospective investors.', 'The business gains goodwill and support from the community, and its image improves as there are fewer defects/returns.'] },
            { q: 'Name any FOUR methods used to indicate quality in products.', marks: 4, a: ['Trademarks', 'Samples', 'Grades', 'Commercial Standards'] },
            { q: 'Explain what is meant by "commercial standards" as a method of indicating quality.', marks: 2, a: 'Commercial standards are approved by the South African Bureau of Standards (SABS) to indicate that a product meets required quality standards.' },
          ],
        },
      ],
    },

    // ── Lesson 4: Quality Indicators of the Business Functions ──────────────
    {
      id: 'bs-ch3-quality-indicators',
      chapterId: 'business-ch3',
      subjectId: 'business',
      title: 'Quality Indicators of the Business Functions',
      minutes: 14,
      blocks: [
        { id: 'bs3-qi-h1', type: 'heading', level: 2, text: 'Quality Indicators of the Business Functions' },
        {
          id: 'bs3-qi-tip',
          type: 'callout',
          text: ' Exam Tip: You must be able to "outline/explain/suggest" quality indicators for FOUR specific functions — Human Resources, Administration, Financial, and General Management. Case studies may ask you to identify strengths/weaknesses from a scenario using these indicators.',
        },
        { id: 'bs3-qi-hr-h', type: 'heading', level: 3, text: 'Quality Indicators of the Human Resources Function' },
        {
          id: 'bs3-qi-hr',
          type: 'list',
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
            'Offer performance incentives for staff to enhance productivity.',
            'Good relationship with employees.',
            'Ensure that employees understand the goals and objectives of the business.',
            'Understand the interrelatedness of different departments.',
          ],
        },
        { id: 'bs3-qi-admin-h', type: 'heading', level: 3, text: 'Quality Indicators of the Administration Function' },
        {
          id: 'bs3-qi-admin',
          type: 'list',
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
        { id: 'bs3-qi-fin-h', type: 'heading', level: 3, text: 'Quality Indicators of the Financial Function' },
        {
          id: 'bs3-qi-fin',
          type: 'list',
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
        { id: 'bs3-qi-genmgmt-h', type: 'heading', level: 3, text: 'Quality Indicators of the General Management Function' },
        {
          id: 'bs3-qi-genmgmt',
          type: 'list',
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
        {
          id: 'bs3-qi-qa',
          type: 'questions',
          qa: [
            { q: 'Outline FOUR quality indicators of the Human Resources function.', marks: 4, a: ['A low rate of staff turnover in the business.', 'Market-related salaries and fair remuneration packages should be offered.', 'A good recruitment policy that attracts the best candidates and a fair, equitable selection process.', 'Performance incentives for staff should be offered to increase productivity.'] },
            { q: 'Explain quality indicators of the Administration function.', marks: 4, a: ['Use of modern technology efficiently, with fast and reliable data capturing and processing systems.', 'All systems and processes should be documented, and documentation kept neatly and safely.', 'Complaints should be handled quickly and effectively.', 'Vital information should be available to management when needed for decision-making.'] },
            { q: 'Suggest quality indicators of the Financial function.', marks: 4, a: ['Ensuring a healthy cash flow by making payments on time.', 'Drawing up an accurate, up-to-date budget to allocate cash and prevent wastage.', 'Negotiating better interest rates to keep financial costs down.', 'Investing surplus funds for future projects/expansion/growth.'] },
            { q: 'Outline quality indicators of the General Management function.', marks: 4, a: ['Developing, implementing and monitoring effective strategic plans.', 'Setting direction and establishing priorities for the business.', 'Effectively communicating a shared vision, mission and values.', 'Setting an example of the ethical, professional and productive behaviour expected of employees.'] },
            { q: 'Identify the business function being described: "A low rate of staff turnover, market-related salaries, and good recruitment policies that attract the best candidates."', marks: 2, a: 'This is the Human Resources function — these are all quality indicators specific to how HR manages and retains employees.' },
          ],
        },
      ],
    },

    // ── Lesson 5: Management & Business Success ──────────────────────────────
    {
      id: 'bs-ch3-management-success',
      chapterId: 'business-ch3',
      subjectId: 'business',
      title: 'Management and Business Success: Strengths & Weaknesses',
      minutes: 10,
      blocks: [
        { id: 'bs3-corr-h1', type: 'heading', level: 2, text: 'The Correlation Between Management and the Success of the Business in Achieving its Objectives' },
        {
          id: 'bs3-corr-tip',
          type: 'callout',
          text: ' Exam Tip: Case studies in this section ask you to identify strengths and weaknesses of a business from a scenario, and then make recommendations. Always link weak management decisions to a concrete negative outcome (e.g. low productivity, poor decisions) and recommend a specific fix.',
        },
        {
          id: 'bs3-corr-list',
          type: 'list',
          text: [
            'Management plays an important role in making the correct decisions and motivating employees to be productive.',
            'Poor management can result in ineffective employees and loss in productivity.',
            'Businesses require ongoing decision-making and problem solving.',
            'Problems that cannot be solved and decisions that are not made appropriately can lead to a decrease in productivity.',
          ],
        },
        {
          id: 'bs3-corr-qa',
          type: 'questions',
          qa: [
            { q: 'Explain the correlation between management and the success of a business in achieving its objectives.', marks: 4, a: ['Management plays an important role in making the correct decisions and motivating employees to be productive.', 'Poor management can result in ineffective employees and a loss in productivity.', 'Businesses require ongoing decision-making and problem solving to succeed.', 'Problems that are not solved and decisions that are not made appropriately can lead to a decrease in productivity, harming the business\'s ability to reach its objectives.'] },
            { q: 'From a given scenario, identify ONE strength and ONE weakness of a business\'s management, and recommend a solution for the weakness.', marks: 6, a: ['Strength: identify a specific action from the scenario that reflects good decision-making, planning, or employee motivation.', 'Weakness: identify a specific action from the scenario that reflects poor decision-making, lack of planning, or poor employee motivation, resulting in reduced productivity.', 'Recommendation: suggest a specific, practical management action (e.g. improved training, better communication, clearer strategic planning) that would address the identified weakness.'] },
            {
              q: 'ESSAY: Discuss how quality indicators across the business functions, combined with sound management, contribute to a business achieving its objectives. (150–200 words)',
              marks: 10,
              a: 'Quality indicators give a business concrete, measurable signs that each function is operating well, which directly supports the achievement of its objectives. In Human Resources, a low staff turnover and fair remuneration keep skilled, motivated employees in place. In Administration, efficient use of technology and well-organised, accurate documentation ensures management always has reliable information for decision-making. In the Financial function, healthy cash flow, accurate budgets, and well-negotiated financing keep the business solvent and able to invest in growth. General Management ties all of this together: by setting clear direction, communicating a shared vision, and modelling professional and ethical behaviour, management ensures that the other functions pursue the same goals in a coordinated way. However, quality indicators alone are not enough — management must also make timeous, correct decisions and solve problems as they arise, since poor management leads to ineffective employees and falling productivity even where good systems exist. When strong quality indicators are paired with sound, consistent management, a business builds a good reputation, retains customers, and is far more likely to achieve its vision, mission, goals and objectives.',
            },
          ],
        },
      ],
    },
  ],
};
