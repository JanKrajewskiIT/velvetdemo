import { useI18n } from '@jankrajewskiit/i18n';
import {
  Accordion,
  Avatar,
  Badge,
  Card,
  CodeSnippet,
  DescriptionList,
  Divider,
  SkillBar,
  Timeline,
} from '@jankrajewskiit/ui';

import type { dataEn } from '../../i18n/library/data';
import { createFaqItems, createStatusItems } from '../demos/data/accordionItems';
import { CellStackDemo } from '../demos/data/CellStackDemo';
import { ColumnManagerDemo } from '../demos/data/ColumnManagerDemo';
import { DataGridDemo } from '../demos/data/DataGridDemo';
import { DataGridStatesDemo } from '../demos/data/DataGridStatesDemo';
import { DiffViewerDemo } from '../demos/data/DiffViewerDemo';
import { LogViewerDemo } from '../demos/data/LogViewerDemo';
import { PeopleListDemo } from '../demos/data/PeopleListDemo';
import { ServerDataGridDemo } from '../demos/data/ServerDataGridDemo';
import { TableAddRowDemo } from '../demos/data/TableAddRowDemo';
import { TableDemo } from '../demos/data/TableDemo';
import { TimelineActionsDemo } from '../demos/data/TimelineActionsDemo';
import { makeFeedItems, makeHistoryItems, makePipelineItems } from '../demos/data/timelines';
import { VirtualDataGridDemo } from '../demos/data/VirtualDataGridDemo';
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
    id: 'data-cell-stack',
    span: 12,
    render: () => <CellStackDemo />,
  },
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
    id: 'data-grid-states',
    span: 12,
    render: () => <DataGridStatesDemo />,
  },
  {
    id: 'data-grid-server',
    span: 12,
    render: () => <ServerDataGridDemo />,
  },
  {
    id: 'data-column-manager',
    span: 12,
    render: () => <ColumnManagerDemo />,
  },
  {
    id: 'data-table-add-row',
    span: 6,
    render: () => <TableAddRowDemo />,
  },
  {
    id: 'data-grid-virtual',
    span: 12,
    render: () => <VirtualDataGridDemo />,
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
    render: () => {
      const { ts, t } = useI18n();
      const faqItems = createFaqItems(ts);
      return (
        <div class={styles.columns}>
          <div class={styles.panel}>
            <p class={styles.caption}>{t('library.data.specimens.data-accordion.separated')}</p>
            <Accordion items={faqItems} defaultValue={['billing']} />
          </div>
          <div class={styles.panel}>
            <p class={styles.caption}>{t('library.data.specimens.data-accordion.flushSeveral')}</p>
            <Accordion variant="flush" multiple items={faqItems} defaultValue={['export', 'sso']} />
          </div>
          <div class={styles.panel}>
            <p class={styles.caption}>{t('library.data.specimens.data-accordion.elevated')}</p>
            <Accordion variant="elevated" gap="md" items={createStatusItems(ts)} defaultValue={['latency']} />
          </div>
        </div>
      );
    },
  },
  {
    id: 'data-record',
    span: 6,
    render: () => {
      const { t } = useI18n();
      return (
        <div class={styles.stack}>
          <DescriptionList
            items={[
              { term: t('library.data.specimens.data-record.candidate'), description: 'Anna Kowalska' },
              { term: t('library.data.specimens.data-record.reference'), description: 'REC-2041', mono: true },
              {
                term: t('library.data.specimens.data-record.location'),
                description: t('library.data.specimens.data-record.warsaw'),
                hint: t('library.data.specimens.data-record.openToRemote'),
              },
              { term: t('library.data.specimens.data-record.noticePeriod') },
            ]}
          />
          <Divider label={t('library.data.specimens.data-record.skills')} />
          <SkillBar label="TypeScript" level={t('library.data.specimens.data-record.advanced')} value={90} />
          <SkillBar
            label={t('library.data.specimens.data-record.accessibility')}
            level={t('library.data.specimens.data-record.proficient')}
            value={72}
            tone="info"
          />
          <SkillBar
            label={t('library.data.specimens.data-record.systemsDesign')}
            level={t('library.data.specimens.data-record.developing')}
            value={48}
            tone="warning"
          />
        </div>
      );
    },
  },
  {
    id: 'data-timeline',
    span: 12,
    render: () => {
      const { ts, t, locale } = useI18n();
      return (
        <div class={styles.columns}>
          <div class={styles.panel}>
            <p class={styles.caption}>{t('library.data.specimens.data-timeline.defaultRail')}</p>
            <Timeline items={makeHistoryItems(ts, locale())} />
          </div>
          <div class={styles.panel}>
            <p class={styles.caption}>{t('library.data.specimens.data-timeline.compactFeed')}</p>
            <Timeline variant="compact" divided items={makeFeedItems(ts)} />
          </div>
          <div class={styles.panel}>
            <p class={styles.caption}>{t('library.data.specimens.data-timeline.statusPipeline')}</p>
            <Timeline items={makePipelineItems(ts, locale())} />
          </div>
          <div class={styles.panel}>
            <p class={styles.caption}>{t('library.data.specimens.data-timeline.rowActions')}</p>
            <TimelineActionsDemo />
          </div>
          <div class={styles.panel}>
            <p class={styles.caption}>{t('library.data.specimens.data-timeline.activityFeed')}</p>
            <Timeline
              items={[
                {
                  title: (
                    <span>
                      <b>Anna Kowalska</b> {t('library.data.specimens.data-timeline.commentedOn')}
                    </span>
                  ),
                  time: t('library.data.specimens.data-timeline.twoMinAgo'),
                  avatar: <Avatar name="Anna Kowalska" size="sm" />,
                  content: t('library.data.specimens.data-timeline.navNote'),
                },
                {
                  title: (
                    <span>
                      {t('library.data.specimens.data-timeline.statusChangedTo')}{' '}
                      <Badge tone="success" size="sm">
                        {t('library.data.specimens.data-timeline.approved')}
                      </Badge>
                    </span>
                  ),
                  time: t('library.data.specimens.data-timeline.oneHourAgo'),
                  icon: 'circle-check',
                  tone: 'success',
                },
                {
                  title: t('library.data.specimens.data-timeline.buildFailed'),
                  description: t('library.data.specimens.data-timeline.buildFailedDetail'),
                  time: t('library.data.relative.yesterday'),
                  icon: 'circle-x',
                  tone: 'danger',
                },
                {
                  title: t('library.data.specimens.data-timeline.projectCreated'),
                  time: t('library.data.specimens.data-timeline.projectCreatedDate'),
                  tone: 'brand',
                },
              ]}
            />
          </div>
          <div class={styles.panel}>
            <p class={styles.caption}>{t('library.data.specimens.data-timeline.insideCard')}</p>
            <Card
              title="Anna Kowalska"
              description={t('library.data.specimens.data-timeline.cardRole')}
              actions={
                <Badge tone="info" size="sm" dot>
                  {t('library.data.specimens.data-timeline.technicalReviewBadge')}
                </Badge>
              }
            >
              <Timeline
                items={[
                  {
                    id: 1,
                    status: 'done',
                    title: t('library.data.specimens.data-timeline.applied'),
                    time: t('library.data.specimens.data-timeline.appliedDate'),
                    description: t('library.data.specimens.data-timeline.appliedVia'),
                  },
                  {
                    id: 2,
                    status: 'done',
                    title: t('library.data.specimens.data-timeline.screening'),
                    time: t('library.data.specimens.data-timeline.screeningDate'),
                    description: t('library.data.specimens.data-timeline.screeningDetail'),
                  },
                  {
                    id: 3,
                    status: 'current',
                    title: t('library.data.specimens.data-timeline.technicalReview'),
                    time: t('library.data.specimens.data-timeline.technicalReviewTime'),
                    content: (
                      <div style={{ display: 'flex', 'align-items': 'center', gap: '8px' }}>
                        <Avatar name="Jan Nowak" size="xs" />
                        <span>{t('library.data.specimens.data-timeline.roomLine')}</span>
                      </div>
                    ),
                  },
                  {
                    id: 4,
                    status: 'upcoming',
                    title: t('library.data.specimens.data-timeline.teamFit'),
                    description: t('library.data.timeline.notScheduled'),
                  },
                ]}
              />
            </Card>
          </div>
        </div>
      );
    },
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
