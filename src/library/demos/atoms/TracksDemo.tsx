import { useI18n } from '@jankrajewskiit/i18n';
import type { MeterProps } from '@jankrajewskiit/ui';
import { Meter, SectionLabel, Segmented, SegmentedItem, Stack, Text } from '@jankrajewskiit/ui';
import { createSignal, For } from 'solid-js';

interface Reading {
  nameKey: string;
  detailKey: string;
  meter: MeterProps;
}

const READINGS = [
  {
    nameKey: 'library.atoms.tracks.storage',
    detailKey: 'library.atoms.tracks.storageDetail',
    meter: { value: 60 },
  },
  {
    nameKey: 'library.atoms.tracks.uptime',
    detailKey: 'library.atoms.tracks.uptimeDetail',
    meter: { value: 99.9, tone: 'success', size: 'lg' },
  },
  {
    nameKey: 'library.atoms.tracks.seats',
    detailKey: 'library.atoms.tracks.seatsDetail',
    meter: { value: 90, tone: 'warning', size: 'sm' },
  },
  {
    nameKey: 'library.atoms.tracks.passwordStrength',
    detailKey: 'library.atoms.tracks.passwordDetail',
    meter: { value: 3, max: 4, steps: 4, tone: 'success' },
  },
  {
    nameKey: 'library.atoms.tracks.importName',
    detailKey: 'library.atoms.tracks.importDetail',
    meter: { indeterminate: true },
  },
] as const satisfies readonly Reading[];

const RANGES = ['day', 'week', 'month'] as const;
const RANGE_KEYS = {
  day: 'library.atoms.tracks.day',
  week: 'library.atoms.tracks.week',
  month: 'library.atoms.tracks.month',
} as const;
const LAYOUTS = [
  { id: 'grid', icon: 'layout-grid', labelKey: 'library.atoms.tracks.gridView' },
  { id: 'list', icon: 'list', labelKey: 'library.atoms.tracks.listView' },
] as const;

export const TracksDemo = () => {
  const { ts } = useI18n();
  const [range, setRange] = createSignal<(typeof RANGES)[number]>('week');
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
                    {ts(reading.nameKey)}
                  </Text>
                  <Text variant="caption" tone="tertiary" tabular as="span">
                    {ts(reading.detailKey)}
                  </Text>
                </Stack>
                <Meter {...reading.meter} label={ts(reading.nameKey)} />
              </Stack>
            )}
          </For>
        </Stack>
      </Stack>
      <Stack gap={2}>
        <SectionLabel>Segmented</SectionLabel>
        <Stack direction="row" gap={4} align="center" wrap>
          <Segmented role="group" aria-label={ts('library.atoms.tracks.dateRange')}>
            <For each={RANGES}>
              {(item) => (
                <SegmentedItem selected={range() === item} onClick={() => setRange(item)}>
                  {ts(RANGE_KEYS[item])}
                </SegmentedItem>
              )}
            </For>
          </Segmented>
          <Segmented size="sm" round iconOnly role="group" aria-label={ts('library.atoms.tracks.layout')}>
            <For each={LAYOUTS}>
              {(item) => (
                <SegmentedItem
                  icon={item.icon}
                  aria-label={ts(item.labelKey)}
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
