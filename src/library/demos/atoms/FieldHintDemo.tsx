import { Button, Control, FieldHint, FieldLabel, Stack, Text } from '@jankrajewskiit/ui';
import { createSignal, createUniqueId, Show } from 'solid-js';

export const FieldHintDemo = () => {
  const id = createUniqueId();
  const hintId = `${id}-hint`;
  const [value, setValue] = createSignal('');
  const [submitted, setSubmitted] = createSignal(false);
  const invalid = () => submitted() && value().trim().length < 3;

  return (
    <Stack gap={3}>
      <Text variant="body-sm" tone="secondary">
        A standalone label and hint can compose a control without the Field wrapper.
      </Text>
      <Stack gap={2}>
        {/* eslint-disable-next-line solid/no-react-specific-props -- FieldLabel requires htmlFor to render an associated label. */}
        <FieldLabel htmlFor={id} required>
          Project name
        </FieldLabel>
        <Control invalid={invalid()}>
          <input
            class="vui-control__input"
            id={id}
            value={value()}
            required
            aria-invalid={invalid()}
            aria-describedby={hintId}
            onInput={(event) => setValue(event.currentTarget.value)}
          />
        </Control>
        <FieldHint id={hintId} lane error={invalid()}>
          <Show when={invalid()} fallback="Use at least three characters.">
            Project name is too short.
          </Show>
        </FieldHint>
      </Stack>
      <Stack direction="row" gap={2} wrap>
        <Button size="sm" onClick={() => setSubmitted(true)}>
          Check name
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => {
            setValue('');
            setSubmitted(false);
          }}
        >
          Reset
        </Button>
      </Stack>
      <FieldHint>Default hint keeps its natural height.</FieldHint>
      <FieldHint error>Error hint uses the error appearance.</FieldHint>
    </Stack>
  );
};
