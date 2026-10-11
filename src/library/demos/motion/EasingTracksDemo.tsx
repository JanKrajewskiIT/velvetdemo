import { For } from 'solid-js';

import { createMotionPlayback } from './createMotionPlayback';
import { EasingCurve } from './EasingCurve';
import styles from './EasingTracksDemo.module.css';
import { MotionTokenValue } from './MotionTokenValue';
import { MotionTrack } from './MotionTrack';
import { PlaybackBar } from './PlaybackBar';

const TRACK_DURATION = '--dur-slow';
const EASINGS = [
  '--ease-linear',
  '--ease-standard',
  '--ease-emphasized',
  '--ease-exit',
  '--ease-spring',
  '--ease-back',
] as const;

export const EasingTracksDemo = () => {
  const playback = createMotionPlayback(TRACK_DURATION);
  return (
    <div class={styles.root}>
      <PlaybackBar
        speed={playback.speed()}
        reduced={playback.reduced()}
        onSpeed={playback.setSpeed}
        onReplay={playback.replay}
      />
      <ul class={styles.list}>
        <For each={EASINGS}>
          {(token) => (
            <li class={styles.row}>
              <EasingCurve token={token} />
              <div class={styles.body}>
                <div class={styles.meta}>
                  <code class={styles.token}>{token}</code>
                  <MotionTokenValue token={token} />
                </div>
                <MotionTrack
                  duration={TRACK_DURATION}
                  easing={token}
                  speed={playback.speed()}
                  atEnd={playback.atEnd()}
                  reduced={playback.reduced()}
                />
              </div>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};
