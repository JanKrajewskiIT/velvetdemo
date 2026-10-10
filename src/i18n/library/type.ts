import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const typeEn = defineDictionary({
  title: 'Type',
  blurb: 'Three families, one role scale. Display, text, mono.',
  specimens: {
    'type-families': { name: 'Families and weights', subtitle: 'Display, text and mono with supported weights' },
    'type-display-roles': {
      name: 'Display and heading roles',
      subtitle: 'Live size and weight read from each role',
    },
    'type-ui-roles': { name: 'Text and interface roles', subtitle: 'Body, labels, buttons, code and micro' },
    'type-text-component': { name: 'Text component', subtitle: 'Variants, tones and modifiers' },
    'type-figures-characters': {
      name: 'Figures and typographic characters',
      subtitle: 'Tabular numerals and the marks that matter',
    },
    'type-polish': { name: 'Polish diacritics', subtitle: 'Full alphabet across all three families' },
  },
});

export const typePl: TranslationOf<typeof typeEn> = {
  title: 'Typografia',
  blurb: 'Trzy rodziny, jedna skala ról. Display, tekst, mono.',
  specimens: {
    'type-families': { name: 'Rodziny i grubości', subtitle: 'Display, tekst i mono z obsługiwanymi grubościami' },
    'type-display-roles': {
      name: 'Role nagłówkowe i display',
      subtitle: 'Rozmiar i grubość odczytywane na żywo z każdej roli',
    },
    'type-ui-roles': { name: 'Role tekstu i interfejsu', subtitle: 'Treść, etykiety, przyciski, kod i micro' },
    'type-text-component': { name: 'Komponent Text', subtitle: 'Warianty, tony i modyfikatory' },
    'type-figures-characters': {
      name: 'Cyfry i znaki typograficzne',
      subtitle: 'Cyfry tabelaryczne i znaki, które mają znaczenie',
    },
    'type-polish': { name: 'Polskie znaki diakrytyczne', subtitle: 'Pełny alfabet we wszystkich trzech rodzinach' },
  },
};
