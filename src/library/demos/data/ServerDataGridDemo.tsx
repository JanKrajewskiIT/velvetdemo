import {
  DataGrid,
  defaultGridView,
  type GridBulkSelection,
  type GridColumn,
  type GridViewState,
  type RowKey,
} from '@jankrajewskiit/data';
import { useI18n } from '@jankrajewskiit/i18n';
import { Button, Text } from '@jankrajewskiit/ui';
import { batch, createMemo, createSignal, Show } from 'solid-js';

import { type Member, MEMBERS } from './members';

const PAGE_SIZE = 3;
const COLUMNS: GridColumn<Member>[] = [
  { key: 'name', label: 'Member', width: 220, locked: true },
  { key: 'role', label: 'Role', width: 140, sortable: false },
  { key: 'seats', label: 'Seats', type: 'number', width: 100 },
  { key: 'email', label: 'Email', width: 260, sortable: false },
];

export const ServerDataGridDemo = () => {
  const { ts } = useI18n();
  const initial = defaultGridView(COLUMNS);
  const [view, setView] = createSignal(initial);
  const [page, setPage] = createSignal(0);
  const [selected, setSelected] = createSignal<RowKey[]>([]);
  const [bulkMessage, setBulkMessage] = createSignal('');
  const result = createMemo(() => {
    const needle = view().search.trim().toLowerCase();
    const filtered = MEMBERS.filter((member) =>
      [member.name, member.role, member.email, String(member.seats)].some((value) =>
        value.toLowerCase().includes(needle),
      ),
    );
    const sort = view().sort;
    if (!sort) return filtered;
    return [...filtered].sort((left, right) => {
      const order = sort.key === 'seats' ? left.seats - right.seats : left.name.localeCompare(right.name);
      return sort.dir === 'asc' ? order : -order;
    });
  });
  const pageCount = () => Math.max(1, Math.ceil(result().length / PAGE_SIZE));
  const rows = createMemo(() => result().slice(page() * PAGE_SIZE, (page() + 1) * PAGE_SIZE));
  const changeView = (next: GridViewState) =>
    batch(() => {
      setPage(0);
      setView(next);
    });
  const processSelection = ({ keys, loadedRows }: GridBulkSelection<Member>) => (
    <Button
      size="sm"
      variant="secondary"
      onClick={() => {
        setBulkMessage(ts('library.data.server.bulkResult', { selected: keys.length, loaded: loadedRows.length }));
        setSelected([]);
      }}
    >
      {ts('library.data.server.processSelection')}
    </Button>
  );

  return (
    <>
      <Show when={bulkMessage()}>
        {(message) => (
          <Text as="p" variant="body-sm" role="status" aria-live="polite">
            {message()}
          </Text>
        )}
      </Show>
      <DataGrid
        label={ts('library.data.server.label')}
        columns={COLUMNS}
        rows={rows()}
        rowCount={result().length}
        view={view()}
        defaultView={initial}
        onViewChange={changeView}
        manualFiltering
        manualSorting
        searchable
        searchPlaceholder={ts('library.data.server.search')}
        selectable
        selected={selected()}
        onSelectionChange={setSelected}
        bulkSelectionActions={processSelection}
        viewSettings
        height={240}
        toolbarEnd={
          <>
            <Button size="sm" variant="secondary" disabled={page() === 0} onClick={() => setPage((value) => value - 1)}>
              {ts('library.data.server.previous')}
            </Button>
            <Button
              size="sm"
              variant="secondary"
              disabled={page() + 1 >= pageCount()}
              onClick={() => setPage((value) => value + 1)}
            >
              {ts('library.data.server.next')}
            </Button>
          </>
        }
        footer={ts('library.data.server.page', { page: page() + 1, count: pageCount() })}
      />
    </>
  );
};
