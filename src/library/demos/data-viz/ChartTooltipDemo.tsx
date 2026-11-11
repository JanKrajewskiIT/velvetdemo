import { useI18n } from '@jankrajewskiit/i18n';
import { ChartTooltip, SectionLabel, Select, Stack, Text } from '@jankrajewskiit/ui';
import { createMemo, createSignal } from 'solid-js';

import styles from './ChartTooltipDemo.module.css';

const OBSERVATIONS = [
  { id: 'first', value: 102.4, low: 98.1, high: 104.9 },
  { id: 'second', value: 99.8, low: 97.4, high: 103.2 },
  { id: 'third', value: 106.2, low: 99.6, high: 105.1 },
] as const;

export const ChartTooltipDemo = () => {
  const { ts, formatNumber } = useI18n();
  const [observation, setObservation] = createSignal<(typeof OBSERVATIONS)[number]>(OBSERVATIONS[0]);
  const selectObservation = (value: string) => {
    const next = OBSERVATIONS.find((item) => item.id === value);
    if (!next) throw new Error(`Unknown chart observation: ${value}`);
    setObservation(next);
  };
  const options = createMemo(() =>
    OBSERVATIONS.map((item) => ({
      value: item.id,
      label: ts(`library.dataViz.parts.${item.id}`),
    })),
  );
  const rows = createMemo(() => [
    {
      key: 'value',
      label: ts('library.dataViz.parts.value'),
      value: formatNumber(observation().value),
      color: 'var(--dv-1)',
    },
    {
      key: 'band',
      label: ts('library.dataViz.parts.band'),
      value: `${formatNumber(observation().low)} – ${formatNumber(observation().high)}`,
      swatch: 'band' as const,
    },
  ]);

  return (
    <Stack gap={3}>
      <SectionLabel>{ts('library.dataViz.parts.placement')}</SectionLabel>
      <Select
        label={ts('library.dataViz.parts.period')}
        options={options()}
        value={observation().id}
        onValueChange={selectObservation}
      />
      <Text variant="caption" tone="secondary">
        {ts('library.dataViz.parts.tooltipHelp')}
      </Text>
      <div class={styles.plot}>
        <ChartTooltip
          x="50%"
          y={140}
          class={styles.tooltip}
          title={ts(`library.dataViz.parts.${observation().id}`)}
          rows={rows()}
        />
      </div>
      <Text variant="caption" tone="secondary">
        {ts('library.dataViz.parts.leftEdge')}
      </Text>
      <div class={styles.plot}>
        <ChartTooltip
          x={4}
          y={140}
          width={280}
          edge={80}
          class={styles.tooltip}
          title={ts(`library.dataViz.parts.${observation().id}`)}
          rows={rows()}
        />
      </div>
    </Stack>
  );
};
