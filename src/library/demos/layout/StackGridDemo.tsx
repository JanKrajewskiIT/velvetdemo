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

export const StackGridDemo = () => (
  <Stack gap={5}>
    <Stack gap={2}>
      <SectionLabel>Stack · row · gap 2</SectionLabel>
      <Stack direction="row" gap={2} align="center" wrap>
        <Box>gap 2</Box>
        <Box>row</Box>
        <Box>stack</Box>
      </Stack>
    </Stack>
    <Stack gap={2}>
      <SectionLabel>Stack · divider · gap 3</SectionLabel>
      <Stack gap={3} divider>
        <Text>First</Text>
        <Text>Second</Text>
        <Text>Third</Text>
      </Stack>
    </Stack>
    <Stack gap={2}>
      <SectionLabel>Grid · auto-fill · min 120</SectionLabel>
      <Grid min={120} gap={3}>
        <For each={GRID_CELLS}>{(cell) => <Box>{cell}</Box>}</For>
      </Grid>
    </Stack>
    <Stack gap={2}>
      <SectionLabel>Grid · three columns</SectionLabel>
      <Grid columns={3} gap={3}>
        <For each={COLUMN_CELLS}>{(cell) => <Box>{cell}</Box>}</For>
      </Grid>
    </Stack>
  </Stack>
);
