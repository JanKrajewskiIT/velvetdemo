import type { FileUrlImportPayload, FileUrlImportSource } from '@jankrajewskiit/ui';
import { Button, FileUrlImportDialog } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './FileUrlImportDemo.module.css';

const SOURCES: readonly FileUrlImportSource[] = [
  {
    value: 'document-url',
    label: 'Document URL',
    kind: 'url',
    placeholder: 'https://velvet.example/brief',
    hint: 'Use an HTTP or HTTPS URL. This demo only previews your selection.',
  },
  {
    value: 'local-file',
    label: 'Local file',
    kind: 'file',
    accept: '.pdf,.txt,.csv',
    dropLabel: 'Choose a PDF, text file or CSV',
    hint: 'The selected file stays on your device.',
  },
];

export const FileUrlImportDemo = () => {
  const [open, setOpen] = createSignal(false);
  const [selection, setSelection] = createSignal('No source selected yet.');
  const submit = (payload: FileUrlImportPayload) => {
    if ('url' in payload) setSelection(`Selected URL: ${payload.url}`);
    else setSelection(`Selected file: ${payload.file.name} (${payload.file.size} bytes)`);
    setOpen(false);
  };

  return (
    <div class={styles.root}>
      <Button variant="secondary" iconLeft="upload" onClick={() => setOpen(true)}>
        Choose a file or URL
      </Button>
      <p class={styles.status} role="status">
        {selection()}
      </p>
      <FileUrlImportDialog
        open={open()}
        onClose={() => setOpen(false)}
        sources={SOURCES}
        onSubmit={submit}
        description="Preview a document source locally. No upload or download takes place."
        submitLabel="Use this source"
      />
    </div>
  );
};
