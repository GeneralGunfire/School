import type { Chapter, LessonBlock, QAItem } from '@/lib/types';

/**
 * Exports a chapter as a PDF via the browser's native print-to-PDF — no
 * bundled PDF library, works fully offline, and renders text as real
 * selectable/searchable text rather than a rasterised image.
 *
 * Builds a clean, print-only HTML document (not the live app DOM, which is
 * full of app chrome, interactive controls and screen-only styling) inside a
 * detached iframe, then calls that iframe's own `print()`. The iframe is
 * removed once the print dialog has had a chance to open.
 */

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function textOf(t: string | string[] | undefined): string {
  if (t === undefined) return '';
  return Array.isArray(t) ? t.join(' ') : t;
}

function qaToHtml(qa: QAItem[] | undefined): string {
  if (!qa?.length) return '';
  let lastContext: string | undefined;
  return qa.map((item) => {
    const answer = Array.isArray(item.a) ? item.a.map((a) => `<li>${escapeHtml(a)}</li>`).join('') : undefined;
    const contextHtml = item.context && item.context !== lastContext
      ? `<p class="qa-context">${escapeHtml(item.context)}</p>`
      : '';
    lastContext = item.context ?? lastContext;
    return `
      ${contextHtml}
      <div class="qa">
        <p class="q">${item.n ? `<span class="q-n">${escapeHtml(item.n)}</span> ` : ''}${escapeHtml(item.q)}${item.marks ? ` <span class="marks">[${item.marks}]</span>` : ''}</p>
        ${answer ? `<ul class="answer">${answer}</ul>` : item.a ? `<p class="answer-text">${escapeHtml(item.a as string)}</p>` : ''}
      </div>`;
  }).join('');
}

function blockToHtml(b: LessonBlock): string {
  const text = textOf(b.text);
  switch (b.type) {
    case 'heading':
      return b.level === 3 ? `<h3>${escapeHtml(text)}</h3>` : `<h2>${escapeHtml(text)}</h2>`;
    case 'paragraph':
      return text ? `<p>${escapeHtml(text)}</p>` : '';
    case 'list':
      return Array.isArray(b.text) && b.text.length
        ? `<ul>${b.text.map((i) => `<li>${escapeHtml(i)}</li>`).join('')}</ul>`
        : '';
    case 'quote':
      return text ? `<blockquote>${escapeHtml(text)}</blockquote>` : '';
    case 'callout':
      return text ? `<div class="callout">${escapeHtml(text)}</div>` : '';
    case 'definitions':
      if (!b.rows?.length) return '';
      return `<table class="defs"><tbody>${b.rows.map((r) =>
        `<tr><td class="term">${escapeHtml(r.term)}</td><td>${escapeHtml(r.meaning)}</td></tr>`).join('')}</tbody></table>`;
    case 'acronym':
      if (!b.items?.length) return '';
      return `
        <div class="acronym">
          <p class="acronym-word">${escapeHtml(b.word ?? '')}${b.forWhat ? ` — ${escapeHtml(b.forWhat)}` : ''}</p>
          <ul>${b.items.map((it) => `<li><strong>${escapeHtml(it.letter)}</strong> — ${escapeHtml(it.stands)}${it.note ? ` <em>(${escapeHtml(it.note)})</em>` : ''}</li>`).join('')}</ul>
        </div>`;
    case 'poem':
    case 'lines':
      if (!b.lines?.length) return '';
      return `<div class="verse">${b.lines.map((l) =>
        `<p>${escapeHtml(l.text)}${l.note && b.type === 'lines' ? `<br><span class="note">${escapeHtml(l.note)}</span>` : ''}</p>`).join('')}</div>`;
    case 'questions':
      return qaToHtml(b.qa);
    case 'math':
      return typeof b.text === 'string'
        ? `<div class="math">${b.label ? `<p class="math-label">${escapeHtml(b.label)}</p>` : ''}<p class="math-tex">${escapeHtml(b.text)}</p></div>`
        : '';
    case 'steps':
      if (!b.steps?.length) return '';
      return `
        <div class="steps">
          ${b.label ? `<p class="steps-label">${escapeHtml(b.label)}</p>` : ''}
          ${b.steps.map((s) => `
            <div class="step">
              ${s.note ? `<span class="step-note">${escapeHtml(s.note)}</span>` : ''}
              <span class="step-tex">${escapeHtml(s.tex)}</span>
            </div>`).join('')}
        </div>`;
    case 'figure':
      return `<p class="figure-note">${b.figure?.caption ? escapeHtml(b.figure.caption) + ' — ' : ''}Diagram omitted from the printed version — view this lesson in the app to see it.</p>`;
    case 'diagram':
      return `<p class="figure-note">${b.diagram?.caption ? escapeHtml(b.diagram.caption) + ' — ' : ''}Diagram omitted from the printed version — view this lesson in the app to see it.</p>`;
    case 'prompt':
      return '';
    default:
      return text ? `<p>${escapeHtml(text)}</p>` : '';
  }
}

export function exportChapterPdf(chapter: Chapter, subjectName: string) {
  const lessonsHtml = chapter.lessons.map((lesson) => `
    <section class="lesson">
      <h1>${escapeHtml(lesson.title)}</h1>
      ${lesson.blocks.map(blockToHtml).join('\n')}
    </section>
  `).join('\n');

  const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>${escapeHtml(chapter.title)}</title>
<style>
  @page { margin: 18mm 16mm; }
  * { box-sizing: border-box; }
  body {
    font-family: Georgia, 'Times New Roman', serif;
    color: #1a1a1a;
    font-size: 11pt;
    line-height: 1.55;
    max-width: 180mm;
    margin: 0 auto;
  }
  .masthead { margin-bottom: 10mm; border-bottom: 2px solid #1a1a1a; padding-bottom: 6mm; }
  .masthead .eyebrow { font-size: 9pt; letter-spacing: 0.08em; text-transform: uppercase; color: #555; margin: 0 0 4px; }
  .masthead h1 { font-size: 22pt; margin: 0 0 4px; }
  .masthead .summary { font-size: 10pt; color: #444; margin: 4px 0 0; }
  .lesson { break-inside: avoid-page; margin-top: 9mm; }
  .lesson:first-of-type { margin-top: 0; }
  .lesson > h1 { font-size: 15pt; border-bottom: 1px solid #ccc; padding-bottom: 2mm; margin: 0 0 4mm; page-break-before: auto; }
  h2 { font-size: 13pt; margin: 6mm 0 2mm; }
  h3 { font-size: 11.5pt; margin: 4mm 0 2mm; }
  p { margin: 2mm 0; orphans: 3; widows: 3; }
  ul { margin: 2mm 0; padding-left: 5mm; }
  li { margin: 1mm 0; }
  blockquote { margin: 3mm 0; padding-left: 4mm; border-left: 2px solid #999; font-style: italic; color: #333; }
  .callout { margin: 3mm 0; padding: 3mm 4mm; background: #f4f4f0; border: 1px solid #ddd; border-radius: 2mm; font-size: 10pt; white-space: pre-wrap; }
  table.defs { width: 100%; border-collapse: collapse; margin: 3mm 0; font-size: 10pt; }
  table.defs td { border: 1px solid #ccc; padding: 2mm 3mm; vertical-align: top; }
  table.defs td.term { font-weight: bold; width: 32%; background: #f7f7f4; }
  .acronym { margin: 3mm 0; padding: 3mm 4mm; border: 1px solid #ccc; border-radius: 2mm; }
  .acronym-word { font-weight: bold; margin: 0 0 2mm; }
  .verse p { margin: 1mm 0; }
  .verse .note { color: #555; font-size: 9pt; }
  .qa-context { margin: 3mm 0 1.5mm; padding: 2mm 3mm; background: #f4f4f0; border-left: 2px solid #999; font-size: 10pt; font-style: italic; }
  .qa { margin: 3mm 0; page-break-inside: avoid; }
  .qa .q { font-weight: bold; margin: 0 0 1.5mm; }
  .qa .q-n { color: #555; }
  .qa .marks { font-weight: normal; color: #555; }
  .qa .answer, .qa .answer-text { margin: 0 0 0 4mm; color: #333; font-size: 10pt; }
  .math { margin: 3mm 0; padding: 3mm 4mm; border: 1px solid #ccc; border-radius: 2mm; background: #fafaf8; page-break-inside: avoid; }
  .math-label { font-weight: bold; margin: 0 0 1.5mm; font-size: 10pt; }
  .math-tex { font-family: 'Cambria Math', Cambria, serif; margin: 0; }
  .steps { margin: 3mm 0; page-break-inside: avoid; }
  .steps-label { font-weight: bold; margin: 0 0 2mm; }
  .step { display: flex; gap: 3mm; margin: 1.5mm 0; font-size: 10pt; }
  .step-note { color: #555; min-width: 28mm; }
  .step-tex { font-family: 'Cambria Math', Cambria, serif; }
  .figure-note { margin: 3mm 0; padding: 2mm 3mm; border: 1px dashed #bbb; border-radius: 2mm; font-size: 9.5pt; color: #777; font-style: italic; }
</style>
</head>
<body>
  <div class="masthead">
    <p class="eyebrow">${escapeHtml(subjectName)}</p>
    <h1>${escapeHtml(chapter.title)}</h1>
    ${chapter.summary ? `<p class="summary">${escapeHtml(chapter.summary)}</p>` : ''}
  </div>
  ${lessonsHtml}
</body>
</html>`;

  const iframe = document.createElement('iframe');
  iframe.style.position = 'fixed';
  iframe.style.right = '0';
  iframe.style.bottom = '0';
  iframe.style.width = '0';
  iframe.style.height = '0';
  iframe.style.border = '0';
  document.body.appendChild(iframe);

  const doc = iframe.contentWindow?.document;
  if (!doc) { document.body.removeChild(iframe); return; }
  doc.open();
  doc.write(html);
  doc.close();

  const cleanup = () => { if (iframe.parentNode) document.body.removeChild(iframe); };
  iframe.contentWindow?.addEventListener('afterprint', cleanup, { once: true });
  // Fallback: some webviews don't fire `afterprint` reliably.
  setTimeout(cleanup, 30_000);

  // Give the iframe a tick to lay out before invoking print.
  setTimeout(() => {
    iframe.contentWindow?.focus();
    iframe.contentWindow?.print();
  }, 80);
}
