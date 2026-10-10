import { createSignal, For, onCleanup, onMount } from 'solid-js';

import { cx } from '../../styles/cx';
import { EASINGS } from './foundationsData';
import styles from './MotionTile.module.css';

const TOGGLE_MS = 1600;

export const MotionTile = () => {
  const [forward, setForward] = createSignal(false);

  onMount(() => {
    const timer = setInterval(() => setForward((current) => !current), TOGGLE_MS);
    onCleanup(() => clearInterval(timer));
  });

  return (
    <div class={cx(styles.tracks, forward() && styles.forward)}>
      <For each={EASINGS}>
        {(easing) => (
          <div class={styles.row}>
            <span>{easing}</span>
            <div class={styles.track}>
              <b style={{ 'transition-timing-function': `var(--ease-${easing})` }} />
            </div>
          </div>
        )}
      </For>
    </div>
  );
};
