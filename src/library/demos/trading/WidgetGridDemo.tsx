import { useI18n } from '@jankrajewskiit/i18n';
import type { WidgetGridLayout, WidgetGridWidget } from '@jankrajewskiit/ui';
import { Button, PriceCell, Stack, Stat, Switch, Text, WidgetGrid } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

const INITIAL_LAYOUT: WidgetGridLayout = {};

export const WidgetGridDemo = () => {
  const { ts, formatNumber } = useI18n();
  const [editing, setEditing] = createSignal(true);
  const [layout, setLayout] = createSignal(INITIAL_LAYOUT);
  const widgets: readonly WidgetGridWidget[] = [
    {
      id: 'price',
      get title() {
        return ts('library.trading.workspace.quote');
      },
      content: <PriceCell value={142.5} change={1.79} currency="EUR" label="GLBX" />,
    },
    {
      id: 'balance',
      get title() {
        return ts('library.finance.controls.balance');
      },
      content: (
        <Stat
          variant="flat"
          label={ts('library.finance.controls.balance')}
          value={formatNumber(100000, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })}
        />
      ),
    },
    {
      id: 'notes',
      get title() {
        return ts('library.trading.workspace.notes');
      },
      content: <Text>{ts('library.trading.workspace.orderHint')}</Text>,
    },
  ];

  return (
    <Stack>
      <Stack direction="row" wrap align="center">
        <Switch
          label={ts('library.trading.workspace.editLayout')}
          checked={editing()}
          onChange={(event) => setEditing(event.currentTarget.checked)}
        />
        <Button variant="secondary" onClick={() => setLayout(INITIAL_LAYOUT)}>
          {ts('library.trading.workspace.reset')}
        </Button>
      </Stack>
      <WidgetGrid widgets={widgets} columns={3} editing={editing()} layout={layout()} onLayoutChange={setLayout} />
    </Stack>
  );
};
