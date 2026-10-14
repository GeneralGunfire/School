import {
  BookOpen, Check, ChevronLeft, ChevronRight, Clock, List, Lock,
  Volume2, VolumeX, Headphones, Pause, Play, Footprints, ArrowRight, Bot, Copy,
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import * as React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Page, PageTitle } from '@/components/layout/Page';
import { useBreadcrumbs } from '@/components/layout/AppShell';
import { Badge, Button, Card, EmptyState, ProgressBar } from '@/components/ui/primitives';
import { SubjectIcon } from '@/components/ui/Icon';
import { SUBJECTS, getSubject, subjectColor } from '@/data/subjects';
import { chaptersFor, getChapter, getLesson, hasContent } from '@/data/library';
import { useStore } from '@/store/AppStore';
import { cn } from '@/lib/utils';
import { useListen, type ListenMode } from '@/lib/tts';
import { CreateAcronymButton } from '@/components/acronym/AcronymBuilder';
import { getChapterPaper } from '@/data/library';
import type { MasteryLevel, SubjectId, Lesson } from '@/lib/types';
import {
  TranslatableLesson,
  TranslationToggle,
  buildTopicPrompt,
  type TranslationMode,
} from './library/TranslatableLesson';

const MASTERY: Record<MasteryLevel, { label: string; tone: 'neutral' | 'strong' | 'positive' }> = {
  mastered: { label: 'Done', tone: 'positive' },
  'in-progress': { label: 'Reading', tone: 'strong' },
  'not-started': { label: 'Not started', tone: 'neutral' },
};

const EASE = [0.22, 1, 0.36, 1] as const;

/* ── Animated view wrapper ────────────────────────────────────────────── */

function SlideIn({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -12 }}
      transition={{ duration: 0.22, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ── Subject picker ──────────────────────────────────────────────────────
   Card grid — each card is a full clickable tile. Locked subjects show
   a dimmed card with a lock icon so the grid stays visually complete.    */

function SubjectGrid({ onPick }: { onPick: (id: SubjectId) => void }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {SUBJECTS.map((s) => {
        const available = hasContent(s.id);
        const chapters = chaptersFor(s.id);
        const lessonCount = chapters.reduce((n, c) => n + c.lessons.length, 0);
        const color = subjectColor(s.id);

        return (
          <button
            key={s.id}
            onClick={() => available && onPick(s.id)}
            disabled={!available}
            className={cn(
              'group relative flex flex-col rounded-2xl border px-5 py-5 text-left transition-all duration-150',
              available
                ? 'border-hairline bg-paper shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer'
                : 'border-hairline bg-paper opacity-50 cursor-default',
            )}
          >
            {/* Colour stripe */}
            <div
              className="mb-4 flex size-10 items-center justify-center rounded-xl"
              style={{ background: `color-mix(in srgb, ${color} 12%, transparent)` }}
            >
              <SubjectIcon name={s.icon} className="size-5" style={{ color }} />
            </div>

            <p className="text-[15px] font-semibold leading-snug text-ink">{s.name}</p>
            <p className="mt-1 text-[12px] leading-relaxed text-muted line-clamp-2">{s.blurb}</p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-[11.5px] font-medium text-muted-2">
                {available ? `${lessonCount} lesson${lessonCount === 1 ? '' : 's'}` : 'Coming soon'}
              </span>
              {available ? (
                <span
                  className="grid size-6 place-items-center rounded-full transition-colors"
                  style={{ background: color, color: '#fff' }}
                >
                  <ArrowRight className="size-3.5" />
                </span>
              ) : (
                <Lock className="size-3.5 text-muted-2" />
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}

/* ── Chapter cards ───────────────────────────────────────────────────── */

function ChapterCards({ subjectId, onOpen }: { subjectId: SubjectId; onOpen: (id: string) => void }) {
  const chapters = chaptersFor(subjectId);
  const { progress } = useStore();
  const color = subjectColor(subjectId);

  if (chapters.length === 0) {
    return (
      <Card>
        <EmptyState icon={BookOpen} title="No content yet" body="Lessons for this subject have not been written." />
      </Card>
    );
  }

  return (
    <div className="space-y-2.5">
      {chapters.map((c, idx) => {
        const done = c.lessons.filter((l) => progress[l.id]?.mastery === 'mastered').length;
        const pct = (done / c.lessons.length) * 100;
        const allDone = done === c.lessons.length;

        return (
          <motion.button
            key={c.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18, delay: idx * 0.04, ease: EASE }}
            onClick={() => onOpen(c.id)}
            className="group flex w-full items-center gap-5 rounded-2xl border border-hairline bg-paper px-6 py-5 text-left shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all duration-150 hover:shadow-[0_4px_14px_rgba(0,0,0,0.09)] hover:-translate-y-px active:translate-y-0"
          >
            {/* Number badge */}
            <div
              className="flex size-10 shrink-0 items-center justify-center rounded-xl text-[13px] font-bold text-white"
              style={{ background: color }}
            >
              {idx + 1}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <p className="text-[16px] font-semibold text-ink">{c.title}</p>
                {allDone && <Badge tone="positive">Complete</Badge>}
              </div>
              <p className="mt-1 text-[12.5px] text-muted line-clamp-1">{c.summary}</p>
              <div className="mt-3 flex items-center gap-3">
                <ProgressBar value={pct} color={color} className="max-w-[220px]" />
                <span className="shrink-0 text-[11.5px] font-medium text-muted-2 tabular-nums">
                  {done}/{c.lessons.length}
                </span>
              </div>
            </div>

            <ChevronRight
              className="size-5 shrink-0 text-muted-2 transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden
            />
          </motion.button>
        );
      })}
    </div>
  );
}

/* ── Lesson list ─────────────────────────────────────────────────────── */

function LessonCards({ chapterId, onOpen }: { chapterId: string; onOpen: (id: string) => void }) {
  const chapter = getChapter(chapterId);
  const { progress } = useStore();

  if (!chapter) return <EmptyState icon={BookOpen} title="Chapter not found" />;

  return (
    <div className="space-y-2">
      {chapter.lessons.map((l, i) => {
        const mastery = progress[l.id]?.mastery ?? 'not-started';
        const m = MASTERY[mastery];

        return (
          <motion.button
            key={l.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.16, delay: i * 0.035, ease: EASE }}
            onClick={() => onOpen(l.id)}
            className="group flex w-full items-center gap-4 rounded-2xl border border-hairline bg-paper px-5 py-4 text-left shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-150 hover:shadow-[0_3px_12px_rgba(0,0,0,0.08)] hover:-translate-y-px active:translate-y-0"
          >
            <span
              className="grid size-9 shrink-0 place-items-center rounded-xl border border-hairline text-[13px] font-semibold text-muted tabular-nums"
              style={{ background: 'var(--surface-raise)' }}
            >
              {mastery === 'mastered' ? (
                <Check className="size-4 text-positive" strokeWidth={2.5} aria-hidden />
              ) : (
                i + 1
              )}
            </span>

            <span className="min-w-0 flex-1">
              <span className="block truncate text-[14.5px] font-semibold text-ink">{l.title}</span>
              <span className="mt-1 flex items-center gap-1.5 text-[11.5px] text-muted">
                <Clock className="size-3" aria-hidden /> ~{l.minutes} min
              </span>
            </span>

            <Badge tone={m.tone} className="shrink-0">{m.label}</Badge>

            <ChevronRight
              className="size-4 shrink-0 text-muted-2 transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden
            />
          </motion.button>
        );
      })}
    </div>
  );
}

/* ── AI Topic Prompt button ──────────────────────────────────────────── */

function AiTopicButton({ lesson }: { lesson: Lesson }) {
  const [copied, setCopied] = React.useState(false);
  const prompt = React.useMemo(() => buildTopicPrompt(lesson), [lesson]);

  const copy = () => {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <button
      onClick={copy}
      title="Copy a ChatGPT/AI prompt for this entire topic"
      className={cn(
        'flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-[12.5px] font-medium transition-all duration-150',
        copied
          ? 'border-positive/60 bg-positive/10 text-positive'
          : 'border-[#5865f2]/40 bg-[#5865f2]/8 text-[#5865f2] hover:bg-[#5865f2]/14 hover:border-[#5865f2]/60',
      )}
    >
      {copied ? <Check className="size-3.5" /> : <Bot className="size-3.5" />}
      {copied ? 'Copied!' : 'AI: Full topic'}
      {!copied && <Copy className="size-3 opacity-60" />}
    </button>
  );
}

/* ── Listen controls ─────────────────────────────────────────────────── */

function ListenControls({ listen }: { listen: ReturnType<typeof useListen> }) {
  const { state, mode, progress } = listen;
  const btn = 'flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-[12.5px] font-medium transition-all duration-100';
  const idle = 'border-hairline text-muted hover:border-hairline-strong hover:text-ink';
  const active = 'border-accent bg-accent-wash text-accent-strong';

  const pill = (m: ListenMode, label: string, Icon: typeof Volume2) => (
    <button key={m} onClick={() => listen.start(m)} className={cn(btn, state !== 'idle' && mode === m ? active : idle)}>
      <Icon className="size-3.5" aria-hidden /> {label}
    </button>
  );

  return (
    <div className="ml-auto flex flex-wrap items-center gap-1.5">
      {state === 'idle' ? (
        <>
          {pill('podcast', 'Podcast', Headphones)}
          {pill('read', 'Read aloud', Volume2)}
        </>
      ) : (
        <>
          <button onClick={state === 'paused' ? listen.resume : listen.pause} disabled={state === 'loading'} className={cn(btn, active)}>
            {state !== 'paused'
              ? <><Pause className="size-3.5" aria-hidden /> {state === 'loading' ? 'Loading' : 'Pause'}</>
              : <><Play className="size-3.5" aria-hidden /> Resume</>}
            <span className="tabular-nums opacity-70">{Math.round(progress * 100)}%</span>
          </button>
          <button onClick={listen.stop} aria-label="Stop" className="rounded-xl border border-hairline p-1.5 text-muted transition-colors hover:border-hairline-strong hover:text-ink">
            <VolumeX className="size-3.5" aria-hidden />
          </button>
        </>
      )}
      <select
        value={listen.rate}
        onChange={(e) => listen.setRate(Number(e.target.value))}
        aria-label="Speed"
        className="rounded-xl border border-hairline bg-transparent px-2 py-1.5 text-[12.5px] text-muted"
      >
        {[0.8, 0.9, 1, 1.1, 1.25, 1.5].map((r) => <option key={r} value={r}>{r}x</option>)}
      </select>
      {state === 'loading' && (
        <span className="basis-full text-right text-[11px] text-muted-2">
          Loading voice{listen.download ? ` (${Math.round(listen.download)}%)` : ''}. The first time downloads a one-off ~90 MB model, then it works offline.
        </span>
      )}
      {listen.fallback && (
        <span className="basis-full text-right text-[11px] text-muted-2">Could not load the natural English voice (are you online?). Using the basic system voice.</span>
      )}
      {listen.missingAfVoice && state === 'idle' && (
        <span className="basis-full text-right text-[11px] text-muted-2">No Afrikaans voice found. Install one in Windows Settings, Time &amp; language, Speech (Adri or Willem).</span>
      )}
      {listen.langs === 'both' && state === 'idle' && (
        <span className="basis-full text-right text-[11px] text-muted-2">Side by side: each paragraph in Afrikaans, then English.</span>
      )}
    </div>
  );
}

/* ── Lesson reader ───────────────────────────────────────────────────── */

function LessonReader({ lessonId }: { lessonId: string }) {
  const lesson = getLesson(lessonId);
  const { progress, touchLesson, markLesson } = useStore();
  const [mode, setMode] = React.useState<TranslationMode>('off');
  const [activeHeading, setActiveHeading] = React.useState<string | null>(null);
  const [stepMode, setStepMode] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);

  const subject = lesson ? getSubject(lesson.subjectId) : undefined;
  const translatable = subject?.hasTranslation ?? false;
  const isMathSubject = lesson?.subjectId.startsWith('math-') ?? false;
  const listen = useListen(lesson, !translatable ? 'en' : mode === 'split' ? 'both' : 'af');

  React.useEffect(() => {
    if (lesson) touchLesson(lesson.id, lesson.subjectId);
    listen.stop();
    setCurrentStep(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonId]);

  const totalBlocks = lesson?.blocks.length ?? 0;
  const visibleBlocks = React.useMemo(() => {
    if (!lesson) return [];
    if (!stepMode) return lesson.blocks;
    return lesson.blocks.slice(0, currentStep + 1);
  }, [lesson, stepMode, currentStep]);

  const headings = React.useMemo(
    () => lesson?.blocks.filter((b) => b.type === 'heading') ?? [],
    [lesson],
  );

  const { prevLesson, nextLesson } = React.useMemo(() => {
    if (!lesson) return { prevLesson: undefined, nextLesson: undefined };
    const chapter = getChapter(lesson.chapterId);
    const idx = chapter?.lessons.findIndex((l) => l.id === lessonId) ?? -1;
    return {
      prevLesson: idx > 0 ? chapter?.lessons[idx - 1] : undefined,
      nextLesson: idx >= 0 && idx < (chapter?.lessons.length ?? 0) - 1 ? chapter?.lessons[idx + 1] : undefined,
    };
  }, [lesson, lessonId]);

  const navigate = useNavigate();

  if (!lesson) return <EmptyState icon={BookOpen} title="Lesson not found" />;

  const mastery = progress[lesson.id]?.mastery ?? 'not-started';
  const wide = mode === 'split' || mode === 'hover';

  return (
    <div className="mx-auto flex w-full justify-center gap-12">
      <article className={cn('min-w-0', wide ? 'flex-1' : isMathSubject ? 'w-full flex-1' : 'max-w-2xl flex-1')}>
        {/* Toolbar */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          {translatable && (
            <>
              <TranslationToggle mode={mode} onChange={setMode} />
              <span className="text-[12px] text-muted-2">
                {mode === 'split' ? 'English beside Afrikaans.' : mode === 'hover' ? 'Hover to reveal English.' : 'Afrikaans only.'}
              </span>
            </>
          )}
          {isMathSubject && (
            <AiTopicButton lesson={lesson} />
          )}
          {isMathSubject && (
            <button
              onClick={() => { setStepMode(s => !s); setCurrentStep(0); }}
              className={cn(
                'flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-[12.5px] font-medium transition-all duration-100',
                stepMode
                  ? 'border-accent bg-accent-wash text-accent-strong'
                  : 'border-hairline text-muted hover:border-hairline-strong hover:text-ink',
              )}
            >
              <Footprints className="size-3.5" aria-hidden />
              {stepMode ? 'Steps ON' : 'Step mode'}
            </button>
          )}
          {!isMathSubject && (
            <ListenControls listen={listen} />
          )}
          <CreateAcronymButton subjectId={lesson.subjectId} paper={getChapterPaper(lesson.chapterId)} className="ml-auto" />
        </div>

        <TranslatableLesson lesson={lesson} mode={translatable ? mode : 'off'} visibleBlocks={visibleBlocks} isMath={isMathSubject} />

        {/* Step mode controls */}
        {stepMode && (
          <div className="mt-8 flex items-center justify-between rounded-2xl border border-hairline px-5 py-3.5" style={{ background: 'var(--surface-raise)' }}>
            <span className="text-[13px] font-medium text-muted">
              Step {currentStep + 1} of {totalBlocks}
            </span>
            <button
              onClick={() => setCurrentStep(s => Math.min(s + 1, totalBlocks - 1))}
              disabled={currentStep >= totalBlocks - 1}
              className="flex items-center gap-1.5 rounded-xl border border-hairline px-4 py-2 text-[13px] font-semibold text-ink transition-colors hover:border-hairline-strong hover:bg-surface-raise disabled:cursor-default disabled:opacity-40"
            >
              {currentStep >= totalBlocks - 1 ? 'All done' : 'Next Step'}
              {currentStep < totalBlocks - 1 && <ChevronRight className="size-4" />}
            </button>
          </div>
        )}

        {/* Mark done + prev/next */}
        <div className="mt-12 border-t border-hairline pt-6">
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="text-[14px] font-semibold text-ink">
                {mastery === 'mastered' ? 'Marked as done.' : 'Finished this lesson?'}
              </p>
              <p className="mt-0.5 text-[12.5px] text-muted">Updates your progress.</p>
            </div>
            <Button
              variant={mastery === 'mastered' ? 'secondary' : 'primary'}
              onClick={() => markLesson(lesson.id, lesson.subjectId, mastery === 'mastered' ? 'in-progress' : 'mastered')}
            >
              <Check />
              {mastery === 'mastered' ? 'Mark unfinished' : 'Mark as done'}
            </Button>
          </div>

          {(prevLesson || nextLesson) && (
            <div className="mt-6 flex items-center gap-3">
              {prevLesson ? (
                <button
                  onClick={() => navigate(`/library/${prevLesson.subjectId}/${prevLesson.chapterId}/${prevLesson.id}`)}
                  className="flex flex-1 items-center gap-2 rounded-2xl border border-hairline px-4 py-3 text-left transition-all duration-100 hover:border-hairline-strong hover:shadow-[0_2px_8px_rgba(0,0,0,0.07)]"
                >
                  <ChevronLeft className="size-4 shrink-0 text-muted" aria-hidden />
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold tracking-widest text-muted-2 uppercase">Previous</p>
                    <p className="truncate text-[13px] font-medium text-ink">{prevLesson.title}</p>
                  </div>
                </button>
              ) : <div className="flex-1" />}
              {nextLesson ? (
                <button
                  onClick={() => navigate(`/library/${nextLesson.subjectId}/${nextLesson.chapterId}/${nextLesson.id}`)}
                  className="flex flex-1 items-center justify-end gap-2 rounded-2xl border border-hairline px-4 py-3 text-right transition-all duration-100 hover:border-hairline-strong hover:shadow-[0_2px_8px_rgba(0,0,0,0.07)]"
                >
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold tracking-widest text-muted-2 uppercase">Next</p>
                    <p className="truncate text-[13px] font-medium text-ink">{nextLesson.title}</p>
                  </div>
                  <ChevronRight className="size-4 shrink-0 text-muted" aria-hidden />
                </button>
              ) : <div className="flex-1" />}
            </div>
          )}
        </div>
      </article>

      {headings.length > 1 && !wide && (
        <aside className="sticky top-6 hidden h-fit w-[200px] shrink-0 xl:block">
          <p className="mb-3 flex items-center gap-1.5 text-[10px] font-semibold tracking-widest text-muted-2 uppercase">
            <List className="size-3" aria-hidden /> Contents
          </p>
          <ul className="space-y-0.5 border-l border-hairline">
            {headings.map((h) => (
              <li key={h.id}>
                <button
                  onClick={() => {
                    setActiveHeading(h.id);
                    document.getElementById(`block-${h.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    title: string;
    highlight?: string;
    subtitle?: string;
  } = lesson
    ? { title: lesson.title }
    : chapter
      ? { title: chapter.title, subtitle: chapter.summary }
      : subject
        ? {
            title: subject.name,
            highlight: subject.name.split(' ').at(-1),
            subtitle: subject.blurb,
          }
        : {
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

  return (
    <Page width={lesson ? 'wide' : 'default'}>
      <PageTitle
        title={header.title}
        highlight={header.highlight}
        subtitle={header.subtitle}
        onBack={back}
      />

      <AnimatePresence mode="wait">
        {lesson ? (
          <SlideIn id={`lesson-${lesson.id}`}>
            <LessonReader lessonId={lesson.id} />
          </SlideIn>
        ) : chapter ? (
          <SlideIn id={`chapter-${chapter.id}`}>
            <LessonCards
              chapterId={chapter.id}
              onOpen={(id) => navigate(`/library/${subject?.id}/${chapter.id}/${id}`)}
            />
          </SlideIn>
        ) : subject ? (
          <SlideIn id={`subject-${subject.id}`}>
            <ChapterCards subjectId={subject.id} onOpen={(id) => navigate(`/library/${subject.id}/${id}`)} />
          </SlideIn>
        ) : (
          <SlideIn id="subjects">
            <SubjectGrid onPick={(id) => navigate(`/library/${id}`)} />
          </SlideIn>
        )}
      </AnimatePresence>
    </Page>
  );
}
