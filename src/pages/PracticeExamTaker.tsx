import { ArrowLeft, Check, ChevronDown, RotateCcw } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as React from 'react';
import { Page, PageTitle } from '@/components/layout/Page';
import { Button, Card, SegmentedControl } from '@/components/ui/primitives';
import { getPracticeExam } from '@/data/practiceExams';
import { getSubject } from '@/data/subjects';
import type { ExamQuestion } from '@/lib/types';
import { KEYS, readStore, writeStore } from '@/lib/storage';
import { cn } from '@/lib/utils';

type Mode = 'answers' | 'self-test';

/** Per-exam "understood" ticks, persisted by exam id + question id. */
function useSelfTestState(examId: string) {
  const [checked, setChecked] = React.useState<Record<string, boolean>>(() => {
    const all = readStore<Record<string, Record<string, boolean>>>(KEYS.examProgress, {});
    return all[examId] ?? {};
  });

  const toggle = (questionId: string) => {
    setChecked((prev) => {
      const next = { ...prev, [questionId]: !prev[questionId] };
      const all = readStore<Record<string, Record<string, boolean>>>(KEYS.examProgress, {});
      writeStore(KEYS.examProgress, { ...all, [examId]: next });
      return next;
    });
  };

  const reset = () => {
    setChecked({});
    const all = readStore<Record<string, Record<string, boolean>>>(KEYS.examProgress, {});
    writeStore(KEYS.examProgress, { ...all, [examId]: {} });
  };

  return { checked, toggle, reset };
}

function AnswerBlock({ question }: { question: ExamQuestion }) {
  if (Array.isArray(question.answer)) {
    return (
      <ul className="mt-2 space-y-1.5 border-t border-hairline pt-2.5">
        {question.answer.map((pt, i) => (
          <li key={i} className="flex gap-2 text-[12.5px] leading-[1.6] text-ink-2">
            <span className="mt-[7px] h-px w-2 shrink-0 bg-hairline-strong" aria-hidden />
            <span>{pt}</span>
          </li>
        ))}
      </ul>
    );
  }
  return <p className="mt-2 border-t border-hairline pt-2.5 text-[12.5px] leading-[1.65] text-ink-2">{question.answer}</p>;
}

/** With-answers mode: every question, answer shown immediately underneath. */
function AnswersView({ question }: { question: ExamQuestion }) {
  return (
    <div className="px-5 py-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold tracking-[0.08em] text-muted-2 uppercase">{question.topic}</p>
          <p className="mt-1 text-[13.5px] font-medium text-ink">{question.q}</p>
        </div>
        <span className="shrink-0 rounded-full border border-hairline-strong px-2 py-0.5 text-[10.5px] font-semibold text-muted">
          {question.marks} {question.marks === 1 ? 'mark' : 'marks'}
        </span>
      </div>
      <AnswerBlock question={question} />
    </div>
  );
}

/** Self-test mode: question + checkbox; tap the question to reveal the answer. */
function SelfTestRow({
  question,
  checked,
  onToggle,
}: {
  question: ExamQuestion;
  checked: boolean;
  onToggle: () => void;
}) {
  const [revealed, setRevealed] = React.useState(false);

  return (
    <div className="px-5 py-4">
      <div className="flex items-start gap-3">
        <button
          type="button"
          onClick={onToggle}
          aria-pressed={checked}
          aria-label={checked ? `Mark "${question.q}" as not understood` : `Mark "${question.q}" as understood`}
          className={cn(
            'mt-0.5 grid size-5 shrink-0 place-items-center rounded-md border transition-colors',
            checked ? 'border-accent bg-accent text-accent-foreground' : 'border-hairline-strong text-transparent hover:border-ink-2',
          )}
        >
          <Check size={13} strokeWidth={3} />
        </button>

        <button type="button" onClick={() => setRevealed((r) => !r)} className="min-w-0 flex-1 text-left">
          <p className="text-[10px] font-semibold tracking-[0.08em] text-muted-2 uppercase">{question.topic}</p>
          <p className={cn('mt-1 text-[13.5px] font-medium', checked ? 'text-muted line-through' : 'text-ink')}>
            {question.q}
          </p>
        </button>

        <span className="shrink-0 rounded-full border border-hairline-strong px-2 py-0.5 text-[10.5px] font-semibold text-muted">
          {question.marks}
        </span>
        <ChevronDown
          className={cn('mt-1 size-3.5 shrink-0 text-muted-2 transition-transform', revealed && 'rotate-180')}
          aria-hidden
        />
      </div>
      {revealed && (
        <div className="pl-8">
          <AnswerBlock question={question} />
        </div>
      )}
    </div>
  );
}

export default function PracticeExamTaker() {
  const { subjectId, examId } = useParams<{ subjectId: string; examId: string }>();
  const navigate = useNavigate();
  const exam = examId ? getPracticeExam(examId) : undefined;
  const subject = subjectId ? getSubject(subjectId as never) : undefined;
  const { checked, toggle, reset } = useSelfTestState(examId ?? '');
  const [mode, setMode] = React.useState<Mode>('self-test');
  const [reviewOnly, setReviewOnly] = React.useState(false);

  if (!exam) {
    return (
      <Page width="narrow">
        <PageTitle title="Practice exam not found" highlight="not found" subtitle="" />
        <Button variant="secondary" onClick={() => navigate('/practice-exams')}>
          <ArrowLeft /> Back to practice exams
        </Button>
      </Page>
    );
  }

  const allQuestions = exam.sections.flatMap((s) => s.questions);
  const doneCount = allQuestions.filter((q) => checked[q.id]).length;
  const notUnderstoodCount = allQuestions.length - doneCount;

  const sectionsToShow = reviewOnly
    ? exam.sections
        .map((s) => ({ ...s, questions: s.questions.filter((q) => !checked[q.id]) }))
        .filter((s) => s.questions.length > 0)
    : exam.sections;

  return (
    <Page width="default">
      <Link to="/practice-exams" className="mb-3 inline-flex items-center gap-1.5 text-[12px] font-medium text-muted hover:text-ink">
        <ArrowLeft className="size-3.5" aria-hidden /> Back
      </Link>

      <PageTitle title={exam.title} subtitle={exam.description} />

      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <SegmentedControl<Mode>
          layoutId="exam-mode"
          value={mode}
          onChange={(m) => {
            setMode(m);
            setReviewOnly(false);
          }}
          options={[
            { id: 'self-test', label: 'Self-test' },
            { id: 'answers', label: 'With answers' },
          ]}
        />

        {mode === 'self-test' && (
          <div className="flex items-center gap-2">
            <span className="text-[11.5px] text-muted tabular-nums">
              {doneCount}/{allQuestions.length} understood
            </span>
            {notUnderstoodCount > 0 && (
              <Button
                variant={reviewOnly ? 'accent' : 'secondary'}
                size="sm"
                onClick={() => setReviewOnly((r) => !r)}
              >
                {reviewOnly ? 'Showing all' : `Revise ${notUnderstoodCount} I don't understand`}
              </Button>
            )}
            <Button variant="ghost" size="icon-sm" aria-label="Reset self-test" onClick={reset}>
              <RotateCcw />
            </Button>
          </div>
        )}
      </div>

      {subject && <p className="mb-4 text-[11.5px] text-muted-2">{subject.name} · {exam.totalMarks} marks total</p>}

      <div className="space-y-5">
        {sectionsToShow.map((section) => (
          <Card key={section.title} className="overflow-hidden">
            <div className="border-b border-hairline bg-paper-raise px-5 py-2.5">
              <span className="text-[10px] font-bold tracking-[0.12em] text-muted-2 uppercase">{section.title}</span>
            </div>
            <div className="divide-y divide-hairline">
              {section.questions.map((q) =>
                mode === 'answers' ? (
                  <AnswersView key={q.id} question={q} />
                ) : (
                  <SelfTestRow key={q.id} question={q} checked={!!checked[q.id]} onToggle={() => toggle(q.id)} />
                ),
              )}
            </div>
          </Card>
        ))}
        {reviewOnly && sectionsToShow.length === 0 && (
          <Card className="px-5 py-8 text-center">
            <p className="text-[13px] font-medium text-ink">Every question is ticked as understood.</p>
          </Card>
        )}
      </div>
    </Page>
  );
}
