import '@jankrajewskiit/ui/styles';
import '@jankrajewskiit/data/styles';
import './styles/page.css';

import { mountVelvetApp } from '@jankrajewskiit/ui';

import { App } from './App';
import { browserDiagnostics } from './browserDiagnostics';
import { AppRuntime } from './components/AppRuntime';
import { resolveInitialLocale } from './i18n/initialLocale';
import { messages } from './i18n/messages';

mountVelvetApp({
  root: 'root',
  messages,
  onError: () => browserDiagnostics.reportError(),
  initialLocale: resolveInitialLocale(),
  app: () => (
    <AppRuntime>
      <App />
    </AppRuntime>
  ),
}).catch(() => {
  browserDiagnostics.reportError('bootstrap');
});
