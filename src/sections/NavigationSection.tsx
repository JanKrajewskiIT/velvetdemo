import {
  addToast,
  BackToTop,
  BottomNav,
  type BottomNavItem,
  type BreadcrumbItem,
  Breadcrumbs,
  Button,
  Card,
  CodeText,
  FormField,
  Heading,
  Input,
  LocaleSwitcher,
  Navbar,
  type NavItem,
  Pagination,
  Sidebar,
  type SidebarItem,
  SidebarItemButton,
  SidebarNav,
  type SidebarNavGroup,
  SpeedDial,
  type SpeedDialAction,
  Stepper,
  TabButton,
  Tabs,
  Text,
  ThemeToggle,
  useI18n,
  Wizard,
} from '@jankrajewskiit/ui';
import { BiLogosReact } from 'solid-icons/bi';
import { IoAdd, IoCalendar, IoHome, IoPencil, IoPerson, IoSearch, IoSettings, IoShareSocial } from 'solid-icons/io';
import { createMemo, createSignal, For, Show } from 'solid-js';

import { PreviewGroup, PreviewPanel, ShowcaseMeta, ShowcaseSection } from '../components/ShowcaseSection';
import type { SectionId } from '../nav/demoNavConfig';

type TabValue = 'preview' | 'code' | 'props';

const NavigationSection = (props: { sectionId: SectionId }) => {
  const { ts, tx } = useI18n();
  const [tab, setTab] = createSignal<TabValue>('preview');
  const [activeStep, setActiveStep] = createSignal('details');
  const [page, setPage] = createSignal(3);
  const [activeBottomNav, setActiveBottomNav] = createSignal('home');
  const [sidebarActive, setSidebarActive] = createSignal('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = createSignal(false);
  const [sidebarNavActive, setSidebarNavActive] = createSignal('nav-overview');
  const tabCodeSample = createMemo(
    () => `<Tabs
  tabs={[
    { value: 'preview', label: '${ts('demo.text.navigation.tabs.preview')}' },
    { value: 'code', label: '${ts('demo.text.navigation.tabs.code')}' },
    { value: 'props', label: '${ts('demo.text.navigation.tabs.props')}' },
  ]}
  value={tab()}
  onChange={setTab}
  variant="underline"
/>`,
  );
  const tabProps = ['variant', 'activationMode', 'panelId', 'disabled'];

  const basicBreadcrumbs = createMemo<BreadcrumbItem[]>(() => [
    { label: ts('demo.text.navigation.breadcrumbs.home'), href: '#' },
    { label: ts('demo.text.navigation.breadcrumbs.products'), href: '#' },
    { label: ts('demo.text.navigation.breadcrumbs.detail') },
  ]);

  const collapsibleBreadcrumbs = createMemo<BreadcrumbItem[]>(() => [
    { label: ts('demo.text.navigation.breadcrumbs.home'), href: '#' },
    { label: ts('demo.text.navigation.breadcrumbs.category'), href: '#' },
    { label: ts('demo.text.navigation.breadcrumbs.subcategory'), href: '#' },
    { label: ts('demo.text.navigation.breadcrumbs.products'), href: '#' },
    { label: ts('demo.text.navigation.breadcrumbs.item'), href: '#' },
    { label: ts('demo.text.navigation.breadcrumbs.detail') },
  ]);

  const speedDialActions = createMemo<SpeedDialAction[]>(() => [
    { icon: <IoAdd size={20} />, label: ts('demo.text.navigation.speedDial.add'), onClick: () => {} },
    { icon: <IoPencil size={20} />, label: ts('demo.text.navigation.speedDial.edit'), onClick: () => {} },
    { icon: <IoShareSocial size={20} />, label: ts('demo.text.navigation.speedDial.share'), onClick: () => {} },
  ]);

  const speedDialDirectionVariants = createMemo(() => [
    { title: ts('demo.text.navigation.speedDial.up'), direction: 'up' as const },
    { title: ts('demo.text.navigation.speedDial.down'), direction: 'down' as const },
    { title: ts('demo.text.navigation.speedDial.left'), direction: 'left' as const },
    { title: ts('demo.text.navigation.speedDial.right'), direction: 'right' as const },
  ]);

  const stepperSteps = createMemo(() => [
    { value: 'info', label: ts('demo.text.navigation.stepper.info') },
    { value: 'details', label: ts('demo.text.navigation.stepper.details') },
    { value: 'review', label: ts('demo.text.navigation.stepper.review') },
    { value: 'done', label: ts('demo.text.navigation.stepper.done') },
  ]);

  const wizardSteps = createMemo(() => [
    {
      label: ts('demo.text.composites.wizard.accountStep'),
      component: (
        <div class="col">
          <FormField label={ts('demo.text.composites.wizard.email')}>
            {(fieldProps) => (
              <Input {...fieldProps} type="email" placeholder={ts('demo.text.composites.wizard.emailPlaceholder')} />
            )}
          </FormField>
          <FormField label={ts('demo.text.composites.wizard.username')}>
            {(fieldProps) => (
              <Input {...fieldProps} type="text" placeholder={ts('demo.text.composites.wizard.usernamePlaceholder')} />
            )}
          </FormField>
        </div>
      ),
    },
    {
      label: ts('demo.text.composites.wizard.profileStep'),
      component: (
        <div class="col">
          <FormField label={ts('demo.text.composites.wizard.fullName')}>
            {(fieldProps) => (
              <Input {...fieldProps} type="text" placeholder={ts('demo.text.composites.wizard.fullNamePlaceholder')} />
            )}
          </FormField>
          <FormField label={ts('demo.text.composites.wizard.bio')}>
            {(fieldProps) => (
              <Input {...fieldProps} type="text" placeholder={ts('demo.text.composites.wizard.bioPlaceholder')} />
            )}
          </FormField>
        </div>
      ),
    },
    {
      label: ts('demo.text.composites.wizard.confirmStep'),
      component: (
        <Text as="p" variant="bodySm" tone="muted" class="mutedText">
          {tx('demo.text.composites.wizard.confirmMessage', {
            finish: () => (
              <Text as="span" variant="labelMd">
                {ts('demo.text.composites.wizard.finish')}
              </Text>
            ),
          })}
        </Text>
      ),
    },
  ]);

  const bottomNavItems = createMemo<BottomNavItem[]>(() => [
    { id: 'home', label: ts('demo.text.navigation.bottomNav.home'), icon: <IoHome size={20} /> },
    { id: 'search', label: ts('demo.text.navigation.bottomNav.search'), icon: <IoSearch size={20} /> },
    { id: 'calendar', label: ts('demo.text.navigation.bottomNav.calendar'), icon: <IoCalendar size={20} />, badge: 2 },
    { id: 'profile', label: ts('demo.text.navigation.bottomNav.profile'), icon: <IoPerson size={20} /> },
  ]);

  const navbarItems = createMemo<NavItem[]>(() => [
    { label: ts('demo.text.navigation.navbar.dashboard'), href: '/dashboard', icon: IoHome },
    { label: ts('demo.text.navigation.navbar.search'), href: '/search', icon: IoSearch },
    { label: ts('demo.text.navigation.navbar.settings'), href: '/settings', icon: IoSettings },
  ]);

  const sidebarItems = createMemo<SidebarItem[]>(() => [
    { id: 'overview', label: ts('demo.text.navigation.sidebars.overview'), icon: <IoHome size={16} /> },
    {
      id: 'workspace',
      label: ts('demo.text.navigation.sidebars.workspace'),
      icon: <IoCalendar size={16} />,
      children: [
        { id: 'reports', label: ts('demo.text.navigation.sidebars.reports'), badge: 6 },
        { id: 'tasks', label: ts('demo.text.navigation.sidebars.tasks'), badge: 3 },
        { id: 'archive', label: ts('demo.text.navigation.sidebars.archive') },
      ],
    },
    { id: 'profile', label: ts('demo.text.navigation.sidebars.profile'), icon: <IoPerson size={16} /> },
  ]);

  const sidebarNavGroups = createMemo<SidebarNavGroup[]>(() => [
    {
      label: ts('demo.text.navigation.sidebars.groupNavigation'),
      items: [
        { id: 'nav-overview', label: ts('demo.text.navigation.sidebars.overview') },
        { id: 'nav-pages', label: ts('demo.text.navigation.sidebars.pages') },
        { id: 'nav-settings', label: ts('demo.text.navigation.sidebars.settings') },
      ],
    },
    {
      label: ts('demo.text.navigation.sidebars.groupManagement'),
      items: [
        { id: 'nav-users', label: ts('demo.text.navigation.sidebars.users') },
        { id: 'nav-billing', label: ts('demo.text.navigation.sidebars.billing') },
      ],
    },
  ]);

  return (
    <div>
      <Show when={props.sectionId === 'nav-navbar'}>
        <ShowcaseSection
          title={ts('demo.showcase.navigation.navbar.title')}
          subtitle={ts('demo.showcase.navigation.navbar.subtitle')}
        >
          <PreviewPanel>
            <PreviewGroup title={ts('demo.text.common.examples')}>
              <div class="layoutPreviewShell">
                <Navbar
                  navItems={navbarItems()}
                  logo={<BiLogosReact class="layoutNavbarLogo" />}
                  actions={
                    <div class="layoutNavbarActions">
                      <LocaleSwitcher variant="navbar" />
                      <ThemeToggle variant="navbar" />
                    </div>
                  }
                />
              </div>
            </PreviewGroup>
          </PreviewPanel>
        </ShowcaseSection>
      </Show>

      <Show when={props.sectionId === 'nav-sidebars'}>
        <ShowcaseSection
          title={ts('demo.showcase.navigation.sidebarAndSidebarNav.title')}
          subtitle={ts('demo.showcase.navigation.sidebarAndSidebarNav.subtitle')}
        >
          <PreviewPanel>
            <PreviewGroup title={ts('demo.text.navigation.sidebars.sidebar.title')}>
              <div class="sidebarPreviewShell">
                <Sidebar
                  class="sidebarNavPreview"
                  items={sidebarItems()}
                  activeId={sidebarActive()}
                  onSelect={setSidebarActive}
                  collapsed={sidebarCollapsed()}
                  onToggle={() => setSidebarCollapsed((current) => !current)}
                  header={ts('demo.text.navigation.sidebars.workspace')}
                />
                <div class="sidebarPreviewBody">
                  <div class="scenarioShell scenarioShellCompact">
                    <div class="scenarioHeader">
                      <div class="scenarioHeaderCopy">
                        <Text as="p" variant="overline" tone="primary">
                          {ts('demo.page.navSidebars.title')}
                        </Text>
                        <Heading level={3} variant="titleLg">
                          {ts('demo.page.navSidebars.description')}
                        </Heading>
                      </div>
                      <div class="scenarioMetricRow">
                        <div class="scenarioMetric">
                          <Text as="span" variant="overline" tone="tertiary">
                            {ts('demo.text.navigation.sidebars.activeSidebar')}
                          </Text>
                          <CodeText as="span">{sidebarActive()}</CodeText>
                        </div>
                        <div class="scenarioMetric">
                          <Text as="span" variant="overline" tone="tertiary">
                            {ts('demo.text.navigation.sidebars.pages')}
                          </Text>
                          <Text as="span" variant="labelLg">
                            {sidebarItems().length}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div class="scenarioGrid">
                      <div class="scenarioCard">
                        <Text as="p" variant="labelMd">
                          {ts('demo.text.navigation.sidebars.reports')}
                        </Text>
                        <Text as="p" variant="bodySm" tone="muted">
                          {ts('demo.text.navigation.sidebars.tasks')}
                        </Text>
                      </div>
                      <div class="scenarioCard">
                        <Text as="p" variant="labelMd">
                          {ts('demo.text.navigation.sidebars.archive')}
                        </Text>
                        <Text as="p" variant="bodySm" tone="muted">
                          {ts('demo.text.navigation.sidebars.profile')}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PreviewGroup>

            <PreviewGroup title={ts('demo.text.navigation.sidebars.sidebarNav.title')}>
              <div class="sidebarPreviewShell">
                <SidebarNav
                  class="sidebarNavPreview"
                  groups={sidebarNavGroups()}
                  activeId={sidebarNavActive()}
                  onSelect={setSidebarNavActive}
                  label={ts('demo.text.navigation.sidebars.label')}
                  subtitle={ts('demo.text.navigation.sidebars.previewSubtitle')}
                />
                <div class="sidebarPreviewBody">
                  <div class="scenarioShell scenarioShellCompact">
                    <div class="scenarioHeaderCopy">
                      <Text as="p" variant="overline" tone="primary">
                        {ts('demo.text.navigation.sidebars.groupNavigation')}
                      </Text>
                      <Text as="p" variant="bodySm" tone="muted">
                        {ts('demo.text.navigation.sidebars.activeSidebarNav')}:{' '}
                        <CodeText as="span" class="codeInline">
                          {sidebarNavActive()}
                        </CodeText>
                      </Text>
                    </div>
                    <div class="scenarioGrid">
                      <div class="scenarioCard">
                        <Text as="p" variant="labelMd">
                          {ts('demo.text.navigation.sidebars.users')}
                        </Text>
                        <Text as="p" variant="bodySm" tone="muted">
                          {ts('demo.text.navigation.sidebars.billing')}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PreviewGroup>

            <PreviewGroup title="SidebarItemButton">
              <div class="row">
                <SidebarItemButton
                  label={ts('demo.text.navigation.sidebars.workspace')}
                  prefix={<IoCalendar size={16} />}
                  active
                  badge={3}
                />
                <SidebarItemButton
                  label={ts('demo.text.navigation.sidebars.settings')}
                  prefix={<IoSettings size={16} />}
                  hasChildren
                  expanded
                />
                <SidebarItemButton
                  label={ts('demo.text.navigation.sidebars.profile')}
                  prefix={<IoPerson size={16} />}
                  collapsed
                />
              </div>
            </PreviewGroup>
          </PreviewPanel>
        </ShowcaseSection>
      </Show>

      <Show when={props.sectionId === 'nav-breadcrumbs'}>
        <ShowcaseSection
          title={ts('demo.showcase.navigation.breadcrumbs.title')}
          subtitle={ts('demo.showcase.navigation.breadcrumbs.subtitle')}
        >
          <PreviewPanel>
            <PreviewGroup title={ts('demo.text.common.examples')}>
              <Breadcrumbs items={basicBreadcrumbs()} />
              <Breadcrumbs items={collapsibleBreadcrumbs()} maxItems={3} />
            </PreviewGroup>
          </PreviewPanel>
        </ShowcaseSection>
      </Show>

      <Show when={props.sectionId === 'nav-stepper'}>
        <>
          <ShowcaseSection
            title={ts('demo.showcase.navigation.stepper.title')}
            subtitle={ts('demo.showcase.navigation.stepper.subtitle')}
          >
            <PreviewPanel>
              <PreviewGroup title={ts('demo.text.common.examples')}>
                <Stepper steps={stepperSteps()} activeStep={activeStep()} />
                <div class="stepButtons">
                  <For each={stepperSteps()}>
                    {(s) => (
                      <Button
                        variant={activeStep() === s.value ? 'primary' : 'ghost'}
                        size="sm"
                        onClick={() => setActiveStep(s.value)}
                      >
                        {s.label}
                      </Button>
                    )}
                  </For>
                </div>
              </PreviewGroup>
            </PreviewPanel>
          </ShowcaseSection>

          <ShowcaseSection
            title={ts('demo.showcase.composites.wizard.title')}
            subtitle={ts('demo.showcase.composites.wizard.subtitle')}
          >
            <PreviewPanel>
              <PreviewGroup title={ts('demo.text.common.examples')}>
                <Wizard
                  steps={wizardSteps()}
                  onFinish={() => {
                    addToast({ type: 'success', message: ts('demo.text.composites.wizard.doneToast') });
                  }}
                />
              </PreviewGroup>
            </PreviewPanel>
          </ShowcaseSection>
        </>
      </Show>

      <Show when={props.sectionId === 'nav-tabs'}>
        <ShowcaseSection
          title={ts('demo.showcase.navigation.tabs.title')}
          subtitle={ts('demo.showcase.navigation.tabs.subtitle')}
        >
          <PreviewPanel>
            <PreviewGroup title={ts('demo.text.navigation.tabs.underlineVariant.title')}>
              <Tabs<TabValue>
                tabs={[
                  { value: 'preview', label: ts('demo.text.navigation.tabs.preview') },
                  { value: 'code', label: ts('demo.text.navigation.tabs.code') },
                  { value: 'props', label: ts('demo.text.navigation.tabs.props') },
                ]}
                value={tab()}
                onChange={setTab}
                variant="underline"
              />
            </PreviewGroup>
            <PreviewGroup title={ts('demo.text.navigation.tabs.pillVariant.title')}>
              <Tabs<TabValue>
                tabs={[
                  { value: 'preview', label: ts('demo.text.navigation.tabs.preview') },
                  { value: 'code', label: ts('demo.text.navigation.tabs.code') },
                  { value: 'props', label: ts('demo.text.navigation.tabs.props') },
                ]}
                value={tab()}
                onChange={setTab}
                variant="pill"
              />
              <div class="tabShowcasePanel">
                <div class="scenarioHeaderCopy">
                  <Text as="p" variant="overline" tone="primary">
                    {ts('demo.text.navigation.tabs.activeTab')}
                  </Text>
                  <Heading level={3} variant="titleLg">
                    {tab() === 'preview'
                      ? ts('demo.text.navigation.tabs.preview')
                      : tab() === 'code'
                        ? ts('demo.text.navigation.tabs.code')
                        : ts('demo.text.navigation.tabs.props')}
                  </Heading>
                </div>
                <Show when={tab() === 'preview'}>
                  <div class="scenarioGrid">
                    <div class="scenarioCard">
                      <Text as="p" variant="labelMd">
                        {ts('demo.text.navigation.tabs.preview')}
                      </Text>
                      <Text as="p" variant="bodySm" tone="muted">
                        {ts('demo.page.navTabs.description')}
                      </Text>
                    </div>
                    <div class="scenarioCard">
                      <Text as="p" variant="labelMd">
                        {ts('demo.text.navigation.tabs.props')}
                      </Text>
                      <Text as="p" variant="bodySm" tone="muted">
                        {ts('demo.page.navPagination.description')}
                      </Text>
                    </div>
                  </div>
                </Show>
                <Show when={tab() === 'code'}>
                  <CodeText as="pre" variant="block" size="md">
                    {tabCodeSample()}
                  </CodeText>
                </Show>
                <Show when={tab() === 'props'}>
                  <div class="shortcutRow">
                    <For each={tabProps}>{(item) => <CodeText as="span">{item}</CodeText>}</For>
                  </div>
                </Show>
              </div>
            </PreviewGroup>
            <PreviewGroup title="TabButton">
              <div class="row">
                <TabButton label={ts('demo.text.navigation.tabs.preview')} selected variant="underline" />
                <TabButton label={ts('demo.text.navigation.tabs.code')} variant="underline" />
                <TabButton label={ts('demo.text.navigation.tabs.preview')} selected variant="pill" />
                <TabButton label={ts('demo.text.navigation.tabs.props')} variant="pill" />
              </div>
            </PreviewGroup>
          </PreviewPanel>
          <ShowcaseMeta>
            {ts('demo.text.navigation.tabs.activeTab')}:{' '}
            <CodeText as="span" class="codeInline">
              {tab()}
            </CodeText>
          </ShowcaseMeta>
        </ShowcaseSection>
      </Show>

      <Show when={props.sectionId === 'nav-pagination'}>
        <ShowcaseSection
          title={ts('demo.showcase.navigation.pagination.title')}
          subtitle={ts('demo.showcase.navigation.pagination.subtitle')}
        >
          <PreviewPanel>
            <PreviewGroup title={ts('demo.text.common.examples')}>
              <Pagination page={page()} totalPages={24} onChange={setPage} />
              <Text as="p" variant="bodySm" tone="muted" class="mutedText">
                {ts('demo.text.navigation.pagination.currentPage')}:{' '}
                <CodeText as="span" class="codeInline">
                  {page()}
                </CodeText>
              </Text>
            </PreviewGroup>
          </PreviewPanel>
        </ShowcaseSection>
      </Show>

      <Show when={props.sectionId === 'nav-speed-dial'}>
        <ShowcaseSection
          title={ts('demo.showcase.navigation.speedDial.title')}
          subtitle={ts('demo.showcase.navigation.speedDial.subtitle')}
        >
          <PreviewPanel>
            <PreviewGroup title={ts('demo.text.navigation.speedDial.directionVariants.title')}>
              <div class="speedDialGrid">
                <For each={speedDialDirectionVariants()}>
                  {(variant) => (
                    <Card class="speedDialCard">
                      <Text as="p" variant="bodySm" tone="muted" class="mutedText">
                        {variant.title}
                      </Text>
                      <div class="speedDialAnchor">
                        <SpeedDial actions={speedDialActions()} position="inline" direction={variant.direction} />
                      </div>
                    </Card>
                  )}
                </For>
              </div>
            </PreviewGroup>
          </PreviewPanel>
        </ShowcaseSection>
      </Show>

      <Show when={props.sectionId === 'nav-bottom-nav'}>
        <ShowcaseSection
          title={ts('demo.showcase.navigation.bottomNav.title')}
          subtitle={ts('demo.showcase.navigation.bottomNav.subtitle')}
        >
          <PreviewPanel>
            <PreviewGroup title={ts('demo.text.common.examples')}>
              <div class="bottomNavPreview">
                <div class="bottomNavPreviewLabel">
                  <Text as="p" variant="bodySm" tone="muted" class="mutedText">
                    {ts('demo.text.navigation.bottomNav.active')}:{' '}
                    <CodeText as="span" class="codeInline">
                      {activeBottomNav()}
                    </CodeText>
                  </Text>
                </div>
                <BottomNav
                  placement="container"
                  items={bottomNavItems()}
                  activeId={activeBottomNav()}
                  onChange={setActiveBottomNav}
                />
              </div>
            </PreviewGroup>
          </PreviewPanel>
          <ShowcaseMeta>{ts('demo.text.navigation.bottomNav.meta')}</ShowcaseMeta>
        </ShowcaseSection>
      </Show>

      <Show when={props.sectionId === 'nav-back-to-top'}>
        <ShowcaseSection
          title={ts('demo.showcase.navigation.backToTop.title')}
          subtitle={ts('demo.showcase.navigation.backToTop.subtitle')}
        >
          <PreviewPanel>
            <PreviewGroup title={ts('demo.text.common.examples')}>
              <Text as="p" variant="bodySm" tone="muted" class="mutedText">
                {tx('demo.text.navigation.backToTop.meta', {
                  main: () => <CodeText as="span">main</CodeText>,
                })}
              </Text>
              <BackToTop threshold={200} scrollRoot={() => document.querySelector<HTMLElement>('main.main')} />
              <div class="backToTopScrollFiller" aria-label={ts('demo.text.navigation.backToTop.scrollPreview')}>
                <For each={Array.from({ length: 16 }, (_, i) => i)}>
                  {() => (
                    <div class="backToTopScrollFillerCard">
                      <div class="backToTopScrollFillerBar backToTopScrollFillerBarNarrow" />
                      <div class="backToTopScrollFillerBar backToTopScrollFillerBarWide" />
                      <div class="backToTopScrollFillerBar backToTopScrollFillerBarMid" />
                    </div>
                  )}
                </For>
              </div>
            </PreviewGroup>
          </PreviewPanel>
        </ShowcaseSection>
      </Show>
    </div>
  );
};

export default NavigationSection;
