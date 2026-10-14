import {
  BookMarked, BrainCircuit, NotebookPen, NotebookText, Plus, Sparkles, Trash2,
} from 'lucide-react';
import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Page, PageTitle, Section } from '@/components/layout/Page';
import { Badge, Button, Card, EmptyState, SegmentedControl } from '@/components/ui/primitives';
import { Rise } from '@/components/ui/Rise';
import { SUBJECTS, getSubject, subjectColor } from '@/data/subjects';
import { useStore } from '@/store/AppStore';
import { AcronymBuilder } from '@/components/acronym/AcronymBuilder';
import { MindMapCanvas } from '@/components/notebook/MindMapCanvas';
import { highlightHex, highlightWash } from '@/components/notebook/highlightColors';
import { cn } from '@/lib/utils';
import type { Notebook, StudyNote, SubjectId, UserAcronym } from '@/lib/types';

type PaperFilter = 'all' | 1 | 2;
type Tab = 'acronyms' | 'notes' | 'notebooks' | 'mindmaps';

const TABS: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: 'acronyms', label: 'Acronyms', icon: Sparkles },
  { id: 'notes', label: 'Key notes', icon: NotebookText },
  { id: 'notebooks', label: 'Notebooks', icon: BookMarked },
  { id: 'mindmaps', label: 'Mind maps', icon: BrainCircuit },
];

/* ── Subject toggler ─────────────────────────────────────────────────────
   A horizontal row of chips, one per subject that actually has content in
   the active tab, plus "All subjects". Keeps the page usable once a
   learner has a dozen notebooks or maps across different subjects. */

function SubjectTogglers({
  subjectIds,
  value,
  onChange,
}: {
  subjectIds: SubjectId[];
  value: SubjectId | 'all';
  onChange: (v: SubjectId | 'all') => void;
}) {
  if (subjectIds.length === 0) return null;
  return (
    <div className="mb-5 flex flex-wrap gap-1.5">
      <button
        onClick={() => onChange('all')}
        className={cn(
          'rounded-full border px-3 py-1.5 text-[12.5px] font-semibold transition-colors',
          value === 'all' ? 'border-ink bg-ink text-paper' : 'border-hairline text-muted hover:border-hairline-strong hover:text-ink',
        )}
      >
        All subjects
      </button>
      {subjectIds.map((id) => {
        const s = getSubject(id);
        if (!s) return null;
        const active = value === id;
        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            className={cn(
              'rounded-full border px-3 py-1.5 text-[12.5px] font-semibold transition-colors',
              active ? 'text-paper' : 'border-hairline text-muted hover:border-hairline-strong hover:text-ink',
            )}
            style={active ? { background: subjectColor(id), borderColor: subjectColor(id) } : undefined}
          >
            {s.shortName}
          </button>
        );
      })}
    </div>
  );
}

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

/* ── Notebooks tab ────────────────────────────────────────────────────── */

function NotebookList({ notebook }: { notebook: Notebook }) {
  const { notebookEntries, updateNotebook, removeNotebook, removeNotebookEntry } = useStore();
  const entries = notebookEntries.filter((e) => e.notebookId === notebook.id);

  return (
    <Card className="flex flex-col gap-3 p-4">
      <div className="flex items-center gap-2">
        <input
          value={notebook.title}
          onChange={(e) => updateNotebook(notebook.id, { title: e.target.value })}
          className="min-w-0 flex-1 bg-transparent text-[15px] font-semibold text-ink outline-none"
        />
        <span className="shrink-0 text-[11px] text-muted-2">{entries.length} {entries.length === 1 ? 'entry' : 'entries'}</span>
        <button
          onClick={() => removeNotebook(notebook.id)}
          aria-label="Delete notebook"
          className="shrink-0 rounded-md p-1.5 text-muted-2 transition-colors hover:bg-critical-wash hover:text-critical"
        >
          <Trash2 className="size-4" />
        </button>
      </div>

      {entries.length === 0 ? (
        <p className="py-6 text-center text-[12.5px] text-muted-2">
          Select any text in a lesson and choose "Save" to add it here.
        </p>
      ) : (
        <div className="space-y-2">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="group relative rounded-lg border-l-4 py-2.5 pr-8 pl-3 text-[13px] leading-relaxed text-ink-2"
              style={{ borderColor: highlightHex(entry.color), background: highlightWash(entry.color, 12) }}
            >
              "{entry.text}"
              {entry.comment && <p className="mt-1.5 text-[12px] font-medium text-ink">{entry.comment}</p>}
              {entry.source && <p className="mt-1 text-[11px] text-muted-2">{entry.source.lessonTitle}</p>}
              <button
                onClick={() => removeNotebookEntry(entry.id)}
                aria-label="Remove entry"
                className="absolute top-2 right-2 rounded p-1 text-muted-2 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-critical-wash hover:text-critical"
              >
                <Trash2 className="size-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}

/* ── Mind maps tab ────────────────────────────────────────────────────── */

function MindMapsTab({ subjectFilter }: { subjectFilter: SubjectId | 'all' }) {
  const { mindMaps, addMindMap, removeMindMap } = useStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const visible = mindMaps.filter((m) => subjectFilter === 'all' || m.subjectId === subjectFilter);
  const activeId = searchParams.get('map') ?? visible[0]?.id ?? null;
  const active = visible.find((m) => m.id === activeId);

  const create = () => {
    const subjectId = subjectFilter === 'all' ? SUBJECTS[0].id : subjectFilter;
    const map = addMindMap(subjectId, 'New mind map');
    setSearchParams({ tab: 'mindmaps', map: map.id });
  };

  if (visible.length === 0) {
    return (
      <Card>
        <EmptyState
          icon={BrainCircuit}
          title="No mind maps yet"
          body="Select text in a lesson and choose 'Mind map', or start a blank one here."
          action={<Button variant="primary" onClick={create}><Plus /> New mind map</Button>}
        />
      </Card>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        {visible.map((m) => (
          <button
            key={m.id}
            onClick={() => setSearchParams({ tab: 'mindmaps', map: m.id })}
            className={cn(
              'rounded-lg border px-3 py-1.5 text-[12.5px] font-semibold transition-colors',
              m.id === active?.id ? 'border-ink bg-ink text-paper' : 'border-hairline text-muted hover:border-hairline-strong hover:text-ink',
            )}
          >
            {m.title}
          </button>
        ))}
        <button
          onClick={create}
          className="flex items-center gap-1 rounded-lg border border-dashed border-hairline-strong px-3 py-1.5 text-[12.5px] font-semibold text-muted hover:border-accent hover:text-accent"
        >
          <Plus className="size-3.5" /> New
        </button>
      </div>

      {active && (
        <>
          <div className="flex items-center justify-between">
            <RenameMap map={active} />
            <button
              onClick={() => removeMindMap(active.id)}
              className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[12px] font-semibold text-critical hover:bg-critical-wash"
            >
              <Trash2 className="size-3.5" /> Delete map
            </button>
          </div>
          <MindMapCanvas map={active} />
        </>
      )}
    </div>
  );
}

function RenameMap({ map }: { map: { id: string; title: string } }) {
  const { updateMindMap } = useStore();
  return (
    <input
      value={map.title}
      onChange={(e) => updateMindMap(map.id, { title: e.target.value })}
      className="rounded-lg bg-transparent px-1 text-[16px] font-semibold text-ink outline-none focus:bg-paper-raise"
    />
  );
}

/* ── Page ────────────────────────────────────────────────────────────── */

export default function AcronymsNotes() {
  const { acronyms, studyNotes, notebooks, addStudyNote, addNotebook } = useStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = (searchParams.get('tab') as Tab) ?? 'acronyms';
  const [paperFilter, setPaperFilter] = React.useState<PaperFilter>('all');
  const [subjectFilter, setSubjectFilter] = React.useState<SubjectId | 'all'>('all');
  const [builderOpen, setBuilderOpen] = React.useState(false);
  const [editing, setEditing] = React.useState<UserAcronym | undefined>(undefined);

  const setTab = (t: Tab) => setSearchParams(t === 'mindmaps' ? { tab: t } : { tab: t });

  const matchesPaper = (paper?: 1 | 2) => paperFilter === 'all' || paper === paperFilter;
  const matchesSubject = (s: SubjectId) => subjectFilter === 'all' || s === subjectFilter;

  const visibleAcronyms = acronyms.filter((a) => matchesPaper(a.paper) && matchesSubject(a.subjectId));
  const visibleNotes = studyNotes.filter((n) => matchesPaper(n.paper) && matchesSubject(n.subjectId));
  const visibleNotebooks = notebooks.filter((n) => matchesSubject(n.subjectId));

  const subjectsInTab = React.useMemo(() => {
    const ids = tab === 'acronyms' ? acronyms.map((a) => a.subjectId)
      : tab === 'notes' ? studyNotes.map((n) => n.subjectId)
      : notebooks.map((n) => n.subjectId);
    return [...new Set(ids)];
  }, [tab, acronyms, studyNotes, notebooks]);

  const openCreate = () => { setEditing(undefined); setBuilderOpen(true); };
  const openEdit = (a: UserAcronym) => { setEditing(a); setBuilderOpen(true); };

  return (
    <Page width="wide">
      <PageTitle
        title="Study tools"
        highlight="tools"
        subtitle="Acronyms, key notes, subject notebooks and mind maps you've built yourself — all in one place, split by paper and subject."
        trailing={
          tab === 'acronyms' ? (
            <Button variant="primary" onClick={openCreate}><Sparkles /> Create an acronym</Button>
          ) : tab === 'notes' ? (
            <Button variant="primary" onClick={() => addStudyNote(SUBJECTS[0].id)}><NotebookText /> New key-note</Button>
          ) : tab === 'notebooks' ? (
            <Button variant="primary" onClick={() => addNotebook(subjectFilter === 'all' ? SUBJECTS[0].id : subjectFilter, 'General')}>
              <NotebookPen /> New notebook
            </Button>
          ) : undefined
        }
      />

      <div className="mb-6">
        <SegmentedControl
          value={tab}
          onChange={(v) => setTab(v as Tab)}
          layoutId="study-tools-tab"
          options={TABS}
        />
      </div>

      {(tab === 'acronyms' || tab === 'notes') && (
        <div className="mb-4">
          <SegmentedControl
            value={paperFilter === 'all' ? 'all' : `paper-${paperFilter}`}
            onChange={(v) => setPaperFilter(v === 'all' ? 'all' : (Number(v.replace('paper-', '')) as 1 | 2))}
            layoutId="paper-filter"
            size="sm"
            options={[
              { id: 'all', label: 'All papers' },
              { id: 'paper-1', label: 'Paper 1' },
              { id: 'paper-2', label: 'Paper 2' },
            ]}
          />
        </div>
      )}

      {tab !== 'mindmaps' && (
        <SubjectTogglers subjectIds={subjectsInTab} value={subjectFilter} onChange={setSubjectFilter} />
      )}

      {tab === 'acronyms' && (
        <Section>
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
      )}

      {tab === 'notes' && (
        <Section>
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
      )}

      {tab === 'notebooks' && (
        <Section>
          {visibleNotebooks.length === 0 ? (
            <Card>
              <EmptyState
                icon={BookMarked}
                title="No notebooks yet"
                body="Select any text in a lesson and choose 'Save' to start your first notebook, or create one here."
                action={
                  <Button
                    variant="primary"
                    onClick={() => addNotebook(subjectFilter === 'all' ? SUBJECTS[0].id : subjectFilter, 'General')}
                  >
                    <Plus /> New notebook
                  </Button>
                }
              />
            </Card>
          ) : (
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
              {visibleNotebooks.map((nb, i) => (
                <Rise key={nb.id} i={i}>
                  <NotebookList notebook={nb} />
                </Rise>
              ))}
            </div>
          )}
        </Section>
      )}

      {tab === 'mindmaps' && (
        <Section>
          <MindMapsTab subjectFilter={subjectFilter} />
        </Section>
      )}

      <AcronymBuilder open={builderOpen} onClose={() => setBuilderOpen(false)} existing={editing} />
    </Page>
  );
}
