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
  type:
    | 'heading'
    | 'paragraph'
    | 'list'
    | 'quote'
    | 'callout'
    /** Term/meaning table — Business Studies key concepts. */
    | 'definitions'
    /** Mnemonic card — a memorisation aid. */
    | 'acronym'
    /** The poem itself, set as verse. */
    | 'poem'
    /** Line-by-line analysis. */
    | 'lines'
    /** Exam questions with model answers. */
    | 'questions'
    /** Embedded audio player — podcast-style overviews. */
    | 'audio'
    /** Inline SVG graph — parabola, hyperbola, exponential, linear. */
    | 'graph'
    /** Display equation, optionally boxed with a label (a formula card). */
    | 'math'
    /** Worked solution — rows of an explanatory note beside a line of maths. */
    | 'steps'
    /** Geometry / analytical-geometry diagram drawn as SVG from coordinates. */
    | 'figure';
  /** Primary text. For `list`, each array entry is one item. */
  text?: string | string[];
  /** English translation, mirroring the shape of `text`. Afrikaans only. */
  en?: string | string[];
  /** Heading depth. Only meaningful when `type` is `heading`. */
  level?: 2 | 3;

  /** `definitions` only. */
  rows?: DefinitionRow[];

  /** `acronym` only — the mnemonic word itself, e.g. "POLC". */
  word?: string;
  /** `acronym` only — what the mnemonic helps you recall. */
  forWhat?: string;
  /** `acronym` only. */
  items?: AcronymItem[];

  /** `poem` and `lines` only. */
  lines?: PoemLine[];

  /** `questions` only. */
  qa?: QAItem[];

  /** `audio` only — path to the audio file (relative to public/). */
  src?: string;
  /** `audio` only — short description shown above the player. */
  caption?: string;

  /** `graph` only */
  graphType?: 'parabola' | 'hyperbola' | 'exponential' | 'linear' | 'sine' | 'cosine' | 'tan' | 'multi';
  /** `graph` only — equation displayed as label */
  equation?: string;
  /** `graph` only — parameters for the function (a, b, c, p, q, period, etc.) */
  params?: Record<string, number>;
  /** `graph` — optional extra label. `math` — formula card title. `steps` — solution header. */
  label?: string;
  /** `steps` only. */
  steps?: SolutionStep[];
  /** `figure` only. */
  figure?: Figure;
  /** `graph` with type 'multi' — array of curves to overlay */
  curves?: Array<{ graphType: string; equation: string; params?: Record<string, number>; color?: string }>;
}

/** One row of a worked solution. `tex` is KaTeX; `note` supports inline `$…$`. */
export interface SolutionStep {
  note?: string;
  tex: string;
}

export type FigureColor = 'main' | 'alt' | 'green' | 'amber' | 'muted';
/** Where a point's label sits relative to the dot. */
export type FigureSide = 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw';

/**
 * A reference to a direction at a vertex: a point id, `'+x' | '-x' | '+y' | '-y'`,
 * or a bearing in degrees measured anti-clockwise from the positive x-axis.
 */
export type FigureDir = string | number;

export interface FigurePoint {
  id: string;
  x: number;
  y: number;
  /** Text shown beside the dot. Defaults to the id; `''` hides the label. */
  label?: string;
  side?: FigureSide;
  /** Draw no dot (a pure anchor for segments and angles). */
  hide?: boolean;
  color?: FigureColor;
}

export interface FigureSegment {
  from: string;
  to: string;
  color?: FigureColor;
  dashed?: boolean;
  /** Equal-length tick marks, e.g. 1 for `//`, 2 for `///`. */
  ticks?: number;
  arrow?: boolean;
  label?: string;
}

/** A line extended across the whole plot: `y = mx + c`, or vertical `x = x`. */
export interface FigureLine {
  m?: number;
  c?: number;
  x?: number;
  label?: string;
  color?: FigureColor;
  dashed?: boolean;
}

export interface FigureAngle {
  at: string;
  from: FigureDir;
  to: FigureDir;
  label?: string;
  /** Draw a right-angle square instead of an arc. */
  right?: boolean;
  /** Arc radius in pixels. */
  radius?: number;
  color?: FigureColor;
}

/** A plotted function: trig `y = a·f(b·(x − shift)) + q` (degrees) or any `fn`. */
export interface FigureCurve {
  kind?: 'sin' | 'cos' | 'tan';
  a?: number;
  b?: number;
  shift?: number;
  q?: number;
  fn?: (x: number) => number;
  /** Restrict the curve to part of the x-axis. */
  domain?: [number, number];
  color?: FigureColor;
  dashed?: boolean;
}

export interface Figure {
  xRange: [number, number];
  yRange: [number, number];
  /** Cartesian axes with numbered ticks. Off for plain shape diagrams. */
  axes?: boolean;
  grid?: boolean;
  points?: FigurePoint[];
  segments?: FigureSegment[];
  lines?: FigureLine[];
  polygons?: { ids: string[]; color?: FigureColor; fill?: boolean }[];
  angles?: FigureAngle[];
  curves?: FigureCurve[];
  /** Circles in plot units; the radius is measured on the x-scale. */
  /** Ellipses (for cylinders, cones and spheres): rx on the x-scale, ry on the y-scale; `half` draws only the lower arc. */
  ellipses?: { cx: number; cy: number; rx: number; ry: number; color?: FigureColor; dashed?: boolean; half?: 'lower' | 'upper'; fill?: boolean }[];
  circles?: { cx: number; cy: number; r: number; color?: FigureColor; dashed?: boolean; fill?: boolean }[];
  /** Vertical dashed lines at these x-values (tan asymptotes). */
  asymptotes?: number[];
  /** Spacing of the numbered ticks on each axis; defaults to a sensible step. */
  xStep?: number;
  yStep?: number;
  /** Appended to each x tick label, e.g. `'°'`. */
  xSuffix?: string;
  /** y-pixels per x-pixel; 1 keeps a true aspect ratio. */
  stretch?: number;
  texts?: { x: number; y: number; text: string; anchor?: 'start' | 'middle' | 'end'; color?: FigureColor }[];
  caption?: string;
  /** Pixel width ceiling. Defaults to 520. */
  width?: number;
}

/** A term and its definition, for the definitions table. */
export interface DefinitionRow {
  term: string;
  meaning: string;
}

/** One letter of a mnemonic, with what it stands for. */
export interface AcronymItem {
  /** The letter carried by the mnemonic, e.g. "P". */
  letter: string;
  /** What the letter stands for, e.g. "Plan". */
  stands: string;
  /** Optional one-line gloss shown under it. */
  note?: string;
}

/** A line of verse, with its explanation. */
export interface PoemLine {
  /** Line number as printed in the poem. */
  n: number;
  /** The line itself. */
  text: string;
  /** Line-by-line explanation, revealed on hover. */
  note?: string;
  /** Devices at work in this line, e.g. ["Personification"]. */
  devices?: string[];
}

/** An exam question with a model answer. */
export interface QAItem {
  /** Badge text in place of the running number, e.g. "2.1". */
  n?: string;
  /** Shared stem for a group of sub-questions; shown once above the first of the group. */
  context?: string;
  q: string;
  /** Marks allocated, shown as "(2)". */
  marks?: number;
  /** The model answer. An array renders as a marked bullet list. */
  a: string | string[];
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
  lessons: Lesson[];
  /** Which exam paper this chapter is assessed on. Business Studies only, so far. */
  paper?: 1 | 2;
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

// ── Acronyms & key-point notes ───────────────────────────────────────────

/** One letter of a user-built mnemonic. */
export interface AcronymLetter {
  id: string;
  /** The letter itself, e.g. "P". */
  letter: string;
  /** A single word assigned to this letter, e.g. "Plan". */
  word: string;
  /** A fuller sentence assigned to this letter, shown under the word if present. */
  sentence: string;
}

/**
 * A user-created mnemonic device: a base word (e.g. "POLC") with a word
 * and/or sentence assigned to each letter. Distinct from the authored
 * `AcronymItem` mnemonics baked into lesson content — this is the user's
 * own, saved to the dedicated acronyms-and-notes library.
 */
export interface UserAcronym {
  id: string;
  subjectId: SubjectId;
  /** Which exam paper this belongs to, when the subject splits by paper. */
  paper?: 1 | 2;
  /** What the acronym is for, e.g. "The four functions of management". */
  title: string;
  letters: AcronymLetter[];
  createdAt: string;
  updatedAt: string;
}

/** A short, free-standing key-point note — not a full rich-text note. */
export interface StudyNote {
  id: string;
  subjectId: SubjectId;
  paper?: 1 | 2;
  title: string;
  /** Key sentences / bullet points, one per line. */
  points: string[];
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
