/**
 * localStorage persistence.
 *
 * Every read is defensive: storage can be unavailable (private browsing,
 * blocked site data) and the stored shape can be stale from an older build,
 * so a failed or malformed read falls back to the caller's default rather
 * than throwing into a render.
 */

/**
 * Bumping this version discards everything stored under the previous one,
 * which is how a shape change or a seed change takes effect for someone who
 * already has data in their browser. v2 drops the seeded demo study blocks:
 * the calendar now starts genuinely empty.
 */
const PREFIX = 'scholar:v2:';

export const KEYS = {
  progress: `${PREFIX}progress`,
  blocks: `${PREFIX}blocks`,
  reflections: `${PREFIX}reflections`,
  notes: `${PREFIX}notes`,
  results: `${PREFIX}results`,
  streak: `${PREFIX}streak`,
  seeded: `${PREFIX}seeded`,
  settings: `${PREFIX}settings`,
  periods: `${PREFIX}periods`,
  timetable: `${PREFIX}timetable`,
} as const;

export function readStore<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    const parsed = JSON.parse(raw) as unknown;
    // A null or undefined payload is as good as absent — callers expect
    // their fallback, not a null they have to guard again downstream.
    return (parsed ?? fallback) as T;
  } catch {
    return fallback;
  }
}

export function writeStore<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Quota exceeded or storage blocked. The in-memory state stays correct
    // for this session; only persistence is lost, which is not worth
    // interrupting the user over.
  }
}

export function clearAll(): void {
  try {
    const doomed = Object.keys(localStorage).filter((k) => k.startsWith(PREFIX));
    doomed.forEach((k) => localStorage.removeItem(k));
  } catch {
    /* no-op — see writeStore */
  }
}
