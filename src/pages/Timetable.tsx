import { CalendarDays, Coffee, Pencil, Plus, RotateCcw, Rows3, Trash2, X } from 'lucide-react';
import * as React from 'react';
import { Page, PageTitle } from '@/components/layout/Page';
import { Button, Card, SegmentedControl } from '@/components/ui/primitives';
import { Rise } from '@/components/ui/Rise';
import { DAYS, todayWeekday } from '@/data/timetable';
import { useTimetable } from '@/store/TimetableStore';
import { SUBJECTS, getSubject, subjectColor } from '@/data/subjects';
import { cn, formatTime, nowMinutes, toMinutes } from '@/lib/utils';
import type { Period, SubjectId, TimetableEntry, Weekday } from '@/lib/types';

/* ── Cells ───────────────────────────────────────────────────────────────
   Neutral surface with the subject's colour carried by the label only.
   Twelve tinted cell fills made the grid read as a colour chart rather
   than a schedule. */

function EntryChip({ entry, dense }: { entry: TimetableEntry; dense?: boolean }) {
  const subject = entry.subjectId ? getSubject(entry.subjectId) : undefined;
  return (
    <div
      className="rounded-[0.4rem] border px-2 py-1.5 transition-colors duration-100 hover:border-hairline-strong"
      style={{ borderColor: 'var(--edge)', background: 'var(--surface-raise)' }}
    >
      <p
        className="truncate text-[0.76rem] leading-tight font-semibold"
        style={{ color: subjectColor(entry.subjectId) }}
      >
        {subject?.shortName ?? entry.label}
      </p>
      {!dense && entry.teacher && (
        <p className="mt-0.5 truncate text-[0.66rem] text-muted">
          {entry.teacher}
          {entry.room ? ` · ${entry.room}` : ''}
        </p>
      )}
    </div>
  );
}

function BreakChip({ label }: { label: string }) {
  return (
    <div
      className="rounded-[0.4rem] border border-dashed px-2 py-1.5"
      style={{ borderColor: 'var(--color-hairline-strong)' }}
    >
      <p className="flex items-center gap-1.5 text-[0.72rem] font-medium text-muted">
        <Coffee className="size-3" aria-hidden />
        {label}
      </p>
    </div>
  );
}

const FIELD = 'rounded-[0.45rem] border px-2.5 py-1.5 text-[0.78rem] outline-none focus:border-accent';
const FIELD_STYLE: React.CSSProperties = {
  borderColor: 'var(--edge)',
  background: 'var(--color-paper)',
};

/* ── Dialog shell ────────────────────────────────────────────────────── */

function Dialog({
  label,
  onClose,
  width,
  children,
}: {
  label: string;
  onClose: () => void;
  width: string;
  children: React.ReactNode;
}) {
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/30" onClick={onClose} />
      <div
        role="dialog"
        aria-label={label}
        className={cn(
          'fixed top-1/2 left-1/2 z-50 flex max-h-[82vh] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-[0.85rem] border',
          width,
        )}
        style={{
          borderColor: 'var(--edge)',
          background: 'var(--surface)',
          boxShadow: '0 1.5rem 4rem -1rem var(--shadow-ambient)',
        }}
      >
        {children}
      </div>
    </>
  );
}

/* ── Slot editor ─────────────────────────────────────────────────────────
   Opens over a single day+period cell. Deliberately small rather than a
   full-screen modal — editing a timetable means touching many cells. */

function SlotEditor({ day, period, onClose }: { day: Weekday; period: Period; onClose: () => void }) {
  const { entries, setSlot } = useTimetable();
  const [draft, setDraft] = React.useState<TimetableEntry[]>(
    entries.filter((e) => e.day === day && e.periodId === period.id),
  );

  const patch = (i: number, p: Partial<TimetableEntry>) =>
    setDraft((d) => d.map((x, xi) => (xi === i ? { ...x, ...p } : x)));

  return (
    <Dialog
      label={`Edit ${DAYS.find((d) => d.value === day)?.label} ${period.label}`}
      onClose={onClose}
      width="w-[26rem]"
    >
      <div
        className="surface-header flex shrink-0 items-center justify-between border-b px-4 py-3"
        style={{ borderColor: 'var(--edge)' }}
      >
        <div>
          <p className="text-[0.9rem] font-semibold text-ink">
            {DAYS.find((d) => d.value === day)?.label} · {period.label}
          </p>
          <p className="mt-0.5 text-[0.72rem] text-muted">
            {formatTime(period.start)} – {formatTime(period.end)}
          </p>
        </div>
        <Button variant="ghost" size="icon-sm" onClick={onClose} aria-label="Close">
          <X />
        </Button>
      </div>

      <div className="min-h-0 flex-1 space-y-2.5 overflow-y-auto p-4">
        {draft.length === 0 && (
          <p className="py-4 text-center text-[0.78rem] text-muted-2">Free period.</p>
        )}

        {draft.map((e, i) => (
          <div
            key={i}
            className="space-y-2 rounded-[0.6rem] border p-2.5"
            style={{ borderColor: 'var(--edge)', background: 'var(--surface-raise)' }}
          >
            <div className="flex gap-2">
              <select
                value={e.subjectId ?? ''}
                onChange={(ev) => {
                  const id = (ev.target.value || null) as SubjectId | null;
                  patch(i, { subjectId: id, label: id ? getSubject(id)?.shortName : 'Break' });
                }}
                className={cn(FIELD, 'min-w-0 flex-1')}
                style={FIELD_STYLE}
              >
                <option value="">— free / break —</option>
                {SUBJECTS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Remove class"
                onClick={() => setDraft((d) => d.filter((_, xi) => xi !== i))}
              >
                <Trash2 />
              </Button>
            </div>
            <div className="flex gap-2">
              <input
                value={e.teacher ?? ''}
                onChange={(ev) => patch(i, { teacher: ev.target.value })}
                placeholder="Teacher"
                className={cn(FIELD, 'min-w-0 flex-1 placeholder:text-muted-2')}
                style={FIELD_STYLE}
              />
              <input
                value={e.room ?? ''}
                onChange={(ev) => patch(i, { room: ev.target.value })}
                placeholder="Room"
                className={cn(FIELD, 'w-[6rem] shrink-0 placeholder:text-muted-2')}
                style={FIELD_STYLE}
              />
            </div>
          </div>
        ))}

        <Button
          variant="secondary"
          size="sm"
          className="w-full"
          onClick={() =>
            setDraft((d) => [
              ...d,
              { day, periodId: period.id, subjectId: SUBJECTS[0].id, label: SUBJECTS[0].shortName },
            ])
          }
        >
          <Plus /> Add class
        </Button>
      </div>

      <div
        className="flex shrink-0 items-center justify-end gap-2 border-t px-4 py-3"
        style={{ borderColor: 'var(--edge)' }}
      >
        <Button variant="ghost" size="sm" onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant="primary"
          size="sm"
          onClick={() => {
            setSlot(day, period.id, draft);
            onClose();
          }}
        >
          Save
        </Button>
      </div>
    </Dialog>
  );
}

/* ── Period editor ───────────────────────────────────────────────────── */

function PeriodEditor({ onClose }: { onClose: () => void }) {
  const { periods, updatePeriod, addPeriod, removePeriod, resetTimetable } = useTimetable();

  return (
    <Dialog label="Edit periods and times" onClose={onClose} width="w-[36rem]">
      <div
        className="surface-header flex shrink-0 items-center justify-between border-b px-4 py-3"
        style={{ borderColor: 'var(--edge)' }}
      >
        <div>
          <p className="text-[0.9rem] font-semibold text-ink">Periods &amp; times</p>
          <p className="mt-0.5 text-[0.72rem] text-muted">Applies across the whole app.</p>
        </div>
        <Button variant="ghost" size="icon-sm" onClick={onClose} aria-label="Close">
          <X />
        </Button>
      </div>

      <div className="min-h-0 flex-1 space-y-2 overflow-y-auto p-4">
        {periods.map((p) => (
          <div
            key={p.id}
            className="flex items-center gap-2 rounded-[0.6rem] border p-2.5"
            style={{ borderColor: 'var(--edge)', background: 'var(--surface-raise)' }}
          >
            <input
              value={p.label}
              onChange={(e) => updatePeriod(p.id, { label: e.target.value })}
              className={cn(FIELD, 'min-w-0 flex-1')}
              style={FIELD_STYLE}
            />
            <input
              type="time"
              value={p.start}
              onChange={(e) => updatePeriod(p.id, { start: e.target.value })}
              className={cn(FIELD, 'w-[6.6rem] shrink-0 tabular-nums')}
              style={FIELD_STYLE}
            />
            <input
              type="time"
              value={p.end}
              onChange={(e) => updatePeriod(p.id, { end: e.target.value })}
              className={cn(FIELD, 'w-[6.6rem] shrink-0 tabular-nums')}
              style={FIELD_STYLE}
            />
            <select
              value={p.kind}
              onChange={(e) => updatePeriod(p.id, { kind: e.target.value as Period['kind'] })}
              className={cn(FIELD, 'w-[6rem] shrink-0')}
              style={FIELD_STYLE}
            >
              <option value="lesson">Lesson</option>
              <option value="break">Break</option>
              <option value="assembly">Assembly</option>
            </select>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label={`Remove ${p.label}`}
              onClick={() => removePeriod(p.id)}
            >
              <Trash2 />
            </Button>
          </div>
        ))}
      </div>

      <div
        className="flex shrink-0 items-center justify-between gap-2 border-t px-4 py-3"
        style={{ borderColor: 'var(--edge)' }}
      >
        <div className="flex gap-2">
          <Button variant="secondary" size="sm" onClick={() => addPeriod()}>
            <Plus /> Add period
          </Button>
          <Button variant="ghost" size="sm" onClick={resetTimetable}>
            <RotateCcw /> Reset timetable
          </Button>
        </div>
        <Button variant="primary" size="sm" onClick={onClose}>
          Done
        </Button>
      </div>
    </Dialog>
  );
}

/* ── Week grid ───────────────────────────────────────────────────────── */

function WeekGrid({
  today,
  editing,
  onEditSlot,
}: {
  today: Weekday | null;
  editing: boolean;
  onEditSlot: (day: Weekday, period: Period) => void;
}) {
  const { periods, entries } = useTimetable();
  const now = nowMinutes();

  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-[7rem_repeat(5,1fr)]">
        <div className="surface-header border-b px-4 py-2.5" style={{ borderColor: 'var(--edge)' }}>
          <span className="text-[0.66rem] font-bold tracking-[0.13em] text-muted-2 uppercase">
            Period
          </span>
        </div>
        {DAYS.map((d) => (
          <div
            key={d.value}
            className="surface-header border-b border-l px-4 py-2.5"
            style={{ borderColor: 'var(--edge)' }}
          >
            <span
              className={cn(
                'flex items-center gap-1.5 text-[0.78rem] font-semibold',
                d.value === today ? 'text-ink' : 'text-muted',
              )}
            >
              {d.label}
              {d.value === today && (
                <span className="size-1.5 rounded-full bg-accent" aria-label="Today" />
              )}
            </span>
          </div>
        ))}

        {periods.map((p) => {
          const isNow = today !== null && now >= toMinutes(p.start) && now < toMinutes(p.end);
          return (
            <React.Fragment key={p.id}>
              <div
                className={cn('border-b px-4 py-2.5', isNow && 'bg-paper-raise')}
                style={{ borderColor: 'var(--edge)' }}
              >
                <p className={cn('text-[0.76rem] font-semibold', isNow ? 'text-accent' : 'text-ink')}>
                  {p.label}
                </p>
                <p className="mt-0.5 text-[0.66rem] text-muted-2 tabular-nums">
                  {p.start}–{p.end}
                </p>
              </div>

              {DAYS.map((d) => {
                const slot = entries.filter((e) => e.day === d.value && e.periodId === p.id);
                const highlight = isNow && d.value === today;
                return (
                  <div
                    key={`${p.id}-${d.value}`}
                    className={cn(
                      'relative space-y-1.5 border-b border-l p-2',
                      highlight && 'bg-paper-raise',
                      editing && 'cursor-pointer transition-colors duration-100 hover:bg-accent-wash',
                    )}
                    style={{ borderColor: 'var(--edge)' }}
                    onClick={editing ? () => onEditSlot(d.value, p) : undefined}
                  >
                    {p.kind === 'break' ? (
                      <BreakChip label={p.label} />
                    ) : slot.length === 0 ? (
                      <span className="flex justify-center py-2 text-[0.7rem] text-muted-2">
                        {editing ? <Plus className="size-3.5" /> : '—'}
                      </span>
                    ) : (
                      slot.map((e, i) =>
                        e.subjectId === null ? (
                          <BreakChip key={i} label={e.label ?? 'Break'} />
                        ) : (
                          <EntryChip key={i} entry={e} dense={slot.length > 1} />
                        ),
                      )
                    )}
                  </div>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
    </Card>
  );
}

/* ── Today ───────────────────────────────────────────────────────────── */

function TodayList({ day }: { day: Weekday }) {
  const { periods, entries } = useTimetable();
  const now = nowMinutes();

  const rows = periods
    .map((p) => ({
      period: p,
      entries: entries.filter((e) => e.day === day && e.periodId === p.id),
      isNow: now >= toMinutes(p.start) && now < toMinutes(p.end),
      isPast: now >= toMinutes(p.end),
    }))
    .filter((r) => r.entries.length > 0 || r.period.kind === 'break');

  return (
    <div className="space-y-2.5">
      {rows.map((r, i) => (
        <Rise i={i} key={r.period.id}>
          <Card className={cn('flex items-center gap-6 px-5 py-4', r.isPast && 'opacity-45')}>
            <div className="w-[6.8rem] shrink-0">
              <p className={cn('text-[0.84rem] font-semibold', r.isNow ? 'text-accent' : 'text-ink')}>
                {r.period.label}
              </p>
              <p className="mt-0.5 text-[0.7rem] text-muted-2 tabular-nums">
                {formatTime(r.period.start)} – {formatTime(r.period.end)}
              </p>
            </div>

            <div className="flex min-w-0 flex-1 flex-wrap gap-6">
              {r.period.kind === 'break' ? (
                <BreakChip label={r.period.label} />
              ) : (
                r.entries.map((e, ei) =>
                  e.subjectId === null ? (
                    <BreakChip key={ei} label={e.label ?? 'Break'} />
                  ) : (
                    <div key={ei} className="min-w-0">
                      <p
                        className="text-[0.9rem] leading-tight font-semibold"
                        style={{ color: subjectColor(e.subjectId) }}
                      >
                        {getSubject(e.subjectId)?.name ?? e.label}
                      </p>
                      {(e.teacher || e.room) && (
                        <p className="mt-1 text-[0.72rem] text-muted">
                          {[e.teacher, e.room].filter(Boolean).join(' · ')}
                        </p>
                      )}
                    </div>
                  ),
                )
              )}
            </div>

            {r.isNow && (
              <span className="shrink-0 rounded-[0.4rem] px-2 py-1 text-[0.66rem] font-bold tracking-wide text-accent-foreground uppercase [background:var(--grad-royal)]">
                Now
              </span>
            )}
          </Card>
        </Rise>
      ))}
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────────────── */

export default function Timetable() {
  const today = todayWeekday();
  const { periods, entries } = useTimetable();
  const [view, setView] = React.useState<'today' | 'week'>(today ? 'today' : 'week');
  const [editing, setEditing] = React.useState(false);
  const [slot, setSlot] = React.useState<{ day: Weekday; period: Period } | null>(null);
  const [periodsOpen, setPeriodsOpen] = React.useState(false);
  const now = nowMinutes();

  const current = React.useMemo(() => {
    if (today === null) return null;
    for (const p of periods) {
      if (p.kind !== 'lesson') continue;
      const e = entries.filter((x) => x.day === today && x.periodId === p.id && x.subjectId);
      if (e.length === 0) continue;
      if (now >= toMinutes(p.start) && now < toMinutes(p.end)) {
        return { period: p, entry: e[0], live: true };
      }
      if (toMinutes(p.start) > now) return { period: p, entry: e[0], live: false };
    }
    return null;
  }, [today, now, periods, entries]);

  // Editing only makes sense on the week grid, where every slot is visible.
  React.useEffect(() => {
    if (editing) setView('week');
  }, [editing]);

  return (
    <Page width="wide">
      <PageTitle
        eyebrow="Grade 10B"
        title="Weekly timetable"
        highlight="timetable"
        subtitle={
          editing
            ? 'Click any slot to change what is on. Changes apply everywhere in the app.'
            : current
              ? `${current.live ? 'On now' : 'Up next'} · ${current.period.label} · ${
                  getSubject(current.entry.subjectId!)?.name
                }`
              : today
                ? 'No more classes today.'
                : 'It is the weekend — here is the week ahead.'
        }
        trailing={
          <div className="flex items-center gap-2">
            {editing ? (
              <>
                <Button variant="secondary" size="sm" onClick={() => setPeriodsOpen(true)}>
                  Periods
                </Button>
                <Button variant="primary" size="sm" onClick={() => setEditing(false)}>
                  Done
                </Button>
              </>
            ) : (
              <>
                <SegmentedControl
                  layoutId="timetable-view"
                  value={view}
                  onChange={setView}
                  options={[
                    { id: 'today', label: 'Today', icon: CalendarDays, disabled: today === null },
                    { id: 'week', label: 'Week', icon: Rows3 },
                  ]}
                />
                <Button variant="secondary" size="sm" onClick={() => setEditing(true)}>
                  <Pencil /> Edit
                </Button>
              </>
            )}
          </div>
        }
      />

      {view === 'week' || today === null ? (
        <WeekGrid today={today} editing={editing} onEditSlot={(day, period) => setSlot({ day, period })} />
      ) : (
        <TodayList day={today} />
      )}

      {slot && <SlotEditor day={slot.day} period={slot.period} onClose={() => setSlot(null)} />}
      {periodsOpen && <PeriodEditor onClose={() => setPeriodsOpen(false)} />}
    </Page>
  );
}
