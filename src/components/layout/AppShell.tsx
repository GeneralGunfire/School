import { AnimatePresence, motion } from 'motion/react';
import { Bell, CalendarDays, ChevronRight, Clock, ListChecks, Moon, Radio, Sun } from 'lucide-react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import * as React from 'react';
import { Sidebar } from './Sidebar';
import { IconTile, Panel } from '@/components/ui/primitives';

import { useTheme } from '@/store/ThemeProvider';
import { useNotices, type Notice } from '@/store/notifications';
import { formatLongDate, cn } from '@/lib/utils';

const TITLES: Record<string, string> = {
  '': 'Dashboard',
  library: 'Library',
  timetable: 'Timetable',
  calendar: 'Calendar',
  subjects: 'Subjects',
  notes: 'Notes',
  settings: 'Settings',
};

const CrumbCtx = React.createContext<{
  setCrumbs: (c: { label: string; to?: string }[]) => void;
}>({ setCrumbs: () => {} });

export function useBreadcrumbs(crumbs: { label: string; to?: string }[]) {
  const { setCrumbs } = React.useContext(CrumbCtx);
  // Serialised so an inline array literal doesn't re-fire the effect forever.
  const key = JSON.stringify(crumbs);
  React.useEffect(() => {
    setCrumbs(crumbs);
    return () => setCrumbs([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, setCrumbs]);
}

/** Shared chrome for the header buttons, so they read as a matched pair. */
const HEADER_BTN =
  'group relative grid size-9 place-items-center rounded-[10px] border ' +
  '[border-color:var(--edge)] [background:var(--surface-raise)] ' +
  'shadow-[inset_0_1px_0_var(--surface-inset-top),0_1px_2px_var(--shadow-contact)] ' +
  'transition-[border-color,box-shadow,transform] duration-100 ' +
  'hover:[border-color:color-mix(in_srgb,var(--color-ink)_18%,transparent)] ' +
  'hover:shadow-[inset_0_1px_0_var(--surface-inset-top),0_3px_8px_-2px_var(--shadow-mid)] ' +
  'active:translate-y-px';

function ThemeButton() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';
  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={HEADER_BTN}
      style={{ background: 'var(--surface-raise)' }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -50, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 50, scale: 0.7 }}
          transition={{ duration: 0.13 }}
          className="grid place-items-center"
        >
          {isDark ? (
            <Moon className="size-4 text-muted transition-colors group-hover:text-ink" aria-hidden />
          ) : (
            <Sun className="size-4 text-muted transition-colors group-hover:text-ink" aria-hidden />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

const NOTICE_ICON: Record<Notice['kind'], React.ElementType> = {
  now: Radio,
  soon: Clock,
  today: ListChecks,
  ahead: CalendarDays,
  idle: CalendarDays,
};

function NotificationBell() {
  const notices = useNotices();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const count = notices.filter((n) => n.kind !== 'idle').length;
  const urgent = notices.some((n) => n.kind === 'now' || n.kind === 'soon');

  // Click-outside and Escape both close the panel.
  React.useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDown);
    window.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={`Notifications${count ? ` (${count})` : ''}`}
        aria-expanded={open}
        className={HEADER_BTN}
      >
        <Bell className="size-4 text-muted transition-colors group-hover:text-ink" aria-hidden />
        {count > 0 && (
          <span
            className={cn(
              'absolute -top-1.5 -right-1.5 grid min-w-[18px] place-items-center rounded-full border px-1 py-px text-[10px] font-bold tabular-nums',
              urgent
                ? 'border-accent-soft text-accent-foreground [background:linear-gradient(170deg,color-mix(in_srgb,var(--color-accent)_80%,white),var(--color-accent))]'
                : 'text-[var(--btn-solid-fg)] [background:var(--btn-solid)] [border-color:var(--btn-solid-border)]',
            )}
            style={{ boxShadow: '0 1px 3px var(--shadow-mid)' }}
          >
            {count}
          </span>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 620, damping: 42, mass: 0.5 }}
            className="absolute top-full right-0 z-50 mt-2.5 w-[370px]"
            style={{ transformOrigin: 'top right' }}
          >
            <Panel>
              <div
                className="surface-header flex items-center justify-between border-b px-4 py-3"
                style={{ borderColor: 'var(--edge)' }}
              >
                <p className="flex items-center gap-2 text-[10.5px] font-bold tracking-[0.11em] text-muted uppercase">
                  <span className="label-rule" aria-hidden />
                  Notifications
                </p>
                {count > 0 && (
                  <span className="text-[11px] font-semibold text-muted-2 tabular-nums">{count}</span>
                )}
              </div>

              <ul className="max-h-[400px] overflow-y-auto">
                {notices.map((n) => {
                  const Icon = NOTICE_ICON[n.kind];
                  return (
                    <li key={n.id}>
                      <button
                        onClick={() => {
                          navigate(n.to);
                          setOpen(false);
                        }}
                        className="group relative flex w-full items-start gap-3.5 border-b px-4 py-3.5 text-left transition-colors duration-100 last:border-b-0 hover:[background:var(--surface-raise)]"
                        style={{ borderColor: 'var(--edge)' }}
                      >
                        <IconTile
                          icon={Icon}
                          size="sm"
                          color={
                            n.kind === 'now' || n.kind === 'soon'
                              ? 'var(--color-accent)'
                              : 'var(--color-muted)'
                          }
                        />
                        <span className="min-w-0 flex-1 pt-0.5">
                          <span className="block text-[13.5px] leading-snug font-semibold text-ink">
                            {n.title}
                          </span>
                          <span className="mt-1 block truncate text-[12px] text-muted">{n.body}</span>
                        </span>
                        <ChevronRight
                          className="mt-2 size-3.5 shrink-0 text-muted-2 transition-transform duration-100 group-hover:translate-x-0.5"
                          aria-hidden
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </Panel>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Header({ extra }: { extra: { label: string; to?: string }[] }) {
  const { pathname } = useLocation();
  const root = pathname.split('/')[1] ?? '';
  const title = TITLES[root] ?? 'Scholar';

  return (
    <header
      className="surface-header sticky top-0 z-30 shrink-0 border-b"
      style={{ borderColor: 'var(--edge)', boxShadow: '0 1px 3px -1px var(--shadow-contact)' }}
    >
      <div className="flex h-15 items-center justify-between gap-4 px-5">
        <nav aria-label="Breadcrumb" className="flex min-w-0 items-center gap-1 text-[13px]">
          <Link
            to={root === '' ? '/' : `/${root}`}
            className={cn(
              'shrink-0 rounded-md px-2 py-1.5 transition-colors duration-100',
              extra.length === 0
                ? 'font-semibold text-ink'
                : 'font-medium text-muted hover:bg-paper-raise hover:text-ink',
            )}
          >
            {title}
          </Link>
          {extra.map((c, i) => {
            const last = i === extra.length - 1;
            return (
              <React.Fragment key={`${c.label}-${i}`}>
                <ChevronRight className="size-3.5 shrink-0 text-muted-2" aria-hidden />
                {c.to && !last ? (
                  <Link
                    to={c.to}
                    className="truncate rounded-md px-2 py-1.5 font-medium text-muted transition-colors duration-100 hover:bg-paper-raise hover:text-ink"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="truncate px-2 py-1.5 font-semibold text-ink" aria-current="page">
                    {c.label}
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <span className="mr-1 text-[12.5px] text-muted-2">{formatLongDate(new Date())}</span>
          <NotificationBell />
          <ThemeButton />
        </div>
      </div>
    </header>
  );
}

export function AppShell() {
  const location = useLocation();
  const [crumbs, setCrumbs] = React.useState<{ label: string; to?: string }[]>([]);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const ctx = React.useMemo(() => ({ setCrumbs }), []);

  React.useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [location.pathname]);

  return (
    <CrumbCtx.Provider value={ctx}>
      <div className="app-wallpaper flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col p-3">
          <div className="card flex min-h-0 flex-1 flex-col overflow-hidden">
            <Header extra={crumbs} />
            {/* No AnimatePresence here on purpose.
                `mode="wait"` makes every navigation wait for the outgoing
                page's exit animation to finish before the next one mounts,
                which is what made page changes feel laggy. The new page now
                mounts immediately and fades up on its own. */}
            <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto">
              <motion.main
                key={location.pathname}
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.13, ease: [0.22, 1, 0.36, 1] }}
              >
                <Outlet />
              </motion.main>
            </div>
          </div>
        </div>
      </div>
    </CrumbCtx.Provider>
  );
}
