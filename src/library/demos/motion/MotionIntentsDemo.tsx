import { Button } from '@jankrajewskiit/ui';
import { For, Show } from 'solid-js';

import { createReducedMotion } from './createReducedMotion';
import { createReplay } from './createReplay';
import { IntentSample } from './IntentSample';
import { MOTION_INTENTS } from './motionIntents';
import styles from './MotionIntentsDemo.module.css';
import { MotionTokenValue } from './MotionTokenValue';

const REPLAY_HOLD_MS = 1400;

export const MotionIntentsDemo = () => {
  const reduced = createReducedMotion();
  const { playing, replay } = createReplay(REPLAY_HOLD_MS);
  return (
    <div class={styles.root}>
      <div class={styles.bar}>
        <p class={styles.note}>
          <Show when={reduced()} fallback="Every intent plays forward, then returns.">
            Reduced motion is on. Examples stay at rest.
          </Show>
        </p>
        <Button size="sm" variant="secondary" iconLeft="play" disabled={reduced()} onClick={replay}>
          Replay
        </Button>
      </div>
      <ul class={styles.grid}>
        <For each={MOTION_INTENTS}>
          {(intent) => (
            <li class={styles.item}>
              <div class={styles.stage}>
                <IntentSample intent={intent} playing={playing()} still={reduced()} />
              </div>
              <code class={styles.token}>{intent.token}</code>
              <MotionTokenValue token={intent.token} />
              <span class={styles.use}>{intent.use}</span>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};
