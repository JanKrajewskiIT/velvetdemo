import {
  Count,
  EmptyText,
  highlightMatch,
  Kbd,
  Mark,
  SectionLabel,
  Separator,
  Stack,
  Text,
  Weekday,
  weekdayNames,
} from '@jankrajewskiit/ui';
import { For } from 'solid-js';

const WEEK_START = 1;
const WEEKDAY_LENGTH = 2;
const DAYS_IN_WEEK = 7;

const todayIndex = (): number => (new Date().getDay() - WEEK_START + DAYS_IN_WEEK) % DAYS_IN_WEEK;

export const TextEmphasisDemo = () => (
  <Stack gap={5}>
    <Stack gap={2}>
      <SectionLabel>Mark</SectionLabel>
      <Text>{highlightMatch('Velvet design system', 'des')}</Text>
      <Text>{highlightMatch('Zażółć gęślą jaźń', 'zazolc')}</Text>
      <Text>
        Thanks <Mark variant="mention">@anna</Mark> — the <Mark variant="text">final</Mark> copy is in.
      </Text>
    </Stack>
    <Stack gap={2}>
      <SectionLabel>Kbd</SectionLabel>
      <Stack direction="row" gap={3} align="center" wrap>
        <Kbd keys="mod+k" />
        <Kbd keys={['shift', 'enter']} />
        <Kbd size="sm">F5</Kbd>
        <Kbd plain keys="mod+s" />
      </Stack>
    </Stack>
    <Stack gap={2}>
      <SectionLabel icon="clock" end={<Count value={3} size="sm" tone="soft" label="3 items" />}>
        Section label
      </SectionLabel>
      <Stack direction="row" gap={2} align="center" wrap>
        <Text variant="body-sm" as="span">
          Design
        </Text>
        <Separator variant="text">/</Separator>
        <Text variant="body-sm" as="span">
          Library
        </Text>
        <Separator />
        <Text variant="body-sm" as="span">
          Draft
        </Text>
        <Separator variant="dash" />
        <Text variant="body-sm" as="span">
          3 min read
        </Text>
      </Stack>
    </Stack>
    <Stack gap={2}>
      <SectionLabel>Weekday</SectionLabel>
      <Stack direction="row" gap={4} wrap>
        <For each={weekdayNames('en-US', WEEK_START, WEEKDAY_LENGTH)}>
          {(name, index) => <Weekday today={index() === todayIndex()}>{name}</Weekday>}
        </For>
      </Stack>
    </Stack>
    <EmptyText icon="inbox" dashed>
      No saved filters
    </EmptyText>
  </Stack>
);
