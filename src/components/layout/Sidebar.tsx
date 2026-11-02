import { AnimatePresence, motion } from 'motion/react';
import {
  BookOpen,
  CalendarDays,
  CalendarClock,
  ChevronLeft,
  LayoutGrid,
  Library,
  NotebookPen,
  Search,
  Settings,
  Sparkles,
  BookText,
  FileCheck2,
  type LucideIcon,
} from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { cn, todayKey, formatTime } from '@/lib/utils';
import { useStoreSelector } from '@/store/AppStore';
import { todayWeekday } from '@/data/timetable';
import { useSchedule } from '@/store/TimetableStore';
import { getSubject, subjectColor } from '@/data/subjects';
import { nowMinutes, toMinutes } from '@/lib/utils';
import { Logo } from '@/components/ui/Logo';
import { search, type SearchResult } from '@/lib/search';
import { EASE_OUT_EXPO, springSoft } from '@/lib/motion';
import * as React from 'react';

/* ── Search ──────────────────────────────────────────────────────────────
   Searches every subject/chapter/lesson title. Arrow keys move the
   highlighted result, Enter opens it, Escape clears. */
function SidebarSearch() {
  const navigate = useNavigate();
  const [query, setQuery] = React.useState('');
  const [active, setActive] = React.useState(0);
  const [focused, setFocused] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const results = React.useMemo(() => search(query), [query]);
  const open = focused && query.trim().length >= 2;

  const go = (r: SearchResult) => {
    navigate(r.to);
    setQuery('');
    setActive(0);
    inputRef.current?.blur();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!open || results.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i) => (i + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      go(results[active]);
    } else if (e.key === 'Escape') {
      setQuery('');
      inputRef.current?.blur();
    }
  };

  return (
    <div className="relative mx-3 mt-4 mb-1">
      <div className="relative">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-3.5 -translate-y-1/2 text-muted-2" aria-hidden />
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => { setQuery(e.target.value); setActive(0); }}
          onFocus={() => setFocused(true)}
          onBlur={() => window.setTimeout(() => setFocused(false), 120)}
          onKeyDown={onKeyDown}
          placeholder="Search lessons…"
          aria-label="Search lessons, chapters and subjects"
          className="w-full rounded-lg border border-hairline bg-paper-raise py-2 pr-3 pl-8.5 text-[11.75px] text-ink outline-none placeholder:text-muted-2 focus:border-hairline-strong"
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.12 }}
            className="absolute top-full right-0 left-0 z-20 mt-1.5 overflow-hidden rounded-lg border border-hairline bg-paper shadow-lg"
          >
            {results.length === 0 ? (
              <p className="px-3 py-3 text-[11.5px] text-muted-2">No matches for "{query}".</p>
            ) : (
              <ul className="max-h-[60vh] overflow-y-auto py-1">
                {results.map((r, i) => {
                  const Icon = r.kind === 'lesson' ? BookText : r.kind === 'chapter' ? Library : BookOpen;
                  return (
                    <li key={`${r.kind}-${r.id}`}>
                      <button
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => go(r)}
                        onMouseEnter={() => setActive(i)}
                        className={cn(
                          'flex w-full items-center gap-2.5 px-3 py-2 text-left transition-colors duration-75',
                          i === active ? 'bg-paper-raise' : '',
                        )}
                      >
                        <Icon className="size-3.5 shrink-0 text-muted-2" aria-hidden style={{ color: `var(${r.subjectColorVar})` }} />
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-[11.75px] font-medium text-ink">{r.title}</span>
                          <span className="block truncate text-[10px] text-muted-2">{r.context}</span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Logo ────────────────────────────────────────────────────────────────
   The real Scholar mark, scaled down for the sidebar/title bar. See
   components/ui/Logo.tsx for the full-size splash version. */
function Mark() {
  return (
    <span className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-[11px]" aria-hidden>
      <Logo size={40} />
    </span>
  );
}

interface NavItem {
  to: string;
  label: string;
  icon: LucideIcon;
  badge?: number;
}

function useGroups(): { label: string; items: NavItem[] }[] {
  // Selector-based: the sidebar is mounted on every page, so a plain
  // useStore() here re-renders the whole nav (every row, plus UpNext) on
  // every store write anywhere in the app — marking a lesson done,
  // touching a lesson, typing a note, all of it. Only the open-today count
  // actually matters here.
  const today = todayKey();
  const openToday = useStoreSelector((s) => s.blocks.filter((b) => b.date === today && !b.done).length);

  return [
    {
      label: 'Study',
      items: [
        { to: '/', label: 'Dashboard', icon: LayoutGrid },
        { to: '/library', label: 'Library', icon: Library },
        { to: '/practice-exams', label: 'Practice exams', icon: FileCheck2 },
        { to: '/subjects', label: 'Subjects', icon: BookOpen },
      ],
    },
    {
      label: 'Plan',
      items: [
        { to: '/timetable', label: 'Timetable', icon: CalendarClock },
        { to: '/calendar', label: 'Calendar', icon: CalendarDays, badge: openToday || undefined },
      ],
    },
    {
      label: 'Personal',
      items: [
        { to: '/notes', label: 'Notes', icon: NotebookPen },
        { to: '/acronyms', label: 'Study tools', icon: Sparkles },
        { to: '/settings', label: 'Settings', icon: Settings },
      ],
    },
  ];
}

function NavRow({ item, collapsed }: { item: NavItem; collapsed?: boolean }) {
  const Icon = item.icon;
  return (
    <NavLink to={item.to} end={item.to === '/'} className="block" title={collapsed ? item.label : undefined}>
      {({ isActive }) => (
        <div
          className={cn(
            'group relative flex items-center gap-3 rounded-lg py-2 text-[12.5px]',
            collapsed ? 'justify-center px-2' : 'px-3',
            'transition-colors duration-100',
            isActive ? 'font-semibold text-ink' : 'font-medium text-muted hover:text-ink',
          )}
        >
          {isActive && (
            <motion.span
              layoutId="nav-active"
              className="absolute inset-0 -z-10 rounded-lg bg-paper-raise"
              transition={{ type: 'spring', stiffness: 800, damping: 48, mass: 0.45 }}
            />
          )}
          {!isActive && (
            <span
              className="absolute inset-0 -z-10 rounded-lg opacity-0 transition-opacity duration-100 group-hover:opacity-100"
              style={{ background: 'var(--surface-raise)' }}
            />
          )}

          <Icon
            className={cn(
              'size-4.25 shrink-0 transition-colors duration-100',
              isActive ? 'text-ink' : 'text-muted-2 group-hover:text-muted',
            )}
            aria-hidden
          />
          {!collapsed && <span className="min-w-0 flex-1 truncate">{item.label}</span>}

          {!collapsed && item.badge !== undefined && (
            <span
              className={cn(
                'shrink-0 rounded-full px-1.5 py-px text-[10.5px] font-semibold tabular-nums',
                isActive
                  ? 'bg-ink text-paper'
                  : 'border border-hairline bg-paper-raise text-muted',
              )}
            >
              {item.badge}
            </span>
          )}
        </div>
      )}
    </NavLink>
  );
}

/* ── Up-next card ────────────────────────────────────────────────────────
   The sidebar's one piece of live information: what class is on now, or
   what's next. Gives the panel a job beyond navigation. */
function UpNext() {
  const { periods, entriesAt } = useSchedule();
  const weekday = todayWeekday();
  const mins = nowMinutes();

  const slot = React.useMemo(() => {
    if (weekday === null) return null;
    for (const p of periods) {
      if (p.kind !== 'lesson') continue;
      const entries = entriesAt(weekday, p.id).filter((e) => e.subjectId);
      if (entries.length === 0) continue;
      const start = toMinutes(p.start);
      const end = toMinutes(p.end);
      if (mins >= start && mins < end) return { p, entries, live: true };
      if (start > mins) return { p, entries, live: false };
    }
    return null;
  }, [weekday, mins, periods, entriesAt]);

  const SHELL =
    'relative mx-3 block overflow-hidden rounded-[11px] border px-3.5 py-3 ' +
    'shadow-[inset_0_1px_0_var(--surface-inset-top),0_1px_2px_var(--shadow-contact)]';

  if (!slot) {
    return (
      <div
        className={SHELL}
        style={{ borderColor: 'var(--edge)', background: 'var(--surface-raise)' }}
      >
        <p className="text-[9.5px] font-bold tracking-[0.11em] text-muted-2 uppercase">Schedule</p>
        <p className="mt-2 text-[11.75px] text-muted">No more classes today.</p>
      </div>
    );
  }

  const e = slot.entries[0];
  const subject = getSubject(e.subjectId!);

  return (
    <NavLink
      to="/timetable"
      className={cn(
        SHELL,
        'transition-[border-color,box-shadow] duration-100',
        'hover:[border-color:color-mix(in_srgb,var(--color-ink)_18%,transparent)]',
        'hover:shadow-[inset_0_1px_0_var(--surface-inset-top),0_4px_10px_-3px_var(--shadow-mid)]',
      )}
      style={{ borderColor: 'var(--edge)', background: 'var(--surface-raise)' }}
    >

      <div className="flex items-center gap-1.5">
        {slot.live && (
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
          </span>
        )}
        <p className="text-[9.5px] font-bold tracking-[0.11em] text-muted-2 uppercase">
          {slot.live ? 'On now' : 'Up next'}
        </p>
      </div>

      <p className="mt-2 flex items-center gap-2 text-[13px] font-semibold text-ink">
        <span className="truncate" style={{ color: subjectColor(e.subjectId) }}>
          {subject?.shortName ?? e.label}
        </span>
      </p>
      <p className="mt-1 text-[11px] text-muted">
        {slot.p.label} · {formatTime(slot.p.start)}
      </p>
    </NavLink>
  );
}

/** Fades + slides in/out, instead of popping — the piece that was missing
    from the collapse: text can't just vanish the instant the rail starts
    narrowing, it has to visibly leave. */
function CollapseFade({ children, keyName }: { children: React.ReactNode; keyName: string }) {
  return (
    <AnimatePresence initial={false}>
      <motion.span
        key={keyName}
        initial={{ opacity: 0, x: -6 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -6 }}
        transition={{ duration: 0.12, ease: EASE_OUT_EXPO }}
        className="block min-w-0"
      >
        {children}
      </motion.span>
    </AnimatePresence>
  );
}

function SidebarBody({ collapsed }: { collapsed: boolean }) {
  const groups = useGroups();
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      {/* Brand */}
      <div className={cn('flex items-center gap-3 border-b border-hairline py-[18px]', collapsed ? 'justify-center px-2' : 'px-4')}>
        <Mark />
        {!collapsed && (
          <CollapseFade keyName="brand">
            <p className="text-[15px] leading-none font-semibold tracking-[-0.02em] text-ink">
              Scholar
            </p>
            <p className="mt-[6px] text-[10.5px] leading-none text-muted-2">Grade 10 · CAPS</p>
          </CollapseFade>
        )}
      </div>

      <AnimatePresence initial={false}>
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.14, ease: EASE_OUT_EXPO }}
            className="overflow-hidden"
          >
            <SidebarSearch />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Nav */}
      <nav className={cn('min-h-0 flex-1 overflow-y-auto pb-4', collapsed ? 'px-2 pt-3' : 'px-3')}>
        {groups.map((group, gi) => (
          <div key={group.label} className={cn(gi > 0 && 'mt-6')}>
            {!collapsed && (
              <CollapseFade keyName={`label-${group.label}`}>
                <p className="mb-2 px-3 text-[9.5px] font-semibold tracking-[0.11em] text-muted-2 uppercase">
                  {group.label}
                </p>
              </CollapseFade>
            )}
            <div className="space-y-1">
              {group.items.map((item) => (
                <NavRow key={item.to} item={item} collapsed={collapsed} />
              ))}
            </div>
          </div>
        ))}
      </nav>

      <AnimatePresence initial={false}>
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.14, ease: EASE_OUT_EXPO }}
            className="overflow-hidden border-t border-hairline"
          >
            <div className="py-3">
              <UpNext />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** The fixed desktop rail. Hidden below `lg` in favour of the mobile drawer.
    Lives inside the same panel as the main content now (a border, not a
    separate card), and can collapse to an icon-only strip. */
export function Sidebar({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 64 : 232 }}
      transition={springSoft}
      className="relative hidden h-full shrink-0 flex-col border-r border-hairline lg:flex"
    >
      {/* Only this inner wrapper clips — the toggle button below sits
          outside it (still inside the aside) so it isn't cut off by the
          same overflow-hidden that clips the collapsing nav content. */}
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <SidebarBody collapsed={collapsed} />
      </div>
      <motion.button
        onClick={onToggle}
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        transition={springSoft}
        className="absolute top-1/2 -right-3.5 z-20 grid size-7 -translate-y-1/2 place-items-center rounded-full border border-hairline-strong bg-paper text-muted shadow-[0_1px_3px_var(--shadow-mid),0_3px_8px_-2px_var(--shadow-ambient)] transition-colors hover:border-accent/50 hover:text-accent"
      >
        <motion.span
          animate={{ rotate: collapsed ? 180 : 0 }}
          transition={springSoft}
          className="grid place-items-center"
        >
          <ChevronLeft className="size-4" aria-hidden />
        </motion.span>
      </motion.button>
    </motion.aside>
  );
}

/** Slide-over nav for phones and tablets, toggled from the header's menu button.
    Carries the "Plan"/"Personal" items that don't fit the bottom tab bar. */
export function MobileSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[100] lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div
            className="absolute inset-0 bg-black/40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="absolute inset-y-0 left-0 flex w-[82vw] max-w-[320px] flex-col p-3 pr-1"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 420, damping: 42 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="card flex min-h-0 flex-1 flex-col">
              <SidebarBody collapsed={false} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Mobile bottom tab bar ───────────────────────────────────────────────
   Phones get one-tap access to the four most-used destinations instead of
   having to open the slide-over drawer for every navigation. The drawer
   (via the header's menu button) still holds everything else. */
const TAB_ITEMS: NavItem[] = [
  { to: '/', label: 'Home', icon: LayoutGrid },
  { to: '/library', label: 'Library', icon: Library },
  { to: '/timetable', label: 'Timetable', icon: CalendarClock },
  { to: '/calendar', label: 'Calendar', icon: CalendarDays },
];

export function MobileTabBar() {
  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-40 flex items-stretch justify-around border-t pb-[env(safe-area-inset-bottom)] lg:hidden"
      style={{ borderColor: 'var(--edge)', background: 'var(--surface-header)', backdropFilter: 'blur(12px)' }}
    >
      {TAB_ITEMS.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink key={item.to} to={item.to} end={item.to === '/'} className="relative flex min-w-0 flex-1 flex-col items-center gap-1 px-2 py-2.5">
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.span
                    layoutId="tab-active"
                    className="absolute top-1 h-[3px] w-8 rounded-full accent-bar"
                    transition={{ type: 'spring', stiffness: 800, damping: 48, mass: 0.45 }}
                  />
                )}
                <Icon className={cn('size-5 transition-colors duration-100', isActive ? 'text-ink' : 'text-muted-2')} aria-hidden />
                <span className={cn('text-[10px] transition-colors duration-100', isActive ? 'font-semibold text-ink' : 'font-medium text-muted-2')}>
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
}
