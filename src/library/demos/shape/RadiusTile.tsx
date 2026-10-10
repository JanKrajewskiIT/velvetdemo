import { createSignal, onMount } from 'solid-js';

import { formatPx, measureToken } from '../space/tokenValues';
import styles from './RadiusTile.module.css';

const PILL_THRESHOLD_PX = 999;

export interface RadiusTileProps {
  token: string;
  use: string;
}

export const RadiusTile = (props: RadiusTileProps) => {
  const [value, setValue] = createSignal('');
  onMount(() => {
    const px = measureToken(props.token);
    setValue(px >= PILL_THRESHOLD_PX ? 'Pill' : formatPx(px));
  });

  return (
    <li class={styles.tile}>
      <span class={styles.shape} style={{ '--tile-radius': `var(${props.token})` }} aria-hidden="true" />
      <code class={styles.token}>{props.token}</code>
      <span class={styles.value}>{value()}</span>
      <span class={styles.use}>{props.use}</span>
    </li>
  );
};
