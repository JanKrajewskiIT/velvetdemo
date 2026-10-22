import { Money, Stack } from '@jankrajewskiit/ui';

export const MoneyDemo = () => (
  <Stack gap={5}>
    <Stack direction="row" wrap align="baseline">
      <Money amount={128450.75} currency="PLN" size="lg" strong />
      <Money amount={948.5} currency="EUR" currencyDisplay="symbol" />
    </Stack>
    <Stack direction="row" wrap align="baseline">
      <Money amount={1245000} currency="USD" compact />
      <Money amount={342.15} currency="PLN" signed colored />
      <Money amount={-82.4} currency="PLN" signed colored size="sm" />
      <Money amount={null} currency="PLN" />
    </Stack>
  </Stack>
);
