import { Database, Moon, RotateCcw, Sun, Trash2, Upload } from 'lucide-react';
import * as React from 'react';
import { Page, PageTitle, Section } from '@/components/layout/Page';
import { Button, Card, CardHeader, SegmentedControl } from '@/components/ui/primitives';
import { useStore } from '@/store/AppStore';
import { useTheme, type Theme } from '@/store/ThemeProvider';
import { SUBJECTS } from '@/data/subjects';
import { ALL_LESSONS } from '@/data/library';

function Row({ title, body, children }: { title: string; body: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
      <div className="min-w-0">
        <p className="text-[13px] font-semibold text-ink">{title}</p>
        <p className="text-pretty mt-1 text-[11.75px] leading-relaxed text-muted">{body}</p>
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  );
}

/** Two-step reset — destructive, so one stray click shouldn't do it. */
function ResetButton() {
  const { resetAll } = useStore();
  const [armed, setArmed] = React.useState(false);

  React.useEffect(() => {
    if (!armed) return;
    const t = setTimeout(() => setArmed(false), 4000);
    return () => clearTimeout(t);
  }, [armed]);

  if (!armed) {
    return (
      <Button variant="secondary" onClick={() => setArmed(true)}>
        <RotateCcw /> Reset data
      </Button>
    );
  }
  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="sm" onClick={() => setArmed(false)}>
        Cancel
      </Button>
      <Button
        variant="danger"
        size="sm"
        onClick={() => {
          resetAll();
          setArmed(false);
        }}
      >
        <Trash2 /> Confirm reset
      </Button>
    </div>
  );
}

/**
 * One-time move from the desktop app's storage into this browser's storage.
 * Expects a JSON file mapping raw localStorage keys (e.g. "scholar:v2:blocks")
 * to their raw string values, exported from the desktop app. Writes them
 * directly into localStorage and reloads, so the app's normal bootstrap picks
 * up the imported data exactly as if it had always been here.
 */
function ImportFromDesktopButton() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [status, setStatus] = React.useState<'idle' | 'done' | 'error'>('idle');

  const handleFile = async (file: File) => {
    try {
      const text = await file.text();
      const data = JSON.parse(text) as Record<string, string>;
      let count = 0;
      for (const [key, value] of Object.entries(data)) {
        if (!key.startsWith('scholar:')) continue;
        localStorage.setItem(key, value);
        count++;
      }
      if (count === 0) throw new Error('no scholar: keys found');
      setStatus('done');
      setTimeout(() => window.location.reload(), 900);
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="flex items-center gap-2">
      {status === 'done' ? (
        <span className="text-[12px] font-medium text-ink">Imported — reloading…</span>
      ) : (
        <>
          <input
            ref={inputRef}
            type="file"
            accept="application/json"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFile(file);
            }}
          />
          <Button variant="secondary" onClick={() => inputRef.current?.click()}>
            <Upload /> Import JSON file
          </Button>
          {status === 'error' && <span className="text-[11.5px] text-critical">Couldn&rsquo;t read that file.</span>}
        </>
      )}
    </div>
  );
}

export default function Settings() {
  const { notes, blocks, progress } = useStore();
  const { theme, setTheme } = useTheme();

  const stats = [
    { label: 'Subjects', value: SUBJECTS.length },
    { label: 'Lessons written', value: ALL_LESSONS.length },
    { label: 'Lessons opened', value: Object.keys(progress).length },
    { label: 'Study blocks', value: blocks.length },
    { label: 'Blocks done', value: blocks.filter((b) => b.done).length },
    { label: 'Notes', value: notes.length },
  ];

  return (
    <Page width="narrow">
      <PageTitle
        title="Settings"
        highlight="Settings"
        subtitle="Appearance and stored data. Nothing here leaves this device."
      />

      <div>
        <Section>
          <div>
            <Card className="overflow-hidden">
              <CardHeader title="Appearance" />
              <Row
                title="Theme"
                body="Light is the default. Your choice is remembered on this device and applies to every page."
              >
                <SegmentedControl<Theme>
                  layoutId="theme-setting"
                  value={theme}
                  onChange={setTheme}
                  options={[
                    { id: 'light', label: 'Light', icon: Sun },
                    { id: 'dark', label: 'Dark', icon: Moon },
                  ]}
                />
              </Row>
            </Card>
          </div>
        </Section>

        <Section>
          <div>
            <Card className="overflow-hidden">
              <CardHeader title="Stored data" icon={Database} />

              <div className="grid grid-cols-3 gap-px bg-hairline">
                {stats.map((s) => (
                  <div key={s.label} className="bg-paper px-5 py-4">
                    <p className="display text-[21.5px] text-ink tabular-nums">{s.value}</p>
                    <p className="mt-1 text-[11px] text-muted">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-hairline">
                <Row
                  title="Import from desktop app"
                  body="One-time move: select a JSON export from the desktop app's storage to bring your calendar, notes and progress into this browser."
                >
                  <ImportFromDesktopButton />
                </Row>
              </div>

              <div className="border-t border-hairline">
                <Row
                  title="Reset all data"
                  body="Clears progress, study blocks and notes, then re-seeds the starting calendar. This cannot be undone."
                >
                  <ResetButton />
                </Row>
              </div>
            </Card>
          </div>
        </Section>

        <Section>
          <div>
            <Card className="overflow-hidden">
              <CardHeader title="About" />
              <div className="px-5 py-4">
                <p className="text-pretty text-[12.25px] leading-relaxed text-muted">
                  Scholar is a personal study companion. There is no account, no server and no network
                  request — every lesson, note and study block lives in this browser&rsquo;s local
                  storage.
                </p>
              </div>
            </Card>
          </div>
        </Section>
      </div>
    </Page>
  );
}
