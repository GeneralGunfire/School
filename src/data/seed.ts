import type { LessonProgress, Note, StudyBlock } from '@/lib/types';

/**
 * First-run state.
 *
 * Everything starts empty. Seeding invented study blocks, reading history or
 * marks would show the user a record they didn't make — on a personal study
 * tool an honest empty state is better than a populated fake one.
 */

export function seedProgress(): Record<string, LessonProgress> {
  return {};
}

export function seedBlocks(): StudyBlock[] {
  return [];
}

export function seedNotes(): Note[] {
  return [];
}
