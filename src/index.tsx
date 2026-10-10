import '@jankrajewskiit/ui/styles';
import './styles/page.css';

import { mountVelvetApp } from '@jankrajewskiit/ui';

import { App } from './App';
import { resolveInitialLocale } from './i18n/initialLocale';
import { messages } from './i18n/messages';

mountVelvetApp({ root: 'root', messages, initialLocale: resolveInitialLocale(), app: () => <App /> }).catch(
  (error: unknown) => {
    console.error('Failed to start Velvet Demo.', error);
  },
);
