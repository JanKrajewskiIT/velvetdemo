import type {
  CascaderNode,
  EditableItem,
  SelectOption,
  SwitcherOption,
  TransferItem,
  TreeSelectNode,
} from '@jankrajewskiit/ui';

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

export const ROLE_OPTIONS: readonly SelectOption[] = [
  { value: 'owner', label: 'Owner', description: 'Full access', icon: 'shield' },
  { value: 'admin', label: 'Admin', description: 'Manage members', icon: 'users' },
  { value: 'editor', label: 'Editor', description: 'Edit content', icon: 'pencil' },
  { value: 'viewer', label: 'Viewer', description: 'Read only', icon: 'eye', disabled: true },
];

export const BILLING_CYCLES: readonly string[] = ['Monthly', 'Yearly'];

export const REGIONS: CascaderNode[] = [
  {
    id: 'eu',
    label: 'Europe',
    children: [
      {
        id: 'pl',
        label: 'Poland',
        children: [
          { id: 'waw', label: 'Warsaw' },
          { id: 'krk', label: 'Kraków' },
        ],
      },
      {
        id: 'de',
        label: 'Germany',
        children: [
          { id: 'ber', label: 'Berlin' },
          { id: 'muc', label: 'Munich' },
        ],
      },
    ],
  },
  {
    id: 'na',
    label: 'North America',
    children: [{ id: 'us', label: 'United States', children: [{ id: 'nyc', label: 'New York' }] }],
  },
];

export const TEAMS: TreeSelectNode[] = [
  {
    id: 'design',
    label: 'Design',
    children: [
      { id: 'ui', label: 'Interface' },
      { id: 'ux', label: 'Research' },
      { id: 'brand', label: 'Brand' },
    ],
  },
  {
    id: 'eng',
    label: 'Engineering',
    children: [
      { id: 'web', label: 'Web' },
      { id: 'api', label: 'Platform' },
    ],
  },
  { id: 'ops', label: 'Operations' },
];

export const DEPARTMENTS: readonly string[] = ['Design', 'Engineering', 'Product', 'Operations'];

export const VIEW_OPTIONS: SwitcherOption[] = [
  { value: 'list', label: 'List', icon: 'list' },
  { value: 'grid', label: 'Grid', icon: 'layout-grid' },
  { value: 'board', label: 'Board', icon: 'columns' },
];

export const MEMBERS: TransferItem[] = [
  { value: 'anna', label: 'Anna Kowalska', meta: 'Lead', group: 'Design' },
  { value: 'marek', label: 'Marek Nowak', meta: 'Senior', group: 'Design' },
  { value: 'ewa', label: 'Ewa Wiśniewska', meta: 'Lead', group: 'Engineering' },
  { value: 'jan', label: 'Jan Zieliński', meta: 'Senior', group: 'Engineering' },
  { value: 'karol', label: 'Karol Lewandowski', meta: 'Mid', group: 'Engineering' },
  { value: 'ola', label: 'Ola Mazur', meta: 'Lead', group: 'Operations' },
];

export const SKILLS: EditableItem[] = [
  { id: 1, text: 'TypeScript', level: 'Expert', weight: 5 },
  { id: 2, text: 'Design systems', level: 'Advanced', weight: 4 },
  { id: 3, text: 'Accessibility', level: 'Intermediate', weight: 3 },
];

export const SKILL_LEVELS: readonly string[] = ['Basic', 'Intermediate', 'Advanced', 'Expert'];

export const REVIEW_COUNTS: readonly number[] = [2, 3, 9, 41, 88];
