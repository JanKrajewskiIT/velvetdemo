import { Text } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

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
          <Text as="span" variant={item.mono ? 'code' : 'caption'} tone="secondary">
            {item.label}
          </Text>
        </li>
      )}
    </For>
  </ul>
);
