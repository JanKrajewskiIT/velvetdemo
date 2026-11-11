import { useI18n } from '@jankrajewskiit/i18n';
import { DropdownButton } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './DropdownButtonDemo.module.css';

const STATUS_KEYS = {
  idle: 'library.menus.demos.dropdown.status.idle',
  saved: 'library.menus.demos.dropdown.status.saved',
  savedAsDraft: 'library.menus.demos.dropdown.status.savedAsDraft',
  published: 'library.menus.demos.dropdown.status.published',
  exportedCsv: 'library.menus.demos.dropdown.status.exportedCsv',
  exportedPdf: 'library.menus.demos.dropdown.status.exportedPdf',
} as const;

type DropdownStatus = keyof typeof STATUS_KEYS;

export const DropdownButtonDemo = () => {
  const { ts } = useI18n();
  const [status, setStatus] = createSignal<DropdownStatus>('idle');

  return (
    <div class={styles.root}>
      <div class={styles.row}>
        <DropdownButton
          icon="check"
          onClick={() => setStatus('saved')}
          items={[
            {
              label: ts('library.menus.demos.dropdown.saveAsDraft'),
              icon: 'file',
              onSelect: () => setStatus('savedAsDraft'),
            },
            {
              label: ts('library.menus.demos.dropdown.saveAndPublish'),
              icon: 'globe',
              onSelect: () => setStatus('published'),
            },
          ]}
        >
          {ts('library.menus.demos.dropdown.save')}
        </DropdownButton>
        <DropdownButton
          variant="secondary"
          icon="download"
          onClick={() => setStatus('exportedCsv')}
          items={[
            { label: ts('library.menus.demos.dropdown.exportCsv'), onSelect: () => setStatus('exportedCsv') },
            { label: ts('library.menus.demos.dropdown.exportPdf'), onSelect: () => setStatus('exportedPdf') },
          ]}
        >
          {ts('library.menus.demos.dropdown.export')}
        </DropdownButton>
        <DropdownButton
          variant="ghost"
          items={[
            { label: ts('library.menus.demos.dropdown.newestFirst'), checked: true },
            { label: ts('library.menus.demos.dropdown.oldestFirst'), checked: false },
          ]}
        >
          {ts('library.menus.demos.dropdown.sort')}
        </DropdownButton>
        <DropdownButton variant="soft" disabled items={[{ label: ts('library.menus.demos.dropdown.unavailable') }]}>
          {ts('library.menus.demos.dropdown.disabled')}
        </DropdownButton>
      </div>
      <p class={styles.status} role="status">
        {ts(STATUS_KEYS[status()])}
      </p>
    </div>
  );
};
