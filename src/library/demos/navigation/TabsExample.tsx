import { useI18n } from '@jankrajewskiit/i18n';
import { TabPanel, Tabs, type TabsProps } from '@jankrajewskiit/ui';
import { createSignal, createUniqueId, For, untrack } from 'solid-js';

import styles from './TabsExample.module.css';

export interface TabsExampleProps {
  caption: string;
  label: string;
  items: (TabsProps['items'][number] & { label: string })[];
  initial?: string;
  variant?: TabsProps['variant'];
  orientation?: TabsProps['orientation'];
  activation?: TabsProps['activation'];
}

export const TabsExample = (props: TabsExampleProps) => {
  const { ts } = useI18n();
  const id = createUniqueId();
  const [active, setActive] = createSignal(
    untrack(() => props.initial ?? props.items.find((item) => !item.disabled)?.value),
  );
  return (
    <div class={styles.root}>
      <p class={styles.caption}>{props.caption}</p>
      <Tabs
        id={id}
        aria-label={props.label}
        items={props.items}
        value={active()}
        onValueChange={setActive}
        variant={props.variant}
        orientation={props.orientation}
        activation={props.activation}
      />
      <For each={props.items}>
        {(item) => (
          <TabPanel class={styles.panel} tabsId={id} value={item.value} activeValue={active()}>
            {ts('library.navigation.tabs.content', { view: item.label })}
          </TabPanel>
        )}
      </For>
    </div>
  );
};
