import { useI18n } from '@jankrajewskiit/i18n';
import { Grid, Stack, Text } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import { BACKGROUND_ROLES, FOREGROUND_ROLES } from './colorRoles';
import { ContrastValue } from './ContrastValue';
import styles from './TextOnBackgroundsDemo.module.css';

const TEXT_BACKGROUNDS = BACKGROUND_ROLES.filter((background) => background.fg === '--fg-primary');
const READABLE_FOREGROUNDS = FOREGROUND_ROLES.filter((foreground) => foreground.measured);

export const TextOnBackgroundsDemo = () => {
  const { ts } = useI18n();

  return (
    <Grid min={250} gap={4}>
      <For each={TEXT_BACKGROUNDS}>
        {(background) => (
          <section class={styles.tile} style={{ '--sample-bg': `var(${background.token})` }}>
            <Text variant="code">{background.token}</Text>
            <For each={READABLE_FOREGROUNDS}>
              {(foreground) => (
                <Stack gap={1}>
                  <Text tone="inherit" style={{ color: `var(${foreground.token})` }}>
                    {ts(`library.color.roles.${foreground.sample}`)}
                  </Text>
                  <Text variant="code" tone="secondary">
                    {foreground.token}
                  </Text>
                  <ContrastValue foreground={foreground.token} background={background.token} />
                </Stack>
              )}
            </For>
          </section>
        )}
      </For>
    </Grid>
  );
};
