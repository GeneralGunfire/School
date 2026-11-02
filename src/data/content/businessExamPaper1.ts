import type { Chapter, LessonBlock } from '@/lib/types';

/**
 * Business Studies — Exam Scope: Paper 1.
 *
 * Built directly from the student's own "BS GR10 P1" scope outline (two sections:
 * Business Environments, Business Operations).
 *
 * Lesson 1 ("Overview") is the scope sheet itself, reproduced exactly, as a tickable
 * checklist with a jump button straight to the source chapter for each line. Every
 * other lesson extracts the ACTUAL study content for one scoped sub-topic, straight
 * from the full chapter it comes from — not just a pointer to it — so a student can
 * revise end-to-end from this one topic. Nothing outside the scope sheet is included,
 * except where a concept is directly needed to understand a scoped item.
 */

const CH = 'business-exam-p1';

const checklist = (id: string, items: LessonBlock['checklistItems']): LessonBlock => ({
  id,
  type: 'checklist',
  checklistItems: items,
});

const OVERVIEW = {
  id: 'bs-p1-overview',
  chapterId: CH,
  subjectId: 'business' as const,
  title: 'Overview',
  minutes: 10,
  blocks: [
    { id: 'bs-p1-ov-h1', type: 'heading' as const, level: 2 as const, text: 'Business Environments' },
    {
      id: 'bs-p1-ov-tip',
      type: 'callout' as const,
      text: 'This is your exact Paper 1 scope sheet, in order. Tick each line as you finish revising it — your progress is saved on this device. Tap "Chapter" to jump straight to the full chapter for that topic.',
    },
    checklist('bs-p1-ov-env', [
      { id: 'env-1', text: 'Micro-environment', detail: 'Chapter 1 — what the micro-environment is, and that the business has full/complete control over it.', goTo: { subjectId: 'business', chapterId: 'business-exam-p1-ch1' } },
      { id: 'env-2', text: 'Organisational structure', detail: 'Chapter 1 — types of organisational structure and how they affect how a business is run.', goTo: { subjectId: 'business', chapterId: 'business-exam-p1-ch1' } },
      { id: 'env-3', text: 'Organisational resources', detail: 'Chapter 1 — the resources (human, physical, financial, intellectual) a business uses to function.', goTo: { subjectId: 'business', chapterId: 'business-exam-p1-ch1' } },
      { id: 'env-4', text: 'Market environment (2 ASPECTS WILL BE ASKED)', detail: 'Chapter 4 — know customers, suppliers, intermediaries, competitors, and other organisations/civil society; be ready to apply any two.', goTo: { subjectId: 'business', chapterId: 'business-exam-p1-ch4' } },
      { id: 'env-5', text: 'Market environment (2 ASPECTS WILL BE ASKED)', detail: 'Chapter 4 — listed twice on the scope sheet; expect this tested from more than one angle.', goTo: { subjectId: 'business', chapterId: 'business-exam-p1-ch4' } },
      { id: 'env-6', text: 'Inclusivity', detail: 'Chapter 8, Part 1 — what inclusivity means in a business context and why it matters.', goTo: { subjectId: 'business', chapterId: 'business-exam-p1-ch8' } },
      { id: 'env-7', text: 'Crime', detail: 'Chapter 8, Part 2 — crime as a contemporary socio-economic issue and its effect on business.', goTo: { subjectId: 'business', chapterId: 'business-exam-p1-ch8' } },
      { id: 'env-8', text: 'SWOT', detail: 'Chapter 4 — Strengths, Weaknesses, Opportunities, Threats, used to assess the market environment.', goTo: { subjectId: 'business', chapterId: 'business-exam-p1-ch4' } },
      { id: 'env-9', text: 'Macro-environment', detail: 'Chapter 5 — components: economic, technological, legal, international/global, physical/natural, socio-cultural, political/institutional.', goTo: { subjectId: 'business', chapterId: 'business-exam-p1-ch5' } },
      { id: 'env-10', text: 'Socio-economic issues (general)', detail: 'Chapter 8, Part 2 — the general contemporary socio-economic issues covered in the chapter.', goTo: { subjectId: 'business', chapterId: 'business-exam-p1-ch8' } },
      { id: 'env-11', text: 'HIV', detail: 'Chapter 8, Part 2 — HIV/AIDS as a socio-economic issue affecting business.', goTo: { subjectId: 'business', chapterId: 'business-exam-p1-ch8' } },
      { id: 'env-12', text: 'Relationship between environments', detail: 'Chapter 6 — how the micro-, market- and macro-environments interrelate and affect one another.', goTo: { subjectId: 'business', chapterId: 'business-exam-p1-ch6' } },
      { id: 'env-13', text: 'Chapter 7 essay', detail: 'HIGHLIGHTED on the scope sheet — a full essay on Business Sectors (primary/secondary/tertiary, formal/informal, public/private).', goTo: { subjectId: 'business', chapterId: 'business-exam-p1-ch7' } },
    ]),
    { id: 'bs-p1-ov-h2', type: 'heading' as const, level: 2 as const, text: 'Business Operations' },
    checklist('bs-p1-ov-ops', [
      { id: 'ops-1', text: 'Organisational structure', detail: 'Chapter 2 — organisational structures and levels of management (links back to Chapter 1).', goTo: { subjectId: 'business', chapterId: 'business-exam-p1-ch2' } },
      { id: 'ops-2', text: 'NCA — consumer rights', detail: 'Chapter 2 — the National Credit Act: what it protects, and the rights it gives consumers.', goTo: { subjectId: 'business', chapterId: 'business-exam-p1-ch2' } },
      { id: 'ops-3', text: 'PR', detail: 'Chapter 2 — the Public Relations function: its purpose and activities.', goTo: { subjectId: 'business', chapterId: 'business-exam-p1-ch2' } },
      { id: 'ops-4', text: 'Management', detail: 'Chapter 2 — general management and the management functions (planning, organising, leading, controlling).', goTo: { subjectId: 'business', chapterId: 'business-exam-p1-ch2' } },
      { id: 'ops-5', text: 'Stock control', detail: 'Chapter 2 — stock control methods within the Purchasing function.', goTo: { subjectId: 'business', chapterId: 'business-exam-p1-ch2' } },
      { id: 'ops-6', text: 'Fixed and working capital', detail: 'Chapter 2 — the Financial function: fixed capital vs working capital.', goTo: { subjectId: 'business', chapterId: 'business-exam-p1-ch2' } },
      { id: 'ops-7', text: 'CPA', detail: 'Chapter 2 — the Consumer Protection Act: what it protects, and consumer rights under it.', goTo: { subjectId: 'business', chapterId: 'business-exam-p1-ch2' } },
      { id: 'ops-8', text: 'Quality control, assurance (Ch 3)', detail: 'Chapter 3 — the difference between quality control and quality assurance.', goTo: { subjectId: 'business', chapterId: 'business-exam-p1-ch3' } },
      { id: 'ops-9', text: 'Credit purch', detail: 'Chapter 2 — buying on credit: the purchasing procedure.', goTo: { subjectId: 'business', chapterId: 'business-exam-p1-ch2' } },
      { id: 'ops-10', text: 'Credit purch', detail: 'Chapter 2 — listed twice on the scope sheet: also know the advantages/disadvantages of credit purchases vs cash.', goTo: { subjectId: 'business', chapterId: 'business-exam-p1-ch2' } },
      { id: 'ops-11', text: 'Credit providers', detail: 'Chapter 2 — types of credit providers (banks, micro-lenders, retailers) and how they are regulated under the NCA.', goTo: { subjectId: 'business', chapterId: 'business-exam-p1-ch2' } },
      { id: 'ops-12', text: 'Ch 3 Part 2 essay', detail: 'HIGHLIGHTED on the scope sheet — a full essay on quality indicators across the business functions (HR, Administration, Financial, General Management).', goTo: { subjectId: 'business', chapterId: 'business-exam-p1-ch3' } },
    ]),
  ],
};

export const BUSINESS_EXAM_PAPER_1: Chapter = {
  id: CH,
  subjectId: 'business',
  title: 'Exam Scope: Paper 1',
  summary: 'Everything on the Paper 1 scope sheet — Business Environments and Business Operations — and nothing else. Tick off the Overview as you revise, then study each scope-only topic chapter in full.',
  paper: 1,
  category: 'Exam — Paper 1',
  lessons: [OVERVIEW],
};
