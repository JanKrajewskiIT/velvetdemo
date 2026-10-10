import type { OrganizerEvent } from '@jankrajewskiit/ui';
import { addDays, CalendarOrganizer, startOfDay } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

type EventDetails = Omit<OrganizerEvent, 'date' | 'endDate'>;

const createEvents = (): OrganizerEvent[] => {
  const today = startOfDay(new Date());
  const on = (offset: number, details: EventDetails, lengthDays = 0): OrganizerEvent => ({
    ...details,
    date: addDays(today, offset),
    ...(lengthDays > 0 ? { endDate: addDays(today, offset + lengthDays) } : {}),
  });

  return [
    on(0, { id: 1, title: 'Stand-up', time: '09:30', location: 'Room 4' }),
    on(0, { id: 2, title: 'Design review', time: '14:00', color: 'var(--dv-3)' }),
    on(0, { id: 3, title: 'Release notes', color: 'var(--dv-5)' }),
    on(2, { id: 4, title: 'Interview with Anna K.', time: '11:00', color: 'var(--dv-2)' }),
    on(5, { id: 5, title: 'Planning', time: '10:00' }),
    on(7, { id: 6, title: 'Team offsite', location: 'Gdansk', color: 'var(--dv-6)' }, 2),
  ];
};

export const CalendarOrganizerDemo = () => {
  const [events, setEvents] = createSignal<OrganizerEvent[]>(createEvents());

  return <CalendarOrganizer events={events()} onEventsChange={setEvents} />;
};
