import { useI18n } from '@jankrajewskiit/i18n';
import type { ImportSource } from '@jankrajewskiit/ui';
import { Button, ImportSourcesDialog } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import { createSimulatedDelay } from './createSimulatedDelay';

const REQUEST_DELAY_MS = 700;
const CONNECTED_COUNT = 250;

export const ImportSourcesDemo = () => {
  const { ts } = useI18n();
  const delay = createSimulatedDelay(REQUEST_DELAY_MS);
  const initialSources: ImportSource[] = [
    {
      id: 'csv',
      name: ts('library.patterns.importSources.csvName'),
      description: ts('library.patterns.importSources.csvDescription'),
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
    {
      id: 'notion',
      name: 'Notion',
      icon: 'file',
      status: 'error',
      error: ts('library.patterns.importSources.expiredError'),
    },
    {
      id: 'postgres',
      name: 'Postgres',
      description: ts('library.patterns.importSources.postgresDescription'),
      icon: 'database',
      status: 'available',
      color: 'var(--dv-7)',
    },
    {
      id: 'mail',
      name: ts('library.patterns.importSources.mailboxName'),
      description: ts('library.patterns.importSources.mailboxDescription'),
      icon: 'mail',
      status: 'available',
      color: 'var(--dv-2)',
    },
  ];
  const [open, setOpen] = createSignal(false);
  const [sources, setSources] = createSignal<ImportSource[]>(initialSources);

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
        {ts('library.patterns.importSources.button')}
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
