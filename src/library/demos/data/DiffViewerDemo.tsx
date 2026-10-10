import { type DiffMode, DiffViewer, Segmented, SegmentedItem } from '@jankrajewskiit/ui';
import { createSignal, For } from 'solid-js';

import { DIFF_FILENAME, DIFF_NEW_TEXT, DIFF_OLD_TEXT } from './diffSamples';
import styles from './DiffViewerDemo.module.css';

const MODES = [
  { id: 'unified', label: 'Unified' },
  { id: 'split', label: 'Split' },
] as const satisfies readonly { id: DiffMode; label: string }[];

export const DiffViewerDemo = () => {
  const [mode, setMode] = createSignal<DiffMode>('unified');
  return (
    <div class={styles.root}>
      <Segmented size="sm" role="group" aria-label="Diff layout" class={styles.toggle}>
        <For each={MODES}>
          {(item) => (
            <SegmentedItem selected={mode() === item.id} onClick={() => setMode(item.id)}>
              {item.label}
            </SegmentedItem>
          )}
        </For>
      </Segmented>
      <DiffViewer filename={DIFF_FILENAME} oldText={DIFF_OLD_TEXT} newText={DIFF_NEW_TEXT} mode={mode()} />
    </div>
  );
};
