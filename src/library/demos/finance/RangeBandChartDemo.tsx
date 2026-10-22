import { useI18n } from '@jankrajewskiit/i18n';
import { Button, RangeBandChart, Stack, Text } from '@jankrajewskiit/ui';
import { createMemo, createSignal } from 'solid-js';

const BASELINE = [0.4, 0.8, 0.5, 1.2, 1.4, 1.1, 1.6, 2.1] as const;
const STRESS = [0.4, 0.8, -1.4, -0.9, 0.2, 1.1, 3.4, 2.1] as const;

export const RangeBandChartDemo = () => {
  const { locale, ts } = useI18n();
  const [stress, setStress] = createSignal(false);
  const formatter = createMemo(() => new Intl.NumberFormat(locale(), { style: 'percent', maximumFractionDigits: 1 }));
  const data = createMemo(() =>
    (stress() ? STRESS : BASELINE).map((value, index) => {
      const mid = 0.3 + index * 0.2;
      return {
        label: ts('library.finance.controls.step', { number: index + 1 }),
        lo: mid - 0.8,
        hi: mid + 0.8,
        mid,
        value,
      };
    }),
  );
  return (
    <Stack>
      <Stack direction="row" wrap role="group" aria-label={ts('library.finance.controls.scenario')}>
        <Button size="sm" variant="secondary" aria-pressed={!stress()} onClick={() => setStress(false)}>
          {ts('library.finance.controls.baseline')}
        </Button>
        <Button size="sm" variant="secondary" aria-pressed={stress()} onClick={() => setStress(true)}>
          {ts('library.finance.controls.stress')}
        </Button>
      </Stack>
      <RangeBandChart
        data={data()}
        label={ts('library.finance.controls.chart')}
        bandLabel={ts('library.finance.controls.band')}
        midLabel={ts('library.finance.controls.median')}
        valueLabel={ts('library.finance.controls.actual')}
        height={280}
        format={(value) => formatter().format(value / 100)}
      />
      <Text tone="secondary">{ts('library.finance.controls.chartHelp')}</Text>
    </Stack>
  );
};
