import { For } from 'solid-js';

import { cx } from '../../styles/cx';
import styles from './TokenSwatches.module.css';

interface TokenSwatch {
  label: string;
  token: string;
  mono?: boolean;
}

export interface TokenSwatchesProps {
  items: readonly TokenSwatch[];
}

export const TokenSwatches = (props: TokenSwatchesProps) => (
  <ul class={styles.grid}>
    <For each={props.items}>
      {(item) => (
        <li class={styles.item}>
          <i style={{ background: `var(${item.token})` }} aria-hidden="true" />
          <span class={cx(item.mono && styles.mono)}>{item.label}</span>
        </li>
      )}
    </For>
  </ul>
);
