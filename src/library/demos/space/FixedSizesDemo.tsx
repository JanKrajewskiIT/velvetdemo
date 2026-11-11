import { useI18n } from '@jankrajewskiit/i18n';
import { Grid, SectionLabel, Stack } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import { type TokenSampleItem, TokenSampleList } from './TokenSampleList';

const GROUPS: readonly { id: 'icons' | 'avatars' | 'targets'; items: readonly TokenSampleItem[] }[] = [
  {
    id: 'icons',
    items: [
      { token: '--size-icon-xs', shape: 'square' },
      { token: '--size-icon-sm', shape: 'square' },
      { token: '--size-icon-md', shape: 'square' },
      { token: '--size-icon-lg', shape: 'square' },
      { token: '--size-icon-xl', shape: 'square' },
      { token: '--size-icon-2xl', shape: 'square' },
    ],
  },
  {
    id: 'avatars',
    items: [
      { token: '--size-avatar-xs', shape: 'circle' },
      { token: '--size-avatar-sm', shape: 'circle' },
      { token: '--size-avatar-md', shape: 'circle' },
      { token: '--size-avatar-lg', shape: 'circle' },
      { token: '--size-avatar-xl', shape: 'circle' },
      { token: '--size-icon-tile-sm', shape: 'tile' },
      { token: '--size-icon-tile-md', shape: 'tile' },
      { token: '--size-icon-tile-lg', shape: 'tile' },
      { token: '--size-icon-tile-xl', shape: 'tile' },
      { token: '--size-icon-tile-2xl', shape: 'tile' },
      { token: '--size-icon-tile-3xl', shape: 'tile' },
    ],
  },
  {
    id: 'targets',
    items: [
      { token: '--size-dot-sm', shape: 'dashed' },
      { token: '--size-dot', shape: 'dashed' },
      { token: '--size-dot-lg', shape: 'dashed' },
      { token: '--size-check', shape: 'dashed' },
      { token: '--size-check-sm', shape: 'dashed' },
      { token: '--size-swatch', shape: 'dashed' },
      { token: '--hit-target-sm', shape: 'dashed' },
      { token: '--hit-target-min', shape: 'dashed' },
    ],
  },
];

export const FixedSizesDemo = () => {
  const { ts } = useI18n();

  return (
    <Grid min={280} gap={5}>
      <For each={GROUPS}>
        {(group) => (
          <Stack gap={3}>
            <SectionLabel>{ts(`library.spaceLayout.sizes.${group.id}`)}</SectionLabel>
            <TokenSampleList items={group.items} />
          </Stack>
        )}
      </For>
    </Grid>
  );
};
