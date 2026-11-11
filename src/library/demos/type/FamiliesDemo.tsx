import { useI18n } from '@jankrajewskiit/i18n';
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

const weightValue = (name: WeightName) => WEIGHTS.find((weight) => weight.name === name)?.value;

export const FamiliesDemo = () => {
  const { ts } = useI18n();

  const families: readonly Family[] = [
    {
      token: '--font-display',
      name: 'Space Grotesk',
      use: ts('library.type.families.use.display'),
      tracking: '--tracking-tighter',
      weights: ['light', 'regular', 'medium', 'semibold', 'bold'],
    },
    {
      token: '--font-sans',
      name: 'Hanken Grotesk',
      use: ts('library.type.families.use.sans'),
      tracking: '--tracking-normal',
      weights: ['light', 'regular', 'medium', 'semibold', 'bold', 'extrabold'],
    },
    {
      token: '--font-mono',
      name: 'JetBrains Mono',
      use: ts('library.type.families.use.mono'),
      tracking: '--tracking-normal',
      weights: ['regular', 'medium', 'semibold'],
    },
  ];

  return (
    <ul class={styles.families}>
      <For each={families}>
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
                    <span
                      class={styles.glyphs}
                      style={{ '--weight': `var(--font-weight-${weight})` }}
                      aria-hidden="true"
                    >
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
};
