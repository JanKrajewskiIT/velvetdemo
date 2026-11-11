import { useI18n } from '@jankrajewskiit/i18n';
import { Button, PriceCell, Stack, Switch } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

const INITIAL_PRICE = 142.5;
const TICK = 0.25;

export const PriceCellDemo = () => {
  const { ts } = useI18n();
  const [price, setPrice] = createSignal(INITIAL_PRICE);
  const [hidden, setHidden] = createSignal(false);

  return (
    <Stack>
      <Stack direction="row" wrap align="baseline">
        <PriceCell
          value={price()}
          change={((price() - INITIAL_PRICE) / INITIAL_PRICE) * 100}
          currency="EUR"
          size="lg"
          hidden={hidden()}
          label="GLBX"
        />
        <PriceCell value={null} label={ts('library.trading.workspace.missingQuote')} />
      </Stack>
      <Stack direction="row" wrap>
        <Button variant="secondary" onClick={() => setPrice((value) => value - TICK)}>
          {ts('library.trading.workspace.lowerPrice')}
        </Button>
        <Button variant="secondary" onClick={() => setPrice((value) => value + TICK)}>
          {ts('library.trading.workspace.higherPrice')}
        </Button>
      </Stack>
      <Switch
        label={ts('library.finance.controls.hideAmounts')}
        checked={hidden()}
        onChange={(event) => setHidden(event.currentTarget.checked)}
      />
    </Stack>
  );
};
