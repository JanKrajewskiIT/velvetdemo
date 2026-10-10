import { type Locale, resolveInitialLocale as resolveLibraryInitialLocale } from '@jankrajewskiit/i18n';
import { LOCALE_STORAGE_KEY } from '@jankrajewskiit/ui';

export const resolveInitialLocale = (): Locale => resolveLibraryInitialLocale(undefined, LOCALE_STORAGE_KEY);
