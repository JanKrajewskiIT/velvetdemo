import { useI18n } from '@jankrajewskiit/i18n';
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

const TONES: readonly NonNullable<TextProps['tone']>[] = [
  'primary',
  'secondary',
  'tertiary',
  'brand',
  'success',
  'warning',
  'danger',
];

export const TextComponentDemo = () => {
  const { ts } = useI18n();

  const SAMPLES: Partial<Record<TextVariant, string>> = {
    kpi: '€ 48,210',
    overline: ts('library.type.text.samples.overline'),
    section: ts('library.type.text.samples.section'),
    label: ts('library.type.text.samples.label'),
    caption: ts('library.type.text.samples.caption'),
  };
  const DEFAULT_SAMPLE = ts('library.type.text.samples.fallback');

  return (
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
                    {ts('library.type.text.toneSample')}
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
                {ts('library.type.text.truncate')}
              </Text>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};
