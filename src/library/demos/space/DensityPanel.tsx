import { useI18n } from '@jankrajewskiit/i18n';
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
  { labelKey: 'library.spaceLayout.density.rows.sm', token: '--row-height-sm' },
  { labelKey: 'library.spaceLayout.density.rows.default', token: '--row-height' },
  { labelKey: 'library.spaceLayout.density.rows.lg', token: '--row-height-lg' },
] as const;

const NAME_KEYS = {
  comfortable: 'library.spaceLayout.density.names.comfortable',
  compact: 'library.spaceLayout.density.names.compact',
} as const;

const REGION_KEYS = {
  comfortable: 'library.spaceLayout.density.regions.comfortable',
  compact: 'library.spaceLayout.density.regions.compact',
} as const;

const TOKENS = [...CONTROLS, ...ROWS].map((entry) => entry.token);

export interface DensityPanelProps {
  density: 'comfortable' | 'compact';
}

export const DensityPanel = (props: DensityPanelProps) => {
  const { ts } = useI18n();
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
      aria-label={ts(REGION_KEYS[props.density])}
    >
      <header class={styles.header}>
        <Text variant="label">{ts(NAME_KEYS[props.density])}</Text>
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
      <Input
        aria-label={ts('library.spaceLayout.density.sampleField')}
        placeholder={ts('library.spaceLayout.density.placeholder')}
        iconLeft="search"
      />
      <ul class={styles.rows}>
        <For each={ROWS}>
          {(row) => (
            <li class={styles.row} style={{ '--row-size': `var(${row.token})` }}>
              <span>{ts(row.labelKey)}</span>
              <code class={styles.token}>{row.token}</code>
              <span class={styles.height}>{heightOf(row.token)}</span>
            </li>
          )}
        </For>
      </ul>
    </section>
  );
};
