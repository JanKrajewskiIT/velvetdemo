import { Text } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import styles from './DataVizDemo.module.css';

const BARS = [
  { index: 1, height: '78%' },
  { index: 2, height: '54%' },
  { index: 3, height: '92%' },
  { index: 4, height: '40%' },
  { index: 5, height: '66%' },
  { index: 6, height: '30%' },
  { index: 7, height: '58%' },
  { index: 8, height: '46%' },
] as const;

const SEQUENTIAL = [1, 2, 3, 4, 5] as const;

export const DataVizDemo = () => (
  <div class={styles.root}>
    <Text variant="caption" tone="tertiary" mono>
      --dv-1 to --dv-8
    </Text>
    <ul class={styles.bars}>
      <For each={BARS}>
        {(bar) => (
          <li class={styles.bar}>
            <span class={styles.plot}>
              <span
                class={styles.fill}
                style={{ '--bar-color': `var(--dv-${bar.index})`, '--bar-height': bar.height }}
                aria-hidden="true"
              />
            </span>
            <span class={styles.index}>{bar.index}</span>
          </li>
        )}
      </For>
    </ul>
    <Text variant="caption" tone="tertiary" mono>
      --dv-seq-1 to --dv-seq-5
    </Text>
    <ul class={styles.sequence}>
      <For each={SEQUENTIAL}>
        {(step) => (
          <li class={styles.step}>
            <span class={styles.cell} style={{ '--step-color': `var(--dv-seq-${step})` }} aria-hidden="true" />
            <span class={styles.index}>{step}</span>
          </li>
        )}
      </For>
    </ul>
  </div>
);
