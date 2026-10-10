import { LoadMore } from '@jankrajewskiit/ui';
import { createSignal, onCleanup } from 'solid-js';

const TOTAL = 120;
const STEP = 20;
const LOAD_DELAY_MS = 700;

export const LoadMoreDemo = () => {
  const [shown, setShown] = createSignal(STEP);
  const [loading, setLoading] = createSignal(false);
  let timer: ReturnType<typeof setTimeout> | undefined;
  onCleanup(() => clearTimeout(timer));

  const loadMore = () => {
    setLoading(true);
    timer = setTimeout(() => {
      setShown((count) => Math.min(TOTAL, count + STEP));
      setLoading(false);
    }, LOAD_DELAY_MS);
  };

  return <LoadMore shown={shown()} total={TOTAL} step={STEP} loading={loading()} onLoadMore={loadMore} />;
};
