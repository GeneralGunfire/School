import type { Chapter } from '@/lib/types';

/**
 * Scope: Micro-Environment, Structure & Resources — scope-only chapter for the Business Studies Paper 1 exam topic.
 * Contains ONLY the content from the student's Paper 1 scope sheet that maps to
 * this source chapter. See src/data/content/businessExamPaper1.ts for the full
 * scope Overview checklist.
 */

const L1_MICRO = {
  id: 'bs-p1x-l1-micro',
  chapterId: 'business-exam-p1-ch1',
  subjectId: 'business' as const,
  title: 'Micro-Environment, Organisational Structure & Resources',
  minutes: 14,
  blocks: [
    { id: 'bs-p1x-l1-h1', type: 'heading' as const, level: 2 as const, text: 'The Micro-Environment' },
    {
      id: 'bs-p1x-l1-tip',
      type: 'callout' as const,
      text: ' Key Point: The micro-environment = INSIDE the business = full control. If you remember nothing else, remember: micro = internal = the business controls everything in it.',
    },
    { id: 'bs-p1x-l1-h2', type: 'heading' as const, level: 3 as const, text: 'Meaning of the Micro-Environment' },
    {
      id: 'bs-p1x-l1-meaning',
      type: 'list' as const,
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
    { id: 'bs-p1x-l1-h3', type: 'heading' as const, level: 3 as const, text: 'Components of the Micro-Environment' },
    {
      id: 'bs-p1x-l1-components',
      type: 'list' as const,
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
      id: 'bs-p1x-l1-callout',
      type: 'callout' as const,
      text: 'The three business environments are: Micro-environment (innermost) → Market environment → Macro-environment (outermost). The business has full control over the micro-environment but less control over market and macro environments.',
    },
    { id: 'bs-p1x-l1-h4', type: 'heading' as const, level: 2 as const, text: 'Organisational Structure' },
    {
      id: 'bs-p1x-l1-struct-intro',
      type: 'paragraph' as const,
      text: 'The organisational structure shows the different departments in the organisation and how they are organised. The organisational structure is also known as an organogram. An organogram shows the level of authority, responsibility and tasks of the various departments in the business. An organogram shows the hierarchical structure of the business.',
    },
    { id: 'bs-p1x-l1-h5', type: 'heading' as const, level: 3 as const, text: 'Purpose of the Organisational Structure' },
    {
      id: 'bs-p1x-l1-struct-purpose',
      type: 'list' as const,
      text: [
        'Helping to ensure the smooth and efficient functioning of the business — ensuring that work happens with precise co-ordination and minimum wastage of resources.',
        'Helping the business to work towards its goals.',
        'Show the connections between various positions and tasks in the business — describes the coordination between various departments.',
      ],
    },
    { id: 'bs-p1x-l1-h6', type: 'heading' as const, level: 3 as const, text: 'Importance of the Organisational Structure (Organogram)' },
    {
      id: 'bs-p1x-l1-struct-importance',
      type: 'list' as const,
      text: [
        'The organisational structure shows each person\'s tasks and level of authority and responsibility.',
        'The structure also shows the flow of instruction and feedback in the business.',
        'It determines the position of management, the departments and the employees.',
        'It determines who reports to whom, and which departments fall under which manager.',
        'The structure also indicates the way decisions are taken and carried out.',
        'Duties (jobs) with the same function are grouped together and coordinated.',
      ],
    },
    { id: 'bs-p1x-l1-h7', type: 'heading' as const, level: 2 as const, text: 'Organisational Resources' },
    {
      id: 'bs-p1x-l1-res-intro',
      type: 'paragraph' as const,
      text: 'Organisational resources are assets that the business uses to produce goods/services and to achieve its goals. The following groups of resources are controlled by management.',
    },
    {
      id: 'bs-p1x-l1-acronym',
      type: 'acronym' as const,
      word: 'PFHI',
      forWhat: 'Four main types of organisational resources',
      items: [
        { letter: 'P', stands: 'Physical resources are the tangible assets a business needs', note: 'Raw materials, machinery, buildings, vehicles, and natural resources like water and minerals' },
        { letter: 'F', stands: 'Financial resources are the money available to the business', note: 'Capital, cash, bank overdrafts, credit, loans, and money invested to acquire production goods' },
        { letter: 'H', stands: 'Human resources are the people who work for the business', note: 'Employees, contractors, and managers — people with knowledge and skills to perform tasks' },
        { letter: 'I', stands: 'Information and technology resources give the business a competitive edge', note: 'Computers, internet, software, production technology, websites, and communication tools' },
      ],
    },
    { id: 'bs-p1x-l1-h8', type: 'heading' as const, level: 3 as const, text: 'Human Resources (People)' },
    {
      id: 'bs-p1x-l1-res-human',
      type: 'list' as const,
      text: [
        'People with knowledge and skills such as employees, consultants, managers, etc.',
        'The people needed to perform the work and keep the organisation functioning.',
        'People who contribute towards achieving the goals of the business.',
        'Includes: Employees and Contractors.',
      ],
    },
    { id: 'bs-p1x-l1-h9', type: 'heading' as const, level: 3 as const, text: 'Physical Resources / Operating Resources (incl. Natural Resources)' },
    {
      id: 'bs-p1x-l1-res-physical',
      type: 'list' as const,
      text: [
        'Include raw materials, office furniture/equipment, machinery, plant necessary to operate the business successfully.',
        'Also includes: buildings, machinery and vehicles, infrastructure, assets from nature such as water, minerals, and wood.',
        'Natural resources are assets from nature used to offer services and products, e.g. minerals, water, wood, raw materials.',
      ],
    },
    { id: 'bs-p1x-l1-h10', type: 'heading' as const, level: 3 as const, text: 'Financial / Capital Resources' },
    {
      id: 'bs-p1x-l1-res-financial',
      type: 'list' as const,
      text: [
        'Money invested in the business to acquire production goods such as land, buildings, and machinery.',
        'Can be in the form of: Capital, own capital, cash, bank overdrafts, credit card, short and medium term loans, money invested in the business to acquire production goods.',
      ],
    },
    { id: 'bs-p1x-l1-h11', type: 'heading' as const, level: 3 as const, text: 'Information & Technological Resources' },
    {
      id: 'bs-p1x-l1-res-tech',
      type: 'list' as const,
      text: [
        'Resources that include computers, voice mail/emails/production technology that gives the business an advantage over its competitors.',
        'Includes: Technology, use of computers, research, production technology, computer software, laptops, websites, internet facilities, cell phones, photocopy machines.',
      ],
    },
    {
      id: 'bs-p1x-l1-qa',
      type: 'questions' as const,
      qa: [
        { q: 'Define the term "micro-environment."', marks: 2, a: 'The micro-environment includes everything inside the business. All the internal affairs of the business are managed by the directors or owners. The business has full/complete control over its micro-environment.' },
        { q: 'State any THREE components of the micro-environment.', marks: 3, a: ['Vision, mission statement, goals and objectives', 'Organisational resources', 'Leadership and management (any 3 of the 6 components)'] },
        { q: 'Explain what is meant by an "organisational structure."', marks: 3, a: 'An organisational structure shows the different departments in the organisation and how they are organised. It is also known as an organogram and shows the level of authority, responsibility and tasks of the various departments, as well as the hierarchical structure of the business.' },
        { q: 'State FOUR reasons why an organisational structure (organogram) is important for a business.', marks: 4, a: ['It shows each person\'s tasks and level of authority and responsibility.', 'It shows the flow of instruction and feedback in the business.', 'It determines who reports to whom and which departments fall under which manager.', 'It indicates the way decisions are taken and carried out.'] },
        { q: 'Name the four types of organisational resources.', marks: 4, a: ['Physical resources (operating resources)', 'Financial resources', 'Human resources (people)', 'Information and Technological resources'] },
        { q: 'Explain the difference between human resources and financial resources.', marks: 4, a: ['Human resources refer to people with knowledge and skills, such as employees and contractors, who perform the work and keep the organisation functioning.', 'Financial resources refer to money invested in the business to acquire production goods such as land, buildings, and machinery, in the form of capital, cash, loans, or overdrafts.'] },
      ],
    },
  ],
};

export const BUSINESS_EXAM_P1_CH1: Chapter = {
  id: 'business-exam-p1-ch1',
  subjectId: 'business',
  title: 'Scope: Micro-Environment, Structure & Resources',
  summary: 'Only the content on your Paper 1 exam scope — nothing outside it.',
  paper: 1,
  hidden: true,
  lessons: [L1_MICRO],
};
