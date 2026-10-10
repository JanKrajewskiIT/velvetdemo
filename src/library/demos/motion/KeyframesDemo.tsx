import { Button } from '@jankrajewskiit/ui';
import { For, Show } from 'solid-js';

import { createReducedMotion } from './createReducedMotion';
import { createRestart } from './createRestart';
import styles from './KeyframesDemo.module.css';

interface SharedKeyframes {
  name: string;
  from: string;
  timing: string;
  timingLabel: string;
  repeats?: boolean;
}

const KEYFRAMES: readonly SharedKeyframes[] = [
  { name: 'vui-fade-in', from: 'From opacity 0', timing: 'var(--motion-base)', timingLabel: '--motion-base' },
  {
    name: 'vui-rise-in',
    from: 'From opacity 0, 4px above',
    timing: 'var(--motion-enter)',
    timingLabel: '--motion-enter',
  },
  {
    name: 'vui-pop-in',
    from: 'From opacity 0, scale 60%',
    timing: 'var(--motion-pop)',
    timingLabel: '--motion-pop',
  },
  {
    name: 'vui-sheet-in',
    from: 'From one height below',
    timing: 'var(--motion-slide)',
    timingLabel: '--motion-slide',
  },
  {
    name: 'vui-spin',
    from: 'To a full turn',
    timing: '700ms linear infinite',
    timingLabel: 'loops, linear',
    repeats: true,
  },
];

export const KeyframesDemo = () => {
  const reduced = createReducedMotion();
  const { mounted, restart } = createRestart();
  return (
    <div class={styles.root}>
      <div class={styles.bar}>
        <p class={styles.note}>Defined once in the base layer and shared by every component.</p>
        <Button size="sm" variant="secondary" iconLeft="play" disabled={reduced()} onClick={restart}>
          Replay
        </Button>
      </div>
      <ul class={styles.grid}>
        <For each={KEYFRAMES}>
          {(keyframes) => (
            <li class={styles.item}>
              <div class={styles.well}>
                <Show when={mounted()}>
                  <span
                    class={styles.sample}
                    data-kind={keyframes.repeats ? 'ring' : 'tile'}
                    style={{ animation: `${keyframes.name} ${keyframes.timing} both` }}
                    aria-hidden="true"
                  />
                </Show>
              </div>
              <code class={styles.name}>{keyframes.name}</code>
              <span class={styles.detail}>{keyframes.from}</span>
              <code class={styles.detail}>{keyframes.timingLabel}</code>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};
