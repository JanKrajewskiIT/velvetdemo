import { Sparkline } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import { recentMonths } from './datasets';
import styles from './SparklineStatsDemo.module.css';

interface Metric {
  label: string;
  unit: string;
  data: number[];
  color: string;
}

const METRICS: Metric[] = [
  {
    label: 'Signups',
    unit: '',
    data: [88, 95, 91, 104, 112, 108, 121, 130, 126, 142, 151, 160],
    color: 'var(--dv-1)',
  },
  {
    label: 'Active seats',
    unit: '',
    data: [5200, 5480, 5710, 5900, 6150, 6320, 6710, 6980, 7240, 7610, 8010, 8420],
    color: 'var(--dv-2)',
  },
  {
    label: 'Median response',
    unit: ' ms',
    data: [248, 240, 236, 229, 221, 214, 209, 203, 196, 191, 188, 184],
    color: 'var(--status-success-solid)',
  },
  {
    label: 'Churned accounts',
    unit: '',
    data: [11, 12, 10, 13, 15, 14, 17, 16, 19, 18, 21, 23],
    color: 'var(--status-danger-solid)',
  },
];

const changeText = (data: number[]): string => {
  const last = data.at(-1) ?? 0;
  const previous = data.at(-2) ?? last;
  const percent = Math.round((last / previous - 1) * 100);
  return `${percent > 0 ? '+' : ''}${percent}% vs previous month`;
};

export const SparklineStatsDemo = () => {
  const labels = recentMonths(new Date());
  return (
    <ul class={styles.list} aria-label="Monthly trends">
      <For each={METRICS}>
        {(metric) => (
          <li class={styles.row}>
            <div class={styles.meta}>
              <span class={styles.label}>{metric.label}</span>
              <span class={styles.value}>
                {(metric.data.at(-1) ?? 0).toLocaleString('en')}
                {metric.unit}
              </span>
              <span class={styles.change}>{changeText(metric.data)}</span>
            </div>
            <div class={styles.trend}>
              <Sparkline
                data={metric.data}
                labels={labels}
                color={metric.color}
                label={metric.label}
                format={(value) => `${value.toLocaleString('en')}${metric.unit}`}
              />
            </div>
          </li>
        )}
      </For>
    </ul>
  );
};
