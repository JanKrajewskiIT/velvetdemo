import { BrandLogo } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import styles from './WordmarkDemo.module.css';

const GROUNDS = [
  { token: '--bg-raised', tone: 'default' },
  { token: '--bg-brand', tone: 'inverse' },
] as const;

export const WordmarkDemo = () => (
  <div class={styles.stack}>
    <For each={GROUNDS}>
      {(ground) => (
        <div class={styles.stage} style={{ '--ground': `var(${ground.token})` }}>
          <BrandLogo variant="wordmark" size={40} glow={false} tone={ground.tone} />
        </div>
      )}
    </For>
  </div>
);
