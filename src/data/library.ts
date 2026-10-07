import type { Chapter, Lesson, SubjectId } from '@/lib/types';
import { DIE_KIND_CHAPTER } from './content/dieKind';
import { BUSINESS_CHAPTER_1 } from './content/businessChapter1';
import { ENGLISH_POETRY_CHAPTER } from './content/englishPoetry';

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

export const CHAPTERS: Chapter[] = [DIE_KIND_CHAPTER, BUSINESS_CHAPTER_1, ENGLISH_POETRY_CHAPTER];

export function chaptersFor(subjectId: SubjectId): Chapter[] {
  return CHAPTERS.filter((c) => c.subjectId === subjectId).sort((a, b) => a.term - b.term);
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

export function lessonCount(subjectId: SubjectId): number {
  return chaptersFor(subjectId).reduce((n, c) => n + c.lessons.length, 0);
}
