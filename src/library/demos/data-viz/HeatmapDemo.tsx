import { Heatmap, type HeatmapCell } from '@jankrajewskiit/ui';
import { createSignal, Show } from 'solid-js';

import { activityData, formatDay, isoDay } from './datasets';
import styles from './HeatmapDemo.module.css';

const WEEKS = 20;

export const HeatmapDemo = () => {
  const now = new Date();
  const data = activityData(WEEKS, now);
  const [picked, setPicked] = createSignal<HeatmapCell>();
  return (
    <div class={styles.root}>
      <Heatmap
        data={data}
        end={isoDay(now)}
        weeks={WEEKS}
        unit="sessions"
        label="Last 20 weeks"
        onCellClick={setPicked}
      />
      <p class={styles.readout} aria-live="polite">
        <Show when={picked()} fallback="Select a day to read its total.">
          {(cell) => `${formatDay(cell().date)}: ${cell().value} sessions`}
        </Show>
      </p>
    </div>
  );
};
