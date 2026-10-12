import { DataGrid, type GridColumn } from '@jankrajewskiit/data';
import { Badge } from '@jankrajewskiit/ui';

import { makeOrders, type Order, ORDER_STATUS_TONE } from './orders';

const ROW_COUNT = 10_000;
const euro = new Intl.NumberFormat('en', { style: 'currency', currency: 'EUR' });

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
  const rows = makeOrders(ROW_COUNT);
  return (
    <DataGrid
      label="Ten thousand orders"
      columns={COLUMNS}
      rows={rows}
      getRowId={(row) => row.reference}
      virtual
      overscan={8}
      height={320}
      searchable
      columnManager
      viewSettings
      defaultView={{ sort: { key: 'amount', dir: 'desc' } }}
      renderDetail={(row) => (
        <p>
          {row.reference} · {row.customer} · {row.status}
        </p>
      )}
      footer
    />
  );
};
