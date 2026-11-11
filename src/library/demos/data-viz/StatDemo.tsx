import { useI18n } from '@jankrajewskiit/i18n';
import { Stack, Stat } from '@jankrajewskiit/ui';

export const StatDemo = () => {
  const { ts, formatNumber } = useI18n();

  return (
    <Stack>
      <Stat
        label={ts('library.metrics.labels.revenue')}
        value={formatNumber(48290, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })}
        delta={formatNumber(0.124, { style: 'percent', signDisplay: 'always', maximumFractionDigits: 1 })}
        hint={ts('library.metrics.labels.revenueHint')}
      />
      <Stat
        variant="flat"
        label={ts('library.metrics.labels.seats')}
        value={formatNumber(8420)}
        delta={formatNumber(0.051, { style: 'percent', signDisplay: 'always', maximumFractionDigits: 1 })}
        hint={ts('library.metrics.labels.seatsHint')}
      />
      <Stat
        variant="flat"
        label={ts('library.metrics.labels.response')}
        value={formatNumber(184, { style: 'unit', unit: 'millisecond' })}
        delta={formatNumber(-0.021, { style: 'percent', signDisplay: 'always', maximumFractionDigits: 1 })}
        hint={ts('library.metrics.labels.responseHint')}
      />
    </Stack>
  );
};
