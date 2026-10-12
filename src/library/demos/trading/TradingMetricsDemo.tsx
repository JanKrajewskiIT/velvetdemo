import { TradingViewChartMetrics } from '@jankrajewskiit/data';
import { useI18n } from '@jankrajewskiit/i18n';
import { Button, Stack } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import { INITIAL_INTERVAL, makeTradingPoints } from './tradingSamples';

export const TradingMetricsDemo = () => {
  const { ts } = useI18n();
  const data = makeTradingPoints(INITIAL_INTERVAL);
  const [index, setIndex] = createSignal(data.length - 1);
  return (
    <Stack>
      <Stack direction="row" wrap>
        <Button
          size="sm"
          variant="secondary"
          disabled={index() === 0}
          onClick={() => setIndex((current) => current - 1)}
        >
          {ts('library.trading.controls.previous')}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          disabled={index() === data.length - 1}
          onClick={() => setIndex((current) => current + 1)}
        >
          {ts('library.trading.controls.next')}
        </Button>
      </Stack>
      <TradingViewChartMetrics point={data[index()]} />
    </Stack>
  );
};
