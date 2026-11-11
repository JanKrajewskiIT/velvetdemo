import { useI18n } from '@jankrajewskiit/i18n';
import { Grid, SectionLabel, Stack, Text } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import styles from './TypeScalesDemo.module.css';

const SIZES = ['2xs', 'xs', 'sm', 'md', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'] as const;
const TRACKING = ['tighter', 'tight', 'snug', 'normal', 'wide', 'label', 'caps'] as const;
const LEADING = ['none', 'display', 'tight', 'compact', 'snug', 'normal', 'code', 'relaxed'] as const;

export const TypeScalesDemo = () => {
  const { ts } = useI18n();

  return (
    <Stack gap={5}>
      <SectionLabel>{ts('library.type.scales.size')}</SectionLabel>
      <ul class={styles.samples}>
        <For each={SIZES}>
          {(size) => (
            <li class={styles.row}>
              <Text variant="code">{`--font-size-${size}`}</Text>
              <Text class={styles.size} style={{ '--sample-size': `var(--font-size-${size})` }}>
                {ts('library.type.scales.sample')}
              </Text>
            </li>
          )}
        </For>
      </ul>
      <Grid min={240} gap={5}>
        <Stack gap={3}>
          <SectionLabel>{ts('library.type.scales.tracking')}</SectionLabel>
          <For each={TRACKING}>
            {(tracking) => (
              <Stack gap={1}>
                <Text variant="code">{`--tracking-${tracking}`}</Text>
                <Text style={{ 'letter-spacing': `var(--tracking-${tracking})` }}>
                  {ts('library.type.scales.sample')}
                </Text>
              </Stack>
            )}
          </For>
        </Stack>
        <Stack gap={3}>
          <SectionLabel>{ts('library.type.scales.leading')}</SectionLabel>
          <For each={LEADING}>
            {(leading) => (
              <Stack gap={1}>
                <Text variant="code">{`--leading-${leading}`}</Text>
                <Text style={{ 'line-height': `var(--leading-${leading})` }}>
                  {ts('library.type.scales.paragraph')}
                </Text>
              </Stack>
            )}
          </For>
        </Stack>
      </Grid>
    </Stack>
  );
};
