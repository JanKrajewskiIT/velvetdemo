import { useI18n } from '@jankrajewskiit/i18n';
import { Button, Dialog, Input, Stack, Text } from '@jankrajewskiit/ui';
import { createSignal, For } from 'solid-js';

const SIZES = [
  { size: 'sm', label: 'library.overlays.demo.sizeSmall' },
  { size: 'md', label: 'library.overlays.demo.sizeMedium' },
  { size: 'lg', label: 'library.overlays.demo.sizeLarge' },
] as const;

type DialogSize = (typeof SIZES)[number]['size'];

export const DialogDemo = () => {
  const { ts } = useI18n();
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
              {ts(item.label)}
            </Button>
          )}
        </For>
      </Stack>
      <Text variant="caption" tone="secondary">
        {ts('library.overlays.demo.dialogHint')}
      </Text>
      <Dialog
        open={open()}
        onClose={close}
        size={size()}
        title={ts('library.overlays.demo.renameProject')}
        description={ts('library.overlays.demo.renameDescription')}
        footer={
          <>
            <Button variant="secondary" onClick={close}>
              {ts('library.overlays.demo.cancel')}
            </Button>
            <Button onClick={close}>{ts('library.overlays.demo.save')}</Button>
          </>
        }
      >
        <Input label={ts('library.overlays.demo.projectName')} defaultValue="Q3 roadmap" />
      </Dialog>
    </Stack>
  );
};
