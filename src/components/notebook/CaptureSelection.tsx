import { BrainCircuit, NotebookPen } from 'lucide-react';
import * as React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { HIGHLIGHT_COLORS, highlightHex } from './highlightColors';
import { cn } from '@/lib/utils';
import type { HighlightColor } from '@/lib/types';

export interface CaptureSelectionHandle {
  /** Clears any floating toolbar — call when a modal that used the capture closes. */
  dismiss: () => void;
}

/**
 * Wrap any lesson/page body in this for free-form capture: click-drag to
 * select any span of text (any length, not snapped to whole sentences),
 * and a floating toolbar appears offering a highlight colour plus "Save to
 * notebook" and "Add to mind map".
 *
 * This is the general-purpose sibling of `SelectionCapture` (which is
 * acronym-specific and snaps to a full sentence). Kept separate because the
 * acronym flow and the notebook/mind-map flow have different UI needs
 * (acronym: one action, grab whole sentence; here: color picker + two
 * destinations, arbitrary span).
 */
export const CaptureSelection = React.forwardRef<CaptureSelectionHandle, {
  onSaveToNotebook: (text: string, color: HighlightColor) => void;
  onAddToMindMap: (text: string, color: HighlightColor) => void;
  children: React.ReactNode;
}>(function CaptureSelection({ onSaveToNotebook, onAddToMindMap, children }, ref2) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [toolbar, setToolbar] = React.useState<{ x: number; y: number; text: string } | null>(null);
  const [color, setColor] = React.useState<HighlightColor>('yellow');

  React.useImperativeHandle(ref2, () => ({ dismiss: () => setToolbar(null) }));

  React.useEffect(() => {
    const handleUp = () => {
      const sel = window.getSelection();
      const text = sel?.toString().trim() ?? '';

      if (!text || !sel || sel.rangeCount === 0 || !ref.current) {
        setToolbar(null);
        return;
      }

      const range = sel.getRangeAt(0);
      if (!ref.current.contains(range.commonAncestorContainer)) {
        setToolbar(null);
        return;
      }
      if (text.length > 600) {
        setToolbar(null);
        return;
      }

      const rect = range.getBoundingClientRect();
      const hostRect = ref.current.getBoundingClientRect();
      setToolbar({
        x: rect.left - hostRect.left + rect.width / 2,
        y: rect.top - hostRect.top,
        text,
      });
    };

    const handleDown = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.closest('[data-capture-toolbar]')) return;
      setToolbar(null);
    };

    document.addEventListener('mouseup', handleUp);
    document.addEventListener('mousedown', handleDown);
    return () => {
      document.removeEventListener('mouseup', handleUp);
      document.removeEventListener('mousedown', handleDown);
    };
  }, []);

  const commit = (action: (text: string, color: HighlightColor) => void) => {
    if (!toolbar) return;
    action(toolbar.text, color);
    setToolbar(null);
    window.getSelection()?.removeAllRanges();
  };

  return (
    <div ref={ref} className="relative">
      {children}

      <AnimatePresence>
        {toolbar && (
          <motion.div
            data-capture-toolbar
            key="toolbar"
            initial={{ opacity: 0, y: 4, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.94 }}
            transition={{ duration: 0.12 }}
            style={{ left: toolbar.x, top: toolbar.y, transform: 'translate(-50%, calc(-100% - 10px))' }}
            className="absolute z-40 flex items-center gap-1 rounded-xl border border-hairline bg-paper p-1.5 shadow-xl"
          >
            <div className="flex items-center gap-1 border-r border-hairline pr-1.5">
              {HIGHLIGHT_COLORS.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setColor(c.id)}
                  title={c.label}
                  className={cn(
                    'size-5 shrink-0 rounded-full border-2 transition-transform',
                    color === c.id ? 'scale-110 border-ink' : 'border-transparent hover:scale-105',
                  )}
                  style={{ background: highlightHex(c.id) }}
                />
              ))}
            </div>
            <button
              onClick={() => commit(onSaveToNotebook)}
              title="Save to notebook"
              className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[12px] font-semibold text-ink transition-colors hover:bg-paper-raise"
            >
              <NotebookPen className="size-3.5" aria-hidden />
              Save
            </button>
            <button
              onClick={() => commit(onAddToMindMap)}
              title="Add to mind map"
              className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[12px] font-semibold text-ink transition-colors hover:bg-paper-raise"
            >
              <BrainCircuit className="size-3.5" aria-hidden />
              Mind map
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});
