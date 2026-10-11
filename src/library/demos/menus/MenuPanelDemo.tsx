import { useI18n } from '@jankrajewskiit/i18n';
import { type MenuItem, MenuPanel } from '@jankrajewskiit/ui';

import styles from './MenuPanelDemo.module.css';

const ITEMS: MenuItem[] = [
  { section: 'Document' },
  { label: 'Rename', icon: 'pencil', shortcut: 'F2' },
  { label: 'Duplicate', icon: 'copy', shortcut: '⌘D' },
  { label: 'Share link', icon: 'link', description: 'Anyone with the link can view' },
  { divider: true },
  { label: 'Grid', checked: true },
  { label: 'Rulers', checked: false },
  { label: 'Comments', checked: true },
  { divider: true },
  { label: 'Reset layout', icon: 'rotate-ccw' },
  { label: 'Archive', icon: 'inbox', disabled: true },
  { label: 'Delete', icon: 'trash-2', danger: true },
];

export const MenuPanelDemo = () => {
  const { ts } = useI18n();
  return (
    <div class={styles.root}>
      <div class={styles.panel}>
        <p class={styles.caption}>{ts('library.menus.positions.start')}</p>
        {/* eslint-disable-next-line jsx-a11y/no-autofocus -- a static panel must not take focus on mount */}
        <MenuPanel items={ITEMS} iconPosition="start" autoFocus={false} />
      </div>
      <div class={styles.panel}>
        <p class={styles.caption}>{ts('library.menus.positions.end')}</p>
        {/* eslint-disable-next-line jsx-a11y/no-autofocus -- a static panel must not take focus on mount */}
        <MenuPanel items={ITEMS} iconPosition="end" autoFocus={false} />
      </div>
    </div>
  );
};
