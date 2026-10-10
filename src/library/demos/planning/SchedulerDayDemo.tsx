import type { SchedulerEvent } from '@jankrajewskiit/ui';
import { Scheduler } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import { createDayEvents } from './planningSamples';
import styles from './SchedulerDayDemo.module.css';

const TIME_FORMAT: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: false };

const formatRange = (start: Date, end: Date): string =>
  `${start.toLocaleTimeString('en-GB', TIME_FORMAT)} to ${end.toLocaleTimeString('en-GB', TIME_FORMAT)}`;

export const SchedulerDayDemo = () => {
  const events = createDayEvents();
  const [status, setStatus] = createSignal('Select an event or an empty slot.');
  const select = (event: SchedulerEvent) => setStatus(`${event.title}, ${formatRange(event.start, event.end)}.`);
  const pickSlot = (start: Date, end: Date) => setStatus(`Empty slot, ${formatRange(start, end)}.`);

  return (
    <div class={styles.root}>
      <Scheduler
        defaultView="day"
        events={events}
        startHour={8}
        endHour={17}
        maxHeight={360}
        onEventClick={select}
        onSlotClick={pickSlot}
      />
      <p class={styles.status} role="status">
        {status()}
      </p>
    </div>
  );
};
