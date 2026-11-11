import { useI18n } from '@jankrajewskiit/i18n';
import { Button } from '@jankrajewskiit/ui';
import { For, Show } from 'solid-js';

import { createReducedMotion } from './createReducedMotion';
import { createRestart } from './createRestart';
import { MotionTokenValue } from './MotionTokenValue';
import styles from './StaggerDemo.module.css';

const ROWS = ['Inbox', 'Drafts', 'Sent', 'Archive', 'Trash'] as const;

export const StaggerDemo = () => {
  const { ts } = useI18n();
  const DISTANCES = [
    { token: '--motion-stagger', use: ts('library.motion.stagger.delay') },
    { token: '--motion-rise', use: ts('library.motion.stagger.rise') },
    { token: '--motion-nudge', use: ts('library.motion.stagger.nudge') },
  ];
  const reduced = createReducedMotion();
  const { mounted, restart } = createRestart();
  return (
    <div class={styles.root}>
      <div class={styles.bar}>
        <p class={styles.note}>{ts('library.motion.stagger.note')}</p>
        <Button size="sm" variant="secondary" iconLeft="play" disabled={reduced()} onClick={restart}>
          {ts('library.motion.replay')}
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
