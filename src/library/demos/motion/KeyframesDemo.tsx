import { useI18n } from '@jankrajewskiit/i18n';
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

export const KeyframesDemo = () => {
  const { ts } = useI18n();
  const KEYFRAMES: readonly SharedKeyframes[] = [
    {
      name: 'fadeIn',
      from: ts('library.motion.keyframes.fadeIn'),
      timingLabel: '--motion-base',
      className: styles.fadeIn,
    },
    {
      name: 'riseIn',
      from: ts('library.motion.keyframes.riseIn'),
      timingLabel: '--motion-enter',
      className: styles.riseIn,
    },
    {
      name: 'popIn',
      from: ts('library.motion.keyframes.popIn'),
      timingLabel: '--motion-pop',
      className: styles.popIn,
    },
    {
      name: 'sheetIn',
      from: ts('library.motion.keyframes.sheetIn'),
      timingLabel: '--motion-slide',
      className: styles.sheetIn,
    },
    {
      name: 'spin',
      from: ts('library.motion.keyframes.spin'),
      timingLabel: ts('library.motion.keyframes.loops'),
      className: styles.spin,
      repeats: true,
    },
  ];
  const reduced = createReducedMotion();
  const { mounted, restart } = createRestart();
  return (
    <div class={styles.root}>
      <div class={styles.bar}>
        <p class={styles.note}>{ts('library.motion.keyframes.note')}</p>
        <Button size="sm" variant="secondary" iconLeft="play" disabled={reduced()} onClick={restart}>
          {ts('library.motion.replay')}
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
