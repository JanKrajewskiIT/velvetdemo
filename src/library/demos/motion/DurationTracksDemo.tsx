import { For } from 'solid-js';

import { createMotionPlayback } from './createMotionPlayback';
import styles from './DurationTracksDemo.module.css';
import { MotionTokenValue } from './MotionTokenValue';
import { MotionTrack } from './MotionTrack';
import { PlaybackBar } from './PlaybackBar';

const LONGEST_DURATION = '--dur-slower';
const DURATIONS = ['--dur-instant', '--dur-fast', '--dur-base', '--dur-slow', LONGEST_DURATION] as const;
const TRACK_EASING = '--ease-standard';

export const DurationTracksDemo = () => {
  const playback = createMotionPlayback(LONGEST_DURATION);
  return (
    <div class={styles.root}>
      <PlaybackBar
        speed={playback.speed()}
        reduced={playback.reduced()}
        onSpeed={playback.setSpeed}
        onReplay={playback.replay}
      />
      <ul class={styles.list}>
        <For each={DURATIONS}>
          {(token) => (
            <li class={styles.row}>
              <div class={styles.meta}>
                <code class={styles.token}>{token}</code>
                <MotionTokenValue token={token} />
              </div>
              <MotionTrack
                duration={token}
                easing={TRACK_EASING}
                speed={playback.speed()}
                atEnd={playback.atEnd()}
                reduced={playback.reduced()}
              />
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};
