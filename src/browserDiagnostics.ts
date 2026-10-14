import { createBrowserDiagnostics } from '@jankrajewskiit/configs/browser';

export const browserDiagnostics = createBrowserDiagnostics({ app: 'velvet-demo', version: __VELVET_APP_VERSION__ });

export const reportAsyncError = (_error: unknown): void => browserDiagnostics.reportError('async');
