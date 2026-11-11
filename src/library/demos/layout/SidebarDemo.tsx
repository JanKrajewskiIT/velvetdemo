import { useI18n } from '@jankrajewskiit/i18n';
import { BrandLogo, NavItem, NavSection, SearchTrigger, Sidebar, Stack, Text } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './SidebarDemo.module.css';

const PAGE_KEYS = {
  dashboard: 'library.layout.sidebar.dashboard',
  analytics: 'library.layout.sidebar.analytics',
  active: 'library.layout.sidebar.active',
  archived: 'library.layout.sidebar.archived',
  templates: 'library.layout.sidebar.templates',
  team: 'library.layout.sidebar.team',
  settings: 'library.layout.sidebar.settings',
} as const satisfies Record<string, string>;

type PageId = keyof typeof PAGE_KEYS;

export const SidebarDemo = () => {
  const { ts } = useI18n();
  const [collapsed, setCollapsed] = createSignal(false);
  const [page, setPage] = createSignal<PageId>('dashboard');
  const [opened, setOpened] = createSignal(0);
  const link = (id: PageId) => ({ label: ts(PAGE_KEYS[id]), active: page() === id, onClick: () => setPage(id) });
  const section = (id: PageId) => ({ id, label: ts(PAGE_KEYS[id]), active: page() === id, onClick: () => setPage(id) });

  return (
    <div class={styles.stage}>
      <Sidebar collapsed={collapsed()} onCollapsedChange={setCollapsed} brand={<BrandLogo brand="recron" size="sm" />}>
        <NavSection>{ts('library.layout.sidebar.overview')}</NavSection>
        <NavItem icon="home" {...link('dashboard')} />
        <NavItem icon="bar-chart" {...link('analytics')} />
        <NavSection>{ts('library.layout.sidebar.work')}</NavSection>
        <NavItem
          icon="briefcase"
          label={ts('library.layout.sidebar.projects')}
          count={8}
          subItems={[section('active'), section('archived'), section('templates')]}
          defaultOpen
        />
        <NavItem icon="users" count={24} {...link('team')} />
        <NavSection>{ts('library.layout.sidebar.system')}</NavSection>
        <NavItem icon="settings" {...link('settings')} />
      </Sidebar>
      <Stack gap={4} class={styles.main}>
        <SearchTrigger
          placeholder={ts('library.layout.sidebar.searchPlaceholder')}
          onOpen={() => setOpened(opened() + 1)}
        />
        <Stack gap={1}>
          <Text variant="title" as="p">
            {ts(PAGE_KEYS[page()])}
          </Text>
          <Text variant="caption" tone="tertiary">
            {ts('library.layout.sidebar.hint')}
          </Text>
          <Text variant="caption" tone="tertiary" tabular role="status">
            {opened() === 1
              ? ts('library.layout.sidebar.searchOnce')
              : ts('library.layout.sidebar.searchMany', { count: opened() })}
          </Text>
        </Stack>
      </Stack>
    </div>
  );
};
