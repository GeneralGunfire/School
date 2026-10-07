import { AnimatePresence, motion } from 'motion/react';
import {
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Plus,
  Rows3,
  Trash2,
  X,
} from 'lucide-react';
import * as React from 'react';
import { Page, PageTitle } from '@/components/layout/Page';
import { Button, Card, SegmentedControl } from '@/components/ui/primitives';
import { Rise } from '@/components/ui/Rise';
import { SUBJECTS, getSubject, subjectColor } from '@/data/subjects';
import { useStore } from '@/store/AppStore';
import { drawerVariants, scrimVariants, ease } from '@/lib/motion';
import {
  addDays,
  cn,
  formatLongDate,
  formatMonthYear,
  fromDayKey,
  toDayKey,
  todayKey,
} from '@/lib/utils';
import type { StudyBlock, SubjectId } from '@/lib/types';

const WEEKDAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

/** Six weeks of day keys covering `month`, Monday-first. */
function monthGrid(month: Date): string[] {
  const first = new Date(month.getFullYear(), month.getMonth(), 1);
  // getDay() is Sunday-first; shift so Monday is column 0.
  const offset = (first.getDay() + 6) % 7;
  const start = addDays(first, -offset);
  return Array.from({ length: 42 }, (_, i) => toDayKey(addDays(start, i)));
}

const FIELD =
  'w-full rounded-[0.55rem] border px-3 py-2 text-[0.82rem] text-ink outline-none ' +
  'transition-[border-color,box-shadow] duration-100 placeholder:text-muted-2 ' +
  'focus:border-accent focus:shadow-[0_0_0_3px_var(--color-accent-ring)]';

const FIELD_STYLE: React.CSSProperties = {
  borderColor: 'var(--edge)',
  background: 'var(--color-paper)',
};

/* ── Add-block form ──────────────────────────────────────────────────────── */

function AddBlockForm({ date, onDone }: { date: string; onDone: () => void }) {
  const { addBlock } = useStore();
  const [subjectId, setSubjectId] = React.useState<SubjectId>(SUBJECTS[0].id);
  const [topic, setTopic] = React.useState('');
  const [duration, setDuration] = React.useState(45);
  const [notes, setNotes] = React.useState('');
  const topicRef = React.useRef<HTMLInputElement>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;
    addBlock({ date, subjectId, topic: topic.trim(), duration, notes: notes.trim() || undefined });
    // Clear and refocus rather than closing — planning a day usually means
    // adding several blocks in a row.
    setTopic('');
    setNotes('');
    topicRef.current?.focus();
  };

  return (
    <form
      onSubmit={submit}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          e.stopPropagation();
          onDone();
        }
      }}
    >
      <div
        className="space-y-2.5 rounded-[0.7rem] border p-3.5"
        style={{
          borderColor: 'var(--edge)',
          background: 'var(--surface-raise)',
          boxShadow: 'inset 0 1px 0 var(--surface-inset-top)',
        }}
      >
        <input
          ref={topicRef}
          autoFocus
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="What are you studying?"
          className={FIELD}
          style={FIELD_STYLE}
        />

        <div className="flex gap-2">
          <select
            value={subjectId}
            onChange={(e) => setSubjectId(e.target.value as SubjectId)}
            className={cn(FIELD, 'min-w-0 flex-1')}
            style={FIELD_STYLE}
          >
            {SUBJECTS.map((s) => (
              <option key={s.id} value={s.id}>
                {s.shortName}
              </option>
            ))}
          </select>
          <select
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className={cn(FIELD, 'w-[6.4rem] shrink-0')}
            style={FIELD_STYLE}
          >
            {[15, 20, 30, 45, 60, 90, 120].map((m) => (
              <option key={m} value={m}>
                {m} min
              </option>
            ))}
          </select>
        </div>

        <input
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Notes (optional)"
          className={FIELD}
          style={FIELD_STYLE}
        />

        <div className="flex items-center gap-2 pt-0.5">
          <Button type="submit" variant="primary" size="sm" className="flex-1" disabled={!topic.trim()}>
            <Plus /> Add block
          </Button>
          <Button type="button" variant="ghost" size="sm" onClick={onDone}>
            Done
          </Button>
        </div>
        <p className="text-[0.68rem] text-muted-2">Enter adds and keeps the form open.</p>
      </div>
    </form>
  );
}

/* ── Day drawer ──────────────────────────────────────────────────────────── */

function DayPanel({ date, onClose }: { date: string; onClose: () => void }) {
  const { blocks, reflections, toggleBlock, removeBlock, setReflection } = useStore();
  const [adding, setAdding] = React.useState(false);

  const dayBlocks = blocks.filter((b) => b.date === date);
  const done = dayBlocks.filter((b) => b.done).length;
  const reflection = reflections[date]?.text ?? '';
  const totalMinutes = dayBlocks.reduce((n, b) => n + b.duration, 0);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <>
      <motion.div
        variants={scrimVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/30"
      />
      <motion.aside
        variants={drawerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        role="dialog"
        aria-label={`Study plan for ${formatLongDate(fromDayKey(date))}`}
        className="fixed inset-y-0 right-0 z-50 flex w-[26rem] flex-col border-l"
        style={{
          borderColor: 'var(--edge)',
          background: 'var(--surface)',
          boxShadow: '-1.5rem 0 4rem -1.5rem var(--shadow-ambient)',
        }}
      >
        <header
          className="surface-header flex shrink-0 items-start justify-between gap-3 border-b px-5 py-4"
          style={{ borderColor: 'var(--edge)' }}
        >
          <div className="min-w-0">
            <p className="text-[0.95rem] font-semibold text-ink">
              {formatLongDate(fromDayKey(date))}
            </p>
            <p className="mt-1 text-[0.75rem] text-muted">
              {dayBlocks.length === 0
                ? 'Nothing planned'
                : `${done}/${dayBlocks.length} done · ${totalMinutes} min planned`}
            </p>
          </div>
          <Button variant="ghost" size="icon-sm" onClick={onClose} aria-label="Close">
            <X />
          </Button>
        </header>

        <div className="min-h-0 flex-1 space-y-5 overflow-y-auto px-5 py-5">
          <section>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.13em] text-muted uppercase">
                <span className="label-rule" aria-hidden />
                Study blocks
              </h3>
              {!adding && (
                <Button variant="secondary" size="sm" onClick={() => setAdding(true)}>
                  <Plus /> Add
                </Button>
              )}
            </div>

            <AnimatePresence initial={false}>
              {adding && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={ease}
                  className="overflow-hidden"
                >
                  <div className="pb-3">
                    <AddBlockForm date={date} onDone={() => setAdding(false)} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {dayBlocks.length === 0 && !adding ? (
              <p className="py-8 text-center text-[0.8rem] text-muted-2">
                No study blocks for this day.
              </p>
            ) : (
              <ul className="space-y-2">
                {dayBlocks.map((b, i) => (
                  <Rise
                    as="li"
                    i={i}
                    key={b.id}
                    className="group flex items-start gap-3 rounded-[0.6rem] border px-3 py-2.5 transition-colors duration-100"
                    style={{ borderColor: 'var(--edge)', background: 'var(--color-paper)' }}
                  >
                    <button
                      onClick={() => toggleBlock(b.id)}
                      aria-label={b.done ? 'Mark as not done' : 'Mark as done'}
                      className={cn(
                        'mt-0.5 grid size-[1.15rem] shrink-0 place-items-center rounded-[0.35rem] border transition-colors duration-100',
                        b.done
                          ? 'border-ink bg-ink text-paper'
                          : 'border-hairline-strong text-transparent hover:border-muted',
                      )}
                    >
                      <Check className="size-3" strokeWidth={3} />
                    </button>
                    <div className="min-w-0 flex-1">
                      <p
                        className={cn(
                          'text-[0.82rem] font-medium',
                          b.done ? 'text-muted-2 line-through' : 'text-ink',
                        )}
                      >
                        {b.topic}
                      </p>
                      <p className="mt-1 text-[0.72rem] text-muted">
                        <span style={{ color: subjectColor(b.subjectId) }}>
                          {getSubject(b.subjectId)?.shortName}
                        </span>
                        {' · '}
                        {b.duration} min
                      </p>
                      {b.notes && <p className="mt-1 text-[0.72rem] text-muted-2">{b.notes}</p>}
                    </div>
                    <button
                      onClick={() => removeBlock(b.id)}
                      aria-label="Remove block"
                      className="shrink-0 rounded-md p-1 text-muted-2 opacity-0 transition-all duration-100 group-hover:opacity-100 hover:bg-critical-wash hover:text-critical"
                    >
                      <Trash2 className="size-3.5" />
                    </button>
                  </Rise>
                ))}
              </ul>
            )}
          </section>

          <section>
            <h3 className="mb-3 flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.13em] text-muted uppercase">
              <span className="label-rule" aria-hidden />
              Daily reflection
            </h3>
            <textarea
              value={reflection}
              onChange={(e) => setReflection(date, e.target.value)}
              placeholder="How did today go? What needs more work?"
              rows={5}
              className={cn(FIELD, 'resize-none leading-relaxed')}
              style={FIELD_STYLE}
            />
            <p className="mt-2 text-[0.68rem] text-muted-2">Saves as you type.</p>
          </section>
        </div>
      </motion.aside>
    </>
  );
}

/* ── Month view ──────────────────────────────────────────────────────────── */

function MonthView({
  month,
  blocks,
  onPick,
}: {
  month: Date;
  blocks: StudyBlock[];
  onPick: (d: string) => void;
}) {
  const days = monthGrid(month);
  const today = todayKey();
  const byDay = React.useMemo(() => {
    const m = new Map<string, StudyBlock[]>();
    for (const b of blocks) m.set(b.date, [...(m.get(b.date) ?? []), b]);
    return m;
  }, [blocks]);

  return (
    <Card className="overflow-hidden">
      <div className="surface-header grid grid-cols-7 border-b" style={{ borderColor: 'var(--edge)' }}>
        {WEEKDAY_LABELS.map((d) => (
          <div key={d} className="px-3 py-2.5 text-center">
            <span className="text-[0.66rem] font-bold tracking-[0.13em] text-muted-2 uppercase">
              {d}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7">
        {days.map((key, i) => {
          const d = fromDayKey(key);
          const inMonth = d.getMonth() === month.getMonth();
          const isToday = key === today;
          const dayBlocks = byDay.get(key) ?? [];

          return (
            <button
              key={key}
              onClick={() => onPick(key)}
              className={cn(
                'group relative min-h-[6.2rem] border-r border-b p-2 text-left transition-colors duration-100',
                'hover:bg-paper-raise',
                !inMonth && 'opacity-45',
                i % 7 === 6 && 'border-r-0',
              )}
              style={{ borderColor: 'var(--edge)' }}
            >
              <span
                className={cn(
                  'inline-grid size-[1.6rem] place-items-center rounded-full text-[0.78rem] font-semibold tabular-nums transition-colors duration-100',
                  isToday
                    ? 'text-accent-foreground [background:var(--grad-royal)] shadow-[0_1px_3px_var(--shadow-mid)]'
                    : 'text-ink',
                )}
              >
                {d.getDate()}
              </span>

              <div className="mt-2 space-y-1">
                {dayBlocks.slice(0, 3).map((b) => (
                  <div
                    key={b.id}
                    className={cn(
                      'truncate rounded-[0.3rem] px-1.5 py-[3px] text-[0.66rem] font-medium',
                      b.done && 'opacity-50 line-through',
                    )}
                    style={{
                      background: `color-mix(in srgb, ${subjectColor(b.subjectId)} 13%, transparent)`,
                      color: subjectColor(b.subjectId),
                    }}
                  >
                    {b.topic}
                  </div>
                ))}
                {dayBlocks.length > 3 && (
                  <p className="pl-1.5 text-[0.66rem] text-muted-2">+{dayBlocks.length - 3} more</p>
                )}
              </div>

              {/* Quick-add affordance, revealed on hover. */}
              {dayBlocks.length === 0 && (
                <span className="absolute right-2 bottom-2 grid size-5 place-items-center rounded-md text-muted-2 opacity-0 transition-opacity duration-100 group-hover:opacity-100">
                  <Plus className="size-3.5" />
                </span>
              )}
            </button>
          );
        })}
      </div>
    </Card>
  );
}

/* ── Week view ───────────────────────────────────────────────────────────── */

function WeekView({ anchor, onPick }: { anchor: Date; onPick: (d: string) => void }) {
  const { blocks } = useStore();
  const offset = (anchor.getDay() + 6) % 7;
  const start = addDays(anchor, -offset);
  const days = Array.from({ length: 7 }, (_, i) => toDayKey(addDays(start, i)));
  const today = todayKey();

  return (
    <div className="grid grid-cols-7 gap-3">
      {days.map((key, i) => {
        const d = fromDayKey(key);
        const dayBlocks = blocks.filter((b) => b.date === key);
        const isToday = key === today;
        return (
          <Rise i={i} key={key}>
            <button onClick={() => onPick(key)} className="w-full text-left">
              <Card
                interactive
                className={cn('min-h-[14rem] p-3.5', isToday && 'border-accent/45')}
              >
                <p className="text-[0.66rem] font-bold tracking-[0.13em] text-muted-2 uppercase">
                  {WEEKDAY_LABELS[(d.getDay() + 6) % 7]}
                </p>
                <p
                  className={cn(
                    'mt-1 text-[1.3rem] font-semibold tabular-nums',
                    isToday ? 'text-accent' : 'text-ink',
                  )}
                >
                  {d.getDate()}
                </p>
                <div className="mt-3.5 space-y-1.5">
                  {dayBlocks.map((b) => (
                    <div
                      key={b.id}
                      className={cn('rounded-[0.4rem] px-2 py-1.5', b.done && 'opacity-50')}
                      style={{
                        background: `color-mix(in srgb, ${subjectColor(b.subjectId)} 12%, transparent)`,
                      }}
                    >
                      <p
                        className="truncate text-[0.68rem] font-semibold"
                        style={{ color: subjectColor(b.subjectId) }}
                      >
                        {getSubject(b.subjectId)?.shortName}
                      </p>
                      <p className={cn('mt-0.5 truncate text-[0.68rem] text-muted', b.done && 'line-through')}>
                        {b.topic}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </button>
          </Rise>
        );
      })}
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────────────────── */

export default function Calendar() {
  const { blocks } = useStore();
  const [month, setMonth] = React.useState(() => new Date());
  const [view, setView] = React.useState<'month' | 'week'>('month');
  const [selected, setSelected] = React.useState<string | null>(null);

  return (
    <Page width="wide">
      <PageTitle
        eyebrow="Study planner"
        title="Study calendar"
        highlight="calendar"
        subtitle="Click any day to plan study blocks and write a reflection."
        trailing={
          <SegmentedControl
            layoutId="calendar-view"
            value={view}
            onChange={setView}
            options={[
              { id: 'month', label: 'Month', icon: CalendarDays },
              { id: 'week', label: 'Week', icon: Rows3 },
            ]}
          />
        }
      />

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" onClick={() => setMonth(new Date())}>
            Today
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Previous month"
            onClick={() => setMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1))}
          >
            <ChevronLeft />
          </Button>
          <span className="min-w-[10rem] text-center text-[0.9rem] font-semibold text-ink">
            {formatMonthYear(month)}
          </span>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Next month"
            onClick={() => setMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1))}
          >
            <ChevronRight />
          </Button>

          <span className="ml-auto text-[0.75rem] text-muted-2">
            {blocks.length} block{blocks.length === 1 ? '' : 's'} planned
          </span>
        </div>

        {view === 'month' ? (
          <MonthView month={month} blocks={blocks} onPick={setSelected} />
        ) : (
          <WeekView anchor={month} onPick={setSelected} />
        )}
      </div>

      <AnimatePresence>
        {selected && <DayPanel date={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </Page>
  );
}
