import { useI18n } from '@jankrajewskiit/i18n';
import { Grid, SectionLabel, Stack } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import { TokenBarList } from './TokenBarList';

const GROUPS = [
  {
    id: 'nested',
    tokens: [
      '--control-height-inner',
      '--control-height-inner-lg',
      '--track-pad',
      '--row-height-sm',
      '--row-height',
      '--row-height-lg',
    ],
  },
  {
    id: 'overlays',
    tokens: [
      '--overlay-min-w',
      '--overlay-w-sm',
      '--overlay-w',
      '--overlay-w-md',
      '--overlay-w-lg',
      '--overlay-max-h-sm',
      '--overlay-max-h',
      '--overlay-max-h-lg',
    ],
  },
  { id: 'halos', tokens: ['--halo-sm', '--halo-md', '--halo-lg'] },
] as const;

export const NestedSizesDemo = () => {
  const { ts } = useI18n();

  return (
    <Grid min={280} gap={5}>
      <For each={GROUPS}>
        {(group) => (
          <Stack gap={3}>
            <SectionLabel>{ts(`library.spaceLayout.sizes.${group.id}`)}</SectionLabel>
            <TokenBarList tokens={group.tokens} />
          </Stack>
        )}
      </For>
    </Grid>
  );
};
