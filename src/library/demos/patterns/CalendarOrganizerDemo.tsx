import { useI18n } from '@jankrajewskiit/i18n';
import type { OrganizerEvent } from '@jankrajewskiit/ui';
import { addDays, Button, CalendarOrganizer, Checkbox, Stack, startOfDay } from '@jankrajewskiit/ui';
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
  const { ts } = useI18n();
  const [events, setEvents] = createSignal<OrganizerEvent[]>(createEvents());
  const [selected, setSelected] = createSignal(startOfDay(new Date()));
  const [confirmDelete, setConfirmDelete] = createSignal(true);

  return (
    <Stack gap={3}>
      <Checkbox
        checked={confirmDelete()}
        onChange={(event) => setConfirmDelete(event.currentTarget.checked)}
        label={ts('library.patterns.organizer.confirmDelete')}
      />
      <Stack direction="row" gap={2} wrap>
        <Button size="sm" variant="secondary" onClick={() => setSelected(startOfDay(new Date()))}>
          {ts('library.patterns.organizer.today')}
        </Button>
        <Button size="sm" variant="secondary" onClick={() => setSelected(addDays(startOfDay(new Date()), 40))}>
          {ts('library.patterns.organizer.future')}
        </Button>
      </Stack>
      <CalendarOrganizer
        events={events()}
        onEventsChange={setEvents}
        selected={selected()}
        onSelectedChange={setSelected}
        confirmDelete={confirmDelete()}
      />
    </Stack>
  );
};
