import { useI18n } from '@jankrajewskiit/i18n';
import { Grid, SectionLabel, Stack } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import { TokenBarList } from './TokenBarList';

const GROUPS = [
  {
    id: 'icons',
    tokens: [
      '--size-icon-xs',
      '--size-icon-sm',
      '--size-icon-md',
      '--size-icon-lg',
      '--size-icon-xl',
      '--size-icon-2xl',
    ],
  },
  {
    id: 'avatars',
    tokens: [
      '--size-avatar-xs',
      '--size-avatar-sm',
      '--size-avatar-md',
      '--size-avatar-lg',
      '--size-avatar-xl',
      '--size-icon-tile-sm',
      '--size-icon-tile-md',
      '--size-icon-tile-lg',
      '--size-icon-tile-xl',
      '--size-icon-tile-2xl',
      '--size-icon-tile-3xl',
    ],
  },
  {
    id: 'targets',
    tokens: [
      '--size-dot-sm',
      '--size-dot',
      '--size-dot-lg',
      '--size-check',
      '--size-check-sm',
      '--size-swatch',
      '--hit-target-sm',
      '--hit-target-min',
    ],
  },
] as const;

export const FixedSizesDemo = () => {
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
