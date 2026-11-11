import { useI18n } from '@jankrajewskiit/i18n';
import { Alert, filledIcon, Glyph, Text } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import styles from './IconColourDemo.module.css';

const ROLES = [
  { role: 'rest', icon: filledIcon('home'), labelKey: 'library.icons.colour.rest', token: '--fg-secondary' },
  { role: 'active', icon: filledIcon('home', true), labelKey: 'library.icons.colour.active', token: '--fg-brand' },
  { role: 'disabled', icon: 'lock', labelKey: 'library.icons.colour.disabled', token: '--fg-disabled' },
] as const;

const ALERTS = [
  { tone: 'info', title: 'Sync scheduled', text: 'The next import runs tonight.' },
  { tone: 'success', title: 'Import complete', text: '128 records were added.' },
  { tone: 'warning', title: 'Storage almost full', text: 'You have used 92% of your plan.' },
  { tone: 'danger', title: 'Payment failed', text: 'Update your card to keep access.' },
] as const;

export const IconColourDemo = () => {
  const { ts } = useI18n();

  return (
    <div class={styles.root}>
      <section class={styles.section} aria-label={ts('library.icons.colour.navigation')}>
        <Text variant="overline" tone="tertiary">
          {ts('library.icons.colour.interfaceNote')}
        </Text>
        <ul class={styles.roles}>
          <For each={ROLES}>
            {(entry) => (
              <li class={styles.role} data-role={entry.role}>
                <Glyph name={entry.icon} class={styles.glyph} />
                <span class={styles.label}>{ts(entry.labelKey)}</span>
                <code class={styles.token}>{entry.token}</code>
              </li>
            )}
          </For>
        </ul>
      </section>
      <section class={styles.section} aria-label={ts('library.icons.colour.status')}>
        <Text variant="overline" tone="tertiary">
          {ts('library.icons.colour.statusNote')}
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
};
