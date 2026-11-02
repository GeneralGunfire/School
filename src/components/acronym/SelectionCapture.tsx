import { BrainCircuit, NotebookPen, Sparkles } from 'lucide-react';
import * as React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AcronymBuilder } from './AcronymBuilder';
import { HIGHLIGHT_COLORS, highlightHex } from '@/components/notebook/highlightColors';
import { cn } from '@/lib/utils';
import type { HighlightColor, SubjectId } from '@/lib/types';

/**
 * Wrap any lesson/page body in this to get one floating toolbar on text
 * selection, offering every selection-based action: a highlight colour plus
 * "Save to notebook" and "Add to mind map", and "Add to acronym" (opens the
 * builder with the sentence already sitting in the next empty letter).
 *
 * This used to be two separate popovers (acronym-specific and
 * notebook/mind-map-specific) that both reacted to the same selection and
 * rendered on top of each other. One toolbar avoids that collision, and
 * tracks selection via `selectionchange` rather than `mouseup`/`mousedown`
 * so it also works with touch — dragging a selection or using a phone's
 * native grab handles doesn't reliably fire mouse events.
 */
export interface SelectionCaptureHandle {
  /** Opens the acronym builder with no pre-filled sentence — the manual "Create an acronym" entry point. */
  openBlank: () => void;
}

export const SelectionCapture = React.forwardRef<SelectionCaptureHandle, {
  subjectId?: SubjectId;
  paper?: 1 | 2;
  onSaveToNotebook: (text: string, color: HighlightColor) => void;
  onAddToMindMap: (text: string, color: HighlightColor) => void;
  children: React.ReactNode;
}>(function SelectionCapture({ subjectId, paper, onSaveToNotebook, onAddToMindMap, children }, ref2) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [toolbar, setToolbar] = React.useState<{ x: number; y: number; text: string; below: boolean } | null>(null);
  const [color, setColor] = React.useState<HighlightColor>('yellow');
  const [builderOpen, setBuilderOpen] = React.useState(false);
  const [pendingSentence, setPendingSentence] = React.useState('');

  React.useImperativeHandle(ref2, () => ({
    openBlank: () => {
      setPendingSentence('');
      setBuilderOpen(true);
    },
  }));

  React.useEffect(() => {
    let raf = 0;
    const update = () => {
      const sel = window.getSelection();
      const text = sel?.toString().trim() ?? '';

      if (!text || !sel || sel.rangeCount === 0 || !ref.current) {
        setToolbar(null);
        return;
      }

      // Only react to selections that live inside this wrapper — a learner
      // selecting the sidebar or a modal shouldn't surface this toolbar.
      const range = sel.getRangeAt(0);
      if (!ref.current.contains(range.commonAncestorContainer)) {
        setToolbar(null);
        return;
      }

      // Cap length — this is for a sentence or short passage, not a whole page.
      if (text.length > 600) {
        setToolbar(null);
        return;
      }

      const rect = range.getBoundingClientRect();
      const hostRect = ref.current.getBoundingClientRect();
      // Clamp horizontally within the host, and flip below the selection
      // when there's no room above — common on mobile, where a selection
      // often starts near the top of the viewport.
      const x = Math.min(Math.max(rect.left - hostRect.left + rect.width / 2, 110), hostRect.width - 110);
      const spaceAbove = rect.top - hostRect.top;
      const below = spaceAbove < 56;
      setToolbar({ x, y: below ? rect.bottom - hostRect.top : spaceAbove, text, below });
    };

    // Selection fires mid-drag too — settle one frame later so the toolbar
    // tracks the final selection instead of flickering through every
    // intermediate character as a finger or mouse drags across text.
    const onSelectionChange = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    const dismissIfOutside = (e: Event) => {
      // Clicking/tapping the toolbar itself shouldn't dismiss it before its
      // own click handler fires.
      if ((e.target as HTMLElement)?.closest('[data-selection-toolbar]')) return;
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed) setToolbar(null);
    };

    document.addEventListener('selectionchange', onSelectionChange);
    document.addEventListener('pointerdown', dismissIfOutside);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('selectionchange', onSelectionChange);
      document.removeEventListener('pointerdown', dismissIfOutside);
    };
  }, []);

  const clear = () => {
    setToolbar(null);
    window.getSelection()?.removeAllRanges();
  };

  const grabForAcronym = () => {
    if (!toolbar) return;
    setPendingSentence(toolbar.text);
    clear();
    setBuilderOpen(true);
  };

  const commit = (action: (text: string, color: HighlightColor) => void) => {
    if (!toolbar) return;
    action(toolbar.text, color);
    clear();
  };

  return (
    <div ref={ref} className="relative">
      {children}

      <AnimatePresence>
        {toolbar && (
          <motion.div
            data-selection-toolbar
            key="toolbar"
            initial={{ opacity: 0, y: 4, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.94 }}
            transition={{ duration: 0.12 }}
            onPointerDown={(e) => e.stopPropagation()}
            style={{
              left: toolbar.x,
              top: toolbar.y,
              transform: toolbar.below ? 'translate(-50%, 10px)' : 'translate(-50%, calc(-100% - 10px))',
            }}
            className="absolute z-40 flex items-center gap-1 rounded-xl border border-hairline bg-paper p-1.5 shadow-xl"
          >
            <div className="flex items-center gap-1.5 border-r border-hairline pr-2 sm:gap-1 sm:pr-1.5">
              {HIGHLIGHT_COLORS.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setColor(c.id)}
                  title={c.label}
                  className={cn(
                    'size-6 shrink-0 rounded-full border-2 transition-transform sm:size-5',
                    color === c.id ? 'scale-110 border-ink' : 'border-transparent hover:scale-105',
                  )}
                  style={{ background: highlightHex(c.id) }}
                />
              ))}
            </div>
            <button
              onClick={() => commit(onSaveToNotebook)}
              title="Save to notebook"
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-[12.5px] font-semibold text-ink transition-colors hover:bg-paper-raise sm:px-2.5 sm:py-1.5 sm:text-[12px]"
            >
              <NotebookPen className="size-3.5" aria-hidden />
              Save
            </button>
            <button
              onClick={() => commit(onAddToMindMap)}
              title="Add to mind map"
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-[12.5px] font-semibold text-ink transition-colors hover:bg-paper-raise sm:px-2.5 sm:py-1.5 sm:text-[12px]"
            >
              <BrainCircuit className="size-3.5" aria-hidden />
              Mind map
            </button>
            <button
              onClick={grabForAcronym}
              title="Add to acronym"
              className="flex items-center gap-1.5 rounded-lg border-l border-hairline px-3 py-2 pl-2.5 text-[12.5px] font-semibold text-accent-strong transition-colors hover:bg-accent-wash sm:px-2.5 sm:py-1.5 sm:pl-2 sm:text-[12px]"
            >
              <Sparkles className="size-3.5" aria-hidden />
              Acronym
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AcronymBuilder
        open={builderOpen}
        onClose={() => setBuilderOpen(false)}
        subjectId={subjectId}
        paper={paper}
        initialSentence={pendingSentence}
      />
    </div>
  );
});
