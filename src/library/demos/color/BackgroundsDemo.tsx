import { For } from 'solid-js';

import styles from './BackgroundsDemo.module.css';
import { BACKGROUND_ROLES } from './colorRoles';
import { ContrastValue } from './ContrastValue';

export const BackgroundsDemo = () => (
  <ul class={styles.grid}>
    <For each={BACKGROUND_ROLES}>
      {(item) => (
        <li class={styles.tile} style={{ '--tile-bg': `var(${item.token})`, '--tile-fg': `var(${item.fg})` }}>
          <span class={styles.sample}>Aa</span>
          <span class={styles.token}>{item.token}</span>
          <ContrastValue foreground={item.fg} background={item.token} />
        </li>
      )}
    </For>
  </ul>
);
