import type { TextVariant } from '@jankrajewskiit/ui';
import { SectionLabel, Stack, Text } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

interface RoleSample {
  role: TextVariant;
  sample: string;
}

const ROLES: readonly RoleSample[] = [
  { role: 'display-sm', sample: 'Quiet confidence' },
  { role: 'h2', sample: 'Section heading' },
  { role: 'h4', sample: 'Card heading' },
  { role: 'title', sample: 'Panel title' },
  { role: 'body-lg', sample: 'Lead paragraph' },
  { role: 'body', sample: 'Body copy for reading' },
  { role: 'body-sm', sample: 'Secondary body copy' },
  { role: 'label', sample: 'Field label' },
  { role: 'caption', sample: 'Caption and metadata' },
  { role: 'overline', sample: 'Overline' },
  { role: 'kpi', sample: '1,284' },
];

export const TextRolesDemo = () => (
  <Stack gap={5}>
    <Stack gap={2}>
      <SectionLabel>Roles</SectionLabel>
      <Stack gap={2} divider>
        <For each={ROLES}>
          {(item) => (
            <Stack direction="row" gap={3} align="baseline" justify="space-between" wrap>
              <Text variant={item.role} as="span">
                {item.sample}
              </Text>
              <Text variant="caption" tone="tertiary" mono>
                {item.role}
              </Text>
            </Stack>
          )}
        </For>
      </Stack>
    </Stack>
    <Stack gap={2}>
      <SectionLabel>Tone and modifiers</SectionLabel>
      <Stack direction="row" gap={4} align="baseline" wrap>
        <Text as="span" tone="secondary">
          Secondary
        </Text>
        <Text as="span" tone="brand">
          Brand
        </Text>
        <Text as="span" tone="success">
          Success
        </Text>
        <Text as="span" tone="danger">
          Danger
        </Text>
        <Text as="span" mono tabular>
          1,234.50
        </Text>
      </Stack>
    </Stack>
  </Stack>
);
