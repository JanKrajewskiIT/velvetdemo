import { useI18n } from '@jankrajewskiit/i18n';
import type { UnauthorizedBehavior } from '@jankrajewskiit/ui';
import { AuthButton, AuthGuard, Checkbox, OptionSwitcher, useAuth } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './AuthGuardSessionDemo.module.css';

interface AuthGuardSessionDemoProps {
  onRoleChange: (role: string) => void;
  onFailureChange: (failure: boolean) => void;
}

export const AuthGuardSessionDemo = (props: AuthGuardSessionDemoProps) => {
  const { ts } = useI18n();
  const auth = useAuth();
  const roles = [
    { value: 'member', label: ts('library.patterns.authGuard.roleMember') },
    { value: 'admin', label: ts('library.patterns.authGuard.roleAdministrator') },
    { value: 'moderator', label: ts('library.patterns.authGuard.roleModerator') },
  ];
  const behaviors: readonly { value: UnauthorizedBehavior; label: string }[] = [
    { value: 'access-denied', label: ts('library.patterns.authGuard.behaviorDeny') },
    { value: 'redirect', label: ts('library.patterns.authGuard.behaviorRedirect') },
  ];
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
    const selected = behaviors.find((option) => option.value === next);
    if (selected) setBehavior(selected.value);
  };

  return (
    <div class={styles.root}>
      <div class={styles.toolbar}>
        <AuthButton returnUrl="/" size="sm" />
        <OptionSwitcher
          options={roles}
          value={role()}
          onValueChange={selectRole}
          label={ts('library.patterns.authGuard.sessionRole')}
          size="sm"
        />
      </div>
      <OptionSwitcher
        options={behaviors}
        value={behavior()}
        onValueChange={selectBehavior}
        label={ts('library.patterns.authGuard.unauthenticatedBehavior')}
        size="sm"
      />
      <Checkbox
        checked={failure()}
        onChange={(event) => changeFailure(event.currentTarget.checked)}
        disabled={auth.isAuthenticated()}
        label={ts('library.patterns.authGuard.simulateFailure')}
      />
      <p class={styles.caption}>{ts('library.patterns.authGuard.caption')}</p>
      <div class={styles.stage}>
        <AuthGuard
          roles="admin"
          unauthorizedBehavior={behavior()}
          returnUrl="/"
          onGoHome={() => selectRole('admin')}
          goHomeLabel={ts('library.patterns.authGuard.switchToAdmin')}
        >
          <div class={styles.content}>
            <strong>{ts('library.patterns.authGuard.contentTitle')}</strong>
            <p>{ts('library.patterns.authGuard.contentBody')}</p>
            <p class={styles.caption}>{ts('library.patterns.authGuard.contentNote')}</p>
          </div>
        </AuthGuard>
      </div>
    </div>
  );
};
