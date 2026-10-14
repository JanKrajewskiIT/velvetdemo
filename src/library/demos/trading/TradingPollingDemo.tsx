import { TradingViewChart, type TradingViewChartPoint, useTradingViewPollingFeed } from '@jankrajewskiit/data';
import { createLightweightTradingEngine } from '@jankrajewskiit/data/tradingview';
import { useI18n } from '@jankrajewskiit/i18n';
import { Stack } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import { createOfflineTradingSequence } from './createOfflineTradingSequence';
import { TradingFeedControls } from './TradingFeedControls';
import { DEMO_SYMBOL, FEED_POINT_LIMIT, FEED_UPDATE_MS, INITIAL_INTERVAL, TRADING_INTERVALS } from './tradingSamples';

export const TradingPollingDemo = () => {
  const { ts } = useI18n();
  const [enabled, setEnabled] = createSignal(true);
  const [interval, setInterval] = createSignal<string>(INITIAL_INTERVAL);
  let failNext = false;
  let slowNext = false;
  const sequence = createOfflineTradingSequence();
  const feed = useTradingViewPollingFeed({
    context: () => ({ symbol: DEMO_SYMBOL, interval: interval() }),
    enabled,
    maxPoints: FEED_POINT_LIMIT,
    intervalMs: FEED_UPDATE_MS,
    timeoutMs: 800,
    staleAfterMs: 4500,
    retry: { maxAttempts: 3, delayMs: 600, maxDelayMs: 2400 },
    initialData: sequence.initialData,
    poll: (_context, signal) => {
      if (signal.aborted) return Promise.reject(new DOMException('Aborted', 'AbortError'));
      if (failNext) {
        failNext = false;
        return Promise.reject(new Error(ts('library.trading.controls.injectedFailure')));
      }
      if (slowNext) {
        slowNext = false;
        return new Promise<readonly TradingViewChartPoint[]>((resolve, reject) => {
          const finish = () => {
            signal.removeEventListener('abort', abort);
            resolve([sequence.next()]);
          };
          const abort = () => {
            window.clearTimeout(timer);
            signal.removeEventListener('abort', abort);
            reject(new DOMException('Aborted', 'AbortError'));
          };
          const timer = window.setTimeout(finish, 1200);
          signal.addEventListener('abort', abort, { once: true });
          if (signal.aborted) abort();
        });
      }
      return Promise.resolve([sequence.next()]);
    },
  });
  const fail = () => {
    failNext = true;
    feed.restart();
  };
  const timeout = () => {
    slowNext = true;
    feed.restart();
  };
  return (
    <Stack>
      <TradingFeedControls
        feed={feed}
        enabled={enabled()}
        onToggle={() => setEnabled((current) => !current)}
        onFail={fail}
        onTimeout={timeout}
      />
      <TradingViewChart
        symbol={DEMO_SYMBOL}
        data={feed.data()}
        createEngine={createLightweightTradingEngine}
        height={280}
        interval={interval()}
        intervals={TRADING_INTERVALS}
        onIntervalChange={setInterval}
        status={feed.status()}
        stale={feed.stale()}
        onRetry={feed.restart}
      />
    </Stack>
  );
};
