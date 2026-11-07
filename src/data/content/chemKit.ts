import type {
  AcronymItem,
  ChecklistItem,
  DefinitionRow,
  DiagramSpec,
  Lesson,
  LessonBlock,
  QAItem,
  SolutionStep,
} from '../../lib/types';

/**
 * Authoring helpers for the Grade 10 Physical Sciences (Chemistry) study
 * notes. Mirrors `physKit.ts` exactly, for the `chemistry` subject.
 * `$…$` is inline maths; strings that carry TeX use `String.raw`.
 */

export const r = String.raw;
export type B = Omit<LessonBlock, 'id'>;

export const h2 = (text: string): B => ({ type: 'heading', level: 2, text });
export const h3 = (text: string): B => ({ type: 'heading', level: 3, text });
export const p = (text: string): B => ({ type: 'paragraph', text });
export const ul = (items: string[]): B => ({ type: 'list', text: items });
export const note = (text: string): B => ({ type: 'callout', text });
export const formula = (label: string, tex: string): B => ({ type: 'math', label, text: tex });
export const defs = (rows: DefinitionRow[]): B => ({ type: 'definitions', rows });
export const qs = (qa: QAItem[]): B => ({ type: 'questions', qa });
export const diagram = (kind: DiagramSpec['kind'], caption?: string, data?: DiagramSpec['data']): B => ({
  type: 'diagram',
  diagram: { kind, caption, data },
});
export const acronym = (word: string, forWhat: string, items: AcronymItem[]): B => ({ type: 'acronym', word, forWhat, items });
export const checklist = (items: ChecklistItem[]): B => ({ type: 'checklist', checklistItems: items });

/** A worked example: bare strings are one line of working, pairs are [note, working]. */
export const solution = (title: string, rows: Array<string | [string, string]>): B => ({
  type: 'steps',
  label: title,
  steps: rows.map((row): SolutionStep => (typeof row === 'string' ? { tex: row } : { note: row[0], tex: row[1] })),
});

/** Builds a lesson, giving every block a stable id derived from the lesson id. */
export function lesson(
  chapterId: string,
  id: string,
  title: string,
  minutes: number,
  blocks: B[],
): Lesson {
  return {
    id,
    chapterId,
    subjectId: 'chemistry',
    title,
    minutes,
    blocks: blocks.map((b, i) => ({ ...b, id: `${id}-${i}` })),
  };
}
