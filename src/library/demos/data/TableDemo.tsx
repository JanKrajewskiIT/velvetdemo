import { Avatar, Badge, Button, type RowKey, Table, type TableColumn } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import { formatDaysAgo } from './dates';
import { type Member, MEMBERS, STATUS_TONE } from './members';
import styles from './TableDemo.module.css';

const COLUMNS: TableColumn<Member>[] = [
  {
    key: 'name',
    label: 'Member',
    sortable: true,
    render: (row) => (
      <span class={styles.member}>
        <Avatar name={row.name} size="xs" color="auto" />
        {row.name}
      </span>
    ),
  },
  { key: 'role', label: 'Role', sortable: true, hideOnMobile: true },
  {
    key: 'status',
    label: 'Status',
    sortable: true,
    render: (row) => (
      <Badge tone={STATUS_TONE[row.status]} dot>
        {row.status}
      </Badge>
    ),
  },
  {
    key: 'lastActiveDays',
    label: 'Last active',
    sortable: true,
    hideOnMobile: true,
    render: (row) => formatDaysAgo(row.lastActiveDays),
  },
  { key: 'seats', label: 'Seats', align: 'right', sortable: true },
];

export const TableDemo = () => {
  const [selected, setSelected] = createSignal<RowKey[]>([]);
  const [loading, setLoading] = createSignal(false);
  return (
    <Table
      title="Members"
      columns={COLUMNS}
      rows={MEMBERS}
      selectable
      selected={selected()}
      onSelectedChange={setSelected}
      loading={loading()}
      defaultSort={{ key: 'name', dir: 'asc' }}
      renderExpanded={(row) => <span class={styles.detail}>{row.email}</span>}
      toolbar={
        <Button size="sm" variant="secondary" aria-pressed={loading()} onClick={() => setLoading((value) => !value)}>
          Loading state
        </Button>
      }
      bulkActions={
        <>
          <Button size="sm" variant="secondary">
            Change role
          </Button>
          <Button size="sm" variant="secondary">
            Suspend
          </Button>
        </>
      }
    />
  );
};
