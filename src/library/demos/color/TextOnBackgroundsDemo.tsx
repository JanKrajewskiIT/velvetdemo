import { useI18n } from '@jankrajewskiit/i18n';
import { Text } from '@jankrajewskiit/ui';
import { For, Show } from 'solid-js';

import { FOREGROUND_ROLES } from './colorRoles';
import { ContrastValue } from './ContrastValue';
import styles from './TextOnBackgroundsDemo.module.css';

const MATRIX_BACKGROUNDS = [
  '--bg-page',
  '--bg-subtle',
  '--bg-raised',
  '--bg-sunken',
  '--bg-overlay',
  '--bg-selected',
  '--bg-brand-subtle',
] as const;

export const TextOnBackgroundsDemo = () => {
  const { ts } = useI18n();

  return (
    <div class={styles.scroll}>
      <table class={styles.matrix}>
        <thead>
          <tr>
            <th scope="col">
              <Text variant="code" tone="secondary">
                {ts('library.color.roles.grid')}
              </Text>
            </th>
            <For each={MATRIX_BACKGROUNDS}>
              {(background) => (
                <th scope="col">
                  <Text variant="code" tone="secondary">
                    {background}
                  </Text>
                </th>
              )}
            </For>
          </tr>
        </thead>
        <tbody>
          <For each={FOREGROUND_ROLES}>
            {(foreground) => (
              <tr>
                <th scope="row">
                  <Text variant="code">{foreground.token}</Text>
                </th>
                <For each={MATRIX_BACKGROUNDS}>
                  {(background) => (
                    <td style={{ '--sample-bg': `var(${background})` }}>
                      <span class={styles.sample} style={{ color: `var(${foreground.token})` }}>
                        {ts('library.color.roles.sample')}
                      </span>
                      <Show
                        when={foreground.measured}
                        fallback={
                          <Text variant="caption" tone="secondary">
                            {ts('library.color.roles.exempt')}
                          </Text>
                        }
                      >
                        <ContrastValue foreground={foreground.token} background={background} />
                      </Show>
                    </td>
                  )}
                </For>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  );
};
