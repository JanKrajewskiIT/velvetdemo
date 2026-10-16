import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const dataEn = defineDictionary({
  title: 'Data',
  blurb: 'Tables, grids, lists, timelines and logs.',
  grid: { loadSavedView: 'Load saved view' },
  editing: {
    instructions:
      'Edit a member name or seat count to see async validation. Try a blank name, a count above 100, or fail the next save.',
    failNextSave: 'Fail next save',
    saveFailed: 'The simulated save failed. Try the edit again.',
    saved: 'Changes saved.',
  },
  states: {
    label: 'Grid loading and error states',
    showLoading: 'Show loading',
    showError: 'Show error',
    reset: 'Reset',
    ready: 'Ready',
    loading: 'Loading',
    error: 'Error',
    errorMessage: 'The team could not be loaded.',
  },
  table: { fixedLayout: 'Fixed layout' },
  columns: {
    instructions:
      'Member is locked, Role cannot be pinned, Status cannot move and Seats cannot be hidden. Reset restores the starting layout with Email hidden.',
  },
  server: {
    label: 'Team members in offline server pages',
    search: 'Search all members…',
    previous: 'Previous page',
    next: 'Next page',
    page: 'Page {page} of {count} · offline server example',
    processSelection: 'Process selection',
    bulkResult: 'Processed {selected} selected records; {loaded} were loaded on this page.',
  },
  virtualList: {
    interaction: 'Virtual list interaction pattern',
    list: 'List',
    listbox: 'Multi-select listbox',
    grid: 'Grid',
    failNextLoad: 'Fail next page',
    reset: 'Reset list',
    summary: '{count} files loaded · {selected} selected. Scroll to the bottom to load more.',
    label: 'Export files',
    loadFailed: 'The next page could not be loaded.',
  },
  virtualGrid: {
    instructions:
      'Switch datasets with the same row IDs to see dataKey reset grid state. Expand details to refresh virtual row measurements.',
    useAlternate: 'Load alternate prices',
    useBase: 'Load base prices',
    expandDetails: 'Expand row details',
    compactDetails: 'Compact row details',
    detailNote: 'Current order value: {amount}. Expanded details change the virtual row height.',
  },
  specimens: {
    'data-table': { name: 'Table', subtitle: 'Fixed or automatic layout, pinned columns, resizing and bulk actions' },
    'data-grid': {
      name: 'DataGrid',
      subtitle: 'Custom async editing, validation and save failures, date filters and saved view reconciliation',
    },
    'data-grid-states': {
      name: 'DataGrid loading and errors',
      subtitle: 'Loading, failure and retry states for remote data',
    },
    'data-grid-server': {
      name: 'DataGrid server pages',
      subtitle: 'Consumer filtering, sorting and selections across server pages',
    },
    'data-column-manager': {
      name: 'ColumnManager',
      subtitle: 'Column capabilities and a custom reset layout with a table preview',
    },
    'data-table-add-row': { name: 'TableAddRowAction', subtitle: 'Sticky ghost action below a fixed-layout table' },
    'data-grid-virtual': {
      name: 'DataGrid virtualization',
      subtitle: 'Ten thousand orders, dataset identity changes and variable-height detail measurement',
    },
    'data-virtual-table': { name: 'VirtualTable', subtitle: 'One hundred thousand rows in a window' },
    'data-virtual-list': {
      name: 'VirtualList',
      subtitle: 'List, multi-select listbox and grid patterns with cancellable page loading and retry',
    },
    'data-accordion': { name: 'Accordion', subtitle: 'Separated, flush and elevated with item tone' },
    'data-record': { name: 'DescriptionList', subtitle: 'Record details above competency meters' },
    'data-timeline': { name: 'Timeline', subtitle: 'Rail history, compact feed and status pipeline' },
    'data-list': { name: 'List', subtitle: 'People with presence and file rows' },
    'data-code-snippet': { name: 'CodeSnippet', subtitle: 'Highlighted code with copy and install tabs' },
    'data-diff-viewer': { name: 'DiffViewer', subtitle: 'Unified or split line diff with word highlights' },
    'data-log-viewer': { name: 'LogViewer', subtitle: 'Streaming log tail with level toggles and filter' },
  },
});

export const dataPl: TranslationOf<typeof dataEn> = {
  title: 'Dane',
  blurb: 'Tabele, siatki, listy, osie czasu i logi.',
  grid: { loadSavedView: 'Wczytaj zapisany widok' },
  editing: {
    instructions:
      'Edytuj nazwę osoby lub liczbę miejsc, aby zobaczyć asynchroniczną walidację. Wypróbuj pustą nazwę, wartość powyżej 100 lub błąd kolejnego zapisu.',
    failNextSave: 'Niepowodzenie kolejnego zapisu',
    saveFailed: 'Przykładowy zapis nie powiódł się. Spróbuj edytować ponownie.',
    saved: 'Zmiany zapisane.',
  },
  states: {
    label: 'Stany ładowania i błędów siatki',
    showLoading: 'Pokaż ładowanie',
    showError: 'Pokaż błąd',
    reset: 'Resetuj',
    ready: 'Gotowe',
    loading: 'Ładowanie',
    error: 'Błąd',
    errorMessage: 'Nie udało się pobrać zespołu.',
  },
  table: { fixedLayout: 'Stały układ' },
  columns: {
    instructions:
      'Member jest zablokowana, Role nie można przypiąć, Status nie można przenieść, a Seats ukryć. Reset przywraca układ początkowy z ukrytą kolumną Email.',
  },
  server: {
    label: 'Członkowie zespołu na stronach serwera offline',
    search: 'Przeszukaj wszystkich członków…',
    previous: 'Poprzednia strona',
    next: 'Następna strona',
    page: 'Strona {page} z {count} · przykład serwera offline',
    processSelection: 'Przetwórz zaznaczenie',
    bulkResult: 'Przetworzono {selected} zaznaczonych rekordów; {loaded} było wczytanych na tej stronie.',
  },
  virtualList: {
    interaction: 'Wzorzec interakcji listy wirtualnej',
    list: 'Lista',
    listbox: 'Lista wielokrotnego wyboru',
    grid: 'Siatka',
    failNextLoad: 'Błąd kolejnej strony',
    reset: 'Resetuj listę',
    summary: 'Wczytano {count} plików · zaznaczono {selected}. Przewiń na dół, aby wczytać więcej.',
    label: 'Pliki eksportu',
    loadFailed: 'Nie udało się wczytać kolejnej strony.',
  },
  virtualGrid: {
    instructions:
      'Zmień zestaw danych z tymi samymi identyfikatorami wierszy, aby zobaczyć reset stanu przez dataKey. Rozwiń szczegóły, aby odświeżyć pomiary wierszy.',
    useAlternate: 'Wczytaj alternatywne ceny',
    useBase: 'Wczytaj ceny bazowe',
    expandDetails: 'Rozwiń szczegóły wiersza',
    compactDetails: 'Zwiń szczegóły wiersza',
    detailNote: 'Wartość zamówienia: {amount}. Rozwinięte szczegóły zmieniają wysokość wiersza.',
  },
  specimens: {
    'data-table': {
      name: 'Table',
      subtitle: 'Stały lub automatyczny układ, przypinanie kolumn, zmiana szerokości i akcje zbiorcze',
    },
    'data-grid': {
      name: 'DataGrid',
      subtitle: 'Własna asynchroniczna edycja, walidacja i błędy zapisu, filtry dat oraz uzgadnianie widoku',
    },
    'data-grid-states': {
      name: 'Ładowanie i błędy DataGrid',
      subtitle: 'Stany ładowania, błędu i ponawiania dla danych zdalnych',
    },
    'data-grid-server': {
      name: 'DataGrid ze stronami serwera',
      subtitle: 'Filtrowanie, sortowanie i zaznaczenie rekordów między stronami serwera',
    },
    'data-column-manager': {
      name: 'ColumnManager',
      subtitle: 'Uprawnienia kolumn i własny układ przywracania z podglądem tabeli',
    },
    'data-table-add-row': {
      name: 'TableAddRowAction',
      subtitle: 'Przyklejona akcja ghost pod tabelą o stałym układzie',
    },
    'data-grid-virtual': {
      name: 'Wirtualizacja DataGrid',
      subtitle: 'Dziesięć tysięcy zamówień, zmiana tożsamości danych i pomiar szczegółów o różnej wysokości',
    },
    'data-virtual-table': { name: 'VirtualTable', subtitle: 'Sto tysięcy wierszy w oknie widoku' },
    'data-virtual-list': {
      name: 'VirtualList',
      subtitle: 'Lista, wielokrotny wybór i siatka z anulowalnym wczytywaniem stron oraz ponawianiem',
    },
    'data-accordion': { name: 'Accordion', subtitle: 'Rozdzielony, płaski i podniesiony z tonem pozycji' },
    'data-record': { name: 'DescriptionList', subtitle: 'Szczegóły rekordu nad miernikami kompetencji' },
    'data-timeline': { name: 'Timeline', subtitle: 'Historia na osi, zwięzły feed i potok statusów' },
    'data-list': { name: 'List', subtitle: 'Osoby ze statusem obecności i wiersze plików' },
    'data-code-snippet': { name: 'CodeSnippet', subtitle: 'Podświetlony kod z kopiowaniem i zakładkami instalacji' },
    'data-diff-viewer': {
      name: 'DiffViewer',
      subtitle: 'Różnice liniowe w widoku jednolitym lub dzielonym z podświetleniem słów',
    },
    'data-log-viewer': { name: 'LogViewer', subtitle: 'Strumień logów z przełącznikami poziomów i filtrem' },
  },
};
