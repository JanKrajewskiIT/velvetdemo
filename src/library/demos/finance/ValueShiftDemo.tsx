import { useI18n } from '@jankrajewskiit/i18n';
import { Money, Stack, Text, ValueShift } from '@jankrajewskiit/ui';

export const ValueShiftDemo = () => {
  const { ts } = useI18n();
  return (
    <Stack>
      <Stack direction="row" wrap align="baseline" justify="space-between">
        <Text>{ts('library.finance.controls.expectedReturn')}</Text>
        <ValueShift from={4.2} to={5.1} better={(from, to) => to > from} />
      </Stack>
      <Stack direction="row" wrap align="baseline" justify="space-between">
        <Text>{ts('library.finance.controls.executionCost')}</Text>
        <ValueShift
          from={8.5}
          to={12.2}
          label={ts('library.finance.controls.executionCost')}
          worse={(from, to) => to > from}
          format={(value) => <Money amount={value} currency="PLN" size="sm" />}
        />
      </Stack>
      <Stack direction="row" wrap align="baseline" justify="space-between">
        <Text>{ts('library.finance.controls.rating')}</Text>
        <ValueShift from="BBB" to="A" better={(from, to) => from === 'BBB' && to === 'A'} />
      </Stack>
    </Stack>
  );
};
