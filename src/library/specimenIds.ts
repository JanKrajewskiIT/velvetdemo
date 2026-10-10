import { libraryEn } from '../i18n/library';
import type { LibraryGroup } from './types';

export const specimenIdsOf = (group: LibraryGroup): readonly string[] =>
  Object.keys(libraryEn.library[group.slug as keyof typeof libraryEn.library].specimens);
