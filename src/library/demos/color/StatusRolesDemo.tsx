import { Glyph, Text } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import { ContrastValue } from './ContrastValue';
import styles from './StatusRolesDemo.module.css';

const STATUSES = [
  { id: 'success', icon: 'circle-check', tint: 'Payment received', solid: 'Paid' },
  { id: 'warning', icon: 'triangle-alert', tint: 'Payment due in 3 days', solid: 'Due soon' },
  { id: 'danger', icon: 'circle-x', tint: 'Card was declined', solid: 'Failed' },
  { id: 'info', icon: 'info', tint: 'Statement ready to download', solid: 'New' },
] as const;

export const StatusRolesDemo = () => (
  <ul class={styles.list}>
    <For each={STATUSES}>
      {(status) => (
        <li
          class={styles.row}
          style={{
            '--status-fg': `var(--status-${status.id}-fg)`,
            '--status-bg': `var(--status-${status.id}-bg)`,
            '--status-border': `var(--status-${status.id}-border)`,
            '--status-solid': `var(--status-${status.id}-solid)`,
          }}
        >
          <Text variant="label" class={styles.name}>
            {status.id}
          </Text>
          <div class={styles.cell}>
            <span class={styles.tint}>
              <Glyph name={status.icon} />
              {status.tint}
            </span>
            <ContrastValue foreground={`--status-${status.id}-fg`} background={`--status-${status.id}-bg`} />
          </div>
          <div class={styles.cell}>
            <span class={styles.solid}>{status.solid}</span>
            <ContrastValue foreground="--on-color-fg" background={`--status-${status.id}-solid`} />
          </div>
        </li>
      )}
    </For>
  </ul>
);
