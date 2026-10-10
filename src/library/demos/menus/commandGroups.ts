import type { CommandGroup } from '@jankrajewskiit/ui';

export const COMMAND_GROUPS: readonly CommandGroup[] = [
  {
    label: 'Suggestions',
    items: [
      { label: 'New project', icon: 'plus', shortcut: 'N', keywords: ['create'] },
      { label: 'Invite teammates', icon: 'users', keywords: ['member', 'add'] },
      { label: 'Toggle theme', icon: 'moon', shortcut: '⇧T', keywords: ['dark', 'light'] },
    ],
  },
  {
    label: 'Navigate',
    items: [
      { label: 'Dashboard', icon: 'layout-dashboard', shortcut: 'G D' },
      { label: 'Projects', icon: 'folder', shortcut: 'G P' },
      { label: 'Inbox', icon: 'inbox', shortcut: 'G I' },
      { label: 'Settings', icon: 'settings', shortcut: 'G S' },
    ],
  },
  {
    label: 'People',
    items: [
      { label: 'Anna Kowalska', icon: 'user', description: 'Owner' },
      { label: 'Marek Nowak', icon: 'user', description: 'Admin' },
    ],
  },
];
