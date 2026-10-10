import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const layoutEn = defineDictionary({
  title: 'Layout',
  blurb: 'Stacks, dividers, split panes and scroll areas.',
  specimens: {
    'layout-stack-grid': { name: 'Stack and Grid', subtitle: 'Token-gap flex stacks and responsive grids' },
    'layout-scroll-area': { name: 'ScrollArea', subtitle: 'Themed scrollbar with edge fades' },
    'layout-split-pane': { name: 'SplitPane', subtitle: 'Nested, collapsible, keyboard-resizable panes' },
    'layout-sidebar': { name: 'Sidebar', subtitle: 'Navigation spine that folds to a rail' },
    'layout-page-header': { name: 'PageHeader', subtitle: 'Breadcrumb, status, meta, actions and tabs' },
    'layout-footer': { name: 'Footer', subtitle: 'Full marketing footer and compact app row' },
  },
});

export const layoutPl: TranslationOf<typeof layoutEn> = {
  title: 'Układ',
  blurb: 'Stosy, separatory, podzielone panele i obszary przewijania.',
  specimens: {
    'layout-stack-grid': { name: 'Stack i Grid', subtitle: 'Stosy flex z odstępami z tokenów i responsywne siatki' },
    'layout-scroll-area': { name: 'ScrollArea', subtitle: 'Pasek przewijania z motywem i wygaszaniem krawędzi' },
    'layout-split-pane': { name: 'SplitPane', subtitle: 'Zagnieżdżone, zwijane panele zmieniane klawiaturą' },
    'layout-sidebar': { name: 'Sidebar', subtitle: 'Szkielet nawigacji zwijany do paska' },
    'layout-page-header': { name: 'PageHeader', subtitle: 'Ścieżka nawigacji, status, metadane, akcje i karty' },
    'layout-footer': { name: 'Footer', subtitle: 'Pełna stopka marketingowa i kompaktowy wiersz aplikacji' },
  },
};
