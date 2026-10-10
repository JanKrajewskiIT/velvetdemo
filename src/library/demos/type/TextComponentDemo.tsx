import { Text, type TextProps, type TextVariant } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import styles from './TextComponentDemo.module.css';

const VARIANTS: readonly TextVariant[] = [
  'display-sm',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'title',
  'kpi',
  'body-lg',
  'body',
  'body-sm',
  'label',
  'caption',
  'overline',
  'section',
];

const SAMPLES: Partial<Record<TextVariant, string>> = {
  kpi: '€ 48,210',
  overline: 'Quarterly report',
  section: 'Recent searches',
  label: 'Email address',
  caption: 'Updated 2 hours ago',
};

const TONES: readonly NonNullable<TextProps['tone']>[] = [
  'primary',
  'secondary',
  'tertiary',
  'brand',
  'success',
  'warning',
  'danger',
];

const DEFAULT_SAMPLE = 'Calm interface';

export const TextComponentDemo = () => (
  <div class={styles.demo}>
    <section class={styles.section} aria-labelledby="text-variants-title">
      <Text id="text-variants-title" as="h3" variant="section">
        variant
      </Text>
      <ul class={styles.list}>
        <For each={VARIANTS}>
          {(variant) => (
            <li class={styles.row}>
              <code class={styles.name}>{variant}</code>
              <Text as="p" variant={variant} class={styles.sample}>
                {SAMPLES[variant] ?? DEFAULT_SAMPLE}
              </Text>
            </li>
          )}
        </For>
      </ul>
    </section>
    <div class={styles.side}>
      <section class={styles.section} aria-labelledby="text-tones-title">
        <Text id="text-tones-title" as="h3" variant="section">
          tone
        </Text>
        <ul class={styles.list}>
          <For each={TONES}>
            {(tone) => (
              <li class={styles.row}>
                <code class={styles.name}>{tone}</code>
                <Text as="p" variant="label" tone={tone}>
                  Notes stay with the project
                </Text>
              </li>
            )}
          </For>
        </ul>
      </section>
      <section class={styles.section} aria-labelledby="text-modifiers-title">
        <Text id="text-modifiers-title" as="h3" variant="section">
          modifiers
        </Text>
        <ul class={styles.list}>
          <li class={styles.row}>
            <code class={styles.name}>mono</code>
            <Text as="p" variant="body-sm" mono>
              INV-2041 · 1 204,50
            </Text>
          </li>
          <li class={styles.row}>
            <code class={styles.name}>tabular</code>
            <Text as="p" variant="body-sm" tabular>
              1 111,11 · 8 888,88
            </Text>
          </li>
          <li class={styles.row}>
            <code class={styles.name}>truncate</code>
            <Text as="p" variant="body-sm" truncate class={styles.truncated}>
              Quarterly design system review with the Gdańsk office
            </Text>
          </li>
        </ul>
      </section>
    </div>
  </div>
);
