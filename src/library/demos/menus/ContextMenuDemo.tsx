import { useI18n } from '@jankrajewskiit/i18n';
import { ContextMenu, type MenuItem } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './ContextMenuDemo.module.css';

const MESSAGES = {
  initial: 'library.menus.demos.contextMenu.initialMessage',
  pasted: 'library.menus.demos.contextMenu.pasted',
  selectedAll: 'library.menus.demos.contextMenu.selectedAll',
  canvasCleared: 'library.menus.demos.contextMenu.canvasCleared',
} as const;

type ContextMessage = keyof typeof MESSAGES;

export const ContextMenuDemo = () => {
  const { ts } = useI18n();
  const [message, setMessage] = createSignal<ContextMessage>('initial');
  const [snap, setSnap] = createSignal(true);

  const items = (): MenuItem[] => [
    { label: ts('library.menus.items.paste'), icon: 'copy', shortcut: '⌘V', onSelect: () => setMessage('pasted') },
    { label: ts('library.menus.items.selectAll'), shortcut: '⌘A', onSelect: () => setMessage('selectedAll') },
    { divider: true },
    {
      label: ts('library.menus.items.snapToGrid'),
      checked: snap(),
      keepOpen: true,
      onSelect: () => setSnap(!snap()),
    },
    { divider: true },
    {
      label: ts('library.menus.items.clearCanvas'),
      icon: 'trash-2',
      danger: true,
      onSelect: () => setMessage('canvasCleared'),
    },
  ];

  return (
    <ContextMenu items={items()} class={styles.region}>
      <p class={styles.message} role="status">
        {ts(MESSAGES[message()])}
      </p>
      <p class={styles.hint}>{ts('library.menus.demos.contextMenu.keyboardHint')}</p>
    </ContextMenu>
  );
};
