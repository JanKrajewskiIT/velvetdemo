import { Text } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import { ContrastValue } from './ContrastValue';
import styles from './OnColorDemo.module.css';

const PANELS = ['--bg-brand', '--bg-media'] as const;

const TEXTS = [
  { token: '--on-color-fg', label: 'Primary text' },
  { token: '--on-color-muted', label: 'Muted text' },
] as const;

const FILLS = ['--on-color-subtle', '--on-color-hover', '--on-color-pressed'] as const;
const BORDERS = ['--on-color-border', '--on-color-border-strong'] as const;

export const OnColorDemo = () => (
  <div class={styles.root}>
    <For each={PANELS}>
      {(panel) => (
        <section class={styles.panel} style={{ '--panel-bg': `var(${panel})` }}>
          <Text variant="overline" tone="inherit">
            On {panel}
          </Text>
          <For each={TEXTS}>
            {(text) => (
              <div class={styles.line}>
                <span class={styles.text} style={{ '--text-color': `var(${text.token})` }}>
                  {text.label}
                </span>
                <ContrastValue foreground={text.token} background={panel} />
              </div>
            )}
          </For>
          <ul class={styles.chips}>
            <For each={FILLS}>
              {(token) => (
                <li class={styles.chip} style={{ '--chip-fill': `var(${token})` }}>
                  {token.replace('--on-color-', '')}
                </li>
              )}
            </For>
            <For each={BORDERS}>
              {(token) => (
                <li class={styles.chip} style={{ '--chip-border': `var(${token})` }}>
                  {token.replace('--on-color-', '')}
                </li>
              )}
            </For>
          </ul>
        </section>
      )}
    </For>
  </div>
);
