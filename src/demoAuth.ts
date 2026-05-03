import type { OidcAuthConfig } from '@jankrajewskiit/auth';
import { setAuthUserManagerFactory } from '@jankrajewskiit/auth';
import type { User, UserManager } from 'oidc-client-ts';

const demoAccessToken = 'demo-token';

const demoUser = {
  access_token: demoAccessToken,
  expired: false,
  profile: {
    email: 'demo@velvet.local',
    family_name: 'User',
    given_name: 'Demo',
    name: 'Demo User',
    preferred_username: 'demo',
    sub: 'velvet-demo-user',
  },
  session_state: null,
  token_type: 'Bearer',
} as unknown as User;

const noopUnsubscribe = () => undefined;

const demoAuthEvents = {
  addAccessTokenExpired: () => noopUnsubscribe,
  addSilentRenewError: () => noopUnsubscribe,
  addUserLoaded: () => noopUnsubscribe,
  addUserUnloaded: () => noopUnsubscribe,
  removeAccessTokenExpired: () => undefined,
  removeSilentRenewError: () => undefined,
  removeUserLoaded: () => undefined,
  removeUserUnloaded: () => undefined,
};

setAuthUserManagerFactory(
  () =>
    ({
      events: demoAuthEvents,
      getUser: () => Promise.resolve(demoUser),
      signinRedirect: () => Promise.resolve(),
      signinRedirectCallback: () => Promise.resolve(demoUser),
      signinSilent: () => Promise.resolve(demoUser),
      signoutRedirect: () => Promise.resolve(),
    }) as unknown as UserManager,
);

export const demoAuthConfig: OidcAuthConfig = {
  appUrl: typeof window === 'undefined' ? 'http://localhost' : window.location.origin,
  authority: 'https://auth.velvet-demo.local',
  clientId: 'velvet-demo',
};
