import { useI18n } from '@jankrajewskiit/i18n';
import { For } from 'solid-js';

import styles from './HeroSurfaceDemo.module.css';

type SampleKind = 'highlight' | 'glow' | 'hero';

interface Sample {
  token: string;
  use: string;
  kind: SampleKind;
}

export const HeroSurfaceDemo = () => {
  const { ts } = useI18n();

  const SAMPLES: readonly Sample[] = [
    { token: '--highlight-inset', use: ts('library.depth.hero.highlight'), kind: 'highlight' },
    { token: '--glow-brand', use: ts('library.depth.hero.glow'), kind: 'glow' },
    { token: '--elevation-brand', use: ts('library.depth.hero.lift'), kind: 'hero' },
  ];

  return (
    <div class={styles.root}>
      <ul class={styles.list}>
        <For each={SAMPLES}>
          {(sample) => (
            <li class={styles.row}>
              <div class={styles.sample} data-kind={sample.kind} aria-hidden="true" />
              <div class={styles.text}>
                <code class={styles.token}>{sample.token}</code>
                <span class={styles.use}>{sample.use}</span>
              </div>
            </li>
          )}
        </For>
      </ul>
      <p class={styles.note}>{ts('library.depth.hero.note')}</p>
    </div>
  );
};
