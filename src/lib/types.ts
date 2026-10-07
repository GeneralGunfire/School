/**
 * Scholar — domain model.
 *
 * Everything here is persisted to localStorage; there is no backend. Content
 * (subjects, chapters, lessons) is authored as static data and treated as
 * read-only, while user state (progress, blocks, notes, results) is mutable
 * and versioned by the storage layer.
 */

// ── Subjects ────────────────────────────────────────────────────────────────

/** Stable key for a subject. Used in storage keys, so never renumber these. */
export type SubjectId =
  | 'history'
  | 'english'
  | 'afrikaans'
  | 'math-algebra'
  | 'math-geometry'
  | 'ap-math'
  | 'egd'
  | 'business'
  | 'life-orientation'
  | 'religion'
  | 'physical-sciences'
  | 'chemistry';

/** Lucide icon name, resolved at render time via the icon registry. */
export type IconName = string;

export interface Subject {
  id: SubjectId;
  /** Full name, as it appears on cards and page headings. */
  name: string;
  /** Short form for dense surfaces — timetable cells, calendar blocks. */
  shortName: string;
  /** CSS custom property holding this subject's accent, e.g. `--color-subject-history`. */
  colorVar: string;
  icon: IconName;
  /** One line describing the subject's scope, shown under the name. */
  blurb: string;
  /** True for Afrikaans only — unlocks the translation UI in the lesson view. */
  hasTranslation?: boolean;
}

// ── Library content ─────────────────────────────────────────────────────────

/**
 * A block of lesson prose.
 *
 * `en` carries the English translation and is present only on Afrikaans
 * lessons. The split-pane and tooltip modes both read from it, so a block
 * without `en` simply renders untranslated rather than erroring.
 */
export interface LessonBlock {
  id: string;
  type: 'heading' | 'paragraph' | 'list' | 'quote' | 'callout';
  /** Primary text. For `list`, each array entry is one item. */
  text: string | string[];
  /** English translation, mirroring the shape of `text`. Afrikaans only. */
  en?: string | string[];
  /** Heading depth. Only meaningful when `type` is `heading`. */
  level?: 2 | 3;
}

export interface Lesson {
  id: string;
  chapterId: string;
  subjectId: SubjectId;
  title: string;
  /** English title, for the translated header on Afrikaans lessons. */
  titleEn?: string;
  /** Estimated reading time in minutes, shown on lesson rows. */
  minutes: number;
  blocks: LessonBlock[];
}

export interface Chapter {
  id: string;
  subjectId: SubjectId;
  title: string;
  /** One line of context, shown under the chapter title. */
  summary: string;
  /** CAPS term this chapter belongs to, 1–4. */
  term: 1 | 2 | 3 | 4;
  lessons: Lesson[];
}

// ── User state ──────────────────────────────────────────────────────────────

export type MasteryLevel = 'not-started' | 'in-progress' | 'mastered';

/** Per-lesson progress. Keyed by lesson id in storage. */
export interface LessonProgress {
  lessonId: string;
  subjectId: SubjectId;
  mastery: MasteryLevel;
  /** ISO 8601 timestamp of the last time this lesson was opened. */
  lastOpenedAt: string;
}

export interface StudyBlock {
  id: string;
  /** Local calendar day, `YYYY-MM-DD`. Never a full timestamp — blocks are
   *  day-scoped, and storing a timestamp invites timezone drift. */
  date: string;
  subjectId: SubjectId;
  topic: string;
  /** Planned duration in minutes. */
  duration: number;
  notes?: string;
  done: boolean;
  createdAt: string;
}

/** A free-text reflection attached to one calendar day. */
export interface DayReflection {
  date: string;
  text: string;
  updatedAt: string;
}

export interface Note {
  id: string;
  subjectId: SubjectId;
  title: string;
  /** Sanitised HTML from the rich-text editor. */
  html: string;
  createdAt: string;
  updatedAt: string;
}

export interface TestResult {
  id: string;
  subjectId: SubjectId;
  title: string;
  score: number;
  total: number;
  /** `YYYY-MM-DD`. */
  date: string;
}

// ── Timetable ───────────────────────────────────────────────────────────────

/** 1 = Monday … 5 = Friday. The school week only; no weekend slots. */
export type Weekday = 1 | 2 | 3 | 4 | 5;

export interface Period {
  id: string;
  label: string;
  /** `HH:MM`, 24-hour. */
  start: string;
  end: string;
  /** Break and assembly rows render differently and hold no subject. */
  kind: 'lesson' | 'break' | 'assembly';
}

export interface TimetableEntry {
  periodId: string;
  day: Weekday;
  /** Null for breaks and free periods. */
  subjectId: SubjectId | null;
  /** Shown when the subject doesn't resolve to one of the 12, or for detail. */
  label?: string;
  teacher?: string;
  room?: string;
}

// ── Streak ──────────────────────────────────────────────────────────────────

export interface StreakState {
  /** Consecutive days with at least one completed study block. */
  current: number;
  longest: number;
  /** `YYYY-MM-DD` of the most recent qualifying day, or null if never. */
  lastStudiedOn: string | null;
}
