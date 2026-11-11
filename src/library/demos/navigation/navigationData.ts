import type { useI18n } from '@jankrajewskiit/i18n';
import type { BottomNavItem, HierarchyNode, NavbarItem, StepItem, TreeNode } from '@jankrajewskiit/ui';

type T = ReturnType<typeof useI18n>['t'];

export const FILE_TREE: TreeNode[] = [
  {
    id: 'src',
    label: 'src',
    children: [
      {
        id: 'components',
        label: 'components',
        children: [
          { id: 'button', label: 'Button.tsx', meta: '2 KB' },
          { id: 'tabs', label: 'Tabs.tsx', meta: '4 KB' },
        ],
      },
      { id: 'index', label: 'index.ts', meta: '1 KB' },
    ],
  },
  { id: 'docs', label: 'docs', children: [{ id: 'readme', label: 'README.md', meta: '3 KB' }] },
  { id: 'remote', label: 'releases (loads on expand)', lazy: true },
];

export const MOVABLE_FILE_TREE = FILE_TREE.filter((node) => !node.lazy);

export const PERMISSIONS: TreeNode[] = [
  {
    id: 'reports',
    label: 'Reports',
    children: [
      { id: 'reports.read', label: 'Read' },
      { id: 'reports.export', label: 'Export' },
    ],
  },
  {
    id: 'users',
    label: 'Users',
    children: [
      { id: 'users.read', label: 'Read' },
      { id: 'users.write', label: 'Write' },
      { id: 'users.invite', label: 'Invite' },
    ],
  },
];

export const TAXONOMY: HierarchyNode[] = [
  {
    id: 'electronics',
    label: 'Electronics',
    icon: 'folder',
    children: [
      {
        id: 'phones',
        label: 'Phones',
        description: 'Smartphones and accessories',
        children: [
          { id: 'android', label: 'Android' },
          { id: 'ios', label: 'iOS' },
        ],
      },
      { id: 'laptops', label: 'Laptops' },
    ],
  },
  {
    id: 'books',
    label: 'Books',
    icon: 'bookmark',
    children: [
      { id: 'fiction', label: 'Fiction' },
      { id: 'science', label: 'Science' },
    ],
  },
];

export const NAV_ITEMS: NavbarItem[] = [
  { id: 'overview', label: 'Overview', icon: 'home' },
  { id: 'projects', label: 'Projects', icon: 'folder' },
  { id: 'reports', label: 'Reports', icon: 'bar-chart' },
  { id: 'team', label: 'Team', icon: 'users' },
];

export const bottomItems = (t: T): BottomNavItem[] => [
  { value: 'home', label: t('library.navigation.data.bottomNav.home'), icon: 'home' },
  { value: 'search', label: t('library.navigation.data.bottomNav.search'), icon: 'search' },
  { value: 'alerts', label: t('library.navigation.data.bottomNav.alerts'), icon: 'bell', badge: 3 },
  { value: 'profile', label: t('library.navigation.data.bottomNav.profile'), icon: 'user', badge: true },
];

export const STEPS: StepItem[] = [
  { label: 'Account', description: 'Your details' },
  { label: 'Company', description: 'Billing entity' },
  { label: 'Plan', description: 'Seats and tier' },
  { label: 'Review', description: 'Confirm and pay' },
];
