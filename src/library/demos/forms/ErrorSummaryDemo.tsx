import { useI18n } from '@jankrajewskiit/i18n';
import { ActionRow, Alert, Button, ErrorSummary, type ErrorSummaryItem, FormLayout, Input } from '@jankrajewskiit/ui';
import { createSignal, For, Show } from 'solid-js';

import { makeProblems } from './validators';

const FIELDS = [
  {
    key: 'name',
    id: 'forms-summary-name',
    labelKey: 'library.forms.demos.errorSummary.fullName',
    problemKey: 'name',
  },
  {
    key: 'email',
    id: 'forms-summary-email',
    labelKey: 'library.forms.demos.errorSummary.email',
    problemKey: 'email',
  },
  {
    key: 'postal',
    id: 'forms-summary-postal',
    labelKey: 'library.forms.demos.errorSummary.postalCode',
    problemKey: 'postalCode',
  },
] as const;

type FieldKey = (typeof FIELDS)[number]['key'];
type Values = Record<FieldKey, string>;

const EMPTY_VALUES: Values = { name: '', email: '', postal: '' };

export const ErrorSummaryDemo = () => {
  const { ts } = useI18n();
  const problems = makeProblems(ts);
  const [values, setValues] = createSignal<Values>(EMPTY_VALUES);
  const [errors, setErrors] = createSignal<ErrorSummaryItem[]>([]);
  const [accepted, setAccepted] = createSignal(false);

  const setValue = (key: FieldKey, value: string) => setValues({ ...values(), [key]: value });
  const messageFor = (id: string) => errors().find((error) => error.id === id)?.message;

  const submit = () => {
    const found = FIELDS.flatMap((field) => {
      const message = problems[field.problemKey](values()[field.key]);
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
        <Alert tone="success" title={ts('library.forms.demos.errorSummary.acceptedTitle')}>
          {ts('library.forms.demos.errorSummary.acceptedBody')}
        </Alert>
      </Show>
      <For each={FIELDS}>
        {(field) => (
          <Input
            id={field.id}
            label={ts(field.labelKey)}
            value={values()[field.key]}
            onInput={(event) => setValue(field.key, event.currentTarget.value)}
            error={messageFor(field.id)}
            reserveHint
          />
        )}
      </For>
      <ActionRow>
        <Button variant="secondary" onClick={reset}>
          {ts('library.forms.demos.errorSummary.clear')}
        </Button>
        <Button type="submit">{ts('library.forms.demos.errorSummary.submit')}</Button>
      </ActionRow>
    </FormLayout>
  );
};
