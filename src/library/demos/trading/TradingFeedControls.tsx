import { type TradingFeedStatus, type TradingViewFeed } from '@jankrajewskiit/data';
import { useI18n } from '@jankrajewskiit/i18n';
import { Badge, Button, Stack } from '@jankrajewskiit/ui';
import { Show } from 'solid-js';

import { FEED_POINT_LIMIT } from './tradingSamples';

const statusKey = (status: TradingFeedStatus) => {
  switch (status) {
    case 'idle':
      return 'library.trading.status.idle';
    case 'pending':
      return 'library.trading.status.pending';
    case 'live':
      return 'library.trading.status.live';
    case 'error':
      return 'library.trading.status.error';
    case 'reconnecting':
      return 'library.trading.status.reconnecting';
    default: {
      const exhaustive: never = status;
      return exhaustive;
    }
  }
};

export interface TradingFeedControlsProps {
  readonly feed: TradingViewFeed;
  readonly enabled: boolean;
  readonly onToggle: () => void;
  readonly onFail: () => void;
  readonly onTimeout?: () => void;
  readonly holding?: boolean;
  readonly onHoldUpdates?: () => void;
}

export const TradingFeedControls = (props: TradingFeedControlsProps) => {
  const { ts } = useI18n();
  return (
    <Stack>
      <Stack direction="row" align="center" wrap>
        <Badge
          dot
          tone={
            props.feed.status() === 'error' ? 'danger' : props.feed.status() === 'reconnecting' ? 'warning' : 'neutral'
          }
        >
          {ts(statusKey(props.feed.status()))}
        </Badge>
        <Show when={props.feed.stale()}>
          <Badge tone="warning">{ts('library.trading.status.stale')}</Badge>
        </Show>
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
        <Show when={props.onTimeout}>
          <Button size="sm" variant="ghost" disabled={!props.enabled} onClick={() => props.onTimeout?.()}>
            {ts('library.trading.controls.timeout')}
          </Button>
        </Show>
        <Show when={props.onHoldUpdates}>
          <Button size="sm" variant="ghost" disabled={!props.enabled} onClick={() => props.onHoldUpdates?.()}>
            {ts(props.holding ? 'library.trading.controls.resumeUpdates' : 'library.trading.controls.holdUpdates')}
          </Button>
        </Show>
      </Stack>
      <p>{ts('library.trading.controls.offline')}</p>
      <p>{ts('library.trading.controls.updates', { count: props.feed.data().length, limit: FEED_POINT_LIMIT })}</p>
      <Show when={props.feed.lastUpdated()}>
        {(updatedAt) => (
          <p>{ts('library.trading.controls.lastUpdated', { time: new Date(updatedAt()).toLocaleTimeString() })}</p>
        )}
      </Show>
      <Show when={props.feed.error()}>
        {(error) => <p role="alert">{error().message || ts('library.trading.controls.injectedFailure')}</p>}
      </Show>
    </Stack>
  );
};
