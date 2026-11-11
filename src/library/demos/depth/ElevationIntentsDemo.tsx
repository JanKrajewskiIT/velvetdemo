import { useI18n } from '@jankrajewskiit/i18n';
import { For } from 'solid-js';

import styles from './ElevationIntentsDemo.module.css';

type SurfaceKind = 'raised' | 'field' | 'overlay' | 'brand' | 'media';

interface ElevationIntent {
  token: string;
  use: string;
  surface: SurfaceKind;
  lifted?: boolean;
}

export const ElevationIntentsDemo = () => {
  const { ts } = useI18n();

  const INTENTS: readonly ElevationIntent[] = [
    { token: '--elevation-flat', use: ts('library.depth.elevation.flat'), surface: 'raised' },
    { token: '--elevation-control', use: ts('library.depth.elevation.control'), surface: 'field' },
    { token: '--elevation-card', use: ts('library.depth.elevation.card'), surface: 'raised' },
    { token: '--elevation-card-hover', use: ts('library.depth.elevation.cardHover'), surface: 'raised', lifted: true },
    { token: '--elevation-raised', use: ts('library.depth.elevation.raised'), surface: 'raised' },
    { token: '--elevation-popover', use: ts('library.depth.elevation.popover'), surface: 'overlay' },
    { token: '--elevation-dialog', use: ts('library.depth.elevation.dialog'), surface: 'overlay' },
    { token: '--elevation-brand', use: ts('library.depth.elevation.brand'), surface: 'brand' },
    { token: '--elevation-media', use: ts('library.depth.elevation.media'), surface: 'media' },
  ];

  return (
    <ul class={styles.stage}>
      <For each={INTENTS}>
        {(intent) => (
          <li class={styles.item}>
            <div
              class={styles.surface}
              data-surface={intent.surface}
              data-lifted={intent.lifted ? '' : undefined}
              style={{ '--intent-shadow': `var(${intent.token})` }}
            />
            <code class={styles.token}>{intent.token}</code>
            <span class={styles.use}>{intent.use}</span>
          </li>
        )}
      </For>
    </ul>
  );
};
