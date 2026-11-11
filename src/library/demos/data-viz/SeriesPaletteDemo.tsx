import { useI18n } from '@jankrajewskiit/i18n';
import { For } from 'solid-js';

import styles from './SeriesPaletteDemo.module.css';

const SERIES_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8] as const;

export const SeriesPaletteDemo = () => {
  const { ts } = useI18n();

  return (
    <div class={styles.root}>
      <ol class={styles.list} aria-label={ts('library.dataViz.demo.seriesOrder')}>
        <For each={SERIES_NUMBERS}>
          {(number) => (
            <li class={styles.item}>
              <span class={styles.swatch} style={{ '--series': `var(--dv-${number})` }} aria-hidden="true" />
              <span class={styles.name}>{ts('library.dataViz.demo.series', { number })}</span>
              <code class={styles.token}>--dv-{number}</code>
            </li>
          )}
        </For>
      </ol>
      <p class={styles.note}>{ts('library.dataViz.demo.paletteNote')}</p>
    </div>
  );
};
