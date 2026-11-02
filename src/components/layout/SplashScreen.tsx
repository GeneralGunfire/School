import { motion, useReducedMotion } from 'motion/react';
import * as React from 'react';
import { LogoDefs, LOGO_DOT, LOGO_RIBBON, LOGO_STROKE_WIDTH } from '@/components/ui/Logo';

/**
 * The startup ident, kept deliberately quiet: on the app's own background,
 * the tile settles in, the ribbon draws itself, the dot lands, and the
 * wordmark fades up beneath it. About two seconds, then a plain cross-fade
 * into the UI, which is already mounted behind it. Click or any key skips.
 *
 * Plays on every fresh launch (`App` mounts once per launch). With reduced
 * motion it is a short fade and nothing else.
 */
export function useSplashVisible() {
  const [visible, setVisible] = React.useState(true);
  const dismiss = React.useCallback(() => setVisible(false), []);
  return { visible, dismiss };
}

const EASE = [0.22, 1, 0.36, 1] as const;
const TOTAL = 2300;

export function SplashScreen({ onDone }: { onDone: () => void }) {
  const reduce = useReducedMotion();
  const total = reduce ? 450 : TOTAL;
  const id = React.useId().replace(/:/g, '');

  React.useEffect(() => {
    const t = setTimeout(onDone, total);
    return () => clearTimeout(t);
  }, [onDone, total]);

  React.useEffect(() => {
    const skip = () => onDone();
    window.addEventListener('keydown', skip, { once: true });
    return () => window.removeEventListener('keydown', skip);
  }, [onDone]);

  const d = (s: number) => (reduce ? 0 : s);

  return (
    <motion.div
      className="fixed inset-0 z-[200] grid cursor-pointer place-items-center"
      style={{
        background:
          'radial-gradient(60rem 40rem at 50% 42%, color-mix(in srgb, var(--grad-b) 9%, transparent), transparent 70%), var(--wall-base)',
      }}
      onClick={onDone}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: EASE }}
      role="presentation"
    >
      <div className="flex flex-col items-center">
        <motion.svg
          width={92}
          height={92}
          viewBox="0 0 96 96"
          fill="none"
          aria-label="Scholar"
          initial={{ opacity: 0, scale: reduce ? 1 : 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ filter: 'drop-shadow(0 10px 24px rgba(37,99,235,0.28))' }}
        >
          <LogoDefs id={id} />
          <rect x="2" y="2" width="92" height="92" rx="23" fill={`url(#${id}-tile)`} />
          <rect x="2.5" y="2.5" width="91" height="91" rx="22.5" stroke="#fff" strokeOpacity="0.14" />
          <g transform="translate(0 -1)">
            <motion.path
              d={LOGO_RIBBON}
              stroke={`url(#${id}-stroke)`}
              strokeWidth={LOGO_STROKE_WIDTH}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: reduce ? 1 : 0, opacity: reduce ? 1 : 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: { duration: 0.8, ease: [0.65, 0, 0.35, 1], delay: d(0.35) },
                opacity: { duration: 0.05, delay: d(0.35) },
              }}
            />
            <motion.circle
              {...LOGO_DOT}
              fill="#fff"
              initial={{ opacity: reduce ? 1 : 0, cy: reduce ? LOGO_DOT.cy : LOGO_DOT.cy - 7 }}
              animate={{ opacity: 1, cy: LOGO_DOT.cy }}
              transition={{ duration: 0.4, ease: EASE, delay: d(1.05) }}
            />
          </g>
        </motion.svg>

        <motion.h1
          className="display mt-6 text-[2.1rem] font-semibold leading-none tracking-tight text-ink"
          initial={{ opacity: 0, y: reduce ? 0 : 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE, delay: d(0.9) }}
        >
          Scholar
        </motion.h1>

        <motion.p
          className="mt-2.5 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: d(1.15) }}
        >
          Grade 10 · CAPS
        </motion.p>

        <div
          className="mt-8 h-[2px] w-24 overflow-hidden rounded-full"
          style={{ background: 'color-mix(in srgb, var(--color-ink) 10%, transparent)' }}
        >
          <motion.div
            className="h-full origin-left rounded-full"
            style={{ background: 'var(--grad-b)' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: (total - 450) / 1000, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
