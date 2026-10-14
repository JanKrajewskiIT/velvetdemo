import { DataGrid, type GridColumn } from '@jankrajewskiit/data';
import { useI18n } from '@jankrajewskiit/i18n';
import { Badge, Button, Stack, Text } from '@jankrajewskiit/ui';
import { createSignal, Show } from 'solid-js';

import { makeOrders, type Order, ORDER_STATUS_TONE } from './orders';
import styles from './VirtualDataGridDemo.module.css';

const ROW_COUNT = 10_000;
const euro = new Intl.NumberFormat('en', { style: 'currency', currency: 'EUR' });
const ORDERS = makeOrders(ROW_COUNT);
const ALTERNATE_ORDERS = ORDERS.map((order) => ({ ...order, amount: order.amount + 250 }));

const COLUMNS: GridColumn<Order>[] = [
  { key: 'reference', label: 'Order', width: 140, pin: 'left', locked: true },
  { key: 'customer', label: 'Customer', width: 240 },
  {
    key: 'status',
    label: 'Status',
    width: 160,
    render: (row) => (
      <Badge tone={ORDER_STATUS_TONE[row.status]} dot>
        {row.status}
      </Badge>
    ),
  },
  {
    key: 'amount',
    label: 'Amount',
    type: 'number',
    width: 140,
    pin: 'right',
    render: (row) => euro.format(row.amount),
  },
];

export const VirtualDataGridDemo = () => {
  const { ts } = useI18n();
  const [datasetKey, setDatasetKey] = createSignal(0);
  const [expandedDetails, setExpandedDetails] = createSignal(false);
  const alternateDataset = () => datasetKey() % 2 === 1;
  return (
    <>
      <Text variant="caption" tone="secondary">
        {ts('library.data.virtualGrid.instructions')}
      </Text>
      <DataGrid
        label="Ten thousand orders"
        columns={COLUMNS}
        rows={alternateDataset() ? ALTERNATE_ORDERS : ORDERS}
        getRowId={(row) => row.reference}
        dataKey={datasetKey()}
        virtual
        overscan={8}
        height={320}
        searchable
        columnManager
        viewSettings
        defaultView={{ sort: { key: 'amount', dir: 'desc' } }}
        measurementKey={expandedDetails()}
        toolbarEnd={
          <Stack direction="row" wrap>
            <Button size="sm" variant="secondary" onClick={() => setDatasetKey((key) => key + 1)}>
              {ts(alternateDataset() ? 'library.data.virtualGrid.useBase' : 'library.data.virtualGrid.useAlternate')}
            </Button>
            <Button size="sm" variant="secondary" onClick={() => setExpandedDetails((expanded) => !expanded)}>
              {ts(
                expandedDetails()
                  ? 'library.data.virtualGrid.compactDetails'
                  : 'library.data.virtualGrid.expandDetails',
              )}
            </Button>
          </Stack>
        }
        renderDetail={(row) => (
          <div class={styles.detail} data-expanded={expandedDetails() ? 'true' : undefined}>
            <span>
              {row.reference} · {row.customer} · {row.status}
            </span>
            <Show when={expandedDetails()}>
              <span>{ts('library.data.virtualGrid.detailNote', { amount: euro.format(row.amount) })}</span>
            </Show>
          </div>
        )}
        footer
      />
    </>
  );
};
