import { MenuChip, type MenuItem, MenuPanel } from '@jankrajewskiit/ui';

import type { menusEn } from '../../i18n/library/menus';
import { cx } from '../../styles/cx';
import { CommandPaletteDemo } from '../demos/menus/CommandPaletteDemo';
import { ContextMenuDemo } from '../demos/menus/ContextMenuDemo';
import { DropdownButtonDemo } from '../demos/menus/DropdownButtonDemo';
import { MenuDemo } from '../demos/menus/MenuDemo';
import { ToolbarDemo } from '../demos/menus/ToolbarDemo';
import type { Specimen, SpecimenIdOf } from '../types';
import styles from './menus.module.css';

const ACTION_ITEMS: MenuItem[] = [
  { section: 'Document' },
  { label: 'Rename', icon: 'pencil', shortcut: 'F2' },
  { label: 'Duplicate', icon: 'copy', shortcut: '⌘D' },
  { label: 'Share link', icon: 'link', description: 'Anyone with the link can view' },
  { divider: true },
  { label: 'Archive', icon: 'inbox', disabled: true },
  { label: 'Delete', icon: 'trash-2', danger: true },
];

const CHECKABLE_ITEMS: MenuItem[] = [
  { section: 'Show' },
  { label: 'Grid', checked: true },
  { label: 'Rulers', checked: false },
  { label: 'Comments', checked: true },
  { divider: true },
  { label: 'Reset layout', icon: 'rotate-ccw' },
];

export const menuSpecimens: readonly Specimen<SpecimenIdOf<typeof menusEn>>[] = [
  {
    id: 'menus-menu',
    span: 6,
    render: () => <MenuDemo />,
  },
  {
    id: 'menus-panel',
    span: 6,
    render: () => (
      <div class={styles.grid}>
        {/* eslint-disable-next-line jsx-a11y/no-autofocus -- a static panel must not take focus on mount */}
        <MenuPanel items={ACTION_ITEMS} autoFocus={false} />
        {/* eslint-disable-next-line jsx-a11y/no-autofocus -- a static panel must not take focus on mount */}
        <MenuPanel items={CHECKABLE_ITEMS} autoFocus={false} />
      </div>
    ),
  },
  {
    id: 'menus-context-menu',
    span: 6,
    render: () => <ContextMenuDemo />,
  },
  {
    id: 'menus-dropdown-button',
    span: 6,
    render: () => (
      <div class={cx(styles.group, styles.room)}>
        <DropdownButtonDemo />
        <p class={styles.caption}>Filter chips</p>
        <div class={styles.row}>
          <MenuChip
            label="Status"
            defaultValue="open"
            options={[
              { value: 'open', label: 'Open' },
              { value: 'review', label: 'In review' },
              { value: 'closed', label: 'Closed' },
            ]}
          />
          <MenuChip label="Owner" icon="user" options={['Anna', 'Marek', 'Julia']} />
          <MenuChip label="Due" icon="calendar" options={['Today', 'This week', 'Overdue']} />
        </div>
      </div>
    ),
  },
  {
    id: 'menus-command-palette',
    span: 6,
    render: () => <CommandPaletteDemo />,
  },
  {
    id: 'menus-toolbar',
    span: 12,
    render: () => <ToolbarDemo />,
  },
];
