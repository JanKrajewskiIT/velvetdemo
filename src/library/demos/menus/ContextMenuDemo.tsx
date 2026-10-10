import { ContextMenu, type MenuItem } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './ContextMenuDemo.module.css';

export const ContextMenuDemo = () => {
  const [message, setMessage] = createSignal('Right-click anywhere in this area');
  const [snap, setSnap] = createSignal(true);

  const items = (): MenuItem[] => [
    { label: 'Paste', icon: 'copy', shortcut: '⌘V', onSelect: () => setMessage('Pasted from clipboard') },
    { label: 'Select all', shortcut: '⌘A', onSelect: () => setMessage('Selected everything') },
    { divider: true },
    { label: 'Snap to grid', checked: snap(), keepOpen: true, onSelect: () => setSnap(!snap()) },
    { divider: true },
    { label: 'Clear canvas', icon: 'trash-2', danger: true, onSelect: () => setMessage('Canvas cleared') },
  ];

  return (
    <ContextMenu items={items()} class={styles.region}>
      <p class={styles.message} role="status">
        {message()}
      </p>
      <p class={styles.hint}>Keyboard: focus the area, then press Shift+F10 or the Menu key.</p>
    </ContextMenu>
  );
};
