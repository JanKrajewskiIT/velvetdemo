import { Count, IconTile, ListItem, SectionLabel, Stack } from '@jankrajewskiit/ui';

import { OptionsDemo } from './OptionsDemo';

export const RowsDemo = () => (
  <Stack gap={5}>
    <Stack gap={2}>
      <SectionLabel>List item</SectionLabel>
      <Stack gap={1}>
        <ListItem
          leading={<IconTile icon="file-text" />}
          title="Quarterly report"
          description="Updated 2 hours ago"
          trailing={<Count value={2} label="2 comments" />}
        />
        <ListItem
          leading={<IconTile icon="folder" tone="info" />}
          title="Projects"
          description="Selected row"
          selected
        />
        <ListItem leading={<IconTile icon="lock" />} title="Archive" description="Disabled row" disabled />
      </Stack>
    </Stack>
    <Stack gap={2}>
      <SectionLabel>Option</SectionLabel>
      <OptionsDemo />
    </Stack>
    <Stack gap={2}>
      <SectionLabel>Icon tile</SectionLabel>
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
