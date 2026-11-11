import { useI18n } from '@jankrajewskiit/i18n';
import { Heatmap, type HeatmapCell } from '@jankrajewskiit/ui';
import { createSignal, Show } from 'solid-js';

import { activityData, formatDay, isoDay } from './datasets';
import styles from './HeatmapDemo.module.css';

const WEEKS = 20;

export const HeatmapDemo = () => {
  const { ts, locale } = useI18n();
  const now = new Date();
  const data = activityData(WEEKS, now);
  const [picked, setPicked] = createSignal<HeatmapCell>();
  return (
    <div class={styles.root}>
      <Heatmap
        data={data}
        end={isoDay(now)}
        weeks={WEEKS}
        unit={ts('library.dataViz.demo.sessions')}
        label={ts('library.dataViz.demo.last20Weeks')}
        onCellClick={setPicked}
      />
      <p class={styles.readout} aria-live="polite">
        <Show when={picked()} fallback={ts('library.dataViz.demo.pickDay')}>
          {(cell) =>
            ts('library.dataViz.demo.dayTotal', { date: formatDay(cell().date, locale()), value: cell().value })
          }
        </Show>
      </p>
    </div>
  );
};
