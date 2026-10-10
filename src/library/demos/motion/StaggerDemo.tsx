import { Button } from '@jankrajewskiit/ui';
import { For, Show } from 'solid-js';

import { createReducedMotion } from './createReducedMotion';
import { createRestart } from './createRestart';
import { MotionTokenValue } from './MotionTokenValue';
import styles from './StaggerDemo.module.css';

const ROWS = ['Inbox', 'Drafts', 'Sent', 'Archive', 'Trash'] as const;

const DISTANCES = [
  { token: '--motion-stagger', use: 'Delay between siblings' },
  { token: '--motion-rise', use: 'Entry offset' },
  { token: '--motion-nudge', use: 'Press shift' },
] as const;

const ENTER_ANIMATION = 'vui-rise-in var(--motion-enter) both';

export const StaggerDemo = () => {
  const reduced = createReducedMotion();
  const { mounted, restart } = createRestart();
  return (
    <div class={styles.root}>
      <div class={styles.bar}>
        <p class={styles.note}>Siblings enter one stagger step apart.</p>
        <Button size="sm" variant="secondary" iconLeft="play" disabled={reduced()} onClick={restart}>
          Replay
        </Button>
      </div>
      <ul class={styles.list}>
        <For each={ROWS}>
          {(row, index) => (
            <li class={styles.row}>
              <Show when={mounted()}>
                <span
                  class={styles.label}
                  style={{
                    animation: ENTER_ANIMATION,
                    'animation-delay': `calc(var(--motion-stagger) * ${index()})`,
                  }}
                >
                  {row}
                </span>
              </Show>
            </li>
          )}
        </For>
      </ul>
      <dl class={styles.tokens}>
        <For each={DISTANCES}>
          {(distance) => (
            <div class={styles.token}>
              <dt>
                <code>{distance.token}</code>
              </dt>
              <dd>
                <MotionTokenValue token={distance.token} />
                <span class={styles.use}>{distance.use}</span>
              </dd>
            </div>
          )}
        </For>
      </dl>
    </div>
  );
};
