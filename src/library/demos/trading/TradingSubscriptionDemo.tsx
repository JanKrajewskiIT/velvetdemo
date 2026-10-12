import { TradingViewChart, useTradingViewWsFeed } from '@jankrajewskiit/data';
import { createLightweightTradingEngine } from '@jankrajewskiit/data/tradingview';
import { useI18n } from '@jankrajewskiit/i18n';
import { Stack } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import { createOfflineTradingSequence } from './createOfflineTradingSequence';
import { TradingFeedControls } from './TradingFeedControls';
import { DEMO_SYMBOL, FEED_POINT_LIMIT, FEED_UPDATE_MS, INITIAL_INTERVAL, TRADING_INTERVALS } from './tradingSamples';

export const TradingSubscriptionDemo = () => {
  const { ts } = useI18n();
  const [enabled, setEnabled] = createSignal(true);
  const [interval, setChartInterval] = createSignal<string>(INITIAL_INTERVAL);
  let failNext = false;
  const sequence = createOfflineTradingSequence();
  const feed = useTradingViewWsFeed({
    context: () => ({ symbol: DEMO_SYMBOL, interval: interval() }),
    enabled,
    maxPoints: FEED_POINT_LIMIT,
    initialData: sequence.initialData,
    subscribe: ({ signal, onData, onOpen, onError }) => {
      const stop = () => {
        window.clearInterval(timer);
        signal.removeEventListener('abort', stop);
      };
      const timer = window.setInterval(() => {
        if (signal.aborted) return;
        if (failNext) {
          failNext = false;
          stop();
          onError(new Error(ts('library.trading.controls.injectedFailure')));
          return;
        }
        onData([sequence.next()]);
      }, FEED_UPDATE_MS);
      signal.addEventListener('abort', stop, { once: true });
      onOpen();
      return stop;
    },
  });
  const fail = () => {
    failNext = true;
    feed.restart();
  };
  return (
    <Stack>
      <TradingFeedControls
        feed={feed}
        enabled={enabled()}
        onToggle={() => setEnabled((current) => !current)}
        onFail={fail}
      />
      <TradingViewChart
        symbol={DEMO_SYMBOL}
        data={feed.data()}
        createEngine={createLightweightTradingEngine}
        height={280}
        interval={interval()}
        intervals={TRADING_INTERVALS}
        onIntervalChange={setChartInterval}
        status={feed.status()}
        onRetry={feed.restart}
      />
    </Stack>
  );
};
