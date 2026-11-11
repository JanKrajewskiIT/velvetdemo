import { useI18n } from '@jankrajewskiit/i18n';
import { Timeline, type TimelineAction, type TimelineItem } from '@jankrajewskiit/ui';
import { type Component, createSignal } from 'solid-js';

interface StageRow {
  id: string;
  status: NonNullable<TimelineItem['status']>;
  title: string;
  badge?: TimelineItem['badge'];
  meta: NonNullable<TimelineItem['meta']>;
}

const DELETE_DELAY_MS = 500;

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

export const TimelineActionsDemo: Component = () => {
  const { ts, locale } = useI18n();
  const dateFormat = new Intl.DateTimeFormat(locale(), { dateStyle: 'medium' });
  const timeFormat = new Intl.DateTimeFormat(locale(), { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' });
  const screenDate = new Date(2026, 8, 28);
  const reviewDate = new Date(2026, 9, 7, 14, 0);
  const INITIAL_ROWS: StageRow[] = [
    {
      id: 'screen',
      status: 'done',
      title: ts('library.data.stages.phoneScreen'),
      badge: { label: ts('library.data.timeline.passed'), icon: 'check', tone: 'success' },
      meta: [
        { icon: 'calendar', label: dateFormat.format(screenDate) },
        { icon: 'clock', label: ts('library.data.pipeline.duration') },
      ],
    },
    {
      id: 'review',
      status: 'current',
      title: ts('library.data.stages.designReview'),
      badge: { label: ts('library.data.timeline.synced'), icon: 'calendar', tone: 'brand' },
      meta: [
        { icon: 'calendar', label: `${dateFormat.format(reviewDate)} · ${timeFormat.format(reviewDate)}` },
        { icon: 'map-pin', label: 'Google Meet' },
      ],
    },
    {
      id: 'final',
      status: 'upcoming',
      title: ts('library.data.stages.finalReview'),
      meta: [{ icon: 'calendar', label: ts('library.data.timeline.notScheduled') }],
    },
  ];
  const [rows, setRows] = createSignal<StageRow[]>(INITIAL_ROWS);
  const [lastAction, setLastAction] = createSignal<string | null>(null);

  const removeRow = (id: string) => setRows((current) => current.filter((row) => row.id !== id));

  const actionsFor = (row: StageRow): TimelineAction[] => [
    { id: 'edit', label: ts('library.data.timeline.edit'), icon: 'pencil' },
    {
      id: 'delete',
      label: ts('library.data.timeline.delete'),
      icon: 'trash-2',
      tone: 'danger',
      confirm: ts('library.data.timeline.deleteConfirm', { title: row.title }),
      onClick: async () => {
        await wait(DELETE_DELAY_MS);
        removeRow(row.id);
      },
    },
  ];

  const items = (): TimelineItem[] =>
    rows().map((row) => ({
      id: row.id,
      title: row.title,
      status: row.status,
      badge: row.badge,
      meta: row.meta,
      actions: actionsFor(row),
    }));

  return (
    <div>
      <Timeline
        items={items()}
        onAction={(actionId, item) => {
          setLastAction(`${actionId}: ${String(item.id)}`);
        }}
        onAdd={() =>
          setRows((current) => [
            ...current,
            { id: `stage-${Date.now()}`, status: 'upcoming', title: ts('library.data.timeline.newStage'), meta: [] },
          ])
        }
        addLabel={ts('library.data.timeline.addStage')}
      />
      <p>{lastAction() ?? ts('library.data.timeline.noAction')}</p>
    </div>
  );
};
