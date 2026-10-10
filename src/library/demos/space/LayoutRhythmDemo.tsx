import { Text } from '@jankrajewskiit/ui';
import { createSignal, For, onMount } from 'solid-js';

import styles from './LayoutRhythmDemo.module.css';
import { TokenBarList } from './TokenBarList';
import { readTokenValue } from './tokenValues';

const RHYTHM_TOKENS = [
  '--gutter',
  '--grid-gap-sm',
  '--grid-gap',
  '--stack-gap',
  '--content-gap',
  '--viewport-margin',
  '--section-gap',
] as const;

export const LayoutRhythmDemo = () => {
  const [columns, setColumns] = createSignal<readonly number[]>([]);

  onMount(() => {
    const count = Number.parseInt(readTokenValue('--grid-columns'), 10);
    setColumns(Array.from({ length: count }, (_, index) => index + 1));
  });

  return (
    <div class={styles.root}>
      <div class={styles.section}>
        <Text variant="overline" tone="tertiary">
          --grid-columns · --grid-gap-sm
        </Text>
        <ol class={styles.grid}>
          <For each={columns()}>
            {(column) => (
              <li class={styles.column}>
                <span>{column}</span>
              </li>
            )}
          </For>
        </ol>
      </div>
      <div class={styles.section}>
        <Text variant="overline" tone="tertiary">
          Gaps at the current viewport
        </Text>
        <TokenBarList tokens={RHYTHM_TOKENS} />
      </div>
      <Text variant="caption" tone="tertiary">
        The gutter and section gap are fluid, so their measured size changes with the viewport.
      </Text>
    </div>
  );
};
