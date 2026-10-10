import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const dataVizEn = defineDictionary({
  title: 'Data viz',
  blurb: 'Charts coloured from one categorical palette, keyboard-readable.',
  specimens: {
    'data-viz-bar-chart': { name: 'BarChart', subtitle: 'Grouped or stacked bars by series' },
    'data-viz-donut-chart': { name: 'DonutChart', subtitle: 'Part-to-whole with a toggling legend' },
    'data-viz-line-chart': { name: 'LineChart', subtitle: 'Crosshair, area fill and table view' },
    'data-viz-sparkline': { name: 'Sparkline', subtitle: 'Inline trends beside key figures' },
    'data-viz-heatmap': { name: 'Heatmap', subtitle: 'Calendar density over twenty weeks' },
    'data-viz-radar-chart': { name: 'RadarChart', subtitle: 'Two profiles across six dimensions' },
    'data-viz-funnel-chart': { name: 'FunnelChart', subtitle: 'Step conversion and drop-off' },
    'data-viz-gauge': { name: 'Gauge', subtitle: 'Single value against threshold bands' },
    'data-viz-comparison': {
      name: 'ComparisonBar and ComparisonDialog',
      subtitle: 'Pick candidates, compare side by side',
    },
    'data-viz-series-palette': { name: 'Series colours', subtitle: 'Categorical tokens in assignment order' },
    'data-viz-gantt': { name: 'Gantt', subtitle: 'Grouped tasks, progress, milestone and dependency arrows' },
  },
});

export const dataVizPl: TranslationOf<typeof dataVizEn> = {
  title: 'Wizualizacja danych',
  blurb: 'Wykresy kolorowane z jednej palety kategorii, czytelne z klawiatury.',
  specimens: {
    'data-viz-bar-chart': { name: 'BarChart', subtitle: 'Słupki grupowane lub skumulowane według serii' },
    'data-viz-donut-chart': { name: 'DonutChart', subtitle: 'Część do całości z przełączaną legendą' },
    'data-viz-line-chart': { name: 'LineChart', subtitle: 'Celownik, wypełnienie obszaru i widok tabeli' },
    'data-viz-sparkline': { name: 'Sparkline', subtitle: 'Trendy w tekście obok kluczowych liczb' },
    'data-viz-heatmap': { name: 'Heatmap', subtitle: 'Gęstość w kalendarzu na przestrzeni dwudziestu tygodni' },
    'data-viz-radar-chart': { name: 'RadarChart', subtitle: 'Dwa profile w sześciu wymiarach' },
    'data-viz-funnel-chart': { name: 'FunnelChart', subtitle: 'Konwersja i odpadanie na kolejnych krokach' },
    'data-viz-gauge': { name: 'Gauge', subtitle: 'Pojedyncza wartość na tle przedziałów progowych' },
    'data-viz-comparison': {
      name: 'ComparisonBar i ComparisonDialog',
      subtitle: 'Wybór kandydatów i porównanie obok siebie',
    },
    'data-viz-series-palette': { name: 'Kolory serii', subtitle: 'Tokeny kategorii w kolejności przypisywania' },
    'data-viz-gantt': { name: 'Gantt', subtitle: 'Zadania w grupach, postęp, kamień milowy i strzałki zależności' },
  },
};
