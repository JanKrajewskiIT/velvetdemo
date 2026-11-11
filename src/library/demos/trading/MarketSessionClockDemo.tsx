import { useI18n } from '@jankrajewskiit/i18n';
import { MarketSessionClock, Stack, Text } from '@jankrajewskiit/ui';

import { MARKETS } from './markets';

export const MarketSessionClockDemo = () => {
  const { ts } = useI18n();

  return (
    <Stack>
      <MarketSessionClock markets={MARKETS} variant="list" title={ts('library.trading.workspace.sessions')} />
      <Text variant="caption" tone="secondary">
        {ts('library.trading.workspace.clockHint')}
      </Text>
    </Stack>
  );
};
