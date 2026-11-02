import type { PracticeExam, SubjectId } from '@/lib/types';
import { BUSINESS_PAPER1_PRACTICE_EXAM } from './content/examBusinessPaper1';

/**
 * Practice exams — standalone, full-paper tests separate from the lesson
 * library. One subject can have more than one (e.g. Paper 1 / Paper 2).
 * Registering a new subject's exam is a one-line addition here; the page
 * and self-test machinery are entirely generic.
 */
export const PRACTICE_EXAMS: PracticeExam[] = [
  BUSINESS_PAPER1_PRACTICE_EXAM,
];

export function practiceExamsFor(subjectId: SubjectId): PracticeExam[] {
  return PRACTICE_EXAMS.filter((e) => e.subjectId === subjectId);
}

const EXAM_BY_ID = new Map(PRACTICE_EXAMS.map((e) => [e.id, e]));
export const getPracticeExam = (id: string) => EXAM_BY_ID.get(id);

/** True when a subject has at least one practice exam. */
export function hasPracticeExam(subjectId: SubjectId): boolean {
  return PRACTICE_EXAMS.some((e) => e.subjectId === subjectId);
}
