import { useI18n } from '@jankrajewskiit/i18n';
import { ChartLegend, type ChartLegendItem, SectionLabel, Stack, Text } from '@jankrajewskiit/ui';
import { createMemo, createSignal } from 'solid-js';

const SERIES = [
  { key: 'revenue', color: 'var(--dv-1)', value: 1240, share: 0.52 },
  { key: 'costs', color: 'var(--dv-2)', value: 720, share: 0.3 },
  { key: 'margin', color: 'var(--dv-3)', value: 430, share: 0.18 },
] as const;

export const ChartLegendDemo = () => {
  const { ts, formatNumber } = useI18n();
  const [off, setOff] = createSignal<readonly string[]>(['costs']);
  const [hovered, setHovered] = createSignal<ChartLegendItem | null>(null);
  const items = createMemo(() =>
    SERIES.map((item) => ({
      key: item.key,
      label: ts(`library.dataViz.parts.${item.key}`),
      color: item.color,
      valueLabel: formatNumber(item.value),
      shareLabel: formatNumber(item.share, { style: 'percent' }),
    })),
  );
  const toggle = (item: ChartLegendItem) => {
    const key = item.key;
    if (key === undefined) throw new Error('Chart legend demo requires stable series keys.');
    setOff((current) => (current.includes(key) ? current.filter((value) => value !== key) : [...current, key]));
    setHovered(null);
  };
  const focusedLabel = () => {
    const key = hovered()?.key;
    return items().find((item) => item.key === key)?.label ?? ts('library.dataViz.parts.none');
  };

  return (
    <Stack gap={4}>
      <SectionLabel>{ts('library.dataViz.parts.inline')}</SectionLabel>
      <ChartLegend items={items()} off={off()} onToggle={toggle} />
      <SectionLabel>{ts('library.dataViz.parts.list')}</SectionLabel>
      <ChartLegend layout="list" items={items()} off={off()} onToggle={toggle} onHover={setHovered} />
      <Text variant="caption">{ts('library.dataViz.parts.focus', { value: focusedLabel() })}</Text>
      <ChartLegend
        items={[
          { key: 'band', label: ts('library.dataViz.parts.band'), swatch: 'band' },
          { key: 'median', label: ts('library.dataViz.parts.median'), color: 'var(--chart-median)' },
          { key: 'outside', label: ts('library.dataViz.parts.outside'), color: 'var(--trend-down-solid)', round: true },
        ]}
      />
    </Stack>
  );
};
