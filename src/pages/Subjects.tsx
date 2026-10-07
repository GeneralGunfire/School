import { ArrowRight, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import * as React from 'react';
import { Page, PageTitle } from '@/components/layout/Page';
import { Card, ProgressBar } from '@/components/ui/primitives';
import { SubjectIcon } from '@/components/ui/Icon';
import { SUBJECTS, subjectColor } from '@/data/subjects';
import { chaptersFor, hasContent, lessonCount } from '@/data/library';
import { useStore } from '@/store/AppStore';
import { DAYS } from '@/data/timetable';
import { useTimetable } from '@/store/TimetableStore';
import { cn } from '@/lib/utils';

export default function Subjects() {
  const { progress } = useStore();
  const { entries } = useTimetable();

  const stats = React.useMemo(
    () =>
      SUBJECTS.map((s) => {
        const total = lessonCount(s.id);
        const done = Object.values(progress).filter(
          (p) => p.subjectId === s.id && p.mastery === 'mastered',
        ).length;
        // Periods per week, straight from the real timetable.
        const periods = entries.filter((e) => e.subjectId === s.id).length;
        const days = new Set(entries.filter((e) => e.subjectId === s.id).map((e) => e.day));
        return {
          subject: s,
          available: hasContent(s.id),
          chapters: chaptersFor(s.id).length,
          total,
          done,
          pct: total === 0 ? 0 : (done / total) * 100,
          periods,
          days: [...days].sort(),
        };
      }),
    [progress],
  );

  return (
    <Page>
      <PageTitle
        eyebrow="Grade 10 · CAPS"
        title="All subjects"
        highlight="subjects"
        subtitle="Your twelve streams, with how often each one appears in the week."
      />

      <div className="space-y-2.5">
        {stats.map((st) => {
          const color = subjectColor(st.subject.id);
          const body = (
            <Card
              interactive={st.available}
              className={cn('flex items-center gap-5 px-5 py-4', !st.available && 'opacity-60')}
            >
              <span
                className="grid size-11 shrink-0 place-items-center rounded-lg border border-hairline"
                style={{
                  background: 'var(--surface-raise)',
                  boxShadow: 'inset 0 1px 0 var(--surface-inset-top)',
                }}
              >
                <SubjectIcon name={st.subject.icon} className="size-5" style={{ color }} />
              </span>

              <div className="min-w-0 flex-1">
                <p className="text-[15.5px] font-semibold text-ink">{st.subject.name}</p>
                <p className="text-pretty mt-1 text-[12.5px] text-muted">{st.subject.blurb}</p>
              </div>

              {/* Weekly footprint */}
              <div className="hidden w-[150px] shrink-0 lg:block">
                <p className="mb-1.5 text-[11px] text-muted-2">
                  {st.periods} period{st.periods === 1 ? '' : 's'} a week
                </p>
                <div className="flex gap-1">
                  {DAYS.map((d) => {
                    const on = st.days.includes(d.value);
                    return (
                      <span
                        key={d.value}
                        title={d.label}
                        className={cn(
                          'grid h-5 flex-1 place-items-center rounded text-[9.5px] font-semibold',
                          on ? 'text-paper' : 'border border-hairline text-muted-2',
                        )}
                        style={on ? { background: color } : undefined}
                      >
                        {d.short[0]}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Library progress */}
              <div className="w-[130px] shrink-0">
                {st.available ? (
                  <>
                    <p className="mb-1.5 text-[11px] text-muted-2 tabular-nums">
                      {st.done}/{st.total} lessons
                    </p>
                    <ProgressBar value={st.pct} color={color} />
                  </>
                ) : (
                  <p className="flex items-center justify-end gap-1.5 text-[11.5px] text-muted-2">
                    <Lock className="size-3" aria-hidden /> No content
                  </p>
                )}
              </div>

              {st.available && (
                <ArrowRight className="size-4 shrink-0 text-muted-2" aria-hidden />
              )}
            </Card>
          );

          return (
            <div key={st.subject.id}>
              {st.available ? (
                <Link to={`/library/${st.subject.id}`} className="block">
                  {body}
                </Link>
              ) : (
                body
              )}
            </div>
          );
        })}
      </div>
    </Page>
  );
}
