import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const colorEn = defineDictionary({
  title: 'Color',
  blurb: 'OKLCH ramps, semantic roles and contrast — every pairing checked.',
  specimens: {
    'color-ramps': { name: 'Ramps', subtitle: 'Velvet brand and warm neutral in OKLCH' },
    'color-backgrounds': { name: 'Backgrounds', subtitle: 'Surface roles with live contrast' },
    'color-foreground-border': { name: 'Foreground and border', subtitle: 'Text roles and hairline strengths' },
    'color-status-roles': { name: 'Status roles', subtitle: 'Tint, border and solid per status' },
    'color-on-color': { name: 'On-color', subtitle: 'Content on brand and media fills' },
    'color-status-ramps': { name: 'Status ramps', subtitle: 'Success, warning, danger and info' },
    'color-categorical': { name: 'Categorical', subtitle: 'Eight label hues, solid and subtle' },
    'color-data-viz': { name: 'Data visualization', subtitle: 'Series hues and the sequential ramp' },
  },
});

export const colorPl: TranslationOf<typeof colorEn> = {
  title: 'Kolor',
  blurb: 'Skale OKLCH, role semantyczne i kontrast — każda para sprawdzona.',
  specimens: {
    'color-ramps': { name: 'Skale', subtitle: 'Marka Velvet i ciepła neutralna w OKLCH' },
    'color-backgrounds': { name: 'Tła', subtitle: 'Role powierzchni z kontrastem na żywo' },
    'color-foreground-border': { name: 'Pierwszy plan i obramowanie', subtitle: 'Role tekstu i grubości linii' },
    'color-status-roles': { name: 'Role statusów', subtitle: 'Odcień, obramowanie i wypełnienie dla każdego statusu' },
    'color-on-color': { name: 'Na kolorze', subtitle: 'Treść na tłach markowych i medialnych' },
    'color-status-ramps': { name: 'Skale statusów', subtitle: 'Sukces, ostrzeżenie, błąd i informacja' },
    'color-categorical': { name: 'Kategorialne', subtitle: 'Osiem odcieni etykiet, pełnych i subtelnych' },
    'color-data-viz': { name: 'Wizualizacja danych', subtitle: 'Odcienie serii i skala sekwencyjna' },
  },
};
