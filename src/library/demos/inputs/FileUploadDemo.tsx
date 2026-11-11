import { useI18n } from '@jankrajewskiit/i18n';
import { FileUpload, type UploadFile } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

const INITIAL_FILES = (uploadFailed: string): UploadFile[] => [
  { id: 'brand-guide', name: 'brand-guide.pdf', size: 2_400_000, status: 'done' },
  { id: 'hero-draft', name: 'hero-draft.png', status: 'uploading', progress: 62 },
  { id: 'notes', name: 'meeting-notes.docx', status: 'error', error: uploadFailed },
];

const MAX_FILE_BYTES = 20 * 1024 * 1024;

export const FileUploadDemo = () => {
  const { ts } = useI18n();
  const [files, setFiles] = createSignal<UploadFile[]>(
    INITIAL_FILES(ts('library.inputs.demos.fileUpload.uploadFailed')),
  );
  let counter = 0;

  const addFiles = (added: File[]) => {
    const rows = added.map((file): UploadFile => {
      counter += 1;
      return { id: `added-${counter}`, name: file.name, size: file.size, status: 'done' };
    });
    setFiles((current) => [...current, ...rows]);
  };

  const removeFile = (id: string | number) => setFiles((current) => current.filter((file) => file.id !== id));

  const retryFile = (id: string | number) =>
    setFiles((current) => current.map((file): UploadFile => (file.id === id ? { ...file, status: 'done' } : file)));

  return (
    <FileUpload
      files={files()}
      onFiles={addFiles}
      onRemove={removeFile}
      onRetry={retryFile}
      accept="image/*,.pdf,.docx"
      maxSize={MAX_FILE_BYTES}
      hint={ts('library.inputs.demos.fileUpload.hint')}
    />
  );
};
