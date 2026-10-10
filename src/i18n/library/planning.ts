import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const planningEn = defineDictionary({
  title: 'Planning',
  blurb: 'Calendars, kanban boards and schedulers.',
  specimens: {
    'planning-event-calendar': { name: 'Event calendar', subtitle: 'Month grid with the day agenda below' },
    'planning-scheduler-day': {
      name: 'Scheduler, day view',
      subtitle: 'Time grid with overlapping events and slot picking',
    },
    'planning-kanban': { name: 'Kanban', subtitle: 'Drag or keyboard moves between columns' },
    'planning-scheduler-week': { name: 'Scheduler, week view', subtitle: 'Working week with a live now-line' },
  },
});

export const planningPl: TranslationOf<typeof planningEn> = {
  title: 'Planowanie',
  blurb: 'Kalendarze, tablice kanban i harmonogramy.',
  specimens: {
    'planning-event-calendar': { name: 'Kalendarz wydarzeń', subtitle: 'Siatka miesiąca z agendą dnia poniżej' },
    'planning-scheduler-day': {
      name: 'Scheduler, widok dnia',
      subtitle: 'Siatka czasu z nakładającymi się wydarzeniami i wyborem przedziału',
    },
    'planning-kanban': { name: 'Kanban', subtitle: 'Przenoszenie między kolumnami przeciąganiem lub klawiaturą' },
    'planning-scheduler-week': {
      name: 'Scheduler, widok tygodnia',
      subtitle: 'Tydzień roboczy z bieżącą linią czasu',
    },
  },
};
