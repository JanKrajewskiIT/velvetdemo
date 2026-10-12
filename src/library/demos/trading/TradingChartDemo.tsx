import { DEFAULT_TRADING_INDICATORS, type TradingIndicator, TradingViewChart } from '@jankrajewskiit/data';
import { createLightweightTradingEngine } from '@jankrajewskiit/data/tradingview';
import { useI18n } from '@jankrajewskiit/i18n';
import { createMemo, createSignal } from 'solid-js';

import { DEMO_SYMBOL, INITIAL_INTERVAL, makeTradingPoints, TRADING_INTERVALS } from './tradingSamples';

export const TradingChartDemo = () => {
  const { ts } = useI18n();
  const [interval, setInterval] = createSignal<string>(INITIAL_INTERVAL);
  const [volume, setVolume] = createSignal(true);
  const [indicators, setIndicators] = createSignal<readonly TradingIndicator[]>(DEFAULT_TRADING_INDICATORS);
  const data = createMemo(() => makeTradingPoints(interval()));
  const levels = () => [
    { id: 'support', price: 102, label: ts('library.trading.controls.support') },
    { id: 'resistance', price: 111, label: ts('library.trading.controls.resistance') },
  ];
  return (
    <TradingViewChart
      symbol={DEMO_SYMBOL}
      data={data()}
      createEngine={createLightweightTradingEngine}
      height={320}
      interval={interval()}
      intervals={TRADING_INTERVALS}
      onIntervalChange={setInterval}
      volume={volume()}
      onVolumeChange={setVolume}
      indicators={indicators()}
      onIndicatorsChange={setIndicators}
      levels={levels()}
    />
  );
};
