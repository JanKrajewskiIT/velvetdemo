import { Accordion, CodeSnippet, DescriptionList, Divider, SkillBar, Timeline } from '@jankrajewskiit/ui';

import type { dataEn } from '../../i18n/library/data';
import { FAQ_ITEMS, STATUS_ITEMS } from '../demos/data/accordionItems';
import { DataGridDemo } from '../demos/data/DataGridDemo';
import { DiffViewerDemo } from '../demos/data/DiffViewerDemo';
import { LogViewerDemo } from '../demos/data/LogViewerDemo';
import { PeopleListDemo } from '../demos/data/PeopleListDemo';
import { TableDemo } from '../demos/data/TableDemo';
import { makeFeedItems, makeHistoryItems, makePipelineItems } from '../demos/data/timelines';
import { VirtualListDemo } from '../demos/data/VirtualListDemo';
import { VirtualTableDemo } from '../demos/data/VirtualTableDemo';
import type { Specimen, SpecimenIdOf } from '../types';
import styles from './data.module.css';

const SNIPPET_CODE = `import { Table, type TableColumn } from '@jankrajewskiit/ui';

interface Member {
  id: number;
  name: string;
  role: string;
}

const columns: TableColumn<Member>[] = [
  { key: 'name', label: 'Member', sortable: true },
  { key: 'role', label: 'Role', hideOnMobile: true },
];

export const Members = (props: { rows: Member[] }) => (
  <Table title="Members" columns={columns} rows={props.rows} selectable />
);`;

const INSTALL_TABS = [
  { label: 'npm', language: 'bash', code: '$ npm install @jankrajewskiit/ui' },
  { label: 'pnpm', language: 'bash', code: '$ pnpm add @jankrajewskiit/ui' },
  { label: 'yarn', language: 'bash', code: '$ yarn add @jankrajewskiit/ui' },
];

export const dataSpecimens: readonly Specimen<SpecimenIdOf<typeof dataEn>>[] = [
  {
    id: 'data-table',
    span: 12,
    render: () => <TableDemo />,
  },
  {
    id: 'data-grid',
    span: 12,
    render: () => <DataGridDemo />,
  },
  {
    id: 'data-virtual-table',
    span: 6,
    render: () => <VirtualTableDemo />,
  },
  {
    id: 'data-virtual-list',
    span: 6,
    render: () => <VirtualListDemo />,
  },
  {
    id: 'data-accordion',
    span: 12,
    render: () => (
      <div class={styles.columns}>
        <div class={styles.panel}>
          <p class={styles.caption}>Separated</p>
          <Accordion items={FAQ_ITEMS} defaultValue={['billing']} />
        </div>
        <div class={styles.panel}>
          <p class={styles.caption}>Flush, several open</p>
          <Accordion variant="flush" multiple items={FAQ_ITEMS} defaultValue={['export', 'sso']} />
        </div>
        <div class={styles.panel}>
          <p class={styles.caption}>Elevated, tone stripe, medium gap</p>
          <Accordion variant="elevated" gap="md" items={STATUS_ITEMS} defaultValue={['latency']} />
        </div>
      </div>
    ),
  },
  {
    id: 'data-record',
    span: 6,
    render: () => (
      <div class={styles.stack}>
        <DescriptionList
          items={[
            { term: 'Candidate', description: 'Anna Kowalska' },
            { term: 'Reference', description: 'REC-2041', mono: true },
            { term: 'Location', description: 'Warsaw', hint: 'Open to remote' },
            { term: 'Notice period' },
          ]}
        />
        <Divider label="Skills" />
        <SkillBar label="TypeScript" level="Advanced" value={90} />
        <SkillBar label="Accessibility" level="Proficient" value={72} tone="info" />
        <SkillBar label="Systems design" level="Developing" value={48} tone="warning" />
      </div>
    ),
  },
  {
    id: 'data-timeline',
    span: 12,
    render: () => (
      <div class={styles.columns}>
        <div class={styles.panel}>
          <p class={styles.caption}>Default rail</p>
          <Timeline items={makeHistoryItems()} />
        </div>
        <div class={styles.panel}>
          <p class={styles.caption}>Compact feed</p>
          <Timeline variant="compact" divided items={makeFeedItems()} />
        </div>
        <div class={styles.panel}>
          <p class={styles.caption}>Status pipeline</p>
          <Timeline items={makePipelineItems()} />
        </div>
      </div>
    ),
  },
  {
    id: 'data-list',
    span: 6,
    render: () => <PeopleListDemo />,
  },
  {
    id: 'data-code-snippet',
    span: 6,
    render: () => (
      <div class={styles.stack}>
        <CodeSnippet title="Members.tsx" language="ts" code={SNIPPET_CODE} maxHeight={280} />
        <CodeSnippet tabs={INSTALL_TABS} showLineNumbers={false} />
      </div>
    ),
  },
  {
    id: 'data-diff-viewer',
    span: 12,
    render: () => <DiffViewerDemo />,
  },
  {
    id: 'data-log-viewer',
    span: 12,
    render: () => <LogViewerDemo />,
  },
];
