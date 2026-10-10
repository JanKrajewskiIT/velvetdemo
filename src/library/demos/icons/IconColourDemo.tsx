import { Alert, filledIcon, Glyph, Text } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import styles from './IconColourDemo.module.css';

const ROLES = [
  { role: 'rest', icon: filledIcon('home'), label: 'Rest', token: '--fg-secondary' },
  { role: 'active', icon: filledIcon('home', true), label: 'Active', token: '--fg-brand' },
  { role: 'disabled', icon: 'lock', label: 'Disabled', token: '--fg-disabled' },
] as const;

const ALERTS = [
  { tone: 'info', title: 'Sync scheduled', text: 'The next import runs tonight.' },
  { tone: 'success', title: 'Import complete', text: '128 records were added.' },
  { tone: 'warning', title: 'Storage almost full', text: 'You have used 92% of your plan.' },
  { tone: 'danger', title: 'Payment failed', text: 'Update your card to keep access.' },
] as const;

export const IconColourDemo = () => (
  <div class={styles.root}>
    <section class={styles.section} aria-label="Navigation roles">
      <Text variant="overline" tone="tertiary">
        Interface icons follow text colour
      </Text>
      <ul class={styles.roles}>
        <For each={ROLES}>
          {(entry) => (
            <li class={styles.role} data-role={entry.role}>
              <Glyph name={entry.icon} class={styles.glyph} />
              <span class={styles.label}>{entry.label}</span>
              <code class={styles.token}>{entry.token}</code>
            </li>
          )}
        </For>
      </ul>
    </section>
    <section class={styles.section} aria-label="Status roles">
      <Text variant="overline" tone="tertiary">
        Status colour belongs to alerts
      </Text>
      <div class={styles.alerts}>
        <For each={ALERTS}>
          {(alert) => (
            <Alert tone={alert.tone} title={alert.title}>
              {alert.text}
            </Alert>
          )}
        </For>
      </div>
    </section>
  </div>
);
