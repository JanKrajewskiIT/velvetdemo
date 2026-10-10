import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const spaceLayoutEn = defineDictionary({
  title: 'Space & Layout',
  blurb: 'A 4px grid, containers, breakpoints and the app shell.',
  specimens: {
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
  specimens: {
    'space-scale': { name: 'Skala odstępów', subtitle: 'Siatka 4 px, mierzona na żywo' },
    'space-density': { name: 'Wysokości kontrolek i wierszy', subtitle: 'Gęstość komfortowa obok kompaktowej' },
    'space-breakpoints': { name: 'Punkty graniczne', subtitle: 'Pięć minimalnych szerokości i aktywna z nich' },
    'space-containers': { name: 'Kontenery', subtitle: 'Maksymalne szerokości treści od prozy do 2xl' },
    'space-app-shell': { name: 'Powłoka aplikacji', subtitle: 'Pasek górny, panel boczny i siatka treści w skali' },
    'space-grid-rhythm': { name: 'Siatka i rytm', subtitle: 'Dwanaście kolumn i tokeny odstępów' },
  },
};
