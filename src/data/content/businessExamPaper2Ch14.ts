import type { Chapter } from '@/lib/types';

/**
 * Scope: The Business Plan (Essay Topic) — scope-only chapter for Paper 2.
 *
 * Contains ONLY the content on the student's Paper 2 exam-scope sheet for this
 * source chapter, extracted from the full chapter. Linked from the "Exam Scope:
 * Paper 2" Overview checklist so a student lands here, not in the full chapter.
 */

export const BUSINESS_EXAM_P2_CH14: Chapter = {
  id: 'business-exam-p2-ch14',
  subjectId: 'business',
  title: 'Scope: The Business Plan (Essay Topic)',
  summary: 'Only the content on your Paper 2 exam scope — nothing else.',
  paper: 2,
  hidden: true,
  lessons: [
{
  id: 'bs-p2x-bizplan-1',
  chapterId: 'business-exam-p2-ch14',
  subjectId: 'business' as const,
  title: 'The Business Plan (Essay Topic) — Importance, Components, Executive Summary, VMGO & Legal Requirements',
  minutes: 24,
  blocks: [
    { id: 'p2x-bp-h1', type: 'heading' as const, level: 2 as const, text: 'Key Definitions' },
    {
      id: 'p2x-bp-def-table',
      type: 'definitions' as const,
      rows: [
        { term: 'Business plan', meaning: "A document that outlines all the important facts, processes, and procedures of the business — setting out a business's future objectives and strategies for achieving them." },
        { term: 'Executive summary', meaning: 'The summary of the entire business plan — a short section produced for business purposes that summarises the entire plan.' },
        { term: 'Vision', meaning: 'The long-term future goal of the business.' },
        { term: 'Mission statement', meaning: 'The activities the business will do in order to achieve its goal.' },
        { term: 'Legal requirements', meaning: 'Legal documentation such as licences, permits and tax regulations that must be complied with before the business can start operating.' },
        { term: 'Marketing plan', meaning: 'A strategy/plan of how the business is going to sell its product/service.' },
        { term: 'Financial analysis', meaning: 'The assessment of the viability and profitability of the business.' },
      ],
    },
    { id: 'p2x-bp-imp-h1', type: 'heading' as const, level: 2 as const, text: 'The Importance of a Business Plan' },
    {
      id: 'p2x-bp-imp-list',
      type: 'list' as const,
      text: [
        'Helps entrepreneurs to set goals and objectives.',
        'Can be used to attract investors and prospective employees.',
        'Helps stakeholders understand the role they play, and encourages them to contribute effectively.',
        "Guides the entrepreneur on the viability of his/her business idea.",
        'Helps identify problems that may arise, so management can take steps to avoid them.',
        'Improves business operations processes and practices; evaluates the success of the business.',
        'Essential when applying for financial assistance from investors or lenders.',
        "Compels an entrepreneur to arrange his/her thoughts in a logical order, and gives direction once the business is operating.",
        'Helps the entrepreneur to face threats head-on and deal with them.',
      ],
    },
    { id: 'p2x-bp-comp-h1', type: 'heading' as const, level: 2 as const, text: 'Components of a Business Plan' },
    {
      id: 'p2x-bp-comp-list',
      type: 'list' as const,
      text: ['Cover page', 'Contents page/Index', 'Executive summary', 'Description of the business/Overview', 'SWOT analysis', 'Legal requirements of business', 'Marketing plan', 'Operational plan', 'Financial plan', 'Management plan', 'Competitor analysis'],
    },
    {
      id: 'p2x-bp-comp-table',
      type: 'definitions' as const,
      rows: [
        { term: 'Cover page', meaning: 'Name of the business, contact details and address of the owner(s), the logo, and a copyright disclaimer to protect the contents of the plan.' },
        { term: 'Contents page/Index', meaning: 'Gives a title and page number of each subsection, allowing the reader to find information in the document.' },
        { term: 'Executive summary', meaning: 'Detailed summary of the entire business plan. Written AFTER the plan has been completed, but placed FIRST to give readers a brief overview before the details.' },
        { term: 'Description of the business/Overview', meaning: 'Short description of the product/service, long-term objectives/mission/vision, the form of ownership (sole trader/partnership/etc.), and the legal requirements of the business.' },
        { term: 'Legal requirements', meaning: 'The legal requirements the business needs to comply with before operating.' },
        { term: 'SWOT analysis', meaning: 'Helps the entrepreneur build on strengths, address weaknesses, minimise risks, and take advantage of chances for success — an indication that research was conducted to support the business.' },
        { term: 'Marketing plan', meaning: 'The most important component of the business plan. Gives details of the 7Ps of marketing, and describes the target market, customers, and competition.' },
        { term: 'Operational plan', meaning: 'Where the business will be located, daily operation, how/where the product is made, and details of equipment and suppliers.' },
        { term: 'Financial plan', meaning: 'How much capital is required and how it will be raised; projected statements of profit, loss and cash flow.' },
        { term: 'Management plan', meaning: 'Short and long-term strategies; who will oversee running the business; skills of the entrepreneur and others; hierarchy and roles of employees.' },
        { term: 'Competitor analysis', meaning: "Description of competitors and their products, and details of competitors' marketing strategy and its effect on the proposed business." },
      ],
    },
    { id: 'p2x-bp-exec-h1', type: 'heading' as const, level: 2 as const, text: 'The Executive Summary' },
    {
      id: 'p2x-bp-exec-purpose',
      type: 'list' as const,
      text: [
        'Satisfies those who do not have time to go through the entire plan in detail.',
        'Most lenders and investors read it first before the entire business plan.',
        'Gives readers an idea of what is contained in the business plan.',
      ],
    },
    { id: 'p2x-bp-exec-aspects-h', type: 'heading' as const, level: 3 as const, text: 'Aspects That Must Be Included in the Executive Summary' },
    {
      id: 'p2x-bp-exec-aspects',
      type: 'list' as const,
      text: ['The form of business enterprise', 'The main business activity', 'Information about the owner of the business', 'The way in which capital will be obtained'],
    },
    { id: 'p2x-bp-vmgo-h1', type: 'heading' as const, level: 2 as const, text: 'The Vision, Mission Statement, Goals and Objectives' },
    { id: 'p2x-bp-vision-h', type: 'heading' as const, level: 3 as const, text: 'The Vision Statement' },
    {
      id: 'p2x-bp-vision-list',
      type: 'list' as const,
      text: [
        'A statement describing how the business will achieve its purpose.',
        'The long-term goal of how entrepreneurs see their business in future and how they want it to grow.',
        'Addresses profit, growth, purpose and stability.',
      ],
    },
    { id: 'p2x-bp-mission-h', type: 'heading' as const, level: 3 as const, text: 'The Mission Statement' },
    {
      id: 'p2x-bp-mission-list',
      type: 'list' as const,
      text: [
        'A statement describing the purpose of the business and explaining why the business exists.',
        'Addresses how entrepreneurs hope to achieve their vision; focuses on business operations; specific and measurable.',
      ],
    },
    { id: 'p2x-bp-goals-h', type: 'heading' as const, level: 3 as const, text: 'Goals and Objectives' },
    {
      id: 'p2x-bp-goals-list',
      type: 'list' as const,
      text: ['Long-term objectives are formulated to provide direction for the company to achieve the vision.', 'Also specific and measurable, like the mission statement.'],
    },
    { id: 'p2x-bp-struct-h1', type: 'heading' as const, level: 2 as const, text: 'The Structure of the Business and Forms of Ownership' },
    {
      id: 'p2x-bp-struct-list',
      type: 'list' as const,
      text: [
        'How many people the business intends to employ.',
        'Management and staff — qualifications, experience, job description, remuneration.',
        'Administration and record keeping.',
        'Staff policies regarding working hours, fringe benefits, overtime, sick leave and medical aid.',
        'The type of ownership — sole trader/partnership/close corporation/private company/public company.',
      ],
    },
    { id: 'p2x-bp-struct-det-h', type: 'heading' as const, level: 3 as const, text: 'The Form of Ownership Will Determine the Following' },
    {
      id: 'p2x-bp-struct-det',
      type: 'list' as const,
      text: ['The reason for the form of ownership', 'Legal requirements of the business', 'Products and services offered', 'Size of the business', 'Number of owners required', 'How much control the owners want', 'Legal protection'],
    },
    { id: 'p2x-bp-legal-h1', type: 'heading' as const, level: 2 as const, text: 'Different Types of Legal Requirements' },
    {
      id: 'p2x-bp-legal-intro',
      type: 'paragraph' as const,
      text: 'A business needs to be registered before it can obtain finance or start doing transactions. A business needs to comply with the following types of legal requirements:',
    },
    {
      id: 'p2x-bp-legal-list',
      type: 'list' as const,
      text: [
        'Trading licences and permits to operate legally; registration and registration fees.',
        'Taxation regulations; international trading/exporting and importing requirements/exchange rates.',
        'The Basic Conditions of Employment Act (BCEA) (No. 75 of 1997).',
        'The Labour Relations Act (LRA) (No. 66 of 1995).',
        'The National Credit Act (NCA) (No. 34 of 2005).',
        'The Environmental Conservation Act (No. 73 of 1989).',
        'Patents and copyrights.',
      ],
    },
  ],
},
{
  id: 'bs-p2x-bizplan-2',
  chapterId: 'business-exam-p2-ch14',
  subjectId: 'business' as const,
  title: 'The Business Plan (Essay Topic) — Marketing Plan, the 7Ps, Overcoming Competition & the Financial Plan',
  minutes: 24,
  blocks: [
    { id: 'p2x-bp2-mkt-h1', type: 'heading' as const, level: 2 as const, text: 'The Importance of a Marketing Plan and Market Research' },
    {
      id: 'p2x-bp2-mkt-plan-list',
      type: 'list' as const,
      text: [
        'A description of the market analysis, including the target market, customer and competition.',
        'Explains the marketing mix and provides the marketing strategy of the business.',
        'Guides businesses on how to advertise their products/services, and describes proposed prices.',
      ],
    },
    { id: 'p2x-bp2-mkt-research-h', type: 'heading' as const, level: 3 as const, text: 'Importance of Market Research' },
    {
      id: 'p2x-bp2-mkt-research-list',
      type: 'list' as const,
      text: [
        "A process to understand more about customers' needs.",
        'The target market refers to the people likely to buy the product or service offered.',
        'A business must research the target market: age group, gender, personality, income, and education.',
        'Methods include surveys, interviews, and questionnaires.',
        'Results indicate whether the target market shows interest in the proposed goods/services.',
      ],
    },
    { id: 'p2x-bp2-7p-h1', type: 'heading' as const, level: 2 as const, text: 'The Marketing Mix: the 7Ps' },
    {
      id: 'p2x-bp2-7p-intro',
      type: 'list' as const,
      text: [
        'A marketing mix is a combination of Product, Price, Place, Promotion, People, Process, and Physical environment — the 7Ps.',
        'There are four main elements (Product, Price, Place, Promotion) and three additional elements (People, Process, Physical environment).',
        'The 4Ps were extended to the 7Ps because of the growth of the service industry.',
        'Once the target market is identified, the business must work out the marketing mix that best satisfies its needs.',
      ],
    },
    { id: 'p2x-bp2-9-1-h', type: 'heading' as const, level: 3 as const, text: 'Product/Service' },
    {
      id: 'p2x-bp2-9-1-list',
      type: 'list' as const,
      text: ['A description of the product, appearance, and usage available to customers.', "The appearance must be different from competitors' products.", 'Packaging should project and preserve the product.'],
    },
    { id: 'p2x-bp2-9-2-h', type: 'heading' as const, level: 3 as const, text: 'Price' },
    {
      id: 'p2x-bp2-9-2-list',
      type: 'list' as const,
      text: ['The amount of money that must be paid by the consumer to obtain the product.', 'The pricing policy describes how price is used to attract customers; must cover costs and be affordable.', 'Cash or credit facilities may affect the attitude to price.'],
    },
    { id: 'p2x-bp2-9-3-h', type: 'heading' as const, level: 3 as const, text: 'Place/Distribution' },
    {
      id: 'p2x-bp2-9-3-list',
      type: 'list' as const,
      text: ['The location where goods and services are sold/accessed.', 'The business can sell directly to customers, or market through other businesses.'],
    },
    {
      id: 'p2x-bp2-9-3-channels',
      type: 'definitions' as const,
      rows: [
        { term: 'Direct selling', meaning: 'The manufacturer sells directly to consumers.' },
        { term: 'Door-to-door selling', meaning: 'Salespeople sell door to door, carrying little stock.' },
        { term: 'Mail order', meaning: 'Catalogues/advertisements invite consumers to order direct from the business.' },
        { term: 'Telephone sales', meaning: 'Employees phone members of the public to persuade them to buy.' },
        { term: 'Internet/online shopping', meaning: 'Customers order online and have goods delivered to their door.' },
      ],
    },
    { id: 'p2x-bp2-9-4-h', type: 'heading' as const, level: 3 as const, text: 'Promotion' },
    {
      id: 'p2x-bp2-9-4-list',
      type: 'list' as const,
      text: ['How the business makes its target market aware of its product/service; should communicate the benefits to customers.', 'Methods: radio/magazines/press/TV advertising, special offers, free samples, free gifts, direct mailing, online marketing, social media, public relations, brand awareness.'],
    },
    { id: 'p2x-bp2-9-5-h', type: 'heading' as const, level: 3 as const, text: 'People' },
    {
      id: 'p2x-bp2-9-5-list',
      type: 'list' as const,
      text: ['Employees, management, directors, and shareholders — all people involved in selling the products.', 'They affect the business with their knowledge, skills, and attitudes.'],
    },
    { id: 'p2x-bp2-9-6-h', type: 'heading' as const, level: 3 as const, text: 'Process' },
    {
      id: 'p2x-bp2-9-6-list',
      type: 'list' as const,
      text: ['Processes designed and implemented to ensure a pleasant shopping experience.', 'Includes systems so consumers do not wait long in queues, telephonic messages are dealt with, and emailed messages are read.'],
    },
    { id: 'p2x-bp2-9-7-h', type: 'heading' as const, level: 3 as const, text: 'Physical Environment' },
    {
      id: 'p2x-bp2-9-7-list',
      type: 'list' as const,
      text: ['The environment where goods/services are sold/rendered — appearance of the building and uniforms of employees.', 'Must be appropriate and make the customer feel comfortable; clean, functional facilities attract and retain customers.'],
    },
    { id: 'p2x-bp2-comp10-h1', type: 'heading' as const, level: 2 as const, text: 'Strategies to Overcome Competition in the Market' },
    {
      id: 'p2x-bp2-comp10-list',
      type: 'list' as const,
      text: [
        'Sell quality products and services; offer after-sales services.',
        'Charge reasonable prices; conduct intensive marketing campaigns; use clever advertising slogans.',
        'Make your product unique/differentiated; provide attractive product displays.',
        "Provide more personalised services, responsive to customers' needs/wants.",
        'Improve customer service and keep customers happy; create a positive outlook by regularly renovating premises.',
        'Offer low-cost extras such as improved credit terms/loyalty schemes.',
        'Ensure well-trained and dedicated employees who create a better working atmosphere.',
        'Create a positive image/publicity through regular community development projects.',
      ],
    },
    { id: 'p2x-bp2-fin-h1', type: 'heading' as const, level: 2 as const, text: 'The Financial Plan (Including a Balance Sheet)' },
    {
      id: 'p2x-bp2-fin-intro',
      type: 'list' as const,
      text: [
        "A detailed description of the entrepreneur's financial contribution, funding requirements, and projected cash flow statements for a three-year period.",
        'Purpose: to project/predict the profitability of the proposed business and how long until it starts to show a profit.',
      ],
    },
    {
      id: 'p2x-bp2-fin-elements-table',
      type: 'definitions' as const,
      rows: [
        { term: 'Budget', meaning: 'An estimation of revenue and expenses over a specified future period; a monthly indication of projected cash flow; helps control spending by comparing actual income/expenditure.' },
        { term: 'Cash flow statements (3-year period)', meaning: "Net amount of cash transferred into and out of a business's accounts; helps identify operational difficulties and the need for more finance." },
        { term: 'Income statement', meaning: 'A monthly account of sales and expenses, showing actual profits and/or losses.' },
        { term: 'Break-even point', meaning: 'The point at which profits equal expenses — neither profit nor loss. Shows how much must be sold to cover all expenses before making a profit.' },
        { term: 'Balance sheet', meaning: "Assets on one side, liabilities on the other — a list of all business assets, liabilities, and owners' equity at a specific point in time." },
      ],
    },
  ],
}
  ],
};
