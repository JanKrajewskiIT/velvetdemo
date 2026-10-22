import { useI18n } from '@jankrajewskiit/i18n';
import { Button, EnvironmentBar, Money, Stack, Text } from '@jankrajewskiit/ui';
import { createSignal, Show } from 'solid-js';

export const EnvironmentBarDemo = () => {
  const { ts } = useI18n();
  const [paused, setPaused] = createSignal(false);
  return (
    <Stack>
      <EnvironmentBar
        environment="paper"
        items={[
          { label: ts('library.finance.controls.session'), value: 'DEMO-042' },
          { label: ts('library.finance.controls.account'), value: <Money amount={100000} currency="PLN" /> },
        ]}
        connection={{
          state: paused() ? 'offline' : 'live',
          label: ts(paused() ? 'library.finance.controls.stopped' : 'library.finance.controls.connected'),
        }}
        onKill={() => setPaused(true)}
        killLabel={ts('library.finance.controls.stop')}
        killDisabled={paused()}
        actions={
          <Show when={paused()}>
            <Button size="sm" variant="secondary" onClick={() => setPaused(false)}>
              {ts('library.finance.controls.resume')}
            </Button>
          </Show>
        }
      />
      <Text tone="secondary" role="status">
        {ts(paused() ? 'library.finance.controls.stopped' : 'library.finance.controls.connected')}
      </Text>
    </Stack>
  );
};
