import * as React from 'react';
import type { Lesson, LessonBlock } from '@/lib/types';

/**
 * Listen engine.
 *
 * English is spoken by Kokoro, a neural voice model that runs locally in a
 * worker (see ttsWorker.ts). Kokoro has no Afrikaans, so Afrikaans is spoken by
 * the system's af-ZA voice (Windows ships natural ones: Adri and Willem).
 *
 * "Podcast" is a two-host conversation; "Read aloud" is a single narrator.
 * For Afrikaans lessons the language plan follows the translation view:
 *   af   - Afrikaans only
 *   both - side by side: each paragraph in Afrikaans, then in English
 */

export type ListenMode = 'podcast' | 'read';
export type ListenState = 'idle' | 'loading' | 'playing' | 'paused';
export type ListenLangs = 'en' | 'af' | 'both';
type Lang = 'en' | 'af';

interface Segment {
  text: string;
  lang: Lang;
  host: 'A' | 'B';
  /** Silence after this segment, ms. */
  pause: number;
  rate?: number;
}

/* ── System voices (used for Afrikaans, and as an offline fallback) ──── */

const FEMALE = /aria|jenny|sonia|libby|zira|emma|michelle|ava|natasha|clara|leah|adri|hazel|susan|samantha|female/i;
const MALE = /guy|ryan|davis|christopher|eric|roger|mark|david|william|willem|luke|james|thomas|male/i;

function score(v: SpeechSynthesisVoice, lang: string): number {
  let s = 0;
  if (/natural/i.test(v.name)) s += 100;
  if (/neural/i.test(v.name)) s += 80;
  if (/online/i.test(v.name)) s += 40;
  if (/google/i.test(v.name)) s += 30;
  if (/microsoft/i.test(v.name)) s += 10;
  if (v.lang.toLowerCase().replace('_', '-') === lang.toLowerCase()) s += 50;
  else if (v.lang.toLowerCase().startsWith(lang.slice(0, 2).toLowerCase())) s += 25;
  else return -1;
  return s;
}

/** Two distinct, best-available voices for a language (undefined if none installed). */
export function pickVoices(voices: SpeechSynthesisVoice[], lang: string) {
  const ranked = voices
    .map((v) => ({ v, s: score(v, lang) }))
    .filter((x) => x.s >= 0)
    .sort((a, b) => b.s - a.s)
    .map((x) => x.v);
  if (!ranked.length) return { a: undefined, b: undefined };
  const a = ranked[0];
  const aFemale = FEMALE.test(a.name) && !MALE.test(a.name);
  const opposite = ranked.find((v) => v !== a && (aFemale ? MALE : FEMALE).test(v.name));
  return { a, b: opposite ?? ranked.find((v) => v !== a) ?? a };
}

function useVoices() {
  const [voices, setVoices] = React.useState<SpeechSynthesisVoice[]>(() =>
    'speechSynthesis' in window ? window.speechSynthesis.getVoices() : [],
  );
  React.useEffect(() => {
    if (!('speechSynthesis' in window)) return;
    const update = () => setVoices(window.speechSynthesis.getVoices());
    update();
    window.speechSynthesis.addEventListener('voiceschanged', update);
    return () => window.speechSynthesis.removeEventListener('voiceschanged', update);
  }, []);
  return voices;
}

/* ── Text → script ───────────────────────────────────────────────────── */

function clean(s: string): string {
  return s
    .replace(/[*_`#]/g, '')
    .replace(/→|->/g, ' leads to ')
    .replace(/&/g, ' and ')
    .replace(/\s+/g, ' ')
    .trim();
}

function sentences(s: string): string[] {
  return (clean(s).match(/[^.!?]+[.!?]*/g) ?? []).map((x) => x.trim()).filter(Boolean);
}

const asArray = (x: string | string[] | undefined) => (Array.isArray(x) ? x : x ? [x] : []);

const PHRASES: Record<Lang, Record<string, string>> = {
  en: {
    welcome: 'Welcome to your study session. Today\'s topic:',
    dive: 'Great. Let\'s dive straight in.',
    next: 'Next up:',
    quote: 'Here is a quote worth noting.',
    remember: 'Remember this.',
    points: 'points here.',
    memory: 'Memory trick:',
    forWord: 'for',
    exam: 'Exam question.',
    answer: 'Model answer.',
    end: 'That\'s the end of this topic. Good luck with your revision!',
  },
  af: {
    welcome: 'Welkom by jou studiesessie. Vandag se onderwerp:',
    dive: 'Mooi so. Kom ons begin.',
    next: 'Volgende:',
    quote: 'Hier is \'n aanhaling wat jy moet onthou.',
    remember: 'Onthou dit.',
    points: 'punte hier.',
    memory: 'Geheuehulp:',
    forWord: 'vir',
    exam: 'Eksamenvraag.',
    answer: 'Modelantwoord.',
    end: 'Dit is die einde van hierdie onderwerp. Sterkte met jou studie!',
  },
};

/** One block, spoken in one language. `podcast` adds host banter and alternates voices. */
function blockSegments(b: LessonBlock, lang: Lang, podcast: boolean): Segment[] {
  const out: Segment[] = [];
  const P = PHRASES[lang];
  const say = (text: string, host: 'A' | 'B', pause = 250, rate?: number) => {
    const t = clean(text);
    if (t) out.push({ text: t, lang, host: podcast ? host : 'A', pause, rate });
  };
  const prose = (text: string, host: 'A' | 'B') => {
    for (const s of sentences(text)) say(s, host, /[.!?]$/.test(s) ? 280 : 180);
  };
  const text = lang === 'en' && b.en !== undefined ? b.en : b.text;

  switch (b.type) {
    case 'heading':
      say(podcast ? `${P.next} ${asArray(text)[0]}.` : `${asArray(text)[0]}.`, 'A', 550);
      break;
    case 'paragraph':
      prose(asArray(text).join(' '), 'A');
      break;
    case 'quote':
      if (podcast) say(P.quote, 'B', 200);
      prose(asArray(text).join(' '), 'B');
      break;
    case 'callout':
      if (podcast) say(P.remember, 'B', 150);
      prose(asArray(text).join(' '), 'B');
      break;
    case 'list': {
      const items = asArray(text);
      if (podcast) say(`${items.length} ${P.points}`, 'A', 250);
      items.forEach((it, i) => say(it, i % 2 ? 'B' : 'A', 350));
      break;
    }
    case 'definitions':
      for (const r of b.rows ?? []) {
        say(`${r.term}.`, 'A', 150);
        say(r.meaning, 'B', 400);
      }
      break;
    case 'acronym':
      say(`${P.memory} ${b.word ?? ''}${b.forWhat ? `, ${P.forWord} ${b.forWhat}` : ''}.`, 'B', 300);
      for (const it of b.items ?? []) say(`${it.letter}, ${P.forWord} ${it.stands}.${it.note ? ` ${it.note}` : ''}`, 'A', 250);
      break;
    case 'poem':
    case 'lines':
      for (const l of b.lines ?? []) {
        say(l.text, 'A', b.type === 'poem' ? 450 : 300, b.type === 'poem' ? 0.88 : undefined);
        if (b.type === 'lines' && l.note) say(l.note, 'B', 400);
      }
      break;
    case 'questions':
      for (const qa of b.qa ?? []) {
        say(podcast ? `${P.exam} ${qa.q}` : qa.q, 'A', 450);
        if (typeof qa.a === 'string') say(podcast ? `${P.answer} ${qa.a}` : qa.a, 'B', 600);
      }
      break;
    default:
      break; // audio, math, graph, steps, figure: not spoken
  }
  return out;
}

function buildSegments(lesson: Lesson, mode: ListenMode, langs: ListenLangs): Segment[] {
  const podcast = mode === 'podcast';
  const main: Lang = langs === 'en' ? 'en' : 'af';
  const out: Segment[] = [];
  const intro = (lang: Lang, title: string) => {
    const P = PHRASES[lang];
    if (podcast) {
      out.push({ text: `${P.welcome} ${title}.`, lang, host: 'A', pause: 450 });
      out.push({ text: P.dive, lang, host: 'B', pause: 500 });
    } else out.push({ text: `${title}.`, lang, host: 'A', pause: 600 });
  };

  intro(main, main === 'en' && lesson.titleEn ? lesson.titleEn : lesson.title);
  for (const b of lesson.blocks) {
    out.push(...blockSegments(b, main, podcast));
    // Side by side: the English follows each block (paragraph) it translates.
    if (langs === 'both' && b.en !== undefined) out.push(...blockSegments(b, 'en', podcast));
  }
  if (podcast) out.push({ text: PHRASES[main].end, lang: main, host: 'B', pause: 0 });
  return out;
}

/* ── Neural engine (Kokoro, runs locally in a worker) ────────────────── */

const VOICE = { A: 'af_heart', B: 'bm_george' } as const;

interface Clip { samples: Float32Array; rate: number }

let worker: Worker | undefined;
let nextId = 1;
const pending = new Map<number, { ok: (c: Clip) => void; fail: (e: Error) => void }>();
const listeners = new Set<(pct: number) => void>();

function getWorker() {
  if (worker) return worker;
  worker = new Worker(new URL('./ttsWorker.ts', import.meta.url), { type: 'module' });
  worker.onmessage = (e: MessageEvent) => {
    const m = e.data;
    if (m.type === 'progress') listeners.forEach((l) => l(m.value));
    else if (m.type === 'audio') pending.get(m.id)?.ok({ samples: m.samples, rate: m.rate });
    else if (m.type === 'error') pending.get(m.id)?.fail(new Error(m.message));
    if (m.type === 'audio' || m.type === 'error') pending.delete(m.id);
  };
  worker.onerror = () => {
    pending.forEach((p) => p.fail(new Error('worker failed')));
    pending.clear();
    worker = undefined;
  };
  return worker;
}

function synth(text: string, voice: string, speed: number): Promise<Clip> {
  return new Promise((ok, fail) => {
    const id = nextId++;
    pending.set(id, { ok, fail });
    getWorker().postMessage({ id, text, voice, speed });
  });
}

/* ── Player hook ─────────────────────────────────────────────────────── */

export function useListen(lesson: Lesson | undefined, langs: ListenLangs) {
  const voices = useVoices();
  const [state, setState] = React.useState<ListenState>('idle');
  const [mode, setMode] = React.useState<ListenMode>('podcast');
  const [rate, setRate] = React.useState(1);
  const [progress, setProgress] = React.useState(0);
  const [download, setDownload] = React.useState(0);
  const [fallback, setFallback] = React.useState(false);

  const run = React.useRef({
    segs: [] as Segment[], idx: 0, token: 0, timer: undefined as number | undefined,
    cache: new Map<number, Promise<Clip>>(),
    ctx: undefined as AudioContext | undefined,
    src: undefined as AudioBufferSourceNode | undefined,
    kind: 'neural' as 'neural' | 'system',
    fallback: false,
  });
  const rateRef = React.useRef(rate);
  rateRef.current = rate;

  const enVoices = React.useMemo(() => pickVoices(voices, 'en-ZA'), [voices]);
  const afVoices = React.useMemo(() => pickVoices(voices, 'af-ZA'), [voices]);
  const missingAfVoice = langs !== 'en' && !afVoices.a;

  React.useEffect(() => {
    listeners.add(setDownload);
    return () => { listeners.delete(setDownload); };
  }, []);

  const halt = React.useCallback(() => {
    const r = run.current;
    r.token++;
    window.clearTimeout(r.timer);
    try { r.src?.stop(); } catch { /* already stopped */ }
    r.src = undefined;
    r.ctx?.close().catch(() => {});
    r.ctx = undefined;
    r.cache.clear();
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  }, []);

  const clip = (idx: number): Promise<Clip> | undefined => {
    const r = run.current;
    const seg = r.segs[idx];
    if (!seg || seg.lang !== 'en') return undefined;
    let p = r.cache.get(idx);
    if (!p) {
      p = synth(seg.text, VOICE[seg.host], Math.min(2, (seg.rate ?? 1) * rateRef.current));
      r.cache.set(idx, p);
    }
    return p;
  };

  // `play` and `advance` reference each other, so route through a ref.
  const playRef = React.useRef<(idx: number) => void>(() => {});

  const advance = (idx: number, token: number, seg: Segment) => {
    const r = run.current;
    setProgress((idx + 1) / r.segs.length);
    r.timer = window.setTimeout(() => token === r.token && playRef.current(idx + 1), seg.pause);
  };

  const speakSystem = (idx: number, token: number) => {
    const r = run.current;
    const seg = r.segs[idx];
    r.kind = 'system';
    setState('playing');
    const set = seg.lang === 'af' ? afVoices : enVoices;
    const v = seg.host === 'A' ? set.a : set.b;
    const u = new SpeechSynthesisUtterance(seg.text);
    if (v) { u.voice = v; u.lang = v.lang; } else u.lang = seg.lang === 'af' ? 'af-ZA' : 'en-ZA';
    u.rate = (seg.rate ?? 0.95) * rateRef.current;
    u.onend = () => token === r.token && advance(idx, token, seg);
    u.onerror = () => token === r.token && setState('idle');
    window.speechSynthesis.speak(u);
  };

  const play = async (idx: number) => {
    const r = run.current;
    const seg = r.segs[idx];
    if (!seg) { halt(); setState('idle'); setProgress(0); return; }
    r.idx = idx;
    const token = ++r.token;
    if (seg.lang === 'af' || r.fallback) return speakSystem(idx, token);
    try {
      const first = clip(idx)!;
      clip(idx + 1); clip(idx + 2);
      setState((s) => (s === 'playing' ? s : 'loading'));
      const c = await first;
      if (token !== r.token) return;
      r.kind = 'neural';
      setState('playing');
      r.ctx ??= new AudioContext();
      const buf = r.ctx.createBuffer(1, c.samples.length, c.rate);
      buf.copyToChannel(c.samples as Float32Array<ArrayBuffer>, 0);
      const src = r.ctx.createBufferSource();
      src.buffer = buf;
      src.connect(r.ctx.destination);
      src.onended = () => token === r.token && advance(idx, token, seg);
      r.src = src;
      src.start();
    } catch {
      // Model could not load (offline on first run): use the system voice instead.
      if (token !== r.token) return;
      r.fallback = true;
      setFallback(true);
      speakSystem(idx, token);
    }
  };
  playRef.current = play;

  const start = (m: ListenMode) => {
    if (!lesson) return;
    halt();
    setMode(m);
    run.current.segs = buildSegments(lesson, m, langs);
    run.current.fallback = false;
    setFallback(false);
    setProgress(0);
    setState('loading');
    play(0);
  };

  const pause = () => {
    const r = run.current;
    if (r.kind === 'neural' && r.ctx) r.ctx.suspend();
    else { r.token++; window.speechSynthesis.cancel(); }
    setState('paused');
  };
  const resume = () => {
    const r = run.current;
    setState('playing');
    if (r.kind === 'neural' && r.ctx) r.ctx.resume(); else play(r.idx);
  };
  const stop = React.useCallback(() => { halt(); setState('idle'); setProgress(0); }, [halt]);

  // Stop when the lesson or the language view changes.
  React.useEffect(() => stop, [stop, lesson?.id, langs]);

  return { state, mode, rate, setRate, progress, download, start, pause, resume, stop, fallback, langs, missingAfVoice };
}
