import { isSupportedLocale, type Locale } from '@jankrajewskiit/i18n';
import { LOCALE_STORAGE_KEY } from '@jankrajewskiit/ui';

const DEFAULT_LOCALE: Locale = 'en';

const readStoredLocale = (): string | null => {
  try {
    return localStorage.getItem(LOCALE_STORAGE_KEY);
  } catch {
    return null;
  }
};

export const resolveInitialLocale = (): Locale => {
  const stored = readStoredLocale();
  return isSupportedLocale(stored) ? stored : DEFAULT_LOCALE;
};
