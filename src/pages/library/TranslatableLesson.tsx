import { AnimatePresence, motion } from 'motion/react';
import { Columns2, Languages, MousePointer2 } from 'lucide-react';
import * as React from 'react';
import type { Lesson, LessonBlock } from '@/lib/types';
import { cn } from '@/lib/utils';
import { SegmentedControl } from '@/components/ui/primitives';
import { EASE_OUT_EXPO } from '@/lib/motion';

/**
 * Afrikaans lesson reader with two translation modes.
 *
 * `split` — an English pane beside the Afrikaans, aligned block for block.
 * `hover` — single column; hovering a block reveals the English in a
 *           floating card.
 */
export type TranslationMode = 'off' | 'split' | 'hover';

/* ── Block rendering ─────────────────────────────────────────────────────── */

function BlockBody({ block, variant }: { block: LessonBlock; variant: 'source' | 'en' }) {
  const text = variant === 'en' ? block.en : block.text;
  if (text === undefined) return null;
  const muted = variant === 'en';

  switch (block.type) {
    case 'heading':
      return block.level === 3 ? (
        <h3 className={cn('text-[15.5px] font-semibold tracking-[-0.01em]', muted ? 'text-muted' : 'text-ink')}>
          {text as string}
        </h3>
      ) : (
        <h2 className={cn('text-[20px] font-semibold tracking-[-0.02em]', muted ? 'text-muted' : 'text-ink')}>
          {text as string}
        </h2>
      );

    case 'list':
      return (
        <ul className={cn('space-y-2', muted ? 'text-muted' : 'text-ink-2')}>
          {(text as string[]).map((item, i) => (
            <li key={i} className="flex gap-3 text-[14.5px] leading-[1.7]">
              <span
                className={cn('mt-[10px] h-px w-2.5 shrink-0', muted ? 'bg-muted-2' : 'bg-hairline-strong')}
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case 'quote':
      return (
        <blockquote
          className={cn(
            'border-l-2 py-1 pl-5 text-[15px] leading-[1.7] italic',
            muted ? 'border-hairline text-muted' : 'border-ink/25 text-ink-2',
          )}
        >
          {text as string}
        </blockquote>
      );

    case 'callout':
      return (
        <div
          className={cn(
            'rounded-lg border px-4 py-3 text-[13.5px] leading-[1.6]',
            muted
              ? 'border-hairline bg-paper-raise text-muted'
              : 'border-hairline-strong bg-paper-raise text-ink-2',
          )}
          style={!muted ? { boxShadow: 'inset 0 1px 0 var(--surface-inset-top)' } : undefined}
        >
          {text as string}
        </div>
      );

    default:
      return (
        <p className={cn('text-[15px] leading-[1.78]', muted ? 'text-muted' : 'text-ink-2')}>
          {text as string}
        </p>
      );
  }
}

/* ── Hover mode ──────────────────────────────────────────────────────────
   The previous version mounted a fresh tooltip per block and re-ran an
   enter animation on every pointer move between blocks, which is what made
   it feel jumpy. This version keeps the card mounted and moves it with a
   shared `layoutId`, so travelling between blocks is one continuous slide.

   The reveal is also delayed slightly: without that, sweeping the pointer
   down the page fires a card for every block it crosses. */

function HoverReader({ blocks }: { blocks: LessonBlock[] }) {
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const timer = React.useRef<number | undefined>(undefined);

  const open = React.useCallback((id: string) => {
    window.clearTimeout(timer.current);
    // 90ms: long enough to ignore a pointer passing through, short enough
    // that a deliberate hover feels instant.
    timer.current = window.setTimeout(() => setActiveId(id), 90);
  }, []);

  const close = React.useCallback(() => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setActiveId(null), 110);
  }, []);

  React.useEffect(() => () => window.clearTimeout(timer.current), []);

  return (
    <div className="prose-measure space-y-6">
      {blocks.map((block) => {
        const hasEn = block.en !== undefined;
        const active = activeId === block.id;

        if (!hasEn) {
          return (
            <div key={block.id} id={`block-${block.id}`} className="scroll-mt-6">
              <BlockBody block={block} variant="source" />
            </div>
          );
        }

        return (
          <div
            key={block.id}
            id={`block-${block.id}`}
            className="relative scroll-mt-6"
            onPointerEnter={() => open(block.id)}
            onPointerLeave={close}
            onFocus={() => setActiveId(block.id)}
            onBlur={close}
            tabIndex={0}
          >
            {/* The hover target. A left rule grows in rather than the whole
                block changing background, which is far less twitchy. */}
            <div className="relative -ml-5 pl-5">
              <span
                className={cn(
                  'absolute top-0 left-0 w-[2px] rounded-full bg-ink transition-[height,opacity] duration-150 ease-out',
                  active ? 'h-full opacity-100' : 'h-0 opacity-0',
                )}
                aria-hidden
              />
              <BlockBody block={block} variant="source" />
            </div>

            <AnimatePresence>
              {active && (
                <motion.div
                  // Shared layoutId: moving between blocks slides one card
                  // rather than cross-fading two.
                  layoutId="translation-card"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{
                    layout: { type: 'spring', stiffness: 700, damping: 46, mass: 0.5 },
                    opacity: { duration: 0.12 },
                    y: { duration: 0.12 },
                  }}
                  className="pointer-events-none absolute top-0 left-full z-30 ml-8 w-[320px]"
                >
                  <div className="card px-4 py-3">
                    <p className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.1em] text-muted-2 uppercase">
                      <Languages className="size-3" aria-hidden /> English
                    </p>
                    <BlockBody block={block} variant="en" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/* ── Mode switcher ───────────────────────────────────────────────────────── */

export function TranslationToggle({
  mode,
  onChange,
}: {
  mode: TranslationMode;
  onChange: (m: TranslationMode) => void;
}) {
  return (
    <SegmentedControl
      layoutId="translation-mode"
      value={mode}
      onChange={onChange}
      options={[
        { id: 'off', label: 'Afrikaans', icon: Languages },
        { id: 'split', label: 'Side by side', icon: Columns2 },
        { id: 'hover', label: 'On hover', icon: MousePointer2 },
      ]}
    />
  );
}

/* ── Reader ──────────────────────────────────────────────────────────────── */

export function TranslatableLesson({ lesson, mode }: { lesson: Lesson; mode: TranslationMode }) {
  if (mode === 'hover') return <HoverReader blocks={lesson.blocks} />;

  if (mode === 'split') {
    return (
      <div>
        <div className="mb-6 grid grid-cols-2 gap-10 border-b border-hairline pb-2.5">
          <p className="text-[10px] font-semibold tracking-[0.11em] text-muted-2 uppercase">Afrikaans</p>
          <p className="text-[10px] font-semibold tracking-[0.11em] text-muted-2 uppercase">English</p>
        </div>
        <div className="space-y-6">
          {lesson.blocks.map((block, i) => (
            <motion.div
              key={block.id}
              id={`block-${block.id}`}
              className="grid scroll-mt-6 grid-cols-2 items-start gap-10"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18, ease: EASE_OUT_EXPO, delay: Math.min(i * 0.015, 0.2) }}
            >
              <BlockBody block={block} variant="source" />
              <BlockBody block={block} variant="en" />
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="prose-measure space-y-6">
      {lesson.blocks.map((block, i) => (
        <motion.div
          key={block.id}
          id={`block-${block.id}`}
          className="scroll-mt-6"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18, ease: EASE_OUT_EXPO, delay: Math.min(i * 0.015, 0.2) }}
        >
          <BlockBody block={block} variant="source" />
        </motion.div>
      ))}
    </div>
  );
}
