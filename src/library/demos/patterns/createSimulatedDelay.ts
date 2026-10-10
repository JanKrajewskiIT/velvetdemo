import { onCleanup } from 'solid-js';

export const createSimulatedDelay = (ms: number): (() => Promise<void>) => {
  const pending = new Map<number, (reason: DOMException) => void>();

  onCleanup(() => {
    pending.forEach((reject, id) => {
      window.clearTimeout(id);
      reject(new DOMException('Simulated request cancelled', 'AbortError'));
    });
    pending.clear();
  });

  return () =>
    new Promise<void>((resolve, reject) => {
      const id = window.setTimeout(() => {
        pending.delete(id);
        resolve();
      }, ms);
      pending.set(id, reject);
    });
};
