import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

function TrafficLight({
  color,
  hoverIcon,
  onClick,
  groupHover,
  title,
}: {
  color: string;
  hoverIcon: React.ReactNode;
  onClick: () => void;
  groupHover: boolean;
  title: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={cn(
        'relative grid size-[13px] place-items-center rounded-full border transition-colors duration-100',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1',
      )}
      style={{
        background: color,
        borderColor: `color-mix(in srgb, ${color} 80%, black)`,
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)',
      }}
    >
      <span
        className={cn(
          'grid place-items-center transition-opacity duration-75',
          groupHover ? 'opacity-100' : 'opacity-0',
        )}
      >
        {hoverIcon}
      </span>
    </button>
  );
}

export function TitleBar() {
  const [hover, setHover] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Only show custom title bar when running inside Tauri
    const isTauri = typeof window !== 'undefined' && '__TAURI_INTERNALS__' in window;
    if (isTauri) setReady(true);
  }, []);

  if (!ready) return null;

  const close = async () => {
    try {
      const { getCurrentWindow } = await import('@tauri-apps/api/window');
      await getCurrentWindow().close();
    } catch (e) {
      console.error('close failed', e);
    }
  };

  const minimize = async () => {
    try {
      const { getCurrentWindow } = await import('@tauri-apps/api/window');
      await getCurrentWindow().minimize();
    } catch (e) {
      console.error('minimize failed', e);
    }
  };

  const toggleMax = async () => {
    try {
      const { getCurrentWindow } = await import('@tauri-apps/api/window');
      const win = getCurrentWindow();
      const maximized = await win.isMaximized();
      if (maximized) await win.unmaximize();
      else await win.maximize();
    } catch (e) {
      console.error('toggleMax failed', e);
    }
  };

  return (
    <div
      data-tauri-drag-region
      className="flex h-11 shrink-0 select-none items-center border-b px-4"
      style={{
        borderColor: 'var(--edge)',
        background: 'var(--surface-raise)',
        WebkitAppRegion: 'drag',
      } as React.CSSProperties}
    >
      {/* Traffic lights — no-drag so clicks register */}
      <div
        className="flex items-center gap-2"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}
      >
        <TrafficLight
          color="#ff5f57"
          title="Close"
          hoverIcon={
            <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
              <path d="M1 1l5 5M6 1L1 6" stroke="rgba(80,0,0,0.7)" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          }
          onClick={close}
          groupHover={hover}
        />
        <TrafficLight
          color="#febc2e"
          title="Minimise"
          hoverIcon={
            <svg width="7" height="2" viewBox="0 0 7 2" fill="none">
              <path d="M1 1h5" stroke="rgba(120,70,0,0.7)" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          }
          onClick={minimize}
          groupHover={hover}
        />
        <TrafficLight
          color="#28c840"
          title="Maximise / Restore"
          hoverIcon={
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <rect x="1" y="3" width="4" height="4" rx="0.5" stroke="rgba(0,80,0,0.7)" strokeWidth="1.1" />
              <path d="M3 1h4v4" stroke="rgba(0,80,0,0.7)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
          onClick={toggleMax}
          groupHover={hover}
        />
      </div>

      <span
        data-tauri-drag-region
        className="flex flex-1 items-center justify-center gap-1.5 text-[13px] font-semibold text-muted"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="opacity-55">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
        Scholar
      </span>

      {/* Spacer to balance traffic lights */}
      <div className="w-[60px]" />
    </div>
  );
}
