import type { Lesson } from '../../lib/types';
import { lesson as geomLesson } from './geomKit';

/**
 * Authoring helpers for Grade 10 Mathematics Paper 1 (algebra). Same blocks as the geometry
 * units; only the subject differs. See geomKit.ts for the helper definitions.
 */
export { r, h2, h3, p, ul, note, formula, eq, fig, qs, solution, worked, type B } from './geomKit';

export const ALG_ANSWERS_NOTE = {
  type: 'callout' as const,
  text: String.raw`The answers below are worked out by Scholar from the book's questions. The book's own answer key was not in the photos, so check your working against it.`,
};

export function lesson(chapterId: string, id: string, title: string, minutes: number, blocks: Parameters<typeof geomLesson>[4]): Lesson {
  return { ...geomLesson(chapterId, id, title, minutes, blocks), subjectId: 'math-algebra' };
}
