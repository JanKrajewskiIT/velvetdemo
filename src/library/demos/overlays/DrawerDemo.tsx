import { Button, Dialog, Select, Stack, Switch, Text } from '@jankrajewskiit/ui';
import { createSignal, For } from 'solid-js';

const PLACEMENTS = [
  { placement: 'right', label: 'Right' },
  { placement: 'left', label: 'Left' },
] as const;

type DrawerPlacement = (typeof PLACEMENTS)[number]['placement'];

const STATUSES = ['All', 'Open', 'Closed'];

export const DrawerDemo = () => {
  const [open, setOpen] = createSignal(false);
  const [placement, setPlacement] = createSignal<DrawerPlacement>('right');
  const close = () => setOpen(false);
  const show = (next: DrawerPlacement) => {
    setPlacement(next);
    setOpen(true);
  };

  return (
    <Stack gap={3}>
      <Stack direction="row" gap={2} wrap>
        <For each={PLACEMENTS}>
          {(item) => (
            <Button variant="secondary" size="sm" onClick={() => show(item.placement)}>
              {item.label}
            </Button>
          )}
        </For>
      </Stack>
      <Text variant="caption" tone="secondary">
        Full-height panel that slides in from the chosen edge.
      </Text>
      <Dialog
        open={open()}
        onClose={close}
        placement={placement()}
        title="Filters"
        description="Narrow the project list."
        footer={
          <>
            <Button variant="secondary" onClick={close}>
              Cancel
            </Button>
            <Button onClick={close}>Apply</Button>
          </>
        }
      >
        <Stack gap={4}>
          <Select label="Status" options={STATUSES} defaultValue="All" />
          <Switch label="Only my projects" />
        </Stack>
      </Dialog>
    </Stack>
  );
};
