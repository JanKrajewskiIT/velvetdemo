import { AuthProvider } from '@jankrajewskiit/ui';

import { createOfflineAuth } from '../actions/createOfflineAuth';
import { AuthGuardSessionDemo } from './AuthGuardSessionDemo';

export const AuthGuardDemo = () => {
  const demo = createOfflineAuth('patterns-auth');
  return (
    <AuthProvider config={demo.config}>
      <AuthGuardSessionDemo onRoleChange={demo.setRole} onFailureChange={demo.setFailure} />
    </AuthProvider>
  );
};
