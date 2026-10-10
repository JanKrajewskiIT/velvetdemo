import { For } from 'solid-js';

import styles from './BackgroundsDemo.module.css';
import { ContrastValue } from './ContrastValue';

const BACKGROUNDS = [
  { token: '--bg-page', fg: '--fg-primary' },
  { token: '--bg-subtle', fg: '--fg-primary' },
  { token: '--bg-raised', fg: '--fg-primary' },
  { token: '--bg-sunken', fg: '--fg-primary' },
  { token: '--bg-overlay', fg: '--fg-primary' },
  { token: '--bg-field', fg: '--fg-primary' },
  { token: '--bg-selected', fg: '--fg-brand' },
  { token: '--bg-brand-subtle', fg: '--fg-brand' },
  { token: '--bg-brand', fg: '--on-color-fg' },
  { token: '--bg-inverse', fg: '--fg-inverse' },
  { token: '--bg-media', fg: '--on-color-fg' },
  { token: '--bg-glass', fg: '--fg-primary' },
] as const;

export const BackgroundsDemo = () => (
  <ul class={styles.grid}>
    <For each={BACKGROUNDS}>
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
