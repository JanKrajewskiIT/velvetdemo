import { type RowKey, VirtualList } from '@jankrajewskiit/data';
import { Glyph } from '@jankrajewskiit/ui';
import { createSignal, Show } from 'solid-js';

import styles from './VirtualListDemo.module.css';

interface ExportFile {
  id: number;
  name: string;
  sizeKb: number;
}

const FILE_COUNT = 20_000;
const SIZE_SPREAD = 900;
const SIZE_STRIDE = 37;

const makeFiles = (count: number): ExportFile[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `export-${String(i + 1).padStart(5, '0')}.csv`,
    sizeKb: ((i * SIZE_STRIDE) % SIZE_SPREAD) + 24,
  }));

export const VirtualListDemo = () => {
  const files = makeFiles(FILE_COUNT);
  const [selected, setSelected] = createSignal<RowKey>();
  const selectedFile = () => files.find((file) => file.id === selected());
  return (
    <div class={styles.root}>
      <p class={styles.caption} aria-live="polite">
        <Show when={selectedFile()} fallback={`${FILE_COUNT.toLocaleString('en')} files. Select one.`}>
          {(file) => `Selected ${file().name}`}
        </Show>
      </p>
      <VirtualList
        items={files}
        label="Export files"
        height={320}
        itemHeight={44}
        divided
        selectable
        selected={selected()}
        onSelect={(key) => setSelected(key)}
        renderItem={(file) => (
          <div class={styles.file}>
            <Glyph name="file-text" />
            <span class={styles.name}>{file.name}</span>
            <span class={styles.size}>{file.sizeKb} KB</span>
          </div>
        )}
      />
    </div>
  );
};
