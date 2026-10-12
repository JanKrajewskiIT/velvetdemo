import { velvetDataMessages } from '@jankrajewskiit/data';
import type { DictionaryNode, Locale } from '@jankrajewskiit/i18n';

import { libraryEn, libraryPl } from './library';
import { showcaseEn, showcasePl } from './showcase';

export const messages: Partial<Record<Locale, readonly DictionaryNode[]>> = {
  en: [velvetDataMessages.en, showcaseEn, libraryEn],
  pl: [velvetDataMessages.pl, showcasePl, libraryPl],
};

export type AppDictionary = typeof showcaseEn & typeof libraryEn;
