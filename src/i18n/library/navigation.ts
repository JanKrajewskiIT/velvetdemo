import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const navigationEn = defineDictionary({
  title: 'Navigation',
  blurb: 'Navbar, sidebar, tabs, breadcrumbs, steppers and pagination.',
  move: {
    instructions:
      'Drag a node onto another node, or press Space, choose a destination with the arrow keys and press Enter. Escape cancels the move.',
    label: 'Move project files',
    reset: 'Reset tree',
  },
  specimens: {
    'navigation-tabs': { name: 'Tabs', subtitle: 'Underline, segmented and vertical peer views' },
    'navigation-breadcrumb-link': {
      name: 'Breadcrumb and Link',
      subtitle: 'Collapsing trails and every link variant',
    },
    'navigation-stepper': { name: 'Stepper', subtitle: 'Ordered steps: done, current, upcoming, error' },
    'navigation-paging': { name: 'Pagination and LoadMore', subtitle: 'Jump to a page, or reveal more in place' },
    'navigation-trees': {
      name: 'TreeView and HierarchyNavigator',
      subtitle: 'Lazy and checkable trees, drill-down picker',
    },
    'navigation-navbar': { name: 'Navbar', subtitle: 'Brand, links and actions; links and menubar' },
    'navigation-tree-move': {
      name: 'TreeView · moving nodes',
      subtitle: 'Drag and drop or keyboard move mode with live data updates',
    },
    'navigation-bottom-nav': { name: 'BottomNav', subtitle: 'Mobile tab bar in a phone-width frame' },
    'navigation-anchor': { name: 'Anchor and BackToTop', subtitle: 'Contents list that follows a scrolling region' },
  },
});

export const navigationPl: TranslationOf<typeof navigationEn> = {
  title: 'Nawigacja',
  blurb: 'Navbar, panel boczny, zakładki, ścieżki okruszków, kreatory krokowe i paginacja.',
  move: {
    instructions:
      'Przeciągnij węzeł na inny węzeł albo naciśnij Spację, wybierz cel strzałkami i naciśnij Enter. Escape anuluje przenoszenie.',
    label: 'Przenoszenie plików projektu',
    reset: 'Przywróć drzewo',
  },
  specimens: {
    'navigation-tabs': {
      name: 'Zakładki',
      subtitle: 'Widoki równorzędne: podkreślone, segmentowe i pionowe',
    },
    'navigation-breadcrumb-link': {
      name: 'Breadcrumb i Link',
      subtitle: 'Zwijane ścieżki i wszystkie warianty linków',
    },
    'navigation-stepper': {
      name: 'Stepper',
      subtitle: 'Uporządkowane kroki: ukończony, bieżący, nadchodzący, błąd',
    },
    'navigation-paging': {
      name: 'Pagination i LoadMore',
      subtitle: 'Przejście do strony lub wczytanie kolejnych pozycji w miejscu',
    },
    'navigation-trees': {
      name: 'TreeView i HierarchyNavigator',
      subtitle: 'Drzewa ładowane na żądanie i z polami wyboru, selektor drill-down',
    },
    'navigation-navbar': { name: 'Navbar', subtitle: 'Marka, linki i akcje; linki oraz pasek menu' },
    'navigation-tree-move': {
      name: 'TreeView · przenoszenie węzłów',
      subtitle: 'Przeciąganie lub obsługa klawiaturą z aktualizacją danych',
    },
    'navigation-bottom-nav': { name: 'BottomNav', subtitle: 'Mobilny pasek kart w ramce o szerokości telefonu' },
    'navigation-anchor': {
      name: 'Anchor i BackToTop',
      subtitle: 'Spis treści podążający za przewijanym obszarem',
    },
  },
};
