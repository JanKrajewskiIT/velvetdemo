import { IconTile, SectionLabel, Stack } from '@jankrajewskiit/ui';

import { OptionsDemo } from './OptionsDemo';

export const RowsDemo = () => (
  <Stack gap={5}>
    <Stack gap={2}>
      <SectionLabel>Option</SectionLabel>
      <OptionsDemo />
    </Stack>
    <Stack gap={2}>
      <SectionLabel>IconTile</SectionLabel>
      <Stack direction="row" gap={3} align="center" wrap>
        <IconTile icon="bell" tone="info" />
        <IconTile icon="circle-check" tone="success" />
        <IconTile icon="triangle-alert" tone="warning" />
        <IconTile icon="circle-x" tone="danger" />
        <IconTile icon="sparkles" tone="brand" shape="circle" size="xl" halo />
      </Stack>
    </Stack>
  </Stack>
);
