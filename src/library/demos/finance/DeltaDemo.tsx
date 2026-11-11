import { useI18n } from '@jankrajewskiit/i18n';
import { Delta, Stack } from '@jankrajewskiit/ui';

export const DeltaDemo = () => {
  const { ts } = useI18n();
  return (
    <Stack gap={5}>
      <Stack direction="row" wrap align="baseline">
        <Delta value={2.45} label={ts('library.finance.controls.price')} size="lg" />
        <Delta value={-1.28} variant="pill" />
        <Delta value={0.004} flatThreshold={0.01} variant="solid" />
        <Delta value={null} />
      </Stack>
      <Stack direction="row" wrap>
        <Delta value={-12} unit=" bp" digits={0} label={ts('library.finance.controls.yield')} />
        <Delta value={0.5} format="pp" digits={1} label={ts('library.finance.controls.allocation')} />
        <Delta value={42.5} format="number" unit=" PLN" arrow={false} variant="solid" />
      </Stack>
    </Stack>
  );
};
