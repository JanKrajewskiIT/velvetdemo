import {
  ColumnManager,
  type ColumnManagerColumn,
  DataGridPro,
  type DataGridProColumn,
  type DataGridProColumnPinning,
  type DataGridProSortState,
  QueryBuilder,
  type QueryBuilderField,
  type QueryBuilderRule,
  type QueryBuilderValue,
  TableAddRowAction,
} from '@jankrajewskiit/data';
import {
  Button,
  CodeText,
  DataTable,
  type DataTableColumn,
  Heading,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Text,
  useI18n,
} from '@jankrajewskiit/ui';
import { createMemo, createSignal, untrack } from 'solid-js';

import { PreviewGroup, PreviewPanel, ShowcaseMeta, ShowcaseSection } from '../components/ShowcaseSection';
import { DATA_GRID_ROWS, PACKAGE_DATA, type PackageRow } from '../fixtures/tablesFixtures';

const QUERY_BUILDER_FIELDS: QueryBuilderField[] = [
  { key: 'name', label: 'Package', type: 'text' },
  { key: 'version', label: 'Version', type: 'text' },
  {
    key: 'license',
    label: 'License',
    type: 'select',
    options: [
      { value: 'MIT', label: 'MIT' },
      { value: 'Apache-2.0', label: 'Apache-2.0' },
    ],
  },
  {
    key: 'category',
    label: 'Category',
    type: 'select',
    options: [
      { value: 'framework', label: 'Framework' },
      { value: 'tooling', label: 'Tooling' },
      { value: 'language', label: 'Language' },
      { value: 'testing', label: 'Testing' },
      { value: 'quality', label: 'Quality' },
      { value: 'css', label: 'CSS' },
    ],
  },
  { key: 'downloads', label: 'Downloads', type: 'number' },
];

const QUERY_FIELD_MAP = new Map(QUERY_BUILDER_FIELDS.map((field) => [field.key, field]));

const matchesRule = (row: PackageRow, rule: QueryBuilderRule): boolean => {
  const field = QUERY_FIELD_MAP.get(rule.fieldKey);
  if (!field) return true;

  const raw = row[rule.fieldKey as keyof PackageRow];
  const asString =
    typeof raw === 'string' ? raw.trim() : typeof raw === 'number' || typeof raw === 'boolean' ? String(raw) : '';
  const left = asString.toLowerCase();
  const right = rule.value.trim().toLowerCase();

  if (rule.operator === 'isEmpty') return left.length === 0;
  if (rule.operator === 'isNotEmpty') return left.length > 0;
  if (right.length === 0) return false;

  if (field.type === 'number') {
    const leftNumber = Number(raw);
    const rightNumber = Number(rule.value);
    if (Number.isNaN(leftNumber) || Number.isNaN(rightNumber)) return false;
    if (rule.operator === 'equals') return leftNumber === rightNumber;
    if (rule.operator === 'notEquals') return leftNumber !== rightNumber;
    if (rule.operator === 'gt') return leftNumber > rightNumber;
    if (rule.operator === 'gte') return leftNumber >= rightNumber;
    if (rule.operator === 'lt') return leftNumber < rightNumber;
    if (rule.operator === 'lte') return leftNumber <= rightNumber;
    return false;
  }

  if (rule.operator === 'equals') return left === right;
  if (rule.operator === 'notEquals') return left !== right;
  if (rule.operator === 'contains') return left.includes(right);
  if (rule.operator === 'startsWith') return left.startsWith(right);
  if (rule.operator === 'endsWith') return left.endsWith(right);
  return false;
};

const applyQueryBuilder = (rows: PackageRow[], query: QueryBuilderValue) => {
  if (query.rules.length === 0) return rows;
  if (query.combinator === 'or') {
    return rows.filter((row) => query.rules.some((rule) => matchesRule(row, rule)));
  }
  return rows.filter((row) => query.rules.every((rule) => matchesRule(row, rule)));
};

const createDefaultAdvancedQuery = (): QueryBuilderValue => ({
  combinator: 'and',
  rules: [
    {
      id: 'query-default-1',
      fieldKey: 'category',
      operator: 'notEquals',
      value: 'css',
    },
  ],
});

const TablesSection = () => {
  const { ts, tx } = useI18n();
  const [query, setQuery] = createSignal('');
  const [gridFilterQuery, setGridFilterQuery] = createSignal('');
  const [gridSort, setGridSort] = createSignal<DataGridProSortState>({ key: 'downloads', direction: 'desc' });
  const [selectedRows, setSelectedRows] = createSignal<string[]>([]);
  const [advancedQuery, setAdvancedQuery] = createSignal<QueryBuilderValue>(createDefaultAdvancedQuery());

  const serverRows = createMemo(() => {
    const filter = gridFilterQuery().trim().toLowerCase();
    let rows = DATA_GRID_ROWS;

    if (filter) {
      rows = rows.filter(
        (row) =>
          row.name.toLowerCase().includes(filter) ||
          row.version.toLowerCase().includes(filter) ||
          row.license.toLowerCase().includes(filter) ||
          row.category.toLowerCase().includes(filter),
      );
    }

    rows = applyQueryBuilder(rows, advancedQuery());

    const key = gridSort().key;
    if (!key) return rows;
    const direction = gridSort().direction;
    const sorted = [...rows].sort((a, b) => {
      const aVal = a[key as keyof PackageRow];
      const bVal = b[key as keyof PackageRow];
      if (aVal == null && bVal == null) return 0;
      if (aVal == null) return 1;
      if (bVal == null) return -1;
      if (aVal < bVal) return direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    return sorted;
  });

  const packageColumns = createMemo<DataTableColumn<PackageRow>[]>(() => [
    { key: 'name', header: ts('demo.text.tables.columns.package'), sortable: true },
    { key: 'version', header: ts('demo.text.tables.columns.version') },
    {
      key: 'downloads',
      header: ts('demo.text.tables.columns.downloads'),
      sortable: true,
      render: (val) => (
        <Text as="span" variant="bodySm">
          {Number(val).toLocaleString()}
        </Text>
      ),
    },
    { key: 'license', header: ts('demo.text.tables.columns.license'), sortable: true },
  ]);

  const dataGridColumns = createMemo<DataGridProColumn<PackageRow>[]>(() => [
    {
      key: 'name',
      header: ts('demo.text.tables.columns.package'),
      pinned: 'left',
      width: 220,
      minWidth: 150,
      sortable: true,
    },
    { key: 'version', header: ts('demo.text.tables.columns.version'), width: 120, minWidth: 90, sortable: true },
    {
      key: 'downloads',
      header: ts('demo.text.tables.columns.downloads'),
      width: 160,
      minWidth: 120,
      sortable: true,
      render: (value) => (
        <Text as="span" variant="bodySm">
          {Number(value).toLocaleString()}
        </Text>
      ),
    },
    { key: 'license', header: ts('demo.text.tables.columns.license'), width: 140, minWidth: 100, sortable: true },
    {
      key: 'category',
      header: ts('demo.text.tables.columns.category'),
      width: 160,
      minWidth: 120,
      sortable: true,
      pinned: 'right',
    },
  ]);

  const dataGridColumnSettings = createMemo<ColumnManagerColumn[]>(() =>
    dataGridColumns().map((column) => ({
      key: column.key,
      label: column.header,
      canHide: true,
      canPin: true,
    })),
  );

  const queryBuilderFields = createMemo<QueryBuilderField[]>(() => [
    { key: 'name', label: ts('demo.text.tables.columns.package'), type: 'text' },
    { key: 'version', label: ts('demo.text.tables.columns.version'), type: 'text' },
    {
      key: 'license',
      label: ts('demo.text.tables.columns.license'),
      type: 'select',
      options: [
        { value: 'MIT', label: 'MIT' },
        { value: 'Apache-2.0', label: 'Apache-2.0' },
      ],
    },
    {
      key: 'category',
      label: ts('demo.text.tables.columns.category'),
      type: 'select',
      options: [
        { value: 'framework', label: ts('demo.text.tables.category.framework') },
        { value: 'tooling', label: ts('demo.text.tables.category.tooling') },
        { value: 'language', label: ts('demo.text.tables.category.language') },
        { value: 'testing', label: ts('demo.text.tables.category.testing') },
        { value: 'quality', label: ts('demo.text.tables.category.quality') },
        { value: 'css', label: ts('demo.text.tables.category.css') },
      ],
    },
    { key: 'downloads', label: ts('demo.text.tables.columns.downloads'), type: 'number' },
  ]);

  const dataGridDefaultOrder = createMemo(() => dataGridColumns().map((column) => column.key));
  const dataGridDefaultVisibility = createMemo(
    () => Object.fromEntries(dataGridColumns().map((column) => [column.key, true])) as Record<string, boolean>,
  );
  const dataGridDefaultPinning = createMemo<DataGridProColumnPinning>(() =>
    Object.fromEntries(dataGridColumns().map((column) => [column.key, column.pinned ?? null])),
  );

  const [gridColumnOrder, setGridColumnOrder] = createSignal(untrack(dataGridDefaultOrder));
  const [gridColumnVisibility, setGridColumnVisibility] = createSignal(untrack(dataGridDefaultVisibility));
  const [gridColumnPinning, setGridColumnPinning] = createSignal(untrack(dataGridDefaultPinning));

  const resetGridWorkspace = () => {
    setGridFilterQuery('');
    setGridSort({ key: 'downloads', direction: 'desc' });
    setSelectedRows([]);
    setAdvancedQuery(createDefaultAdvancedQuery());
    setGridColumnOrder(dataGridDefaultOrder());
    setGridColumnVisibility(dataGridDefaultVisibility());
    setGridColumnPinning(dataGridDefaultPinning());
  };

  return (
    <div>
      <ShowcaseSection
        title={ts('demo.showcase.tables.table.title')}
        subtitle={ts('demo.showcase.tables.table.subtitle')}
      >
        <PreviewPanel>
          <PreviewGroup title={ts('demo.text.common.examples')}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>{ts('demo.text.tables.simple.name')}</TableHeader>
                  <TableHeader>{ts('demo.text.tables.simple.version')}</TableHeader>
                  <TableHeader>{ts('demo.text.tables.simple.status')}</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>solid-js</TableCell>
                  <TableCell>1.9.7</TableCell>
                  <TableCell>{ts('demo.text.tables.simple.stable')}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>vite</TableCell>
                  <TableCell>7.3.1</TableCell>
                  <TableCell>{ts('demo.text.tables.simple.stable')}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>typescript</TableCell>
                  <TableCell>5.9.3</TableCell>
                  <TableCell>{ts('demo.text.tables.simple.stable')}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </PreviewGroup>
        </PreviewPanel>
        <ShowcaseMeta>{ts('demo.text.tables.simple.meta')}</ShowcaseMeta>
      </ShowcaseSection>

      <ShowcaseSection
        title={ts('demo.showcase.tables.dataTable.title')}
        subtitle={ts('demo.showcase.tables.dataTable.subtitle')}
      >
        <PreviewPanel>
          <PreviewGroup title={ts('demo.text.common.examples')}>
            <DataTable<PackageRow>
              data={PACKAGE_DATA}
              columns={packageColumns()}
              pageSize={4}
              sortable
              filterable
              filterQuery={query()}
              onFilterQueryChange={setQuery}
              striped
              hoverable
            />
          </PreviewGroup>
        </PreviewPanel>
        <ShowcaseMeta>
          {tx('demo.text.tables.dataTable.meta', {
            pageSize: () => (
              <CodeText as="span" class="codeInline">
                pageSize
              </CodeText>
            ),
          })}
        </ShowcaseMeta>
      </ShowcaseSection>

      <ShowcaseSection
        title={ts('demo.showcase.tables.dataTableEmptyState.title')}
        subtitle={ts('demo.showcase.tables.dataTableEmptyState.subtitle')}
      >
        <PreviewPanel>
          <PreviewGroup title={ts('demo.text.common.examples')}>
            <DataTable<PackageRow> data={[]} columns={packageColumns()} pageSize={4} />
          </PreviewGroup>
        </PreviewPanel>
      </ShowcaseSection>

      <ShowcaseSection title="TableAddRowAction" subtitle={ts('demo.recron.showcase.tableAddRowAction.subtitle')}>
        <PreviewPanel>
          <PreviewGroup title={ts('demo.text.common.examples')}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>{ts('demo.text.tables.columns.package')}</TableHeader>
                  <TableHeader>{ts('demo.text.tables.columns.version')}</TableHeader>
                  <TableHeader>{ts('demo.text.tables.columns.downloads')}</TableHeader>
                  <TableHeader>{ts('demo.text.tables.columns.license')}</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableAddRowAction
                  colSpan={4}
                  label={ts('demo.recron.offer.tableAddRow.label')}
                  onClick={() => undefined}
                />
              </TableBody>
            </Table>
          </PreviewGroup>
        </PreviewPanel>
      </ShowcaseSection>

      <ShowcaseSection
        title={ts('demo.showcase.tables.dataGridProV3.title')}
        subtitle={ts('demo.showcase.tables.dataGridProV3.subtitle')}
      >
        <PreviewPanel>
          <PreviewGroup title={ts('demo.text.common.examples')}>
            <div class="scenarioShell">
              <div class="scenarioHeader">
                <div class="scenarioHeaderCopy">
                  <Text as="p" variant="overline" tone="primary">
                    {ts('demo.page.dataTables.title')}
                  </Text>
                  <Heading level={3} variant="titleLg">
                    {ts('demo.page.dataTables.description')}
                  </Heading>
                </div>
                <div class="scenarioMetricRow">
                  <div class="scenarioMetric">
                    <Text as="span" variant="overline" tone="tertiary">
                      {ts('demo.text.tables.columns.package')}
                    </Text>
                    <Text as="span" variant="labelLg">
                      {serverRows().length}
                    </Text>
                  </div>
                  <div class="scenarioMetric">
                    <Text as="span" variant="overline" tone="tertiary">
                      {ts('demo.text.tables.dataGrid.selectedRows')}
                    </Text>
                    <Text as="span" variant="labelLg">
                      {selectedRows().length}
                    </Text>
                  </div>
                  <div class="scenarioMetric">
                    <Text as="span" variant="overline" tone="tertiary">
                      {ts('demo.text.tables.columns.category')}
                    </Text>
                    <Text as="span" variant="labelLg">
                      {advancedQuery().rules.length}
                    </Text>
                  </div>
                </div>
              </div>

              <div class="actionCluster">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setAdvancedQuery(createDefaultAdvancedQuery())}
                >
                  {ts('demo.text.tables.queryBuilder.clearConditions')}
                </Button>
                <Button type="button" variant="ghost" size="sm" onClick={resetGridWorkspace}>
                  {ts('demo.text.tables.dataGrid.resetSavedGrid')}
                </Button>
              </div>

              <QueryBuilder
                fields={queryBuilderFields()}
                value={advancedQuery()}
                onChange={setAdvancedQuery}
                description={ts('demo.text.tables.queryBuilder.description')}
              />
              <ColumnManager
                columns={dataGridColumnSettings()}
                order={gridColumnOrder()}
                onOrderChange={setGridColumnOrder}
                visibility={gridColumnVisibility()}
                onVisibilityChange={setGridColumnVisibility}
                pinning={gridColumnPinning()}
                onPinningChange={setGridColumnPinning}
                defaultOrder={dataGridDefaultOrder()}
                defaultVisibility={dataGridDefaultVisibility()}
                defaultPinning={dataGridDefaultPinning()}
                description={ts('demo.text.tables.columnManager.description')}
              />
              <DataGridPro<PackageRow>
                data={serverRows()}
                columns={dataGridColumns()}
                persistenceKey="demo-packages-grid"
                height={420}
                rowHeight={40}
                headerHeight={44}
                overscan={8}
                sortable
                filterable
                filterQuery={gridFilterQuery()}
                onFilterQueryChange={setGridFilterQuery}
                sortKey={gridSort().key}
                sortDirection={gridSort().direction}
                onSortChange={setGridSort}
                manualFiltering
                manualSorting
                selectable
                selectedRowIds={selectedRows()}
                onSelectedRowIdsChange={setSelectedRows}
                columnOrder={gridColumnOrder()}
                onColumnOrderChange={setGridColumnOrder}
                columnVisibility={gridColumnVisibility()}
                onColumnVisibilityChange={setGridColumnVisibility}
                columnPinning={gridColumnPinning()}
                onColumnPinningChange={setGridColumnPinning}
                getRowId={(row) => row.id}
                striped
              />
            </div>
          </PreviewGroup>
        </PreviewPanel>
        <ShowcaseMeta>{ts('demo.text.tables.dataGrid.meta', { count: selectedRows().length })}</ShowcaseMeta>
      </ShowcaseSection>
    </div>
  );
};

export default TablesSection;
