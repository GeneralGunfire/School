import { Database, Moon, RotateCcw, Sun, Trash2 } from 'lucide-react';
import * as React from 'react';
import { Page, PageTitle, Section } from '@/components/layout/Page';
import { Button, Card, CardHeader, SegmentedControl } from '@/components/ui/primitives';
import { useStore } from '@/store/AppStore';
import { useTheme, type Theme } from '@/store/ThemeProvider';
import { SUBJECTS } from '@/data/subjects';
import { ALL_LESSONS } from '@/data/library';

function Row({ title, body, children }: { title: string; body: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-8 px-5 py-4">
      <div className="min-w-0">
        <p className="text-[14px] font-semibold text-ink">{title}</p>
        <p className="text-pretty mt-1 text-[12.5px] leading-relaxed text-muted">{body}</p>
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
        eyebrow="Preferences"
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
                    <p className="display text-[23px] text-ink tabular-nums">{s.value}</p>
                    <p className="mt-1 text-[11.5px] text-muted">{s.label}</p>
                  </div>
                ))}
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
                <p className="text-pretty text-[13px] leading-relaxed text-muted">
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
