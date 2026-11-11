import { type VirtualColumn, VirtualTable } from '@jankrajewskiit/data';
import { useI18n } from '@jankrajewskiit/i18n';
import { Badge } from '@jankrajewskiit/ui';

import { makeOrders, type Order, ORDER_STATUS_LABEL_KEY, ORDER_STATUS_TONE } from './orders';
import styles from './VirtualTableDemo.module.css';

const ROW_COUNT = 100_000;

export const VirtualTableDemo = () => {
  const { ts, locale } = useI18n();
  const euro = new Intl.NumberFormat(locale(), { style: 'currency', currency: 'EUR' });
  const COLUMNS: VirtualColumn<Order>[] = [
    { key: 'reference', label: ts('library.data.columns.order'), width: 104 },
    { key: 'customer', label: ts('library.data.columns.customer'), flex: 2 },
    {
      key: 'status',
      label: ts('library.data.columns.status'),
      flex: 1,
      render: (row) => (
        <Badge tone={ORDER_STATUS_TONE[row.status]} size="sm" dot>
          {ts(ORDER_STATUS_LABEL_KEY[row.status])}
        </Badge>
      ),
    },
    {
      key: 'amount',
      label: ts('library.data.columns.amount'),
      width: 104,
      align: 'right',
      render: (row) => euro.format(row.amount),
    },
  ];
  const rows = makeOrders(ROW_COUNT);
  return (
    <div class={styles.root}>
      <p class={styles.caption}>
        {ts('library.data.virtualTable.caption', { count: ROW_COUNT.toLocaleString(locale()) })}
      </p>
      <VirtualTable columns={COLUMNS} rows={rows} rowKey="reference" height={320} />
    </div>
  );
};
