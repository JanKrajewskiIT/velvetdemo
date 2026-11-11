import { useI18n } from '@jankrajewskiit/i18n';
import { Button, Segmented, SegmentedItem } from '@jankrajewskiit/ui';
import { For, Show } from 'solid-js';

import { PLAYBACK_SPEEDS, type PlaybackSpeed } from './createMotionPlayback';
import styles from './PlaybackBar.module.css';

interface PlaybackBarProps {
  speed: PlaybackSpeed;
  reduced: boolean;
  onSpeed: (speed: PlaybackSpeed) => void;
  onReplay: () => void;
}

export const PlaybackBar = (props: PlaybackBarProps) => {
  const { ts } = useI18n();
  return (
    <div class={styles.bar}>
      <Segmented size="sm" role="radiogroup" aria-label={ts('library.motion.slowMotion')}>
        <For each={PLAYBACK_SPEEDS}>
          {(speed) => (
            <SegmentedItem role="radio" selected={speed === props.speed} onClick={() => props.onSpeed(speed)}>
              {`${speed}×`}
            </SegmentedItem>
          )}
        </For>
      </Segmented>
      <Show when={props.reduced}>
        <span class={styles.note}>{ts('library.motion.trackReduced')}</span>
      </Show>
      <Button size="sm" variant="secondary" iconLeft="play" disabled={props.reduced} onClick={props.onReplay}>
        {ts('library.motion.replay')}
      </Button>
    </div>
  );
};
