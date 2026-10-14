import { Link2, Plus, Trash2, X, ZoomIn, ZoomOut } from 'lucide-react';
import * as React from 'react';
import { useStore } from '@/store/AppStore';
import { highlightHex, highlightWash, HIGHLIGHT_COLORS } from './highlightColors';
import { cn, clamp, uid } from '@/lib/utils';
import type { HighlightColor, MindMap } from '@/lib/types';

/**
 * An Obsidian-Canvas-style board: nodes are free-positioned cards on an
 * infinite pannable/zoomable plane, connected by drawn lines rather than
 * folder-style nesting. No freehand drawing — connections are structured
 * (node to node), which is what actually survives being reopened and edited
 * later; a scribbled line has no data behind it.
 *
 * Interaction model:
 * - Drag empty canvas: pan.
 * - Scroll / pinch: zoom, centred on the pointer.
 * - Drag a card: move it.
 * - Drag from a card's connector handle to another card: link them.
 * - Click a card: select it (shows delete / recolour controls).
 * - Double-click empty canvas: create a new blank card there.
 */
export function MindMapCanvas({ map }: { map: MindMap }) {
  const { updateMindMapNode, addMindMapNode, removeMindMapNode, addMindMapEdge, removeMindMapEdge } = useStore();

  const hostRef = React.useRef<HTMLDivElement>(null);
  const [view, setView] = React.useState({ x: 0, y: 0, scale: 1 });
  const [selectedNode, setSelectedNode] = React.useState<string | null>(null);
  const [selectedEdge, setSelectedEdge] = React.useState<string | null>(null);
  const [linking, setLinking] = React.useState<{ fromId: string; x: number; y: number } | null>(null);
  const [editingNode, setEditingNode] = React.useState<string | null>(null);

  const dragState = React.useRef<
    | { kind: 'pan'; startX: number; startY: number; viewX: number; viewY: number }
    | { kind: 'node'; id: string; startX: number; startY: number; nodeX: number; nodeY: number }
    | null
  >(null);

  // ── Coordinate helpers ──────────────────────────────────────────────────
  const toCanvas = React.useCallback(
    (clientX: number, clientY: number) => {
      const rect = hostRef.current?.getBoundingClientRect();
      if (!rect) return { x: 0, y: 0 };
      return {
        x: (clientX - rect.left - view.x) / view.scale,
        y: (clientY - rect.top - view.y) / view.scale,
      };
    },
    [view],
  );

  // ── Pan + zoom ──────────────────────────────────────────────────────────
  const onCanvasPointerDown = (e: React.PointerEvent) => {
    if (e.target !== e.currentTarget) return;
    setSelectedNode(null);
    setSelectedEdge(null);
    dragState.current = { kind: 'pan', startX: e.clientX, startY: e.clientY, viewX: view.x, viewY: view.y };
    (e.target as Element).setPointerCapture(e.pointerId);
  };

  const onCanvasDoubleClick = (e: React.MouseEvent) => {
    if (e.target !== e.currentTarget) return;
    const { x, y } = toCanvas(e.clientX, e.clientY);
    addMindMapNode(map.id, { x: x - 100, y: y - 24, width: 200, text: 'New card', color: 'yellow' });
  };

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const rect = hostRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pointerX = e.clientX - rect.left;
    const pointerY = e.clientY - rect.top;
    const delta = -e.deltaY * 0.0015;
    setView((v) => {
      const nextScale = clamp(v.scale * (1 + delta), 0.35, 2.5);
      const ratio = nextScale / v.scale;
      return {
        scale: nextScale,
        x: pointerX - (pointerX - v.x) * ratio,
        y: pointerY - (pointerY - v.y) * ratio,
      };
    });
  };

  // ── Node drag ───────────────────────────────────────────────────────────
  const onNodePointerDown = (e: React.PointerEvent, nodeId: string) => {
    e.stopPropagation();
    const node = map.nodes.find((n) => n.id === nodeId);
    if (!node) return;
    setSelectedNode(nodeId);
    setSelectedEdge(null);
    dragState.current = { kind: 'node', id: nodeId, startX: e.clientX, startY: e.clientY, nodeX: node.x, nodeY: node.y };
    (e.target as Element).setPointerCapture(e.pointerId);
  };

  React.useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const d = dragState.current;
      if (d?.kind === 'pan') {
        setView((v) => ({ ...v, x: d.viewX + (e.clientX - d.startX), y: d.viewY + (e.clientY - d.startY) }));
      } else if (d?.kind === 'node') {
        const dx = (e.clientX - d.startX) / view.scale;
        const dy = (e.clientY - d.startY) / view.scale;
        updateMindMapNode(map.id, d.id, { x: d.nodeX + dx, y: d.nodeY + dy });
      } else if (linking) {
        const { x, y } = toCanvas(e.clientX, e.clientY);
        setLinking((l) => (l ? { ...l, x, y } : l));
      }
    };
    const onUp = (e: PointerEvent) => {
      dragState.current = null;
      if (linking) {
        // Did we release over a card? Hit-test by DOM element under the pointer.
        const el = document.elementFromPoint(e.clientX, e.clientY);
        const targetId = el?.closest<HTMLElement>('[data-node-id]')?.dataset.nodeId;
        if (targetId && targetId !== linking.fromId) {
          addMindMapEdge(map.id, { fromId: linking.fromId, toId: targetId });
        }
        setLinking(null);
      }
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view.scale, linking, map.id]);

  const startLinking = (e: React.PointerEvent, fromId: string) => {
    e.stopPropagation();
    e.preventDefault();
    const { x, y } = toCanvas(e.clientX, e.clientY);
    setLinking({ fromId, x, y });
  };

  const zoomBy = (factor: number) => {
    const rect = hostRef.current?.getBoundingClientRect();
    const cx = rect ? rect.width / 2 : 0;
    const cy = rect ? rect.height / 2 : 0;
    setView((v) => {
      const nextScale = clamp(v.scale * factor, 0.35, 2.5);
      const ratio = nextScale / v.scale;
      return { scale: nextScale, x: cx - (cx - v.x) * ratio, y: cy - (cy - v.y) * ratio };
    });
  };

  const nodeById = React.useMemo(() => new Map(map.nodes.map((n) => [n.id, n])), [map.nodes]);
  const nodeCenter = (id: string) => {
    const n = nodeById.get(id);
    if (!n) return { x: 0, y: 0 };
    const height = 64; // approximate card height for a clean connection midpoint
    return { x: n.x + n.width / 2, y: n.y + height / 2 };
  };

  return (
    <div className="relative h-[70vh] min-h-[480px] overflow-hidden rounded-2xl border border-hairline" style={{ background: 'var(--surface-sunken)' }}>
      {/* Dotted canvas background, panned with the view. */}
      <div
        ref={hostRef}
        className="absolute inset-0 cursor-grab touch-none active:cursor-grabbing"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--color-hairline-strong) 1px, transparent 1px)',
          backgroundSize: `${24 * view.scale}px ${24 * view.scale}px`,
          backgroundPosition: `${view.x}px ${view.y}px`,
        }}
        onPointerDown={onCanvasPointerDown}
        onDoubleClick={onCanvasDoubleClick}
        onWheel={onWheel}
      >
        <div
          className="absolute top-0 left-0"
          style={{ transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})`, transformOrigin: '0 0' }}
        >
          {/* Edges, drawn first so they sit under the cards. */}
          <svg className="pointer-events-none absolute top-0 left-0 overflow-visible" width={1} height={1}>
            {map.edges.map((edge) => {
              const a = nodeCenter(edge.fromId);
              const b = nodeCenter(edge.toId);
              const midX = (a.x + b.x) / 2;
              return (
                <g key={edge.id}>
                  <path
                    d={`M ${a.x} ${a.y} C ${midX} ${a.y}, ${midX} ${b.y}, ${b.x} ${b.y}`}
                    fill="none"
                    stroke={selectedEdge === edge.id ? 'var(--color-accent)' : 'var(--color-hairline-strong)'}
                    strokeWidth={selectedEdge === edge.id ? 2.5 : 1.8}
                    className="pointer-events-auto cursor-pointer"
                    onPointerDown={(e) => { e.stopPropagation(); setSelectedEdge(edge.id); setSelectedNode(null); }}
                  />
                  {edge.label && (
                    <text x={midX} y={(a.y + b.y) / 2 - 6} fontSize="11" textAnchor="middle" fill="var(--color-muted)">
                      {edge.label}
                    </text>
                  )}
                </g>
              );
            })}
            {linking && (
              <path
                d={`M ${nodeCenter(linking.fromId).x} ${nodeCenter(linking.fromId).y} L ${linking.x} ${linking.y}`}
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth={2}
                strokeDasharray="5,4"
              />
            )}
          </svg>

          {/* Cards. */}
          {map.nodes.map((node) => (
            <MindMapCard
              key={node.id}
              node={node}
              selected={selectedNode === node.id}
              editing={editingNode === node.id}
              onPointerDown={(e) => onNodePointerDown(e, node.id)}
              onDoubleClick={(e) => { e.stopPropagation(); setEditingNode(node.id); }}
              onStopEditing={() => setEditingNode(null)}
              onChangeText={(text) => updateMindMapNode(map.id, node.id, { text })}
              onStartLink={(e) => startLinking(e, node.id)}
            />
          ))}
        </div>
      </div>

      {/* Toolbar: zoom + selection actions. */}
      <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-xl border border-hairline bg-paper p-1 shadow-md">
        <button onClick={() => zoomBy(1 / 1.2)} className="grid size-7 place-items-center rounded-lg text-muted hover:bg-paper-raise hover:text-ink">
          <ZoomOut className="size-3.5" />
        </button>
        <span className="min-w-[2.6rem] text-center text-[11px] tabular-nums text-muted-2">{Math.round(view.scale * 100)}%</span>
        <button onClick={() => zoomBy(1.2)} className="grid size-7 place-items-center rounded-lg text-muted hover:bg-paper-raise hover:text-ink">
          <ZoomIn className="size-3.5" />
        </button>
      </div>

      <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-xl border border-hairline bg-paper px-3 py-2 text-[11.5px] text-muted shadow-md">
        <Plus className="size-3.5" /> Double-click canvas for a new card
        <span className="opacity-40">·</span>
        <Link2 className="size-3.5" /> Drag a card's dot to connect
      </div>

      {selectedNode && (
        <NodeInspector
          nodeId={selectedNode}
          node={nodeById.get(selectedNode)!}
          onColor={(color) => updateMindMapNode(map.id, selectedNode, { color })}
          onDelete={() => { removeMindMapNode(map.id, selectedNode); setSelectedNode(null); }}
          onClose={() => setSelectedNode(null)}
        />
      )}

      {selectedEdge && (
        <div className="absolute top-3 left-3 flex items-center gap-2 rounded-xl border border-hairline bg-paper px-3 py-2 shadow-md">
          <span className="text-[12px] text-muted">Connection selected</span>
          <button
            onClick={() => { removeMindMapEdge(map.id, selectedEdge); setSelectedEdge(null); }}
            className="flex items-center gap-1 rounded-lg px-2 py-1 text-[12px] font-semibold text-critical hover:bg-critical-wash"
          >
            <Trash2 className="size-3.5" /> Remove
          </button>
        </div>
      )}
    </div>
  );
}

/* ── Card ──────────────────────────────────────────────────────────────── */

function MindMapCard({
  node,
  selected,
  editing,
  onPointerDown,
  onDoubleClick,
  onStopEditing,
  onChangeText,
  onStartLink,
}: {
  node: MindMap['nodes'][number];
  selected: boolean;
  editing: boolean;
  onPointerDown: (e: React.PointerEvent) => void;
  onDoubleClick: (e: React.MouseEvent) => void;
  onStopEditing: () => void;
  onChangeText: (text: string) => void;
  onStartLink: (e: React.PointerEvent) => void;
}) {
  return (
    <div
      data-node-id={node.id}
      onPointerDown={onPointerDown}
      onDoubleClick={onDoubleClick}
      className={cn(
        'group absolute cursor-grab rounded-xl border-2 p-3 shadow-md transition-shadow select-none active:cursor-grabbing',
        selected ? 'border-ink' : 'border-transparent',
      )}
      style={{
        left: node.x,
        top: node.y,
        width: node.width,
        background: highlightWash(node.color, 90),
        borderColor: selected ? 'var(--color-ink)' : highlightHex(node.color),
      }}
    >
      {editing ? (
        <textarea
          autoFocus
          value={node.text}
          onChange={(e) => onChangeText(e.target.value)}
          onBlur={onStopEditing}
          onPointerDown={(e) => e.stopPropagation()}
          rows={3}
          className="w-full resize-none bg-transparent text-[13px] leading-snug text-ink outline-none"
        />
      ) : (
        <p className="text-[13px] leading-snug text-ink">{node.text}</p>
      )}
      {node.source && (
        <p className="mt-1.5 truncate text-[10.5px] text-muted-2">{node.source.lessonTitle}</p>
      )}

      {/* Connector handle. */}
      <button
        onPointerDown={onStartLink}
        title="Drag to connect to another card"
        className="absolute top-1/2 -right-2.5 size-5 -translate-y-1/2 cursor-crosshair rounded-full border-2 border-paper bg-ink opacity-0 shadow transition-opacity group-hover:opacity-100 hover:opacity-100"
        style={{ opacity: selected ? 1 : undefined }}
      />
    </div>
  );
}

/* ── Node inspector (colour + delete) ─────────────────────────────────── */

function NodeInspector({
  node,
  onColor,
  onDelete,
  onClose,
}: {
  nodeId: string;
  node: MindMap['nodes'][number];
  onColor: (c: HighlightColor) => void;
  onDelete: () => void;
  onClose: () => void;
}) {
  return (
    <div className="absolute top-3 left-3 flex items-center gap-2 rounded-xl border border-hairline bg-paper px-2.5 py-2 shadow-md">
      {HIGHLIGHT_COLORS.map((c) => (
        <button
          key={c.id}
          onClick={() => onColor(c.id)}
          title={c.label}
          className={cn(
            'size-5 shrink-0 rounded-full border-2 transition-transform',
            node.color === c.id ? 'scale-110 border-ink' : 'border-transparent hover:scale-105',
          )}
          style={{ background: highlightHex(c.id) }}
        />
      ))}
      <span className="mx-1 h-5 w-px bg-hairline" />
      <button onClick={onDelete} className="grid size-7 place-items-center rounded-lg text-critical hover:bg-critical-wash">
        <Trash2 className="size-3.5" />
      </button>
      <button onClick={onClose} className="grid size-7 place-items-center rounded-lg text-muted-2 hover:bg-paper-raise hover:text-ink">
        <X className="size-3.5" />
      </button>
    </div>
  );
}

// Stable id helper kept local to this file's event handlers above, re-exported
// here only so other mind-map UI (the dialog) can create matching ids without
// importing uid() redundantly everywhere.
export { uid as mindMapUid };
