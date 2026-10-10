import { AuthActionButton, AuthButton, Checkbox, useAuth } from '@jankrajewskiit/ui';
import { createSignal, Show } from 'solid-js';

import styles from './AuthButtonDemo.module.css';

interface AuthSessionDemoProps {
  onFailureChange: (failure: boolean) => void;
}

export const AuthSessionDemo = (props: AuthSessionDemoProps) => {
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
        <AuthButton returnUrl="/" size="sm" variant="soft" />
        <AuthActionButton returnUrl="/" />
        <AuthButton disabled returnUrl="/" />
      </div>
      <Checkbox
        checked={failure()}
        onChange={(event) => changeFailure(event.currentTarget.checked)}
        disabled={auth.isAuthenticated()}
        label="Simulate a sign-in failure"
      />
      <p class={styles.status} role="status">
        <Show when={!auth.isLoading()} fallback="Resolving the local session…">
          <Show when={auth.isAuthenticated()} fallback="Signed out. Sign in to create a local demo session.">
            Signed in as {auth.email()}.
          </Show>
        </Show>
        <Show when={auth.error()}> Sign-in failed. Turn off the failure simulation and try again.</Show>
      </p>
    </div>
  );
};
