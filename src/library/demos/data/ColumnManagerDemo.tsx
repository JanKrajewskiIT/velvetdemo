import { applyColumns, ColumnManager, type ColumnState, type ManagedColumn } from '@jankrajewskiit/data';
import { useI18n } from '@jankrajewskiit/i18n';
import { Table, type TableColumn } from '@jankrajewskiit/ui';
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
  pinnable: column.key !== 'role',
  movable: column.key !== 'status',
  hideable: column.key !== 'seats',
}));

export const ColumnManagerDemo = () => {
  const { ts } = useI18n();
  const initial: ColumnState[] = COLUMNS.map((column) => ({
    key: column.key,
    visible: column.key !== 'email',
    pin: column.pin ?? null,
  }));
  const [columns, setColumns] = createSignal(initial);
  const visibleColumns = createMemo(() => applyColumns(COLUMNS, columns()));

  return (
    <div class={styles.root}>
      <div class={styles.manager}>
        <p class={styles.caption}>{ts('library.data.columns.instructions')}</p>
        <ColumnManager
          columns={MANAGED_COLUMNS}
          value={columns()}
          resetValue={initial}
          onValueChange={setColumns}
          pinRight
          searchable
          minVisible={2}
          maxPinned={3}
        />
      </div>
      <Table title="Preview" columns={visibleColumns()} rows={MEMBERS.slice(0, 4)} maxHeight={280} />
    </div>
  );
};
