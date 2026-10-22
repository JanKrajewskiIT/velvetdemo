import { useI18n } from '@jankrajewskiit/i18n';
import { PriceChange, Stack } from '@jankrajewskiit/ui';

export const PriceChangeDemo = () => {
  const { ts } = useI18n();
  return (
    <Stack gap={5}>
      <Stack direction="row" wrap align="baseline">
        <PriceChange value={2.45} label={ts('library.finance.controls.price')} size="lg" />
        <PriceChange value={-1.28} variant="pill" />
        <PriceChange value={0.004} flatThreshold={0.01} variant="solid" />
        <PriceChange value={null} />
      </Stack>
      <Stack direction="row" wrap>
        <PriceChange value={-12} format="bp" digits={0} label={ts('library.finance.controls.yield')} />
        <PriceChange value={0.5} format="pp" digits={1} label={ts('library.finance.controls.allocation')} />
        <PriceChange value={42.5} format="number" unit=" PLN" arrow={false} variant="solid" />
      </Stack>
    </Stack>
  );
};
