import { BarChart, Segmented, SegmentedItem } from '@jankrajewskiit/ui';
import { createSignal, For } from 'solid-js';

import styles from './BarChartDemo.module.css';
import { PLAN_SERIES, weekdayData } from './datasets';

const LAYOUTS = [
  { id: 'grouped', label: 'Grouped' },
  { id: 'stacked', label: 'Stacked' },
] as const;

type Layout = (typeof LAYOUTS)[number]['id'];

export const BarChartDemo = () => {
  const data = weekdayData();
  const [layout, setLayout] = createSignal<Layout>('grouped');
  return (
    <div class={styles.root}>
      <Segmented size="sm" role="group" aria-label="Bar layout" class={styles.toggle}>
        <For each={LAYOUTS}>
          {(item) => (
            <SegmentedItem selected={layout() === item.id} onClick={() => setLayout(item.id)}>
              {item.label}
            </SegmentedItem>
          )}
        </For>
      </Segmented>
      <BarChart
        data={data}
        series={PLAN_SERIES}
        stacked={layout() === 'stacked'}
        label="Sessions per weekday by plan"
      />
    </div>
  );
};
