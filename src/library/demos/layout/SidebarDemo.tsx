import { BrandLogo, NavItem, NavSection, SearchTrigger, Sidebar, Stack, Text } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './SidebarDemo.module.css';

export const SidebarDemo = () => {
  const [collapsed, setCollapsed] = createSignal(false);
  const [page, setPage] = createSignal('Dashboard');
  const [opened, setOpened] = createSignal(0);
  const link = (label: string) => ({ label, active: page() === label, onClick: () => setPage(label) });
  const section = (label: string) => ({ id: label, label, active: page() === label, onClick: () => setPage(label) });

  return (
    <div class={styles.stage}>
      <Sidebar collapsed={collapsed()} onCollapsedChange={setCollapsed} brand={<BrandLogo brand="recron" size="sm" />}>
        <NavSection>Overview</NavSection>
        <NavItem icon="home" {...link('Dashboard')} />
        <NavItem icon="bar-chart" {...link('Analytics')} />
        <NavSection>Work</NavSection>
        <NavItem
          icon="briefcase"
          label="Projects"
          count={8}
          subItems={[section('Active'), section('Archived'), section('Templates')]}
          defaultOpen
        />
        <NavItem icon="users" count={24} {...link('Team')} />
        <NavSection>System</NavSection>
        <NavItem icon="settings" {...link('Settings')} />
      </Sidebar>
      <Stack gap={4} class={styles.main}>
        <SearchTrigger placeholder="Search projects, people…" onOpen={() => setOpened(opened() + 1)} />
        <Stack gap={1}>
          <Text variant="title" as="p">
            {page()}
          </Text>
          <Text variant="caption" tone="tertiary">
            Use the toggle in the sidebar header to fold it to a 64px icon rail.
          </Text>
          <Text variant="caption" tone="tertiary" tabular role="status">
            Search opened {opened()} {opened() === 1 ? 'time' : 'times'} — press Ctrl+K or ⌘K.
          </Text>
        </Stack>
      </Stack>
    </div>
  );
};
