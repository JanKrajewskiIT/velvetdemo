import { useI18n } from '@jankrajewskiit/i18n';
import type { CalendarEvent } from '@jankrajewskiit/ui';
import { addDays, Card, EventCalendar, Stack, startOfDay } from '@jankrajewskiit/ui';

type Ts = ReturnType<typeof useI18n>['ts'];

const createEvents = (ts: Ts): CalendarEvent[] => {
  const today = startOfDay(new Date());
  return [
    {
      date: today,
      time: '10:00',
      title: ts('library.planning.calendar.introCall', { name: 'Anna Kowalska' }),
      description: ts('library.planning.calendar.roles.seniorFrontend'),
      tone: 'info',
    },
    {
      date: today,
      time: '14:30',
      title: ts('library.planning.calendar.technicalReview', { name: 'Jan Nowak' }),
      description: ts('library.planning.calendar.backendLeadRoom', { number: 3 }),
      tone: 'brand',
    },
    {
      date: today,
      title: ts('library.planning.calendar.proposalDeadline', {
        role: ts('library.planning.calendar.roles.uxDesigner'),
      }),
      tone: 'warning',
    },
    {
      date: addDays(today, 2),
      time: '09:00',
      title: ts('library.planning.calendar.panel', { role: ts('library.planning.calendar.roles.devOps') }),
      tone: 'success',
    },
    { date: addDays(today, 5), time: '16:00', title: ts('library.planning.calendar.debrief'), tone: 'brand' },
  ];
};

export const EventCalendarDemo = () => {
  const { ts } = useI18n();
  return (
    <Stack gap={4}>
      <Card>
        <EventCalendar events={createEvents(ts)} />
      </Card>
      <Card>
        <EventCalendar events={createEvents(ts)} layout="split" />
      </Card>
    </Stack>
  );
};
