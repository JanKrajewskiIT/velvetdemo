import { createSignal, onMount } from 'solid-js';

import styles from './SpaceBar.module.css';
import { formatPx, measureToken } from './tokenValues';

export interface SpaceBarProps {
  token: string;
}

export const SpaceBar = (props: SpaceBarProps) => {
  const [value, setValue] = createSignal('');
  onMount(() => setValue(formatPx(measureToken(props.token))));

  return (
    <li class={styles.row}>
      <code class={styles.token}>{props.token}</code>
      <span class={styles.track} aria-hidden="true">
        <span class={styles.bar} style={{ '--bar-size': `var(${props.token})` }} />
      </span>
      <span class={styles.value}>{value()}</span>
    </li>
  );
};
