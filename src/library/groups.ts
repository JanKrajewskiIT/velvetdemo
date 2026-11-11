import type { GroupSlug } from '../i18n/library';
import { loadSpecimens } from './loadSpecimens';
import type { LibraryGroup } from './types';

const SOURCES = {
  overview: () => import('./specimens/overview').then((module) => module.overviewSpecimens),
  atoms: () => import('./specimens/atoms').then((module) => module.atomSpecimens),
  display: () => import('./specimens/display').then((module) => module.displaySpecimens),
  feedback: () => import('./specimens/feedback').then((module) => module.feedbackSpecimens),
  actions: () => import('./specimens/actions').then((module) => module.actionSpecimens),
  inputs: () => import('./specimens/inputs').then((module) => module.inputSpecimens),
  selection: () => import('./specimens/selection').then((module) => module.selectionSpecimens),
  layout: () => import('./specimens/layout').then((module) => module.layoutSpecimens),
  navigation: () => import('./specimens/navigation').then((module) => module.navigationSpecimens),
  menus: () => import('./specimens/menus').then((module) => module.menuSpecimens),
  overlays: () => import('./specimens/overlays').then((module) => module.overlaySpecimens),
  data: () => import('./specimens/data').then((module) => module.dataSpecimens),
  charts: () => import('./specimens/data-viz').then((module) => module.dataVizSpecimens),
  finance: () => import('./specimens/finance').then((module) => module.financeSpecimens),
  patterns: () => import('./specimens/patterns').then((module) => module.patternSpecimens),
  planning: () => import('./specimens/planning').then((module) => module.planningSpecimens),
};

export const LIBRARY_GROUPS: readonly LibraryGroup<GroupSlug>[] = [
  {
    number: '01',
    slug: 'brand',
    kind: 'foundation',
    load: () => import('./specimens/brand').then((module) => module.brandSpecimens),
  },
  {
    number: '02',
    slug: 'color',
    kind: 'foundation',
    load: () => import('./specimens/color').then((module) => module.colorSpecimens),
  },
  {
    number: '03',
    slug: 'type',
    kind: 'foundation',
    load: () => import('./specimens/type').then((module) => module.typeSpecimens),
  },
  {
    number: '04',
    slug: 'shape',
    kind: 'foundation',
    load: () => import('./specimens/shape').then((module) => module.shapeSpecimens),
  },
  {
    number: '05',
    slug: 'spaceLayout',
    kind: 'foundation',
    load: () => import('./specimens/space-layout').then((module) => module.spaceLayoutSpecimens),
  },
  {
    number: '06',
    slug: 'depth',
    kind: 'foundation',
    load: () => import('./specimens/depth').then((module) => module.depthSpecimens),
  },
  {
    number: '07',
    slug: 'motion',
    kind: 'foundation',
    load: () => import('./specimens/motion').then((module) => module.motionSpecimens),
  },
  {
    number: '08',
    slug: 'state',
    kind: 'foundation',
    load: () => import('./specimens/state').then((module) => module.stateSpecimens),
  },
  {
    number: '09',
    slug: 'icons',
    kind: 'foundation',
    load: () =>
      loadSpecimens('icons', [import('./specimens/icons').then((module) => module.iconSpecimens), SOURCES.display()]),
  },
  {
    number: '10',
    slug: 'atoms',
    kind: 'component',
    load: () => loadSpecimens('atoms', [SOURCES.atoms(), SOURCES.display(), SOURCES.feedback(), SOURCES.overview()]),
  },
  {
    number: '11',
    slug: 'layout',
    kind: 'component',
    load: () => loadSpecimens('layout', [SOURCES.layout()]),
  },
  {
    number: '12',
    slug: 'display',
    kind: 'component',
    load: () => loadSpecimens('display', [SOURCES.display(), SOURCES.data(), SOURCES.feedback(), SOURCES.finance()]),
  },
  {
    number: '13',
    slug: 'feedback',
    kind: 'component',
    load: () => loadSpecimens('feedback', [SOURCES.feedback(), SOURCES.finance()]),
  },
  {
    number: '14',
    slug: 'progress',
    kind: 'component',
    load: () => loadSpecimens('progress', [SOURCES.feedback()]),
  },
  {
    number: '15',
    slug: 'actions',
    kind: 'component',
    load: () => loadSpecimens('actions', [SOURCES.actions(), SOURCES.menus()]),
  },
  {
    number: '16',
    slug: 'inputs',
    kind: 'component',
    load: () => loadSpecimens('inputs', [SOURCES.inputs(), SOURCES.display()]),
  },
  {
    number: '17',
    slug: 'selection',
    kind: 'component',
    load: () => loadSpecimens('selection', [SOURCES.selection()]),
  },
  {
    number: '18',
    slug: 'pickers',
    kind: 'component',
    load: () => import('./specimens/pickers').then((module) => module.pickerSpecimens),
  },
  {
    number: '19',
    slug: 'forms',
    kind: 'component',
    load: () =>
      loadSpecimens('forms', [import('./specimens/forms').then((module) => module.formSpecimens), SOURCES.selection()]),
  },
  {
    number: '20',
    slug: 'overlays',
    kind: 'component',
    load: () => loadSpecimens('overlays', [SOURCES.overlays(), SOURCES.patterns()]),
  },
  {
    number: '21',
    slug: 'menus',
    kind: 'component',
    load: () => loadSpecimens('menus', [SOURCES.menus()]),
  },
  {
    number: '22',
    slug: 'navigation',
    kind: 'component',
    load: () => loadSpecimens('navigation', [SOURCES.navigation(), SOURCES.layout()]),
  },
  {
    number: '23',
    slug: 'wayfinding',
    kind: 'component',
    load: () => loadSpecimens('wayfinding', [SOURCES.navigation()]),
  },
  {
    number: '24',
    slug: 'cards',
    kind: 'component',
    load: () => import('./specimens/cards').then((module) => module.cardSpecimens),
  },
  {
    number: '25',
    slug: 'media',
    kind: 'component',
    load: () => import('./specimens/media').then((module) => module.mediaSpecimens),
  },
  {
    number: '26',
    slug: 'charts',
    kind: 'component',
    load: () => loadSpecimens('charts', [SOURCES.charts(), SOURCES.finance()]),
  },
  {
    number: '27',
    slug: 'metrics',
    kind: 'component',
    load: () =>
      loadSpecimens('metrics', [
        import('./specimens/metrics').then((module) => module.metricSpecimens),
        SOURCES.charts(),
        SOURCES.data(),
        SOURCES.finance(),
      ]),
  },
  {
    number: '28',
    slug: 'data',
    kind: 'component',
    load: () => loadSpecimens('data', [SOURCES.data(), SOURCES.atoms(), SOURCES.patterns()]),
  },
  {
    number: '29',
    slug: 'planning',
    kind: 'component',
    load: () => loadSpecimens('planning', [SOURCES.planning(), SOURCES.patterns()]),
  },
  {
    number: '30',
    slug: 'patterns',
    kind: 'component',
    load: () => loadSpecimens('patterns', [SOURCES.patterns()]),
  },
  {
    number: '31',
    slug: 'trading',
    kind: 'component',
    load: () => import('./specimens/trading').then((module) => module.tradingSpecimens),
  },
];
