import { useI18n } from '@jankrajewskiit/i18n';
import { Gantt, type GanttScale, Segmented, SegmentedItem } from '@jankrajewskiit/ui';
import { createSignal, For } from 'solid-js';

import styles from './GanttDemo.module.css';
import { makeGanttTasks } from './ganttTasks';

export const GanttDemo = () => {
  const { ts } = useI18n();
  const scales = (): { id: GanttScale; label: string }[] => [
    { id: 'day', label: ts('library.dataViz.demo.day') },
    { id: 'week', label: ts('library.dataViz.demo.week') },
  ];
  const tasks = makeGanttTasks(ts);
  const [scale, setScale] = createSignal<GanttScale>('day');
  return (
    <div class={styles.root}>
      <Segmented size="sm" role="group" aria-label={ts('library.dataViz.demo.timelineScale')} class={styles.toggle}>
        <For each={scales()}>
          {(item) => (
            <SegmentedItem selected={scale() === item.id} onClick={() => setScale(item.id)}>
              {item.label}
            </SegmentedItem>
          )}
        </For>
      </Segmented>
      <Gantt tasks={tasks} scale={scale()} label={ts('library.dataViz.demo.launchTimeline')} />
    </div>
  );
};
