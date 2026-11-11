import { useI18n } from '@jankrajewskiit/i18n';
import { Button, ConfirmAction, ConfirmDialog, Stack, Text } from '@jankrajewskiit/ui';
import { createSignal, onCleanup, Show } from 'solid-js';

const REQUEST_DELAY_MS = 900;

export const ConfirmDemo = () => {
  const { ts } = useI18n();
  const [publishOpen, setPublishOpen] = createSignal(false);
  const [published, setPublished] = createSignal(false);
  const timers = new Set<ReturnType<typeof setTimeout>>();

  onCleanup(() => {
    for (const timer of timers) clearTimeout(timer);
  });

  const request = () =>
    new Promise<void>((resolve) => {
      const timer = setTimeout(() => {
        timers.delete(timer);
        resolve();
      }, REQUEST_DELAY_MS);
      timers.add(timer);
    });

  const publish = async () => {
    await request();
    setPublished(true);
    setPublishOpen(false);
  };

  const syncAndFail = async () => {
    await request();
    throw new Error('Sync failed');
  };

  return (
    <Stack gap={3}>
      <Stack direction="row" gap={2} wrap align="center">
        <Button variant="secondary" size="sm" onClick={() => setPublishOpen(true)}>
          {ts('library.overlays.demo.publishChanges')}
        </Button>
        <ConfirmAction
          trigger={(open) => (
            <Button variant="secondary" size="sm" onClick={open}>
              {ts('library.overlays.demo.deleteWorkspace')}
            </Button>
          )}
          tone="danger"
          requireText="Velvet"
          title={ts('library.overlays.demo.deleteWorkspaceTitle')}
          description={ts('library.overlays.demo.deleteWorkspaceDescription')}
          confirmLabel={ts('library.overlays.demo.deleteWorkspace')}
          onConfirm={request}
        />
        <ConfirmAction
          trigger={(open) => (
            <Button variant="secondary" size="sm" onClick={open}>
              {ts('library.overlays.demo.syncFails')}
            </Button>
          )}
          title={ts('library.overlays.demo.syncTitle')}
          confirmLabel={ts('library.overlays.demo.sync')}
          onConfirm={syncAndFail}
        />
      </Stack>
      <Text variant="caption" tone="secondary" role="status">
        <Show when={published()} fallback={ts('library.overlays.demo.lockHint')}>
          {ts('library.overlays.demo.published')}
        </Show>
      </Text>
      <ConfirmDialog
        open={publishOpen()}
        title={ts('library.overlays.demo.publishTitle')}
        description={ts('library.overlays.demo.publishDescription')}
        confirmLabel={ts('library.overlays.demo.publish')}
        onCancel={() => setPublishOpen(false)}
        onConfirm={publish}
      />
    </Stack>
  );
};
