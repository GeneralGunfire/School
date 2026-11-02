import { ArrowRight, FileCheck2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import * as React from 'react';
import { Page, PageTitle } from '@/components/layout/Page';
import { Card, CardHeader, EmptyState } from '@/components/ui/primitives';
import { SubjectIcon } from '@/components/ui/Icon';
import { SUBJECTS, subjectColor } from '@/data/subjects';
import { paperChaptersFor } from '@/data/library';
import { practiceExamsFor } from '@/data/practiceExams';
import type { SubjectId } from '@/lib/types';
import { cn } from '@/lib/utils';

/** One linkable row: either a real `PracticeExam` or a legacy paper `Chapter`. */
type PaperRow =
  | { kind: 'exam'; id: string; title: string; description: string; to: string }
  | { kind: 'chapter'; id: string; title: string; description: string; to: string };

function rowsFor(subjectId: SubjectId): PaperRow[] {
  const exams = practiceExamsFor(subjectId).map((e): PaperRow => ({
    kind: 'exam',
    id: e.id,
    title: e.title,
    description: e.description,
    to: `/practice-exams/${subjectId}/${e.id}`,
  }));
  const chapters = paperChaptersFor(subjectId).map((c): PaperRow => ({
    kind: 'chapter',
    id: c.id,
    title: c.title,
    description: c.summary,
    to: `/library/${subjectId}/${c.id}`,
  }));
  return [...exams, ...chapters];
}

function SubjectHeaderIcon({ name, color, className }: { name: string; color: string; className?: string }) {
  return <SubjectIcon name={name} className={className} style={{ color }} />;
}

export default function PracticeExams() {
  const groups = React.useMemo(
    () =>
      SUBJECTS.map((s) => ({ subject: s, rows: rowsFor(s.id) })).filter((g) => g.rows.length > 0),
    [],
  );

  return (
    <Page>
      <PageTitle
        title="Practice exams"
        highlight="exams"
        subtitle="Full papers, separate from the lesson library — one test, start to finish."
      />

      <Card className="mb-6 overflow-hidden">
        <Link
          to="/business-mock-nov2026-p1"
          className="flex items-center gap-4 px-5 py-4 transition-colors hover:bg-paper-raise"
        >
          <span
            className="grid size-9 shrink-0 place-items-center rounded-lg border border-hairline"
            style={{ background: 'var(--surface-raise)' }}
          >
            <FileCheck2 className="size-4" aria-hidden />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[13.5px] font-semibold text-ink">Business Studies P1 — November Mock Exam 2</p>
            <p className="text-pretty mt-0.5 text-[11.75px] text-muted">Full past-paper memo, answered from your notes — tap any question to reveal · 150 marks</p>
          </div>
          <ArrowRight className="size-4 shrink-0 text-muted-2" aria-hidden />
        </Link>
      </Card>

      {groups.length === 0 ? (
        <Card>
          <EmptyState icon={FileCheck2} title="No practice exams yet" body="None have been written yet." />
        </Card>
      ) : (
        <div className="space-y-6">
          {groups.map(({ subject, rows }) => {
            const color = subjectColor(subject.id);
            return (
              <div key={subject.id}>
                <Card className="overflow-hidden">
                  <CardHeader
                    title={subject.name}
                    icon={(props: React.ComponentProps<'svg'>) => (
                      <SubjectHeaderIcon name={subject.icon} color={color} className={props.className} />
                    )}
                  />
                  <div className="divide-y divide-hairline">
                    {rows.map((r) => (
                      <Link
                        key={r.id}
                        to={r.to}
                        className={cn(
                          'flex items-center gap-4 px-5 py-4 transition-colors hover:bg-paper-raise',
                        )}
                      >
                        <span
                          className="grid size-9 shrink-0 place-items-center rounded-lg border border-hairline"
                          style={{ background: 'var(--surface-raise)' }}
                        >
                          <FileCheck2 className="size-4" style={{ color }} aria-hidden />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-[13.5px] font-semibold text-ink">{r.title}</p>
                          <p className="text-pretty mt-0.5 line-clamp-2 text-[11.75px] text-muted">{r.description}</p>
                        </div>
                        <ArrowRight className="size-4 shrink-0 text-muted-2" aria-hidden />
                      </Link>
                    ))}
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      )}
    </Page>
  );
}
