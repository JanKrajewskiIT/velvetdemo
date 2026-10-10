import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const dataEn = defineDictionary({
  title: 'Data',
  blurb: 'Tables, grids, lists, timelines and logs.',
  specimens: {
    'data-table': { name: 'Table', subtitle: 'Sortable, selectable rows with bulk actions' },
    'data-grid': { name: 'DataGrid', subtitle: 'Editable cells, search, filters and column manager' },
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
  specimens: {
    'data-table': { name: 'Table', subtitle: 'Sortowalne, zaznaczalne wiersze z akcjami zbiorczymi' },
    'data-grid': { name: 'DataGrid', subtitle: 'Edytowalne komórki, wyszukiwanie, filtry i menedżer kolumn' },
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
