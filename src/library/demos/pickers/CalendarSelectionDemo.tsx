import { useI18n } from '@jankrajewskiit/i18n';
import { Calendar, fmtDate } from '@jankrajewskiit/ui';
import { createSignal, Show } from 'solid-js';

import styles from './CalendarSelectionDemo.module.css';
import { daysFromToday, today } from './pickerDates';

export const CalendarSelectionDemo = () => {
  const { ts } = useI18n();
  const [day, setDay] = createSignal<Date | null>(today());
  const marks = [daysFromToday(2), daysFromToday(5), daysFromToday(9)];
  return (
    <div class={styles.root}>
      <Calendar value={day()} onValueChange={setDay} marks={marks} />
      <p class={styles.status} aria-live="polite">
        <Show when={day()} fallback={ts('library.pickers.demos.selection.none')}>
          {(value) => ts('library.pickers.demos.selection.selected', { date: fmtDate(value()) })}
        </Show>
      </p>
    </div>
  );
};
