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
  },
};
