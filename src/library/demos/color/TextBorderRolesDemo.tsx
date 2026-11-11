import { useI18n } from '@jankrajewskiit/i18n';
import { SectionLabel } from '@jankrajewskiit/ui';
import { For, Show } from 'solid-js';

import { FOREGROUND_ROLES } from './colorRoles';
import { ContrastValue } from './ContrastValue';
import styles from './TextBorderRolesDemo.module.css';

const BORDERS = ['--border-subtle', '--border-default', '--border-strong', '--border-focus', '--border-brand'] as const;

export const TextBorderRolesDemo = () => {
  const { ts } = useI18n();
  return (
    <div class={styles.root}>
      <section class={styles.group}>
        <SectionLabel>{ts('library.color.roles.foreground')}</SectionLabel>
        <ul class={styles.list}>
          <For each={FOREGROUND_ROLES}>
            {(item) => (
              <li class={styles.row}>
                <div class={styles.text}>
                  <span class={styles.sample} style={{ '--role': `var(${item.token})` }}>
                    {ts(`library.color.roles.${item.sample}`)}
                  </span>
                  <span class={styles.token}>{item.token}</span>
                </div>
                <Show
                  when={item.measured}
                  fallback={<span class={styles.exempt}>{ts('library.color.roles.exempt')}</span>}
                >
                  <ContrastValue foreground={item.token} background="--bg-raised" />
                </Show>
              </li>
            )}
          </For>
        </ul>
      </section>
      <section class={styles.group}>
        <SectionLabel>{ts('library.color.roles.border')}</SectionLabel>
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
};
