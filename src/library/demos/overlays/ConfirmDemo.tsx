import { Button, ConfirmAction, ConfirmDialog, Stack, Text } from '@jankrajewskiit/ui';
import { createSignal, onCleanup, Show } from 'solid-js';

const REQUEST_DELAY_MS = 900;

export const ConfirmDemo = () => {
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
          Publish changes
        </Button>
        <ConfirmAction
          trigger={(open) => (
            <Button variant="secondary" size="sm" onClick={open}>
              Delete workspace
            </Button>
          )}
          tone="danger"
          requireText="Velvet"
          title="Delete workspace?"
          description="All projects and members are removed. This cannot be undone."
          confirmLabel="Delete workspace"
          onConfirm={request}
        />
        <ConfirmAction
          trigger={(open) => (
            <Button variant="secondary" size="sm" onClick={open}>
              Sync (fails)
            </Button>
          )}
          title="Sync changes?"
          confirmLabel="Sync"
          onConfirm={syncAndFail}
        />
      </Stack>
      <Text variant="caption" tone="secondary" role="status">
        <Show when={published()} fallback="Dialogs lock while the request is pending.">
          Changes published.
        </Show>
      </Text>
      <ConfirmDialog
        open={publishOpen()}
        title="Publish changes?"
        description="Everyone in the workspace will see the update."
        confirmLabel="Publish"
        onCancel={() => setPublishOpen(false)}
        onConfirm={publish}
      />
    </Stack>
  );
};
