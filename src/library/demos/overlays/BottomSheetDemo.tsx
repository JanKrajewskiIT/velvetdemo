import { BottomSheet, Button, Input, Stack, Text } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

export const BottomSheetDemo = () => {
  const [open, setOpen] = createSignal(false);
  const close = () => setOpen(false);

  return (
    <Stack gap={3} align="flex-start">
      <Button variant="secondary" size="sm" onClick={() => setOpen(true)}>
        Share project
      </Button>
      <Text variant="caption" tone="secondary">
        Drag the grabber down, press Esc or tap the backdrop to dismiss.
      </Text>
      <BottomSheet
        open={open()}
        onClose={close}
        title="Share project"
        description="Anyone with the link can view."
        footer={
          <Button block onClick={close}>
            Done
          </Button>
        }
      >
        <Input label="Link" readOnly defaultValue="velvet.example/p/q3-roadmap" />
      </BottomSheet>
    </Stack>
  );
};
