import type { HighlightColor } from '@/lib/types';

/**
 * The highlighter palette, shared by notebook entries and mind map nodes.
 * Named tokens rather than raw hex at each call site, so the palette (and
 * its dark-mode variant) lives in exactly one place.
 */
export const HIGHLIGHT_COLORS: { id: HighlightColor; label: string; hex: string; hexDark: string }[] = [
  { id: 'yellow', label: 'Yellow', hex: '#f5c518', hexDark: '#e0b445' },
  { id: 'green', label: 'Green', hex: '#22c55e', hexDark: '#4ade80' },
  { id: 'blue', label: 'Blue', hex: '#3b82f6', hexDark: '#5b8def' },
  { id: 'pink', label: 'Pink', hex: '#ec4899', hexDark: '#f472b6' },
  { id: 'orange', label: 'Orange', hex: '#f97316', hexDark: '#fb923c' },
  { id: 'purple', label: 'Purple', hex: '#a855f7', hexDark: '#c084fc' },
];

const BY_ID = new Map(HIGHLIGHT_COLORS.map((c) => [c.id, c]));

export function highlightHex(color: HighlightColor): string {
  return BY_ID.get(color)?.hex ?? HIGHLIGHT_COLORS[0].hex;
}

/** A translucent wash of a highlight colour, for card backgrounds and text marks. */
export function highlightWash(color: HighlightColor, pct = 22): string {
  return `color-mix(in srgb, ${highlightHex(color)} ${pct}%, transparent)`;
}
