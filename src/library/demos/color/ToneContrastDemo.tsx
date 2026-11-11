import { useI18n } from '@jankrajewskiit/i18n';
import { CATEGORY_TONES, Grid, Stack, Text, TONES } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import { ContrastValue } from './ContrastValue';
import styles from './ToneContrastDemo.module.css';

const ALL_TONES = [...TONES, ...CATEGORY_TONES];

export const ToneContrastDemo = () => {
  const { ts } = useI18n();

  return (
    <Grid min={190} gap={4}>
      <For each={ALL_TONES}>
        {(tone) => (
          <Stack gap={2} data-tone={tone}>
            <Text variant="code">{tone}</Text>
            <div class={styles.tinted}>
              <Text tone="inherit">{ts('library.color.contrast.tinted')}</Text>
              <ContrastValue foreground="--tone-fg" background="--tone-bg" />
            </div>
            <div class={styles.raised}>
              <Text tone="inherit">{ts('library.color.contrast.raised')}</Text>
              <ContrastValue foreground="--tone-fg" background="--bg-raised" />
            </div>
          </Stack>
        )}
      </For>
    </Grid>
  );
};
