import { useI18n } from '@jankrajewskiit/i18n';
import { Segmented, SegmentedItem, Text } from '@jankrajewskiit/ui';
import { createSignal, For, onMount } from 'solid-js';

import styles from './ShellAnatomyDemo.module.css';
import { formatPx, measureToken } from './tokenValues';

const MEASURES = [
  { labelKey: 'library.spaceLayout.shell.measures.topbarHeight', token: '--topbar-height' },
  { labelKey: 'library.spaceLayout.shell.measures.sidebarWidth', token: '--sidebar-width' },
  { labelKey: 'library.spaceLayout.shell.measures.sidebarCollapsed', token: '--sidebar-width-collapsed' },
  { labelKey: 'library.spaceLayout.shell.measures.gutter', token: '--gutter' },
  { labelKey: 'library.spaceLayout.shell.measures.gridGap', token: '--grid-gap' },
] as const;

const NAV_ROWS = [
  { labelKey: 'library.spaceLayout.shell.nav.overview' },
  { labelKey: 'library.spaceLayout.shell.nav.projects' },
  { labelKey: 'library.spaceLayout.shell.nav.reports' },
  { labelKey: 'library.spaceLayout.shell.nav.settings' },
] as const;

const SIDEBAR_STATES = [
  { id: 'expanded', labelKey: 'library.spaceLayout.shell.states.expanded' },
  { id: 'collapsed', labelKey: 'library.spaceLayout.shell.states.collapsed' },
] as const;

type SidebarState = (typeof SIDEBAR_STATES)[number]['id'];

export const ShellAnatomyDemo = () => {
  const { ts } = useI18n();
  const [sidebar, setSidebar] = createSignal<SidebarState>('expanded');
  const [measures, setMeasures] = createSignal<Readonly<Record<string, string>>>({});

  onMount(() => {
    setMeasures(Object.fromEntries(MEASURES.map((entry) => [entry.token, formatPx(measureToken(entry.token))])));
  });

  return (
    <div class={styles.root}>
      <Segmented role="radiogroup" aria-label={ts('library.spaceLayout.shell.sidebarState')} size="sm">
        <For each={SIDEBAR_STATES}>
          {(state) => (
            <SegmentedItem role="radio" selected={sidebar() === state.id} onClick={() => setSidebar(state.id)}>
              {ts(state.labelKey)}
            </SegmentedItem>
          )}
        </For>
      </Segmented>
      <div class={styles.shell} aria-hidden="true">
        <div class={styles.topbar}>
          <span class={styles.mark} />
          <span class={styles.title}>{ts('library.spaceLayout.shell.topbar')}</span>
          <span class={styles.avatar} />
        </div>
        <div class={styles.body} data-collapsed={sidebar() === 'collapsed' ? '' : undefined}>
          <div class={styles.sidebar}>
            <For each={NAV_ROWS}>
              {(row, index) => (
                <span class={styles.nav} data-current={index() === 0 ? '' : undefined}>
                  <span class={styles.navIcon} />
                  <span class={styles.navLabel}>{ts(row.labelKey)}</span>
                </span>
              )}
            </For>
          </div>
          <div class={styles.content}>
            <div class={styles.grid}>
              <span class={styles.tile} data-span="8">
                {ts('library.spaceLayout.shell.main')}
              </span>
              <span class={styles.tile} data-span="4">
                {ts('library.spaceLayout.shell.aside')}
              </span>
              <span class={styles.tile} data-span="12">
                {ts('library.spaceLayout.shell.fullWidth')}
              </span>
            </div>
          </div>
        </div>
      </div>
      <dl class={styles.measures}>
        <For each={MEASURES}>
          {(entry) => (
            <div class={styles.measure}>
              <dt>{ts(entry.labelKey)}</dt>
              <dd>{measures()[entry.token] ?? ''}</dd>
              <dd>
                <code>{entry.token}</code>
              </dd>
            </div>
          )}
        </For>
      </dl>
      <Text variant="caption" tone="tertiary">
        {ts('library.spaceLayout.shell.note')}
      </Text>
    </div>
  );
};
