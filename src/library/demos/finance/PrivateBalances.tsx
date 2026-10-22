import { useI18n } from '@jankrajewskiit/i18n';
import { Money, Stack, Text, useMoneyHidden } from '@jankrajewskiit/ui';

export const PrivateBalances = () => {
  const { ts } = useI18n();
  const hidden = useMoneyHidden();
  return (
    <Stack gap={3}>
      <Stack direction="row" justify="space-between" wrap align="baseline">
        <Text>{ts('library.finance.controls.balance')}</Text>
        <Money amount={128450.75} currency="PLN" strong />
      </Stack>
      <Stack direction="row" justify="space-between" wrap align="baseline">
        <Text>{ts('library.finance.controls.available')}</Text>
        <Money amount={8420.5} currency="PLN" />
      </Stack>
      <Stack direction="row" justify="space-between" wrap align="baseline">
        <Text>{ts('library.finance.controls.publicAmount')}</Text>
        <Money amount={105.25} currency="EUR" hidden={false} />
      </Stack>
      <Text tone="secondary" role="status">
        {ts(hidden() ? 'library.finance.controls.hidden' : 'library.finance.controls.visible')}
      </Text>
    </Stack>
  );
};
