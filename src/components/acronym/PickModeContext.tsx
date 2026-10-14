import * as React from 'react';

type PickKind = 'word' | 'sentence';

interface PickState {
  kind: PickKind;
  onPick: (text: string) => void;
}

interface PickModeContextValue {
  active: PickState | null;
  /** Enter pick mode. `onPick` fires once with the clicked word/sentence, then pick mode ends. */
  startPick: (kind: PickKind, onPick: (text: string) => void) => void;
  cancelPick: () => void;
}

const Ctx = React.createContext<PickModeContextValue | null>(null);

/** Characters that end a sentence, kept with it. */
const SENTENCE_END = /[.!?][)\]"'”’]*\s/;

/** Expands a clicked word's text node out to the full sentence it sits in. */
function findSentenceAround(node: Node, offset: number): string {
  const text = node.textContent ?? '';
  if (!text.trim()) return '';

  // Walk backwards from the click point to the previous sentence end (or
  // start of the text), then forwards to the next sentence end (or the end
  // of the text) — this keeps it to the containing text node, which for the
  // app's block-based lesson content is almost always one sentence/bullet
  // already, so this is a light touch-up rather than real NLP.
  let start = 0;
  for (let i = offset - 1; i > 0; i--) {
    if (SENTENCE_END.test(text.slice(Math.max(0, i - 1), i + 1))) {
      start = i + 1;
      break;
    }
  }
  let end = text.length;
  const rest = text.slice(offset);
  const match = rest.match(SENTENCE_END);
  if (match && match.index !== undefined) {
    end = offset + match.index + 1;
  }
  return text.slice(start, end).trim();
}

/** Expands a click point out to the single word under the cursor. */
function findWordAt(node: Node, offset: number): string {
  const text = node.textContent ?? '';
  if (!text) return '';
  const isWordChar = (ch: string) => /[\p{L}\p{N}'-]/u.test(ch);

  let start = offset;
  while (start > 0 && isWordChar(text[start - 1])) start--;
  let end = offset;
  while (end < text.length && isWordChar(text[end])) end++;

  return text.slice(start, end);
}

/**
 * Locates the text node and character offset under a viewport point,
 * trying the standard API first and falling back to the WebKit-prefixed one
 * some WebViews (older Tauri/WebView2) still expose instead.
 */
function caretFromPoint(x: number, y: number): { node: Node; offset: number } | null {
  const anyDoc = document as Document & {
    caretPositionFromPoint?: (x: number, y: number) => { offsetNode: Node; offset: number } | null;
    caretRangeFromPoint?: (x: number, y: number) => Range | null;
  };
  if (anyDoc.caretPositionFromPoint) {
    const pos = anyDoc.caretPositionFromPoint(x, y);
    if (pos) return { node: pos.offsetNode, offset: pos.offset };
  }
  if (anyDoc.caretRangeFromPoint) {
    const range = anyDoc.caretRangeFromPoint(x, y);
    if (range) return { node: range.startContainer, offset: range.startOffset };
  }
  return null;
}

export function AcronymPickModeProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = React.useState<PickState | null>(null);
  const activeRef = React.useRef<PickState | null>(null);
  activeRef.current = active;

  const startPick = React.useCallback((kind: PickKind, onPick: (text: string) => void) => {
    setActive({ kind, onPick });
  }, []);

  const cancelPick = React.useCallback(() => setActive(null), []);

  React.useEffect(() => {
    if (!active) return;

    const onClick = (e: MouseEvent) => {
      // Let the builder's own chrome (cancel button, backdrop) behave normally.
      if ((e.target as HTMLElement)?.closest('[data-pick-ignore]')) return;

      const caret = caretFromPoint(e.clientX, e.clientY);
      if (!caret || caret.node.nodeType !== Node.TEXT_NODE) return;

      const text = activeRef.current?.kind === 'sentence'
        ? findSentenceAround(caret.node, caret.offset)
        : findWordAt(caret.node, caret.offset);

      if (!text) return;
      e.preventDefault();
      e.stopPropagation();
      activeRef.current?.onPick(text);
      setActive(null);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
    };

    // Capture phase so this runs before any lesson block's own click handlers
    // (e.g. the collapsible question/answer rows).
    document.addEventListener('click', onClick, true);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onClick, true);
      document.removeEventListener('keydown', onKey);
    };
  }, [active]);

  const value = React.useMemo<PickModeContextValue>(() => ({ active, startPick, cancelPick }), [active, startPick, cancelPick]);

  return (
    <Ctx.Provider value={value}>
      {children}
      {active && (
        <div
          data-pick-ignore
          className="pointer-events-none fixed inset-x-0 top-0 z-[95] flex justify-center pt-4"
        >
          <div className="pointer-events-auto flex items-center gap-2.5 rounded-full border border-accent/50 bg-accent px-4 py-2 text-[13px] font-semibold text-white shadow-xl">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-white opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-white" />
            </span>
            {active.kind === 'word' ? 'Click a word on the page' : 'Click any word — its whole sentence will be used'}
            <button
              onClick={cancelPick}
              className="ml-1 rounded-full bg-white/20 px-2 py-0.5 text-[11.5px] font-semibold hover:bg-white/30"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}

export function useAcronymPickMode(): PickModeContextValue {
  const ctx = React.useContext(Ctx);
  if (!ctx) throw new Error('useAcronymPickMode must be used inside <AcronymPickModeProvider>');
  return ctx;
}
