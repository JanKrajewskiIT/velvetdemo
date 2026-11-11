import { useI18n } from '@jankrajewskiit/i18n';
import { BottomSheet, Button, Input, Stack, Text } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

export const BottomSheetDemo = () => {
  const { ts } = useI18n();
  const [open, setOpen] = createSignal(false);
  const close = () => setOpen(false);

  return (
    <Stack gap={3} align="flex-start">
      <Button variant="secondary" size="sm" onClick={() => setOpen(true)}>
        {ts('library.overlays.demo.shareProject')}
      </Button>
      <Text variant="caption" tone="secondary">
        {ts('library.overlays.demo.bottomSheetHint')}
      </Text>
      <BottomSheet
        open={open()}
        onClose={close}
        title={ts('library.overlays.demo.shareProject')}
        description={ts('library.overlays.demo.shareDescription')}
        footer={
          <Button block onClick={close}>
            {ts('library.overlays.demo.done')}
          </Button>
        }
      >
        <Input label={ts('library.overlays.demo.link')} readOnly defaultValue="velvet.example/p/q3-roadmap" />
      </BottomSheet>
    </Stack>
  );
};
