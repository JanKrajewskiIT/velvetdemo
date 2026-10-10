import { useI18n } from '@jankrajewskiit/i18n';

import type { LibraryGroup } from './types';

export interface LibraryText {
  groupTitle: (group: LibraryGroup) => string;
  groupBlurb: (group: LibraryGroup) => string;
  specimenName: (group: LibraryGroup, specimenId: string) => string;
  specimenSubtitle: (group: LibraryGroup, specimenId: string) => string;
}

export const useLibraryText = (): LibraryText => {
  const { t } = useI18n();

  return {
    groupTitle: (group) => t(`library.${group.slug}.title`),
    groupBlurb: (group) => t(`library.${group.slug}.blurb`),
    specimenName: (group, specimenId) => t(`library.${group.slug}.specimens.${specimenId}.name`),
    specimenSubtitle: (group, specimenId) => t(`library.${group.slug}.specimens.${specimenId}.subtitle`),
  };
};
