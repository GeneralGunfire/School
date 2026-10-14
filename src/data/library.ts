import type { Chapter, Lesson, SubjectId } from '@/lib/types';
import { DIE_KIND_CHAPTER } from './content/dieKind';
import { DIE_KIND_BOEK } from './content/dieKindBoek';
import { AFRIKAANS_WRITING_CHAPTER } from './content/afrikaansWriting';
import { BUSINESS_CHAPTER_1 } from './content/businessChapter1';
import { BUSINESS_CHAPTER_2 } from './content/businessChapter2';
import { BUSINESS_CHAPTER_4 } from './content/businessChapter4';
import { BUSINESS_CHAPTER_5 } from './content/businessChapter5';
import { ENGLISH_POETRY_CHAPTER } from './content/englishPoetry';
import { ENGLISH_WRITING_CHAPTER } from './content/englishWriting';
import { ROMEO_JULIET_CHAPTER } from './content/romeoE';
import {
  HISTORY_BRITAIN_CAPE,
  HISTORY_HIGHVELD,
  HISTORY_SA_WAR,
  HISTORY_LAND_ACT,
} from './content/history';
import { HISTORY_ESSAYS_CHAPTER } from './content/historyEssays';
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
  BUSINESS_CHAPTER_1,
  BUSINESS_CHAPTER_2,
  BUSINESS_CHAPTER_4,
  BUSINESS_CHAPTER_5,
  ENGLISH_POETRY_CHAPTER,
  ENGLISH_WRITING_CHAPTER,
  ROMEO_JULIET_CHAPTER,
  HISTORY_BRITAIN_CAPE,
  HISTORY_HIGHVELD,
  HISTORY_SA_WAR,
  HISTORY_LAND_ACT,
  HISTORY_ESSAYS_CHAPTER,
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
  GEOM_ANALYTICAL,
  GEOM_TRIGONOMETRY,
  GEOM_EUCLIDEAN,
  GEOM_MEASUREMENTS,
  GEOM_STATISTICS,
  GEOM_REVISION,
];

/** Subjects whose chapters follow the textbook's unit order rather than A–Z. */
const BOOK_ORDER: ReadonlySet<SubjectId> = new Set(['math-geometry', 'business']);

export function chaptersFor(subjectId: SubjectId): Chapter[] {
  const chapters = CHAPTERS.filter((c) => c.subjectId === subjectId);
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

export function lessonCount(subjectId: SubjectId): number {
  return chaptersFor(subjectId).reduce((n, c) => n + c.lessons.length, 0);
}
