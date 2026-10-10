import { SectionLabel } from '@jankrajewskiit/ui';
import { For, Show } from 'solid-js';

import { ContrastValue } from './ContrastValue';
import styles from './TextBorderRolesDemo.module.css';

const FOREGROUNDS = [
  { token: '--fg-primary', sample: 'Quarterly report', measured: true },
  { token: '--fg-secondary', sample: 'Prepared by finance', measured: true },
  { token: '--fg-tertiary', sample: 'Updated 3 minutes ago', measured: true },
  { token: '--fg-brand', sample: 'Open in workspace', measured: true },
  { token: '--fg-link', sample: 'View all invoices', measured: true },
  { token: '--fg-disabled', sample: 'Unavailable', measured: false },
] as const;

const BORDERS = ['--border-subtle', '--border-default', '--border-strong', '--border-focus', '--border-brand'] as const;

export const TextBorderRolesDemo = () => (
  <div class={styles.root}>
    <section class={styles.group}>
      <SectionLabel>Foreground on --bg-raised</SectionLabel>
      <ul class={styles.list}>
        <For each={FOREGROUNDS}>
          {(item) => (
            <li class={styles.row}>
              <div class={styles.text}>
                <span class={styles.sample} style={{ '--role': `var(${item.token})` }}>
                  {item.sample}
                </span>
                <span class={styles.token}>{item.token}</span>
              </div>
              <Show when={item.measured} fallback={<span class={styles.exempt}>Exempt (disabled)</span>}>
                <ContrastValue foreground={item.token} background="--bg-raised" />
              </Show>
            </li>
          )}
        </For>
      </ul>
    </section>
    <section class={styles.group}>
      <SectionLabel>Border</SectionLabel>
      <ul class={styles.list}>
        <For each={BORDERS}>
          {(token) => (
            <li class={styles.border} style={{ '--role': `var(${token})` }}>
              {token}
            </li>
          )}
        </For>
      </ul>
    </section>
  </div>
);
