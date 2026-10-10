import { Button, Input, Text } from '@jankrajewskiit/ui';
import { createSignal, For, onMount } from 'solid-js';

import styles from './DensityPanel.module.css';
import { formatPx, measureToken } from './tokenValues';

const CONTROLS = [
  { size: 'xs', token: '--control-height-xs' },
  { size: 'sm', token: '--control-height-sm' },
  { size: 'md', token: '--control-height-md' },
  { size: 'lg', token: '--control-height-lg' },
] as const;

const ROWS = [
  { label: 'Row · sm', token: '--row-height-sm' },
  { label: 'Row · default', token: '--row-height' },
  { label: 'Row · lg', token: '--row-height-lg' },
] as const;

const TOKENS = [...CONTROLS, ...ROWS].map((entry) => entry.token);

export interface DensityPanelProps {
  density: 'comfortable' | 'compact';
}

export const DensityPanel = (props: DensityPanelProps) => {
  let root: HTMLElement | undefined;
  const [heights, setHeights] = createSignal<Readonly<Record<string, string>>>({});

  onMount(() => {
    const scope = root;
    if (!scope) return;
    setHeights(Object.fromEntries(TOKENS.map((token) => [token, formatPx(measureToken(token, scope))])));
  });

  const heightOf = (token: string) => heights()[token] ?? '';

  return (
    <section
      ref={(element) => {
        root = element;
      }}
      class={styles.panel}
      data-density={props.density === 'compact' ? 'compact' : undefined}
      aria-label={`${props.density} density`}
    >
      <header class={styles.header}>
        <Text variant="label">{props.density === 'compact' ? 'Compact' : 'Comfortable'}</Text>
        <code class={styles.attribute}>{props.density === 'compact' ? 'data-density="compact"' : 'default'}</code>
      </header>
      <div class={styles.controls}>
        <For each={CONTROLS}>
          {(control) => (
            <Button size={control.size} variant="secondary">
              {control.size} · {heightOf(control.token)}
            </Button>
          )}
        </For>
      </div>
      <Input aria-label="Sample field" placeholder="Field at the default size" iconLeft="search" />
      <ul class={styles.rows}>
        <For each={ROWS}>
          {(row) => (
            <li class={styles.row} style={{ '--row-size': `var(${row.token})` }}>
              <span>{row.label}</span>
              <code class={styles.token}>{row.token}</code>
              <span class={styles.height}>{heightOf(row.token)}</span>
            </li>
          )}
        </For>
      </ul>
    </section>
  );
};
