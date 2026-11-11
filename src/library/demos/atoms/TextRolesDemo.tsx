import { useI18n } from '@jankrajewskiit/i18n';
import type { TextVariant } from '@jankrajewskiit/ui';
import { SectionLabel, Stack, Text } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

interface RoleSample {
  role: TextVariant;
  sampleKey: string;
}

const ROLES = [
  { role: 'display-lg', sampleKey: 'library.atoms.textRoles.samples.displayLg' },
  { role: 'display-md', sampleKey: 'library.atoms.textRoles.samples.displayMd' },
  { role: 'display-sm', sampleKey: 'library.atoms.textRoles.samples.displaySm' },
  { role: 'h1', sampleKey: 'library.atoms.textRoles.samples.h1' },
  { role: 'h2', sampleKey: 'library.atoms.textRoles.samples.h2' },
  { role: 'h3', sampleKey: 'library.atoms.textRoles.samples.h3' },
  { role: 'h4', sampleKey: 'library.atoms.textRoles.samples.h4' },
  { role: 'h5', sampleKey: 'library.atoms.textRoles.samples.h5' },
  { role: 'title', sampleKey: 'library.atoms.textRoles.samples.title' },
  { role: 'body-lg', sampleKey: 'library.atoms.textRoles.samples.bodyLg' },
  { role: 'body', sampleKey: 'library.atoms.textRoles.samples.body' },
  { role: 'body-sm', sampleKey: 'library.atoms.textRoles.samples.bodySm' },
  { role: 'label', sampleKey: 'library.atoms.textRoles.samples.label' },
  { role: 'caption', sampleKey: 'library.atoms.textRoles.samples.caption' },
  { role: 'overline', sampleKey: 'library.atoms.textRoles.samples.overline' },
  { role: 'section', sampleKey: 'library.atoms.textRoles.samples.section' },
  { role: 'kpi', sampleKey: 'library.atoms.textRoles.samples.kpi' },
] as const satisfies readonly RoleSample[];

export const TextRolesDemo = () => {
  const { ts } = useI18n();

  return (
    <Stack gap={5}>
      <Stack gap={2}>
        <SectionLabel>{ts('library.atoms.textRoles.roles')}</SectionLabel>
        <Stack gap={2} divider>
          <For each={ROLES}>
            {(item) => (
              <Stack direction="row" gap={3} align="baseline" justify="space-between" wrap>
                <Text variant={item.role} as="span">
                  {ts(item.sampleKey)}
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
        <SectionLabel>{ts('library.atoms.textRoles.toneAndModifiers')}</SectionLabel>
        <Stack direction="row" gap={4} align="baseline" wrap>
          <Text as="span" tone="secondary">
            {ts('library.atoms.textRoles.secondary')}
          </Text>
          <Text as="span" tone="brand">
            {ts('library.atoms.textRoles.brand')}
          </Text>
          <Text as="span" tone="success">
            {ts('library.atoms.textRoles.success')}
          </Text>
          <Text as="span" tone="danger">
            {ts('library.atoms.textRoles.danger')}
          </Text>
          <Text as="span" mono tabular>
            {ts('library.atoms.textRoles.numeric')}
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};
