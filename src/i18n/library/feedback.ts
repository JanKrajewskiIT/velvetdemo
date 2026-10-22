import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const feedbackEn = defineDictionary({
  title: 'Feedback',
  blurb: 'Alerts, toasts, progress, skeletons and loaders.',
  gates: {
    ordered: 'Ordered gates · stop at first failure',
    unordered: 'All statuses · unordered · small · no blocking',
    identity: 'Identity verified',
    billing: 'Billing contact verified',
    billingDetail: 'A verified billing contact is required before release.',
    quota: 'Capacity warning reviewed',
    quotaDetail: 'The workspace has used 82% of its capacity.',
    migration: 'Legacy migration not required',
    review: 'Final review',
    blocked: 'Release blocked. Resolve billing to complete the remaining review.',
    ready: 'Release unblocked. The capacity warning remains visible for review.',
    resolve: 'Resolve billing and complete review',
    reset: 'Reset gates',
  },
  region: {
    add: 'Add a notification',
    message: 'Notification {id}',
    description: 'Dismisses after five seconds; hover or focus pauses the timer.',
  },
  specimens: {
    'feedback-gate-list': {
      name: 'GateList',
      subtitle: 'Pass, failure, warning, pending and skip with an unblock flow',
    },
    'feedback-messages': { name: 'Alert and Banner', subtitle: 'Inline messages and the app-wide notice strip' },
    'feedback-toasts': { name: 'Toast', subtitle: 'Static tones and a live toast queue' },
    'feedback-toast-region': {
      name: 'ToastRegion',
      subtitle: 'Contained live region, dismissal and a bounded queue',
    },
    'feedback-progress': { name: 'Progress', subtitle: 'Bars, sizes, indeterminate and rings' },
    'feedback-loading': {
      name: 'Spinner, robot indicator and Skeleton',
      subtitle: 'Inline processing, overlays and known content shapes',
    },
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
  gates: {
    ordered: 'Uporządkowane warunki · zatrzymanie przy błędzie',
    unordered: 'Wszystkie statusy · bez kolejności · mały rozmiar · bez blokowania',
    identity: 'Tożsamość zweryfikowana',
    billing: 'Kontakt rozliczeniowy zweryfikowany',
    billingDetail: 'Przed publikacją wymagany jest zweryfikowany kontakt rozliczeniowy.',
    quota: 'Ostrzeżenie o pojemności sprawdzone',
    quotaDetail: 'Wykorzystano 82% pojemności przestrzeni roboczej.',
    migration: 'Migracja starszych danych niewymagana',
    review: 'Końcowa weryfikacja',
    blocked: 'Publikacja zablokowana. Zweryfikuj rozliczenia, aby zakończyć pozostałe sprawdzenia.',
    ready: 'Publikacja odblokowana. Ostrzeżenie o pojemności pozostaje widoczne do wglądu.',
    resolve: 'Zweryfikuj rozliczenia i zakończ sprawdzanie',
    reset: 'Resetuj warunki',
  },
  region: {
    add: 'Dodaj powiadomienie',
    message: 'Powiadomienie {id}',
    description: 'Znika po pięciu sekundach; najechanie lub fokus wstrzymuje licznik.',
  },
  specimens: {
    'feedback-gate-list': {
      name: 'GateList',
      subtitle: 'Sukces, błąd, ostrzeżenie, oczekiwanie i pominięcie z odblokowaniem',
    },
    'feedback-messages': {
      name: 'Alert i Banner',
      subtitle: 'Komunikaty w linii i pasek powiadomień całej aplikacji',
    },
    'feedback-toasts': { name: 'Toast', subtitle: 'Statyczne tony i kolejka toastów na żywo' },
    'feedback-toast-region': {
      name: 'ToastRegion',
      subtitle: 'Region na żywo w ramce, zamykanie i ograniczona kolejka',
    },
    'feedback-progress': { name: 'Progress', subtitle: 'Paski, rozmiary, stan nieokreślony i pierścienie' },
    'feedback-loading': {
      name: 'Spinner, wskaźnik robota i Skeleton',
      subtitle: 'Oczekiwanie w linii, nakładki i znane kształty treści',
    },
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
