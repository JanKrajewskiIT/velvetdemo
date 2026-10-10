import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const feedbackEn = defineDictionary({
  title: 'Feedback',
  blurb: 'Alerts, toasts, progress, skeletons and loaders.',
  specimens: {
    'feedback-messages': { name: 'Alert and Banner', subtitle: 'Inline messages and the app-wide notice strip' },
    'feedback-toasts': { name: 'Toast', subtitle: 'Static tones and a live toast queue' },
    'feedback-progress': { name: 'Progress', subtitle: 'Bars, sizes, indeterminate and rings' },
    'feedback-loading': { name: 'Spinner and Skeleton', subtitle: 'Unknown waits versus known content shapes' },
    'feedback-loaders': { name: 'Loader and PageLoader', subtitle: 'Decorative brand loaders, every variant' },
    'feedback-empty-error': { name: 'EmptyState and ErrorState', subtitle: 'No data yet, and a section that failed' },
    'feedback-countdown': { name: 'Countdown', subtitle: 'Live boxes and an inline timer' },
    'feedback-status-pages': { name: 'StatusPage', subtitle: 'Error codes and outcomes, section size' },
    'feedback-notifications': { name: 'NotificationCenter', subtitle: 'Bell with unread count above the bare list' },
    'feedback-setup-checklist': { name: 'SetupChecklist', subtitle: 'First-run steps completed in any order' },
  },
});

export const feedbackPl: TranslationOf<typeof feedbackEn> = {
  title: 'Informacje zwrotne',
  blurb: 'Alerty, toasty, postęp, szkielety i loadery.',
  specimens: {
    'feedback-messages': {
      name: 'Alert i Banner',
      subtitle: 'Komunikaty w linii i pasek powiadomień całej aplikacji',
    },
    'feedback-toasts': { name: 'Toast', subtitle: 'Statyczne tony i kolejka toastów na żywo' },
    'feedback-progress': { name: 'Progress', subtitle: 'Paski, rozmiary, stan nieokreślony i pierścienie' },
    'feedback-loading': { name: 'Spinner i Skeleton', subtitle: 'Nieznany czas oczekiwania a znane kształty treści' },
    'feedback-loaders': { name: 'Loader i PageLoader', subtitle: 'Dekoracyjne loadery marki, każdy wariant' },
    'feedback-empty-error': { name: 'EmptyState i ErrorState', subtitle: 'Brak danych oraz sekcja, która zawiodła' },
    'feedback-countdown': { name: 'Countdown', subtitle: 'Żywe pola i licznik w linii' },
    'feedback-status-pages': { name: 'StatusPage', subtitle: 'Kody błędów i wyniki, rozmiar sekcji' },
    'feedback-notifications': {
      name: 'NotificationCenter',
      subtitle: 'Dzwonek z licznikiem nieprzeczytanych nad samą listą',
    },
    'feedback-setup-checklist': {
      name: 'SetupChecklist',
      subtitle: 'Kroki pierwszego uruchomienia wykonywane w dowolnej kolejności',
    },
  },
};
