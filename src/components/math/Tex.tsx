import katex from 'katex';
import 'katex/dist/katex.min.css';
import * as React from 'react';

/**
 * KaTeX is bundled (no CDN), so maths renders offline in the desktop shell.
 * Results are cached by source string: lesson pages re-render often and
 * typesetting is the expensive part.
 */

const cache = new Map<string, string>();

/**
 * Display maths is typeset as inline maths in `\displaystyle`, inside a block
 * wrapper. KaTeX's own display mode never wraps, so a long line of working
 * would overflow its card and need a horizontal scrollbar; inline mode is
 * allowed to break after `=`, `+` and `−`, so it wraps instead.
 */
function typeset(tex: string, display: boolean): string {
  const key = `${display ? 'd' : 'i'}:${tex}`;
  let html = cache.get(key);
  if (html === undefined) {
    try {
      html = katex.renderToString(display ? String.raw`\displaystyle ${tex}` : tex, {
        displayMode: false,
        throwOnError: false,
        strict: false,
      });
    } catch {
      html = tex.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c] as string);
    }
    cache.set(key, html);
  }
  return html;
}

export function Tex({ tex, display = false, left = false }: { tex: string; display?: boolean; left?: boolean }) {
  return (
    <span
      className={display ? `math-wrap block ${left ? 'text-left' : 'text-center'}` : 'math-wrap'}
      dangerouslySetInnerHTML={{ __html: typeset(tex, display) }}
    />
  );
}

const SEGMENT = /(\$\$[\s\S]+?\$\$|\$[^$]+?\$)/g;

/**
 * Plain text with embedded maths: `$x^2$` is inline, `$$…$$` is a centred
 * display equation. Anything outside the delimiters is left exactly as typed.
 */
export function RichText({ text }: { text: string }) {
  if (!text.includes('$')) return <>{text}</>;
  const parts = text.split(SEGMENT);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('$$') && part.endsWith('$$') && part.length > 4) {
          return <Tex key={i} tex={part.slice(2, -2)} display />;
        }
        if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
          return <Tex key={i} tex={part.slice(1, -1)} />;
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </>
  );
}
