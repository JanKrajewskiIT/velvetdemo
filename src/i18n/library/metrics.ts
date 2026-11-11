import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const metricsEn = defineDictionary({
  title: 'Metrics',
  blurb: 'Single values and comparisons — stats, deltas, money, bars and meters.',
  labels: {
    revenue: 'Revenue',
    revenueHint: 'Compared with the previous month',
    seats: 'Active seats',
    seatsHint: 'Across all workspaces',
    response: 'Median response',
    responseHint: 'Lower is better',
    typescript: 'TypeScript',
    accessibility: 'Accessibility',
    systems: 'Systems design',
    advanced: 'Advanced',
    proficient: 'Proficient',
    developing: 'Developing',
  },
  specimens: {
    'metrics-stat': { name: 'Stat', subtitle: 'Cards and flat figures, trends and supporting context' },
    'metrics-skill-bar': { name: 'SkillBar', subtitle: 'Labelled levels and semantic tones' },
    money: { name: 'Money', subtitle: 'Currency symbols and codes, compact values and missing amounts' },
    'price-change': { name: 'Delta', subtitle: 'Signed changes, custom units and a flat threshold' },
    'value-shift': {
      name: 'ValueShift',
      subtitle: 'Numeric and custom-formatted changes with domain-specific direction',
    },
    'contribution-bar': {
      name: 'ContributionBar',
      subtitle: 'Positive and negative contributions with optional sorting',
    },
    'data-metric-group': {
      name: 'MetricGroup',
      subtitle: 'Responsive metrics, sizes, subtle surface and directions',
    },
    'data-usage-meter': { name: 'UsageMeter', subtitle: 'Threshold boundaries, custom tones and missing readings' },
    'data-viz-comparison': {
      name: 'ComparisonBar and ComparisonDialog',
      subtitle: 'Pick candidates, compare side by side',
    },
  },
});

export const metricsPl: TranslationOf<typeof metricsEn> = {
  title: 'Metryki',
  blurb: 'Pojedyncze wartości i porównania — statystyki, zmiany, kwoty, paski i mierniki.',
  labels: {
    revenue: 'Przychód',
    revenueHint: 'W porównaniu z poprzednim miesiącem',
    seats: 'Aktywne miejsca',
    seatsHint: 'We wszystkich przestrzeniach roboczych',
    response: 'Mediana czasu odpowiedzi',
    responseHint: 'Niższa wartość jest lepsza',
    typescript: 'TypeScript',
    accessibility: 'Dostępność',
    systems: 'Projektowanie systemów',
    advanced: 'Zaawansowany',
    proficient: 'Biegły',
    developing: 'Rozwijany',
  },
  specimens: {
    'metrics-stat': { name: 'Stat', subtitle: 'Karty i płaskie wartości, trendy i dodatkowy kontekst' },
    'metrics-skill-bar': { name: 'SkillBar', subtitle: 'Opisane poziomy i tony semantyczne' },
    money: { name: 'Money', subtitle: 'Symbole i kody walut, skrócone wartości oraz brakujące kwoty' },
    'price-change': { name: 'Delta', subtitle: 'Zmiany ze znakiem, własne jednostki i próg neutralności' },
    'value-shift': {
      name: 'ValueShift',
      subtitle: 'Zmiany liczb i własnego formatu z kierunkiem zależnym od znaczenia',
    },
    'contribution-bar': {
      name: 'ContributionBar',
      subtitle: 'Dodatnie i ujemne wkłady z opcjonalnym sortowaniem',
    },
    'data-metric-group': {
      name: 'MetricGroup',
      subtitle: 'Responsywne metryki, rozmiary, delikatne tło i kierunki zmian',
    },
    'data-usage-meter': { name: 'UsageMeter', subtitle: 'Granice progów, własne tony i brakujące odczyty' },
    'data-viz-comparison': {
      name: 'ComparisonBar i ComparisonDialog',
      subtitle: 'Wybór kandydatów i porównanie obok siebie',
    },
  },
};
