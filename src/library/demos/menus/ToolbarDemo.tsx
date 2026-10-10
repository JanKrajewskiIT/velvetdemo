import { Toolbar, type ToolbarItem } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './ToolbarDemo.module.css';

type Alignment = 'left' | 'center' | 'right';

export const ToolbarDemo = () => {
  const [bold, setBold] = createSignal(true);
  const [italic, setItalic] = createSignal(false);
  const [underline, setUnderline] = createSignal(false);
  const [align, setAlign] = createSignal<Alignment>('left');

  const alignItem = (value: Alignment): ToolbarItem => ({
    label: `Align ${value}`,
    icon: `align-${value}`,
    active: align() === value,
    onClick: () => setAlign(value),
  });

  const items = (): ToolbarItem[] => [
    { label: 'Bold', icon: 'bold', active: bold(), shortcut: '⌘B', onClick: () => setBold(!bold()) },
    { label: 'Italic', icon: 'italic', active: italic(), shortcut: '⌘I', onClick: () => setItalic(!italic()) },
    {
      label: 'Underline',
      icon: 'underline',
      active: underline(),
      shortcut: '⌘U',
      onClick: () => setUnderline(!underline()),
    },
    { label: 'Strikethrough', icon: 'strikethrough' },
    { divider: true },
    alignItem('left'),
    alignItem('center'),
    alignItem('right'),
    { divider: true },
    { label: 'Bulleted list', icon: 'list' },
    { label: 'Numbered list', icon: 'list-ordered' },
    { label: 'Link', icon: 'link' },
    { label: 'Image', icon: 'image' },
    { label: 'Code block', icon: 'code', disabled: true },
  ];

  return (
    <div class={styles.root}>
      <div class={styles.block}>
        <p class={styles.caption}>Everything fits</p>
        <Toolbar label="Formatting" items={items()} />
      </div>
      <div class={styles.block}>
        <p class={styles.caption}>Narrow: the rest moves into an overflow menu</p>
        <div class={styles.narrow}>
          <Toolbar label="Formatting, compact" items={items()} />
        </div>
      </div>
    </div>
  );
};
