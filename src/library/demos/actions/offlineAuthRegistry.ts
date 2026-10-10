import type { AuthUserManager, OidcAuthConfig, OidcAuthUserManagerFactory } from '@jankrajewskiit/auth';
import { setAuthUserManagerFactory } from '@jankrajewskiit/auth';
import { createContext } from 'solid-js';

interface OfflineAuthRegistration {
  authority: string;
  manager: AuthUserManager;
}

export interface OfflineAuthRegistry {
  register: (config: OidcAuthConfig, manager: AuthUserManager) => () => void;
  dispose: () => void;
}

export const OfflineAuthRegistryContext = createContext<OfflineAuthRegistry>();

export const createOfflineAuthRegistry = (): OfflineAuthRegistry => {
  const managers = new Map<string, OfflineAuthRegistration>();
  let disposed = false;
  const factory: OidcAuthUserManagerFactory = (config) => {
    const registration = managers.get(config.clientId);
    if (!registration || registration.authority !== config.authority) {
      throw new Error('No offline showcase session is registered for this client.');
    }
    return registration.manager;
  };

  // One factory serves independent showcase sessions, including when search mounts several groups together.
  setAuthUserManagerFactory(factory);

  return {
    register: (config, manager) => {
      if (disposed) throw new Error('The offline showcase provider has been disposed.');
      if (managers.has(config.clientId)) throw new Error('This offline showcase session is already mounted.');
      const registration = { authority: config.authority, manager };
      managers.set(config.clientId, registration);
      setAuthUserManagerFactory(factory);
      return () => {
        if (managers.get(config.clientId) !== registration) return;
        managers.delete(config.clientId);
        if (!disposed) setAuthUserManagerFactory(factory);
      };
    },
    dispose: () => {
      disposed = true;
      managers.clear();
      setAuthUserManagerFactory(null);
    },
  };
};
