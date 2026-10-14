import { type RowKey, VirtualList } from '@jankrajewskiit/data';
import { useI18n } from '@jankrajewskiit/i18n';
import { Button, Glyph, Segmented, SegmentedItem } from '@jankrajewskiit/ui';
import { createSignal, For, Show } from 'solid-js';

import styles from './VirtualListDemo.module.css';

interface ExportFile {
  id: number;
  name: string;
  sizeKb: number;
}

const INITIAL_FILE_COUNT = 20_000;
const PAGE_SIZE = 20;
const MAX_FILE_COUNT = INITIAL_FILE_COUNT + PAGE_SIZE * 2;
const SIZE_SPREAD = 900;
const SIZE_STRIDE = 37;

const INTERACTIONS = [
  { value: 'list', key: 'list' },
  { value: 'listbox', key: 'listbox' },
  { value: 'grid', key: 'grid' },
] as const;

type Interaction = (typeof INTERACTIONS)[number]['value'];

const makeFiles = (start: number, count: number): ExportFile[] =>
  Array.from({ length: count }, (_, index) => {
    const id = start + index + 1;
    return {
      id,
      name: `export-${String(id).padStart(5, '0')}.csv`,
      sizeKb: ((id * SIZE_STRIDE) % SIZE_SPREAD) + 24,
    };
  });

const waitForLoad = (signal: AbortSignal): Promise<void> =>
  new Promise<void>((resolve, reject) => {
    const onAbort = () => {
      clearTimeout(timer);
      signal.removeEventListener('abort', onAbort);
      reject(new DOMException('Aborted', 'AbortError'));
    };
    const timer = globalThis.setTimeout(() => {
      signal.removeEventListener('abort', onAbort);
      resolve();
    }, 400);
    signal.addEventListener('abort', onAbort, { once: true });
    if (signal.aborted) onAbort();
  });

export const VirtualListDemo = () => {
  const { ts } = useI18n();
  const [files, setFiles] = createSignal(makeFiles(0, INITIAL_FILE_COUNT));
  const [selected, setSelected] = createSignal<RowKey[]>([1]);
  const [interaction, setInteraction] = createSignal<Interaction>('listbox');
  const [loading, setLoading] = createSignal(false);
  const [failNextLoad, setFailNextLoad] = createSignal(false);
  const [loadMessage, setLoadMessage] = createSignal('');
  const [datasetKey, setDatasetKey] = createSignal(0);

  const loadMore = async (signal: AbortSignal) => {
    setLoading(true);
    try {
      await waitForLoad(signal);
      if (failNextLoad()) {
        setFailNextLoad(false);
        throw new Error(ts('library.data.virtualList.loadFailed'));
      }
      setFiles((current) => {
        const nextCount = Math.min(PAGE_SIZE, MAX_FILE_COUNT - current.length);
        return [...current, ...makeFiles(current.length, nextCount)];
      });
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setFiles(makeFiles(0, INITIAL_FILE_COUNT));
    setSelected([1]);
    setLoadMessage('');
    setFailNextLoad(false);
    setDatasetKey((value) => value + 1);
  };

  return (
    <div class={styles.root}>
      <div class={styles.toolbar}>
        <Segmented size="sm" role="group" aria-label={ts('library.data.virtualList.interaction')}>
          <For each={INTERACTIONS}>
            {(item) => (
              <SegmentedItem
                selected={interaction() === item.value}
                onClick={() => {
                  setInteraction(item.value);
                  setSelected([]);
                }}
              >
                {ts(`library.data.virtualList.${item.key}`)}
              </SegmentedItem>
            )}
          </For>
        </Segmented>
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={failNextLoad()}
          onClick={() => setFailNextLoad((value) => !value)}
        >
          {ts('library.data.virtualList.failNextLoad')}
        </Button>
        <Button size="sm" variant="secondary" onClick={reset}>
          {ts('library.data.virtualList.reset')}
        </Button>
      </div>
      <p class={styles.caption} aria-live="polite">
        {ts('library.data.virtualList.summary', {
          count: files().length.toLocaleString('en'),
          selected: selected().length,
        })}
      </p>
      <Show when={loadMessage()}>
        {(message) => (
          <p class={styles.status} role="status" aria-live="polite">
            {message()}
          </p>
        )}
      </Show>
      <VirtualList
        items={files()}
        label={ts('library.data.virtualList.label')}
        height={320}
        itemHeight={44}
        divided
        dataKey={datasetKey()}
        interaction={interaction()}
        selectable={interaction() !== 'list'}
        selectionMode={interaction() === 'listbox' ? 'multiple' : 'single'}
        selected={selected()}
        onSelectionChange={(next) => setSelected(Array.isArray(next) ? next : [next])}
        textValue={(file) => file.name}
        loading={loading()}
        hasMore={files().length < MAX_FILE_COUNT}
        onEndReached={loadMore}
        onLoadError={(error) =>
          setLoadMessage(error instanceof Error ? error.message : ts('library.data.virtualList.loadFailed'))
        }
        onRetry={() => setLoadMessage('')}
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
