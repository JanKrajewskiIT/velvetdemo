import type { TranslationOf } from '@jankrajewskiit/i18n';

import type { actionsEn } from './actions';
import type { atomsEn } from './atoms';
import type { dataEn } from './data';
import type { dataVizEn } from './data-viz';
import type { displayEn } from './display';
import type { feedbackEn } from './feedback';
import type { financeEn } from './finance';
import type { formsEn } from './forms';
import type { iconsEn } from './icons';
import type { inputsEn } from './inputs';
import type { layoutEn } from './layout';
import type { menusEn } from './menus';
import type { metricsEn } from './metrics';
import type { navigationEn } from './navigation';
import type { overlaysEn } from './overlays';
import type { overviewEn } from './overview';
import type { patternsEn } from './patterns';
import type { planningEn } from './planning';
import type { selectionEn } from './selection';
import type { tradingEn } from './trading';

interface CatalogueSources {
  atoms: TranslationOf<typeof atomsEn>;
  data: TranslationOf<typeof dataEn>;
  dataViz: TranslationOf<typeof dataVizEn>;
  display: TranslationOf<typeof displayEn>;
  feedback: TranslationOf<typeof feedbackEn>;
  finance: TranslationOf<typeof financeEn>;
  forms: TranslationOf<typeof formsEn>;
  icons: TranslationOf<typeof iconsEn>;
  inputs: TranslationOf<typeof inputsEn>;
  layout: TranslationOf<typeof layoutEn>;
  menus: TranslationOf<typeof menusEn>;
  navigation: TranslationOf<typeof navigationEn>;
  overlays: TranslationOf<typeof overlaysEn>;
  overview: TranslationOf<typeof overviewEn>;
  patterns: TranslationOf<typeof patternsEn>;
  planning: TranslationOf<typeof planningEn>;
  selection: TranslationOf<typeof selectionEn>;
  trading: TranslationOf<typeof tradingEn>;
  actions: TranslationOf<typeof actionsEn>;
  progress: { title: string; blurb: string };
  wayfinding: { title: string; blurb: string };
  metrics: TranslationOf<typeof metricsEn>;
}

export const arrangeCatalogue = <const T extends CatalogueSources>(source: T) => {
  const {
    'display-badge': badge,
    'display-tag': tag,
    'display-avatar': avatar,
    'display-kbd': kbd,
    'display-icons': icons,
    'display-markdown-editor': markdownEditor,
    ...display
  } = source.display.specimens;
  const {
    'feedback-progress': progress,
    'feedback-loading': loading,
    'feedback-skeleton': skeleton,
    'feedback-loaders': loaders,
    'feedback-countdown': countdown,
    'feedback-setup-checklist': checklist,
    'feedback-gate-list': gates,
    ...feedback
  } = source.feedback.specimens;
  const {
    'navigation-navbar': navbar,
    'navigation-navbar-chip': navbarChip,
    'navigation-bottom-nav': bottomNav,
    ...wayfinding
  } = source.navigation.specimens;
  const {
    'layout-sidebar': sidebar,
    'layout-page-header': pageHeader,
    'layout-footer': footer,
    ...layout
  } = source.layout.specimens;
  const {
    'data-metric-group': metricGroup,
    'data-usage-meter': usageMeter,
    'data-accordion': accordion,
    'data-code-snippet': codeSnippet,
    ...data
  } = source.data.specimens;
  const { 'data-viz-comparison': comparison, ...charts } = source.dataViz.specimens;
  const {
    'patterns-filters': filters,
    'patterns-dialogs': dialogs,
    'patterns-file-url-import': fileUrlImport,
    'patterns-calendar-organizer': calendarOrganizer,
    ...patterns
  } = source.patterns.specimens;
  const { 'atoms-column-resize': columnResize, ...atoms } = source.atoms.specimens;
  const { 'menus-toolbar': toolbar, ...menus } = source.menus.specimens;
  const { 'selection-editable': editableCollection, ...selection } = source.selection.specimens;

  return {
    ...source,
    atoms: {
      ...source.atoms,
      specimens: {
        ...atoms,
        'display-avatar': avatar,
        'display-badge': badge,
        'display-tag': tag,
        'display-kbd': kbd,
        'feedback-skeleton': skeleton,
        ...source.overview.specimens,
      },
    },
    icons: { ...source.icons, specimens: { ...source.icons.specimens, 'display-icons': icons } },
    layout: { ...source.layout, specimens: layout },
    display: {
      ...source.display,
      specimens: {
        'data-accordion': accordion,
        'instrument-label': source.finance.specimens['instrument-label'],
        'data-code-snippet': codeSnippet,
        'feedback-countdown': countdown,
        'direction-badge': source.finance.specimens['direction-badge'],
        ...display,
        'news-item': source.finance.specimens['news-item'],
      },
    },
    feedback: {
      ...source.feedback,
      specimens: {
        ...feedback,
        'data-state': source.finance.specimens['data-state'],
        'environment-bar': source.finance.specimens['environment-bar'],
      },
    },
    progress: {
      ...source.progress,
      specimens: {
        'feedback-gate-list': gates,
        'feedback-loaders': loaders,
        'feedback-loading': loading,
        'feedback-progress': progress,
        'feedback-setup-checklist': checklist,
      },
    },
    actions: { ...source.actions, specimens: { ...source.actions.specimens, 'menus-toolbar': toolbar } },
    inputs: { ...source.inputs, specimens: { ...source.inputs.specimens, 'display-markdown-editor': markdownEditor } },
    selection: { ...source.selection, specimens: selection },
    forms: {
      ...source.forms,
      specimens: { 'selection-editable': editableCollection, ...source.forms.specimens },
    },
    overlays: {
      ...source.overlays,
      specimens: {
        ...source.overlays.specimens,
        'patterns-dialogs': dialogs,
        'patterns-file-url-import': fileUrlImport,
      },
    },
    menus: { ...source.menus, specimens: menus },
    navigation: {
      ...source.navigation,
      specimens: {
        'navigation-navbar': navbar,
        'navigation-navbar-chip': navbarChip,
        'navigation-bottom-nav': bottomNav,
        'layout-sidebar': sidebar,
        'layout-page-header': pageHeader,
        'layout-footer': footer,
      },
    },
    wayfinding: { ...source.wayfinding, specimens: wayfinding },
    charts: {
      ...source.dataViz,
      specimens: { ...charts, 'range-band-chart': source.finance.specimens['range-band-chart'] },
    },
    metrics: {
      ...source.metrics,
      specimens: {
        ...source.metrics.specimens,
        'data-viz-comparison': comparison,
        'contribution-bar': source.finance.specimens['contribution-bar'],
        'price-change': source.finance.specimens['price-change'],
        'data-metric-group': metricGroup,
        money: source.finance.specimens.money,
        'money-privacy': source.finance.specimens['money-privacy'],
        'data-usage-meter': usageMeter,
        'value-shift': source.finance.specimens['value-shift'],
      },
    },
    data: { ...source.data, specimens: { 'atoms-column-resize': columnResize, ...data, 'patterns-filters': filters } },
    planning: {
      ...source.planning,
      specimens: { 'patterns-calendar-organizer': calendarOrganizer, ...source.planning.specimens },
    },
    patterns: { ...source.patterns, specimens: patterns },
  };
};
