import type { GroupSlug } from '../i18n/library';
import { specimenIdsOf } from './specimenIds';
import type { Specimen } from './types';

export const loadSpecimens = async (
  slug: GroupSlug,
  sources: readonly Promise<readonly Specimen[]>[],
): Promise<readonly Specimen[]> => {
  const specimens = (await Promise.all(sources)).flat();
  const byId = new Map(specimens.map((specimen) => [specimen.id, specimen]));

  return specimenIdsOf({ slug }).map((id) => {
    const specimen = byId.get(id);
    if (!specimen) throw new Error(`Missing specimen "${id}" in catalogue group "${slug}".`);
    return specimen;
  });
};
