import { useI18n } from '@jankrajewskiit/i18n';
import { BarChart, Segmented, SegmentedItem } from '@jankrajewskiit/ui';
import { createSignal, For } from 'solid-js';

import styles from './BarChartDemo.module.css';
import { createPlanSeries, weekdayData } from './datasets';

type Layout = 'grouped' | 'stacked';

export const BarChartDemo = () => {
  const { ts } = useI18n();
  const layouts = (): { id: Layout; label: string }[] => [
    { id: 'grouped', label: ts('library.dataViz.demo.grouped') },
    { id: 'stacked', label: ts('library.dataViz.demo.stacked') },
  ];
  const data = weekdayData(ts);
  const series = createPlanSeries(ts);
  const [layout, setLayout] = createSignal<Layout>('grouped');
  return (
    <div class={styles.root}>
      <Segmented size="sm" role="group" aria-label={ts('library.dataViz.demo.barLayout')} class={styles.toggle}>
        <For each={layouts()}>
          {(item) => (
            <SegmentedItem selected={layout() === item.id} onClick={() => setLayout(item.id)}>
              {item.label}
            </SegmentedItem>
          )}
        </For>
      </Segmented>
      <BarChart
        data={data}
        series={series}
        stacked={layout() === 'stacked'}
        label={ts('library.dataViz.demo.weekdayChart')}
      />
    </div>
  );
};
