import { For } from 'solid-js';

import styles from './SeriesPaletteDemo.module.css';

const SERIES_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8] as const;

export const SeriesPaletteDemo = () => (
  <div class={styles.root}>
    <ol class={styles.list} aria-label="Categorical series order">
      <For each={SERIES_NUMBERS}>
        {(number) => (
          <li class={styles.item}>
            <span class={styles.swatch} style={{ '--series': `var(--dv-${number})` }} aria-hidden="true" />
            <span class={styles.name}>Series {number}</span>
            <code class={styles.token}>--dv-{number}</code>
          </li>
        )}
      </For>
    </ol>
    <p class={styles.note}>
      Charts take colour from these tokens in series order and cycle after the eighth. Each series is also named in the
      legend, tooltip and accessible label, so colour is never the only signal.
    </p>
  </div>
);
