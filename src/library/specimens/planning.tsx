import { useI18n } from '@jankrajewskiit/i18n';
import { Scheduler } from '@jankrajewskiit/ui';

import type { planningEn } from '../../i18n/library/planning';
import { EventCalendarDemo } from '../demos/planning/EventCalendarDemo';
import { KanbanBoardDemo } from '../demos/planning/KanbanBoardDemo';
import { createWeekEvents } from '../demos/planning/planningSamples';
import { SchedulerDayDemo } from '../demos/planning/SchedulerDayDemo';
import type { Specimen, SpecimenIdOf } from '../types';

export const planningSpecimens: readonly Specimen<SpecimenIdOf<typeof planningEn>>[] = [
  {
    id: 'planning-event-calendar',
    span: 12,
    render: () => <EventCalendarDemo />,
  },
  {
    id: 'planning-scheduler-day',
    span: 6,
    render: () => <SchedulerDayDemo />,
  },
  {
    id: 'planning-kanban',
    span: 12,
    render: () => <KanbanBoardDemo />,
  },
  {
    id: 'planning-scheduler-week',
    span: 12,
    render: () => {
      const { ts } = useI18n();
      const events = createWeekEvents(ts);
      return <Scheduler events={events} hideWeekends startHour={8} endHour={18} maxHeight={440} />;
    },
  },
];
