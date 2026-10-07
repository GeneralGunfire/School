import type { Period, TimetableEntry, Weekday } from '@/lib/types';

/**
 * The real Grade 10B timetable, transcribed from the Prospect screenshot.
 *
 * Several period slots carry two subjects in the source (e.g. Monday P5 is
 * both Physical Sciences and History). Those are kept as two entries against
 * the same slot and the grid renders them stacked, exactly as the source
 * does, rather than silently dropping one.
 */

export const DEFAULT_PERIODS: Period[] = [
  { id: 'assembly', label: 'Assembly', start: '07:10', end: '07:45', kind: 'assembly' },
  { id: 'p1', label: 'Period 1', start: '07:45', end: '08:30', kind: 'lesson' },
  { id: 'p2', label: 'Period 2', start: '08:30', end: '09:15', kind: 'lesson' },
  { id: 'p3', label: 'Period 3', start: '09:15', end: '10:00', kind: 'lesson' },
  { id: 'break1', label: 'Break', start: '10:00', end: '10:30', kind: 'break' },
  { id: 'p4', label: 'Period 4', start: '10:30', end: '11:15', kind: 'lesson' },
  { id: 'p5', label: 'Period 5', start: '11:15', end: '12:00', kind: 'lesson' },
  { id: 'p6', label: 'Period 6', start: '12:00', end: '12:45', kind: 'lesson' },
  { id: 'break2', label: 'Break and Salah', start: '12:45', end: '13:30', kind: 'break' },
  { id: 'p7', label: 'Period 7', start: '13:30', end: '14:10', kind: 'lesson' },
  { id: 'p8', label: 'Period 8', start: '14:10', end: '14:45', kind: 'lesson' },
  { id: 'after', label: 'After School', start: '14:45', end: '16:00', kind: 'lesson' },
];

export const DAYS: { value: Weekday; label: string; short: string }[] = [
  { value: 1, label: 'Monday', short: 'Mon' },
  { value: 2, label: 'Tuesday', short: 'Tue' },
  { value: 3, label: 'Wednesday', short: 'Wed' },
  { value: 4, label: 'Thursday', short: 'Thu' },
  { value: 5, label: 'Friday', short: 'Fri' },
];

export const DEFAULT_TIMETABLE: TimetableEntry[] = [
  // ── Monday ────────────────────────────────────────────────────────────
  { day: 1, periodId: 'p1', subjectId: 'math-algebra', label: 'Algebra', teacher: 'Ms Aynur', room: '10A' },
  { day: 1, periodId: 'p2', subjectId: 'religion', label: 'Religion Studies', teacher: 'Ms Birsen', room: '10B' },
  { day: 1, periodId: 'p3', subjectId: 'life-orientation', label: 'Life Orientation', teacher: 'Mr Dursan', room: '10B' },
  { day: 1, periodId: 'p5', subjectId: 'physical-sciences', label: 'Physical Sciences', teacher: 'Mr Shiraz', room: '10A' },
  { day: 1, periodId: 'p5', subjectId: 'history', label: 'History', teacher: 'Ms Amreen' },
  { day: 1, periodId: 'p6', subjectId: 'english', label: 'English', teacher: 'Ms Nasreen', room: '10B' },
  { day: 1, periodId: 'p7', subjectId: 'afrikaans', label: 'Afrikaans', teacher: 'Ms Sajidah', room: '10B' },
  { day: 1, periodId: 'p8', subjectId: 'chemistry', label: 'Chemistry', teacher: 'Mr Shiraz', room: '10A' },
  { day: 1, periodId: 'p8', subjectId: 'history', label: 'History', teacher: 'Ms Amreen', room: '10B' },

  // ── Tuesday ───────────────────────────────────────────────────────────
  { day: 2, periodId: 'p1', subjectId: 'math-algebra', label: 'Algebra', teacher: 'Ms Aynur', room: '10A' },
  { day: 2, periodId: 'p2', subjectId: 'egd', label: 'EGD', teacher: 'Ms Ndlovu', room: 'EGD Class' },
  { day: 2, periodId: 'p3', subjectId: 'life-orientation', label: 'Life Orientation', teacher: 'Mr Dursan', room: '10B' },
  { day: 2, periodId: 'p4', subjectId: 'business', label: 'Business Studies', teacher: 'Ms Amreen', room: '10B' },
  { day: 2, periodId: 'p5', subjectId: 'english', label: 'English', teacher: 'Ms Nasreen', room: '10B' },
  { day: 2, periodId: 'p6', subjectId: 'egd', label: 'EGD', teacher: 'Ms Ndlovu' },
  { day: 2, periodId: 'p7', subjectId: 'religion', label: 'Religion Studies', teacher: 'Ms Birsen', room: '10B' },
  { day: 2, periodId: 'p8', subjectId: 'afrikaans', label: 'Afrikaans', teacher: 'Ms Sajidah', room: '10B' },

  // ── Wednesday ─────────────────────────────────────────────────────────
  { day: 3, periodId: 'p1', subjectId: 'math-geometry', label: 'Geometry', teacher: 'Ms Nazli', room: '10A' },
  { day: 3, periodId: 'p2', subjectId: 'egd', label: 'EGD', teacher: 'Ms Ndlovu', room: 'EGD Class' },
  { day: 3, periodId: 'p3', subjectId: 'chemistry', label: 'Chemistry', teacher: 'Mr Shiraz', room: '10A' },
  { day: 3, periodId: 'p3', subjectId: 'history', label: 'History', teacher: 'Ms Amreen', room: '10B' },
  { day: 3, periodId: 'p4', subjectId: 'business', label: 'Business Studies', teacher: 'Ms Amreen', room: '10B' },
  { day: 3, periodId: 'p5', subjectId: 'history', label: 'History', teacher: 'Ms Amreen', room: '10B' },
  { day: 3, periodId: 'p5', subjectId: 'physical-sciences', label: 'Physical Sciences', teacher: 'Mr Shiraz', room: '10A' },
  // Wednesday's Period 6 is a break in the source, not a lesson.
  { day: 3, periodId: 'p6', subjectId: null, label: 'Break' },
  { day: 3, periodId: 'p7', subjectId: 'afrikaans', label: 'Afrikaans', teacher: 'Ms Sajidah', room: '10B' },
  { day: 3, periodId: 'p8', subjectId: 'english', label: 'English', teacher: 'Ms Nasreen', room: '10B' },
  { day: 3, periodId: 'after', subjectId: 'ap-math', label: 'AP Mathematics', teacher: 'Ms Nazli', room: '8B' },

  // ── Thursday ──────────────────────────────────────────────────────────
  { day: 4, periodId: 'p1', subjectId: 'math-geometry', label: 'Geometry', teacher: 'Ms Nazli', room: '10A' },
  { day: 4, periodId: 'p2', subjectId: 'math-algebra', label: 'Algebra', teacher: 'Ms Aynur', room: '10A' },
  { day: 4, periodId: 'p3', subjectId: 'egd', label: 'EGD', teacher: 'Ms Ndlovu', room: 'EGD Class' },
  { day: 4, periodId: 'p4', subjectId: 'business', label: 'Business Studies', teacher: 'Ms Amreen', room: '10B' },
  { day: 4, periodId: 'p5', subjectId: 'chemistry', label: 'Chemistry', teacher: 'Mr Shiraz', room: '10A' },
  { day: 4, periodId: 'p5', subjectId: 'history', label: 'History', teacher: 'Ms Amreen', room: '10B' },
  { day: 4, periodId: 'p6', subjectId: 'english', label: 'English', teacher: 'Ms Nasreen', room: '10B' },
  { day: 4, periodId: 'p7', subjectId: 'afrikaans', label: 'Afrikaans', teacher: 'Ms Sajidah', room: '10B' },
  { day: 4, periodId: 'p8', subjectId: 'history', label: 'History', teacher: 'Ms Amreen', room: '10B' },
  { day: 4, periodId: 'p8', subjectId: 'physical-sciences', label: 'Physical Sciences', teacher: 'Mr Shiraz', room: '10A' },

  // ── Friday ────────────────────────────────────────────────────────────
  { day: 5, periodId: 'p1', subjectId: 'math-algebra', label: 'Algebra', teacher: 'Ms Aynur', room: '10A' },
  { day: 5, periodId: 'p2', subjectId: 'afrikaans', label: 'Afrikaans', teacher: 'Ms Sajidah', room: '10B' },
  { day: 5, periodId: 'p3', subjectId: 'business', label: 'Business Studies', teacher: 'Ms Amreen', room: '10B' },
  { day: 5, periodId: 'p4', subjectId: 'math-geometry', label: 'Geometry', teacher: 'Ms Nazli', room: '10A' },
  { day: 5, periodId: 'p5', subjectId: 'english', label: 'English', teacher: 'Ms Nasreen', room: '10B' },
];

/** Entries for one day+period slot. Usually 0 or 1; occasionally 2. */
export function entriesAt(day: Weekday, periodId: string): TimetableEntry[] {
  return DEFAULT_TIMETABLE.filter((e) => e.day === day && e.periodId === periodId);
}

/** Today as a Weekday, or null on a weekend. */
export function todayWeekday(): Weekday | null {
  const d = new Date().getDay();
  return d >= 1 && d <= 5 ? (d as Weekday) : null;
}
