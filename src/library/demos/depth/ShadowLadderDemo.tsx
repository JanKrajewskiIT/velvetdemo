import { For } from 'solid-js';

import styles from './ShadowLadderDemo.module.css';

const SHADOWS = [
  { token: '--shadow-xs', use: 'Controls' },
  { token: '--shadow-sm', use: 'Resting cards' },
  { token: '--shadow-md', use: 'Hovered cards' },
  { token: '--shadow-lg', use: 'Raised panels, popovers' },
  { token: '--shadow-xl', use: 'Dialogs' },
] as const;

export const ShadowLadderDemo = () => (
  <ol class={styles.stage}>
    <For each={SHADOWS}>
      {(shadow) => (
        <li class={styles.item}>
          <div class={styles.surface} style={{ '--step-shadow': `var(${shadow.token})` }} />
          <code class={styles.token}>{shadow.token}</code>
          <span class={styles.use}>{shadow.use}</span>
        </li>
      )}
    </For>
  </ol>
);
