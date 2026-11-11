import { useI18n } from '@jankrajewskiit/i18n';
import { type DiffMode, DiffViewer, Segmented, SegmentedItem } from '@jankrajewskiit/ui';
import { createSignal, For } from 'solid-js';

import { DIFF_FILENAME, DIFF_NEW_TEXT, DIFF_OLD_TEXT } from './diffSamples';
import styles from './DiffViewerDemo.module.css';

const MODES = [
  { id: 'unified', labelKey: 'library.data.diff.unified' },
  { id: 'split', labelKey: 'library.data.diff.split' },
] as const satisfies readonly { id: DiffMode; labelKey: string }[];

export const DiffViewerDemo = () => {
  const { ts } = useI18n();
  const [mode, setMode] = createSignal<DiffMode>('unified');
  return (
    <div class={styles.root}>
      <Segmented size="sm" role="group" aria-label={ts('library.data.diff.layout')} class={styles.toggle}>
        <For each={MODES}>
          {(item) => (
            <SegmentedItem selected={mode() === item.id} onClick={() => setMode(item.id)}>
              {ts(item.labelKey)}
            </SegmentedItem>
          )}
        </For>
      </Segmented>
      <DiffViewer filename={DIFF_FILENAME} oldText={DIFF_OLD_TEXT} newText={DIFF_NEW_TEXT} mode={mode()} />
    </div>
  );
};
