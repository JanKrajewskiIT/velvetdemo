import { useI18n } from '@jankrajewskiit/i18n';
import { InstrumentLabel, Stack, Text } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

export const InstrumentLabelDemo = () => {
  const { ts } = useI18n();
  const [selected, setSelected] = createSignal('GLBX');
  return (
    <Stack>
      <Stack direction="row" wrap role="group" aria-label={ts('library.finance.controls.selectInstrument')}>
        <InstrumentLabel
          symbol="GLBX"
          name={ts('library.finance.controls.fund')}
          exchange="XETRA"
          meta="EUR"
          showMark
          selected={selected() === 'GLBX'}
          onClick={() => setSelected('GLBX')}
        />
        <InstrumentLabel
          symbol="TBND"
          name={ts('library.finance.controls.treasury')}
          exchange="LSE"
          showMark
          size="sm"
          selected={selected() === 'TBND'}
          onClick={() => setSelected('TBND')}
        />
      </Stack>
      <Text role="status" tone="secondary">
        {ts('library.finance.controls.selected', { symbol: selected() })}
      </Text>
    </Stack>
  );
};
