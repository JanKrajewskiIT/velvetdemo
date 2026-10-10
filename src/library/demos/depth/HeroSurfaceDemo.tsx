import { For } from 'solid-js';

import styles from './HeroSurfaceDemo.module.css';

type SampleKind = 'highlight' | 'glow' | 'hero';

interface Sample {
  token: string;
  use: string;
  kind: SampleKind;
}

const SAMPLES: readonly Sample[] = [
  { token: '--highlight-inset', use: 'Top-edge light on a raised surface', kind: 'highlight' },
  { token: '--glow-brand', use: 'Brand halo around a hero card', kind: 'glow' },
  { token: '--elevation-brand', use: 'Glow plus lift on a brand fill', kind: 'hero' },
];

export const HeroSurfaceDemo = () => (
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
    <p class={styles.note}>Reserved for one hero surface per view.</p>
  </div>
);
