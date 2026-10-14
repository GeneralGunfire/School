import { motion, useReducedMotion, type Variants } from 'motion/react';
import * as React from 'react';
import { Logo } from '@/components/ui/Logo';

/**
 * A short, one-time startup animation — the "studio ident" beat before the
 * app proper appears. Logo draws in, holds for a breath, then the whole
 * screen wipes away to reveal the real UI underneath (already mounted and
 * rendering behind it, so there is no extra load time, just a cosmetic
 * delay).
 *
 * Plays once per browser/app session via sessionStorage, not on every
 * reload loop during development and not on every route change — this is a
 * startup flourish, not a page transition.
 */
const SEEN_KEY = 'scholar:splashSeen';

export function useSplashVisible() {
  const [visible, setVisible] = React.useState(() => {
    try {
      return sessionStorage.getItem(SEEN_KEY) !== '1';
    } catch {
      return true;
    }
  });

  const dismiss = React.useCallback(() => {
    try {
      sessionStorage.setItem(SEEN_KEY, '1');
    } catch {
      /* private browsing — just skip persisting, it replays next launch */
    }
    setVisible(false);
  }, []);

  return { visible, dismiss };
}

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

export function SplashScreen({ onDone }: { onDone: () => void }) {
  const reduceMotion = useReducedMotion();
  const total = reduceMotion ? 350 : 1900;

  React.useEffect(() => {
    const t = setTimeout(onDone, total);
    return () => clearTimeout(t);
  }, [onDone, total]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] grid place-items-center"
      style={{ background: 'var(--wall-base)' }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col items-center gap-5">
        <motion.div
          initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.72 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <Logo size={96} />
          {/* Sheen sweep across the mark — the "ident" flourish. */}
          {!reduceMotion && (
            <motion.div
              className="pointer-events-none absolute inset-0 overflow-hidden rounded-[23px]"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="absolute inset-y-0 w-1/3"
                style={{
                  background: 'linear-gradient(100deg, transparent, rgba(255,255,255,0.55), transparent)',
                }}
                initial={{ x: '-120%' }}
                animate={{ x: '220%' }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
              />
            </motion.div>
          )}
        </motion.div>

        <motion.p
          className="display text-[1.6rem] text-ink"
          initial="hidden"
          animate="show"
          variants={wordVariants}
          transition={{ duration: 0.4, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          Scholar
        </motion.p>
      </div>
    </motion.div>
  );
}
