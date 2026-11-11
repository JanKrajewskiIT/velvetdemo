import { useI18n } from '@jankrajewskiit/i18n';
import { IconButton, Menu, type MenuItem } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './MenuDemo.module.css';

export const MenuDemo = () => {
  const { ts } = useI18n();
  const [last, setLast] = createSignal<string>();
  const [grid, setGrid] = createSignal(true);
  const [rulers, setRulers] = createSignal(false);
  const pick = (name: string) => () => setLast(name);

  const projectItems = (): MenuItem[] => [
    { section: ts('library.menus.items.sectionProject') },
    {
      label: ts('library.menus.items.rename'),
      icon: 'pencil',
      shortcut: 'F2',
      onSelect: pick(ts('library.menus.items.rename')),
    },
    {
      label: ts('library.menus.items.duplicate'),
      icon: 'copy',
      shortcut: '⌘D',
      onSelect: pick(ts('library.menus.items.duplicate')),
    },
    {
      label: ts('library.menus.items.shareLink'),
      icon: 'link',
      description: ts('library.menus.items.shareDescription'),
      onSelect: pick(ts('library.menus.items.shareLink')),
    },
    { divider: true },
    { label: ts('library.menus.items.archive'), icon: 'inbox', disabled: true },
    {
      label: ts('library.menus.items.delete'),
      icon: 'trash-2',
      danger: true,
      onSelect: pick(ts('library.menus.items.delete')),
    },
  ];

  const viewItems = (): MenuItem[] => [
    {
      label: ts('library.menus.items.snapToGrid'),
      checked: grid(),
      keepOpen: true,
      onSelect: () => setGrid(!grid()),
    },
    {
      label: ts('library.menus.items.showRulers'),
      checked: rulers(),
      keepOpen: true,
      onSelect: () => setRulers(!rulers()),
    },
    { divider: true },
    {
      label: ts('library.menus.items.resetLayout'),
      icon: 'rotate-ccw',
      onSelect: () => {
        setGrid(true);
        setRulers(false);
      },
    },
  ];

  const rowItems = (): MenuItem[] => [
    { label: ts('library.menus.items.edit'), icon: 'pencil', onSelect: pick(ts('library.menus.items.edit')) },
    { label: ts('library.menus.items.moveTo'), icon: 'folder', onSelect: pick(ts('library.menus.items.moveTo')) },
    { divider: true },
    {
      label: ts('library.menus.items.remove'),
      icon: 'trash-2',
      danger: true,
      onSelect: pick(ts('library.menus.items.remove')),
    },
  ];

  const status = () => {
    const action = last();
    return action ? ts('library.menus.demos.menu.lastAction', { action }) : ts('library.menus.demos.menu.idle');
  };

  return (
    <div class={styles.root}>
      <div class={styles.row}>
        <Menu
          trigger={ts('library.menus.positions.projectStart')}
          iconPosition="start"
          width={248}
          items={projectItems()}
        />
        <Menu
          trigger={ts('library.menus.positions.projectEnd')}
          iconPosition="end"
          width={248}
          items={projectItems()}
        />
        <Menu trigger={ts('library.menus.positions.viewEnd')} iconPosition="end" items={viewItems()} />
        <Menu
          align="end"
          items={rowItems()}
          trigger={(trigger) => (
            <IconButton {...trigger} icon="more-horizontal" label={ts('library.menus.demos.menu.rowActions')} />
          )}
        />
      </div>
      <p class={styles.status} role="status">
        {status()}
      </p>
    </div>
  );
};
