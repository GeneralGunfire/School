import { AnimatePresence, motion } from 'motion/react';
import { Columns2, Languages, MousePointer2, ChevronDown, ChevronUp, Lightbulb, Zap, HelpCircle, CheckCircle2 } from 'lucide-react';
import * as React from 'react';
import type { Lesson, LessonBlock, DefinitionRow, AcronymItem, PoemLine, QAItem } from '@/lib/types';
import { cn } from '@/lib/utils';
import { SegmentedControl } from '@/components/ui/primitives';
import { EASE_OUT_EXPO } from '@/lib/motion';

/**
 * Lesson reader supporting all block types:
 * - Standard: heading, paragraph, list, quote, callout
 * - Business: definitions (key term table), acronym (mnemonic card)
 * - Poetry:   poem (verse), lines (line-by-line analysis), questions (Q&A with model answers)
 *
 * Afrikaans translation modes (split / hover) still work for every block type.
 */
export type TranslationMode = 'off' | 'split' | 'hover';

/* ── Definitions block ───────────────────────────────────────────────────── */

function DefinitionsBlock({ rows }: { rows: DefinitionRow[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-hairline-strong">
      <div className="grid grid-cols-[minmax(160px,28%)_1fr] border-b border-hairline bg-paper-raise">
        <div className="px-4 py-2.5">
          <span className="text-[10.5px] font-bold tracking-[0.12em] text-muted-2 uppercase">Term / Concept</span>
        </div>
        <div className="border-l border-hairline px-4 py-2.5">
          <span className="text-[10.5px] font-bold tracking-[0.12em] text-muted-2 uppercase">Definition / Meaning</span>
        </div>
      </div>
      {rows.map((row, i) => (
        <div
          key={i}
          className={cn(
            'grid grid-cols-[minmax(160px,28%)_1fr]',
            i < rows.length - 1 && 'border-b border-hairline',
          )}
        >
          <div className="px-4 py-3">
            <span className="text-[13.5px] font-semibold text-ink">{row.term}</span>
          </div>
          <div className="border-l border-hairline px-4 py-3">
            <span className="text-[13.5px] leading-[1.65] text-ink-2">{row.meaning}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Acronym / mnemonic block ────────────────────────────────────────────── */

function AcronymBlock({ word, forWhat, items }: { word?: string; forWhat?: string; items?: AcronymItem[] }) {
  if (!items?.length) return null;
  return (
    <div
      className="rounded-xl border border-hairline-strong p-5"
      style={{ background: 'var(--surface-raise)' }}
    >
      <div className="mb-4 flex items-start gap-4">
        <div
          className="grid size-12 shrink-0 place-items-center rounded-xl text-[22px] font-black tracking-tighter text-accent"
          style={{ background: 'var(--color-accent-wash, color-mix(in srgb, var(--color-accent) 12%, transparent))' }}
        >
          {word ?? '?'}
        </div>
        <div className="min-w-0 flex-1 pt-1">
          <p className="text-[11px] font-bold tracking-[0.11em] text-muted-2 uppercase">Mnemonic</p>
          {forWhat && <p className="mt-0.5 text-[13px] text-muted">{forWhat}</p>}
        </div>
        <Zap className="mt-1 size-4 shrink-0 text-accent opacity-60" aria-hidden />
      </div>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <span
              className="grid size-8 shrink-0 place-items-center rounded-lg text-[15px] font-black text-accent"
              style={{ background: 'var(--color-accent-wash, color-mix(in srgb, var(--color-accent) 10%, transparent))' }}
            >
              {item.letter}
            </span>
            <div className="min-w-0 flex-1 pt-1">
              <span className="text-[14px] font-semibold text-ink">{item.stands}</span>
              {item.note && <p className="mt-0.5 text-[12px] leading-snug text-muted">{item.note}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Poem block (verse) ──────────────────────────────────────────────────── */

function PoemBlock({ lines }: { lines?: PoemLine[] }) {
  if (!lines?.length) return null;
  return (
    <div
      className="rounded-xl border border-hairline px-6 py-5"
      style={{ background: 'var(--surface-raise)', fontFamily: 'Georgia, serif' }}
    >
      {lines.map((line, i) => (
        <div key={i} className="flex items-baseline gap-3">
          <span className="w-6 shrink-0 text-right text-[10px] tabular-nums text-muted-2 select-none">{line.n}</span>
          <span className="text-[15px] leading-[1.9] text-ink">{line.text}</span>
        </div>
      ))}
    </div>
  );
}

/* ── Line-by-line analysis block ─────────────────────────────────────────── */

function LineAnalysisBlock({ lines }: { lines?: PoemLine[] }) {
  const [openId, setOpenId] = React.useState<number | null>(null);
  if (!lines?.length) return null;

  return (
    <div className="space-y-1.5">
      {lines.map((line) => {
        const open = openId === line.n;
        const hasNote = !!line.note;
        const hasDevices = !!line.devices?.length;

        return (
          <div
            key={line.n}
            className={cn(
              'overflow-hidden rounded-lg border transition-colors duration-100',
              open ? 'border-hairline-strong' : 'border-hairline',
            )}
            style={{ background: open ? 'var(--surface-raise)' : undefined }}
          >
            <button
              className={cn(
                'flex w-full items-start gap-3 px-4 py-3 text-left',
                (hasNote || hasDevices) && 'cursor-pointer hover:bg-paper-raise',
              )}
              onClick={() => (hasNote || hasDevices) && setOpenId(open ? null : line.n)}
              disabled={!hasNote && !hasDevices}
            >
              <span className="mt-[3px] w-5 shrink-0 text-right text-[10.5px] tabular-nums text-muted-2 select-none">{line.n}</span>
              <span className="min-w-0 flex-1 font-['Georgia',_serif] text-[14px] leading-[1.75] text-ink">
                {line.text}
              </span>
              {(hasNote || hasDevices) && (
                open
                  ? <ChevronUp className="mt-1 size-3.5 shrink-0 text-muted-2" aria-hidden />
                  : <ChevronDown className="mt-1 size-3.5 shrink-0 text-muted-2" aria-hidden />
              )}
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.18, ease: EASE_OUT_EXPO }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-hairline px-4 py-3 pl-12 space-y-2.5">
                    {line.note && (
                      <div className="flex gap-2.5">
                        <Lightbulb className="mt-0.5 size-3.5 shrink-0 text-accent" aria-hidden />
                        <p className="text-[13.5px] leading-[1.7] text-ink-2">{line.note}</p>
                      </div>
                    )}
                    {line.devices && line.devices.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {line.devices.map((d, i) => (
                          <span
                            key={i}
                            className="rounded-md px-2 py-0.5 text-[11px] font-semibold text-accent"
                            style={{ background: 'var(--color-accent-wash, color-mix(in srgb, var(--color-accent) 10%, transparent))' }}
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    )}
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

/* ── Questions / model answers block ────────────────────────────────────── */

function QuestionsBlock({ qa }: { qa?: QAItem[] }) {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);
  if (!qa?.length) return null;

  return (
    <div className="space-y-2">
      {qa.map((item, i) => {
        const open = openIdx === i;
        return (
          <div
            key={i}
            className={cn(
              'overflow-hidden rounded-xl border transition-colors duration-100',
              open ? 'border-hairline-strong' : 'border-hairline',
            )}
          >
            <button
              className="flex w-full items-start gap-3 px-4 py-3.5 text-left hover:bg-paper-raise"
              onClick={() => setOpenIdx(open ? null : i)}
            >
              <HelpCircle className={cn('mt-0.5 size-4 shrink-0 transition-colors', open ? 'text-accent' : 'text-muted-2')} aria-hidden />
              <span className="min-w-0 flex-1 text-[14px] font-semibold leading-snug text-ink">
                {item.q}
                {item.marks !== undefined && (
                  <span className="ml-2 text-[12px] font-normal text-muted-2">({item.marks})</span>
                )}
              </span>
              {open
                ? <ChevronUp className="mt-1 size-3.5 shrink-0 text-muted-2" aria-hidden />
                : <ChevronDown className="mt-1 size-3.5 shrink-0 text-muted-2" aria-hidden />}
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.18, ease: EASE_OUT_EXPO }}
                  className="overflow-hidden"
                >
                  <div
                    className="border-t border-hairline px-4 py-4"
                    style={{ background: 'var(--surface-raise)' }}
                  >
                    <div className="mb-2 flex items-center gap-1.5">
                      <CheckCircle2 className="size-3.5 shrink-0 text-positive" aria-hidden />
                      <span className="text-[10.5px] font-bold tracking-[0.1em] text-positive uppercase">Model Answer</span>
                    </div>
                    {Array.isArray(item.a) ? (
                      <ul className="space-y-1.5">
                        {(item.a as string[]).map((point, pi) => (
                          <li key={pi} className="flex gap-2.5 text-[13.5px] leading-[1.7] text-ink-2">
                            <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-positive" aria-hidden />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-[13.5px] leading-[1.75] text-ink-2">{item.a as string}</p>
                    )}
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

/* ── BlockBody (all types) ───────────────────────────────────────────────── */

function BlockBody({ block, variant }: { block: LessonBlock; variant: 'source' | 'en' }) {
  const text = variant === 'en' ? block.en : block.text;
  const muted = variant === 'en';

  switch (block.type) {
    case 'heading':
      if (text === undefined) return null;
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
      if (text === undefined) return null;
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
      if (text === undefined) return null;
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
      if (text === undefined) return null;
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

    case 'definitions':
      if (!block.rows?.length) return null;
      return <DefinitionsBlock rows={block.rows} />;

    case 'acronym':
      return <AcronymBlock word={block.word} forWhat={block.forWhat} items={block.items} />;

    case 'poem':
      return <PoemBlock lines={block.lines} />;

    case 'lines':
      return <LineAnalysisBlock lines={block.lines} />;

    case 'questions':
      return <QuestionsBlock qa={block.qa} />;

    default:
      if (text === undefined) return null;
      return (
        <p className={cn('text-[15px] leading-[1.78]', muted ? 'text-muted' : 'text-ink-2')}>
          {text as string}
        </p>
      );
  }
}

/* ── Hover mode ──────────────────────────────────────────────────────────── */

function HoverReader({ blocks }: { blocks: LessonBlock[] }) {
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const timer = React.useRef<number | undefined>(undefined);

  const open = React.useCallback((id: string) => {
    window.clearTimeout(timer.current);
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
