import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const typeEn = defineDictionary({
  title: 'Type',
  blurb: 'Three families, one role scale. Display, text, mono.',
  families: {
    use: {
      display: 'Display, headings, titles and KPIs',
      sans: 'Interface text, body and labels',
      mono: 'Code, data and keyboard keys',
    },
  },
  tabular: {
    caption: 'Same amounts, two figure styles, right-aligned',
    proportional: 'Proportional',
    tabular: 'Tabular',
  },
  text: {
    samples: {
      display: 'Quietly confident',
      heading: 'Designed to be read',
      title: 'Quarterly report',
      body: 'Notes stay with the project they belong to.',
      button: 'Save changes',
      overline: 'Quarterly report',
      section: 'Recent searches',
      label: 'Email address',
      caption: 'Updated 2 hours ago',
      fallback: 'Calm interface',
    },
    toneSample: 'Notes stay with the project',
    truncate: 'Quarterly design system review with the Gdańsk office',
  },
  characters: {
    enDash: { name: 'En dash', example: 'Open 09:00–17:00' },
    emDash: { name: 'Em dash', example: 'Saved — nothing to publish' },
    minus: { name: 'Minus', example: 'Change −12.4%' },
    multiplication: { name: 'Multiplication', example: 'Canvas 1280 × 720' },
    ellipsis: { name: 'Ellipsis', example: 'Searching…' },
    curlyQuotes: { name: 'Curly quotes', example: '“Release notes”' },
    apostrophe: { name: 'Apostrophe', example: 'It’s saved' },
    middleDot: { name: 'Middle dot', example: 'Draft · 12 slides' },
  },
  scales: {
    sample: 'Velvet interface',
    paragraph: 'Good typography gives each line enough room to breathe and keeps longer passages comfortable to read.',
    size: 'Size scale',
    tracking: 'Tracking',
    leading: 'Leading',
  },
  specimens: {
    'type-scales': { name: 'Size, tracking and leading', subtitle: 'Reference font-size, tracking and leading tokens' },
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
  families: {
    use: {
      display: 'Display, nagłówki, tytuły i wskaźniki KPI',
      sans: 'Tekst interfejsu, treść i etykiety',
      mono: 'Kod, dane i klawisze',
    },
  },
  tabular: {
    caption: 'Te same kwoty, dwa style cyfr, wyrównane do prawej',
    proportional: 'Proporcjonalne',
    tabular: 'Tabelaryczne',
  },
  text: {
    samples: {
      display: 'Spokojnie pewny siebie',
      heading: 'Stworzony do czytania',
      title: 'Raport kwartalny',
      body: 'Notatki zostają w projekcie, do którego należą.',
      button: 'Zapisz zmiany',
      overline: 'Raport kwartalny',
      section: 'Ostatnie wyszukiwania',
      label: 'Adres e-mail',
      caption: 'Zaktualizowano 2 godziny temu',
      fallback: 'Spokojny interfejs',
    },
    toneSample: 'Notatki pozostają w projekcie',
    truncate: 'Kwartalny przegląd systemu projektowego w gdańskim biurze',
  },
  characters: {
    enDash: { name: 'Półpauza', example: 'Otwarte 09:00–17:00' },
    emDash: { name: 'Pauza', example: 'Zapisano — nic do publikacji' },
    minus: { name: 'Minus', example: 'Zmiana −12,4%' },
    multiplication: { name: 'Mnożenie', example: 'Płótno 1280 × 720' },
    ellipsis: { name: 'Wielokropek', example: 'Wyszukiwanie…' },
    curlyQuotes: { name: 'Cudzysłów', example: '„Notatki do wydania”' },
    apostrophe: { name: 'Apostrof', example: 'Zapisano' },
    middleDot: { name: 'Kropka środkowa', example: 'Szkic · 12 slajdów' },
  },
  scales: {
    sample: 'Interfejs Velvet',
    paragraph:
      'Dobra typografia daje każdemu wierszowi miejsce i sprawia, że dłuższe fragmenty tekstu czyta się wygodnie.',
    size: 'Skala rozmiarów',
    tracking: 'Odstępy między literami',
    leading: 'Interlinia',
  },
  specimens: {
    'type-scales': {
      name: 'Rozmiar, odstępy i interlinia',
      subtitle: 'Tokeny font-size, odstępów liter i interlinii z referencji',
    },
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
