import { useI18n } from '@jankrajewskiit/i18n';
import type { SchedulerEvent } from '@jankrajewskiit/ui';
import { Scheduler } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import { createDayEvents } from './planningSamples';
import styles from './SchedulerDayDemo.module.css';

const TIME_FORMAT: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: false };

const formatTime = (date: Date): string => date.toLocaleTimeString('en-GB', TIME_FORMAT);

export const SchedulerDayDemo = () => {
  const { ts } = useI18n();
  const events = createDayEvents(ts);
  const formatRange = (start: Date, end: Date): string =>
    ts('library.planning.scheduler.range', { start: formatTime(start), end: formatTime(end) });
  const [status, setStatus] = createSignal(ts('library.planning.scheduler.idle'));
  const select = (event: SchedulerEvent) =>
    setStatus(
      ts('library.planning.scheduler.event', { title: event.title, range: formatRange(event.start, event.end) }),
    );
  const pickSlot = (start: Date, end: Date) =>
    setStatus(ts('library.planning.scheduler.emptySlot', { range: formatRange(start, end) }));

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
