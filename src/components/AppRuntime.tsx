import { installPreloadRecovery, observeAsyncErrors, observeWebVitals } from '@jankrajewskiit/configs/browser';
import { useI18n } from '@jankrajewskiit/i18n';
import { Alert, Button } from '@jankrajewskiit/ui';
import { createSignal, type JSX, onCleanup, onMount, Show } from 'solid-js';

import { browserDiagnostics } from '../browserDiagnostics';

export const AppRuntime = (props: { children: JSX.Element }) => {
  const { ts } = useI18n();
  const [reload, setReload] = createSignal<() => boolean>();
  const [blocked, setBlocked] = createSignal(false);
  onMount(() => {
    const stopErrors = observeAsyncErrors(() => browserDiagnostics.reportError('async'));
    let active = true;
    let stopMetrics: (() => void) | undefined;
    const stopRecovery = installPreloadRecovery({
      onUpdateAvailable: (refresh) => {
        browserDiagnostics.reportError('chunk');
        setReload(() => refresh);
      },
      onBlocked: () => setBlocked(true),
    });
    void observeWebVitals(browserDiagnostics.reportMetric)
      .then((stop) => {
        if (active) stopMetrics = stop;
        else stop();
      })
      .catch(() => browserDiagnostics.reportError('bootstrap'));
    onCleanup(() => {
      active = false;
      stopRecovery();
      stopErrors();
      stopMetrics?.();
    });
  });
  return (
    <>
      <Show when={reload()}>
        <Alert
          tone="warning"
          title={ts('showcase.update.title')}
          action={<Button onClick={() => reload()?.()}>{ts('showcase.update.reload')}</Button>}
        >
          {ts(blocked() ? 'showcase.update.blocked' : 'showcase.update.description')}
        </Alert>
      </Show>
      {props.children}
    </>
  );
};
