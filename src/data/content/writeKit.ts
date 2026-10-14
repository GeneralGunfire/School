import type { Lesson, LessonBlock, QAItem, SubjectId } from '../../lib/types';

/**
 * Authoring helpers for language and humanities lessons (English, Afrikaans, History).
 * Blocks use the existing lesson block types: no maths, so plain strings.
 */

export type WB = Omit<LessonBlock, 'id'>;

export const h2 = (text: string): WB => ({ type: 'heading', level: 2, text });
export const h3 = (text: string): WB => ({ type: 'heading', level: 3, text });
export const p = (text: string, en?: string): WB => ({ type: 'paragraph', text, ...(en ? { en } : {}) });
export const ul = (items: string[], en?: string[]): WB => ({ type: 'list', text: items, ...(en ? { en } : {}) });
/** Pre-formatted box (line breaks kept): letters, layouts, planning frames. */
export const box = (text: string, en?: string): WB => ({ type: 'callout', text, ...(en ? { en } : {}) });
export const quote = (text: string, en?: string): WB => ({ type: 'quote', text, ...(en ? { en } : {}) });
/** Two-column table: term on the left, meaning on the right. */
export const table = (rows: [string, string][]): WB => ({
  type: 'definitions',
  rows: rows.map(([term, meaning]) => ({ term, meaning })),
});
/** Click-to-reveal questions with model answers. */
export const qa = (items: QAItem[]): WB => ({ type: 'questions', qa: items });
export const heading2 = h2;

/** A PEEL body paragraph laid out as a labelled table, so the structure is visible. */
export const peel = (label: string, point: string, evidence: string, explain: string, link: string): WB[] => [
  h3(label),
  table([
    ['Point', point],
    ['Evidence', evidence],
    ['Explain', explain],
    ['Link', link],
  ]),
];

export function lessonIn(
  subjectId: SubjectId,
  chapterId: string,
  id: string,
  title: string,
  minutes: number,
  blocks: Array<WB | WB[]>,
  titleEn?: string,
): Lesson {
  return {
    id,
    chapterId,
    subjectId,
    title,
    ...(titleEn ? { titleEn } : {}),
    minutes,
    blocks: blocks.flat().map((b, i) => ({ ...b, id: `${id}-${i}` })),
  };
}
