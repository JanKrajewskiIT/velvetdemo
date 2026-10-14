import { DataGrid, type GridColumn } from '@jankrajewskiit/data';
import { useI18n } from '@jankrajewskiit/i18n';
import { Button } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './DataGridStatesDemo.module.css';
import type { Member } from './members';
import { MEMBERS } from './members';

type GridStatus = 'ready' | 'loading' | 'error';

const COLUMNS: GridColumn<Member>[] = [
  { key: 'name', label: 'Member', width: 220 },
  { key: 'role', label: 'Role', width: 140 },
  { key: 'status', label: 'Status', width: 140 },
];

const ROWS = MEMBERS.slice(0, 5);
const RETRY_DELAY_MS = 600;

export const DataGridStatesDemo = () => {
  const { ts } = useI18n();
  const [status, setStatus] = createSignal<GridStatus>('ready');
  const setReadyAfterRetry = () => {
    setStatus('loading');
    globalThis.setTimeout(() => setStatus('ready'), RETRY_DELAY_MS);
  };

  return (
    <div class={styles.root}>
      <div class={styles.controls}>
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={status() === 'loading'}
          onClick={() => setStatus('loading')}
        >
          {ts('library.data.states.showLoading')}
        </Button>
        <Button size="sm" variant="secondary" aria-pressed={status() === 'error'} onClick={() => setStatus('error')}>
          {ts('library.data.states.showError')}
        </Button>
        <Button size="sm" variant="secondary" onClick={() => setStatus('ready')}>
          {ts('library.data.states.reset')}
        </Button>
        <span class={styles.status} role="status" aria-live="polite">
          {ts(`library.data.states.${status()}`)}
        </span>
      </div>
      <DataGrid
        label={ts('library.data.states.label')}
        columns={COLUMNS}
        rows={ROWS}
        loading={status() === 'loading'}
        error={status() === 'error' ? ts('library.data.states.errorMessage') : undefined}
        onRetry={setReadyAfterRetry}
        height={220}
      />
    </div>
  );
};
