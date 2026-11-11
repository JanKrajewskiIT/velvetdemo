import { useI18n } from '@jankrajewskiit/i18n';
import { Grid, SectionLabel, Stack, Surface, Text } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

const GRID_CELLS = ['one', 'two', 'three', 'four', 'five', 'six'] as const;
const COLUMN_CELLS = ['one', 'two', 'three'] as const;

const Box = (props: { children: string }) => (
  <Surface variant="subtle" padding="md">
    <Text variant="caption" as="span" tone="inherit" mono>
      {props.children}
    </Text>
  </Surface>
);

export const StackGridDemo = () => {
  const { ts } = useI18n();

  return (
    <Stack gap={5}>
      <Stack gap={2}>
        <SectionLabel>{ts('library.layout.stackGrid.stackRow')}</SectionLabel>
        <Stack direction="row" gap={2} align="center" wrap>
          <Box>gap 2</Box>
          <Box>row</Box>
          <Box>stack</Box>
        </Stack>
      </Stack>
      <Stack gap={2}>
        <SectionLabel>{ts('library.layout.stackGrid.stackDivider')}</SectionLabel>
        <Stack gap={3} divider>
          <Text>First</Text>
          <Text>Second</Text>
          <Text>Third</Text>
        </Stack>
      </Stack>
      <Stack gap={2}>
        <SectionLabel>{ts('library.layout.stackGrid.gridAuto')}</SectionLabel>
        <Grid min={120} gap={3}>
          <For each={GRID_CELLS}>{(cell) => <Box>{cell}</Box>}</For>
        </Grid>
      </Stack>
      <Stack gap={2}>
        <SectionLabel>{ts('library.layout.stackGrid.gridColumns')}</SectionLabel>
        <Grid columns={3} gap={3}>
          <For each={COLUMN_CELLS}>{(cell) => <Box>{cell}</Box>}</For>
        </Grid>
      </Stack>
    </Stack>
  );
};
