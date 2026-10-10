import { IconButton, Menu, type MenuItem } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './MenuDemo.module.css';

export const MenuDemo = () => {
  const [last, setLast] = createSignal<string>();
  const [grid, setGrid] = createSignal(true);
  const [rulers, setRulers] = createSignal(false);
  const pick = (name: string) => () => setLast(name);

  const projectItems: MenuItem[] = [
    { section: 'Project' },
    { label: 'Rename', icon: 'pencil', shortcut: 'F2', onSelect: pick('Rename') },
    { label: 'Duplicate', icon: 'copy', shortcut: '⌘D', onSelect: pick('Duplicate') },
    { label: 'Share link', icon: 'link', description: 'Anyone with the link can view', onSelect: pick('Share link') },
    { divider: true },
    { label: 'Archive', icon: 'inbox', disabled: true },
    { label: 'Delete', icon: 'trash-2', danger: true, onSelect: pick('Delete') },
  ];

  const viewItems = (): MenuItem[] => [
    { label: 'Snap to grid', checked: grid(), keepOpen: true, onSelect: () => setGrid(!grid()) },
    { label: 'Show rulers', checked: rulers(), keepOpen: true, onSelect: () => setRulers(!rulers()) },
  ];

  const rowItems: MenuItem[] = [
    { label: 'Edit', icon: 'pencil', onSelect: pick('Edit') },
    { label: 'Move to…', icon: 'folder', onSelect: pick('Move to…') },
    { divider: true },
    { label: 'Remove', icon: 'trash-2', danger: true, onSelect: pick('Remove') },
  ];

  return (
    <div class={styles.root}>
      <div class={styles.row}>
        <Menu trigger="Project" width={248} items={projectItems} />
        <Menu trigger="View" items={viewItems()} />
        <Menu
          align="end"
          items={rowItems}
          trigger={(trigger) => <IconButton {...trigger} icon="more-horizontal" label="Row actions" />}
        />
      </div>
      <p class={styles.status} role="status">
        {last() ? `Last action: ${last()}` : 'Open a menu and choose an action.'}
      </p>
    </div>
  );
};
