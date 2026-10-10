import { type Accessor, createSignal, onCleanup, onMount } from 'solid-js';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

export const createReducedMotion = (): Accessor<boolean> => {
  const [reduced, setReduced] = createSignal(false);
  onMount(() => {
    const query = window.matchMedia(REDUCED_MOTION_QUERY);
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener('change', sync);
    onCleanup(() => query.removeEventListener('change', sync));
  });
  return reduced;
};
