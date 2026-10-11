import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const dataEn = defineDictionary({
  title: 'Data',
  blurb: 'Tables, grids, lists, timelines and logs.',
  grid: { loadSavedView: 'Load saved view' },
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
  },
  specimens: {
    'data-table': { name: 'Table', subtitle: 'Fixed or automatic layout, pinned columns, resizing and bulk actions' },
    'data-grid': {
      name: 'DataGrid',
      subtitle: 'Saved view reconciliation and resets to initial filters, columns and widths',
    },
    'data-grid-server': {
      name: 'DataGrid server pages',
      subtitle: 'Consumer filtering and sorting with the total record count',
    },
    'data-column-manager': {
      name: 'ColumnManager',
      subtitle: 'Column capabilities and a custom reset layout with a table preview',
    },
    'data-table-add-row': { name: 'TableAddRowAction', subtitle: 'Sticky ghost action below a fixed-layout table' },
    'data-grid-virtual': {
      name: 'DataGrid virtualization',
      subtitle: 'Ten thousand orders, stable keys and expandable details',
    },
    'data-virtual-table': { name: 'VirtualTable', subtitle: 'One hundred thousand rows in a window' },
    'data-virtual-list': { name: 'VirtualList', subtitle: 'Twenty thousand selectable list rows' },
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
  },
  specimens: {
    'data-table': {
      name: 'Table',
      subtitle: 'Stały lub automatyczny układ, przypinanie kolumn, zmiana szerokości i akcje zbiorcze',
    },
    'data-grid': {
      name: 'DataGrid',
      subtitle: 'Uzgadnianie zapisanego widoku i reset do początkowych filtrów, kolumn i szerokości',
    },
    'data-grid-server': {
      name: 'DataGrid ze stronami serwera',
      subtitle: 'Filtrowanie i sortowanie po stronie aplikacji z całkowitą liczbą rekordów',
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
      subtitle: 'Dziesięć tysięcy zamówień, stałe klucze i rozwijane szczegóły',
    },
    'data-virtual-table': { name: 'VirtualTable', subtitle: 'Sto tysięcy wierszy w oknie widoku' },
    'data-virtual-list': { name: 'VirtualList', subtitle: 'Dwadzieścia tysięcy zaznaczalnych wierszy listy' },
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
