import { useI18n } from '@jankrajewskiit/i18n';
import {
  Button,
  DataGrid,
  defaultGridView,
  type GridColumn,
  type GridViewState,
  type QueryField,
  reconcileGridView,
  type RowKey,
} from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import { type Member, MEMBERS, ROLES } from './members';

const COLUMNS: GridColumn<Member>[] = [
  { key: 'name', label: 'Member', editable: true, width: 200, pin: 'left', canHide: false, hideable: true },
  { key: 'role', label: 'Role', editable: true, options: ROLES, width: 140 },
  { key: 'seats', label: 'Seats', type: 'number', editable: true, width: 120, minWidth: 80, maxWidth: 240 },
  { key: 'email', label: 'Email', width: 280 },
  { key: 'status', label: 'Status', width: 140 },
];

const FILTER_FIELDS: QueryField[] = [
  { key: 'name', label: 'Member' },
  { key: 'role', label: 'Role', type: 'select', options: ROLES.map((role) => ({ value: role, label: role })) },
  { key: 'seats', label: 'Seats', type: 'number' },
];

export const DataGridDemo = () => {
  const { ts } = useI18n();
  const [rows, setRows] = createSignal(MEMBERS);
  const [selected, setSelected] = createSignal<RowKey[]>([]);
  const initial: GridViewState = {
    ...defaultGridView(COLUMNS, { filterFields: FILTER_FIELDS }),
    sort: { key: 'name', dir: 'asc' },
    query: { id: 'team', combinator: 'and', rules: [{ id: 'seats', field: 'seats', op: 'gte', value: '4' }] },
  };
  const [view, setView] = createSignal(initial);
  const loadSavedView = () =>
    setView(
      reconcileGridView(
        {
          ...initial,
          sort: { key: 'seats', dir: 'desc' },
          query: { id: 'saved-team', combinator: 'and', rules: [] },
          widths: { name: 280 },
          columns: initial.columns.map((column) => ({ ...column, visible: column.key !== 'email' })),
        },
        COLUMNS,
        { filterFields: FILTER_FIELDS },
      ),
    );
  const suspendMembers = (members: Member[]) => {
    const keys = new Set(members.map((member) => member.id));
    setRows((current) => current.map<Member>((row) => (keys.has(row.id) ? { ...row, status: 'Suspended' } : row)));
    setSelected([]);
  };
  return (
    <DataGrid
      label="Editable team members"
      columns={COLUMNS}
      rows={rows()}
      onRowsChange={(next) => setRows(next)}
      height={320}
      searchable
      selectable
      selected={selected()}
      onSelectionChange={setSelected}
      bulkActions={(members) => (
        <Button size="sm" variant="secondary" onClick={() => suspendMembers(members)}>
          Suspend
        </Button>
      )}
      view={view()}
      defaultView={initial}
      onViewChange={setView}
      viewSettings
      toolbarEnd={
        <Button size="sm" variant="secondary" onClick={loadSavedView}>
          {ts('library.data.grid.loadSavedView')}
        </Button>
      }
      renderDetail={(row) => (
        <p>
          {row.name} · {row.email}
        </p>
      )}
      columnManager
      filterFields={FILTER_FIELDS}
      onExport={null}
      footer
    />
  );
};
