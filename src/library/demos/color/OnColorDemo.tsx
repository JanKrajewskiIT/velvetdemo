import { useI18n } from '@jankrajewskiit/i18n';
import { Text } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import { ContrastValue } from './ContrastValue';
import styles from './OnColorDemo.module.css';

const PANELS = ['--bg-brand', '--bg-media'] as const;

const TEXTS = [
  { token: '--on-color-fg', labelKey: 'library.color.onColor.primaryText' },
  { token: '--on-color-muted', labelKey: 'library.color.onColor.mutedText' },
] as const;

const FILLS = ['--on-color-subtle', '--on-color-hover', '--on-color-pressed'] as const;
const BORDERS = ['--on-color-border', '--on-color-border-strong'] as const;

export const OnColorDemo = () => {
  const { ts } = useI18n();

  return (
    <div class={styles.root}>
      <For each={PANELS}>
        {(panel) => (
          <section class={styles.panel} style={{ '--panel-bg': `var(${panel})` }}>
            <Text variant="overline" tone="inherit">
              {ts('library.color.onColor.on', { panel })}
            </Text>
            <For each={TEXTS}>
              {(text) => (
                <div class={styles.line}>
                  <span class={styles.text} style={{ '--text-color': `var(${text.token})` }}>
                    {ts(text.labelKey)}
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
};
