import { Button } from '@jankrajewskiit/ui';
import { For, Show } from 'solid-js';

import { type ClassPart, cx } from '../../../styles/cx';
import { createReducedMotion } from './createReducedMotion';
import { createRestart } from './createRestart';
import styles from './KeyframesDemo.module.css';

interface SharedKeyframes {
  name: string;
  from: string;
  timingLabel: string;
  className: ClassPart;
  repeats?: boolean;
}

const KEYFRAMES: readonly SharedKeyframes[] = [
  {
    name: 'fadeIn',
    from: 'From opacity 0',
    timingLabel: '--motion-base',
    className: styles.fadeIn,
  },
  {
    name: 'riseIn',
    from: 'From opacity 0, 4px above',
    timingLabel: '--motion-enter',
    className: styles.riseIn,
  },
  {
    name: 'popIn',
    from: 'From opacity 0, scale 60%',
    timingLabel: '--motion-pop',
    className: styles.popIn,
  },
  {
    name: 'sheetIn',
    from: 'From one height below',
    timingLabel: '--motion-slide',
    className: styles.sheetIn,
  },
  {
    name: 'spin',
    from: 'To a full turn',
    timingLabel: 'loops, linear',
    className: styles.spin,
    repeats: true,
  },
];

export const KeyframesDemo = () => {
  const reduced = createReducedMotion();
  const { mounted, restart } = createRestart();
  return (
    <div class={styles.root}>
      <div class={styles.bar}>
        <p class={styles.note}>Each keyframe is scoped to this demo&apos;s CSS module.</p>
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
                    class={cx(styles.sample, keyframes.className)}
                    data-kind={keyframes.repeats ? 'ring' : 'tile'}
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
