import { useI18n } from '@jankrajewskiit/i18n';
import { Stack, Text, VisuallyHidden } from '@jankrajewskiit/ui';

export const VisuallyHiddenDemo = () => {
  const { ts } = useI18n();

  return (
    <Stack gap={3}>
      <Text>{ts('library.atoms.visuallyHidden.intro')}</Text>
      <Text>
        {ts('library.atoms.visuallyHidden.visible')}
        <VisuallyHidden>. {ts('library.atoms.visuallyHidden.hidden')}</VisuallyHidden>
      </Text>
    </Stack>
  );
};
