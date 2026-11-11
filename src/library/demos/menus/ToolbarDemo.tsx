import { useI18n } from '@jankrajewskiit/i18n';
import { Toolbar, type ToolbarItem } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './ToolbarDemo.module.css';

type Alignment = 'left' | 'center' | 'right';

const ALIGNMENT_KEYS = {
  left: 'library.menus.demos.toolbar.alignLeft',
  center: 'library.menus.demos.toolbar.alignCenter',
  right: 'library.menus.demos.toolbar.alignRight',
} as const satisfies Record<Alignment, string>;

export const ToolbarDemo = () => {
  const { ts } = useI18n();
  const [bold, setBold] = createSignal(true);
  const [italic, setItalic] = createSignal(false);
  const [underline, setUnderline] = createSignal(false);
  const [align, setAlign] = createSignal<Alignment>('left');

  const alignItem = (value: Alignment): ToolbarItem => ({
    label: ts(ALIGNMENT_KEYS[value]),
    icon: `align-${value}`,
    active: align() === value,
    onClick: () => setAlign(value),
  });

  const items = (): ToolbarItem[] => [
    {
      label: ts('library.menus.demos.toolbar.bold'),
      icon: 'bold',
      active: bold(),
      shortcut: '⌘B',
      onClick: () => setBold(!bold()),
    },
    {
      label: ts('library.menus.demos.toolbar.italic'),
      icon: 'italic',
      active: italic(),
      shortcut: '⌘I',
      onClick: () => setItalic(!italic()),
    },
    {
      label: ts('library.menus.demos.toolbar.underline'),
      icon: 'underline',
      active: underline(),
      shortcut: '⌘U',
      onClick: () => setUnderline(!underline()),
    },
    { label: ts('library.menus.demos.toolbar.strikethrough'), icon: 'strikethrough' },
    { divider: true },
    alignItem('left'),
    alignItem('center'),
    alignItem('right'),
    { divider: true },
    { label: ts('library.menus.demos.toolbar.bulletedList'), icon: 'list' },
    { label: ts('library.menus.demos.toolbar.numberedList'), icon: 'list-ordered' },
    { label: ts('library.menus.demos.toolbar.link'), icon: 'link' },
    { label: ts('library.menus.demos.toolbar.image'), icon: 'image' },
    { label: ts('library.menus.demos.toolbar.codeBlock'), icon: 'code', disabled: true },
  ];

  return (
    <div class={styles.root}>
      <div class={styles.block}>
        <p class={styles.caption}>{ts('library.menus.demos.toolbar.fits')}</p>
        <Toolbar label={ts('library.menus.demos.toolbar.formatting')} items={items()} />
      </div>
      <div class={styles.block}>
        <p class={styles.caption}>{ts('library.menus.demos.toolbar.narrow')}</p>
        <div class={styles.narrow}>
          <Toolbar label={ts('library.menus.demos.toolbar.formattingCompact')} items={items()} />
        </div>
      </div>
    </div>
  );
};
