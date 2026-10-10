import type { ImportSource } from '@jankrajewskiit/ui';
import { Button, ImportSourcesDialog } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import { createSimulatedDelay } from './createSimulatedDelay';

const REQUEST_DELAY_MS = 700;
const CONNECTED_COUNT = 250;

const INITIAL_SOURCES: ImportSource[] = [
  {
    id: 'csv',
    name: 'CSV upload',
    description: 'Spreadsheet export from any tool',
    icon: 'file',
    status: 'connected',
    count: 1240,
    defaultSelected: true,
  },
  {
    id: 'drive',
    name: 'Google Drive',
    description: 'anna@velvet.design',
    icon: 'folder',
    status: 'connected',
    count: 318,
    color: 'var(--dv-4)',
  },
  { id: 'notion', name: 'Notion', icon: 'file', status: 'error', error: 'Access expired. Reconnect to continue.' },
  {
    id: 'postgres',
    name: 'Postgres',
    description: 'Read-only connection string',
    icon: 'database',
    status: 'available',
    color: 'var(--dv-7)',
  },
  {
    id: 'mail',
    name: 'Mailbox',
    description: 'Import threads as tasks',
    icon: 'mail',
    status: 'available',
    color: 'var(--dv-2)',
  },
];

export const ImportSourcesDemo = () => {
  const delay = createSimulatedDelay(REQUEST_DELAY_MS);
  const [open, setOpen] = createSignal(false);
  const [sources, setSources] = createSignal<ImportSource[]>(INITIAL_SOURCES);

  const connect = async (id: string) => {
    await delay();
    setSources(
      sources().map((source) =>
        source.id === id ? { ...source, status: 'connected', count: CONNECTED_COUNT, error: undefined } : source,
      ),
    );
  };

  const runImport = async () => {
    await delay();
    setOpen(false);
  };

  return (
    <>
      <Button variant="secondary" iconLeft="download" onClick={() => setOpen(true)}>
        Import from
      </Button>
      <ImportSourcesDialog
        open={open()}
        onClose={() => setOpen(false)}
        sources={sources()}
        onConnect={connect}
        onImport={runImport}
      />
    </>
  );
};
