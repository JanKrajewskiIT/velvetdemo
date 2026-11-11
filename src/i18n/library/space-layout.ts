import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const spaceLayoutEn = defineDictionary({
  title: 'Space & Layout',
  blurb: 'A 4px grid, containers, breakpoints and the app shell.',
  breakpoints: {
    viewport: 'Viewport {px} px. The highlighted row is the active minimum width.',
    note: 'Breakpoints are documented as tokens but written as literals in media queries.',
  },
  containers: {
    note: 'Prose is measured in characters, so it tracks the body font. Page padding comes from --gutter.',
  },
  density: {
    names: { comfortable: 'Comfortable', compact: 'Compact' },
    regions: { comfortable: 'Comfortable density', compact: 'Compact density' },
    sampleField: 'Sample field',
    placeholder: 'Field at the default size',
    rows: { sm: 'Row · sm', default: 'Row · default', lg: 'Row · lg' },
  },
  layoutRhythm: {
    gapsCaption: 'Gaps at the current viewport',
    note: 'The gutter and section gap are fluid, so their measured size changes with the viewport.',
  },
  shell: {
    sidebarState: 'Sidebar state',
    states: { expanded: 'Expanded', collapsed: 'Collapsed' },
    topbar: 'Topbar',
    nav: { overview: 'Overview', projects: 'Projects', reports: 'Reports', settings: 'Settings' },
    main: 'Main · 8 columns',
    aside: 'Aside · 4',
    fullWidth: 'Full width · 12',
    measures: {
      topbarHeight: 'Topbar height',
      sidebarWidth: 'Sidebar width',
      sidebarCollapsed: 'Sidebar collapsed',
      gutter: 'Gutter',
      gridGap: 'Grid gap',
    },
    note: 'Proportions are true to the tokens; the schematic is scaled down to fit.',
  },
  scale: {
    note: 'Whole steps sit on the 4 px grid. The 1, 2, 6, 10 and 14 px steps fill in between.',
  },
  sizes: {
    icons: 'Icons',
    avatars: 'Avatars and icon tiles',
    targets: 'Marks and hit targets',
    nested: 'Nested controls and rows',
    overlays: 'Overlay widths and maximum heights',
    halos: 'Halo sizes',
  },
  specimens: {
    'space-fixed': {
      name: 'Fixed sizes',
      subtitle: 'Icon, avatar, icon tile, checkmark, swatch and hit-target tokens',
    },
    'space-nested-overlays': {
      name: 'Nested controls and overlays',
      subtitle: 'Inner controls, rows, overlay limits and halos',
    },
    'space-scale': { name: 'Spacing scale', subtitle: 'The 4 px grid, measured live' },
    'space-density': { name: 'Control and row heights', subtitle: 'Comfortable beside compact density' },
    'space-breakpoints': { name: 'Breakpoints', subtitle: 'Five minimum widths and the active one' },
    'space-containers': { name: 'Containers', subtitle: 'Maximum content widths from prose to 2xl' },
    'space-app-shell': { name: 'App shell', subtitle: 'Topbar, sidebar and content grid to scale' },
    'space-grid-rhythm': { name: 'Grid and rhythm', subtitle: 'Twelve columns and the gap tokens' },
  },
});

export const spaceLayoutPl: TranslationOf<typeof spaceLayoutEn> = {
  title: 'Odstępy i układ',
  blurb: 'Siatka 4 px, kontenery, punkty graniczne i powłoka aplikacji.',
  breakpoints: {
    viewport: 'Widok {px} px. Podświetlony wiersz to aktywna minimalna szerokość.',
    note: 'Punkty graniczne są opisane jako tokeny, ale w zapytaniach multimedialnych zapisano je jako wartości stałe.',
  },
  containers: {
    note: 'Proza mierzona jest w znakach, więc podąża za czcionką treści. Dopełnienie strony pochodzi z --gutter.',
  },
  density: {
    names: { comfortable: 'Komfortowa', compact: 'Kompaktowa' },
    regions: { comfortable: 'Gęstość komfortowa', compact: 'Gęstość kompaktowa' },
    sampleField: 'Przykładowe pole',
    placeholder: 'Pole w domyślnym rozmiarze',
    rows: { sm: 'Wiersz · sm', default: 'Wiersz · domyślny', lg: 'Wiersz · lg' },
  },
  layoutRhythm: {
    gapsCaption: 'Odstępy przy bieżącej szerokości widoku',
    note: 'Margines i odstęp sekcji są płynne, więc ich zmierzony rozmiar zmienia się wraz z widokiem.',
  },
  shell: {
    sidebarState: 'Stan panelu bocznego',
    states: { expanded: 'Rozwinięty', collapsed: 'Zwinięty' },
    topbar: 'Pasek górny',
    nav: { overview: 'Przegląd', projects: 'Projekty', reports: 'Raporty', settings: 'Ustawienia' },
    main: 'Główny · 8 kolumn',
    aside: 'Boczny · 4',
    fullWidth: 'Pełna szerokość · 12',
    measures: {
      topbarHeight: 'Wysokość paska górnego',
      sidebarWidth: 'Szerokość panelu bocznego',
      sidebarCollapsed: 'Zwinięty panel boczny',
      gutter: 'Margines',
      gridGap: 'Odstęp siatki',
    },
    note: 'Proporcje odpowiadają tokenom; schemat jest przeskalowany, aby się zmieścił.',
  },
  scale: {
    note: 'Pełne kroki leżą na siatce 4 px. Kroki 1, 2, 6, 10 i 14 px wypełniają przestrzeń pomiędzy nimi.',
  },
  sizes: {
    icons: 'Ikony',
    avatars: 'Awatary i kafelki z ikoną',
    targets: 'Znaczniki i obszary trafienia',
    nested: 'Zagnieżdżone kontrolki i wiersze',
    overlays: 'Szerokości i maksymalne wysokości nakładek',
    halos: 'Rozmiary poświaty',
  },
  specimens: {
    'space-fixed': {
      name: 'Stałe rozmiary',
      subtitle: 'Tokeny ikon, awatarów, kafelków, znaczników i obszarów trafienia',
    },
    'space-nested-overlays': {
      name: 'Zagnieżdżone kontrolki i nakładki',
      subtitle: 'Wewnętrzne kontrolki, wiersze, limity nakładek i poświaty',
    },
    'space-scale': { name: 'Skala odstępów', subtitle: 'Siatka 4 px, mierzona na żywo' },
    'space-density': { name: 'Wysokości kontrolek i wierszy', subtitle: 'Gęstość komfortowa obok kompaktowej' },
    'space-breakpoints': { name: 'Punkty graniczne', subtitle: 'Pięć minimalnych szerokości i aktywna z nich' },
    'space-containers': { name: 'Kontenery', subtitle: 'Maksymalne szerokości treści od wąskiego tekstu do 2xl' },
    'space-app-shell': { name: 'Powłoka aplikacji', subtitle: 'Pasek górny, panel boczny i siatka treści w skali' },
    'space-grid-rhythm': { name: 'Siatka i rytm', subtitle: 'Dwanaście kolumn i tokeny odstępów' },
  },
};
