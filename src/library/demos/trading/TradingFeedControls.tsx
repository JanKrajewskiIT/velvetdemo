import { type TradingViewFeed } from '@jankrajewskiit/data';
import { useI18n } from '@jankrajewskiit/i18n';
import { Badge, Button, Stack } from '@jankrajewskiit/ui';
import { Show } from 'solid-js';

import { FEED_POINT_LIMIT } from './tradingSamples';

const STATUS_KEYS = {
  idle: 'library.trading.status.idle',
  pending: 'library.trading.status.pending',
  live: 'library.trading.status.live',
  error: 'library.trading.status.error',
} as const;

export interface TradingFeedControlsProps {
  readonly feed: TradingViewFeed;
  readonly enabled: boolean;
  readonly onToggle: () => void;
  readonly onFail: () => void;
}

export const TradingFeedControls = (props: TradingFeedControlsProps) => {
  const { ts } = useI18n();
  return (
    <Stack>
      <Stack direction="row" align="center" wrap>
        <Badge dot tone={props.feed.status() === 'error' ? 'danger' : 'neutral'}>
          {ts(STATUS_KEYS[props.feed.status()])}
        </Badge>
        <Button size="sm" variant="secondary" onClick={props.onToggle}>
          <Show when={props.enabled} fallback={ts('library.trading.controls.resume')}>
            {ts('library.trading.controls.pause')}
          </Show>
        </Button>
        <Button size="sm" variant="secondary" disabled={!props.enabled} onClick={props.feed.restart}>
          {ts('library.trading.controls.restart')}
        </Button>
        <Button size="sm" variant="ghost" disabled={!props.enabled} onClick={props.onFail}>
          {ts('library.trading.controls.fail')}
        </Button>
      </Stack>
      <p>{ts('library.trading.controls.offline')}</p>
      <p>{ts('library.trading.controls.updates', { count: props.feed.data().length, limit: FEED_POINT_LIMIT })}</p>
      <Show when={props.feed.error()}>
        <p role="alert">{ts('library.trading.controls.injectedFailure')}</p>
      </Show>
    </Stack>
  );
};
