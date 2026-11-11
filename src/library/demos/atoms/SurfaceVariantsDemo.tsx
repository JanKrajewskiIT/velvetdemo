import { useI18n } from '@jankrajewskiit/i18n';
import type { SurfaceVariant } from '@jankrajewskiit/ui';
import { Grid, SectionLabel, Stack, Surface, Text } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

const VARIANTS = [
  'default',
  'low',
  'flat',
  'raised',
  'subtle',
  'sunken',
  'brand',
  'brand-solid',
  'inverse',
  'overlay',
  'dialog',
  'glass',
] as const satisfies readonly SurfaceVariant[];

export const SurfaceVariantsDemo = () => {
  const { ts } = useI18n();
  return (
    <Stack gap={5}>
      <Stack gap={2}>
        <SectionLabel>{ts('library.atoms.surface.paint')}</SectionLabel>
        <Grid min={120} gap={3}>
          <For each={VARIANTS}>
            {(variant) => (
              <Surface variant={variant} padding="md">
                <Text variant="caption" tone="inherit" mono>
                  {variant}
                </Text>
              </Surface>
            )}
          </For>
        </Grid>
      </Stack>
      <Stack gap={2}>
        <SectionLabel>{ts('library.atoms.surface.behaviour')}</SectionLabel>
        <Grid min={120} gap={3}>
          <Surface variant="raised" hoverable padding="md">
            <Text variant="caption" tone="inherit" mono>
              hoverable
            </Text>
          </Surface>
          <Surface variant="raised" selected padding="md">
            <Text variant="caption" tone="inherit" mono>
              selected
            </Text>
          </Surface>
          <Surface variant="raised" tone="brand" accent padding="md">
            <Text variant="caption" tone="inherit" mono>
              accent
            </Text>
          </Surface>
          <Surface variant="raised" tonal tone="teal" accent padding="md">
            <Text variant="caption" tone="inherit" mono>
              tonal · teal
            </Text>
          </Surface>
        </Grid>
      </Stack>
    </Stack>
  );
};
