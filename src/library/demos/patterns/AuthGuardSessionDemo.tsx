import type { UnauthorizedBehavior } from '@jankrajewskiit/ui';
import { AuthButton, AuthGuard, Checkbox, OptionSwitcher, useAuth } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './AuthGuardSessionDemo.module.css';

interface AuthGuardSessionDemoProps {
  onRoleChange: (role: string) => void;
  onFailureChange: (failure: boolean) => void;
}

const ROLES = [
  { value: 'member', label: 'Member' },
  { value: 'admin', label: 'Administrator' },
  { value: 'moderator', label: 'Moderator' },
];
const BEHAVIORS: readonly { value: UnauthorizedBehavior; label: string }[] = [
  { value: 'access-denied', label: 'Require sign-in' },
  { value: 'redirect', label: 'Sign in automatically' },
];

export const AuthGuardSessionDemo = (props: AuthGuardSessionDemoProps) => {
  const auth = useAuth();
  const [role, setRole] = createSignal('member');
  const [failure, setFailure] = createSignal(false);
  const [behavior, setBehavior] = createSignal<UnauthorizedBehavior>('access-denied');
  const selectRole = (next: string) => {
    setRole(next);
    props.onRoleChange(next);
  };
  const changeFailure = (next: boolean) => {
    setFailure(next);
    props.onFailureChange(next);
  };
  const selectBehavior = (next: string) => {
    const selected = BEHAVIORS.find((option) => option.value === next);
    if (selected) setBehavior(selected.value);
  };

  return (
    <div class={styles.root}>
      <div class={styles.toolbar}>
        <AuthButton returnUrl="/" size="sm" />
        <OptionSwitcher options={ROLES} value={role()} onValueChange={selectRole} label="Demo session role" size="sm" />
      </div>
      <OptionSwitcher
        options={BEHAVIORS}
        value={behavior()}
        onValueChange={selectBehavior}
        label="Unauthenticated session behavior"
        size="sm"
      />
      <Checkbox
        checked={failure()}
        onChange={(event) => changeFailure(event.currentTarget.checked)}
        disabled={auth.isAuthenticated()}
        label="Simulate a sign-in failure"
      />
      <p class={styles.caption}>Sign in, then choose Administrator to reveal the protected content.</p>
      <div class={styles.stage}>
        <AuthGuard
          roles="admin"
          unauthorizedBehavior={behavior()}
          returnUrl="/"
          onGoHome={() => selectRole('admin')}
          goHomeLabel="Switch to administrator"
        >
          <div class={styles.content}>
            <strong>Workspace administration</strong>
            <p>This content is visible to the local administrator session.</p>
            <p class={styles.caption}>The session and role changes stay inside this offline showcase.</p>
          </div>
        </AuthGuard>
      </div>
    </div>
  );
};
