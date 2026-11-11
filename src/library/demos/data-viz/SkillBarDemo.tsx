import { useI18n } from '@jankrajewskiit/i18n';
import { SkillBar, Stack } from '@jankrajewskiit/ui';

export const SkillBarDemo = () => {
  const { ts } = useI18n();

  return (
    <Stack>
      <SkillBar
        label={ts('library.metrics.labels.typescript')}
        level={ts('library.metrics.labels.advanced')}
        value={90}
      />
      <SkillBar
        label={ts('library.metrics.labels.accessibility')}
        level={ts('library.metrics.labels.proficient')}
        value={72}
        tone="info"
      />
      <SkillBar
        label={ts('library.metrics.labels.systems')}
        level={ts('library.metrics.labels.developing')}
        value={48}
        tone="warning"
      />
    </Stack>
  );
};
