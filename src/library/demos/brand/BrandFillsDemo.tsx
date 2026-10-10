import { BrandLogo } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import styles from './BrandFillsDemo.module.css';

const GROUNDS = [
  { token: '--bg-raised', tone: 'default' },
  { token: '--bg-brand', tone: 'inverse' },
  { token: '--bg-media', tone: 'inverse' },
] as const;

export const BrandFillsDemo = () => (
  <div class={styles.grid}>
    <For each={GROUNDS}>
      {(ground) => (
        <figure class={styles.figure}>
          <div class={styles.stage} style={{ '--ground': `var(${ground.token})` }}>
            <BrandLogo tone={ground.tone} />
            <BrandLogo brand="recron" tone={ground.tone} />
          </div>
          <figcaption class={styles.caption}>
            tone="{ground.tone}" on {ground.token}
          </figcaption>
        </figure>
      )}
    </For>
  </div>
);
