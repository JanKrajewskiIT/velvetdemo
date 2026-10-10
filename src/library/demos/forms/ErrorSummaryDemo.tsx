import { ActionRow, Alert, Button, ErrorSummary, type ErrorSummaryItem, FormLayout, Input } from '@jankrajewskiit/ui';
import { createSignal, For, Show } from 'solid-js';

import { emailProblem, nameProblem, postalCodeProblem } from './validators';

const FIELDS = [
  { key: 'name', id: 'forms-summary-name', label: 'Full name', problem: nameProblem },
  { key: 'email', id: 'forms-summary-email', label: 'Email', problem: emailProblem },
  { key: 'postal', id: 'forms-summary-postal', label: 'Postal code', problem: postalCodeProblem },
] as const;

type FieldKey = (typeof FIELDS)[number]['key'];
type Values = Record<FieldKey, string>;

const EMPTY_VALUES: Values = { name: '', email: '', postal: '' };

export const ErrorSummaryDemo = () => {
  const [values, setValues] = createSignal<Values>(EMPTY_VALUES);
  const [errors, setErrors] = createSignal<ErrorSummaryItem[]>([]);
  const [accepted, setAccepted] = createSignal(false);

  const setValue = (key: FieldKey, value: string) => setValues({ ...values(), [key]: value });
  const messageFor = (id: string) => errors().find((error) => error.id === id)?.message;

  const submit = () => {
    const found = FIELDS.flatMap((field) => {
      const message = field.problem(values()[field.key]);
      return message ? [{ id: field.id, message }] : [];
    });
    setErrors(found);
    setAccepted(found.length === 0);
  };

  const reset = () => {
    setValues(EMPTY_VALUES);
    setErrors([]);
    setAccepted(false);
  };

  return (
    <FormLayout onSubmit={submit}>
      <ErrorSummary errors={errors()} />
      <Show when={accepted()}>
        <Alert tone="success" title="Details accepted">
          Every field passed validation.
        </Alert>
      </Show>
      <For each={FIELDS}>
        {(field) => (
          <Input
            id={field.id}
            label={field.label}
            value={values()[field.key]}
            onInput={(event) => setValue(field.key, event.currentTarget.value)}
            error={messageFor(field.id)}
            reserveHint
          />
        )}
      </For>
      <ActionRow>
        <Button variant="secondary" onClick={reset}>
          Clear
        </Button>
        <Button type="submit">Submit</Button>
      </ActionRow>
    </FormLayout>
  );
};
