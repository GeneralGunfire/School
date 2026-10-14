import { BookMarked, NotebookText, Plus, Sparkles, Trash2 } from 'lucide-react';
import * as React from 'react';
import { Page, PageTitle, Section } from '@/components/layout/Page';
import { Badge, Button, Card, EmptyState, SegmentedControl } from '@/components/ui/primitives';
import { Rise } from '@/components/ui/Rise';
import { SUBJECTS, getSubject, subjectColor } from '@/data/subjects';
import { useStore } from '@/store/AppStore';
import { AcronymBuilder } from '@/components/acronym/AcronymBuilder';
import { cn } from '@/lib/utils';
import type { StudyNote, SubjectId, UserAcronym } from '@/lib/types';

type PaperFilter = 'all' | 1 | 2;

/* ── Acronym card ─────────────────────────────────────────────────────── */

function AcronymCard({ acronym, onEdit }: { acronym: UserAcronym; onEdit: () => void }) {
  const { removeAcronym } = useStore();
  const subject = getSubject(acronym.subjectId);
  const color = subjectColor(acronym.subjectId);

  return (
    <Card className="flex flex-col gap-3 p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-1.5">
            {acronym.letters.map((l) => (
              <span
                key={l.id}
                className="grid size-7 place-items-center rounded-md border border-hairline text-[13px] font-bold text-ink"
                style={{ background: 'var(--surface-raise)' }}
              >
                {l.letter}
              </span>
            ))}
          </div>
          <p className="mt-2 truncate text-[14px] font-semibold text-ink">{acronym.title || 'Untitled acronym'}</p>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-[11.5px] font-semibold" style={{ color }}>{subject?.shortName}</span>
            {acronym.paper && <Badge tone="accent">Paper {acronym.paper}</Badge>}
          </div>
        </div>
        <button
          onClick={() => removeAcronym(acronym.id)}
          aria-label="Delete acronym"
          className="shrink-0 rounded-md p-1.5 text-muted-2 transition-colors hover:bg-critical-wash hover:text-critical"
        >
          <Trash2 className="size-4" />
        </button>
      </div>

      <div className="space-y-1.5">
        {acronym.letters.filter((l) => l.word || l.sentence).map((l) => (
          <div key={l.id} className="flex gap-2 text-[12.5px]">
            <span className="shrink-0 font-bold text-ink">{l.letter} —</span>
            <span className="min-w-0 text-muted">
              {l.word && <span className="font-medium text-ink-2">{l.word}</span>}
              {l.word && l.sentence && ' — '}
              {l.sentence}
            </span>
          </div>
        ))}
      </div>

      <Button variant="secondary" size="sm" onClick={onEdit} className="self-start">
        Edit
      </Button>
    </Card>
  );
}

/* ── Study note card ──────────────────────────────────────────────────── */

function NoteEditorCard({ note }: { note: StudyNote }) {
  const { updateStudyNote, removeStudyNote } = useStore();
  const [pointsText, setPointsText] = React.useState(note.points.join('\n'));

  React.useEffect(() => setPointsText(note.points.join('\n')), [note.id]);

  const commitPoints = () => {
    const points = pointsText.split('\n').map((p) => p.trim()).filter(Boolean);
    updateStudyNote(note.id, { points });
  };

  return (
    <Card className="flex flex-col gap-2.5 p-4">
      <div className="flex items-center gap-2">
        <input
          value={note.title}
          onChange={(e) => updateStudyNote(note.id, { title: e.target.value })}
          placeholder="Note title"
          className="min-w-0 flex-1 bg-transparent text-[14px] font-semibold text-ink outline-none placeholder:text-muted-2"
        />
        <select
          value={note.subjectId}
          onChange={(e) => updateStudyNote(note.id, { subjectId: e.target.value as SubjectId })}
          className="shrink-0 rounded-md border border-hairline bg-paper px-2 py-1 text-[11.5px] text-muted outline-none focus:border-accent"
        >
          {SUBJECTS.map((s) => (
            <option key={s.id} value={s.id}>{s.shortName}</option>
          ))}
        </select>
        <select
          value={note.paper ?? ''}
          onChange={(e) => updateStudyNote(note.id, { paper: e.target.value ? (Number(e.target.value) as 1 | 2) : undefined })}
          className="shrink-0 rounded-md border border-hairline bg-paper px-2 py-1 text-[11.5px] text-muted outline-none focus:border-accent"
        >
          <option value="">No paper</option>
          <option value="1">Paper 1</option>
          <option value="2">Paper 2</option>
        </select>
        <button
          onClick={() => removeStudyNote(note.id)}
          aria-label="Delete note"
          className="shrink-0 rounded-md p-1.5 text-muted-2 transition-colors hover:bg-critical-wash hover:text-critical"
        >
          <Trash2 className="size-4" />
        </button>
      </div>
      <textarea
        value={pointsText}
        onChange={(e) => setPointsText(e.target.value)}
        onBlur={commitPoints}
        placeholder={'Key sentences, one per line…'}
        rows={4}
        className="w-full resize-y rounded-lg border border-hairline bg-paper px-3 py-2 text-[13px] leading-relaxed text-ink outline-none placeholder:text-muted-2 focus:border-accent"
      />
    </Card>
  );
}

/* ── Page ────────────────────────────────────────────────────────────── */

export default function AcronymsNotes() {
  const { acronyms, studyNotes, addStudyNote } = useStore();
  const [paperFilter, setPaperFilter] = React.useState<PaperFilter>('all');
  const [builderOpen, setBuilderOpen] = React.useState(false);
  const [editing, setEditing] = React.useState<UserAcronym | undefined>(undefined);

  const matchesPaper = (paper?: 1 | 2) => paperFilter === 'all' || paper === paperFilter;

  const visibleAcronyms = acronyms.filter((a) => matchesPaper(a.paper));
  const visibleNotes = studyNotes.filter((n) => matchesPaper(n.paper));

  const openCreate = () => {
    setEditing(undefined);
    setBuilderOpen(true);
  };
  const openEdit = (a: UserAcronym) => {
    setEditing(a);
    setBuilderOpen(true);
  };

  return (
    <Page width="wide">
      <PageTitle
        title="Acronyms & key notes"
        highlight="notes"
        subtitle="Every mnemonic and key-sentence note you've built yourself, in one place — split by exam paper."
        trailing={
          <div className="flex items-center gap-2">
            <Button variant="secondary" onClick={() => addStudyNote(SUBJECTS[0].id)}>
              <NotebookText /> New key-note
            </Button>
            <Button variant="primary" onClick={openCreate}>
              <Sparkles /> Create an acronym
            </Button>
          </div>
        }
      />

      <div className="mb-6">
        <SegmentedControl
          value={paperFilter === 'all' ? 'all' : `paper-${paperFilter}`}
          onChange={(v) => setPaperFilter(v === 'all' ? 'all' : (Number(v.replace('paper-', '')) as 1 | 2))}
          layoutId="paper-filter"
          options={[
            { id: 'all', label: 'All' },
            { id: 'paper-1', label: 'Paper 1' },
            { id: 'paper-2', label: 'Paper 2' },
          ]}
        />
      </div>

      <Section title="My acronyms">
        {visibleAcronyms.length === 0 ? (
          <Card>
            <EmptyState
              icon={Sparkles}
              title="No acronyms yet"
              body="Build a mnemonic from any lesson's 'Create an acronym' button, or start one here."
              action={<Button variant="primary" onClick={openCreate}><Plus /> Create an acronym</Button>}
            />
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {visibleAcronyms.map((a, i) => (
              <Rise key={a.id} i={i}>
                <AcronymCard acronym={a} onEdit={() => openEdit(a)} />
              </Rise>
            ))}
          </div>
        )}
      </Section>

      <Section title="Key-point notes" className={cn(visibleNotes.length === 0 && 'mt-8')}>
        {visibleNotes.length === 0 ? (
          <Card>
            <EmptyState
              icon={BookMarked}
              title="No key notes yet"
              body="Jot down key sentences you need to remember, tagged by subject and paper."
              action={<Button variant="primary" onClick={() => addStudyNote(SUBJECTS[0].id)}><Plus /> New key-note</Button>}
            />
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {visibleNotes.map((n, i) => (
              <Rise key={n.id} i={i}>
                <NoteEditorCard note={n} />
              </Rise>
            ))}
          </div>
        )}
      </Section>

      <AcronymBuilder open={builderOpen} onClose={() => setBuilderOpen(false)} existing={editing} />
    </Page>
  );
}
