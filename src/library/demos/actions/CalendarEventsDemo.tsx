import { CalendarEventButton } from '@jankrajewskiit/ui';

import styles from './CalendarEventsDemo.module.css';

const DAYS_AHEAD = 7;
const START_HOUR = 10;
const REVIEW_MINUTES = 45;

const inOneWeek = (): Date => {
  const date = new Date();
  date.setDate(date.getDate() + DAYS_AHEAD);
  date.setHours(START_HOUR, 0, 0, 0);
  return date;
};

export const CalendarEventsDemo = () => {
  const start = inOneWeek();
  return (
    <div class={styles.root}>
      <CalendarEventButton
        event={{ title: 'Design review', start, durationMinutes: REVIEW_MINUTES, location: 'Online' }}
        variant="primary"
      />
      <CalendarEventButton
        event={{ title: 'Release deadline', start, allDay: true }}
        providers={['ics']}
        label="Download .ics"
        variant="soft"
        size="sm"
      />
      <CalendarEventButton event={{ title: 'Design review', start }} iconOnly variant="ghost" size="lg" />
      <CalendarEventButton event={{ title: 'Planning', start }} added />
      <CalendarEventButton event={{ title: 'Planning', start }} disabled />
    </div>
  );
};
