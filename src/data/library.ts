import type { Chapter, Lesson, SubjectId } from '@/lib/types';
import { DIE_KIND_CHAPTER } from './content/dieKind';
import { DIE_KIND_BOEK } from './content/dieKindBoek';
import { AFRIKAANS_WRITING_CHAPTER } from './content/afrikaansWriting';
import { BUSINESS_CHAPTER_1 } from './content/businessChapter1';
import { BUSINESS_CHAPTER_2 } from './content/businessChapter2';
import { BUSINESS_CHAPTER_3 } from './content/businessChapter3';
import { BUSINESS_CHAPTER_4 } from './content/businessChapter4';
import { BUSINESS_CHAPTER_5 } from './content/businessChapter5';
import { BUSINESS_CHAPTER_6 } from './content/businessChapter6';
import { BUSINESS_CHAPTER_7 } from './content/businessChapter7';
import { BUSINESS_CHAPTER_8 } from './content/businessChapter8';
import { BUSINESS_CHAPTER_9 } from './content/businessChapter9';
import { BUSINESS_CHAPTER_10 } from './content/businessChapter10';
import { BUSINESS_CHAPTER_11 } from './content/businessChapter11';
import { BUSINESS_CHAPTER_12 } from './content/businessChapter12';
import { BUSINESS_CHAPTER_13 } from './content/businessChapter13';
import { BUSINESS_CHAPTER_14 } from './content/businessChapter14';
import { BUSINESS_CHAPTER_15 } from './content/businessChapter15';
import { BUSINESS_EXAM_PAPER_1 } from './content/businessExamPaper1';
import { BUSINESS_EXAM_P1_CH1 } from './content/businessExamPaper1Ch1';
import { BUSINESS_EXAM_P1_CH2 } from './content/businessExamPaper1Ch2';
import { BUSINESS_EXAM_P1_CH3 } from './content/businessExamPaper1Ch3';
import { BUSINESS_EXAM_P1_CH4 } from './content/businessExamPaper1Ch4';
import { BUSINESS_EXAM_P1_CH5 } from './content/businessExamPaper1Ch5';
import { BUSINESS_EXAM_P1_CH6 } from './content/businessExamPaper1Ch6';
import { BUSINESS_EXAM_P1_CH7 } from './content/businessExamPaper1Ch7';
import { BUSINESS_EXAM_P1_CH8 } from './content/businessExamPaper1Ch8';
import { BUSINESS_EXAM_PAPER_2 } from './content/businessExamPaper2';
import { BUSINESS_EXAM_P2_CH9 } from './content/businessExamPaper2Ch9';
import { BUSINESS_EXAM_P2_CH10 } from './content/businessExamPaper2Ch10';
import { BUSINESS_EXAM_P2_CH11 } from './content/businessExamPaper2Ch11';
import { BUSINESS_EXAM_P2_CH12 } from './content/businessExamPaper2Ch12';
import { BUSINESS_EXAM_P2_CH13 } from './content/businessExamPaper2Ch13';
import { BUSINESS_EXAM_P2_CH14 } from './content/businessExamPaper2Ch14';
import { BUSINESS_EXAM_P2_CH15 } from './content/businessExamPaper2Ch15';
import { LO_CHAPTER_1 } from './content/loChapter1';
import { LO_CHAPTER_2 } from './content/loChapter2';
import { LO_CHAPTER_3 } from './content/loChapter3';
import { LO_CHAPTER_4 } from './content/loChapter4';
import { LO_CHAPTER_5 } from './content/loChapter5';
import { LO_PAST_PAPER_1 } from './content/loPastPaper1';
import { LO_PAST_PAPER_2 } from './content/loPastPaper2';
import { LO_PRACTICE_PAPER_1 } from './content/loPractice1';
import { LO_PRACTICE_PAPER_2 } from './content/loPractice2';
import { LO_EXAM_SCOPE_NOV } from './content/loExamScopeNov';
import { LO_EXAM_SCOPE_MOCK } from './content/loExamScopeMock';
import { LO_EXAM_SCOPE_PRACTICE_2 } from './content/loExamScopePractice2';
import { LO_EXAM_SCOPE_PRACTICE_3 } from './content/loExamScopePractice3';
import { LO_EXAM_SCOPE_PRACTICE_4 } from './content/loExamScopePractice4';
import { ENGLISH_GRAMMAR_CHAPTER } from './content/englishGrammar';
import { ENGLISH_POETRY_CHAPTER } from './content/englishPoetry';
import { ENGLISH_WRITING_CHAPTER } from './content/englishWriting';
import { ENGLISH_PAPER1_EXEMPLAR } from './content/englishPaper1Exemplar';
import { ROMEO_JULIET_CHAPTER } from './content/romeoE';
import {
  HISTORY_BRITAIN_CAPE,
  HISTORY_HIGHVELD,
  HISTORY_SA_WAR,
  HISTORY_LAND_ACT,
} from './content/history';
import { HISTORY_ESSAYS_CHAPTER } from './content/historyEssays';
import { HISTORY_ESSAYS_2_CHAPTER } from './content/historyEssays2';
import {
  GEOM_ANALYTICAL,
  GEOM_TRIGONOMETRY,
  GEOM_EUCLIDEAN,
  GEOM_MEASUREMENTS,
  GEOM_STATISTICS,
  GEOM_REVISION,
} from './content/mathGeometry';
import {
  MATH_EXPONENTS_SURDS,
  MATH_NUMBER_PATTERNS,
  MATH_ALGEBRA_FACTORISATION,
  MATH_ALGEBRA_EQUATIONS,
  MATH_FUNCTIONS_PARABOLA,
  MATH_FUNCTIONS_HYPERBOLA,
  MATH_FUNCTIONS_EXPONENTIAL,
  MATH_FUNCTIONS_MIXED,
  MATH_FUNCTIONS_TRIALS,
  MATH_ALGEBRA_REVISION,
  MATH_QUADRATIC_EQUATIONS,
  MATH_FINANCE,
  MATH_PROBABILITY,
} from './content/mathAlgebra';
import { PHYSICAL_SCIENCES_PAPER1 } from './content/physicalSciencesPaper1';
import { CHEMISTRY_PAPER1 } from './content/chemistryPaper1';
import { PHYSICS_FULL } from './content/physicsFull';
import { PHYSICS_CONDENSED } from './content/physicsCondensed';
import { PHYSICS_KEY_POINTS } from './content/physicsKeyPoints';
import { PHYSICS_SCOPE } from './content/physicsScope';
import { ALGEBRA_SCOPE, GEOMETRY_SCOPE } from './content/mathScope';
import { ALGEBRA_PRACTICE_PAPER, GEOMETRY_PRACTICE_PAPER } from './content/mathPracticePapers';

/**
 * Library content.
 *
 * Only authored content lives here. Afrikaans carries the Die Kind chapter;
 * every other subject is intentionally empty rather than filled with
 * placeholder lessons — an empty subject states honestly that nothing is
 * written yet, where a generated outline would imply content that does not
 * exist.
 *
 * To add a subject: write a `Chapter[]` and push it into `CHAPTERS` below,
 * exactly as Afrikaans does.
 */

export const CHAPTERS: Chapter[] = [
  DIE_KIND_CHAPTER,
  DIE_KIND_BOEK,
  AFRIKAANS_WRITING_CHAPTER,
  BUSINESS_EXAM_PAPER_1,
  BUSINESS_EXAM_P1_CH1,
  BUSINESS_EXAM_P1_CH2,
  BUSINESS_EXAM_P1_CH3,
  BUSINESS_EXAM_P1_CH4,
  BUSINESS_EXAM_P1_CH5,
  BUSINESS_EXAM_P1_CH6,
  BUSINESS_EXAM_P1_CH7,
  BUSINESS_EXAM_P1_CH8,
  BUSINESS_EXAM_PAPER_2,
  BUSINESS_EXAM_P2_CH9,
  BUSINESS_EXAM_P2_CH10,
  BUSINESS_EXAM_P2_CH11,
  BUSINESS_EXAM_P2_CH12,
  BUSINESS_EXAM_P2_CH13,
  BUSINESS_EXAM_P2_CH14,
  BUSINESS_EXAM_P2_CH15,
  BUSINESS_CHAPTER_1,
  BUSINESS_CHAPTER_2,
  BUSINESS_CHAPTER_3,
  BUSINESS_CHAPTER_4,
  BUSINESS_CHAPTER_5,
  BUSINESS_CHAPTER_6,
  BUSINESS_CHAPTER_7,
  BUSINESS_CHAPTER_8,
  BUSINESS_CHAPTER_9,
  BUSINESS_CHAPTER_10,
  BUSINESS_CHAPTER_11,
  BUSINESS_CHAPTER_12,
  BUSINESS_CHAPTER_13,
  BUSINESS_CHAPTER_14,
  BUSINESS_CHAPTER_15,
  LO_CHAPTER_1,
  LO_CHAPTER_2,
  LO_CHAPTER_3,
  LO_CHAPTER_4,
  LO_CHAPTER_5,
  LO_PAST_PAPER_1,
  LO_PAST_PAPER_2,
  LO_PRACTICE_PAPER_1,
  LO_PRACTICE_PAPER_2,
  LO_EXAM_SCOPE_NOV,
  LO_EXAM_SCOPE_MOCK,
  LO_EXAM_SCOPE_PRACTICE_2,
  LO_EXAM_SCOPE_PRACTICE_3,
  LO_EXAM_SCOPE_PRACTICE_4,
  ENGLISH_GRAMMAR_CHAPTER,
  ENGLISH_POETRY_CHAPTER,
  ENGLISH_WRITING_CHAPTER,
  ENGLISH_PAPER1_EXEMPLAR,
  ROMEO_JULIET_CHAPTER,
  HISTORY_BRITAIN_CAPE,
  HISTORY_HIGHVELD,
  HISTORY_SA_WAR,
  HISTORY_LAND_ACT,
  HISTORY_ESSAYS_CHAPTER,
  HISTORY_ESSAYS_2_CHAPTER,
  MATH_ALGEBRA_EQUATIONS,
  MATH_EXPONENTS_SURDS,
  MATH_NUMBER_PATTERNS,
  MATH_ALGEBRA_FACTORISATION,
  MATH_QUADRATIC_EQUATIONS,
  MATH_FUNCTIONS_PARABOLA,
  MATH_FUNCTIONS_HYPERBOLA,
  MATH_FUNCTIONS_EXPONENTIAL,
  MATH_FUNCTIONS_MIXED,
  MATH_FUNCTIONS_TRIALS,
  MATH_ALGEBRA_REVISION,
  MATH_FINANCE,
  MATH_PROBABILITY,
  ALGEBRA_SCOPE,
  ALGEBRA_PRACTICE_PAPER,
  GEOM_ANALYTICAL,
  GEOM_TRIGONOMETRY,
  GEOM_EUCLIDEAN,
  GEOM_MEASUREMENTS,
  GEOM_STATISTICS,
  GEOM_REVISION,
  GEOMETRY_SCOPE,
  GEOMETRY_PRACTICE_PAPER,
  PHYSICAL_SCIENCES_PAPER1,
  PHYSICS_FULL,
  PHYSICS_CONDENSED,
  PHYSICS_KEY_POINTS,
  PHYSICS_SCOPE,
  CHEMISTRY_PAPER1,
];

/** Subjects whose chapters follow the textbook's unit order rather than A–Z. */
const BOOK_ORDER: ReadonlySet<SubjectId> = new Set(['math-geometry', 'business', 'life-orientation']);

export function chaptersFor(subjectId: SubjectId): Chapter[] {
  const chapters = CHAPTERS.filter((c) => c.subjectId === subjectId && !c.hidden);
  return BOOK_ORDER.has(subjectId) ? chapters : chapters.sort((a, b) => a.title.localeCompare(b.title));
}

/** True when a subject has any authored content at all. */
export function hasContent(subjectId: SubjectId): boolean {
  return CHAPTERS.some((c) => c.subjectId === subjectId);
}

export const ALL_LESSONS: Lesson[] = CHAPTERS.flatMap((c) => c.lessons);

const LESSON_BY_ID = new Map(ALL_LESSONS.map((l) => [l.id, l]));
export const getLesson = (id: string) => LESSON_BY_ID.get(id);

const CHAPTER_BY_ID = new Map(CHAPTERS.map((c) => [c.id, c]));
export const getChapter = (id: string) => CHAPTER_BY_ID.get(id);

/** Which exam paper a lesson's chapter is tagged with, if any. */
export function getChapterPaper(chapterId: string): 1 | 2 | undefined {
  return CHAPTER_BY_ID.get(chapterId)?.paper;
}

/** Full test/past-paper chapters for one subject — the Practice Exams page's legacy-chapter half. */
export function paperChaptersFor(subjectId: SubjectId): Chapter[] {
  return CHAPTERS.filter((c) => c.subjectId === subjectId && c.isPaper);
}

/** True when a subject has at least one paper chapter (distinct from `hasPracticeExam` in practiceExams.ts). */
export function hasPaperChapters(subjectId: SubjectId): boolean {
  return CHAPTERS.some((c) => c.subjectId === subjectId && c.isPaper);
}

export function lessonCount(subjectId: SubjectId): number {
  return chaptersFor(subjectId).reduce((n, c) => n + c.lessons.length, 0);
}
