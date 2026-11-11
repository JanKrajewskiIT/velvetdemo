import { useI18n } from '@jankrajewskiit/i18n';
import type { FileUrlImportPayload, FileUrlImportSource } from '@jankrajewskiit/ui';
import { Button, FileUrlImportDialog } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './FileUrlImportDemo.module.css';

export const FileUrlImportDemo = () => {
  const { ts } = useI18n();
  const sources: readonly FileUrlImportSource[] = [
    {
      value: 'document-url',
      label: ts('library.patterns.fileUrlImport.urlLabel'),
      kind: 'url',
      placeholder: 'https://velvet.example/brief',
      hint: ts('library.patterns.fileUrlImport.urlHint'),
    },
    {
      value: 'local-file',
      label: ts('library.patterns.fileUrlImport.fileLabel'),
      kind: 'file',
      accept: '.pdf,.txt,.csv',
      dropLabel: ts('library.patterns.fileUrlImport.fileDropLabel'),
      hint: ts('library.patterns.fileUrlImport.fileHint'),
    },
  ];
  const [open, setOpen] = createSignal(false);
  const [selection, setSelection] = createSignal(ts('library.patterns.fileUrlImport.noSelection'));
  const submit = (payload: FileUrlImportPayload) => {
    if ('url' in payload) {
      setSelection(ts('library.patterns.fileUrlImport.selectedUrl', { url: payload.url }));
    } else {
      setSelection(
        ts('library.patterns.fileUrlImport.selectedFile', { name: payload.file.name, size: payload.file.size }),
      );
    }
    setOpen(false);
  };

  return (
    <div class={styles.root}>
      <Button variant="secondary" iconLeft="upload" onClick={() => setOpen(true)}>
        {ts('library.patterns.fileUrlImport.choose')}
      </Button>
      <p class={styles.status} role="status">
        {selection()}
      </p>
      <FileUrlImportDialog
        open={open()}
        onClose={() => setOpen(false)}
        sources={sources}
        onSubmit={submit}
        description={ts('library.patterns.fileUrlImport.description')}
        submitLabel={ts('library.patterns.fileUrlImport.submit')}
      />
    </div>
  );
};
