import {
  Bold,
  Heading2,
  Italic,
  List,
  ListOrdered,
  NotebookPen,
  Plus,
  Search,
  Trash2,
  Underline,
} from 'lucide-react';
import * as React from 'react';
import { Page, PageTitle } from '@/components/layout/Page';
import { Rise } from '@/components/ui/Rise';
import { Button, Card, EmptyState } from '@/components/ui/primitives';
import { SUBJECTS, getSubject, subjectColor } from '@/data/subjects';
import { useStore } from '@/store/AppStore';
import { cn, relativeDay, toDayKey } from '@/lib/utils';
import type { Note, SubjectId } from '@/lib/types';

/* ── Toolbar ─────────────────────────────────────────────────────────────
   document.execCommand is deprecated but remains the only one-line way to
   get rich-text editing out of a contenteditable without pulling in an
   editor framework. For a local-only notes pane that is the right trade. */

const TOOLS: { cmd: string; arg?: string; icon: React.ElementType; label: string }[] = [
  { cmd: 'bold', icon: Bold, label: 'Bold' },
  { cmd: 'italic', icon: Italic, label: 'Italic' },
  { cmd: 'underline', icon: Underline, label: 'Underline' },
  { cmd: 'formatBlock', arg: 'h3', icon: Heading2, label: 'Heading' },
  { cmd: 'insertUnorderedList', icon: List, label: 'Bulleted list' },
  { cmd: 'insertOrderedList', icon: ListOrdered, label: 'Numbered list' },
];

function Toolbar({ onCommand }: { onCommand: (cmd: string, arg?: string) => void }) {
  return (
    <div className="flex items-center gap-0.5 border-b border-hairline px-3 py-2">
      {TOOLS.map((t) => {
        const Icon = t.icon;
        return (
          <button
            key={t.cmd + (t.arg ?? '')}
            type="button"
            title={t.label}
            aria-label={t.label}
            // onMouseDown, not onClick — clicking a button would otherwise
            // blur the editor and collapse the selection before the command
            // runs, so formatting would apply to nothing.
            onMouseDown={(e) => {
              e.preventDefault();
              onCommand(t.cmd, t.arg);
            }}
            className="grid size-8 place-items-center rounded-md text-muted transition-colors hover:bg-paper-raise hover:text-ink active:scale-95"
          >
            <Icon className="size-4" aria-hidden />
          </button>
        );
      })}
    </div>
  );
}

/* ── Editor ──────────────────────────────────────────────────────────── */

function Editor({ note }: { note: Note }) {
  const { updateNote, removeNote } = useStore();
  const bodyRef = React.useRef<HTMLDivElement>(null);

  // Load content into the editor only when switching notes. Writing on
  // every keystroke would reset the caret to the start of the document.
  React.useEffect(() => {
    if (bodyRef.current) bodyRef.current.innerHTML = note.html;
  }, [note.id]);

  const exec = (cmd: string, arg?: string) => {
    document.execCommand(cmd, false, arg);
    bodyRef.current?.focus();
    if (bodyRef.current) updateNote(note.id, { html: bodyRef.current.innerHTML });
  };

  return (
    <Card className="flex h-full min-h-0 flex-col overflow-hidden">
      <div className="flex items-center gap-3 border-b border-hairline px-4 py-3">
        <input
          value={note.title}
          onChange={(e) => updateNote(note.id, { title: e.target.value })}
          placeholder="Note title"
          className="min-w-0 flex-1 bg-transparent text-[15px] font-semibold text-ink outline-none placeholder:text-muted-2"
        />
        <span className="shrink-0 text-[11.5px] text-muted-2">
          {relativeDay(toDayKey(new Date(note.updatedAt)))}
        </span>
        <button
          onClick={() => removeNote(note.id)}
          aria-label="Delete note"
          className="shrink-0 rounded-md p-1.5 text-muted-2 transition-colors hover:bg-critical-wash hover:text-critical"
        >
          <Trash2 className="size-4" />
        </button>
      </div>

      <Toolbar onCommand={exec} />

      <div
        ref={bodyRef}
        contentEditable
        suppressContentEditableWarning
        role="textbox"
        aria-multiline="true"
        aria-label="Note body"
        onInput={(e) => updateNote(note.id, { html: e.currentTarget.innerHTML })}
        className={cn(
          'min-h-0 flex-1 overflow-y-auto px-5 py-4 text-[14.5px] leading-[1.75] text-ink-2 outline-none',
          // Minimal prose styling scoped to the editor body.
          '[&_h3]:mt-4 [&_h3]:mb-1.5 [&_h3]:text-[16px] [&_h3]:font-semibold [&_h3]:text-ink',
          '[&_ul]:my-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:my-2 [&_ol]:list-decimal [&_ol]:pl-5',
          '[&_li]:my-0.5 [&_p]:my-2 [&_strong]:font-semibold [&_strong]:text-ink',
          'empty:before:text-muted-2 empty:before:content-[attr(data-placeholder)]',
        )}
        data-placeholder="Start writing…"
      />
    </Card>
  );
}

/* ── Page ────────────────────────────────────────────────────────────── */

export default function Notes() {
  const { notes, addNote } = useStore();
  const [activeId, setActiveId] = React.useState<string | null>(notes[0]?.id ?? null);
  const [query, setQuery] = React.useState('');
  const [filter, setFilter] = React.useState<SubjectId | 'all'>('all');

  const visible = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return notes.filter((n) => {
      if (filter !== 'all' && n.subjectId !== filter) return false;
      if (!q) return true;
      // Strip tags so a search matches what's read, not the markup.
      const plain = n.html.replace(/<[^>]*>/g, ' ').toLowerCase();
      return n.title.toLowerCase().includes(q) || plain.includes(q);
    });
  }, [notes, query, filter]);

  const active = notes.find((n) => n.id === activeId) ?? visible[0] ?? null;

  // Keep a valid selection when the active note is deleted or filtered out.
  React.useEffect(() => {
    if (!notes.some((n) => n.id === activeId)) setActiveId(notes[0]?.id ?? null);
  }, [notes, activeId]);

  const create = () => {
    const subject = filter === 'all' ? SUBJECTS[0].id : filter;
    const n = addNote(subject);
    setActiveId(n.id);
  };

  return (
    <Page width="wide">
      <PageTitle
        eyebrow="Your workings"
        title="My notes"
        highlight="notes"
        subtitle="One place per subject. Everything saves as you type."
        trailing={
          <Button variant="primary" onClick={create}>
            <Plus /> New note
          </Button>
        }
      />

      {/* min-h keeps the editor a usable height even when the note list is
          short, instead of collapsing to its content. */}
      <div className="grid min-h-[600px] grid-cols-[300px_1fr] gap-5">
        {/* List */}
        <div className="flex min-h-0 flex-col gap-3">
          <div className="relative">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-2" aria-hidden />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search notes"
              className="w-full rounded-lg border border-hairline bg-paper py-2 pr-3 pl-9 text-[13px] text-ink outline-none placeholder:text-muted-2 focus:border-accent"
            />
          </div>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as SubjectId | 'all')}
            className="w-full rounded-lg border border-hairline bg-paper px-3 py-2 text-[13px] text-ink outline-none focus:border-accent"
          >
            <option value="all">All subjects</option>
            {SUBJECTS.map((s) => (
              <option key={s.id} value={s.id}>
                {s.shortName}
              </option>
            ))}
          </select>

          <ul className="min-h-0 flex-1 space-y-2 overflow-y-auto pr-1">
            {visible.map((n, i) => {
              const isActive = n.id === active?.id;
              return (
                <Rise as="li" i={i} key={n.id}>
                  <button
                    onClick={() => setActiveId(n.id)}
                    className={cn(
                      'w-full rounded-[0.6rem] border px-3.5 py-3 text-left transition-colors duration-100',
                      isActive
                        ? 'border-accent/45'
                        : 'hover:border-hairline-strong hover:[background:var(--surface-raise)]',
                    )}
                    style={{
                      borderColor: isActive ? undefined : 'var(--edge)',
                      background: isActive ? 'var(--color-accent-wash)' : 'var(--color-paper)',
                    }}
                  >
                    <span
                      className="truncate text-[0.68rem] font-semibold"
                      style={{ color: subjectColor(n.subjectId) }}
                    >
                      {getSubject(n.subjectId)?.shortName}
                    </span>
                    <span className="mt-1 block truncate text-[0.85rem] font-medium text-ink">
                      {n.title || 'Untitled note'}
                    </span>
                    <span className="mt-0.5 block truncate text-[0.72rem] text-muted-2">
                      {n.html.replace(/<[^>]*>/g, ' ').trim().slice(0, 64) || 'Empty'}
                    </span>
                  </button>
                </Rise>
              );
            })}

            {visible.length === 0 && (
              <li>
                <p className="py-8 text-center text-[0.78rem] text-muted-2">
                  {notes.length === 0 ? 'No notes yet.' : 'No notes match that search.'}
                </p>
              </li>
            )}
          </ul>
        </div>

        {/* Editor */}
        <div className="min-h-0">
          {active ? (
            <Editor key={active.id} note={active} />
          ) : (
            <Card className="h-full">
              <EmptyState
                icon={NotebookPen}
                title="No note selected"
                body="Create a note to start writing."
                action={
                  <Button variant="primary" onClick={create}>
                    <Plus /> New note
                  </Button>
                }
              />
            </Card>
          )}
        </div>
      </div>
    </Page>
  );
}
