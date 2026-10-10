import { For } from 'solid-js';

import styles from './ElevationIntentsDemo.module.css';

type SurfaceKind = 'raised' | 'field' | 'overlay' | 'brand' | 'media';

interface ElevationIntent {
  token: string;
  use: string;
  surface: SurfaceKind;
  lifted?: boolean;
}

const INTENTS: readonly ElevationIntent[] = [
  { token: '--elevation-flat', use: 'Inline, bordered content', surface: 'raised' },
  { token: '--elevation-control', use: 'Buttons and fields', surface: 'field' },
  { token: '--elevation-card', use: 'Resting cards', surface: 'raised' },
  { token: '--elevation-card-hover', use: 'Hovered cards, lifted', surface: 'raised', lifted: true },
  { token: '--elevation-raised', use: 'Panels above the page', surface: 'raised' },
  { token: '--elevation-popover', use: 'Menus and popovers', surface: 'overlay' },
  { token: '--elevation-dialog', use: 'Dialogs and sheets', surface: 'overlay' },
  { token: '--elevation-brand', use: 'Brand hero surface', surface: 'brand' },
  { token: '--elevation-media', use: 'Imagery and lightboxes', surface: 'media' },
];

export const ElevationIntentsDemo = () => (
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
