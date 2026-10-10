import { For } from 'solid-js';

import styles from './FamiliesDemo.module.css';

const WEIGHTS = [
  { name: 'light', value: 300 },
  { name: 'regular', value: 400 },
  { name: 'medium', value: 500 },
  { name: 'semibold', value: 600 },
  { name: 'bold', value: 700 },
  { name: 'extrabold', value: 800 },
] as const;

type WeightName = (typeof WEIGHTS)[number]['name'];

interface Family {
  token: string;
  name: string;
  use: string;
  tracking: string;
  weights: readonly WeightName[];
}

const FAMILIES: readonly Family[] = [
  {
    token: '--font-display',
    name: 'Space Grotesk',
    use: 'Display, headings, titles and KPIs',
    tracking: '--tracking-tighter',
    weights: ['light', 'regular', 'medium', 'semibold', 'bold'],
  },
  {
    token: '--font-sans',
    name: 'Hanken Grotesk',
    use: 'Interface text, body and labels',
    tracking: '--tracking-normal',
    weights: ['light', 'regular', 'medium', 'semibold', 'bold', 'extrabold'],
  },
  {
    token: '--font-mono',
    name: 'JetBrains Mono',
    use: 'Code, data and keyboard keys',
    tracking: '--tracking-normal',
    weights: ['regular', 'medium', 'semibold'],
  },
];

const weightValue = (name: WeightName) => WEIGHTS.find((weight) => weight.name === name)?.value;

export const FamiliesDemo = () => (
  <ul class={styles.families}>
    <For each={FAMILIES}>
      {(family) => (
        <li
          class={styles.family}
          style={{ '--family': `var(${family.token})`, '--family-tracking': `var(${family.tracking})` }}
        >
          <span class={styles.specimen} aria-hidden="true">
            Aa
          </span>
          <span class={styles.name}>{family.name}</span>
          <span class={styles.use}>{family.use}</span>
          <code class={styles.token}>{family.token}</code>
          <p class={styles.pangram}>Pack my box with five dozen liquor jugs.</p>
          <ul class={styles.weights}>
            <For each={family.weights}>
              {(weight) => (
                <li class={styles.weight}>
                  <span class={styles.glyphs} style={{ '--weight': `var(--font-weight-${weight})` }} aria-hidden="true">
                    Ag
                  </span>
                  <span class={styles.weightValue}>{weightValue(weight)}</span>
                </li>
              )}
            </For>
          </ul>
        </li>
      )}
    </For>
  </ul>
);
