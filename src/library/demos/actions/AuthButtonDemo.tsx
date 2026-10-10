import { AuthButton } from '@jankrajewskiit/ui';
import { createSignal, onCleanup, Show } from 'solid-js';

import styles from './AuthButtonDemo.module.css';

const SIGN_IN_DELAY_MS = 900;

export const AuthButtonDemo = () => {
  const [signedIn, setSignedIn] = createSignal(false);
  let timer: ReturnType<typeof setTimeout> | undefined;
  let settle: (() => void) | undefined;

  onCleanup(() => {
    clearTimeout(timer);
    settle?.();
  });

  const toggleSession = () =>
    new Promise<void>((resolve) => {
      settle = resolve;
      timer = setTimeout(() => {
        setSignedIn((current) => !current);
        settle = undefined;
        resolve();
      }, SIGN_IN_DELAY_MS);
    });

  return (
    <div class={styles.root}>
      <AuthButton signedIn={signedIn()} onSignIn={toggleSession} onSignOut={toggleSession} />
      <p class={styles.status} aria-live="polite">
        <Show when={signedIn()} fallback="Signed out">
          Signed in as anna@velvet.example
        </Show>
      </p>
    </div>
  );
};
