import type { Chapter } from '@/lib/types';

/**
 * Scope: SWOT Analysis — scope-only chapter for Paper 2.
 *
 * Contains ONLY the content on the student's Paper 2 exam-scope sheet for this
 * source chapter, extracted from the full chapter. Linked from the "Exam Scope:
 * Paper 2" Overview checklist so a student lands here, not in the full chapter.
 */

export const BUSINESS_EXAM_P2_CH12: Chapter = {
  id: 'business-exam-p2-ch12',
  subjectId: 'business',
  title: 'Scope: SWOT Analysis',
  summary: 'Only the content on your Paper 2 exam scope — nothing else.',
  paper: 2,
  hidden: true,
  lessons: [
{
  id: 'bs-p2x-swot',
  chapterId: 'business-exam-p2-ch12',
  subjectId: 'business' as const,
  title: 'Compiling a SWOT Analysis to Assess a Business Opportunity',
  minutes: 16,
  blocks: [
    { id: 'p2x-sw-h1', type: 'heading' as const, level: 2 as const, text: 'The Meaning of a SWOT Analysis' },
    {
      id: 'p2x-sw-meaning',
      type: 'list' as const,
      text: [
        'A SWOT analysis is a strategic tool that summarises a large amount of data into a user-friendly diagram.',
        'SWOT stands for Strengths, Weaknesses, Opportunities and Threats.',
        'Strengths and Weaknesses relate to internal factors, under the control of the business (micro-environment).',
        'Opportunities and Threats relate to external factors over which the business has little (market environment) or no control (macro-environment).',
        'It helps businesses make decisions by setting out information clearly, focusing only on important information.',
        'Entrepreneurs use a SWOT analysis to decide if their business idea is indeed a viable business opportunity.',
      ],
    },
    { id: 'p2x-sw-ex1-h', type: 'heading' as const, level: 3 as const, text: 'Example: SWOT Analysis — Selling Cakes at the School Market Day' },
    {
      id: 'p2x-sw-ex1',
      type: 'definitions' as const,
      rows: [
        { term: 'STRENGTHS (internal)', meaning: 'Easily available; can be made by learners; cheap to make; strong customer base; well-trained staff; adequate resources.' },
        { term: 'WEAKNESSES (internal)', meaning: 'Perishable; need careful handling; need hygienic storage/display; bad reputation; financial problems; lack of trained staff.' },
        { term: 'OPPORTUNITIES (external)', meaning: 'Strategic partnerships; possibility of obtaining tenders and contracts; new product and market development; appeals to most learners; cheap compared to other products.' },
        { term: 'THREATS (external)', meaning: 'Economic factors (e.g. high inflation); political factors (strikes, protests); environmental factors (climate change, pollution); legal factors (EEA, SDA, BBBEE); high competition; low profit margin.' },
      ],
    },
    { id: 'p2x-sw-ben-h', type: 'heading' as const, level: 3 as const, text: 'Benefits of a SWOT Analysis' },
    {
      id: 'p2x-sw-ben',
      type: 'list' as const,
      text: [
        'Not expensive to perform; a planning tool that helps a business make decisions.',
        'Gives a big picture of a business opportunity and helps focus on what is important.',
        'Does not take a lot of time — can be done quickly, with the analysis immediately available.',
        'Useful to find possible challenges in all three business environments.',
      ],
    },
    { id: 'p2x-sw-imp-h', type: 'heading' as const, level: 3 as const, text: 'The Importance of Conducting a SWOT Analysis' },
    {
      id: 'p2x-sw-imp',
      type: 'list' as const,
      text: [
        'A useful planning tool that helps people make decisions by setting out information clearly.',
        'Entrepreneurs use it when making decisions about the viability of a business opportunity.',
        'Useful to assess business opportunities because it assesses strengths and weaknesses.',
        'Helps business owners identify ways their business can grow, and identify potential threats.',
        'Can be used at any stage of development, or when the market environment changes, or when considering starting a new venture.',
      ],
    },
    { id: 'p2x-sw-lim-h', type: 'heading' as const, level: 3 as const, text: 'Limitations of a SWOT Analysis' },
    {
      id: 'p2x-sw-lim-intro',
      type: 'paragraph' as const,
      text: 'A SWOT analysis is only one stage of the business planning process. For complex issues, more in-depth research is usually needed. A SWOT analysis may be limited because it:',
    },
    {
      id: 'p2x-sw-lim',
      type: 'list' as const,
      text: [
        'Does not prioritise issues, and does not provide solutions or alternative decisions.',
        'Can generate too many ideas but not help you choose which one is best.',
        'Can produce a lot of information, but not all of it is useful.',
        'May cause businesses to overlook certain aspects of the business.',
      ],
    },
  ],
}
  ],
};
