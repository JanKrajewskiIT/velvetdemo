export const DIFF_FILENAME = 'useDebouncedValue.ts';

export const DIFF_OLD_TEXT = `import { createSignal, onCleanup } from 'solid-js';

export const useDebouncedValue = (value: () => string, delay: number) => {
  const [debounced, setDebounced] = createSignal(value());
  let timer: number | undefined;

  const update = () => {
    timer = window.setTimeout(() => setDebounced(value()), delay);
  };

  update();
  return debounced;
};

export const DEFAULT_DELAY = 200;
`;

export const DIFF_NEW_TEXT = `import { createEffect, createSignal, onCleanup } from 'solid-js';

export const DEFAULT_DELAY = 250;

export const useDebouncedValue = (value: () => string, delay = DEFAULT_DELAY) => {
  const [debounced, setDebounced] = createSignal(value());

  createEffect(() => {
    const next = value();
    const timer = window.setTimeout(() => setDebounced(next), delay);
    onCleanup(() => window.clearTimeout(timer));
  });

  return debounced;
};
`;
