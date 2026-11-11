import { useI18n } from '@jankrajewskiit/i18n';
import { Button, Footer, IconButton, PageHeader, Stack } from '@jankrajewskiit/ui';

import type { layoutEn } from '../../i18n/library/layout';
import { ColumnsDemo } from '../demos/layout/ColumnsDemo';
import { DividerDemo } from '../demos/layout/DividerDemo';
import { ScrollAreaDemo } from '../demos/layout/ScrollAreaDemo';
import { SidebarDemo } from '../demos/layout/SidebarDemo';
import { SplitPaneDemo } from '../demos/layout/SplitPaneDemo';
import { StackGridDemo } from '../demos/layout/StackGridDemo';
import type { Specimen, SpecimenIdOf } from '../types';

const noop = () => undefined;

export const layoutSpecimens: readonly Specimen<SpecimenIdOf<typeof layoutEn>>[] = [
  {
    id: 'layout-columns',
    span: 12,
    render: () => <ColumnsDemo />,
  },
  {
    id: 'layout-divider',
    span: 6,
    render: () => <DividerDemo />,
  },
  {
    id: 'layout-stack-grid',
    span: 6,
    render: () => <StackGridDemo />,
  },
  {
    id: 'layout-scroll-area',
    span: 6,
    render: () => <ScrollAreaDemo />,
  },
  {
    id: 'layout-split-pane',
    span: 12,
    render: () => <SplitPaneDemo />,
  },
  {
    id: 'layout-sidebar',
    span: 12,
    render: () => <SidebarDemo />,
  },
  {
    id: 'layout-page-header',
    span: 12,
    render: () => {
      const { t } = useI18n();

      return (
        <Stack gap={5}>
          <PageHeader
            breadcrumb={[
              { label: t('library.layout.specimens.layout-page-header.breadcrumbProjects'), onClick: noop },
              { label: t('library.layout.specimens.layout-page-header.breadcrumbMigrations'), onClick: noop },
              { label: t('library.layout.specimens.layout-page-header.migration') },
            ]}
            onBack={noop}
            title={t('library.layout.specimens.layout-page-header.migration')}
            status={{ label: t('library.layout.specimens.layout-page-header.active'), tone: 'success' }}
            meta={[
              { icon: 'user', label: 'Anna Kowalska' },
              { icon: 'calendar', label: t('library.layout.specimens.layout-page-header.dueIn') },
              { icon: 'users', label: t('library.layout.specimens.layout-page-header.members') },
            ]}
            actions={
              <>
                <IconButton
                  icon="share"
                  label={t('library.layout.specimens.layout-page-header.share')}
                  variant="secondary"
                />
                <Button variant="secondary" iconLeft="settings">
                  {t('library.layout.specimens.layout-page-header.settings')}
                </Button>
                <Button iconLeft="plus">{t('library.layout.specimens.layout-page-header.newTask')}</Button>
              </>
            }
            tabs={[
              { value: 'overview', label: t('library.layout.specimens.layout-page-header.tabOverview') },
              { value: 'tasks', label: t('library.layout.specimens.layout-page-header.tabTasks'), count: 24 },
              { value: 'files', label: t('library.layout.specimens.layout-page-header.tabFiles'), count: 8 },
              { value: 'activity', label: t('library.layout.specimens.layout-page-header.tabActivity') },
            ]}
            defaultTab="overview"
          />
          <PageHeader
            eyebrow={t('library.layout.specimens.layout-page-header.eyebrow')}
            title={t('library.layout.specimens.layout-page-header.projects')}
            description={t('library.layout.specimens.layout-page-header.description')}
            actions={<Button iconLeft="plus">{t('library.layout.specimens.layout-page-header.newProject')}</Button>}
          />
        </Stack>
      );
    },
  },
  {
    id: 'layout-footer',
    span: 12,
    render: () => {
      const { t } = useI18n();

      return (
        <Stack gap={5}>
          <Footer
            brand="Velvet"
            description={t('library.layout.specimens.layout-footer.description')}
            social={[
              { icon: 'globe', label: t('library.layout.specimens.layout-footer.website') },
              { icon: 'mail', label: t('library.layout.specimens.layout-footer.email') },
            ]}
            columns={[
              {
                title: t('library.layout.specimens.layout-footer.productColumn'),
                links: [
                  { label: t('library.layout.specimens.layout-footer.components') },
                  { label: t('library.layout.specimens.layout-footer.tokens') },
                  {
                    label: t('library.layout.specimens.layout-footer.templates'),
                    badge: t('library.layout.specimens.layout-footer.badgeNew'),
                  },
                ],
              },
              {
                title: t('library.layout.specimens.layout-footer.resourcesColumn'),
                links: [
                  { label: t('library.layout.specimens.layout-footer.documentation') },
                  { label: t('library.layout.specimens.layout-footer.accessibility') },
                  { label: t('library.layout.specimens.layout-footer.changelog') },
                ],
              },
              {
                title: t('library.layout.specimens.layout-footer.companyColumn'),
                links: [
                  { label: t('library.layout.specimens.layout-footer.about') },
                  {
                    label: t('library.layout.specimens.layout-footer.careers'),
                    badge: t('library.layout.specimens.layout-footer.badgeHiring'),
                  },
                  { label: t('library.layout.specimens.layout-footer.contact') },
                ],
              },
            ]}
            copyright={`© ${new Date().getFullYear()} Velvet`}
            legal={[
              { label: t('library.layout.specimens.layout-footer.privacy') },
              { label: t('library.layout.specimens.layout-footer.terms') },
              { label: t('library.layout.specimens.layout-footer.cookies') },
            ]}
            status="ok"
          />
          <Footer
            variant="compact"
            brand="Velvet"
            copyright={`© ${new Date().getFullYear()}`}
            meta="v2.4.0"
            status={{ state: 'degraded', label: t('library.layout.specimens.layout-footer.searchSlow') }}
            legal={[
              { label: t('library.layout.specimens.layout-footer.privacy') },
              { label: t('library.layout.specimens.layout-footer.terms') },
              { label: t('library.layout.specimens.layout-footer.help') },
            ]}
          />
        </Stack>
      );
    },
  },
];
