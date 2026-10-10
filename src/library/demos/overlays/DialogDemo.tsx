import { Button, Dialog, Input, Stack, Text } from '@jankrajewskiit/ui';
import { createSignal, For } from 'solid-js';

const SIZES = [
  { size: 'sm', label: 'Small' },
  { size: 'md', label: 'Medium' },
  { size: 'lg', label: 'Large' },
] as const;

type DialogSize = (typeof SIZES)[number]['size'];

export const DialogDemo = () => {
  const [open, setOpen] = createSignal(false);
  const [size, setSize] = createSignal<DialogSize>('md');
  const close = () => setOpen(false);
  const show = (next: DialogSize) => {
    setSize(next);
    setOpen(true);
  };

  return (
    <Stack gap={3}>
      <Stack direction="row" gap={2} wrap>
        <For each={SIZES}>
          {(item) => (
            <Button variant="secondary" size="sm" onClick={() => show(item.size)}>
              {item.label}
            </Button>
          )}
        </For>
      </Stack>
      <Text variant="caption" tone="secondary">
        Esc, the close button or a backdrop click dismisses.
      </Text>
      <Dialog
        open={open()}
        onClose={close}
        size={size()}
        title="Rename project"
        description="Everyone in the workspace sees the new name."
        footer={
          <>
            <Button variant="secondary" onClick={close}>
              Cancel
            </Button>
            <Button onClick={close}>Save</Button>
          </>
        }
      >
        <Input label="Project name" defaultValue="Q3 roadmap" />
      </Dialog>
    </Stack>
  );
};
