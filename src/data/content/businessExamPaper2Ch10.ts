import type { Chapter } from '@/lib/types';

/**
 * Scope: Forms of Ownership — scope-only chapter for Paper 2.
 *
 * One chapter, grouped exactly as the student's scope sheet groups it:
 * - Chapter 10, Part 1 → Sole Trader + Partnerships (scope sheet: "sole trader —
 *   ch10-1", "partnerships — ch10-1").
 * - Chapter 10, Part 2 → Co-operatives + Private vs Personal Liability + Public
 *   Company (scope sheet: "co-operatives — ch10-2", "pvt vs personal liability —
 *   ch10-2", "public company — ch10-2").
 * Content in each lesson is word-for-word identical to the source chapter — only
 * the grouping/subtopic selection changed, nothing reworded or summarised.
 */

const CH10_PART1 = {
  id: 'bs-p2x-forms-part1',
  chapterId: 'business-exam-p2-ch10',
  subjectId: 'business' as const,
  title: 'Chapter 10, Part 1 — Sole Trader & Partnerships',
  minutes: 14,
  blocks: [
    { id: 'p2x-fo-h1', type: 'heading' as const, level: 2 as const, text: 'Sole Trader / Sole Proprietor' },
    {
      id: 'p2x-fo-sole-def',
      type: 'paragraph' as const,
      text: 'A sole trader is a business that is owned and managed by one person. The business owner handles everything including the activities of the business, its processes and decisions. It is most suitable for service businesses such as a doctor/hairdresser/electrician etc.',
    },
    { id: 'p2x-fo-sole-char-h', type: 'heading' as const, level: 3 as const, text: 'Characteristics' },
    {
      id: 'p2x-fo-sole-char',
      type: 'list' as const,
      text: [
        'Owner can sell the business to anyone at any time.',
        'No legal requirements regarding the name of the business, and it is easy to establish — no legal formalities.',
        'Not compelled by law to audit financial statements.',
        'The owner has unlimited liability / is personally liable for the debt of the business.',
        'Has limited capacity for expansion and lacks continuity of existence — the business dissolves when the owner dies.',
        'The owner provides capital from his/her savings or borrows money from the bank.',
        "Profit is added to the rest of the owner's taxable income.",
        'There are no special requirements when the owner wants to close the business.',
      ],
    },
    { id: 'p2x-fo-sole-adv-h', type: 'heading' as const, level: 3 as const, text: 'Advantages' },
    {
      id: 'p2x-fo-sole-adv',
      type: 'list' as const,
      text: [
        'Easy and quick to form — less capital needed, no legal process/requirements.',
        'The owner can take quick decisions as and when required and has full control.',
        'The owner takes all of the profits made and is entitled to ownership of assets.',
        'Personal encouragement and personal contact between owner and customers; more personalised approach and improved customer service.',
      ],
    },
    { id: 'p2x-fo-sole-dis-h', type: 'heading' as const, level: 3 as const, text: 'Disadvantages' },
    {
      id: 'p2x-fo-sole-dis',
      type: 'list' as const,
      text: [
        'Growth is limited to the management abilities of the owner, and is restricted by lack of capital.',
        'Unlimited liability — the owner is personally liable for all debts and losses.',
        'Lacks continuity, especially in the event of death or illness.',
        'Not always possible to attract highly skilled workers because capital is limited to one person.',
        'Tax is calculated according to a progressive income system, up to a maximum of 40%.',
      ],
    },
    { id: 'p2x-fo-part-h1', type: 'heading' as const, level: 2 as const, text: 'Partnership' },
    {
      id: 'p2x-fo-part-def',
      type: 'paragraph' as const,
      text: 'A partnership is an agreement between two or more people who combine labour, capital and resources towards a common goal. Partners share the responsibility of the business and share the financial and management decisions.',
    },
    { id: 'p2x-fo-part-char-h', type: 'heading' as const, level: 3 as const, text: 'Characteristics' },
    {
      id: 'p2x-fo-part-char',
      type: 'list' as const,
      text: [
        'At least a minimum of two people, bound by a written partnership agreement (no other legal formalities to start).',
        'Partners combine capital and may also borrow capital from financial institutions.',
        'Profit is shared according to the partnership agreement; partners share responsibility and decision making.',
        'Partners have unlimited liability and are jointly and severally liable for the debts of the business.',
        'No legal personality and therefore no continuity.',
        'The partnership does not pay income tax; only the partners in their personal capacities do.',
        'Auditing of financial statements is optional.',
      ],
    },
    { id: 'p2x-fo-part-adv-h', type: 'heading' as const, level: 3 as const, text: 'Advantages' },
    {
      id: 'p2x-fo-part-adv',
      type: 'list' as const,
      text: [
        'Each partner brings knowledge, skills, experience and contacts, giving the business a better chance to succeed.',
        'Workload and responsibility are shared; each partner can focus on their own strengths.',
        'Partners invest new capital to finance expansion; raising capital is easier since there is no limit on the number of partners.',
        'Easy and inexpensive to establish; not compelled by law to prepare audited financial statements.',
        'Partners share profits and are therefore motivated to work hard.',
      ],
    },
    { id: 'p2x-fo-part-dis-h', type: 'heading' as const, level: 3 as const, text: 'Disadvantages' },
    {
      id: 'p2x-fo-part-dis',
      type: 'list' as const,
      text: [
        'Partners might not all contribute equally, and may still find it difficult to raise capital.',
        'Partners are jointly and severally liable for the actions of the other partners — unlimited liability, risking personal possessions.',
        'Lacks continuity — if one partner dies/retires, remaining partners need a new agreement.',
        'Different personalities and opinions can lead to conflict; discussion can slow down decision making.',
        'Changes or transfer of ownership can be difficult and generally require a new partnership.',
      ],
    },
    { id: 'p2x-fo-diff-h', type: 'heading' as const, level: 3 as const, text: 'Sole Trader vs Partnership' },
    {
      id: 'p2x-fo-diff-table',
      type: 'definitions' as const,
      rows: [
        { term: 'Sole trader — ownership', meaning: 'Owned and managed by one person.' },
        { term: 'Partnership — ownership', meaning: 'An agreement between two or more people combining labour, capital and resources.' },
        { term: 'Sole trader — decisions', meaning: 'Quick and easy decisions, taken by one person.' },
        { term: 'Partnership — decisions', meaning: 'Discussion between partners can slow decisions, and they may disagree.' },
        { term: 'Sole trader — profit', meaning: 'The profit goes to the owner.' },
        { term: 'Partnership — profit', meaning: 'Shared amongst partners according to the partnership agreement.' },
      ],
    },
  ],
};

const CH10_PART2 = {
  id: 'bs-p2x-forms-part2',
  chapterId: 'business-exam-p2-ch10',
  subjectId: 'business' as const,
  title: 'Chapter 10, Part 2 — Co-operatives, Private vs Personal Liability & Public Company',
  minutes: 20,
  blocks: [
    { id: 'p2x-fo-pc-h1', type: 'heading' as const, level: 2 as const, text: 'Private Company (Pty Ltd)' },
    {
      id: 'p2x-fo-pc-def',
      type: 'paragraph' as const,
      text: 'A private company is a company whose shares may not be offered to the public for sale. It has one or more shareholders and one or more directors.',
    },
    { id: 'p2x-fo-pc-char-h', type: 'heading' as const, level: 3 as const, text: 'Characteristics' },
    {
      id: 'p2x-fo-pc-char',
      type: 'list' as const,
      text: [
        'Unlimited number of shareholders; minimum of one director and one shareholder.',
        'Name must end with "(Proprietary) Limited" or "(Pty) Ltd". Not allowed to sell shares to the public.',
        'Shareholders have limited liability and a separate legal entity; company has unlimited continuity.',
        'Profits shared as dividends, in proportion to shares held.',
        'Register with the Registrar of Companies by drawing up a Memorandum of Incorporation.',
        'Must prepare annual financial statements; need not be audited or independently reviewed.',
      ],
    },
    { id: 'p2x-fo-pc-adv-h', type: 'heading' as const, level: 3 as const, text: 'Advantages' },
    {
      id: 'p2x-fo-pc-adv',
      type: 'list' as const,
      text: [
        'Continues to trade even if a shareholder dies/resigns; unlimited number of shareholders, perpetual life span.',
        'Own legal identity — shareholders have limited liability.',
        'A large amount of capital can be raised since there is no limit on the number of shareholders.',
        'Information is only available to shareholders (more privacy than a public company).',
      ],
    },
    { id: 'p2x-fo-pc-dis-h', type: 'heading' as const, level: 3 as const, text: 'Disadvantages' },
    {
      id: 'p2x-fo-pc-dis',
      type: 'list' as const,
      text: [
        'Difficult and expensive to establish compared to a sole trader; subject to many legal requirements.',
        'Cannot be listed on the stock exchange, so cannot sell shares to the public.',
        'Pays tax on profits and on declared dividends / subject to double taxation.',
        'Annual financial statements must be reviewed by a qualified person — extra expense.',
      ],
    },

    { id: 'p2x-fo-plc-h1', type: 'heading' as const, level: 2 as const, text: 'Personal Liability Company (INC)' },
    {
      id: 'p2x-fo-plc-def',
      type: 'paragraph' as const,
      text: 'A personal liability company is very similar to a private company, except that the present and past directors are personally responsible for any debts of the business. The name of a personal liability company ends in INC, while a private company ends in (Pty) Ltd.',
    },
    {
      id: 'p2x-fo-plc-char',
      type: 'list' as const,
      text: [
        'At least one director; the company name must end with the letters INC.',
        'Directors have unlimited liability — jointly liable for the debts of the business, even long after leaving office.',
        'The Memorandum of Incorporation must state it is a personal liability company.',
      ],
    },
    {
      id: 'p2x-fo-plc-note',
      type: 'paragraph' as const,
      text: 'Other characteristics of a personal liability company are the same as a private company except for the two above. Its advantages are the same as a private company; its disadvantages are also the same, except that directors have unlimited liability (not limited).',
    },
    {
      id: 'p2x-fo-pc-plc-table',
      type: 'definitions' as const,
      rows: [
        { term: 'Private company — name', meaning: 'The name ends with "(Pty) Ltd".' },
        { term: 'Personal liability company — name', meaning: 'The name ends with "INC".' },
        { term: 'Private company — liability', meaning: 'Directors are NOT personally liable for the debts of the business.' },
        { term: 'Personal liability company — liability', meaning: 'Directors ARE personally liable for the debts of the business.' },
      ],
    },

    { id: 'p2x-fo-pub-h1', type: 'heading' as const, level: 2 as const, text: 'Public Company (Ltd)' },
    {
      id: 'p2x-fo-pub-def',
      type: 'paragraph' as const,
      text: 'A public company is a company that is registered to offer its stock/shares to the general public, mostly through the Johannesburg Securities/Stock Exchange (JSE). It is designed for large-scale operations that require large capital investments.',
    },
    { id: 'p2x-fo-pub-char-h', type: 'heading' as const, level: 3 as const, text: 'Characteristics' },
    {
      id: 'p2x-fo-pub-char',
      type: 'list' as const,
      text: [
        'Name ends with the letters Ltd; requires three or more directors and three or more shareholders.',
        'Shareholders have limited liability; a prospectus is issued to the public to raise capital.',
        'Has legal personality and unlimited continuity; required to hold an AGM.',
        'Raises capital by issuing shares to the public and borrowing by issuing a debenture.',
        'Auditing of financial statements is compulsory; audited statements are available to shareholders and the public.',
      ],
    },
    { id: 'p2x-fo-pub-adv-h', type: 'heading' as const, level: 3 as const, text: 'Advantages' },
    {
      id: 'p2x-fo-pub-adv',
      type: 'list' as const,
      text: [
        'Own legal identity, can own assets/property; raises funds through the sale of stock to the public.',
        'Shareholders can sell/transfer shares freely; attracts small investors.',
        'Managed by at least three competent, highly skilled directors who bring creative ideas.',
        'No limitation on the number of shareholders, so growth/expansion is not limited.',
        'Shareholders have limited liability — may only lose the amount invested.',
      ],
    },
    { id: 'p2x-fo-pub-dis-h', type: 'heading' as const, level: 3 as const, text: 'Disadvantages' },
    {
      id: 'p2x-fo-pub-dis',
      type: 'list' as const,
      text: [
        'Difficult and expensive to establish — subject to many legal requirements.',
        'Must disclose all financial information, which competitors can use.',
        'Vulnerable to increased scrutiny from government and the public; large amounts spent on financial audits.',
        "Directors' fees increase expenses, reducing net profit; large management structures slow decision-making.",
      ],
    },
    { id: 'p2x-fo-priv-pub-table-h', type: 'heading' as const, level: 3 as const, text: 'Private Company vs Public Company' },
    {
      id: 'p2x-fo-priv-pub-table',
      type: 'definitions' as const,
      rows: [
        { term: 'Private company — public shares', meaning: 'May not offer shares to the general public.' },
        { term: 'Public company — public shares', meaning: 'Trades its shares publicly on the JSE.' },
        { term: 'Private company — transferability', meaning: 'Shares are not freely transferable.' },
        { term: 'Public company — transferability', meaning: 'Shares are freely transferable.' },
        { term: 'Private company — directors', meaning: 'Minimum of one director.' },
        { term: 'Public company — directors', meaning: 'Minimum of three directors.' },
        { term: 'Private company — name', meaning: 'Ends with "(Pty) Ltd".' },
        { term: 'Public company — name', meaning: 'Ends with "Ltd".' },
        { term: 'Private company — audit', meaning: 'Annual financial statements need not be audited and published.' },
        { term: 'Public company — audit', meaning: 'Annual financial statements must be audited and published.' },
        { term: 'Private company — prospectus', meaning: 'Does not need to publish a prospectus.' },
        { term: 'Public company — prospectus', meaning: 'Must register and publish a prospectus with the CIPC.' },
      ],
    },

    { id: 'p2x-fo-coop-h1', type: 'heading' as const, level: 2 as const, text: 'Co-operatives' },
    {
      id: 'p2x-fo-coop-def',
      type: 'paragraph' as const,
      text: 'A co-operative is a traditional way for a group of interested parties to get together and share resources/infrastructure and costs to achieve a better outcome. A co-operative society is a voluntary association established with the aim of service to its members.',
    },
    { id: 'p2x-fo-coop-types-h', type: 'heading' as const, level: 3 as const, text: 'Types of Co-operatives' },
    {
      id: 'p2x-fo-coop-types',
      type: 'list' as const,
      text: [
        'Housing co-operative', 'Worker co-operative', 'Social co-operative', 'Agricultural co-operative',
        'Co-operative burial society', 'Financial services co-operative', 'Consumer co-operative', 'Transport co-operative',
      ],
    },
    { id: 'p2x-fo-coop-char-h', type: 'heading' as const, level: 3 as const, text: 'Characteristics' },
    {
      id: 'p2x-fo-coop-char',
      type: 'list' as const,
      text: [
        'A minimum of five members is required; managed by a minimum of three directors.',
        'The words "Co-operative Limited" must appear at the end of its name.',
        'Motivated by service rather than profit; democratic structure — each member has ONE vote.',
        'Members own and run the business together and share equally in its profits.',
        'Legal entity — can own land and open bank accounts; must register with the Registrar of Co-operative Societies.',
        'The objective is to create mutual benefit for the members.',
      ],
    },
    { id: 'p2x-fo-coop-adv-h', type: 'heading' as const, level: 3 as const, text: 'Advantages' },
    {
      id: 'p2x-fo-coop-adv',
      type: 'list' as const,
      text: [
        'Access to resources and funding; decisions are democratic and fair.',
        'Members have limited liability and continuity of existence.',
        'Profits shared equally amongst members, who are motivated because they work for themselves.',
        'Can gain extra capital by asking members to buy shares.',
      ],
    },
    { id: 'p2x-fo-coop-dis-h', type: 'heading' as const, level: 3 as const, text: 'Disadvantages' },
    {
      id: 'p2x-fo-coop-dis',
      type: 'list' as const,
      text: [
        'Difficult to grow; shares are not freely transferable; very few promotion positions.',
        'Decisions are often difficult to reach and time-consuming.',
        'Difficult to get a loan because the main objective is not always to make a profit.',
        'Success depends on the support of the members; all members have one vote regardless of shares held.',
      ],
    },
  ],
};

export const BUSINESS_EXAM_P2_CH10: Chapter = {
  id: 'business-exam-p2-ch10',
  subjectId: 'business',
  title: 'Scope: Forms of Ownership',
  summary: 'Only the content on your Paper 2 exam scope, grouped exactly as the scope sheet groups it — Part 1 (Sole Trader & Partnerships) and Part 2 (Co-operatives, Private vs Personal Liability & Public Company).',
  paper: 2,
  hidden: true,
  lessons: [CH10_PART1, CH10_PART2],
};
