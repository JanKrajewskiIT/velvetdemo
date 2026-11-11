import { useI18n } from '@jankrajewskiit/i18n';
import { Button } from '@jankrajewskiit/ui';
import { For, Show } from 'solid-js';

import { createReducedMotion } from './createReducedMotion';
import { createReplay } from './createReplay';
import { IntentSample } from './IntentSample';
import { type IntentKind, MOTION_INTENTS } from './motionIntents';
import styles from './MotionIntentsDemo.module.css';
import { MotionTokenValue } from './MotionTokenValue';

const REPLAY_HOLD_MS = 1400;

export const MotionIntentsDemo = () => {
  const { ts } = useI18n();
  const reduced = createReducedMotion();
  const { playing, replay } = createReplay(REPLAY_HOLD_MS);
  const uses: Record<IntentKind, string> = {
    press: ts('library.motion.intents.press'),
    colour: ts('library.motion.intents.colour'),
    select: ts('library.motion.intents.select'),
    resize: ts('library.motion.intents.resize'),
    chevron: ts('library.motion.intents.chevron'),
    enter: ts('library.motion.intents.enter'),
    exit: ts('library.motion.intents.exit'),
    switch: ts('library.motion.intents.switch'),
    bounce: ts('library.motion.intents.bounce'),
    pop: ts('library.motion.intents.pop'),
    lift: ts('library.motion.intents.lift'),
    slide: ts('library.motion.intents.slide'),
    travel: ts('library.motion.travel'),
    progress: ts('library.motion.intents.progress'),
  };
  return (
    <div class={styles.root}>
      <div class={styles.bar}>
        <p class={styles.note}>
          <Show when={reduced()} fallback={ts('library.motion.intentNote')}>
            {ts('library.motion.intentReduced')}
          </Show>
        </p>
        <Button size="sm" variant="secondary" iconLeft="play" disabled={reduced()} onClick={replay}>
          {ts('library.motion.replay')}
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
              <span class={styles.use}>{uses[intent.kind]}</span>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};
