import type { DateRange } from '@jankrajewskiit/ui';
import { Calendar, fmtDate } from '@jankrajewskiit/ui';
import { createSignal, Show } from 'solid-js';

import styles from './CalendarRangeDemo.module.css';
import { today } from './pickerDates';

export const CalendarRangeDemo = () => {
  const [range, setRange] = createSignal<DateRange>({ start: null, end: null });
  const earliest = today();
  return (
    <div class={styles.root}>
      <Calendar mode="range" months={2} value={range()} onValueChange={setRange} min={earliest} />
      <p class={styles.status} aria-live="polite">
        <Show when={range().start} fallback="Pick a start and an end date">
          {(start) => (
            <>
              {fmtDate(start())} to{' '}
              <Show when={range().end} fallback="end date">
                {(end) => fmtDate(end())}
              </Show>
            </>
          )}
        </Show>
      </p>
    </div>
  );
};
