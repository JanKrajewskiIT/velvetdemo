import { useI18n } from '@jankrajewskiit/i18n';
import { Button, SectionLabel, Stack, Text, UsageMeter } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

export const UsageMeterDemo = () => {
  const { ts } = useI18n();
  const [usage, setUsage] = createSignal<number | null>(null);
  const toggleUsage = () => setUsage((value) => (value === null ? 48 : null));

  return (
    <Stack gap={5}>
      <Stack gap={3}>
        <SectionLabel>{ts('library.data.usage.defaultThresholds')}</SectionLabel>
        <UsageMeter label={ts('library.data.usage.storage')} value={69} unit=" GB" />
        <UsageMeter label={ts('library.data.usage.warning')} value={70} />
        <UsageMeter label={ts('library.data.usage.danger')} value={90} />
      </Stack>
      <Stack gap={3}>
        <UsageMeter
          label={ts('library.data.usage.custom')}
          value={80}
          thresholds={[0.5, 0.8]}
          hint={ts('library.data.usage.customHint')}
        />
        <UsageMeter
          label={ts('library.data.usage.complete')}
          value={100}
          size="sm"
          tone="success"
          valueText={ts('library.data.usage.completeValue')}
        />
      </Stack>
      <Stack gap={2}>
        <Text variant="caption" tone="secondary">
          {ts('library.data.usage.unknownHint')}
        </Text>
        <UsageMeter label={ts('library.data.usage.unknown')} value={usage()} />
        <Button size="sm" variant="secondary" onClick={toggleUsage}>
          {ts('library.data.usage.toggle')}
        </Button>
      </Stack>
    </Stack>
  );
};
