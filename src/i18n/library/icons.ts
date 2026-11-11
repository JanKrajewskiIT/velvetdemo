import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const iconsEn = defineDictionary({
  title: 'Icons',
  blurb: 'One stroke-based set, sized to the 12–24 icon scale.',
  filled: {
    paired: 'Toggle a selected state',
    print: 'Filled glyphs for print',
    selected: 'Selected',
    rest: 'Rest',
    printState: 'Filled',
    caption: 'Use filled glyphs for selected states or when a filled shape is required, such as print.',
  },
  detail: { copy: 'Copy name' },
  colour: {
    navigation: 'Navigation roles',
    status: 'Status roles',
    interfaceNote: 'Interface icons follow text colour',
    statusNote: 'Status colour belongs to alerts',
    rest: 'Rest',
    active: 'Active',
    disabled: 'Disabled',
  },
  scale: {
    uses: {
      xs: 'Trailing chevrons in filter chips, external-link marks',
      sm: 'Extra-small buttons, stepper dots, picker headers',
      md: 'Default in buttons, menus, options and breadcrumbs',
      lg: 'Toolbars, navigation links and tree carets',
      xl: 'Large icon tiles',
      xxl: 'Floating action button, bottom navigation, empty states',
    },
    caption:
      'Outline set on a 24 px grid with a 1.75 stroke and round caps. Size follows font-size, colour follows currentColor.',
  },
  set: {
    search: 'Search glyphs',
    placeholder: 'Name, for example chevron',
    count: '{shown} of {total} glyphs',
    empty: 'No glyph matches “{query}”.',
  },
  controls: {
    buttons: 'Buttons',
    iconButtons: 'Icon buttons',
    fields: 'Fields',
    badges: 'Badges and tiles',
    continueLabel: 'Continue',
    settings: 'Settings, {size}',
    searchProjects: 'Search projects',
    verified: 'Verified',
    pending: 'Pending',
  },
  specimens: {
    'icons-glyph-set': { name: 'Glyph set', subtitle: 'Search, select and copy any glyph name' },
    'icons-scale': { name: 'Icon scale', subtitle: 'Six sizes from 12 to 24 pixels' },
    'icons-filled-twins': { name: 'Filled twins', subtitle: 'Selected states and filled glyphs for print' },
    'icons-colour': { name: 'Colour usage', subtitle: 'Secondary at rest, brand when active' },
    'icons-in-controls': { name: 'Icons in controls', subtitle: 'Buttons, fields, badges and tiles' },
  },
});

export const iconsPl: TranslationOf<typeof iconsEn> = {
  title: 'Ikony',
  blurb: 'Jeden zestaw liniowy w skali ikon od 12 do 24.',
  filled: {
    paired: 'Przełącz stan zaznaczenia',
    print: 'Wypełnione glify do druku',
    selected: 'Wybrana',
    rest: 'Spoczynek',
    printState: 'Wypełniona',
    caption: 'Używaj wypełnionych glifów dla stanów wybranych lub gdy potrzebny jest pełny kształt, np. w druku.',
  },
  detail: { copy: 'Kopiuj nazwę' },
  colour: {
    navigation: 'Role nawigacji',
    status: 'Role statusu',
    interfaceNote: 'Ikony interfejsu dziedziczą kolor tekstu',
    statusNote: 'Kolor statusu należy do alertów',
    rest: 'Spoczynek',
    active: 'Aktywna',
    disabled: 'Wyłączona',
  },
  scale: {
    uses: {
      xs: 'Końcowe szewrony w chipach filtrów, znaczniki linków zewnętrznych',
      sm: 'Bardzo małe przyciski, kropki stepperów, nagłówki wyboru',
      md: 'Domyślna w przyciskach, menu, opcjach i ścieżkach nawigacji',
      lg: 'Paski narzędzi, linki nawigacji i strzałki drzew',
      xl: 'Duże kafelki z ikonami',
      xxl: 'Przycisk pływający, dolna nawigacja, stany pustki',
    },
    caption:
      'Zestaw konturowy na siatce 24 px, grubość kreski 1,75 i zaokrąglone końcówki. Rozmiar podąża za font-size, kolor za currentColor.',
  },
  set: {
    search: 'Szukaj glifów',
    placeholder: 'Nazwa, na przykład chevron',
    count: '{shown} z {total} glifów',
    empty: 'Żaden glif nie pasuje do „{query}”.',
  },
  controls: {
    buttons: 'Przyciski',
    iconButtons: 'Przyciski z ikoną',
    fields: 'Pola',
    badges: 'Odznaki i kafelki',
    continueLabel: 'Dalej',
    settings: 'Ustawienia, {size}',
    searchProjects: 'Szukaj projektów',
    verified: 'Zweryfikowano',
    pending: 'Oczekuje',
  },
  specimens: {
    'icons-glyph-set': { name: 'Zestaw glifów', subtitle: 'Wyszukaj, zaznacz i skopiuj nazwę dowolnego glifu' },
    'icons-scale': { name: 'Skala ikon', subtitle: 'Sześć rozmiarów od 12 do 24 pikseli' },
    'icons-filled-twins': { name: 'Wypełnione odpowiedniki', subtitle: 'Stany wybrane i wypełnione glify do druku' },
    'icons-colour': { name: 'Użycie koloru', subtitle: 'Drugorzędny w spoczynku, markowy po aktywacji' },
    'icons-in-controls': { name: 'Ikony w kontrolkach', subtitle: 'Przyciski, pola, odznaki i kafelki' },
  },
};
