import { Badge, type VirtualColumn, VirtualTable } from '@jankrajewskiit/ui';

import { makeOrders, type Order, ORDER_STATUS_TONE } from './orders';
import styles from './VirtualTableDemo.module.css';

const ROW_COUNT = 100_000;
const euro = new Intl.NumberFormat('en', { style: 'currency', currency: 'EUR' });

const COLUMNS: VirtualColumn<Order>[] = [
  { key: 'reference', label: 'Order', width: 104 },
  { key: 'customer', label: 'Customer', flex: 2 },
  {
    key: 'status',
    label: 'Status',
    flex: 1,
    render: (row) => (
      <Badge tone={ORDER_STATUS_TONE[row.status]} size="sm" dot>
        {row.status}
      </Badge>
    ),
  },
  { key: 'amount', label: 'Amount', width: 104, align: 'right', render: (row) => euro.format(row.amount) },
];

export const VirtualTableDemo = () => {
  const rows = makeOrders(ROW_COUNT);
  return (
    <div class={styles.root}>
      <p class={styles.caption}>{ROW_COUNT.toLocaleString('en')} orders. Only the visible window is in the DOM.</p>
      <VirtualTable columns={COLUMNS} rows={rows} height={320} />
    </div>
  );
};
