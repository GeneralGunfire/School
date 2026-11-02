import { CHAPTERS } from '@/data/library';
import { getSubject } from '@/data/subjects';

export interface SearchResult {
  kind: 'lesson' | 'chapter' | 'subject';
  id: string;
  title: string;
  /** Where this result lives — subject name, or subject › chapter. */
  context: string;
  /** Route to navigate to on select. */
  to: string;
  subjectColorVar: string;
}

function matches(text: string, query: string): boolean {
  return text.toLowerCase().includes(query);
}

/**
 * Client-side search across every subject, chapter and lesson title.
 * The library is small enough (a few hundred lessons) that a plain substring
 * scan over titles is instant — no need for a real index or a worker.
 */
export function search(query: string, limit = 8): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  const results: SearchResult[] = [];

  for (const chapter of CHAPTERS) {
    const subject = getSubject(chapter.subjectId);
    if (!subject) continue;

    if (matches(chapter.title, q)) {
      results.push({
        kind: 'chapter',
        id: chapter.id,
        title: chapter.title,
        context: subject.name,
        to: `/library/${subject.id}/${chapter.id}`,
        subjectColorVar: subject.colorVar,
      });
    }

    for (const lesson of chapter.lessons) {
      if (!matches(lesson.title, q)) continue;
      results.push({
        kind: 'lesson',
        id: lesson.id,
        title: lesson.title,
        context: `${subject.name} › ${chapter.title}`,
        to: `/library/${subject.id}/${chapter.id}/${lesson.id}`,
        subjectColorVar: subject.colorVar,
      });
    }

    if (results.length >= limit * 3) break; // enough candidates to rank from
  }

  // Shorter titles and exact-start matches rank first — "Chapter 2" should
  // beat "A long lesson title that happens to mention Chapter 2 in passing."
  results.sort((a, b) => {
    const aStarts = a.title.toLowerCase().startsWith(q) ? 0 : 1;
    const bStarts = b.title.toLowerCase().startsWith(q) ? 0 : 1;
    if (aStarts !== bStarts) return aStarts - bStarts;
    return a.title.length - b.title.length;
  });

  return results.slice(0, limit);
}
