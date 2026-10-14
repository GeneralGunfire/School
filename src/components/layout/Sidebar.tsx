import { AnimatePresence, motion } from 'motion/react';
import {
  BookOpen,
  CalendarDays,
  CalendarClock,
  LayoutGrid,
  Library,
  NotebookPen,
  Settings,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn, todayKey, formatTime } from '@/lib/utils';
import { useStore } from '@/store/AppStore';
import { todayWeekday } from '@/data/timetable';
import { useSchedule } from '@/store/TimetableStore';
import { getSubject, subjectColor } from '@/data/subjects';
import { nowMinutes, toMinutes } from '@/lib/utils';
import { Logo } from '@/components/ui/Logo';
import * as React from 'react';

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
  const { blocks } = useStore();
  const today = todayKey();
  const openToday = blocks.filter((b) => b.date === today && !b.done).length;

  return [
    {
      label: 'Study',
      items: [
        { to: '/', label: 'Dashboard', icon: LayoutGrid },
        { to: '/library', label: 'Library', icon: Library },
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
        { to: '/acronyms', label: 'Acronyms & key notes', icon: Sparkles },
        { to: '/settings', label: 'Settings', icon: Settings },
      ],
    },
  ];
}

function NavRow({ item }: { item: NavItem }) {
  const Icon = item.icon;
  return (
    <NavLink to={item.to} end={item.to === '/'} className="block">
      {({ isActive }) => (
        <div
          className={cn(
            'group relative flex items-center gap-3 rounded-[9px] px-3 py-2.5 text-[14px]',
            'transition-colors duration-100',
            isActive ? 'font-semibold text-ink' : 'font-medium text-muted hover:text-ink',
          )}
        >
          {isActive && (
            <motion.span
              layoutId="nav-active"
              className="absolute inset-0 -z-10 overflow-hidden rounded-[10px] border"
              style={{
                borderColor: 'var(--edge)',
                background: 'var(--surface-raise)',
                boxShadow:
                  'inset 0 1px 0 var(--surface-inset-top), 0 1px 2px var(--shadow-contact), 0 3px 8px -3px var(--shadow-mid)',
              }}
              transition={{ type: 'spring', stiffness: 800, damping: 48, mass: 0.45 }}
            />
          )}
          {!isActive && (
            <span
              className="absolute inset-0 -z-10 rounded-[10px] opacity-0 transition-opacity duration-100 group-hover:opacity-100"
              style={{ background: 'var(--surface-raise)' }}
            />
          )}

          {/* Active marker — a gradient rule, the same motif as the logo. */}
          {isActive && (
            <motion.span
              layoutId="nav-active-rule"
              className="accent-bar absolute top-1/2 -left-px h-6 w-[3px] -translate-y-1/2 rounded-r-full"
              transition={{ type: 'spring', stiffness: 800, damping: 48, mass: 0.45 }}
            />
          )}

          <Icon
            className={cn(
              'size-[18px] shrink-0 transition-colors duration-100',
              isActive ? 'text-ink' : 'text-muted-2 group-hover:text-muted',
            )}
            aria-hidden
          />
          <span className="min-w-0 flex-1 truncate">{item.label}</span>

          {item.badge !== undefined && (
            <span
              className={cn(
                'shrink-0 rounded-full px-1.5 py-px text-[11px] font-semibold tabular-nums',
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
        <p className="text-[10px] font-bold tracking-[0.11em] text-muted-2 uppercase">Schedule</p>
        <p className="mt-2 text-[12.5px] text-muted">No more classes today.</p>
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
        <p className="text-[10px] font-bold tracking-[0.11em] text-muted-2 uppercase">
          {slot.live ? 'On now' : 'Up next'}
        </p>
      </div>

      <p className="mt-2 flex items-center gap-2 text-[14px] font-semibold text-ink">
        <span className="truncate" style={{ color: subjectColor(e.subjectId) }}>
          {subject?.shortName ?? e.label}
        </span>
      </p>
      <p className="mt-1 text-[11.5px] text-muted">
        {slot.p.label} · {formatTime(slot.p.start)}
      </p>
    </NavLink>
  );
}

function SidebarBody() {
  const groups = useGroups();
  return (
    <div className="card flex min-h-0 flex-1 flex-col">
      {/* Brand */}
      <div className="flex items-center gap-3 border-b border-hairline px-4 py-[18px]">
        <Mark />
        <div className="min-w-0">
          <p className="text-[16px] leading-none font-semibold tracking-[-0.02em] text-ink">
            Scholar
          </p>
          <p className="mt-[6px] text-[11px] leading-none text-muted-2">Grade 10 · CAPS</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="min-h-0 flex-1 overflow-y-auto px-3 py-4">
        {groups.map((group, gi) => (
          <div key={group.label} className={cn(gi > 0 && 'mt-6')}>
            <p className="mb-2 px-3 text-[10px] font-semibold tracking-[0.11em] text-muted-2 uppercase">
              {group.label}
            </p>
            <div className="space-y-1">
              {group.items.map((item) => (
                <NavRow key={item.to} item={item} />
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="border-t border-hairline py-3">
        <UpNext />
      </div>
    </div>
  );
}

/** The fixed desktop rail. Hidden below `lg` in favour of the mobile drawer. */
export function Sidebar() {
  return (
    <aside className="hidden h-full w-[260px] shrink-0 flex-col p-3 pr-0 lg:flex">
      <SidebarBody />
    </aside>
  );
}

/** Slide-over nav for phones and tablets, toggled from the header's menu button. */
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
            <SidebarBody />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
