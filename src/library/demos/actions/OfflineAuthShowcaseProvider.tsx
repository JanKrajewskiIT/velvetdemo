import { type JSX, onCleanup } from 'solid-js';

import { createOfflineAuthRegistry, OfflineAuthRegistryContext } from './offlineAuthRegistry';

interface OfflineAuthShowcaseProviderProps {
  children?: JSX.Element;
}

export const OfflineAuthShowcaseProvider = (props: OfflineAuthShowcaseProviderProps) => {
  const registry = createOfflineAuthRegistry();
  onCleanup(registry.dispose);
  return <OfflineAuthRegistryContext.Provider value={registry}>{props.children}</OfflineAuthRegistryContext.Provider>;
};
