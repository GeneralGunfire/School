import { Plus, Sparkles, X } from 'lucide-react';
import * as React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Button } from '@/components/ui/primitives';
import { SUBJECTS, getSubject } from '@/data/subjects';
import { useStore } from '@/store/AppStore';
import { cn, uid } from '@/lib/utils';
import type { AcronymLetter, SubjectId, UserAcronym } from '@/lib/types';

/**
 * Modal for creating or editing a user acronym.
 *
 * Opened either from a lesson (pre-filled with that subject/paper) or from
 * the Acronyms & Notes library (blank). Each letter of the base word can
 * carry a single word AND a fuller sentence — both are optional per letter,
 * so a learner can fill in whichever helps them remember.
 */
export function AcronymBuilder({
  open,
  onClose,
  subjectId: initialSubjectId,
  paper: initialPaper,
  existing,
  initialSentence,
}: {
  open: boolean;
  onClose: () => void;
  subjectId?: SubjectId;
  paper?: 1 | 2;
  existing?: UserAcronym;
  /** Text grabbed from a lesson via selection — dropped into the next empty letter on open. */
  initialSentence?: string;
}) {
  const { addAcronym, updateAcronym } = useStore();

  const [subjectId, setSubjectId] = React.useState<SubjectId>(existing?.subjectId ?? initialSubjectId ?? SUBJECTS[0].id);
  const [paper, setPaper] = React.useState<1 | 2 | undefined>(existing?.paper ?? initialPaper);
  const [title, setTitle] = React.useState(existing?.title ?? '');
  const [baseWord, setBaseWord] = React.useState(existing?.letters.map((l) => l.letter).join('') ?? '');
  const [letters, setLetters] = React.useState<AcronymLetter[]>(existing?.letters ?? []);
  const [pickingLetterFor, setPickingLetterFor] = React.useState<string | null>(null);

  // Re-sync the letter rows whenever the base word changes, preserving any
  // word/sentence already typed for a letter that stays in the same slot.
  React.useEffect(() => {
    const chars = baseWord.replace(/[^a-zA-Z]/g, '').split('');
    setLetters((prev) =>
      chars.map((ch, i) => prev[i] && prev[i].letter === ch.toUpperCase()
        ? prev[i]
        : { id: prev[i]?.id ?? uid(), letter: ch.toUpperCase(), word: prev[i]?.word ?? '', sentence: prev[i]?.sentence ?? '' },
      ),
    );
  }, [baseWord]);

  React.useEffect(() => {
    if (!open) return;
    setSubjectId(existing?.subjectId ?? initialSubjectId ?? SUBJECTS[0].id);
    setPaper(existing?.paper ?? initialPaper);
    setTitle(existing?.title ?? '');
    setBaseWord(existing?.letters.map((l) => l.letter).join('') ?? '');
    setLetters(existing?.letters ?? []);
    setPickingLetterFor(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, existing?.id]);

  // A sentence grabbed from a lesson: if there's exactly one empty letter,
  // drop it straight in; with several empty letters, ask which one; with
  // none empty (or none yet), stash it so the learner can place it once
  // they've typed the base word.
  const prevSentence = React.useRef<string | undefined>(undefined);
  React.useEffect(() => {
    if (!open || !initialSentence || initialSentence === prevSentence.current) return;
    prevSentence.current = initialSentence;

    const emptyIds = letters.filter((l) => !l.sentence && !l.word).map((l) => l.id);
    if (emptyIds.length === 1) {
      setLetters((prev) => prev.map((l) => (l.id === emptyIds[0] ? { ...l, sentence: initialSentence } : l)));
    } else if (emptyIds.length > 1) {
      setPickingLetterFor(initialSentence);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, initialSentence, letters.length]);

  const patchLetter = (id: string, patch: Partial<Pick<AcronymLetter, 'word' | 'sentence'>>) => {
    setLetters((prev) => prev.map((l) => (l.id === id ? { ...l, ...patch } : l)));
  };

  const placeSentenceIn = (letterId: string) => {
    if (!pickingLetterFor) return;
    patchLetter(letterId, { sentence: pickingLetterFor });
    setPickingLetterFor(null);
  };

  const canSave = baseWord.trim().length > 0 && title.trim().length > 0;

  const save = () => {
    if (!canSave) return;
    if (existing) {
      updateAcronym(existing.id, { title: title.trim(), subjectId, paper, letters });
    } else {
      const a = addAcronym(subjectId, paper);
      updateAcronym(a.id, { title: title.trim(), subjectId, paper, letters });
    }
    onClose();
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
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 420, damping: 36 }}
            className="relative flex max-h-[85vh] w-full max-w-[36rem] flex-col overflow-hidden rounded-2xl border border-hairline bg-paper shadow-2xl"
          >
            <div className="flex items-center justify-between gap-3 border-b border-hairline px-5 py-4">
              <p className="flex items-center gap-2 text-[14.5px] font-semibold text-ink">
                <Sparkles className="size-4 text-accent" aria-hidden />
                {existing ? 'Edit acronym' : 'Create an acronym'}
              </p>
              <button
                onClick={onClose}
                aria-label="Close"
                className="rounded-md p-1.5 text-muted-2 transition-colors hover:bg-paper-raise hover:text-ink"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="min-h-0 flex-1 space-y-4 overflow-y-auto px-5 py-4">
              <div>
                <label className="mb-1.5 block text-[11.5px] font-semibold text-muted-2 uppercase tracking-wide">
                  What is this for?
                </label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. The four functions of management"
                  className="w-full rounded-lg border border-hairline bg-paper px-3 py-2 text-[13.5px] text-ink outline-none placeholder:text-muted-2 focus:border-accent"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1.5 block text-[11.5px] font-semibold text-muted-2 uppercase tracking-wide">
                    Subject
                  </label>
                  <select
                    value={subjectId}
                    onChange={(e) => setSubjectId(e.target.value as SubjectId)}
                    className="w-full rounded-lg border border-hairline bg-paper px-3 py-2 text-[13px] text-ink outline-none focus:border-accent"
                  >
                    {SUBJECTS.map((s) => (
                      <option key={s.id} value={s.id}>{s.shortName}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-[11.5px] font-semibold text-muted-2 uppercase tracking-wide">
                    Paper
                  </label>
                  <select
                    value={paper ?? ''}
                    onChange={(e) => setPaper(e.target.value ? (Number(e.target.value) as 1 | 2) : undefined)}
                    className="w-full rounded-lg border border-hairline bg-paper px-3 py-2 text-[13px] text-ink outline-none focus:border-accent"
                  >
                    <option value="">No paper tag</option>
                    <option value="1">Paper 1</option>
                    <option value="2">Paper 2</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-[11.5px] font-semibold text-muted-2 uppercase tracking-wide">
                  Type the letters of the acronym
                </label>
                <input
                  value={baseWord}
                  onChange={(e) => setBaseWord(e.target.value)}
                  placeholder="e.g. POLC"
                  maxLength={24}
                  className="w-full rounded-lg border border-hairline bg-paper px-3 py-2 text-[15px] font-semibold tracking-[0.1em] text-ink uppercase outline-none placeholder:text-muted-2 placeholder:tracking-normal placeholder:normal-case focus:border-accent"
                />
                <p className="mt-1.5 text-[11.5px] text-muted-2">
                  Letters only — just type the first word, like you normally would. You can then assign a word and/or a full sentence to each letter below.
                </p>
              </div>

              {pickingLetterFor && (
                <div className="rounded-lg border border-accent/40 bg-accent-wash px-3 py-2.5 text-[12.5px] text-accent-strong">
                  <p className="font-semibold">Which letter does this sentence belong to?</p>
                  <p className="mt-0.5 text-[12px] opacity-80">"{pickingLetterFor.slice(0, 90)}{pickingLetterFor.length > 90 ? '…' : ''}"</p>
                  <p className="mt-1.5 text-[11.5px] opacity-70">Click an empty letter below to place it.</p>
                </div>
              )}

              {letters.length > 0 && (
                <div className="space-y-2.5">
                  {letters.map((l) => {
                    const isPickTarget = !!pickingLetterFor && !l.sentence && !l.word;
                    return (
                      <div
                        key={l.id}
                        className={cn(
                          'flex gap-3 rounded-xl border p-3 transition-colors',
                          isPickTarget ? 'border-accent cursor-pointer' : 'border-hairline',
                        )}
                        style={{ background: isPickTarget ? 'var(--color-accent-wash)' : 'var(--surface-raise)' }}
                        onClick={() => isPickTarget && placeSentenceIn(l.id)}
                      >
                        <span
                          className="grid size-9 shrink-0 place-items-center rounded-lg border border-hairline text-[15px] font-bold text-ink"
                          style={{ background: 'var(--surface)' }}
                        >
                          {l.letter}
                        </span>
                        <div className="min-w-0 flex-1 space-y-1.5">
                          <input
                            value={l.word}
                            onChange={(e) => patchLetter(l.id, { word: e.target.value })}
                            placeholder="One word for this letter (e.g. Plan)"
                            disabled={isPickTarget}
                            className="w-full rounded-md border border-hairline bg-paper px-2.5 py-1.5 text-[13px] text-ink outline-none placeholder:text-muted-2 focus:border-accent"
                          />
                          <textarea
                            value={l.sentence}
                            onChange={(e) => patchLetter(l.id, { sentence: e.target.value })}
                            placeholder={isPickTarget ? 'Click this card to place the sentence here' : 'Or a full sentence to remember it by'}
                            rows={1}
                            disabled={isPickTarget}
                            className="w-full resize-none rounded-md border border-hairline bg-paper px-2.5 py-1.5 text-[12.5px] text-ink outline-none placeholder:text-muted-2 focus:border-accent"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-hairline px-5 py-3.5">
              <p className="text-[11.5px] text-muted-2">
                Saved to <span className="font-semibold text-ink">Acronyms &amp; Key Notes</span> under {getSubject(subjectId)?.shortName}.
              </p>
              <div className="flex gap-2">
                <Button variant="secondary" onClick={onClose}>Cancel</Button>
                <Button variant="primary" onClick={save} disabled={!canSave}>
                  <Plus /> Save acronym
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Small trigger button — drop this anywhere a "create an acronym" affordance is useful. */
export function CreateAcronymButton({
  subjectId,
  paper,
  className,
}: {
  subjectId?: SubjectId;
  paper?: 1 | 2;
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={
          'flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-[12.5px] font-medium transition-all duration-150 ' +
          'border-accent/40 bg-accent-wash text-accent-strong hover:bg-accent-wash hover:border-accent/60 ' +
          (className ?? '')
        }
      >
        <Sparkles className="size-3.5" aria-hidden />
        Create an acronym
      </button>
      <AcronymBuilder open={open} onClose={() => setOpen(false)} subjectId={subjectId} paper={paper} />
    </>
  );
}
