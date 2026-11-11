import type { useI18n } from '@jankrajewskiit/i18n';
import type { CommandGroup } from '@jankrajewskiit/ui';

type Ts = ReturnType<typeof useI18n>['ts'];

export const buildCommandGroups = (ts: Ts): readonly CommandGroup[] => [
  {
    label: ts('library.menus.demos.commandPalette.groupSuggestions'),
    items: [
      { label: ts('library.menus.demos.commandPalette.newProject'), icon: 'plus', shortcut: 'N', keywords: ['create'] },
      {
        label: ts('library.menus.demos.commandPalette.inviteTeammates'),
        icon: 'users',
        keywords: ['member', 'add'],
      },
      {
        label: ts('library.menus.demos.commandPalette.toggleTheme'),
        icon: 'moon',
        shortcut: '⇧T',
        keywords: ['dark', 'light'],
      },
    ],
  },
  {
    label: ts('library.menus.demos.commandPalette.groupNavigate'),
    items: [
      { label: ts('library.menus.demos.commandPalette.dashboard'), icon: 'layout-dashboard', shortcut: 'G D' },
      { label: ts('library.menus.demos.commandPalette.projects'), icon: 'folder', shortcut: 'G P' },
      { label: ts('library.menus.demos.commandPalette.inbox'), icon: 'inbox', shortcut: 'G I' },
      { label: ts('library.menus.demos.commandPalette.settings'), icon: 'settings', shortcut: 'G S' },
    ],
  },
  {
    label: ts('library.menus.demos.commandPalette.groupPeople'),
    items: [
      { label: 'Anna Kowalska', icon: 'user', description: ts('library.menus.demos.commandPalette.owner') },
      { label: 'Marek Nowak', icon: 'user', description: ts('library.menus.demos.commandPalette.admin') },
    ],
  },
];
