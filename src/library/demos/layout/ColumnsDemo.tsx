import { useI18n } from '@jankrajewskiit/i18n';
import { Column, Columns, SectionLabel, Stack, Surface, Text } from '@jankrajewskiit/ui';

export const ColumnsDemo = () => {
  const { ts } = useI18n();

  return (
    <Stack gap={5}>
      <SectionLabel>{ts('library.layout.columns.weighted')}</SectionLabel>
      <Columns gap={4}>
        <Column grow={2} basis={360}>
          <Surface variant="subtle" padding="md">
            <Text>{ts('library.layout.columns.main')}</Text>
          </Surface>
        </Column>
        <Column grow={1} basis={200}>
          <Surface variant="subtle" padding="md">
            <Text>{ts('library.layout.columns.aside')}</Text>
          </Surface>
        </Column>
      </Columns>
      <SectionLabel>{ts('library.layout.columns.wrapping')}</SectionLabel>
      <Columns gap={4}>
        <Column basis={480}>
          <Surface variant="subtle" padding="md">
            <Text>{ts('library.layout.columns.first')}</Text>
          </Surface>
        </Column>
        <Column basis={480}>
          <Surface variant="subtle" padding="md">
            <Text>{ts('library.layout.columns.second')}</Text>
          </Surface>
        </Column>
      </Columns>
    </Stack>
  );
};
