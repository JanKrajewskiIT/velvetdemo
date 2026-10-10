import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const patternsEn = defineDictionary({
  title: 'Patterns',
  blurb: 'Product-level compositions — AI panels, filters, comments, pricing.',
  specimens: {
    'patterns-filters': { name: 'Filters and queries', subtitle: 'Faceted bar, dual chip bar, query builder' },
    'patterns-dialogs': {
      name: 'Labels and import dialogs',
      subtitle: 'Label picker, label manager, import sources',
    },
    'patterns-flashcards': { name: 'Flashcard study flow', subtitle: 'Setup, session and summary in one flow' },
    'patterns-calendar-organizer': { name: 'Calendar organiser', subtitle: 'Month planner with quick add and drag' },
    'patterns-comment-thread': { name: 'Comment thread', subtitle: 'Replies, likes, inline edit and delete' },
    'patterns-ai-result': { name: 'AI result panel', subtitle: 'Scored answer with sources and feedback' },
    'patterns-analysis-flow': {
      name: 'Analysis request and result',
      subtitle: 'Compose a run, then read the ATS result',
    },
    'patterns-pricing': { name: 'Pricing table', subtitle: 'Three tiers with a billing switch' },
    'patterns-chat': { name: 'Chat thread', subtitle: 'Messages, sources, feedback and a typing indicator' },
    'patterns-prompt-input': { name: 'Prompt input', subtitle: 'Suggestions, attachments, send and stop' },
  },
});

export const patternsPl: TranslationOf<typeof patternsEn> = {
  title: 'Wzorce',
  blurb: 'Kompozycje na poziomie produktu — panele AI, filtry, komentarze, cenniki.',
  specimens: {
    'patterns-filters': {
      name: 'Filtry i zapytania',
      subtitle: 'Pasek facetów, podwójny pasek chipów, kreator zapytań',
    },
    'patterns-dialogs': {
      name: 'Okna etykiet i importu',
      subtitle: 'Wybór etykiet, menedżer etykiet, źródła importu',
    },
    'patterns-flashcards': {
      name: 'Nauka z fiszek',
      subtitle: 'Konfiguracja, sesja i podsumowanie w jednym przepływie',
    },
    'patterns-calendar-organizer': {
      name: 'Organizer kalendarza',
      subtitle: 'Planer miesiąca z szybkim dodawaniem i przeciąganiem',
    },
    'patterns-comment-thread': {
      name: 'Wątek komentarzy',
      subtitle: 'Odpowiedzi, polubienia, edycja w miejscu i usuwanie',
    },
    'patterns-ai-result': { name: 'Panel wyniku AI', subtitle: 'Oceniona odpowiedź ze źródłami i opinią' },
    'patterns-analysis-flow': {
      name: 'Zlecenie analizy i wynik',
      subtitle: 'Przygotowanie uruchomienia, a potem wynik ATS',
    },
    'patterns-pricing': { name: 'Tabela cen', subtitle: 'Trzy plany z przełącznikiem rozliczania' },
    'patterns-chat': { name: 'Wątek czatu', subtitle: 'Wiadomości, źródła, opinie i wskaźnik pisania' },
    'patterns-prompt-input': { name: 'Pole promptu', subtitle: 'Podpowiedzi, załączniki, wysyłanie i zatrzymanie' },
  },
};
