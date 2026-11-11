import { useI18n } from '@jankrajewskiit/i18n';
import { Button, type CommandGroup, CommandPalette } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import { buildCommandGroups } from './commandGroups';
import styles from './CommandPaletteDemo.module.css';

export const CommandPaletteDemo = () => {
  const { ts } = useI18n();
  const [open, setOpen] = createSignal(false);
  const [chosen, setChosen] = createSignal<string>();

  const groups = (): CommandGroup[] =>
    buildCommandGroups(ts).map((group) => ({
      ...group,
      items: group.items.map((item) => ({ ...item, onSelect: () => setChosen(item.label) })),
    }));

  const status = () => {
    const command = chosen();
    return command
      ? ts('library.menus.demos.commandPalette.ran', { command })
      : ts('library.menus.demos.commandPalette.idle');
  };

  return (
    <div class={styles.root}>
      <Button variant="secondary" iconLeft="search" onClick={() => setOpen(true)}>
        {ts('library.menus.demos.commandPalette.openButton')}
      </Button>
      <p class={styles.status} role="status">
        {status()}
      </p>
      <CommandPalette open={open()} onClose={() => setOpen(false)} groups={groups()} />
    </div>
  );
};
