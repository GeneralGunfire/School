import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ── Dates ───────────────────────────────────────────────────────────────────
// All day keys are local-time `YYYY-MM-DD`. Deliberately not `toISOString()`,
// which converts to UTC and silently shifts the day either side of midnight.

export function toDayKey(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function fromDayKey(key: string): Date {
  const [y, m, d] = key.split('-').map(Number);
  return new Date(y, m - 1, d);
}

export function todayKey(): string {
  return toDayKey(new Date());
}

export function addDays(d: Date, n: number): Date {
  const out = new Date(d);
  out.setDate(out.getDate() + n);
  return out;
}

export function isSameDay(a: Date, b: Date): boolean {
  return toDayKey(a) === toDayKey(b);
}

/** Difference in whole calendar days, ignoring time of day. */
export function daysBetween(aKey: string, bKey: string): number {
  const a = fromDayKey(aKey);
  const b = fromDayKey(bKey);
  a.setHours(12, 0, 0, 0);
  b.setHours(12, 0, 0, 0);
  return Math.round((b.getTime() - a.getTime()) / 86_400_000);
}

const LONG_DATE = new Intl.DateTimeFormat('en-ZA', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
});
const MONTH_YEAR = new Intl.DateTimeFormat('en-ZA', { month: 'long', year: 'numeric' });
const SHORT_DATE = new Intl.DateTimeFormat('en-ZA', { day: 'numeric', month: 'short' });

export const formatLongDate = (d: Date) => LONG_DATE.format(d);
export const formatMonthYear = (d: Date) => MONTH_YEAR.format(d);
export const formatShortDate = (d: Date) => SHORT_DATE.format(d);

/** "2 days ago" / "Today" / "Yesterday", for last-studied labels. */
export function relativeDay(key: string | null): string {
  if (!key) return 'Not yet started';
  const diff = daysBetween(key, todayKey());
  if (diff <= 0) return 'Today';
  if (diff === 1) return 'Yesterday';
  if (diff < 7) return `${diff} days ago`;
  if (diff < 14) return 'Last week';
  return formatShortDate(fromDayKey(key));
}

// ── Time ────────────────────────────────────────────────────────────────────

/** `HH:MM` → minutes since midnight. */
export function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
}

export function nowMinutes(): number {
  const d = new Date();
  return d.getHours() * 60 + d.getMinutes();
}

/** "07:45" → "7:45am", for period labels. */
export function formatTime(hhmm: string): string {
  const [h, m] = hhmm.split(':').map(Number);
  const suffix = h < 12 ? 'am' : 'pm';
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}:${String(m).padStart(2, '0')}${suffix}`;
}

// ── Misc ────────────────────────────────────────────────────────────────────

export function uid(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}

export function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

export function greeting(d = new Date()): string {
  const h = d.getHours();
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  return 'Good evening';
}
