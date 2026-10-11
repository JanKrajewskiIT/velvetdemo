import { useI18n } from '@jankrajewskiit/i18n';
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
    width: 220,
    pin: 'left',
    render: (row) => (
      <span class={styles.member}>
        <Avatar name={row.name} size="xs" color="auto" />
        {row.name}
      </span>
    ),
  },
  { key: 'role', label: 'Role', sortable: true, hideOnMobile: true, width: 140 },
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
  { key: 'seats', label: 'Seats', align: 'right', sortable: true, pin: 'right', width: 90 },
];

export const TableDemo = () => {
  const { ts } = useI18n();
  const [rows, setRows] = createSignal(MEMBERS);
  const [selected, setSelected] = createSignal<RowKey[]>([]);
  const [loading, setLoading] = createSignal(false);
  const [fixed, setFixed] = createSignal(true);
  const suspendSelected = () => {
    const keys = new Set(selected());
    setRows((current) => current.map<Member>((row) => (keys.has(row.id) ? { ...row, status: 'Suspended' } : row)));
    setSelected([]);
  };
  const changeSelectedRole = () => {
    const keys = new Set(selected());
    setRows((current) => current.map((row) => (keys.has(row.id) ? { ...row, role: 'Viewer' } : row)));
    setSelected([]);
  };
  return (
    <Table
      title="Members"
      layout={fixed() ? 'fixed' : 'auto'}
      columns={COLUMNS}
      rows={rows()}
      resizable
      maxHeight={340}
      selectable
      selected={selected()}
      onSelectedChange={setSelected}
      loading={loading()}
      defaultSort={{ key: 'name', dir: 'asc' }}
      renderExpanded={(row) => <span class={styles.detail}>{row.email}</span>}
      toolbar={
        <>
          <Button size="sm" variant="secondary" aria-pressed={fixed()} onClick={() => setFixed((value) => !value)}>
            {ts('library.data.table.fixedLayout')}
          </Button>
          <Button size="sm" variant="secondary" aria-pressed={loading()} onClick={() => setLoading((value) => !value)}>
            Loading state
          </Button>
        </>
      }
      bulkActions={
        <>
          <Button size="sm" variant="secondary" onClick={changeSelectedRole}>
            Make viewer
          </Button>
          <Button size="sm" variant="secondary" onClick={suspendSelected}>
            Suspend
          </Button>
        </>
      }
    />
  );
};
