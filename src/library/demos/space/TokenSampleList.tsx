import { createSignal, For, onMount } from 'solid-js';

import { measure, type Measured } from './TokenBarList';
import styles from './TokenSampleList.module.css';

type TokenSampleShape = 'square' | 'circle' | 'dashed' | 'tile' | 'control' | 'row' | 'halo';

export interface TokenSampleItem {
  token: string;
  shape: TokenSampleShape;
}

export interface TokenSampleListProps {
  items: readonly TokenSampleItem[];
}

const SHAPE_CLASS: Record<TokenSampleShape, string | undefined> = {
  square: styles.square,
  circle: styles.circle,
  dashed: styles.dashed,
  tile: styles.tile,
  control: styles.control,
  row: styles.row,
  halo: styles.halo,
};

export const TokenSampleList = (props: TokenSampleListProps) => {
  const [rows, setRows] = createSignal<readonly Measured[]>([]);
  onMount(() => setRows(props.items.map((item) => measure(item.token))));

  return (
    <ul class={styles.list}>
      <For each={props.items}>
        {(item, index) => (
          <li class={styles.item}>
            <code class={styles.token}>{item.token}</code>
            <span class={styles.stage} aria-hidden="true">
              <span
                class={[styles.sample, SHAPE_CLASS[item.shape]].join(' ')}
                style={{ '--sample-size': `var(${item.token})`, '--sample-ring': `var(${item.token})` }}
              />
            </span>
            <span class={styles.value}>{rows()[index()]?.label ?? ''}</span>
          </li>
        )}
      </For>
    </ul>
  );
};
