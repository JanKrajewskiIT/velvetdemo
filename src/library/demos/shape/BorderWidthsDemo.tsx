import { Text } from '@jankrajewskiit/ui';
import { createSignal, For, onMount } from 'solid-js';

import { formatPx, measureToken } from '../space/tokenValues';
import styles from './BorderWidthsDemo.module.css';

const WIDTHS = [
  { token: '--border-width', name: 'Hairline', use: 'Cards, fields and dividers' },
  { token: '--border-width-medium', name: 'Medium', use: 'Drop targets and emphasised outlines' },
  { token: '--border-width-thick', name: 'Thick', use: 'Focus rings and the active tab' },
  { token: '--border-width-accent', name: 'Accent', use: 'Strips and quotes' },
] as const;

const COLOURS = [
  { token: '--border-subtle', name: 'Subtle' },
  { token: '--border-default', name: 'Default' },
  { token: '--border-strong', name: 'Strong' },
  { token: '--border-brand', name: 'Brand' },
  { token: '--border-focus', name: 'Focus' },
] as const;

export const BorderWidthsDemo = () => {
  const [sizes, setSizes] = createSignal<readonly string[]>([]);
  onMount(() => setSizes(WIDTHS.map((width) => formatPx(measureToken(width.token)))));

  return (
    <div class={styles.root}>
      <ul class={styles.widths}>
        <For each={WIDTHS}>
          {(width, index) => (
            <li class={styles.width}>
              <span class={styles.line} style={{ '--line-width': `var(${width.token})` }} aria-hidden="true" />
              <span class={styles.name}>{width.name}</span>
              <code class={styles.token}>{width.token}</code>
              <span class={styles.size}>{sizes()[index()]}</span>
              <span class={styles.use}>{width.use}</span>
            </li>
          )}
        </For>
      </ul>
      <div class={styles.colours}>
        <Text variant="overline" tone="tertiary">
          Border colour roles
        </Text>
        <ul class={styles.swatches}>
          <For each={COLOURS}>
            {(colour) => (
              <li class={styles.swatch} style={{ '--swatch-border': `var(${colour.token})` }}>
                <span class={styles.swatchName}>{colour.name}</span>
                <code class={styles.token}>{colour.token}</code>
              </li>
            )}
          </For>
        </ul>
      </div>
    </div>
  );
};
