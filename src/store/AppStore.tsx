import * as React from 'react';
import { KEYS, readStore, writeStore } from '@/lib/storage';
import { uid } from '@/lib/utils';
import type {
  DayReflection,
  LessonProgress,
  MasteryLevel,
  MindMap,
  MindMapEdge,
  MindMapNode,
  Note,
  Notebook,
  NotebookEntry,
  StudyBlock,
  StudyNote,
  SubjectId,
  UserAcronym,
} from '@/lib/types';
import { seedBlocks, seedNotes, seedProgress } from '@/data/seed';

/**
 * Single store for all mutable user state.
 *
 * One context rather than several: the surfaces that read this each touch
 * three or four slices at once, so splitting would mean several providers
 * and no measurable win at this size.
 *
 * Every mutator writes through to localStorage synchronously, so a reload
 * never loses work and there is no save button anywhere in the app.
 */

interface AppState {
  progress: Record<string, LessonProgress>;
  blocks: StudyBlock[];
  reflections: Record<string, DayReflection>;
  notes: Note[];
  acronyms: UserAcronym[];
  studyNotes: StudyNote[];
  notebooks: Notebook[];
  notebookEntries: NotebookEntry[];
  mindMaps: MindMap[];
}

interface AppStore extends AppState {
  markLesson: (lessonId: string, subjectId: SubjectId, mastery: MasteryLevel) => void;
  touchLesson: (lessonId: string, subjectId: SubjectId) => void;

  addBlock: (b: Omit<StudyBlock, 'id' | 'createdAt' | 'done'>) => void;
  toggleBlock: (id: string) => void;
  removeBlock: (id: string) => void;

  setReflection: (date: string, text: string) => void;

  addNote: (subjectId: SubjectId) => Note;
  updateNote: (id: string, patch: Partial<Pick<Note, 'title' | 'html'>>) => void;
  removeNote: (id: string) => void;

  addAcronym: (subjectId: SubjectId, paper?: 1 | 2) => UserAcronym;
  updateAcronym: (
    id: string,
    patch: Partial<Pick<UserAcronym, 'title' | 'subjectId' | 'paper' | 'letters'>>,
  ) => void;
  removeAcronym: (id: string) => void;

  addStudyNote: (subjectId: SubjectId, paper?: 1 | 2) => StudyNote;
  updateStudyNote: (
    id: string,
    patch: Partial<Pick<StudyNote, 'title' | 'subjectId' | 'paper' | 'points'>>,
  ) => void;
  removeStudyNote: (id: string) => void;

  addNotebook: (subjectId: SubjectId, title: string) => Notebook;
  updateNotebook: (id: string, patch: Partial<Pick<Notebook, 'title'>>) => void;
  removeNotebook: (id: string) => void;

  addNotebookEntry: (entry: Omit<NotebookEntry, 'id' | 'createdAt'>) => NotebookEntry;
  updateNotebookEntry: (id: string, patch: Partial<Pick<NotebookEntry, 'text' | 'color' | 'comment'>>) => void;
  removeNotebookEntry: (id: string) => void;

  addMindMap: (subjectId: SubjectId, title: string) => MindMap;
  updateMindMap: (id: string, patch: Partial<Pick<MindMap, 'title'>>) => void;
  removeMindMap: (id: string) => void;
  addMindMapNode: (mapId: string, node: Omit<MindMapNode, 'id'>) => void;
  updateMindMapNode: (mapId: string, nodeId: string, patch: Partial<Omit<MindMapNode, 'id'>>) => void;
  removeMindMapNode: (mapId: string, nodeId: string) => void;
  addMindMapEdge: (mapId: string, edge: Omit<MindMapEdge, 'id'>) => void;
  removeMindMapEdge: (mapId: string, edgeId: string) => void;

  resetAll: () => void;
}

const Ctx = React.createContext<AppStore | null>(null);

/** Seeds first-run data exactly once, then never again. */
function bootstrap(): AppState {
  const alreadySeeded = readStore<boolean>(KEYS.seeded, false);

  if (!alreadySeeded) {
    const progress = seedProgress();
    const blocks = seedBlocks();
    const notes = seedNotes();
    writeStore(KEYS.progress, progress);
    writeStore(KEYS.blocks, blocks);
    writeStore(KEYS.notes, notes);
    writeStore(KEYS.seeded, true);
    return {
      progress, blocks, notes, reflections: {}, acronyms: [], studyNotes: [],
      notebooks: [], notebookEntries: [], mindMaps: [],
    };
  }

  return {
    progress: readStore<Record<string, LessonProgress>>(KEYS.progress, {}),
    blocks: readStore<StudyBlock[]>(KEYS.blocks, []),
    reflections: readStore<Record<string, DayReflection>>(KEYS.reflections, {}),
    notes: readStore<Note[]>(KEYS.notes, []),
    acronyms: readStore<UserAcronym[]>(KEYS.acronyms, []),
    studyNotes: readStore<StudyNote[]>(KEYS.studyNotes, []),
    notebooks: readStore<Notebook[]>(KEYS.notebooks, []),
    notebookEntries: readStore<NotebookEntry[]>(KEYS.notebookEntries, []),
    mindMaps: readStore<MindMap[]>(KEYS.mindMaps, []),
  };
}

export function AppStoreProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<AppState>(bootstrap);

  /**
   * One place where every slice is persisted, so no mutator can forget to.
   *
   * Writes are coalesced to the next idle moment: `localStorage.setItem` is
   * synchronous and blocks the main thread, and typing in a note fires a
   * commit per keystroke. Batching turns ~60 blocking writes a second into
   * one. A `pagehide` flush guarantees nothing is lost if the tab closes
   * inside the window.
   */
  const pending = React.useRef<AppState | null>(null);
  const timer = React.useRef<number | undefined>(undefined);

  const flush = React.useCallback(() => {
    const next = pending.current;
    if (!next) return;
    pending.current = null;
    writeStore(KEYS.progress, next.progress);
    writeStore(KEYS.blocks, next.blocks);
    writeStore(KEYS.reflections, next.reflections);
    writeStore(KEYS.notes, next.notes);
    writeStore(KEYS.acronyms, next.acronyms);
    writeStore(KEYS.studyNotes, next.studyNotes);
    writeStore(KEYS.notebooks, next.notebooks);
    writeStore(KEYS.notebookEntries, next.notebookEntries);
    writeStore(KEYS.mindMaps, next.mindMaps);
  }, []);

  const persist = React.useCallback(
    (next: AppState) => {
      pending.current = next;
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(flush, 300);
    },
    [flush],
  );

  React.useEffect(() => {
    window.addEventListener('pagehide', flush);
    return () => {
      window.removeEventListener('pagehide', flush);
      window.clearTimeout(timer.current);
      flush();
    };
  }, [flush]);

  const commit = React.useCallback(
    (fn: (prev: AppState) => AppState) => {
      setState((prev) => {
        const next = fn(prev);
        persist(next);
        return next;
      });
    },
    [persist],
  );

  /**
   * Mutators are built once and never re-created.
   *
   * Previously they lived in a `useMemo` keyed on `state`, so every
   * keystroke in a note rebuilt all nine callbacks — which changed the
   * context value identity and re-rendered every consumer in the tree,
   * including the whole sidebar and header. They only close over `commit`,
   * which is itself stable, so they can be memoised independently of the
   * data.
   */
  const actions = React.useMemo<Omit<AppStore, keyof AppState>>(
    () => ({

      markLesson: (lessonId, subjectId, mastery) =>
        commit((prev) => ({
          ...prev,
          progress: {
            ...prev.progress,
            [lessonId]: { lessonId, subjectId, mastery, lastOpenedAt: new Date().toISOString() },
          },
        })),

      touchLesson: (lessonId, subjectId) =>
        commit((prev) => {
          const existing = prev.progress[lessonId];
          // Opening a mastered lesson again must not demote it.
          const mastery: MasteryLevel = existing?.mastery === 'mastered' ? 'mastered' : 'in-progress';
          return {
            ...prev,
            progress: {
              ...prev.progress,
              [lessonId]: { lessonId, subjectId, mastery, lastOpenedAt: new Date().toISOString() },
            },
          };
        }),

      addBlock: (b) =>
        commit((prev) => ({
          ...prev,
          blocks: [...prev.blocks, { ...b, id: uid(), done: false, createdAt: new Date().toISOString() }],
        })),

      toggleBlock: (id) =>
        commit((prev) => ({
          ...prev,
          blocks: prev.blocks.map((b) => (b.id === id ? { ...b, done: !b.done } : b)),
        })),

      removeBlock: (id) =>
        commit((prev) => ({ ...prev, blocks: prev.blocks.filter((b) => b.id !== id) })),

      setReflection: (date, text) =>
        commit((prev) => ({
          ...prev,
          reflections: { ...prev.reflections, [date]: { date, text, updatedAt: new Date().toISOString() } },
        })),

      addNote: (subjectId) => {
        const note: Note = {
          id: uid(),
          subjectId,
          title: 'Untitled note',
          html: '',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        commit((prev) => ({ ...prev, notes: [note, ...prev.notes] }));
        return note;
      },

      updateNote: (id, patch) =>
        commit((prev) => ({
          ...prev,
          notes: prev.notes.map((n) =>
            n.id === id ? { ...n, ...patch, updatedAt: new Date().toISOString() } : n,
          ),
        })),

      removeNote: (id) => commit((prev) => ({ ...prev, notes: prev.notes.filter((n) => n.id !== id) })),

      addAcronym: (subjectId, paper) => {
        const acronym: UserAcronym = {
          id: uid(),
          subjectId,
          paper,
          title: '',
          letters: [],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        commit((prev) => ({ ...prev, acronyms: [acronym, ...prev.acronyms] }));
        return acronym;
      },

      updateAcronym: (id, patch) =>
        commit((prev) => ({
          ...prev,
          acronyms: prev.acronyms.map((a) =>
            a.id === id ? { ...a, ...patch, updatedAt: new Date().toISOString() } : a,
          ),
        })),

      removeAcronym: (id) =>
        commit((prev) => ({ ...prev, acronyms: prev.acronyms.filter((a) => a.id !== id) })),

      addStudyNote: (subjectId, paper) => {
        const note: StudyNote = {
          id: uid(),
          subjectId,
          paper,
          title: '',
          points: [],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        commit((prev) => ({ ...prev, studyNotes: [note, ...prev.studyNotes] }));
        return note;
      },

      updateStudyNote: (id, patch) =>
        commit((prev) => ({
          ...prev,
          studyNotes: prev.studyNotes.map((n) =>
            n.id === id ? { ...n, ...patch, updatedAt: new Date().toISOString() } : n,
          ),
        })),

      removeStudyNote: (id) =>
        commit((prev) => ({ ...prev, studyNotes: prev.studyNotes.filter((n) => n.id !== id) })),

      addNotebook: (subjectId, title) => {
        const notebook: Notebook = {
          id: uid(),
          subjectId,
          title: title.trim() || 'Untitled notebook',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        commit((prev) => ({ ...prev, notebooks: [notebook, ...prev.notebooks] }));
        return notebook;
      },

      updateNotebook: (id, patch) =>
        commit((prev) => ({
          ...prev,
          notebooks: prev.notebooks.map((n) =>
            n.id === id ? { ...n, ...patch, updatedAt: new Date().toISOString() } : n,
          ),
        })),

      removeNotebook: (id) =>
        commit((prev) => ({
          ...prev,
          notebooks: prev.notebooks.filter((n) => n.id !== id),
          notebookEntries: prev.notebookEntries.filter((e) => e.notebookId !== id),
        })),

      addNotebookEntry: (entry) => {
        const full: NotebookEntry = { ...entry, id: uid(), createdAt: new Date().toISOString() };
        commit((prev) => ({ ...prev, notebookEntries: [full, ...prev.notebookEntries] }));
        return full;
      },

      updateNotebookEntry: (id, patch) =>
        commit((prev) => ({
          ...prev,
          notebookEntries: prev.notebookEntries.map((e) => (e.id === id ? { ...e, ...patch } : e)),
        })),

      removeNotebookEntry: (id) =>
        commit((prev) => ({ ...prev, notebookEntries: prev.notebookEntries.filter((e) => e.id !== id) })),

      addMindMap: (subjectId, title) => {
        const map: MindMap = {
          id: uid(),
          subjectId,
          title: title.trim() || 'Untitled map',
          nodes: [],
          edges: [],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        commit((prev) => ({ ...prev, mindMaps: [map, ...prev.mindMaps] }));
        return map;
      },

      updateMindMap: (id, patch) =>
        commit((prev) => ({
          ...prev,
          mindMaps: prev.mindMaps.map((m) =>
            m.id === id ? { ...m, ...patch, updatedAt: new Date().toISOString() } : m,
          ),
        })),

      removeMindMap: (id) =>
        commit((prev) => ({ ...prev, mindMaps: prev.mindMaps.filter((m) => m.id !== id) })),

      addMindMapNode: (mapId, node) =>
        commit((prev) => ({
          ...prev,
          mindMaps: prev.mindMaps.map((m) =>
            m.id === mapId
              ? { ...m, nodes: [...m.nodes, { ...node, id: uid() }], updatedAt: new Date().toISOString() }
              : m,
          ),
        })),

      updateMindMapNode: (mapId, nodeId, patch) =>
        commit((prev) => ({
          ...prev,
          mindMaps: prev.mindMaps.map((m) =>
            m.id === mapId
              ? {
                  ...m,
                  nodes: m.nodes.map((n) => (n.id === nodeId ? { ...n, ...patch } : n)),
                  updatedAt: new Date().toISOString(),
                }
              : m,
          ),
        })),

      removeMindMapNode: (mapId, nodeId) =>
        commit((prev) => ({
          ...prev,
          mindMaps: prev.mindMaps.map((m) =>
            m.id === mapId
              ? {
                  ...m,
                  nodes: m.nodes.filter((n) => n.id !== nodeId),
                  edges: m.edges.filter((e) => e.fromId !== nodeId && e.toId !== nodeId),
                  updatedAt: new Date().toISOString(),
                }
              : m,
          ),
        })),

      addMindMapEdge: (mapId, edge) =>
        commit((prev) => ({
          ...prev,
          mindMaps: prev.mindMaps.map((m) =>
            m.id === mapId
              ? { ...m, edges: [...m.edges, { ...edge, id: uid() }], updatedAt: new Date().toISOString() }
              : m,
          ),
        })),

      removeMindMapEdge: (mapId, edgeId) =>
        commit((prev) => ({
          ...prev,
          mindMaps: prev.mindMaps.map((m) =>
            m.id === mapId
              ? { ...m, edges: m.edges.filter((e) => e.id !== edgeId), updatedAt: new Date().toISOString() }
              : m,
          ),
        })),

      resetAll: () => {
        writeStore(KEYS.seeded, false);
        setState(bootstrap());
      },
    }),
    [commit],
  );

  // Only the data half changes identity, and only when the data actually
  // changed.
  const store = React.useMemo<AppStore>(() => ({ ...state, ...actions }), [state, actions]);

  return <Ctx.Provider value={store}>{children}</Ctx.Provider>;
}

export function useStore(): AppStore {
  const ctx = React.useContext(Ctx);
  if (!ctx) throw new Error('useStore must be used inside <AppStoreProvider>');
  return ctx;
}
