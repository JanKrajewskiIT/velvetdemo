import { Alert, Button } from '@jankrajewskiit/ui';
import { createSignal, Show } from 'solid-js';

export const DismissibleAlertDemo = () => {
  const [visible, setVisible] = createSignal(true);
  return (
    <Show
      when={visible()}
      fallback={
        <Button size="sm" variant="secondary" iconLeft="refresh" onClick={() => setVisible(true)}>
          Show dismissed alert
        </Button>
      }
    >
      <Alert
        tone="info"
        title="Trial ends soon"
        onClose={() => setVisible(false)}
        action={
          <Button size="sm" variant="secondary">
            Add payment method
          </Button>
        }
      >
        Your workspace stays active for 3 more days.
      </Alert>
    </Show>
  );
};
