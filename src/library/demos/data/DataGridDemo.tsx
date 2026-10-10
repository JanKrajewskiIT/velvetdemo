import { DataGrid, type GridColumn, type QueryField } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import { type Member, MEMBERS, ROLES } from './members';

const COLUMNS: GridColumn<Member>[] = [
  { key: 'name', label: 'Member', editable: true, width: 200 },
  { key: 'role', label: 'Role', editable: true, options: ROLES, width: 140 },
  { key: 'seats', label: 'Seats', type: 'number', editable: true, width: 120 },
  { key: 'email', label: 'Email', width: 280 },
  { key: 'status', label: 'Status', width: 140 },
];

const FILTER_FIELDS: QueryField[] = [
  { key: 'name', label: 'Member' },
  { key: 'role', label: 'Role', type: 'select', options: ROLES.map((role) => ({ value: role, label: role })) },
  { key: 'seats', label: 'Seats', type: 'number' },
];

export const DataGridDemo = () => {
  const [rows, setRows] = createSignal(MEMBERS);
  return (
    <DataGrid
      columns={COLUMNS}
      rows={rows()}
      onRowsChange={(next) => setRows(next)}
      height={320}
      searchable
      selectable
      columnManager
      filterFields={FILTER_FIELDS}
      onExport={null}
      footer
    />
  );
};
