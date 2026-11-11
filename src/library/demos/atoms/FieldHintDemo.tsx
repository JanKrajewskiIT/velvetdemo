import { useI18n } from '@jankrajewskiit/i18n';
import { Button, Control, ControlInput, FieldHint, FieldLabel, Stack, Text } from '@jankrajewskiit/ui';
import { createSignal, createUniqueId, Show } from 'solid-js';

export const FieldHintDemo = () => {
  const { ts } = useI18n();
  const id = createUniqueId();
  const hintId = `${id}-hint`;
  const [value, setValue] = createSignal('');
  const [submitted, setSubmitted] = createSignal(false);
  const invalid = () => submitted() && value().trim().length < 3;

  return (
    <Stack gap={3}>
      <Text variant="body-sm" tone="secondary">
        {ts('library.atoms.fieldHint.lead')}
      </Text>
      <Stack gap={2}>
        {/* eslint-disable-next-line solid/no-react-specific-props -- FieldLabel requires htmlFor to render an associated label. */}
        <FieldLabel htmlFor={id} required>
          {ts('library.atoms.fieldHint.projectName')}
        </FieldLabel>
        <Control invalid={invalid()}>
          <ControlInput
            id={id}
            value={value()}
            required
            aria-invalid={invalid()}
            aria-describedby={hintId}
            onInput={(event) => setValue(event.currentTarget.value)}
          />
        </Control>
        <FieldHint id={hintId} lane error={invalid()}>
          <Show when={invalid()} fallback={ts('library.atoms.fieldHint.useThreeCharacters')}>
            {ts('library.atoms.fieldHint.projectNameTooShort')}
          </Show>
        </FieldHint>
      </Stack>
      <Stack direction="row" gap={2} wrap>
        <Button size="sm" onClick={() => setSubmitted(true)}>
          {ts('library.atoms.fieldHint.checkName')}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => {
            setValue('');
            setSubmitted(false);
          }}
        >
          {ts('library.atoms.fieldHint.reset')}
        </Button>
      </Stack>
      <FieldHint>{ts('library.atoms.fieldHint.defaultHint')}</FieldHint>
      <FieldHint error>{ts('library.atoms.fieldHint.errorHint')}</FieldHint>
    </Stack>
  );
};
