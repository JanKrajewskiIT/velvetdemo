import { Button, Footer, IconButton, PageHeader, Stack } from '@jankrajewskiit/ui';

import type { layoutEn } from '../../i18n/library/layout';
import { ScrollAreaDemo } from '../demos/layout/ScrollAreaDemo';
import { SidebarDemo } from '../demos/layout/SidebarDemo';
import { SplitPaneDemo } from '../demos/layout/SplitPaneDemo';
import { StackGridDemo } from '../demos/layout/StackGridDemo';
import type { Specimen, SpecimenIdOf } from '../types';

const noop = () => undefined;

export const layoutSpecimens: readonly Specimen<SpecimenIdOf<typeof layoutEn>>[] = [
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
    render: () => (
      <Stack gap={5}>
        <PageHeader
          breadcrumb={[
            { label: 'Projects', onClick: noop },
            { label: 'Migrations', onClick: noop },
            { label: 'Platform migration' },
          ]}
          onBack={noop}
          title="Platform migration"
          status={{ label: 'Active', tone: 'success' }}
          meta={[
            { icon: 'user', label: 'Anna Kowalska' },
            { icon: 'calendar', label: 'Due in three weeks' },
            { icon: 'users', label: '6 members' },
          ]}
          actions={
            <>
              <IconButton icon="share" label="Share" variant="secondary" />
              <Button variant="secondary" iconLeft="settings">
                Settings
              </Button>
              <Button iconLeft="plus">New task</Button>
            </>
          }
          tabs={[
            { value: 'overview', label: 'Overview' },
            { value: 'tasks', label: 'Tasks', count: 24 },
            { value: 'files', label: 'Files', count: 8 },
            { value: 'activity', label: 'Activity' },
          ]}
          defaultTab="overview"
        />
        <PageHeader
          eyebrow="Workspace / Velvet"
          title="Projects"
          description="Everything your team is working on."
          actions={<Button iconLeft="plus">New project</Button>}
        />
      </Stack>
    ),
  },
  {
    id: 'layout-footer',
    span: 12,
    render: () => (
      <Stack gap={5}>
        <Footer
          brand="Velvet"
          description="Design system for calm, confident product interfaces."
          social={[
            { icon: 'globe', label: 'Website' },
            { icon: 'mail', label: 'Email' },
          ]}
          columns={[
            {
              title: 'Product',
              links: [{ label: 'Components' }, { label: 'Tokens' }, { label: 'Templates', badge: 'New' }],
            },
            {
              title: 'Resources',
              links: [{ label: 'Documentation' }, { label: 'Accessibility' }, { label: 'Changelog' }],
            },
            {
              title: 'Company',
              links: [{ label: 'About' }, { label: 'Careers', badge: 'Hiring' }, { label: 'Contact' }],
            },
          ]}
          copyright={`© ${new Date().getFullYear()} Velvet`}
          legal={[{ label: 'Privacy' }, { label: 'Terms' }, { label: 'Cookies' }]}
          status="ok"
        />
        <Footer
          variant="compact"
          brand="Velvet"
          copyright={`© ${new Date().getFullYear()}`}
          meta="v2.4.0"
          status={{ state: 'degraded', label: 'Search is slow' }}
          legal={[{ label: 'Privacy' }, { label: 'Terms' }, { label: 'Help' }]}
        />
      </Stack>
    ),
  },
];
