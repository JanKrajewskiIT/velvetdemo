import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const pickersEn = defineDictionary({
  title: 'Pickers',
  blurb: 'Dates, ranges, times and colours.',
  demos: {
    range: {
      pick: 'Pick a start and an end date',
      to: 'to',
      endDate: 'end date',
    },
    selection: {
      none: 'No date selected',
      selected: 'Selected {date}. Dots mark days with events.',
    },
  },
  data: {
    presets: {
      next7Days: 'Next 7 days',
      next14Days: 'Next 14 days',
      next30Days: 'Next 30 days',
    },
  },
  specimens: {
    'pickers-date': {
      name: 'DatePicker',
      subtitle: 'Calendar popover with limits and disabled days',
      dueDateLabel: 'Due date',
      weekendsHint: 'Weekends are unavailable',
      startsLabel: 'Starts',
      horizonHint: 'Within the next {days} days',
    },
    'pickers-date-time': {
      name: 'DateTimePicker',
      subtitle: 'Calendar and time slots in 24h and 12h',
      meetingLabel: 'Meeting',
      reminderLabel: 'Reminder',
    },
    'pickers-date-range': {
      name: 'DateRangePicker',
      subtitle: 'Two months with default and custom presets',
      reportingPeriodLabel: 'Reporting period',
      tripDatesLabel: 'Trip dates',
    },
    'pickers-time': {
      name: 'TimePicker and TimeStepper',
      subtitle: 'Typed time field and inline stepper',
      startLabel: 'Start',
      endLabel: 'End',
      alarmLabel: 'Alarm',
    },
    'pickers-color': {
      name: 'ColorPicker',
      subtitle: 'Popover, curated swatches and inline panel',
      accentLabel: 'Accent',
      labelColourLabel: 'Label colour',
      inlineLabel: 'Inline',
    },
    'pickers-calendar': { name: 'Calendar', subtitle: 'Single date with marks and a two-month range' },
  },
});

export const pickersPl: TranslationOf<typeof pickersEn> = {
  title: 'Selektory',
  blurb: 'Daty, zakresy, godziny i kolory.',
  demos: {
    range: {
      pick: 'Wybierz datę początkową i końcową',
      to: 'do',
      endDate: 'data końcowa',
    },
    selection: {
      none: 'Nie wybrano daty',
      selected: 'Wybrano {date}. Kropki oznaczają dni z wydarzeniami.',
    },
  },
  data: {
    presets: {
      next7Days: 'Następne 7 dni',
      next14Days: 'Następne 14 dni',
      next30Days: 'Następne 30 dni',
    },
  },
  specimens: {
    'pickers-date': {
      name: 'DatePicker',
      subtitle: 'Kalendarz w oknie z limitami i wyłączonymi dniami',
      dueDateLabel: 'Termin realizacji',
      weekendsHint: 'Weekendy są niedostępne',
      startsLabel: 'Rozpoczęcie',
      horizonHint: 'W ciągu najbliższych {days} dni',
    },
    'pickers-date-time': {
      name: 'DateTimePicker',
      subtitle: 'Kalendarz i przedziały czasu w formacie 24h i 12h',
      meetingLabel: 'Spotkanie',
      reminderLabel: 'Przypomnienie',
    },
    'pickers-date-range': {
      name: 'DateRangePicker',
      subtitle: 'Dwa miesiące z domyślnymi i własnymi presetami',
      reportingPeriodLabel: 'Okres raportowania',
      tripDatesLabel: 'Daty podróży',
    },
    'pickers-time': {
      name: 'TimePicker i TimeStepper',
      subtitle: 'Pole wpisywania czasu i wbudowany stepper',
      startLabel: 'Początek',
      endLabel: 'Koniec',
      alarmLabel: 'Alarm',
    },
    'pickers-color': {
      name: 'ColorPicker',
      subtitle: 'Okno podręczne, wybrane próbki kolorów i panel wbudowany',
      accentLabel: 'Akcent',
      labelColourLabel: 'Kolor etykiety',
      inlineLabel: 'Wbudowany',
    },
    'pickers-calendar': { name: 'Calendar', subtitle: 'Pojedyncza data ze znacznikami i zakres dwóch miesięcy' },
  },
};
