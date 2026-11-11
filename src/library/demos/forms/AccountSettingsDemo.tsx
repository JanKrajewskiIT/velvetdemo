import { useI18n } from '@jankrajewskiit/i18n';
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
import { makeProblems } from './validators';

const SAVE_DELAY_MS = 1100;
const LANGUAGES = ['English', 'Polski', 'Deutsch'];
const TIME_ZONES = ['Europe/Warsaw', 'Europe/London', 'America/New_York'];

type SaveStatus = 'idle' | 'saving' | 'failed' | 'saved';

export const AccountSettingsDemo = () => {
  const { ts } = useI18n();
  const problems = makeProblems(ts);
  const [status, setStatus] = createSignal<SaveStatus>('idle');
  const [email, setEmail] = createSignal('anna.kowalska@velvet.example');
  const [attempted, setAttempted] = createSignal(false);
  let attempts = 0;
  let timer: ReturnType<typeof setTimeout> | undefined;

  onCleanup(() => clearTimeout(timer));

  const submit = () => {
    if (status() === 'saving') return;
    setAttempted(true);
    if (problems.email(email())) return;
    attempts += 1;
    setStatus('saving');
    timer = setTimeout(() => setStatus(attempts === 1 ? 'failed' : 'saved'), SAVE_DELAY_MS);
  };

  return (
    <FormLayout onSubmit={submit}>
      <Show when={status() === 'failed'}>
        <Alert tone="danger" title={ts('library.forms.demos.accountSettings.failedTitle')}>
          {ts('library.forms.demos.accountSettings.failedBody')}
        </Alert>
      </Show>
      <FormSection
        title={ts('library.forms.demos.accountSettings.profileTitle')}
        description={ts('library.forms.demos.accountSettings.profileDescription')}
      >
        <FormGrid columns={2}>
          <Input
            label={ts('library.forms.demos.accountSettings.displayName')}
            defaultValue="Anna Kowalska"
            validate={problems.name}
          />
          <Input
            label={ts('library.forms.demos.accountSettings.email')}
            type="email"
            value={email()}
            onInput={(event) => setEmail(event.currentTarget.value)}
            validate={problems.email}
            error={attempted() ? problems.email(email()) : undefined}
          />
          <Select
            label={ts('library.forms.demos.accountSettings.language')}
            options={LANGUAGES}
            defaultValue="English"
          />
          <Select
            label={ts('library.forms.demos.accountSettings.timeZone')}
            options={TIME_ZONES}
            defaultValue="Europe/Warsaw"
          />
        </FormGrid>
      </FormSection>
      <FormSection
        divider
        title={ts('library.forms.demos.accountSettings.notificationsTitle')}
        description={ts('library.forms.demos.accountSettings.notificationsDescription')}
      >
        <div class={styles.switches}>
          <Switch
            label={ts('library.forms.demos.accountSettings.productUpdates')}
            description={ts('library.forms.demos.accountSettings.productUpdatesDescription')}
            checked
          />
          <Switch
            label={ts('library.forms.demos.accountSettings.weeklyDigest')}
            description={ts('library.forms.demos.accountSettings.weeklyDigestDescription')}
          />
        </div>
      </FormSection>
      <ActionRow
        divider
        start={
          <Text variant="caption" tone="secondary" role="status">
            <Show when={status() === 'saved'}>{ts('library.forms.demos.accountSettings.saved')}</Show>
          </Text>
        }
      >
        <Button type="submit" loading={status() === 'saving'}>
          {ts('library.forms.demos.accountSettings.save')}
        </Button>
      </ActionRow>
    </FormLayout>
  );
};
