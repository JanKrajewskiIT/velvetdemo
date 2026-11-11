import { DataGrid, type GridColumn } from '@jankrajewskiit/data';
import { useI18n } from '@jankrajewskiit/i18n';
import { Button } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './DataGridStatesDemo.module.css';
import { type Member, MEMBER_STATUS_LABEL_KEY, MEMBERS, ROLE_LABEL_KEY } from './members';

type GridStatus = 'ready' | 'loading' | 'error';

const STATUS_LABEL_KEYS = {
  ready: 'library.data.states.ready',
  loading: 'library.data.states.loading',
  error: 'library.data.states.error',
} as const satisfies Record<GridStatus, string>;

const ROWS = MEMBERS.slice(0, 5);
const RETRY_DELAY_MS = 600;

export const DataGridStatesDemo = () => {
  const { ts } = useI18n();
  const COLUMNS: GridColumn<Member>[] = [
    { key: 'name', label: ts('library.data.columns.member'), width: 220 },
    { key: 'role', label: ts('library.data.columns.role'), width: 140, render: (row) => ts(ROLE_LABEL_KEY[row.role]) },
    {
      key: 'status',
      label: ts('library.data.columns.status'),
      width: 140,
      render: (row) => ts(MEMBER_STATUS_LABEL_KEY[row.status]),
    },
  ];
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
          {ts(STATUS_LABEL_KEYS[status()])}
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
