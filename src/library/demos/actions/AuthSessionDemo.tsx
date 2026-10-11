import { useI18n } from '@jankrajewskiit/i18n';
import { AuthActionButton, AuthButton, Checkbox, useAuth } from '@jankrajewskiit/ui';
import { createSignal, Show } from 'solid-js';

import styles from './AuthButtonDemo.module.css';

interface AuthSessionDemoProps {
  onFailureChange: (failure: boolean) => void;
}

export const AuthSessionDemo = (props: AuthSessionDemoProps) => {
  const { ts } = useI18n();
  const auth = useAuth();
  const [failure, setFailure] = createSignal(false);
  const changeFailure = (next: boolean) => {
    setFailure(next);
    props.onFailureChange(next);
  };

  return (
    <div class={styles.root}>
      <div class={styles.actions}>
        <AuthButton returnUrl="/" />
        <AuthButton returnUrl="/" variant="secondary" />
        <AuthButton returnUrl="/" size="sm" variant="soft" />
        <AuthActionButton returnUrl="/" />
        <AuthButton disabled returnUrl="/" />
      </div>
      <Checkbox
        checked={failure()}
        onChange={(event) => changeFailure(event.currentTarget.checked)}
        disabled={auth.isAuthenticated()}
        label={ts('library.actions.auth.failure')}
      />
      <p class={styles.status} role="status">
        <Show when={!auth.isLoading()} fallback={ts('library.actions.auth.loading')}>
          <Show when={auth.isAuthenticated()} fallback={ts('library.actions.auth.signedOut')}>
            {ts('library.actions.auth.signedIn', { email: auth.email() })}
          </Show>
        </Show>
        <Show when={auth.error()}> {ts('library.actions.auth.failed')}</Show>
      </p>
    </div>
  );
};
