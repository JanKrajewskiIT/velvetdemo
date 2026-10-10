import { CATEGORY_TONES, Dot, Tag } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import styles from './CategoricalDemo.module.css';

export const CategoricalDemo = () => (
  <ul class={styles.grid}>
    <For each={CATEGORY_TONES}>
      {(tone) => (
        <li class={styles.item} data-tone={tone}>
          <div class={styles.tiles}>
            <span class={styles.solid}>Aa</span>
            <span class={styles.subtle}>Aa</span>
          </div>
          <div class={styles.label}>
            <Dot tone={tone} size="lg" />
            <Tag variant="soft" tone={tone} size="sm">
              {tone}
            </Tag>
          </div>
          <span class={styles.token}>--label-{tone}</span>
        </li>
      )}
    </For>
  </ul>
);
