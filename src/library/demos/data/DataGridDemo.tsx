import {
  DataGrid,
  defaultGridView,
  type GridColumn,
  type GridEditorContext,
  type GridViewState,
  type QueryField,
  reconcileGridView,
  type RowKey,
} from '@jankrajewskiit/data';
import { useI18n } from '@jankrajewskiit/i18n';
import { Button, Text } from '@jankrajewskiit/ui';
import { createSignal, Show } from 'solid-js';

import { MemberNameEditor } from './MemberNameEditor';
import { type Member, MEMBERS, ROLES } from './members';

interface EditableMember extends Member {
  joinedAt: string;
}

const INITIAL_ROWS: EditableMember[] = MEMBERS.map((member) => ({
  ...member,
  joinedAt: new Date(Date.UTC(2025, 0, member.id)).toISOString().slice(0, 10),
}));

const DATE_FORMATTER = new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeZone: 'UTC' });
const DEMO_LATENCY_MS = 300;

const waitForDemoLatency = (): Promise<void> =>
  new Promise<void>((resolve) => globalThis.setTimeout(resolve, DEMO_LATENCY_MS));

const renderNameEditor = (context: GridEditorContext<EditableMember>) => <MemberNameEditor context={context} />;

const COLUMNS: GridColumn<EditableMember>[] = [
  {
    key: 'name',
    label: 'Member',
    editable: true,
    editor: renderNameEditor,
    validate: async (value) => {
      await waitForDemoLatency();
      return typeof value === 'string' && value.trim() ? undefined : 'Enter a member name.';
    },
    width: 200,
    pin: 'left',
    canHide: false,
    hideable: true,
  },
  { key: 'role', label: 'Role', editable: true, options: ROLES, width: 140 },
  {
    key: 'seats',
    label: 'Seats',
    type: 'number',
    editable: true,
    validate: async (value) => {
      await waitForDemoLatency();
      return typeof value === 'number' && value >= 0 && value <= 100 ? undefined : 'Use 0–100 seats.';
    },
    width: 120,
    minWidth: 80,
    maxWidth: 240,
  },
  { key: 'email', label: 'Email', width: 280 },
  { key: 'status', label: 'Status', width: 140 },
  {
    key: 'joinedAt',
    label: 'Joined',
    width: 150,
    filterAccessor: (row) => row.joinedAt,
    render: (row) => DATE_FORMATTER.format(new Date(`${row.joinedAt}T00:00:00Z`)),
  },
];

const FILTER_FIELDS: QueryField[] = [
  { key: 'name', label: 'Member' },
  { key: 'role', label: 'Role', type: 'select', options: ROLES.map((role) => ({ value: role, label: role })) },
  { key: 'seats', label: 'Seats', type: 'number' },
  { key: 'joinedAt', label: 'Joined', type: 'date' },
];

export const DataGridDemo = () => {
  const { ts } = useI18n();
  const [rows, setRows] = createSignal(INITIAL_ROWS);
  const [selected, setSelected] = createSignal<RowKey[]>([]);
  const [failNextSave, setFailNextSave] = createSignal(false);
  const [saveMessage, setSaveMessage] = createSignal('');
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
    setRows((current) =>
      current.map<EditableMember>((row) => (keys.has(row.id) ? { ...row, status: 'Suspended' } : row)),
    );
    setSelected([]);
  };
  const saveRows = async (nextRows: EditableMember[]) => {
    await waitForDemoLatency();
    if (failNextSave()) {
      setFailNextSave(false);
      throw new Error(ts('library.data.editing.saveFailed'));
    }
    setRows(nextRows);
    setSaveMessage(ts('library.data.editing.saved'));
  };
  return (
    <>
      <Text variant="caption" tone="secondary">
        {ts('library.data.editing.instructions')}
      </Text>
      <Show when={saveMessage()}>
        {(message) => (
          <Text as="p" variant="body-sm" role="status" aria-live="polite">
            {message()}
          </Text>
        )}
      </Show>
      <DataGrid
        label="Editable team members"
        columns={COLUMNS}
        rows={rows()}
        onRowsChange={saveRows}
        onEditError={(error) =>
          setSaveMessage(error instanceof Error ? error.message : ts('library.data.editing.saveFailed'))
        }
        saveErrorText={ts('library.data.editing.saveFailed')}
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
          <>
            <Button
              size="sm"
              variant="secondary"
              aria-pressed={failNextSave()}
              onClick={() => setFailNextSave((value) => !value)}
            >
              {ts('library.data.editing.failNextSave')}
            </Button>
            <Button size="sm" variant="secondary" onClick={loadSavedView}>
              {ts('library.data.grid.loadSavedView')}
            </Button>
          </>
        }
        renderDetail={(row) => (
          <Text as="p" variant="body-sm">
            {row.name} · {row.email}
          </Text>
        )}
        columnManager
        filterFields={FILTER_FIELDS}
        onExport={null}
        footer
      />
    </>
  );
};
