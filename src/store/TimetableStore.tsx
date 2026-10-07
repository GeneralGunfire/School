import * as React from 'react';
import { KEYS, readStore, writeStore } from '@/lib/storage';
import { DEFAULT_PERIODS, DEFAULT_TIMETABLE } from '@/data/timetable';
import type { Period, TimetableEntry, Weekday } from '@/lib/types';
import { uid } from '@/lib/utils';

/**
 * The timetable is editable and persisted.
 *
 * It ships with the real Grade 10B schedule as a default, but every period
 * and every entry can be changed, and the whole thing can be reset back.
 * Everything in the app that reads the timetable — the dashboard timeline,
 * the sidebar's "on now", notifications, the Subjects weekly footprint —
 * reads it through this store, so an edit here changes all of them.
 */

interface TimetableState {
  periods: Period[];
  entries: TimetableEntry[];
}

interface TimetableStore extends TimetableState {
  /** Replaces whatever is in a day+period slot with these entries. */
  setSlot: (day: Weekday, periodId: string, entries: TimetableEntry[]) => void;
  addEntry: (entry: TimetableEntry) => void;
  removeEntry: (day: Weekday, periodId: string, index: number) => void;

  updatePeriod: (id: string, patch: Partial<Omit<Period, 'id'>>) => void;
  addPeriod: (after?: string) => void;
  removePeriod: (id: string) => void;

  resetTimetable: () => void;
  /** True when the user has edited away from the shipped default. */
  isCustomised: boolean;
}

const Ctx = React.createContext<TimetableStore | null>(null);

function bootstrap(): TimetableState {
  return {
    periods: readStore<Period[]>(KEYS.periods, DEFAULT_PERIODS),
    entries: readStore<TimetableEntry[]>(KEYS.timetable, DEFAULT_TIMETABLE),
  };
}

export function TimetableProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<TimetableState>(bootstrap);

  const commit = React.useCallback((fn: (prev: TimetableState) => TimetableState) => {
    setState((prev) => {
      const next = fn(prev);
      writeStore(KEYS.periods, next.periods);
      writeStore(KEYS.timetable, next.entries);
      return next;
    });
  }, []);

  const actions = React.useMemo<Omit<TimetableStore, keyof TimetableState | 'isCustomised'>>(
    () => ({
      setSlot: (day, periodId, entries) =>
        commit((prev) => ({
          ...prev,
          entries: [
            ...prev.entries.filter((e) => !(e.day === day && e.periodId === periodId)),
            ...entries,
          ],
        })),

      addEntry: (entry) => commit((prev) => ({ ...prev, entries: [...prev.entries, entry] })),

      removeEntry: (day, periodId, index) =>
        commit((prev) => {
          const inSlot = prev.entries.filter((e) => e.day === day && e.periodId === periodId);
          const doomed = inSlot[index];
          if (!doomed) return prev;
          return { ...prev, entries: prev.entries.filter((e) => e !== doomed) };
        }),

      updatePeriod: (id, patch) =>
        commit((prev) => ({
          ...prev,
          periods: prev.periods.map((p) => (p.id === id ? { ...p, ...patch } : p)),
        })),

      addPeriod: (after) =>
        commit((prev) => {
          const period: Period = {
            id: `p-${uid()}`,
            label: 'New period',
            start: '15:00',
            end: '15:45',
            kind: 'lesson',
          };
          if (!after) return { ...prev, periods: [...prev.periods, period] };
          const at = prev.periods.findIndex((p) => p.id === after);
          const next = [...prev.periods];
          next.splice(at + 1, 0, period);
          return { ...prev, periods: next };
        }),

      removePeriod: (id) =>
        commit((prev) => ({
          periods: prev.periods.filter((p) => p.id !== id),
          // Entries in a deleted period would otherwise be orphaned and
          // invisible but still counted everywhere.
          entries: prev.entries.filter((e) => e.periodId !== id),
        })),

      resetTimetable: () =>
        commit(() => ({ periods: DEFAULT_PERIODS, entries: DEFAULT_TIMETABLE })),
    }),
    [commit],
  );

  const store = React.useMemo<TimetableStore>(
    () => ({
      ...state,
      ...actions,
      isCustomised:
        state.entries.length !== DEFAULT_TIMETABLE.length ||
        state.periods.length !== DEFAULT_PERIODS.length,
    }),
    [state, actions],
  );

  return <Ctx.Provider value={store}>{children}</Ctx.Provider>;
}

export function useTimetable(): TimetableStore {
  const ctx = React.useContext(Ctx);
  if (!ctx) throw new Error('useTimetable must be used inside <TimetableProvider>');
  return ctx;
}

/** Entries for one day+period slot. Usually 0 or 1; occasionally 2. */
export function slotEntries(
  entries: TimetableEntry[],
  day: Weekday,
  periodId: string,
): TimetableEntry[] {
  return entries.filter((e) => e.day === day && e.periodId === periodId);
}

/**
 * Convenience hook for the common read: the live periods plus a slot
 * lookup. Everything that only *reads* the timetable uses this, so adding
 * a period or moving a class updates every surface at once.
 */
export function useSchedule() {
  const { periods, entries } = useTimetable();
  const entriesAt = React.useCallback(
    (day: Weekday, periodId: string) => slotEntries(entries, day, periodId),
    [entries],
  );
  return { periods, entries, entriesAt };
}
