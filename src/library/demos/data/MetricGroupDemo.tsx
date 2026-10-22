import { useI18n } from '@jankrajewskiit/i18n';
import { MetricGroup, type MetricItem, SectionLabel, Stack } from '@jankrajewskiit/ui';
import { createMemo } from 'solid-js';

export const MetricGroupDemo = () => {
  const { locale, ts } = useI18n();
  const number = createMemo(() => new Intl.NumberFormat(locale()));
  const items = (): MetricItem[] => [
    { label: ts('library.data.metrics.ordersUp'), value: number().format(1248), dir: 'up' },
    { label: ts('library.data.metrics.returnsDown'), value: number().format(12), dir: 'down' },
    { label: ts('library.data.metrics.regionsFlat'), value: number().format(8), dir: 'flat' },
  ];

  return (
    <Stack gap={5}>
      <Stack gap={2}>
        <SectionLabel>{ts('library.data.metrics.responsive')}</SectionLabel>
        <MetricGroup items={items()} minWidth={100} />
      </Stack>
      <Stack gap={2}>
        <SectionLabel>{ts('library.data.metrics.subtle')}</SectionLabel>
        <MetricGroup items={items()} columns={3} size="sm" variant="subtle" />
      </Stack>
      <Stack gap={2}>
        <SectionLabel>{ts('library.data.metrics.large')}</SectionLabel>
        <MetricGroup items={items()} size="lg" />
      </Stack>
    </Stack>
  );
};
