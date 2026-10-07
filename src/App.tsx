import { MotionConfig } from 'motion/react';
import { Navigate, Route, Routes } from 'react-router-dom';
import * as React from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { AppStoreProvider } from '@/store/AppStore';
import { ThemeProvider } from '@/store/ThemeProvider';
import { TimetableProvider } from '@/store/TimetableStore';
import Dashboard from '@/pages/Dashboard';

/**
 * Dashboard is bundled eagerly — it is the first page every session opens
 * on. Everything else is code-split, so switching to a page costs only
 * that page's chunk instead of parsing all seven up front.
 *
 * The chunks are also prefetched on idle (see below), so by the time the
 * user clicks a nav item the code is already in memory and the switch is
 * instant.
 */
const Library = React.lazy(() => import('@/pages/Library'));
const Timetable = React.lazy(() => import('@/pages/Timetable'));
const Calendar = React.lazy(() => import('@/pages/Calendar'));
const Subjects = React.lazy(() => import('@/pages/Subjects'));
const Notes = React.lazy(() => import('@/pages/Notes'));
const Settings = React.lazy(() => import('@/pages/Settings'));

/** Warms every route chunk once the browser is idle after first paint. */
function usePrefetchRoutes() {
  React.useEffect(() => {
    const load = () => {
      void import('@/pages/Library');
      void import('@/pages/Timetable');
      void import('@/pages/Calendar');
      void import('@/pages/Subjects');
      void import('@/pages/Notes');
      void import('@/pages/Settings');
    };
    const ric = (window as unknown as { requestIdleCallback?: (cb: () => void) => number })
      .requestIdleCallback;
    if (ric) {
      const id = ric(load);
      return () => {
        (window as unknown as { cancelIdleCallback?: (h: number) => void }).cancelIdleCallback?.(id);
      };
    }
    const t = setTimeout(load, 1200);
    return () => clearTimeout(t);
  }, []);
}

/** Nothing visible — chunks are prefetched, so the gap is a frame at most. */
const Fallback = () => <div className="min-h-[60vh]" />;

function Shell() {
  usePrefetchRoutes();
  return <AppShell />;
}

export default function App() {
  return (
    // `reducedMotion="user"` is the single place prefers-reduced-motion is
    // honoured for Framer Motion: it strips transform and layout animation
    // app-wide while leaving opacity fades, so nothing ever appears abruptly.
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <AppStoreProvider>
          <TimetableProvider>
          <React.Suspense fallback={<Fallback />}>
            <Routes>
              <Route element={<Shell />}>
                <Route index element={<Dashboard />} />
                <Route path="library" element={<Library />} />
                <Route path="library/:subjectId" element={<Library />} />
                <Route path="library/:subjectId/:chapterId" element={<Library />} />
                <Route path="library/:subjectId/:chapterId/:lessonId" element={<Library />} />
                <Route path="timetable" element={<Timetable />} />
                <Route path="calendar" element={<Calendar />} />
                <Route path="subjects" element={<Subjects />} />
                <Route path="notes" element={<Notes />} />
                <Route path="settings" element={<Settings />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Routes>
          </React.Suspense>
        </TimetableProvider>
        </AppStoreProvider>
      </ThemeProvider>
    </MotionConfig>
  );
}
