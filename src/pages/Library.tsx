import {
  BookOpen, Check, ChevronLeft, ChevronRight, Clock, List, Lock,
  Volume2, VolumeX, Headphones, Pause, Play, Footprints, ArrowRight, Bot, Copy, Sparkles, FileDown,
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
import { useStore, useStoreSelector } from '@/store/AppStore';
import { cn } from '@/lib/utils';
import { useListen, IS_MOBILE, type ListenMode } from '@/lib/tts';
import { SelectionCapture, type SelectionCaptureHandle } from '@/components/acronym/SelectionCapture';
import { SaveToNotebookDialog } from '@/components/notebook/SaveToNotebookDialog';
import { AddToMindMapDialog } from '@/components/notebook/AddToMindMapDialog';
import { getChapterPaper } from '@/data/library';
import type { HighlightColor } from '@/lib/types';
import type { MasteryLevel, SubjectId, Lesson, Chapter } from '@/lib/types';
import { exportChapterPdf } from '@/lib/exportPdf';
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
  // Subjects with content first, empty ones pushed to the bottom — nothing
  // to do with a locked subject up top but find out it's empty.
  const ordered = React.useMemo(
    () => [...SUBJECTS].sort((a, b) => Number(hasContent(b.id)) - Number(hasContent(a.id))),
    [],
  );

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {ordered.map((s) => {
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
              'card card-interactive group relative flex items-center gap-4 px-5 py-4 text-left',
              !available && 'opacity-50 cursor-default',
              available && 'cursor-pointer',
            )}
          >
            <span
              className="grid size-10 shrink-0 place-items-center rounded-lg"
              style={{ background: `color-mix(in srgb, ${color} 12%, transparent)` }}
            >
              <SubjectIcon name={s.icon} className="size-5" style={{ color }} />
            </span>

            <div className="min-w-0 flex-1">
              <p className="truncate text-[14px] font-semibold leading-snug text-ink">{s.name}</p>
              <p className="mt-0.5 text-[11.75px] text-muted-2">
                {available ? `${lessonCount} lesson${lessonCount === 1 ? '' : 's'}` : 'Coming soon'}
              </p>
            </div>

            {available ? (
              <ArrowRight className="size-4 shrink-0 text-muted-2 transition-transform duration-100 group-hover:translate-x-0.5" aria-hidden />
            ) : (
              <Lock className="size-4 shrink-0 text-muted-2" aria-hidden />
            )}
          </button>
        );
      })}
    </div>
  );
}

/* ── Chapter cards ───────────────────────────────────────────────────── */

/** Chapter number for the badge — parsed from the title ("Chapter 7: ...") so it
    stays the book number even when chapters are grouped out of that order. */
function chapterNumber(c: Chapter, fallback: number): number {
  const m = c.title.match(/chapter\s+(\d+)/i);
  return m ? Number(m[1]) : fallback;
}

function ChapterRow({
  chapter: c,
  number,
  color,
  subjectName,
  isMathSubject,
  delay,
  onOpen,
}: {
  chapter: Chapter;
  number: number;
  color: string;
  subjectName: string | undefined;
  isMathSubject: boolean;
  delay: number;
  onOpen: (id: string) => void;
}) {
  // Selector-based read: this row only re-renders when ITS chapter's
  // mastered count changes, not on every progress update anywhere in the
  // app — matters once a chapter list has 15+ rows each reading `progress`.
  const done = useStoreSelector((s) => c.lessons.filter((l) => s.progress[l.id]?.mastery === 'mastered').length);
  const pct = (done / c.lessons.length) * 100;
  const allDone = done === c.lessons.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, delay, ease: EASE }}
      className="card card-interactive group flex w-full items-center gap-4 px-5 py-4"
    >
      <button onClick={() => onOpen(c.id)} className="flex min-w-0 flex-1 items-center gap-4 text-left">
        {/* Number badge */}
        <div
          className="flex size-9 shrink-0 items-center justify-center rounded-lg text-[11.75px] font-bold text-white"
          style={{ background: color }}
        >
          {number}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <p className="truncate text-[13.5px] font-semibold text-ink">{c.title}</p>
            {allDone && <Badge tone="positive">Complete</Badge>}
          </div>
          <div className="mt-1.5 flex items-center gap-2">
            <ProgressBar value={pct} color={color} className="max-w-40" height={5} />
            <span className="shrink-0 text-[10.5px] font-medium text-muted-2 tabular-nums">
              {done}/{c.lessons.length}
            </span>
          </div>
        </div>
      </button>

      {!isMathSubject && subjectName && <PdfExportButton chapter={c} subjectName={subjectName} variant="icon" />}

      <button onClick={() => onOpen(c.id)} aria-label={`Open ${c.title}`} className="shrink-0">
        <ChevronRight
          className="size-4 text-muted-2 transition-transform duration-150 group-hover:translate-x-0.5"
          aria-hidden
        />
      </button>
    </motion.div>
  );
}

function ChapterCards({ subjectId, onOpen }: { subjectId: SubjectId; onOpen: (id: string) => void }) {
  const chapters = chaptersFor(subjectId);
  const color = subjectColor(subjectId);
  const subject = getSubject(subjectId);
  const isMathSubject = subjectId.startsWith('math-');

  if (chapters.length === 0) {
    return (
      <Card>
        <EmptyState icon={BookOpen} title="No content yet" body="Lessons for this subject have not been written." />
      </Card>
    );
  }

  // When every chapter is tagged with a `category` (e.g. Business's exam-topic
  // groups), show them grouped under headings instead of one flat list — but
  // fall back to the flat list the moment any chapter lacks one, so a subject
  // mid-tagging never silently drops chapters into an "Other" bucket.
  const seen = Array.from(new Set(chapters.map((c) => c.category)));
  const grouped = seen.every((cat) => cat !== undefined) && seen.length > 1;
  // Known exam-paper groupings in revision order; anything unrecognised is
  // appended after, alphabetically, so a new category never gets lost.
  const CATEGORY_ORDER = ['Exam — Paper 1', 'Exam — Paper 2', 'Business Environments', 'Business Operations', 'Business Roles', 'Business Ventures'];
  const categories = grouped
    ? (seen as string[]).sort((a, b) => {
        const ia = CATEGORY_ORDER.indexOf(a);
        const ib = CATEGORY_ORDER.indexOf(b);
        if (ia === -1 && ib === -1) return a.localeCompare(b);
        if (ia === -1) return 1;
        if (ib === -1) return -1;
        return ia - ib;
      })
    : [];

  if (!grouped) {
    return (
      <div className="space-y-1.5">
        {chapters.map((c, idx) => (
          <ChapterRow
            key={c.id}
            chapter={c}
            number={chapterNumber(c, idx + 1)}
            color={color}
            subjectName={subject?.name}
            isMathSubject={isMathSubject}
            delay={Math.min(idx * 0.03, 0.24)}
            onOpen={onOpen}
          />
        ))}
      </div>
    );
  }

  let rowIdx = 0;
  return (
    <div className="space-y-8">
      {categories.map((cat) => (
        <div key={cat}>
          <p className="mb-3 flex items-center gap-2.5 text-[0.68rem] font-bold tracking-[0.13em] text-muted uppercase">
            <span className="label-rule" aria-hidden />
            {cat}
          </p>
          <div className="space-y-1.5">
            {chapters.filter((c) => c.category === cat).map((c) => {
              const idx = rowIdx++;
              return (
                <ChapterRow
                  key={c.id}
                  chapter={c}
                  number={chapterNumber(c, idx + 1)}
                  color={color}
                  subjectName={subject?.name}
                  isMathSubject={isMathSubject}
                  delay={Math.min(idx * 0.03, 0.24)}
                  onOpen={onOpen}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Lesson list ─────────────────────────────────────────────────────── */

function LessonCards({ chapterId, onOpen }: { chapterId: string; onOpen: (id: string) => void }) {
  const chapter = getChapter(chapterId);
  const { progress } = useStore();

  if (!chapter) return <EmptyState icon={BookOpen} title="Chapter not found" />;

  return (
    <div className="space-y-2.5">
      {chapter.lessons.map((l, i) => {
        const mastery = progress[l.id]?.mastery ?? 'not-started';
        const m = MASTERY[mastery];

        return (
          <motion.button
            key={l.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.16, delay: Math.min(i * 0.025, 0.24), ease: EASE }}
            onClick={() => onOpen(l.id)}
            className="card card-interactive group flex w-full items-center gap-4 px-5 py-4 text-left"
          >
            <span
              className="grid size-9 shrink-0 place-items-center rounded-lg border border-hairline text-[11.75px] font-semibold text-muted tabular-nums"
              style={{ background: 'var(--surface-raise)' }}
            >
              {mastery === 'mastered' ? (
                <Check className="size-4 text-positive" strokeWidth={2.5} aria-hidden />
              ) : (
                i + 1
              )}
            </span>

            <span className="min-w-0 flex-1">
              <span className="block truncate text-[13.5px] font-semibold text-ink">{l.title}</span>
              <span className="mt-1 flex items-center gap-1.5 text-[11px] text-muted">
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
        'flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-[11.75px] font-medium transition-colors duration-150',
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
  const btn = 'flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-[11.75px] font-medium transition-colors duration-100';
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
        className="rounded-xl border border-hairline bg-transparent px-2 py-1.5 text-[11.75px] text-muted"
      >
        {[0.8, 0.9, 1, 1.1, 1.25, 1.5].map((r) => <option key={r} value={r}>{r}x</option>)}
      </select>
      {state === 'loading' && (
        <span className="basis-full text-right text-[10.5px] text-muted-2">
          Loading voice{listen.download ? ` (${Math.round(listen.download)}%)` : ''}. The first time downloads a one-off ~90 MB model, then it works offline.
        </span>
      )}
      {listen.fallback && (
        <span className="basis-full text-right text-[10.5px] text-muted-2">
          {IS_MOBILE
            ? 'Using your device\'s voice for smooth playback on mobile.'
            : 'Could not load the natural English voice (are you online?). Using the basic system voice.'}
        </span>
      )}
      {listen.missingAfVoice && state === 'idle' && (
        <span className="basis-full text-right text-[10.5px] text-muted-2">No Afrikaans voice found. Install one in Windows Settings, Time &amp; language, Speech (Adri or Willem).</span>
      )}
      {listen.langs === 'both' && state === 'idle' && (
        <span className="basis-full text-right text-[10.5px] text-muted-2">Side by side: each paragraph in Afrikaans, then English.</span>
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
  const selectionRef = React.useRef<SelectionCaptureHandle>(null);
  const [notebookCapture, setNotebookCapture] = React.useState<{ text: string; color: HighlightColor } | null>(null);
  const [mindMapCapture, setMindMapCapture] = React.useState<{ text: string; color: HighlightColor } | null>(null);

  if (!lesson) return <EmptyState icon={BookOpen} title="Lesson not found" />;

  const mastery = progress[lesson.id]?.mastery ?? 'not-started';
  const wide = mode === 'split' || mode === 'hover';
  const captureSource = { lessonId: lesson.id, lessonTitle: lesson.title };

  return (
    <div className="mx-auto flex w-full justify-center gap-12">
      <article className={cn('min-w-0', wide ? 'flex-1' : isMathSubject ? 'w-full flex-1' : 'max-w-2xl flex-1')}>
        {/* Toolbar */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          {translatable && (
            <>
              <TranslationToggle mode={mode} onChange={setMode} />
              <span className="text-[11.5px] text-muted-2">
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
                'flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-[11.75px] font-medium transition-colors duration-100',
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
          <button
            onClick={() => selectionRef.current?.openBlank()}
            title="Select any sentence in this lesson to add it straight in, or click to start blank"
            className="ml-auto flex items-center gap-1.5 rounded-xl border border-accent/40 bg-accent-wash px-3 py-1.5 text-[11.75px] font-medium text-accent-strong transition-colors duration-150 hover:border-accent/60"
          >
            <Sparkles className="size-3.5" aria-hidden />
            Create an acronym
          </button>
        </div>

        <SelectionCapture
          ref={selectionRef}
          subjectId={lesson.subjectId}
          paper={getChapterPaper(lesson.chapterId)}
          onSaveToNotebook={(text, color) => setNotebookCapture({ text, color })}
          onAddToMindMap={(text, color) => setMindMapCapture({ text, color })}
        >
          <TranslatableLesson
            lesson={lesson}
            mode={translatable ? mode : 'off'}
            visibleBlocks={visibleBlocks}
            isMath={isMathSubject}
            activeBlockId={listen.activeBlockId}
            activeText={listen.activeText}
          />
        </SelectionCapture>

        {notebookCapture && (
          <SaveToNotebookDialog
            open
            onClose={() => setNotebookCapture(null)}
            subjectId={lesson.subjectId}
            text={notebookCapture.text}
            color={notebookCapture.color}
            source={captureSource}
          />
        )}
        {mindMapCapture && (
          <AddToMindMapDialog
            open
            onClose={() => setMindMapCapture(null)}
            subjectId={lesson.subjectId}
            text={mindMapCapture.text}
            color={mindMapCapture.color}
            source={captureSource}
          />
        )}

        {/* Step mode controls */}
        {stepMode && (
          <div className="mt-8 flex items-center justify-between rounded-2xl border border-hairline px-5 py-3.5" style={{ background: 'var(--surface-raise)' }}>
            <span className="text-[12.25px] font-medium text-muted">
              Step {currentStep + 1} of {totalBlocks}
            </span>
            <button
              onClick={() => setCurrentStep(s => Math.min(s + 1, totalBlocks - 1))}
              disabled={currentStep >= totalBlocks - 1}
              className="flex items-center gap-1.5 rounded-xl border border-hairline px-4 py-2 text-[12.25px] font-semibold text-ink transition-colors hover:border-hairline-strong hover:bg-surface-raise disabled:cursor-default disabled:opacity-40"
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
              <p className="text-[13px] font-semibold text-ink">
                {mastery === 'mastered' ? 'Marked as done.' : 'Finished this lesson?'}
              </p>
              <p className="mt-0.5 text-[11.75px] text-muted">Updates your progress.</p>
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
                  className="flex flex-1 items-center gap-2 rounded-2xl border border-hairline px-4 py-3 text-left transition-[border-color,box-shadow] duration-100 hover:border-hairline-strong hover:shadow-[0_2px_8px_rgba(0,0,0,0.07)]"
                >
                  <ChevronLeft className="size-4 shrink-0 text-muted" aria-hidden />
                  <div className="min-w-0">
                    <p className="text-[9.5px] font-semibold tracking-widest text-muted-2 uppercase">Previous</p>
                    <p className="truncate text-[12.25px] font-medium text-ink">{prevLesson.title}</p>
                  </div>
                </button>
              ) : <div className="flex-1" />}
              {nextLesson ? (
                <button
                  onClick={() => navigate(`/library/${nextLesson.subjectId}/${nextLesson.chapterId}/${nextLesson.id}`)}
                  className="flex flex-1 items-center justify-end gap-2 rounded-2xl border border-hairline px-4 py-3 text-right transition-[border-color,box-shadow] duration-100 hover:border-hairline-strong hover:shadow-[0_2px_8px_rgba(0,0,0,0.07)]"
                >
                  <div className="min-w-0">
                    <p className="text-[9.5px] font-semibold tracking-widest text-muted-2 uppercase">Next</p>
                    <p className="truncate text-[12.25px] font-medium text-ink">{nextLesson.title}</p>
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
          <p className="mb-3 flex items-center gap-1.5 text-[9.5px] font-semibold tracking-widest text-muted-2 uppercase">
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
                    '-ml-px block w-full border-l-2 py-1.5 pl-3 text-left text-[11.75px] transition-colors duration-100',
                    activeHeading === h.id
                      ? 'border-ink font-semibold text-ink'
                      : 'border-transparent text-muted hover:border-hairline-strong hover:text-ink',
                    h.level === 3 && 'pl-6 text-[11.5px]',
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

/* ── PDF export button ───────────────────────────────────────────────── */

function PdfExportButton({
  chapter,
  subjectName,
  variant = 'default',
}: {
  chapter: Chapter;
  subjectName: string;
  variant?: 'default' | 'icon';
}) {
  const [exporting, setExporting] = React.useState(false);

  const run = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setExporting(true);
    exportChapterPdf(chapter, subjectName);
    window.setTimeout(() => setExporting(false), 1200);
  };

  if (variant === 'icon') {
    return (
      <button
        onClick={run}
        title="Download this chapter as a PDF"
        aria-label="Download this chapter as a PDF"
        className="grid size-8 shrink-0 place-items-center rounded-lg border border-hairline text-muted transition-colors duration-100 hover:border-hairline-strong hover:text-ink"
      >
        {exporting ? <Check className="size-4" aria-hidden /> : <FileDown className="size-4" aria-hidden />}
      </button>
    );
  }

  return (
    <button
      onClick={run}
      className="flex items-center gap-1.5 rounded-xl border border-hairline px-3 py-1.5 text-[11.75px] font-medium text-muted transition-colors duration-100 hover:border-hairline-strong hover:text-ink"
    >
      {exporting ? <Check className="size-3.5" aria-hidden /> : <FileDown className="size-3.5" aria-hidden />}
      {exporting ? 'Opening print dialog…' : 'Download PDF'}
    </button>
  );
}

/* ── Chapter reader (every lesson in one page) ───────────────────────────
   Non-math subjects open a chapter directly into one continuous page with
   every lesson as a section, instead of a lesson picker. Read-aloud reads
   the chapter straight through; mark-as-done/progress still track per
   lesson under the hood — there's just no separate list to tap through. */

function ChapterSection({
  lesson,
  translatable,
  mode,
  activeBlockId,
  activeText,
  onSelectionRef,
  onCapture,
}: {
  lesson: Lesson;
  translatable: boolean;
  mode: TranslationMode;
  activeBlockId?: string;
  activeText?: string;
  onSelectionRef: (lessonId: string, handle: SelectionCaptureHandle | null) => void;
  onCapture: (lessonId: string, text: string, color: HighlightColor, kind: 'notebook' | 'mindmap') => void;
}) {
  // Actions are stable references (see AppStore's comment on `actions`), so
  // reading them via useStore doesn't cost anything; only `mastery` needs
  // the selector, so this section doesn't re-render for every other
  // lesson's progress change on a long combined chapter page.
  const { touchLesson, markLesson } = useStore();
  const mastery = useStoreSelector((s) => s.progress[lesson.id]?.mastery ?? 'not-started');

  React.useEffect(() => {
    touchLesson(lesson.id, lesson.subjectId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson.id]);

  return (
    <section id={`lesson-${lesson.id}`} className="scroll-mt-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-hairline pb-3">
        <h2 className="text-[17px] font-semibold tracking-[-0.01em] text-ink">{lesson.title}</h2>
        <button
          onClick={() => markLesson(lesson.id, lesson.subjectId, mastery === 'mastered' ? 'in-progress' : 'mastered')}
          className={cn(
            'flex shrink-0 items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[11px] font-medium transition-colors duration-100',
            mastery === 'mastered'
              ? 'border-positive/40 bg-positive/10 text-positive'
              : 'border-hairline text-muted hover:border-hairline-strong hover:text-ink',
          )}
        >
          <Check className="size-3.5" aria-hidden />
          {mastery === 'mastered' ? 'Done' : 'Mark done'}
        </button>
      </div>

      <SelectionCapture
        ref={(h) => onSelectionRef(lesson.id, h)}
        subjectId={lesson.subjectId}
        paper={getChapterPaper(lesson.chapterId)}
        onSaveToNotebook={(text, color) => onCapture(lesson.id, text, color, 'notebook')}
        onAddToMindMap={(text, color) => onCapture(lesson.id, text, color, 'mindmap')}
      >
        <TranslatableLesson
          lesson={lesson}
          mode={translatable ? mode : 'off'}
          activeBlockId={activeBlockId}
          activeText={activeText}
        />
      </SelectionCapture>
    </section>
  );
}

function ChapterReader({ chapterId }: { chapterId: string }) {
  const chapter = getChapter(chapterId);
  const [mode, setMode] = React.useState<TranslationMode>('off');
  const [notebookCapture, setNotebookCapture] = React.useState<{ lessonId: string; text: string; color: HighlightColor } | null>(null);
  const [mindMapCapture, setMindMapCapture] = React.useState<{ lessonId: string; text: string; color: HighlightColor } | null>(null);

  const subject = chapter ? getSubject(chapter.subjectId) : undefined;
  const translatable = subject?.hasTranslation ?? false;
  const listen = useListen(chapter?.lessons, !translatable ? 'en' : mode === 'split' ? 'both' : 'af');

  const selectionRefs = React.useRef(new Map<string, SelectionCaptureHandle>());
  const setSelectionRef = (lessonId: string, handle: SelectionCaptureHandle | null) => {
    if (handle) selectionRefs.current.set(lessonId, handle);
    else selectionRefs.current.delete(lessonId);
  };

  if (!chapter) return <EmptyState icon={BookOpen} title="Chapter not found" />;

  const activeLessonId = listen.activeBlockId
    ? chapter.lessons.find((l) => l.blocks.some((b) => b.id === listen.activeBlockId))?.id
    : undefined;

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="mb-8 flex flex-wrap items-center gap-3">
        {translatable && (
          <>
            <TranslationToggle mode={mode} onChange={setMode} />
            <span className="text-[11.5px] text-muted-2">
              {mode === 'split' ? 'English beside Afrikaans.' : mode === 'hover' ? 'Hover to reveal English.' : 'Afrikaans only.'}
            </span>
          </>
        )}
        <ListenControls listen={listen} />
        {subject && <PdfExportButton chapter={chapter} subjectName={subject.name} />}
      </div>

      <div className="space-y-12">
        {chapter.lessons.map((lesson) => (
          <ChapterSection
            key={lesson.id}
            lesson={lesson}
            translatable={translatable}
            mode={mode}
            activeBlockId={lesson.id === activeLessonId ? listen.activeBlockId : undefined}
            activeText={lesson.id === activeLessonId ? listen.activeText : undefined}
            onSelectionRef={setSelectionRef}
            onCapture={(lessonId, text, color, kind) => {
              if (kind === 'notebook') setNotebookCapture({ lessonId, text, color });
              else setMindMapCapture({ lessonId, text, color });
            }}
          />
        ))}
      </div>

      {notebookCapture && (
        <SaveToNotebookDialog
          open
          onClose={() => setNotebookCapture(null)}
          subjectId={chapter.subjectId}
          text={notebookCapture.text}
          color={notebookCapture.color}
          source={{ lessonId: notebookCapture.lessonId, lessonTitle: chapter.lessons.find((l) => l.id === notebookCapture.lessonId)?.title ?? chapter.title }}
        />
      )}
      {mindMapCapture && (
        <AddToMindMapDialog
          open
          onClose={() => setMindMapCapture(null)}
          subjectId={chapter.subjectId}
          text={mindMapCapture.text}
          color={mindMapCapture.color}
          source={{ lessonId: mindMapCapture.lessonId, lessonTitle: chapter.lessons.find((l) => l.id === mindMapCapture.lessonId)?.title ?? chapter.title }}
        />
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
  const isMathSubject = subject?.id.startsWith('math-') ?? false;
  // Non-math chapters open straight into the combined one-page reader — no
  // per-lesson picker. A lessonId in the URL (an old link, or Previous/Next
  // from elsewhere) still resolves: it just scrolls to that section instead
  // of being a separate page. Math is untouched: lesson picker as before.
  const combinedChapter = !!chapter && !isMathSubject;

  useBreadcrumbs(
    React.useMemo(() => {
      const out: { label: string; to?: string }[] = [];
      if (subject) out.push({ label: subject.shortName, to: `/library/${subject.id}` });
      if (chapter) out.push({ label: chapter.title, to: `/library/${subject?.id}/${chapter.id}` });
      if (lesson && !combinedChapter) out.push({ label: lesson.title });
      return out;
    }, [subject, chapter, lesson, combinedChapter]),
  );

  const header: {
    title: string;
    highlight?: string;
    subtitle?: string;
  } = lesson && !combinedChapter
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

  const back = lesson && !combinedChapter
    ? () => navigate(`/library/${subject?.id}/${chapter?.id}`)
    : chapter
      ? () => navigate(`/library/${subject?.id}`)
      : subject
        ? () => navigate('/library')
        : undefined;

  // Deep link with a lessonId into a combined chapter: scroll to that section.
  React.useEffect(() => {
    if (!combinedChapter || !lesson) return;
    const t = window.setTimeout(
      () => document.getElementById(`lesson-${lesson.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
      60,
    );
    return () => window.clearTimeout(t);
  }, [combinedChapter, lesson]);

  return (
    <Page width={lesson && !combinedChapter ? 'wide' : combinedChapter ? 'narrow' : 'default'}>
      <PageTitle
        title={header.title}
        highlight={header.highlight}
        subtitle={header.subtitle}
        onBack={back}
      />

      <AnimatePresence mode="wait">
        {lesson && !combinedChapter ? (
          <SlideIn id={`lesson-${lesson.id}`}>
            <LessonReader lessonId={lesson.id} />
          </SlideIn>
        ) : chapter ? (
          <SlideIn id={`chapter-${chapter.id}`}>
            {combinedChapter ? (
              <ChapterReader chapterId={chapter.id} />
            ) : (
              <LessonCards
                chapterId={chapter.id}
                onOpen={(id) => navigate(`/library/${subject?.id}/${chapter.id}/${id}`)}
              />
            )}
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
