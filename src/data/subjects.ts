import type { Subject, SubjectId } from '@/lib/types';

/**
 * The 12 subject streams. Order here is the order they appear everywhere —
 * Subjects grid, Library sidebar, Notes picker, calendar block form.
 */
export const SUBJECTS: Subject[] = [
  {
    id: 'history',
    name: 'History',
    shortName: 'History',
    colorVar: '--color-subject-history',
    icon: 'Landmark',
    blurb: 'Source analysis, essays and the long arc of the 20th century.',
  },
  {
    id: 'english',
    name: 'English',
    shortName: 'English',
    colorVar: '--color-subject-english',
    icon: 'BookOpen',
    blurb: 'Literature, language structures and written argument.',
  },
  {
    id: 'afrikaans',
    name: 'Afrikaans',
    shortName: 'Afrikaans',
    colorVar: '--color-subject-afrikaans',
    icon: 'Languages',
    blurb: 'Taalstrukture, letterkunde en die voorgeskrewe werk Die Kind.',
    hasTranslation: true,
  },
  {
    id: 'math-algebra',
    name: 'Pure Math: Algebra',
    shortName: 'Algebra',
    colorVar: '--color-subject-algebra',
    icon: 'Sigma',
    blurb: 'Expressions, equations, functions and sequences.',
  },
  {
    id: 'math-geometry',
    name: 'Pure Math: Geometry',
    shortName: 'Geometry',
    colorVar: '--color-subject-geometry',
    icon: 'Triangle',
    blurb: 'Euclidean proof, analytical geometry and measurement.',
  },
  {
    id: 'ap-math',
    name: 'AP Math',
    shortName: 'AP Math',
    colorVar: '--color-subject-apmath',
    icon: 'Infinity',
    blurb: 'Extension work beyond the core syllabus.',
  },
  {
    id: 'egd',
    name: 'EGD — Engineering & Graphic Design',
    shortName: 'EGD',
    colorVar: '--color-subject-egd',
    icon: 'PenTool',
    blurb: 'Technical drawing, orthographic projection and design.',
  },
  {
    id: 'business',
    name: 'Business Studies',
    shortName: 'Business',
    colorVar: '--color-subject-business',
    icon: 'Briefcase',
    blurb: 'Environments, entrepreneurship and business operations.',
  },
  {
    id: 'life-orientation',
    name: 'Life Orientation',
    shortName: 'Life Orientation',
    colorVar: '--color-subject-lo',
    icon: 'HeartHandshake',
    blurb: 'Self development, study skills and citizenship.',
  },
  {
    id: 'religion',
    name: 'Religion Studies',
    shortName: 'Religion',
    colorVar: '--color-subject-religion',
    icon: 'Scroll',
    blurb: 'World religions, texts and ethical reasoning.',
  },
  {
    id: 'physical-sciences',
    name: 'Physical Sciences',
    shortName: 'Phys Sci',
    colorVar: '--color-subject-physci',
    icon: 'Atom',
    blurb: 'Mechanics, waves, electricity and matter.',
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    shortName: 'Chemistry',
    colorVar: '--color-subject-chemistry',
    icon: 'FlaskConical',
    blurb: 'Atomic structure, bonding and chemical change.',
  },
];

const BY_ID = new Map<SubjectId, Subject>(SUBJECTS.map((s) => [s.id, s]));

export function getSubject(id: SubjectId): Subject | undefined {
  return BY_ID.get(id);
}

/**
 * Resolves a subject's accent to a usable colour string.
 *
 * Returns a `var(...)` reference rather than a hex value so the colour stays
 * a single source of truth in CSS; callers can interpolate it into inline
 * styles, gradients and `color-mix()` alike.
 */
export function subjectColor(id: SubjectId | null | undefined): string {
  if (!id) return 'var(--color-muted-2)';
  const s = BY_ID.get(id);
  return s ? `var(${s.colorVar})` : 'var(--color-muted-2)';
}

/** A translucent wash of the subject's accent, for cell and chip fills. */
export function subjectWash(id: SubjectId | null | undefined, pct = 10): string {
  return `color-mix(in srgb, ${subjectColor(id)} ${pct}%, white)`;
}
