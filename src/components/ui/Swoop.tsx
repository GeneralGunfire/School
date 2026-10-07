import { motion } from 'motion/react';
import { EASE_OUT_EXPO } from '@/lib/motion';

/**
 * Gradient-filled word with a hand-drawn underline swooping beneath it.
 *
 * Taken from Prospect's page headings: the stroke is a single hand-drawn
 * bezier rather than a straight rule, which is what stops it reading as a
 * border. It draws itself once on mount via `pathLength`.
 */
export function Swoop({ children }: { children: React.ReactNode }) {
  return (
    <span className="swoop">
      <span className="swoop-text">{children}</span>
      <svg viewBox="0 0 320 14" preserveAspectRatio="none" aria-hidden>
        <motion.path
          d="M2 9C60 3 180 2 318 8"
          stroke="currentColor"
          strokeWidth={3.5}
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.75 }}
          transition={{ duration: 0.55, ease: EASE_OUT_EXPO, delay: 0.1 }}
        />
      </svg>
    </span>
  );
}

/**
 * Splits `title` on `highlight` and wraps the matched word in a Swoop.
 * Returns the plain string when there is no match, so callers never need
 * to branch.
 */
export function withSwoop(title: string, highlight?: string): React.ReactNode {
  if (!highlight || !title.includes(highlight)) return title;
  const parts = title.split(highlight);
  return (
    <>
      {parts[0]}
      <Swoop>{highlight}</Swoop>
      {parts.slice(1).join(highlight)}
    </>
  );
}
