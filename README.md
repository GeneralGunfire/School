# Scholar

A personal, offline study companion for a single Grade 10 CAPS student.
No accounts, no server, no network calls — everything lives in `localStorage`.

Runs as a **website** and as a **native desktop app** from the same source.

## Running it

```bash
npm install

npm run dev             # website, http://localhost:5173
npm run desktop         # native desktop app (Tauri)

npm run build           # production web build → dist/
npm run desktop:build   # desktop installer → src-tauri/target/release/bundle/
```

The desktop app is the same React app in a native window, so any UI change
applies to both. The first `npm run desktop` compiles the Rust shell and
takes a few minutes; afterwards it is instant.

Desktop builds need the [Rust toolchain](https://rustup.rs) and, on Windows,
the WebView2 runtime (already present on Windows 10/11).

Desktop only — there are no mobile breakpoints.

## Stack

| | |
|---|---|
| React 19 + Vite + TypeScript | app |
| Tailwind CSS v4 | styling |
| `motion` v14 | animation (Framer Motion's current package name) |
| React Router v7 | routing (hash-based, so deep links work on Pages and in the desktop shell) |
| Tauri v2 | desktop shell |
| Radix + CVA + tailwind-merge | shadcn/ui-style primitives |
| Lucide React | icons |

## Layout

```
src/
  components/
    layout/      AppShell, Sidebar, Page
    ui/          primitives, Swoop, Rise, Icon
  data/
    subjects.ts  the 12 subject streams
    library.ts   authored chapters + lessons
    timetable.ts the default Grade 10B week
    content/
      dieKind.ts the Afrikaans set-work chapter
  lib/
    types.ts     domain model
    motion.ts    shared animation vocabulary
    storage.ts   localStorage read/write
    utils.ts     dates, times, cn()
  pages/         one file per route
  store/
    AppStore.tsx      progress, study blocks, notes
    TimetableStore.tsx editable timetable
    ThemeProvider.tsx  light/dark
    notifications.ts   derived notices
src-tauri/       desktop shell (Rust)
```

## Design system

All tokens live in `src/index.css`. Monochrome base — black, white and a
neutral grey ramp — with a blue accent and a blue headline gradient. Subject
accents are low-saturation so twelve of them never read as a rainbow.

Light is the default. **Dark is opt-in** via the header toggle or Settings,
which sets `data-theme="dark"` on `<html>`; every token is redeclared under
that selector, so no component branches on theme itself.

Sizes are in `rem` and the root font-size ramps from 16px to 19px between
1440px and 2200px, so the whole interface scales up on a large monitor
rather than floating in whitespace.

`prefers-reduced-motion` is honoured in two places: `MotionConfig
reducedMotion="user"` at the root, and a media query in `index.css`.

### Performance notes

Four things were done deliberately and are easy to undo by accident:

- Routes are **code-split** and prefetched on idle. Importing a page
  eagerly in `App.tsx` puts it back in the main bundle.
- There is **no `AnimatePresence` on the route outlet**. `mode="wait"`
  makes every navigation wait for the outgoing page's exit animation.
- List entrances use the **CSS `.rise` class** (`components/ui/Rise.tsx`),
  not Framer variants. A JS stagger costs one animation instance per row.
- `localStorage` writes are **debounced to 300ms** and flushed on
  `pagehide`. `setItem` is synchronous and typing fires a commit per
  keystroke.

## Data

Content (subjects, chapters, lessons) is static and read-only. Everything
else — progress, study blocks, notes, the timetable, the theme — is
user-owned, persisted, and starts empty.

`src/lib/storage.ts` has a `PREFIX` version. Bumping it discards all stored
data, which is how a shape change takes effect for someone who already has
data in their browser.

## The timetable

Ships with the real Grade 10B schedule as a default, but everything is
editable: **Timetable → Edit** to change any slot, **Periods** to change
times, labels or add/remove periods. Edits are global — the dashboard
timeline, the sidebar's "on now", notifications and the Subjects weekly
footprint all read the same store. **Reset timetable** restores the default.

## The Afrikaans translation feature

`src/pages/library/TranslatableLesson.tsx` renders Afrikaans lessons in
three modes:

- **Afrikaans** — source only
- **Side by side** — English pane beside the Afrikaans, block-aligned
- **On hover** — hovering a block reveals the English in a floating card

Any lesson block may carry an `en` field. Only Afrikaans currently does
(`hasTranslation: true` on the subject); a block without `en` renders
untranslated.

## Content status

**Afrikaans — Die Kind** is real content, extracted from the study-guide
photographs in `../AfrikaansSetBook-DieKind/`. Six lessons cover background
and Zulu cultural context, the chapter-by-chapter summary, characters and
characterisation, themes and motifs, narrative technique, and exam
preparation. Page references are the novel's own.

The guide's photographed front matter never names the author, so **no
author biography is asserted**.

**Every other subject** is intentionally empty and shows as "No content
yet" rather than carrying placeholder lessons. To add one, write a
`Chapter[]` and push it into `CHAPTERS` in `src/data/library.ts`, exactly
as Afrikaans does.
