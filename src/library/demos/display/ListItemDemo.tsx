import { useI18n } from '@jankrajewskiit/i18n';
import { Count, IconTile, ListItem, Stack } from '@jankrajewskiit/ui';

export const ListItemDemo = () => {
  const { ts } = useI18n();

  return (
    <Stack gap={1}>
      <ListItem
        leading={<IconTile icon="file-text" />}
        title={ts('library.display.rows.report')}
        description={ts('library.display.rows.updated')}
        trailing={<Count value={2} label={ts('library.display.rows.comments')} />}
      />
      <ListItem
        leading={<IconTile icon="folder" tone="info" />}
        title={ts('library.display.rows.projects')}
        description={ts('library.display.rows.selected')}
        selected
      />
      <ListItem
        leading={<IconTile icon="lock" />}
        title={ts('library.display.rows.archive')}
        description={ts('library.display.rows.disabled')}
        disabled
      />
    </Stack>
  );
};
