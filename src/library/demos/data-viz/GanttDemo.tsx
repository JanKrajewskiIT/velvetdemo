import { Gantt, type GanttScale, Segmented, SegmentedItem } from '@jankrajewskiit/ui';
import { createSignal, For } from 'solid-js';

import styles from './GanttDemo.module.css';
import { makeGanttTasks } from './ganttTasks';

const SCALES = [
  { id: 'day', label: 'Day' },
  { id: 'week', label: 'Week' },
] as const satisfies readonly { id: GanttScale; label: string }[];

export const GanttDemo = () => {
  const tasks = makeGanttTasks();
  const [scale, setScale] = createSignal<GanttScale>('day');
  return (
    <div class={styles.root}>
      <Segmented size="sm" role="group" aria-label="Timeline scale" class={styles.toggle}>
        <For each={SCALES}>
          {(item) => (
            <SegmentedItem selected={scale() === item.id} onClick={() => setScale(item.id)}>
              {item.label}
            </SegmentedItem>
          )}
        </For>
      </Segmented>
      <Gantt tasks={tasks} scale={scale()} label="Product launch timeline" />
    </div>
  );
};
