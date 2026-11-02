import { ArrowLeft, ChevronDown, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import * as React from 'react';
import { Page, PageTitle } from '@/components/layout/Page';
import { Button, Card } from '@/components/ui/primitives';
import { BUSINESS_MOCK_NOV2026_P1, type MockAnswer, type MockSection } from '@/data/content/businessMockNov2026P1';
import { cn } from '@/lib/utils';

function AnswerList({ answer }: { answer: string[] }) {
  return (
    <ul className="mt-2 space-y-1.5 border-t border-hairline pt-2.5">
      {answer.map((pt, i) =>
        pt === '' ? (
          <li key={i} className="h-1" aria-hidden />
        ) : (
          <li key={i} className="flex gap-2 text-[12.5px] leading-[1.6] text-ink-2">
            <span className="mt-[7px] h-px w-2 shrink-0 bg-hairline-strong" aria-hidden />
            <span>{pt}</span>
          </li>
        ),
      )}
    </ul>
  );
}

function QuestionRow({ item, forceOpen }: { item: MockAnswer; forceOpen: boolean }) {
  const [open, setOpen] = React.useState(false);
  const revealed = forceOpen || open;

  return (
    <div className="px-5 py-4">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-start justify-between gap-3 text-left"
      >
        <div className="min-w-0">
          <p className="text-[10px] font-semibold tracking-[0.08em] text-muted-2 uppercase">{item.num}</p>
          <p className="mt-1 text-[13.5px] font-medium text-ink">{item.question}</p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <span className="rounded-full border border-hairline-strong px-2 py-0.5 text-[10.5px] font-semibold text-muted">
            {item.marks} {item.marks === 1 ? 'mark' : 'marks'}
          </span>
          {!forceOpen && (
            <ChevronDown className={cn('size-3.5 shrink-0 text-muted-2 transition-transform', open && 'rotate-180')} aria-hidden />
          )}
        </div>
      </button>
      {revealed && <AnswerList answer={item.answer} />}
    </div>
  );
}

function SectionCard({ section, forceOpen }: { section: MockSection; forceOpen: boolean }) {
  return (
    <Card className="overflow-hidden">
      <div className="border-b border-hairline bg-paper-raise px-5 py-3">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[11px] font-bold tracking-[0.1em] text-ink uppercase">{section.title}</span>
          <span className="shrink-0 text-[10.5px] font-semibold text-muted-2">{section.marks} marks</span>
        </div>
        {section.note && <p className="mt-1 text-[11.5px] text-muted">{section.note}</p>}
      </div>
      <div className="divide-y divide-hairline">
        {section.items.map((item) => (
          <QuestionRow key={item.num} item={item} forceOpen={forceOpen} />
        ))}
      </div>
    </Card>
  );
}

export default function BusinessMockMemo() {
  const [showAll, setShowAll] = React.useState(false);
  const data = BUSINESS_MOCK_NOV2026_P1;

  return (
    <Page width="default">
      <Link to="/" className="mb-3 inline-flex items-center gap-1.5 text-[12px] font-medium text-muted hover:text-ink">
        <ArrowLeft className="size-3.5" aria-hidden /> Back
      </Link>

      <PageTitle title={data.title} subtitle={`${data.source} · ${data.totalMarks} marks total`} />

      <div className="mb-5 flex items-center justify-between gap-3">
        <p className="text-[11.5px] text-muted-2">Tap any question to reveal its answer.</p>
        <Button variant={showAll ? 'accent' : 'secondary'} size="sm" onClick={() => setShowAll((s) => !s)}>
          {showAll ? <EyeOff /> : <Eye />}
          {showAll ? 'Hide all answers' : 'Show all answers'}
        </Button>
      </div>

      <div className="space-y-5">
        {data.sections.map((section) => (
          <SectionCard key={section.title} section={section} forceOpen={showAll} />
        ))}
      </div>
    </Page>
  );
}
