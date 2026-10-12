import { type TradingViewChartPoint, type TradingViewFeedContext } from '@jankrajewskiit/data';

import { CANDLE_COUNT, intervalSeconds, makeTradingPoint, makeTradingPoints, tradingStart } from './tradingSamples';

export interface OfflineTradingSequence {
  readonly initialData: (context: TradingViewFeedContext) => readonly TradingViewChartPoint[];
  readonly next: () => TradingViewChartPoint;
}

export const createOfflineTradingSequence = (): OfflineTradingSequence => {
  let index = CANDLE_COUNT;
  let start = 0;
  let step = 0;
  return {
    initialData: (context: TradingViewFeedContext) => {
      index = CANDLE_COUNT;
      start = tradingStart(context.interval);
      step = intervalSeconds(context.interval);
      return makeTradingPoints(context.interval, CANDLE_COUNT, start);
    },
    next: () => {
      const point = makeTradingPoint(start, step, index);
      index += 1;
      return point;
    },
  };
};
