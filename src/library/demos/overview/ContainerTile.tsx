import type { JSX } from 'solid-js';

import styles from './ContainerTile.module.css';

export interface ContainerTileProps {
  name: string;
  purpose: string;
  children: JSX.Element;
}

export const ContainerTile = (props: ContainerTileProps) => (
  <li class={styles.tile}>
    <div class={styles.live}>{props.children}</div>
    <div class={styles.copy}>
      <code class={styles.name}>{props.name}</code>
      <span class={styles.purpose}>{props.purpose}</span>
    </div>
  </li>
);
