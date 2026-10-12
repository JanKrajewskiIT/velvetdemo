import {
  DEFAULT_TRADING_INDICATORS,
  type TradingIndicator,
  TradingViewChartData,
  TradingViewChartMetrics,
  TradingViewChartToolbar,
} from '@jankrajewskiit/data';
import { useI18n } from '@jankrajewskiit/i18n';
import { Stack } from '@jankrajewskiit/ui';
import { batch, createMemo, createSignal, Show } from 'solid-js';

import {
  CANDLE_COUNT,
  DEMO_SYMBOL,
  INITIAL_INTERVAL,
  makeTradingPoints,
  toggleTradingIndicator,
  TRADING_INTERVALS,
} from './tradingSamples';

const MIN_WINDOW_SIZE = 5;

export const TradingToolbarDemo = () => {
  const { locale, ts } = useI18n();
  const [interval, setInterval] = createSignal<string>(INITIAL_INTERVAL);
  const [volume, setVolume] = createSignal(true);
  const [active, setActive] = createSignal<readonly TradingIndicator[]>(DEFAULT_TRADING_INDICATORS);
  const [count, setCount] = createSignal(CANDLE_COUNT);
  const [offset, setOffset] = createSignal(0);
  const data = createMemo(() => makeTradingPoints(interval()));
  const start = () => Math.min(offset(), CANDLE_COUNT - count());
  const visible = createMemo(() => data().slice(start(), start() + count()));
  const fit = () =>
    batch(() => {
      setCount(CANDLE_COUNT);
      setOffset(0);
    });
  const zoom = (factor: number) =>
    setCount((current) => Math.max(MIN_WINDOW_SIZE, Math.min(CANDLE_COUNT, Math.round(current * factor))));
  const pan = (fraction: number) =>
    setOffset(Math.max(0, Math.min(CANDLE_COUNT - count(), start() + Math.round(count() * fraction))));
  const indicatorNames = () =>
    active()
      .map((indicator) => `${indicator.kind.toUpperCase()} ${indicator.period}`)
      .join(', ') || ts('library.trading.controls.none');
  const number = createMemo(() => new Intl.NumberFormat(locale()));
  const windowVolume = () => number().format(visible().reduce((total, point) => total + point.volume, 0));
  return (
    <Stack>
      <TradingViewChartToolbar
        symbol={DEMO_SYMBOL}
        interval={interval()}
        intervals={TRADING_INTERVALS}
        onIntervalChange={setInterval}
        indicators={DEFAULT_TRADING_INDICATORS}
        activeIndicators={active()}
        onIndicatorToggle={(indicator) => setActive((current) => toggleTradingIndicator(current, indicator))}
        volume={volume()}
        onVolumeToggle={() => setVolume((current) => !current)}
        onFit={fit}
        onZoom={zoom}
        onPan={pan}
      />
      <p>{ts('library.trading.controls.window', { count: visible().length })}</p>
      <p>{ts('library.trading.controls.indicators', { indicators: indicatorNames() })}</p>
      <Show when={volume()}>
        <p>{ts('library.trading.controls.volume', { value: windowVolume() })}</p>
      </Show>
      <TradingViewChartMetrics point={visible().at(-1)} />
      <TradingViewChartData data={visible()} />
    </Stack>
  );
};
