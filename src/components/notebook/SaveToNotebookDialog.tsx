import { NotebookPen, Plus, X } from 'lucide-react';
import * as React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Button } from '@/components/ui/primitives';
import { useStore } from '@/store/AppStore';
import { highlightHex } from './highlightColors';
import type { HighlightColor, SubjectId } from '@/lib/types';

/**
 * Opened once a passage has been captured (colour already chosen in the
 * toolbar) — picks which notebook it goes into, offering "new notebook"
 * inline so the first capture for a topic doesn't need a separate trip.
 */
export function SaveToNotebookDialog({
  open,
  onClose,
  subjectId,
  text,
  color,
  source,
}: {
  open: boolean;
  onClose: () => void;
  subjectId: SubjectId;
  text: string;
  color: HighlightColor;
  source?: { lessonId: string; lessonTitle: string };
}) {
  const { notebooks, addNotebook, addNotebookEntry } = useStore();
  const [newTitle, setNewTitle] = React.useState('');
  const [comment, setComment] = React.useState('');

  const subjectNotebooks = notebooks.filter((n) => n.subjectId === subjectId);

  React.useEffect(() => {
    if (open) { setNewTitle(''); setComment(''); }
  }, [open]);

  const saveInto = (notebookId: string) => {
    addNotebookEntry({ notebookId, text, color, comment: comment.trim() || undefined, source });
    onClose();
  };

  const createAndSave = () => {
    if (!newTitle.trim()) return;
    const nb = addNotebook(subjectId, newTitle);
    saveInto(nb.id);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] grid place-items-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 460, damping: 38 }}
            className="relative flex max-h-[80vh] w-full max-w-[28rem] flex-col overflow-hidden rounded-2xl border border-hairline bg-paper shadow-2xl"
          >
            <div className="flex items-center justify-between gap-3 border-b border-hairline px-5 py-4">
              <p className="flex items-center gap-2 text-[14.5px] font-semibold text-ink">
                <NotebookPen className="size-4 text-accent" aria-hidden />
                Save to notebook
              </p>
              <button onClick={onClose} aria-label="Close" className="rounded-md p-1.5 text-muted-2 hover:bg-paper-raise hover:text-ink">
                <X className="size-4" />
              </button>
            </div>

            <div className="min-h-0 flex-1 space-y-4 overflow-y-auto px-5 py-4">
              <div
                className="rounded-lg border-l-4 px-3 py-2.5 text-[13px] leading-relaxed text-ink-2"
                style={{ borderColor: highlightHex(color), background: 'var(--surface-raise)' }}
              >
                "{text}"
              </div>

              <div>
                <label className="mb-1.5 block text-[11.5px] font-semibold text-muted-2 uppercase tracking-wide">
                  Add a comment (optional)
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Why this matters, in your own words"
                  rows={2}
                  className="w-full resize-none rounded-lg border border-hairline bg-paper px-3 py-2 text-[13px] text-ink outline-none placeholder:text-muted-2 focus:border-accent"
                />
              </div>

              {subjectNotebooks.length > 0 && (
                <div>
                  <label className="mb-1.5 block text-[11.5px] font-semibold text-muted-2 uppercase tracking-wide">
                    Choose a notebook
                  </label>
                  <div className="space-y-1.5">
                    {subjectNotebooks.map((nb) => (
                      <button
                        key={nb.id}
                        onClick={() => saveInto(nb.id)}
                        className="flex w-full items-center justify-between rounded-lg border border-hairline px-3 py-2.5 text-left text-[13.5px] font-medium text-ink transition-colors hover:border-accent/50 hover:bg-accent-wash"
                      >
                        {nb.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label className="mb-1.5 block text-[11.5px] font-semibold text-muted-2 uppercase tracking-wide">
                  Or create a new notebook
                </label>
                <div className="flex gap-2">
                  <input
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. Romeo and Juliet"
                    className="min-w-0 flex-1 rounded-lg border border-hairline bg-paper px-3 py-2 text-[13px] text-ink outline-none placeholder:text-muted-2 focus:border-accent"
                  />
                  <Button variant="primary" onClick={createAndSave} disabled={!newTitle.trim()}>
                    <Plus /> Create
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
