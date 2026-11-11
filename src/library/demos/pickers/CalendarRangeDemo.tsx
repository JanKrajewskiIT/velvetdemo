import { useI18n } from '@jankrajewskiit/i18n';
import type { DateRange } from '@jankrajewskiit/ui';
import { Calendar, fmtDate } from '@jankrajewskiit/ui';
import { createSignal, Show } from 'solid-js';

import styles from './CalendarRangeDemo.module.css';
import { today } from './pickerDates';

export const CalendarRangeDemo = () => {
  const { ts } = useI18n();
  const [range, setRange] = createSignal<DateRange>({ start: null, end: null });
  const earliest = today();
  return (
    <div class={styles.root}>
      <Calendar mode="range" months={2} value={range()} onValueChange={setRange} min={earliest} />
      <p class={styles.status} aria-live="polite">
        <Show when={range().start} fallback={ts('library.pickers.demos.range.pick')}>
          {(start) => (
            <>
              {fmtDate(start())} {ts('library.pickers.demos.range.to')}{' '}
              <Show when={range().end} fallback={ts('library.pickers.demos.range.endDate')}>
                {(end) => fmtDate(end())}
              </Show>
            </>
          )}
        </Show>
      </p>
    </div>
  );
};
