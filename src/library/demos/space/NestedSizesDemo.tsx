import { useI18n } from '@jankrajewskiit/i18n';
import { Grid, SectionLabel, Stack } from '@jankrajewskiit/ui';
import { For, Match, Switch } from 'solid-js';

import { TokenBarList } from './TokenBarList';
import { type TokenSampleItem, TokenSampleList } from './TokenSampleList';

const GROUPS: readonly (
  | { id: 'nested' | 'halos'; kind: 'samples'; items: readonly TokenSampleItem[] }
  | { id: 'overlays'; kind: 'bars'; tokens: readonly string[] }
)[] = [
  {
    id: 'nested',
    kind: 'samples',
    items: [
      { token: '--control-height-inner', shape: 'control' },
      { token: '--control-height-inner-lg', shape: 'control' },
      { token: '--track-pad', shape: 'dashed' },
      { token: '--row-height-sm', shape: 'row' },
      { token: '--row-height', shape: 'row' },
      { token: '--row-height-lg', shape: 'row' },
    ],
  },
  {
    id: 'overlays',
    kind: 'bars',
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
  {
    id: 'halos',
    kind: 'samples',
    items: [
      { token: '--halo-sm', shape: 'halo' },
      { token: '--halo-md', shape: 'halo' },
      { token: '--halo-lg', shape: 'halo' },
    ],
  },
];

export const NestedSizesDemo = () => {
  const { ts } = useI18n();

  return (
    <Grid min={280} gap={5}>
      <For each={GROUPS}>
        {(group) => (
          <Stack gap={3}>
            <SectionLabel>{ts(`library.spaceLayout.sizes.${group.id}`)}</SectionLabel>
            <Switch>
              <Match when={group.kind === 'bars' && group}>{(bars) => <TokenBarList tokens={bars().tokens} />}</Match>
              <Match when={group.kind === 'samples' && group}>
                {(samples) => <TokenSampleList items={samples().items} />}
              </Match>
            </Switch>
          </Stack>
        )}
      </For>
    </Grid>
  );
};
