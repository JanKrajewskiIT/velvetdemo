import type { MeterProps } from '@jankrajewskiit/ui';
import { Meter, SectionLabel, Segmented, SegmentedItem, Stack, Text } from '@jankrajewskiit/ui';
import { createSignal, For } from 'solid-js';

interface Reading {
  name: string;
  detail: string;
  meter: MeterProps;
}

const READINGS: readonly Reading[] = [
  { name: 'Storage', detail: '6 of 10 GB', meter: { value: 60 } },
  { name: 'Uptime', detail: '99.9%', meter: { value: 99.9, tone: 'success', size: 'lg' } },
  { name: 'Seats', detail: '9 of 10 used', meter: { value: 90, tone: 'warning', size: 'sm' } },
  { name: 'Password strength', detail: 'Strong', meter: { value: 3, max: 4, steps: 4, tone: 'success' } },
  { name: 'Import', detail: 'Syncing', meter: { indeterminate: true } },
];

const RANGES = ['Day', 'Week', 'Month'] as const;
const LAYOUTS = [
  { id: 'grid', icon: 'layout-grid', label: 'Grid view' },
  { id: 'list', icon: 'list', label: 'List view' },
] as const;

export const TracksDemo = () => {
  const [range, setRange] = createSignal<(typeof RANGES)[number]>('Week');
  const [layout, setLayout] = createSignal<(typeof LAYOUTS)[number]['id']>('grid');

  return (
    <Stack gap={5}>
      <Stack gap={2}>
        <SectionLabel>Meter</SectionLabel>
        <Stack gap={3}>
          <For each={READINGS}>
            {(reading) => (
              <Stack gap={1}>
                <Stack direction="row" gap={3} justify="space-between" align="baseline">
                  <Text variant="label" as="span">
                    {reading.name}
                  </Text>
                  <Text variant="caption" tone="tertiary" tabular as="span">
                    {reading.detail}
                  </Text>
                </Stack>
                <Meter {...reading.meter} label={reading.name} />
              </Stack>
            )}
          </For>
        </Stack>
      </Stack>
      <Stack gap={2}>
        <SectionLabel>Segmented</SectionLabel>
        <Stack direction="row" gap={4} align="center" wrap>
          <Segmented role="group" aria-label="Date range">
            <For each={RANGES}>
              {(item) => (
                <SegmentedItem selected={range() === item} onClick={() => setRange(item)}>
                  {item}
                </SegmentedItem>
              )}
            </For>
          </Segmented>
          <Segmented size="sm" round iconOnly role="group" aria-label="Layout">
            <For each={LAYOUTS}>
              {(item) => (
                <SegmentedItem
                  icon={item.icon}
                  aria-label={item.label}
                  selected={layout() === item.id}
                  onClick={() => setLayout(item.id)}
                />
              )}
            </For>
          </Segmented>
        </Stack>
      </Stack>
    </Stack>
  );
};
