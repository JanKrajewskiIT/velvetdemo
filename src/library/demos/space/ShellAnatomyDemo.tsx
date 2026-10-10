import { Segmented, SegmentedItem, Text } from '@jankrajewskiit/ui';
import { createSignal, For, onMount } from 'solid-js';

import styles from './ShellAnatomyDemo.module.css';
import { formatPx, measureToken } from './tokenValues';

const MEASURES = [
  { name: 'Topbar height', token: '--topbar-height' },
  { name: 'Sidebar width', token: '--sidebar-width' },
  { name: 'Sidebar collapsed', token: '--sidebar-width-collapsed' },
  { name: 'Gutter', token: '--gutter' },
  { name: 'Grid gap', token: '--grid-gap' },
] as const;

const NAV_ROWS = ['Overview', 'Projects', 'Reports', 'Settings'] as const;
const SIDEBAR_STATES = ['Expanded', 'Collapsed'] as const;

export const ShellAnatomyDemo = () => {
  const [sidebar, setSidebar] = createSignal<(typeof SIDEBAR_STATES)[number]>('Expanded');
  const [measures, setMeasures] = createSignal<Readonly<Record<string, string>>>({});

  onMount(() => {
    setMeasures(Object.fromEntries(MEASURES.map((entry) => [entry.token, formatPx(measureToken(entry.token))])));
  });

  return (
    <div class={styles.root}>
      <Segmented role="radiogroup" aria-label="Sidebar state" size="sm">
        <For each={SIDEBAR_STATES}>
          {(state) => (
            <SegmentedItem role="radio" selected={sidebar() === state} onClick={() => setSidebar(state)}>
              {state}
            </SegmentedItem>
          )}
        </For>
      </Segmented>
      <div class={styles.shell} aria-hidden="true">
        <div class={styles.topbar}>
          <span class={styles.mark} />
          <span class={styles.title}>Topbar</span>
          <span class={styles.avatar} />
        </div>
        <div class={styles.body} data-collapsed={sidebar() === 'Collapsed' ? '' : undefined}>
          <div class={styles.sidebar}>
            <For each={NAV_ROWS}>
              {(row, index) => (
                <span class={styles.nav} data-current={index() === 0 ? '' : undefined}>
                  <span class={styles.navIcon} />
                  <span class={styles.navLabel}>{row}</span>
                </span>
              )}
            </For>
          </div>
          <div class={styles.content}>
            <div class={styles.grid}>
              <span class={styles.tile} data-span="8">
                Main · 8 columns
              </span>
              <span class={styles.tile} data-span="4">
                Aside · 4
              </span>
              <span class={styles.tile} data-span="12">
                Full width · 12
              </span>
            </div>
          </div>
        </div>
      </div>
      <dl class={styles.measures}>
        <For each={MEASURES}>
          {(entry) => (
            <div class={styles.measure}>
              <dt>{entry.name}</dt>
              <dd>{measures()[entry.token] ?? ''}</dd>
              <dd>
                <code>{entry.token}</code>
              </dd>
            </div>
          )}
        </For>
      </dl>
      <Text variant="caption" tone="tertiary">
        Proportions are true to the tokens; the schematic is scaled down to fit.
      </Text>
    </div>
  );
};
