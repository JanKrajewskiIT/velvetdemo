import { useI18n } from '@jankrajewskiit/i18n';
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

export const ScrollAreaDemo = () => {
  const { ts } = useI18n();

  return (
    <Stack gap={5}>
      <Stack gap={2}>
        <SectionLabel>{ts('library.layout.scrollArea.vertical')}</SectionLabel>
        <Surface variant="raised" clip>
          <ScrollArea maxHeight={192} label={ts('library.layout.scrollArea.topics')}>
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
        <SectionLabel>{ts('library.layout.scrollArea.horizontal')}</SectionLabel>
        <ScrollArea orientation="horizontal" label={ts('library.layout.scrollArea.filters')}>
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
};
