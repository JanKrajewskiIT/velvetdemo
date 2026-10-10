import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const atomsEn = defineDictionary({
  title: 'Atoms',
  blurb: 'The smallest parts every component is built from.',
  specimens: {
    'atoms-surface': { name: 'Surface', subtitle: 'Twelve paints, plus hover, selection and tone' },
    'atoms-text': { name: 'Text', subtitle: 'Type roles, tone and numeric modifiers' },
    'atoms-status-marks': { name: 'Status marks', subtitle: 'Dot, count, swatch and glyph scale' },
    'atoms-rows': { name: 'Rows and tiles', subtitle: 'List item, option and icon tile' },
    'atoms-field-shell': { name: 'Field and control', subtitle: 'Label, control, hint, error and counter' },
    'atoms-disclosure-dismiss': { name: 'Disclosure and dismiss', subtitle: 'Chevron, close, handle and checkmark' },
    'atoms-text-emphasis': { name: 'Text emphasis', subtitle: 'Mark, key caps, labels and separators' },
    'atoms-steps-tracks': { name: 'Steps and tracks', subtitle: 'Marker and rail, meter and segmented' },
    'atoms-indicator': { name: 'Indicator', subtitle: 'Four corners, counts, presence, inset and circular hosts' },
    'atoms-column-resize': { name: 'ColumnResize', subtitle: 'Drag, arrow keys and reset with bounded column widths' },
    'atoms-field-hint': {
      name: 'FieldLabel and FieldHint',
      subtitle: 'Standalone label, hint, error and live validation lane',
    },
  },
});

export const atomsPl: TranslationOf<typeof atomsEn> = {
  title: 'Atomy',
  blurb: 'Najmniejsze elementy, z których zbudowany jest każdy komponent.',
  specimens: {
    'atoms-surface': { name: 'Powierzchnia', subtitle: 'Dwanaście wypełnień oraz najechanie, zaznaczenie i ton' },
    'atoms-text': { name: 'Tekst', subtitle: 'Role typograficzne, ton i modyfikatory liczbowe' },
    'atoms-status-marks': { name: 'Znaczniki statusu', subtitle: 'Kropka, licznik, próbka i skala glifów' },
    'atoms-rows': { name: 'Wiersze i kafelki', subtitle: 'Element listy, opcja i kafelek z ikoną' },
    'atoms-field-shell': { name: 'Pole i kontrolka', subtitle: 'Etykieta, kontrolka, podpowiedź, błąd i licznik' },
    'atoms-disclosure-dismiss': {
      name: 'Rozwijanie i zamykanie',
      subtitle: 'Szewron, zamknięcie, uchwyt i znacznik wyboru',
    },
    'atoms-text-emphasis': { name: 'Wyróżnienie tekstu', subtitle: 'Zaznaczenie, klawisze, etykiety i separatory' },
    'atoms-steps-tracks': { name: 'Kroki i ścieżki', subtitle: 'Znacznik i szyna, miernik i segmentowany' },
    'atoms-indicator': { name: 'Indicator', subtitle: 'Cztery narożniki, liczniki, obecność i warianty nakładania' },
    'atoms-column-resize': {
      name: 'ColumnResize',
      subtitle: 'Przeciąganie, strzałki i reset szerokości z ograniczeniami',
    },
    'atoms-field-hint': {
      name: 'FieldLabel i FieldHint',
      subtitle: 'Samodzielna etykieta, podpowiedź, błąd i komunikaty walidacji',
    },
  },
};
