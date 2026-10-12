import { type TradingIndicator, type TradingViewChartPoint } from '@jankrajewskiit/data';

export const DEMO_SYMBOL = 'VELVET/USD';
export const CANDLE_COUNT = 80;
export const FEED_POINT_LIMIT = 96;
export const FEED_UPDATE_MS = 1500;
export const TRADING_INTERVALS = [
  { value: '1m', label: '1m', seconds: 60 },
  { value: '5m', label: '5m', seconds: 300 },
  { value: '1h', label: '1h', seconds: 3600 },
] as const;
export const INITIAL_INTERVAL = TRADING_INTERVALS[0].value;

const roundPrice = (value: number) => Math.round(value * 100) / 100;

export const makeTradingPoint = (start: number, step: number, index: number): TradingViewChartPoint => {
  const open = 105 + Math.sin(index / 7) * 3 + index * 0.025;
  const close = open + Math.cos(index / 3) * 0.9;
  return {
    time: start + index * step,
    open: roundPrice(open),
    close: roundPrice(close),
    high: roundPrice(Math.max(open, close) + 0.8),
    low: roundPrice(Math.min(open, close) - 0.7),
    volume: 1800 + ((index * 317) % 2400),
  };
};

export const intervalSeconds = (interval: string): number =>
  TRADING_INTERVALS.find((option) => option.value === interval)?.seconds ?? TRADING_INTERVALS[0].seconds;

export const tradingStart = (interval: string): number => {
  const today = new Date();
  const midnight = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()) / 1000;
  return midnight - CANDLE_COUNT * intervalSeconds(interval);
};

export const makeTradingPoints = (
  interval: string,
  count = CANDLE_COUNT,
  start = tradingStart(interval),
): readonly TradingViewChartPoint[] => {
  const step = intervalSeconds(interval);
  return Array.from({ length: count }, (_, index) => makeTradingPoint(start, step, index));
};

export const toggleTradingIndicator = (
  active: readonly TradingIndicator[],
  indicator: TradingIndicator,
): readonly TradingIndicator[] => {
  if (active.some((current) => current.id === indicator.id))
    return active.filter((current) => current.id !== indicator.id);
  return [...active, indicator];
};
