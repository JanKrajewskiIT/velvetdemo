import { useI18n } from '@jankrajewskiit/i18n';
import { Avatar, Badge, Button, type RowKey, Table, type TableColumn } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import { type Member, MEMBER_STATUS_LABEL_KEY, MEMBERS, ROLE_LABEL_KEY, STATUS_TONE } from './members';
import styles from './TableDemo.module.css';

export const TableDemo = () => {
  const { ts } = useI18n();
  const formatLastActive = (days: number) => {
    if (days === 0) return ts('library.data.relative.today');
    if (days === 1) return ts('library.data.relative.yesterday');
    return ts('library.data.relative.daysAgo', { count: days });
  };
  const COLUMNS: TableColumn<Member>[] = [
    {
      key: 'name',
      label: ts('library.data.columns.member'),
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
    {
      key: 'role',
      label: ts('library.data.columns.role'),
      sortable: true,
      hideOnMobile: true,
      width: 140,
      render: (row) => ts(ROLE_LABEL_KEY[row.role]),
    },
    {
      key: 'status',
      label: ts('library.data.columns.status'),
      sortable: true,
      render: (row) => (
        <Badge tone={STATUS_TONE[row.status]} dot>
          {ts(MEMBER_STATUS_LABEL_KEY[row.status])}
        </Badge>
      ),
    },
    {
      key: 'lastActiveDays',
      label: ts('library.data.table.lastActive'),
      sortable: true,
      hideOnMobile: true,
      render: (row) => formatLastActive(row.lastActiveDays),
    },
    {
      key: 'seats',
      label: ts('library.data.columns.seats'),
      align: 'right',
      sortable: true,
      pin: 'right',
      width: 90,
    },
  ];
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
    setRows((current) => current.map<Member>((row) => (keys.has(row.id) ? { ...row, role: 'Viewer' } : row)));
    setSelected([]);
  };
  return (
    <Table
      title={ts('library.data.table.title')}
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
            {ts('library.data.actions.loadingState')}
          </Button>
        </>
      }
      bulkActions={
        <>
          <Button size="sm" variant="secondary" onClick={changeSelectedRole}>
            {ts('library.data.actions.makeViewer')}
          </Button>
          <Button size="sm" variant="secondary" onClick={suspendSelected}>
            {ts('library.data.actions.suspend')}
          </Button>
        </>
      }
    />
  );
};
