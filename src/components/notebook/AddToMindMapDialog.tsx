import { BrainCircuit, Plus, X } from 'lucide-react';
import * as React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/primitives';
import { useStore } from '@/store/AppStore';
import { highlightHex } from './highlightColors';
import type { HighlightColor, SubjectId } from '@/lib/types';

/** Spawns a new node somewhere visible without stacking exactly on the last one. */
function nextNodeSpot(existingCount: number) {
  const col = existingCount % 4;
  const row = Math.floor(existingCount / 4);
  return { x: 60 + col * 220, y: 60 + row * 160 };
}

export function AddToMindMapDialog({
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
  const { mindMaps, addMindMap, addMindMapNode } = useStore();
  const navigate = useNavigate();
  const [newTitle, setNewTitle] = React.useState('');

  const subjectMaps = mindMaps.filter((m) => m.subjectId === subjectId);

  React.useEffect(() => {
    if (open) setNewTitle('');
  }, [open]);

  const addInto = (mapId: string, goTo = true) => {
    const map = mindMaps.find((m) => m.id === mapId);
    const spot = nextNodeSpot(map?.nodes.length ?? 0);
    addMindMapNode(mapId, { ...spot, width: 200, text, color, source });
    onClose();
    if (goTo) navigate(`/acronyms?tab=mindmaps&map=${mapId}`);
  };

  const createAndAdd = () => {
    if (!newTitle.trim()) return;
    const map = addMindMap(subjectId, newTitle);
    addInto(map.id);
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
                <BrainCircuit className="size-4 text-accent" aria-hidden />
                Add to mind map
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

              {subjectMaps.length > 0 && (
                <div>
                  <label className="mb-1.5 block text-[11.5px] font-semibold text-muted-2 uppercase tracking-wide">
                    Choose a map
                  </label>
                  <div className="space-y-1.5">
                    {subjectMaps.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => addInto(m.id)}
                        className="flex w-full items-center justify-between rounded-lg border border-hairline px-3 py-2.5 text-left text-[13.5px] font-medium text-ink transition-colors hover:border-accent/50 hover:bg-accent-wash"
                      >
                        {m.title}
                        <span className="text-[11.5px] font-normal text-muted-2">{m.nodes.length} cards</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label className="mb-1.5 block text-[11.5px] font-semibold text-muted-2 uppercase tracking-wide">
                  Or create a new map
                </label>
                <div className="flex gap-2">
                  <input
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. Causes of WWI"
                    className="min-w-0 flex-1 rounded-lg border border-hairline bg-paper px-3 py-2 text-[13px] text-ink outline-none placeholder:text-muted-2 focus:border-accent"
                  />
                  <Button variant="primary" onClick={createAndAdd} disabled={!newTitle.trim()}>
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
