import { Button, ScrollArea, SectionLabel, Stack, Surface, Text } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import styles from './ScrollAreaDemo.module.css';

const TOPICS = [
  'Accessibility',
  'Analytics',
  'Billing',
  'Branding',
  'Charts',
  'Checkout',
  'Components',
  'Dark mode',
  'Data grid',
  'Design tokens',
  'Forms',
  'Icons',
  'Motion',
  'Navigation',
  'Onboarding',
  'Typography',
];

export const ScrollAreaDemo = () => (
  <Stack gap={5}>
    <Stack gap={2}>
      <SectionLabel>Vertical</SectionLabel>
      <Surface variant="raised" clip>
        <ScrollArea maxHeight={192} label="Topics">
          <ul class={styles.list}>
            <For each={TOPICS}>
              {(topic) => (
                <li>
                  <Text as="span">{topic}</Text>
                </li>
              )}
            </For>
          </ul>
        </ScrollArea>
      </Surface>
    </Stack>
    <Stack gap={2}>
      <SectionLabel>Horizontal</SectionLabel>
      <ScrollArea orientation="horizontal" label="Filters">
        <For each={TOPICS}>
          {(topic) => (
            <Button variant="secondary" size="sm">
              {topic}
            </Button>
          )}
        </For>
      </ScrollArea>
    </Stack>
  </Stack>
);
