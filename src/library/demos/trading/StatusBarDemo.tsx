import { useI18n } from '@jankrajewskiit/i18n';
import { MarketSessionClock, Stack, StatusBar, StatusBarItem, Switch } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import { MARKETS } from './markets';

export const StatusBarDemo = () => {
  const { ts } = useI18n();
  const [connected, setConnected] = createSignal(true);

  return (
    <Stack>
      <Switch
        label={ts('library.trading.workspace.connection')}
        checked={connected()}
        onChange={(event) => setConnected(event.currentTarget.checked)}
      />
      <StatusBar
        start={
          <>
            <StatusBarItem tone={connected() ? 'success' : 'danger'} pulse={connected()}>
              {ts(connected() ? 'library.trading.workspace.connected' : 'library.trading.workspace.disconnected')}
            </StatusBarItem>
            <StatusBarItem mono hide="sm">
              DEMO-042
            </StatusBarItem>
          </>
        }
        end={<MarketSessionClock markets={MARKETS} hide="md" />}
      />
    </Stack>
  );
};
