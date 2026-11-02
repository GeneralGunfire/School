import * as React from 'react';

/**
 * The Scholar mark — one continuous ribbon that sweeps down from the top
 * right and cradles round to the bottom right, read as an abstract "S", with
 * a single dot above it like the dot of an "i". Deliberately not a book or
 * mortarboard: those read as generic ed-tech clip-art.
 *
 * The ribbon is one path with tangent-continuous curves, optically centred
 * in the tile, and heavy enough to stay legible at 16px.
 *
 * The geometry is exported so the splash screen draws the very same mark
 * instead of keeping a second copy that could drift.
 */

export const LOGO_RIBBON =
  'M63.5 31C69 36.5 67.5 43 59 46C51.5 48.7 43 48.5 37 52C27.5 57.5 28.5 66.5 36 69.5C44 72.5 58 70.5 66.5 62';
export const LOGO_DOT = { cx: 66.5, cy: 21.5, r: 4.6 } as const;
export const LOGO_STROKE_WIDTH = 9;

/** Literal hex, not `var(--grad-a)`: some WebViews don't resolve CSS variables inside SVG paint attributes. */
export const LOGO_BLUES = { deep: '#16306e', mid: '#2563eb', light: '#38a8e8' } as const;

export function LogoDefs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-tile`} x1="12" y1="8" x2="84" y2="88" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor={LOGO_BLUES.deep} />
        <stop offset="55%" stopColor={LOGO_BLUES.mid} />
        <stop offset="100%" stopColor={LOGO_BLUES.light} />
      </linearGradient>
      <linearGradient id={`${id}-stroke`} x1="30" y1="25" x2="66" y2="71" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#d4e9ff" />
      </linearGradient>
    </defs>
  );
}

export function Logo({ size = 96, className }: { size?: number; className?: string }) {
  const id = React.useId().replace(/:/g, '');
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" fill="none" className={className} role="img" aria-label="Scholar">
      <LogoDefs id={id} />
      <rect x="2" y="2" width="92" height="92" rx="23" fill={`url(#${id}-tile)`} />
      <rect x="2.5" y="2.5" width="91" height="91" rx="22.5" stroke="#fff" strokeOpacity="0.14" />
      <g transform="translate(0 -1)">
        <path d={LOGO_RIBBON} stroke={`url(#${id}-stroke)`} strokeWidth={LOGO_STROKE_WIDTH} strokeLinecap="round" strokeLinejoin="round" />
        <circle {...LOGO_DOT} fill="#fff" />
      </g>
    </svg>
  );
}

/** Flat monochrome version for places that need a single-colour mark (favicons, print). */
export function LogoMark({ size = 24, color = 'currentColor', className }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" fill="none" className={className} aria-hidden>
      <path d={LOGO_RIBBON} stroke={color} strokeWidth={LOGO_STROKE_WIDTH + 1} strokeLinecap="round" strokeLinejoin="round" />
      <circle {...LOGO_DOT} fill={color} />
    </svg>
  );
}
