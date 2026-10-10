import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const pickersEn = defineDictionary({
  title: 'Pickers',
  blurb: 'Dates, ranges, times and colours.',
  specimens: {
    'pickers-date': { name: 'DatePicker', subtitle: 'Calendar popover with limits and disabled days' },
    'pickers-date-time': { name: 'DateTimePicker', subtitle: 'Calendar and time slots in 24h and 12h' },
    'pickers-date-range': { name: 'DateRangePicker', subtitle: 'Two months with default and custom presets' },
    'pickers-time': { name: 'TimePicker and TimeStepper', subtitle: 'Typed time field and inline stepper' },
    'pickers-color': { name: 'ColorPicker', subtitle: 'Popover, curated swatches and inline panel' },
    'pickers-calendar': { name: 'Calendar', subtitle: 'Single date with marks and a two-month range' },
  },
});

export const pickersPl: TranslationOf<typeof pickersEn> = {
  title: 'Selektory',
  blurb: 'Daty, zakresy, godziny i kolory.',
  specimens: {
    'pickers-date': { name: 'DatePicker', subtitle: 'Kalendarz w oknie z limitami i wyłączonymi dniami' },
    'pickers-date-time': { name: 'DateTimePicker', subtitle: 'Kalendarz i przedziały czasu w formacie 24h i 12h' },
    'pickers-date-range': { name: 'DateRangePicker', subtitle: 'Dwa miesiące z domyślnymi i własnymi presetami' },
    'pickers-time': { name: 'TimePicker i TimeStepper', subtitle: 'Pole wpisywania czasu i wbudowany stepper' },
    'pickers-color': { name: 'ColorPicker', subtitle: 'Okno podręczne, wybrane próbki kolorów i panel wbudowany' },
    'pickers-calendar': { name: 'Calendar', subtitle: 'Pojedyncza data ze znacznikami i zakres dwóch miesięcy' },
  },
};
