import type { useI18n } from '@jankrajewskiit/i18n';
import type {
  CascaderNode,
  EditableItem,
  SelectOption,
  SwitcherOption,
  TransferItem,
  TreeSelectNode,
} from '@jankrajewskiit/ui';

type Ts = ReturnType<typeof useI18n>['ts'];

export const COUNTRIES: readonly string[] = [
  'Poland',
  'Germany',
  'France',
  'Spain',
  'Portugal',
  'Italy',
  'Netherlands',
  'Sweden',
];

export const CITIES: readonly string[] = [
  'Amsterdam',
  'Barcelona',
  'Berlin',
  'Gdańsk',
  'Lisbon',
  'Lyon',
  'Milan',
  'Munich',
  'Stockholm',
  'Warsaw',
];

export const roleOptions = (ts: Ts): readonly SelectOption[] => [
  {
    value: 'owner',
    label: ts('library.selection.data.roles.owner.label'),
    description: ts('library.selection.data.roles.owner.description'),
    icon: 'shield',
  },
  {
    value: 'admin',
    label: ts('library.selection.data.roles.admin.label'),
    description: ts('library.selection.data.roles.admin.description'),
    icon: 'users',
  },
  {
    value: 'editor',
    label: ts('library.selection.data.roles.editor.label'),
    description: ts('library.selection.data.roles.editor.description'),
    icon: 'pencil',
  },
  {
    value: 'viewer',
    label: ts('library.selection.data.roles.viewer.label'),
    description: ts('library.selection.data.roles.viewer.description'),
    icon: 'eye',
    disabled: true,
  },
];

export const billingCycles = (ts: Ts): readonly string[] => [
  ts('library.selection.data.billing.monthly'),
  ts('library.selection.data.billing.yearly'),
];

export const regions = (ts: Ts): CascaderNode[] => [
  {
    id: 'eu',
    label: ts('library.selection.data.regions.europe'),
    children: [
      {
        id: 'pl',
        label: ts('library.selection.data.regions.poland'),
        children: [
          { id: 'waw', label: ts('library.selection.data.regions.warsaw') },
          { id: 'krk', label: ts('library.selection.data.regions.krakow') },
        ],
      },
      {
        id: 'de',
        label: ts('library.selection.data.regions.germany'),
        children: [
          { id: 'ber', label: ts('library.selection.data.regions.berlin') },
          { id: 'muc', label: ts('library.selection.data.regions.munich') },
        ],
      },
    ],
  },
  {
    id: 'na',
    label: ts('library.selection.data.regions.northAmerica'),
    children: [
      {
        id: 'us',
        label: ts('library.selection.data.regions.unitedStates'),
        children: [{ id: 'nyc', label: ts('library.selection.data.regions.newYork') }],
      },
    ],
  },
];

export const teams = (ts: Ts): TreeSelectNode[] => [
  {
    id: 'design',
    label: ts('library.selection.data.teams.design'),
    children: [
      { id: 'ui', label: ts('library.selection.data.teams.ui') },
      { id: 'ux', label: ts('library.selection.data.teams.ux') },
      { id: 'brand', label: ts('library.selection.data.teams.brand') },
    ],
  },
  {
    id: 'eng',
    label: ts('library.selection.data.teams.engineering'),
    children: [
      { id: 'web', label: ts('library.selection.data.teams.web') },
      { id: 'api', label: ts('library.selection.data.teams.platform') },
    ],
  },
  { id: 'ops', label: ts('library.selection.data.teams.operations') },
];

export const DEPARTMENTS: readonly string[] = ['Design', 'Engineering', 'Product', 'Operations'];

export const departments = (ts: Ts): readonly { value: string; label: string }[] => [
  { value: 'design', label: ts('library.selection.data.departments.design') },
  { value: 'engineering', label: ts('library.selection.data.departments.engineering') },
  { value: 'product', label: ts('library.selection.data.departments.product') },
  { value: 'operations', label: ts('library.selection.data.departments.operations') },
];

export const viewOptions = (ts: Ts): SwitcherOption[] => [
  { value: 'list', label: ts('library.selection.data.views.list'), icon: 'list' },
  { value: 'grid', label: ts('library.selection.data.views.grid'), icon: 'layout-grid' },
  { value: 'board', label: ts('library.selection.data.views.board'), icon: 'columns' },
];

const REVIEWERS = [
  'Anna Kowalska',
  'Bartek Nowak',
  'Celina Wójcik',
  'Damian Zieliński',
  'Ewa Kamińska',
  'Filip Lewandowski',
  'Gosia Mazur',
  'Hubert Krawczyk',
  'Iga Szymańska',
  'Jakub Woźniak',
];

export const searchReviewers = (query: string) =>
  new Promise<string[]>((resolve) => {
    const needle = query.trim().toLowerCase();
    setTimeout(() => resolve(REVIEWERS.filter((name) => name.toLowerCase().includes(needle))), 600);
  });

export const members = (ts: Ts): TransferItem[] => [
  {
    value: 'anna',
    label: 'Anna Kowalska',
    meta: ts('library.selection.data.seniority.lead'),
    group: ts('library.selection.data.departments.design'),
  },
  {
    value: 'marek',
    label: 'Marek Nowak',
    meta: ts('library.selection.data.seniority.senior'),
    group: ts('library.selection.data.departments.design'),
  },
  {
    value: 'ewa',
    label: 'Ewa Wiśniewska',
    meta: ts('library.selection.data.seniority.lead'),
    group: ts('library.selection.data.departments.engineering'),
  },
  {
    value: 'jan',
    label: 'Jan Zieliński',
    meta: ts('library.selection.data.seniority.senior'),
    group: ts('library.selection.data.departments.engineering'),
  },
  {
    value: 'karol',
    label: 'Karol Lewandowski',
    meta: ts('library.selection.data.seniority.mid'),
    group: ts('library.selection.data.departments.engineering'),
  },
  {
    value: 'ola',
    label: 'Ola Mazur',
    meta: ts('library.selection.data.seniority.lead'),
    group: ts('library.selection.data.departments.operations'),
  },
];

export const skillItems = (ts: Ts): EditableItem[] => [
  { id: 1, text: 'TypeScript', level: ts('library.selection.data.levels.expert'), weight: 5 },
  {
    id: 2,
    text: ts('library.selection.data.skills.designSystems'),
    level: ts('library.selection.data.levels.advanced'),
    weight: 4,
  },
  {
    id: 3,
    text: ts('library.selection.data.skills.accessibility'),
    level: ts('library.selection.data.levels.intermediate'),
    weight: 3,
  },
];

export const skillOptions = (ts: Ts): readonly { value: string; label: string }[] => [
  { value: 'figma', label: 'Figma' },
  { value: 'prototyping', label: ts('library.selection.data.skills.prototyping') },
  { value: 'css', label: 'CSS' },
  { value: 'accessibility', label: ts('library.selection.data.skills.accessibility') },
  { value: 'user-research', label: ts('library.selection.data.skills.userResearch') },
  { value: 'copywriting', label: ts('library.selection.data.skills.copywriting') },
];

export const skillLevels = (ts: Ts): readonly string[] => [
  ts('library.selection.data.levels.basic'),
  ts('library.selection.data.levels.intermediate'),
  ts('library.selection.data.levels.advanced'),
  ts('library.selection.data.levels.expert'),
];

export const REVIEW_COUNTS: readonly number[] = [2, 3, 9, 41, 88];
