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
      { id: 'vent-1', text: 'Sole trader & Partnerships', detail: 'Chapter 10, Part 1 — Forms of Ownership: characteristics, advantages and disadvantages of each.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch10', lessonId: 'bs-p2x-forms-part1' } },
      { id: 'vent-2', text: 'Co-operatives, Pvt vs personal liability & Public company', detail: 'Chapter 10, Part 2 — Forms of Ownership: what a co-operative is, the difference between a private company (Pty Ltd) and a personal liability company (Inc), and public companies — advantages and disadvantages of each.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch10', lessonId: 'bs-p2x-forms-part2' } },
      { id: 'vent-3', text: 'Presentation of business information', detail: 'Chapter 13 — appears three times on your scope sheet: writing reports, using graphs/diagrams, preparing a verbal presentation, choosing visual aids.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch13' } },
      { id: 'vent-4', text: 'SWOT', detail: 'Chapter 12 — compiling and applying a SWOT analysis to assess a business opportunity.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch12' } },
      { id: 'vent-5', text: 'Business plan (incl. essay, marketing + other)', detail: 'Chapter 14 — appears several times on your scope sheet, including the highlighted business-plan essay: components of a business plan and why it is needed, the marketing plan, market research, the marketing mix (7Ps), financial plan, legal requirements, and strategies to beat competition.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch14' } },
    ]),
    { id: 'bs-p2-ov-h2', type: 'heading' as const, level: 2 as const, text: 'Business Roles' },
    checklist('bs-p2-ov-roles', [
      { id: 'roles-1', text: 'Problem solving & decision making', detail: 'Chapter 11 — the meaning of problem-solving, how it differs from decision-making, and the full problem-solving cycle.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch11', lessonId: 'bs-p2x-problem-solving' } },
      { id: 'roles-2', text: 'Creative thinking (incl. entrepreneurial opportunities)', detail: 'Chapter 11 — appears several times on your scope sheet: the meaning and benefits of creative thinking, and how it is used to identify entrepreneurial/business opportunities.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch11', lessonId: 'bs-p2x-creative-thinking' } },
      { id: 'roles-3', text: 'Brainstorming, Delphi & application of techniques', detail: 'Chapter 11 — problem-solving techniques (brainstorming and the Delphi technique) and applying them to a business scenario.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch11', lessonId: 'bs-p2x-techniques' } },
      { id: 'roles-4', text: 'Social responsibility, CSR, Poverty & HIV', detail: 'Chapter 9 — the meaning of social responsibility and corporate social responsibility (CSR), and CSR initiatives for poverty/inequality, HIV/AIDS, unemployment, crime and gambling.', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch9' } },
      { id: 'roles-5', text: 'Interpersonal relationships & Relationship/Team Performance essay', detail: 'Chapter 15 — interpersonal relationships in the workplace, plus the HIGHLIGHTED essay topic: teamwork, factors influencing team relationships, and criteria for successful team performance (appears several times on your scope sheet).', goTo: { subjectId: 'business', chapterId: 'business-exam-p2-ch15' } },
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
