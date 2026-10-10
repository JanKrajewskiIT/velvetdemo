import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const formsEn = defineDictionary({
  title: 'Forms',
  blurb: 'Layout, validation and multi-step flows.',
  specimens: {
    'forms-layout': { name: 'Form layout', subtitle: 'Section, two-column grid, span and action row' },
    'forms-range-input': { name: 'Range input', subtitle: 'Bounds with units, open ends and inversion error' },
    'forms-error-summary': { name: 'Error summary', subtitle: 'Submit-time errors linking to each field' },
    'forms-validation': { name: 'Validation patterns', subtitle: 'Validate on blur with a reserved message lane' },
    'forms-wizard': { name: 'Multi-step form', subtitle: 'Stepper, per-step validation and async finish' },
    'forms-account-settings': { name: 'Account settings', subtitle: 'Full form with saving state and server error' },
  },
});

export const formsPl: TranslationOf<typeof formsEn> = {
  title: 'Formularze',
  blurb: 'Układ, walidacja i przepływy wieloetapowe.',
  specimens: {
    'forms-layout': { name: 'Układ formularza', subtitle: 'Sekcja, siatka dwukolumnowa, rozpiętość i wiersz akcji' },
    'forms-range-input': { name: 'Pole zakresu', subtitle: 'Granice z jednostkami, otwarte końce i błąd odwrócenia' },
    'forms-error-summary': {
      name: 'Podsumowanie błędów',
      subtitle: 'Błędy po wysłaniu z odnośnikami do poszczególnych pól',
    },
    'forms-validation': {
      name: 'Wzorce walidacji',
      subtitle: 'Walidacja po opuszczeniu pola z zarezerwowanym miejscem na komunikat',
    },
    'forms-wizard': {
      name: 'Formularz wieloetapowy',
      subtitle: 'Stepper, walidacja na każdym kroku i asynchroniczne zakończenie',
    },
    'forms-account-settings': {
      name: 'Ustawienia konta',
      subtitle: 'Pełny formularz ze stanem zapisu i błędem serwera',
    },
  },
};
