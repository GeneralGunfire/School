import { ArrowRight, Check, Clock, Coffee, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import * as React from 'react';
import { Page, PageTitle, Section } from '@/components/layout/Page';
import { Button, Card, EmptyState } from '@/components/ui/primitives';
import { getSubject } from '@/data/subjects';
import { DAYS, todayWeekday } from '@/data/timetable';
import { useSchedule } from '@/store/TimetableStore';
import { useStore } from '@/store/AppStore';
import {
  addDays,
  cn,
  formatLongDate,
  formatShortDate,
  formatTime,
  fromDayKey,
  greeting,
  nowMinutes,
  toDayKey,
  toMinutes,
  todayKey,
} from '@/lib/utils';

/* ── Today's classes ─────────────────────────────────────────────────────
   The timetable as a vertical timeline. This is the single most useful
   thing on the page: what is happening, and when. */

function ClassTimeline() {
  const { periods, entriesAt } = useSchedule();
  const weekday = todayWeekday();
  const mins = nowMinutes();

  const rows = React.useMemo(() => {
    if (weekday === null) return [];
    return periods.map((p) => {
      const entries = entriesAt(weekday, p.id).filter((e) => e.subjectId);
      const start = toMinutes(p.start);
      const end = toMinutes(p.end);
      return {
        period: p,
        entries,
        live: mins >= start && mins < end,
        past: mins >= end,
      };
    }).filter((r) => r.entries.length > 0 || r.period.kind === 'break');
  }, [weekday, mins, periods, entriesAt]);

  if (weekday === null) {
    return (
      <Card>
        <EmptyState
          icon={Coffee}
          title="It's the weekend"
          body="No classes today. Open the timetable to see the week ahead."
          action={
            <Button asChild variant="secondary">
              <Link to="/timetable">View timetable</Link>
            </Button>
          }
        />
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <ul>
        {rows.map((r) => {
          const isBreak = r.period.kind === 'break';
          return (
            <li
              key={r.period.id}
              className={cn(
                'relative flex items-stretch gap-5 border-b border-hairline px-5 last:border-b-0',
                isBreak ? 'py-2.5' : 'py-4',
                r.past && 'opacity-45',
                r.live && 'bg-paper-raise',
              )}
            >

              <div className="w-[76px] shrink-0 pt-px">
                <p
                  className={cn(
                    'text-[13px] font-semibold tabular-nums',
                    r.live ? 'text-accent' : 'text-ink',
                  )}
                >
                  {formatTime(r.period.start)}
                </p>
                <p className="mt-0.5 text-[11px] text-muted-2 tabular-nums">
                  {formatTime(r.period.end)}
                </p>
              </div>

              <div className="min-w-0 flex-1">
                {isBreak ? (
                  <p className="flex items-center gap-1.5 pt-1 text-[13px] font-medium text-muted">
                    <Coffee className="size-3.5" aria-hidden />
                    {r.period.label}
                  </p>
                ) : (
                  <div className="space-y-2">
                    {r.entries.map((e, i) => {
                      const subject = getSubject(e.subjectId!);
                      return (
                        <div key={i} className="flex items-baseline gap-2.5">
                          <div className="min-w-0">
                            <p className="text-[15px] leading-tight font-semibold text-ink">
                              {subject?.name ?? e.label}
                            </p>
                            {(e.teacher || e.room) && (
                              <p className="mt-1 text-[12px] text-muted">
                                {[e.teacher, e.room].filter(Boolean).join(' · ')}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="flex w-[70px] shrink-0 items-start justify-end pt-px">
                {r.live ? (
                  <span className="rounded-md bg-accent px-2 py-1 text-[10.5px] font-bold tracking-wide text-accent-foreground uppercase">
                    Now
                  </span>
                ) : (
                  <span className="text-[11px] text-muted-2">{r.period.label}</span>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

/* ── Study plan ──────────────────────────────────────────────────────── */

function StudyPlan() {
  const { blocks, toggleBlock } = useStore();
  const today = todayKey();
  const todayBlocks = blocks.filter((b) => b.date === today);

  if (todayBlocks.length === 0) {
    return (
      <Card>
        <EmptyState
          icon={Plus}
          title="Nothing planned today"
          body="Add a study block from the calendar to see it here."
          action={
            <Button asChild variant="primary">
              <Link to="/calendar">Open calendar</Link>
            </Button>
          }
        />
      </Card>
    );
  }

  return (
    <div className="space-y-2.5">
      {todayBlocks.map((b) => {
        const subject = getSubject(b.subjectId);
        return (
          <div key={b.id}>
            <button
              onClick={() => toggleBlock(b.id)}
              className="card card-interactive flex w-full items-center gap-4 px-5 py-4 text-left"
            >
              <span
                className={cn(
                  'grid size-6 shrink-0 place-items-center rounded-md border transition-colors duration-100',
                  b.done
                    ? 'border-ink bg-ink text-paper'
                    : 'border-hairline-strong bg-paper-raise text-transparent hover:border-muted',
                )}
                aria-hidden
              >
                <Check className="size-3.5" strokeWidth={3} />
              </span>

              <span className="min-w-0 flex-1">
                <span
                  className={cn(
                    'block truncate text-[15px] font-semibold',
                    b.done ? 'text-muted-2 line-through' : 'text-ink',
                  )}
                >
                  {b.topic}
                </span>
                <span className="mt-1 flex items-center gap-1.5 text-[12px] text-muted">
                  {subject?.shortName}
                </span>
              </span>

              <span className="flex shrink-0 items-center gap-1.5 text-[12.5px] font-medium text-muted tabular-nums">
                <Clock className="size-3.5" aria-hidden />
                {b.duration} min
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
}

/* ── Week strip ──────────────────────────────────────────────────────── */

function WeekStrip() {
  const { blocks } = useStore();
  const { entriesAt } = useSchedule();
  const today = todayKey();

  const days = React.useMemo(() => {
    const base = new Date();
    // Start from Monday of the current week.
    const offset = (base.getDay() + 6) % 7;
    return Array.from({ length: 5 }, (_, i) => {
      const d = addDays(base, i - offset);
      const key = toDayKey(d);
      return {
        key,
        date: d,
        weekday: (i + 1) as 1 | 2 | 3 | 4 | 5,
        isToday: key === today,
        blocks: blocks.filter((b) => b.date === key),
      };
    });
  }, [blocks, today]);

  return (
    <div className="grid grid-cols-5 gap-3">
      {days.map((d) => {
        const hasClasses = entriesAt(d.weekday, 'p1').length > 0;
        const done = d.blocks.filter((b) => b.done).length;
        return (
          <Link key={d.key} to="/calendar" className="block">
            <Card interactive className={cn('h-full px-4 py-3.5', d.isToday && 'border-ink')}>
              <div className="flex items-baseline justify-between">
                <p
                  className={cn(
                    'text-[11px] font-semibold tracking-[0.08em] uppercase',
                    d.isToday ? 'text-ink' : 'text-muted-2',
                  )}
                >
                  {DAYS.find((x) => x.value === d.weekday)?.short}
                </p>
                <p
                  className={cn(
                    'text-[17px] font-semibold tabular-nums',
                    d.isToday ? 'text-ink' : 'text-muted',
                  )}
                >
                  {d.date.getDate()}
                </p>
              </div>

              <div className="mt-3 space-y-1.5">
                {d.blocks.slice(0, 3).map((b) => (
                  <div key={b.id} className="flex items-center gap-1.5">
                    <span
                      className={cn(
                        'truncate text-[11.5px]',
                        b.done ? 'text-muted-2 line-through' : 'text-muted',
                      )}
                    >
                      {b.topic}
                    </span>
                  </div>
                ))}
                {d.blocks.length === 0 && (
                  <p className="text-[11.5px] text-muted-2">{hasClasses ? 'Classes only' : 'Free'}</p>
                )}
                {d.blocks.length > 3 && (
                  <p className="text-[11px] text-muted-2">+{d.blocks.length - 3} more</p>
                )}
              </div>

              {d.blocks.length > 0 && (
                <p className="mt-3 text-[11px] font-medium text-muted-2 tabular-nums">
                  {done}/{d.blocks.length} done
                </p>
              )}
            </Card>
          </Link>
        );
      })}
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────────────── */

export default function Dashboard() {
  const { blocks } = useStore();
  const today = todayKey();
  const todayBlocks = blocks.filter((b) => b.date === today);
  const doneToday = todayBlocks.filter((b) => b.done).length;

  const upcoming = blocks
    .filter((b) => !b.done && b.date > today)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 3);

  return (
    <Page>
      <PageTitle
        eyebrow={formatLongDate(new Date())}
        title={`${greeting()}.`}
        highlight={greeting().split(" ")[1]}
        subtitle={
          todayBlocks.length === 0
            ? 'No study blocks planned for today.'
            : `${doneToday} of ${todayBlocks.length} study block${todayBlocks.length === 1 ? '' : 's'} done.`
        }
        trailing={
          <Button asChild variant="primary">
            <Link to="/calendar">
              <Plus /> Plan study
            </Link>
          </Button>
        }
      />

      <Section
        title="Today's classes"
        action={
          <Link
            to="/timetable"
            className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-muted transition-colors duration-100 hover:text-ink"
          >
            Full timetable <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        }
      >
        <ClassTimeline />
      </Section>

      <Section
        title="Study plan"
        action={
          <Link
            to="/calendar"
            className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-muted transition-colors duration-100 hover:text-ink"
          >
            Calendar <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        }
      >
        <StudyPlan />
      </Section>

      <Section title="This week">
        <WeekStrip />
      </Section>

      {upcoming.length > 0 && (
        <Section title="Coming up">
          <Card className="overflow-hidden">
            <ul>
              {upcoming.map((b) => (
                <li
                  key={b.id}
                  className="flex items-center gap-4 border-b border-hairline px-5 py-3.5 last:border-b-0"
                >
                  <span className="w-[62px] shrink-0 text-[12px] font-semibold text-muted tabular-nums">
                    {formatShortDate(fromDayKey(b.date))}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[14px] font-medium text-ink">{b.topic}</span>
                    <span className="mt-0.5 flex items-center gap-1.5 text-[11.5px] text-muted">
                      {getSubject(b.subjectId)?.shortName}
                    </span>
                  </span>
                  <span className="shrink-0 text-[12px] text-muted-2 tabular-nums">
                    {b.duration} min
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </Section>
      )}
    </Page>
  );
}
