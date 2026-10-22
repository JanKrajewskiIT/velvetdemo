import { useI18n } from '@jankrajewskiit/i18n';
import { Avatar, Badge, CellStack, Stack, Table, type TableColumn } from '@jankrajewskiit/ui';
import { createMemo } from 'solid-js';

interface Invoice {
  id: string;
  customer: string;
  total: number;
}

const INVOICES: Invoice[] = [
  { id: 'INV-2041', customer: 'Anna Kowalska', total: 1240 },
  { id: 'INV-2042', customer: 'Jan Nowak', total: 865.5 },
];

export const CellStackDemo = () => {
  const { locale, ts } = useI18n();
  const currency = createMemo(() => new Intl.NumberFormat(locale(), { style: 'currency', currency: 'EUR' }));
  const columns = (): TableColumn<Invoice>[] => [
    {
      key: 'customer',
      label: ts('library.data.cellStack.customer'),
      render: (row) => (
        <CellStack
          primary={row.customer}
          secondary={row.id}
          secondaryMono
          leading={<Avatar name={row.customer} size="xs" color="auto" />}
          trailing={
            <Badge size="sm" tone="success">
              {ts('library.data.cellStack.paid')}
            </Badge>
          }
        />
      ),
    },
    {
      key: 'total',
      label: ts('library.data.cellStack.total'),
      align: 'right',
      render: (row) => (
        <CellStack
          primary={currency().format(row.total)}
          secondary={ts('library.data.cellStack.taxIncluded')}
          mono
          align="right"
        />
      ),
    },
  ];

  return (
    <Stack gap={4}>
      <Table columns={columns()} rows={INVOICES} />
      <CellStack primary={ts('library.data.cellStack.plain')} strong={false} />
    </Stack>
  );
};
