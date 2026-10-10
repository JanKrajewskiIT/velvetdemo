import type { IndicatorPlacement } from '@jankrajewskiit/ui';
import { Button, IconTile, Indicator, SectionLabel, Stack, Text } from '@jankrajewskiit/ui';
import { createSignal, For } from 'solid-js';

const PLACEMENTS = [
  'top-end',
  'top-start',
  'bottom-end',
  'bottom-start',
] as const satisfies readonly IndicatorPlacement[];

export const IndicatorDemo = () => {
  const [unread, setUnread] = createSignal(128);

  return (
    <Stack gap={5}>
      <Stack gap={3}>
        <SectionLabel>Count and placement</SectionLabel>
        <Stack direction="row" gap={5} align="center" wrap>
          <For each={PLACEMENTS}>
            {(placement) => (
              <Stack gap={2} align="center">
                <Indicator count={unread()} placement={placement} label={`${unread()} unread messages`}>
                  <IconTile icon="mail" size="lg" />
                </Indicator>
                <Text variant="caption" mono>
                  {placement}
                </Text>
              </Stack>
            )}
          </For>
        </Stack>
        <Stack direction="row" gap={2} wrap>
          <Button size="sm" variant="secondary" onClick={() => setUnread(0)}>
            Mark all as read
          </Button>
          <Button size="sm" variant="secondary" onClick={() => setUnread(128)}>
            Restore unread
          </Button>
        </Stack>
      </Stack>
      <Stack gap={3}>
        <SectionLabel>Presence, inset and text</SectionLabel>
        <Stack direction="row" gap={5} align="center" wrap>
          <Indicator dot tone="success" overlap="circle" placement="bottom-end" label="Available">
            <IconTile icon="user" shape="circle" size="lg" />
          </Indicator>
          <Indicator count={7} tone="danger" size="md" inset label="7 notifications">
            <IconTile icon="bell" size="xl" />
          </Indicator>
          <Indicator count="New" tone="soft" label="New release">
            <IconTile icon="sparkles" size="lg" />
          </Indicator>
        </Stack>
      </Stack>
    </Stack>
  );
};
