import { useI18n } from '@jankrajewskiit/i18n';
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
  const { ts } = useI18n();

  return (
    <Stack gap={5}>
      <Stack gap={3}>
        <SectionLabel>{ts('library.atoms.indicator.countAndPlacement')}</SectionLabel>
        <Stack direction="row" gap={5} align="center" wrap>
          <For each={PLACEMENTS}>
            {(placement) => (
              <Stack gap={2} align="center">
                <Indicator
                  count={unread()}
                  placement={placement}
                  label={ts('library.atoms.indicator.unreadMessages', { count: unread() })}
                >
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
            {ts('library.atoms.indicator.markAllRead')}
          </Button>
          <Button size="sm" variant="secondary" onClick={() => setUnread(128)}>
            {ts('library.atoms.indicator.restoreUnread')}
          </Button>
        </Stack>
      </Stack>
      <Stack gap={3}>
        <SectionLabel>{ts('library.atoms.indicator.presenceInsetText')}</SectionLabel>
        <Stack direction="row" gap={5} align="center" wrap>
          <Indicator
            dot
            tone="success"
            overlap="circle"
            placement="bottom-end"
            label={ts('library.atoms.indicator.available')}
          >
            <IconTile icon="user" shape="circle" size="lg" />
          </Indicator>
          <Indicator count={7} tone="danger" size="md" inset label={ts('library.atoms.indicator.notifications')}>
            <IconTile icon="bell" size="xl" />
          </Indicator>
          <Indicator
            count={ts('library.atoms.indicator.badgeNew')}
            tone="soft"
            label={ts('library.atoms.indicator.newRelease')}
          >
            <IconTile icon="sparkles" size="lg" />
          </Indicator>
        </Stack>
      </Stack>
    </Stack>
  );
};
