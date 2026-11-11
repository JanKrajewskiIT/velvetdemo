import { DataGrid, type GridColumn } from '@jankrajewskiit/data';
import { useI18n } from '@jankrajewskiit/i18n';
import { Badge, Button, Stack, Text } from '@jankrajewskiit/ui';
import { createSignal, Show } from 'solid-js';

import { makeOrders, type Order, ORDER_STATUS_LABEL_KEY, ORDER_STATUS_TONE } from './orders';
import styles from './VirtualDataGridDemo.module.css';

const ROW_COUNT = 10_000;
const ORDERS = makeOrders(ROW_COUNT);
const ALTERNATE_ORDERS = ORDERS.map((order) => ({ ...order, amount: order.amount + 250 }));

export const VirtualDataGridDemo = () => {
  const { ts, locale } = useI18n();
  const euro = new Intl.NumberFormat(locale(), { style: 'currency', currency: 'EUR' });
  const COLUMNS: GridColumn<Order>[] = [
    { key: 'reference', label: ts('library.data.columns.order'), width: 140, pin: 'left', locked: true },
    { key: 'customer', label: ts('library.data.columns.customer'), width: 240 },
    {
      key: 'status',
      label: ts('library.data.columns.status'),
      width: 160,
      render: (row) => (
        <Badge tone={ORDER_STATUS_TONE[row.status]} dot>
          {ts(ORDER_STATUS_LABEL_KEY[row.status])}
        </Badge>
      ),
    },
    {
      key: 'amount',
      label: ts('library.data.columns.amount'),
      type: 'number',
      width: 140,
      pin: 'right',
      render: (row) => euro.format(row.amount),
    },
  ];
  const [datasetKey, setDatasetKey] = createSignal(0);
  const [expandedDetails, setExpandedDetails] = createSignal(false);
  const alternateDataset = () => datasetKey() % 2 === 1;
  return (
    <>
      <Text variant="caption" tone="secondary">
        {ts('library.data.virtualGrid.instructions')}
      </Text>
      <DataGrid
        label={ts('library.data.virtualGrid.label')}
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
              {row.reference} · {row.customer} · {ts(ORDER_STATUS_LABEL_KEY[row.status])}
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
