import { type Accessor, createSignal, onCleanup } from 'solid-js';

export const createReplay = (holdMs: number): { playing: Accessor<boolean>; replay: () => void } => {
  const [playing, setPlaying] = createSignal(false);
  let timer: number | undefined;

  const replay = () => {
    window.clearTimeout(timer);
    setPlaying(true);
    timer = window.setTimeout(() => setPlaying(false), holdMs);
  };

  onCleanup(() => window.clearTimeout(timer));
  return { playing, replay };
};
