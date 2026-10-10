import { type Accessor, createSignal, onCleanup } from 'solid-js';

export const createRestart = (): { mounted: Accessor<boolean>; restart: () => void } => {
  const [mounted, setMounted] = createSignal(true);
  let frame: number | undefined;

  const restart = () => {
    window.cancelAnimationFrame(frame ?? 0);
    setMounted(false);
    frame = window.requestAnimationFrame(() => setMounted(true));
  };

  onCleanup(() => window.cancelAnimationFrame(frame ?? 0));
  return { mounted, restart };
};
