import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const layoutEn = defineDictionary({
  title: 'Layout',
  blurb: 'Stacks, dividers, split panes and scroll areas.',
  columns: {
    weighted: 'Weighted columns · grow 2 / 1 · basis 360 / 200',
    wrapping: 'Equal columns · basis 480 · wrap when space runs out',
    main: 'Main column',
    aside: 'Aside',
    first: 'First column',
    second: 'Second column',
  },
  divider: {
    plain: 'Hairline separator',
    labelled: 'Labelled separator',
    vertical: 'Vertical separator in a row',
    before: 'Before',
    after: 'After',
    or: 'or',
  },
  specimens: {
    'layout-columns': { name: 'Columns', subtitle: 'Weighted main and aside, equal columns and responsive wrapping' },
    'layout-divider': { name: 'Divider', subtitle: 'Hairline, labelled and vertical separators' },
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
  columns: {
    weighted: 'Kolumny ważone · grow 2 / 1 · basis 360 / 200',
    wrapping: 'Równe kolumny · basis 480 · zawijanie przy braku miejsca',
    main: 'Kolumna główna',
    aside: 'Panel boczny',
    first: 'Pierwsza kolumna',
    second: 'Druga kolumna',
  },
  divider: {
    plain: 'Cienki separator',
    labelled: 'Separator z etykietą',
    vertical: 'Pionowy separator w wierszu',
    before: 'Przed',
    after: 'Po',
    or: 'lub',
  },
  specimens: {
    'layout-columns': { name: 'Columns', subtitle: 'Ważona kolumna główna i boczna, równe kolumny i zawijanie' },
    'layout-divider': { name: 'Divider', subtitle: 'Cienkie, opisane i pionowe separatory' },
    'layout-stack-grid': { name: 'Stack i Grid', subtitle: 'Stosy flex z odstępami z tokenów i responsywne siatki' },
    'layout-scroll-area': { name: 'ScrollArea', subtitle: 'Pasek przewijania z motywem i wygaszaniem krawędzi' },
    'layout-split-pane': { name: 'SplitPane', subtitle: 'Zagnieżdżone, zwijane panele zmieniane klawiaturą' },
    'layout-sidebar': { name: 'Sidebar', subtitle: 'Szkielet nawigacji zwijany do paska' },
    'layout-page-header': { name: 'PageHeader', subtitle: 'Ścieżka nawigacji, status, metadane, akcje i karty' },
    'layout-footer': { name: 'Footer', subtitle: 'Pełna stopka marketingowa i kompaktowy wiersz aplikacji' },
  },
};
