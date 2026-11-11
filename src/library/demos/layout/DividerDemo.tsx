import { useI18n } from '@jankrajewskiit/i18n';
import { Divider, SectionLabel, Stack, Text } from '@jankrajewskiit/ui';

import styles from './DividerDemo.module.css';

export const DividerDemo = () => {
  const { ts } = useI18n();

  return (
    <Stack gap={4}>
      <SectionLabel>{ts('library.layout.divider.plain')}</SectionLabel>
      <Text>{ts('library.layout.divider.before')}</Text>
      <Divider />
      <Text>{ts('library.layout.divider.after')}</Text>
      <SectionLabel>{ts('library.layout.divider.labelled')}</SectionLabel>
      <Divider label={ts('library.layout.divider.or')} />
      <SectionLabel>{ts('library.layout.divider.vertical')}</SectionLabel>
      <div class={styles.vertical}>
        <Text>{ts('library.layout.divider.before')}</Text>
        <Divider orientation="vertical" />
        <Text>{ts('library.layout.divider.after')}</Text>
      </div>
    </Stack>
  );
};
