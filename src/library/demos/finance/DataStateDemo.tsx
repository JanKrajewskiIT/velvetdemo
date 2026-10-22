import { useI18n } from '@jankrajewskiit/i18n';
import { Button, DataState, Stack } from '@jankrajewskiit/ui';
import { createSignal, Show } from 'solid-js';

export const DataStateDemo = () => {
  const { ts } = useI18n();
  const [restored, setRestored] = createSignal(false);
  return (
    <Stack>
      <Stack direction="row" wrap>
        <DataState state="fresh" source={ts('library.finance.controls.source')} />
        <DataState state="delayed" asOf={ts('library.finance.controls.asOf')} />
        <DataState state="stale" />
        <DataState state="empty" />
      </Stack>
      <DataState state="partial" variant="block" detail={ts('library.finance.controls.partial')} />
      <Show
        when={restored()}
        fallback={
          <DataState
            state="unavailable"
            variant="block"
            detail={ts('library.finance.controls.unavailable')}
            action={
              <Button size="sm" variant="secondary" onClick={() => setRestored(true)}>
                {ts('library.finance.controls.retry')}
              </Button>
            }
          />
        }
      >
        <DataState state="fresh" variant="block" source={ts('library.finance.controls.source')} />
      </Show>
    </Stack>
  );
};
