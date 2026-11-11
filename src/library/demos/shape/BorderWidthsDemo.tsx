import { useI18n } from '@jankrajewskiit/i18n';
import { Text } from '@jankrajewskiit/ui';
import { createSignal, For, onMount } from 'solid-js';

import { formatPx, measureToken } from '../space/tokenValues';
import styles from './BorderWidthsDemo.module.css';

const WIDTHS = [
  {
    token: '--border-width',
    nameKey: 'library.shape.borderWidths.widths.hairline.name',
    useKey: 'library.shape.borderWidths.widths.hairline.use',
  },
  {
    token: '--border-width-medium',
    nameKey: 'library.shape.borderWidths.widths.medium.name',
    useKey: 'library.shape.borderWidths.widths.medium.use',
  },
  {
    token: '--border-width-thick',
    nameKey: 'library.shape.borderWidths.widths.thick.name',
    useKey: 'library.shape.borderWidths.widths.thick.use',
  },
  {
    token: '--border-width-accent',
    nameKey: 'library.shape.borderWidths.widths.accent.name',
    useKey: 'library.shape.borderWidths.widths.accent.use',
  },
] as const;

const COLOURS = [
  { token: '--border-subtle', nameKey: 'library.shape.borderWidths.colours.subtle' },
  { token: '--border-default', nameKey: 'library.shape.borderWidths.colours.default' },
  { token: '--border-strong', nameKey: 'library.shape.borderWidths.colours.strong' },
  { token: '--border-brand', nameKey: 'library.shape.borderWidths.colours.brand' },
  { token: '--border-focus', nameKey: 'library.shape.borderWidths.colours.focus' },
] as const;

export const BorderWidthsDemo = () => {
  const { ts } = useI18n();
  const [sizes, setSizes] = createSignal<readonly string[]>([]);
  onMount(() => setSizes(WIDTHS.map((width) => formatPx(measureToken(width.token)))));

  return (
    <div class={styles.root}>
      <ul class={styles.widths}>
        <For each={WIDTHS}>
          {(width, index) => (
            <li class={styles.width}>
              <span class={styles.line} style={{ '--line-width': `var(${width.token})` }} aria-hidden="true" />
              <span class={styles.name}>{ts(width.nameKey)}</span>
              <code class={styles.token}>{width.token}</code>
              <span class={styles.size}>{sizes()[index()]}</span>
              <span class={styles.use}>{ts(width.useKey)}</span>
            </li>
          )}
        </For>
      </ul>
      <div class={styles.colours}>
        <Text variant="overline" tone="tertiary">
          {ts('library.shape.borderWidths.colourRoles')}
        </Text>
        <ul class={styles.swatches}>
          <For each={COLOURS}>
            {(colour) => (
              <li class={styles.swatch} style={{ '--swatch-border': `var(${colour.token})` }}>
                <span class={styles.swatchName}>{ts(colour.nameKey)}</span>
                <code class={styles.token}>{colour.token}</code>
              </li>
            )}
          </For>
        </ul>
      </div>
    </div>
  );
};
