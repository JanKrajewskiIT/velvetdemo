import {
  applyColumns,
  ColumnManager,
  type ColumnState,
  type ManagedColumn,
  Table,
  type TableColumn,
} from '@jankrajewskiit/ui';
import { createMemo, createSignal } from 'solid-js';

import styles from './ColumnManagerDemo.module.css';
import { type Member, MEMBERS } from './members';

const COLUMNS: TableColumn<Member>[] = [
  { key: 'name', label: 'Member', width: 200, pin: 'left' },
  { key: 'role', label: 'Role', width: 120 },
  { key: 'email', label: 'Email', width: 240 },
  { key: 'status', label: 'Status', width: 120 },
  { key: 'seats', label: 'Seats', width: 80, align: 'right', pin: 'right' },
];

const MANAGED_COLUMNS: ManagedColumn[] = COLUMNS.map((column) => ({
  key: column.key,
  label: column.label,
  pin: column.pin,
  locked: column.key === 'name',
}));

export const ColumnManagerDemo = () => {
  const [columns, setColumns] = createSignal<ColumnState[]>(
    COLUMNS.map((column) => ({ key: column.key, visible: true, pin: column.pin ?? null })),
  );
  const visibleColumns = createMemo(() => applyColumns(COLUMNS, columns()));

  return (
    <div class={styles.root}>
      <ColumnManager
        columns={MANAGED_COLUMNS}
        value={columns()}
        onValueChange={setColumns}
        pinRight
        searchable
        minVisible={2}
        maxPinned={3}
      />
      <Table title="Preview" columns={visibleColumns()} rows={MEMBERS.slice(0, 4)} maxHeight={280} />
    </div>
  );
};
