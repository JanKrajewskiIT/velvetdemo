import { useI18n } from '@jankrajewskiit/i18n';
import { type MenuItem, MenuPanel } from '@jankrajewskiit/ui';

import styles from './MenuPanelDemo.module.css';

export const MenuPanelDemo = () => {
  const { ts } = useI18n();
  const items = (): MenuItem[] => [
    { section: ts('library.menus.items.sectionDocument') },
    { label: ts('library.menus.items.rename'), icon: 'pencil', shortcut: 'F2' },
    { label: ts('library.menus.items.duplicate'), icon: 'copy', shortcut: '⌘D' },
    {
      label: ts('library.menus.items.shareLink'),
      icon: 'link',
      description: ts('library.menus.items.shareDescription'),
    },
    { divider: true },
    { label: ts('library.menus.items.grid'), checked: true },
    { label: ts('library.menus.items.rulers'), checked: false },
    { label: ts('library.menus.items.comments'), checked: true },
    { divider: true },
    { label: ts('library.menus.items.resetLayout'), icon: 'rotate-ccw' },
    { label: ts('library.menus.items.archive'), icon: 'inbox', disabled: true },
    { label: ts('library.menus.items.delete'), icon: 'trash-2', danger: true },
  ];

  return (
    <div class={styles.root}>
      <div class={styles.panel}>
        <p class={styles.caption}>{ts('library.menus.positions.start')}</p>
        {/* eslint-disable-next-line jsx-a11y/no-autofocus -- a static panel must not take focus on mount */}
        <MenuPanel items={items()} iconPosition="start" autoFocus={false} />
      </div>
      <div class={styles.panel}>
        <p class={styles.caption}>{ts('library.menus.positions.end')}</p>
        {/* eslint-disable-next-line jsx-a11y/no-autofocus -- a static panel must not take focus on mount */}
        <MenuPanel items={items()} iconPosition="end" autoFocus={false} />
      </div>
    </div>
  );
};
