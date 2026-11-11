import { useI18n } from '@jankrajewskiit/i18n';
import { For } from 'solid-js';

import styles from './ShadowLadderDemo.module.css';

export const ShadowLadderDemo = () => {
  const { ts } = useI18n();

  const SHADOWS = [
    { token: '--shadow-xs', use: ts('library.depth.shadows.xs') },
    { token: '--shadow-sm', use: ts('library.depth.shadows.sm') },
    { token: '--shadow-md', use: ts('library.depth.shadows.md') },
    { token: '--shadow-lg', use: ts('library.depth.shadows.lg') },
    { token: '--shadow-xl', use: ts('library.depth.shadows.xl') },
  ] as const;

  return (
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
};
