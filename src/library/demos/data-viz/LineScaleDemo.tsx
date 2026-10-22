import { useI18n } from '@jankrajewskiit/i18n';
import { type ChartDatum, LineChart, Segmented, SegmentedItem, Switch, Text } from '@jankrajewskiit/ui';
import { createMemo, createSignal, For } from 'solid-js';

import styles from './LineScaleDemo.module.css';

const SCENARIOS = [
  {
    id: 'price',
    data: [
      { label: '09:00', value: 186.4 },
      { label: '10:00', value: 187.2 },
      { label: '11:00', value: null },
      { label: '12:00', value: null },
      { label: '13:00', value: 188.1 },
      { label: '14:00', value: 187.6 },
      { label: '15:00', value: 189.3 },
    ],
  },
  {
    id: 'negative',
    data: [
      { label: '09:00', value: -18.2 },
      { label: '10:00', value: -17.8 },
      { label: '11:00', value: -19.1 },
      { label: '12:00', value: null },
      { label: '13:00', value: -18.6 },
      { label: '14:00', value: -17.5 },
      { label: '15:00', value: -16.9 },
    ],
  },
  {
    id: 'flat',
    data: [
      { label: '09:00', value: 125 },
      { label: '10:00', value: 125 },
      { label: '11:00', value: 125 },
      { label: '12:00', value: 125 },
      { label: '13:00', value: 125 },
      { label: '14:00', value: 125 },
      { label: '15:00', value: 125 },
    ],
  },
] satisfies { id: 'price' | 'negative' | 'flat'; data: ChartDatum[] }[];

export const LineScaleDemo = () => {
  const { ts, locale } = useI18n();
  const [scenario, setScenario] = createSignal(SCENARIOS[0]);
  const [includeZero, setIncludeZero] = createSignal(false);
  const [curved, setCurved] = createSignal(true);
  const formatter = createMemo(
    () => new Intl.NumberFormat(locale(), { minimumFractionDigits: 1, maximumFractionDigits: 1 }),
  );

  return (
    <div class={styles.root}>
      <Segmented size="sm" role="group" aria-label={ts('library.dataViz.lineScale.scenario')}>
        <For each={SCENARIOS}>
          {(item) => (
            <SegmentedItem selected={scenario() === item} onClick={() => setScenario(item)}>
              {ts(`library.dataViz.lineScale.${item.id}`)}
            </SegmentedItem>
          )}
        </For>
      </Segmented>
      <div class={styles.controls}>
        <Switch
          size="sm"
          label={ts('library.dataViz.lineScale.includeZero')}
          checked={includeZero()}
          onChange={(event) => setIncludeZero(event.currentTarget.checked)}
        />
        <Switch
          size="sm"
          label={ts('library.dataViz.lineScale.curved')}
          checked={curved()}
          onChange={(event) => setCurved(event.currentTarget.checked)}
        />
      </div>
      <LineChart
        data={scenario()?.data ?? []}
        series={[{ key: 'value', label: ts('library.dataViz.lineScale.value') }]}
        includeZero={includeZero()}
        curved={curved()}
        label={ts('library.dataViz.lineScale.label')}
        format={(value) => formatter().format(value)}
      />
      <Text variant="body-sm" tone="secondary">
        {ts('library.dataViz.lineScale.hint')}
      </Text>
    </div>
  );
};
