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

export const PlaybackBar = (props: PlaybackBarProps) => (
  <div class={styles.bar}>
    <Segmented size="sm" role="radiogroup" aria-label="Slow-motion factor">
      <For each={PLAYBACK_SPEEDS}>
        {(speed) => (
          <SegmentedItem role="radio" selected={speed === props.speed} onClick={() => props.onSpeed(speed)}>
            {`${speed}×`}
          </SegmentedItem>
        )}
      </For>
    </Segmented>
    <Show when={props.reduced}>
      <span class={styles.note}>Reduced motion is on. Tracks rest at their end state.</span>
    </Show>
    <Button size="sm" variant="secondary" iconLeft="play" disabled={props.reduced} onClick={props.onReplay}>
      Replay
    </Button>
  </div>
);
