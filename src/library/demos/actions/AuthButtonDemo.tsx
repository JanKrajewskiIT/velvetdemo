import { AuthProvider } from '@jankrajewskiit/ui';

import { AuthSessionDemo } from './AuthSessionDemo';
import { createOfflineAuth } from './createOfflineAuth';

export const AuthButtonDemo = () => {
  const demo = createOfflineAuth('actions-auth');

  return (
    <AuthProvider config={demo.config}>
      <AuthSessionDemo onFailureChange={demo.setFailure} />
    </AuthProvider>
  );
};
