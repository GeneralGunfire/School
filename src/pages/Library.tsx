import { BookOpen, Check, ChevronRight, Clock, List, Lock } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import * as React from 'react';
import { Page, PageTitle } from '@/components/layout/Page';
import { useBreadcrumbs } from '@/components/layout/AppShell';
import { Badge, Button, Card, EmptyState, ProgressBar } from '@/components/ui/primitives';
import { SubjectIcon } from '@/components/ui/Icon';
import { SUBJECTS, getSubject, subjectColor } from '@/data/subjects';
import { chaptersFor, getChapter, getLesson, hasContent } from '@/data/library';
import { useStore } from '@/store/AppStore';
import { cn } from '@/lib/utils';
import type { MasteryLevel, SubjectId } from '@/lib/types';
import {
  TranslatableLesson,
  TranslationToggle,
  type TranslationMode,
} from './library/TranslatableLesson';

const MASTERY: Record<MasteryLevel, { label: string; tone: 'neutral' | 'strong' | 'positive' }> = {
  mastered: { label: 'Done', tone: 'positive' },
  'in-progress': { label: 'Reading', tone: 'strong' },
  'not-started': { label: 'Not started', tone: 'neutral' },
};

/* ── Subject picker ──────────────────────────────────────────────────────
   A grid, not a rail. With only one subject carrying content, a persistent
   sidebar of twelve mostly-empty entries was mostly dead weight. */

function SubjectGrid({ onPick }: { onPick: (id: SubjectId) => void }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {SUBJECTS.map((s) => {
        const available = hasContent(s.id);
        const count = chaptersFor(s.id).reduce((n, c) => n + c.lessons.length, 0);
        const color = subjectColor(s.id);

        return (
          <button
            key={s.id}
            onClick={() => available && onPick(s.id)}
            disabled={!available}
            className={cn(
              'card flex flex-col px-5 py-4 text-left',
              available ? 'card-interactive' : 'cursor-default opacity-55',
            )}
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <span
                className="grid size-9 shrink-0 place-items-center rounded-lg border border-hairline"
                style={{ background: 'var(--surface-raise)' }}
              >
                <SubjectIcon name={s.icon} className="size-[18px]" style={{ color }} />
              </span>
              {available ? (
                <ChevronRight className="mt-1 size-4 shrink-0 text-muted-2" aria-hidden />
              ) : (
                <Lock className="mt-1 size-3.5 shrink-0 text-muted-2" aria-hidden />
              )}
            </div>

            <p className="text-[14.5px] leading-snug font-semibold text-ink">{s.name}</p>
            <p className="mt-1.5 flex-1 text-[12px] text-muted">
              {available ? `${count} lesson${count === 1 ? '' : 's'}` : 'No content yet'}
            </p>
          </button>
        );
      })}
    </div>
  );
}

/* ── Chapters ────────────────────────────────────────────────────────── */

function ChapterList({ subjectId, onOpen }: { subjectId: SubjectId; onOpen: (id: string) => void }) {
  const chapters = chaptersFor(subjectId);
  const { progress } = useStore();
  const color = subjectColor(subjectId);

  if (chapters.length === 0) {
    return (
      <Card>
        <EmptyState
          icon={BookOpen}
          title="No content yet"
          body="Lessons for this subject have not been written."
        />
      </Card>
    );
  }

  return (
    <div className="space-y-3">
      {chapters.map((c) => {
        const done = c.lessons.filter((l) => progress[l.id]?.mastery === 'mastered').length;
        const pct = (done / c.lessons.length) * 100;
        return (
          <button
            key={c.id}
            onClick={() => onOpen(c.id)}
            className="card card-interactive block w-full px-6 py-5 text-left"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <Badge tone="neutral">Term {c.term}</Badge>
                  {done === c.lessons.length && <Badge tone="positive">Complete</Badge>}
                </div>
                <p className="text-[17px] font-semibold text-ink">{c.title}</p>
                <p className="mt-1.5 text-[13px] text-muted">{c.summary}</p>
                <div className="mt-4 flex items-center gap-3">
                  <ProgressBar value={pct} color={color} className="max-w-[260px]" />
                  <span className="shrink-0 text-[12px] font-semibold text-muted tabular-nums">
                    {done}/{c.lessons.length}
                  </span>
                </div>
              </div>
              <ChevronRight className="mt-1 size-5 shrink-0 text-muted-2" aria-hidden />
            </div>
          </button>
        );
      })}
    </div>
  );
}

/* ── Lessons ─────────────────────────────────────────────────────────── */

function LessonList({ chapterId, onOpen }: { chapterId: string; onOpen: (id: string) => void }) {
  const chapter = getChapter(chapterId);
  const { progress } = useStore();
  if (!chapter) return <EmptyState icon={BookOpen} title="Chapter not found" />;

  return (
    <div className="space-y-2.5">
      {chapter.lessons.map((l, i) => {
        const mastery = progress[l.id]?.mastery ?? 'not-started';
        const m = MASTERY[mastery];
        return (
          <button
            key={l.id}
            onClick={() => onOpen(l.id)}
            className="card card-interactive flex w-full items-center gap-4 px-5 py-4 text-left"
          >
            <span
              className="grid size-9 shrink-0 place-items-center rounded-lg border border-hairline text-[13px] font-semibold text-muted tabular-nums"
              style={{ background: 'var(--surface-raise)' }}
            >
              {mastery === 'mastered' ? (
                <Check className="size-4 text-positive" strokeWidth={2.5} aria-hidden />
              ) : (
                i + 1
              )}
            </span>

            <span className="min-w-0 flex-1">
              <span className="block truncate text-[15px] font-semibold text-ink">{l.title}</span>
              <span className="mt-1 flex items-center gap-1.5 text-[12px] text-muted">
                <Clock className="size-3.5" aria-hidden /> ~{l.minutes} min
              </span>
            </span>

            <Badge tone={m.tone} className="shrink-0">
              {m.label}
            </Badge>
          </button>
        );
      })}
    </div>
  );
}

/* ── Lesson reader ───────────────────────────────────────────────────── */

function LessonReader({ lessonId }: { lessonId: string }) {
  const lesson = getLesson(lessonId);
  const { progress, touchLesson, markLesson } = useStore();
  const [mode, setMode] = React.useState<TranslationMode>('off');
  const [activeHeading, setActiveHeading] = React.useState<string | null>(null);

  const subject = lesson ? getSubject(lesson.subjectId) : undefined;
  const translatable = subject?.hasTranslation ?? false;

  // Opening a lesson marks it in progress. Keyed on the lesson id only, or
  // it would re-fire on every store change.
  React.useEffect(() => {
    if (lesson) touchLesson(lesson.id, lesson.subjectId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonId]);

  const headings = React.useMemo(
    () => lesson?.blocks.filter((b) => b.type === 'heading') ?? [],
    [lesson],
  );

  if (!lesson) return <EmptyState icon={BookOpen} title="Lesson not found" />;

  const mastery = progress[lesson.id]?.mastery ?? 'not-started';
  const wide = mode === 'split' || mode === 'hover';

  return (
    <div className={cn('flex gap-12', wide && 'justify-center')}>
      <article className={cn('min-w-0', wide ? 'flex-1' : 'max-w-2xl flex-1')}>
        {translatable && (
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <TranslationToggle mode={mode} onChange={setMode} />
            <span className="text-[12px] text-muted-2">
              {mode === 'split'
                ? 'English beside the Afrikaans.'
                : mode === 'hover'
                  ? 'Hover a paragraph to reveal the English.'
                  : 'Afrikaans only.'}
            </span>
          </div>
        )}

        <TranslatableLesson lesson={lesson} mode={translatable ? mode : 'off'} />

        <div className="mt-12 border-t border-hairline pt-6">
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="text-[14px] font-semibold text-ink">
                {mastery === 'mastered' ? 'Marked as done.' : 'Finished this lesson?'}
              </p>
              <p className="mt-0.5 text-[12.5px] text-muted">Updates your subject progress.</p>
            </div>
            <Button
              variant={mastery === 'mastered' ? 'secondary' : 'primary'}
              onClick={() =>
                markLesson(lesson.id, lesson.subjectId, mastery === 'mastered' ? 'in-progress' : 'mastered')
              }
            >
              <Check />
              {mastery === 'mastered' ? 'Mark unfinished' : 'Mark as done'}
            </Button>
          </div>
        </div>
      </article>

      {headings.length > 1 && !wide && (
        <aside className="sticky top-6 hidden h-fit w-[200px] shrink-0 xl:block">
          <p className="mb-3 flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.11em] text-muted-2 uppercase">
            <List className="size-3" aria-hidden /> Contents
          </p>
          <ul className="space-y-0.5 border-l border-hairline">
            {headings.map((h) => (
              <li key={h.id}>
                <button
                  onClick={() => {
                    setActiveHeading(h.id);
                    document.getElementById(`block-${h.id}`)?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }}
                  className={cn(
                    '-ml-px block w-full border-l-2 py-1.5 pl-3 text-left text-[12.5px] transition-colors duration-100',
                    activeHeading === h.id
                      ? 'border-ink font-semibold text-ink'
                      : 'border-transparent text-muted hover:border-hairline-strong hover:text-ink',
                    h.level === 3 && 'pl-6 text-[12px]',
                  )}
                >
                  {h.text as string}
                </button>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────────────── */

export default function Library() {
  const { subjectId, chapterId, lessonId } = useParams();
  const navigate = useNavigate();

  const subject = subjectId ? getSubject(subjectId as SubjectId) : undefined;
  const chapter = chapterId ? getChapter(chapterId) : undefined;
  const lesson = lessonId ? getLesson(lessonId) : undefined;

  useBreadcrumbs(
    React.useMemo(() => {
      const out: { label: string; to?: string }[] = [];
      if (subject) out.push({ label: subject.shortName, to: `/library/${subject.id}` });
      if (chapter) out.push({ label: chapter.title, to: `/library/${subject?.id}/${chapter.id}` });
      if (lesson) out.push({ label: lesson.title });
      return out;
    }, [subject, chapter, lesson]),
  );

  const header: {
    eyebrow: string;
    title: string;
    highlight?: string;
    subtitle?: string;
  } = lesson
    ? { eyebrow: chapter?.title ?? '', title: lesson.title }
    : chapter
      ? {
          eyebrow: `${subject?.name} · Term ${chapter.term}`,
          title: chapter.title,
          subtitle: chapter.summary,
        }
      : subject
        ? {
            eyebrow: 'Study library',
            title: subject.name,
            // Swoop the last word of the subject name, so every subject
            // page gets the treatment without a per-subject lookup.
            highlight: subject.name.split(' ').at(-1),
            subtitle: subject.blurb,
          }
        : {
            eyebrow: 'Grade 10 · CAPS',
            title: 'Study library',
            highlight: 'library',
            subtitle: 'Your set works and written lessons.',
          };

  const back = lesson
    ? () => navigate(`/library/${subject?.id}/${chapter?.id}`)
    : chapter
      ? () => navigate(`/library/${subject?.id}`)
      : subject
        ? () => navigate('/library')
        : undefined;

  // The reader gets the full width; browse views sit on the standard measure.
  return (
    <Page width={lesson ? 'wide' : 'default'}>
      <PageTitle
        eyebrow={header.eyebrow}
        title={header.title}
        highlight={header.highlight}
        subtitle={header.subtitle}
        onBack={back}
      />

      {lesson ? (
        <LessonReader lessonId={lesson.id} />
      ) : chapter ? (
        <LessonList
          chapterId={chapter.id}
          onOpen={(id) => navigate(`/library/${subject?.id}/${chapter.id}/${id}`)}
        />
      ) : subject ? (
        <ChapterList subjectId={subject.id} onOpen={(id) => navigate(`/library/${subject.id}/${id}`)} />
      ) : (
        <SubjectGrid onPick={(id) => navigate(`/library/${id}`)} />
      )}
    </Page>
  );
}
