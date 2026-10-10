import type { AuthContextValue, AuthUserManager, OidcAuthConfig } from '@jankrajewskiit/auth';
import { onCleanup, useContext } from 'solid-js';

import { createSimulatedDelay } from '../patterns/createSimulatedDelay';
import { OfflineAuthRegistryContext } from './offlineAuthRegistry';

type DemoUser = NonNullable<ReturnType<AuthContextValue['user']>>;
type UserLoaded = Parameters<AuthUserManager['events']['addUserLoaded']>[0];
type UserUnloaded = Parameters<AuthUserManager['events']['addUserUnloaded']>[0];
type RenewError = Parameters<AuthUserManager['events']['addSilentRenewError']>[0];
type AccessExpired = Parameters<AuthUserManager['events']['addAccessTokenExpired']>[0];

type OfflineAuthDemoId = 'actions-auth' | 'patterns-auth';

const DEMO_CONFIG = {
  authority: 'https://auth.velvet.example',
  appUrl: 'https://velvet.example/showcase',
};

const createDemoEvent = <Callback extends (...args: never[]) => void>() => {
  const callbacks = new Set<Callback>();
  return {
    add: (callback: Callback) => {
      callbacks.add(callback);
    },
    remove: (callback: Callback) => {
      callbacks.delete(callback);
    },
    callbacks,
  };
};

const createDemoUser = (role: string, config: OidcAuthConfig): DemoUser => {
  const issuedAt = Math.floor(Date.now() / 1000);
  const payload = btoa(JSON.stringify({ realm_access: { roles: [role] } }))
    .replaceAll('+', '-')
    .replaceAll('/', '_')
    .replaceAll('=', '');
  return {
    session_state: null,
    access_token: `demo.${payload}.unsigned`,
    token_type: 'Demo',
    profile: {
      iss: config.authority,
      aud: config.clientId,
      sub: 'showcase-user',
      exp: issuedAt + 3600,
      iat: issuedAt,
      given_name: 'Anna',
      family_name: 'Kowalska',
      email: 'anna@velvet.example',
      preferred_username: 'anna',
    },
    state: undefined,
    expires_in: undefined,
    expired: false,
    scopes: [],
    toStorageString: () => {
      throw new Error('The offline showcase session cannot be persisted.');
    },
  };
};

export const createOfflineAuth = (demoId: OfflineAuthDemoId) => {
  const registry = useContext(OfflineAuthRegistryContext);
  if (!registry) throw new Error('Offline auth demos require OfflineAuthShowcaseProvider.');
  const config: OidcAuthConfig = {
    ...DEMO_CONFIG,
    clientId: demoId,
    returnUrlStorageKey: `velvet-showcase:${demoId}:return-url`,
  };
  const delay = createSimulatedDelay(700);
  const loaded = createDemoEvent<UserLoaded>();
  const unloaded = createDemoEvent<UserUnloaded>();
  const renewError = createDemoEvent<RenewError>();
  const expired = createDemoEvent<AccessExpired>();
  let user: DemoUser | null = null;
  let role = 'member';
  let failSignIn = false;

  const publishUser = () => {
    const current = user;
    if (current) loaded.callbacks.forEach((callback) => callback(current));
    else unloaded.callbacks.forEach((callback) => callback());
  };
  const signIn = async () => {
    await delay();
    if (failSignIn) throw new Error('Offline showcase sign-in failed.');
    user = createDemoUser(role, config);
    publishUser();
  };
  const manager: AuthUserManager = {
    events: {
      addUserLoaded: loaded.add,
      removeUserLoaded: loaded.remove,
      addUserUnloaded: unloaded.add,
      removeUserUnloaded: unloaded.remove,
      addSilentRenewError: renewError.add,
      removeSilentRenewError: renewError.remove,
      addAccessTokenExpired: expired.add,
      removeAccessTokenExpired: expired.remove,
    },
    getUser: () => Promise.resolve(user),
    signinRedirect: signIn,
    signinRedirectCallback: () => Promise.reject(new Error('The offline showcase does not use redirects.')),
    signinSilent: () => Promise.resolve(user),
    signoutRedirect: async () => {
      await delay();
      user = null;
      publishUser();
    },
  };

  const unregister = registry.register(config, manager);
  onCleanup(() => {
    unregister();
    loaded.callbacks.clear();
    unloaded.callbacks.clear();
    renewError.callbacks.clear();
    expired.callbacks.clear();
  });

  return {
    config,
    setFailure: (failure: boolean) => {
      failSignIn = failure;
    },
    setRole: (next: string) => {
      role = next;
      if (user) {
        user = createDemoUser(role, config);
        publishUser();
      }
    },
  };
};
