import { useI18n } from '@jankrajewskiit/i18n';
import { Button, KillSwitchButton, Stack, Text } from '@jankrajewskiit/ui';
import { createSignal, Show } from 'solid-js';

export const KillSwitchDemo = () => {
  const { ts } = useI18n();
  const [stopped, setStopped] = createSignal(false);

  return (
    <Stack align="start">
      <KillSwitchButton
        variant="button"
        active={stopped()}
        onActivate={() => setStopped(true)}
        scope="DEMO-042"
        description={ts('library.trading.workspace.stopHint')}
      />
      <Text role="status" tone="secondary">
        {ts(stopped() ? 'library.trading.workspace.stopped' : 'library.trading.workspace.ready')}
      </Text>
      <Show when={stopped()}>
        <Button variant="secondary" onClick={() => setStopped(false)}>
          {ts('library.trading.workspace.reset')}
        </Button>
      </Show>
    </Stack>
  );
};
