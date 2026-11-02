import type { Chapter, LessonBlock } from '@/lib/types';

/**
 * Business Studies — Exam Scope: Paper 2.
 *
 * Built directly from the student's own "TERM 4 - GR10-P2 - OUTLINE OF PAPER" scope
 * sheet (two sections: Business Ventures, Business Roles).
 *
 * Lesson 1 ("Overview") is the scope sheet itself, reproduced exactly, as a tickable
 * checklist with a jump button straight to the source chapter for each line. Every
 * other lesson extracts the ACTUAL study content for one scoped sub-topic, straight
 * from the full chapter it comes from. Nothing outside the scope sheet is included,
 * except where a concept is directly needed to understand a scoped item.
 */

const CH = 'business-exam-p2';

const checklist = (id: string, items: LessonBlock['checklistItems']): LessonBlock => ({
  id,
  type: 'checklist',
  checklistItems: items,
});

const OVERVIEW = {
  id: 'bs-p2-overview',
  chapterId: CH,
  subjectId: 'business' as const,
  title: 'Overview',
  minutes: 10,
  blocks: [
    { id: 'bs-p2-ov-h1', type: 'heading' as const, level: 2 as const, text: 'Business Ventures' },
    {
      id: 'bs-p2-ov-tip',
      type: 'callout' as const,
      text: 'This is your exact Paper 2 scope sheet, in order. Tick each line as you finish revising it — your progress is saved on this device. Tap "Chapter" to jump straight to the full chapter for that topic.',
    },
    checklist('bs-p2-ov-vent', [
      { id: 'vent-1', text: 'Co-operatives', detail: 'Chapter 10, Part 2 — Forms of Ownership: what a co-operative is, advantages and disadvantages.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch10' } },
      { id: 'vent-2', text: 'Sole trader', detail: 'Chapter 10, Part 1 — Forms of Ownership: characteristics, advantages and disadvantages.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch10' } },
      { id: 'vent-3', text: 'Pvt vs personal liability', detail: 'Chapter 10, Part 2 — the difference between a private company (Pty Ltd) and a personal liability company (Inc).', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch10' } },
      { id: 'vent-4', text: 'Presentation of business information — several things', detail: 'Chapter 13 — writing reports, using graphs/diagrams, preparing a verbal presentation, choosing visual aids.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch13' } },
      { id: 'vent-5', text: 'Presentation of business information — several things', detail: 'Chapter 13 — listed three times on your scope sheet.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch13' } },
      { id: 'vent-6', text: 'Presentation of business information — several things', detail: 'Chapter 13 — third mention; expect this tested from multiple angles.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch13' } },
      { id: 'vent-7', text: 'Business plan — several things', detail: 'Chapter 14 — components of a business plan and why it is needed.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch14' } },
      { id: 'vent-8', text: 'Partnerships', detail: 'Chapter 10, Part 1 — Forms of Ownership: characteristics, advantages and disadvantages of a partnership.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch10' } },
      { id: 'vent-9', text: 'Business plan', detail: 'Chapter 14 — the business plan again.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch14' } },
      { id: 'vent-10', text: 'SWOT', detail: 'Chapter 12 — compiling and applying a SWOT analysis to assess a business opportunity.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch12' } },
      { id: 'vent-11', text: 'Public company', detail: 'Chapter 10, Part 2 — Forms of Ownership: characteristics, advantages and disadvantages of a public company.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch10' } },
      { id: 'vent-12', text: 'Business plan — essay', detail: 'HIGHLIGHTED on the scope sheet — a full essay on the business plan, from Chapter 14.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch14' } },
      { id: 'vent-13', text: 'Marketing + other', detail: 'Chapter 14 — the marketing plan, market research and the marketing mix (7Ps).', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch14' } },
      { id: 'vent-14', text: 'Marketing + other', detail: 'Chapter 14 — remaining components of a business plan (financial plan, legal requirements, strategies to beat competition).', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch14' } },
      { id: 'vent-15', text: 'Marketing + other', detail: 'Chapter 14 — listed three times; expect this tested from multiple angles.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch14' } },
    ]),
    { id: 'bs-p2-ov-h2', type: 'heading' as const, level: 2 as const, text: 'Business Roles' },
    checklist('bs-p2-ov-roles', [
      { id: 'roles-1', text: 'Problem solving', detail: 'Chapter 11 — the meaning of problem-solving and how it differs from decision-making.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch11' } },
      { id: 'roles-2', text: 'Creative thinking — several things', detail: 'Chapter 11 — the meaning and benefits of creative thinking.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch11' } },
      { id: 'roles-3', text: 'Brainstorming, Delphi', detail: 'Chapter 11 — two problem-solving techniques: brainstorming and the Delphi technique.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch11' } },
      { id: 'roles-4', text: 'Application of techniques', detail: 'Chapter 11 — applying problem-solving techniques to a business scenario.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch11' } },
      { id: 'roles-5', text: 'Interpersonal relationships', detail: 'Chapter 15 — interpersonal relationships in the workplace and across levels of management.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch15' } },
      { id: 'roles-6', text: 'Social responsibility', detail: 'Chapter 9 — the meaning of social responsibility and corporate social responsibility (CSR).', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch9' } },
      { id: 'roles-7', text: 'Poverty', detail: 'Chapter 9 — poverty as a social responsibility issue and how businesses respond to it through CSR.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch9' } },
      { id: 'roles-8', text: 'Creative thinking', detail: 'Chapter 11 — repeated emphasis: define and apply creative thinking, not just list its benefits.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch11' } },
      { id: 'roles-9', text: 'Problem solving + decision making', detail: 'Chapter 11 — the full problem-solving cycle, and how problem-solving and decision-making relate.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch11' } },
      { id: 'roles-10', text: 'Creative thinking — entrepreneurial opportunities', detail: 'Chapter 11 — how creative thinking is used to identify entrepreneurial/business opportunities.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch11' } },
      { id: 'roles-11', text: 'CSR', detail: 'Chapter 9 — corporate social responsibility initiatives (poverty/inequality, HIV/AIDS, unemployment, crime, gambling).', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch9' } },
      { id: 'roles-12', text: 'HIV', detail: 'Chapter 9 — HIV/AIDS as a social responsibility issue and related CSR initiatives.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch9' } },
      { id: 'roles-13', text: 'Relationship and Team Performance — essay', detail: 'HIGHLIGHTED on the scope sheet — a full essay on interpersonal relationships, teamwork and successful team performance.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch15' } },
      { id: 'roles-14', text: 'Teamwork + environment + other', detail: 'Chapter 15 — benefits of teamwork and factors influencing team relationships.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch15' } },
      { id: 'roles-15', text: 'Teamwork + environment + other', detail: 'Chapter 15 — criteria for successful team performance.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch15' } },
      { id: 'roles-16', text: 'Teamwork + environment + other', detail: 'Chapter 15 — listed three times; expect this tested from multiple angles.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch15' } },
    ]),
  ],
};

export const BUSINESS_EXAM_PAPER_2: Chapter = {
  id: CH,
  subjectId: 'business',
  title: 'Exam Scope: Paper 2',
  summary: 'Everything on the Paper 2 scope sheet — Business Ventures and Business Roles — and nothing else. Tick off the Overview, then open each scope-only topic chapter below it.',
  paper: 2,
  category: 'Exam — Paper 2',
  lessons: [OVERVIEW],
};
