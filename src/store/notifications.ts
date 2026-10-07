import * as React from 'react';
import { useStore } from '@/store/AppStore';
import { getSubject } from '@/data/subjects';
import { DAYS, todayWeekday } from '@/data/timetable';
import { useSchedule } from '@/store/TimetableStore';
import { daysBetween, fromDayKey, formatShortDate, nowMinutes, toMinutes, todayKey } from '@/lib/utils';

/**
 * Notifications are *derived*, never stored.
 *
 * Everything worth telling the user about is already implied by their
 * timetable and their calendar blocks — an unstarted block today, a class
 * starting shortly, a plan for tomorrow. Deriving means the list can never
 * go stale or disagree with the data behind it, and there is nothing to
 * mark-as-read incorrectly.
 */

export type NoticeKind = 'now' | 'soon' | 'today' | 'ahead' | 'idle';

export interface Notice {
  id: string;
  kind: NoticeKind;
  title: string;
  body: string;
  /** Route to open when the notice is clicked. */
  to: string;
  /** Sort weight — lower is more urgent. */
  rank: number;
}

export function useNotices(): Notice[] {
  const { blocks } = useStore();
  const { periods, entriesAt } = useSchedule();

  return React.useMemo(() => {
    const out: Notice[] = [];
    const today = todayKey();
    const weekday = todayWeekday();
    const mins = nowMinutes();

    // ── Current / imminent class ────────────────────────────────────────
    if (weekday !== null) {
      for (const p of periods) {
        if (p.kind !== 'lesson') continue;
        const start = toMinutes(p.start);
        const end = toMinutes(p.end);
        const entries = entriesAt(weekday, p.id).filter((e) => e.subjectId);
        if (entries.length === 0) continue;

        const names = entries.map((e) => getSubject(e.subjectId!)?.shortName ?? e.label).join(' · ');

        if (mins >= start && mins < end) {
          out.push({
            id: `now-${p.id}`,
            kind: 'now',
            title: `${names} is on now`,
            body: `${p.label} · ends ${p.end}`,
            to: '/timetable',
            rank: 0,
          });
          break;
        }
        if (start > mins && start - mins <= 20) {
          out.push({
            id: `soon-${p.id}`,
            kind: 'soon',
            title: `${names} starts in ${start - mins} min`,
            body: `${p.label} · ${p.start}`,
            to: '/timetable',
            rank: 1,
          });
          break;
        }
      }
    }

    // ── Today's unfinished blocks ───────────────────────────────────────
    const openToday = blocks.filter((b) => b.date === today && !b.done);
    if (openToday.length > 0) {
      out.push({
        id: 'today-open',
        kind: 'today',
        title: `${openToday.length} study block${openToday.length === 1 ? '' : 's'} left today`,
        body: openToday
          .slice(0, 2)
          .map((b) => b.topic)
          .join(' · '),
        to: '/calendar',
        rank: 2,
      });
    }

    // ── Tomorrow ────────────────────────────────────────────────────────
    const tomorrow = blocks.filter((b) => daysBetween(today, b.date) === 1 && !b.done);
    if (tomorrow.length > 0) {
      out.push({
        id: 'tomorrow',
        kind: 'ahead',
        title: `${tomorrow.length} block${tomorrow.length === 1 ? '' : 's'} planned tomorrow`,
        body: tomorrow
          .slice(0, 2)
          .map((b) => b.topic)
          .join(' · '),
        to: '/calendar',
        rank: 3,
      });
    }

    // ── The rest of the week ────────────────────────────────────────────
    const ahead = blocks
      .filter((b) => {
        const d = daysBetween(today, b.date);
        return d > 1 && d <= 7 && !b.done;
      })
      .sort((a, b) => a.date.localeCompare(b.date));
    if (ahead.length > 0) {
      out.push({
        id: 'week-ahead',
        kind: 'ahead',
        title: `${ahead.length} more this week`,
        body: `Next: ${ahead[0].topic} on ${formatShortDate(fromDayKey(ahead[0].date))}`,
        to: '/calendar',
        rank: 4,
      });
    }

    // ── Nothing planned at all ──────────────────────────────────────────
    if (out.length === 0) {
      const dayName = weekday !== null ? DAYS.find((d) => d.value === weekday)?.label : null;
      out.push({
        id: 'idle',
        kind: 'idle',
        title: 'Nothing scheduled',
        body: dayName
          ? `No study blocks for ${dayName}. Open the calendar to plan one.`
          : 'It is the weekend. Open the calendar to plan ahead.',
        to: '/calendar',
        rank: 9,
      });
    }

    return out.sort((a, b) => a.rank - b.rank);
  }, [blocks, periods, entriesAt]);
}

/** Count that the bell badges — the idle placeholder doesn't count. */
export function useNoticeCount(): number {
  const notices = useNotices();
  return notices.filter((n) => n.kind !== 'idle').length;
}
