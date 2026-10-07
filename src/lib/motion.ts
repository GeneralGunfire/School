import type { Transition, Variants } from 'motion/react';

/**
 * Shared motion vocabulary.
 *
 * Tuned so nothing ever makes the user wait. Entrances land in ~140ms,
 * hovers in ~100ms, stagger steps are 14ms and capped so a long list never
 * takes longer to arrive than a short one.
 *
 * prefers-reduced-motion is handled once, at the root, by MotionConfig's
 * `reducedMotion="user"`.
 */

export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

export const ease: Transition = { duration: 0.16, ease: EASE_OUT_EXPO };
export const quick: Transition = { duration: 0.1, ease: EASE_OUT_EXPO };

/** Pills and active markers — stiff enough to settle in about 120ms. */
export const spring: Transition = {
  type: 'spring',
  stiffness: 900,
  damping: 52,
  mass: 0.4,
};

/** Drawers and modals. Settles in ~180ms. */
export const springSoft: Transition = {
  type: 'spring',
  stiffness: 560,
  damping: 44,
  mass: 0.6,
};

// ── Page transitions ────────────────────────────────────────────────────────

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 3 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.13, ease: EASE_OUT_EXPO } },
  exit: { opacity: 0, transition: { duration: 0.06, ease: 'linear' } },
};

// ── Staggered lists ─────────────────────────────────────────────────────────

export const staggerParent: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.014 } },
};

export const staggerChild: Variants = {
  initial: { opacity: 0, y: 4 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.15, ease: EASE_OUT_EXPO } },
};

export const staggerChildTight: Variants = {
  initial: { opacity: 0, y: 3 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.12, ease: EASE_OUT_EXPO } },
};

/**
 * Delay for the nth item in a hand-rolled stagger, capped so a 40-row list
 * finishes in the same time a 6-row one does.
 */
export const stepDelay = (i: number, step = 0.014, cap = 0.16) => Math.min(i * step, cap);

// ── Panels & overlays ───────────────────────────────────────────────────────

export const drawerVariants: Variants = {
  initial: { x: '100%' },
  animate: { x: 0, transition: springSoft },
  exit: { x: '100%', transition: { duration: 0.12, ease: 'easeIn' } },
};

export const modalVariants: Variants = {
  initial: { opacity: 0, scale: 0.98, y: 4 },
  animate: { opacity: 1, scale: 1, y: 0, transition: spring },
  exit: { opacity: 0, transition: { duration: 0.08, ease: 'easeIn' } },
};

export const scrimVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.11 } },
  exit: { opacity: 0, transition: { duration: 0.09 } },
};

/** Popovers — the notification tray, dropdowns. Must feel instant. */
export const popoverVariants: Variants = {
  initial: { opacity: 0, y: -4, scale: 0.985 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.12, ease: EASE_OUT_EXPO },
  },
  exit: { opacity: 0, scale: 0.99, transition: { duration: 0.07, ease: 'linear' } },
};

export const tooltipVariants: Variants = {
  initial: { opacity: 0, y: 3 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.09, ease: EASE_OUT_EXPO } },
  exit: { opacity: 0, transition: { duration: 0.06 } },
};

export const collapseVariants: Variants = {
  initial: { height: 0, opacity: 0 },
  animate: { height: 'auto', opacity: 1, transition: { duration: 0.14, ease: EASE_OUT_EXPO } },
  exit: { height: 0, opacity: 0, transition: { duration: 0.1, ease: 'easeIn' } },
};

export const listItemVariants: Variants = {
  initial: { opacity: 0, y: -3 },
  animate: { opacity: 1, y: 0, transition: spring },
  exit: { opacity: 0, x: 8, transition: { duration: 0.1, ease: 'easeIn' } },
};
