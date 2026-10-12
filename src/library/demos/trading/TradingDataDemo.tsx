import { TradingViewChartData } from '@jankrajewskiit/data';
import { useI18n } from '@jankrajewskiit/i18n';
import { OptionSwitcher, Stack } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import { INITIAL_INTERVAL, makeTradingPoints } from './tradingSamples';

const ROW_COUNTS = [8, 16, 40] as const;
const ROW_OPTIONS = ROW_COUNTS.map((count) => ({ value: String(count), label: String(count) }));

export const TradingDataDemo = () => {
  const { ts } = useI18n();
  const data = makeTradingPoints(INITIAL_INTERVAL);
  const [count, setCount] = createSignal(String(ROW_COUNTS[0]));
  return (
    <Stack>
      <OptionSwitcher
        label={ts('library.trading.controls.rows')}
        options={ROW_OPTIONS}
        value={count()}
        onValueChange={setCount}
      />
      <TradingViewChartData data={data.slice(-Number(count()))} />
    </Stack>
  );
};
