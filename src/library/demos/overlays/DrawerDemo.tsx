import { useI18n } from '@jankrajewskiit/i18n';
import { Button, Dialog, Select, Stack, Switch, Text } from '@jankrajewskiit/ui';
import { createSignal, For } from 'solid-js';

const PLACEMENTS = [
  { placement: 'right', label: 'library.overlays.demo.fromRight' },
  { placement: 'left', label: 'library.overlays.demo.fromLeft' },
] as const;

type DrawerPlacement = (typeof PLACEMENTS)[number]['placement'];

export const DrawerDemo = () => {
  const { ts } = useI18n();
  const statuses = () => [
    ts('library.overlays.demo.statusAll'),
    ts('library.overlays.demo.statusOpen'),
    ts('library.overlays.demo.statusClosed'),
  ];
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
              {ts(item.label)}
            </Button>
          )}
        </For>
      </Stack>
      <Text variant="caption" tone="secondary">
        {ts('library.overlays.demo.drawerHint')}
      </Text>
      <Dialog
        open={open()}
        onClose={close}
        placement={placement()}
        title={ts('library.overlays.demo.filters')}
        description={ts('library.overlays.demo.filtersDescription')}
        footer={
          <>
            <Button variant="secondary" onClick={close}>
              {ts('library.overlays.demo.cancel')}
            </Button>
            <Button onClick={close}>{ts('library.overlays.demo.apply')}</Button>
          </>
        }
      >
        <Stack gap={4}>
          <Select
            label={ts('library.overlays.demo.status')}
            options={statuses()}
            defaultValue={ts('library.overlays.demo.statusAll')}
          />
          <Switch label={ts('library.overlays.demo.onlyMyProjects')} />
        </Stack>
      </Dialog>
    </Stack>
  );
};
