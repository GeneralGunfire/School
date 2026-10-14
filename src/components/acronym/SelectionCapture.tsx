import { Sparkles } from 'lucide-react';
import * as React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AcronymBuilder } from './AcronymBuilder';
import type { SubjectId } from '@/lib/types';

/**
 * Wrap any lesson/page body in this to get a "grab this sentence" popover —
 * select text inside it, a small pill appears beside the selection, and
 * clicking it opens the acronym builder with that sentence already sitting
 * in the next empty letter, instead of retyping it by hand.
 */
export interface SelectionCaptureHandle {
  /** Opens the builder with no pre-filled sentence — the manual "Create an acronym" entry point. */
  openBlank: () => void;
}

export const SelectionCapture = React.forwardRef<SelectionCaptureHandle, {
  subjectId?: SubjectId;
  paper?: 1 | 2;
  children: React.ReactNode;
}>(function SelectionCapture({ subjectId, paper, children }, ref2) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [pill, setPill] = React.useState<{ x: number; y: number; text: string } | null>(null);
  const [builderOpen, setBuilderOpen] = React.useState(false);
  const [pendingSentence, setPendingSentence] = React.useState('');

  React.useImperativeHandle(ref2, () => ({
    openBlank: () => {
      setPendingSentence('');
      setBuilderOpen(true);
    },
  }));

  React.useEffect(() => {
    const handleUp = () => {
      const sel = window.getSelection();
      const text = sel?.toString().trim() ?? '';

      if (!text || !sel || sel.rangeCount === 0 || !ref.current) {
        setPill(null);
        return;
      }

      // Only react to selections that live inside this wrapper — a learner
      // selecting the sidebar or a modal shouldn't surface this pill.
      const range = sel.getRangeAt(0);
      if (!ref.current.contains(range.commonAncestorContainer)) {
        setPill(null);
        return;
      }

      // Cap length — this is for a sentence or short passage, not a whole page.
      if (text.length > 400) {
        setPill(null);
        return;
      }

      const rect = range.getBoundingClientRect();
      const hostRect = ref.current.getBoundingClientRect();
      setPill({
        x: rect.left - hostRect.left + rect.width / 2,
        y: rect.top - hostRect.top,
        text,
      });
    };

    const handleDown = (e: MouseEvent) => {
      // Clicking the pill itself shouldn't dismiss it before its own onClick fires.
      if ((e.target as HTMLElement)?.closest('[data-selection-pill]')) return;
      setPill(null);
    };

    document.addEventListener('mouseup', handleUp);
    document.addEventListener('mousedown', handleDown);
    return () => {
      document.removeEventListener('mouseup', handleUp);
      document.removeEventListener('mousedown', handleDown);
    };
  }, []);

  const grab = () => {
    if (!pill) return;
    setPendingSentence(pill.text);
    setPill(null);
    window.getSelection()?.removeAllRanges();
    setBuilderOpen(true);
  };

  return (
    <div ref={ref} className="relative">
      {children}

      <AnimatePresence>
        {pill && (
          <motion.button
            data-selection-pill
            key="pill"
            initial={{ opacity: 0, y: 4, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.92 }}
            transition={{ duration: 0.12 }}
            onClick={grab}
            style={{ left: pill.x, top: pill.y, transform: 'translate(-50%, calc(-100% - 8px))' }}
            className="absolute z-40 flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent px-3 py-1.5 text-[12px] font-semibold whitespace-nowrap text-white shadow-lg transition-transform hover:scale-105"
          >
            <Sparkles className="size-3.5" aria-hidden />
            Add to acronym
          </motion.button>
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
