import { Button, type CommandGroup, CommandPalette } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import { COMMAND_GROUPS } from './commandGroups';
import styles from './CommandPaletteDemo.module.css';

export const CommandPaletteDemo = () => {
  const [open, setOpen] = createSignal(false);
  const [chosen, setChosen] = createSignal<string>();

  const groups = (): CommandGroup[] =>
    COMMAND_GROUPS.map((group) => ({
      ...group,
      items: group.items.map((item) => ({ ...item, onSelect: () => setChosen(item.label) })),
    }));

  return (
    <div class={styles.root}>
      <Button variant="secondary" iconLeft="search" onClick={() => setOpen(true)}>
        Open command palette
      </Button>
      <p class={styles.status} role="status">
        {chosen() ? `Ran: ${chosen()}` : 'Type to filter, arrows to move, Enter to run.'}
      </p>
      <CommandPalette open={open()} onClose={() => setOpen(false)} groups={groups()} />
    </div>
  );
};
