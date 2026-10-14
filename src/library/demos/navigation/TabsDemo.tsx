import { useI18n } from '@jankrajewskiit/i18n';
import { createMemo } from 'solid-js';

import styles from './TabsDemo.module.css';
import { TabsExample } from './TabsExample';

export const TabsDemo = () => {
  const { ts } = useI18n();
  const applications = createMemo(() => [
    { value: 'all', label: ts('library.navigation.tabs.all'), count: 24 },
    { value: 'active', label: ts('library.navigation.tabs.active'), count: 8 },
    { value: 'archived', label: ts('library.navigation.tabs.archived') },
    { value: 'drafts', label: ts('library.navigation.tabs.drafts'), disabled: true },
  ]);
  const layouts = createMemo(() => [
    { value: 'grid', label: ts('library.navigation.tabs.grid'), icon: 'layout-grid' },
    { value: 'list', label: ts('library.navigation.tabs.list'), icon: 'list' },
  ]);
  const ranges = createMemo(() => [
    { value: 'day', label: ts('library.navigation.tabs.day') },
    { value: 'week', label: ts('library.navigation.tabs.week') },
    { value: 'month', label: ts('library.navigation.tabs.month') },
  ]);
  const settings = createMemo(() => [
    { value: 'profile', label: ts('library.navigation.tabs.profile') },
    { value: 'security', label: ts('library.navigation.tabs.security') },
    { value: 'billing', label: ts('library.navigation.tabs.billing') },
    { value: 'notifications', label: ts('library.navigation.tabs.notifications') },
  ]);
  return (
    <div class={styles.root}>
      <div class={styles.group}>
        <TabsExample
          caption={ts('library.navigation.tabs.underline')}
          label={ts('library.navigation.tabs.applications')}
          items={applications()}
        />
        <div class={styles.row}>
          <TabsExample
            caption={ts('library.navigation.tabs.segmented')}
            label={ts('library.navigation.tabs.layout')}
            variant="segmented"
            items={layouts()}
          />
          <TabsExample
            caption={ts('library.navigation.tabs.range')}
            label={ts('library.navigation.tabs.range')}
            variant="segmented"
            initial="week"
            items={ranges()}
          />
        </div>
      </div>
      <div class={styles.group}>
        <TabsExample
          caption={ts('library.navigation.tabs.vertical')}
          label={ts('library.navigation.tabs.settings')}
          orientation="vertical"
          items={settings()}
        />
        <TabsExample
          caption={ts('library.navigation.tabs.manualHelp')}
          label={ts('library.navigation.tabs.manual')}
          activation="manual"
          items={settings()}
        />
      </div>
    </div>
  );
};
