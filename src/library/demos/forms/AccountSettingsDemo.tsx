import {
  ActionRow,
  Alert,
  Button,
  FormGrid,
  FormLayout,
  FormSection,
  Input,
  Select,
  Switch,
  Text,
} from '@jankrajewskiit/ui';
import { createSignal, onCleanup, Show } from 'solid-js';

import styles from './AccountSettingsDemo.module.css';
import { emailProblem, nameProblem } from './validators';

const SAVE_DELAY_MS = 1100;
const LANGUAGES = ['English', 'Polski', 'Deutsch'];
const TIME_ZONES = ['Europe/Warsaw', 'Europe/London', 'America/New_York'];

type SaveStatus = 'idle' | 'saving' | 'failed' | 'saved';

export const AccountSettingsDemo = () => {
  const [status, setStatus] = createSignal<SaveStatus>('idle');
  const [email, setEmail] = createSignal('anna.kowalska@velvet.example');
  const [attempted, setAttempted] = createSignal(false);
  let attempts = 0;
  let timer: ReturnType<typeof setTimeout> | undefined;

  onCleanup(() => clearTimeout(timer));

  const submit = () => {
    if (status() === 'saving') return;
    setAttempted(true);
    if (emailProblem(email())) return;
    attempts += 1;
    setStatus('saving');
    timer = setTimeout(() => setStatus(attempts === 1 ? 'failed' : 'saved'), SAVE_DELAY_MS);
  };

  return (
    <FormLayout onSubmit={submit}>
      <Show when={status() === 'failed'}>
        <Alert tone="danger" title="Changes were not saved">
          The server did not respond. Save again to retry.
        </Alert>
      </Show>
      <FormSection title="Profile" description="How you appear to teammates and in notifications.">
        <FormGrid columns={2}>
          <Input label="Display name" defaultValue="Anna Kowalska" validate={nameProblem} />
          <Input
            label="Email"
            type="email"
            value={email()}
            onInput={(event) => setEmail(event.currentTarget.value)}
            validate={emailProblem}
            error={attempted() ? emailProblem(email()) : undefined}
          />
          <Select label="Language" options={LANGUAGES} defaultValue="English" />
          <Select label="Time zone" options={TIME_ZONES} defaultValue="Europe/Warsaw" />
        </FormGrid>
      </FormSection>
      <FormSection divider title="Notifications" description="Sent to the email address above.">
        <div class={styles.switches}>
          <Switch label="Product updates" description="New features and release notes" checked />
          <Switch label="Weekly digest" description="A summary of activity every Monday morning" />
        </div>
      </FormSection>
      <ActionRow
        divider
        start={
          <Text variant="caption" tone="secondary" role="status">
            <Show when={status() === 'saved'}>All changes saved</Show>
          </Text>
        }
      >
        <Button type="submit" loading={status() === 'saving'}>
          Save changes
        </Button>
      </ActionRow>
    </FormLayout>
  );
};
